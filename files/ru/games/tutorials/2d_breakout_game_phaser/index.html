---
title: 2D игра на Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
tags:
  - 2D
  - Canvas
  - JavaScript
  - Phaser
  - Игры
  - Начинающий
  - Руководство
  - туториал
translation_of: Games/Tutorials/2D_breakout_game_Phaser
original_slug: Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser
---
<div>{{GamesSidebar}}</div>

<div>{{IncludeSubnav("/ru/docs/")}}</div>

<p>{{Next("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework")}}</p>

<p class="summary">В этом пошаговом руководстве мы создадим простую мобильную игру <strong>MDN Breakout</strong> с помощью JavaScript и фреймворка <a href="https://phaser.io/">Phaser</a>.</p>

<p>Каждый шаг будет сопровождаться настраиваемым и живым примером для того, чтобы вы могли видеть, что должно получиться на промежуточных этапах создания. Вы узнаете основы для работы с фреймворком Phaser: рендер и движение картинок, определение столкновения, управление, встроенные вспомогательные функции, анимации и отрисовка кадров, изменение игровой статистки.  </p>

<p>Чтобы получить наибольшую пользу от этого руководства, вам необходимо иметь базовые знания <a href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics">JavaScript</a>. После прочтения вы научитесь создавать собственные простые веб-игры с помощью Phaser.</p>

<p><img alt="Gameplay screen from the game MDN Breakout created with Phaser where you can use your paddle to bounce the ball and destroy the brick field, with keeping the points and lives." src="https://mdn.mozillademos.org/files/11323/mdn-breakout-phaser.png" style="display: block; height: 320px; margin: 0px auto; width: 480px;"></p>

<h2 id="Дополнительно">Дополнительно</h2>

<p>Все уроки и различные версии <a href="https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html">MDN Breakout</a>, которые мы сделаем вместе, доступны на <a href="https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/">GitHub</a>: </p>

<ol>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework">Инициализация фреймворка</a></li>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Scaling">Масштабирование</a></li>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Load_the_assets_and_print_them_on_screen">Загрузка ресурсов и их вывод</a></li>
 <li><a href="ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Move_the_ball">Движение мяча</a></li>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Physics">Физика</a></li>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Bounce_off_the_walls">Отскакивание от стен</a></li>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Платформа_и_управление">Управление</a></li>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Game_over">Конец игры</a></li>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Создание_кирпичей">Создание поля блоков</a></li>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Обработка_коллизий">Определение столкновения</a></li>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Очки">Счёт</a></li>
 <li><a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Победа">Победа в игре</a></li>
 <li><a href="/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives">Добавление жизней</a></li>
 <li><a href="/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens">Анимация</a></li>
 <li><a href="/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons">Кнопки</a></li>
 <li><a href="/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay">Создание случайных событий</a></li>
</ol>

<p>Также мы хотели бы заметить, что лучший способ научиться создавать веб-игры - это чистый (pure) JavaScript. Если вы ещё не знакомы с разработкой на чистом JavaScript, то мы предлагаем вам первым делом пройти туториал <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript">2D игра на чистом JavaScript</a>.</p>

<p>После этого вы можете выбрать любой фреймворк и использовать его в своих проектах. Мы выбрали Phaser, потому что это прочный фреймворк с хорошей поддержкой, открытым сообществом и набором различных плагинов. Фреймворки ускоряют разработку и заботятся о скучных вещах, позволяя вам сосредоточиться на самом весёлом. Однако они не идеальны, так что если что-то пойдёт не так или вы захотите написать функцию, которую фреймворк не поддерживает, то вам пригодятся знания чистого JavaScript.</p>

<div class="note">
<p><strong>Примечание: </strong>Эта серия статей может быть использована, как материал для создания игр в мастерских разработчиков. Также вы можете использовать <a href="https://github.com/end3r/Gamedev-Phaser-Content-Kit">Gamedev Phaser Content</a>, который сделан на основе этого руководства, если захотите углубиться в разработку игр с помощью Phaser.</p>
</div>

<h2 id="Следующие_шаги">Следующие шаги</h2>

<p>Давайте начнём! Первая часть руководства — это <a href="/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework">Инициализация фреймворка</a>.</p>

<p>{{Next("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework")}}</p>
