---
title: HTMLCanvasElement.toBlob()
slug: Web/API/HTMLCanvasElement/toBlob
translation_of: Web/API/HTMLCanvasElement/toBlob
---
{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toBlob()`** 方法创造 {{domxref("Blob")}} 对象，用以展示 canvas 上的图片；这个图片文件可以被缓存或保存到本地，由用户代理端自行决定。如不特别指明，图片的类型默认为 image/png，分辨率为96dpi。

第三个参数用于针对 image/jpeg 格式的图片进行输出图片的质量设置。

## 语法

```js
canvas.toBlob(callback, type, encoderOptions);
```

### 参数

- `callback`
  - : 回调函数，可获得一个单独的 {{domxref("Blob")}} 对象参数。
- `type` {{optional_inline}}
   - : {{domxref("DOMString")}} 类型，指定图片格式，默认格式为 `image/png`。
- `encoderOptions` {{optional_inline}}
   - : {{jsxref("Number")}} 类型，值在 0 与 1 之间，当请求图片格式为 `image/jpeg` 或者 `image/webp` 时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。

### 返回值

无。

### 异常

- `SecurityError`
   - : canvas“[被污染](/zh-CN/docs/Web/HTML/CORS_enabled_image)”的情况下不能使用此方法

## 示例

### 将canvas图像转换为文件

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

注意，我们这里创建的是PNG图片；如果在 `toBlob()` 传入第二个参数，就可以指定图片格式。例如，生成JPEG格式的图片：

```js
canvas.toBlob(function(blob){...}, "image/jpeg", 0.95); // JPEG at 95% quality
```

### 将canvas转换为ico（仅限Mozilla）

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

### Save toBlob to disk with OS.File (chrome/add-on context only)

> **备注：** This technique saves it to the desktop and is only useful in Firefox chrome context or add-on code as OS APIs are not present on web sites.

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
    var r = new FileReader();
    r.onloadend = function () {
    // r.result contains the ArrayBuffer.
    Cu.import('resource://gre/modules/osfile.jsm');
    var writePath = OS.Path.join(OS.Constants.Path.desktopDir,
                                 iconName + '.ico');
    var promise = OS.File.writeAtomic(writePath, new Uint8Array(r.result),
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

## Polyfill

A low performance polyfill based on toDataURL.

```js
if (!HTMLCanvasElement.prototype.toBlob) {
 Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
  value: function (callback, type, quality) {

    var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
        len = binStr.length,
        arr = new Uint8Array(len);

    for (var i=0; i&lt;len; i++ ) {
     arr[i] = binStr.charCodeAt(i);
    }

    callback( new Blob( [arr], {type: type || 'image/png'} ) );
  }
 });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- {{domxref("Blob")}}
