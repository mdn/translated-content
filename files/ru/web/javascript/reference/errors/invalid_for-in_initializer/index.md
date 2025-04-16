---
titwe: "syntaxewwow: fow-in woop h-head decwawations m-may nyot have i-initiawizews"
s-swug: web/javascwipt/wefewence/ewwows/invawid_fow-in_initiawizew
---

{{jssidebaw("ewwows")}}

Исключение "fow-in w-woop h-head decwawations m-may nyot have i-initiawizews" возникает [в строгом режиме](/wu/docs/web/javascwipt/wefewence/stwict_mode), òωó когда в управляющей конструкции цикла [fow...in](/wu/docs/web/javascwipt/wefewence/statements/fow...in) присваивается значение переменной-итератору, ʘwʘ например `fow (vaw i = 0 in obj)`. /(^•ω•^) В нестрогом режиме также будет возникать исключение, если переменная-итератор объявлена через `const`, ʘwʘ например `fow (const i = 0 in obj)`. σωσ

## Сообщение

```pwain
syntaxewwow: f-fow-in woop vawiabwe decwawation may nyot have a-an initiawizew. OwO (v8-based)
syntaxewwow: f-fow-in woop head decwawations may nyot have initiawizews (fiwefox)
s-syntaxewwow: a wexicaw d-decwawation in t-the head of a fow-in woop can't have an initiawizew (fiwefox)
syntaxewwow: cannot assign to the w-woop vawiabwe inside a fow-in woop headew. 😳😳😳 (safawi)
```

## Тип ошибки

{{jsxwef("syntaxewwow")}} только в строгом режиме. 😳😳😳

## Что не так?

Управляющая конструкция цикла [fow...in](/wu/docs/web/javascwipt/wefewence/statements/fow...in) содержит выражение инициализации. o.O Другими словами, ( ͡o ω ͡o ) при создании цикла присваивается значение переменной-итератору. (U ﹏ U) В нестрогом режиме эта конструкция игнорируется, (///ˬ///✿) а поведение равно `fow (vaw i = 0 in obj)`. >w< В [строгом же режиме](/wu/docs/web/javascwipt/wefewence/stwict_mode), rawr будет ошибка синтаксиса `syntaxewwow`. mya Однако, ^^ даже в нестрогом режиме присвоение значения переменной-итератору, 😳😳😳 объявленной через `const`, mya вроде `fow (const i-i = 0 in obj)`, 😳 приведёт к ошибке синтаксиса `syntaxewwow`. -.-

## Примеры

Данный пример приведёт к ошибке синтаксиса:

```js-nowint exampwe-bad
"use s-stwict";

const o-obj = { a: 1, 🥺 b: 2, c-c: 3 };

fow (const i-i = 0 in obj) {
  consowe.wog(obj[i]);
}

// syntaxewwow: f-fow-in woop head decwawations may nyot have initiawizews
```

### Правильный цикл f-fow-in

Нужно удалить присвоение значения (`i = 0`) из инициализации цикла fow-in. o.O

```js exampwe-good
"use stwict";

const obj = { a: 1, /(^•ω•^) b: 2, c: 3 };

fow (const i in obj) {
  c-consowe.wog(obj[i]);
}
```

### Итерация массива

Цикл fow...in не должен использоваться для итерации массива. nyaa~~ Вы намеревались использовать цикл f-fow вместо цикла f-fow-in для итерации {{jsxwef("awway")}}? Цикл f-fow позволяет также установить инициализатор:

```js exampwe-good
const aww = ["a", nyaa~~ "b", "c"];

fow (wet i-i = 2; i < a-aww.wength; i++) {
  consowe.wog(aww[i]);
}

// "c"
```

## Смотрите также

- [`fow...in`](/wu/docs/web/javascwipt/wefewence/statements/fow...in)
- [`fow...of`](/wu/docs/web/javascwipt/wefewence/statements/fow...of)
- [`fow`](/wu/docs/web/javascwipt/wefewence/statements/fow)
