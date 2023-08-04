---
title: CSS 轉場
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
---

{{CSSRef}}

原文 : [https://developer.mozilla.org/en/CSS/CSS_transitions](/zh-TW/CSS/CSS_transitions)

{{ SeeCompatTable() }}

CSS transitions 是 CSS3 specification 草案的一部分，他可以用來調整 CSS animation 變動的速度。舉例來說，倘若你設計了一個 element 會由白轉紅，你可以透過 CSS transitions 來控制轉變的時間及變化曲線。

> **備註：** CSS transitions specification 目前仍舊以草案形式存在，所以當你要在 Gecko 的系統中使用時，記得加上 "-moz-" 的前綴。此外，為了更好的相容，你還得加上 "-webkit-" 前綴 (給基於 Webkit 技術的瀏覽器)以及 "-o-" (Opera 使用)。舉例來說，你可能會寫出包含有 `-moz-transition`, `-webkit-transition 及` `-o-transition 的程式。`

## 可供調整的 CSS property 清單

CSS transitions 和 CSS animations 中可以用來修改的屬性在 [CSS animatable properties](http://oli.jp/2010/css-animatable-properties/) 可以看到。這裡頭同時包含了 SVG properties。

> **備註：** 這些列出 properties 可能都還會改變，所以請使用已經被支援的那些，以免造成無法預期的結果。

## CSS transition properties

我們可以透過 {{ cssxref("transition") }} property 來控制 CSS transitions。這可有效避免使用過長的參數來控制你的 transitions，這樣亦減少了 debug 的難度。

下列的 sub-properties 可以協助你控制轉場的性質：

- {{ cssxref("transition-property") }}
  - : 定義哪些 CSS properties 會被轉場效果影響。除了這些被你特別指出的 property 名單，其他的轉場一如以往的會在瞬間完成。
- {{ cssxref("transition-duration") }}
  - : 定義轉場所花費的時間。你可以只定義一個時間給所有 property 使用，也可以給定多組不同時間。
- {{ cssxref("transition-timing-function") }}
  - : 設定轉場時所依據的貝茲曲線。
- {{ cssxref("transition-delay") }}
  - : 定義多久之後開始發生轉場。

## 使用漸變函式 (transition timing function)

漸變函式可用來定義轉場發生的時間曲線。其規範方式是以四個參數的貝茲曲線代表。

[CSS transition function manipulator](http://cssglue.com/cubic) 是一個可以讓你非常容易以視覺化方式了解轉場流程的工具。

除了自行定義之外，尚有幾個已經預先定義好的函式：

- **ease**, 等同於 `cubic-bezier(0.25, 0.1, 0.25, 1.0)`
- **linear**, 等同於 `cubic-bezier(0.0, 0.0, 1.0, 1.0)`
- **ease-in**, 等同於 `cubic-bezier(0.42, 0, 1.0, 1.0)`
- **ease-out**, 等同於 `cubic-bezier(0, 0, 0.58, 1.0)`
- **ease-in-out**, 等同於 `cubic-bezier(0.42, 0, 0.58, 1.0)`

### 一個 transition timing effect 範例

我們在這直接用範例來說明。

在看程式碼之前，或許你會想先看看實際的執行效果。請挑個有支援 transitions 的瀏覽器，然後[看看這個](/samples/cssref/transitions/sample3) (而[這裡](/samples/cssref/transitions/sample3/transitions.css)有這個範例的相關 CSS 程式碼)。

首先，先以 HTML 創建這個範例的主要外殼：

```html
<ul>
  <li id="long1">Long, gradual transition...</li>
  <li id="fast1">Very fast transition...</li>
  <li id="delay1">Long transition with a 2-second delay...</li>
  <li id="easeout">Using ease-out timing...</li>
  <li id="linear">Using linear timing...</li>
  <li id="cubic1">Using cubic-bezier(0.2, 0.4, 0.7, 0.8)...</li>
</ul>
```

如你所見，每個 item 都有自己的 ID。剩下的部份交由 CSS 來處理。

#### 使用延遲機制

這個範例會在使用者滑鼠移過 element 後兩秒開始四秒的字體大小變化：

```css
#delay1 {
  position: relative;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  font-size: 14px;
}

#delay1:hover {
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
  font-size: 36px;
}
```

#### 使用線性轉場函式 (linear transition timing function)

如果你希望動畫的變動是以線性的速率，那你可以寫成：

```css
transition-timing-function: linear;
```

此外，還有許多不同的 timing functions 供你選擇，請見 {{ cssxref("transition-timing-function") }}。

#### 用貝茲曲線定義 timing function

你可以定義自己想要的 timing function，這要用貝茲曲線 (cubic bezier curve) 的形式定義之：

```css
transition-timing-function: cubic-bezier(0.2, 0.4, 0.7, 0.8);
```

上例中我們定義了一個以 (0.0, 0.0), (0.2, 0.4), (0.7, 0.8) 和 (1.0, 1.0) 描述的貝茲曲線。

## 偵測 transition 的完成

在設計上，當 transition 完成時會觸發一個 event。在 Firefox 中，他是 `transitionend ; 在` Opera 中，他是 `oTransitionEnd ; 而在` WebKit 中，他是 `webkitTransitionEnd。請注意相容性的問題(參閱本頁最下方)。`

`transitionend` event 提供了兩個 properties：

- `propertyName`
  - : 這指出哪個 CSS property 的 transition 已經完成。
- `elapsedTime`
  - : 指出 transition 花費了幾秒。注意，他不受 {{ cssxref("transition-delay") }} 影響。

在平常使用上，你可以使用 {{ domxref("element.addEventListener()") }} method 來監控：

```js
el.addEventListener("transitionend", updateTransition, true);
```

> **備註：** "transitionend" event 若 transition 在執行中被中斷(意指 transition 沒有真正完成)則不會觸發。

## 當 property value list 之間並不等長時 ... ?

如果某個 property 的 list 長度比其他短時，他將會被重複，直到等長。例如：

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

他會被瀏覽器解釋成：

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

可以預期地，倘若列出的 value 過多，他會被切斷。例如：

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

那麼他等同於：

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

## 使用 transitions 來強調選單中的選項

一個使用 CSS 的好時機是用來強調目前使用者滑鼠經過的選單位置。使用 transitions 可以使效果變得更吸引人。

在看實際的程式碼之前，你可以先看[實際的範例](/samples/cssref/transitions/sample2) (當然你的瀏覽器要能支援 transitions)。相關的 CSS 程式在[這裡](/samples/cssref/transitions/sample2/transitions.css)。

我們先用 HTML 構建外殼：

```html
<div class="sidebar">
  <p><a class="menuButton" href="home">Home</a></p>
  <p><a class="menuButton" href="about">About</a></p>
  <p><a class="menuButton" href="contact">Contact Us</a></p>
  <p><a class="menuButton" href="links">Links</a></p>
</div>
```

接著用 CSS 來產生特效：

```css
.menuButton {
  position: relative;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  -webkit-transition-property: background-color, color;
  -webkit-transition-duration: 1s;
  -o-transition-property: background-color, color;
  -o-transition-duration: 1s;
  text-align: left;
  background-color: grey;
  left: 5px;
  top: 5px;
  height: 26px;
  color: white;
  border-color: black;
  font-family: sans-serif;
  font-size: 20px;
  text-decoration: none;
  -moz-box-shadow: 2px 2px 1px black;
  padding: 2px 4px;
  border: solid 1px black;
}

.menuButton:hover {
  position: relative;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  -webkit-transition-property: background-color, color;
  -webkit-transition-duration: 1s;
  -o-transition-property: background-color, color;
  -o-transition-duration: 1s;
  background-color: white;
  color: black;
  -moz-box-shadow: 2px 2px 1px black;
}
```

這些 CSS 程式使滑鼠滑過時 (在該 element 的 {{ cssxref(":hover") }} state) 造成背景及文字顏色的改變。

## 使用 transitions 來使 JavaScript 運作的更順暢

Transition 是一種很好的工具，他可以幫助你的 JavaScript 執行結果看起來的更為順暢。舉例來說：

```html
<p>Click anywhere to move the ball</p>
<div id="foo"></div>
```

當你使用 JavaScript 可以將 ball 移動到特定位置：

```js
var f = document.getElementById("foo");
document.addEventListener(
  "click",
  function (ev) {
    f.style.left = ev.clientX - 25 + "px";
    f.style.top = ev.clientY - 25 + "px";
  },
  false,
);
```

藉由 CSS，你可以使執行結果更為流暢。我們加入了：

```css
p {
  padding-left: 60px;
}
#foo {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  -moz-transition: all 1s;
  -webkit-transition: all 1s;
  -ms-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
}
```

你可以到 <http://jsfiddle.net/RwtHn/5/> 看範例。

## 使用 transition events 來替 object 製作動畫

這裡讓我們看個例子，一個內含文字的方塊左右來回移動，並且會在兩種顏色之間做轉變：

在我們仔細研究程式碼之前可以先看[範例](/samples/cssref/transitions/sample1)。同樣地，可以到[這](/samples/cssref/transitions/sample1/transitions.css)看其 CSS 的寫法。

### HTML 程式碼

搭配上面範例的 HTML 程式碼並不複雜：

```html
<!doctype html>
<html>
  <head>
    <title>CSS Transition Demo</title>
    <link rel="stylesheet" href="transitions.css" type="text/css" />
    <script src="transitions.js" type="text/javascript"></script>
  </head>
  <body onload="runDemo()">
    <div class="slideRight">This is a box!</div>
  </body>
</html>
```

這裡唯一要注意的地方是我們用 slideRight 來修飾 "This is a box!"。此外，在這個文件被讀取時，就會觸發 `runDemo()` function。

### CSS 程式碼

我們使用 slideRight 和 slideLeft 這兩個 CSS class 來建構動畫 (請參閱 [`transitions.css`](/samples/cssref/transitions/sample1/transitions.css) )。這裡列出部分：

```css
.slideRight {
  position: absolute;
  -moz-transition-property: background-color, color, left;
  -moz-transition-duration: 5s;
  -webkit-transition-property: background-color, color, left;
  -webkit-transition-duration: 5s;
  -o-transition-property: background-color, color, left;
  -o-transition-duration: 5s;
  background-color: red;
  left: 0%;
  color: black;
}
```

我們再這明確定義了 position property。這是一件必要的事情，不然動畫將不知道如何開始。

{{ cssxref("transition-property") }} property 指出哪些 CSS properties 會被包含在動畫效果中。在這個例子中是 {{ cssxref("background-color") }}, {{ cssxref("color") }} 以及 {{ cssxref("left") }}。 {{ cssxref("transition-duration") }} property 則說明了整個動畫將歷時 5 秒。

為了相容於 WebKit 及 Opera，當中還定了一些以 "-webkit-" 和 "-o-" 起始的 property。

總的來說， "slideRight" class 定義了最左端點時的狀態 (準備向右滑動)。所以你可以看到 {{ cssxref("left") }} property 是 0% 。

下面我們定義了 "slideLeft" class，他表示最右端時的狀態 (準備向左滑動)：

```css
.slideLeft {
  position: absolute;
  -moz-transition-property: background-color, color, left;
  -moz-transition-duration: 5s;
  -webkit-transition-property: background-color, color, left;
  -webkit-transition-duration: 5s;
  -o-transition-property: background-color, color, left;
  -o-transition-duration: 5s;
  text-align: center;
  background-color: blue;
  left: 90%;
  color: white;
  width: 100px;
  height: 100px;
}
```

### JavaScript 程式碼

在定義了左右兩端點的狀態後，現在我們可以準備來描述 animation 了。這可以簡單的透過 JavaScript 達成。

> **備註：** 在這裡，倘若 [CSS animations](/zh_tw/CSS_動畫) 被使用者的瀏覽器支援，那就未必要使用 JavaScript 了。

首先定義 `runDemo()` function，他將在文件被讀取後立刻執行：

```js
function runDemo() {
  var el = updateTransition();

  // Set up an event handler to reverse the direction
  // when the transition finishes.

  el.addEventListener("transitionend", updateTransition, true);
}
```

他呼叫了 `updateTransition()` function (這待會會定義)，並且他捕捉了 "transitionend" event，這使我們能夠知道動畫結束了。

`updateTransition()` function 內容如下：

```js
function updateTransition() {
  var el = document.querySelector("div.slideLeft");

  if (el) {
    el.className = "slideRight";
  } else {
    el = document.querySelector("div.slideRight");
    el.className = "slideLeft";
  }

  return el;
}
```

這裡的機制很簡單，我們找到 "slideLeft" 而後將他改變成 "slideRight"，接著動畫便結束。倘若此時並沒有 "slideLeft"，就表示已在右端點，於是執行反向動作。

## 更多資訊

- [CSS Transitions](http://dev.w3.org/csswg/css3-transitions/)
- [CSS Transitions Module Level 3](http://www.w3.org/TR/css3-transitions)
- [CSS animatable properties](http://oli.jp/2010/css-animatable-properties/)
- {{ cssxref("-moz-transition") }}
- {{ cssxref("-moz-transition-property") }}
- {{ cssxref("-moz-transition-duration") }}
- {{ cssxref("-moz-transition-timing-function") }}
- {{ cssxref("-moz-transition-delay") }}
