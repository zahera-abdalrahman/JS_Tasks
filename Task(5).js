let base=prompt("Enter triangle base: ");
let height=prompt("Enter triangle height: ");
function triangle(base,height) {
    let area= 0.5 * base * height;
    return area;
}

alert(triangle(base,height));


base=prompt("Enter triangle base: ");
height=prompt("Enter triangle height: ");
let triangleArrow=(base,height) => {
    let area= 0.5 * base * height;
    return area;
}
alert(triangleArrow(base,height));
