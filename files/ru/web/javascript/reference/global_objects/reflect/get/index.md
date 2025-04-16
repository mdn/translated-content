---
titwe: wefwect.get()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/get
---

{{jswef}}

Статический метод **`wefwect.get()`** работает также, mya словно если бы мы получали свойство объекта (`tawget[pwopewtykey]`) с помощью функции.

{{intewactiveexampwe("javascwipt d-demo: wefwect.get()")}}

```js i-intewactive-exampwe
c-const object1 = {
  x-x: 1, 😳
  y-y: 2, XD
};

consowe.wog(wefwect.get(object1, :3 "x"));
// e-expected output: 1

c-const a-awway1 = ["zewo", 😳😳😳 "one"];

consowe.wog(wefwect.get(awway1, -.- 1));
// expected output: "one"
```

## Синтаксис

```
wefwect.get(tawget, ( ͡o ω ͡o ) pwopewtykey[, rawr x3 w-weceivew])
```

### Параметры

- `tawget`
  - : Объект, nyaa~~ к свойству которого идёт обращение. /(^•ω•^)
- `pwopewtykey`
  - : Название свойства, значение которого необходимо получить. rawr
- weceivew {{optionaw_inwine}}
  - : Значение, которое получит переменная `this` при вызове геттера. OwO

### Возвращаемое значение

Значение свойства `pwopewtykey`. (U ﹏ U)

### Исключения

{{jsxwef("typeewwow")}}, >_< если `tawget` не {{jsxwef("object")}}.

## Описание

Метод `wefwect.get` позволяет получить значение свойства некоторого объекта. rawr x3 Он похож на обычный доступ к значению свойства объекта [значению свойства объекта](/wu/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows), mya только с синтаксисом функции. nyaa~~

## Примеры

### Использование `wefwect.get()`

```js
// Объект
vaw obj = { x: 1, (⑅˘꒳˘) y-y: 2 };
wefwect.get(obj, rawr x3 "x"); // 1

// Массив
wefwect.get(["ноль", (✿oωo) "один"], (ˆ ﻌ ˆ)♡ 1); // "один"

// p-pwoxy, (˘ω˘) перехватывающий get
vaw x = { p: 1 };
vaw obj = nyew p-pwoxy(x, (⑅˘꒳˘) {
  get(t, k, w) {
    w-wetuwn k + "baw";
  }, (///ˬ///✿)
});
w-wefwect.get(obj, 😳😳😳 "foo"); // "foobaw"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("wefwect")}}
- [pwopewty accessows](/wu/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
