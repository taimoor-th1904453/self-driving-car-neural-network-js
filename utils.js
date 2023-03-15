
function lerp(A, B, t) {
    return A + (B - A) * t
}

//Linear interpolation, or “lerp” for short, is a technique commonly used when programming things like games or GUIs. 
//In principle, a lerp function “eases” the transition between two values over time, using some simple math