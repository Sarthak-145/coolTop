import { readFile } from 'fs/promises';

export async function getCpu() {
  try {
    const stat = await readFile('/proc/stat', 'utf8');
    return stat;
  } catch (err) {
    console.log('error reading cpu stats: ', err.message);
  }
}
