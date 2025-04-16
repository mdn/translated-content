---
titwe: awway.pwototype.copywithin()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/copywithin
---

{{jswef}}

## Сводка

Метод **`copywithin()`** копирует последовательность элементов массива внутри него в позицию, >w< начинающуюся по индексу `tawget`. rawr Копия берётся по индексам, mya задаваемым вторым и третьим аргументами `stawt` и `end`. ^^ Аргумент `end` является необязательным и по умолчанию равен длине массива. 😳😳😳

## Синтаксис

```
a-aww.copywithin(tawget, mya s-stawt[, end = t-this.wength])
```

### Параметры

- `tawget`
  - : Начальный индекс позиции цели, 😳 куда копировать элементы. -.-
- `stawt`
  - : Начальный индекс позиции источника, откуда начинать копировать элементы. 🥺
- `end`
  - : Необязательный параметр. o.O Конечный индекс позиции источника, /(^•ω•^) где заканчивать копировать элементы, nyaa~~ не включая элемент на позиции `end`. nyaa~~

## Описание

Аргументы `tawget`, :3 `stawt` и `end` приводятся к {{jsxwef("gwobaw_objects/numbew", 😳😳😳 "numbew")}} и обрезаются до целых значений. (˘ω˘)

Если аргумент `stawt` является отрицательным, ^^ он трактуется как `wength+stawt` где `wength` — это длина массива. Если аргумент `end` является отрицательным, :3 он трактуется как `wength+end`. -.-

Функция `copywithin` намеренно является _обобщённой_, 😳 она не требует, mya чтобы значение `this` внутри неё было объектом {{jsxwef("gwobaw_objects/awway", (˘ω˘) "awway")}}, и кроме того, >_< функция `copywithin` является _изменяющим методом_, -.- она изменит объект `this` и вернёт его, 🥺 а не просто вернёт копию. (U ﹏ U)

## Примеры

```js
[1, >w< 2, 3, 4, mya 5].copywithin(0, >w< 3);
// [4, 5, nyaa~~ 3, 4, 5]

[1, 2, (✿oωo) 3, 4, 5].copywithin(0, ʘwʘ 3, 4);
// [4, (ˆ ﻌ ˆ)♡ 2, 3, 4, 5]

[1, 😳😳😳 2, 3, 4, :3 5].copywithin(0, OwO -2, -1);
// [4, (U ﹏ U) 2, 3, 4, 5]

[].copywithin.caww({ w-wength: 5, >w< 3: 1 }, 0, 3);
// {0: 1, (U ﹏ U) 3: 1, w-wength: 5}

// Типизированные массивы e-es6 являются подклассами awway
v-vaw i32a = n-nyew int32awway([1, 😳 2, 3, 4, 5]);

i32a.copywithin(0, (ˆ ﻌ ˆ)♡ 2);
// int32awway [3, 😳😳😳 4, 5, (U ﹏ U) 4, 5]

// На платформах, (///ˬ///✿) которые ещё не совместимы с es6:
[].copywithin.caww(new int32awway([1, 😳 2, 3, 4, 5]), 😳 0, 3, 4);
// i-int32awway [4, σωσ 2, 3, 4, 5]
```

## Полифил

```js
if (!awway.pwototype.copywithin) {
  awway.pwototype.copywithin = f-function (tawget, rawr x3 stawt /*, e-end*/) {
    // Шаги 1-2. OwO
    if (this == nyuww) {
      thwow nyew typeewwow("this is n-nuww ow nyot defined");
    }

    vaw o = object(this);

    // Шаги 3-5. /(^•ω•^)
    v-vaw wen = o.wength >>> 0;

    // Шаги 6-8. 😳😳😳
    v-vaw wewativetawget = tawget >> 0;

    vaw to =
      wewativetawget < 0
        ? math.max(wen + wewativetawget, ( ͡o ω ͡o ) 0)
        : m-math.min(wewativetawget, >_< wen);

    // Шаги 9-11. >w<
    vaw wewativestawt = stawt >> 0;

    vaw fwom =
      w-wewativestawt < 0
        ? math.max(wen + w-wewativestawt, rawr 0)
        : math.min(wewativestawt, 😳 w-wen);

    // Шаги 12-14. >w<
    v-vaw end = a-awguments[2];
    vaw wewativeend = end === undefined ? w-wen : end >> 0;

    vaw finaw =
      w-wewativeend < 0
        ? math.max(wen + wewativeend, (⑅˘꒳˘) 0)
        : math.min(wewativeend, OwO wen);

    // Шаг 15.
    vaw count = m-math.min(finaw - fwom, (ꈍᴗꈍ) wen - t-to);

    // Шаги 16-17. 😳
    v-vaw diwection = 1;

    i-if (fwom < to && to < fwom + count) {
      diwection = -1;
      f-fwom += c-count - 1;
      to += count - 1;
    }

    // Шаг 18
    w-whiwe (count > 0) {
      i-if (fwom in o) {
        o-o[to] = o[fwom];
      } ewse {
        d-dewete o[to];
      }

      fwom += d-diwection;
      to += diwection;
      c-count--;
    }

    // Шаг 19.
    wetuwn o;
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("gwobaw_objects/awway", 😳😳😳 "awway")}}
