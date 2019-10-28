var i=0;
var time = 3000;
var images=[];

images[0] = 'img/image-1.jpg';
images[1] = 'img/image-2.jpg';
images[2] = 'img/image-3.jpg';
images[3] = 'img/image-4.jpg';
images[4] = 'img/image-5.jpg';
images[5] = 'img/image-6.jpg';
images[6] = 'img/image-7.jpg';
images[7] = 'img/image-8.jpg';
images[8] = 'img/image-9.jpg';
images[9] = 'img/image-10.jpg';

function changeImage() {
	document.slide.src = images[i];
	if(i < images.length - 1) {
		i++;
	} else {
		i=0;
	}
	setTimeout("changeImage()", time);
}

window.onload = changeImage;
















