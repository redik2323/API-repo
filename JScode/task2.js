//зчитати файл spaces.json, знайти всі об'єкти lists і вивести на екран їхні ID та name.

import { readFileSync } from 'fs';

var listsFile = readFileSync('resultJSON/lists.json', 'utf8');

var data = JSON.parse(listsFile);

data.lists.forEach((list) => {
  console.log(`ID: ${list.id}, Name: ${list.name}`);
});