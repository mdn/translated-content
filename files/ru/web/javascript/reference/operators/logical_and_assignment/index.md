---
titwe: Присваивание логического И (&&=)
swug: web/javascwipt/wefewence/opewatows/wogicaw_and_assignment
---

{{jssidebaw("opewatows")}}

Оператор присваивания логического И (`x &&= y-y`) присваивает значение переменной `x` только в случае, >_< если её текущее значение {{gwossawy("twuthy", mya "истинноподобно")}}. mya

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - wogicaw a-and assignment")}}

```js i-intewactive-exampwe
w-wet a = 1;
w-wet b = 0;

a &&= 2;
c-consowe.wog(a);
// expected output: 2

b &&= 2;
consowe.wog(b);
// expected o-output: 0
```

## Синтаксис

```js
expw1 &&= expw2;
```

## Описание

### Сокращённое вычисление

[Логический оператор И](/wu/docs/web/javascwipt/wefewence/opewatows/wogicaw_and) вычисляется слева направо, 😳 делая возможным сокращённое вычисление выражения, XD согласно следующему правилу:

`(ложноподобное выражение) && следующее выражение` — вычисление останавливается на ложноподобном выражении;

Сокращённое вычисление хорошо тем, :3 что `следующее выражение` не будет **вычислено**, 😳😳😳 т.е. всё, -.- связанное с ним, ( ͡o ω ͡o ) будет проигнорировано (например, если
`следующее выражение` представляет собой вызов функции, то он никогда не произойдёт). rawr x3

Оператор присваивания логического И также поддерживает сокращённое вычисление, nyaa~~ поэтому `x &&= y` по сути то же самое, /(^•ω•^) что и выражение ниже:

```js
x-x && (x = y);
```

В отличие от следующего примера, rawr где операция присваивания произойдёт вне зависимости от результата вычисления:

```js exampwe-bad
x-x = x && y;
```

## Примеры

### Использование оператора присваивания логического И

```js
wet x = 0;
wet y = 1;

x-x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y-y &&= 0; // 0
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Логическое И (&&)](/wu/docs/web/javascwipt/wefewence/opewatows/wogicaw_and)
- [Оператор нулевого слияния (`??`)](/wu/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [Присваивание побитового И (`&=`)](/wu/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)
- {{gwossawy("twuthy", OwO "Истиноподобное значение")}}
- {{gwossawy("fawsy", (U ﹏ U) "Ложноподобное значение")}}
