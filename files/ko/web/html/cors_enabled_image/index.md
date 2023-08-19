---
title: 교차 출처 이미지와 캔버스 허용하기
slug: Web/HTML/CORS_enabled_image
---

HTML은 이미지 처리를 위해 {{Glossary("CORS")}} header를 포함하고 있는 [`crossorigin`](/ko/docs/Web/HTML/Element/img#crossorigin) 속성을 제공합니다. 이는 {{ HTMLElement("img") }} 요소에서 정의된, 외부 origin으로 부터 가져오는 이미지가 {{HTMLElement("canvas")}}에서 사용할 수 있도록 해줍니다. 마치 현재 origin에서 가져온 것처럼 말입니다

`crossorigin` 속성이 어떻게 사용되는지 자세히 알고 싶다면, [CORS settings attributes](/ko/docs/Web/HTML/CORS_settings_attributes) 를 참고하세요.

## 보안과 오염된 canvas들

다른 호스트들에 있는 이미지나 비디오를 포함한 canvas 비트맵의 픽셀들은 다양한 출처로 부터 가져오기 때문에, 보안과 관련된 문제를 피할 수 없습니다.

CORS를 통하지 않고, 다른 origin으로 부터 가져온 데이터들은 canvas에 그려지는 즉시 canvas는 **오염**됩니다. 오염된 canvas는 더 이상 안전하지 않은 것으로 여겨지고, canvas 이미지에서 데이터를 가져오려는 어떤 시도든 exception이 발생합니다.

만약 외부 출처 콘텐츠가 HTML {{HTMLElement("img")}} 또는 SVG {{SVGElement("svg")}} 요소라면, canvas의 콘텐츠를 가져오려는 시도는 허용되지 않습니다.

만약 외부 출처 콘텐츠가 {{domxref("HTMLCanvasElement")}} 또는 {{domxref("ImageBitMap")}} 로부터 오는 이미지이고, 이미지의 source가 동일 출처 원칙과 맞지 않는다면 canvas의 콘텐츠를 읽으려는 시도는 막힙니다.

Calling any of the following on a tainted canvas will result in an error:

- Calling {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} on the canvas's context
- Calling {{domxref("HTMLCanvasElement.toBlob", "toBlob()")}} on the {{HTMLElement("canvas")}} element itself
- Calling {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} on the canvas

Attempting any of these when the canvas is tainted will cause a `SecurityError` to be thrown. This protects users from having private data exposed by using images to pull information from remote web sites without permission.

## Storing an image from a foreign origin

In this example, we wish to permit images from a foreign origin to be retrieved and saved to local storage. Implementing this requires configuring the server as well as writing code for the web site itself.

### Web server configuration

The first thing we need is a server that's configured to host images with the {{HTTPHeader("Access-Control-Allow-Origin")}} header configured to permit cross-origin access to image files.

Let's assume we're serving our site using [Apache](https://httpd.apache.org/). Consider the HTML5 Boilerplate [Apache server configuration file for CORS images](https://github.com/h5bp/server-configs-apache/blob/master/src/cross-origin/images.conf), shown below:

```xml
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(bmp|cur|gif|ico|jpe?g|png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

In short, this configures the server to allow graphic files (those with the extensions ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz", and ".webp") to be accessed cross-origin from anywhere on the internet.

### Implementing the save feature

Now that the server has been configured to allow retrieval of the images cross-origin, we can write the code that allows the user to save them to local [local storage](/ko/docs/Web/API/Web_Storage_API), just as if they were being served from the same domain the code is running on.

The key is to use the [`crossorigin`](/ko/docs/Web/HTML/Global_attributes#crossorigin) attribute by setting {{domxref("HTMLImageElement.crossOrigin", "crossOrigin")}} on the {{domxref("HTMLImageElement")}} into which the image will be loaded. This tells the browser to request cross-origin access when trying to download the image data.

#### Starting the download

The code that starts the download (say, when the user clicks a "Download" button), looks like this:

```js
function startDownload() {
  let imageURL =
    "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.src = imageURL;
}
```

We're using a hard-coded URL here (`imageURL`), but that could easily come from anywhere. To begin downloading the image, we create a new {{domxref("HTMLImageElement")}} object by using the {{domxref("HTMLImageElement.Image", "Image()")}} constructor. The image is then configured to allow cross-origin downloading by setting its `crossOrigin` attribute to `"Anonymous"` (that is, allow non-authenticated downloading of the image cross-origin). An event listener is added for the {{event("load")}} event being fired on the image element, which means the image data has been received.

Finally, the image's {{domxref("HTMLImageElement.src", "src")}} attribute is set to the URL of the image to download; this triggers the download to begin.

#### Receiving and saving the image

The code that handles the newly-downloaded image is found in the `imageReceived()` method:

```js
function imageReceived() {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.log("Error: " + err);
  }
}
```

`imageReceived()` is called to handle the `"load"` event on the `HTMLImageElement` that receives the downloaded image. This event is triggered once the downloaded data is all available. It begins by creating a new {{HTMLElement("canvas")}} element that we'll use to convert the image into a data URL, and by getting access to the canvas's 2D drawing context ({{domxref("CanvasRenderingContext2D")}}) in the variable `context`.

The canvas's size is adjusted to match the received image, then the image is drawn into the canvas using {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}. The canvas is then inserted into the document so the image is visible.

Now it's time to actually save the image locally. To do this, we use the Web Storage API's local storage mechanism, which is accessed through the {{domxref("Window.localStorage", "localStorage")}} global. The canvas method {{domxref("HTMLCanvasElement.toDataURL", "toDataURL()")}} is used to convert the image into a data:// URL representing a PNG image, which is then saved into local storage using {{domxref("Storage.setItem", "setItem()")}}.

You can [try out](https://cors-image-example.glitch.me/) or [remix](https://glitch.com/edit/#!/remix/cors-image-example) this example on Glitch.

## See also

- [Using Cross-domain images in WebGL and Chrome 13](http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML Specification - the `crossorigin` attribute](http://whatwg.org/html#attr-img-crossorigin)
- [Web Storage API](/ko/docs/Web/API/Web_Storage_API)

{{QuickLinksWithSubpages("/ko/docs/Web/HTML/")}}
