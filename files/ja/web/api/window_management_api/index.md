---
title: ウィンドウ管理 API
slug: Web/API/Window_Management_API
l10n:
  sourceCommit: 72d51eab0cf7140e7edcca663fe24fae1a4166f8
---

{{SeeCompatTable}}{{DefaultAPISidebar("Window Management API")}}

**ウィンドウ管理 API** を使用すると、デバイスに接続されたディスプレイに関する詳細情報を取得したり、特定の画面にウィンドウをより容易に配置したりすることが可能になり、より効果的なマルチスクリーン・アプリケーションの実現につながります。

## 概念と使用方法

これまで、現在のアプリケーションに関連するブラウザーウィンドウ（新しいウィンドウを開く、既存のウィンドウのサイズ変更や閉じるなど）を管理するために、 {{domxref("Window.open()")}} が使用されてきました。例えば、画面の左端と上端から 50 ピクセルの位置に 400×300 のウィンドウを開く場合は、次のようになります。

```js
const myWindow = window.open(
  "https://example.com/",
  "myWindow",
  "left=50,top=50,width=400,height=300",
);
```

{{domxref("Window.screen")}} プロパティから、ウィンドウを配置できる利用可能な画面領域の大きさなど、画面に関する情報を取得できます。

ただし、上記の機能には制限があります。 `Window.screen` はプライマリ画面に関するデータのみを返し、デバイスで利用可能なセカンダリディスプレイの情報は含まれません。ウィンドウをセカンダリディスプレイに移動させるには {{domxref("Window.moveTo()")}} を使用できますが、プライマリディスプレイに対してそのディスプレイがどのような位置関係にあるかに基づいて、適切な座標を推測する必要があります。

The Window Management API provides more robust, flexible window management. It allows you to query whether your display is extended with multiple screens and get information on each screen separately: windows can then be placed on each screen as desired. It also provides event handlers to allow you to respond to changes in the available screens, new fullscreen functionality to choose which screen to put into fullscreen mode (if any), and permissions functionality to control access to the API.

For details on how to use it, see [Using the Window Management API](/en-US/docs/Web/API/Window_Management_API/Using).

> [!NOTE]
> In modern browsers, a separate user gesture event is required for each `Window.open()` call, for security purposes. This prevents sites from spamming users with lots of windows. However, this poses an issue for multi-window applications. To work around this limitation, you can design your applications to open no more than one new window at once, reuse existing windows to display different pages, or advise users on how to update their browser settings to allow multiple windows.

### Use cases

The Window Management API is useful in cases such as:

- Multi-window graphics editors and audio processors that may wish to arrange editing tools and panels across different screens.
- Virtual trading desks that want to show market trends in multiple windows and put specific windows of interest in fullscreen mode.
- Slideshow apps that want to show speaker notes on the internal primary screen and the presentation on an external projector.

## Permissions policy integration

The {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) can be used to control permission to use the Window Management API. Specifically:

- Usage of the {{domxref("Window.getScreenDetails()")}} method. If blocked, its {{jsxref("Promise")}} will reject with a `NotAllowedError` exception.
- Querying the {{domxref("Screen.isExtended", "Window.screen.isExtended")}} property. If blocked, it will always return `false`.

Developers can explicitly grant permission for an {{htmlelement("iframe")}} to use Window Management via the `allow` attribute:

```html
<iframe src="3rd-party.example" allow="window-management"></iframe>
```

## Interfaces

- {{domxref("ScreenDetails")}} {{securecontext_inline}}
  - : Represents the details of all the screens available to the user's device.
- {{domxref("ScreenDetailed")}} {{securecontext_inline}}
  - : Represents detailed information about one specific screen available to the user's device.

### Extensions to other interfaces

- The `Screen` {{domxref("Screen.change_event", "change")}} event {{securecontext_inline}}
  - : Fired on a specific screen when it changes in some way — for example available width or height, or orientation.
- {{domxref("Screen.isExtended")}} {{securecontext_inline}}
  - : A boolean property that returns `true` if the user's device has multiple screens, and `false` if not.
- {{domxref("Element.requestFullscreen()")}}, the `screen` option
  - : Specifies on which screen you want to put the element in fullscreen mode.
- {{domxref("Window.getScreenDetails()")}} {{securecontext_inline}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("ScreenDetails")}} object instance.

## Examples

You can find full examples here:

- [Basic multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) (see the [source code](https://github.com/mdn/dom-examples/tree/main/window-management-api)).
- [Multi-window Platformer Game](https://googlechromelabs.github.io/multi-window-platformer-game/) (see the [source code](https://github.com/googlechromelabs/multi-window-platformer-game)).
- [Window placement demo](https://michaelwasserman.github.io/window-placement-demo/) (see the [source code](https://github.com/michaelwasserman/window-placement-demo)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
