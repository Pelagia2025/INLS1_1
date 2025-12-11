const btns = document.querySelectorAll("button.accordion_btn")
const arrows = document.querySelectorAll("i.fa-solid fa-angle-down")

function openItem() {
    console.log('ok')
    if (this.nextElementSibling.classList.contains('active_box')) {
        this.nextElementSibling.classList.remove('active_box');
        this.lastElementChild.classList.remove('active_arrow');

    } else {
        closeItem();
        this.nextElementSibling.classList.toggle('active_box');
        this.lastElementChild.classList.toggle('active_arrow');
    }
}

const closeItem = () => {
    const activeBoxes = document.querySelectorAll('.info');
    activeBoxes.forEach(box => {
        box.classList.remove('active_box');
    })
    arrows.forEach(arrow => {
        arrow.classList.remove('active_arrow');
    })
}

btns.forEach(btn => {
    btn.addEventListener('click', openItem);
})