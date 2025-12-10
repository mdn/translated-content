---
title: Window：open() 方法
slug: Web/API/Window/open
---

{{APIRef}}

[`Window`](/zh-CN/docs/Web/API/Window) 接口的 **`open()`** 方法，是用指定的名称将指定的资源加载到新的或已存在的浏览上下文（标签、窗口或 [iframe](/zh-CN/docs/Web/HTML/Reference/Elements/iframe)）中。

## 语法

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### 参数

- `url` {{optional_inline}}
  - : 一个字符串，表示要加载的资源的 URL 或路径。如果指定空字符串（`""`）或省略此参数，则会在目标浏览上下文中打开一个空白页。

- `target` {{optional_inline}}
  - : 一个不含空格的字符串，用于指定加载资源的浏览上下文的[名称](/zh-CN/docs/Web/API/Window/name)。如果该名称无法识别现有的上下文，则会创建一个新的上下文，并赋予指定的名称。还可以使用特殊的 [`target` 关键字](/zh-CN/docs/Web/HTML/Reference/Elements/a#target)：`_self`、`_blank`、`_parent` 和 `_top`。

    该名称可用作 [`<a>`](/zh-CN/docs/Web/HTML/Reference/Elements/a#target) 或 [`<form>`](/zh-CN/docs/Web/HTML/Reference/Elements/form#target) 元素的 `target` 属性。

- `windowFeatures` {{optional_inline}}
  - : 一个字符串，包含以逗号分隔的窗口特性列表，形式为 `name=value`，布尔特性则仅为 `name`。这些特性包括窗口的默认大小和位置、是否打开最小弹出窗口等选项。支持以下选项：
    - `popup`
      - : 如果启用此特性，则要求使用最小弹出窗口。弹出窗口中包含的用户界面功能将由浏览器自动决定，一般只包括地址栏。

        如果未启用 `popup`，也没有声明窗口特性，则新的浏览上下文将是一个标签页。

        > [!NOTE]
        > 在 `windowFeatures` 参数中指定除 `noopener` 或 `noreferrer` 以外的任何特性，也会产生请求弹出窗口的效果。

        要启用该特性，可以不指定 `popup` 值，或将其设置为 `yes`、`1` 或 `true`。

        例如：`popup=yes`、`popup=1`、`popup=true` 和`popup` 的结果完全相同。

    - `width` 或 `innerWidth`
      - : 指定内容区域（包括滚动条）的宽度。最小要求值为 100。

    - `height` 或 `innerHeight`
      - : 指定内容区域（包括滚动条）的高度。最小要求值为 100。

    - `left` 或 `screenX`
      - : 指定从用户操作系统定义的工作区左侧到新窗口生成位置的距离（以像素为单位）。

    - `top` 或 `screenY`
      - : 指定从用户操作系统定义的工作区顶部到新窗口生成位置的距离（以像素为单位）。

    - `noopener`
      - : 如果设置了此特性，新窗口将无法通过 [`Window.opener`](/zh-CN/docs/Web/API/Window/opener) 访问原窗口，并返回 `null`。

        使用 `noopener` 时，在决定是否打开新的浏览上下文时，除 `_top`、`_self` 和 `_parent` 以外的非空目标名称会像 `_blank` 一样处理。

    - `noreferrer`
      - : 如果设置了此特性，浏览器将省略 [`Referer`](/zh-CN/docs/Web/HTTP/Reference/Headers/Referer) 标头，并将 `noopener` 设为 true。更多信息请参阅 [`rel="noreferrer"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/noreferrer) 。

> [!NOTE]
> `windowFeatures` 中要求的位置（`top`、`left`）和尺寸（`width`、`height`）值，如果其中任何一个值不允许在用户操作系统应用程序的工作区内呈现整个浏览器弹出窗口，**则将被更正**。换句话说，新弹出窗口的任何部分最初都不能置于屏幕之外。

### 返回值

一个 [`WindowProxy`](/zh-CN/docs/Glossary/WindowProxy) 对象。只要符合[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)安全要求，返回的引用就可用于访问新窗口的属性和方法。

## 描述

[`Window`](/zh-CN/docs/Web/API/Window) 接口的 `open()` 方法将 URL 作为参数，并将其识别的资源加载到新的或现有的标签页或窗口中。`target` 参数决定将资源加载到哪个窗口或标签页，`windowFeatures` 参数可用于控制打开一个具有最少用户界面功能的新弹出窗口，并控制其大小和位置。

请注意，远程 URL 不会立即加载。当 `window.open()` 返回时，窗口总是包含 `about:blank`。URL 的实际获取是延迟进行的，并在当前脚本块执行完毕后开始。窗口创建和引用资源的加载是异步进行的。

## 示例

### 打开一个新标签页

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### 打开一个弹出窗口

另外，下面的示例演示了如何使用 `popup` 特性打开弹出窗口。

> [!WARNING]
> 现代浏览器已内置弹出窗口阻止程序，将弹出窗口的打开限制在直接响应用户输入的情况下。在点击之外打开的弹出窗口可能会显示通知，让用户选择启用或放弃。

```js
window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
```

可以控制新弹出窗口的大小和位置：

```js
const windowFeatures = "left=100,top=100,width=320,height=320";
const handle = window.open(
  "https://www.mozilla.org/",
  "mozillaWindow",
  windowFeatures,
);
if (!handle) {
  // 不允许打开此窗口
  // 可能被内置弹窗阻止程序阻止了
  // …
}
```

## 渐进增强

在某些情况下，JavaScript 被禁用或不可用，`window.open()` 将无法工作。我们可以提供替代解决方案，使网站或应用程序仍能正常运行，而不是完全依赖于该特性的存在。

### 在禁用 JavaScript 时提供替代方法

如果 JavaScript 支持被禁用或不存在，那么用户代理将相应地创建一个辅助窗口，或根据其对 `target` 属性的处理方式来渲染所引用的资源。我们的目标和想法是向用户提供（而不是*强迫*）一种打开引用资源的方式。

#### HTML

```html
<a href="https://www.wikipedia.org/" target="OpenWikipediaWindow">
  维基百科，自由的百科全书（在其他可能存在的标签页中打开）
</a>
```

#### JavaScript

```js
let windowObjectReference = null; // 全局变量
function openRequestedTab(url, windowName) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName);
  } else {
    windowObjectReference.focus();
  }
}

const link = document.querySelector("a[target='OpenWikipediaWindow']");
link.addEventListener(
  "click",
  (event) => {
    openRequestedTab(link.href);
    event.preventDefault();
  },
  false,
);
```

上述代码解决了一些与链接打开弹出窗口有关的可用性问题。代码中的 `event.preventDefault()` 的目的是取消链接的默认操作：如果执行了 `click` 的事件监听器，则无需执行链接的默认操作。但如果用户的浏览器禁用或不支持 JavaScript，则会忽略 `click` 的事件监听器，浏览器会在名称为 `"WikipediaWindowName"` 的目标框架或窗口中加载引用的资源。如果没有名称为 `"WikipediaWindowName"` 的框架或窗口，浏览器将创建一个新窗口并将其命名为 `"WikipediaWindowName"`。

> [!NOTE]
> 有关 `target` 属性的更多细节，请参阅 [`<a>`](/zh-CN/docs/Web/HTML/Reference/Elements/a#target) 或 [`<form>`](/zh-CN/docs/Web/HTML/Reference/Elements/form#target)。

### 复用已有窗口，避免 `target="_blank"`

使用 `"_blank"` 作为 target 属性值会在用户桌面上创建多个新的无名窗口，这些窗口无法循环使用或重复使用。请尝试为 `target` 属性提供一个有意义的名称，并在页面上重复使用这样的 `target` 属性，这样点击另一个链接就可以在一个已经创建和渲染的窗口中加载引用的资源（因此可以加快用户的操作速度），从而证明首先创建一个辅助窗口是合理的（以及用户系统资源和时间的消耗）。在链接中使用单个 `target` 属性值并重复使用该属性值对用户资源更为友好，因为它只创建一个二级窗口，并可循环使用。

下面是一个可以打开二级窗口并重复用于其他链接的示例：

#### HTML

```html
<p>
  <a href="https://www.wikipedia.org/" target="SingleSecondaryWindowName">
    维基百科，自由的百科全书（在其他可能存在的标签页中打开）
  </a>
</p>
<p>
  <a
    href="https://support.mozilla.org/products/firefox"
    target="SingleSecondaryWindowName">
    Firefox 疑难解答（在其他可能存在的标签页中打开）
  </a>
</p>
```

#### JavaScript

```js
let windowObjectReference = null; // 全局变量
let previousURL; /* 全局变量，用于存储当前二级窗口中的网址 */
function openRequestedSingleTab(url) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
  } else if (previousURL !== url) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
    /* 如果要加载的资源是不同的，则我们会将其加载到已打开的辅助窗口中，然后将该窗口拉回到其父窗口的顶部或前面。*/
    windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  }
  previousURL = url;
  /* 解释：我们存储当前的 url，以便在再次调用此函数时对 url
     进行比较。 */
}

const links = document.querySelectorAll(
  "a[target='SingleSecondaryWindowName']",
);
for (const link of links) {
  link.addEventListener(
    "click",
    (event) => {
      openRequestedSingleTab(link.href);
      event.preventDefault();
    },
    false,
  );
}
```

## 同源策略

如果新打开的浏览上下文不共享相同的[源](/zh-CN/docs/Glossary/Origin)，则打开脚本将无法与浏览上下文的内容进行交互（读取或写入）。

```js example-bad
// 来自 example.com 的脚本
const otherOriginContext = window.open("https://example.org");
// example.com 和 example.org 是非同源的

console.log(otherOriginContext.origin);
// DOMException: Permission denied to access property "origin" on cross-origin object
```

```js example-good
// 来自 example.com 的脚本
const sameOriginContext = window.open("https://example.com");
// 此时，新的浏览上下文是同源的

console.log(sameOriginContext.origin);
// https://example.com
```

如需了解更多信息，请参阅[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)一文。

## 无障碍

### 避免使用 window.open()

出于多种原因，最好不要使用 `window.open()`：

- 现代浏览器提供弹出窗口阻止功能。
- 现代浏览器提供选项卡浏览功能，而支持选项卡功能的浏览器用户在大多数情况下更喜欢打开新选项卡，而不是打开新窗口。
- 用户可以使用浏览器的内置功能或扩展功能来选择在新窗口、同一窗口、新标签页、同一标签页或后台打开链接。使用 `window.open()` 强制以特定方式打开链接会使用户感到困惑，并忽略他们的习惯。
- 弹出窗口没有菜单工具栏，而新标签页使用浏览器窗口的用户界面；因此，许多用户更喜欢标签页浏览，因为界面保持稳定。

### 避免在 HTML 代码中内联使用 window.open()

避免 `<a href="#" onclick="window.open(…);">` 或 `<a href="javascript:window\.open(…)" …>`。

当复制/拖动链接、在新标签/窗口中打开链接、添加书签时，或者当 JavaScript 正在加载、出错或禁用时，这些虚假的 `href` 值会导致意外的行为。它们还会向屏幕阅读器等辅助技术传达不正确的语义。

如有必要，请使用 [`<button>`](/zh-CN/docs/Web/HTML/Reference/Elements/button) 元素代替。一般来说，_只应使用链接导航到真正的 URL_。

### 始终指明指向二级窗口的链接

指明可打开新窗口的链接，以帮助用户导航。

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  维基百科（在新标签页打开）
</a>
```

这样做的目的是在上下文发生变化时向用户发出警告，以尽量减少用户的困惑：改变当前窗口或弹出新的窗口会让用户感到非常迷惑（在弹出窗口的情况下，没有工具栏提供返回上一个窗口的“上一页”按钮）。

如果在上下文发生极端变化之前就明确指出，那么用户就可以决定是否要继续使用，或者为这种变化做好准备：他们不仅不会感到困惑或迷失方向，而且更有经验的用户还可以更好地决定如何打开这些链接（是否在新窗口、是否在同一窗口、是否在新标签页、是否“在后台”）。

- [WebAIM：链接与超文本——超文本链接](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / 理解 WCAG，指南 3.2](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200：只在必要时从链接打开新窗口和标签页](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201：打开新窗口时，给用户额外提示](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- `target` 属性文档：
  - [`<a>`](/zh-CN/docs/Web/HTML/Reference/Elements/a#target)
  - [`<form>`](/zh-CN/docs/Web/HTML/Reference/Elements/form#target)
- [`window.close()`](/zh-CN/docs/Web/API/Window/close)
- [`window.closed`](/zh-CN/docs/Web/API/Window/closed)
- [`window.focus()`](/zh-CN/docs/Web/API/Window/focus)
- [`window.opener`](/zh-CN/docs/Web/API/Window/opener)
- [`rel="opener"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel#opener) 和 [`rel="noopener"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel#noopener)
- [同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)
