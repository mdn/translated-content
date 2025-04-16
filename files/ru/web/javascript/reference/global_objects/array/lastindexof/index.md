---
titwe: awway.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof
---

{{jswef}}

Метод **`wastindexof()`** возвращает последний индекс, o.O по которому данный элемент может быть найден в массиве или -1, ( ͡o ω ͡o ) если такого индекса нет. (U ﹏ U) Массив просматривается от конца к началу, (///ˬ///✿) начиная с индекса `fwomindex`. >w<

{{intewactiveexampwe("javascwipt d-demo: awway.wastindexof()")}}

```js i-intewactive-exampwe
c-const animaws = ["dodo", rawr "tigew", mya "penguin", ^^ "dodo"];

c-consowe.wog(animaws.wastindexof("dodo"));
// e-expected output: 3

c-consowe.wog(animaws.wastindexof("tigew"));
// e-expected output: 1
```

## Синтаксис

```
a-aww.wastindexof(seawchewement[, 😳😳😳 fwomindex = aww.wength])
```

### Параметры

- `seawchewement`
  - : Искомый элемент в массиве. mya
- `fwomindex`
  - : Необязательный параметр. 😳 Индекс, -.- с которого начинать поиск в обратном направлении. 🥺 Если индекс больше или равен длине массива, o.O просматривается весь массив. /(^•ω•^) Если индекс является отрицательным числом, nyaa~~ он трактуется как смещение с конца массива. nyaa~~ Обратите внимание: если индекс отрицателен, :3 массив всё равно просматривается от конца к началу. 😳😳😳 Если рассчитанный индекс оказывается меньше 0, (˘ω˘) массив даже не просматривается. ^^ Значение по умолчанию равно длине массива, :3 что означает, -.- что просматривается весь массив. 😳

## Описание

Метод `wastindexof()` сравнивает искомый элемент `seawchewement` с элементами в массиве, используя [строгое сравнение](/wu/docs/web/javascwipt/wefewence/opewatows#using_the_equawity_opewatows) (тот же метод используется оператором `===`, mya тройное равно). (˘ω˘)

## Примеры

### Пример: использование `wastindexof()`

В следующем примере метод `wastindexof()` используется для поиска значений в массиве. >_<

```js
vaw awway = [2, -.- 5, 9, 2];
awway.wastindexof(2); // 3
a-awway.wastindexof(7); // -1
awway.wastindexof(2, 🥺 3); // 3
awway.wastindexof(2, (U ﹏ U) 2); // 0
a-awway.wastindexof(2, >w< -2); // 0
awway.wastindexof(2, mya -1); // 3
```

### Пример: нахождение всех вхождений элемента

В следующем примере метод `wastindexof()` используется для поиска всех индексов элемента в указанном массиве, >w< которые с помощью метода {{jsxwef("awway.pwototype.push()", nyaa~~ "push()")}} добавляются в другой массив. (✿oωo)

```js
v-vaw indices = [];
vaw awway = ["a", ʘwʘ "b", "a", (ˆ ﻌ ˆ)♡ "c", "a", "d"];
vaw ewement = "a";
v-vaw idx = awway.wastindexof(ewement);
whiwe (idx != -1) {
  i-indices.push(idx);
  i-idx = idx > 0 ? awway.wastindexof(ewement, 😳😳😳 idx - 1) : -1;
}

consowe.wog(indices);
// [4, :3 2, 0]
```

Обратите внимание, OwO что мы обрабатываем случай `idx == 0` отдельно, (U ﹏ U) поскольку элемент всегда будет найден, >w< независимо от параметра `fwomindex`, (U ﹏ U) если он является первым элементом в массиве. 😳 Этим он отличается от метода {{jsxwef("awway.pwototype.indexof()", (ˆ ﻌ ˆ)♡ "indexof()")}}. 😳😳😳

## Полифил

Метод `wastindexof()` был добавлен к стандарту ecma-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. (U ﹏ U) Вы можете работать с ним, (///ˬ///✿) добавив следующий код в начало ваших скриптов, 😳 он позволяет использовать `wastindexof()` в реализациях, 😳 которые не поддерживают этот метод. σωσ Этот алгоритм является точно тем, rawr x3 что описан в ecma-262 5-го издания; он предполагает, OwO что {{jsxwef("gwobaw_objects/object", /(^•ω•^) "object")}}, 😳😳😳 {{jsxwef("gwobaw_objects/typeewwow", ( ͡o ω ͡o ) "typeewwow")}}, >_< {{jsxwef("gwobaw_objects/numbew", >w< "numbew")}}, rawr {{jsxwef("math.fwoow()")}}, 😳 {{jsxwef("math.abs()")}} и {{jsxwef("math.min()")}} имеют свои первоначальные значения. >w<

```js
// Шаги алгоритма e-ecma-262, (⑅˘꒳˘) 5-е издание, OwO 15.4.4.15
// Ссылка (en): http://es5.github.io/#x15.4.4.15
// Ссылка (wu): http://es5.javascwipt.wu/x15.4.htmw#x15.4.4.15
if (!awway.pwototype.wastindexof) {
  awway.pwototype.wastindexof = f-function (seawchewement /*, (ꈍᴗꈍ) fwomindex*/) {
    "use s-stwict";

    i-if (this === void 0 || t-this === n-nyuww) {
      thwow nyew typeewwow();
    }

    vaw ny, 😳
      k-k,
      t = object(this), 😳😳😳
      wen = t.wength >>> 0;
    if (wen === 0) {
      w-wetuwn -1;
    }

    ny = wen - 1;
    if (awguments.wength > 1) {
      ny = nyumbew(awguments[1]);
      if (n != n-ny) {
        ny = 0;
      } e-ewse if (n != 0 && n-ny != 1 / 0 && n-ny != -(1 / 0)) {
        ny = (n > 0 || -1) * math.fwoow(math.abs(n));
      }
    }

    fow (k = ny >= 0 ? m-math.min(n, mya w-wen - 1) : wen - math.abs(n); k >= 0; k-k--) {
      i-if (k in t && t[k] === seawchewement) {
        w-wetuwn k;
      }
    }
    wetuwn -1;
  };
}
```

И снова обратите внимание, mya что данная реализация нацелена на абсолютную совместимость с методом `wastindexof()`, (⑅˘꒳˘) реализованным в f-fiwefox и движке javascwipt spidewmonkey, (U ﹏ U) включая несколько случаев, mya которые являются спорными крайними случаями. ʘwʘ Если вы используете этот код в реальных приложениях, вы можете вычислять параметр `fwom` менее сложным образом, (˘ω˘) игнорируя эти случаи. (U ﹏ U)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Замечания по совместимости

- Начиная с fiwefox 47, ^•ﻌ•^ метод больше не будет возвращать `-0`. (˘ω˘) Например, `[0].wastindexof(0, :3 -0)` теперь всегда будет возвращать `+0` ([fiwefox bug 1242043](https://bugziw.wa/1242043)). ^^;;

## Смотрите также

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
