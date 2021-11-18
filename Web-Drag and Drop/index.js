// let sourceElem = document.getElementById('source');
//         sourceElem.addEventListener('dragstart', function (event) {
//             confirm('Are you sure you want to move this element?');
//         })

let sourceElem = document.getElementById('source');
let targetElem = document.getElementById('target');
let targetElem2 = document.getElementById('target2');

sourceElem.addEventListener('dragstart', function (event) {
    event.currentTarget.style = "opacity:0.3";
    targetElem.style = "border: 10px dashed gray;";
    targetElem2.style = "background-color: lightgray"
    event.dataTransfer.setData('text', event.target.id);
})

sourceElem.addEventListener('dragend', function (event) {
    sourceElem.style = "opacity: 1";
    targetElem.style = "border: none";
})

targetElem.addEventListener('dragover', function (event) {
    event.preventDefault();
})
targetElem2.addEventListener('dragover', function (event) {
    event.preventDefault();
})

targetElem.addEventListener('drop', function(event) {
    console.log('DROP!');
    const sourceElemData = event.dataTransfer.getData('text');
    const sourceElemId = document.getElementById(sourceElemData);
    event.target.appendChild(sourceElemId);
})

targetElem2.addEventListener('drop', function(event) {
    console.log('DROP!');
    const sourceElemData = event.dataTransfer.getData('text');
    const sourceElemId = document.getElementById(sourceElemData);
    event.target.appendChild(sourceElemId);
})
