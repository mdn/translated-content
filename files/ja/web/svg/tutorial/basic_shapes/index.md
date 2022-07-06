---
title: 基本的な図形
slug: Web/SVG/Tutorial/Basic_Shapes
tags:
  - 初心者
  - SVG
  - SVG:チュートリアル
translation_of: Web/SVG/Tutorial/Basic_Shapes
---
{{ PreviousNext("Web/SVG/Tutorial/Positions", "Web/SVG/Tutorial/Paths") }}

ほとんどの SVG の描画に使われる基本的な図形がいくつかあります。これらの図形の目的は、その名前からかなり明白です。それらの位置や大きさを決定する引数のいくつかが与えられていますが、要素のリファレンスにはおそらくより正確で完全な説明と、ここでは取り上げない他のプロパティが含まれているでしょう。しかし、これらはほとんどの SVG 文書で使用されるため、ある種の紹介をする必要があります。

図形を挿入するには、文書内に要素を作成します。さまざまな要素が各々さまざまな図形に対応づけられ、また各属性が図形のサイズや位置を定義します。一部の要素は他の図形で作成できるという点でやや冗長ですが、それらすべては利便性および文書をできるだけ小さくかつ読みやすくするために存在します。すべての基本的な図形を右図に示しています。これらを生成するコードは以下のとおりです。

![](shapes.png)

この画像を生成するコードは、次のようなものです。

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

> **Note:** `stroke`, `stroke-width`, `fill` の各属性は、後のチュートリアルで説明します。

### 長方形

{{SVGElement("rect")}} 要素は画面に長方形を描画します。画面上の長方形の位置や形状を操作する、 6 種類の基本的な属性があります。右側の長方形は `rx` および `ry` 属性があり、これは角を丸くしています。これらを設定しない場合、初期値は `0` になります。

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- `x`
  - : 長方形の左上の角の位置を示す、X 座標です。
- `y`
  - : 長方形の左上の角の位置を示す、Y 座標です。
- `width`
  - : 長方形の幅です。
- `height`
  - : 長方形の高さです。
- `rx`
  - : 長方形の角の、X 軸方向の半径です。
- `ry`
  - : 長方形の角の、Y 軸方向の半径です。

### 円

{{SVGElement("circle")}} 要素は画面に円を描画します。 3 種類の引数を取り、この要素の形状や大きさを指定します。

```xml
<circle cx="25" cy="75" r="20"/>
```

- `r`
  - : 円の半径です。
- `cx`
  - : 円の中心の位置を示す、X 座標です。
- `cy`
  - : 円の中心の位置を示す、Y 座標です。

### 楕円

{{SVGElement("ellipse")}} は {{SVGElement("circle")}} のより一般的な形で、円の X 方向および Y 方向の半径（数学者は一般的に長半径および短半径と呼びます）を個別に指定することができます。

```xml
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

- `rx`
  - : 楕円の X 軸方向の半径です。
- `ry`
  - : 楕円の Y 軸方向の半径です。
- `cx`
  - : 楕円の中心の位置を示す、X 座標です。
- `cy`
  - : 楕円の中心の座標を示す、Y 座標です。

### 直線

{{SVGElement("line")}} 要素は、 2 つの点を引数として取り、それらの間に直線を引きます。

```xml
<line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/>
```

- `x1`
  - : 点 1 の X 座標です。
- `y1`
  - : 点 1 の Y 座標です。
- `x2`
  - : 点 2 の X 座標です。
- `y2`
  - : 点 2 の Y 座標です。

## 連続線

{{SVGElement("polyline")}} は、接続された直線のグループです。点のリストは非常に長くなるので、すべての点が 1 つの属性に含まれます。

```xml
<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
```

- `points`
  - : 点のリスト。それぞれの数値は、空白、カンマ、EOL、改行文字で区切る必要があります。それぞれの点は、 x 座標と y 座標の 2 つの数値を含む必要があります。つまり、リスト `(0,0)`, `(1,1)`, `(2,2)` は、 `0, 0 1, 1 2, 2` と記述されることになります。

## 多角形

{{SVGElement("polygon")}} は {{SVGElement("polyline")}} と似ており、点のリストを結ぶ直線で構成されています。しかし、多角形の場合、パスは自動的に最後の点と最初の点を結び、閉じた形状を作成します。

> **Note:** 長方形は多角形の一種ですので、もう少し柔軟性が必要な場合には、多角形を使って `<rect/>` 要素を作成することができます。

```xml
<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>
```

- `points`
  - : 点のリストで、それぞれの数値は、空白、カンマ、EOL、改行文字で区切られています。各点は、 x 座標と y 座標の 2 つの数値を含む必要があります。したがって、リスト `(0,0)`, `(1,1)`, `(2,2)` は、 `0, 0 1, 1 2, 2` と記述することになります。そして、描画はパスを閉じるので、最終的には `(2,2)` から `(0,0)` までの直線が描かれることになります。

## パス

{{SVGElement("path")}} は SVG で使用できる最も一般的な図形です。 `path` 要素を用いると、矩形（角丸の有無は問わない）、円、楕円、ポリライン、多角形を描くことができます。基本的には他の種類の形状、ベジェ曲線、二次曲線、その他多くの形状を描くことができます。

このため、パスについてはこのチュートリアルの[次の章](/ja/docs/Web/SVG/Tutorial/Paths)に独立していますが、 ここではその図形をコントロールするただ一つの属性があることを示します。

```xml
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

- `d`
  - : 点のリストと、パスの描画方法に関する情報です。詳しくは[パス](/ja/docs/Web/SVG/Tutorial/Paths)の節を参照してください。

{{ PreviousNext("Web/SVG/Tutorial/Positions", "Web/SVG/Tutorial/Paths") }}
