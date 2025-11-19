---
title: 使用视图过渡 API
slug: Web/API/View_Transition_API/Using
l10n:
  sourceCommit: daa0f08c15e7626dd089a011b310a94db99dbfc1
---

{{DefaultAPISidebar("View Transition API")}}

本文介绍了[视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API) 的工作原理，如何创建视图过渡，如何自定义过渡动画，以及如何操作活动状态的视图过渡。这涵盖了单页应用程序（SPA）中 DOM 状态更新的视图过渡，以及在多页应用程序（MPA）中的文档之间的导航。

## 视图过渡过程

让我们来了解一下视图过渡的工作原理：

1. 视图过渡被触发。它如何执行取决于视图过渡的类型：
   - 对于同文档（SPA）过渡，通过将触发视图更改 DOM 更新的函数作为回调函数参数传递给 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 方法来触发视图过渡。
   - 对于跨文档（MPA）过渡，视图过渡是通过启动到新文档的导航来触发的。导航的当前文档和目标文档需要同源，并通过在其 CSS 中包含 {{cssxref("@view-transition")}} at 规则，并将 `navigation` 描述符设置为 `auto`，来选择添加视图过渡。
     > [!NOTE]
     > 活动的视图过渡具有关联的 {{domxref("ViewTransition")}} 实例（例如，在同文档（SPA）过渡的情况下，由 `startViewTransition()` 返回）。`ViewTransition` 对象包含多个 Promise，允许你运行代码以响应到达视图过渡过程的不同部分。有关更多信息，请参阅[使用 JavaScript 控制视图过渡](#使用_JavaScript_控制视图过渡)。
2. 在当前（旧页面）视图上，API 捕获声明了 {{cssxref("view-transition-name")}} 的元素的快照。
3. 视图更改发生：
   - 对于同文档（SPA）过渡，将调用传递给 `startViewTransition()` 的回调，这会导致 DOM 发生更改。

     当回调成功运行时，{{domxref("ViewTransition.updateCallbackDone")}} promise 将兑现，允许你响应 DOM 更新。

   - 在跨文档（MPA）过渡的情况下，导航发生在当前文档和目标文档之间。

4. API 将新视图中的快照捕获为实时表示的形式。

   此时，视图过渡即将运行，并且 {{domxref("ViewTransition.ready")}} Promise 兑现。例如，允许你通过运行自定义 JavaScript 动画而不是默认动画来响应。

5. 旧页面快照以“淡出”动画形式显示，而新视图快照以“淡入”形式呈现动画效果。默认情况下，旧视图快照的动画效果是 {{cssxref("opacity")}} 属性值从 1 到 0，而新视图快照的动画效果是 `opacity` 属性值从 0 到 1，这会创建一个交叉淡化。
6. 当过渡动画达到其结束状态时，{{domxref("ViewTransition.finished")}} Promise 兑现，从而允许你做出响应。

> [!NOTE]
> 如果在 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 调用期间，文档的[页面可见性状态](/zh-CN/docs/Web/API/Page_Visibility_API)处于 `hidden` 状态（例如，如果文档被窗口遮挡、浏览器最小化或另一个浏览器选项卡处于活动状态），则会完全跳过视图过渡。

### 视图过渡伪元素树

为了处理传出和传入过渡动画的创建，此 API 构造了一个具有以下结构的伪元素树：

```plain
::view-transition
└─ ::view-transition-group(root)
  └─ ::view-transition-image-pair(root)
      ├─ ::view-transition-old(root)
      └─ ::view-transition-new(root)
```

> [!NOTE]
> 每个被捕获的 `view-transition-name` 都会创建一个 {{cssxref("::view-transition-group")}} 子树。

对于同文档（SPA）过渡，伪元素树在当前文档中可用。对于跨文档过渡（MPA），伪元素树仅在目标文档中可用。

树结构中最有趣的部分如下：

- {{cssxref("::view-transition")}} 是视图过渡遮罩层的根伪元素，它包含所有视图过渡快照组，并位于所有其他页面内容的顶部。
- {{cssxref("::view-transition-group")}} 充当每个视图过渡快照组的容器。`root` 参数指定默认快照组——视图转换动画将应用于 `view-transition-name` 为 `root` 的快照。默认情况下，它是 {{cssxref(":root")}} 元素，因为默认的浏览器样式定义了这个：

  ```css
  :root {
    view-transition-name: root;
  }
  ```

  但请注意，网页的作者可以通过取消设置上述内容并在其他元素上设置 `view-transition-name: root` 来更改此设置。

- {{cssxref("::view-transition-old")}} 指向旧的页面元素的静态快照，而 {{cssxref("::view-transition-new")}} 指向新的页面元素的实时快照。这两个选项都以与 {{htmlelement("img")}} 或 {{htmlelement("video")}} 相同的方式呈现为替换内容，这意味着它们可以使用方便的属性来设置样式，如 {{cssxref("object-fit")}} 和 {{cssxref("object-position")}}。

> [!NOTE]
> 可以通过在每个元素上设置不同的 {{cssxref("view-transition-name")}} 来使用不同的自定义视图过渡动画指向不同的 DOM 元素。在这种情况下，会为每个元素创建一个 `::view-transition-group`。有关示例，请参见[不同元素的不同动画](#不同元素的不同动画)。

> [!NOTE]
> 正如你稍后将看到的，要自定义传出和传入动画，你需要将动画分别指向 {{cssxref("::view-transition-old")}} 和 {{cssxref("::view-transition-new")}} 伪元素。

## 创建基本视图过渡

本节说明如何在 SPA 和 MPA 情况下创建基本视图过渡。

### 基本 SPA 视图过渡

例如，SPA 可能包含获取新内容和更新 DOM 以响应某种事件的功能，例如单击导航链接或从服务器推送更新。在我们的[视图过渡 SPA 演示](https://mdn.github.io/dom-examples/view-transitions/spa/)中，我们已将其简化为 `displayNewImage()` 函数，该函数根据单击的缩略图显示新的全尺寸图像。我们将其封装在一个 `updateView()` 函数中，该函数仅在浏览器支持时调用视图过渡 API：

```js
function updateView(event) {
  // 处理事件是在 <a> 还是 <img> 上触发的差异
  const targetIdentifier = event.target.firstChild || event.target;

  const displayNewImage = () => {
    const mainSrc = `${targetIdentifier.src.split("_th.jpg")[0]}.jpg`;
    galleryImg.src = mainSrc;
    galleryCaption.textContent = targetIdentifier.alt;
  };

  // 不支持视图过渡的浏览器的回退：
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }

  // 使用视图过渡：
  const transition = document.startViewTransition(() => displayNewImage());
}
```

此代码足以处理显示图像之间的过渡。支持的浏览器会将从旧图像和标题到新图像和标题的更改显示为平滑的交叉淡化（即默认视图过渡）。它仍然可以在不支持的浏览器中工作，但没有漂亮的动画。

### 基本 MPA 视图过渡

创建跨文档（MPA）视图过渡时，该过程甚至比 SPA 更简单。因为视图更新是由跨文档、同源导航触发的，而不是由 JavaScript 引发的 DOM 更改触发的，所以不需要 JavaScript。要启用基本的 MPA 视图过渡，你需要在 CSS 中为当前文档和目标文档指定 {{cssxref("@view-transition")}} at 规则以选择启用，如下所示：

```css
@view-transition {
  navigation: auto;
}
```

我们的[视图过渡 MPA 演示](https://mdn.github.io/dom-examples/view-transitions/mpa/)展示了这个规则的实际应用，并还演示了如何[自定义传出和传入动画](#自定义动画)的视图过渡。

> [!NOTE]
> 目前，只能在同源文档之间创建 MPA 视图过渡，但在将来的实施中可能会放宽此限制。

## 自定义动画

视图过渡伪元素应用了默认的 [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)（详见其[参考页面](/zh-CN/docs/Web/API/View_Transition_API#伪元素)）。

如上所述，大多数外观过渡都带有默认的平滑交叉淡化动画。有一些例外情况：

- `height` 和 `width` 过渡应用了平滑的缩放动画。
- `position` 和 `transform` 过渡应用了平滑的移动动画。

你可以使用常规 CSS 以任何你想要的方式修改默认动画——使用 {{cssxref("::view-transition-old")}} 定位“来源”动画，使用 {{cssxref("::view-transition-new")}} 定位“目标”动画。

例如，要更改两者的速度：

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}
```

建议你将这样的样式定位到 `::view-transition-group()`，以将它们应用于 `::view-transition-old()` 和 `::view-transition-new()`。由于伪元素层次结构和默认用户代理样式，样式将被两者继承。例如：

```css
::view-transition-group(root) {
  animation-duration: 0.5s;
}
```

> [!NOTE]
> 这也是保护代码的好选择——`::view-transition-group()` 也可以动画化，并且 `group`/`image-pair` 伪元素与 `old` 和 `new` 伪元素的持续时间可能会有所不同。

在跨文档（MPA）过渡的情况下，伪元素需要包含在目标文档中，视图过渡才能正常工作。如果你想在两个方向上使用视图过渡，你当然需要在两个方向上都包含它。

我们的[视图过渡 MPA 演示](https://mdn.github.io/dom-examples/view-transitions/mpa/)包括上述 CSS，但更进一步，定义了自定义动画并将它们应用于 `::view-transition-old(root)` 和 `::view-transition-new(root)` 伪元素。结果是，在进行导航时，默认的交叉淡化过渡被替换成了“向上滑动”过渡：

```css
/* 创建自定义动画 */

@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* 将自定义动画应用于新旧页面状态 */

::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

## 不同元素的不同动画

默认情况下，在视图更新期间更改的所有不同元素都使用相同的动画进行过渡。如果你希望某些元素的动画效果与默认的 `root` 动画不同，你可以使用 {{cssxref("view-transition-name")}} 属性将它们分开。例如，在我们的[视图过渡 SPA 演示](https://mdn.github.io/dom-examples/view-transitions/spa/)中，{{htmlelement("figcaption")}} 元素被赋予了 `figure-caption` 的 `view-transition-name`，以便在视图过渡方面将它们与页面的其余部分分开：

```css
figcaption {
  view-transition-name: figure-caption;
}
```

应用此 CSS 后，生成的伪元素树现在将如下所示：

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

第二组伪元素的存在允许将单独的视图过渡样式仅应用于 `<figcaption>` 元素。不同的旧视图捕获和新视图捕获彼此分开处理。

> [!NOTE]
> `view-transition-name` 的值可以是你想要的任何值，除了 `none` 以外——`none` 值明确表示元素不会参与视图过渡。
>
> `view-transition-name` 值也必须是唯一的。如果两个渲染的元素同时具有相同的 `view-transition-name`，{{domxref("ViewTransition.ready")}} 将拒绝并跳过过渡。

以下代码仅将自定义动画应用于 `<figcaption>`：

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

::view-transition-group(figure-caption) {
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

在这里，我们创建了一个自定义的 CSS 动画，并将其应用于 `::view-transition-old(figure-caption)` 和 `::view-transition-new(figure-caption)` 伪元素。我们还为这两个样式添加了许多其他样式，以将它们保持在同一个位置，并防止默认样式干扰我们的自定义动画。

> [!NOTE]
> 你可以使用 `*` 作为伪元素中的标识符，以定位所有快照伪元素，无论它们的名称如何。例如：
>
> ```css
> ::view-transition-group(*) {
>   animation-duration: 2s;
> }
> ```

### 使用默认动画样式

请注意，我们还发现了另一个过渡选项，它比上述选项更简单，并且产生了更好的结果。我们最终的 `<figcaption>` 视图过渡最终看起来像这样：

```css
figcaption {
  view-transition-name: figure-caption;
}

::view-transition-group(figure-caption) {
  height: 100%;
}
```

这之所以有效，是因为默认情况下，`::view-transition-group` 以平滑的比例在新旧视图之间转换 `width` 和 `height`。我们只需要在这两个状态上设置一个固定的 `height` 来使其正常工作。

> [!NOTE]
> [使用视图过渡 API 实现平滑过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)包含其他几个自定义示例。

## 使用 JavaScript 控制视图过渡

视图过渡有一个关联的 {{domxref("ViewTransition")}} 对象实例，该实例包含多个 promise 成员，允许你运行 JavaScript 以响应所达到的过渡的不同状态。例如，{{domxref("ViewTransition.ready")}} 在创建伪元素树且动画即将开始时兑现，而 {{domxref("ViewTransition.finished")}} 在动画完成后兑现，并且新的页面视图对用户可见且具有交互性。

可以像这样访问 `ViewTransition`：

1. 对于同文档（SPA）过渡，{{domxref("Document.startViewTransition()", "document.startViewTransition()")}} 方法返回与过渡关联的 `ViewTransition` 对象。
2. 对于跨文档（MPA）过渡：
   - 当文档由于导航而即将卸载时，将触发 {{domxref("Window.pageswap_event", "pageswap")}} 事件。其事件对象（{{domxref("PageSwapEvent")}}）通过 {{domxref("PageSwapEvent.viewTransition")}} 属性提供对 `ViewTransition` 对象的访问，以及通过 {{domxref("PageSwapEvent.activation")}} 提供对 {{domxref("NavigationActivation")}} 的访问，其中包含导航类型以及当前和目标文档的历史记录条目。
     > [!NOTE]
     > 如果导航在重定向链中的任意位置具有跨源 URL，则 `activation` 属性返回 `null`。
   - 首次渲染文档时，会触发 {{domxref("Window.pagereveal_event", "pagereveal")}} 事件，无论是从网络加载新文档还是激活文档（从[后退/前进缓存](/zh-CN/docs/Glossary/bfcache)（bfcache）或[预渲染](/zh-CN/docs/Glossary/Prerender)））。其事件对象（{{domxref("PageRevealEvent")}}）通过 {{domxref("PageRevealEvent.viewTransition")}} 属性提供对 `ViewTransition` 对象的访问。

让我们看一些示例代码来展示如何使用这些功能。

### 由 JavaScript 提供支持的自定义同文档（SPA）过渡

以下 JavaScript 可用于创建从用户光标位置发出的循环显示的视图过渡，动画由 {{domxref("Web Animations API", "Web 动画 API", "", "nocode")}} 提供。

```js
// 存储最后的点击事件的事件对象
let lastClick;
addEventListener("click", (event) => (lastClick = event));

function spaNavigate(data) {
  // 对于不支持此 API 的浏览器，执行回退操作：
  if (!document.startViewTransition) {
    updateTheDOMSomehow(data);
    return;
  }

  // 获取点击位置，或回退到屏幕中间
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // 获取到最远的角落的距离
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // 创建过渡：
  const transition = document.startViewTransition(() => {
    updateTheDOMSomehow(data);
  });

  // 等待伪元素被创建：
  transition.ready.then(() => {
    // 为根的新视图添加动画效果
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
        // 指定要进行动画处理的伪元素
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
```

此动画还需要以下 CSS 来关闭默认的 CSS 动画并阻止新旧视图状态以任何方式混合（新状态会在旧状态的顶部“擦除”，而不是过渡）：

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

### 由 JavaScript 提供支持的自定义跨文档（MPA）过渡

[Chrome DevRel 团队成员列表](https://view-transitions.chrome.dev/profiles/mpa/)演示提供了一组基本的团队配置文件页面，并演示了如何使用 {{domxref("Window.pageswap_event", "pageswap")}} 和 {{domxref("Window.pagereveal_event", "pagereveal")}} 事件来自定义基于“来源”和“目标”URL 的跨文档视图过渡的传出和传入动画。

{{domxref("Window.pageswap_event", "pageswap")}} 事件侦听器如下所示。这将在出站页面上链接到用户档案页面的元素上设置视图过渡名称。从主页导航到配置文件页面时，*仅*为在每种情况下单击的链接元素提供自定义动画。

```js
window.addEventListener("pageswap", async (e) => {
  // 仅当存在活动的视图过渡时，才运行此命令
  if (e.viewTransition) {
    const currentUrl = e.activation.from?.url
      ? new URL(e.activation.from.url)
      : null;
    const targetUrl = new URL(e.activation.entry.url);

    // 从个人资料页面转到主页~>大图像和标题就是其中之一！
    if (isProfilePage(currentUrl) && isHomePage(targetUrl)) {
      // 在要进行动画处理的元素上设置 view-transition-name 值
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // 在拍摄快照后删除 view-transition-name，以停止因 BFCache 中持续存在的页面状态而导致的命名冲突
      await e.viewTransition.finished;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }

    // 进入个人资料页面~>点击的项目就是那些！
    if (isProfilePage(targetUrl)) {
      const profile = extractProfileNameFromUrl(targetUrl);

      // 在要进行动画处理的元素上设置 view-transition-name 值
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // 在拍摄快照后删除 view-transition-name，从而停止因 BFCache 中持续存在的页面状态而导致的命名冲突
      await e.viewTransition.finished;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }
  }
});
```

> [!NOTE]
> 在每种情况下，我们在拍摄快照后删除 `view-transition-name` 值。如果我们设置它们，它们将在导航时保留在 [bfcache](/zh-CN/docs/Glossary/bfcache) 中保存的页面状态中。如果随后按下后退按钮，则被导航回的页面的 `pagereveal` 事件处理器将尝试在不同的元素上设置相同的 `view-transition-name` 值。如果多个元素设置了相同的 `view-transition-name` ，则跳过视图过渡。

{{domxref("Window.pagereveal_event", "pagereveal")}} 事件侦听器如下所示。这与 `pageswap` 事件侦听器的工作方式类似，但请记住，这里我们为新页面上的页面元素自定义“目标”动画。

```js
window.addEventListener("pagereveal", async (e) => {
  // 如果“来源”历史记录条目不存在，则返回
  if (!navigation.activation.from) return;

  // 仅当存在活动的视图过渡时，才运行此命令
  if (e.viewTransition) {
    const fromUrl = new URL(navigation.activation.from.url);
    const currentUrl = new URL(navigation.activation.entry.url);

    // 从个人资料页面转到主页~>在相关列表项上设置 VT 名称
    if (isProfilePage(fromUrl) && isHomePage(currentUrl)) {
      const profile = extractProfileNameFromUrl(fromUrl);

      // 在要进行动画处理的元素上设置 view-transition-name 值
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "name";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "avatar";

      // 在拍摄快照后删除名称，以便我们为下一次导航做好准备
      await e.viewTransition.ready;
      document.querySelector(`#${profile} span`).style.viewTransitionName =
        "none";
      document.querySelector(`#${profile} img`).style.viewTransitionName =
        "none";
    }

    // 转到个人资料页面~>在主标题和图像上设置 VT 名称
    if (isProfilePage(currentUrl)) {
      // 在要进行动画处理的元素上设置 view-transition-name 值
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "name";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "avatar";

      // 在拍摄快照后删除名称，以便我们为下一次导航做好准备
      await e.viewTransition.ready;
      document.querySelector(`#detail main h1`).style.viewTransitionName =
        "none";
      document.querySelector(`#detail main img`).style.viewTransitionName =
        "none";
    }
  }
});
```

## 稳定页面状态以使跨文档过渡效果一致

在运行跨文档过渡之前，你最好等到页面状态稳定下来，依靠[渲染阻塞](/zh-CN/docs/Glossary/Render_blocking)来确保：

1. 加载并应用关键样式。
2. 加载并运行关键脚本。
3. 对用户页面的初始视图可见的 HTML 已解析，因此它可以一致地呈现。

默认情况下，样式是被渲染阻塞的，并且脚本可以通过使用 [`blocking="render"`](/zh-CN/docs/Web/HTML/Reference/Elements/script#blocking) 属性来被渲染阻塞。

要确保初始 HTML 已解析并在过渡动画运行之前始终一致地呈现，你可以使用 [`<link rel="expect">`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel#expect)。在此元素中，你将包括以下属性：

- `rel="expect"` 表示你想用这个 `<link>` 元素在页面上渲染一些 HTML。
- `href="#element-id"` 来表示你想要渲染的块的元素的 ID。
- `blocking="render"` 来使指定的 HTML 实现渲染阻塞。

让我们通过一个示例 HTML 文档来探讨一下它是什么样子的：

```html-nolint
<!doctype html>
<html lang="en">
  <head>
    <!-- 默认情况下，这将会是渲染阻塞的 -->
    <link rel="stylesheet" href="style.css" />

    <!-- 将关键脚本标记为渲染阻塞将确保它们在激活视图过渡之前运行 -->
    <script async href="layout.js" blocking="render"></script>

    <!-- 使用 rel="expect" 和 blocking="render" 确保在激活过渡之前，#lead-content 元素可见并被完全解析 -->
    <link rel="expect" href="#lead-content" blocking="render" />
  </head>
  <body>
    <h1>页面标题</h1>
    <nav>...</nav>
    <div id="lead-content">
      <section id="first-section">第一部分</section>
      <section>第二部分</section>
    </div>
  </body>
</html>
```

结果是，在解析潜在内容 `<div>` 之前，文档渲染会被阻止，从而确保视图过渡的一致性。

你还可以在 `<link rel="expect">` 元素上指定 [`media`](/zh-CN/docs/Web/HTML/Reference/Elements/link#media) 属性。例如，在窄屏幕设备上加载页面时，你可能希望阻止在比在宽屏设备上加载页面时少的内容上呈现。这是有道理的——在移动设备上，页面首次加载时可见的内容比在桌面上要少。

这可以通过以下 HTML 来实现：

```html
<link
  rel="expect"
  href="#lead-content"
  blocking="render"
  media="screen and (min-width: 641px)" />
<link
  rel="expect"
  href="#first-section"
  blocking="render"
  media="screen and (max-width: 640px)" />
```
