document.addEventListener("DOMContentLoaded", () => {
    const leftPaddle = document.getElementById("leftPaddle");
    const rightPaddle = document.getElementById("rightPaddle");
    const ball = document.getElementById("ball");

    let ballX = 400;
    let ballY = 200;
    let ballSpeedX = 5;
    let ballSpeedY = 2;

    function update() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Check collision with paddles
        if (
            (ballX <= 30 && ballY >= leftPaddle.offsetTop && ballY <= leftPaddle.offsetTop + 100) ||
            (ballX >= 770 && ballY >= rightPaddle.offsetTop && ballY <= rightPaddle.offsetTop + 100)
        ) {
            ballSpeedX = -ballSpeedX;
        }

        // Check collision with top and bottom walls
        if (ballY <= 0 || ballY >= 380) {
            ballSpeedY = -ballSpeedY;
        }

        // Check if ball goes out of bounds (reset if needed)
        if (ballX <= 0 || ballX >= 780) {
            ballX = 400;
            ballY = 200;
            ballSpeedX = -ballSpeedX;
        }

        ball.style.left = ballX + "px";
        ball.style.top = ballY + "px";

        requestAnimationFrame(update);
    }

    document.addEventListener("mousemove", (event) => {
        const mouseY = event.clientY - document.body.getBoundingClientRect().top;

        // Move left paddle with mouseY
        leftPaddle.style.top = Math.min(Math.max(mouseY - 50, 0), 300) + "px";
    });

    update(); // Start the game loop
});
