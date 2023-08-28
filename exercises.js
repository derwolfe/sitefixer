const tgt = "article_header_image_container pageHeader_image_exercises"
const elements = document.getElementsByClassName(tgt);
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0])
}
