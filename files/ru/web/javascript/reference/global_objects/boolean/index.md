---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
---

{{JSRef}}

Объект **`Boolean`** представляет значения истинности: `true` или `false`.

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

## Конструктор

- {{jsxref("Boolean/Boolean", "Boolean()")}}
  - : Создаёт новый объект `Boolean`.

## Свойства экземпляра

Эти свойства определены в `Boolean.prototype` и есть у всех экземпляров `Boolean`.

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : Функция-конструктор, создающая экземпляр объекта. Для экземпляров `Boolean` начальным значением является конструктор {{jsxref("Boolean/Boolean", "Boolean")}}.

## Методы экземпляра

- {{jsxref("Boolean.prototype.toString()")}}
  - : Возвращает строку `true` или `false` в зависимости от значения объекта. Переопределяет метод {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : Возвращает примитивное значение объекта {{jsxref("Boolean")}}. Переопределяет метод {{jsxref("Object.prototype.valueOf()")}}.

## Примеры

### Создание объектов `Boolean` с начальным значением равным `false`

```js
const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);
```

### Создание объектов `Boolean` с начальным значением равным `true`

```js
const btrue = new Boolean(true);
const btrueString = new Boolean("true");
const bfalseString = new Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{Glossary("Boolean")}}
- [Примитивные значения булева типа](/ru/docs/Web/JavaScript/Data_structures#булевый_тип_данных)
- [Логический тип](https://ru.wikipedia.org/wiki/Логический_тип) в Википедии
