---
title: HTMLCanvasElement.toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
---

{{APIRef("Canvas API")}}

Метод **`HTMLCanvasElement.toBlob()`** создаёт объект {{domxref("Blob")}} представляющий изображение, содержащееся в `canvas`; этот файл может быть закеширован на диске или храниться в памяти на усмотрение пользователя (_at the discretion of the user agent_). Если параметр `mimeType` не определён, типом изображения считается `image/png`. Созданное изображение имеет разрешение 96dpi.

Третий аргумент используется для изображений с MIME-типом `image/jpeg` для определения его качества.

## Синтаксис

```
void canvas.toBlob(callback, mimeType, qualityArgument);
```

### Параметры

- callback
  - : Callback-функция с результирующим объектом {{domxref("Blob")}} в качестве единственного аргумента.
- `mimeType` {{optional_inline}}
  - : Аргумент типа {{domxref("DOMString")}} определяющий формат изображения. По умолчанию `image/png`.
- `qualityArgument` {{optional_inline}}
  - : Аргумент типа {{jsxref("Number")}} со значением от `0` до `1`, определяющий качество изображения, если заявлен MIME-тип `image/jpeg` или `image/webp`. Если этот аргумент содержит нечто иное, для определения качества изображения будет использовано значение по умолчанию. Остальные аргументы проигнорируются.

### Возвращаемое значение

Не возвращает ничего.

## Примеры

### Получение файла, представленного в canvas

Как только вы нарисовали содержимое в `canvas`, вы можете сконвертировать его в файл изображения любого поддерживаемого формата. Ниже приведён фрагмент кода, для примера, принимает изображение в элементе {{HTMLElement("canvas")}} с ID = "canvas" и получает его копию в виде PNG изображения, затем добавляет в документ новый элемент {{HTMLElement("img")}}, исходное изображение которого создано с помощью холста.

```js
var canvas = document.getElementById("canvas");

canvas.toBlob(function (blob) {
  var newImg = document.createElement("img"),
    url = URL.createObjectURL(blob);

  newImg.onload = function () {
    // больше не нужно читать blob, поэтому он отменён
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

Обратите внимание, что здесь мы создаём изображение PNG; если вы добавите второй параметр в вызов `toBlob()`, вы сможете определить тип необходимого изображения. Например, чтобы получить изображение в формате JPEG:

```js
 canvas.toBlob(function(blob){...}, 'image/jpeg', 0.95); // JPEG в 95% качестве
```

### A way to convert a canvas to an ico (Mozilla only)

Это использует `-moz-parse` для преобразования cnavas в ICO. Windows XP не поддерживает преобразование из PNG в ico, поэтому вместо этого использует bmp. Ссылка для загрузки создаётся путём установки атрибута загрузки. Значение атрибута загрузки - это имя, которое он будет использовать в качестве имени файла.

```js
var canvas = document.getElementById("canvas");
var d = canvas.width;
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function blobCallback(iconName) {
  return function (b) {
    var a = document.createElement("a");
    a.textContent = "Download";
    document.body.appendChild(a);
    a.style.display = "block";
    a.download = iconName + ".ico";
    a.href = window.URL.createObjectURL(b);
  };
}
canvas.toBlob(
  blobCallback("passThisString"),
  "image/vnd.microsoft.icon",
  "-moz-parse-options:format=bmp;bpp=32",
);
```

### Сохранение toBlob на диске ОС(chrome/add-on context only)

> **Примечание:** Этот метод сохраняет его на рабочем столе и полезен только в контексте Firefox chrome или дополнительном коде, поскольку API ОС не присутствуют на веб-сайтах.

```js
var canvas = document.getElementById("canvas");
var d = canvas.width;
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();

function blobCallback(iconName) {
  return function (b) {
    var r = new FileReader();
    r.onloadend = function () {
      // r.result contains the ArrayBuffer.
      Cu.import("resource://gre/modules/osfile.jsm");
      var writePath = OS.Path.join(
        OS.Constants.Path.desktopDir,
        iconName + ".ico",
      );
      var promise = OS.File.writeAtomic(writePath, new Uint8Array(r.result), {
        tmpPath: writePath + ".tmp",
      });
      promise.then(
        function () {
          console.log("successfully wrote file");
        },
        function () {
          console.log("failure writing file");
        },
      );
    };
    r.readAsArrayBuffer(b);
  };
}

canvas.toBlob(
  blobCallback("passThisString"),
  "image/vnd.microsoft.icon",
  "-moz-parse-options:format=bmp;bpp=32",
);
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Полифил

Полифил, основанный на toDataURL, со слабой производительностью.

```js
if (!HTMLCanvasElement.prototype.toBlob) {
  Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
    value: function (callback, type, quality) {
      var dataURL = this.toDataURL(type, quality).split(",")[1];
      setTimeout(function () {
        var binStr = atob(dataURL),
          len = binStr.length,
          arr = new Uint8Array(len);

        for (var i = 0; i < len; i++) {
          arr[i] = binStr.charCodeAt(i);
        }

        callback(new Blob([arr], { type: type || "image/png" }));
      });
    },
  });
}
```

## Смотрите также

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- {{domxref("Blob")}}
