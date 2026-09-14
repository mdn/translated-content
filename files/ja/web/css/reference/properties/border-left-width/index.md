---
title: CSS `border-left-width` プロパティ
short-title: border-left-width
slug: Web/CSS/Reference/Properties/border-left-width
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

**`border-left-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の左側の境界の幅を設定します。

{{InteractiveExample("CSS デモ: border-left-width")}}

```css interactive-example-choice
border-left-width: thick;
```

```css interactive-example-choice
border-left-width: 2em;
```

```css interactive-example-choice
border-left-width: 4px;
```

```css interactive-example-choice
border-left-width: 2ex;
```

```css interactive-example-choice
border-left-width: 0;
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
border-left-width: thin;
border-left-width: medium;
border-left-width: thick;

/* <length> 値 */
border-left-width: 10em;
border-left-width: 3vmax;
border-left-width: 6px;

/* グローバル値 */
border-left-width: inherit;
border-left-width: initial;
border-left-width: revert;
border-left-width: revert-layer;
border-left-width: unset;
```

### 値

- {{cssxref("&lt;line-width&gt;")}}
  - : 境界線の幅を、非負の {{cssxref("&lt;length&gt;")}} を明示的に指定するか、キーワード `thin`、`medium`、`thick` のいずれかで定義します。デフォルトは `medium` です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界線の幅の比較

#### HTML

```html
<div>要素 1</div>
<div>要素 2</div>
```

#### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-left-width: thick;
}
div:nth-child(2) {
  border-left-width: 2em;
}
```

#### 結果

{{EmbedLiveSample('境界線の幅の比較', '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界の幅に関する他の CSS プロパティ: {{Cssxref("border-top-width")}}、{{Cssxref("border-right-width")}}、{{Cssxref("border-bottom-width")}}、{{Cssxref("border-width")}}
- 左の境界に関する他の CSS プロパティ: {{Cssxref("border")}}、{{Cssxref("border-left")}}、{{Cssxref("border-left-style")}}、{{Cssxref("border-left-color")}}
