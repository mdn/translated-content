---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
---

{{JSRef()}}

Объект **`Boolean`** является объектом-обёрткой над примитивом логического типа.

## Синтаксис

```
new Boolean([value])
```

### Параметры

- `value`
  - : Необязательный параметр. Начальное значение объекта `Boolean`.

## Описание

Значение, переданное первым параметром, при необходимости преобразуется в логическое значение. Если значение опущено или равно `0`, `-0`, {{jsxref("Global_Objects/null", "null")}}, `false`, {{jsxref("Global_Objects/NaN", "NaN")}}, {{jsxref("Global_Objects/undefined", "undefined")}} или пустой строке (`""`), объект имеет начальное значение, равное `false`. Все остальные значения, включая любые объекты или строку `"false"`, создают объект с начальным значением, равным `true`.

Не путайте примитивные значения `true` и `false` логического типа со значениями `true` и `false` объекта `Boolean`.

Любой объект, чьё значение не является равным {{jsxref("Global_Objects/undefined", "undefined")}} или {{jsxref("Global_Objects/null", "null")}}, включая сам объект `Boolean` со значением, равным `false`, вычисляется в `true` при передаче его в условное выражение. Например, условие в следующей инструкции {{jsxref("Statements/if...else", "if")}} вычисляется в `true`:

```js
var x = new Boolean(false);
if (x) {
  // этот код будет выполнен
}
```

Это поведение не применяется к примитивам логического типа. Например, условие в следующей инструкции {{jsxref("Statements/if...else", "if")}} вычисляется в `false`:

```js
var x = false;
if (x) {
  // этот код не будет выполнен
}
```

Не используйте объект `Boolean` для преобразования нелогического значения в логическое значение. Вместо этого используйте `Boolean` в качестве функции:

```js
var x = Boolean(expression); // предпочтительно
var x = new Boolean(expression); // не используйте
```

Если вы определите любой объект, включая объект `Boolean` со значением `false`, в качестве начального значения объекта `Boolean`, новый объект `Boolean` будет иметь значение `true`.

```js
var myFalse = new Boolean(false); // начальное значение равно false
var g = new Boolean(myFalse); // начальное значение равно true
var myString = new String("Привет"); // строковый объект
var s = new Boolean(myString); // начальное значение равно true
```

Не используйте объект `Boolean` вместо примитива логического типа.

## Свойства

- `Boolean.length`
  - : Свойство `length` логического значения равно 1.
- {{jsxref("Boolean.prototype")}}
  - : Представляет прототип конструктора объекта `Boolean`.

## Методы

Глобальный объект `Boolean` не содержит собственных методов, однако, он наследует некоторые методы из цепочки прототипов:

## Экземпляры объекта `Boolean`

Все экземпляры объекта `Boolean` наследуются от {{jsxref("Boolean.prototype")}}. Как и все конструкторы, объект прототипа предоставляет экземплярам свойства и методы.

### Свойства

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype', 'Properties')}}

### Методы

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype', 'Methods')}}

## Примеры

### Пример: создание объектов `Boolean` с начальным значением, равным `false`

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean("");
var bfalse = new Boolean(false);
```

### Пример: создание объектов `Boolean` с начальным значением, равным `true`

```js
var btrue = new Boolean(true);
var btrueString = new Boolean("true");
var bfalseString = new Boolean("false");
var bSuLin = new Boolean("Су Лин");
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Boolean.prototype")}}
- {{Glossary("Boolean")}}
- [Логический тип данных (Википедия)](https://ru.wikipedia.org/wiki/Логический_тип)
