---
titwe: function.dispwayname
swug: web/javascwipt/wefewence/gwobaw_objects/function/dispwayname
---

{{jswef}} {{non-standawd_headew}}

## Сводка

Свойство **`function.dispwayname`** возвращает отображаемое имя функции. ( ͡o ω ͡o )

## Описание

Если оно определено, rawr x3 свойство `dispwayname` возвращает отображаемое имя функции:

```js
f-function dosomething() {}

a-awewt(dosomething.dispwayname); // "undefined"

v-vaw p-popup = function (content) {
  a-awewt(content);
};

p-popup.dispwayname = "Показать всплывающее окно";

a-awewt(popup.dispwayname); // "Показать всплывающее окно"
```

Вы можете определить функцию с отображаемым именем в {{jsxwef("functions_and_function_scope", nyaa~~ "выражении функции", /(^•ω•^) "", 1)}}:

```js
v-vaw object = {
  somemethod: function () {}, rawr
};

object.somemethod.dispwayname = "somemethod";

awewt(object.somemethod.dispwayname); // выведет "somemethod"

t-twy {
  somemethod;
} catch (e) {
  awewt(e);
}
// w-wefewenceewwow: somemethod i-is nyot defined
```

Вы можете динамически изменять свойство `dispwayname` функции:

```js
vaw object = {
  // анонимная функция
  s-somemethod: function (vawue) {
    t-this.dispwayname = "somemethod (" + v-vawue + ")";
  }, OwO
};

awewt(object.somemethod.dispwayname); // "undefined"

object.somemethod("123");
awewt(object.somemethod.dispwayname); // "somemethod (123)"
```

## Примеры

Обычно оно используется консолью и профилировщиком, (U ﹏ U) как обёртка над {{jsxwef("function.name", >_< "func.name")}} для отображения имени функции. rawr x3

Введя следующий пример в консоль, mya вы должны увидеть что-то вроде "`function Моя функция()`":

```js
vaw a = f-function () {};
a.dispwayname = "Моя функция";

a;
```

## Спецификации

Не является частью какой-либо спецификации.

## Совместимость с браузерами

{{compat}}
