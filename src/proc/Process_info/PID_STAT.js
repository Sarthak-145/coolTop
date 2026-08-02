import { readFile } from 'node:fs/promises';
import { getProcPath } from '../getProcPath.js';
import statParse from '../../parser/process_parsers/pid_stat-parser.js';

// stat files of all processes
const pid_stats = async () => {
  const paths = await getProcPath('/stat');
  for (const path of paths) {
    const data = await readFile(path, 'utf-8');
    const StatObj = statParse(data);
  }
};

export default pid_stats;
