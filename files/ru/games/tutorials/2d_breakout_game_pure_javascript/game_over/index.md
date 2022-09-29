---
title: Game over
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
tags:
  - Canvas
  - JavaScript
  - game over
  - Начинающий
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/en-US/docs/Games")}}</div>

<p>{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Создаём_зону_кирпичей")}}</p>

<div class="summary">
<p>Это - 5-й шаг из 10 из <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch">Gamedev Canvas tutorial</a>. Вы можете найти исходный код к этому уроку в <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html">Gamedev-Canvas-workshop/lesson5.html</a>.</p>
</div>

<p><span class="seoSummary">Конечно интересно наблюдать за отражающимся мячом  и двигать биту, но кроме этого игра ничего не делает и не имеет никакого прогресса или конечной цели. Было бы хорошо с точки зрения геймплея иметь возможность проигрыша. Логика проигрыша в потере мяча. Если вы пропустите мяч и дадите ему добраться до нижнего края экрана, то на этом игра закончится.</span></p>

<h2 id="Реализация_окончания_игры">Реализация окончания игры</h2>

<p>Давайте попытаемся реализовать "Конец Игры" в нашей игре. Вот часть кода от третьего урока, где мы заставили шар отталкиваться от стен:</p>

<pre class="brush: js">if(x + dx &gt; canvas.width-ballRadius || x + dx &lt; ballRadius) {
    dx = -dx;
}

if(y + dy &gt; canvas.height-ballRadius || y + dy &lt; ballRadius) {
    dy = -dy;
}</pre>

<p>Вместо того, чтобы позволить шару отталкиваться от всех четырёх стен, давайте позволим отталкиваться только от трёх стен — левую, верхнюю и правую. Удар об нижнюю стенку закончит игру. Мы отредактируем второй блок if, таким образом, что if else вызовет "Конец Игры" , когда шар столкнётся  с нижней стенкой холста. Сохраните документ, взгляните на выводящееся сообщение перезагрузите игру путём перезагрузки страницы.</p>

<p>Во-первых, измените код, где вы изначально вызывали <code>setInterval()</code></p>



<pre><code>setInterval(draw, 10);</code>
</pre>

<p>на следующий:</p>

<pre><code>var interval = setInterval(draw, 10);</code>
</pre>



<p>Затем замените второй оператор if следующим:</p>

<pre class="brush: js">if(y + dy &lt; ballRadius) {
    dy = -dy;
} else if(y + dy &gt; canvas.height-ballRadius) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval); // Needed for Chrome to end game
}</pre>



<h2 id="Отбить_шар">Отбить шар</h2>

<p>Последняя вещь, которую нужно сделать на этом уроке состоит в том, чтобы создать некоторое обнаружение столкновений между шаром и битой, таким образом, шар оттолкнётся от биты и возвратиться в область игры. Самая простая вещь состоит в том, чтобы проверить, является ли центр шара между левыми и правыми краями биты. Обновите последний бит кода, который вы изменили:</p>

<pre class="brush: js">if(y + dy &lt; ballRadius) {
    dy = -dy;
} else if(y + dy &gt; canvas.height-ballRadius) {
    if(x &gt; paddleX &amp;&amp; x &lt; paddleX + paddleWidth) {
        dy = -dy;
    }
    else {
        alert("GAME OVER");
        document.location.reload();
    }
}</pre>

<p>Если мяч направляется к нижнему краю Canvas, мы должны проверить, касается ли он биты. Если да, то шар возвращается прочь точно так же, как вы ожидали бы; если не тогда игра заканчивается.</p>

<h2 id="Сравните_свой_код">Сравните свой код</h2>

<p>Вот рабочий код для вас, чтобы сравнить ваш с:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/L61c9y50/","","395")}}</p>

<div class="note">
<p><strong>Упражнение: заставить мяч двигаться быстрее, когда он попадает в биту.</strong></p>
</div>

<h2 id="Следующие_шаги">Следующие шаги</h2>

<p>Все идёт хорошо и наша игра начинает чувствовать себя намного более достойно. Вы уже можете проиграть! Но все ещё не хватает чего-то. Перейдём к шестой главе — <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch/Build_the_brick_field">Build the brick field</a> — и создадим некоторые кирпичи для шара, чтобы их уничтожить.</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}</p>
