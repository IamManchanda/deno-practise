const food = Deno.args[0];
const parent = Deno.args[1];

if (food === "love" && parent === "ryan") {
  console.log("Deno is born");
} else {
  console.log("not born yet, egg needs some love");
}

setTimeout(() => {
  console.log("check");
  console.table(Deno.metrics());
}, 1000);
