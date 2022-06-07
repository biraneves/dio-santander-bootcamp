function changeText() {
    const h1 = document.getElementsByTagName('h1');
    const button = document.getElementsByTagName('button');

    if (h1[0].innerText === "Hello, World!") {
        h1[0].innerText = "Olá, Mundo!";
        button[0].innerText = "Clique-me!"
    } else {
        h1[0].innerText = "Hello, World!";
        button[0].innerText = "Click me!";
    }
}