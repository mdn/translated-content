---
title: View Transitions API
slug: Web/API/View_Transition_API
original_slug: Web/API/View_Transitions_API
---

{{SeeCompatTable}}{{DefaultAPISidebar("View Transitions API")}}

**View Transitions API** 提供了一种机制，可以在更新 DOM 内容的同时，轻松地创建不同 DOM 状态之间的动画过渡。同时还可以在单个步骤中更新 DOM 内容。

## 概念和用法

视图过渡是一种流行的设计选择，可以减少用户认知负荷，帮助他们保持上下文，并减少他们在应用程序的状态或视图之间移动时感知的加载延迟。

但是，在 Web 上创建视图过渡历来很困难。在单页应用程序（SPA）中，状态之间的过渡往往需要编写大量的 CSS 和 JavaScript 来：

- 处理新旧内容的加载和定位。
- 为新旧状态添加动画以创建过渡。
- 防止用户与旧内容的意外交互而导致的问题。
- 完成过渡后删除旧内容。

像阅读位置丢失、焦点混乱和实时区域宣告的奇怪行为等无障碍问题，也可能由于新旧内容同时存在于 DOM 中而导致。此外，跨文档视图过渡（即在常规非 SPA 网站中跨越不同页面）是不可能的。

View Transitions API 提供了一种更简单的方法来处理必需的 DOM 更改和过渡动画。

> [!NOTE]
> View Transitions API 目前不支持跨文档视图过渡，但这已计划在未来的规范版本中实现，并正在积极开发中。

### 创建基本视图过渡

例如，一个 SPA 应用可能包含获取新内容和响应某种事件并更新 DOM 的功能，例如点击导航链接或从服务器推送更新。在我们的[基础视图过渡演示](https://mdn.github.io/dom-examples/view-transitions/)中，我们将其简化为一个 `displayNewImage()` 函数，该函数根据点击的缩略图显示新的全尺寸图像。我们将其封装在 `updateView()` 函数中，该函数仅在浏览器支持时才调用 View Transitions API：

```js
function updateView(event) {
  // 处理在 <a> 或 <img> 上触发事件的差异
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // 浏览器不支持 View Transitions 时的回退方案：
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // 开始一次视图过渡：
  const transition = document.startViewTransition(() => displayNewImage());
}
```

这段代码足以处理显示的图像之间的过渡。支持的浏览器将以平滑的交叉淡入淡出（默认的视图过渡）显示新旧图像和标题的变化。它仍可以在不支持的浏览器中工作，但没有漂亮的动画效果。

值得一提的是，`startViewTransition()` 返回一个 {{domxref("ViewTransition")}} 实例，该实例包含了多个 Promise, 允许你在到达视图过渡过程的不同阶段时运行代码。

### 视图过渡过程

让我们来看看这是如何工作的：

1. 当调用 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 时，API 会截取当前页面的屏幕截图。
2. 接下来，调用传递给 `startViewTransition()` 的回调函数，即 `displayNewImage`，这会导致 DOM 发生更改。

   当回调函数成功运行时，{{domxref("ViewTransition.updateCallbackDone")}} Promise 兑现，允许你响应 DOM 更新。

3. API 会捕获页面的新状态并实时展示。
4. API 构造了一个具有以下结构的伪元素树：

   ```plain
   ::view-transition
   └─ ::view-transition-group(root)
      └─ ::view-transition-image-pair(root)
         ├─ ::view-transition-old(root)
         └─ ::view-transition-new(root)
   ```

   - {{cssxref("::view-transition")}} 是视图过渡叠加层的根元素，它包含所有视图过渡且位于所有其他页面内容的顶部。
   - {{cssxref("::view-transition-old")}} 是旧页面视图的屏幕截图，且 {{cssxref("::view-transition-new")}} 是新页面视图的实时展示。这两者都呈现为替换内容，就像 {{htmlelement("img")}} 或 {{htmlelement("video")}} 那样，这意味着它们可以方便的使用属性进行样式设置，例如 {{cssxref("object-fit")}} 和 {{cssxref("object-position")}}。

   当过渡动画即将运行时，{{domxref("ViewTransition.ready")}} Promise 兑现，你可以响应它进行一些操作，例如运行自定义的 JavaScript 动画，而不是默认的动画。

5. 旧页面视图的 {{cssxref("opacity")}} 从 1 过渡到 0，而新视图从 0 过渡到 1，这就是默认的交叉淡入淡出效果。
6. 当过渡动画结束时，{{domxref("ViewTransition.finished")}} Promise 兑现，你可以响应它进行一些操作。

### 为不同的元素使用不同的过渡效果

目前，当 DOM 更新时发生变化的不同元素都使用相同的过渡动画。如果你想让不同的元素以不同于默认的“root”动画的方式进行过渡，你可以使用 {{cssxref("view-transition-name")}} 属性将它们分开。例如：

```css
figcaption {
  view-transition-name: figure-caption;
}
```

我们给 {{htmlelement("figcaption")}} 元素设置了值为 `figure-caption` 的 `view-transition-name`，以将其与页面上的其余部分分开，便于在视图过渡时进行分离。

应用此 CSS 后，伪元素树现在如下所示：

```plain
::view-transition
├─ ::view-transition-group(root)
│ └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
└─ ::view-transition-group(figure-caption)
  └─ ::view-transition-image-pair(figure-caption)
      ├─ ::view-transition-old(figure-caption)
      └─ ::view-transition-new(figure-caption)
```

第二组伪元素的存在允许将单独的视图过渡样式仅应用于 `<figcaption>`。不同的新旧页面视图之间捕获和处理是完全独立的。

`view-transition-name` 的值可以是除 `none` 之外的任何值——`none` 值表示该元素不参与视图过渡。

> **备注：** `view-transition-name` 必须是唯一的。如果两个渲染元素同时具有相同的 `view-transition-name`，{{domxref("ViewTransition.ready")}} 将拒绝并跳过过渡。

### 自定义动画

视图过渡伪元素具有默认的 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations)（在其[参考页面](#css_扩展)中详细介绍）。

值得注意的是，`height`、`width`、`position` 和 `transform` 的过渡不使用平滑的淡入淡出动画。相反，高度和宽度过渡使用平滑的缩放动画。同时，位置和变换过渡将使用平滑的移动动画。

你可以使用常规 CSS 以任何你想要的方式修改默认动画。

例如，你要调整动画速度：

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

让我们看些更有趣的东西——`<figcaption>` 的自定义动画：

```css
@keyframes grow-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes shrink-x {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: auto;
  right: 0;
  left: auto;
  transform-origin: right center;
}

::view-transition-old(figure-caption) {
  animation: 0.25s linear both shrink-x;
}

::view-transition-new(figure-caption) {
  animation: 0.25s 0.25s linear both grow-x;
}
```

在这里，我们创建了一个自定义 CSS 动画并将其应用到 `::view-transition-old(figure-caption)` 和 `::view-transition-new(figure-caption)` 伪元素上。我们还为两者添加了许多其他样式，以使它们保持在同一位置，并防止默认样式干扰我们的自定义动画。

请注意，我们还发现了另一种比上面更简单且产生更好结果的过渡选项。我们最终的 `<figcaption>` 视图过渡看起来像这样：

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-old(figure-caption),
::view-transition-new(figure-caption) {
  height: 100%;
}
```

这是有效的，因为默认情况下，`::view-transition-group` 在新旧视图之间过渡高度和宽度。我们只需要在两个状态上设置固定的高度，就可以使其正常工作。

> **备注：** [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)包含了其他几个自定义示例。

### 使用 JavaScript 控制动画

{{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 方法返回一个 {{domxref("ViewTransition")}} 对象实例，实例中包含多个 Promise 成员，允许你在到达不同状态的过渡时运行 JavaScript。例如，{{domxref("ViewTransition.ready")}} 在伪元素树创建并且动画即将开始时兑现，而 {{domxref("ViewTransition.finished")}} 在动画结束后兑现，此时新页面视图对用户可见且可交互。

例如，下面的 JavaScript 可以用于创建从用户单击位置开始的圆形揭示视图过渡，动画由 {{domxref("Web Animations API", "Web Animations API", "", "nocode")}} 提供。

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

## 接口

- {{domxref("ViewTransition")}}
  - : 表示视图过渡，并提供了在过渡到达不同状态时运行代码的功能（例如，准备运行动画或动画完成），或跳过视图过渡。

## 其他接口扩展

- {{domxref("Document.startViewTransition()")}}
  - : 开始新的视图过渡并返回一个 {{domxref("ViewTransition")}} 对象来表示它。

## CSS 扩展

### 属性

- {{cssxref("view-transition-name")}}
  - : 为选定的元素提供单独的标识名称，并使其参与与根视图过渡不同的单独视图过渡——或者如果指定了 `none` 值，则不参与视图过渡。

### 伪元素

- {{cssxref("::view-transition")}}
  - : 视图过渡叠加层的根元素，它包含所有视图过渡且位于所有其他页面内容的顶部。
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : 单个视图过渡的根元素。
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : 视图过渡的旧视图和新视图的容器——过渡前和过渡后。
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : 转换前的旧视图的静态屏幕截图。
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : 转换后的新视图的实时表示。

## 示例

- [基础视图过渡演示](https://mdn.github.io/dom-examples/view-transitions/)：一个基本的图像库演示，其中包含新旧图像之间的单独过渡，以及新旧标题之间的单独过渡。
- [HTTP 203 播放列表](https://http203-playlist.netlify.app/)：一个更复杂的视频播放器演示应用程序，包含了许多不同的视图过渡，在[使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)中解释了其中的很多视图过渡。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 View Transitions API 实现平滑、简单的过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
- [View Transitions API：创建平滑的页面过渡](https://stackdiary.com/view-transitions-api/)
