---
title: padding
slug: Web/CSS/Reference/Properties/padding
original_slug: Web/CSS/padding
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

**`padding`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、要素の全四辺の[パディング領域](/ja/docs/Web/CSS/Guides/Box_model/Introduction#パディング領域)を一度に設定します。

{{InteractiveExample("CSS デモ: padding")}}

```css interactive-example-choice
padding: 1em;
```

```css interactive-example-choice
padding: 10% 0;
```

```css interactive-example-choice
padding: 10px 50px 20px;
```

```css interactive-example-choice
padding: 10px 50px 30px 0;
```

```css interactive-example-choice
padding: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

要素のパディング領域とは、コンテンツと境界との間の領域のことです。

> [!NOTE]
> パディングは要素の内部に追加の領域を作成します。それに対して、 {{cssxref("margin")}} は要素の*周り*に追加の領域を作成します。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

## 構文

```css
/* 四辺すべてに適用 */
padding: 1em;

/* 上下 | 左右 */
padding: 5% 10%;

/* 上 | 左右 | 下 */
padding: 1em 2em 2em;

/* 上 | 右 | 下 | 左 */
padding: 5px 1em 0 1em;

/* グローバル値 */
padding: inherit;
padding: initial;
padding: revert;
padding: revert-layer;
padding: unset;
```

`padding` プロパティは 1 つ、2 つ、3 つ、4 つの値を使って指定することができます。それぞれの値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。負の数は無効です。

- 値が **1 つ**指定された場合、**全四辺**に同じパディングが適用される。
- 値が **2 つ**指定された場合、1 つ目のパディングは**上下**、2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、1 つ目のパディングは**上**、2 つ目は**左右**、3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、パディングはそれぞれ**上**、**右**、**下**、**左**の順 (時計回り) に適用される。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : パディングの寸法を固定値で表したものです。
- {{cssxref("&lt;percentage&gt;")}}
  - : パディングの寸法を[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)のインラインサイズ（{{cssxref("writing-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。負の数であってはいけません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### パディングをピクセル数で設定

#### HTML

```html-nolint live-sample___setting_padding_with_pixels
<h4>この要素には適度なパディングがあります。</h4>
<h3>この要素のパディングが巨大です。</h3>
```

#### CSS

```css live-sample___setting_padding_with_pixels
h4 {
  background-color: lime;
  padding: 20px 50px;
}

h3 {
  background-color: cyan;
  padding: 110px 50px 50px 110px;
}
```

#### 結果

{{EmbedLiveSample('Setting_padding_with_pixels', '100%', 300)}}

### パディングをピクセル数とパーセント値で設定

```css
padding: 5%; /* 全辺: 5% のパディング */

padding: 10px; /* 全辺: 10px のパディング */

padding: 10px 20px; /* 上と下: 10px のパディング */
/* 左と右: 20px のパディング */

padding: 10px 3% 20px; /* 上:     10px のパディング */
/* 左と右: 3% のパディング   */
/* 下:     20px のパディング */

padding: 1em 3px 30px 5px; /* 上:     1em のパディング */
/* 右:     3px のパディング */
/* 下:     30px のパディング */
/* 左:     5px のパディング */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}
- 対応付けられる論理的プロパティ: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}} および一括指定の {{cssxref("padding-block")}} と {{cssxref("padding-inline")}}
