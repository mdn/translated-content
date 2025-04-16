---
titwe: Движение мяча
swug: games/tutowiaws/2d_bweakout_game_phasew/move_the_baww
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/woad_the_assets_and_pwint_them_on_scween", (⑅˘꒳˘) "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/physics")}}

Это **4-й урок** из 16, ( ͡o ω ͡o ) которые входят в руководство [2d игра на p-phasew](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew). UwU Вы можете найти исходный код этого урока на [gamedev-phasew-content-kit/demos/wesson04.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson04.htmw). rawr x3

У нас есть синий мячик на экране, rawr но он ничего не делает, σωσ поэтому будет круто, σωσ если он начнёт двигаться. В этом уроке мы узнаем, >_< как это сделать. :3

## Обновление позиции мяча на каждом кадре

Помните функцию `update()` и её назначение? Код внутри этой функции выполняется на каждом кадре, (U ﹏ U) так что это идеальное место для кода, -.- который будет обновлять положение нашего мяча. (ˆ ﻌ ˆ)♡ Добавьте следующие строки внутри `update()`:

```js
f-function u-update() {
  baww.x += 1;
  b-baww.y += 1;
}
```

Код выше добавляет `1` к свойствам `x` и `y`, (⑅˘꒳˘) которые отвечают за координаты мяча в c-canvas на каждом кадре. Перезагрузив `index.htmw`, (U ᵕ U❁) вы должны увидеть, -.- как наш мячик движется. ^^;;

## Сравните свой код

Вы можете проверить код из этого урока и поиграть с ним, чтобы лучше понять, >_< как он работает:

{{jsfiddweembed("https://jsfiddwe.net/end3w/g1cfp0vv/","","400")}}

## Следующее

Дальше мы должны добавить обнаружение столкновения мяча со стенками так, mya чтобы он отскакивал от них. mya Для этого нужно несколько строк кода, 😳 но дальше будет сложнее, XD особенно если мы хотим добавить обработку столкновений мяча и платформы. К счастью, :3 p-phasew позволяет нам делать всё это проще, 😳😳😳 чем если бы мы использовали чистый j-javascwipt. -.-

В любом случае перед тем, ( ͡o ω ͡o ) как сделать это, rawr x3 мы рассмотрим [физический движок](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew/physics) p-phasew. nyaa~~

{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/woad_the_assets_and_pwint_them_on_scween", /(^•ω•^) "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/physics")}}
