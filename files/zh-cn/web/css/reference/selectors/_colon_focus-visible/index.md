---
title: :focus-visible
slug: Web/CSS/Reference/Selectors/:focus-visible
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

当元素符合 {{CSSxRef(":focus")}} 伪类，且 UA（{{glossary("User Agent", "用户代理")}}）通过启发式方法确定应在元素上显示焦点时，**`:focus-visible`** 伪类就会适用。（在这种情况下，许多浏览器默认会显示一个“焦点环”。）

{{InteractiveExample("CSS 演示：:focus-visible", "tabbed-shorter")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:focus-visible {
  outline: 2px solid crimson;
  border-radius: 3px;
}

select:focus-visible {
  border: 2px dashed crimson;
  border-radius: 3px;
  outline: none;
}
```

```html interactive-example
<form>
  <p>需要订购哪种口味？</p>
  <label>全名：<input name="firstName" type="text" /></label>
  <label
    >口味：
    <select name="flavor">
      <option>樱桃</option>
      <option>绿茶</option>
      <option>驼鹿轨迹</option>
      <option>薄荷</option>
    </select>
  </label>
</form>
```

这个选择器可以有效地根据用户的输入方式（鼠标与键盘）展示不同形式的焦点。

## 语法

```css
:focus-visible {
  /* ... */
}
```

## :focus 与 :focus-visible

最初，用户代理 CSS 仅根据 `:focus` 伪类设置聚焦样式，为大多数聚焦元素设计焦点环轮廓样式。这意味着所有元素，包括所有链接和按钮，在聚焦时都会应用焦点环，这让很多人觉得很难看。由于这种外观，一些作者删除了用户代理轮廓焦点样式。改变焦点样式会降低可用性，而移除焦点样式则会使视力正常的用户无法使用键盘导航。

当每个元素有焦点时，浏览器不再明显地在其周围显示焦点（例如画一个“焦点环”）。取而代之的是，它们使用各种启发式方法，只在对用户最有帮助的时候提供焦点指示。例如，当使用指向设备点击按钮时，一般不会在视觉上显示焦点，但当需要用户输入的文本框有焦点时，就会显示焦点。当用户使用键盘浏览页面或通过脚本管理焦点时，总是需要焦点样式，但当用户知道他们把焦点放在哪里时，例如当他们使用鼠标或手指等指向设备对元素进行物理设置时，除非该元素继续需要用户关注，否则就不需要焦点样式。

`:focus` 伪类总是与当前焦点元素匹配。`focus-visible` 伪类也会匹配被聚焦的元素，但只有在用户需要知道当前焦点在哪里时才会匹配。由于 `:focus-visible` 伪类会在需要时匹配焦点元素，因此使用 `:focus-visible`（而不是 `:focus` 伪类）可以让作者改变焦点指示器的外观，而无需改变焦点指示器的显示时间。

当使用 [`:focus`](/zh-CN/docs/Web/CSS/Reference/Selectors/:focus) 伪类时，它总是指向当前聚焦的元素。这意味着，当用户使用指向设备时，聚焦元素周围会出现一个可见的焦点环，有些人认为这很碍眼。`:focus-visible` 伪类尊重用户代理的选择性焦点指示行为，同时还允许对焦点指示器进行自定义。

## 无障碍

### 低视力

确保低视力者也能看到视觉焦点指示器。这对在明亮空间（如户外阳光下）使用屏幕的人也有好处。[WCAG 2.1 SC 1.4.11 非文本对比度](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)要求视觉焦点指示器的对比度至少为 3:1。

- 无障碍视觉焦点指示器：[给你的网站一些焦点！设计有用和可用的焦点指示器的技巧](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)

### 认知

如果用户使用的是混合输入方式，那么焦点指示器出现和消失的原因可能并不明显。对于有认知障碍或不太懂技术的用户来说，交互元素缺乏一致性的行为可能会让他们感到困惑。

## 示例

### :focus 与 :focus-visible 的对比

本例展示了三对控件。每对控件都由一个 [`text`](/zh-CN/docs/Web/HTML/Reference/Elements/input/text) 输入和一个按钮组成。

- 第一对没有为焦点状态添加任何自定义样式，显示的是默认情况。
- 第二对使用 `:focus` 伪类添加样式。
- 第三对使用 `:focus-visible` 伪类添加样式。

```html
<input type="text" value="默认样式" /><br />
<button>默认样式</button><br />

<input class="focus-only" type="text" value=":focus" /><br />
<button class="focus-only">:focus</button><br />

<input class="focus-visible-only" type="text" value=":focus-visible" /><br />
<button class="focus-visible-only">:focus-visible</button>
```

```css
input,
button {
  margin: 10px;
}

.focus-only:focus {
  outline: 2px solid black;
}

.focus-visible-only:focus-visible {
  outline: 4px dashed darkorange;
}
```

如果依次点击每个元素，会发现当使用 `:focus` 来样式化焦点环时，用户界面会在用户点击按钮时绘制焦点环。但是，当使用 `:focus-visible` 来样式化焦点环时，用户界面不会在用户点击按钮时绘制焦点环，就像默认情况一样。

如果用 tab 键浏览每个元素，你会发现在默认、`:focus` 和 `:focus-visible` 三种情况下，当用户用键盘导航到按钮时，用户界面都会在按钮周围绘制焦点环。

这说明了 `:focus-visible` 如何使设计者能够按照浏览器的逻辑来确定何时显示焦点环。

{{EmbedLiveSample(':focus 与 :focus-visible 的对比', '100%', 300)}}

### 提供 :focus 回落

如果你的代码必须在不支持 `:focus-visible` 的旧版本浏览器中运行，请使用 {{cssxref("@supports")}} 检查 `:focus-visible` 的支持情况，并在其中重复相同的焦点样式，但要放在 `:focus` 规则中。请注意，即使不为 `:focus` 指定任何内容，旧版浏览器也会简单地显示原生的外轮廓线，这就足够了。

```html
<button class="button with-fallback" type="button">有回落的按钮</button>
<button class="button without-fallback" type="button">无回落的按钮</button>
```

```css
.button {
  margin: 10px;
  border: 2px solid darkgray;
  border-radius: 4px;
}

.button:focus-visible {
  /* 当支持 :focus-visible 时，画出焦点 */
  outline: 3px solid deepskyblue;
  outline-offset: 3px;
}

@supports not selector(:focus-visible) {
  .button.with-fallback:focus {
    /* 对于不支持 :focus-visible 的浏览器的回落 */
    outline: 3px solid deepskyblue;
    outline-offset: 3px;
  }
}
```

{{EmbedLiveSample("提供 :focus 回落", "100%", 72)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":focus")}}
- {{cssxref(":focus-within")}}
