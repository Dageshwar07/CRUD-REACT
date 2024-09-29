
function calcSteps(distanceToCover,distanceInSingleWalk,slip){

    if(distanceInSingleWalk<=slip){
        console.log("slip to big ...")
        return null
    }
    let steps = 0 
while(distanceToCover>=0){

    distanceToCover= distanceToCover-distanceInSingleWalk//1
    if(distanceToCover>=slip){
distanceToCover=distanceToCover+slip //6
    }

 steps++//2

}

return steps
}





console.log(calcSteps(100,10,0))