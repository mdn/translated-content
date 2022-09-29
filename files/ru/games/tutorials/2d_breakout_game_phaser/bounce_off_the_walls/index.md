---
title: Отскакивания
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
translation_of: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
original_slug: Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Bounce_off_the_walls
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/ru/docs/")}}</div>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Physics", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Платформа_и_управление")}}</p>

<div class="summary">
<p>Это <strong>6 урок </strong>из 16 <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser">Руководства разработки игры с помощью Phaser</a>. Вы можете найти исходный код того как должен выглядеть код после завершения урока здесь: <a href="https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson06.html">Gamedev-Phaser-Content-Kit/demos/lesson06.html</a>.</p>
</div>

<p><span class="seoSummary">Теперь, когда мы познакомились с физикой, мы можем начать реализовывать определение столкновений в игре — сначала посмотрим на "стены".</span></p>

<h2 id="Отскакивание_от_границ_представления">Отскакивание от границ представления</h2>

<p>Самый простой способ заставить мячик от стен это сообщить фреймворку что мы хотим рассматривать границы элемента {{htmlelement("canvas")}} как стены и не позволять мячу проходить через них. В Phaser это может быть просто реализовано с помощью свойства <code>collideWorldsBound</code>. Добавьте этот код сразу после существующего вызова метода <code>game.physics.enable()</code>:</p>

<pre class="brush: js">ball.body.collideWorldBounds = true;
</pre>

<p>Теперь мяч будет останавливаться у границ экрана, вместо того чтобы исчезать, но он не отскакивает. Чтобы это происходило нам нужно установить его "отскакиваемость". Добавите следующий код ниже предыдущей строки:</p>

<pre class="brush: js">ball.body.bounce.set(1);
</pre>

<p>Попробуйте перезагрузить index.html опять — теперь мяч отскакивает от стен и движется внутри холста canvas.</p>

<h2 id="Сравните_ваш_код">Сравните ваш код</h2>

<p>Вы можете сравнить получившийся код из этого урока в превью и поиграть с ним, чтобы лучше понять как он работает:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/dcw36opz/","","400")}}</p>

<h2 id="Следующие_шаги">Следующие шаги</h2>

<p>Это начинает больше походить на игру, но мы никак не можем её контролировать — самое время добавить <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/%D0%9F%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0_%D0%B8_%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5">рычаги управления для игрока</a>.</p>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Physics", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Платформа_и_управление")}}</p>
