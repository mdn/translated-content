---
title: ViewTransition：ready 属性
short-title: ready
slug: Web/API/ViewTransition/ready
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

{{domxref("ViewTransition")}} 接口的 **`ready`** 只读属性是一个 {{jsxref("Promise")}}。会在伪元素树被创建且过渡动画即将开始时兑现。

如果视图过渡无法开始，`ready` 就会被拒绝。这可能是由于错误的配置，例如重复的 {{cssxref("view-transition-name")}}，或者是因为 {{domxref("Document.startViewTransition()")}} 的回调函数抛出异常或返回的 Promise 被拒绝。

## 值

一个 promise。

## 示例

在下面的示例中，`ready` 用于触发从用户点击位置开始的自定义圆形揭示视图过渡，动画由 {{domxref("Web Animations API", "Web Animations API", "", "nocode")}} 提供。

```js
// 保存最后一次点击事件
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // 为不支持此 API 的浏览器提供回退方案：
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // 获取点击位置，或者回退到屏幕中间
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // 获取到最远角的距离
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // 开始一次视图过渡：
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // 等待伪元素创建完成：
  transition.ready.then(() => {
    // 新视图的根元素动画
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        // 指定要附加动画的伪元素
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

该动画还需要以下 CSS，以关闭默认的 CSS 动画并防止新旧视图状态以任何方式混合（新状态从旧状态上方“擦除”，而不是过渡）：

```css
::view-transition-image-pair(root) {
  isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  display: block;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
