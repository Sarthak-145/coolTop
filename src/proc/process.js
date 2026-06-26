// log stats about processes
//mainly cat /proc/pid/stat

import { readFile, readdir } from 'node:fs/promises';
import path from 'path';

const folder = '/proc';
const stat = '/status';

export async function getProcesses() {
  try {
    const files = await readdir(folder);
    for (const file of files.slice(0, 2)) {
      const finalpath = path.join(folder, file, stat);
      console.log('File path: ', finalpath);
      const content = await readFile(finalpath, 'utf8');
      console.log(content);
      console.log('End of the file');
      console.log('_________________________________________');
    }
  } catch (err) {
    console.log('Error while getting processes: ', err.message);
  }
}
