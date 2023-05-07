'use strict'
let imgS = [];

export function draw() {
	const imgList = ["./images/small-background.png", "./images/my spaceship.png", "./images/my rocket.png", "./images/enemy's spaceship.png", "./enemy's rocket.png"];

	imagesInit();

	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext('2d');
	ctx.drawImage(imgS[0], 0, 0);
	ctx.drawImage(imgS[1], userPositionX, userPositionY);//перемення задана в main.js

	for (let i = 0; i < rockets.length; i++) {
		ctx.drawImage(imgS[2], rockets[i].x, rockets[i].y);
	}
	for (let i = 0; i < enemies.length; i++) {
		ctx.drawImage(imgS[3], enemies[i].x, enemies[i].y);
	}
	for (let i = 0; i < enemyRockets.length; i++) {
		ctx.drawImage(imgS[4], enemyRockets[i].x, enemyRockets[i].y);
	}
	ctx.fillStyle = '#FFFF00';
	ctx.font = 'bold 30pt Arial';
	ctx.fillText(score + '', 50, 50);
	ctx.fillText(userPositionX + '' + userPositionY, 550, 50);
}

function imagesInit() {
	for (let i = 0; i <= 4; i++) {
		let tmp = new Image();
		tmp.src = imgList[i];
		imgS.push(tmp);
	}
}