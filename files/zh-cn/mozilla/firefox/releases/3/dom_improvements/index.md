---
title: Firefox 3 中的 DOM 改进
slug: Mozilla/Firefox/Releases/3/DOM_improvements
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 3 提供了许多对[文档对象模型](/zh-CN/docs/Web/API/Document_Object_Model)（DOM）的改进，特别是在支持其他浏览器添加到 DOM 的扩展方面。本文提供了这些改进的列表以及更多详细文档的链接。

- 现在支持 Internet Explorer 的 [`clientTop`](/zh-CN/docs/Web/API/Element/clientTop) 和 [`clientLeft`](/zh-CN/docs/Web/API/Element/clientLeft) DOM 扩展。
- 现在无论从何处读取，[`window.fullScreen`](/zh-CN/docs/Web/API/Window/fullScreen) 属性始终准确，即使在内容中也是如此。此前它会不准确地返回 `false`（[Firefox bug 127013](https://bugzil.la/127013))。
- 现在支持 [`getClientRects`](/zh-CN/docs/Web/API/Element/getClientRects) 和 [`getBoundingClientRect`](/zh-CN/docs/Web/API/Element/getBoundingClientRect) DOM 扩展（参见 [Firefox bug 174397](https://bugzil.la/174397)）。
- 现在支持 Internet Explorer 的 [`elementFromPoint`](/zh-CN/docs/Web/API/Document/elementFromPoint) DOM 扩展（[Firefox bug 199692](https://bugzil.la/199692)）。
- 现在支持 Internet Explorer 的 [`oncut`](/zh-CN/docs/Web/API/Element/cut_event)、[`oncopy`](/zh-CN/docs/Web/API/Element/copy_event) 和 [`onpaste`](/zh-CN/docs/Web/API/Element/paste_event) DOM 扩展（[Firefox bug 280959](https://bugzil.la/280959)）。
- 向 `Node.nodePrincipal`、`Node.baseURIObject` 和 `document.documentURIObject` 添加了仅允许特权代码访问的 getter。界面的代码不可以在一个未包装的内容对象上访问（获取或设置）这些属性（如 [`XPCNativeWrapper`](https://web.archive.org/web/20140604075216/https://developer.mozilla.org/en-US/docs/XPCNativeWrapper) 上的 `wrappedJSObject`），详情请参见 [Firefox bug 324464](https://bugzil.la/324464)。
- 现在支持 Web Applications 1.0（HTML5）的 [`getElementsByClassName()`](/zh-CN/docs/Web/API/Document/getElementsByClassName) DOM 方法。
- 现在支持 Web Applications 1.0（HTML5）的 [`window.postMessage`](/zh-CN/docs/Web/API/Window/postMessage) DOM 方法。此方法允许有限的、选择性启用的客户端间通信，且窗口不必位于同一域。
- 如果按下加速键，则将 `keypress` 事件的 `charCode` 值更改为 ASCII 字符。否则，`charCode` 是未修改的字符（除 `Shift` 状态外）。

### 参见

- [Firefox 3 的开发者说明](/zh-CN/docs/Mozilla/Firefox/Releases/3)
- [Firefox 3 中的 CSS 改进](https://web.archive.org/web/20210224062716/https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/releases/3/CSS_improvements)
- [DOM](/zh-CN/docs/Web/API/Document_Object_Model)
