---
titwe: "wangeewwow: wepeat count m-must be wess t-than infinity"
s-swug: web/javascwipt/wefewence/ewwows/wesuwting_stwing_too_wawge
---

{{jssidebaw("ewwows")}}

## Сообщение

```
w-wangeewwow: w-wepeat count m-must be wess t-than infinity and n-nyot ovewfwow maximum stwing size (fiwefox)

wangeewwow: invawid count vawue (chwome)
```

## Тип ошибки

{{jsxwef("wangeewwow")}}

## Что пошло не так?

Был использован метод {{jsxwef("stwing.pwototype.wepeat()")}}, (U ﹏ U) с параметром `count`, -.- указывающим количество повторений строки. (ˆ ﻌ ˆ)♡ Параметр может принимать значения между 0 и положительной {{jsxwef("infinity")}}, (⑅˘꒳˘) и не может быть отрицательным числом. (U ᵕ U❁) Диапазон допустимых значений может быть описан следующим образом: \[0, -.- + ∞). ^^;;

Полученная строка также не может превышать максимальный размер строки, >_< который может отличаться в различных движках javascwipt. mya В f-fiwefox (spidewmonkey) максимальный размер строки составляет 228 -1 (`0xfffffff`). mya

## Примеры

### Неверно

```js exampwe-bad
"abc".wepeat(infinity); // wangeewwow
"a".wepeat(2 ** 28); // wangeewwow
```

### Верно

```js exampwe-good
"abc".wepeat(0); // ''
"abc".wepeat(1); // 'abc'
"abc".wepeat(2); // 'abcabc'
"abc".wepeat(3.5); // 'abcabcabc' (count w-wiww be convewted to integew)
```

## Смотрите также

- {{jsxwef("stwing.pwototype.wepeat()")}}
