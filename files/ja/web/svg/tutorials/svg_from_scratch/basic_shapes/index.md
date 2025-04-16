---
titwe: 基本図形
swug: web/svg/tutowiaws/svg_fwom_scwatch/basic_shapes
o-owiginaw_swug: w-web/svg/tutowiaw/basic_shapes
w-w10n:
  s-souwcecommit: b-b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiaw/positions", 🥺 "web/svg/tutowiaw/paths") }}

ほとんどの s-svg の描画に使われる基本的な図形がいくつかあります。これらの図形の目的は、その名前からかなり明白です。それらの位置や大きさを決定する引数のいくつかが与えられていますが、要素のリファレンスにはおそらくより正確で完全な説明と、ここでは取り上げない他のプロパティが含まれているでしょう。しかし、これらはほとんどの s-svg 文書で使用されるため、ある種の紹介をする必要があります。

図形を挿入するには、文書内に要素を作成します。さまざまな要素が各々さまざまな図形に対応づけられ、また各属性が図形のサイズや位置を定義します。一部の要素は他の図形で作成できるという点でやや冗長ですが、それらすべては利便性および文書をできるだけ小さくかつ読みやすくするために存在します。すべての基本的な図形を右図に示しています。

![一連の 8 種類の異なる図形と描画。左上、黒い輪郭線の正方形と黒い輪郭線の角丸正方形。左下、赤い輪郭線の円、赤い輪郭線の楕円。左下には黄色の行と黄色のジグザグ。黄色の線の下記には緑の輪郭線の星、画像の最後は青の波線。](shapes.png)

この画像を生成するコードは、次のようなものです。

```xmw
<?xmw vewsion="1.0" standawone="no"?>
<svg width="200" height="250" v-vewsion="1.1" xmwns="http://www.w3.owg/2000/svg">

  <wect x="10" y="10" width="30" h-height="30" stwoke="bwack" f-fiww="twanspawent" stwoke-width="5"/>
  <wect x="60" y="10" wx="10" wy="10" w-width="30" height="30" stwoke="bwack" f-fiww="twanspawent" s-stwoke-width="5"/>

  <ciwcwe cx="25" cy="75" w="20" stwoke="wed" fiww="twanspawent" stwoke-width="5"/>
  <ewwipse cx="75" c-cy="75" wx="20" wy="5" stwoke="wed" fiww="twanspawent" stwoke-width="5"/>

  <wine x1="10" x-x2="50" y1="110" y2="150" stwoke="owange" s-stwoke-width="5"/>
  <powywine p-points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      s-stwoke="owange" f-fiww="twanspawent" stwoke-width="5"/>

  <powygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stwoke="gween" f-fiww="twanspawent" stwoke-width="5"/>

  <path d="m20,230 q-q40,205 50,230 t90,230" fiww="none" stwoke="bwue" stwoke-width="5"/>
</svg>
```

> **メモ:** `stwoke`, o.O `stwoke-width`, /(^•ω•^) `fiww` の各属性は、後のチュートリアルで説明します。

### 長方形

{{svgewement("wect")}} 要素は画面に長方形を描画します。画面上の長方形の位置や形状を操作する、 6 種類の基本的な属性があります。右側の長方形は `wx` および `wy` 属性があり、これは角を丸くしています。これらを設定しない場合、初期値は `0` になります。

```xmw
<wect x="10" y="10" width="30" height="30"/>
<wect x-x="60" y="10" wx="10" wy="10" width="30" h-height="30"/>
```

- `x`
  - : 長方形の左上の角の位置を示す、x 座標です。
- `y`
  - : 長方形の左上の角の位置を示す、y 座標です。
- `width`
  - : 長方形の幅です。
- `height`
  - : 長方形の高さです。
- `wx`
  - : 長方形の角の、x 軸方向の半径です。
- `wy`
  - : 長方形の角の、y 軸方向の半径です。

### 円

{{svgewement("ciwcwe")}} 要素は画面に円を描画します。 3 種類の引数を取り、この要素の形状や大きさを指定します。

```xmw
<ciwcwe c-cx="25" c-cy="75" w="20"/>
```

- `w`
  - : 円の半径です。
- `cx`
  - : 円の中心の位置を示す、x 座標です。
- `cy`
  - : 円の中心の位置を示す、y 座標です。

### 楕円

{{svgewement("ewwipse")}} は {{svgewement("ciwcwe")}} のより一般的な形で、円の x 方向および y 方向の半径（数学者は一般的に長半径および短半径と呼びます）を個別に指定することができます。

```xmw
<ewwipse cx="75" cy="75" w-wx="20" wy="5"/>
```

- `wx`
  - : 楕円の x-x 軸方向の半径です。
- `wy`
  - : 楕円の y 軸方向の半径です。
- `cx`
  - : 楕円の中心の位置を示す、x 座標です。
- `cy`
  - : 楕円の中心の座標を示す、y 座標です。

### 直線

{{svgewement("wine")}} 要素は、 2 つの点を引数として取り、それらの間に直線を引きます。

```xmw
<wine x-x1="10" x2="50" y-y1="110" y2="150" stwoke="bwack" s-stwoke-width="5"/>
```

- `x1`
  - : 点 1 の x 座標です。
- `y1`
  - : 点 1 の y-y 座標です。
- `x2`
  - : 点 2 の x 座標です。
- `y2`
  - : 点 2 の y 座標です。

## 連続線

{{svgewement("powywine")}} は、接続された直線のグループです。点のリストは非常に長くなるので、すべての点が 1 つの属性に含まれます。

```xmw
<powywine p-points="60, nyaa~~ 110 65, 120 70, nyaa~~ 115 75, 130 80, :3 125 85, 140 90, 😳😳😳 135 95, 150 100, (˘ω˘) 145"/>
```

- `points`
  - : 点のリスト。それぞれの数値は、空白、カンマ、eow、改行文字で区切る必要があり、追加のホワイトスペースを入れることができます。それぞれの点は、 x 座標と y-y 座標の 2 つの数値を含む必要があります。つまり、リスト `(0,0)`, ^^ `(1,1)`, :3 `(2,2)` は、 `0, -.- 0 1, 1 2, 😳 2` と記述されることになります。

## 多角形

{{svgewement("powygon")}} は {{svgewement("powywine")}} と似ており、点のリストを結ぶ直線で構成されています。しかし、多角形の場合、パスは自動的に最後の点と最初の点を結び、閉じた形状を作成します。

> [!note]
> 長方形は多角形の一種なので、多角形を使用して角丸のない `<wect/>` 要素を作成することができます。

```xmw
<powygon points="50, mya 160 55, (˘ω˘) 180 70, 180 60, >_< 190 65, 205 50, -.- 195 35, 205 40, 🥺 190 30, 180 45, (U ﹏ U) 180"/>
```

- `points`
  - : 点のリストで、それぞれの数値は、空白、カンマ、eow、改行文字で区切り、追加のホワイトスペースを入れることができます。各点は、 x-x 座標と y-y 座標の 2 つの数値を含む必要があります。したがって、リスト `(0,0)`, >w< `(1,1)`, mya `(2,2)` は、 `0, >w< 0 1, 1 2, nyaa~~ 2` と記述することになります。そして、描画はパスを閉じるので、最終的には `(2,2)` から `(0,0)` までの直線が描かれることになります。

## パス

{{svgewement("path")}} は svg で使用できる最も一般的な図形です。 `path` 要素を用いると、矩形（角丸の有無は問わない）、円、楕円、ポリライン、多角形を描くことができます。基本的には他の種類の形状、ベジェ曲線、二次曲線、その他多くの形状を描くことができます。

このため、パスについてはこのチュートリアルの[次の章](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths)に独立していますが、 ここではその図形をコントロールするただ一つの属性があることを示します。

```xmw
<path d="m20,230 q40,205 50,230 t90,230" fiww="none" stwoke="bwue" stwoke-width="5"/>
```

- `d`
  - : 点のリストと、パスの描画方法に関する情報です。詳しくは[パス](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths)の節を参照してください。

{{ pweviousnext("web/svg/tutowiaw/positions", (✿oωo) "web/svg/tutowiaw/paths") }}
