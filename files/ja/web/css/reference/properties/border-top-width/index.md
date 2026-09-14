---
title: CSS `border-top-width` プロパティ
short-title: border-top-width
slug: Web/CSS/Reference/Properties/border-top-width
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

**`border-top-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の上側の境界の幅を設定します。

{{InteractiveExample("CSS デモ: border-top-width")}}

```css interactive-example-choice
border-top-width: thick;
```

```css interactive-example-choice
border-top-width: 2em;
```

```css interactive-example-choice
border-top-width: 4px;
```

```css interactive-example-choice
border-top-width: 2ex;
```

```css interactive-example-choice
border-top-width: 0;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    これは周囲に境界があるボックスです。
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: black;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 構文

```css
/* キーワード値 */
border-top-width: thin;
border-top-width: medium;
border-top-width: thick;

/* <length> 値 */
border-top-width: 10em;
border-top-width: 3vmax;
border-top-width: 6px;

/* グローバルキーワード */
border-top-width: inherit;
border-top-width: initial;
border-top-width: revert;
border-top-width: revert-layer;
border-top-width: unset;
```

### 値

- {{cssxref("&lt;line-width&gt;")}}
  - : 境界線の幅を、非負の {{cssxref("&lt;length&gt;")}} を明示的に指定するか、キーワード `thin`、`medium`、`thick` のいずれかで定義します。デフォルトは `medium` です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<div>要素 1</div>
<div>要素 2</div>
```

### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-top-width: thick;
}
div:nth-child(2) {
  border-top-width: 2em;
}
```

### 結果

{{EmbedLiveSample('例', '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の border-width 関連 CSS プロパティ: {{Cssxref("border-left-width")}}、{{Cssxref("border-right-width")}}、{{Cssxref("border-bottom-width")}}、{{Cssxref("border-width")}}
- 他の border-top 関連 CSS プロパティ: {{Cssxref("border")}}、{{Cssxref("border-top")}}、{{Cssxref("border-top-style")}}、{{Cssxref("border-top-color")}}
