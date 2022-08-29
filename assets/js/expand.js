window.addEventListener('load', (event) => {
    let elements = document.querySelectorAll('div.post-content')[0].childNodes; // 수정1 
    let addContent = false;
    let contentsToAdd = [];
    let expandtags = null;
    let detailText = null;
    let detailsTag = null;
    let summaryTag = null;
    let detailsContent = null;
    for (let i=elements.length - 1; i > -1; i--){
        el = elements[i]
        if (el.innerHTML == '[/expand]'){
            addContent = true
            detailsContent = document.createElement('div')
            detailsContent.className = 'collapse-content'
            detailsContent.setAttribute('markdown', '1')
            el.parentNode.removeChild(el)
        } else if (el.innerHTML == '[expand]' || (el.nodeName == 'P' && el.innerHTML.includes('[expand]summary:'))) {
            addContent = false
            expandtags = el.innerHTML.split('summary:')
            if (expandtags.length == 1){
                detailText = 'Details'
            } else {
                detailText = expandtags[1]
            }
            detailsTag = document.createElement('details')
            detailsTag.className = 'collapse-article'
            summaryTag = document.createElement('summary')
            summaryTag.appendChild(document.createTextNode(detailText))
            detailsTag.appendChild(summaryTag)
            for (var j=contentsToAdd.length - 1; j > -1; j--) {
                detailsContent.appendChild(contentsToAdd[j])
            }
            detailsTag.appendChild(detailsContent)
            el.parentNode.replaceChild(detailsTag, el)
            contentsToAdd = []
        } else {
            if (addContent) {
                contentsToAdd.push(el)
            }
        }
    }
})