---
title: oklab()
slug: Web/CSS/Reference/Values/color_value/oklab
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`oklab()`** 関数記法は、指定された色を、人間の目による色の知覚方法を模倣しようとする Oklab {{glossary("color space", "色空間")}}で表現します。

Oklab は知覚的色空間で、次のような場合に使用されます。

- 画像の明度を変えずに、グレースケールに変換する。
- ユーザーが感じる色相や明度を維持したまま、色の彩度を変更する。
- 色の滑らかで均一なグラデーションを作成する（例えば、{{HTMLElement("canvas")}} 要素で手動で補間する場合）。

この `oklab()` は Oklab 色空間上の同次座標系、 a 軸と b 軸で動作します。これは、RGB よりも広い範囲の、広色域や P3 色を含む任意の色を表現することができます。極座標系、彩度、色相が必要な場合は、 {{cssxref("color_value/oklch", "oklch()")}} を使用してください。

## 構文

```css
/* 絶対的な値 */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);

/* 相対値 */
oklab(from green l a b / 0.5)
oklab(from #123456 calc(l + 0.1) a b / calc(alpha * 0.9))
oklab(from hsl(180 100% 50%) calc(l - 0.1) a b)
```

### 値

以下は、絶対色と[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)の両方に対して使用できる値の説明です。

#### 絶対的な値の構文

```plain
oklab(L a b[ / A])
```

引数は以下の通りです。

- `L`
  - : {{CSSXref("&lt;number&gt;")}} で `0` ～ `1` の範囲か、 {{CSSXref("&lt;percentage&gt;")}} で `0%` ～ `100%` の範囲か、またはキーワード `none` です（この場合は `0%` と等価です）。これは色の知覚的な明るさを指定します。ここで数値 `0` は `0%` （黒）に、数値 `1` は `100%` （白）に対応します。
- `a`
  - : {{CSSXref("&lt;number&gt;")}} で `-0.4` ～ `0.4` の範囲か、 {{CSSXref("&lt;percentage&gt;")}} で `-100%` ～ `100%` の範囲か、またはキーワード `none` です（この場合は `0%` と等価です）。この値は、Oklab 色空間における色調の `a` 軸上での距離を指定し、その色調が緑（`-0.4` 方向へ移動）か赤（`+0.4` 方向へ移動）かを定義します。これらの値は符号付き（正負両方の値をすることができる）であり、理論上は制限がないことに注意してください。つまり、`±0.4`（`±100%`）の制限外の値を設定できます。実際には、値は `±0.5` を超えることはできません。
- `b`
  - : {{CSSXref("&lt;number&gt;")}} で `-0.4` ～ `0.4` の範囲か、 {{CSSXref("&lt;percentage&gt;")}} で `-100%` ～ `100%` の範囲か、またはキーワード `none` です（この場合は `0%` と等価です）。この値は、Oklab 色空間における色調の `b` 軸上での距離を指定し、その色調が青（`-0.4` 方向へ移動）か黄（`+0.4` 方向へ移動）かを定義します。これらの値は符号付き（正負両方の値をすることができる）であり、理論上は制限がないことに注意してください。つまり、`±0.4`（`±100%`）の制限外の値を設定できます。実際には、値は `±0.5` を超えることはできません。
- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは 100% です。`A` チャネル値を含める場合は、値の前にスラッシュ (`/`) が付きます。

> [!NOTE]
> `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/Reference/Values/color_value#色成分の欠落)を参照してください。

#### 相対値の構文

```plain
oklab(from <color> L a b[ / A])
```

引数は以下の通りです。

- `from <color>`
  - : 相対色を定義する場合は、キーワード `from` が常に含まれ、次に**起点色**を表す {{cssxref("&lt;color&gt;")}} が続きます。これは相対色のベースとなる起点の色です。起点色には、別の相対色を含む _任意_ の有効な {{cssxref("&lt;color&gt;")}} 構文を使用できます。
- `L`
  - : {{CSSXref("&lt;number&gt;")}} で `0` ～ `1` の範囲か、 {{CSSXref("&lt;percentage&gt;")}} で `0%` ～ `100%` の範囲か、またはキーワード `none` です（この場合は `0%` と等価です）。これは色の明るさを指定します。ここで数値 `0` は `0%` （黒）に、数値 `1` は `100%` （白）に対応します。
- `a`
  - : {{CSSXref("&lt;number&gt;")}} で `-0.4` ～ `0.4` の範囲か、 {{CSSXref("&lt;percentage&gt;")}} で `-100%` ～ `100%` の範囲か、またはキーワード `none` です（この場合は `0%` と等価です）。この値は、Oklab 色空間における出力色の `a` 軸上での距離を表し、その色調が緑（`-0.4` 方向へ移動）か赤（`+0.4` 方向へ移動）かを定義します。これらの値は符号付き（正負両方の値をすることができる）であり、理論上は制限がないことに注意してください。つまり、`±0.4`（`±100%`）の制限外の値を設定できます。実際には、値は `±0.5` を超えることはできません。
- `b`
  - : {{CSSXref("&lt;number&gt;")}} で `-0.4` ～ `0.4` の範囲か、 {{CSSXref("&lt;percentage&gt;")}} で `-100%` ～ `100%` の範囲か、またはキーワード `none` です（この場合は `0%` と等価です）。この値は、Oklab 色空間における出力色の `b` 軸上での距離を表し、その色調が青（`-0.4` 方向へ移動）か黄（`+0.4` 方向へ移動）かを定義します。これらの値は符号付き（正負両方の値をすることができる）であり、理論上は制限がないことに注意してください。つまり、`±0.4`（`±100%`）の制限外の値を設定できます。実際には、値は `±0.5` を超えることはできません。
- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。`A` チャネル値が明示的に指定されていない場合、デフォルトは起点色のアルファチャネルです。`A` チャネル値を含める場合は、値の前にスラッシュ (`/`) が付きます。

#### 相対色出力チャネル成分の定義

`oklab()` 関数内で相対色構文を使用する場合、ブラウザーは起点色を等価の Oklab 色に変換します（すでにそのように指定されていない場合）。色は 3 つの異なる色チャネル値 - `l`（明度）、`a`（緑/赤の軸）、`b`（青/黄の軸）- およびアルファチャネル値 (`alpha`) として定義されます。これらのチャネル値は、出力色チャネル値を定義する際に関数内で使用できます。

- `l` チャネルは `0` 以上 `1` 以下の `<number>` に解決します。
- `a` と `b` チャネルはそれぞれ `-0.4` 以上 `0.4` 以下の `<number>` に解決します。
- `alpha` チャネルは `0` 以上 `1` 以下の `<number>` に解決します。

相対色を定義する際、出力色のさまざまなチャネルをいくつかの異なる方法で表現できます。以下では、これらを説明するためにいくつかの例を見ていきます。

以下の最初の 2 つの例では相対色構文を使用していますが、最初のものは起点色と同じ色を出力し、2 番目のものは起点色にまったく基づいていない色を出力します。これらは実際には相対色を作成していません！実際のコードベースでこれらを使用することはほとんどなく、代わりに絶対色値を使用することになるでしょう。これらの例は相対的な `oklab()` 構文について学ぶための出発点として含まれています。

まず、`hsl(0 100% 50%)`（`red` と同等）の起点色から始めましょう。次の関数は起点色と同じ色を出力します。この関数は、起点色の `l`、`a`、`b` チャネル値（`0.627966`、`0.22488`、`0.125859`）を出力チャネル値として使用します。

```css
oklab(from hsl(0 100% 50%) l a b)
```

この関数の出力色は `oklab(0.627966 0.22488 0.125859)` です。

次の関数は、出力色のチャネル値に絶対的な値を使用しているので、起点色に基づかないまったく異なる色を出力します。

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

上記の場合、出力色は `oklab(0.421 0.165 -0.101)` です。

次の関数は、起点色に基づいて相対色を作成します。

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

この例では、次のことが行われます。

- `hsl()` の起点色を同等の `oklab()` 色に変換します（`oklab(0.627966 0.22488 0.125859)`）。
- 出力色の `L` および `b` チャネル値を、起点色の `oklab()` 相当値の `L` および `b` チャネル値、すなわちそれぞれ `0.627966` と `0.125859` に設定します。
- 出力色の `a` チャネル値を、起点色に基づかない新しい値の `-0.3` に設定します。

最終的な出力色は `oklab(0.627966 -0.3 0.125859)` となります。

> [!NOTE]
> 前述したように、出力色が起点色と異なる色モデルを使用している場合、起点色はバックグラウンドで出力色と同じモデルに変換され、互換性のある方法で表現されます（つまり、同じチャネルを使用します）。

これまでに見てきた例は、起点および出力において、アルファチャネルが明示的に指定されていません。出力色のアルファチャネルが指定されていない場合、起点色のアルファチャネルと同じ値になります。起点色のアルファチャネルが指定されていない場合（かつそれが相対色でない場合）、デフォルト値は `1` です。したがって、上記の例の起点色および出力色のアルファチャネル値は `1` です。

起点および出力のアルファチャネル値を指定する例を見てみましょう。最初の例では、出力アルファチャネル値を起点アルファチャネル値と同じ値に設定し、2 番目の例では、起点アルファチャネル値とは関係ない異なる出力アルファチャネル値を設定します。

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* 計算された出力色: oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* 計算された出力色: oklab(0.627966 0.22488 0.125859 / 0.5) */
```

次の例では、`hsl()` の起点色は再び `oklab()` 相当色である `oklab(0.627966 0.22488 0.125859)` に変換されます。{{cssxref("calc")}} の計算が `L`、`a`、`b`、`A` の各値に適用され、結果として出力色は `oklab(0.827966 0.14488 -0.0741406 / 0.9)` となります。

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> 起点色のチャネルは `<number>` 値に解決されるため、通常チャネルが `<percentage>`、`<angle>`、または他の値型を受け入れる場合でも、計算で使用する際には数値を加える必要があります。例えば `<percentage>` を `<number>` に加えることはできません。

### 形式文法

{{CSSSyntax}}

## 例

### 明るさを調整

次の例は、 `oklab()` 関数の明度、 a 軸、 b 軸の値を変化させたときの効果を示しています。

#### HTML

```html
<div data-color="red-dark"></div>
<div data-color="red"></div>
<div data-color="red-light"></div>

<div data-color="green-dark"></div>
<div data-color="green"></div>
<div data-color="green-light"></div>

<div data-color="blue-dark"></div>
<div data-color="blue"></div>
<div data-color="blue-light"></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
div {
  height: 50px;
  flex: 0 0 28%;
  border: 1px solid black;
}
```

```css
[data-color="red-dark"] {
  background-color: oklab(0.05 0.4 0.4);
}
[data-color="red"] {
  background-color: oklab(0.5 0.4 0.4);
}
[data-color="red-light"] {
  background-color: oklab(0.95 0.4 0.4);
}

[data-color="green-dark"] {
  background-color: oklab(5% -100% 0.4);
}
[data-color="green"] {
  background-color: oklab(50% -100% 0.4);
}
[data-color="green-light"] {
  background-color: oklab(95% -100% 0.4);
}

[data-color="blue-dark"] {
  background-color: oklab(0.05 -0.3 -0.4);
}
[data-color="blue"] {
  background-color: oklab(0.5 -0.3 -0.4);
}
[data-color="blue-light"] {
  background-color: oklab(0.95 -0.3 -0.4);
}
```

#### 結果

{{EmbedLiveSample("Adjusting", "", "200")}}

### 透明度の調整

次の例は `oklab()` 関数記法の `A`（アルファ）値を変化させたときの効果を示しています。
`red` と `red-alpha` 要素は `#background-div` 要素に重なり、透明度の効果を示しています。
`A` に `0.4` の値を与えると、色は 40% の不透明度になります。

#### HTML

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
#background-div {
  background-color: lightblue;
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklab(0.628 0.225 0.126);
}
[data-color="red-alpha"] {
  background-color: oklab(0.628 0.225 0.126 / 0.4);
}
```

#### 結果

{{EmbedLiveSample("Adjusting_opacity_with_oklab", "100%", 155)}}

### 色の軸の調整

この例は、`oklab()` 関数の `a` と `b` の値をそれぞれ a 軸と b 軸の端点および中点に設定した場合の効果を示しています。a 軸は緑 (`-0.4`) から赤 (`0.4`) へ、b 軸は黄色 (`-0.4`) から青 (`0.4`) へと変化します。

#### HTML

```html
<div data-color="red-yellow"></div>
<div data-color="red-zero"></div>
<div data-color="red-blue"></div>

<div data-color="zero-yellow"></div>
<div data-color="zero-zero"></div>
<div data-color="zero-blue"></div>

<div data-color="green-yellow"></div>
<div data-color="green-zero"></div>
<div data-color="green-blue"></div>
```

#### CSS

CSS の {{cssxref("background-color")}} プロパティを使用し、`oklab()` 色関数の `a` 値と `b` 値を a 軸と b 軸に沿って変化させ、それぞれの場合における最大値、中間値、最小値の効果を表示します。

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
div {
  height: 50px;
  flex: 0 0 28%;
  border: 1px solid black;
}
```

```css
/* a 軸は最大値、b 軸を変化させる */
[data-color="red-yellow"] {
  background-color: oklab(0.5 0.4 0.4);
}
[data-color="red-zero"] {
  background-color: oklab(0.5 0.4 0);
}
[data-color="red-blue"] {
  background-color: oklab(0.5 0.4 -0.4);
}

/* a 軸は中央値、b 軸を変化させる */
[data-color="zero-yellow"] {
  background-color: oklab(0.5 0 0.4);
}
[data-color="zero-zero"] {
  background-color: oklab(0.5 0 0);
}
[data-color="zero-blue"] {
  background-color: oklab(0.5 0 -0.4);
}

/* a 軸は最小値、b 軸を変化させる */
[data-color="green-yellow"] {
  background-color: oklab(0.5 -0.4 0.4);
}
[data-color="green-zero"] {
  background-color: oklab(0.5 -0.4 0);
}
[data-color="green-blue"] {
  background-color: oklab(0.5 -0.4 -0.4);
}
```

#### 結果

{{EmbedLiveSample("Adjusting_color_axes", "", "200")}}

左側の列は b 軸の黄色側 (`-0.4`) に位置し、右側の列は青色側 (`0.4`) に位置します。上段は a 軸の赤色側 (`-0.4`) の色を表示させ、下段は緑色側 (`0.4`) に位置します。中央の列と行はそれぞれの軸の中央点 (0) に位置し、中央のセルは灰色です。このセルには赤・緑・黄・青のいずれの色も含まれておらず、両軸の値は `0` です。

### a 軸および b 軸方向の線形グラデーション

この例では、線形グラデーションを用いて `oklab()` 関数の値が a 軸（赤から緑へ）および b 軸（黄から青へ）に沿って変化する様子を記載しています。それぞれのグラデーション画像では、一方の軸は静的のまま、もう一方の軸が低い値から高い値へと変化していきます。

```html hidden
<div data-color="red-to-green-yellow">
  <span>赤</span><span>`b`= -0.4 (黄)</span><span>緑</span>
</div>
<div data-color="red-to-green-zero">
  <span>赤</span><span>黄も青でもない</span><span>緑</span>
</div>
<div data-color="red-to-green-blue">
  <span>赤</span><span>`b`= 0.4 (青)</span><span>緑</span>
</div>

<div data-color="yellow-to-blue-red">
  <span>黄</span><span>`a` = -0.4 (赤)</span><span>青</span>
</div>
<div data-color="yellow-to-blue-zero">
  <span>黄</span><span>赤でも緑でもない</span><span>青</span>
</div>
<div data-color="yellow-to-blue-green">
  <span>黄</span><span>`a` = 0.4 (緑)</span><span>青</span>
</div>
```

#### CSS

```css hidden
div {
  height: 50px;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  background-color: #ffffffcc;
  padding: 3px;
}
```

```css-nolint
/* a 軸のグラデーション */
[data-color="red-to-green-yellow"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% -0.4 0.4));
}
[data-color="red-to-green-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0), oklab(50% -0.4 0));
}
[data-color="red-to-green-blue"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 -0.4), oklab(50% -0.4 -0.4));
}

/* b 軸のグラデーション */
[data-color="yellow-to-blue-red"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% 0.4 -0.4));
}
[data-color="yellow-to-blue-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0 0.4), oklab(50% 0 -0.4));
}
[data-color="yellow-to-blue-green"] {
  background-image: linear-gradient(to right, oklab(50% -0.4 0.4),oklab(50% -0.4 -0.4));
}
```

#### 結果

{{EmbedLiveSample("Linear gradients along the a-axis and b-axis", '', '420')}}

### oklab() による相対色の使用

この例では、3 つの {{htmlelement("div")}} 要素を異なる背景色でスタイル設定します。中央のものには変更されていない `--base-color` が与えられ、左と右のものにはもとの `--base-color` をそれぞれ明るく、暗くした値が与えられます。

これらの変化させた値は相対色を用いて定義されます。`--base-color` [カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) が `oklab()` 関数に渡され、出力される色は `calc()` 関数を通じて明度のチャンネルが変更され、意図した効果が得られます。明るい色は明度チャンネルに `0.15` (15%) が追加され、暗い色は明度チャンネルから `0.15` (15%) が減算されます。

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

#### CSS

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: orange;
}

#one {
  background-color: oklab(from var(--base-color) calc(l + 0.15) a b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: oklab(from var(--base-color) calc(l - 0.15) a b);
}
```

#### 結果

出力結果は次の通りです。

{{ EmbedLiveSample("Using relative colors with oklab()", "100%", "200") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<color>` データ型](/ja/docs/Web/CSS/Reference/Values/color_value): すべての色記法の一覧
- {{cssxref("color_value/lab","lab()")}} および {{cssxref("color_value/oklch","oklch()")}} 色関数
- [相対色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/) - bottosson.github.io (2023)
- [OKLAB color wheel](https://observablehq.com/@shan/oklab-color-wheel) - observablehq.com
