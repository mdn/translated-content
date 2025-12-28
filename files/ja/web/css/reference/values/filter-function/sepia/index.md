---
title: sepia()
slug: Web/CSS/Reference/Values/filter-function/sepia
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`sepia()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、入力画像をセピア色に、より暖かい、より黄色/茶色がかったの表現に変換します。結果は {{cssxref("filter-function")}} です。

{{InteractiveExample("CSS デモ: sepia()")}}

```css interactive-example-choice
filter: sepia(0);
```

```css interactive-example-choice
filter: sepia(0.2);
```

```css interactive-example-choice
filter: sepia(60%);
```

```css interactive-example-choice
filter: sepia(1);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## 構文

```css
sepia(amount)
```

### 引数

- `amount` {{Optional_Inline}}
  - : 変換の度合いで、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 `100%` の値では完全にセピア色になり、 `0%` の値では入力が変更されないままになります。 `0%` と `100%` の間の値は、効果の割合です。{{Glossary("interpolation","補間")}}の初期値は `0` です。デフォルト値は `1` です。

## 形式文法

{{CSSSyntax}}

## 例

### sepia() の正しい値の例

```css
sepia(0)     /* 効果なし */
sepia(.65)   /* 65% セピア色 */

sepia()      /* 完全にセピア色 */
sepia(100%)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

その他の {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティの値で使用できる {{cssxref("filter-function")}} 関数には、次のものがあります。

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
