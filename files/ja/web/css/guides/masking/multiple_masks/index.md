---
title: 複数のマスクの宣言
slug: Web/CSS/Guides/Masking/Multiple_masks
original_slug: Web/CSS/CSS_masking/Multiple_masks
l10n:
  sourceCommit: 09877330004e55244a9e8eee2ca04a750970f72d
---

CSS マスクは、画像を使用して、要素のどの領域を表示するか、または半透明にするかを定義する手法です。CSS マスクは、アルファチャンネル、および場合によっては適用されたマスク画像の色の明るさに基づいて、要素の一部を選択的に表示または非表示にします。

CSS マスクは、仮面舞踏会（マスクドボール）で着用されるマスクとは逆のものです。仮面舞踏会では、マスクの不透明な部分は着用者の顔が隠され、マスクを通して見える部分は顔が見えます。CSS では、合成されたマスクレイヤーが完全に不透明な部分は要素が露出し、透明な部分は要素が隠されます。

CSS マスクは、 1 つ以上のマスクレイヤーで構成されます。このガイドでは、マスクレイヤーの概念と、 {{cssxref("mask")}} 一括指定プロパティを使用して複数のマスクレイヤーを宣言する方法について説明します。

## マスクレイヤーについて

CSS マスクは、すべての HTML 要素およびほとんどの SVG 要素に適用できます。マスクは、1 つ以上の合成マスクレイヤーで構成できます。複数のレイヤーは、{{cssxref("mask")}} 一括指定プロパティまたは {{cssxref("mask-image")}} プロパティでカンマ区切りで定義します。値が `none` に設定されている場合でも、レイヤーとしてカウントされます。

それぞれのマスクレイヤーは、マスクの基準ボックスを基準にして位置決めされる [マスク画像](/ja/docs/Web/CSS/Reference/Properties/mask-image) を含めることができます。画像のサイズ変更、繰り返し、クリップが可能です。複数のマスク画像を含める場合、マスクレイヤーの合成や結合の方法を定義することができます。（これらの機能については、このガイドで簡単に紹介しています。詳細と例については、[マスクプロパティガイド](/ja/docs/Web/CSS/CSS_masking/Mask_properties)を参照してください。）

### 複数のマスクレイヤーの構文

`mask` 一括指定プロパティは、カンマで区切られたマスクレイヤーのリストを受け入れます。それぞれのレイヤーの構文には、次の値を含めることができます。

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

マスクレイヤーのすべての要素はオプションです。ただし、`mask-image` 値を省略すると、既定では透明な黒い画像になり、そのレイヤーの要素が完全に非表示になります。

`mask` 一括指定宣言は、すべての `mask-*` プロパティの値を設定します。レイヤー内で宣言されていない要素は、すべて初期値に設定されます。`mask` プロパティは、すべての `mask-border-*` プロパティも初期値にリセットします。`mask-image` 値のみを含む `mask` 宣言は、暗黙的に以下を設定します。

```css
mask-mode: match-source;
mask-position: 0% 0%;
mask-size: auto;
mask-repeat: repeat;
mask-origin: border-box;
mask-clip: border-box;
mask-composite: add;

mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

### `mask-image` を使用してマスクレイヤーを定義

カンマ区切りの {{cssxref("mask-image")}} プロパティ宣言に `none` 以外の値が 1 つ以上含まれている限り、宣言内のすべての値について、 `none` 値についてもマスクレイヤーが作成されます。この動作は、 `mask-image` プロパティを使用している場合でも、 `mask` 一括指定を使用している場合でも適用されます。これらのマスク画像は、グラデーション、画像、または SVG ソースにすることができます。これらは、 [CSS グラデーション](/ja/docs/Web/CSS/Guides/Images/Using_gradients)、ラスター画像（PNG など）、または SVG の {{svgelement("mask")}} 要素を使用して定義することができます。

```css
.gradient-mask {
  mask-image: linear-gradient(to right, black, transparent);
}

.raster-mask {
  mask-image: url(alphaImage.png);
}

.mask-element-mask {
  mask-image: url(#svg-mask);
}
```

[マスクの入門ガイド](/ja/docs/Web/CSS/Guides/Masking) では、さまざまな種類のマスク画像とそのモードについて紹介しています。
`mask-image` プロパティは、{{cssxref("background-image")}} プロパティと似ています。 `background-image` プロパティと同様に、複数のマスク画像を含めるには、画像の値をカンマで区切ります。

```css
.multiple-gradient-mask {
  mask-image:
    linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%);
}
```

複数の画像宣言内のそれぞれのマスク画像は、マスクレイヤーを作成します。この章のすべての例では、2 つのマスクレイヤーを作成する `multiple-gradient-mask` 宣言を除き、1 つのマスクレイヤーを作成します。

### マスクレイヤーと `none` キーワード

`mask-image` プロパティの値が `none` のみの場合、マスクレイヤーは作成されず、マスキングは行われません。

```css
.no-masks {
  mask-image: none;
}
```

同様に、`mask` 一括指定を使用する場合、`none` 以外の `mask-image` 値が存在しない場合は、マスクは適用されません。次のいずれかが宣言されている場合、マスクレイヤーは作成されず、何も非表示になりません。

```css
mask: none;
mask: none 100px 100px no-repeat;
mask: 100px 100px no-repeat;
```

それ以外の場合、`none` に設定されていない `mask-image` が宣言されている限り、カンマ区切りリスト内のすべての値に対して、マスクレイヤーが作成されます。これは、カンマ区切りリスト内の値から `mask-image` 値が省略されている場合や、明示的に `none` に設定されている場合でも同様です。言い換えれば、プロパティ全体が `none` に解決されない限り、カンマで区切られた有効な値ごとにレイヤーが作成されます。

```css
.masked-element {
  mask-image:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

マスクソースのリスト内にキーワード `none` を指定すると、透明な黒い画像レイヤーであるマスクレイヤーが作成されます。クラス `masked-element` が指定されている要素には、5 つのマスクレイヤーが存在します。

`mask` 一括指定を使用してレイヤーを作成することもできます。

```css
.masked-element {
  mask:
    url(alphaImage.png), linear-gradient(to right, black, transparent),
    radial-gradient(circle, white 50%, transparent 75%), none, url(#svg-mask);
}
```

カンマで区切られた値のリスト内の値が、空の画像、ダウンロードに失敗、存在しない `<mask>` 要素を参照、またはその他の理由で表示できない（または `none` に設定されている）場合でも、その値はマスク画像レイヤーとしてカウントされ、視覚的な効果のない透明な黒いマスク画像がレンダリングされます。すべての値がこのように設定されている場合、要素は完全に非表示になります。

プロパティ全体が `none` に解決された場合、マスキングは発生せず、要素は完全に表示されます。一方、値に複数のレイヤーが含まれており、そのうちの少なくとも 1 つが `none` ではない場合、 `none` のレイヤーは要素のどの部分も表示しません（または要素のどの部分も表示可能にはしません）。この例では、値は `none` に解決されませんが、 `none` 以外の画像はすべて不正であるため、マスクが発生し、要素は完全に非表示になります。

計算値が `none` 以外の場合、[CSS 重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)が作成されます。

### マスクレイヤーが `mask-*` プロパティに与える影響

マスクレイヤーの数は、`mask` 宣言よりも詳細度が高い、またはそれに対応する個別の `mask-*` プロパティも使用している場合に重要になります。

`mask-*` プロパティには、以下のものが含まれます。

- {{cssxref("mask-mode")}}: それぞれのマスクレイヤーのモードを `alpha` または `luminance` のいずれかに設定します。または、値を `match-source` に設定して、ソースのモードを既定値にします。既定は `match-source` です。

- {{cssxref("mask-position")}}: {{cssxref("background-position")}} プロパティと同様に [`background-position` の `<position>` 構文](/ja/docs/Web/CSS/Reference/Properties/background-position#position)に従う構文を持ち、`mask-origin` プロパティで定義されたマスクレイヤーの基準ボックスを基準として、マスク画像の初期位置を相対的に設定します。1 つ、2 つ、または 4 つの {{cssxref("&lt;position&gt;")}} 値が指定できます。既定の `0% 0%` は、マスクの左上隅をマスクの基準ボックスの左上隅に配置します。

- {{cssxref("mask-origin")}}: {{cssxref("background-origin")}} プロパティと同様に、マスク画像が配置されるマスクの基準ボックス領域である「マスクの位置指定領域」を指定します。例えば、`mask-position` が `top left` の場合、このプロパティは、それが境界線の外縁、パディングの外縁、またはコンテンツの外縁のどれを基準とするかを定義します。

- {{cssxref("mask-clip")}}: {{cssxref("background-clip")}} プロパティと同様に、マスクの影響を受ける要素の領域を決定します。マスクの描画領域が境界線、パディング、またはコンテンツボックスのいずれであるかを定義し、要素の描画コンテンツをこの領域に制限します。マスクレイヤーの {{cssxref("mask-image")}} ソースが SVG の `<mask>` 要素の場合、`mask-clip` プロパティは効果はありません。

- {{cssxref("mask-size")}}: {{cssxref("background-size")}} プロパティと同様に、マスクレイヤーのサイズを指定するために使用します。値は、単一のキーワード（`cover`、`contain`、`auto` のいずれか）、単一の長さまたはパーセント値、またはスペースで区切られた 2 つの値（それぞれ、長さ、パーセント値、または `auto`）を指定できます。既定値は `auto` です。

- {{cssxref("mask-repeat")}}: {{cssxref("background-repeat")}} プロパティと同様に、これは、マスクレイヤーの画像が、サイズと位置が指定された後にどのようにタイル化されるかを定義します。

- {{cssxref("mask-composite")}}: マスクが、その下のマスクレイヤーとどのように結合されるかを定義します。それぞれのマスクレイヤーは、その下の前回合成されたマスクレイヤーに追加、削除、含まれます、または除外されます。`mask-mode` と同様に、類似の `background-*` プロパティはありません。

カンマで区切られた `mask` コンポーネントプロパティのリスト内のそれぞれの `mask-*` 値は、別個のマスクレイヤーに適用されます。前述のように、要素には複数のマスクレイヤーを適用することができます。レイヤーの数は、 `mask-image` または `mask` プロパティにカンマで区切られた値の数によって決まります。それぞれの `mask-*` 値は、順番にマスクレイヤーと照合されます。 `mask-*` プロパティの値の数値がマスクレイヤーの数よりも多い場合、余分な値は無視されます。マスク要素のプロパティの値がマスクレイヤーの数よりも少ない場合、 `mask-*` 値は繰り返されます。

これらの個々のプロパティの詳細については、[CSS マスクプロパティ](/ja/docs/Web/CSS/CSS_masking/Mask_properties) を参照してください。

## 一括指定成分プロパティの並び順

ほとんどの場合、プロパティの順序は柔軟ですが、いくつかの例外があります。

### `mask-origin` と `mask-clip` の並び順のルール

構文で `<origin>` として掲載されている `mask-origin` の値は、構文で `<clip>` として掲載されている `mask-clip` の値よりも前に指定してください。

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

どちらも [`<geometry-box>`](/ja/docs/Web/CSS/Reference/Values/box-edge#geometry-box) キーワードを受け入れます。さらに、`mask-clip` は `no-clip` も受け入れます。このため、`mask-clip` を `no-clip` 以外の値に設定する場合は、この 2 つの順序が重要になります。

- 1 つの `<geometry-box>` 値が `no-clip` キーワードとともに存在する場合は、`<geometry-box>` が `mask-origin` 値を設定し、`mask-clip` は `no-clip` に設定されます。この場合、順序は関係ありません。

- 1 つの `<geometry-box>` 値のみが存在し、`no-clip` キーワードがない場合、`mask-origin` および `mask-clip` 要素はどちらもその値に設定されます。値は 1 つしかないので、順序は関係ありません。

- 2 つの `<geometry-box>` 値が存在する場合、最初の値は `mask-origin` 要素を設定し、2 つ目の値は `mask-clip` 要素を設定します。この場合、順序はとても重要です。

`mask-origin` および `mask-clip` の値の順序を間違って設定すると、外観に影響が出る場合がありますが、宣言は失敗することはありません。

### `mask-size` と `mask-position` の並び順のルール

構文で `<position>` および `<size>` として掲載されている `mask-position` と `mask-size` の間にスラッシュがあることに気付いたかもしれません。どちらのプロパティも同様の値を受け入れます。

`<image> <position> / <size> <repeat> <origin> <clip> <composite> <mode>`

この場合、順序はとても重要になります。1 つまたは 2 つの {{cssxref("length-percentage")}} 値しか存在しない場合、サイズではなく画像の位置が定義されます。スラッシュを含まない位置とサイズの両方をマスクレイヤーに記載すると、宣言全体が不正になります。

```css
mask:
  url(star.svg) bottom 2em right 4em / auto 2vw no-repeat padding-box
    content-box luminance,
  url(circle.svg) 100px 100px / 50% repeat-x border-box padding-box alpha;
```

1 組の `<length-percentage>` 値が存在する場合、`mask-position` プロパティが設定され、`mask-size` は `auto` になります。レイヤーに `mask-size` と `mask-position` の両方が含まれている場合、`mask-size` プロパティの値は `mask-position` プロパティの値の後ろに記述し、値はスラッシュ (`/`) で区切る必要があります。`mask-size` が `mask-position` の有効な値ではない値に設定されている場合でも、スラッシュが要求されます。

```css example-bad
mask: url(star.svg) contain;
mask: url(star.svg) 10px 10px cover;
mask: url(star.svg) top right 100px 100px;
```

```css example-good
mask: url(star.svg) 10px 10px / cover;
mask: url(star.svg) top 100px right 100px;
mask: url(star.svg) top right / 100px 100px;
```

`mask` 一括指定を使用してマスクレイヤーに `mask-size` を指定するには、その直前にスラッシュを付けた `mask-position` 値を含める必要があります。

> [!WARNING]
> マスクレイヤーにサイズを記載し、位置の後にスラッシュを忘れると、宣言全体が無効になります。

## 関連情報

- [CSS マスク入門](/ja/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS マスクプロパティ](/ja/docs/Web/CSS/CSS_masking/Mask_properties)
- [CSS クリップ入門](/ja/docs/Web/CSS/Guides/Masking/Clipping)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
