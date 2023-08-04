---
title: Blob
slug: Web/API/Blob
---

{{APIRef("File API")}}

Объект `Blob` представляет из себя подобный файлу объект с неизменяемыми, необработанными данными; они могут читаться как текст или двоичные данные, либо могут быть преобразованы в {{DOMxRef("ReadableStream")}}, таким образом, его методы могут быть использованы для обработки данных.

Blob-ы могут представлять данные, которые не обязательно должны быть в родном для JavaScript формате. Интерфейс {{domxref("File")}} основан на `Blob`, наследует функциональность `Blob` и расширяет его для поддержки файлов на стороне пользователя.

## Использование Blob

Для создания `Blob` не из объектов и данных blob, используйте конструктор {{domxref("Blob.Blob", "Blob()")}} . Чтобы создать blob из подмножества данных из другого blob, используйте метод {{domxref("Blob.slice()", "slice()")}}. Чтобы получить объект `Blob` для файла на файловой системе пользователя, смотрите документацию на {{domxref("File")}}.

API, принимающие объекты `Blob`, также перечислены в документации на {{domxref("File")}}.

> **Примечание:** Метод `slice()` имеет изначально задаваемую длину как второй аргумент, что используется для указания числа байт копируемых в новый `Blob.` Если указать такие параметры `start + length`, которые превышают размер исходного `Blob`, то возвращаемый `Blob` будет содержать данные от начального индекса (start index) до конца исходного `Blob.`

> **Примечание:** Следует помнить ,что метод `slice()` имеет сторонние префиксы в некоторых браузерах: `blob.mozSlice()` для Firefox 12 и ранее, так же `blob.webkitSlice()` в Safari. Старая версия метода `slice()`, без сторонних приставок, имеет другой алгоритм и устарела. Поддержка `blob.mozSlice()` была убрана в Firefox 30.

## Конструктор

- {{domxref("Blob.Blob", "Blob(blobParts[, options])")}}
  - : Возвращает создаваемый объект Blob, который содержит соединение всех данных в массиве, переданном в конструктор.

## Свойства

- {{domxref("Blob.isClosed")}} {{readonlyinline}} {{experimental_inline}}
  - : Логическое значение, показывающее, вызывался ли метод {{domxref("Blob.close()")}} у blob. Закрытый blob не может быть прочитан.
- {{domxref("Blob.size")}} {{readonlyinline}}
  - : Размер данных, содержащихся в объекте `Blob`, в байтах.
- {{domxref("Blob.type")}} {{readonlyinline}}
  - : Строка с MIME-типом данных, содержащихся в `Blob`. Если тип неизвестен, строка пуста.

## Методы

- {{domxref("Blob.close()")}} {{experimental_inline}}
  - : Закрывает Blob объект, по возможности освобождая занятые им ресурсы.
- {{domxref("Blob.slice()", "Blob.slice([start[, end[, contentType]]])")}}
  - : Возвращает новый `Blob` объект, содержащий данные в указанном диапазоне байтов исходного `Blob`.
- {{DOMxRef("Blob.stream()")}}
  - : Возвращает {{DOMxRef("ReadableStream")}}, который может использоваться для чтения содержимого `Blob`.
- {{DOMxRef("Blob.text()")}}
  - : Возвращает promise, который исполняется с {{DOMxRef("USVString")}}, содержащей всё содержимое `Blob`, интерпретируемое как текст UTF-8.

## Примеры

### Создание Blob

Конструктор {{domxref("Blob.Blob", "Blob() constructor")}} может создавать объекты blob из других объектов. Например, чтобы сконструировать blob из строки JSON:

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

> **Предупреждение:** До того как конструктор Blob стал доступен, это могло быть выполнено через устаревший API {{domxref("BlobBuilder")}}:
>
> ```js
> var builder = new BlobBuilder();
> var fileParts = ['<a id="a"><b id="b">hey!</b></a>'];
> builder.append(fileParts[0]);
> var myBlob = builder.getBlob("text/xml");
> ```

### Создание URL для содержимого типизированного массива

Следующий код создаёт типизированный массив JavaScript и создаёт новый `Blob`, содержащий данные типизированного массива. Затем вызывается {{DOMxRef("URL.createObjectURL()")}} для преобразования blob в {{glossary("URL")}}.

#### HTML

```html
<p>
  This example creates a typed array containing the ASCII codes for the space
  character through the letter Z, then converts it to an object URL. A link to
  open that object URL is created. Click the link to see the decoded object URL.
</p>
```

#### JavaScript

Основной частью этого кода для примера является функция `typedArrayToURL()`, которая создаёт `Blob` из переданного типизированного массива и возвращает объект URL для него. Преобразовав данные в URL объекта, их можно использовать несколькими способами, в том числе, в качестве значения атрибута [`src`](/ru/docs/Web/HTML/Element/img#src) элементов {{HTMLElement("img")}} (конечно, при условии, что данные содержат изображение).

```js
function typedArrayToURL(typedArray, mimeType) {
  return URL.createObjectURL(new Blob([typedArray.buffer], { type: mimeType }));
}

const bytes = new Uint8Array(59);

for (let i = 0; i < 59; i++) {
  bytes[i] = 32 + i;
}

const url = typedArrayToURL(bytes, "text/plain");

const link = document.createElement("a");
link.href = url;
link.innerText = "Open the array URL";

document.body.appendChild(link);
```

### Другой пример

```js
var typedArray = GetTheTypedArraySomehow();
var blob = new Blob([typedArray], { type: "application/octet-binary" }); // pass a useful mime type here
var url = URL.createObjectURL(blob);
// url will be something like: blob:d3958f5c-0777-0845-9dcf-2cb28783acaf
// now you can use the url in any context that regular URLs can be used in, for example img.src, etc.
```

### Извлечение данных из Blob

Один из способов прочесть содержимое `Blob` – это использовать {{domxref("FileReader")}}. Следующий код читает содержимое `Blob` как типизированный массив.

```js
var reader = new FileReader();
reader.addEventListener("loadend", function () {
  // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);
```

Другой способ прочитать содержимое из `Blob` – это использовать {{domxref("Response")}}. Следующий код читает содержимое `Blob` как текст:

```js
const text = await new Response(blob).text();
```

Или можно использовать {{DOMxRef("Blob.text()")}}:

```js
const text = await blob.text();
```

Используя другие методы {{domxref("FileReader")}}, возможно прочесть содержимое объекта Blob как строку или как URL.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("BlobBuilder")}}
- {{DOMxRef("FileReader")}}
- {{domxref("File")}}
- {{domxref("URL.createObjectURL")}}
- [Components.utils.importGlobalProperties](/ru/docs/Components.utils.importGlobalProperties)
- [Использование файлов в веб-приложениях](/ru/docs/Web/API/File/Using_files_from_web_applications)
