---
title: CSS 滚动吸附
slug: Web/CSS/Guides/Scroll_snap
---

**CSS 滚动吸附**模块所提供的属性可通过定义吸附位置控制滑屏和滚动行为。当用户在{{Glossary("Scroll container", "滚动容器")}}中滚动溢出的内容时，内容可吸附至特定位置，由此提供分页和滚动定位效果。

此模块包含滚动容器的滚动内边距属性，用于调整滚入视野操作中分页的最佳可见区域。此模块还包含设置于滚动容器子元素的滚动外边距和滚动对齐方式属性，用于调整子元素在滚入视野时的可见区域，以及用于使滚动强制止于各子元素的属性。

## 滚动吸附实践

为在下方的框中查看滚动吸附，可在滚动式视口中上下左右地滚动经过含 45 个带编号盒子的网格。

```js hidden live-sample___scroll_snap
const positions = ["start", "center", "end"];
const inlineDirection = document.getElementById("inline");
const blockDirection = document.getElementById("block");
const stop = document.getElementById("stop");
const snap = document.getElementById("snap");
const all = document.querySelector("article");
const rules = document.styleSheets[0].cssRules;

inlineDirection.addEventListener("change", () => {
  setSSA();
});
blockDirection.addEventListener("change", () => {
  setSSA();
});
stop.addEventListener("change", () => {
  setSST();
});
window.addEventListener("load", () => {
  setSST();
  setSSA();
});
snap.addEventListener("change", () => {
  all.classList.toggle("snapDisabled");
});

function setSSA() {
  rules[0].style.scrollSnapAlign = `${positions[blockDirection.value]} ${
    positions[inlineDirection.value]
  }`;
}

function setSST() {
  if (stop.checked) {
    rules[0].style.scrollSnapStop = "always";
  } else {
    rules[0].style.scrollSnapStop = "normal";
  }
}
```

```html hidden live-sample___scroll_snap
<article>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div>
    <fieldset>
      <legend>Change the options</legend>
      <p>
        <label
          ><input
            type="range"
            min="0"
            max="2"
            value="1"
            list="places"
            id="block" />
          block position</label
        >
      </p>
      <p>
        <label>
          <input
            type="range"
            min="0"
            max="2"
            value="1"
            list="places"
            id="inline" />
          inline position
        </label>
      </p>
      <p>
        <label>
          <input type="checkbox" id="stop" />
          Prevent scrolling past boxes
        </label>
      </p>
    </fieldset>

    <p>
      <label><input type="checkbox" id="snap" /> disable snapping</label>
    </p>

    <datalist id="places">
      <option value="0">start</option>
      <option value="1">center</option>
      <option value="2">end</option>
    </datalist>
  </div>
</article>
```

```css hidden live-sample___scroll_snap
li {
  /*
  starts with:
      scroll-snap-align: center center;
      scroll-snap-stop: normal (defaults);

  CSS gets changed with JavaScript when you change the controls.
  the following can be set:
      scroll-snap-stop: always | normal;
      scroll-snap-align: start | center | end {2}
        */
}
ul {
  overflow: auto;
  scroll-snap-type: both mandatory;
  overscroll-behavior-x: contain;
}
article.snapDisabled fieldset {
  opacity: 20%;
  pointer-events: none;
}
article.snapDisabled ul {
  scroll-snap-type: initial;
  overscroll-behavior-x: initial;
}

@layer pageSetup {
  article {
    display: flex;
    gap: 2vw;
  }
  div {
    flex: 1;
  }
  ul {
    display: grid;
    gap: 6.25vw;
    padding: 12.5vw;
    box-sizing: border-box;
    border: 1px solid;
    grid-template-columns: repeat(5, 1fr);
    background: conic-gradient(
      at bottom left,
      red 0deg,
      yellow 15deg,
      green 30deg,
      blue 45deg,
      purple 60deg,
      magenta 75deg
    );
    background-attachment: local;
    margin: auto;
    width: 20vw;
    height: 20vw;
  }
  li {
    scroll-snap-align: center;
    height: 12.5vw;
    width: 12.5vw;
    outline: 3px inset;
    list-style-type: none;
    background: white;
    font-family: monospace;
    font-size: 3rem;
    line-height: 12vw;
    text-align: center;
    counter-increment: items 1;
  }
  li::after {
    content: counter(items);
  }
  input {
    vertical-align: bottom;
  }
  p {
    font-family: monospace;
  }
}
```

{{EmbedLiveSample("scroll_snap", "", "250px")}}

在有滚动吸附时，所滚动的带编号盒子中的一者将吸附至指定位置。初始的 CSS 代码使带编号盒子吸附至视口中心，可使用滑块改变块向和行向的吸附位置。

使用吸附属性可允许或防止滚动越过某个元素（此示例中为带编号盒子）。可勾选“Prevent scrolling past boxes”使所有滚动操作被强制限于滚动至相邻盒子。

为比较滚动吸附与普通滚动，可勾选“disable snapping”并再次尝试滚动。

此示例的代码[见 GitHub 上的源码](https://github.com/mdn/css-examples/blob/main/modules/scroll_snap.html)。

## 参考

### 容器上的属性

- {{CSSXref("scroll-snap-type")}}
- {{CSSXref("scroll-padding")}}
  - {{CSSXref("scroll-padding-top")}}
  - {{CSSXref("scroll-padding-right")}}
  - {{CSSXref("scroll-padding-bottom")}}
  - {{CSSXref("scroll-padding-left")}}
  - {{CSSXref("scroll-padding-inline")}}
  - {{CSSXref("scroll-padding-inline-start")}}
  - {{CSSXref("scroll-padding-inline-end")}}
  - {{CSSXref("scroll-padding-block")}}
  - {{CSSXref("scroll-padding-block-start")}}
  - {{CSSXref("scroll-padding-block-end")}}

### 子元素上的属性

- {{CSSXref("scroll-snap-align")}}
- {{CSSXref("scroll-margin")}}
  - {{CSSXref("scroll-margin-top")}}
  - {{CSSXref("scroll-margin-right")}}
  - {{CSSXref("scroll-margin-bottom")}}
  - {{CSSXref("scroll-margin-left")}}
  - {{CSSXref("scroll-margin-inline")}}
  - {{CSSXref("scroll-margin-inline-start")}}
  - {{CSSXref("scroll-margin-inline-end")}}
  - {{CSSXref("scroll-margin-block")}}
  - {{CSSXref("scroll-margin-block-start")}}
  - {{CSSXref("scroll-margin-block-end")}}
- {{CSSXref("scroll-snap-stop")}}

## 指南

- [CSS 滚动吸附的基本概念](/zh-CN/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
  - : CSS 滚动吸附特性的概览和示例。

## 相关概念

- {{CSSXref(":target")}} 伪类
- CSS 属性 {{CSSXref("overflow")}}
- Element {{DOMXref("Element.scroll", "scroll()")}} 方法
- Element {{DOMXref("Element.scrollBy", "scrollBy()")}} 方法
- Element {{DOMXref("Element.scrollIntoView", "scrollIntoView()")}} 方法
- Element {{DOMXref("Element.scrollTo", "scrollTo()")}} 方法
- Document {{DOMXref("Document.scroll_event", "scroll")}} 事件
- ARIA 角色 [`scrollbar`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- 术语{{Glossary("Scroll container", "滚动容器")}}

## 规范

{{Specifications}}

## 参见

- [CSS 溢出](/zh-CN/docs/Web/CSS/Guides/Overflow)模块
- [CSS 滚动条样式化](/zh-CN/docs/Web/CSS/Guides/Scrollbars_styling)模块
- [纯键盘滚动区域](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html)（载于 adrianroselli.com，2022 年）
- [滚动吸附示例](https://codepen.io/collection/KpqBGW)（载于 Codepen，2022 年）
- [用 CSS 滚动吸附明确控制滚动](https://web.developers.google.cn/articles/css-scroll-snap)（载于 web.developers.google.cn，2021 年）
- [实用 CSS 滚动吸附](https://css-tricks.com/practical-css-scroll-snapping/)（载于 CSS-Tricks，2020 年）
- [CSS 滚动吸附](https://12daysofweb.dev/2022/css-scroll-snap/)（载于 12 Days of Web，2019 年）
