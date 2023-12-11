import fs from 'fs'
import { yarg } from './config/plugins/args.plugin';

console.log(yarg);

const { b: numberToMultiply, l: limit, s: showMultiplicationTable } = yarg;

const header = `
========================================
              Tabla del ${numberToMultiply}
========================================

`

let message: string = "";

message += header;

for(let i = 1; i <= limit; i++) {
  message += `${numberToMultiply} x ${i} = ${numberToMultiply * i}\n`;
}

if(showMultiplicationTable) {
  console.log(message);
}

const outputPath = `./outputs`

if(!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

if(fs.existsSync(`./outputs/tabla-${numberToMultiply}.txt`)) {
  fs.unlinkSync(`${outputPath}/tabla-${numberToMultiply}.txt`);
}

fs.writeFileSync(`./outputs/tabla-${numberToMultiply}.txt`, message);