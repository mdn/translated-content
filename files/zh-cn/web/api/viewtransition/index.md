---
title: ViewTransition
slug: Web/API/ViewTransition
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

{{domxref("View Transitions API", "View Transitions API", "", "nocode")}} 的 **`ViewTransition`** 接口表示视图过渡，并提供了在过渡到达不同状态时运行代码的功能（例如，准备运行动画，或动画完成），或跳过视图过渡。

此对象类型由 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 方法返回。当调用 `startViewTransition()` 时，将按照[视图过渡过程](/zh-CN/docs/Web/API/View_Transitions_API#视图过渡过程)中所述的步骤序列进行。这也解释了不同的 Promise 何时兑现。

{{InheritanceDiagram}}

## 实例属性

- {{domxref("ViewTransition.finished")}} {{Experimental_Inline}}
  - : 一个在过渡动画完成后兑现的 {{jsxref("Promise")}}，新的页面视图对用户可见且可交互。
- {{domxref("ViewTransition.ready")}} {{Experimental_Inline}}
  - : 一个在伪元素树创建且过渡动画即将开始时兑现的 {{jsxref("Promise")}}。
- {{domxref("ViewTransition.updateCallbackDone")}} {{Experimental_Inline}}
  - : 当 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 的回调返回的 {{jsxref("Promise")}} 兑现时，该 {{jsxref("Promise")}} 也会兑现。

## 实例方法

- {{domxref("ViewTransition.skipTransition", "skipTransition()")}} {{Experimental_Inline}}
  - : 跳过视图过渡的动画部分，但不会跳过运行 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 的回调，该回调会更新 DOM。

## 示例

在下面的示例中，{{domxref("ViewTransition.ready")}} 用于触发从用户点击位置开始的自定义圆形揭示视图过渡，动画由 {{domxref("Web Animations API", "Web Animations API", "", "nocode")}} 提供。

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
