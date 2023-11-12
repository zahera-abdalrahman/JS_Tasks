const namesArr=[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
    ];
function readyToPutInTheDOM(arr){
    const Array=arr.map(fullName => {
        return `<h1>${fullName.name}</h1><h2>${fullName.age}</h2>`
    });
    console.log(Array);
    document.querySelector("div").innerHTML=Array;
}
readyToPutInTheDOM(namesArr);



