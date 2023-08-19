---
title: FormData.keys()
slug: Web/API/FormData/keys
---

{{APIRef("XMLHttpRequest")}}

**`FormData.keys()`** метод возвращает {{jsxref("Iteration_protocols",'iterator')}} позволяя пройтись по всем ключам содержащимся в этом объекте. Ключи являются {{domxref("USVString")}} объектами.

> **Примечание:** Метод доступен в [Web Workers](/ru/docs/Web/API/Web_Workers_API).

## Синтаксис

```
formData.keys();
```

### Возвращаемые значения

Возвращает {{jsxref("Iteration_protocols","iterator")}}.

## Пример

```js
// Create a test FormData object
var formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the keys
for (var key of formData.keys()) {
  console.log(key);
}
```

Результат:

```
key1
key2
```

## Спецификация

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{domxref("XMLHTTPRequest")}}
- [Использование XMLHttpRequest](/ru/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Использование объектов FormData](/ru/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
