---
title: Заключение
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
tags:
  - Игры
  - Канва
  - Начинающий
  - жизни
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
original_slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Заключение
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/en-US/docs/Games")}}</div>

<p>{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Управление_мышью")}}</p>

<div class="summary">
<p>Это 10-й и заключительный шаг в <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch">Gamedev Canvas tutorial</a>. Вы можете найти исходный код, как он должен выглядеть, после завершения этого урока в <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html">Gamedev-Canvas-workshop/lesson10.html</a>.</p>
</div>

<p><span class="seoSummary">В любой игре, которую мы пишем, всегда есть место для улучшений. Например, мы можем предложить игроку несколько жизней. Они могут сделать несколько ошибок и всё равно закончить игру. Мы также можем улучшить отрисовку кода.</span></p>

<h2 id="Предоставление_игроку_нескольких_жизней">Предоставление игроку нескольких жизней</h2>

<p>Реализация довольно проста. Давайте сначала добавим переменную для хранения количества жизней в том же месте, где мы объявляли другие наши переменные:</p>

<pre class="brush: js">var lives = 3;</pre>

<p>Отрисовка счётчика жизни выглядит почти так же, как и счётчика баллов - добавьте в код следующую функцию под функцией <code>drawScore()</code> :</p>

<pre class="brush: js">function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}</pre>

<p>Вместо того, чтобы немедленно закончить игру, мы уменьшим количество жизней, пока они больше не будут доступны. Мы также можем сбросить позиции мяча и биты, когда игрок начинает игру со следующей жизнью. Итак, в функции <code>draw()</code> замените следующие три строки:</p>

<pre class="brush: js">alert("GAME OVER");
document.location.reload();
clearInterval(interval); // Needed for Chrome to end game</pre>

<p>Давайте добавим немного более сложную логику к ней, как показано ниже:</p>

<pre class="brush: js">lives--;
if(!lives) {
    alert("GAME OVER");
    document.location.reload();
}
else {
    x = canvas.width/2;
    y = canvas.height-30;
    dx = 2;
    dy = -2;
    paddleX = (canvas.width-paddleWidth)/2;
}</pre>

<p>Теперь, когда мяч попадает в нижний край экрана, мы вычитаем одну жизнь из переменной <code>lives</code>. Если жизней не осталось, игра проиграна, если осталось ещё несколько жизней, то положение мяча и биты сбрасываются вместе с движением мяча.</p>

<h3 id="Визуализация_дисплея_жизней">Визуализация дисплея жизней</h3>

<p>Теперь вам нужно добавить вызов <code>drawLives()</code> внутри функции <code>draw()</code> и добавить его под вызовом <code>drawScore()</code>.</p>

<pre class="brush: js">drawLives();
</pre>

<h2 id="Улучшение_рендеринга_с_requestAnimationFrame">Улучшение рендеринга с requestAnimationFrame()</h2>

<p>Теперь давайте работать над чем-то, что не связано с игровой механикой, но с тем, как она рендерится. {{domxref("window.requestAnimationFrame", "requestAnimationFrame")}} поможет браузеру рендерить игру лучше, чем фиксированная частота кадров, которую в настоящее время мы реализовали, используя {{domxref("windowTimers.setInterval()", "setInterval()")}}. Замените следующую строку:</p>

<pre class="brush: js">setInterval(draw, 10);</pre>

<p>на:</p>

<pre class="brush: js">draw();</pre>

<p>и удалите каждый экземпляр:</p>

<pre>clearInterval(interval); // Needed for Chrome to end game</pre>

<p>Затем в самом низу функции <code>draw()</code> (непосредственно перед закрывающей фигурной скобкой) добавьте следующую строку, которая заставляет функцию <code>draw()</code> вызывать себя снова и снова:</p>

<pre class="brush: js">requestAnimationFrame(draw);</pre>

<p>Функция <code>draw()</code> теперь выполняется снова и снова в цикле <code>requestAnimationFrame()</code>, но вместо фиксированной частоты кадров в 10 миллисекунд, мы возвращаем управление частотой кадров обратно в браузер. Соответственно он будет синхронизировать частоту кадров и отображать фигуры только при необходимости. Это обеспечивает более эффективный и плавный цикл анимации, чем более старый метод <code>setInterval().</code></p>

<h2 id="Сравните_свой_код">Сравните свой код</h2>

<p>Вот и все-финальная версия игры готова!</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/3becw9fy/1/","","395")}}</p>

<div class="note">
<p><strong>Упражнение: измените количество жизней и угол отскока мяча от биты.</strong></p>
</div>

<h2 id="Игра_закончена_-_на_данный_момент!">Игра закончена - на данный момент!</h2>

<p>Вы закончили все уроки — поздравляем! К этому моменту вы должны знать основы манипулирования canvas и логику простых 2D-игр. Сейчас самое время изучить некоторые фреймворки и продолжить разработку игр. Вы можете проверить аналог этой серии, <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_breakout_game_Phaser">2D breakout game using Phaser</a> или <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/HTML5_Gamedev_Phaser_Device_Orientation">Cyber Orb built in Phaser</a> учебник. Вы также можете просмотреть раздел <a href="https://developer.mozilla.org/en/docs/Games">Games section on MDN</a> для вдохновения и  увеличения знаний.</p>

<p>Вы также можете вернуться на <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch">this tutorial series' index page</a> учебника. Получайте удовольствие от написания кода!</p>

<p>{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}</p>
