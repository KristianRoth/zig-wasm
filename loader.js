
let add_two = null;

WebAssembly.instantiateStreaming(fetch("zig-out/bin/zig-wasm.wasm"), {
  env: {
    print: function (arg) {
      console.log(arg);
    },
  }
}).then(res => {
  console.log("WASM loaded");
  console.log(res.instance.exports);
  add_two = res.instance.exports.add_two;
});


let call_zig = () => {
  console.log(add_two);
  console.log(add_two(1, 2));
};