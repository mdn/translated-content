---
title: :first
slug: Web/CSS/Reference/Selectors/:first
original_slug: Web/CSS/:first
l10n:
  sourceCommit: 2b3eb646cec5c9bc74e263b7880a52ad52e37913
---

**`:first`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、{{cssxref("@page")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で使用され、印刷文書の最初のページを表します。（一般的なノードの最初の要素については {{cssxref(":first-child")}} を参照してください。）

```css
/* 印刷時に最初のページを選択 */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> [!NOTE]
> この擬似クラスを使用してすべての CSS プロパティを変更できるわけではありません。変更できるのは文書のマージン、 {{cssxref("orphans")}}、{{cssxref("widows")}}、ページ区切りのみです。さらに、マージンを定義するときには[絶対的な長さ](/ja/docs/Web/CSS/Reference/Values/length#絶対的な長さの単位)の単位のみしか使用できません。他のすべてのプロパティは無視されます。

## 構文

```css
:first {
  /* ... */
}
```

## 例

### ページ印刷スタイルに `:first` を使用

［印刷］ボタンを押すと、例を印刷します。最初のページの言葉は中央付近に印刷されますが、他のページのコンテンツは既定の位置に印刷されます。

```html live-sample___colon-first
<p>最初のページです。</p>
<p>2 枚目のページです。</p>
<button>印刷</button>
```

```css live-sample___colon-first
@page :first {
  size: 8.5in 11in;
  margin-left: 3in;
  margin-top: 5in;
}

p {
  page-break-after: always;
  font: 1.2em sans-serif;
}
```

```js live-sample___colon-first
document.querySelector("button").addEventListener("click", () => {
  window.print();
});
```

{{EmbedLiveSample('colon-first', '100%', , , , , , "allow-modals")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("@page")}}
- ページに関する他の擬似クラス: {{Cssxref(":left")}}, {{Cssxref(":right")}}
