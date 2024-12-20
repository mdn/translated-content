---
title: FormData.values()
slug: Web/API/FormData/values
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

The **`FormData.values()`** метод возвращает {{jsxref("Iteration_protocols",'iterator')}} позволяя пройтись по всем значениям в этом объекте. Значения - это {{domxref("USVString")}} или {{domxref("Blob")}} объекты.

## Синтаксис

```
formData.values();
```

### Возвращаемые значения

Возвращает {{jsxref("Iteration_protocols","iterator")}}.

## Пример

```js
// Create a test FormData object
var formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the values
for (var value of formData.values()) {
  console.log(value);
}
```

Результат:

```
value1
value2
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("XMLHTTPRequest")}}
- [Использование XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Использование FormData objects](/ru/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
