---
title: Element.animate()
slug: Web/API/Element/animate
---

{{APIRef('Web Animations')}}

{{domxref("Element")}} 接口的 **`animate()`** 方法是创建一个新的 {{domxref("Animation")}} 的便捷方法，将它应用于元素，然后运行动画。它将返回一个新建的 {{domxref("Animation")}} 对象实例

> **备注：** 一个元素上可以应用多个动画效果。你可以通过调用 {{domxref("Element.getAnimations()")}} 函数获得这些动画效果的一个列表。

## 语法

```js-nolint
animate(keyframes, options)
```

### 参数

- `keyframes`
  - : 关键帧对象数组，**或**一个关键帧对象（其属性为可迭代值的数组）。参见[关键帧格式](/zh-CN/docs/Web/API/Web_Animations_API/Keyframe_Formats)以了解详细信息。
- `options`

  - : **代表动画持续时间的整数**（以毫秒为单位），或者一个包含一个或多个时间属性（在 [`KeyframeEffect()` options 参数](/zh-CN/docs/Web/API/KeyframeEffect/KeyframeEffect#参数)和下方列出）的对象：

    - `id` {{optional_inline}}
      - : 在 `animate()` 里可作为唯一标识的属性：一个用来引用动画的字符串。

### 返回值

返回 {{domxref("Animation")}}。

## 示例

### 旋转和缩放

在以下示例中，我们使用 `animate()` 方法旋转和缩放元素。

#### HTML

```html
<div class="newspaper">翻报纸真的<br />会头晕</div>
```

#### CSS

```css
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.newspaper {
  padding: 0.5rem;
  text-transform: uppercase;
  text-align: center;
  background-color: white;
  cursor: pointer;
}
```

#### JavaScript

```js
const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const newspaperTiming = {
  duration: 2000,
  iterations: 1,
};

const newspaper = document.querySelector(".newspaper");

newspaper.addEventListener("click", () => {
  newspaper.animate(newspaperSpinning, newspaperTiming);
});
```

#### 结果

{{EmbedLiveSample("旋转和缩放")}}

### Down the Rabbit Hole 演示

在演示 [Down the Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010) 中，我们用 `animate()` 来快速创建并运行使 `#tunnel` 元素无限循环缓慢升起的动画。注意关键帧的对象数组和时间可选项。

```js
document.getElementById("tunnel").animate(
  [
    // keyframes
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // timing options
    duration: 1000,
    iterations: Infinity,
  },
);
```

### 隐含关键帧

在新版的浏览器中，你可以只设置动画的开始或结束状态（即单个关键帧），如果可以，浏览器会自动推断动画的另一端（结束或开始）的状态。例如，考虑[这个简单动画](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html)——关键帧对象如下所示：

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

我们仅指定了动画的结束状态，开始状态是隐含的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Animation API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Element.getAnimations()")}}
- {{domxref("Animation")}}
