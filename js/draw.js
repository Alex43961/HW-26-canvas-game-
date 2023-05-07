export function draw() {
	const imgList = ["./images/small-background.png", "./images/my spaceship.png", "./images/my rocket.png", "./images/enemy's spaceship.png", "./enemy's rocket.png"];
	imagesInit();

	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext('2d');
	ctx.drawImages()
}