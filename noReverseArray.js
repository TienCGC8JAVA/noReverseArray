let x = [4,-5,8,0,-6,3,-1,9,8];
let first = 0;
let last = x.length - 1;

while ( first < last)
{
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}

document.write(x);