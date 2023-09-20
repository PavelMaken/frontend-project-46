#!/usr/bin/env node 
import { Command } from 'commander';

const program = new Command();

program 
 .version('0.1.0')
 .description('Compares two configuration files and shows a differense.')
 .option('-f, --format [type]', 'format', 'stylish')
 .argument('<filepath1> <filepath2>')

program.parse(process.argv);