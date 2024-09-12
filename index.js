
const popUp = document.getElementById('Confirmation')
Hide = () => {

    popUp.style.display = 'none';
}

show = () => {
    popUp.style.display = 'flex';
    // test();
}

// let name = document.getElementById('name');

writeRecc = () => {
    let fetchData = document.getElementById('comment')
    
    let target = document.getElementById('RemmItems')
    const para = document.createElement('p')
    const paraText = document.createTextNode(fetchData.value)
    // console.log(text.value)
    para.appendChild(paraText);
    target.appendChild(para)
    fetchData.value = ''
    show();
}

/**create a paragraph and insert to body of html */

// // what to create
// const para = document.createElement('p')
// // put data
// const great = document.createTextNode('hello im newly created element with tesxt node')
// //append node in element
// para.appendChild(great)
// // para.

// //where to create
// const target = document.body;
// target.appendChild(para)

//browser view port
// document.getElementById("demo").innerHTML =
//     "Browser inner window width: " + window.innerWidth + "px<br>" +
//     "Browser inner window height: " + window.innerHeight + "px";

/**
 * create a fragmented elements
 */

// const fragment = document.createDocumentFragment();
// const li = fragment
//     .appendChild(document.createElement("section"))
//     .appendChild(document.createElement("ul"))
//     .appendChild(document.createElement("li"))
//     .appendChild(document.createElement("li"));
// li.textContent = "hello world as li";
// li.textContent='hello two'

// document.body.appendChild(fragment);

/**
 * create ul and insert li with items
 */

// const ul = document.createElement('ul')
// document.body.appendChild(ul)

// const myArray = ['hi','how','are','you']
// myArray.forEach(putDataLi)

// function putDataLi(value,index,array){
//     const li = document.createElement('li');
//     const textt = document.createTextNode(value)
//     // textt.style.color = 'red'
//     li.style.color='red'
//     li.appendChild(textt)
//     ul.appendChild(li)
    
// }
