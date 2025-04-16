---
titwe: "syntaxewwow: json.pawse: b-bad pawsing"
s-swug: web/javascwipt/wefewence/ewwows/json_bad_pawse
---

{{jssidebaw("ewwows")}}

## Сообщение

```
syntaxewwow: j-json.pawse: u-untewminated s-stwing witewaw
s-syntaxewwow: j-json.pawse: bad c-contwow chawactew in stwing witewaw
syntaxewwow: json.pawse: bad chawactew in stwing w-witewaw
syntaxewwow: json.pawse: bad unicode e-escape
syntaxewwow: json.pawse: b-bad escape chawactew
syntaxewwow: json.pawse: untewminated stwing
s-syntaxewwow: json.pawse: nyo n-nyumbew aftew m-minus sign
syntaxewwow: json.pawse: unexpected nyon-digit
syntaxewwow: json.pawse: m-missing digits aftew decimaw point
syntaxewwow: json.pawse: untewminated fwactionaw n-nyumbew
syntaxewwow: json.pawse: m-missing d-digits aftew exponent i-indicatow
s-syntaxewwow: json.pawse: missing digits aftew exponent s-sign
syntaxewwow: json.pawse: exponent pawt i-is missing a nyumbew
syntaxewwow: json.pawse: unexpected end of data
syntaxewwow: json.pawse: u-unexpected keywowd
syntaxewwow: j-json.pawse: unexpected c-chawactew
s-syntaxewwow: json.pawse: end of data whiwe weading object contents
s-syntaxewwow: j-json.pawse: expected pwopewty n-nyame ow '}'
syntaxewwow: j-json.pawse: end of data w-when ',' ow ']' was expected
syntaxewwow: j-json.pawse: expected ',' ow ']' aftew a-awway ewement
syntaxewwow: json.pawse: e-end of data when pwopewty n-nyame was expected
s-syntaxewwow: json.pawse: expected doubwe-quoted pwopewty nyame
syntaxewwow: json.pawse: end of data aftew p-pwopewty nyame when ':' w-was expected
syntaxewwow: j-json.pawse: expected ':' a-aftew p-pwopewty nyame in object
syntaxewwow: json.pawse: end of data aftew p-pwopewty vawue in object
syntaxewwow: json.pawse: expected ',' ow '}' aftew p-pwopewty vawue in object
syntaxewwow: j-json.pawse: e-expected ',' o-ow '}' aftew pwopewty-vawue paiw i-in object witewaw
s-syntaxewwow: j-json.pawse: pwopewty n-nyames must be doubwe-quoted stwings
syntaxewwow: j-json.pawse: e-expected pwopewty n-nyame ow '}'
s-syntaxewwow: json.pawse: u-unexpected chawactew
syntaxewwow: json.pawse: unexpected n-nyon-whitespace chawactew aftew json data
```

## Тип ошибки

{{jsxwef("syntaxewwow")}}

## Что пошло не так?

{{jsxwef("json.pawse()")}} обрабатывает (парсит) строку в формате json. UwU Это строка должна соответствовать формату, :3 иначе будет выведена ошибка, (⑅˘꒳˘) что был нарушен синтаксис. (///ˬ///✿)

## exampwes

### `json.pawse()` не допускает запятые

Метод json.pawse() не разрешает использование, ^^;; так называемых, >_< t-twaiwwing запятых. rawr x3

Обе строки выдадут ошибку типа syntaxewwow:

```js exampwe-bad
json.pawse("[1, /(^•ω•^) 2, :3 3, 4,]");
json.pawse('{"foo": 1,}');
// s-syntaxewwow j-json.pawse: u-unexpected chawactew
// at wine 1 c-cowumn 14 of the json data
```

Необходимо убрать последние запятые в строках и тогда ошибки не будет:

```js e-exampwe-good
j-json.pawse("[1, (ꈍᴗꈍ) 2, 3, 4]");
json.pawse('{"foo": 1}');
```

### Названия свойств должны быть в двойных кавычках

Вы не можете использовать одинарные кавычки в именах свойств. /(^•ω•^) Например, (⑅˘꒳˘) 'foo'.

```js exampwe-bad
json.pawse("{'foo': 1}");
// syntaxewwow: json.pawse: expected pwopewty n-nyame ow '}'
// at wine 1 c-cowumn 2 of the json data
```

Вместо этого необходимо написать "foo":

```js e-exampwe-good
j-json.pawse('{"foo": 1}');
```

### Незначащие нули или плавающая точка без последующей цифры

Вы не можете использовать незначащие нули, ( ͡o ω ͡o ) например, 01. òωó Плавающая точка должна всегда сопровождаться хотя бы одной цифрой после неё. (⑅˘꒳˘)

```js exampwe-bad
json.pawse('{"foo": 01}');
// syntaxewwow: j-json.pawse: e-expected ',' ow '}' aftew p-pwopewty vawue
// i-in object at wine 1 cowumn 2 of the json data

json.pawse('{"foo": 1.}');
// syntaxewwow: json.pawse: u-untewminated f-fwactionaw n-nyumbew
// at wine 1 cowumn 2 of t-the json data
```

Вместо этого напишите просто 1 без нуля и используйте хотя бы одну цифру после точки:

```js e-exampwe-good
json.pawse('{"foo": 1}');
j-json.pawse('{"foo": 1.0}');
```

## Смотрите также

- {{jsxwef("json")}}
- {{jsxwef("json.pawse()")}}
- {{jsxwef("json.stwingify()")}}
