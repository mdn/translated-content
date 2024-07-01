---
title: transition-property
slug: Web/CSS/transition-property
l10n:
  sourceCommit: bed59f268d5e299beb538e435f08c4f4ce685980
---

{{CSSRef}}

**`transition-property`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[トランジション効果](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)を適用する CSS プロパティを指定します。

{{EmbedInteractiveExample("pages/css/transition-property.html")}}

一括指定プロパティ（例えば {{cssxref("background")}}）を指定すると、その個別指定のサブプロパティすべてをアニメーションさせることができます。

## 構文

```css
/* キーワード値 */
transition-property: none;
transition-property: all;

/* <custom-ident> 値 */
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

/* 複数の値 */
transition-property: test1, animation4;
transition-property: all, height, color;
transition-property:
  all,
  -moz-specific,
  sliding;

/* グローバル値 */
transition-property: inherit;
transition-property: initial;
transition-property: revert;
transition-property: revert-layer;
transition-property: unset;
```

### 値

- `none`
  - : どのプロパティもトランジションを行いません。
- `all`
  - : トランジションが可能なすべてのプロパティで、トランジションを行います。
- {{cssxref("&lt;custom-ident&gt;")}}
  - : 値が変更されたとき、トランジション効果を適用するプロパティを識別する文字列です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

ボタンにポインターを当てるかフォーカスすると、 1 秒間の色のトランジションが行われます。 `transition-property` は [`background-color`](/ja/docs/Web/CSS/background-color) です。

#### HTML

```html
<button class="target">フォーカスしてください</button>
```

#### CSS

```css hidden
html {
  height: 100vh;
}

button {
  font-size: 1.4rem;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
}
```

```css
.target {
  transition-property: background-color;
  transition-duration: 1s;
  background-color: #ccc;
}

.target:hover,
.target:focus {
  background-color: #eee;
}
```

{{EmbedLiveSample('Basic_example', 600, 100)}}

`transition-property` のその他の例については、 [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)ガイドを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
