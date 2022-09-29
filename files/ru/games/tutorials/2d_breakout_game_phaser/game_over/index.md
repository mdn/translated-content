---
title: Game over
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
translation_of: Games/Tutorials/2D_breakout_game_Phaser/Game_over
original_slug: Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Game_over
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/ru/docs/Games")}}</div>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Платформа_и_управление", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Создание_кирпичей")}}</p>

<div class="summary">
<p>Это <strong>8 </strong>из 16 уроков <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser">руководства разработки игры с помощью Phaser</a>. Исходный код этого урока вы можете найти здесь:  <a href="https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson08.html">Gamedev-Phaser-Content-Kit/demos/lesson08.html</a>.</p>
</div>

<p><span class="seoSummary">Чтобы разнообразить игру, давайте добавим возможность проигрыша — если вы не отобьёте мячик и дадите ему упасть на пол, то game over.</span></p>

<h2 id="Проигрыш">Проигрыш</h2>

<p>Чтобы добавить возможность проигрыша, давай те отключим определение коллизии с нижней гранью экрана. Добавьте следующую строку кода в функцию <code>create()</code>, сразу после кода инициализации всех атрибутов мячика:</p>

<pre class="brush: js">game.physics.arcade.checkCollision.down = false;
</pre>

<p>Теперь мячик отскакивает только от трёх стен (верхней, левой и правой) и, если не отбить его платформой, проходит сквозь нижнюю стену, выходя за пределы экрана. Осталось только поймать момент выхода мячика за пределы экрана и вывести сообщение о проигрыше. Добавьте эти строки кода сразу после предыдущей:</p>

<pre class="brush: js">ball.checkWorldBounds = true;
ball.events.onOutOfBounds.add(function(){
    alert('Game over!');
    location.reload();
}, this);
</pre>

<p>Мы сделали так, чтобы мячик проверял границы игрового мира (в нашем случае границы <code>&lt;canvas&gt;</code>) и, в случае выхода за их пределы (событие <code>onOutOfBounds</code>), выполнял функцию, которую мы привязали к этому событию. После закрытия всплывающего окна с сообщением 'Game over!', происходит перезагрузка страницы, чтобы можно было сыграть снова.</p>

<h2 id="Сравните_свой_код">Сравните свой код</h2>

<p>Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, как он работает:</p>

<p>{{JSFiddleEmbed("https://jsfiddle.net/end3r/436bckb7/","","400")}}</p>

<h2 id="Следующий_шаг">Следующий шаг</h2>

<p>Базовый геймплей готов. Но какой арканоид без разбивания <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Создание_кирпичей">кирпичиков</a>? </p>

<p>{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Платформа_и_управление", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Создание_кирпичей")}}</p>
