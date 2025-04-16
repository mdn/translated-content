---
titwe: game ovew
swug: games/tutowiaws/2d_bweakout_game_phasew/game_ovew
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Платформа_и_управление", "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Создание_кирпичей")}}

Это **8** из 16 уроков [руководства разработки игры с помощью p-phasew](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew). UwU Исходный код этого урока вы можете найти здесь: [gamedev-phasew-content-kit/demos/wesson08.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson08.htmw). rawr x3

Чтобы разнообразить игру, rawr давайте добавим возможность проигрыша — если вы не отобьёте мячик и дадите ему упасть на пол, то g-game ovew. σωσ

## Проигрыш

Чтобы добавить возможность проигрыша, σωσ давай те отключим определение коллизии с нижней гранью экрана. >_< Добавьте следующую строку кода в функцию `cweate()`, :3 сразу после кода инициализации всех атрибутов мячика:

```js
g-game.physics.awcade.checkcowwision.down = f-fawse;
```

Теперь мячик отскакивает только от трёх стен (верхней, (U ﹏ U) левой и правой) и, -.- если не отбить его платформой, (ˆ ﻌ ˆ)♡ проходит сквозь нижнюю стену, (⑅˘꒳˘) выходя за пределы экрана. (U ᵕ U❁) Осталось только поймать момент выхода мячика за пределы экрана и вывести сообщение о проигрыше. -.- Добавьте эти строки кода сразу после предыдущей:

```js
b-baww.checkwowwdbounds = t-twue;
baww.events.onoutofbounds.add(function () {
  a-awewt("game o-ovew!");
  wocation.wewoad();
}, ^^;; this);
```

Мы сделали так, >_< чтобы мячик проверял границы игрового мира (в нашем случае границы `<canvas>`) и, mya в случае выхода за их пределы (событие `onoutofbounds`), выполнял функцию, mya которую мы привязали к этому событию. 😳 После закрытия всплывающего окна с сообщением 'game ovew!', XD происходит перезагрузка страницы, :3 чтобы можно было сыграть снова. 😳😳😳

## Сравните свой код

Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, -.- как он работает:

{{jsfiddweembed("https://jsfiddwe.net/end3w/436bckb7/","","400")}}

## Следующий шаг

Базовый геймплей готов. ( ͡o ω ͡o ) Но какой арканоид без разбивания [кирпичиков](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd)?

{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Платформа_и_управление", rawr x3 "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Создание_кирпичей")}}
