---
title: Element：requestFullscreen() 方法
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Fullscreen API")}}

**`Element.requestFullscreen()`** 方法用于发出异步请求使元素进入全屏模式。

调用此方法并不能保证元素一定能够进入全屏模式。如果元素被允许进入全屏幕模式，返回的 {{JSxRef("Promise")}} 会兑现，并且该元素会收到一个 {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} 事件，通知它已经进入全屏模式。如果全屏请求被拒绝，返回的 promise 会被拒绝并且该元素会收到一个 {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} 事件。如果该元素已经从原来的文档中分离，那么该文档将会收到这些事件。

## 语法

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### 参数

- `options` {{optional_inline}}
  - : 控制全屏模式转换行为的对象。可用选项包括：
    - `navigationUI` {{optional_inline}}
      - : 控制元素处于全屏模式时是否显示导航 UI。默认值为 `"auto"`，表示浏览器应该决定要做什么。
        - `"hide"`
          - : 浏览器的导航界面将被隐藏，并且整个屏幕尺寸将分配给显示元素。
        - `"show"`
          - : 浏览器将显示页面导航控件和可能的其他用户界面；元素的尺寸（以及感知的屏幕尺寸）将被限制以便为该用户界面留出空间。
        - `"auto"`
          - : 浏览器将选择应用上述哪种设置。这是默认值。
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : 指定要在哪个屏幕上将元素置于全屏模式。这需要代表所选屏幕的 {{domxref("ScreenDetailed")}} 对象作为值。

### 返回值

一个 {{JSxRef("Promise")}}，当全屏模式完成时，兑现 `undefined`。

### 异常

_`requestFullscreen()` 通过拒绝返回的 `Promise`来生成错误条件，而不是抛出一个传统的异常。拒绝处理器接收以下的某一个值：_

- {{jsxref("TypeError")}}

  - : 在以下几种情况下，会抛出 `TypeError`：

    - 文档中包含的元素未完全激活，也就是说不是当前活动的元素。
    - 元素不在文档之内。
    - 因为[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)配置或其他访问控制特性，元素不被允许使用 `fullscreen` 特性。
    - 元素和它的文档是同一个节点。
    - 该元素是一个[弹出窗口](/zh-CN/docs/Web/API/Popover_API)，已通过 {{domxref("HTMLElement.showPopover()")}} 显示。

## 安全性

需要[瞬态用户激活](/zh-CN/docs/Web/Security/User_activation)。用户必须与页面或 UI 元素进行交互才能使用此功能。

## 使用说明

### 兼容元素

你希望置于全屏模式的元素必须满足一些简单的要求：

- 它必须是标准 HTML 元素之一或 {{SVGElement("svg")}} 或 {{MathMLElement("math")}}。
- 它不是 {{HTMLElement("dialog")}} 元素。
- 它必须位于顶级文档中或已应用 [`allowfullscreen`](/zh-CN/docs/Web/HTML/Element/iframe#allowfullscreen) 属性的 {{HTMLElement("iframe")}} 元素。

此外，任何设置的权限策略都必须允许使用此特性。

### 检测全屏激活

你可以使用 `requestFullscreen()` 返回的 {{jsxref("Promise")}} 来确定切换到全屏模式的尝试是否成功，如下面的[示例](#示例)所示。

要了解其他代码何时打开和关闭全屏模式，你应该为 {{domxref("Document")}} 上的 {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} 事件创建监听器。监听 `fullscreenchange` 也很重要，例如，当用户手动切换全屏模式时，或者当用户切换应用程序时，导致应用程序暂时退出全屏模式。

## 示例

### 请求全屏模式

此函数可将文档中找到的第一个 {{HTMLElement("video")}} 元素切换为全屏模式或退出全屏模式。

```js
function toggleFullscreen() {
  let elem = document.querySelector("video");

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch((err) => {
      alert(`尝试启用全屏模式时出错：${err.message}（${err.name}）`);
    });
  } else {
    document.exitFullscreen();
  }
}
```

如果文档尚未处于全屏模式（通过查看 {{domxref("document.fullscreenElement")}} 是否有值来检测），我们将调用视频的 `requestFullscreen()` 方法。如果成功，我们不需要做任何特殊的事情，但如果请求失败，我们的 promise 的 `catch()` 处理器会显示带有适当错误消息的警报。

另一方面，如果全屏模式已经生效，我们将调用 {{domxref("document.exitFullscreen()")}} 来禁用全屏模式。

你可以在 [Glitch](https://glitch.com/) 上[查看此示例的实际操作](https://fullscreen-requestfullscreen-demo.glitch.me/)或[查看或重新混合代码](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo)。

### 使用 navigationUI

在此示例中，通过在文档的 {{DOMxRef("Document.documentElement")}}（即文档的根 {{HTMLElement("html")}} 元素）上调用 `requestFullscreen()`，将整个文档置于全屏模式。

```js
let elem = document.documentElement;

elem
  .requestFullscreen({ navigationUI: "show" })
  .then(() => {})
  .catch((err) => {
    alert(`尝试切换到全屏模式时发生错误：${err.message}（${err.name}）`);
  });
```

promise 的解析处理器不执行任何操作，但如果 promise 被拒绝，则会通过调用 {{DOMxRef("Window.alert", "alert()")}} 显示错误消息。

### 使用 screen 选项

如果你想让元素在主操作系统屏幕上全屏显示，你可以使用如下代码：

```js
try {
  const primaryScreen = (await getScreenDetails()).screens.find(
    (screen) => screen.isPrimary,
  );
  await document.body.requestFullscreen({ screen: primaryScreen });
} catch (err) {
  console.error(err.name, err.message);
}
```

{{domxref("Window.getScreenDetails()")}} 方法用于检索当前设备的 {{domxref("ScreenDetails")}} 对象，其中包含代表不同可用屏幕的 {{domxref("ScreenDetailed")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}
- [`allowfullscreen`](/zh-CN/docs/Web/HTML/Element/iframe#allowfullscreen)
