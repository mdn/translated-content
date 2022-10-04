---
title: Element.animate()
slug: Web/API/Element/animate
---

{{APIRef('Web Animations')}} {{SeeCompatTable}}

{{domxref("Element")}} 接口的**`animate()`** 方法是一个创建新{{domxref("Animation")}}的便捷方法，将它应用于元素，然后运行动画。它将返回一个新建的 {{domxref("Animation")}} 对象实例

> **备注：** 一个元素上可以应用多个动画效果。你可以通过调用此函数获得这些动画效果的一个列表： {{domxref("Element.getAnimations()")}}.

## 语法

```
var animation = element.animate(keyframes, options);
```

### 参数

- `keyframes 关键帧`
  - : 一个对象，代表关键帧的一个集合
- `options 可选项`

  - : **代表动画持续时间的整形数字** (以毫秒为单位), 或者一个包含一个或多个时间属性的对象：

    - `id {{optional_inline}}`
      - : 在 `animate()` 里可作为唯一标识的属性：一个用来引用动画的字符串（ [`DOMString`](/zh-CN/docs/Web/API/DOMString) ）

    {{Page("/en-US/docs/Web/API/Web_Animations_API/Animation_timing_properties", "Properties")}}

#### 未来的可选项

下面的可选项目前并非在所有地方都可用，但未来将会被加进来

- `composite {{optional_inline}} 合成`

  - : 决定动画彼此之间的值如何结合起来，单独的动画不指定自己的特定复合操作。默认为 `replace`.

    - `add` 表示追加影响，每一次连续的迭代建立在前一个的基础上。比如`transform`, `translateX(-200px)` 将不会覆盖 `rotate(20deg)` 的值，最终结果是 `translateX(-200px) rotate(20deg)`
    - `accumulate` 效果类似但是更智能一些：`blur(2)` 和`blur(5)` 的结果为`blur(7)`, 而不是 `blur(2) blur(5)`
    - `replace` 新的值将会覆盖掉旧的

- `iterationComposite {{optional_inline}} 迭代合成`
  - : 决定动画迭代之间的值如何结合起来，可以被设置为 `accumulate` 或者 `replace` （同上）。默认值为 `replace`.
- `spacing {{optional_inline}}`

  - : 决定在动画持续时间内如何分配没有时间偏移的关键帧。默认值为`distribute`.

    - `distribute` 分配的关键帧位置，使连续关键帧之间的距离相等。也就是说，没有任何偏移时，将会使关键帧均匀分到整个运行时间内
    - `paced` 分配的关键帧位置，使连续关键帧之间的距离让某个步增的属性值的增长速度相同，也就是说，属性值差异越大，关键帧之间的距离越远

    ![](https://w3c.github.io/web-animations/img/spacing-distribute.svg) ![ ](https://w3c.github.io/web-animations/img/spacing-paced.svg)

### 返回值

返回 {{domxref("Animation")}}.

## 示例

在示例 [Down the Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010) 中，我们用 `animate()` 来快速创建并运行使 `#tunnel` 元素无限循环缓慢升起的动画。注意关键帧的对象数组和时间可选项

```js
document.getElementById("tunnel").animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Element.getAnimations()")}}
- {{domxref("Animation")}}
