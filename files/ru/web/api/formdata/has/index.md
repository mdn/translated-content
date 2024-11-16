---
title: FormData.has()
slug: Web/API/FormData/has
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

Метод **`has()`** из интерфейса {{domxref("FormData")}} возвращает логическое значение, указывающее, содержит ли объект `FormData` указанный ключ.

## Синтаксис

```js
formData.has(name);
```

### Параметры

- `name`
  - : {{domxref("USVString")}} представляет собой имя ключа, которое вы хотите проверить.

### Возвращаемое значение

{{domxref("Boolean")}}.

## Пример

Следующий код создаёт пустой объект `FormData`:

```js
var formData = new FormData();
```

В следующем коде показаны результаты проверки существования `username` в объекте `FormData`, до и после добавления значения `username` в {{domxref("FormData.append")}}:

```js
formData.has("username"); // Returns false
formData.append("username", "Chris");
formData.has("username"); // Returns true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("XMLHTTPRequest")}}
- [Использование XMLHttpRequest](/ru/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Использование объекта FormData](/ru/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
