//use  the json content which is obtained from converting the  spreadsheet ,into the block
//  the json link:https://docs.google.com/spreadsheets/d/1Aj8tugOsStZXDvyiJIlzMt3xDdvuDH3Bglo7QZARUJw/edit?gid=0#gid=0
// we have to render this json content

// to the block as a list of Data;
// we can iterate on the array and show each item as li item. 

import data from "../../tags.json";
console.log(data);
export default async function decorate(block) {
   const title =  document.createElement("h1");
   block.appendChild(title);
    const ul = document.createElement("ul");
    data.forEach((item) => {
       const li = document.createElement("li");
       li.innerHTML=`<strong>${item.Tag}</strong> : ${item.Usage}`;
       ul.appendChild(li);
    })

    block.appendChild(ul);

}

