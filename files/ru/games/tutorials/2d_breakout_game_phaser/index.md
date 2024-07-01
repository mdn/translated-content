---
title: 2D игра на Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
---

{{GamesSidebar}}{{Next("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework")}}

В этом пошаговом руководстве мы создадим простую мобильную игру **MDN Breakout** с помощью JavaScript и фреймворка [Phaser](https://phaser.io/).

Каждый шаг будет сопровождаться настраиваемым и живым примером для того, чтобы вы могли видеть, что должно получиться на промежуточных этапах создания. Вы узнаете основы для работы с фреймворком Phaser: рендер и движение картинок, определение столкновения, управление, встроенные вспомогательные функции, анимации и отрисовка кадров, изменение игровой статистки.

Чтобы получить наибольшую пользу от этого руководства, вам необходимо иметь базовые знания [JavaScript](/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics). После прочтения вы научитесь создавать собственные простые веб-игры с помощью Phaser.

![Gameplay screen from the game MDN Breakout created with Phaser where you can use your paddle to bounce the ball and destroy the brick field, with keeping the points and lives.](mdn-breakout-phaser.png)

## Дополнительно

Все уроки и различные версии [MDN Breakout](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html), которые мы сделаем вместе, доступны на [GitHub](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/):

1. [Инициализация фреймворка](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework)
2. [Масштабирование](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Scaling)
3. [Загрузка ресурсов и их вывод](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Load_the_assets_and_print_them_on_screen)
4. [Движение мяча](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Move_the_ball)
5. [Физика](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Physics)
6. [Отскакивание от стен](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Bounce_off_the_walls)
7. [Управление](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Платформа_и_управление)
8. [Конец игры](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Game_over)
9. [Создание поля блоков](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Создание_кирпичей)
10. [Определение столкновения](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Обработка_коллизий)
11. [Счёт](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Очки)
12. [Победа в игре](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Победа)
13. [Добавление жизней](/ru/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [Анимация](/ru/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [Кнопки](/ru/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [Создание случайных событий](/ru/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

Также мы хотели бы заметить, что лучший способ научиться создавать веб-игры - это чистый (pure) JavaScript. Если вы ещё не знакомы с разработкой на чистом JavaScript, то мы предлагаем вам первым делом пройти туториал [2D игра на чистом JavaScript](/ru/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript).

После этого вы можете выбрать любой фреймворк и использовать его в своих проектах. Мы выбрали Phaser, потому что это прочный фреймворк с хорошей поддержкой, открытым сообществом и набором различных плагинов. Фреймворки ускоряют разработку и заботятся о скучных вещах, позволяя вам сосредоточиться на самом весёлом. Однако они не идеальны, так что если что-то пойдёт не так или вы захотите написать функцию, которую фреймворк не поддерживает, то вам пригодятся знания чистого JavaScript.

> **Примечание:** Эта серия статей может быть использована, как материал для создания игр в мастерских разработчиков. Также вы можете использовать [Gamedev Phaser Content](https://github.com/end3r/Gamedev-Phaser-Content-Kit), который сделан на основе этого руководства, если захотите углубиться в разработку игр с помощью Phaser.

## Следующие шаги

Давайте начнём! Первая часть руководства — это [Инициализация фреймворка](/ru/docs/Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework).

{{Next("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Initialize_the_framework")}}
