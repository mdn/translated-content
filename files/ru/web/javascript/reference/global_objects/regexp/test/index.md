---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
---

{{JSRef("Global_Objects", "RegExp")}}

## Сводка

Метод **`test()`** выполняет поиск сопоставления регулярного выражения указанной строке. Возвращает `true` или `false`.

## Синтаксис

```
regexObj.test(str)
```

### Параметры

- `str`
  - : Строка, с которой сопоставляется регулярное выражение.

### Возвращаемое значение

Логическое значение: `true` или `false`.

## Описание

Используйте метод `test()`, если вы просто хотите узнать, находится ли шаблон в строке (он почти аналогичен методу {{jsxref("String.prototype.search()")}}, только вместо индекса шаблона возвращает `true` или `false`); для получения дополнительной информации о сопоставлении (но за счёт более медленного выполнения) используйте метод {{jsxref("RegExp.prototype.exec()", "exec()")}} (он аналогичен методу {{jsxref("String.prototype.match()")}}). Как и при вызове метода {{jsxref("RegExp.prototype.exec()", "exec()")}} (или при совместном с ним вызове), метод `test()`, вызванный несколько раз на одном и том же экземпляре глобального регулярного выражения, будет начинать проверку с конца предыдущего сопоставления.

## Примеры

### Пример: использование метода `test()`

Следующий пример печатает сообщение, в зависимости от того, была ли проверка успешной:

```js
function testinput(re, str) {
  var midstring;
  if (re.test(str)) {
    midstring = " содержит ";
  } else {
    midstring = " не содержит ";
  }
  console.log(str + midstring + re.source);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Глава про [регулярные выражения](/ru/docs/Web/JavaScript/Guide/Regular_Expressions) в [руководстве по JavaScript](/ru/docs/Web/JavaScript/Guide)
- {{jsxref("Global_Objects/RegExp", "RegExp")}}
