---
title: FormData.append()
slug: Web/API/FormData/append
---

{{APIRef("XMLHttpRequest")}}

Метод **`append()`** из интерфейса {{domxref("FormData")}} добавляет новое значение в существующий ключ внутри объекта `FormData`, или создаёт ключ, в случае если он отсутствует.

Разница между {{domxref("FormData.set")}} и `append()` в том, что если заданный ключ уже существует, {{domxref("FormData.set")}} заменит данные в нем на новые, а `append()` добавит новое значение к остальным в конец.

> **Примечание:** Данный метод также доступен в [Web Workers](/ru/docs/Web/API/Web_Workers_API).

## Синтаксис

Существует две формы использования данной функции: с двумя и тремя параметрами:

```js
formData.append(name, value);
formData.append(name, value, filename);
```

### Параметры

- `name`
  - : Имя поля, которое будет содержать данные из `value`.
- `value`
  - : Значение поля. В варианте с двумя параметрами, это является {{domxref("USVString")}}, если значение не является строкой, то оно будет в неё конвертировано. В варианте с тремя параметрами это может быть {{domxref("Blob")}}, {{domxref("File")}}, или {{domxref("USVString")}}, И снова, если ни один из них не указан в значении то оно будет конвертировано в строку.
- `filename` {{optional_inline}}
  - : Имя файла которое будет отправлено серверу ({{domxref("USVString")}}), когда {{domxref("Blob")}} или {{domxref("File")}} прошёл проверку как второй параметр. Стандартное имя файла для {{domxref("Blob")}} объектов это "blob".

> **Примечание:** Если вы укажете {{domxref("Blob")}} в качестве данных для включения в объект `FormData`, имя файла будет указано для сервера в заголовке "Content-Disposition" и может отличаться от браузера к браузеру.

### Возвращает

Пустота.

## Пример

Данная строка кода создаёт пустой `FormData` объект:

```js
var formData = new FormData(); // Currently empty
```

Вы можете добавлять пару ключ/значение с помощью {{domxref("FormData.append")}}:

```js
formData.append("username", "Chris");
formData.append("userpic", myFileInput.files[0], "chris.jpg");
```

Также вы можете использовать обозначения массива для первого аргумента:

```js
formData.append("userpic[]", myFileInput1.files[0], "chris1.jpg");
formData.append("userpic[]", myFileInput2.files[0], "chris2.jpg");
```

Эта техника позволяет упростить мультифайловую загрузку данных потому, что в результате структура данных является более благоприятной для цикла.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ru/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ru/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
