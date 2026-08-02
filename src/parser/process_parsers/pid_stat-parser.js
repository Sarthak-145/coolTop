// parse /proc/PID/stat files for all PIDs

const statParse = (data) => {
  const stat = {};
  const bracketStart = data.indexOf('(');
  const bracketEnd = data.indexOf(')');
  const name = data.slice(bracketStart + 1, bracketEnd);
  const pid = Number(data.slice(0, bracketStart - 1).trim());
  stat.pid = pid;
  stat.name = name;

  // now from endbracket
  const restData = data.slice(bracketEnd + 2).split(' ');
  stat.state = restData[0]; //field state {sleeping, working, zombie etc} #3
  stat.ppid = Number(restData[1]); //field parent id #4
  stat.utime = Number(restData[11]); //field #14 user cpu time
  stat.stime = Number(restData[12]); //field #15 kernel cpu time
  stat.priority = Number(restData[15]); //field #18 scheduling priority
  stat.nice = Number(restData[16]); //field #19 nice value
  stat.num_threads = Number(restData[17]); //field #20 thread count
  stat.starttime = Number(restData[19]); //field #22 Process start time
  stat.vsize = Number(restData[20]); //field #23 virtual memory size
  stat.rss = Number(restData[21]); //field #24 resident memory (RAM)
  stat.processor = Number(restData[36]); //field #39 last cpu core

  return stat;
};

export default statParse;
