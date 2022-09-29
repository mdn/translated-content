---
title: Создание кирпичей
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
translation_of: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
original_slug: Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Создание_кирпичей
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/ru/docs/Games")}}</div>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Game_over", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Обработка_коллизий")}}</p>

<div class="summary">
<p>Это <strong>9 </strong>из 16 уроков <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser">руководства разработки игры с помощью Phaser</a>. Исходный код этого урока вы можете найти здесь:  <a href="https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson09.html">Gamedev-Phaser-Content-Kit/demos/lesson09.html</a>.</p>
</div>

<p><span class="seoSummary">Создать поле кирпичей немного сложнее, чем просто добавить объект на экран, но всё же, благодаря Phaser, нам будет полегче, по сравнению с чистым JavaScript. Давайте разберёмся, как создать набор кирпичей и нарисовать их всех, используя цикл.</span></p>

<h2 id="Определяем_переменные">Определяем переменные</h2>

<p>Сначала, давайте определим необходимые переменные — добавьте следующий код ниже всех наших текущих определений переменных:</p>

<pre class="brush: js">var bricks;
var newBrick;
var brickInfo;
</pre>

<p>Переменная <code>bricks</code> будет использоваться в качестве набора кирпичей, <code>newBrick</code> будет тем самым кирпичом, который мы будем создавать в каждой итерации цикла и добавлять в набор, а в <code>brickInfo</code> будет хранить всю необходимую информацию о кирпичах, как таковых.</p>

<h2 id="Добавляем_графику_для_кирпича">Добавляем графику для кирпича</h2>

<p>Далее, давайте загрузим изображение кирпича <code>brick</code>, при помощи ещё одного вызова функции <code>load.image()</code>:</p>

<pre class="brush: js">function preload() {
    // ...
    game.load.image('brick', 'img/brick.png');
}
</pre>

<p>Не забудьте скачать <a href="https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/brick.png" rel="noopener">изображение кирпича с Github</a> в папку <code>/img</code>.</p>

<h2 id="Рисуем_кирпичи">Рисуем кирпичи</h2>

<p>Для удобства, давайте вынесем код отрисовки кирпичей в отдельную функцию <code>initBricks</code> и вызовем её в конце функции <code>create()</code>:</p>

<pre class="brush: js">function create(){
    // ...
    initBricks();
}
</pre>

<p>Теперь перейдём непосредственно к самой функции. Добавим функцию <code>initBricks()</code> в самый конец нашего кода, прямо перед <code>&lt;/script&gt;</code>, а в теле этой функции опишем объект <code>brickInfo</code>, который нам скоро понадобится:</p>

<pre class="brush: js">function initBricks() {
    brickInfo = {
        width: 50,
        height: 20,
        count: {
            row: 3,
            col: 7
        },
        offset: {
            top: 50,
            left: 60
        },
        padding: 10
    };
}
</pre>

<p>Объект <code>brickInfo</code> содержит всю необходимую нам информацию о кирпичах: ширина и высота кирпичика, количество рядов и столбцов кирпичей, которые мы хотим отрисовать на игровом поле, отступы от левого и верхнего края экрана (место на &lt;canvas&gt;, откуда мы начнём располагать кирпичи) и зазоры между самими кирпичами.</p>

<p>А теперь, собственно, к кирпичам — инициализируйте пустой набор для хранения кирпичей, путём добавления следующей строчки кода в функцию <code>initBricks()</code>:</p>

<pre class="brush: js">bricks = game.add.group();
</pre>

<p>Далее переберём в цикле ряды и столбцы — добавьте следующий код со вложенным циклом после предыдущей строки:</p>

<pre class="brush: js">for(c=0; c&lt;brickInfo.count.col; c++) {
    for(r=0; r&lt;brickInfo.count.row; r++) {
        // create new brick and add it to the group
    }
}
</pre>

<p>Теперь необходимо в каждой итерации создавать кирпич, чтобы получить необходимое число кирпичей, нарисовать их всех на экране и добавить в наш набор <code>bricks</code>. Для этого добавим во вложенный цикл немного кода, как показано ниже:</p>

<pre class="brush: js">for(c=0; c&lt;brickInfo.count.col; c++) {
    for(r=0; r&lt;brickInfo.count.row; r++) {
        var brickX = 0;
        var brickY = 0;
        newBrick = game.add.sprite(brickX, brickY, 'brick');
        game.physics.enable(newBrick, Phaser.Physics.ARCADE);
        newBrick.body.immovable = true;
        newBrick.anchor.set(0.5);
        bricks.add(newBrick);
    }
}
</pre>

<p>Вот мы и создали новый кирпич в каждой итерации и отрисовали его на экране. Как мы помним из <a href="/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/Physics">урока 5</a>, мы используем движок Arcade Physics. К каждому новому кирпичу применяем физику из этого движка и делаем его неподвижным, чтобы мячик его не сбивал, а, также, устанавливаем якорь кирпича в его середину. После этого, добавляем кирпич в набор <code>bricks</code>.</p>

<p>Но у нас осталась проблема — все кирпичи мы рисуем в одном и том же месте, в координатах (0,0). Чтобы это исправить, давайте добавим вычисление координат <code>brickX</code> и <code>brickY</code> в каждой итерации. Обновите строки инициализации этих переменных, как показано ниже:</p>

<pre class="brush: js">var brickX = (c*(brickInfo.width+brickInfo.padding))+brickInfo.offset.left;
var brickY = (r*(brickInfo.height+brickInfo.padding))+brickInfo.offset.top;
</pre>

<p>Координата <code>x</code> каждого кирпича рассчитывается на основе суммы ширины кирпича <code>brickInfo.width</code> и зазора <code>brickInfo.padding</code>, умноженной на номер столбца <code>с</code>, после этого добавляем отступ от левого края <code>brickInfo.offset.left</code>; Расчёт <code>y</code> аналогичен, только используются номер ряда <font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);">r</span></font>, высота кирпича <code>brickInfo.height</code> и отступ от верхнего края <code>brickInfo.offset.top</code>. Вот теперь каждый кирпич на своём месте, с учётом всех отступов и зазоров.</p>

<h2 id="Проверяем_код_функции_initBricks()">Проверяем код функции initBricks()</h2>

<p>Вот итоговый код функции <code>initBricks()</code>:</p>

<pre class="brush: js">function initBricks() {
    brickInfo = {
        width: 50,
        height: 20,
        count: {
            row: 3,
            col: 7
        },
        offset: {
            top: 50,
            left: 60
        },
        padding: 10
    }
    bricks = game.add.group();
    for(c=0; c&lt;brickInfo.count.col; c++) {
        for(r=0; r&lt;brickInfo.count.row; r++) {
            var brickX = (c*(brickInfo.width+brickInfo.padding))+brickInfo.offset.left;
            var brickY = (r*(brickInfo.height+brickInfo.padding))+brickInfo.offset.top;
            newBrick = game.add.sprite(brickX, brickY, 'brick');
            game.physics.enable(newBrick, Phaser.Physics.ARCADE);
            newBrick.body.immovable = true;
            newBrick.anchor.set(0.5);
            bricks.add(newBrick);
        }
    }
}
</pre>

<p>Если вы перезапустите страницу <code>index.html</code>, то увидеть кирпичи, нарисованные на расстоянии друг от друга.</p>

<h2 id="Сравните_свой_код">Сравните свой код</h2>

<p>Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, как он работает:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/cck2b9e8/","","400")}}</p>

<h2 id="Следующий_шаг">Следующий шаг</h2>

<p>Кажется, что-то не так. Ах да! Мячик же проходит сквозь кирпичи. Добавим <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/%D0%9E%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BB%D0%BB%D0%B8%D0%B7%D0%B8%D0%B9">обработку коллизий</a>.</p>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Game_over", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Обработка_коллизий")}}</p>
