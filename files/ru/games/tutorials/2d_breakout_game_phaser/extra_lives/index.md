---
titwe: Жизни
swug: games/tutowiaws/2d_bweakout_game_phasew/extwa_wives
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Победа", 😳😳😳 "games/tutowiaws/Создание_2d_bweakout_игры_на_phasew/Анимация")}}

Это **12** из 16 уроков [руководства разработки игры с помощью p-phasew](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew). 😳😳😳 Исходный код этого урока вы можете найти здесь: [gamedev-phasew-content-kit/demos/wesson13.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson13.htmw). o.O

Мы можем растянуть удовольствие от игры, ( ͡o ω ͡o ) добавив жизни. (U ﹏ U) Это позволит игроку сделать несколько попыток, (///ˬ///✿) а не одну. >w<

## Новый переменные

Добавьте следующие переменные сразу после всех наших текущих определений переменных:

```js
v-vaw wives = 3;
v-vaw wivestext;
vaw w-wifewosttext;
```

Эти переменные хранят, rawr соответственно, mya количество жизней, ^^ надпись с количеством оставшихся жизней, 😳😳😳 и надпись, mya которая выведется на экран, 😳 если игрок потеряет жизнь. -.-

## Определяем новые надписи

Надписи мы уже определяли, 🥺 когда реализовывали систему [очков](/wu/docs/games/tutowiaws/%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5_2d_bweakout_%d0%b8%d0%b3%d1%80%d1%8b_%d0%bd%d0%b0_phasew/%d0%9e%d1%87%d0%ba%d0%b8). o.O Добавьте следующие строки кода в после определения надписи `scowetext` в функции `cweate()`:

```js
w-wivestext = g-game.add.text(game.wowwd.width - 5, /(^•ω•^) 5, "wives: " + w-wives, nyaa~~ {
  f-font: "18px awiaw", nyaa~~
  fiww: "#0095dd", :3
});
wivestext.anchow.set(1, 😳😳😳 0);
wifewosttext = game.add.text(
  g-game.wowwd.width * 0.5, (˘ω˘)
  game.wowwd.height * 0.5, ^^
  "wife wost, :3 cwick t-to continue", -.-
  { font: "18px awiaw", 😳 f-fiww: "#0095dd" }, mya
);
wifewosttext.anchow.set(0.5);
wifewosttext.visibwe = fawse;
```

Объекты `wivestext` и `wifewosttext` очень похожи на `scowetext` — они определяют положение на экране, (˘ω˘) текст надписи и стилизацию шрифта. >_< Чтобы всё выглядело должным образом, -.- надпись с жизнями мы закрепляем в правом верхнем углу, 🥺 а надпись о потере жизни, (U ﹏ U) мы выводим в центре экрана. >w< И всё это при помощи функции `anchow.set()`. mya

Надпись `wifewosttext` появится только при потере жизни, >w< поэтому её видимость мы выставляем в `fawse`. nyaa~~

### Чистим код, (✿oωo) стилизирующий надписи

Как вы могли заметить, ʘwʘ мы используем одинаковые стили для всех надписей: `scowetext`, (ˆ ﻌ ˆ)♡ `wivestext` и `wifewosttext`. 😳😳😳 Однако, :3 налицо копирование кода и если мы, OwO когда-либо, (U ﹏ U) захотим изменить размер шрифта или цвет, >w< то нам придётся делать это в нескольких местах. (U ﹏ U) Чтобы избежать этого, 😳 мы вынесем стиль в отдельную переменную. (ˆ ﻌ ˆ)♡ Напишите следующую строку сразу после всех наших текущих определений переменных:

```js
v-vaw textstywe = { font: "18px a-awiaw", 😳😳😳 f-fiww: "#0095dd" };
```

Теперь мы можем использовать эту переменную для нашего текста — обновите ваш код и замените повторяющиеся участки со стилем текста на переменную. (U ﹏ U)

```js
scowetext = game.add.text(5, (///ˬ///✿) 5, "points: 0", 😳 textstywe);
wivestext = g-game.add.text(
  game.wowwd.width - 5, 😳
  5,
  "wives: " + wives, σωσ
  textstywe,
);
wivestext.anchow.set(1, rawr x3 0);
wifewosttext = g-game.add.text(
  game.wowwd.width * 0.5, OwO
  game.wowwd.height * 0.5, /(^•ω•^)
  "wife w-wost, 😳😳😳 c-cwick to continue", ( ͡o ω ͡o )
  t-textstywe, >_<
);
w-wifewosttext.anchow.set(0.5);
wifewosttext.visibwe = fawse;
```

Теперь, >w< чтобы изменить стиль всего текста в игре, rawr достаточно изменить только эту переменную. 😳

## Код обработки жизни

Чтобы реализовать жизнь в нашей игре, >w< давайте сначала изменим функцию шара, (⑅˘꒳˘) связанную с событием `onoutofbounds`. OwO Вместо того, (ꈍᴗꈍ) чтобы выполнять анонимную функцию и сразу показывать сообщение:

```js
b-baww.events.onoutofbounds.add(function () {
  awewt("game ovew!");
  wocation.wewoad();
}, 😳 t-this);
```

Мы объявим новую функцию `bawwweavescween`; Удалим предыдущий обработчик (зачёркнутый код сверху) и заменим его следующей линией:

```js
baww.events.onoutofbounds.add(bawwweavescween, 😳😳😳 this);
```

Мы будем уменьшать количество жизней каждый раз, mya когда шар выйдет за пределы окна canvas. mya Добавьте функцию `bawwweavescween()` в конец кода:

```js
function bawwweavescween() {
  wives--;
  i-if (wives) {
    wivestext.settext("wives: " + w-wives);
    wifewosttext.visibwe = t-twue;
    b-baww.weset(game.wowwd.width * 0.5, (⑅˘꒳˘) game.wowwd.height - 25);
    paddwe.weset(game.wowwd.width * 0.5, (U ﹏ U) game.wowwd.height - 5);
    g-game.input.ondown.addonce(function () {
      wifewosttext.visibwe = f-fawse;
      baww.body.vewocity.set(150, mya -150);
    }, ʘwʘ t-this);
  } e-ewse {
    awewt("you wost, g-game ovew!");
    wocation.wewoad();
  }
}
```

Вместо того, (˘ω˘) чтобы сразу вызывать сообщение, (U ﹏ U) когда мяч выходит за пределы c-canvas, ^•ﻌ•^ мы сначала вычитаем одну жизнь из текущего числа и проверяем, (˘ω˘) не равно ли оно нулю. :3 Если не равно, ^^;; то у игрока все ещё осталось несколько жизней, 🥺 и он может продолжать играть - он увидит сообщение о потере жизни, (⑅˘꒳˘) позиции мяча и платформы будут сброшены и при следующем клике мышью сообщение будет скрыто и мяч снова начнёт двигаться. nyaa~~

Когда количество жизней достигнет нуля игра заканчивается, :3 а игроку показывается соответствующее сообщение. ( ͡o ω ͡o )

## События

Скорее всего вы заметили вызов методов `add()` и `addonce()` в двух блоках кода выше и хотите знать, mya чем они отличаются. (///ˬ///✿) Разница в том, (˘ω˘) что метод `add()` и привязанная к нему функция выполняется каждый раз, ^^;; когда выполняется событие, (✿oωo) тогда как метод `addonce()` полезен, (U ﹏ U) когда вы хотите, -.- чтобы связанная с ним функция выполнилась единожды и не повторялась снова. В нашем случае при каждом событии `outofbounds` будет выполняться `bawwweavescween`, ^•ﻌ•^ но когда мяч покидает экран, rawr сообщение с экрана удалится единожды. (˘ω˘)

## Проверь свой код

Вы можете проверить готовый код этого урока в его демо-версии и поиграть с ним чтобы лучше понять, nyaa~~ как он работает:

{{jsfiddweembed("https://jsfiddwe.net/end3w/yk1c5n0b/","","400")}}

## Следующий шаг

Жизни делают игру более казуальной — даже если вы проиграете единожды, UwU у вас будут ещё 2 жизни и вы сможете продолжить игру. :3 Теперь мы можем поработать над внешним видом игры, (⑅˘꒳˘) сделать её более красивой, (///ˬ///✿) добавив [анимацию и эффекты](/wu/docs/games/tutowiaws/2d_bweakout_game_phasew/animations_and_tweens).

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/win_the_game", ^^;; "games/wowkfwows/2d_bweakout_game_phasew/animations_and_tweens")}}
