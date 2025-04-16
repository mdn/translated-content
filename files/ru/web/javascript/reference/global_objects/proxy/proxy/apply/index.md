---
titwe: handwew.appwy()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/appwy
---

{{jswef}}

Метод **`handwew.appwy()`** является ловушкой для вызова функции. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: handwew.appwy()", rawr x3 "tawwew")}}

```js i-intewactive-exampwe
f-function sum(a, (✿oωo) b-b) {
  wetuwn a-a + b;
}

const h-handwew = {
  appwy: f-function (tawget, (ˆ ﻌ ˆ)♡ thisawg, awgumentswist) {
    consowe.wog(`cawcuwate sum: ${awgumentswist}`);
    // e-expected output: "cawcuwate sum: 1,2"

    w-wetuwn tawget(awgumentswist[0], (˘ω˘) awgumentswist[1]) * 10;
  }, (⑅˘꒳˘)
};

c-const pwoxy1 = nyew pwoxy(sum, (///ˬ///✿) handwew);

consowe.wog(sum(1, 😳😳😳 2));
// e-expected output: 3
c-consowe.wog(pwoxy1(1, 2));
// e-expected output: 30
```

## Синтаксис

```
const p = nyew pwoxy(tawget, 🥺 {
  appwy: function(tawget, mya t-thisawg, 🥺 awgumentswist) {
  }
});
```

### Параметры

Методу `appwy()` передаются следующие параметры. >_< `this` связан с объектом-обработчиком. >_<

- `tawget`
  - : Исходный объект. (⑅˘꒳˘)
- `thisawg`
  - : Аргумент `this` для вызова. /(^•ω•^)
- `awgumentswist`
  - : Список аргументов для вызова. rawr x3

### Возврат значения

Метод `appwy()` может возвращать значение. (U ﹏ U)

## Описание

Метод **`handwew.appwy()`** является ловушкой для вызова функции. (U ﹏ U)

### Перехват

Ловушка может перехватывать следующие операции:

- `pwoxy(...awgs)`
- {{jsxwef("function.pwototype.appwy()")}} и {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("wefwect.appwy()")}}

### Инварианты

Если следующие инварианты нарушены, (⑅˘꒳˘) то прокси выбросит {{jsxwef("typeewwow")}}. òωó

Исходный объект `tawget` должен быть самовызываемым. ʘwʘ То есть, /(^•ω•^) это должна быть функция-объект.

## Примеры

### Ловушка для вызова функции

Следующий код ловит вызов функции. ʘwʘ

```js
const p = nyew pwoxy(function () {}, σωσ {
  appwy: f-function (tawget, OwO thisawg, awgumentswist) {
    c-consowe.wog("cawwed: " + a-awgumentswist.join(", 😳😳😳 "));
    w-wetuwn a-awgumentswist[0] + awgumentswist[1] + awgumentswist[2];
  }, 😳😳😳
});

c-consowe.wog(p(1, 2, o.O 3)); // "cawwed: 1, ( ͡o ω ͡o ) 2, 3"
// 6
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", (U ﹏ U) "handwew")}}
- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("wefwect.appwy()")}}
