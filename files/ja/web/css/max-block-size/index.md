---
title: max-block-size
slug: Web/CSS/max-block-size
tags:
  - CSS
  - CSS 論理的プロパティ
  - CSS プロパティ
  - Experimental
  - レイアウト
  - Maximum Height
  - Maximum Width
  - リファレンス
  - height
  - max-block-size
  - recipe:css-property
  - size
  - width
browser-compat: css.properties.max-block-size
translation_of: Web/CSS/max-block-size
---
{{CSSRef}}

**`max-block-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 {{cssxref("writing-mode")}} で指定された書字方向とは逆の向きの要素の最大寸法を指定します。すなわち、書字方向が水平 (横書き) であれば、 `max-block-size` は {{cssxref("max-height")}} と等価になります。書字方向が垂直 (縦書き) であれば、 `max-block-size` は {{cssxref("max-width")}} と同じになります。

もう一方の方向の最大長は、 {{cssxref("max-inline-size")}} プロパティを使用して指定します。

`max-width` は常に水平方向の寸法に使われ、 `max-height` は常に垂直方向の寸法に使われるため、このプロパティはテキストコンテンツの寸法に基づいて寸法を設定する必要がある場合、書字方向を意識して指定する必要がある場合に便利です。

ふつう `max-height` または `max-width` を使用する場面でいつでも、代わりに `max-block-size` をコンテンツの最大の「高さ」を設定するために使用し (これは垂直の値ではない可能性がありますが)、 `max-inline-size`をコンテンツの最大の「幅」を設定するために使用してください (これが横書きではなく縦書きである場合であっても)。様々な書字方向を表す<a href="/ja/docs/Web/CSS/writing-mode#例">例</a>をご覧ください。

{{EmbedInteractiveExample("pages/css/max-block-size.html")}}

## 構文

```css
/* <length> 値 */
max-block-size: 300px;
max-block-size: 25em;

/* <percentage> 値 */
max-block-size: 75%;

/* キーワード値 */
max-block-size: auto;
max-block-size: max-content;
max-block-size: min-content;
max-block-size: fit-content(20em);

/* グローバル値 */
max-block-size: inherit;
max-block-size: initial;
max-block-size: revert;
max-block-size: unset;
```

### 値

`max-block-size` プロパティの値は、 {{cssxref("max-width")}} および {{cssxref("max-height")}} プロパティで有効なすべての値を取ることができます。

{{page("/ja/docs/Web/CSS/max-width", "値")}}

### 書字方向が方向にどう影響するのか

`writing-mode` の値は次のように `max-block-size` から `max-width` または `max-height` への対応付けに影響します。

| `writing-mode` の値                                                                                                                                                                              | `max-block-size` が等価になるもの |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `horizontal-tb`, `lr` {{deprecated_inline}}, `lr-tb` {{deprecated_inline}}, `rl` {{deprecated_inline}}, `rb` {{deprecated_inline}}, `rb-rl` {{deprecated_inline}}  | {{cssxref("max-height")}}  |
| `vertical-rl`, `vertical-lr`, `sideways-rl` {{experimental_inline}}, `sideways-lr` {{experimental_inline}}, `tb` {{deprecated_inline}}, `tb-rl` {{deprecated_inline}} | {{cssxref("max-width")}}  |

> **Note:** `writing-mode` の値のうち `sideways-lr` および `sideways-rl` は設計プロセスの後期に CSS 書字方向s Level 3 仕様書から削除されました。これらは Level 4 で復活する可能性があります。

> **Note:** 書字方向の `lr`, `lr-tb`, `rl`, `rb`, `rb-tl` は {{Glossary("HTML")}} のコンテキストでは許可されなくなりました。 {{Glossary("SVG")}} 1.x コンテキストでのみ利用できる可能性があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_max-block-size_with_horizontal_and_vertical_text">横書きおよび縦書きでの max-block-size の設定</h3>

この例では、同じテキスト ({{interwiki("wikipedia", "en:Herman Melville", "Herman Melville")}} の小説 <em>{{interwiki("wikipedia", "en:Moby-Dick", "Moby-Dick")}}</em> の冒頭部分) が `horizontal-tb` および `vertical-rl` の両方の書字方向で表示されます。

二つのボックスついてそれ以外の部分はすべて、 {{cssxref("max-block-size")}} に使われている値を含めて同じです。

#### HTML

この HTML では、単純に二つの {{HTMLElement("div")}} ブロックを作成し、それぞれの {{cssxref("writing-mode")}} を `horizontal` および `vertical` クラスを用いて設定しています。両方のボックスで `standard-box` クラスを共有しており、こちらで単純に色、パディング、それぞれの `max-block-size` の値を設定しています。

```html
<p>書字方向 <code>horizontal-tb</code> (既定値):</p>
<div class="standard-box horizontal">
  Call me Ishmael. Some years ago—never mind how
  long precisely—having little or no money in my
  purse, and nothing particular to interest me on
  shore, I thought I would sail about a little and see
  the watery part of the world. It is a way I have of
  driving off the spleen and regulating the
  circulation.
</div>

<p>書字方向 <code>vertical-rl</code>:</p>
<div class="standard-box vertical">
  Call me Ishmael. Some years ago—never mind how
  long precisely—having little or no money in my
  purse, and nothing particular to interest me on
  shore, I thought I would sail about a little and see
  the watery part of the world. It is a way I have of
  driving off the spleen and regulating the
  circulation.
</div>
```

#### CSS

この CSS では3つのクラスを定義しています。最初は `standard-box` で、両方のボックスに適用され、上にあるものです。これはブロックの最小および最大の寸法、フォントの大きさ、などを指定します。

その後にくるクラス `horizontal` および `vertical` は、ボックスに {{cssxref("writing-mode")}} プロパティを追加し、値を使われるクラスに応じて `horizontal-tb` または `vertical-rl` に設定します。

```css
.standard-box {
  padding: 4px;
  background-color: #abcdef;
  color: #000;
  font: 16px "Open Sans", "Helvetica", "Arial", sans-serif;
  max-block-size: 160px;
  min-block-size: 100px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

#### 結果

{{EmbedLiveSample("Setting_max-block-size_with_horizontal_and_vertical_text", 600, 850)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応する物理的プロパティ: {{cssxref("max-width")}} と {{cssxref("max-height")}}
- 他の方向の最大寸法の設定: {{cssxref("max-inline-size")}}
- {{cssxref("writing-mode")}}
