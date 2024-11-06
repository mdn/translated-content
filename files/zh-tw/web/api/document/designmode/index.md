---
title: Document.designMode
slug: Web/API/Document/designMode
---

{{ ApiRef() }}

## 概要

`document.designMode` 控制整個文件是否能夠編輯。可用的數值是 `"on"` 和 `"off"`。根據規範，這個屬性預設值為 `"off"`。Firefox 遵從這個標準。較早以前的 Chrome 和 IE 預設值是 `"inherit"`。從 Chrome 43 起，預設值是 「`off`」；不再支援「`inherit`」。在 IE6-10 中，數值為大寫英文字母。

## 語法

```js
var mode = document.designMode;
document.designMode = "on";
document.designMode = "off";
```

## 範例

讓 {{HTMLElement("iframe")}} 的文件可以給使用者編輯：

```plain
iframeNode.contentDocument.designMode = "on";
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參考

- [Rich-Text Editing in Mozilla](/zh-TW/docs/Rich-Text_Editing_in_Mozilla)
- {{domxref("HTMLElement.contentEditable")}}
