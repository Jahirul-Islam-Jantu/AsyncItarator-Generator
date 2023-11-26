const range = {
  start: 0,
  stop: 100,
  step: 3,
};

range[Symbol.iterator] = function () {
  let current = this.start;
  const stop = this.stop;
  const step = this.step;

  return {
    next() {
      const output = {
        value: current,
        done: current > stop,
      };
      current += step;
      return output;
    },
  };
};

for (let v of range) {
  console.log(v);
}
