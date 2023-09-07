---
title: Property accessors
slug: Web/JavaScript/Reference/Operators/Property_accessors
---

{{jsSidebar("Operators")}}

Доступ к свойствам объекта можно получить, используя точечную и скобочную записи.

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html", "taller")}}

## Синтаксис

```
object.property
object["property"]
```

## Описание

Можно думать об объекте как об ассоциативном массиве (или _карте, словаре, хэш-таблице, таблице поиска_). _Ключи_ в таком массиве - это имена свойств объекта.

Когда речь идёт о свойствах объекта, обычно различают собственно свойства и методы. Однако разделение свойство/метод это не более чем условность. Метод - это просто свойство, которое можно вызвать (например, если оно содержит ссылку на {{jsxref("Function", "функцию")}} в качестве значения.

Есть два способа доступа к свойствам: точечная и скобочная записи.

### Точечная запись

В записи `object.property`, property должно быть действительным [идентификатором](/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/Identifier). (В стандарте ECMAScript, имена свойств технически называются "IdentifierNames", а не "Identifiers", поэтому зарезервированные слова могут быть использованы в их качестве, но это не рекомендуется). Например, `object.$1` является верной записью, а `object.1` - нет.

```js
const variable = object.property_name;

object.property_name = value;
```

```js
const object = {};

object.$1 = 'foo';
console.log(object.$1);  // 'foo'

object.1 = 'bar';        // SyntaxError
console.log(object.1);   // SyntaxError
```

Здесь метод с именем `createElement` считывается с объекта `document` и вызывается.

```js
document.createElement("pre");
```

Если вы хотите вызвать метод на численном литерале, не имеющий части с экспонентой или точки, отделяющей дробную часть, нужно ставить пробел перед точкой, являющейся частью обращения к этому методу, чтобы интерпретатор не посчитал, что это точка отделяет дробную часть числа (или использовать другие способы этого избежать).

```js
// SyntaxError, здесь считается, что 77. это число,
// поэтому такая запись эквивалентна (77.)toExponentional()
// что является ошибкой
77.toExponentional()
// Рабочие варианты:
77.toExponential()
77
.toExponential()
;(77).toExponential()
// Здесь первая точка относится к числу, вторая вызывает метод
// то есть эта запись равносильна (77.).toExponential()
77..toExponential()
// Эквивалентно (77.0).toExponential()
77.0.toExponential()
```

### Скобочная запись

В записи `object[property_name]`, _`property_name` -_ это выражение, вычисляющееся в строку или [символ](/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/Symbol). Это может быть любая строка, не обязательно действительный идентификатор, например `'1foo'`, '`!bar!'` или даже `' '` (пробел).

```js
const variable = object[property_name];
object[property_name] = value;
```

Пример, аналогичный примеру в предыдущем пункте:

```js
document["createElement"]("pre");
```

Пробел перед скобкой допускается:

```js
document["createElement"]("pre");
```

### Имена свойств

Имена свойств могут быть строками или [символами](/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/Symbol). Любое другое значение приводится к строке. Следующий код выводит `'value'`, поскольку число `1` приводится к строке `'1'`.

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

Этот пример также выводит `'value',` так как и `foo`, и bar приводятся к одной и той же строке.

```js
const foo = { unique_prop: 1 };
const bar = { unique_prop: 2 };
const object = {};

object[foo] = "value";
console.log(object[bar]);
```

В движке [SpiderMonkey](/ru/docs/Mozilla/Projects/SpiderMonkey) JavaScript это строка `'[object Object]'`.

### Привязка методов

Метод не привязан к содержащему его объекту. Это значит, что значение `this` в методах объекта не всегда указывает на него. Вместо этого, `this` "передаётся" при вызове метода. Смотрите подробнее [`this`](/ru/docs/Web/JavaScript/Reference/Operators/this#Method_binding).

## Примеры

### Скобочная запись или `eval`

Новички JavaScript часто делают ошибку, используя [eval](/ru/docs/Web/JavaScript/Reference/Global_Objects/eval) там, где можно просто использовать скобочную запись.

Например, следующий синтаксис можно часто увидеть в скриптах.

```js
x = eval("document.forms.form_name.elements." + strFormControl + ".value");
```

Функция `eval()` очень медленная и её использования следует избегать, когда это возможно. Кроме того, строка `strFormControl` при таком использовании обязаны содержать действительный идентификатор, что не является обязательным для `id` полей формы, то есть, например, поле с id 1 не получится получить такой записью. Лучше вместо этого использовать скобочную запись:

```js
x = document.forms["form_name"].elements[strFormControl].value;
```

## Спецификации

| Спецификация                                                         | Статус             | Комментарий              |
| -------------------------------------------------------------------- | ------------------ | ------------------------ |
| {{SpecName('ES6', '#sec-property-accessors', 'Property Accessors')}} | {{Spec2('ES6')}}   |                          |
| {{SpecName('ES5.1', '#sec-11.2.1', 'Property Accessors')}}           | {{Spec2('ES5.1')}} |                          |
| {{SpecName('ES1', '#sec-11.2.1', 'Property Accessors')}}             | {{Spec2('ES1')}}   | Изначальное определение. |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object")}}
