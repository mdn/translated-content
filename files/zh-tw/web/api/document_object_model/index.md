---
title: 文件物件模型 (DOM)
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{DefaultAPISidebar("DOM")}}

**文件物件模型**（**DOM**）將文件的結構（例如代表網頁的 HTML）表示在記憶體中，以此連接網頁到腳本或程式設計語言。通常是指 JavaScript，儘管將 HTML、SVG 或 XML 文件模型化為物件並非 JavaScript 語言核心的一部分。

DOM 用邏輯樹來表示文件。樹的每個分支都終止於一個節點，每個節點都包含物件。DOM 方法允許以程式設計方式存取樹。藉由這些方法，你可以更改文件的結構、樣式或內容。

節點也可以附加事件處理器。事件觸發後，事件處理器便會執行。

## DOM 介面

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMPoint")}}
- {{DOMxRef("DOMPointReadOnly")}}
- {{DOMxRef("DOMRect")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}

### 已過時的 DOM 介面

文件物件模型已經被高度簡化。為了達到此目的，不同 DOM Level 3 或更早期的規範中的以下介面已被移除。它們不再對 Web 開發人員可用。

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

包含 HTML 的文件使用 {{DOMxRef("Document")}} 介面來描述，HTML 規範擴展了此介面以包含各種 HTML 特有的功能。特別是 {{domxref("Element")}} 介面被增強為 {{domxref("HTMLElement")}} 和各種子類別，每個子類別代表一個（或一族密切相關的）元素。

HTML DOM API 提供了對各種瀏覽器功能的存取，例如分頁與視窗、CSS 樣式與樣式表、瀏覽器歷史記錄等。這些介面在 [HTML DOM API](/zh-TW/docs/Web/API/HTML_DOM_API) 文件中會進一步討論。

## SVG DOM

類似地，包含 SVG 的文件也使用 {{DOMxRef("Document")}} 介面來描述，SVG 規範擴展了此介面以包含各種 SVG 特有的功能。特別是 {{domxref("Element")}} 介面被增強為 {{domxref("SVGElement")}} 和各種子類別，每個子類別代表一個或一族密切相關的元素。這些介面在 [SVG API](/zh-TW/docs/Web/API/SVG_API) 文件中會進一步討論。

## 規範

{{Specifications}}

## 參見

- [CSS 物件模型（CSSOM）](/zh-TW/docs/Web/API/CSS_Object_Model)
- [HTML DOM API](/zh-TW/docs/Web/API/HTML_DOM_API)
- [SVG API](/zh-TW/docs/Web/API/SVG_API)
