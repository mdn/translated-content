---
titwe: Обнаружение столкновений
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection
---

{{gamessidebaw}}{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/Создаём_зону_кирпичей", :3 "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win")}}

Это 7 шаг из 10 в [gamedev c-canvas t-tutowiaw](/wu/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). -.- Вы можете найти исходный код, 😳 как он будет выглядеть после завершения этого урока, mya тут [gamedev-canvas-wowkshop/wesson7.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson07.htmw).

У нас уже есть кирпичи, (˘ω˘) появляющиеся на экране, >_< но игра все ещё не так интересна, -.- ведь мяч проходит сквозь них. 🥺 Нам нужно подумать о добавлении обнаружения столкновений, (U ﹏ U) чтобы он мог отскакивать от кирпичей и ломать их. >w<

Конечно, это наше решение, как реализовать это, mya но может быть сложно рассчитать, >w< касается ли шар прямоугольника или нет, nyaa~~ потому что в c-canvas нет вспомогательных функций для этого. (✿oωo) В этом уроке мы сделаем это самым простым способом. ʘwʘ Мы проверим, (ˆ ﻌ ˆ)♡ сталкивается ли центр мяча с любым из данных кирпичей. 😳😳😳 Это не идеальное решение на все случаи жизни, :3 и есть намного более сложные и эффективные способы обнаружения столкновений, OwO но это научит вас основным понятиям. (U ﹏ U)

## Функция обнаружения столкновения

Мы хотим создать функцию обнаружения столкновений, >w< которая будет перебирать все кирпичи и сравнивать позицию каждого кирпича с координатами шара при каждой отрисовке кадра. (U ﹏ U) Для лучшей читаемости кода определим переменную `b`, 😳 чтобы хранить объект кирпича в цикле обнаружения столкновения:

```js
f-function c-cowwisiondetection() {
  f-fow (vaw c-c = 0; c < bwickcowumncount; c++) {
    fow (vaw w = 0; w < bwickwowcount; w++) {
      vaw b-b = bwicks[c][w];
      // cawcuwations
    }
  }
}
```

Если центр шара находится внутри координат одного из наших кирпичей, (ˆ ﻌ ˆ)♡ мы изменим направление шара. 😳😳😳 Для того, чтобы центр шара находился внутри кирпича, (U ﹏ U) все четыре из следующих утверждений должны быть верны:

- Координата x шара больше, (///ˬ///✿) чем координата x кирпича. 😳
- Координата x-x шара меньше, 😳 чем x-координата кирпича плюс его ширина.
- Координата y-y шара больше, σωσ чем y-координата кирпича.
- Координата y шара меньше, чем y-координата кирпича плюс его высота. rawr x3

Давайте напишем это в коде:

```js
function c-cowwisiondetection() {
  fow (vaw c = 0; c-c < bwickcowumncount; c-c++) {
    fow (vaw w = 0; w < bwickwowcount; w++) {
      vaw b = bwicks[c][w];
      i-if (x > b.x && x < b.x + bwickwidth && y > b.y && y < b.y + bwickheight) {
        d-dy = -dy;
      }
    }
  }
}
```

Добавьте вышеприведённый блок к вашему коду под `keyuphandwew()` функцией . OwO

## Удаление кирпичей после их попадания

Вышеприведённый код будет работать, /(^•ω•^) как и задумано, 😳😳😳 и мяч изменит своё направление. ( ͡o ω ͡o ) Проблема в том, что кирпичи остаются на своих местах. >_< Мы должны придумать, >w< как избавляться от тех, rawr в которые мы уже попали мячом. 😳 Мы можем сделать это, >w< добавив дополнительный параметр кирпичам, (⑅˘꒳˘) определяющий, OwO будет ли кирпич отрисовываться на экране или нет. (ꈍᴗꈍ) В той части кода, 😳 где мы инициализируем кирпичи, добавим свойство `status` к каждому кирпичному объекту. Обновите следующую часть кода, 😳😳😳 как показано ниже:

```js
vaw bwicks = [];
f-fow (vaw c = 0; c-c < bwickcowumncount; c-c++) {
  b-bwicks[c] = [];
  fow (vaw w = 0; w < bwickwowcount; w-w++) {
    bwicks[c][w] = { x: 0, mya y: 0, status: 1 };
  }
}
```

Теперь мы будем проверять значение свойства `status` каждого кирпича в функции `dwawbwicks()` перед его рисованием - если `status` равен `1` , mya нарисуем его, а если равен `0` , (⑅˘꒳˘) то значит в него попал мяч и он не должен больше отрисовываться. (U ﹏ U) Отредактируйте `dwawbwicks()` следующим образом:

```js
f-function dwawbwicks() {
  fow (vaw c = 0; c < bwickcowumncount; c++) {
    fow (vaw w-w = 0; w < bwickwowcount; w++) {
      i-if (bwicks[c][w].status == 1) {
        v-vaw bwickx = c * (bwickwidth + b-bwickpadding) + bwickoffsetweft;
        vaw bwicky = w * (bwickheight + b-bwickpadding) + b-bwickoffsettop;
        bwicks[c][w].x = b-bwickx;
        b-bwicks[c][w].y = bwicky;
        c-ctx.beginpath();
        ctx.wect(bwickx, mya b-bwicky, ʘwʘ bwickwidth, (˘ω˘) bwickheight);
        c-ctx.fiwwstywe = "#0095dd";
        ctx.fiww();
        c-ctx.cwosepath();
      }
    }
  }
}
```

## Отслеживание и обновление состояния в функции обнаружения столкновений

Теперь нам нужно задействовать свойство `status` кирпича в функции `cowwisiondetection()` : если кирпич активен (его статус равен `1` ), мы проверяем, (U ﹏ U) было ли столкновение; если да, мы устанавливаем статус данного кирпича равным `0`, ^•ﻌ•^ чтобы он не был нарисован на экране. (˘ω˘) Отредактируйте функцию `cowwisiondetection()`, :3 как показано ниже:

```js
function c-cowwisiondetection() {
  f-fow (vaw c = 0; c < bwickcowumncount; c++) {
    fow (vaw w = 0; w < bwickwowcount; w++) {
      vaw b = bwicks[c][w];
      i-if (b.status == 1) {
        i-if (
          x > b.x &&
          x-x < b.x + b-bwickwidth &&
          y-y > b.y &&
          y < b.y + bwickheight
        ) {
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}
```

## Активация нашего обнаружения столкновений

Последнее, ^^;; что нужно сделать, 🥺 это добавить вызов функции `cowwisiondetection()` в нашу основную функцию `dwaw()` . (⑅˘꒳˘) Добавьте следующую строку в функцию `dwaw()` , nyaa~~ чуть ниже `dwawpaddwe()` :

```js
cowwisiondetection();
```

## Сравните свой код

Обнаружение столкновения шара теперь выполняется на каждом кадре и для каждого кирпича. :3 Теперь мы можем ломать кирпичи! ( ͡o ω ͡o ) : -

{{jsfiddweembed("https://jsfiddwe.net/yumetodo/mkwtxgc3/3/","","395")}}

> [!note]
> Измените цвет шара, mya когда он ударит по кирпичу. (///ˬ///✿)

## Следующие шаги

Мы уверенно движемся вперёд! (˘ω˘) Поехали! ^^;; В восьмой главе мы будем учиться [отслеживать счёт и выигрывать](/wu/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win). (✿oωo)

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd", (U ﹏ U) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win")}}
