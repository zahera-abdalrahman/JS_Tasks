let numberofChildren,partnerName,location,jobTitle;
partnerName=prompt("Your partner name: ");
    numberofChildren=prompt("number of children: ");
    location=prompt("location: ");
    jobTitle=prompt("job title: ");
function tellFortune(numberofChildren,partnerName,location,jobTitle) {
    let string="";
    string=`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberofChildren} kids.`;
    console.log(string);
    document.getElementById("fullName").innerHTML=string;
}

tellFortune(numberofChildren,partnerName,location,jobTitle);


numberofChildren,partnerName,location,jobTitle;
partnerName=prompt("Your partner name: ");
    numberofChildren=prompt("number of children: ");
    location=prompt("location: ");
    jobTitle=prompt("job title: ");
let tellFortuneArrow=(numberofChildren,partnerName,location,jobTitle) => {
    let string="";
    string=`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberofChildren} kids.`;
    console.log(string);
    document.getElementById("fullNameTwo").innerHTML=string;
}

tellFortuneArrow(numberofChildren,partnerName,location,jobTitle);