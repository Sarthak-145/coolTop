import { getCpu } from './proc/cpu.js';
import parseCpuData from './parser/cpustatParser.js';
import pid_stats from './proc/Process_info/PID_STAT.js';

const cpuData = await getCpu();
parseCpuData(cpuData);

// console.log('CPU DATA: ', cpuData);

const pidData = await pid_stats();
