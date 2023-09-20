#!/usr/bin/env node 
import { Command } from 'commander';

const program = new Command();

program 
 .version('0.1.0')
 .description('Compares two configuration files and shows a differense.')
 .option('-f, --format [type]', 'format', 'stylish')
 .argument('<filepath1> <filepath2>')
 .action((filePath1, filePath2) => {
    console.log(gendiff(filePath1, filePath2, program.opts().format));
 });

program.parse(process.argv);