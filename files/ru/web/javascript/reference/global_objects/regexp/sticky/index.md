---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
---

{{JSRef("Global_Objects", "RegExp")}}

## Сводка

Свойство **`sticky`** отражает тот факт, является ли поиск «липким» (то есть, начинается ли он с индекса, на который указывает свойство {{jsxref("RegExp.lastIndex", "lastIndex")}} регулярного выражения). Свойство `sticky` является свойством только для чтения и принадлежит экземпляру регулярного выражения.

{{js_property_attributes(0, 0, 0)}}

## Описание

Значение свойства **`sticky`** имеет тип {{jsxref("Global_Objects/Boolean", "Boolean")}} и содержит `true`, если при определении регулярного выражения использовался флаг `"y",` в противном случае оно содержит `false`. Флаг `"y"` указывает на то, что регулярное выражение сопоставляется с целевой строкой начиная с позиции, на которую указывает его свойство {{jsxref("RegExp.lastIndex", "lastIndex")}} (и не пытается сопоставиться по любому более старшему индексу). Такое поведение позволяет эффективно использовать символ `"^"` сопоставления-с-началом в любом месте строки путём смены значения свойства {{jsxref("RegExp.lastIndex", "lastIndex")}}.

Вы не можете напрямую изменить это свойство.

## Примеры

### Пример: использование регулярных выражений с флагом «липучести»

Этот пример демонстрирует, как можно использовать флаг «липучести» регулярных выражений для сопоставления с отдельными строками многострочного ввода.

```js
var text = "Первая строка\nВторая строка";
var regex = /(\S+) строка\n?/y;

var match = regex.exec(text);
console.log(match[1]); // напечатает 'Первая'
console.log(regex.lastIndex); // напечатает '14'

var match2 = regex.exec(text);
console.log(match2[1]); // напечатает 'Вторая'
console.log(regex.lastIndex); // напечатает '27'

var match3 = regex.exec(text);
console.log(match3 === null); // напечатает 'true'
```

## Проверка совместимости

Во время выполнения можно проверить, поддерживается ли флаг «липучести», при помощи блока `try { … } catch { … }`. Для этого надо использовать либо выражение с `eval(…)`, либо конструктор `RegExp(строка регулярного выражения, строка-с-флагами)` (поскольку нотация `/регулярное выражение/флаги` обрабатывается во время компиляции, исключение будет выброшено до того, как выполнение достигнет блока `catch`). Например:

```js
var supports_sticky;
try {
  RegExp("", "y");
  supports_sticky = true;
} catch (e) {
  supports_sticky = false;
}
console.log(supports_sticky); // напечатает 'false' в Firefox 2 и 'true' в Firefox 3+
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
