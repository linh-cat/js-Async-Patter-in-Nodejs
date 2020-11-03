function* generator() {
  console.log("Generator function is running!");
  let x = 5;
  yield x;

  x++;
  y = yield x;

  return x + y;
}
let gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next(4));
