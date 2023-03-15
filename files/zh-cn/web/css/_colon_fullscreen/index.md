---
title: ':fullscreen'
slug: Web/CSS/:fullscreen
---

{{CSSRef}}{{SeeCompatTable}}

## 总结

`css 伪类 :fullscreen 应用于当前处于全屏显示模式的元素。` 它不仅仅选择顶级元素，还包括所有已显示的栈内元素。

> **备注：** W3C 标准使用不带破折号的单词 `:fullscreen`，但 Webkit 和 Gecko 应用接口各自使用前缀带有破折号的变量：`:-webkit-full-screen` 和`:-moz-full-screen`。微软的 Edge 和 Internet Explorer 各自使用标准语法：`:fullscreen` 和 `:-ms-fullscreen`。

## 语法

{{csssyntax}}

## 示例

### HTML

```html
<div id="fullscreen">
  <h1>:fullscreen Demo</h1>
  <p> This will become a big red text when on fullscreen.</p>
  <button id="fullscreen-button">Enter Fullscreen</button>
</div>
```

```js hidden
var fullscreenButton = document.getElementById("fullscreen-button");
var fullscreenDiv    = document.getElementById("fullscreen");
var fullscreenFunc   = fullscreenDiv.requestFullscreen;
if (!fullscreenFunc) {
  ['mozRequestFullScreen',
   'msRequestFullscreen',
   'webkitRequestFullScreen'].forEach(function (req) {
     fullscreenFunc = fullscreenFunc || fullscreenDiv[req];
   });
}
function enterFullscreen() {
  fullscreenFunc.call(fullscreenDiv);
}
fullscreenButton.addEventListener('click', enterFullscreen);
```

```css hidden
#fullscreen:-moz-full-screen {
  padding: 42px;
  background-color: pink;
  border:2px solid #f00;
  font-size: 200%;
}
#fullscreen:-ms-fullscreen {
  padding: 42px;
  background-color: pink;
  border:2px solid #f00;
  font-size: 200%;
}
#fullscreen:-webkit-full-screen {
  padding: 42px;
  background-color: pink;
  border:2px solid #f00;
  font-size: 200%;
}

#fullscreen:-moz-full-screen > h1 {
  color: red;
}
#fullscreen:-ms-fullscreen > h1 {
  color: red;
}
#fullscreen:-webkit-full-screen > h1 {
  color: red;
}

#fullscreen:-moz-full-screen > p {
  color: DarkRed;
}
#fullscreen:-ms-fullscreen > p {
  color: DarkRed;
}
#fullscreen:-webkit-full-screen > p {
  color: DarkRed;
}

#fullscreen:-moz-full-screen > button {
  display: none;
}
#fullscreen:-ms-fullscreen > button {
  display: none;
}
#fullscreen:-webkit-full-screen > button {
  display: none;
}
```

### CSS

```css
#fullscreen:fullscreen {
  padding: 42px;
  background-color: pink;
  border:2px solid #f00;
  font-size: 200%;
}

#fullscreen:fullscreen > h1 {
  color: red;
}

#fullscreen:fullscreen > p {
  color: DarkRed;
}

#fullscreen:fullscreen > button {
  display: none;
}
```

### 结果

{{ LiveSampleLink('示例', "(If the 'Enter Fullscreen' button doesn't work, try here)") }}

{{ EmbedLiveSample('示例','80%','200px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("::backdrop")}}
- [Using full-screen mode](/zh-CN/docs/Web/API/Fullscreen_API)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{HTMLAttrXRef("allowfullscreen", "iframe")}}
- {{cssxref(":-moz-full-screen-ancestor")}}
