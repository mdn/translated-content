---
title: 2D игра на чистом JavaScript
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
---

{{GamesSidebar}}{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Создание_Canvas_и_рисование_на_нём")}}

В этом пошаговом руководстве мы создадим простую игру **MDN Breakout,** написанную на чистом JavaScript и отрендеренную на HTML5 {{htmlelement("canvas")}}.

К каждому шагу прилагаются редактируемые live-примеры, с которыми можно поиграть, чтобы увидеть, как должна выглядеть игра на промежуточных этапах. Вы изучите основы использования элемента {{htmlelement("canvas")}} для реализации таких фундаментальных игровых механик, как рендеринг и перемещение изображений, обнаружение столкновений, механизмы управления, а также состояния выигрыша и проигрыша.

Для извлечения максимальной пользы из этой серии статей необходимо иметь средние (или хотя бы базовые) знания языка [JavaScript](/en-US/Learn/Getting_started_with_the_web/JavaScript_basics). После прохождения этого урока вы сможете создавать собственные простые браузерные игры.

![Gameplay screen from the game MDN Breakout where you can use your paddle to bounce the ball and destroy the brick field, with keeping the score and lives.](mdn-breakout-gameplay.png)

## Детали к урокам

Все уроки и версии игры [MDN Breakout](http://breakout.enclavegames.com/lesson10.html) доступны в [GitHub](https://github.com/end3r/Canvas-gamedev-workshop):

1. [Создание Canvas и рисование на нем](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [Движение мяча](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [Реакция при столкновении со стеной](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [Управление](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [Конец игры](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over)
6. [Построение поля кирпичей](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [Реакция при столкновении](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [Счёт и выигрыш](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [Контроль мышью](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [Заключение](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up)

Лучший способ получить надёжные знания в области разработки браузерных игр — это начать с чистого JavaScript. Затем можно выбрать любой фреймворк для использования в своих проектах. Фреймворки — это инструменты, созданные на языке JavaScript; поэтому, даже если вы планируете работать с ними, нелишним будет сначала изучить сам язык, чтобы понимать, что именно происходит внутри. Фреймворки ускоряют разработку и помогают справиться со скучными частями игры, но если что-то работает не так, как ожидалось, всегда можно попытаться отладить код или написать собственное решение на чистом JavaScript.

> **Примечание:** Если вам интересно узнать о разработке двухмерных игр с помощью игровой библиотеки, ознакомьтесь с альтернативной серией статей [2D игра Breakout с использованием Phaser](/ru/docs/Games/Workflows/2D_breakout_game_Phaser).

> **Примечание:** Эту серию статей можно использовать как материал для практических занятий по разработке игр. Также можно воспользоваться набором инструментов [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit), основанном на этом уроке, если нужно сделать доклад о разработке игр в целом.

## Следующий шаг

Ладно, давайте начнём! Перейдите к первой главе — [Создание Canvas и рисование на нем](/ru/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it).

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
