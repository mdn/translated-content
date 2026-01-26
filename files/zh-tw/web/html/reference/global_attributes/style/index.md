---
title: HTML style 全域屬性
slug: Web/HTML/Reference/Global_attributes/style
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

**`style`** [全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes) 包含要應用於此元素的 [CSS](/zh-TW/docs/Web/CSS) 樣式宣告。請注意，建議將樣式定義在單獨的檔案中。此屬性和 {{HTMLElement("style")}} 元素主要目的是允許快速設定樣式，例如用於測試目的。

{{InteractiveExample("HTML Demo: style", "tabbed-shorter")}}

```html interactive-example
<div style="background: #ffe7e8; border: 2px solid #e66465">
  <p style="margin: 15px; line-height: 1.5; text-align: center">
    嗯，我就是你影片裡的那坨爛泥<br />
    慢慢地在你客廳地板上滑行著。
  </p>
</div>
```

> [!NOTE]
> 此屬性不得用於傳達語義資訊。即使所有樣式都被移除，頁面也應該保持語義正確。通常不應該使用它來隱藏不相關的資訊；這應該使用 [`hidden`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/hidden) 屬性來完成。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)
- {{domxref("HTMLElement.style")}}
