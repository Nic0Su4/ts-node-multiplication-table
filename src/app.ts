import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);


// const [tsnode, app, ...args] = process.argv;


( async () => {
  await main();
  console.log("Hola despues de main");
})();


async function main() {
  
  const { b: base, l: limit, s: showTable, n: fileName, d: destination } = yarg;
  // console.log(yarg)

  ServerApp.run({ base, limit, showTable, destination, fileName });


}