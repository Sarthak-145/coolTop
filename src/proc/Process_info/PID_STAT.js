import { readFile } from 'node:fs/promises';
import { getProcPath } from '../getProcPath.js';

// stat files of all processes
const pid_stats = async () => {
  const paths = await getProcPath('/stat');
  for (const path of paths) {
    const data = await readFile(path, 'utf-8');
    console.log(data);
  }
};

export default pid_stats;
