---
title: URLSearchParams
slug: Web/API/URLSearchParams
---

{{ApiRef("URL API")}}

**`URLSearchParams`** интерфейс определяет служебные методы для работы со строкой запроса URL.

Объект, реализующий `URLSearchParams`, может непосредственно использоваться в структуре {{jsxref('Statements/for...of', 'for...of')}}, например, следующие две строки идентичны:

```
for (var p of mySearchParams);
for (var p of mySearchParams.entries());
```

{{availableinworkers}}

## Конструктор

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : Конструктор возвращает объект `URLSearchParams`.

## Свойства

_Наследование свойств отсутствует._

## Методы

_Отсутствует наследование методов_

- {{domxref("URLSearchParams.append()")}}
  - : Добавляет указанную пару key/value в качестве нового параметра поиска.
- {{domxref("URLSearchParams.delete()")}}
  - : Удаляет заданный параметр поиска и связанное с ним значение из списка всех параметров поиска.
- {{domxref("URLSearchParams.entries()")}}
  - : Возвращает {{jsxref ("Iteration_protocols", "iterator")}}, позволяющий пройти через все пары key/value, содержащиеся в этом объекте.
- {{domxref("URLSearchParams.get()")}}
  - : Возвращает первое значение, связанное с заданным параметром поиска.
- {{domxref("URLSearchParams.getAll()")}}
  - : Возвращает все значения ассоциации с заданным параметром поиска.
- {{domxref("URLSearchParams.has()")}}
  - : Возвращает {{jsxref ("Boolean")}}, указывающий, существует ли такой параметр поиска.
- {{domxref("URLSearchParams.keys()")}}
  - : Возвращает {{jsxref ("Iteration_protocols", "iterator")}}, позволяющий пройти все ключи пары key/value, содержащиеся в этом объекте.
- {{domxref("URLSearchParams.set()")}}
  - : Устанавливает значение, связанное с заданным параметром поиска, с заданным значением. Если было несколько значений, удалите остальные.
- {{domxref("URLSearchParams.toString()")}}
  - : Возвращает строку, содержащую строку запроса, подходящую для использования в URL-адресе.
- {{domxref("URLSearchParams.values()")}}
  - : Возвращает {{jsxref ("Iteration_protocols", "iterator")}}, позволяющий пройти через все значения пар key/value, содержащихся в этом объекте.

## Пример

```js
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

// Итерируем параметры поиска.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
```

## Спецификации

{{Specifications}}

## Совместимость с браузером

{{Compat}}

## Смотрите также

- Other URL-related interfaces: {{domxref("URL")}}, {{domxref("URLUtils")}}.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)

<!---->
