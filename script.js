let title1= document.querySelector("h4.block-1")
let title2= document.querySelector("h4.block-2")
let title3= document.querySelector("h4.block-3")

let block1= document.querySelector("p.block-1")
let block2= document.querySelector("p.block-2")
let block3= document.querySelector("p.last-p")


block1.addEventListener('mouseenter',function() {
    title1.classList.add('hover')});

block2.addEventListener('mouseenter',function() {
    title2.classList.add('hover')});

block3.addEventListener('mouseenter',function() {
    title3.classList.add('hover')});
    

block1.addEventListener('mouseout',function() {
    title1.classList.remove('hover')});
    
block2.addEventListener('mouseout',function() {
    title2.classList.remove('hover')});
    
block3.addEventListener('mouseout',function() {
    title3.classList.remove('hover')});