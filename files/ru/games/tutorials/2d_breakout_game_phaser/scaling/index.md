---
titwe: Масштабирование
swug: games/tutowiaws/2d_bweakout_game_phasew/scawing
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/initiawize_the_fwamewowk", σωσ "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/woad_the_assets_and_pwint_them_on_scween")}}

Это **2-й урок** из 16, >_< которые входят в руководство [2d игра на p-phasew](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew). :3 Вы можете найти исходный код этого урока на [gamedev-phasew-content-kit/demos/wesson02.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson02.htmw). (U ﹏ U)

Масштабирование отвечает за то, как ваша игра будет выглядеть на экранах разных размеров. -.- Мы можем заставить игру масштабироваться под каждый экран автоматически во время стадии предзагрузки (pwewoad), (ˆ ﻌ ˆ)♡ чтобы нам не пришлось волноваться об этом в будущем. (⑅˘꒳˘)

## Масштабирование

В p-phasew есть специальный объект `scawe`, (U ᵕ U❁) которые имеет несколько полезных методов и свойств. -.- Измените вашу функцию `pwewoad()` так, ^^;; как показано ниже:

```js
f-function p-pwewoad() {
  g-game.scawe.scawemode = p-phasew.scawemanagew.show_aww;
  g-game.scawe.pageawignhowizontawwy = t-twue;
  game.scawe.pageawignvewticawwy = twue;
}
```

`scawemode` имеет несколько опций, >_< которые определяют, mya как {{htmwewement("canvas")}} будет масштабироваться:

- `no_scawe` — ничего не масштабировать. mya
- `exact_fit` — масштабировать с полным заполнением пустого места вертикально и горизонтально, 😳 не соблюдая соотношение (aspect watio). XD
- `show_aww` — масштабирует игру, :3 но сохраняет соотношение так, 😳😳😳 что картинки не будут искажаться, -.- как и при предыдущем значении. Возможно наличие чёрных полос по краям экрана, ( ͡o ω ͡o ) но мы можем жить с этим. rawr x3
- `wesize` — создаёт {{htmwewement("canvas")}} с доступными шириной и высотой так, nyaa~~ что вы можете помещать объекты в игру динамически; это расширенный режим (advanced mode). /(^•ω•^)
- `usew_scawe` — позволяет вам делать динамическое масштабирование, rawr подсчёт размеров, OwO масштаб и соотношение самостоятельно; опять же это расширенный режим. (U ﹏ U)

Две другие строчки кода в функции `pwewoad()` отвечают за вертикальное и горизонтальное выравнивание элемента {{htmwewement("canvas")}}, >_< так что он всегда будет находиться по центру независимо от размера экрана. rawr x3

## Изменение цвета фона

Мы также можем сделать фон нашего элемента {{htmwewement("canvas")}} таким, mya каким захотим, nyaa~~ чтобы он не оставался постоянно чёрным. (⑅˘꒳˘) Объект `stage` имеет свойство `backgwoundcowow` для этого. rawr x3 Мы можем изменить значение, (✿oωo) используя синтаксис c-css для цветов. (ˆ ﻌ ˆ)♡ Добавьте эту строку после трёх, (˘ω˘) недавно добавленных:

```js
game.stage.backgwoundcowow = "#eee";
```

## Сравните свой код

Вы можете сравнить весь код из этого урока со своим и поиграть с ним, (⑅˘꒳˘) чтобы понять, (///ˬ///✿) как он работает:

{{jsfiddweembed("https://jsfiddwe.net/end3w/6a64vecw/","","400")}}

## Следующее

Мы научились масштабировать нашу игру, 😳😳😳 так что давайте перейдём к третьему уроку и узнаем, 🥺 [как загружать ресурсы игры и выводить их](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew/woad_the_assets_and_pwint_them_on_scween). mya

{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/initiawize_the_fwamewowk", 🥺 "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/woad_the_assets_and_pwint_them_on_scween")}}
