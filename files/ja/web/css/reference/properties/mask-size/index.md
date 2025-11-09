---
title: mask-size
slug: Web/CSS/Reference/Properties/mask-size
original_slug: Web/CSS/mask-size
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`mask-size`** は [CSS](/ja/docs/Web/CSS) のプロパティで、指定したマスク画像のサイズを指定します。マスク画像のサイズは、その{{glossary("aspect ratio", "アスペクト比")}}を維持するために、完全にまたは部分的に制約することができます。

## 構文

```css
/* キーワード構文 */
mask-size: cover;
mask-size: contain;
mask-size: auto;

/* 値 1 つの構文 */
/* 画像の幅 (高さは 'auto' に設定) */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;

/* 値 2 つの構文 */
/* 1 つ目の値: 画像の幅、2 つ目の値: 高さ */
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto 50%;

/* 複数の値 */
mask-size: auto, contain;
mask-size:
  50%,
  50% 25%,
  auto 25%;
mask-size: 6px, auto, contain;

/* グローバル値 */
mask-size: inherit;
mask-size: initial;
mask-size: revert;
mask-size: revert-layer;
mask-size: unset;
```

### 値

`mask-size` プロパティは、カンマで区切られた `<bg-size>` 値のリストを受け入れます。`<bg-size>` 値は、`cover`、`contain`、幅と高さ（この順）を指定する 2 つの値、または幅を指定する 1 つの値（この場合、高さは `auto` に設定されます）のいずれかです。値には、次のものがあります。

- `contain`
  - : マスク画像のアスペクト比を維持したまま、マスク画像を拡大または縮小し、トリミングや引き伸ばしを行うことなく、コンテナー内でマスクを可能な限り大きくします。
    マスク画像がコンテナーよりも小さい場合、 {{cssxref("mask-repeat")}} プロパティが `no-repeat` に設定されていない限り、マスクはタイル状に繰り返されます。

- `cover`
  - : 画像を可能な限り大きく拡大縮小し、画像のアスペクト比を維持します。マスク画像のアスペクト比が要素と異なる場合、マスク画像は縦または横方向に切り取られます。

- `auto`
  - : マスクソースの元のアスペクト比を維持します。幅と高さの両方に設定すると、マスクリソースの元のサイズが使用されます。それ以外の場合、 `auto` は、マスク画像の元のアスペクト比が維持されるように、対応する方向にマスク画像を変倍します。

- {{cssxref("&lt;length&gt;")}}
  - : 指定した長さで、対応する寸法（最初の値または唯一の値として設定した場合は幅、2 つ目の値として設定した場合は高さ）でマスク画像をレンダリングします。負の値は使用できません。

- {{cssxref("&lt;percentage&gt;")}}
  - : {{cssxref("mask-origin")}} プロパティで定義された、ボックスの基準領域に対する指定したパーセント値で、対応する寸法にマスク画像をレンダリングします。このプロパティの既定値は `padding-box` です。負の値は使用できません。

## 解説

`mask-size` プロパティは、マスクレイヤーのサイズを設定するために使用されます。

1 つの要素に複数のマスクレイヤーを適用することができます。マスクレイヤーの数は、{{cssxref("mask-image")}} プロパティの値にカンマで区切られた値の数によって決まります（値は、 `none` の場合でもマスクレイヤーを作成します）。

カンマで区切られた値のリスト内のそれぞれの `mask-size` 値は、 `mask-image` 値のリストで定義されている関連付けられたマスクレイヤーと順番に対応づけられます。 2 つのプロパティの値の数に違いがある場合は次のようになります。

- `mask-size` の数が `mask-image` の数よりも多い場合、`mask-size` の余分な値は使用されません。
- `mask-size` の数が `mask-image` の数よりも少ない場合、`mask-size` の値が繰り返されます。

それぞれの `mask-size` 値は `<bg-size>` 値です。それぞれの `<bg-size>` を宣言する方法は 3 つあります。1 つはキーワード、2 つの長さ、パーセント値、またはキーワード `auto`、もう 1 つは 1 つの長さ、パーセント値、または `auto` です。

- 利用できるキーワードは `cover` および `contain` です。
- 2 つの値が指定されている場合、最初の値はマスクの幅を定義し、2 つ目の値はマスクの高さを定義します。
- 1 つの値が指定されている場合、その値はマスクの幅のみを定義し、高さは `auto` に設定されます。

幅と高さの値は、{{cssxref("&lt;length&gt;")}}、{{cssxref("&lt;percentage&gt;")}}、または既定値である `auto` キーワードです。 1 つまたは両方の値を `auto` に設定すると、マスク画像の元のアスペクト比が維持されます。

そして、マスク画像の描画の大きさは、以下のように計算されます。

- `mask-size` の両方の要素が指定され、 `auto` ではない場合、マスク画像は指定された寸法で描画されます。
- `mask-size` が `contain` または `cover` であった場合、画像は、マスク配置領域に含まれる、またはマスク配置領域を覆う最大の寸法で、その固有の縦横比を維持して描画されます。画像が固有の縦横比を持たない場合は、マスク配置領域の大きさで描画されます。
- `mask-size` が `auto` である場合（これは `auto auto` に解決されます）、レンダリングを変更する CSS が適用されていない場合にマスクが表示されるサイズでレンダリングされます。これがその {{glossary("intrinsic size", "内在サイズ")}}です。 [CSS グラデーション](/ja/docs/Web/CSS/Reference/Values/gradient) の場合のように、内在的な寸法も内在的な比率も指定されていない場合、マスクの位置指定領域のサイズでレンダリングされます。このサイズは、{{cssxref("mask-origin")}}（既定では `border-box`）で定義されます。
  マスクソースに寸法がなく、比率（アスペクト比）がある場合、値 `auto` を指定すると、`contain` が指定された場合と同じようにレンダリングされます。画像に 1 つの内在サイズと比率が指定されている場合、その 1 つの寸法と比率によって決定されるサイズでレンダリングされます。画像に 1 つの内在サイズが指定されているが、比率が指定されていない場合、内在サイズとマスクの位置指定領域の対応する寸法を使用してレンダリングされます。
- `mask-size` の一方が `auto` 成分でもう一方が `auto` 成分ではなく、それらがすべての単一の値に適用される場合、マスクソースに内在的な比率があるのであれば、アスペクト比が維持されます。内在的な比率がない場合、 `auto` 値はマスクの位置指定領域のサイズと見なされます。

一括指定プロパティのすべての個別指定要素と同様に、 {{cssxref("mask")}} 一括指定プロパティが設定されており、 `mask-size` プロパティの値がどのマスクレイヤーでも定義されていない場合、そのマスクレイヤーの `mask-size` 値は初期値 `auto` にリセットされます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### マスクの大きさをパーセント値で設定

この例では、基本的な使用法と、`mask-size` のパーセント値の表示方法を示しています。

#### HTML

2 つの {{htmlelement("div")}} 要素を設置します。

```html
<div class="width"></div>
<div class="height"></div>
```

#### CSS

`<div>` 要素は、幅の 2 倍の高さであり、グラデーションの背景とマスクに対応するように定義されています。

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mdn.svg);
}
```

1 つの `<div>` 要素のマスクの幅は `50%` に設定され、高さは既定で `auto` になります。2 つ目の `<div>` 要素のマスクの高さは `50%` に設定され、幅は `auto` に設定されます。

```css
.width {
  mask-size: 50%;
}

.height {
  mask-size: auto 50%;
}
```

`width` の場合、マスクは幅 `100px`（幅 `200px` の要素の `50%`）でレンダリングされます。高さは既定で `auto` となり、マスクのアスペクト比が維持されます。
`height` の場合、マスクは高さ `200px`（高さが `400px` のコンテナーの `50%`）でレンダリングされます。幅は、マスクのアスペクト比を維持するために、明示的に `auto` に設定されます。

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

#### 結果

{{EmbedLiveSample("Setting mask size as a percentage", "", "430px")}}

### cover と contain

この例では、　`mask-size` のキーワードの値を示しています。

#### HTML

3 つの {{htmlelement("section")}} 要素を定義しており、それぞれに異なるクラス名をつけており、それぞれに `<div>` があります。

```html
<section class="auto">
  <div></div>
</section>
<section class="cover">
  <div></div>
</section>
<section class="contain">
  <div></div>
</section>
```

#### CSS

`<div>` 要素は、幅の 2 倍の高さであり、グラデーションの背景とマスクに対応するように定義されています。

```css
div {
  width: 200px;
  height: 400px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}
```

2 つの `<div>` 要素の `mask-size` は、プロパティのキーワード値のいずれかに設定されています。3 つ目の `<div>` の `mask-size` は `auto` に設定されており、マスクの元の内在サイズが示されています。

```css
.auto div {
  mask-size: auto;
}

.cover div {
  mask-size: cover;
}

.contain div {
  mask-size: contain;
}
```

プロパティの値は、[生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content) を使用して表示されます。

```css
section::before {
  content: "mask-size: " attr(class) ";";
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

#### 結果

{{EmbedLiveSample("Cover and contain", "", "430px")}}

`auto` を使用すると、星は内在サイズである `100px` × `100px` で表示されます。`cover` では、星は基準ボックス全体を覆うように高さ `400px` まで伸長します。`contain` では、星は、その一辺の長さが[基準ボックス](/ja/docs/Web/CSS/Reference/Properties/mask-origin)と同じになるまで伸長します。これは、星は可能な限り大きく（幅 `200px`）なるが、基準ボックス内に収まることを意味しています。

### マスクがコンテナーよりも大きい場合

上記と同じ HTML と CSS を使用し、基準ボックスのサイズのみを変更して、基準ボックスがマスクの内在サイズよりも小さい場合に何が起こるかをこの例で探ります。

```html hidden
<section class="auto">
  <div></div>
</section>
<section class="cover">
  <div></div>
</section>
<section class="contain">
  <div></div>
</section>
```

```css hidden
div {
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
}

.auto div {
  mask-size: auto;
}

.cover div {
  mask-size: cover;
}

.contain div {
  mask-size: contain;
}

section::before {
  content: attr(class);
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}

body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

唯一の違いは、コンテナーのサイズ（および生成コンテンツ）です。

```css
div {
  width: 70px;
  height: 70px;
}
```

{{EmbedLiveSample("When the mask is larger than the container", "", "120px")}}

`contain` の値は、基準ボックス内のマスクを含みます。`cover` の値は、マスクを覆います。どちらの場合も、マスクは元のアスペクト比を維持したまま縮小されます。`auto` に対応するマスクは、その内在的なサイズがボックスのサイズよりも大きいため、切り取られます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask")}} 一括指定
- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-border")}}
- {{cssxref("background-size")}}
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
