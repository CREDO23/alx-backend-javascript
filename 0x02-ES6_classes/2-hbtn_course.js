/* eslint-disable */
export default class HolbertonCourse {
  constructor(name, length, students) {

    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (!Number.isInteger(length)) throw new TypeError('Length must be a number');
    if (!Array.isArray(students)) throw new TypeError('Students type must be an Array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(val) {
    if (typeof val == 'string') {
      this._name = val;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(val) {
    if (typeof val == 'number') {
      this._length = val;
    } else {
      throw new TypeError('length must be a number');
    }
  }

  get name() {
    return this._name;
  }

  set students(val) {
    if (Array.isArray(val)) {
      this._students = val;
    } else {
      throw new TypeError('students type must be an Array');
    }
  }

  get students() {
    return this._students;
  }
}
