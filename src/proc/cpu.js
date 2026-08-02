import { readFile } from 'fs/promises';
import parseCpuData from '../parser/cpustatParser.js';

export async function getCpu() {
  try {
    const stat = await readFile('/proc/stat', 'utf8');
    const cpus = parseCpuData(stat);
    return cpus;
  } catch (err) {
    console.log('error reading cpu stats: ', err.message);
  }
}
