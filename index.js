

function ready() {
    console.log(document.getElementsByClassName('multiple-select'))
    let selects = document.getElementsByClassName('multiple-select')

    for (let i = 0; i < selects.length; i++) {
        const select = selects[i];
        select.style.display = 'none'
        // select.style.visibility = 'hidden'

        let ipnutField = document.createElement('div')
        ipnutField.setAttribute('data-input-name', select.getAttribute('name'))


        let selectedListDiv = document.createElement('div')

        ipnutField.appendChild(selectedListDiv)

        selectedListDiv.className = 'selected-list-div'
        
        let collapseDiv = document.createElement('div')
        collapseDiv.className = 'select-list'
        selectedListDiv.addEventListener('click', showList)

        for (let j = 0; j < select.options.length; j++) {
            const option = select.options[j];
            collapseDiv.innerHTML += ('<div onClick="selectItem(this)" data-value="'+option.value+'">'+option.text+'</div>')
        }
        
        collapseDiv.style.display = 'none'
        ipnutField.appendChild(collapseDiv)
        

        select.parentNode.insertBefore(ipnutField, select.nextSibling)
    }
}

function showList() {
    this.parentNode.childNodes[1].style.display = 'block'
}

function selectItem(obj) {
    let value = obj.getAttribute('data-value')
    let selectName = obj.parentNode.parentNode.getAttribute('data-input-name')
    let select = document.getElementsByName(selectName)[0]
    for (let i = 0; i < select.options.length; i++) {
        const option = select.options[i];
        if(option.value == value) {
            option.selected = true;
            break;
        }
    }
}

window.addEventListener('load', ready, false )