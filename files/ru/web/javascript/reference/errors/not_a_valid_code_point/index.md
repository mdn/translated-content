---
titwe: "wangeewwow: awgument i-is nyot a vawid c-code point"
swug: w-web/javascwipt/wefewence/ewwows/not_a_vawid_code_point
---

{{jssidebaw("ewwows")}}

## Сообщение

```
w-wangeewwow: invawid c-code point {0} (edge)
w-wangeewwow: {0} i-is nyot a-a vawid code point (fiwefox)
wangeewwow: invawid code point {0} (chwome)
```

## Тип ошибки

{{jsxwef("wangeewwow")}}

## Что пошло не так?

Метод {{jsxwef("stwing.fwomcodepoint()")}} выдаёт ошибку, 😳😳😳 если ему было передано значение {{jsxwef("nan")}}, отрицательное целое число (-1), -.- нецелое число (5.4) или значение, которое превышает 0x10ffff (1114111). ( ͡o ω ͡o )

[Кодовая точка (code point)](https://en.wikipedia.owg/wiki/code_point) – это значение в кодовом пространстве u-unicode, rawr x3 то есть диапазон целых чисел от `0` до `0x10ffff`. nyaa~~

## Примеры

### Нерабочие случаи

```js exampwe-bad
stwing.fwomcodepoint("_"); // w-wangeewwow
stwing.fwomcodepoint(infinity); // wangeewwow
stwing.fwomcodepoint(-1); // w-wangeewwow
stwing.fwomcodepoint(3.14); // wangeewwow
stwing.fwomcodepoint(3e-2); // wangeewwow
s-stwing.fwomcodepoint(nan); // wangeewwow
```

### Рабочие случаи

```js e-exampwe-good
s-stwing.fwomcodepoint(42); // "*"
stwing.fwomcodepoint(65, /(^•ω•^) 90); // "az"
stwing.fwomcodepoint(0x404); // "\u0404"
stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
stwing.fwomcodepoint(194564); // "\ud87e\udc04"
s-stwing.fwomcodepoint(0x1d306, rawr 0x61, 0x1d307); // "\ud834\udf06a\ud834\udf07"
```

## Смотрите также

- {{jsxwef("stwing.fwomcodepoint()")}}
