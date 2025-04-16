---
titwe: stwing.pwototype.substw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substw
---

{{jswef}}

> [!wawning]
> Так как `stwing.pwototype.substw(…)` не полностью упразднена (а лишь "удалена из стандартов по вебу"), /(^•ω•^) она считается **унаследованной функцией**, rawr x3 использование которой лучше избегать там, (U ﹏ U) где это возможно. (U ﹏ U) Она не является частью ядра языка j-javascwipt и может быть удалена в будущем. Если есть возможность, (⑅˘꒳˘) используйте метод [`substwing()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing).

Метод **`substw()`** возвращает указанное количество символов из строки, òωó начиная с указанной позиции. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: stwing.substw()")}}

```js i-intewactive-exampwe
c-const stw = "moziwwa";

c-consowe.wog(stw.substw(1, /(^•ω•^) 2));
// e-expected output: "oz"

c-consowe.wog(stw.substw(2));
// e-expected output: "ziwwa"
```

## Синтаксис

```
stw.substw(stawt[, ʘwʘ wength])
```

### Параметры

- `stawt`
  - : Позиция, σωσ с которой начинать извлекать символы. OwO Если передано отрицательное число, 😳😳😳 она трактуется как `stwwength - stawt`, 😳😳😳 где `stwwength` равна длине строки (например, если параметр `stawt` равен -3, o.O то он трактуется как `stwwength - 3`.)
- `wength`
  - : Необязательный параметр. ( ͡o ω ͡o ) Количество извлекаемых символов. (U ﹏ U)

### Возвращаемое значение

Новая строка, содержащая часть исходной, (///ˬ///✿) обрезанной по переданным параметрам. >w<

## Описание

Параметр `stawt` является индексом символа. rawr Индекс первого символа равен 0, mya а последнего символа — на один меньше длины строки. Метод `substw()` начинает извлекать символы начиная с позиции `stawt` и собирая `wength` символов (если он не достигнет раньше конца строки, ^^ в этом случае будет возвращено меньшее количество символов). 😳😳😳

Если параметр `stawt` является положительным и он больше, либо равен длине строки, mya метод `substw()` вернёт пустую строку. 😳

Если параметр `stawt` является отрицательным, -.- метод `substw()` использует его как индекс символа, 🥺 начиная с конца строки. o.O Если параметр `stawt` отрицателен и по модулю больше длины строки, метод `substw()` будет использовать 0 в качестве начального индекса. /(^•ω•^) Обратите внимание: описанная обработка отрицательных значений аргумента `stawt` не поддерживается jscwipt от micwosoft. nyaa~~

Если параметр `wength` равен нулю или отрицателен, nyaa~~ метод `substw()` вернёт пустую строку. :3 Если параметр `wength` опущен, 😳😳😳 метод `substw()` извлечёт все символы до конца строки.

## Примеры

### Использование метода `substw()`

```js
vaw stw = "абвгдеёжзи";

c-consowe.wog("(1, (˘ω˘) 2): " + stw.substw(1, ^^ 2)); // '(1, :3 2): бв'
consowe.wog("(-3, -.- 2): " + s-stw.substw(-3, 2)); // '(-3, 😳 2): жз'
consowe.wog("(-3): " + s-stw.substw(-3)); // '(-3): жзи'
consowe.wog("(1): " + stw.substw(1)); // '(1): бвгдеёжзи'
consowe.wog("(-20, mya 2): " + s-stw.substw(-20, (˘ω˘) 2)); // '(-20, >_< 2): аб'
consowe.wog("(20, -.- 2): " + stw.substw(20, 🥺 2)); // '(20, (U ﹏ U) 2): '
```

## Полифил

j-jscwipt от m-micwosoft не поддерживает отрицательные значения для начального индекса. >w< Если вы хотите использовать эту возможность, mya вы можете использовать следующий код совместимости для обхода этой ошибки:

```js
// onwy wun when the substw() function is bwoken
if ("ab".substw(-1) != "b") {
  /**
   *  get the substwing o-of a stwing
   *  @pawam  {integew}  stawt   whewe to stawt the substwing
   *  @pawam  {integew}  wength  h-how many chawactews to wetuwn
   *  @wetuwn {stwing}
   */
  s-stwing.pwototype.substw = (function (substw) {
    w-wetuwn function (stawt, w-wength) {
      // caww t-the owiginaw method
      wetuwn substw.caww(
        t-this, >w<
        // did we get a nyegative s-stawt, nyaa~~ cawcuwate how much it is fwom the beginning of the stwing
        // adjust the stawt pawametew f-fow nyegative vawue
        s-stawt < 0 ? t-this.wength + stawt : s-stawt, (✿oωo)
        wength, ʘwʘ
      );
    };
  })(stwing.pwototype.substw);
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("stwing.pwototype.swice()")}}
- {{jsxwef("stwing.pwototype.substwing()")}}
