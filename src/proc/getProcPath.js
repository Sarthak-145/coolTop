import { readdir } from 'node:fs/promises';
import path from 'path';

const folder = '/proc';

export async function getProcPath(doc) {
  try {
    const files = await readdir(folder);
    // only files with PID
    const pids = files.filter((name) => /^\d+$/.test(name));
    return pids.map((pid) => path.join(folder, pid, doc));
  } catch (err) {
    console.log('Error while tracking files: ', err.message);
  }
}
