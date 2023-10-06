import { readFileSync } from 'node:fs';
import _ from 'lodash';
import path from 'node:path';
import parseFormat from './parsers.js';

const resolvePath = (filePath) => (filePath.includes('__fixtures__')
  ? path.resolve(process.cwd(), filePath)
  : path.resolve(process.cwd(), `__fixtures__/${filePath}`));

const gendiff = (filePath1, filePath2) => {
    const path1 = resolvePath(filePath1);
    const path2 = resolvePath(filePath2)

    const file1 = readFileSync(path1, 'utf-8');
    const file2 = readFileSync(path2, 'utf-8');
    
    const formatFile1 = path.extname(path1).substring(1);
    const formatFile2 = path.extname(path2).substring(1);
  
    const data1 = parseFormat(file1, formatFile1);
    const data2 = parseFormat(file2, formatFile2);

    const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();

    const result = ['{'];
    for (const key of keys){
        if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
            result.push(` - ${key}: ${data1[key]}`)
        } else if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
            result.push(` + ${key}: ${data2[key]}`)
        } else if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) { 
            if (data1[key] === data2[key]) {
                result.push(`   ${key}: ${data2[key]}`)
            } else if (data1[key] !== data2[key]) {
                result.push(` - ${key}: ${data1[key]}`)
                result.push(` + ${key}: ${data2[key]}`)
            }
        }
    }
    result.push('}');
    return result.join('\n');
};

export default gendiff;