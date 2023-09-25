#!/usr/bin/env node 
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program 
 .version('0.1.0')
 .description('Compares two configuration files and shows a differense.')
 .option('-f, --format [type]', 'output format', 'stylish')
 .argument('<filepath1>', 'required file path to get diff')
 .argument('<filepath2>', 'required file path to get diff')
 .action((filePath1, filePath2) => {
    console.log(gendiff(filePath1, filePath2));
 });

program.parse(process.argv);    