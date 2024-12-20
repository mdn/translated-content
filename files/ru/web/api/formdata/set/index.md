---
title: FormData.set()
slug: Web/API/FormData/set
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

Метод set() из интерфейса {{domxref("FormData")}} присваивает новое значение существующему ключу внутри объекта `FormData`, или добавляет ключ/значение если до этого они не были установлены.

Разница между `set()` и {{domxref("FormData.append")}} в том, что если заданный ключ уже существует, `set()` заменит данные в нем на новые, а {{domxref("FormData.append")}} добавит новое значение к остальным в конец.

## Синтаксис

Существует две формы использования данной функции: с двумя и тремя параметрами:

```js
formData.set(name, value);
formData.set(name, value, filename);
```

#### Параметры

- `name`
  - : Имя поля, которому будет присвоен value.
- `value`
  - : Значение, присваиваемое полю. В варианте с двумя параметрами, это [`USVString`](/ru/docs/Web/JavaScript/Reference/Global_Objects/String), если нет, то оно будет конвертировано. В варианте с тремя параметрами это может быть [`Blob`](/ru/docs/Web/API/Blob), [`File`](/ru/docs/Web/API/File), или [`USVString`](/ru/docs/Web/JavaScript/Reference/Global_Objects/String), И снова, если ни один из них не указан в значении то оно будет конвертировано в строку.
- `filename`{{optional_inline}}
  - : Имя файла, которое будет отправлено серверу ([`USVString`](/ru/docs/Web/JavaScript/Reference/Global_Objects/String)), когда [`Blob`](/ru/docs/Web/API/Blob) или [`File`](/ru/docs/Web/API/File) прошёл проверку как второй параметр. Стандартное имя файла для [`Blob`](/ru/docs/Web/API/Blob) объектов это "blob".

> [!NOTE]
> Если вы укажете [`Blob`](/ru/docs/Web/API/Blob) в качестве данных для включения в объект `FormData`, имя файла будет указано для сервера в заголовке "Content-Disposition" и может отличаться от браузера к браузеру.

## Пример

Следующий код создаёт пустой `FormData` объект:

```js
var formData = new FormData(); // Сейчас пустой
```

Вы можете установить для него пару ключ/значение, используя {{domxref("FormData.set")}}:

```js
formData.set("username", "Chris");
formData.set("userpic", myFileInput.files[0], "chris.jpg");
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Using FormData objects](/ru/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
