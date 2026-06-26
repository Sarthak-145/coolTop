import { readFile } from 'fs/promises';

async function getCpu() {
  try {
    const stat = await readFile('/proc/stat', 'utf8');
    return stat;
  } catch (err) {
    console.log('error reading cpu stats: ', err.message);
  }
}

const cpuData = await getCpu();
console.log('CPU DATA: ', cpuData);
