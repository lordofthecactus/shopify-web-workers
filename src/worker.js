export function hello(name) {
  console.log("STARTING");
  if (
    typeof WorkerGlobalScope !== "undefined" &&
    self instanceof WorkerGlobalScope
  ) {
    console.log("I am in a web worker");
  } else {
    console.log("I am NOT in a web worker");
  }
  // for (let i = 0; i < 10 ** 9 * 2; i++) {
  //   if (i % 10 ** 8 === 0) console.log("running", i / 10 ** 8);
  // }
  return `I'm done, ${name}`;
}
