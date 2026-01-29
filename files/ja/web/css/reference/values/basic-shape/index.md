---
title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`<basic-shape>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、{{cssxref("clip-path")}}、{{cssxref("shape-outside")}}、{{cssxref("offset-path")}} の各プロパティで使用されるシェイプを表します。

{{InteractiveExample("CSS デモ: &lt;basic-shape&gt;")}}

```css interactive-example-choice
clip-path: inset(22% 12% 15px 35px);
```

```css interactive-example-choice
clip-path: circle(6rem at 12rem 8rem);
```

```css interactive-example-choice
clip-path: ellipse(115px 55px at 50% 40%);
```

```css interactive-example-choice
clip-path: polygon(
  50% 2.4%,
  34.5% 33.8%,
  0% 38.8%,
  25% 63.1%,
  19.1% 97.6%,
  50% 81.3%,
  80.9% 97.6%,
  75% 63.1%,
  100% 38.8%,
  65.5% 33.8%
);
```

```css interactive-example-choice
clip-path: path("M 50,245 A 160,160 0,0,1 360,120 z");
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## 構文

`<basic-shape>` データ型は、[コンテナーの辺からの距離](#コンテナーの辺からの距離による矩形の構文)、[座標距離](#座標による矩形の構文)、[一連の寸法](#寸法による矩形の構文)によって生成する矩形、[円](#円の構文)、[楕円](#楕円の構文)、[多角形](#多角形の構文)、[パス](#パスの構文)、それに[作成者が生成したシェイプ](#シェイプの構文)などを生成します。これらの基本シェイプは、1 つの `<basic_shape>` CSS 関数を使用して定義され、それぞれの値にはシェイプ固有の構文に従う引数が必要です。

### 共通の引数

いくつかの基本シェイプ関数に共通する引数には、以下のものがあります。

- `round <'border-radius'>`
  - : 角丸を定義します。[コンテナーの辺からの距離による矩形](#コンテナーの辺からの距離による矩形の構文)、 [距離による矩形](#座標による矩形の構文)、および[寸法による矩形](#寸法による矩形の構文)を定義します。これらは CSS の {{cssxref("border-radius")}} 一括指定プロパティと同じ構文を使用します。

- `<shape-radius>`
  - : [円](#円の構文)または[楕円](#楕円の構文)の半径を定義します。有効な値には、{{cssxref("length")}}、{{cssxref("percentage")}}、`closest-side`（デフォルト）、`farthest-side` があります。負の値は無効です。

    `closest-side` キーワード値は、シェイプの中心から参照ボックスの最も近い辺までの距離を用いて半径の長さを作成します。`farthest-side` キーワード値は、シェイプの中心から参照ボックスの最も遠い辺までの距離を用います。

- `<position>`
  - : [円](#円の構文)または[楕円](#楕円の構文)の中心位置 ({{cssxref("&lt;position&gt;")}}) を定義します。省略した場合、デフォルトは `center` です。

- `<fill-rule>`
  - : 塗りつぶしルール ({{SVGAttr("fill-rule")}}) を設定します。これは基本シェイプの[多角形](#多角形の構文)、[パス](#パスの構文)、[シェイプ](#シェイプの構文)で定義されたシェイプの内部を塗りつぶす方法を決定します。可能な値は `nonzero`（デフォルト）と `evenodd` です。

    > [!NOTE]
    > `<fill-rule>` は {{cssxref("offset-path")}} では対応しておらず、使用するとプロパティが無効になります。

### 矩形の構文: `<basic-shape-rect>`

`<basic-shape-rect>` 型は `<basic-shape>` 型のサブセットであり、{{cssxref("basic-shape/inset","inset()")}}、{{cssxref("basic-shape/rect","rect()")}}、{{cssxref("basic-shape/xywh","xywh()")}} など、矩形を生成することに限定された基本シェイプ関数を表します。

[`polygon()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/polygon)、[`path()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/path)、[`shape()`](/ja/docs/Web/CSS/Reference/Values/basic-shape/shape) 関数も矩形を生成するために使用できますが、これらは四辺形かつ直角の形状に限定されません。

#### コンテナーの辺からの距離による矩形の構文

{{cssxref("basic-shape/inset","inset()")}} 関数は、変からの距離で矩形を生成します。そのサイズは、コンテナーの 4 つの辺それぞれからの距離によって定義され、オプションで角を丸めることもできます。

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

最初の 4 つの引数が与えられたときは、参照ボックス内部のそれぞれ上、右、下、左からみた、内部の矩形における各辺の位置を定義するオフセットを表します。これらの引数は {{cssxref("margin")}} 一括指定の構文に従い、1 つ、2 つ、3 つ、4 つの値で全四辺を設定することができます。

ある寸法に対する辺からの距離のペアの合計がその寸法の 100% を超える場合、両方の値は比例して縮小され、その合計が 100% になるように調整されます。例えば、`inset(90% 10% 60% 10%)` の値では、上部の辺からの距離が `90%`、下部の辺からの距離が `60%` となります。これらの値は `inset(60% 10% 40% 10%)` に比例して縮小されます。領域を囲まず、{{cssxref("shape-margin")}} を持たないこのようなシェイプは、折り返しに影響を与えません。

#### 座標による矩形の構文

{{cssxref("basic-shape/rect","rect()")}} 関数は、参照ボックスの上端および左端からの指定距離を用いて矩形を定義し、オプションで角を丸めることができます。

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

`rect()`関数を使用する場合、矩形の幅と高さを定義しません。代わりに、参照ボックスのサイズと 4 つのオフセット値によって決定される矩形を作成するために、4 つの値を指定します。それぞれの値は {{cssxref("length")}}、{{cssxref("percentage")}}、キーワード値 `auto` のいずれかです。`auto` キーワードは、上辺と左辺の値では `0%`、下辺と右辺の値では `100%` として解釈されます。

#### 寸法による矩形の構文

{{cssxref("basic-shape/xywh","xywh()")}} 関数は、参照ボックスの左端 (`x`) および上端 (`y`) からの指定距離に位置し、指定された幅 (`w`) と高さ (`h`) で大きさが定義される矩形を定義します。角の丸めはオプションです。

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### 円の構文

{{cssxref("basic-shape/circle","circle()")}} 関数は、半径と位置を使用して円を定義します。

```plain
circle( <shape-radius>? [ at <position> ]? )
```

引数 `<shape-radius>` は円の半径を {{cssxref("length")}} または {{cssxref("percentage")}} で表します。ここでパーセント値は、参照ボックスの幅と高さを使用して `sqrt(width^2+height^2)/sqrt(2)` としての割合になります。省略された場合、半径は `closest-side` で定義されます。

### 楕円の構文

{{cssxref("basic-shape/ellipse","ellipse()")}} 関数は、2 つの半径と位置を用いて楕円を定義します。

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

引数 `<shape-radius>` は、_rx_ と _ry_、つまり楕円の X 軸半径と Y 軸半径を、この順で表します。これらの値は {{cssxref("length")}} または {{cssxref("percentage")}} で指定します。ここでパーセント値を指定すると、参照ボックスの使用幅（rx 値）および使用高（ry 値）に対して解決されます。半径値が 1 つしか指定されていない場合、`ellipse()` シェイプ関数は不正となります。値が指定されていない場合は、`50% 50%` が使用されます。

### 多角形の構文

{{cssxref("basic-shape/polygon","polygon()")}} 関数は、塗りつぶしルール（SVG の {{SVGAttr("fill-rule")}}）と座標の集合を使用して多角形を定義します。

```plain
polygon( <'fill-rule'>? , [ <length-percentage> <length-percentage> ]# )
```

この関数は、カンマ区切りの座標ペアのリストを受け取ります。それぞれのペアは空白で区切られた 2 つの `<length-percentage>` 値で構成され、_xi_ と _yi_ のペアを表します。これらの値は、位置 _i_（2 本の線が交わる頂点）における多角形の x 軸および y 軸座標を表します。

### パスの構文

{{cssxref("basic-shape/path","path()")}} 関数は、SVG の塗りつぶしルール ({{SVGAttr("fill-rule")}}) と[パス定義](/ja/docs/Web/SVG/Reference/Attribute/d)を使用してシェイプを定義します。

```plain
path( <'fill-rule'>? , <string> )
```

必須の `<string>` は、引用符で囲まれた文字列として指定される [SVG パス] (/ja/docs/Web/SVG/Reference/Attribute/d) です。`path()` 関数は {{cssxref("shape-outside")}} プロパティの値としては有効ではありません。

### シェイプの構文

{{cssxref("basic-shape/shape","shape()")}} 関数は、最初の始点と一連のシェイプコマンドを用いてシェイプを定義します。

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

`from <coordinate-pair>` 引数は最初のシェイプコマンドの始点を表し、`<shape-command>` は 1 つ以上のシェイプコマンドを定義します。これらは [SVG パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド) に類似しています。`shape()` 関数は {{cssxref("shape-outside")}} プロパティの値としては有効ではありません。

## 解説

シェイプを定義する際、参照ボックスは `<basic-shape>` の値を使用するプロパティによって規定されます。シェイプの座標系は、デフォルトで要素のマージンボックスの左上角を原点とし、x軸は右方向、y軸は下方向に向かいます。パーセント値で表現されるすべての長さは、参照ボックスのサイズから解決されます。

デフォルトの参照ボックスは [`margin-box`](/ja/docs/Web/CSS/Reference/Values/box-edge#margin-box) であり、下記画像に示した通りです。この画像は `shape-outside: circle(50%)` を使用して生成された円を示し、ブラウザーの開発者ツールで確認できるボックスモデルの異なる部分を強調しています。ここで定義されているシェイプはマージンボックスを参照して定義されています。

![Firefox 開発者ツールのシェイプインスペクターで検査した円の画像。ボックスモデルの異なる部分が強調表示されています。](shapes-reference-box.png)

### 基本シェイプの計算値

`<basic-shape>` 関数のにおける値は、以下の条件を除けば、規定通りに計算されます。

- 省略された値は、デフォルト値が用いられます。
- {{cssxref("position_value", "&lt;position&gt;")}} 値が `circle()` または `ellipse()` で使用されると、参照ボックスの左上角からのオフセットのペアとして計算されます。最初のオフセットは水平方向、2つ目のは垂直方向です。それぞれのオフセットは {{cssxref("length-percentage")}} 値で指定されます。
- [`<border-radius>`](/ja/docs/Web/CSS/Reference/Properties/border-radius) の値が `inset()` で使用されると、全 8 つの {{cssxref("length")}} または {{cssxref("percentage")}} のリストとして展開されます。
- {{cssxref("basic-shape/inset","inset()")}}、{{cssxref("basic-shape/rect","rect()")}}、{{cssxref("basic-shape/xywh","xywh()")}} 関数は同等の `inset()` 関数に計算されます。

### 基本シェイプの補間

2 つの `<basic-shape>` 関数間でアニメーションを行う場合、以下の{{Glossary("interpolation", "補間処理")}}ルールが続きます。それぞれの `<basic-shape>` 関数の引数値はリストを形成します。2 つのシェイプ間での補間処理が行われるためには、両方のシェイプが同じ参照ボックスを使用し、両方の `<basic-shape>` リスト内の値の数と種類が一致している必要があります。

2 つの `<basic-shape>` 関数のリスト内のそれぞれの値は、その計算値が {{cssxref("number")}}、{{cssxref("length")}}、{{cssxref("percentage")}}、{{cssxref("angle")}}、{{cssxref("calc()")}} として計算された値に基づいて補間処理が行われます。値がこれらのデータ型に該当しない場合でも、補間対象の 2 つの基本シェイプ関数間で値が同一である場合（`nonzero` など）、補間処理が行われることがあります。

- **両方のシェイプが `ellipse()` または `circle()` 型の場合**: 補間処理は、それぞれの対応する値の半径が {{cssxref("length")}} または {{cssxref("percentage")}}（`closest-side` や `farthest-side` などのキーワードではなく）で指定されている場合に適用されます。

- **両方のシェイプが `inset()` 型の場合**: それぞれの対応する値の間に補間処理が適用されます。

- **両方のシェイプが `polygon()` 型の場合**: 補間処理は、対応するそれぞれの値が同じ `<fill-rule>` を使用し、カンマ区切りの座標ペアの数が同じ場合に適用されます。

- **両方のシェイプが `path()` 型の場合**: 補間処理は、両方の図形のパス文字列の[パスデータコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#path_commands)の数、種類、順序が一致する場合、それぞれの引数に対して {{cssxref("&lt;number&gt;")}} として適用されます。

- **両方のシェイプが `shape()` 型の場合**: 対応するそれぞれの値間で補間処理が適用されます。これらは同一のコマンドキーワードを持ち、同じ `<by-to>` キーワードを使用している場合に限ります。{{cssxref("clip-path")}} プロパティで `shape()` が使用されている場合、2 つの図形は同時に同じ `<fill-rule>` も持っている場合に補間されます。
  - `<curve-command>` または `<smooth-command>` を使用した場合は、制御点の数が一致すると補間処理が行われます。

  - `<arc-command>` を異なる `<arc-sweep>` 方向で使用した場合、補間結果は時計回り (`cw`) になります。異なる `<arc-size>` キーワードを使用した場合、サイズは `large` 値を用いて補間されます。

- **一方の図形が `path()` 型で、もう一方が `shape()` 型であった場合**: パスデータコマンドのリストが数と順序の両方で同一である場合、それぞれの対応する値の間に補間処理が適用されます。補間された図形は `shape()` 関数であり、同じパスデータコマンドのリストを維持します。

それ以外の場合、補間処理は行われず、アニメーションは離散的になります。

## 例

### アニメーションする多角形

この例では、[@keyframes](/ja/docs/Web/CSS/Reference/At-rules/@keyframes) アットルールを使用して、2 つの多角形の間でクリップパスをアニメーションします。なお、どちらの多角形も同じ数の角を持つことが、この種のアニメーションが動作するために必要です。

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(red, orange 50px);
  clip-path: polygon(
    50% 0%,
    60% 40%,
    100% 50%,
    60% 60%,
    50% 100%,
    40% 60%,
    0% 50%,
    40% 40%
  );
  animation: 4s poly infinite alternate ease-in-out;
  margin: 10px auto;
}

@keyframes poly {
  from {
    clip-path: polygon(
      50% 0%,
      60% 40%,
      100% 50%,
      60% 60%,
      50% 100%,
      40% 60%,
      0% 50%,
      40% 40%
    );
  }

  to {
    clip-path: polygon(
      50% 30%,
      100% 0%,
      70% 50%,
      100% 100%,
      50% 70%,
      0% 100%,
      30% 50%,
      0% 0%
    );
  }
}
```

#### 結果

{{EmbedLiveSample('Animated_polygon','340', '340')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このデータ型を使用するプロパティ: {{cssxref("clip-path")}}, {{cssxref("offset-path")}}, {{cssxref("shape-outside")}}
- SVG のシェイプ要素: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}
- [CSS シェイプの概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)モジュール
- [CSS マスク入門](/ja/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
- [CSS シェイプのパスを編集する — Firefox 開発者ツール](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
