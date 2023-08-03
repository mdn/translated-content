---
title: FormData.entries()
slug: Web/API/FormData/entries
---

{{APIRef("XMLHttpRequest")}}

Метод **`FormData.entries()`** возвращает {{jsxref("Iteration_protocols",'iterator')}}, позволяя пройтись по всем ключам/значениям в этом объекте. Ключ каждой пары - это объект {{domxref("USVString")}}, значение - это {{domxref("USVString")}} или {{domxref("Blob")}}.

> **Примечание:** Метод доступен в [Web Workers](/ru/docs/Web/API/Web_Workers_API).

## Синтаксис

```
formData.entries();
```

### Возвращаемые значения

Возвращает {{jsxref("Iteration_protocols","iterator")}}.

## Пример

```js
// Create a test FormData object
var formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the key/value pairs
for (var pair of formData.entries()) {
  console.log(pair[0] + ", " + pair[1]);
}
```

Результат:

```
key1, value1
key2, value2
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ru/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ru/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
