/* eslint-disable */
export default function hasValuesFromArray(set, list) {
  let res = true;
  list.map(x => {
    if (!set.has(x)) {
      verdict = false;
    }
  });

  return res;
}
