const articles = "article_header_image_container pageHeader_image_articles"
const elements = document.getElementsByClassName(articles);
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0])
}
