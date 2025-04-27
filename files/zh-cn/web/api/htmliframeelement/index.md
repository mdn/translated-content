---
title: HTMLIFrameElement
slug: Web/API/HTMLIFrameElement
---

{{APIRef("HTML DOM")}}

**`HTMLIFrameElement`** 接口提供了除 {{domxref("HTMLElement")}} 之外的一些特殊属性和方法（当然也包括了继承自 {{domxref("HTMLElement")}} 的部分）。这些方法用于操作内联 frame 元素的布局和展示。

## 属性

_继承了来自父类的属性，{{domxref("HTMLElement")}}。_

- {{domxref("HTMLIFrameElement.align")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("DOMString")}} 指定了相对于当前上下文的对齐方式。
- {{domxref("HTMLIFrameElement.allowfullscreen")}} {{experimental_inline}}
  - : 一个 {{domxref("Boolean")}} 标识了该内联 frame 是否愿意被全屏防止。详情请参考 [Using full-screen mode](/zh-CN/docs/Web/API/Fullscreen_API) 。
- {{domxref("HTMLIFrameElement.contentDocument")}} {{readonlyInline}}
  - : 返回一个 {{domxref("Document")}}，该内联 frame 嵌套的浏览上下文中活跃的 document 对象。
- {{domxref("HTMLIFrameElement.contentWindow")}} {{readonlyInline}}
  - : 返回一个 {{domxref("WindowProxy")}}，该嵌套的浏览上下文中的 window 代理。
- {{domxref("HTMLIFrameElement.frameBorder")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("DOMString")}} 标识了是否在 frame 之间创建边框。
- {{domxref("HTMLIFrameElement.height")}}
  - : 一个 {{domxref("DOMString")}} 反映着 [`height`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#height) HTML 属性，标识了该 frame 的高度。
- {{domxref("HTMLIFrameElement.longDesc")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("DOMString")}} 包含着该 frame 的详细描述的 URI。
- {{domxref("HTMLIFrameElement.marginHeight")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("DOMString")}} ，该 frame 的外边距高度。
- {{domxref("HTMLIFrameElement.marginWidth")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("DOMString")}} ，该 frame 的外边距宽度。
- {{domxref("HTMLIFrameElement.name")}}
  - : 一个 {{domxref("DOMString")}} 反映着 [`name`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#name) HTML 属性，包含着用来引用该 frame 的名字。
- {{domxref("HTMLIFrameElement.referrerPolicy")}} {{experimental_inline}}
  - : 一个 {{domxref("DOMString")}} 反映着 [`referrerpolicy`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) HTML 属性，标识了获取关联资源时要使用哪个 referrer。
- {{domxref("HTMLIFrameElement.sandbox")}}
  - : 一个 {{domxref("DOMSettableTokenList")}} 反映着 [`sandbox`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#sandbox) HTML 属性，指示着对嵌套内容额外的限制。
- {{domxref("HTMLIFrameElement.scrolling")}} {{Deprecated_Inline}}
  - : 一个 {{domxref("DOMString")}} 指示着浏览器是否应该为该 frame 提供滚动条。
- {{domxref("HTMLIFrameElement.src")}}
  - : 一个 {{domxref("DOMString")}} 反映着 [`src`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#src) HTML 属性，包含被嵌入内容的地址。
- {{domxref("HTMLIFrameElement.srcdoc")}}
  - : 一个 {{domxref("DOMString")}} ，表示该 frame 中要显示的内容。
- {{domxref("HTMLIFrameElement.width")}}
  - : 一个 {{domxref("DOMString")}} 反映着 [`width`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#width) HTML 属性，标识着该 frame 的宽度。

## 方法

_继承了来自父类的属性，{{domxref("HTMLElement")}}。_

### 浏览器 API 方法

为支持浏览器{{HTMLElement("iframe")}}的需求，`HTMLIFrameElement`已经扩展了一些新的方法来让{{HTMLElement("iframe")}}有更多的能力。他们并未成为规范（参见 [Browser compatibility](#browser_compatibility)）。

#### 导航方法

以下导航方法允许通过{{HTMLElement("iframe")}}的浏览历史进行导航。他们对于后退、前进、停止和重新加载按钮的实现而言是非常必须的。

- {{domxref("HTMLIFrameElement.reload()")}}
  - : 重新加载{{HTMLElement("iframe")}}元素内容。
- {{domxref("HTMLIFrameElement.stop()")}}
  - : 停止加载{{HTMLElement("iframe")}}元素内容。
- {{domxref("HTMLIFrameElement.getCanGoBack()")}}
  - : 指示是否可以后退。
- {{domxref("HTMLIFrameElement.goBack()")}}
  - : 改变{{HTMLElement("iframe")}}位置到上一个浏览历史记录的位置。
- {{domxref("HTMLIFrameElement.getCanGoForward()")}}
  - : 指示是否可以前进。
- {{domxref("HTMLIFrameElement.goForward()")}}
  - : 改变{{HTMLElement("iframe")}}位置到下一个浏览历史记录的位置。

#### 管理方法

这个方法集管理浏览器{{HTMLElement("iframe")}}所用的资源。它们对于实现分页浏览程序非常有用。

- {{domxref("HTMLIFrameElement.executeScript()")}}
  - : 在浏览器{{HTMLElement("iframe")}}页面加载完成后执行指定的脚本。
- {{domxref("HTMLIFrameElement.purgeHistory()")}}
  - : 清理所有与浏览器{{HTMLElement("iframe")}}有关的资源（不包括 cookie）。
- {{domxref("HTMLIFrameElement.setVisible()")}}
  - : 修改浏览器{{HTMLElement("iframe")}}的可见性。这会影响资源分配和一些函数的资源占用率，如{{domxref("window.requestAnimationFrame","requestAnimationFrame")}}。
- {{domxref("HTMLIFrameElement.getVisible()")}}
  - : 指示当前浏览器{{HTMLElement("iframe")}}的可见性。
- {{domxref("HTMLIFrameElement.setActive()")}}
  - : 设置当前{{HTMLElement("iframe")}}为活动 frame，对进程管理器如何划分优先级有影响。
- {{domxref("HTMLIFrameElement.getActive()")}}
  - : 指示当前浏览器{{htmlelement("iframe")}}是否为当前活动的 frame。
- {{domxref("HTMLIFrameElement.setInputMethodActive()")}}
  - : 设置当前浏览器{{HTMLElement("iframe")}}是活动的输入法编辑器窗口而其他不是。当一个顶层应用希望激活一个窗口作为输入法编辑器（如键盘）时有用。
- {{domxref("HTMLIFrameElement.setNfcFocus()")}}
  - : Firefox 操作系统 [NFC API](/zh-CN/docs/Web/API/NFC_API) 的一部分，扩展了[Browser API](/zh-CN/docs/Web/API/Browser_API)，这个集合设置浏览器{{htmlelement("iframe")}}是否可以接收一个[NFC](/zh-CN/docs/Web/API/NFC_API)事件。

#### 音频相关方法

以下方法允许直接控制浏览器元素的声音。

- {{domxref("HTMLIFrameElement.getVolume()")}}
  - : 获取浏览器{{HTMLElement("iframe")}}当前音量。
- {{domxref("HTMLIFrameElement.setVolume()")}}
  - : 设置浏览器{{HTMLElement("iframe")}}当前音量。
- {{domxref("HTMLIFrameElement.mute()")}}
  - : 浏览器{{HTMLElement("iframe")}}播放的所有音频静音。
- {{domxref("HTMLIFrameElement.unmute()")}}
  - : 取消浏览器{{HTMLElement("iframe")}}播放所有音频的静音。
- {{domxref("HTMLIFrameElement.getMuted()")}}
  - : 指示当前浏览器{{HTMLElement("iframe")}}当前是否被静音。

#### Search methods

New methods are provided to allow programmatic searches of browser {{HTMLElement("iframe")}}s to be carried out.

- {{domxref("HTMLIFrameElement.findAll()")}}
  - : Searches for a string in a browser {{HTMLElement("iframe")}}'s content; if found, the first instance of the string relative to the caret position will be highlighted.
- {{domxref("HTMLIFrameElement.findNext()")}}
  - : Highlights the next or previous instance of a search result after a {{domxref("HTMLIFrameElement.findAll","findAll()")}} search has been carried out.
- {{domxref("HTMLIFrameElement.clearMatch()")}}
  - : Clears any content highlighted by {{domxref("HTMLIFrameElement.findAll","findAll()")}} or {{domxref("HTMLIFrameElement.findNext","findNext()")}}.

#### Event-related methods

In order to manage the browser {{HTMLElement("iframe")}}'s content, many new events were added (see below). The following methods are used to deal with those events:

- The {{HTMLElement("iframe")}} gains support for the methods of the {{domxref("EventTarget")}} interface
  - : {{domxref("EventTarget.addEventListener","addEventListener()")}}, {{domxref("EventTarget.removeEventListener","removeEventListener()")}}, and {{domxref("EventTarget.dispatchEvent","dispatchEvent()")}}.
- {{domxref("HTMLIFrameElement.sendMouseEvent()")}}
  - : Sends a {{domxref("MouseEvent")}} to the {{HTMLElement("iframe")}}'s content.
- {{domxref("HTMLIFrameElement.sendTouchEvent()")}}
  - : Sends a {{domxref("TouchEvent")}} to the {{HTMLElement("iframe")}}'s content. Note that this method is available for touch enabled devices only.
- {{domxref("HTMLIFrameElement.addNextPaintListener()")}}
  - : Defines a handler to listen for the next `MozAfterPaint` event in the browser {{HTMLElement("iframe")}}.
- {{domxref("HTMLIFrameElement.removeNextPaintListener()")}}
  - : Removes a handler previously set with {{domxref("HTMLIFrameElement.addNextPaintListener","addNextPaintListener()")}}.

#### Utility methods

Last, there are some utility methods, useful for apps that host a browser {{HTMLElement("iframe")}}.

- {{domxref("HTMLIFrameElement.download()")}}
  - : Downloads a specified URL, storing it at the specified filename/path.
- {{domxref("HTMLIFrameElement.getContentDimensions()")}}
  - : Retrieves the X and Y dimensions of the content window.
- {{domxref("HTMLIFrameElement.getManifest()")}}
  - : Retrieves the manifest of an app loaded in the browser {{HTMLElement("iframe")}} and returns it as JSON.
- {{domxref("HTMLIFrameElement.getScreenshot()")}}
  - : Takes a screenshot of the browser {{HTMLElement("iframe")}}'s content. This is particularly useful to get thumbnails of tabs in a tabbed browser app.
- {{domxref("HTMLIFrameElement.getStructuredData()")}}
  - : Retrieves any structured microdata (and hCard and hCalendar microformat data) contained in the HTML loaded in the browser {{HTMLElement("iframe")}} and returns it as JSON.
- {{domxref("HTMLIFrameElement.zoom()")}}
  - : Changes the zoom factor of the browser {{HTMLElement("iframe")}}'s content. This is particularly useful for zooming in/out on non-touch-enabled devices.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("iframe")}}
