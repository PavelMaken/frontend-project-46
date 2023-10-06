import url from 'url'
import { test, expect } from '@jest/globals';
import { dirname } from 'node:path';
import fs from 'fs';
import path from 'path';
import gendiff from '../src/index.js';

const fileName = url.fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const getFixPath = (nameFile) => path.join(__dirname, '..', '__fixtures__', nameFile);
const readFile = (nameFile) => fs.readFileSync(getFixPath(nameFile), 'utf-8');

const testDefaultJSON = readFile('OutputTest1JSON.txt');
const testDefaultYML = readFile('OutputTest1YML.txt');
//const testPlain = readFile('OutputTestPlain.txt');
//const testJSON = readFile('OutputTestJson.txt');

const file1JSON = './__fixtures__/file1.json';
const file2JSON = './__fixtures__/file2.json';

const file1YML = './__fixtures__/file1.yml';
const file2YML = './__fixtures__/file2.yml';



test('json', () => {
    expect(gendiff(file1JSON , file2JSON)).toEqual(testDefaultJSON);
});

test('yml', () => {
    expect(gendiff(file1YML , file2YML)).toEqual(testDefaultYML);
});