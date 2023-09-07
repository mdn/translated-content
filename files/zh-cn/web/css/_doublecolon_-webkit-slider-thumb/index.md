---
title: "::-webkit-slider-thumb"
slug: Web/CSS/::-webkit-slider-thumb
---

{{CSSRef}}

## 总结

**`::-webkit-slider-thumb`**

这是 type 为 range 的 input 标签内的一种伪类样式，用于设置 range 的滑块的具体样式，该伪类只在内核为 webkit/blink 的浏览器中有效

## 使用方式

该伪类需要配和 **::-webkit-slider-runnable-track** 使用，否则会没有效果

```css
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; /*清除默认样式*/
  height: 7vw; /*设置滑块高度*/
  width: 5vw; /*设置滑块宽度*/
  background: #000; /*设置背景色*/
  border-radius: 10vw 10vw; /*加个圆角边*/
  margin-top: -1vw; /*使用 position 的话会导致滑块不滑动，但是绑定的 value 是改变的，所以这里使用 margin-top 去做定位*/
}

input[type="range"]::-webkit-slider-runnable-track {
  border-radius: 30px;
  background: #128;
  height: 15px;
}
```

## 规范

这不是任何规范中的一部分，这是 webkit/bink 内核特有的 (chrome/safari)

## 参见

- ::-webkit-slider-runnable-track
- 其他浏览器内与该功能类似的伪类

  - ::-moz-range-thumb
  - ::-ms-thumb

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](http://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
