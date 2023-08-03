---
title: FormData.getAll()
slug: Web/API/FormData/getAll
---

{{APIRef("XMLHttpRequest")}}

**`getAll()`** - метод объекта {{domxref("FormData")}}, который возвращает все значения, связанные с ключом в объекте FormData.

> **Примечание:** Этот метод доступен в [Web Workers](/ru/docs/Web/API/Web_Workers_API).

## Синтаксис

```js
formData.getAll(name);
```

### Параметры

- `name`
  - : Строка формата {{domxref("USVString")}}, задающая имя ключа.

### Возвращает

Массив значений типа {{domxref("FormDataEntryValue")}}, привязанных к ключу, переданному в параметре `name`. Если переданный ключ не существует, метод вернёт пустой массив.

## Пример

Эта строка создаст пустой объект FormData:

```js
var formData = new FormData();
```

Можем добавить два `username` при помощи {{domxref("FormData.append")}}:

```js
formData.append("username", "Борис");
formData.append("username", "Кирилл");
```

Тогда метод `getAll()` вернёт оба значения username в виде массива:

```js
formData.getAll("username"); // Вернёт ["Борис", "Кирилл"]
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
