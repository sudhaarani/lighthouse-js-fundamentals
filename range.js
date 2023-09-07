//let c = 0;
function range(start, end, step) {
  let a = [];
  if (start < end && step > 0) {
    for (let i = start; i <= end; i += step) {
      a.push(i);
    }
  }
  return a;
}

console.log(range(0, 10, 2));


