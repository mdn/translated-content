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

_`requestFullscreen()` 通过拒绝返回的 `Promise`来生成错误条件，而不是抛出一个传统的异常。拒绝控制器接收以下的某一个值：_

- {{jsxref("TypeError")}}

  - : 在以下几种情况下，会抛出 `TypeError`：

    - 文档中包含的元素未完全激活，也就是说不是当前活动的元素。
    - 元素不在文档之内。
    - 因为[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)配置或其他访问控制特性，元素不被允许使用 `fullscreen` 特性。
    - 元素和它的文档是同一个节点。
    - 该元素是一个[弹出窗口](/zh-CN/docs/Web/API/Popover_API)，已通过 {{domxref("HTMLElement.showPopover()")}} 显示。

## 安全性

需要[瞬态用户激活](/zh-CN/docs/Web/Security/User_activation)。用户必须与页面或 UI 元素进行交互才能使用此功能。

## Usage notes

### Compatible elements

An element that you wish to place into fullscreen mode has to meet a small number of
simple requirements:

- It must be one of the standard HTML elements or {{SVGElement("svg")}} or
  {{MathMLElement("math")}}.
- It is _not_ a {{HTMLElement("dialog")}} element.
- It must either be located within the top-level document or in an
  {{HTMLElement("iframe")}} which has the [`allowfullscreen`](/zh-CN/docs/Web/HTML/Element/iframe#allowfullscreen)
  attribute applied to it.

Additionally, any set Permissions Policies must allow the use of this feature.

### Detecting fullscreen activation

You can determine whether or not your attempt to switch to fullscreen mode is
successful by using the {{jsxref("Promise")}} returned by
`requestFullscreen()`, as seen in the [examples](#examples) below.

To learn when other code has toggled fullscreen mode on and off, you should establish
listeners for the {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} event on the {{domxref("Document")}}.
It's also important to listen for `fullscreenchange` to be aware when, for
example, the user manually toggles fullscreen mode, or when the user switches
applications, causing your application to temporarily exit fullscreen mode.

## 示例

### Requesting fullscreen mode

This function toggles the first {{HTMLElement("video")}} element found in the document
into and out of fullscreen mode.

```js
function toggleFullscreen() {
  let elem = document.querySelector("video");

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
      );
    });
  } else {
    document.exitFullscreen();
  }
}
```

If the document isn't already in fullscreen mode—detected by looking to see if
{{domxref("document.fullscreenElement")}} has a value—we call the video's
`requestFullscreen()` method. We don't need to do anything special if
successful, but if the request fails, our promise's `catch()` handler
presents an alert with an appropriate error message.

If, on the other hand, fullscreen mode is already in effect, we call
{{domxref("document.exitFullscreen()")}} to disable fullscreen mode.

You can [see this example in action](https://fullscreen-requestfullscreen-demo.glitch.me/) or [view or remix the code](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo) on [Glitch](https://glitch.com/).

### Using navigationUI

In this example, the entire document is placed into fullscreen mode by calling
`requestFullscreen()` on the document's
{{DOMxRef("Document.documentElement")}}, which is the document's root
{{HTMLElement("html")}} element.

```js
let elem = document.documentElement;

elem
  .requestFullscreen({ navigationUI: "show" })
  .then(() => {})
  .catch((err) => {
    alert(
      `An error occurred while trying to switch into fullscreen mode: ${err.message} (${err.name})`,
    );
  });
```

The promise's resolve handler does nothing, but if the promise is rejected, an error
message is displayed by calling {{DOMxRef("Window.alert", "alert()")}}.

### Using the screen option

If you wanted to make the element fullscreen on the primary OS screen, you could use code like the following:

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

The {{domxref("Window.getScreenDetails()")}} method is used to retrieve the {{domxref("ScreenDetails")}} object for the current device, which contains {{domxref("ScreenDetailed")}} objects representing the different available screens.

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
