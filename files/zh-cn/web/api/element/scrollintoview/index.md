---
title: Element：scrollIntoView() 方法
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
l10n:
  sourceCommit: e4ac7f209c4066e17b645535d9b6f726aae01b63
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`scrollIntoView()`** 方法会滚动元素的祖先容器，使得被调用该方法的元素对用户可见。

## 语法

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(options)
```

### 参数

- `alignToTop`{{optional_inline}}
  - : 一个布尔值：
    - 如果为 `true`，元素的顶端将和其所在滚动区的可视区域的顶端对齐。对应于 `scrollIntoViewOptions: {block: "start", inline: "nearest"}`。这是默认值。
    - 如果为 `false`，元素的底端将和其所在滚动区的可视区域的底端对齐。对应于 `scrollIntoViewOptions: {block: "end", inline: "nearest"}`。

- `options` {{optional_inline}}
  - : 一个包含下列属性的对象：
    - `behavior` {{optional_inline}}
      - : 定义滚动是立即的还是平滑的动画。可以为以下值之一：
        - `smooth`：滚动应该是平滑的动画。
        - `instant`：滚动应该通过一次跳跃立刻发生。
        - `auto`：滚动行为由 {{cssxref("scroll-behavior")}} 的计算值决定。

        默认值为 `auto`。

    - `block` {{optional_inline}}
      - : 定义元素在可滚动祖先容器内的垂直对齐方式。其取值可为以下任一选项：
        - `start`：将元素顶部边缘与可滚动容器顶部对齐，使元素垂直方向出现在可见区域起始处。
        - `center`：将元素垂直居中于可滚动容器，使其位于可见区域中央。
        - `end`：将元素底部边缘与可滚动容器底部对齐，使元素垂直位于可见区域末端。
        - `nearest`：沿垂直方向将元素滚动至最近边缘。若元素更靠近滚动容器顶部，则对齐顶部；若更靠近底部，则对齐底部。此方式可最小化滚动距离。

        默认值为 `start`。

    - `container` {{optional_inline}}
      - : 定义可滚动祖先容器。其值可为以下之一：
        - `all`：所有可滚动容器均受影响（包括视口）。
        - `nearest`：仅最近的可滚动容器受滚动影响。

        默认值为 `all`。

    - `inline` {{optional_inline}}
      - : 定义元素在可滚动祖先容器内的水平对齐方式。其取值可为以下任一选项：
        - `start`：将元素左边缘与可滚动容器左侧对齐，使元素在可见区域水平方向上显示于起始位置。
        - `center`：将元素水平居中对齐于可滚动容器中央，使其位于可见区域正中。
        - `end`：将元素右边缘与可滚动容器右侧对齐，使元素水平方向位于可见区域末端。
        - `nearest`：将元素水平方向滚动至最近边缘。若元素更靠近滚动容器左侧，则向左对齐；若更靠近右侧，则向右对齐。此方式可最小化滚动距离。

        默认值为 `nearest`。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 使用 scrollIntoView()

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

### 控制顶部/底部对齐

默认情况下，元素与可滚动祖先的顶部（或底部）边缘对齐。如需自定义间距，使用 {{cssxref("scroll-margin-top")}} 或 {{cssxref("scroll-margin-bottom")}} 属性。当页面存在固定页眉时，此功能通常很有用。

#### HTML

```html
<body>
  <header class="navbar">导航栏</header>
  <main class="content">
    <button id="go-to-bottom">去底部</button>
    <button id="go-to-top">去顶部</button>
  </main>
</body>
```

#### CSS

```css
.navbar {
  height: 50px;
  position: sticky;
  top: 0;
  border-bottom: 1.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  height: 2000px;
  position: relative;
}
#go-to-bottom {
  position: absolute;
  top: 10px;
  /* 若未设置此项，按钮在滚动时将对齐至页面顶部而非导航栏底部。 */
  scroll-margin-top: 60px;
}
#go-to-top {
  position: absolute;
  bottom: 10px;
  scroll-margin-bottom: 0;
}
```

#### JavaScript

```js
const goToTop = document.getElementById("go-to-top");
const goToBottom = document.getElementById("go-to-bottom");
goToBottom.addEventListener("click", () => {
  goToTop.scrollIntoView({ behavior: "instant", block: "end" });
});
goToTop.addEventListener("click", () => {
  goToBottom.scrollIntoView({ behavior: "instant", block: "start" });
});
```

#### 结果

{{EmbedLiveSample("控制顶部/底部对齐", "700", "300")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
