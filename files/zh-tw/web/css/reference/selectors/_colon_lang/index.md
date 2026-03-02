---
title: :lang()
slug: Web/CSS/Reference/Selectors/:lang
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:lang()`** [CSS](/zh-TW/docs/Web/CSS) [偽類](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-classes)會根據元素被判定的語言來匹配元素。

{{InteractiveExample("CSS Demo: :lang()", "tabbed-shorter")}}

```css interactive-example
*:lang(zh-Hant) {
  outline: 2px solid deeppink;
}
```

```html interactive-example
<p lang="zh-Hant">
  在公路旅行和長途通勤時聽音樂不是問題，但在開車時戴耳機並不是最好的選擇。
</p>

<p lang="pl-PL">
  Gdy widzimy znak z narysowaną czaszką i napisem
  <strong lang="en-US">DANGER</strong> to lepiej nie wchodzić do środka.
</p>
```

> [!NOTE]
> 在 HTML 中，語言由 [`lang`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/lang) 屬性、{{HTMLElement("meta")}} 元素，以及可能來自協定（例如 HTTP 標頭）的訊息組合決定。對於其他文件類型，可能會有其他文件方法來決定語言。

## 語法

```plain
:lang(<language-code> [,<language-code> ]*) {
  /* ... */
}
```

### 參數

- `<language-code>`
  - : 一或多個 {{cssxref("&lt;string&gt;")}} 的逗號分隔列表，根據 [BCP 47](https://www.rfc-editor.org/info/bcp47) 語言代碼，匹配具有特定語言值的元素。依語言範圍匹配時不區分大小寫。

## 描述

選擇語言時，會有隱含的萬用字元匹配，因此 `:lang(de-DE)` 將會匹配 `de-DE`、`de-DE-1996`、`de-Latn-DE`、`de-Latf-DE` 和 `de-Latn-DE-1996`。明確使用萬用字元時，必須包含語言子標籤的完整匹配，因此 `:lang("*-F*")` 是無效的，但 `:lang("*-Fr")` 是有效的。

## 範例

### 匹配指定語言的子元素

在此範例中，`:lang()` 偽類應用於父元素，並使用[子組合器](/zh-TW/docs/Web/CSS/Reference/Selectors/Child_combinator)來設定其內的引號元素（{{htmlElement("q")}}）樣式。請注意，這並非唯一的方法，最佳方法取決於文件類型。另請注意，{{glossary("Unicode")}} 值用於指定一些特殊引號字元。

#### HTML

```html
<div lang="en">
  <q>這個英文引號內有一個<q>巢狀</q>引號。</q>
</div>
<div lang="fr">
  <q>這個法文引號內有一個<q>巢狀</q>引號。</q>
</div>
<div lang="de">
  <q>這個德文引號內有一個<q>巢狀</q>引號。</q>
</div>
```

#### CSS

```css
:lang(en) > q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
:lang(fr) > q {
  quotes: "« " " »";
}
:lang(de) > q {
  quotes: "»" "«" "\2039" "\203A";
}
```

#### 結果

{{EmbedLiveSample('匹配指定語言的子元素', '', '80')}}

### 匹配多種語言

以下範例展示如何透過提供逗號分隔的語言代碼列表來匹配多種語言。也可以使用萬用字元來匹配指定語言範圍內的語言。

```css hidden
p {
  margin: 0;
}
```

#### CSS

```css
/* 匹配 nl 和 de */
:lang("nl", "de") {
  color: green;
}

/* 省略引號與不區分大小寫匹配 */
:lang(EN, FR) {
  color: blue;
}

/* 萬用字元匹配語言範圍 */
:lang("*-Latn") {
  color: red;
}
```

#### HTML

```html
<p lang="nl">Dit is een Nederlandse paragraaf.</p>
<p lang="de">Dies ist ein deutscher Satz.</p>
<p lang="en">This is an English sentence.</p>
<p lang="en-GB">Matching the language range of English.</p>
<p lang="fr">Ceci est un paragraphe français.</p>
<p lang="fr-Latn-FR">Ceci est un paragraphe français en latin.</p>
```

#### 結果

{{EmbedLiveSample('匹配多種語言', '', '120')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref(":dir")}} 偽類，依文字方向性匹配
- HTML [`lang`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/lang) 屬性
- HTML [`translate`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/translate) 屬性
- {{RFC(5646, "用於識別語言的標籤（也稱為 BCP 47）")}}
