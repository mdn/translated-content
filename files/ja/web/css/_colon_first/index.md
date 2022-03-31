---
title: ':first'
slug: Web/CSS/:first
tags:
  - '@page'
  - CSS
  - レイアウト
  - 擬似クラス
  - Reference
  - セレクター
  - Web
browser-compat: css.selectors.first
translation_of: Web/CSS/:first
---
{{CSSRef}}

**`:first`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、{{cssxref("@page")}} [アットルール](/ja/docs/Web/CSS/At-rule)で使用され、印刷文書の最初のページを表します。 (一般的なノードの最初の要素については {{cssxref(":first-child")}} を参照してください。)

```css
/* 印刷時に最初のページを選択 */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> **Note:** この擬似クラスを使用してすべての CSS プロパティを変更できるわけではありません。変更できるのは文書のマージン、 {{cssxref("orphans")}}、{{cssxref("widows")}}、ページ区切りのみです。さらに、マージンを定義するときには[絶対的な長さ](/ja/docs/Web/CSS/length#absolute_length_units)の単位のみしか使用できません。他のすべてのプロパティは無視されます。

## 構文

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<p>最初のページです。</p>
<p>2 枚目のページです。</p>
<button>印刷</button>
```

### CSS

```css
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

p {
  page-break-after: always;
}
```

### JavaScript

```js
document.querySelector("button").addEventListener('click', () => {
  window.print();
});
```

### 結果

［印刷］ボタンを押すと、例を印刷します。最初のページの言葉は中央付近に印刷されますが、他のページのコンテンツは既定の位置に印刷されます。

{{ EmbedLiveSample('Examples', '80%', '150px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("@page")}}
- ページに関する他の擬似クラス: {{Cssxref(":left")}}, {{Cssxref(":right")}}
