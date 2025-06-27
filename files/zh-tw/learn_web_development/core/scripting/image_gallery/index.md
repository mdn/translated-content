---
title: 挑戰：影像圖庫
slug: Learn_web_development/Core/Scripting/Image_gallery
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}

現在我們已經看過了基本的 JavaScript 組建，我們將讓你做一個測試，從建立一個在很多網站上常見的事物 — JavaScript 基礎的影像圖庫，來測試你對迴圈、函數、條件式及事件的知識。

## 從這裡開始

要進行這個評量，你要先下載 [grab the ZIP](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/gallery/gallery-start.zip?raw=true) 檔案，解壓縮在你電腦中的某個檔案夾作為範例。

> [!NOTE]
> 你也可以在某些網站進行評鑑，如 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/)。你可以把這些 HTML、CSS 和 JavaScript 貼到這些線上編輯器中。如果你用了一個沒法把 JavaScript/CSS 分別放在不同面板的線上編輯器，你可以放心的把這些`<script>`/`<style>`元件改成 inline 貼進 HTML 網頁裡。

## 專案簡報

你手上已有我們提供的一些 HTML、CSS 和圖片資料，以及幾行 JavaScript 程式碼；你要寫一些必要的 JavaScript 讓它變成可運作的程式。這些 HTML 的 body 看起來如下：

```html
<h1>Image gallery example</h1>

<div class="full-img">
  <img class="displayed-img" src="images/pic1.jpg" />
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar"></div>
```

完成後看起來像下圖：

![](gallery.png)

範例 CSS 檔案中最有趣的部分是：

- 在 `full-img <div>` 裡有的三個組成元素使用絕對位置 — `<img>` 展示全尺寸圖片，在它正上方有個與它尺寸相同的空 `<div>` （用來放置用半透明的背景色彩讓圖片產生變暗效果的層），然後 `<button>` 用來控制變暗效果。
- 設定 `thumb-bar <div>` （一般叫做「縮圖」的圖片）裡的圖片讓它縮小成原來的 20%，之後讓它浮（float）在左邊讓縮圖能一個個相鄰的排成一列。

在你的 JavaScript 裡需要：

- 讓所有圖片迴圈（Loop） through all the images, 在 `thumb-bar <div>` 裡的每個 `<img>` 塞進一個 `<img>` ，讓圖片內嵌在頁面上。
- 在 `thumb-bar <div>` 裡的每個 `<img>` 添加一個 `onclick` 處理器使這個圖片被點擊時會放大展示在 `displayed-img <img>` 裡。
- 在 `<button>` 添加一個 `onclick` 處理器，當點擊時，全尺寸圖片產生暗化效果，再次點擊時移除暗化效果。

為了讓你更清楚，你可以看看這個 [完成的範例](https://mdn.github.io/learning-area/javascript/building-blocks/gallery/) （但別偷看原始碼！）

## 一步步完成

接下來幾節描述你該怎麼做。

### 讓所有圖片迴圈

我們已提供了幾行程式碼：將`thumb-bar`和 `<div>`儲存在 `thumbBar`這個變數裡、建立一個新的 `<img>` 元件、將它的 `src` 屬性設定在一個值為 `xxx` 的佔位符中，以及在 `thumbBar` 裡增加新 `<img>` 。

你要做的是：

1. Put the section of code below the "Looping through images" comment inside a loop that loops through all 5 images — you just need to loop through five numbers, one representing each image.
2. In each loop iteration, replace the `xxx` placeholder value with a string that will equal the path to the image in each case. We are setting the value of the `src` attribute to this value in each case. Bear in mind that in each case, the image is inside the images directory and its name is `pic1.jpg`, `pic2.jpg`, etc.

### 在每個縮圖上添加 onclick 事件處理器

In each loop iteration, you need to add an `onclick` handler to the current `newImage` — this should:

1. 在每個 `<img>` 中把`"src"`作為運行`getAttribute()` 函數的參數，取得現在這張圖片的 `src` 屬性的值。但是要怎麼抓到現在這張圖片？如果用`newImage` 是做不到的，當在添加事件處理器前，迴圈已經先完成了；所以你每次都獲得前一個 `<img>`的回傳的 `src` 值。解法是，記住，在每個事件中，事件處理器的目標是 `<img>` ，如何獲得事件物件的資訊呢？
2. Run a function, passing it the returned `src` value as a parameter. You can call this function whatever you like.
3. This event handler function should set the `src` attribute value of the `displayed-img <img>` to the `src` value passed in as a parameter. We've already provided you with a line that stores a reference to the relevant `<img>` in a variable called `displayedImg`. Note that we want a defined named function here.

### 寫一個讓暗化/亮化按鈕可以運作的處理器

That just leaves our darken/lighten `<button>` — we've already provided a line that stores a reference to the `<button>` in a variable called `btn`. You need to add an `onclick` handler that:

1. Checks the current class name set on the `<button>` — you can again achieve this by using `getAttribute()`.
2. If the class name is `"dark"`, changes the `<button>` class to `"light"` (using [`setAttribute()`](/zh-TW/docs/Web/API/Element/setAttribute)), its text content to "Lighten", and the {{cssxref("background-color")}} of the overlay `<div>` to `"rgba(0,0,0,0.5)"`.
3. If the class name not `"dark"`, changes the `<button>` class to `"dark"`, its text content back to "Darken", and the {{cssxref("background-color")}} of the overlay `<div>` to `"rgba(0,0,0,0)"`.

The following lines provide a basis for achieving the changes stipulated in points 2 and 3 above.

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## 提醒與提示

- 你完全不需要去編輯任何的 HTML 或 CSS。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Event_bubbling","Learn_web_development/Core/Scripting/Object_basics", "Learn_web_development/Core/Scripting")}}
