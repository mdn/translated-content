---
title: HTML class 全域屬性
slug: Web/HTML/Reference/Global_attributes/class
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

**`class`** [全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)是一個以 [ASCII 空白字元](/zh-TW/docs/Glossary/Whitespace#在_html_中)分隔的元素類別列表。

{{InteractiveExample("HTML Demo: class", "tabbed-standard")}}

```html interactive-example
<p>旁白：戲劇開始了。</p>

<p class="note editorial">上面這點聽起來有點太明顯了。要刪除或重寫嗎？</p>

<p>旁白：各位，我現在必須警告你們，這個開頭非常刺激。</p>

<p class="note">[燈光亮起，風吹起；卡斯比恩從舞台右側進入]</p>
```

```css interactive-example
.note {
  font-style: italic;
  font-weight: bold;
}

.editorial {
  background: rgb(255 0 0 / 0.25);
  padding: 10px;
}

.editorial::before {
  content: "Editor: ";
}
```

## 語法

`class` 屬性是一個以 [ASCII 空白字元](/zh-TW/docs/Glossary/Whitespace#在_html_中)分隔的類別值列表。

每個類別值可以包含任何 Unicode 字元（當然，除了 ASCII 空白字元）。但是，當在 CSS 選擇器中使用時，無論是從 JavaScript 使用 {{domxref("Document.querySelector()")}} 等 API 或是在 CSS 樣式表中使用，類別屬性值都必須是有效的 [CSS 標識符](/zh-TW/docs/Web/CSS/Reference/Values/ident)。這表示如果類別屬性值不是有效的 CSS 標識符（例如，`my?class` 或 `1234`），則在選擇器中使用它之前必須對其進行跳脫，可以使用 {{domxref("CSS.escape_static", "CSS.escape()")}} 方法或[手動](/zh-TW/docs/Web/CSS/Reference/Values/ident#跳脫字元)轉換。

因此，建議開發人員為 class 屬性選擇不需要跳脫的有效 CSS 標識符作為值。

## 描述

類別允許 CSS 和 JavaScript 通過[類別選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/Class_selectors)或 {{domxref("document.getElementsByClassName()")}} 等函數來選擇和訪問特定元素。

雖然規範沒有對類別名稱做出要求，但鼓勵網頁開發人員使用描述元素語義目的的名稱，而不是元素的呈現方式。例如，使用 _attribute_ 來描述屬性而不是使用 _italics_，儘管此類別的元素可能會以斜體呈現。即使頁面的呈現方式發生變化，語義名稱仍然保持邏輯性。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 所有[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。
- {{domxref('element.className')}}
- {{domxref('element.classList')}}
- [CSS 入門](/zh-TW/docs/Learn_web_development/Core/Styling_basics)
