---
title: 2D игра на чистом JavaScript
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
tags:
  - 2D
  - Canvas
  - JavaScript
  - TopicStub
  - Игры
  - Начинающий
  - Руководство
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/en-US/docs/Games")}}</div>

<p>{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Создание_Canvas_и_рисование_на_нём")}}</p>

<p class="summary">В этом пошаговом руководстве мы создадим простую игру <strong>MDN Breakout,</strong> написанную на чистом JavaScript и отрендеренную на HTML5 {{htmlelement("canvas")}}.</p>

<p>К каждому шагу прилагаются редактируемые live-примеры, с которыми можно поиграть, чтобы увидеть, как должна выглядеть игра на промежуточных этапах. Вы изучите основы использования элемента {{htmlelement("canvas")}} для реализации таких фундаментальных игровых механик, как рендеринг и перемещение изображений, обнаружение столкновений, механизмы управления, а также состояния выигрыша и проигрыша.</p>

<p>Для извлечения максимальной пользы из этой серии статей необходимо иметь средние (или хотя бы базовые) знания языка <a href="/en-US/Learn/Getting_started_with_the_web/JavaScript_basics">JavaScript</a>. После прохождения этого урока вы сможете создавать собственные простые браузерные игры.</p>

<p><img alt="Gameplay screen from the game MDN Breakout where you can use your paddle to bounce the ball and destroy the brick field, with keeping the score and lives." src="https://mdn.mozillademos.org/files/10383/mdn-breakout-gameplay.png" style="display: block; height: 320px; margin: 0px auto; width: 480px;"></p>

<h2 id="Детали_к_урокам">Детали к урокам</h2>

<p>Все уроки и версии игры <a href="http://breakout.enclavegames.com/lesson10.html">MDN Breakout </a>доступны в <a href="https://github.com/end3r/Canvas-gamedev-workshop">GitHub</a>:</p>

<ol>
 <li><a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it">Создание Canvas и рисование на нем</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball">Движение мяча</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls">Реакция при столкновении со стеной</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls">Управление</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over">Конец игры</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field">Построение поля кирпичей</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection">Реакция при столкновении</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win">Счёт и выигрыш</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls">Контроль мышью</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up">Заключение</a></li>
</ol>

<p>Лучший способ получить надёжные знания в области разработки браузерных игр — это начать с чистого JavaScript. Затем можно выбрать любой фреймворк для использования в своих проектах. Фреймворки — это инструменты, созданные на языке JavaScript; поэтому, даже если вы планируете работать с ними, нелишним будет сначала изучить сам язык, чтобы понимать, что именно происходит внутри. Фреймворки ускоряют разработку и помогают справиться со скучными частями игры, но если что-то работает не так, как ожидалось, всегда можно попытаться отладить код или написать собственное решение на чистом JavaScript.</p>

<div class="note">
<p><strong>Примечание.</strong> Если вам интересно узнать о разработке двухмерных игр с помощью игровой библиотеки, ознакомьтесь с альтернативной серией статей <a href="/en-US/docs/Games/Workflows/2D_breakout_game_Phaser">2D игра Breakout с использованием Phaser</a>.</p>
</div>

<div class="note">
<p><span style="font-size: 14px;"><strong>Примечание.</strong></span> Эту серию статей можно использовать как материал для практических занятий по разработке игр. Также можно воспользоваться набором инструментов <a href="https://github.com/end3r/Gamedev-Canvas-Content-Kit">Gamedev Canvas Content Kit</a>, основанном на этом уроке, если нужно сделать доклад о разработке игр в целом.</p>
</div>

<h2 id="Следующий_шаг">Следующий шаг</h2>

<p>Ладно, давайте начнём! Перейдите к первой главе — <a href="/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it">Создание Canvas и рисование на нем</a>.</p>

<p>{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}} </p>
