---
title: transition-property
slug: Web/CSS/transition-property
tags:
  - CSS
  - CSS プロパティ
  - CSS トランジション
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.transition-property
translation_of: Web/CSS/transition-property
---
{{CSSRef}}

**`transition-property`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[トランジション効果](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)を適用する CSS プロパティを指定します。

{{EmbedInteractiveExample("pages/css/transition-property.html")}}

> **Note:** [アニメーション可能なプロパティのセット](/ja/docs/Web/CSS/CSS_animated_properties)は変更される可能性があります。これにより、将来意図しない結果を引き起こす可能性があるため、リストで現状アニメーションしないとしているプロパティを使用することは避けてください。

一括指定プロパティ (例えば {{cssxref("background")}}) を指定すると、その個別指定のサブプロパティすべてをアニメーションさせることができます。

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
transition-property: all, -moz-specific, sliding;

/* グローバル値 */
transition-property: inherit;
transition-property: initial;
transition-property: revert;
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

### 単純な例

この例では、ユーザーが要素の上にカーソルを置いたときに、 4 秒間でフォントサイズの遷移を行います。 `transition-property` は `font-size` です。

#### HTML

```html
<a class="target">ここにマウスポインターを置いてください</a>
```

#### CSS

```css
.target {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
}

.target:hover {
  font-size: 36px;
}
```

#### 結果

{{EmbedLiveSample('Simple_example', 600, 100)}}

`transition-property` のその他の例は、主となる [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)の記事にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS トランジションの使用](/ja/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
