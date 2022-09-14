---
title: Счёт и выигрыш
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
tags:
  - JavaScript
  - Игры
  - Начинающий
  - Учебник
  - счёт
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/en-US/docs/Games")}}</div>

<p>{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Обнаружение_столкновений", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Управление_мышью")}}</p>

<div class="summary">
<p>Это 8й шаг из 10 в <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch">Gamedev Canvas tutorial</a>. Вы можете найти исходный код для этого урока по ссылке <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html">Gamedev-Canvas-workshop/lesson8.html</a>.</p>
</div>

<p><span class="seoSummary">Уничтожение кирпичей действительно классно, но, чтобы быть ещё более удивительным, игра должна присуждать очки за каждый кирпич, в который попадает игрок, и подсчитывать общий балл.</span></p>

<h2 id="Подсчёт_очков">Подсчёт очков</h2>

<p>Если вы можете увидеть свои очки на протяжении всей игры, вы можете произвести впечатление на своих друзей. Вам нужна переменная для записи очков. Добавьте следующие данные в свой JavaScript, после остальных переменных:</p>

<pre class="brush: js">var score = 0;</pre>

<p>Вам также нужна функция <code>drawScore()</code> для создания и обновления отображения оценки. Добавьте после функции <code>collisionDetection()</code> следующий код:</p>

<pre class="brush: js">function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}</pre>

<p>Рисование текста на канве аналогично рисованию фигур. Определение шрифта выглядит точно так же, как и в CSS - вы можете установить размер и тип шрифта в {{domxref("CanvasRenderingContext2D.font","font()")}} методе. Затем используйте {{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}} для установки цвета шрифта и  {{domxref("CanvasRenderingContext2D.fillText","fillText()")}} для установки фактического текста, который будет помещён на канву, и где он будет размещён. Первым параметром является сам текст - приведённый выше код показывает текущее количество точек, а два последних параметра - это координаты, в которых текст будет помещён на канву.</p>

<p>Чтобы начислять баллы каждый раз при ударе кирпича, добавьте строку в функцию <code>collisionDetection()</code>, чтобы увеличить значение переменной оценки каждый раз при обнаружении столкновения. Добавьте в код следующую выделенную строку:</p>

<pre class="brush: js; highlight:[9]">function collisionDetection() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x &gt; b.x &amp;&amp; x &lt; b.x+brickWidth &amp;&amp; y &gt; b.y &amp;&amp; y &lt; b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                }
            }
        }
    }
}</pre>

<p>Вызов <code>drawScore()</code>из функции <code>draw()</code> позволяет обновить счёт с каждым новым фреймом - добавьте следующую строку внутри <code>draw()</code>, чуть ниже вызова <code>drawPaddle()</code>:</p>

<pre class="brush: js">drawScore();</pre>

<h2 id="Отображение_сообщения_о_победе_когда_все_кирпичи_были_уничтожены">Отображение сообщения о победе, когда все кирпичи были уничтожены</h2>

<p>В конце концов, это главная цель игры, поэтому вы должны отобразить сообщение о победе, если все доступные кирпичи уничтожены. Добавьте следующий код в свою функцию <code>collisionDetection()</code> :</p>

<pre class="brush: js; highlight:[10,11,12,13]">function collisionDetection() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x &gt; b.x &amp;&amp; x &lt; b.x+brickWidth &amp;&amp; y &gt; b.y &amp;&amp; y &lt; b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}</pre>

<p>Благодаря этому, игроки могут выиграть игру, когда они уничтожают все кирпичи, что очень важно, когда дело доходит до игр. Функция <code>document.location.reload()</code> перезагружает страницу и снова запускает игру после нажатия кнопки оповещения.</p>

<h2 id="Сравните_ваш_код">Сравните ваш код</h2>

<p>Вот работающий код для вас, чтобы сравнить со своим:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/2m74vr9r/1/","","395")}}</p>

<div class="note">
<p><strong>Упражнение: добавьте больше очков за каждый разбитый кирпич, выведите количество набранных очков в конце игры</strong>.</p>
</div>

<h2 id="Следующие_шаги">Следующие шаги</h2>

<p>На данный момент игра выглядит довольно хорошо. В следующем уроке вы расширите привлекательность игры, добавив <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch/Mouse_controls">Mouse controls</a>.</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}</p>
