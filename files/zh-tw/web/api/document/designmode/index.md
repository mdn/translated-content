---
title: Document：designMode 屬性
slug: Web/API/Document/designMode
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}}

**`document.designMode`** 控制整個文件是否可編輯。有效值為 `"on"` 和 `"off"`。根據規範，此屬性預設為 `"off"`。Firefox 遵循此標準。早期版本的 Chrome 和 IE 預設為 `"inherit"`。從 Chrome 43 開始，預設值改為 `"off"`，且不再支援 `"inherit"`。在 IE6-10 中，該值為大寫。

## 值

一個字串，表示 `designMode` 是否（或應該）設定為開啟或關閉。有效值為 `on` 和 `off`。

## 範例

使 {{HTMLElement("iframe")}} 的文件可編輯：

```js
iframeNode.contentDocument.designMode = "on";
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("HTMLElement.contentEditable")}}
