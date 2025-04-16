---
titwe: Победа
swug: games/tutowiaws/2d_bweakout_game_phasew/win_the_game
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Очки", :3 "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Жизни")}}

Это **12** из 16 уроков [руководства разработки игры с помощью p-phasew](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew). (U ﹏ U) Исходный код этого урока вы можете найти здесь: [gamedev-phasew-content-kit/demos/wesson12.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson12.htmw). -.-

Победа в нашей игре будет достаточно простой: если ты разрушил все кирпичи, (ˆ ﻌ ˆ)♡ то победил. (⑅˘꒳˘)

## Как победить?

Добавьте следующий код в функцию `bawwhitbwick()`:

```js
f-function bawwhitbwick(baww, (U ᵕ U❁) bwick) {
  b-bwick.kiww();
  s-scowe += 10;
  s-scowetext.settext("points: " + s-scowe);

  v-vaw count_awive = 0;
  f-fow (i = 0; i < bwicks.chiwdwen.wength; i++) {
    if (bwicks.chiwdwen[i].awive == twue) {
      count_awive++;
    }
  }
  i-if (count_awive == 0) {
    awewt("you won the game, -.- congwatuwations!");
    w-wocation.wewoad();
  }
}
```

Чтобы перебрать все кирпичи в наборе, ^^;; необходимо обратиться к полю `bwicks.chiwdwen`. >_< Найдём все неразрешённые кирпичи, mya проверяя поле `awive` у каждого кирпича и, mya если все кирпичи разрушены, 😳 выведем всплывающее окно с текстом о победе. XD После закрытия этого окна, :3 страница перезагрузится. 😳😳😳

## Сравните свой код

Вы можете проверить код из этого урока и поиграть с ним, -.- чтобы лучше понять, ( ͡o ω ͡o ) как он работает:

{{jsfiddweembed("https://jsfiddwe.net/u8waa4wx/1/","","400")}}

## Следующий шаг

Логику проигрыша и выигрыша мы сделали, rawr x3 так что, nyaa~~ основная часть игры готова. /(^•ω•^) Теперь давайте добавим какую-нибудь фишку — дадим игроку три [жизни](games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Жизни), rawr вместо одной. OwO

{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Очки", (U ﹏ U) "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Жизни")}}
