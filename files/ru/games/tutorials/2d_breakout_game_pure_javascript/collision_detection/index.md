---
title: Обнаружение столкновений
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
original_slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Обнаружение_столкновений
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/en-US/docs/Games")}}</div>

<p>{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Создаём_зону_кирпичей", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}</p>

<div class="summary">
<p>Это 7 шаг из 10 в <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch">Gamedev Canvas tutorial</a>. Вы можете найти исходный код, как он будет выглядеть после завершения этого урока, тут <a href="https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson07.html">Gamedev-Canvas-workshop/lesson7.html</a>.</p>

<p>У нас уже есть кирпичи, появляющиеся на экране, но игра все ещё не так интересна, ведь мяч проходит сквозь них. Нам нужно подумать о добавлении обнаружения столкновений, чтобы он мог отскакивать от кирпичей и ломать их.</p>
</div>

<p>Конечно, это наше решение, как реализовать это, но может быть сложно рассчитать, касается ли шар прямоугольника или нет, потому что в Canvas нет вспомогательных функций для этого. В этом уроке мы сделаем это самым простым способом. Мы проверим, сталкивается ли центр мяча с любым из данных кирпичей. Это не идеальное решение на все случаи жизни, и есть намного более сложные и эффективные способы обнаружения столкновений, но это научит вас основным понятиям.</p>

<h2 id="Функция_обнаружения_столкновения">Функция обнаружения столкновения</h2>

<p>Мы хотим создать функцию обнаружения столкновений, которая будет перебирать все кирпичи и сравнивать позицию каждого кирпича с координатами шара при каждой отрисовке кадра. Для лучшей читаемости кода определим переменную <code>b</code>, чтобы хранить объект кирпича в цикле обнаружения столкновения:</p>

<pre class="brush: js">function collisionDetection() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var b = bricks[c][r];
            // calculations
        }
    }
}</pre>

<p>Если центр шара находится внутри координат одного из наших кирпичей, мы изменим направление шара. Для того, чтобы центр шара находился внутри кирпича, все четыре из следующих утверждений должны быть верны:</p>

<ul>
 <li>Координата X шара больше, чем координата X кирпича.</li>
 <li>Координата X шара меньше, чем  X-координата кирпича плюс его ширина.</li>
 <li>Координата Y шара больше, чем Y-координата кирпича.</li>
 <li>Координата Y шара меньше, чем Y-координата кирпича плюс его высота.</li>
</ul>

<p>Давайте напишем это в коде:</p>

<pre class="brush: js">function collisionDetection() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var b = bricks[c][r];
            if(x &gt; b.x &amp;&amp; x &lt; b.x+brickWidth &amp;&amp; y &gt; b.y &amp;&amp; y &lt; b.y+brickHeight) {
                dy = -dy;
            }
        }
    }
}</pre>

<p>Добавьте вышеприведённый блок к вашему коду под <code>keyUpHandler() </code>функцией .</p>

<h2 id="Удаление_кирпичей_после_их_попадания">Удаление кирпичей после их попадания</h2>

<p>Вышеприведённый код будет работать, как и задумано, и мяч изменит своё направление. Проблема в том, что кирпичи остаются на своих местах. Мы должны придумать, как избавляться от тех, в которые мы уже попали мячом. Мы можем сделать это, добавив дополнительный параметр кирпичам, определяющий, будет ли кирпич отрисовываться на экране или нет. В той части кода, где мы инициализируем кирпичи, добавим свойство <code>status</code> к каждому кирпичному объекту. Обновите следующую часть кода, как показано ниже:</p>

<pre class="brush: js; highlight:[5]">var bricks = [];
for(var c=0; c&lt;brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r&lt;brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}</pre>

<p>Теперь мы будем проверять значение свойства <code>status</code> каждого кирпича в функции <code>drawBricks()</code> перед его рисованием - если <code>status</code> равен <code>1</code> , нарисуем его, а если равен <code>0</code> , то значит в него попал мяч и он не должен больше отрисовываться. Отредактируйте <code>drawBricks()</code> следующим образом:</p>

<pre class="brush: js; highlight:[4,5,6,7,8,9,10,11,12,13,14]">function drawBricks() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
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
    }
}</pre>

<h2 id="Отслеживание_и_обновление_состояния_в_функции_обнаружения_столкновений">Отслеживание и обновление состояния в функции обнаружения столкновений</h2>

<p>Теперь нам нужно задействовать свойство <code>status</code> кирпича в функции <code>collisionDetection()</code> : если кирпич активен (его статус равен <code>1</code> ), мы проверяем, было ли столкновение; если да, мы устанавливаем статус данного кирпича равным <code>0</code>, чтобы он не был нарисован на экране. Отредактируйте функцию <code>collisionDetection()</code>, как показано ниже:</p>

<pre class="brush: js; highlight:[5,6,7,8,9,10]">function collisionDetection() {
    for(var c=0; c&lt;brickColumnCount; c++) {
        for(var r=0; r&lt;brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x &gt; b.x &amp;&amp; x &lt; b.x+brickWidth &amp;&amp; y &gt; b.y &amp;&amp; y &lt; b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}</pre>

<h2 id="Активация_нашего_обнаружения_столкновений">Активация нашего обнаружения столкновений</h2>

<p>Последнее, что нужно сделать, это добавить вызов функции <code>collisionDetection()</code> в нашу основную функцию <code>draw()</code> . Добавьте следующую строку в функцию <code>draw()</code> , чуть ниже <code>drawPaddle()</code> :</p>

<pre class="brush: js">collisionDetection();
</pre>

<h2 id="Сравните_свой_код">Сравните свой код</h2>

<p>Обнаружение столкновения шара теперь выполняется на каждом кадре и для каждого кирпича. Теперь мы можем ломать кирпичи! : -</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/mkwtxgc3/3/","","395")}}</p>

<div class="note">
<p><strong>Упражнение</strong> : измените цвет шара, когда он ударит по кирпичу.</p>
</div>

<h2 id="Следующие_шаги">Следующие шаги</h2>

<p>Мы уверенно движемся вперёд! Поехали! В восьмой главе мы будем учиться <a href="https://translate.googleusercontent.com/translate_c?act=url&amp;depth=1&amp;hl=ru&amp;ie=UTF8&amp;prev=_t&amp;rurl=translate.google.com&amp;sl=en&amp;sp=nmt4&amp;tl=ru&amp;u=https://developer.mozilla.org/en-US/docs/Games/Workflows/Breakout_game_from_scratch/Track_the_score_and_win&amp;xid=25657,15700022,15700124,15700149,15700168,15700186,15700190,15700201,15700205&amp;usg=ALkJrhhN9U9TuRM07dQaU3Oyqz2-F5ctig">отслеживать счёт и выигрывать</a> .</p>

<p>{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}</p>
