import Sketch from "react-p5";
import React, { useRef } from "react";

function Profile({SCALE = 1}) {
  let face = useRef(null);
  let canvas = useRef(null);
  
  var backdrop = "#FFC7E3";
  var skin = "#FFD2B3";
  var hair = "#FFC233";
  var outline = "#CF950C";
  var nose = "#F99386";
  var eye = "#64B3E3";
  var eyeOutline = "#2590D0";
  var eyeWhite = "#D6F0FF";

  const setup = (p5) => {
    const container = document.getElementById('profile-wrapper');
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    canvas = p5.createCanvas(w * SCALE, h * SCALE);
    canvas.parent(container);
    canvas.style('z-index', '-1');
    face.current = new Face(p5, w / (2 * SCALE), h / (2 * SCALE));
  };

  const windowResized = (p5) => {
    const container = document.getElementById('profile-wrapper');
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    p5.resizeCanvas(w * SCALE, h * SCALE);
    if (!face.current) {
      face.current = new Face(p5, w / (2 * SCALE), h / (2 * SCALE));
    } else {
      face.current.x = w / (2 * SCALE);
      face.current.y = h / (2 * SCALE);
    }
  };

  const draw = (p5) => {
    p5.background(backdrop);

    p5.push();
    p5.scale(SCALE);
    p5.translate((face.current.x/SCALE) * (1 - SCALE), (face.current.y/SCALE) * (1 - SCALE));

    face.current.update(
      p5.mouseX / SCALE,
      p5.mouseY / SCALE
    );
    
    face.current.show();
    p5.pop();
  };

  function Face(p5, x, y){
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.hairLen = 225;

    this.update = function (){
      let center = p5.createVector(this.x, this.y);
      let mouse = p5.createVector(p5.mouseX, p5.mouseY);
      let move = mouse.copy().sub(center);

      move.mult(0.1);
      move.limit(17);

      this.pupilMove = move.copy();
      this.pupilMove.limit(20);

      this.eyeMove = move.copy().mult(0.3);
      this.earMove = move.copy().mult(-0.2);
      this.eyebrowMove = move.copy().mult(0.5);
      this.hairMove = move.copy().mult(-0.1);
      
    };

    this.show = function () {
      p5.push();
        p5.translate(this.x, this.y);

        p5.strokeWeight(6);
        p5.stroke(outline);
        p5.fill(skin);

        // hair rear
        p5.push();
          p5.translate(this.hairMove.x, this.hairMove.y);
          p5.fill(hair);
          p5.beginShape();
          p5.vertex(-250, -45);
          p5.bezierVertex(-230, -210, -70, -240, 0, -210);
          p5.bezierVertex(70, -240, 230, -210, 250, -45);
          p5.vertex(250, this.hairLen);
          p5.vertex(200, this.hairLen);
          p5.vertex(180, this.hairLen - 35);
          p5.vertex(160, this.hairLen);
          p5.vertex(-250, this.hairLen);
          p5.vertex(-250, -45);
          p5.endShape(p5.CLOSE);
        p5.pop();

        // left ear
        p5.push();
          p5.translate(this.earMove.x, this.earMove.y);
          
          p5.translate(-235, 15);
          p5.rotate(p5.radians(-30));
          p5.ellipse(0, 0, 110, 120);
          p5.arc(0, 0, 60, 60, p5.radians(230), p5.radians(50), p5.OPEN);
        p5.pop();

        // right ear
        p5.push();
          p5.translate(this.earMove.x, this.earMove.y);
          p5.translate(235, 15);
          p5.rotate(p5.radians(30));
          p5.ellipse(0, 0, 110, 120);
          p5.arc(0, 0, 60, 60, p5.radians(-230), p5.radians(-50), p5.OPEN);
        p5.pop();

        // head
        p5.ellipse(0, 0, 450, 400);


        // eye without outline
        p5.push();
          p5.translate(this.eyeMove.x, this.eyeMove.y);

          p5.fill(eyeWhite);
          p5.noStroke();

          // left
          p5.beginShape();
            p5.vertex(-40, 30);
            p5.bezierVertex(-50, -35, -160, -60, -180, 10);
            p5.bezierVertex(-150, 90, -60, 60, -40, 30);
          p5.endShape(p5.CLOSE);

          //right
          p5.beginShape();
            p5.vertex(40, 30);
            p5.bezierVertex(50, -35, 160, -60, 180, 10);
            p5.bezierVertex(150, 90, 60, 60, 40, 30);
          p5.endShape(p5.CLOSE);
        p5.pop();


        // pupils
        p5.push();
          p5.translate(this.pupilMove.x, this.pupilMove.y);
          p5.fill(eye);
          p5.stroke(eyeOutline);
          p5.circle(-100, 10, 90); //left
          p5.circle(100, 10, 90); //right

          p5.push();
            p5.noStroke();
            p5.fill("#FFFFFF");
            p5.ellipse(-145, 0, 30, 15);
            p5.ellipse(145, 0, 30, 15);
          p5.pop();
        p5.pop();

        // eye outline
        p5.push();
          p5.translate(this.eyeMove.x, this.eyeMove.y);
          p5.noFill();
          p5.stroke(eyeOutline);

          // left
          p5.beginShape();
            p5.vertex(-40, 30);
            p5.bezierVertex(-50, -35, -160, -60, -180, 10);
          p5.endShape();

          // right
          p5.beginShape();
            p5.vertex(40, 30);
            p5.bezierVertex(50, -35, 160, -60, 180, 10);
          p5.endShape();
        p5.pop();


        // eyelids
        p5.push();
          p5.translate(this.eyeMove.x, this.eyeMove.y);
          p5.noStroke();

          // left top
          p5.beginShape();
            //stroke(hair);
            p5.vertex(-37, 30);
            p5.bezierVertex(-50, -38, -160, -63, -183, 7); // bottom
            p5.bezierVertex(-160, -110, -30, -130, -37, 30); // top
          p5.endShape();

          // left bottom
          p5.beginShape();
            p5.vertex(-183, 10);
            p5.bezierVertex(-153, 90, -63, 60, -37, 30);
            p5.bezierVertex(-60, 120, -150, 120, -183, 10);
          p5.endShape();

          // right top
          p5.beginShape();
            p5.vertex(37, 30);
            p5.bezierVertex(50, -38, 160, -63, 183, 7);
            p5.bezierVertex(160, -110, 30, -130, 37, 30); // top
          p5.endShape();

          // right bottom
          p5.beginShape();
            p5.vertex(183, 10);
            p5.bezierVertex(153, 90, 63, 60, 37, 30);
            p5.bezierVertex(60, 120, 150, 120, 183, 10);
          p5.endShape();
        p5.pop();

        // nose
        p5.push();
          p5.translate(this.eyeMove.x, this.eyeMove.y);
          p5.strokeWeight(20);
          p5.strokeJoin(p5.ROUND);
          p5.stroke(nose);
          p5.fill(nose);
          p5.triangle(-10, 80, 0, -15, 10, 80);
          p5.triangle(-15, 80, 0, 30, 15, 80);
        p5.pop();

         // cheeks
        p5.push();
          p5.translate(this.eyeMove.x, this.eyeMove.y);
          p5.fill(nose);
          p5.noStroke();
          p5.ellipse(-145, 90, 60, 30);
          p5.ellipse(145, 90, 60, 30);
        p5.pop();

        // mouth
        p5.push();
          p5.translate(this.eyeMove.x, this.eyeMove.y);
          p5.noFill();
          p5.strokeWeight(10);
          p5.stroke(nose);
          p5.arc(0, 110, 80, 30, p5.radians(20), p5.radians(160), p5.OPEN);
        p5.pop();

        // eyebrow line
        p5.push();
          p5.translate(this.eyebrowMove.x, this.eyebrowMove.y);
          
          p5.noFill();
          p5.strokeWeight(7);

          // left
          p5.beginShape();
            p5.vertex(-50, -42);
            p5.bezierVertex(-50, -42, -75, -60, -125, -50);
          p5.endShape();

          // right
          p5.beginShape();
            p5.vertex(50, -42);
            p5.bezierVertex(50, -42, 75, -60, 125, -50);
          p5.endShape();
        p5.pop();

        // hair front
        p5.push();
        p5.fill(hair);
        p5.stroke(hair);
        p5.beginShape();
          p5.vertex(220, -45);
          p5.bezierVertex(115, -10,   120, -140,   0, -160); // right
          p5.bezierVertex(-115, -140,   -120, -10,   -220, -45); // left
          p5.bezierVertex(-180, -230,   150, -275,   220, -45); // top
        p5.endShape();
        p5.pop();

        // hair outline
        p5.push();
          p5.noFill();
          p5.beginShape();
            p5.vertex(220, -45);
            p5.bezierVertex(115, -10, 120, -140, 0, -160); // right
            p5.bezierVertex(-115, -140, -120, -10, -220, -45); // left
          p5.endShape();
          p5.line(0, -210, 0, -160);
          p5.beginShape();
            p5.vertex(220, -45);
            p5.bezierVertex(115, 20, 120, -120, 0, -160);
          p5.endShape();
        p5.pop();
      p5.pop();
    };
  }

  return <Sketch setup={setup} draw={draw} windowResize={windowResized}/>
}
export default Profile;