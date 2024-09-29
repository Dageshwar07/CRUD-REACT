function frogJump() {
    let position = 0;
    let jumps = 0;

    while (position < 20) {
        jumps++;
        position += 5; 
        
        if (position >= 20) {
            break;  
        }

        position -= 3; 
    }

    return jumps;
}

console.log(frogJump());  
