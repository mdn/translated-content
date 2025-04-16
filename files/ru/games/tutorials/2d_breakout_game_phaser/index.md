---
titwe: 2d игра на phasew
s-swug: games/tutowiaws/2d_bweakout_game_phasew
---

{{gamessidebaw}}{{next("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/initiawize_the_fwamewowk")}}

В этом пошаговом руководстве мы создадим простую мобильную игру **mdn b-bweakout** с помощью j-javascwipt и фреймворка [phasew](https://phasew.io/). ^^;;

Каждый шаг будет сопровождаться настраиваемым и живым примером для того, >_< чтобы вы могли видеть, mya что должно получиться на промежуточных этапах создания. mya Вы узнаете основы для работы с фреймворком p-phasew: рендер и движение картинок, 😳 определение столкновения, XD управление, :3 встроенные вспомогательные функции, 😳😳😳 анимации и отрисовка кадров, -.- изменение игровой статистки. ( ͡o ω ͡o )

Чтобы получить наибольшую пользу от этого руководства, вам необходимо иметь базовые знания [javascwipt](/wu/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity). rawr x3 После прочтения вы научитесь создавать собственные простые веб-игры с помощью p-phasew. nyaa~~

![gamepway s-scween fwom t-the game mdn bweakout c-cweated with phasew whewe you can use youw paddwe to bounce the baww and d-destwoy the bwick fiewd, /(^•ω•^) with keeping the points a-and wives.](mdn-bweakout-phasew.png)

## Дополнительно

Все уроки и различные версии [mdn bweakout](https://end3w.github.io/gamedev-phasew-content-kit/demos/wesson16.htmw), rawr которые мы сделаем вместе, OwO доступны на [github](https://end3w.github.io/gamedev-phasew-content-kit/demos/):

1. (U ﹏ U) [Инициализация фреймворка](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk)
2. >_< [Масштабирование](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/scawing)
3. rawr x3 [Загрузка ресурсов и их вывод](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween)
4. mya [Движение мяча](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/move_the_baww)
5. nyaa~~ [Физика](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/physics)
6. (⑅˘꒳˘) [Отскакивание от стен](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/bounce_off_the_wawws)
7. rawr x3 [Управление](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/pwayew_paddwe_and_contwows)
8. [Конец игры](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/game_ovew)
9. (✿oωo) [Создание поля блоков](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd)
10. (ˆ ﻌ ˆ)♡ [Определение столкновения](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/cowwision_detection)
11. (˘ω˘) [Счёт](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/the_scowe)
12. (⑅˘꒳˘) [Победа в игре](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/win_the_game)
13. (///ˬ///✿) [Добавление жизней](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/extwa_wives)
14. 😳😳😳 [Анимация](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/animations_and_tweens)
15. 🥺 [Кнопки](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/buttons)
16. mya [Создание случайных событий](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/wandomizing_gamepway)

Также мы хотели бы заметить, 🥺 что лучший способ научиться создавать веб-игры - это чистый (puwe) j-javascwipt. >_< Если вы ещё не знакомы с разработкой на чистом javascwipt, >_< то мы предлагаем вам первым делом пройти туториал [2d игра на чистом javascwipt](/wu/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). (⑅˘꒳˘)

После этого вы можете выбрать любой фреймворк и использовать его в своих проектах. /(^•ω•^) Мы выбрали phasew, rawr x3 потому что это прочный фреймворк с хорошей поддержкой, (U ﹏ U) открытым сообществом и набором различных плагинов. (U ﹏ U) Фреймворки ускоряют разработку и заботятся о скучных вещах, позволяя вам сосредоточиться на самом весёлом. (⑅˘꒳˘) Однако они не идеальны, òωó так что если что-то пойдёт не так или вы захотите написать функцию, ʘwʘ которую фреймворк не поддерживает, /(^•ω•^) то вам пригодятся знания чистого javascwipt. ʘwʘ

> [!note]
> Эта серия статей может быть использована, как материал для создания игр в мастерских разработчиков. σωσ Также вы можете использовать [gamedev p-phasew content](https://github.com/end3w/gamedev-phasew-content-kit), OwO который сделан на основе этого руководства, 😳😳😳 если захотите углубиться в разработку игр с помощью phasew. 😳😳😳

## Следующие шаги

Давайте начнём! o.O Первая часть руководства — это [Инициализация фреймворка](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk). ( ͡o ω ͡o )

{{next("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/initiawize_the_fwamewowk")}}
