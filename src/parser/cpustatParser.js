// parses data from /proc/stat
const parseCpuData = (data) => {
  const lines = data.toString().trim().split('\n');

  // for 16 core cpu
  const cpus = {};
  for (let i = 0; i < lines.length; i++) {
    // console.log(lines[i]);
    if (!lines[i].startsWith('cpu')) break;
    const line = lines[i].trim().split(/\s+/);
    const [
      name,
      user,
      nice,
      system,
      idle,
      iowait,
      irq,
      softirq,
      steal,
      guest,
      guestNice,
    ] = line;
    cpus[name] = {
      user: Number(user),
      nice: Number(nice),
      system: Number(system),
      idle: Number(idle),
      iowait: Number(iowait),
      irq: Number(irq),
      softirq: Number(softirq),
      steal: Number(steal),
      guest: Number(guest),
      guestNice: Number(guestNice),
    };
  }
  return cpus;
};

export default parseCpuData;
