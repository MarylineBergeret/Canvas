let canvas = document.getElementById("canva");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(40,40);
ctx.lineTo(40,80);
ctx.lineTo(60,100);
ctx.lineTo(90,100);
ctx.lineTo(110,80);
ctx.lineTo(110,40);
ctx.lineTo(90,60);
ctx.lineTo(60,60);
ctx.lineTo(40,40);
ctx.moveTo(60,100);
ctx.lineTo(60,130);
ctx.lineTo(40,150);
ctx.arc(30,150,10,0,2*Math.PI);
ctx.moveTo(40,150);
ctx.lineTo(60,150);
ctx.lineTo(80,130);
ctx.moveTo(60,150);
ctx.lineTo(80,150);
ctx.lineTo(100,130);
ctx.lineTo(200,130);
ctx.lineTo(200,150);
ctx.lineTo(180,130);
ctx.moveTo(200,130);
ctx.lineTo(220,150);
ctx.lineTo(220,130);
ctx.lineTo(180,80);
ctx.lineTo(110,80);
ctx.moveTo(180,80);
ctx.lineTo(200,50);
ctx.lineTo(220,50);
ctx.lineTo(240,70);
ctx.lineTo(240,90);
ctx.lineTo(220,70);
ctx.lineTo(200,70);
ctx.lineTo(190,90);
ctx.moveTo(180,80);
ctx.lineTo(190,90);
ctx.moveTo(65,75);
ctx.arc(65,75,1,0,2*Math.PI);
ctx.moveTo(85,75);
ctx.arc(85,75,1,0,2*Math.PI);
ctx.moveTo(75,88);
ctx.arc(75,88,1,0,2*Math.PI);


ctx.strokeStyle = "#4488EE";

ctx.lineWidth= 3;
ctx.stroke();

// moustaches gauches
ctx.beginPath();
ctx.moveTo(70,90);
ctx.lineTo(60,88);
ctx.moveTo(70,90);
ctx.lineTo(60,92);
ctx.moveTo(70,90);
ctx.lineTo(60,96);
//moustaches droites
ctx.moveTo(80,90);
ctx.lineTo(90,88);
ctx.moveTo(80,90);
ctx.lineTo(90,92);
ctx.moveTo(80,90);
ctx.lineTo(90,96);
// intérieur du corps
ctx.moveTo(130,100);
ctx.lineTo(120,90);
ctx.lineTo(118,92);
ctx.lineTo(115,105);
ctx.lineTo(130,125);
ctx.lineTo(145,105);
ctx.lineTo(145,95);
ctx.lineTo(140,90);
ctx.lineTo(130,100);

// titre
ctx.strokeStyle = "#FFF";
ctx.lineWidth= 1;
ctx.stroke();
ctx.font= 'bold 20px Verdana, Arial, serif';
ctx.strokeText("Mon PITIT chat", 140, 300);

ctx.lineWidth= 4;
ctx.strokeStyle = "#4B0082";
ctx.strokeRect(130, 220, 200, 100);
// Rectangle dégradé
let lineaire = ctx.createLinearGradient(25, 25, 100, 25);
lineaire.addColorStop(0,"#4C8");
lineaire.addColorStop(0.5,"#48C");
lineaire.addColorStop(1,"#A4C");
ctx.fillStyle = lineaire;
ctx.fillRect(45, 220, 75, 100);