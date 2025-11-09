---
title: mask-position
slug: Web/CSS/Reference/Properties/mask-position
original_slug: Web/CSS/mask-position
l10n:
  sourceCommit: 14e9ec66f59c8c97242e9863b2d19902522638ae
---

**`mask-position`** は [CSS](/ja/docs/Web/CSS) プロパティで、定義されたマスク画像それぞれについて、 {{cssxref("mask-origin")}} で設定されたマスク位置レイヤーに対する初期位置を設定します。

## 構文

```css
/* 単一の <position> キーワード値 */
/* 2 つ目の値を 'center' に設定する */
mask-position: left;
mask-position: center;
mask-position: right;
mask-position: top;
mask-position: bottom;

/* 2 つの <position> キーワード値 */
mask-position: left center;
mask-position: right top;

/* 1 つの長さまたはパーセント値の <position> 値 */
/* 水平位置。垂直位置は 'center' に設定する */
mask-position: 25%;
mask-position: 0px;
mask-position: 8em;

/* 2 つの長さまたはパーセント値の <position> 値 */
/* 1 つ目の値は水平位置、2 つ目の値は垂直位置 */
mask-position: 25% 75%;
mask-position: 0px 0px;
mask-position: 10% 8em;

/* 端からのオフセット: 4 つの <position> 値 */
mask-position: bottom 10px right 20px;
mask-position: right 3em bottom 10px;
mask-position: bottom 10px right 0;

/* 複数の <position> 値 */
mask-position:
  top left,
  bottom 10px right 10px;
mask-position:
  1rem 1rem,
  center;

/* グローバル値 */
mask-position: inherit;
mask-position: initial;
mask-position: revert;
mask-position: revert-layer;
mask-position: unset;
```

### 値

1 つ以上の `<position>` 値をカンマで区切ったものです。

- {{cssxref("&lt;position&gt;")}}
  - : 要素ボックスの辺からの 2 次元の位置を表す 1 つから 4 つの値です。相対または絶対オフセットを与えることができます。

## 解説

`mask-position` プロパティは、各マスクレイヤーの位置を定義します。1 つの要素に複数のマスクレイヤーを適用することができます。レイヤーの数は、 {{cssxref("mask-image")}} プロパティの値にカンマで区切られた値の数によって決まります（`none` 値もレイヤーを作成します）。

カンマで区切られた値のリスト内のそれぞれの `mask-position` 値は、 `mask-image` 値のリストで定義されている関連付けられたマスクレイヤーと順番に対応付けられます。 2 つのプロパティの値の数が異なる場合は、次のようになります。

- `mask-position` の数が mask-image の数よりも多い場合、 `mask-position` の余分な値は使用されません。
- `mask-position` の数が mask-image の数よりも少ない場合、 `mask-position` の値が繰り返されます。

それぞれの `mask-position` は、関連付けられた {{cssxref("mask-origin")}} 値に対する関連付けられたマスクレイヤーの位置を定義します。 `mask-origin` プロパティの値は、同様に `mask-image` の値と順番に照合され、余分な `mask-position` 値は使用されないか、 `mask-position` 値の数が `mask-origin` 値よりも少ない場合は繰り返されます。したがって、各マスクレイヤーには、関連付けられた `mask-origin` および `mask-position` 値が存在します。

`mask-origin` が設定されていない場合、値は既定で `padding-box` になります。これは、各 `mask-position` の原点が要素の[パディングボックス](/ja/docs/Web/CSS/Reference/Values/box-edge#padding-box)であることを意味しています。

### 単一値の構文

`mask-position` の値が 1 つだけ指定されている場合、2 つ目の値は `center` と見なされます。値が `<length>` または `<percentage>` の場合、マスクが原点ボックス内で垂直方向に中央に配置されるように、水平軸に沿ったマスクの位置を定義します。例えば、`mask-position: 0%;` は `mask-position: 0% center` と同じです。

位置指定に単一のキーワードを使用する場合、もう 1 つの値は `center` に解決されます。 `mask-position` の既定値は `0% 0%` で、これは `mask-position: top left` と等価です。ただし、次の場合は例外です。

- `mask-position: top;` は `mask-position: top center;` と等価です。
- `mask-position: left;` は `mask-position: center left` と等価です。
- `mask-position: center;` は `mask-position: center center` と同じです。

値が {{cssxref("&lt;length&gt;")}} 値の場合、マスクの位置指定の左端からのオフセットとして水平位置を表します。正の値は、ボックスコンテナーの左端から内側へのオフセットを表します。負の値を使用すると、要素のボックスの外側に位置を設定することができます。これにより、アイテムがコンテナーの左端の外側に配置される、外側へのオフセットが作成されます。

#### パーセント値

{{cssxref("&lt;percentage&gt;")}} 値は、コンテナーの幅に対するマスクの水平位置の値を、左端を基準として表します。ただし、オフセットはマスクの端からボックスの端までの距離ではありません。マスク画像の寸法は[コンテナーの寸法から差し引かれます](/ja/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages)、そしてその結果の値のパーセント値が、ボックスの左端からの直接のオフセットとして使用されます。これは、 [`background-position` のパーセント値](/ja/docs/Web/CSS/Reference/Properties/background-position#regarding_percentages)と同じです。

算出式は次のとおりです。

`(container dimension - mask dimension) * position percentage = dimension offset value`

幅 `100px` のマスクと幅 `1000px` の原点ボックスが指定されている場合、`mask-position: 10%;` (`10% 50%` と同等) を設定すると、マスクは左端から `90px` の位置に垂直方向に中央に配置されます。算出は `(1000 - 100) * 10% = 90` です。左のオフセットが `0%` だった場合、マスクの左端はコンテナーの左端に揃います (`(1000 - 100) * 0% = 0`)。

左のオフセットが `100%` だった場合、幅 `100px` のマスクの左端は `900px` (`(1000 - 100) * 100% = 900`) になるため、マスクの右端はコンテナーの右端に寄せられます（`100px` のマスクの幅に、左端からの距離 `900px` を加えると、右端は左端から `1000px` になる、つまりコンテナーの右端になります）。

### 2 つの値の構文

2 つの値で構成される `<position>` は、マスク位置指定領域内のマスク画像の位置を指定します。長さ値とパーセント値は、領域の `left` および `top` からのオフセットを指定します。

2 つの値が {{cssxref("&lt;length&gt;")}} 値、 {{cssxref("&lt;percentage&gt;")}} 値、またはキーワード `center` の場合、最初の値はマスクの位置指定領域の左端からのオフセットとして水平位置を表し、2 つ目の値は、その上端からのオフセットとして垂直位置を表します。パーセント値は、その次元のマスクのサイズによってオフセットされます（パーセント値を参照）。

さらに、 {{cssxref("&lt;percentage&gt;")}} 値が指定されている場合、最初の値は左端を基準とした水平位置の値であり、2 つ目の値は上端を基準とした垂直位置の値でもあります。

軸に固有のキーワードのペアは、軸に固有のキーワードと長さまたはパーセント値と同様に、順序を変更することができますが、2 つの長さまたはパーセント値は交換できません。
2 つの値のうち一方が `top`、`right`、`bottom`、`left` の場合、2 つの値は順不同になります。値のペアに含まれる `center` または `<length-percentage>` 値は、もう一方の寸法に適用されます。

### 4 つの値の構文

4 つの値からなる構文は、2 組の値で構成され、各組には、オフセットする端を指定するキーワードと、オフセットの距離を指定する `<length>` および `<percentage>` 値が含まれています。例えば、`mask-position: left 1em top 2em` は、左のボックスの端から水平方向に `1em`、上端から垂直方向に `2em` オフセットすることを指定します。2 値で表現すると、`mask-position: 1em 2em` となります。

4 つの値の構文を使用する場合、オフセットエッジを定義しているので、順序は重要ではありません。`mask-position: top 2em left 1em` と `mask-position: left 1em top 2em` は、どちらも同じ結果になります。

4 つの値による構文の真の実力は、`left` および `top` 以外の辺からのオフセットを指定できることにあります。例えば、 `mask-position: bottom 10px right 20px` は、下端から 10px 垂直方向に、右端から 20px 水平方向にオフセットを作成します。通常、4 つの値による構文は、下端や右端からオフセットするために使用されます。しかし、2 値構文のオフセットエッジの順番を覚えられない場合にも、この構文は役立ちます。

注意すべき点として、{{cssxref("background-position")}} の `<bg-position>` データ型の値とは異なり、`mask-position` の `<position>` 値は 3 値構文を使用できず、`center` からのオフセットも使用できません。マスクを `bottom` または `right` からオフセットする場合、`mask-position` では 4 つの値すべてを宣言する必要があります。

4 つの値からなる構文が有効であるためには、垂直方向のオフセット端として `top` または `bottom` を、垂直方向の長さまたはパーセント値とともに指定し、水平方向のオフセット端として `left` または `right` を、水平方向の長さまたはパーセント値とともに指定する必要があります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

```html
<section>
  <div></div>
</section>
```

```css
section {
  border: 1px solid black;
  width: 250px;
  height: 250px;
}

div {
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
  background: blue linear-gradient(red, blue);

  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-repeat: no-repeat;
  mask-position: top right;
}
```

{{EmbedLiveSample("basic usage", "", "300px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask-image")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}
- {{cssxref("mask")}} 一括指定
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
- {{cssxref("background-position")}}
- {{cssxref("&lt;position&gt;")}}
