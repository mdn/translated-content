---
title: Создаём зону кирпичей
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
original_slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Создаём_зону_кирпичей
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/en-US/docs/Games")}}</div>

<p>{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection")}}</p>

<div class="summary">
<p>Это 6 шаг из 10 в <a href="/en-US/docs/Games/Workflows/Breakout_game_from_scratch">Gamedev Canvas tutorial</a>. Вы можете найти исходный код, как он будет выглядеть после завершения этого урока, тут - <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html">Gamedev-Canvas-workshop/lesson6.html</a>.</p>
</div>

<p>После изменения механики игрового процесса мы теперь можем проиграть - это здорово, так как это означает, что игра, наконец, больше похожа на игру. Тем не менее, он быстро станет скучным, если все, что вы делаете, это отскок шара от стен и биты. То, что действительно нужно для прорыва - это кирпичи, которые нужно уничтожить мячом, и это то, что мы сейчас создадим!</p>

<h2 id="Настройка_переменных_кирпича">Настройка переменных кирпича</h2>

<p>Общая цель этого урока - сделать несколько строк кода для кирпичей, используя вложенный цикл, который работает через двумерный массив. Однако сначала нам нужно настроить некоторые переменные для определения информации о таких кирпичах, как их ширина и высота, строки и столбцы и т. Д. Добавьте следующие строки в свой код под переменными, которые вы ранее объявили в своей программе.</p>

<pre class="brush: js">var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;</pre>



<p>Здесь мы определили количество строк и столбцов кирпичей, их ширину и высоту, прокладку между кирпичами, чтобы они не касались друг друга и верхнее и левое смещение, чтобы они не начинали рисоваться прямо от края Холста.</p>

<p>Мы будем держать все наши кирпичи в двумерном массиве. Он будет содержать кирпичные столбцы (c), которые, в свою очередь, будут содержать кирпичные ряды (r), которые, в свою очередь, будут содержать объект, содержащий положение <code>x</code> и <code>y</code>чтобы рисовать каждый кирпич на экране. Добавьте следующие значения ниже ваших переменных:</p>



<pre class="brush: js">var bricks = [];
for(var c=0; c&lt;brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r&lt;brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}</pre>

<p>Вышеприведённый код будет прокручивать строки и столбцы и создавать новые кирпичи. Обратите внимание, что кирпичные объекты также будут использоваться для целей обнаружения столкновений позже.</p>

<h2 id="Механизм_отрисовки_кирпичей">Механизм отрисовки кирпичей</h2>

<p>Теперь давайте создадим функцию, чтобы перебрать все кирпичи в массиве и нарисовать их на экране. Наш код может выглядеть так:</p>

<pre class="brush: js">function drawBricks() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            bricks[c][r].x = 0;
            bricks[c][r].y = 0;
            ctx.beginPath();
            ctx.rect(0, 0, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}</pre>

<p>Опять же, мы зацикливаем строки и столбцы, чтобы установить положение <code>x</code> и <code>y</code>каждого кирпича, и мы также <code>brickWidth</code> кирпич на кирпичной <code>brickWidth</code> Canvas -<code>brickWidth</code> - с каждой итерацией цикла. Проблема в том, что мы рисуем их все в одном месте, в координатах <code>(0,0)</code> . Нам нужно включить некоторые вычисления, которые будут определять положение <code>x</code> и <code>y</code> каждого кирпича для каждой итерации цикла:</p>

<pre class="brush: js">var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;</pre>



<p>Каждая позиция <code>brickX</code> разрабатывается как <code>brickWidth</code> + <code>brickPadding</code> , умноженная на номер столбца, <code>c</code> , плюс <code>brickOffsetLeft</code> ; логика для brickY идентична, за исключением того, что она использует значения для номера строки, <code>r</code>, <code>brickHeight</code> и <code>brickOffsetTop</code> . Теперь каждый отдельный кирпич может быть помещён в правильное место и столбец места, с отступом между каждым кирпичом, нарисованным на смещение от левого и верхнего краёв холста.</p>

<p>Окончательная версия функции <code>drawBricks()</code> после назначения <code>brickX</code> и <code>brickY</code> в качестве координат вместо <code>(0,0)</code> каждый раз будет выглядеть следующим образом: добавьте это в свой код ниже функции <code>drawPaddle()</code> :</p>



<pre class="brush: js">    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}</pre>

<h2 id="Сама_отрисовка_кирпичей">Сама отрисовка кирпичей</h2>

<p>Последнее, что нужно сделать в этом уроке, - добавить вызов <code>drawBricks()</code> где-нибудь в функции <code>draw()</code> , предпочтительно в начале, между очисткой холста и рисованием шара. Добавьте следующее выше <code>drawBall()</code> :</p>

<pre class="brush: js">drawBricks();
</pre>

<h2 id="Сравните_свой_код">Сравните свой код</h2>



<p>На этом этапе игра снова стала интереснее:</p>



<p>{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/t1zqmzLp/","","395")}}</p>

<div class="note">
<p>Упражнение: попробуйте изменить количество кирпичей в строке или столбце или их позиции.</p>
</div>

<h2 id="Следующие_шаги">Следующие шаги</h2>

<p>Итак, теперь у нас есть кирпичи! Но мяч вообще не взаимодействует с ними - мы изменим это, поскольку мы переходим в седьмую главу: <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch/Collision_detection">Collision detection</a>.</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}</p>
