---
title: content-visibility
slug: Web/CSS/content-visibility
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`content-visibility`** 控制元素是否渲染其内容，以及施加一组强局限，由此允许用户代理有机会在不需要时省略大片的布局和渲染工作。此属性使用户代理得以在不需要时跳过元素的渲染工作（包括布局和绘制）——由此使页面的初始加载明显变快。

> [!NOTE]
> 对于设置了 `content-visibility: auto` 的任意元素，在其渲染工作开始或不再被跳过时将触发 {{DOMXref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件。此事件为应用代码在不需要时开始或停止渲染过程（如在 {{HTMLElement("canvas")}} 上绘画）提供了便利，进而节约了处理能力。

## 语法

```css
/* 关键词值 */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* 全局值 */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: revert-layer;
content-visibility: unset;
```

### 取值

- `visible`
  - : 无效果。元素内容照常进行布局和渲染。
- `hidden`
  - : 元素[跳过其内容](/zh-CN/docs/Web/CSS/CSS_containment#跳过其内容)。被跳过的内容必须不可被例如页内查找和 tab 键顺序导航等用户代理特性访问，亦不可被选中或获得焦点。此值类似于为内容赋予 `display: none`。
- `auto`
  - : 元素启用布局局限、样式局限和绘制局限。若元素不[与用户相关](/zh-CN/docs/Web/CSS/CSS_containment#与用户相关)，则元素还跳过其内容。与 `hidden` 不同的是，被跳过的内容必须仍可照常被例如页内查找和 tab 键顺序导航等用户代理特性访问，且必须照常可获得焦点或被选中。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 无障碍考虑

`content-visibility: auto` 属性中的屏外内容仍在文档对象模型和无障碍树中。由此允许在改善页面性能时不负面影响无障碍性。

因为屏外内容的样式不被渲染，被特意用 `display: none` 或 `visibility: hidden` 隐藏的元素*仍将出现在无障碍树中*。若不想让元素出现在无障碍树中，请用 `aria-hidden="true"`。

## 示例

### 使用 auto 减少长页面的渲染开销

下列示例展示了使用 `content-visibility: auto` 跳过屏外章节的绘制和渲染。当某个章节（`section`）在视口外时，其内容绘制被跳过，直至章节靠近视口，由此有助于页面加载和交互。

#### HTML

```html
<section>
  <!-- 每节的内容…… -->
</section>
<section>
  <!-- 每节的内容…… -->
</section>
<section>
  <!-- 每节的内容…… -->
</section>
<!-- … -->
```

#### CSS

`contain-intrinsic-size` 属性为每个 `section` 元素的高度和宽度添加了 500px 的默认尺寸。章节在被渲染后，即使被滚动到视口外也将保持其渲染的固有尺寸。

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### 使用 hidden 管理可见性

下列示例展示了如何用 Javascript 管理内容可见性。使用 `content-visibility: hidden;` 代替 `display: none;` 在内容被隐藏时保留了其渲染状态且渲染更快。

#### HTML

```html
<div class="hidden">
  <button class="toggle">显示</button>
  <p>此内容初始时被隐藏，可点击按钮显示。</p>
</div>
<div class="visible">
  <button class="toggle">隐藏</button>
  <p>此内容初始时可见，可点击按钮隐藏。</p>
</div>
```

#### CSS

在有 `visible` 和 `hidden` 类的元素的直系子元素段落上设置了 `content-visibility` 属性。在此示例中，可通过 div 父元素的 CSS 类显示和隐藏段落内容。

为表示内容尺寸，此代码包含了 `contain-intrinsic-size` 属性。此属性有助于在内容被隐藏时减少布局漂移。

```css
p {
  contain-intrinsic-size: 0 1.1em;
  border: dotted 2px;
}

.hidden > p {
  content-visibility: hidden;
}

.visible > p {
  content-visibility: visible;
}
```

#### JavaScript

```js
const handleClick = (event) => {
  const button = event.target;
  const div = button.parentElement;
  button.textContent = div.classList.contains("visible") ? "显示" : "隐藏";
  div.classList.toggle("hidden");
  div.classList.toggle("visible");
};

document.querySelectorAll("button.toggle").forEach((button) => {
  button.addEventListener("click", handleClick);
});
```

#### 结果

{{EmbedLiveSample("使用 hidden 管理可见性")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 局限](/zh-CN/docs/Web/CSS/CSS_containment)
- {{CSSXref("contain-intrinsic-size")}}
- {{DOMXref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
- [content-visibility：提高渲染性能的新 CSS 属性](https://web.developers.google.cn/articles/content-visibility)（web.developers.google.cn）
