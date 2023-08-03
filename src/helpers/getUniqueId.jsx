import { v4 as uuidv4 } from "uuid";

export default function getUniqueID() {
  let id = uuidv4();
  return id;
}
