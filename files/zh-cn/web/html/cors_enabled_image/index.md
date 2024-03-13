---
title: 允许图片和 canvas 跨源使用
slug: Web/HTML/CORS_enabled_image
---

{{HTMLSidebar}}

HTML 规范为图片提供了 [`crossorigin`](/zh-CN/docs/Web/HTML/Element/img#crossorigin) 属性，结合合适的 {{Glossary("CORS")}} 响应标头，就可以实现在 {{HTMLElement("canvas")}} 中使用外部域加载的 {{ HTMLElement("img") }} 元素，就像在当前源加载一样。

查看 [CORS 设置属性](/zh-CN/docs/Web/HTML/Attributes/crossorigin)来了解更多 `crossorigin` 属性的用法。

## 安全性和“被污染”的 canvas

由于在 {{HTMLElement("canvas")}} 位图中的像素可能来自多种来源，包括从其他主机检索的图像或视频，因此不可避免的会出现安全问题。

尽管不通过 CORS 就可以在 canvas 中使用其他来源的图片，但是这会**污染**画布，并且不再认为是安全的画布，这将可能在 canvas 检索数据过程中引发异常。

如果外部源的内容是 HTML {{HTMLElement("img")}} 或 SVG {{SVGElement("svg")}} 元素，会阻止从 canvas 中读取数据。

如果外部源图片是作为 {{domxref("HTMLCanvasElement")}} 或 {{domxref("ImageBitMap")}} 获取的，且图片源不符合同源准则，会阻止读取 canvas 的内容。

在"被污染"的 canvas 中调用以下方法将会抛出安全错误：

- 在 canvas 的上下文上调用 {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}
- 在 {{HTMLElement("canvas")}} 元素本身调用 {{domxref("HTMLCanvasElement.toBlob", "toBlob()")}}、{{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} 或 {{domxref("HTMLCanvasElement.captureStream", "captureStream()")}}

尝试以上行为会导致抛出 `SecurityError` 异常。这种机制可以避免未经许可拉取远程网站信息而导致的用户隐私泄露。

## 存储一张外部来源中的图片

在以下例子中，将实现允许检索来自外部的图像，并将其保存在本地存储。要实现这一点，我们需要配置服务器以及网站本身的编码。

### 网站服务器配置

首先，你必须有一个可以对图片正确响应 {{HTTPHeader("Access-Control-Allow-Origin")}} 标头，以允许跨源访问的服务器。

我们假设服务器正在使用 [Apache](https://httpd.apache.org/)。你可以参考以下 HTML5 样板[为跨源图片准备的 Apache 服务器配置](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf)：

```xml
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(avifs?|bmp|cur|gif|ico|jpe?g|jxl|a?png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

简单来说，该配置允许服务器的图形文件（那些扩展名为 ".bmp"、".cur"、".gif"、".ico"、".jpg"、".jpeg"、".png"、".svg"、".svgz" 和 ".webp" 的文件）从互联网上的任何位置跨源访问。

### 实现保存功能

以上配置完毕后，服务器就可以跨源获取图片了。现在我们可以开始编写将图片保存在[本地存储](/zh-CN/docs/Web/API/Web_Storage_API)中的代码了，就像这些图片在你自己域名之下一样。

关键在于在 {{domxref("HTMLImageElement")}} 上设置 {{domxref("HTMLImageElement.crossOrigin", "crossOrigin")}} 的 [`crossorigin`](/zh-CN/docs/Web/HTML/Global_attributes#crossorigin) 属性，这引导浏览器在下载图像数据时使用跨源访问。

#### 开始下载图片

以下代码会（例如，在用户点击“下载”按钮时）开始下载：

```js
function startDownload() {
  let imageURL =
    "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";
  let imageDescription = "The Mozilla logo";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.alt = imageDescription;
  downloadedImg.src = imageURL;
}
```

在这里，我们使用了“硬编码”的图片网址（`imageURL`）和相关描述文字（`imageDescription`），当然这些可以很方便地从任何地方获取。当开始下载图片时，我们使用 {{domxref("HTMLImageElement.Image", "Image()")}} 构造器创建新的 {{domxref("HTMLImageElement")}} 对象，将图片的 `crossOrigin` 属性设置为 `"Anonymous"`（即允许对未经过验证的图像进行跨源下载）。为图片添加 {{domxref("Window/load_event", "load")}} 事件的监听来判断图片数据是否已接收。我们为图片添加了替代性文字，当 `<canvas>` 不支持 `alt` 属性时，该值可以用于设置 `aria-label` 或 canvas 的内部内容。

最后，将图片的 {{domxref("HTMLImageElement.src", "src")}} 属性设置为图片的 URL 以触发图片下载。

#### 接收和保存图片

在 `imageReceived()` 方法中来处理新下载的图片：

```js
function imageReceived() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;
  canvas.innerText = downloadedImg.alt;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
```

在 `HTMLImageElement` 调用 `imageReceived()` 来处理 `"load"` 事件以接收下载图片。一旦下载完成全部有效的数据即可触发该事件。首先我们会创建用于转换图片到数据 URL 的 {{HTMLElement("canvas")}} 元素，然后在变量 `context` 中获取 canvas 的 2D 绘画上下文（{{domxref("CanvasRenderingContext2D")}}）。

调整画布大小以匹配接收到的图像，内部文字将设置为图片的描述，然后使用 {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} 将图像绘制到画布中。画布之后被插入到文档中显示。

现在是时候本地存储图片了。我们使用 Web Storage API 的本地存储机制来将图片实际存储到本地，该机制可通过全局 {{domxref("Window.localStorage", "localStorage")}} 进行访问。canvas 的 {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} 方法用于将图像转换为 data:// URL 形式的 PNG 格式图片，之后使用 {{domxref("Storage.setItem", "setItem()")}} 存储到本地。

## 参见

- [在 Chrome 13 的 WebGL 中使用跨源图片](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML 标准——`crossorigin` 属性](http://whatwg.org/html#attr-img-crossorigin)
- [Web 存储 API](/zh-CN/docs/Web/API/Web_Storage_API)
