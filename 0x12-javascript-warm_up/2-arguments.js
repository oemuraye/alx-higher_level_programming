#!/usr/bin/node
import { argv } from 'node:process';

const count = argv.length - 2;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
