import { getCpu } from './proc/cpu.js';
import parseCpuData from './parser/cpustatParser.js';
import pid_stats from './proc/Process_info/PID_STAT.js';

const cpus = await getCpu();
// console.log(cpus);

const pidData = await pid_stats();
