status="";
objects=[];
img="";
function preload()
{
  img=loadImage("2.jpg");
}
function setup()
{
canvas=createCanvas(450,450);
canvas.center();
object_detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status  : Detecting Object";
}
function modelLoaded()
{
  console.log("modelLoaded");
  status=true;
}
function draw()
{
    image(img,0,0,450,450);
    
    if(status!="")
    {
      object_detector.detect(img,gotResults);
      b=random(255);
      g=random(255);
      r=random(255);
      for(i=0;i<objects.length;i++)
      {
        document.getElementById("status").innerHTML="status  : Detecting Object";
        fill(r,g,b);
        percent=floor(objects[i].confidence *100);
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
        textSize(30);    
        noFill();
        stroke(r,g,b);
        rect(objects[i].x-30,objects[i].y-30,objects[i].width,objects[i].height);
      }
    }
}
function gotResults(error,results)
{
if(error)
{
  console.log(error);
}
console.log(results);
objects=results
}