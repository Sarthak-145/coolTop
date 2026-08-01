import { getCpu } from './proc/cpu.js';
import { getProcesses } from './proc/process.js';
import parseCpuData from './parser/cpustatParser.js';

const cpuData = await getCpu();
parseCpuData(cpuData);

// console.log('CPU DATA: ', cpuData);

// const rawProcessFiles = await getProcesses();
