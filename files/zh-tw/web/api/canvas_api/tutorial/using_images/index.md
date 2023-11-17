---
title: 使用影像
slug: Web/API/Canvas_API/Tutorial/Using_images
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_text", "Web/API/Canvas_API/Tutorial/Transformations" )}}

使用影像是{{HTMLElement("canvas")}}另一個有趣的功能，這個功能可以用來動態組合圖片或作為背景等等。任何瀏覽器支援的外部圖片格式都可以使用，例如 PNG, GIF, 或 JPEG，甚至也可以利用同一份頁面上其他畫布元素產生的影像.

載入影像到畫布中基本上需要兩個步驟：

1. 取得{{domxref("HTMLImageElement")}}物件或其他畫布元素的參照(reference)作為來源，透過單純提供 URL 或圖片位置的方式是行不通的.
2. 用 drawImage()函數在畫布上畫影像.

接下來便來看看要怎麼做.

## 取得影像

畫布 API 能接受以下資料型態作為影像來源:

- {{domxref("HTMLImageElement")}}
  - : 用 Image()建構成的影像或是{{HTMLElement("img")}}元素.
- {{domxref("HTMLVideoElement")}}
  - : 用{{domxref("HTMLVideoElement")}}元素作影像來源，抓取影片目前的影像畫格當作影像使用.
- {{domxref("HTMLCanvasElement")}}
  - : 用另一個{{domxref("HTMLCanvasElement")}}元素當影像來源.
- {{domxref("ImageBitmap")}}
  - : 可以被快速渲染的點陣圖(bitmap)，點陣圖能由上述所有來源產生.

這些來源統一參照 [CanvasImageSource](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#image-sources-for-2d-rendering-contexts)型態.

有好幾種方法能夠取得影像用於畫布.

### 使用同一份網頁上的影像

我們能透過下面幾個方法取得影像:

- 從{{domxref("document.images")}}
- {{domxref("document.getElementsByTagName()")}}方法
- 如果知道特定影像的 ID，那可以{{domxref("document.getElementById()")}}方法

### 使用來自其他網域的影像

Using the [`crossOrigin`](/zh-TW/docs/HTML/CORS_settings_attributes) attribute on an 透過{{HTMLElement("HTMLImageElement")}}的[`crossOrigin`](/zh-TW/docs/HTML/CORS_settings_attributes)屬性, 我們可以要求從另一個網域載入影像來使用，若是寄存網域(thehosting domain)准許跨網路存取該影像，那麼我們便可以使用它而不用污染(taint)我們的畫布，反之，使用該影像會污染畫布([taint the canvas](/zh-TW/docs/HTML/CORS_Enabled_Image#What_is_a_.22tainted.22_canvas.3F))。

### 使用其他畫布元素

如同取得其他影像，我們一樣能用{{domxref("document.getElementsByTagName()")}}或{{domxref("document.getElementById()")}}方法取得其他畫布元素，但是在使用之前請記得來源畫布上已經有繪上圖了。

使用其他畫布元素作為影像來源有很多有用的應用用途，其中之一便是建立第二個小畫布作為另一個大畫布的縮小影像.

### 創造全新的影像

產生新的{{domxref("HTMLImageElement")}}物件也能當作影像來源，這邊，我們可以用 Image()來建構一個新影像元素:

```js
var img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
```

上述程式碼執行後會載入影像.

在影像載入完成前呼叫 drawImage()不會有任何效果，甚至某些瀏覽器還會拋出例外狀況，所以應該要透過利用載入事件來避免這類問題:

```js
var img = new Image(); // Create new img element
img.addEventListener(
  "load",
  function () {
    // execute drawImage statements here
  },
  false,
);
img.src = "myImage.png"; // Set source path
```

若是只要載入一份影像，可以用上面的方法，不過當需要載入、追蹤多個影像時，我們就需要更好的方法了，雖然管理多個影像載入已經超出本教學的範疇，然而如果有興趣的話，可以參考[JavaScript Image Preloader](http://www.webreference.com/programming/javascript/gr/column3/)這份文件.

### 以 data:URL 嵌入影像

另一個載入影像的方法是利用[data: url](/zh-TW/docs/data_URIs)，透過 data URL 可以直接將影像定義成 Base64 編碼的字串，然後嵌入程式碼之中.

```js
var img_src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
```

data URL 的好處之一是立即產生影像而不用再和伺服器連線，另一個好處是這樣便能夠將影像包入你的[CSS](/zh-TW/docs/Web/CSS), [JavaScript](/zh-TW/docs/Web/JavaScript), [HTML](/zh-TW/docs/Web/HTML)之中，讓影像更具可攜性.

壞處則是影像將不會被快取起來，而且對大影像來說編碼後的 URL 會很長.

### Using frames from a video

我們還能夠使用{{HTMLElement("video")}}元素中的影片的影片畫格(縱使影片為隱藏)，例如，現在我們有一個 ID 為「myvideo」 的{{HTMLElement("video")}}元素:

```js
function getMyVideo() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    return document.getElementById("myvideo");
  }
}
```

上面的方法會回傳一個{{domxref("HTMLVideoElement")}}的影像物件，如前所述，這個物件可以被視為 CanvasImageSource 類別的物件來使用。
關於如何利用\<video>元素於畫布上的進階說明，可以參考 html5Doctor 的「[video + canvas = magic](http://html5doctor.com/video-canvas-magic/)」一文.

## 影像繪圖

一旦我們取得來源影像物件的參照(reference)，便可以用 drawImage()方法將影像渲染到畫布上，drawImage()方法是一個多載(overload)方法，有數個型態，待會我們會看到這項特性，現在我們先來看 drawImage()最基本的型態:

- `drawImage(image, x, y)`
  - : 從座標點(x, y)開始畫上 image 參數指定的來源影像(CanvasImageSource).

### 範例: 一條簡單的線段影像

這個範例會使用外部影像作為一個小型線圖的背景。利用預先劃好的圖作為背景的話就不用再靠程式來產生背景，如此一來可以顯著地減少程式碼。下面藉由影像物件的 load 事件處理器來處理繪圖作業，其中 drawImage()方法把背景圖片放置在畫布左上角，座標點(0, 0)位置.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="180" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
  };
  img.src = "backdrop.png";
}
```

結果如下:

{{EmbedLiveSample("範例: 一條簡單的線段影像", 220, 160, "canvas_backdrop.png")}}

## 縮放

drawImage()的第二個型態增加了兩個新參數，讓我們在畫布上放置影像的同時並縮放影像.

- `drawImage(image, x, y, width, height)`
  - : 當放置影像於畫布上時，會按照參數 width(寬)、height(高)來縮放影像.

### 範例: 排列影像

本例我們會取一張影像作為桌布，然後透過簡單的迴圈來重複縮放、貼上影像於畫布上。在程式碼中，第一個迴圈走一遍每一列，第二個迴圈走一遍每一行，影像則縮小成原始影像的三分之一，50 x 38 像素.

> **備註：** 過度縮放影像可能會造成影像模糊或產生顆粒感，所以如果影像中有文字需要閱讀，最好不要縮放影像.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var img = new Image();
  img.onload = function () {
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.drawImage(img, j * 50, i * 38, 50, 38);
      }
    }
  };
  img.src = "rhino.jpg";
}
```

結果如下:

{{EmbedLiveSample("範例: 排列影像", 160, 160, "canvas_scale_image.png")}}

## 切割影像

drawImage()第三個型態接受 9 個參數，其中 8 個讓我們從原始影像中切出一部分影像、縮放並畫到畫布上.

- `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`
  - : image 參數是來源影像物件，(sx, sy)代表在來源影像中以(sx, sy)座標點作為切割的起始點，sWidth 和 sHeight 代表切割寬和高，(dx, dy)代表放到畫布上的座標點，dWidth 和 dHeight 代表縮放影像至指定的寬和高.

![](canvas_drawimage.jpg)請參照右圖，前四個參數定義了在來源影像上切割的起始點和切割大小，後四個參數定義了畫到畫布上的位置和影像大小.

切割是一個很有用的工具，我們可以把所有影像放到一張影像上，然後利用切割來組成最終完整的影像，比如說，我們可以把所有需要用來組成一張圖表的文字放到一張 PNG 圖檔內，之後只需要單純地再依據資料來縮放圖表，另外，我們也不用多次載入多張影像，這樣對提升載入影像效能頗有幫助.

### 範例: 畫一個有畫框的影像

本例用和前一個範例一樣的犀牛圖，然後切出犀牛頭部影像部分再放入一個影像畫框，這個影像畫框是一個有陰影的 24 位元 PNG 圖檔，因為 24 位元 PNG 影像具備完整的 8 位元不透明色版(alpha channel)，所以不像 GIF 影像和 8 位元 PNG 影像，它能夠放任何背景之上而無須擔心產生消光色(matte color).

```html
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
    <div style="display:none;">
      <img id="source" src="rhino.jpg" width="300" height="227" />
      <img id="frame" src="canvas_picture_frame.png" width="132" height="150" />
    </div>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  // Draw slice
  ctx.drawImage(
    document.getElementById("source"),
    33,
    71,
    104,
    124,
    21,
    20,
    87,
    104,
  );

  // Draw frame
  ctx.drawImage(document.getElementById("frame"), 0, 0);
}
```

這次我們不產生新的{{domxref("HTMLImageElement")}}物件，改採用直接把影像包入 HTML 的{{HTMLElement("img")}}標籤，然後再取得影像元素，其中 HTML 上的影像已經透過設定 CSS 屬性{{cssxref("display")}}為 none 來隱藏起來了.

{{EmbedLiveSample("範例: 畫一個有畫框的影像", 160, 160, "canvas_drawimage2.jpg")}}

程式碼相當簡單，每個{{HTMLElement("img")}}有自己的 ID 屬性，這樣便可以利用{{domxref("document.getElementById()")}}輕易取得，之後再簡單地用 drawImage()方法切割犀牛影像然後縮放並放到畫布上，最後第二個 drawImage()再把畫框放到上面.

## 畫廊範例

在本章的最後一個範例，我們將建造一個小畫廊。當網頁載入完成時，我們會為每一張影像產生一個{{HTMLElement("canvas")}}元素，並且加上畫框.

本範例中，每一張影像的寬高是固定的，畫框也是一樣，你可以嘗試看看改進程式碼，依據影像的寬高來設定畫框，使畫框能剛剛好框住影像.

從下方的程式碼範例可以很清楚看到，我們為{{domxref("document.images")}}容器內的影像，一張一張地新建畫布，其中，對於不熟悉文件物件模型 (DOM)的人來說，大慨比較值得注意之處在於使用到{{domxref("Node.insertBefore")}} 方法；insertBefore()是影像元素的父節點(亦即\<td>元素)的一個方法，這個方法會把新畫布元素插入於影像元素之前.

```html
<html>
  <body onload="draw();">
    <table>
      <tr>
        <td><img src="gallery_1.jpg" /></td>
        <td><img src="gallery_2.jpg" /></td>
        <td><img src="gallery_3.jpg" /></td>
        <td><img src="gallery_4.jpg" /></td>
      </tr>
      <tr>
        <td><img src="gallery_5.jpg" /></td>
        <td><img src="gallery_6.jpg" /></td>
        <td><img src="gallery_7.jpg" /></td>
        <td><img src="gallery_8.jpg" /></td>
      </tr>
    </table>
    <img id="frame" src="canvas_picture_frame.png" width="132" height="150" />
  </body>
</html>
```

這些是一些設定樣式的 CSS:

```css
body {
  background: 0 -100px repeat-x url(bg_gallery.png) #4f191a;
  margin: 10px;
}

img {
  display: none;
}

table {
  margin: 0 auto;
}

td {
  padding: 15px;
}
```

綜合起來這就是建造出我們小畫廊的程式碼:

```js
function draw() {
  // Loop through all images
  for (var i = 0; i < document.images.length; i++) {
    // Don't add a canvas for the frame image
    if (document.images[i].getAttribute("id") != "frame") {
      // Create canvas element
      canvas = document.createElement("canvas");
      canvas.setAttribute("width", 132);
      canvas.setAttribute("height", 150);

      // Insert before the image
      document.images[i].parentNode.insertBefore(canvas, document.images[i]);

      ctx = canvas.getContext("2d");

      // Draw image to canvas
      ctx.drawImage(document.images[i], 15, 20);

      // Add frame
      ctx.drawImage(document.getElementById("frame"), 0, 0);
    }
  }
}
```

{{EmbedLiveSample("畫廊範例", 725, 400)}}

## 控制影像縮放行為

如前所述，縮放影像會導致影像模糊化或是顆粒化，你可以嘗試透過繪圖環境的 imageSmoothingEnabled 屬性來控制影像平滑演算法的使用，預設上這個屬性的值為 true，也就是說當縮放時，影像會經過平滑處理。如果要關掉這個功能，你可以這麼做:

```js
ctx.mozImageSmoothingEnabled = false;
```

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Drawing_shapes", "Web/Guide/HTML/Canvas_tutorial/Applying_styles_and_colors")}}
