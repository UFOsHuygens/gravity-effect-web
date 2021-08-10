var ball = document.querySelector("#ball"); // id do elemento solicitado
var ball_metrics = ball.getBoundingClientRect();
var pos_y = 0;
var velocity_y = 4;

function gravity() {
    pos_y += velocity_y; // posição y da bola recebe um acréscimo disparado para simular uma queda
    ball.style.top = `${ball_metrics.top+=pos_y}px`;

    window.onclick = () => { // ao clicar no display, o valor de acréscimo é invertido instantaneamente
        velocity_y = 0;
        velocity_y -= 4;
    }

    velocity_y += 0.035; // valor de acréscimo sofrendo um desvio suave

    // se a posição y da bola for maior que a altura de tela menos a propria altura, o valor de acréscimo é nulo
    if (ball.getBoundingClientRect().top >= window.innerHeight - ball.clientHeight) { // colisão da bola com o chão
        velocity_y = 0;
    }
}

window.setInterval(gravity, 1); // função gravity chamada várias vezes