---
title: Ракетка и управление клавиатурой
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/en-US/docs/Games")}}</div>

<p>{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}</p>

<div class="summary">
<p>Это 4-й этап из 10 <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch">Gamedev Canvas tutorial</a>.  Вы можете найти исходный код как он должен выглядеть после завершения этого урока в <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html">Gamedev-Canvas-workshop/lesson4.html</a>.</p>

<p>Мяч беспрепятственно отражается от стен, и вы можете смотреть на него бесконечно, но в настоящее время нет интерактивности. Это не игра, если вы не можете управлять мячом. Давайте добавим взаимодействие с игрой: управление ракеткой.</p>
</div>

<h2 id="Определение_ракетки_чтобы_ударить_по_мячу">Определение ракетки, чтобы ударить по мячу</h2>

<p>Итак, нам нужна ракетка, чтобы ударить по мячу - давайте определим несколько переменных для этого. Добавьте следующие переменные в верхней части кода, рядом с вашими другими переменными:</p>

<pre class="brush: js">var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;</pre>

<p>Здесь мы определяем высоту и ширину ракетки, и его начальную точку на оси X, для дальнейшего использования в расчётах. Давайте создадим функцию, которая будет рисовать ракетку на экране. Добавьте следующий блок после функции <code>drawBall()</code>:</p>

<pre class="brush: js">function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}</pre>

<h2 id="Позволяем_пользователю_управлять_ракеткой">Позволяем пользователю управлять ракеткой</h2>

<p>Мы можем отобразить ракетку там, где мы хотим, но она должна реагировать на действия пользователя — настало время реализовать управление с помощью кнопок. Нам понадобится:</p>

<ul>
 <li>Две переменные для хранения информации о том, левая или правая кнопка управления нажата.</li>
 <li>Два обработчика для событий <code>keydown</code> и <code>keyup</code> — мы хотим запустить некоторый код для обработки движения ракетки при нажатии кнопок.</li>
 <li>Две функции обработки события <code>keydown</code> и <code>keyup</code> код, который будет выполняться при нажатии кнопок.</li>
 <li>Возможность перемещения ракетки влево и вправо</li>
</ul>

<p>Нажатые кнопки могут быть определены и инициализированы булевыми переменными. Добавьте эти строки рядом с остальными вашими переменными:</p>

<pre class="brush: js">var rightPressed = false;
var leftPressed = false;</pre>

<p>Значением по умолчанию для обоих является <code>false</code>, так как изначально кнопки не нажаты. Для обработки нажатий клавиш, мы создадим два обработчика событий. Добавьте следующие строки чуть выше функции <code>setInterval()</code> в нижней части JavaScript:</p>

<pre class="brush: js">document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);</pre>

<p>Когда <code>keydown</code> событие вызывается любой клавишей клавиатуры (нажатием клавиши), функция <code>keyDownHandler()</code> будет выполняться. Та же картина верна для второго обработчика: <code>keyup</code> событие запустит функцию <code>keyUpHandler ()</code> (когда будет отпущена). Добавьте следующий блок в ваш код ниже <code>addEventListener()</code>:</p>

<pre class="brush: js">function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}</pre>

<p>Когда мы нажимаем клавишу, эта информация хранится в переменной. Соответствующая переменная в каждом конкретном случае устанавливается в <code>true</code>. Когда клавиша отпущена, переменная устанавливается обратно в <code>false</code>.</p>

<p>Обе функции принимают параметр, представленный переменной <code>e</code>. Из неё вы можете получить полезную информацию: <code>key</code> содержит информацию о нажатой клавише. Например, код 37 — это клавиша стрелка влево и 39 — стрелка вправо. Если стрелка влево нажата, то переменная <code>leftPressed</code> имеет значение <code>true</code>, когда кнопка отпущена, то переменная leftPressed имеет значение false. Та же схема со стрелкой вправо и переменной rightPressed.</p>

<h3 id="Логика_перемещения_ракетки">Логика перемещения ракетки</h3>

<p>Теперь у нас есть переменные для хранения информации о нажатых клавишах, обработчики событий и соответствующие функции. Теперь мы допишем код, чтобы перемещать ракетку на экране. Внутри функции <code>draw()</code>, мы будем проверять, нажата левая или правая клавиша, когда каждый кадр отображается. Наш код будет выглядеть следующим образом:</p>

<pre class="brush: js">if(rightPressed) {
    paddleX += 7;
}
else if(leftPressed) {
    paddleX -= 7;
}</pre>

<p>Если нажата стрелка влево, то ракетка будет двигаться на 7 пикселей влево, а если нажата стрелка вправо то на 7 пикселей вправо. Все хорошо, но, если держать клавишу слишком долго, ракетка уходит за границы холста. Улучшим ситуацию, будем перемещать ракетку только в пределах холста, изменив код следующим образом:</p>

<pre class="brush: js">if(rightPressed &amp;&amp; paddleX &lt; canvas.width-paddleWidth) {
    paddleX += 7;
}
else if(leftPressed &amp;&amp; paddleX &gt; 0) {
    paddleX -= 7;
}</pre>

<p>Позиция <code>paddleX</code> будет двигаться от 0 на левой стороне холста и <code>canvas.width-paddleWidth</code> на правой стороне. Это будет работать именно так, как нам нужно.</p>

<p>Добавьте вышеприведённый блок кода в функцию <code>draw()</code> в самый конец, чуть выше закрывающей фигурной скобки.</p>

<p>Единственное, что осталось сделать сейчас, это вызвать <code>drawPaddle()</code> функцию внутри функции <code>draw()</code>, чтобы нарисовать ракетку на экране. Добавьте следующую строку внутрь функции <code>draw()</code>, чуть ниже строки, которая вызывает <code>drawBall()</code>:</p>

<pre class="brush: js">drawPaddle();
</pre>

<h2 id="Сравните_ваш_код"><span style="background-color: #ffffff; color: #222222; display: inline !important; float: none; font-family: arial,helvetica,sans-serif; font-size: 20px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 24px; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap;">Сравните ваш код</span></h2>

<p>Вот работающий код для вас, чтобы сравнить со своим:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/tgn3zscj/","","320")}}</p>

<div class="note">
<p><span style="font-size: 14px;"><strong>Упражнение</strong></span>: Сделайте скорость движения ракетки быстрее или медленнее, или измените её размер.</p>
</div>

<h2 id="Следующий_шаг">Следующий шаг</h2>

<p>Теперь у нас есть что-то похожее на игру. Беда только в том, что пока вы можете лишь бесконечно бить мяч ракеткой. Это все изменится в пятой главе, <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch/Game_over">Game over</a>, когда мы начнём добавлять конечное состояние для нашей игры.</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}</p>
