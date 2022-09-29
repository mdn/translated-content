---
title: Обработка коллизий
slug: Games/Tutorials/2D_breakout_game_Phaser/Collision_detection
translation_of: Games/Tutorials/2D_breakout_game_Phaser/Collision_detection
original_slug: Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Обработка_коллизий
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/ru/docs")}}</div>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Создание_кирпичей", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Очки")}}</p>

<div class="summary">
<p>Это <strong>10 </strong>из 16 уроков <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser">руководства разработки игры с помощью Phaser</a>. Исходный код этого урока вы можете найти здесь:  <a href="https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson10.html">Gamedev-Phaser-Content-Kit/demos/lesson10.html</a>.</p>
</div>

<p><span class="seoSummary">Наша текущая задач — проверка коллизий между мячиком и кирпичами. К счастью, при помощи движка, мы можем проверить коллизии не только между двумя объектами (как это было с мячиком и платформой), но и между объектом и набором других объектов.</span></p>

<h2 id="Проверяем_коллизии_МячикКирпич">Проверяем коллизии Мячик/Кирпич</h2>

<p>Физический движок облегчает очень многие задачи — нам понадобится, всего лишь, несколько простых кусочков кода. Для начала, добавим в функцию <code>update()</code> строчку проверки коллизий между мячиком и кирпичами, как показано ниже:</p>

<pre class="brush: js">function update() {
    game.physics.arcade.collide(ball, paddle);
    game.physics.arcade.collide(ball, bricks, ballHitBrick);
    paddle.x = game.input.x || game.world.width*0.5;
}
</pre>

<p>Теперь будет отслеживаться положение мячика, относительно всех кирпичей из набора <code>bricks</code>. Третьим (опциальным) параметром, мы передаём функцию, которая будет выполняться каждый раз, когда будет найдена коллизия — <code>ballHitBrick</code>. Давайте создадим эту функцию в самом конце нашего кода, прямо перед <code>&lt;/script&gt;</code>:</p>

<pre class="brush: js">function ballHitBrick(ball, brick) {
    brick.kill();
}
</pre>

<p>Вот и всё! Перезагрузите страницу и вы увидите, что все коллизии обрабатывается, как следует.</p>

<p>Спасибо Phaser за то, что передал нам в функцию эти два параметра — мячик и тот кирпич, с которым у мячика произошла коллизия. А дальше мы просто удаляем кирпич с экрана, вызвав у него функцию <code>kill()</code>.</p>

<p>Вы думали, что нам придётся писать много кода для отслеживания коллизий, как мы это делали на <a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection">чистом JavaScript</a>? В этом и прелесть фреймворков — рутину они сделают за нас, а мы, в это время, можем сосредоточиться на действительно интересных вещах.</p>

<h2 id="Сравните_свой_код">Сравните свой код</h2>

<p>Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, как он работает:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/wwneakwf/","","400")}}</p>

<h2 id="Следующий_шаг">Следующий шаг</h2>

<p>Теперь мы можем разбивать кирпичи, а это уже отличное дополнение к нашему геймплею. Будет ещё лучше, если мы сможем считать количество разбитых кирпичей и присуждать за это <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/%D0%9E%D1%87%D0%BA%D0%B8">очки</a>.</p>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Создание_кирпичей", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Очки")}}</p>
