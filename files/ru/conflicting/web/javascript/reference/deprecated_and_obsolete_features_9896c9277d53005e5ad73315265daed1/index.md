---
title: "Warning: Date.prototype.toLocaleFormat (Является устаревшим)"
slug: conflicting/Web/JavaScript/Reference/Deprecated_and_obsolete_features_9896c9277d53005e5ad73315265daed1
original_slug: Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat
---

{{jsSidebar("Errors")}}

## Сообщение

```
Внимание: Date.prototype.toLocaleFormat устарело; рассмотрите возможность использования Intl.DateTimeFormat взамен.
```

## Тип ошибки

предупреждающий. Выполнение скрипта не будет остановлено.

## Что пошло не так?

Нестандартный {{jsxref("Date.prototype.toLocaleFormat")}} метод, устарел и больше не должен использоваться. Он использует строку формата в том же формате, ожидаемом
`strftime()` функция в C. функция больше не доступна в Firefox 58+.

## Примеры

### Неправильный синтаксис

В {{jsxref("Date.prototype.toLocaleFormat")}} метод устарел и будет удалён (поддержка кроссбраузерных браузеров, доступна только в Firefox).

```js example-bad
var today = new Date();
var date = today.toLocaleFormat('%A, %e. %B %Y');

console.log(date);
// In German locale
// "Freitag, 10. März 2017"
```

### Альтернативный стандартный синтаксис с использованием ECMAScript IntlAPI

Стандарт ECMA-402 (ECMAScript Intl API) определяет стандартные объекты и методы, которые позволяют форматировать дату и время с учётом языка (доступно в Chrome 24+, Firefox 29+, IE11+, Safari10+).

You can now either use the {{jsxref("Date.prototype.toLocaleDateString")}} method if you just want to format one date.

```js example-good
var today = new Date();
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var date = today.toLocaleDateString('de-DE', options);

console.log(date);
// "Freitag, 10. März 2017"
```

Или, вы можете использовать {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} объект, который позволяет кешировать объект с большинством вычислений, выполненных таким образом, чтобы Форматирование было быстрым. Это полезно, если у вас есть цикл дат для форматирования.

```js example-good
var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
var dateFormatter = new Intl.DateTimeFormat('de-DE', options)

var dates = [Date.UTC(2012, 11, 20, 3, 0, 0),
             Date.UTC(2014, 04, 12, 8, 0, 0)];

dates.forEach(date => console.log(dateFormatter.format(date)));

// "Donnerstag, 20. Dezember 2012"
// "Montag, 12. Mai 2014"
```

### Альтернативный стандартный синтаксис с использованием Дата методов

{{jsxref("Date")}} объект предлагает несколько методов для построения пользовательской строки даты.

```js example-bad
(new Date()).toLocaleFormat("%Y%m%d");
// "20170310"
```

Может быть преобразован в:

```js example-good
let now = new Date();
let date = now.getFullYear() * 10000 +
          (now.getMonth() + 1) * 100 + now.getDate();

console.log(date);
// "20170310"
```

## Смотрите также

- {{jsxref("Date.prototype.toLocaleFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString")}}
- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
