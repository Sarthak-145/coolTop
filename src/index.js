import { getCpu } from './proc/cpu.js';

const cpuData = await getCpu();
console.log('CPU DATA: ', cpuData);
