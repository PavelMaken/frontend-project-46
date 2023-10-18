import url from 'url'
import { test, expect } from '@jest/globals';
import { dirname } from 'node:path';
import fs from 'fs';
import path from 'path';
import parsers from '../src/parsers';

const fileName = url.fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const getFixPath = (nameFile) => path.join(__dirname, '..', '__fixtures__', nameFile);
const readFile = (nameFile) => fs.readFileSync(getFixPath(nameFile), 'utf-8');

const testDefaultJSON = readFile('OutputTest1JSON.txt');
const testParsers = readFile('OutputTestParsers.txt');

const file1 = JSON.parse(readFile('file1.json'));
const file2 = JSON.parse(readFile('file2.json'));


test('json', () => {
    parser(file1, file2) === testDefaultJSON;
});

test('empty json', () => {
    expect(parser()).toEqual('');
});

test('test parser', () => {
    parser(file1) === testParsers;
});