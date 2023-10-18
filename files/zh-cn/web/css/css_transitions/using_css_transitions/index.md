---
title: 使用 CSS 过渡
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
---

{{CSSRef}}

**CSS 过渡**提供了一种在更改 CSS 属性时控制动画速度的方法。其可以让属性变化成为一个持续一段时间的，而不是立即生效的过程。比如，将一个元素的颜色从白色改为黑色，通常这个改变是立即生效的，使用 CSS 过渡后该元素的颜色将按照一定的曲线速率从白色变化为黑色。这个过程可以自定义。

通常将两个状态之间的过渡称为**隐式过渡**，因为开始与结束之间的状态由浏览器决定。

![CSS 过渡告诉浏览器绘制初始和最终状态之间的中间状态，向用户展示一个平滑的过渡](transitionsprinciple.png)

CSS 过渡可以决定哪些属性发生动画效果（通过[_明确地列出这些属性_](/zh-CN/docs/Web/CSS/transition-property)），何时开始（通过设置[_延时_](/zh-CN/docs/Web/CSS/transition-delay)），持续多久（通过设置[_时长_](/zh-CN/docs/Web/CSS/transition-duration)）以及如何动画（通过定义[_缓动函数_](/zh-CN/docs/Web/CSS/transition-timing-function)，比如线性或先快后慢）。

## 哪些 CSS 属性可用于过渡？

Web 作者可以定义哪一属性需以何种方式用于动画，由此允许创造复杂的过渡。然而因为为某些属性赋予动画无意义，所以这些属性[无动画性](/zh-CN/docs/Web/CSS/CSS_animated_properties)。

> **备注：** `auto` 值常常较复杂，规范指出不要在它上动画。一些用户代理，比如基于 Gecko 的，实现了这个需求；然而另外一些用户代理，比如基于 WebKit 的，没有这么严格限制。在 `auto` 上使用动画，取决于浏览器及其版本，可能会导致非预期结果，应当避免使用。

## 定义过渡

CSS 过渡通常使用简写属性 {{cssxref("transition")}} 控制。这是最好的方式，可以避免属性值列表长度不一，节省在 CSS 代码上调试的时间。

也可以用下面子属性来控制过渡的各部分：

- {{ cssxref("transition-property") }}
  - : 指定哪个或哪些 CSS 属性用于过渡。只有指定的属性才会在过渡中发生动画，其他属性仍如通常那样瞬间变化。
- {{ cssxref("transition-duration") }}
  - : 指定过渡的时长。你可以为所有属性指定一个值，或者指定多个值，或者为每个属性指定不同的时长。
- {{ cssxref("transition-timing-function") }}
  - : 指定一个函数，定义属性值怎么变化。*缓动函数*定义属性如何计算。大多数[缓动函数](/zh-CN/docs/Web/CSS/easing-function)由四点定义一个立方贝塞尔曲线。也可以从 [Easing Functions Cheat Sheet](https://easings.net/) 选择缓动效果。
- {{ cssxref("transition-delay") }}
  - : 指定延迟，即属性开始变化时与过渡开始发生时之间的时长。

`transition` 简写属性 CSS 语法如下：

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## 示例

### 简单示例

本示例实现了一个在用户鼠标移动到元素之上停留两秒后长度为四秒的字体大小过渡效果：

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

### 多个动画属性示例

```html hidden
<body>
  <p>
    下面的盒子包含 width、height、background-color 和 rotate
    的过渡效果。鼠标停留在盒子上以观察这些属性是如何变化的。
  </p>
  <div class="box">示例</div>
</body>
```

#### CSS

```css
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  transition:
    width 2s,
    height 2s,
    background-color 2s,
    rotate 2s;
}

.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  rotate: 180deg;
}
```

{{EmbedLiveSample('多个动画属性示例', 600, 300)}}

### 当属性值列表长度不一致时

如果任意属性值列表的长度比其他属性值列表要短，则其中的值会重复使用以便匹配。例如：

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

将视为：

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

类似地，如果某个属性的值列表长于 {{ cssxref("transition-property") }} 的，将被截短。例如：

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

将按下面这样处理：

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### 高亮菜单过渡效果

CSS 的一个常见用途是当鼠标悬停在菜单上时高亮此菜单。很容易使用过渡效果来让它们更具有吸引力。

首先，我们使用 HTML 建立菜单：

### HTML

```html
<nav>
  <a href="#">主页</a>
  <a href="#">关于</a>
  <a href="#">联系我们</a>
  <a href="#">链接</a>
</nav>
```

然后，我们使用 CSS 实现菜单的视觉效果：

```css
nav {
  display: flex;
  gap: 0.5rem;
}

a {
  flex: 1;
  background-color: #333;
  color: #fff;
  border: 1px solid;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

a:hover,
a:focus {
  background-color: #fff;
  color: #333;
}
```

这段 CSS 代码建立了菜单的外观，当元素处于 {{cssxref(":hover")}} 和 {{cssxref(":focus")}} 状态时，背景和文本颜色都会改变：

{{ EmbedLiveSample('高亮菜单过渡效果') }}

这个 CSS 设置了菜单的外观，在{{ cssxref(":hover") }}时，菜单里的元素的文字、颜色及背景色都发生了变化。

## JavaScript 示例

> ** 备注：** 在以下场景之后，应注意过渡的使用：
>
> - 使用 `.appendChild()` 向 DOM 中添加元素
> - 移除元素的 `display: none;` 属性
>
> 这就好像初始状态从未发生过，元素一直处于最终状态一样。克服这个限制的简单方法是在改变你打算过渡到的 CSS 属性之前应用若干毫秒的 `setTimeout()` 函数。

### 过渡让 JavaScript 效果更平滑

过渡可以使事情看起来更顺畅，而不需要对你的 JavaScript 功能做任何处理。示例如下：

```html
<p>随便点击某处来移动球</p>
<div id="foo" class="ball"></div>
```

使用 JavaScript 将球移动到一个位置：

```js
const f = document.getElementById("foo");
document.addEventListener(
  "click",
  (ev) => {
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
  },
  false,
);
```

使用 CSS 来平滑移动，只需简单地添加一个过渡效果：

```css
.ball {
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
```

{{EmbedGHLiveSample("css-examples/transitions/js-transitions.html", '100%', 500)}}

### 检测渐变的开始和完成

你可以使用 {{domxref("Element/transitionend_event", "transitionend")}} 事件来检测某动画是否结束运行，它是一个 {{domxref("TransitionEvent")}} 对象，除了一般的 {{domxref("Event")}} 对象外，还有两个额外属性：

- `propertyName`
  - : 一个字符串，表示过渡完成的 CSS 属性的名称。
- `elapsedTime`
  - : 一个浮点数，表示在事件发生时，过渡已经运行了多少秒。这个值不受 {{cssxref("transition-delay")}} 值的影响。

像往常一样，你可以使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 方法来监控这个事件：

```js
el.addEventListener("transitionend", updateTransition, true);
```

使用 {{domxref("Element/transitionrun_event", "transitionrun")}}（在任何延迟之前触发）和 {{domxref("Element/transitionstart_event", "transitionstart")}}（在任何延迟之后触发）检测一个过渡的开始，方式相同：

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> **备注：** 如果在过渡完成之前，因为元素变为 {{cssxref("display")}}`: none`，或者动画属性的值被改变，而中止了过渡，则 `transitionend` 事件不会触发。

## 规范

{{Specifications}}

## 参见

- {{domxref("TransitionEvent")}} 接口和 {{domxref("Element/transitionend_event", "transitionend")}} 事件
- [使用 CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)
