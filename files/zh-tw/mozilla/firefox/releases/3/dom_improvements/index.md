---
title: Firefox 3 Dom Improvements
slug: Mozilla/Firefox/Releases/3/DOM_improvements
---

### Firefox 3 對 DOM 的改善

Firefox 3 對 DOM 做了一些改善，改善重點之一就是加強對於「其他瀏覽器對 DOM 所增加的延伸規格」的支援。

- 支援 IE 的延伸規格 [clientTop](/zh-TW/docs/DOM:element.clientTop) 與 [clientLeft](/zh-TW/docs/DOM:element.clientLeft)。
- 現在不論在哪裡讀取，[wondow.fullScreen](/zh-TW/docs/Web/API/Window/fullScreen) perperty 可以總是保持正確，即使在 content 內也一樣。先前會錯誤地回報 false ([Bug127013](https://bugzilla.mozilla.org/show_bug.cgi?id=127013)) 。
- 支援 IE 的延伸規格 [getClientRects](/zh-TW/docs/Web/API/Element/getClientRects) and [getBoundingClientRect](/zh-TW/docs/Web/API/Element/getBoundingClientRect) ([Bug 174397](https://bugzilla.mozilla.org/show_bug.cgi?id=174397)).
- 支援 IE 的延伸規格 [elementFromPoint](/zh-TW/docs/Web/API/Document/elementFromPoint) ([Bug 199692](https://bugzilla.mozilla.org/show_bug.cgi?id=199692))
- 支援 IE 的延伸規格 oncut, oncopy, onpaste, onbeforecut, onbeforecopy and onbeforepaste ([Bug 280959](https://bugzilla.mozilla.org/show_bug.cgi?id=280959))
- 新增可以用於 Node.nodePrincipal, Node.baseURIObject, and [document.documentURIObject](/zh-TW/docs/DOM:document.documentURIObject) 的 privileged-code-only getters。Chrome code 絕對不可以在 unwrapped content object (例如： 在 [XPCNativeWrapper](/zh-TW/docs/XPCNativeWrapper) 的 wrappedJSObject) 上 touch (get or set) 這些 properties，詳見 [Bug 324464](https://bugzilla.mozilla.org/show_bug.cgi?id=324464)。
- 支援 The Web Applications 1.0 (HTML5) 的 [getElementsByClassName()](/zh-TW/docs/Web/API/Document/getElementsByClassName)

### 參考資料

- [DOM Improvements in Firefox 3 原始網頁](/zh-TW/docs/Mozilla/Firefox/Releases/3/DOM_improvements)

### 延伸閱讀

- [Firefox 3 開發人員須知](/zh-TW/docs/Mozilla/Firefox/Releases/3)
- [DOM](/zh-TW/docs/Web/API/Document_Object_Model)
