const btn = document.getElementById("btn2");
function abc() {
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");
    container2.style.display = "block"
    container1.style.display = "none"
    let btn2 = document.getElementById("btn2");
    btn2.classList.add("animate");
    let bd = document.body;
    // bd.style.backgroundImage = '';
    btn2.style.transition = "1s"
}

function reverse() {
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");
    container2.style.display = "none"
    container1.style.display = "block"
    let btn2 = document.getElementById("btn2");
    btn2.classList.add("animate");
    let bd = document.body;
    // bd.style.backgroundImage = '';
}

document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.querySelector('.btn-1');
    const signInButton = document.querySelector('.btn-2');
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');

    signUpButton.addEventListener('click', function (e) {
        e.preventDefault();
        container1.classList.remove('show');
        setTimeout(() => {
            container1.style.display = 'none';
            container2.style.display = 'block';
            setTimeout(() => container2.classList.add('show'), 200);
        }, 6000);
    });

    signInButton.addEventListener('click', function (e) {
        e.preventDefault();
        container2.classList.remove('show');
        setTimeout(() => {
            container2.style.display = 'none';
            container1.style.display = 'block';
            setTimeout(() => container1.classList.add('show'), 200);
        }, 6000);
    });
});
