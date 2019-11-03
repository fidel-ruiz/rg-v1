/**
 * @method save
 * @description store the image on localStorage
 * @param {string} uuid image key reference
 * @param {string} src data:image generated
 */
export function save(uuid, src) {
  const arr = deserialize();
  arr.push({ uuid, src });
  serialize(arr);
}

/**
 * @method remove
 * @description remove an image from the localStorage
 * @param {string} uuid image key reference
 */
export function remove(uuid) {
  let arr = deserialize();
  arr = arr.filter(val => {
    return val.uuid !== uuid;
  });

  serialize(arr);
}
/**
 * @method serialize
 * @description serialize the images map and store in locaStorage
 */
export function serialize(arr) {
  localStorage.setItem('images', JSON.stringify(arr));
}

/**
 * @method deserialize
 * @description deserialize the images stored map
 */
export function deserialize() {
  if (localStorage.getItem('images') !== null) {
    return JSON.parse(localStorage.getItem('images'));
  }
  return [];
}

/**
 * @method UUID
 * @description Generates UUIDs
 */
export function UUID() {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
    c,
  ) {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
