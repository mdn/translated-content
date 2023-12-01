---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
---

{{JSRef}}

Метод **`matchAll()`** возвращает итератор по всем результатам при сопоставлении _строки с регулярным выражением_.

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## Синтаксис

```
str.matchAll(regexp)
```

### Параметры

- `regexp`
  - : Объект регулярного выражения. Если передано значение, не являющееся объектом регулярного выражения, оно неявно преобразуется в {{jsxref("RegExp")}} используя `new RegExp(obj)`.

### Возвращаемое значение

Возвращается [iterator](/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators) (не перезапускаемый).

## Примеры

### Regexp.exec() и matchAll()

До добавления метода `matchAll` в JavaScript, можно было использовать метод [regexp.exec](/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (и регулярные выражения с флагом `/g` ) в цикле для получения доступа к совпадениям:

```js
const regexp = RegExp("foo*", "g");
const str = "table football, foosball";

while ((matches = regexp.exec(str)) !== null) {
  console.log(`Found ${matches[0]}. Next starts at ${regexp.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}
```

С появлением `matchAll`, нет необходимости использовать цикл [`while`](/ru/docs/Web/JavaScript/Reference/Statements/while) и метод `exec` с флагом `/g`.
Используя вместо этого метод `matchAll`, вы получаете итератор, который вы можете использовать более удобно с конструкциями [`for...of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of), [array spread](/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax), или {{jsxref("Array.from()")}} :

```js
const regexp = RegExp("foo*", "g");
const str = "table football, foosball";
let matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(match);
}
// Array [ "foo" ]
// Array [ "foo" ]

// итерация больше недоступна после вызова for of
// Для создания нового итератора вызовите matchAll повторно
matches = str.matchAll(regexp);

Array.from(matches, (m) => m[0]);
// Array [ "foo", "foo" ]
```

### Улучшенный доступ к группам захвата

Ещё одна веская причина использовать `matchAll` это улучшенный доступ к группам захвата. Группы захвата игнорируются при использовании [`match()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/String/match) с глобальным флагом `/g`:

```js
var regexp = /t(e)(st(\d?))/g;
var str = "test1test2";

str.match(regexp);
// Array ['test1', 'test2']
```

С `matchAll` у вас появляется к ним доступ:

```js
let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
