# Arc Reactor

This tool positions images on an arc.

### Usage

```ts
interface ArcProps{
    imgSrc:string, className:string, howMany:number, 
    boxHeight:number, boxWidth:number, 
    angleCorrection?:number, heightCorrection?:number, widthCorrection?:number
  }

  makeArc({...});

```

| imgSrc            	| string 	| The image file's source URL                          	|
|-------------------	|--------	|------------------------------------------------------	|
| className         	| string 	| The image's style[0]                                 	|
| howMany           	| number 	| how many elements you want in the arc                	|
| boxHeight         	| number 	| the height of the box the arc is in                  	|
| boxWidth          	| number 	| the width of the box the arc is in                   	|
| angleCorrection?  	| number 	| To correct the angle of the arc if it's not level[1] 	|
| heightCorrection? 	| number 	| To correct the vertical position of the arc          	|
| widthCorrection?  	| number 	| To correct the horizontal position of the arc        	|

[0] The arc is positioned using relative/absolute, and top/left. _The parent box must be position relative_.

[1] This value represents degrees going _clockwise_ that the arc should start from.

