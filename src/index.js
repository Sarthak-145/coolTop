import { getCpu } from './proc/cpu.js';
import { getProcesses } from './proc/process.js';

// const cpuData = await getCpu();
// console.log('CPU DATA: ', cpuData);

const rawProcessFiles = await getProcesses();
