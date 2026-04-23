---
title: ::highlight()
slug: Web/CSS/Reference/Selectors/::highlight
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`::highlight()`** は CSS の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、スタイルをカスタムハイライトに適用します。

カスタムハイライトは、 {{domxref("Range")}} オブジェクトの集合であり、 {{domxref("HighlightRegistry")}} を使用してウェブページに登録されます。

`::highlight()` 擬似要素は、すべての表示強調擬似要素に共通する特別な継承モデルに従います。この継承の仕組みの詳細については、[表示強調擬似要素の継承](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance)の節を参照してください。

## 利用可能なプロパティ

特定の CSS プロパティだけが `::highlight()` で利用できます。

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} および関連するプロパティ
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}、{{CSSxRef("-webkit-text-fill-color")}}、{{CSSxRef("-webkit-text-stroke-width")}}

特に、 {{CSSxRef("background-image")}} は無視されます。

## 構文

```css-nolint
::highlight(custom-highlight-name)
```

## 例

### 文字をハイライト

#### HTML

```html live-sample___highlighting_characters
<p id="rainbow-text">CSS カスタムハイライト API の虹</p>
```

#### CSS

```css live-sample___highlighting_characters
#rainbow-text {
  font-family: monospace;
  font-size: 1.5rem;
}

::highlight(rainbow-color-1) {
  color: violet;
  text-decoration: underline;
}
::highlight(rainbow-color-2) {
  color: purple;
  text-decoration: underline;
}
::highlight(rainbow-color-3) {
  color: blue;
  text-decoration: underline;
}
::highlight(rainbow-color-4) {
  color: green;
  text-decoration: underline;
}
::highlight(rainbow-color-5) {
  color: yellow;
  text-decoration: underline;
}
::highlight(rainbow-color-6) {
  color: orange;
  text-decoration: underline;
}
::highlight(rainbow-color-7) {
  color: red;
  text-decoration: underline;
}
```

#### JavaScript

```js live-sample___highlighting_characters
const textNode = document.getElementById("rainbow-text").firstChild;

if (!CSS.highlights) {
  textNode.textContent =
    "このブラウザーは、 CSS カスタムハイライト API には対応していません。";
}

// 虹の各色ごとにハイライトを作成して登録
const highlights = [];
for (let i = 0; i < 7; i++) {
  // この色に対して新しいハイライトを作成
  const colorHighlight = new Highlight();
  highlights.push(colorHighlight);

  // このハイライトをカスタム名で登録
  CSS.highlights.set(`rainbow-color-${i + 1}`, colorHighlight);
}

// テキストを 1 文字ずつ反復処理
for (let i = 0; i < textNode.textContent.length; i++) {
  // この文字専用の新しい範囲を作成
  const range = new Range();
  range.setStart(textNode, i);
  range.setEnd(textNode, i + 1);

  // 次の利用できるハイライトに範囲を追加し、
  // 7 番目に達したら最初のハイライトに戻る
  highlights[i % 7].add(range);
}
```

#### 結果

{{ EmbedLiveSample("Highlighting characters") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS カスタムハイライト API](/ja/docs/Web/CSS/Guides/Custom_highlight_API) モジュール
- [CSS カスタムハイライト](/ja/docs/Web/API/CSS_Custom_Highlight_API) API
- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
