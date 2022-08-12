---
title: Физика
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
tags:
  - 2D
  - Beginner
  - Canvas
  - JavaScript
  - Phaser
translation_of: Games/Tutorials/2D_breakout_game_Phaser/Physics
original_slug: Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Physics
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/ru/docs")}}</div>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Move_the_ball", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Bounce_off_the_walls")}}</p>

<div class="summary">
<p>Это <strong>5 урок </strong>из 16, которые входят в руководство <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser">2D игра на Phaser</a>. Вы можете найти исходный код этого урока на <a href="https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson05.html">Gamedev-Phaser-Content-Kit/demos/lesson05.html</a>.</p>
</div>

<p><span class="seoSummary">Для правильного определения столкновений нам необходима физика, и в этом уроке мы покажем, что есть у Phaser на этот счёт, продемонстрировав это на простом примере.</span></p>

<h2 id="Добавление_физики">Добавление физики</h2>

<p>В Phaser есть три разных физических движка: Arcade Physics, P2 и Ninja Physics. Также есть четвёртый Box2D как платный плагин. Для нашей простой игры мы будем использовать Arcade Physics, потому что нам не нужны сложные геометрические вычисления.</p>

<p>Во-первых, инициализируем Arcade Physics в нашей игре. Добавьте метод <code>physics.startSystem()</code> в начале функции <code>create()</code>. Убедитесь, что следующая строка кода находится в самом начале функции <code>create():</code></p>

<pre class="brush: js">game.physics.startSystem(Phaser.Physics.ARCADE);
</pre>

<p>Во-вторых, нам необходимо добавить мяч в физическую систему, потому что объект, отвечающий за физику в Phaser, не включён по умолчанию. Добавьте следующую строку в конце функции <code>create()</code>: </p>

<pre class="brush: js">game.physics.enable(ball, Phaser.Physics.ARCADE);
</pre>

<p>В-третьих, теперь мы можем установить значение свойства <code>velocity</code> нашего мяча через <code>body</code>. Добавьте следующую строку снова в конце функции <code>create()</code>:</p>

<pre class="brush: js">ball.body.velocity.set(150, 150);
</pre>

<h2 id="Удаление_предыдущих_инструкций_при_обновлении">Удаление предыдущих инструкций при обновлении</h2>

<p>Теперь нам надо убрать старый код, который добавлял 1 к координатам x и y в функции update(): </p>

<pre class="brush: js">function update() {
<s>    ball.x += 1;</s>
<s>    ball.y += 1;</s>
}
</pre>

<p>теперь мы сделали тоже самое, но на физическом движке.</p>

<h2 id="Финальный_код">Финальный код</h2>

<p>Весь код должен выглядеть вот так:</p>

<pre class="brush: js">var ball;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';
    game.load.image('ball', 'img/ball.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    ball = game.add.sprite(50, 50, 'ball');
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.velocity.set(150, 150);
}

function update() {
}
</pre>

<p>Снова перезагрузите index.html. Мячик должен постоянно двигаться в направлении, которое мы задали. На данный момент в физическом движке гравитация (gravity) и трение (friction) имеют нулевое значение. Добавление гравитации заставит мячик падать вниз, пока трение будет пытаться остановить его.</p>

<h2 id="Поиграйте_с_физикой">Поиграйте с физикой</h2>

<p>Вы можете делать гораздо больше вещей с физикой. Например, добавив <code>ball.body.gravity.y = 100</code>, вы установите вертикальную гравитацию для мячика. Как результат он будет сначала запущен вверх, но затем начнёт падать, находясь под действием гравитации.</p>

<p>Это лишь верхушка айсберга: есть огромное количество переменных и функции, с помощью которых вы можете взаимодействовать с физическими объектами. Посмотрите официальную <a href="http://phaser.io/docs/2.6.2/index#physics">документацию</a>, чтобы увидеть огромное количество примеров применения <a href="http://phaser.io/examples/v2/category/arcade-physics">Arcade</a> и <a href="http://phaser.io/examples/v2/category/p2-physics">P2</a>.</p>

<h2 id="Сравните_свой_код">Сравните свой код</h2>

<p>Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, как он работает:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/bjto9nj8/","","400")}}</p>

<h2 id="Следующее">Следующее</h2>

<p>Теперь мы можем посмотреть, как заставить мяч <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/Bounce_off_the_walls">отскакивать от стен</a>.</p>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Move_the_ball", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Bounce_off_the_walls")}}</p>
