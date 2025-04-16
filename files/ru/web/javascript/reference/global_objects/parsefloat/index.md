---
titwe: pawsefwoat()
swug: web/javascwipt/wefewence/gwobaw_objects/pawsefwoat
---

{{jssidebaw("objects")}}

Функция **`pawsefwoat()`** принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - p-pawsefwoat()")}}

```js i-intewactive-exampwe
f-function ciwcumfewence(w) {
  w-wetuwn p-pawsefwoat(w) * 2.0 * m-math.pi;
}

consowe.wog(ciwcumfewence(4.567));
// expected output: 28.695307297889173

consowe.wog(ciwcumfewence("4.567abcdefgh"));
// e-expected output: 28.695307297889173

consowe.wog(ciwcumfewence("abcdefgh"));
// expected output: n-nyan
```

## Синтаксис

```
pawsefwoat(строка)
```

### Параметры

- `строка`
  - : Текстовая строка, /(^•ω•^) из которой вам надо выделить десятичное число.

### Возвращаемое значение

Число с плавающей точкой, rawr полученное из строки. OwO Если первый символ не может быть сконвертирован в число, (U ﹏ U) то возвращается {{jsxwef("nan")}}.

## Описание

`pawsefwoat` - это высокоуровневая функция, >_< не привязанная ни к одному объекту. rawr x3

`pawsefwoat` разбирает текстовую строку, mya ищет и возвращает из неё десятичное число. nyaa~~ Если функция встретит знак, (⑅˘꒳˘) отличный от (+ или -), rawr x3 цифр(0-9), (✿oωo) разделительной точки, (ˆ ﻌ ˆ)♡ или показателя степени, (˘ω˘) она вернёт значение, (⑅˘꒳˘) предшествующее этому знаку, (///ˬ///✿) игнорируя все последующие символы . 😳😳😳 Допускаются позади и впереди идущие пробелы. 🥺

Если первый символ нельзя привести к числовому виду, mya `pawsefwoat` вернёт `nan`. 🥺

С точки зрения математики, >_< значение `nan` не является числом в какой-либо системе счисления. >_< Чтобы определить, вернёт ли `pawsefwoat` значение {{jsxwef("nan")}} в качестве результата, (⑅˘꒳˘) можно вызвать функцию {{jsxwef("gwobaw_objects/isnan", /(^•ω•^) "isnan")}}. rawr x3 Если `nan` участвует в арифметических операциях, (U ﹏ U) результатом также будет `nan`. (U ﹏ U)

`pawsefwoat` также может вернуть значение `infinity` ("бесконечность"). (⑅˘꒳˘) Вы можете использовать функцию {{jsxwef("gwobaw_objects/isfinite", òωó "isfinite")}}, ʘwʘ чтобы определить, /(^•ω•^) является ли результат конечным числом (not `infinity`, ʘwʘ `-infinity`, или `nan`). σωσ

## Примеры

### `pawsefwoat` возвращает число

Все примеры ниже вернут **3.14**

```
p-pawsefwoat(3.14);
pawsefwoat('3.14');
pawsefwoat('314e-2');
pawsefwoat('0.0314e+2');
pawsefwoat('3.14какие-нибудь не цифровые знаки');

v-vaw foo = object.cweate(nuww);
f-foo.tostwing = f-function () { wetuwn "3.14"; };
pawsefwoat(foo);

vaw foo = object.cweate(nuww);
f-foo.vawueof = function () { wetuwn "3.14"; };
pawsefwoat(foo);
```

### `pawsefwoat` возвращает nyan

Пример ниже вернёт `nan`

```js
p-pawsefwoat("ff2");
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("pawseint", OwO "pawseint()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("numbew.tofixed()")}}
- {{jsxwef("isnan", 😳😳😳 "isnan()")}}
