const tgt = "gen_header_image_container pageHeader_image_media"
const elements = document.getElementsByClassName(tgt);
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0])
}
