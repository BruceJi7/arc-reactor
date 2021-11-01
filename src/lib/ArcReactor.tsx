
  export interface ArcProps{
    imgSrc:string, className:string, howMany:number, boxHeight:number, boxWidth:number, angleCorrection?:number, heightCorrection?:number, widthCorrection?:number
  }
  
  
  function degToRadian(deg:number){ 
    return deg * (Math.PI/180);
  }

  function getXcoord(deg:number, hypo:number){

    const radA = degToRadian(deg)
    const sinA = Math.sin(radA)
    return sinA * hypo
  }

  function getYcoord(deg:number, hypo:number){

    const radA = degToRadian(deg)
    const cosA = Math.cos(radA)
    return cosA * hypo
  }

  function getTrigoXY(deg:number, height:number, width:number){
    const y = getYcoord(deg, height)
    const x = getXcoord(deg, width)
    return {x, y}
  }

  function makeArc({
    imgSrc, className, howMany, boxHeight, boxWidth, angleCorrection=0, heightCorrection=0, widthCorrection=0


  }:ArcProps){

    const circles = []

    for (let i=0; i<=howMany-1; i++){

      const angle = (90 / howMany+1) * i - ((90/howMany)*((howMany)/2) - angleCorrection)
      const position = getTrigoXY(angle, boxHeight*-1, boxWidth);          
      circles.push(<img src={imgSrc} className={className} alt="" style={{position: "absolute",top:position.y+boxHeight+heightCorrection, left:position.x+boxWidth+widthCorrection}} />) 
    }

    return circles

  }

  export default makeArc