import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const res = [];
  const size = [19, 20, 34];

  size.forEach(s => res.push(new ClassRoom(s)));

  return res;
}
