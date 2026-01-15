---
title: パス
slug: Web/SVG/Tutorials/SVG_from_scratch/Paths
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}

{{SVGElement('path')}} 要素は、 SVG の[基本図形](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes)ライブラリーの中でもっとも強力な要素です。これは、直線、曲線、弧などを作成するために用いることができます。

パスは、複数の直線や曲線を組み合わせて複雑な形状を作ります。直線だけで構成された複雑な形状は、 [`<polyline>`](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes#多角形) 要素として作成することができます。 `<polyline>` および `<path>` 要素は似たような形状を作ることができますが、 `<polyline>` 要素は曲線を表現するのに大量の小さな直線を必要とするため、大きなサイズにはうまく拡大することができません。

SVG を描画する際には、パスをよく理解しておくことが重要です。XML エディターやテキストエディターを使用して複雑なパスを作成するのはお勧めできませんが、それらがどのように機能するかを理解しておけば、 SVG の表示問題を特定して修復することができます。

`<path>` 要素の形状は、1 つの引数である {{ SVGAttr("d") }} によって定義されます (詳細は[基本図形](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes)を参照してください)。 `d` 属性はこれらのコマンドで使用される一連のコマンドと引数を含みます。

それぞれのコマンドは、特定の文字でインスタンス化されています (例えば、クラスを作成したり、名前を付けたり、位置を特定したりします)。例えば、 x と y の座標 (`10`, `10`) に移動してみましょう。 "Move to" コマンドは `M` という文字で呼び出されます。パーサーはこの文字に遭遇したとき、ある点に移動する必要があることを知っています。したがって、 (`10`, `10`) に移動するためのコマンドは `M 10 10` となります。その後、パーサーは次のコマンドを読み始めます。

すべてのコマンドは 2 つの種類があります。**大文字**はページ上の絶対座標を指定し、**小文字**は相対座標 (例えば、 _直前の点から上に 10px、左に 7px 移動_) を指定します。

`d` 属性の座標は **常に単位なし** で指定するので、ユーザー座標システムになります。後のチュートリアルで、どのようにパスを他のニーズに合わせて変形できるかを学びます。

## 直線コマンド

{{SVGElement("path")}} ノードには、直線のコマンドが 5 つあります。1 つ目のコマンドは "Move To" すなわち `M` で、前述したものです。これは 2 つの引数、移動先の座標 (`x`) と座標 (`y`) を取ります。カーソルがすでにページ上のどこかにあった場合は、2 つの位置を結ぶ線は描画されません。 "Move To" コマンドは、どこから描画を始めるかを指定するパスの始点に見られます。

```plain
M x y
(または)
m dx dy
```

以下の例では点 (`10`, `10`) だけがある状態になります。ただし、パスだけを描画してもこれらの点が表示されないことに注意してください。

```html live-sample___move-to
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10" />
</svg>
```

```html hidden live-sample___move-to
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="10" cy="10" r="3" fill="red" />
  </g>
</svg>
<button>参照点と線の表示/非表示</button>
```

```js hidden live-sample___move-to
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('move-to', 100, 130) }}

線を描画するコマンドは 3 種類あります。もっとも一般的なものは、 "Line To" コマンド、すなわち `L` です。 `L` は 2 つの引数—x および y 座標—を持ち、現在の位置から新しい位置に向けて直線を描画します。

```plain
L x y
(または)
l dx dy
```

水平または垂直の線を描画するための短縮された形式があります。 `H` は水平線を描画、`V` は垂直線を描画します。どちらのコマンドも一方向にしか移動しないので、引数は 1 つだけです。

```plain
H x
(または)
h dx

V y
(または)
v dy
```

始めやすいところは実際に図形を描いてみることです。手始めに矩形 ({{SVGElement("rect")}} 要素を使うとより簡単に描けるものと同じです) を描いてみましょう。これは水平線と垂直線だけで構成されています。

```html live-sample___rectangle-lines
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 10 H 90 V 90 H 10 L 10 10" />
</svg>
```

```html hidden live-sample___rectangle-lines
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="10" cy="10" r="3" fill="red" />
    <circle cx="90" cy="90" r="3" fill="red" />
    <circle cx="90" cy="10" r="3" fill="red" />
    <circle cx="10" cy="90" r="3" fill="red" />
  </g>
</svg>
<button>参照点と線の表示/非表示</button>
```

```js hidden live-sample___rectangle-lines
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('rectangle-lines', 100, 130) }}

上記パス宣言は、`Z` で呼び出される「パスを閉じる」コマンドを使用することで、少し短縮することができます。このコマンドは、現在の位置から最初の閉じられていない点（最後の `Z` コマンドの後の最初の点、またはそれがない場合はパスの最初の点）まで直線を描き、そのパスを線接合で閉じます。これは、常にそうであるとは限りませんが、多くの場合、パスノードの終わりに配置されます。大文字と小文字のコマンドに違いはありません。

```plain
Z
(または)
z
```

したがって、上記のパスは次のように簡単に書くことができます。

```xml
<path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black" />
```

同じ画像を描画するために、これらコマンドの相対形式を用いることもできます。前に述べたとおり相対形式のコマンドは小文字を用いて表記され、厳密な座標でカーソルを移動するのではなく直前の位置から相対的に移動します。例えば、ここで描いた四角形のサイズは 80x80 であるので、 `<path>` 要素は以下のように書くことができます:

```xml
<path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black" />
```

パスは点 (`10`, `10`) に移動した後、右へ水平に点 80 個分、下に点 80 個分、左に点 80 個分、そして始点へ戻るように移動します。

これらの例では、おそらく {{SVGElement("polygon")}} や {{SVGElement("polyline")}} 要素を使用すると、より直感的に書くことができます。しかし、パスは SVG で描画する際に頻繁に使用されるので、開発者はこれらの代わりにパスを使用した方が快適かもしれません。どちらを使用しても、性能上の利点や欠点はありません。

## 曲線コマンド

なめらかな曲線を作成するために使うコマンドは 3 種類あります。 2 つは[ベジェ曲線](/ja/docs/Glossary/Bezier_curve)、3 つめは「円弧」すなわち円の一部です。すでに Inkscape, Illustrator, Photoshop などのパスツールを使用して、ベジェ曲線の実体験をしているかもしれません。ベジェ曲線には無数の種類がありますが、 `<path>` 要素では 2 種類だけが使用可能です。 3 次ベジェ曲線の `C` と、 2 次ベジェ曲線の `Q` です。

### ベジェ曲線

3 次ベジェ曲線 `C` は、やや複雑な曲線です。 3 次ベジェ曲線は、各々の点に対する 2 つの制御点をとります。従って、 3 次ベジェ曲線を作成したいときは 3 組の座標を指定しなければなりません。

```plain
C x1 y1, x2 y2, x y
(または)
c dx1 dy1, dx2 dy2, dx dy
```

ここで最後にある座標 (`x`, `y`) は、線の終点にしたい場所です。他の 2 組は制御点です。 (`x1`, `y1`) は曲線の始点向けの制御点、 (`x2`, `y2`) は曲線の終点向けの制御点です。制御点は各々の点から始まる線の傾斜を本質的に説明するものです。このときベジェ関数は、線の始めで確立した傾斜からもう一方の側の傾斜へ至るなめらかな曲線を作成します。

```html live-sample___cubic_bezier_curves
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent" />
  <path d="M 70 10 C 70 20, 110 20, 110 10" stroke="black" fill="transparent" />
  <path
    d="M 130 10 C 120 20, 180 20, 170 10"
    stroke="black"
    fill="transparent" />
  <path d="M 10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent" />
  <path d="M 70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent" />
  <path
    d="M 130 60 C 120 80, 180 80, 170 60"
    stroke="black"
    fill="transparent" />
  <path
    d="M 10 110 C 20 140, 40 140, 50 110"
    stroke="black"
    fill="transparent" />
  <path
    d="M 70 110 C 70 140, 110 140, 110 110"
    stroke="black"
    fill="transparent" />
  <path
    d="M 130 110 C 120 140, 180 140, 170 110"
    stroke="black"
    fill="transparent" />
</svg>
```

```html hidden live-sample___cubic_bezier_curves
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference"></g>
</svg>
<button>参照点と線の表示/非表示</button>
```

```js hidden live-sample___cubic_bezier_curves
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");

// prettier-ignore
const points = [
  [[10, 10], [20, 20], [40, 20], [50, 10]],
  [[70, 10], [70, 20], [110, 20], [110, 10]],
  [[130, 10], [120, 20], [180, 20], [170, 10]],
  [[10, 60], [20, 80], [40, 80], [50, 60]],
  [[70, 60], [70, 80], [110, 80], [110, 60]],
  [[130, 60], [120, 80], [180, 80], [170, 60]],
  [[10, 110], [20, 140], [40, 140], [50, 110]],
  [[70, 110], [70, 140], [110, 140], [110, 110]],
  [[130, 110], [120, 140], [180, 140], [170, 110]],
];

for (const curvePoints of points) {
  for (const p of curvePoints) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", p[0]);
    circle.setAttribute("cy", p[1]);
    circle.setAttribute("r", 1.5);
    circle.setAttribute("fill", "red");
    g.appendChild(circle);
  }
  const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line1.setAttribute("x1", curvePoints[0][0]);
  line1.setAttribute("y1", curvePoints[0][1]);
  line1.setAttribute("x2", curvePoints[1][0]);
  line1.setAttribute("y2", curvePoints[1][1]);
  line1.setAttribute("stroke", "red");
  g.appendChild(line1);
  const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line2.setAttribute("x1", curvePoints[2][0]);
  line2.setAttribute("y1", curvePoints[2][1]);
  line2.setAttribute("x2", curvePoints[3][0]);
  line2.setAttribute("y2", curvePoints[3][1]);
  line2.setAttribute("stroke", "red");
  g.appendChild(line2);
}

let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('cubic_bezier_curves', 190, 190) }}

上の例では 9 つのベジェ曲線を作成しています。曲線が左側へ移動するにつれて、制御点は水平方向に離れていきます。また曲線が右側へ移動するにつれて、制御点は終点から遠く離れていきます。ここで特筆することは、曲線は 1 番目の制御点に向かって出発し、そして 2 番目の制御点の方向に沿って到着するということです。

長いなめらかな図形を描くために、複数のベジェ曲線をつなぐことができます。この場合はたいてい、ある点の片方の制御点はもう一方で使われる制御点の対向になるでしょう (傾斜を一定に保つ場合)。この場合はコマンド `S` (または `s`) で示される、 3 次ベジェ曲線の短縮版を用いることができます。

```plain
S x2 y2, x y
(または)
s dx2 dy2, dx dy
```

`S` は前に示したものと同種の曲線を生成しますが、これが別の `S` コマンドや `C` コマンドの後に続く場合は、1 番目の制御点が前を曲線で用いられた制御点の対向にするものとみなします。`S` コマンドが別の `S` または `C` コマンドの後にない場合は、その曲線の 2 つの制御点は同じ場所であるとみなします。この場合は、 `Q` コマンドに同じ引数を与えて出力する結果と同じ結果になります。

この構文の例を以下に示しますが、左の図では、指定された制御点が赤、推定された制御点が青で示されています。

```html live-sample___shortcut_cubic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
    stroke="black"
    fill="transparent" />
</svg>
```

```html hidden live-sample___shortcut_cubic_bezier
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <line x1="10" y1="80" x2="40" y2="10" stroke="red" />
    <line x1="65" y1="10" x2="95" y2="80" stroke="red" />
    <line x1="95" y1="80" x2="125" y2="150" stroke="blue" />
    <line x1="150" y1="150" x2="180" y2="80" stroke="red" />
    <circle cx="10" cy="80" r="3" fill="red" />
    <circle cx="40" cy="10" r="3" fill="red" />
    <circle cx="65" cy="10" r="3" fill="red" />
    <circle cx="95" cy="80" r="3" fill="red" />
    <circle cx="125" cy="150" r="3" fill="blue" />
    <circle cx="150" cy="150" r="3" fill="red" />
    <circle cx="180" cy="80" r="3" fill="red" />
  </g>
</svg>
<button>参照点と線の表示/非表示</button>
```

```js hidden live-sample___shortcut_cubic_bezier
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('shortcut_cubic_bezier', 190, 190) }}

もう一つの種類のベジェ曲線は 2 次ベジェ曲線 `Q` であり、こちらは 3 次ベジェ曲線よりシンプルな曲線です。基本的に制御点を 1 つだけ必要とし、それは始点側と終点側両方の曲線の傾斜を定義します。このコマンドは制御点と曲線の終点を示す 2 つの引数を持ちます。

> [!NOTE]
> `q` コマンドにおける座標の差分は、どちらも前回の点からの相対座標です (すなわち `dx` と `dy` は `dx1` と `dy1` に対する相対座標ではありません)。

```plain
Q x1 y1, x y
(または)
q dx1 dy1, dx dy
```

```html live-sample___quadratic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
</svg>
```

```html hidden live-sample___quadratic_bezier
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <line x1="10" y1="80" x2="95" y2="10" stroke="red" />
    <line x1="95" y1="10" x2="180" y2="80" stroke="red" />
    <circle cx="10" cy="80" r="3" fill="red" />
    <circle cx="180" cy="80" r="3" fill="red" />
    <circle cx="95" cy="10" r="3" fill="red" />
  </g>
</svg>
<button>参照点と線の表示/非表示</button>
```

```js hidden live-sample___quadratic_bezier
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('quadratic_bezier', 190, 190) }}

3 次ベジェ曲線の場合と同様に、 2 次ベジェ曲線のセットをつなぎ合わせるためのショートカットである `T` があります。

```plain
T x y
(または)
t dx dy
```

このショートカットは前に用いた制御点を参照して、そこから新しい制御点を推測します。これは、最初の制御点を指定した後は終点を指定するだけで、ある程度複雑な図形を作成できることを意味します。

このコマンドは前のコマンドが `Q` または `T` コマンドである場合のみ動作します。そうではない場合、制御点は前の点と同じであるとみなして直線が描画されるだけになります。

```html live-sample___shortcut_quadratic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10 80 Q 52.5 10, 95 80 T 180 80"
    stroke="black"
    fill="transparent" />
</svg>
```

```html hidden live-sample___shortcut_quadratic_bezier
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <line x1="10" y1="80" x2="52.5" y2="10" stroke="red" />
    <line x1="52.5" y1="10" x2="95" y2="80" stroke="red" />
    <line x1="95" y1="80" x2="137.5" y2="150" stroke="blue" />
    <line x1="137.5" y1="150" x2="180" y2="80" stroke="blue" />
    <circle cx="10" cy="80" r="3" fill="red" />
    <circle cx="52.5" cy="10" r="3" fill="red" />
    <circle cx="95" cy="80" r="3" fill="red" />
    <circle cx="137.5" cy="150" r="3" fill="blue" />
    <circle cx="180" cy="80" r="3" fill="blue" />
  </g>
</svg>
<button>参照点と線の表示/非表示</button>
```

```js hidden live-sample___shortcut_quadratic_bezier
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('shortcut_quadratic_bezier', 190, 190) }}

3 次ベジェ曲線はどのような曲線を描きたいかについて自由度が高いにもかかわらず、どちらの曲線もかなり似た結果になります。どちらの曲線を用いるかはたいてい、そのときの状況や曲線の対称度に依存します。

### 円弧

SVG を用いて作成できる別のタイプの曲線が円弧 `A` コマンドです。円弧の本質は円または楕円の一部分です。

与えられた X 軸と Y 軸の半径について、2 つの点に接する楕円は (それらが円の半径の範囲内にある限り) 2 つあります。どちらにも 2 点を結ぶパスが 2 つずつあるため、どのような場合でも考えられる円弧は 4 つあります。

このため、円弧はかなり多くの引数をとります。

```plain
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

始めに arc 要素は、円弧の X 軸方向の半径と Y 軸方向の半径を示す 2 つの引数を持ちます。必要に応じて {{SVGElement("ellipse")}} で同動作するかを確認してください。後の 2 つの引数は、描画が終了する X および Y 座標を示します。

3 番目の引数は、円弧の回転度を示します。これは次の説明が最適です。

```html live-sample___arcs_axis_rotation
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10 315
       L 110 215
       A 30 50 0 0 1 162.55 162.45
       L 172.55 152.45
       A 30 50 -45 0 1 215.1 109.9
       L 315 10"
    stroke="black"
    fill="green"
    stroke-width="2"
    fill-opacity="0.5" />
</svg>
```

```html hidden live-sample___arcs_axis_rotation
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <ellipse
      cx="136.225"
      cy="188.275"
      rx="30"
      ry="50"
      stroke="red"
      fill="none" />
    <ellipse
      cx="193.5"
      cy="131.5"
      rx="30"
      ry="50"
      stroke="red"
      fill="none"
      transform="rotate(-45)"
      transform-origin="193.5 131.5" />
  </g>
</svg>
<button>参照点と線の表示/非表示</button>
```

```js hidden live-sample___arcs_axis_rotation
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('arcs_axis_rotation', 320, 350) }}

この例ではページを斜めに渡る `<path>` 要素を示しています。その中間で、2 つの楕円弧 (X 軸方向の半径 = `30`、Y 軸方向の半径 = `50`) が切り抜かれています。1 番目の円弧は x-axis-rotation が `0` であるので、円弧が通る楕円 (灰色で示しています) は直立しています。一方 2 番目の円弧では、 x-axis-rotation が `-45` 度になっています。これは円弧を回転させるので、例の図にあるとおり 2 番目の楕円の短半径がパスの方向に沿うよう一直線に並びます。

上の画像の回転していない楕円については、円弧の始点と終点から引かれた線が楕円の中心を通るので、 2 つの異なる円弧があるだけで、 4 つの円弧から選択できるわけではありません。少し修正した例では、 4 つの異なる円弧を形成する 2 つの楕円を見ることができます。

```html live-sample___arcs_axis_rotation_2
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
  <path
    d="M 10 315
       L 110 215
       A 36 60 0 0 1 150.71 170.29
       L 172.55 152.45
       A 30 50 -45 0 1 215.1 109.9
       L 315 10"
    stroke="black"
    fill="green"
    stroke-width="2"
    fill-opacity="0.5" />
</svg>
```

```html hidden live-sample___arcs_axis_rotation_2
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="150.71" cy="170.29" r="3" fill="red" />
    <circle cx="110" cy="215" r="3" fill="red" />
    <ellipse
      cx="144.931"
      cy="229.512"
      rx="36"
      ry="60"
      fill="transparent"
      stroke="red" />
    <ellipse
      cx="115.779"
      cy="155.778"
      rx="36"
      ry="60"
      fill="transparent"
      stroke="red" />
  </g>
</svg>
<button>参照点と線の表示/非表示</button>
```

```js hidden live-sample___arcs_axis_rotation_2
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('arcs_axis_rotation_2', 320, 350) }}

青い楕円は、時計回りか反時計回りかによって、2 つの円弧を描いていることに注意してください。それぞれの楕円には、短い円弧と長い円弧があります。2 つの楕円は互いに鏡像になっています。これらの楕円は、開始点 → 終了点から形成された線に沿って反転しています。

開始点 → 終了点が楕円の `x`, `y` 半径が到達できる距離よりも遠い場合、楕円の半径は最小に拡大され、開始点 → 終了点に到達できるようになります。このページの一番下にあるインタラクティブなコードペンがこのことをよく示しています。楕円の半径が拡大を必要とするほど大きいかどうかを判断するには、[このような方程式系](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1>)を解く必要があります。この計算は、開始 → 終了 (`110`, `215`)→(`150.71`, `170.29`) の非回転楕円についてのものです。解 (x, y) は楕円の中心である．楕円の半径が小さすぎると、解は[虚数](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1>)になります。この 2 番目の計算は、開始 → 終了 (`110`, `215`)→(`162.55`, `162.45`) の非回転楕円の場合です。楕円がかろうじて拡大されただけなので、この解には小さな虚数成分が含まれています。

前述した 4 つの異なるパスは、次の 2 つの引数フラグによって決定されます。前述したように、パスが移動する楕円にはまだ 2 つの可能性があり、両方の楕円上には 2 つの異なる可能性のあるパスがあり、4 つの可能性のあるパスが与えられます。最初の引数は `large-arc-flag` です。これは単純に円弧が 180 度より大きいか小さいかを決定します。2 番目の引数は `sweep-flag` フラグです。これは、円弧が正の角度で動き始めるか負の角度で動き始めるかを決定します。以下の例は、4 つの可能性のあるすべての組み合わせと、それぞれの場合の 2 つの円を示しています。

```html live-sample___arcs_flags
<svg width="360" height="360" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 100 100
       A 45 45, 0, 0, 0, 145 145
       L 145 100 Z"
    fill="#00FF00A0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 250 100
       A 45 45, 0, 1, 0, 295 145
       L 295 100 Z"
    fill="#FF0000A0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 100 250
       A 45 45, 0, 0, 1, 145 295
       L 145 250 Z"
    fill="#FF00FFA0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 250 250
       A 45 45, 0, 1, 1, 295 295
       L 295 250 Z"
    fill="#0000FFA0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 45 45 L 345 45 L 345 345 L 45 345 Z M 195 45 L 195 345 M 45 195 L 345 195"
    fill="none"
    stroke="black" />
  <text x="140" y="20" font-size="20" fill="black">large-arc-flag</text>
  <text
    x="-15"
    y="195"
    font-size="20"
    fill="black"
    transform="rotate(-90)"
    transform-origin="20 195">
    sweep-flag
  </text>
  <text x="120" y="40" font-size="20" fill="black">0</text>
  <text x="270" y="40" font-size="20" fill="black">1</text>
  <text x="30" y="120" font-size="20" fill="black">0</text>
  <text x="30" y="270" font-size="20" fill="black">1</text>
</svg>
```

```html hidden live-sample___arcs_flags
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="145" cy="100" r="45" stroke="#888888E0" fill="none" />
    <circle cx="100" cy="145" r="45" stroke="#888888E0" fill="none" />
    <circle cx="295" cy="100" r="45" stroke="#888888E0" fill="none" />
    <circle cx="250" cy="145" r="45" stroke="#888888E0" fill="none" />
    <circle cx="145" cy="250" r="45" stroke="#888888E0" fill="none" />
    <circle cx="100" cy="295" r="45" stroke="#888888E0" fill="none" />
    <circle cx="295" cy="250" r="45" stroke="#888888E0" fill="none" />
    <circle cx="250" cy="295" r="45" stroke="#888888E0" fill="none" />
  </g>
</svg>
<button>参照点と線の表示/非表示</button>
```

```js hidden live-sample___arcs_flags
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('arcs_flags', 360, 390) }}

円弧は、図面の中で円や楕円のピースを簡単に作成する方法です。例えば、円グラフでは、各ピースごとに異なる円弧が必要になります。

{{HTMLElement("canvas")}} から SVG に移行する場合、弧は学ぶのが最も難しいことかもしれませんが、その一方で、より強力な機能でもあります。SVG の弧が描画できない唯一の図形は、完全な円と楕円です。円を囲むパスは、その開始点と終了点が同じ点であるため、選択できる円の数は無限であり、実際のパスは未定義になります。パスの開始点と終了点をわずかにずらし、別のパス区間でつなぐことで、円に近づけることができます。例えば、半円ごとに弧を描いて円を作成することができます。この点では、実際の {{SVGElement("circle")}} や {{SVGElement("ellipse")}} ノードを使用するほうが簡単な場合が多いでしょう。この対話型デモは、SVG の弧の概念を理解するのに役立つかもしれません。

```html hidden live-sample___arcs_interactive
<script src="https://cdn.rawgit.com/lingtalfi/simpledrag/master/simpledrag.js"></script>
<div class="ui">
  <div class="controls">
    半径 X: <input id="rx" type="range" min="0" max="500" /><br />
    半径 Y: <input id="ry" type="range" min="0" max="500" /><br />
    回転:
    <input id="rot" type="range" min="0" max="360" value="0" /><br />
    large-arc-flag: <input id="laf" type="checkbox" /><br />
    sweep-flag: <input id="sf" type="checkbox" /><br />
    弧コマンド: <span id="arc-value"></span><br />
  </div>
  <div class="results">
    mouse: pageX <span id="page-x"></span>, pageY <span id="page-y"></span
    ><br />
    A: <span id="ax-value"></span>, <span id="ay-value"></span><br />
    B: <span id="bx-value"></span>, <span id="by-value"></span><br />
    m: <span id="m-value"></span><br />
    b(A): <span id="ba-value"></span><br />
    b(B): <span id="bb-value"></span><br />
    contextWidth: <span id="cw-value"></span><br />
  </div>
</div>

<svg width="100%" height="100%" id="svg-context">
  <path id="arc2" d="" fill="none" stroke="green" stroke-width="2"></path>
  <path id="arc3" d="" fill="none" stroke="green" stroke-width="2"></path>
  <path id="arc4" d="" fill="none" stroke="green" stroke-width="2"></path>

  <path
    id="arc"
    d="M100 100 A 100 100 0 1 0 200 100"
    fill="none"
    stroke="red"
    stroke-width="4"></path>

  <line
    id="line0"
    x1="0"
    y1="0"
    x2="0"
    y2="0"
    fill="none"
    stroke="black"
    stroke-width="2"></line>
  <line
    id="line"
    x1="0"
    y1="0"
    x2="0"
    y2="0"
    fill="none"
    stroke="black"
    stroke-width="2"></line>
  <line
    id="line2"
    x1="0"
    y1="0"
    x2="0"
    y2="0"
    fill="none"
    stroke="black"
    stroke-width="2"></line>

  <circle
    id="circle1"
    cx="100"
    cy="100"
    r="5"
    fill="red"
    stroke="red"
    stroke-width="2"></circle>

  <circle
    id="circle2"
    cx="200"
    cy="100"
    r="5"
    fill="red"
    stroke="red"
    stroke-width="2"></circle>
</svg>
```

```css hidden live-sample___arcs_interactive
body {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #eeeeee;
}

.ui {
  display: flex;
}

.ui > div {
  margin: 0 10px;
}

.ui .controls input {
  vertical-align: middle;
}

#circle1,
#circle2 {
  cursor: pointer;
}

svg {
  background: #dddddd;
}
```

```js hidden live-sample___arcs_interactive
const svgContext = document.getElementById("svg-context");
let rect = svgContext.getBoundingClientRect(); // helper to enclose mouse coordinates into svg box

const pageXEl = document.getElementById("page-x");
const pageYEl = document.getElementById("page-y");
const mEl = document.getElementById("m-value");
const rxEl = document.getElementById("rx");
const ryEl = document.getElementById("ry");
const rotEl = document.getElementById("rot");
const lafEl = document.getElementById("laf");
const sfEl = document.getElementById("sf");
const axEl = document.getElementById("ax-value");
const ayEl = document.getElementById("ay-value");
const bxEl = document.getElementById("bx-value");
const byEl = document.getElementById("by-value");
const baEl = document.getElementById("ba-value");
const bbEl = document.getElementById("bb-value");
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const line = document.getElementById("line");
const line0 = document.getElementById("line0");
const line2 = document.getElementById("line2");
const cwEl = document.getElementById("cw-value");
const arcCmdEl = document.getElementById("arc-value");
const arcEl = document.getElementById("arc");
const arc2El = document.getElementById("arc2");
const arc3El = document.getElementById("arc3");
const arc4El = document.getElementById("arc4");

function updatePaths(pageX, pageY) {
  pageXEl.textContent = pageX;
  pageYEl.textContent = pageY;

  // line between two points
  line.setAttribute("x1", circle1.getAttribute("cx"));
  line.setAttribute("y1", circle1.getAttribute("cy"));
  line.setAttribute("x2", circle2.getAttribute("cx"));
  line.setAttribute("y2", circle2.getAttribute("cy"));

  axEl.textContent = circle1.getAttribute("cx");
  ayEl.textContent = circle1.getAttribute("cy");
  bxEl.textContent = circle2.getAttribute("cx");
  byEl.textContent = circle2.getAttribute("cy");

  // y = mx + b
  let m, b, run; // m = rise/run = (y2-y1) / (x2-x1)
  if (circle1.getAttribute("cx") <= circle2.getAttribute("cx")) {
    run = circle2.getAttribute("cx") - circle1.getAttribute("cx");
    if (run !== 0) {
      m = (circle2.getAttribute("cy") - circle1.getAttribute("cy")) / run;
    }
  } else {
    run = circle1.getAttribute("cx") - circle2.getAttribute("cx");
    if (run !== 0) {
      m = (circle1.getAttribute("cy") - circle2.getAttribute("cy")) / run;
    }
  }

  if (run !== 0) {
    // b = y - mx
    b = circle1.getAttribute("cy") - m * circle1.getAttribute("cx");
    b2 = circle2.getAttribute("cy") - m * circle2.getAttribute("cx");
    baEl.textContent = b;
    bbEl.textContent = b2;
    mEl.textContent = m;

    // draw segment from the left vertical axis (x=0) to the left most point (A or B).
    // x=0 ----> y = b
    let leftMost, rightMost;
    if (circle1.getAttribute("cx") <= circle2.getAttribute("cx")) {
      leftMost = circle1;
      rightMost = circle2;
    } else {
      leftMost = circle2;
      rightMost = circle1;
    }

    line0.setAttribute("x1", 0);
    line0.setAttribute("y1", b);
    line0.setAttribute("x2", leftMost.getAttribute("cx"));
    line0.setAttribute("y2", leftMost.getAttribute("cy"));

    // draw segment from point B to the right vertical axis (x=rect.width)
    // representing the end of the svg box.
    // y = mx + b
    const y = m * rect.width + b;
    line2.setAttribute("x1", rightMost.getAttribute("cx"));
    line2.setAttribute("y1", rightMost.getAttribute("cy"));
    line2.setAttribute("x2", rect.width);
    line2.setAttribute("y2", y);

    // now update the arc
    const arcCmd = getArcCommand(
      leftMost,
      rightMost,
      lafEl.checked,
      sfEl.checked,
    );
    arcCmdEl.textContent = arcCmd;
    arcEl.setAttribute("d", arcCmd);

    // now update the other helper arcs
    const combo = [
      [true, true],
      [true, false],
      [false, true],
      [false, false],
    ].filter(
      (item) => !(item[0] === lafEl.checked && item[1] === sfEl.checked),
    );
    arc2El.setAttribute(
      "d",
      getArcCommand(leftMost, rightMost, combo[0][0], combo[0][1]),
    );
    arc3El.setAttribute(
      "d",
      getArcCommand(leftMost, rightMost, combo[1][0], combo[1][1]),
    );
    arc4El.setAttribute(
      "d",
      getArcCommand(leftMost, rightMost, combo[2][0], combo[2][1]),
    );
  }
}

function getArcCommand(leftMost, rightMost, lafChecked, sfChecked) {
  return `M${leftMost.getAttribute("cx")} ${leftMost.getAttribute("cy")} A ${rxEl.value} ${ryEl.value} ${rotEl.value} ${lafChecked ? "1" : "0"} ${sfChecked ? "1" : "0"} ${rightMost.getAttribute("cx")} ${rightMost.getAttribute("cy")}`;
}

function updateScreen() {
  rect = svgContext.getBoundingClientRect();
  cwEl.textContent = rect.width;
}

circle1.sdrag((el, pageX, startX, pageY, startY) => {
  pageX -= rect.left;
  pageY -= rect.top;

  el.setAttribute("cx", pageX);
  el.setAttribute("cy", pageY);
  updatePaths(pageX, pageY);
});

circle2.sdrag((el, pageX, startX, pageY, startY) => {
  pageX -= rect.left;
  pageY -= rect.top;

  el.setAttribute("cx", pageX);
  el.setAttribute("cy", pageY);
  updatePaths(pageX, pageY);
});

window.addEventListener("resize", updateScreen);

// sliders
["rx", "ry", "rot"].forEach((id) => {
  document.getElementById(id).addEventListener("input", (e) => {
    updatePaths();
  });
});

// checkboxes
["laf", "sf"].forEach((id) => {
  document.getElementById(id).addEventListener("change", (e) => {
    updatePaths();
  });
});

updatePaths();
updateScreen();
```

{{EmbedLiveSample("arcs_interactive", "", 600)}}

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}
