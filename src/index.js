import { readFileSync } from 'node:fs';
import _ from 'lodash';
import path from 'node:path';
import parseFormat from './parsers.js';
import getTree from './getTree.js';
import formater from './format/index.js';

const resolvePath = (filePath) => path.resolve(process.cwd(), filePath);

const getExtension = (filename) => path.extname(filename).slice(1);

const getData = (filePath) => parseFormat(readFileSync(filePath, 'utf-8'), getExtension(filePath));

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const path1 = resolvePath(filePath1);
  const path2 = resolvePath(filePath2);

  const data1 = getData(path1);
  const data2 = getData(path2);

  return formater(getTree(data1, data2), format);
};

export default gendiff;