---
title: shape()
slug: Web/CSS/Reference/Values/basic-shape/shape
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`shape()`** は [CSS の関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、{{cssxref("clip-path")}} および {{cssxref("offset-path")}} プロパティの図形を定義するために使用されます。これは、図形のパスを定義する一連のシェイプコマンドと起点を組み合わせたものです。`shape()` 関数は、{{cssxref("basic-shape")}} データ型のメンバーです。

## 構文

```css
/* <fill-rule> */
clip-path: shape(nonzero from 0 0, line to 10px 10px);

/* <move-command>, <line-command>, close */
offset-path: shape(from 10px 10px, move by 10px 5px, line by 20px 40%, close);

/* <hvline-command> */
offset-path: shape(from 10px 10px, hline by 50px, vline to 5rem);

/* <curve-command> */
offset-path: shape(
  from 10px 10px,
  curve to 80px 80px with 160px 1px / 20% 16px
);

/* <smooth-command> */
offset-path: shape(from 10px 10px, smooth to 100px 50pt);

/* <arc-command> */
offset-path: shape(
  from 5% 0.5rem,
  arc to 80px 1pt of 10% ccw large rotate 25deg
);

/* CSS 算術関数を使用 */
offset-path: shape(
  from 5px -5%,
  hline to 50px,
  vline by calc(0% + 160px),
  hline by 70.5px,
  close,
  vline by 60px
);

clip-path: shape(
  evenodd from 10px 10px,
  curve to 60px 20% with 40px 0,
  smooth to 90px 0,
  curve by -20px 60% with 10% 40px / 20% 20px,
  smooth by -40% -10px with -10px 70px,
  close
);
```

### 引数

- [`<fill-rule>`](/ja/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : 図形の重なり合う領域の塗りつぶし方法を指定します。使用可能な値は次のとおりです。
    - `nonzero`: ある点が図形の内側にあるとみなされるのは、点から描画された光線がパス区間を左から右へ通過する数が右から左へ通過する数よりも多く、その結果がゼロ以外の値となる場合です。これが、`<fill-rule>` が省略された場合のデフォルト値です。

    - `evenodd`: ある点が図形の内側にあるとみなされるのは、その点から引かれた光線が横切るパス区間の数が奇数の場合です。これは、光線が図形に入るたびに、同数の回数だけ出ていないことを意味し、対応する出口のない奇数の進入回数を示します。

    > [!WARNING]
    > `<fill-rule>` は {{cssxref("offset-path")}} では対応しておらず、使用するとプロパティが無効になります。

- `from <coordinate-pair>`
  - : 最初の `<shape-command>` の起点を、[参照ボックス](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) の左上角から測定される座標のペアとして定義します。座標は空白区切りで指定される `<x> <y>` の {{cssxref("&lt;length-percentage&gt;")}} 値であり、それぞれ左オフセットと上オフセットを表します。パーセント値は、それぞれ要素の参照ボックスの幅と高さからの相対値です。この引数の後にカンマを追加します。

- `<shape-command>`
  - : 図形を定義する、カンマ区切りの1つ以上のコマンドのリストを指定します。構文は [SVG パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)と同様です。コマンドには `<move-command>`、`<line-command>`、`<hv-line-command>`、`<curve-command>`、`<smooth-command>`、`<arc-command>`、`close` があります。それぞれのコマンドの起点は前回のコマンドの終点であり、図形の最初の点は [`from <coordinate-pair>`](#from_coordinate-pair) 引数で定義されます。

#### シェイプコマンド

ほとんどのシェイプコマンドの構文は、`move` や `line` などのディレクティブとなるキーワードに、`by` または `to` キーワード、そして座標のセットが続く形式です。

- `by`: `<coordinate-pair>` がコマンドの起点に対する相対座標（「相対」値）であることを示します。
- `to`: `<coordinate-pair>` が参照ボックスの左上角を基準とした相対座標であることを示します（「絶対」座標値）。

> [!NOTE]
> `<coordinate-pair>`内の座標がパーセント値で指定されている場合、その値は参照ボックスの対応する幅または高さを基準に計算されます。

次の `<shape-command>` が指定できます。

- `<move-command>`
  - : `move [by | to] <coordinate-pair>` の形で指定します。このコマンドはシェイプコマンドのリストに [MoveTo コマンド](/ja/docs/Web/SVG/Reference/Attribute/d#moveto_path_commands)を追加します。何も描画されず、代わりに次のコマンドの起点を指定します。`by` または `to` キーワードは、それぞれ `<coordinate-pair>` の点が相対座標か絶対座標かを指定します。`<移動コマンド>` が `close` コマンドに続く場合、次の図形またはサブパスの起点を識別します。

- `<line-command>`
  - : `line [by | to] <coordinate-pair>` の形で指定します。このコマンドはシェイプコマンドのリストに [LineTo コマンド](/ja/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands) を追加します。コマンドの起点から終点まで直線を描画します。`by` または `to` キーワードは、`<coordinate-pair>` で指定される終点が相対座標か絶対座標かをそれぞれ指定します。

- `<hv-line-command>`
  - : `[hline | vline] [by | to] <length-percentage>` の形で指定します。このコマンドは、シェイプコマンドのリストに水平線 (`hline`) または垂直線 (`vline`) の [LineTo コマンド](/ja/docs/Web/SVG/Reference/Attribute/d#lineto_path_commands)を追加します。`hline` では、コマンドの起点から `<length-percentage>` で定義された `x` 位置まで、または `x` 位置から `<length-percentage>` で定義された `y` 位置まで水平線が描画されます。`vline` では、コマンドの起点から `<length-percentage>` で定義された `y` 位置まで、または `y` 位置から `<length-percentage>` で定義された `x` 位置まで垂直線が描画されます。`by` または `to` キーワードは、それぞれ相対的または絶対的な終点を決定します。このコマンドは、単一の `<length-percentage>` で一方の座標値を指定し、もう一方の座標値がコマンドの起点から変更されない `<line-command>` と同等です。

- `<curve-command>`
  - : `curve [by | to] <end-point> with <control-point> [/ <control-point>]` の形で指定します。このコマンドは、シェイプコマンドのリストに [ベジェ曲線コマンド](/ja/docs/Web/SVG/Reference/Attribute/d#3_次ベジェ曲線) を追加します。`by` または `to` キーワードは、`<end-point>` で指定される曲線の終点が相対座標か絶対座標かを決定します。

    `with` キーワードは、ベジェ曲線の制御点を次のとおり指定します。
    - 単一の `<control-point>` のみが指定された場合、このコマンドは[二次ベジェ曲線](/ja/docs/Web/SVG/Reference/Attribute/d#2_次ベジェ曲線)を描画します。これは 3 つの点（起点、制御点、終点）によって定義されます。
    - 2 つの `<control-point>` 値が指定された場合、コマンドは 4 つの点（起点、2 つの制御点、終点）で定義される 3 次べジェ曲線を描画します。

    有効な `<end-point>` の値には以下のものがあります。
    - {{cssxref("&lt;position>")}} キーワードまたは `<coordinate-value-pair>`
      - : 曲線の終点が絶対位置の場合（`to` を使用して指定）に使用できます。
    - `<coordinate-value-pair>`
      - : 曲線の終点が相対位置の場合（`by` を使用して指定）に使用できます。

    有効な `<control-point>` の値には以下のものがあります。
    - {{cssxref("&lt;position>")}}
      - : 位置キーワードを指定します。この値は、曲線の終点が絶対位置（`to` を使用して指定）の場合にのみ有効です。
    - `<coordinate-value-pair>`
      - : 座標を定義する {{cssxref("&lt;length-percentage>")}} 値のペアを指定します。
    - `<relative-control-point>`
      - : `<coordinate-value-pair>` を定義し、その後に `from` キーワードと次のキーワードのいずれかを続けます。
        - `start`
          - : 制御点が現在のコマンドの起点に対する相対位置であることを示します。
        - `end`
          - : 制御点が現在のコマンドの終点に対する相対位置であることを示します。
        - `origin`
          - : 制御点が、図形が描画されているコンテナーの左上の点（原点）に対する相対位置であることを示します。
            > [!NOTE]
            > `<relative-control-point>` キーワードが指定されていない場合、`<control-point>` は通常の `<coordinate-value-pair>` となり、座標は曲線の起点に対する相対座標となります。言い換えれば、`start` がデフォルト設定となります。

- `<smooth-command>`
  - : `smooth [by | to] <end-point> [with <control-point>]` の形式で指定されます。このコマンドは、シェイプコマンドのリストに滑らかな [ベジェ曲線コマンド](/ja/docs/Web/SVG/Reference/Attribute/d#cubic_bézier_curve) を追加します。`by` または `to` キーワードは、`<end-point>` で指定される曲線の終点が相対座標か絶対座標かを決定します。

    `with` キーワードは、ベジェ曲線に対するオプションの制御点を指定します。
    - `with <control-point>` が省略された場合、コマンドは滑らかな二次ベジェ曲線を描画します。この曲線は、前回の使用された制御点と現在の終点を用いて定義されます。
    - オプションの `with` キーワードが記載されている場合、`<control-point>` を通じて曲線の制御点を指定し、前制御点、現制御点、および現在の終点によって定義される滑らかな 3 次べジェ曲線を描画します。

    滑らかな曲線は図形からの連続的な推移を実現しますが、二次曲線はそうではありません。滑らかな二次曲線は単一の制御点を使用してシームレスな推移を維持する一方、滑らかな三次曲線は二つの制御点を使用してより洗練された推移を提供します。

    `<end-point>` と `<control-point>` 成分で有効な値は、[`<curve-command>`](#curve-command) と同じです。

- `<arc-command>`
  - : `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]` で指定します。このコマンドは、形状コマンドのリストに[楕円弧曲線コマンド](/ja/docs/Web/SVG/Reference/Attribute/d#elliptical_arc_curve)を追加します。起点と終点の間に楕円弧を描画します。`by` または `to` キーワードは、最初の `<coordinate-pair>` で指定される曲線の終点が、それぞれ相対座標か絶対座標かを決定します。

    楕円弧曲線コマンドは、起点と終点の両方を通る 2 つの楕円を定義し、それぞれの楕円を時計回りまたは反時計回りにトレースできます。これにより、弧のサイズ、方向、角度に応じて4つの異なる弧が生成されます。`of` キーワードは弧が導かれる楕円のサイズを指定します。最初の `<length-percentage>` が楕円の水平半径を、次の `<length-percentage>` が垂直半径をそれぞれ提供します。

    次の引数を指定して、4 つの円弧のうちどれを使用するかを選択してください。
    - `<arc-sweep>`: 指定された円弧が楕円を時計回り (`cw`) でトレースしたものか反時計回り (`ccw`) でトレースしたものかを示します。省略された場合、デフォルトは `ccw` です。
    - `<arc-size>`: 求める円弧が、2つの円弧のうち大きい方 (`large`) か小さい方 (`small`) かを示します。省略した場合、デフォルトは `small` となります。
    - `<angle>`: 楕円を x 軸に対して回転させる角度を度単位で指定します。正の値は楕円を時計回りに、負の値は反時計回りに回転させます。省略した場合、デフォルト値は `0deg` となります。

    特別な状況は次のとおり処理されます。
    - `<length-percentage>` が 1 つだけ指定された場合、水平半径と垂直半径の両方に同じ値が使用され、実質的に円が作成されます。この場合、`<arc-size>` と `<angle>` は影響しません。
    - どちらかの半径がゼロの場合、このコマンドは終点への`<line-command>`と同等になります。
    - どちらかの半径が負の場合、その絶対値が代わりに使用されます。
    - 水平半径と垂直半径が、指定された `<angle>` で回転させた後、起点と終点の両方に交わるのに十分な大きさの楕円を描かない場合、楕円が両点に交わるのにちょうど十分な大きさになるまで、半径は均一に変倍されます。
    - 円弧の起点と終点が楕円の対称位置にある場合、可能な楕円は 1 つ、可能な円弧は 2 つしか存在しません。この場合、`<arc-sweep>` が選択する円弧を指定し、`<arc-size>` は効果を持ちません。

- `close`
  - : シェイプコマンドのリストに [ClosePath コマンド](/ja/docs/Web/SVG/Reference/Attribute/d#closepath)を追加します。現在の位置（直前のコマンドの終点）から、`from <coordinate-pair>` 引数で定義されたパスの最初の点まで直線を描画します。線を引かずに図形を閉じるには、閉じるコマンドの前に開始座標を含む `<move-command>` を記載します。`close` コマンドの直後に `<move-command>` が続く場合、それは次の図形またはサブパスの起点として定義されます。

## 解説

`shape()` 関数を使用すると、複雑な図形を定義することができます。この関数は、いくつかの方法で {{cssxref("basic-shape/path","path()")}} シェイプ関数と似ています。

- `shape()` 関数内の `<fill-rule>` 引数は、`path()` 関数内の同名の引数と全く同様に動作します。
- `shape()` 関数では、1 つ以上の `<shape-command>` を指定する必要があります。それぞれのコマンドは、基盤となる[パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)を使用します。例えば [MoveTo](/ja/docs/Web/SVG/Reference/Attribute/d#moveto_パスコマンド)、[LineTo](/ja/docs/Web/SVG/Reference/Attribute/d#lineto_パスコマンド)、[ClosePath](/ja/docs/Web/SVG/Reference/Attribute/d#closepath) などです。

ただし、`shape()` は `path()` を使用する場合に比べていくつかの利点があります。

- `shape()` は標準の CSS 構文を使用するため、このスタイルシート内で直接図形を作成したり変更したりしやすくなります。一方、`path()` は [SVG パス](/ja/docs/Web/SVG/Reference/Element/path)構文を使用するため、SVG に慣れていないユーザーには直感的ではありません。
- `shape()` はパーセント値、`rem`、`em` を含む様々な CSS の単位に対応しています。一方、`path()` は図形を単一の文字列で定義し、単位は `px` に限られます。
- `shape()` では、{{cssxref("calc")}}、{{cssxref("max")}}、{{cssxref("abs")}} などの CSS 数学関数も同時に使用でき、図形を定義する柔軟性がさらに高まります。

## 形式文法

{{csssyntax}}

## 例

### `shape()` を使用してパスを定義

この例では、`shape()` 関数を {{cssxref("offset-path")}} プロパティ内で使用し、要素がたどるパスの形状を定義する方法を示しています。

最初の図形 `shape1` は、`curve to` コマンドで定義された3次べジェ曲線パスに沿って描画されます。次に `close` コマンドが、曲線の終点から `from` コマンドで定義された起点まで直線を引きます。最後に `shape1` は新しい位置 `0px 150px` に移動し、水平線に沿って進みます。

2 つ目の図形 `shape2` は、最初に水平線に沿って移動し、その後 `50px 90px` の起点に戻ります。次に垂直線に沿って移動した後、経路を閉じ、起点に戻ります。

どちらの図形も元の色から始まり、`move` アニメーションの終わりまでに徐々に`hotpink`へ変化し、アニメーションが再開されると元の色に戻ります。この周期的な色の変化により、アニメーションの進行状況と再開が視覚的に示されます。

```html hidden
<div class="container">
  <code>&lt;curve-command&gt;</code> を使用
  <div class="shape shape1">>></div>
</div>

<div class="container">
  <code>&lt;move-command&gt;</code> と
  <code>&lt;hvline-command&gt;</code> を使用
  <div class="shape shape2">>></div>
</div>
```

```css hidden
body {
  align-items: center;
  justify-content: center;
  display: flex;
}

.container {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 250px;
  border: 2px dotted green;
  margin: 20px;
}

@supports not (offset-path: shape(from 0 0, move to 0 0)) {
  .container {
    display: none;
  }
  body::after {
    content: "このブラウザーはまだ `shape()` 関数に対応していません。";
  }
}
```

```css
.shape {
  width: 50px;
  height: 50px;
  background: #2bc4a2;
  position: absolute;
  text-align: center;
  line-height: 50px;
  animation: move 6s infinite linear;
}

.shape1 {
  offset-path: shape(
    from 30% 60px,
    curve to 180px 180px with 90px 190px,
    close,
    move by 0px 150px,
    hline by 40%
  );
}

.shape2 {
  offset-path: shape(
    from 50px 90px,
    hline to 8em,
    move to 50px 90px,
    vline by 20%,
    close
  );
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
    background-color: hotpink;
  }
}
```

#### 結果

{{EmbedLiveSample('Using shape() to define a path', '100%', 300)}}

### `shape()` を使用して要素の可視範囲を定義

この例は、`shape()` 関数を {{cssxref("clip-path")}} プロパティ内で使用することができることを示しています。これにより、クリッピング領域で異なる図形を生成することができます。まず、最初の図形 (`shape1`) は直線で定義された三角形を使用しています。2 つ目の図形 (`shape2`) は曲線と滑らかなトランジションを記載し、`<move-command>` を使用することで `close` コマンドの後にクリッピング領域に矩形図形を追加する手法も示しています。

```html hidden
<div class="container">
  <div class="shape shape1"></div>
</div>

<div class="container">
  <div class="shape shape2"></div>
</div>
```

```css hidden
body {
  align-items: center;
  justify-content: center;
  display: flex;
}

.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: lightgray;
}

@supports not (clip-path: shape(from 0 0, move to 0 0)) {
  .container {
    display: none;
  }
  body::after {
    content: "このブラウザーはまだ `shape()` 関数に対応していません。";
  }
}
```

```css
.shape {
  width: 100%;
  height: 100%;
  background: #2bc4a2;
  position: absolute;
  text-align: center;
  line-height: 50px;
}

/* 三角形のクリッピング領域 */
.shape1 {
  clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
}

/* 曲線と円弧の遷移を使用するハート形のクリッピング領域と、水平線と垂直線の移動を伴うボックス */
.shape2 {
  clip-path: shape(
    from 20px 70px,
    arc to 100px 70px of 1% cw,
    arc to 180px 70px of 1% cw,
    curve to 100px 190px with 180px 130px,
    curve to 20px 70px with 20px 130px,
    close,
    move to 150px 150px,
    hline by 40px,
    vline by 40px,
    hline by -40px,
    close
  );
}
```

#### 結果

{{EmbedLiveSample('Using shape() to define the visible part of an element', '100%', 300)}}

### `shape()` を使用して相対制御点付きのカーブを描画

前回の例と同様に、この例でも要素のクリッピング領域に異なる図形を作成するために {{cssxref("clip-path")}} を使用しています。図形は [`<curve-command>`](#curve-command) と [`<smooth-command>`](#smooth-command) の組み合わせで指定され、制御点は [`<relative-control-point>`](#relative-control-point) の値で指定されます。

最初の図形 (`shape1`) では 2 つの 3 次べジェ曲線が描画されます。

- 最初の曲線は、ボックスの左端の中心から始まり、x 軸に沿って `200px` の位置（ボックスの右端の中心）まで描画されます。この曲線は、曲線の起点に対する制御点 1 つと、原点（ボックスの左上隅）に対する制御点 1 つを使用します。
- 2 番目の曲線はボックスの中央右から始まり、x 軸に沿って `-200px` の位置（ボックスの左端の中心）に描画されます。この曲線は、原点に対する 1 つの制御点と、曲線の起点に対する 1 つの制御点を使用します。

```html hidden live-sample___relative-control-points
<div class="container">
  <div id="shape1"></div>
  <div id="shape2"></div>
  <div id="shape3"></div>
</div>
```

```css hidden live-sample___relative-control-points
.container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@supports not (
  clip-path: shape(
      from center left,
      curve by 200px 0 with 50% -50% from start / 50% 0 from origin,
      curve by -200px 0 with 50% 100% from origin / -50% 50% from start,
      close
    )
) {
  .container {
    display: none;
  }
  body::after {
    content: "Your browser doesn't support `shape()` relative control points.";
  }
}
```

```css live-sample___relative-control-points
#shape1 {
  width: 200px;
  height: 200px;
  background: green;
  clip-path: shape(
    from center left,
    curve by 200px 0 with 50% -50% from start / 50% 0 from origin,
    curve by -200px 0 with 50% 100% from origin / -50% 50% from start,
    close
  );
}
```

2 つ目の図形 (`shape2`) は、1 本の 2 次ベジェ曲線と 1 本の 3 次べジェ曲線が描画されます。

- 最初の曲線は、ボックスの左端の中心から始まり、x 軸方向の原点から絶対座標 `200px`、y 軸方向の原点から絶対座標 `100px` の位置に描画されます。曲線の起点に対する相対位置で 1 つの制御点を使用します。
- 2 つ目の曲線は、前回の曲線の終点から始まり、ボックスの左中央まで描画されます。曲線の起点に対する制御点 1 つと、終点に対する制御点 1 つを使用します。

```css live-sample___relative-control-points
#shape2 {
  width: 200px;
  height: 200px;
  background: purple;
  clip-path: shape(
    from center left,
    curve to 200px 100px with 50% -80% from start,
    curve to center left with 0% 70% from start / 20% 0% from end,
    close
  );
}
```

3 つ目の図形 (`shape3`) では、`smooth` コマンドが使用され、2 次ベジェ曲線 1 本と 3 次べジェ曲線 1 本が描画されます。

- 最初の曲線はボックスの左端の中心から始まり、x 軸に沿って `200px` の位置まで描画されます。曲線の起点に対する相対位置で 1 つの制御点を使用します。
- 2 つ目の曲線は、前回の曲線の終点から始まり、ボックスの中心まで描画されます。この曲線は、曲線の起点（前回の曲線の最後の制御点）を基準とする制御点を 1 つと、原点を基準とする制御点を 1 つ使用します。

```css live-sample___relative-control-points
#shape3 {
  width: 200px;
  height: 200px;
  background: orangered;
  clip-path: shape(
    from center left,
    curve by 200px 0px with 50% -80% from start,
    smooth to center with 50% 100% from origin,
    close
  );
}
```

#### 結果

{{EmbedLiveSample('relative-control-points', '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("clip-path")}}
- {{cssxref("offset-path")}}
- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)モジュール
- [シェイプの概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)ガイド
- [基本シェイプ](/ja/docs/Web/CSS/Guides/Shapes/Using_shape-outside)ガイド
