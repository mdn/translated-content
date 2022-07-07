---
title: HTMLCanvasElement.toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
tags:
  - API
  - Canvas
  - HTMLCanvasElement
  - Method
  - Reference
translation_of: Web/API/HTMLCanvasElement/toBlob
---
{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toBlob()`** 方法创造 {{domxref("Blob")}} 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地（由用户代理自行决定）。

可以在调用时指定所需的文件格式和图像质量，若未指定文件格式（或不支持指定的文件格式），则默认导出 `image/png` 类型。浏览器需要支持 `image/png`，大多数浏览器还支持额外的图片格式，包括 `image/jpg` 和 `image/webp`。

对于支持以指定分辨率编码的图片格式，如不特别指明，图片的默认分辨率为 96dpi。

## 语法

```js
toBlob(callback, type, quality)
```

### 参数

- `callback`
  - : 回调函数，可获得一个单独的 {{domxref("Blob")}} 对象参数。如果图像未被成功创建，可能会获得 `null` 值。
- `type` {{optional_inline}}
  - : {{domxref("DOMString")}} 类型，指定图片格式，默认格式（未指定或不支持）为 `image/png`。
- `quality` {{optional_inline}}
  - : {{jsxref("Number")}} 类型，值在 0 与 1 之间，当请求图片格式为 `image/jpeg` 或者 `image/webp` 时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。

### 返回值

无。

### 异常

- `SecurityError`
  - : canvas“[被污染](/zh-CN/docs/Web/HTML/CORS_enabled_image)”的情况下不能使用此方法。

## 示例

### 将 canvas 图像转换为文件

当一个内容画到 canvas 上时，我们可以将它生成任何一个格式支持的图片文件。比如，下面的代码段获得了 id 为“canvas”的 {{HTMLElement("canvas")}} 元素中的图像，复制成一个 PNG 图，在文档中加入一个新的 {{HTMLElement("img")}} 元素，这个 {{HTMLElement("img")}} 元素的源图就是使用 canvas 创建的那个图像。

```js
var canvas = document.getElementById("canvas");

canvas.toBlob(function(blob) {
  var newImg = document.createElement("img"),
      url = URL.createObjectURL(blob);

  newImg.onload = function() {
    // no longer need to read the blob so it's revoked
    URL.revokeObjectURL(url);
  };

  newImg.src = url;
  document.body.appendChild(newImg);
});
```

注意，我们这里创建的是 PNG 图片；如果在 `toBlob()` 传入第二个参数，就可以指定图片格式。例如，生成 JPEG 格式的图片：

```js
canvas.toBlob(function(blob){...}, "image/jpeg", 0.95); // JPEG at 95% quality
```

### 将 canvas 转换为 ico（仅限 Mozilla）

使用 `-moz-parse` 来将 canvas 转换为 ico。Windows XP 不支持将 PNG 转为 ico，因此转为 bmp 作为代替。设置下载属性，生成下载链接。下载属性的值将被用来作为文件名。

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
  return function(b) {
    var a = document.createElement("a");
    a.textContent = "Download";
    document.body.appendChild(a);
    a.style.display = "block";
    a.download = iconName + ".ico";
    a.href = window.URL.createObjectURL(b);
  }
}
canvas.toBlob(blobCallback('passThisString'), 'image/vnd.microsoft.icon',
              '-moz-parse-options:format=bmp;bpp=32');
```

### 使用 OS.File 保存图像到本地（chrome/add-on context only）

> **备注：** 此方法可将 toBlob 生成的图片保存到本地，但仅在 Firefox、 Chrome 上下文或带有相关插件的情况下可用，因为 Web 并不存在 OS API。

```js
const canvas = document.getElementById('canvas');
const d = canvas.width;
ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();

function blobCallback(iconName) {
  return function(b) {
    const r = new FileReader();
    r.onloadend = function () {
    // r.result contains the ArrayBuffer.
    Cu.import('resource://gre/modules/osfile.jsm');
    const writePath = OS.Path.join(OS.Constants.Path.desktopDir,
                                 iconName + '.ico');
    const promise = OS.File.writeAtomic(writePath, new Uint8Array(r.result),
                                      {tmpPath:writePath + '.tmp'});
    promise.then(
      function() {
        console.log('successfully wrote file');
      },
      function() {
        console.log('failure writing file')
      }
    );
  };
  r.readAsArrayBuffer(b);
  }
}

canvas.toBlob(blobCallback('passThisString'), 'image/vnd.microsoft.icon',
              '-moz-parse-options:format=bmp;bpp=32');
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Blob")}}
