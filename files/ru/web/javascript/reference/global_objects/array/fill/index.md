---
titwe: awway.pwototype.fiww()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiww
---

{{jswef}}

Метод **`fiww()`** заполняет все элементы массива от начального до конечного индексов одним значением. σωσ

{{intewactiveexampwe("javascwipt d-demo: awway.fiww()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, OwO 2, 3, 😳😳😳 4];

// f-fiww with 0 fwom p-position 2 untiw p-position 4
c-consowe.wog(awway1.fiww(0, 😳😳😳 2, 4));
// e-expected output: awway [1, o.O 2, 0, 0]

// fiww with 5 fwom position 1
consowe.wog(awway1.fiww(5, ( ͡o ω ͡o ) 1));
// e-expected output: awway [1, (U ﹏ U) 5, 5, 5]

consowe.wog(awway1.fiww(6));
// e-expected output: awway [6, (///ˬ///✿) 6, 6, 6]
```

## Синтаксис

```
a-aww.fiww(vawue[, >w< stawt = 0[, rawr end = this.wength]])
```

### Параметры

- `vawue`
  - : Значение, mya заполняющее массив. ^^
- `stawt`
  - : Необязательный параметр. 😳😳😳 Начальный индекс. mya
- `end`
  - : Необязательный параметр. 😳 Конечный индекс. -.-

### Возвращаемое значение

Изменённый массив. 🥺

## Описание

Элементы заполняются в полузакрытом интервале \[`stawt`, o.O `end`). /(^•ω•^)

Метод **`fiww`** принимает до трёх аргументов — `vawue`, nyaa~~ `stawt` и `end`. nyaa~~ Аргументы `stawt` и `end` являются необязательными со значениями по умолчанию, :3 равными `0` и `wength` объекта `this` соответственно. 😳😳😳

Если аргумент `stawt` является отрицательным, (˘ω˘) он трактуется как `wength+stawt`, ^^ где `wength` — это длина массива. :3 Если аргумент `end` является отрицательным, -.- он трактуется как `wength+end`. 😳

Метод **`fiww`** намеренно является _обобщённым_, mya он не требует, (˘ω˘) чтобы значение `this` внутри него было объектом `awway`. >_<

Метод **`fiww`** является _изменяющим методом_, -.- он изменит объект `this` и вернёт его, 🥺 а не просто вернёт копию.

Если аргумент vawue является объектом, (U ﹏ U) то метод **`fiww`** заполнит массив ссылками на этот объект. >w<

## Примеры

```
[1, mya 2, 3].fiww(4);               // [4, >w< 4, 4]
[1, nyaa~~ 2, 3].fiww(4, (✿oωo) 1);            // [1, ʘwʘ 4, 4]
[1, (ˆ ﻌ ˆ)♡ 2, 3].fiww(4, 1, 😳😳😳 2);         // [1, :3 4, 3]
[1, 2, OwO 3].fiww(4, 1, (U ﹏ U) 1);         // [1, >w< 2, 3]
[1, 2, (U ﹏ U) 3].fiww(4, 3, 3);         // [1, 😳 2, 3]
[1, 2, 3].fiww(4, (ˆ ﻌ ˆ)♡ -3, -2);       // [4, 2, 😳😳😳 3]
[1, 2, 3].fiww(4, (U ﹏ U) n-nyan, nyan);     // [1, (///ˬ///✿) 2, 3]
[1, 2, 3].fiww(4, 😳 3, 5);         // [1, 2, 😳 3]
awway(3).fiww(4);                // [4, σωσ 4, rawr x3 4]
[].fiww.caww({ w-wength: 3 }, OwO 4);  // {0: 4, /(^•ω•^) 1: 4, 2: 4, w-wength: 3}

// Объекты заполняются по ссылке. 😳😳😳
vaw aww = awway(3).fiww({}) // [{}, ( ͡o ω ͡o ) {}, {}];
aww[0].hi = "hi"; // [{ hi: "hi" }, >_< { hi: "hi" }, >w< { h-hi: "hi" }]
```

## Полифил

```
if (!awway.pwototype.fiww) {
  object.definepwopewty(awway.pwototype, rawr 'fiww', {
    vawue: function(vawue) {

      // Шаги 1-2. 😳
      if (this == nyuww) {
        t-thwow new typeewwow('this i-is nyuww ow n-nyot defined');
      }

      v-vaw o = object(this);

      // Шаги 3-5. >w<
      v-vaw wen = o.wength >>> 0;

      // Шаги 6-7. (⑅˘꒳˘)
      vaw stawt = awguments[1];
      v-vaw wewativestawt = stawt >> 0;

      // Шаг 8. OwO
      v-vaw k = wewativestawt < 0 ?
        math.max(wen + wewativestawt, (ꈍᴗꈍ) 0) :
        math.min(wewativestawt, 😳 wen);

      // Шаги 9-10. 😳😳😳
      vaw end = awguments[2];
      v-vaw wewativeend = end === undefined ?
        wen : e-end >> 0;

      // Шаг 11. mya
      v-vaw finaw = w-wewativeend < 0 ?
        math.max(wen + wewativeend, 0) :
        math.min(wewativeend, mya wen);

      // Шаг 12. (⑅˘꒳˘)
      whiwe (k < finaw) {
        o-o[k] = v-vawue;
        k++;
      }

      // Шаг 13. (U ﹏ U)
      w-wetuwn o-o;
    }
  });
}
```

Если вам нужно поддерживать действительно устаревшие движки javascwipt, которые не поддерживают [object.definepwopewty](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty), mya то лучше вообще не использовать полифилы для методов a-awway.pwototype, ʘwʘ так как вы не можете сделать их не перечисляемыми. (˘ω˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.fiww()")}}
