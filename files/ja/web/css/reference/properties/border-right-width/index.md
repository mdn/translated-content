---
title: CSS `border-right-width` プロパティ
short-title: border-right-width
slug: Web/CSS/Reference/Properties/border-right-width
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

**`border-right-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の右側の境界の幅を設定します。

{{InteractiveExample("CSS デモ: border-right-width")}}

```css interactive-example-choice
border-right-width: thick;
```

```css interactive-example-choice
border-right-width: 2em;
```

```css interactive-example-choice
border-right-width: 4px;
```

```css interactive-example-choice
border-right-width: 2ex;
```

```css interactive-example-choice
border-right-width: 0;
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
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* <length> 値 */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* グローバルキーワード */
border-right-width: inherit;
border-right-width: initial;
border-right-width: revert;
border-right-width: revert-layer;
border-right-width: unset;
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
  border-right-width: thick;
}
div:nth-child(2) {
  border-right-width: 2em;
}
```

#### 結果

{{EmbedLiveSample('境界線の幅の比較', '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界の太さに関する他の CSS プロパティ: {{Cssxref("border-bottom-width")}}、{{Cssxref("border-left-width")}}、{{Cssxref("border-top-width")}}、{{Cssxref("border-width")}}
- 右の境界に関する他の CSS プロパティ: {{Cssxref("border")}}、{{Cssxref("border-right")}}、{{Cssxref("border-right-style")}}、{{Cssxref("border-right-color")}}
