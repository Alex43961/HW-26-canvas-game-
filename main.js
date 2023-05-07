'use strict'

import { draw } from "./js/draw.js";


const imgX = [800, 77, 20, 80, 20];
const imgY = [600, 100, 97, 80, 30];
let imgS = [];
let userPositionX = 100; userPositionX = 400;
let userStepX = 4, userStepY = 3;
let userMoveX = 0, userMoveY = 0;
let rockets = [];
let enemyRockets = [];
let enemies = [];
let score = 0, endGame = 0, tCount = 0;
