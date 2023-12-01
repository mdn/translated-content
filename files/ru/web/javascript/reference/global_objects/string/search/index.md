---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
---

{{JSRef("Global_Objects", "String")}}

## Сводка

Метод **`search()`** выполняет поиск сопоставления между регулярным выражением и этим объектом {{jsxref("Global_Objects/String", "String")}}.

## Синтаксис

```
str.search([regexp])
```

### Параметры

- `regexp`
  - : Необязательный параметр. Объект регулярного выражения. Если будет передан не объект регулярного выражения, он будет неявно преобразован в объект {{jsxref("Global_Objects/RegExp", "RegExp")}} через вызов конструктора `new RegExp(regexp)`.

## Описание

При успехе метод `search()` возвращает индекс первого сопоставления с регулярным выражением внутри строки. В противном случае метод вернёт -1.

Если вы хотите узнать, находится ли шаблон в строке, используйте метод `search()` (он работает почти так же, как и метод {{jsxref("RegExp.prototype.test()", "test()")}} регулярного выражения, но вместо наличия подстроки возвращает её индекс); для получения дополнительной информации (за счёт более медленного выполнения) используйте метод {{jsxref("String.prototype.match()", "match()")}} (работает так же, как метод {{jsxref("RegExp.prototype.exec()", "exec()")}} регулярного выражения).

## Примеры

### Пример: использование метода `search()`

В следующем примере в журнал попадает сообщение, зависящее от успешности или неуспешности прохождения проверки.

```js
function testInput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = " содержит ";
  } else {
    midstring = " не содержит ";
  }
  console.log(str + midstring + re);
}

var testString = "hey JuDe";
var re = /[A-Z]/g;

testInput(re, testString); // выведет: hey Jude содержит /[A-Z]/g
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
