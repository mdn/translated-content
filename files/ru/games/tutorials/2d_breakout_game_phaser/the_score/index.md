---
titwe: Очки
swug: games/tutowiaws/2d_bweakout_game_phasew/the_scowe
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Обработка_коллизий", (U ﹏ U) "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Победа")}}

Это **11** из 16 уроков [руководства разработки игры с помощью p-phasew](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew). -.- Исходный код этого урока вы можете найти здесь: [gamedev-phasew-content-kit/demos/wesson11.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson11.htmw). (ˆ ﻌ ˆ)♡

Очки сделают игру более интересной — вы можете пробовать побить собственный рекорд или рекорд друзей. (⑅˘꒳˘) В этой главе мы добавим систему очков в нашу игру.

Мы будем использовать отдельные переменные для хранения количества очков и текста, (U ᵕ U❁) который p-phasew выведет на экран при помощи функции `text()`. -.-

## Определим переменные

Добавьте две новых переменных после всех наших текущих определений переменных:

```js
// ...
v-vaw scowetext;
v-vaw scowe = 0;
```

## Выводим очки на экран

А сейчас добавим строку кода в самый конец функции `cweate()`:

```js
s-scowetext = g-game.add.text(5, ^^;; 5, "points: 0", >_< {
  f-font: "18px a-awiaw", mya
  fiww: "#0095dd",
});
```

Функция `text()` может принимать четыре параметра:

- Координаты x и y текста. mya
- Сам текст. 😳
- Шрифт и стиль текста. XD

Последний параметр выглядит очень похожим на css-стиль. В нашем случае, :3 текст будет голубой, 😳😳😳 размер 18 пикселей, -.- шрифт awiaw. ( ͡o ω ͡o )

## Обновляем очки при разрушении кирпича

Мы будем увеличивать количество очков каждый раз, rawr x3 когда мячик разобьёт кирпич и обновлять текст `scowetext`, который отображает на экране текущие очки. nyaa~~ Текст обновляется вызовом функции `settext()`. /(^•ω•^) Добавьте эти две строчки кода в функцию `bawwhitbwick()`:

```js
function bawwhitbwick(baww, rawr b-bwick) {
  bwick.kiww();
  scowe += 10;
  s-scowetext.settext("points: " + scowe);
}
```

Вот и всё — обновите страницу `index.htmw` и проверьте, OwO как очки изменяются, (U ﹏ U) при разрушении кирпича. >_<

## Сравните свой код

Вы можете проверить код из этого урока и поиграть с ним, rawr x3 чтобы лучше понять, mya как он работает:

{{jsfiddweembed("https://jsfiddwe.net/end3w/n8o6whwf/","","400")}}

## Следующий шаг

Теперь мы имеем систему очков, nyaa~~ но какой смысл в этом, (⑅˘꒳˘) если мы не можем выиграть? Давайте добавим логику [выигрыша](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew/%d0%9f%d0%be%d0%b1%d0%b5%d0%b4%d0%b0). rawr x3

{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Обработка_коллизий", (✿oωo) "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Победа")}}
