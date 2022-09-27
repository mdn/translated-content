---
title: 启用了 CORS 的图片
slug: Web/HTML/CORS_enabled_image
---

HTML 规范中图片有一个 `{{ htmlattrxref("crossorigin", "img") }}` 属性，结合合适的 `{{Glossary("CORS")}}` 响应头，就可以实现在画布中使用跨域 `{{ HTMLElement("img") }}` 元素的图像，就像在原生 `{{ HTMLElement("canvas") }}` 中使用一样。

查看 [CORS settings attributes](/zh-CN/docs/Web/HTML/CORS_settings_attributes) 来了解更多 `crossorigin` 属性的用法。

## 安全性和“被污染”的 canvas

由于在 `{{HTMLElement("canvas")}}` 位图中的像素可能来自多种来源，包括从其他主机检索的图像或视频，因此不可避免的会出现安全问题。

尽管不通过 CORS 就可以在 `{{HTMLElement("canvas")}}` 中使用其他来源的图片，但是这会**污染**画布，并且不再认为是安全的画布，这将可能在 `{{HTMLElement("canvas")}}` 检索数据过程中引发异常。

如果从外部引入的 HTML `{{HTMLElement("img")}}` 或 SVG `{{SVGElement("svg")}}` ，并且图像源不符合规则，将会被阻止从 `{{HTMLElement("canvas")}}` 中读取数据。

在"被污染"的画布中调用以下方法将会抛出安全错误：

- 在 `{{HTMLElement("canvas")}}` 的上下文上调用`{{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}`
- 在 `{{HTMLElement("canvas")}}` 上调用 `{{domxref("HTMLCanvasElement.toBlob", "toBlob()")}}`
- 在 `{{HTMLElement("canvas")}}` 上调用 `{{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}}`

这种机制可以避免未经许可拉取远程网站信息而导致的用户隐私泄露。

## 示例：存储一张外部域中的图片

在以下例子中，将实现允许检索来自外部的图像，并将其保存在本地存储。要实现这一点，我们需要配置服务器以及网站本身的编码。

### 网站服务器配置

首先，你必须有一个可以对图片响应正确 `Access-Control-Allow-Origin` 响应头的服务器。你可以使用以下片段 (来自 [HTML5 Boilerplate Apache server configs](https://github.com/h5bp/server-configs-apache/blob/fc379c45f52a09dd41279dbf4e60ae281110a5b0/src/.htaccess#L36-L53)) 实现正确响应头，该配置为允许跨域访问图片。

```xml
<IfModule mod_setenvif.c>
    <IfModule mod_headers.c>
        <FilesMatch "\.(cur|gif|ico|jpe?g|png|svgz?|webp)$">
            SetEnvIf Origin ":" IS_CORS
            Header set Access-Control-Allow-Origin "*" env=IS_CORS
        </FilesMatch>
    </IfModule>
</IfModule>
```

现在已经将服务器配置为允许跨源检索这些不同格式的图像。

### 实现保存功能

配置完毕后，你就可以将这些格式的图片保存到本地 [DOM 存储](/zh-CN/docs/Web/Guide/API/DOM/Storage) 中了，就像这些图片在你自己域名之下一样。

在 `{{domxref("HTMLImageElement")}}` 上设置 `{{domxref("HTMLImageElement.crossOrigin", "crossOrigin")}}` 的 `{{htmlattrxref("crossorigin")}}` 属性，这将允许浏览器在下载图像数据时允许跨域访问请求。

#### 开始下载图片

以下代码将在用户点击 "`Download`" 按钮时开始下载：

```plain
function startDownload() {
  let imageURL = "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.src = imageURL;
}
```

使用 "硬编码" 图片网址可以很方便的允许图片来自任何地址。当开始下载图片时，我们使用 `{{domxref("HTMLImageElement.Image", "Image()")}}` 构造器创建新的 `{{domxref("HTMLImageElement")}}` 对象，将图片的 `crossOrigin` 属性设置为"`匿名`"（即，允许对未经过验证的图像进行跨域下载）。添加图片的 `{{event("load")}}`事件的监听来判断图片数据是否已接收。

最后，将图片的 `{{domxref("HTMLImageElement.src", "src")}}`属性设置为图片的 URL 以触发图片下载。

#### 接收和保存图片

在 `imageReceived()` 方法中来处理新下载的图片：

```plain
function imageReceived() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  }
  catch(err) {
    console.log("Error: " + err);
  }
}
```

在 `HTMLImageElement` 调用 `imageReceived()`来处理"`load`" 事件以接收下载图片。一旦下载完成全部有效的数据即可触发该事件。从创建新 `{{HTMLElement("canvas")}}` 元素将图像转换为数据 URL，到访问画布的变量 `context` 中的 2D 绘图上下文 `({{domxref("CanvasRenderingContext2D")}})`.

调整画布大小以匹配接收到的图像，然后使用 `{{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}` 将图像绘制到画布中。画布之后被插入到文档中显示。

我们使用 Web Storage API 的本地存储机制来将图片实际存储到本地，该机制可通过全局 `{{domxref("Window.localStorage", "localStorage")}}` 进行访问。`canvas` 的 `{{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}}` 方法用于将图像转换为 data:// URL 形式的 PNG 格式图片，之后使用 `{{domxref("Storage.setItem", "setItem()")}}` 存储到本地。

您可以在 Glitch 上[尝试](https://cors-image-example.glitch.me)或[重写](https://glitch.com/edit/#!/remix/cors-image-example)此例子。

## 另请参阅

- [在 Chrome 13 的 WebGL 中使用跨域图片](http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML 标准 - `crossorigin` 属性](http://whatwg.org/html#attr-img-crossorigin)
