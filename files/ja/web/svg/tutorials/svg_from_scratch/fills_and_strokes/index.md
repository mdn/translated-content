---
title: 塗りつぶしとストローク
slug: Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Paths", "Web/SVG/Tutorials/SVG_from_scratch/Gradients") }}

図形に色を付ける方法としては (オブジェクトに属性を指定することを含む)、インライン [CSS](/ja/docs/Glossary/CSS)、埋め込み CSS セクション、外部 CSS ファイルなどいくつかの方法があります。ほとんどに [SVG](/ja/docs/Glossary/SVG) ではインライン CSS を使用していますが、どの方法にも利点と欠点があります。

## fill および stroke 属性

### 塗りつぶし

基本的な色付けは、ノードに `fill` と `stroke` という 2 つの属性を設定することで行うことができます。 `fill` を使用するとオブジェクトの内部の色を設定し、 `stroke` はオブジェクトを囲む線の色を設定します。色名 (例えば `red`)、RGB 値 (例えば `rgb(255 0 0)`)、16 進数値など、HTML で用いる CSS の色名と同じ仕組みを用いることができます。

```html
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect
    x="10"
    y="10"
    width="100"
    height="100"
    stroke="blue"
    fill="purple"
    fill-opacity="0.5"
    stroke-opacity="0.8"
    stroke-width="15" />
</svg>
```

{{EmbedLiveSample("Painting", "100%", 150)}}

さらに、 SVG では `fill` と `stroke` の透明度を別々に指定することができます。これらは `fill-opacity` 属性と `stroke-opacity` 属性で制御されます。

### ストローク

この色のプロパティに加えて、線上にストロークを描画する方法を操作するための属性がいくつかあります。

![stroke-linecap 属性は、これらのストロークの終わりの見てくれを変えます。 square は四角いキャップを追加し、 round は指定された丸いキャップを提供し、 butt はキャップを除去します。](svg_stroke_linecap_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

`stroke-width` プロパティは、このストロークの幅を定義します。ストロークはパスの中心に描かれます。上の例では、パスはピンク色、ストロークは黒で表示されています。

ストロークに影響する 2 つ目の属性は、上記の `stroke-linecap` プロパティです。これは、線の端の形状を制御します。

このプロパティには指定できる値が 3 種類あります。

- `butt` は、ストロークの方向に対して垂直 (90 度) な直線エッジで線を閉じ、その端を交差させます。
- `square` は基本的には同じ外観ですが、ストロークを実際のパスよりもわずかに伸ばします。ストロークがパスよりも長くなる長さは、 `stroke-width` の半分です。
- `round` は、ストロークの終わりに丸める効果をもたらします。この曲線の半径は、 `stroke-width` で制御します。

また `stroke-linejoin` プロパティは、 2 本の線分の接続部をどのように描画するかを制御します。

![stroke-linejoin 属性は、 2 つの行が結合する点の見てくれを変更します。 miter は角度のある結合を作成し、 round は角を丸め、 bevel は面取りされたエッジを作成し、角を平らにします。](svg_stroke_linejoin_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="280" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>

  <polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
      stroke-linecap="round" fill="none" stroke-linejoin="round"/>

  <polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>
</svg>
```

これらの連続線は、それぞれ 2 本の線分から成っています。 2 本の接続箇所は `stroke-linejoin` 属性で制御します。この属性で取りうる値は 3 つあります。
`miter` は、線を通常の幅よりわずかに延長して、 1 つの角度だけを使用して四角い角を作成します。 `round` は、丸みを帯びた線分を作成します。 `bevel` は、2 つの線分の間を渡るように新しい角を生成します。

あと、 `stroke-dasharray` 属性を指定することで波線状のストロークを描画することもできます。

![2 種類のカスタム破線、 1 つは等間隔ダッシュ、他にも stroke-dasharray 属性値を使用して長短ダッシュを使用しています。](svg_stroke_dasharray_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

`stroke-dasharray` 属性は引数として、連続したカンマ区切りの数値をとります。

最初の数字は塗りつぶされた部分の長さを、 2 番目の数字は塗りつぶされていない部分の長さを指定します。上の例では、 2 番目のパスで 5 ピクセル単位を埋め、 5 単位の次のダッシュまで 5 単位の空白を作ります。もっと複雑なダッシュパターンにしたい場合は、より多くの数字を指定することができます。最初の例では 3 つの数字を指定していますが、この場合、レンダラーは数字を 2 回ループさせて偶数のパターンを作ります。つまり、最初のパスでは、 5 個の塗りつぶし、 10 個の空、 5 個の塗りつぶしがレンダリングされ、さらにループして、 5 個の空、 10 個の塗りつぶし、 5 個の空が作成されます。このパターンが繰り返されます。

`stroke` および `fill` プロパティは他にもあります。例えば、 `fill-rule` は自身が重なり合っている図形でどのように色をつけるかを指定します。 [`stroke-miterlimit`](/ja/docs/Web/SVG/Reference/Attribute/stroke-miterlimit) はストロークが miter を描画するかどうかを指定します。そして [stroke-dashoffset](/ja/docs/Web/SVG/Reference/Attribute/stroke-dashoffset) は、線上で波線の列をどこから始めるかを指定します。

### 描画順

塗りつぶしとストロークの描画順序は、 [`paint-order`](/ja/docs/Web/SVG/Reference/Attribute/paint-order) 属性を使用して制御できます。

```html
<?xml version="1.0" standalone="no"?>
<svg width="400" height="180" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline
    points="40 80 80 40 120 80"
    stroke-width="15"
    stroke="black"
    fill="coral"
    paint-order="fill" />

  <polyline
    points="40 140 80 100 120 140"
    stroke-width="15"
    stroke="black"
    fill="coral"
    paint-order="stroke" />
</svg>
```

{{EmbedLiveSample("Paint order", "100%", 180)}}

最初の図形の場合、ストロークの前に塗りつぶしがレンダリングされているため、塗りつぶしの上に黒いストロークが現れます。
2 つ目の図形の場合、塗りつぶしの前にストロークがレンダリングされています。

## CSS の使用

オブジェクトに属性を設定するだけでなく、 CSS を使って塗りつぶしやストロークのスタイルを設定することもできます。すべての属性を CSS で設定できるわけではありません。ふつうは描画や塗りつぶしを行う属性が利用できます。 `fill`, `stroke`, `stroke-dasharray` などは、グラデーションや後述するパターン版に追加することで、すべてこの方法で設定できます。 `width`, `height`, {{SVGElement("path")}} コマンドなどの属性は、 CSS では設定できません。何が使えて、何が使えないのかは、テストしてみるのが一番簡単です。

> [!NOTE]
> [SVG 仕様書](https://svgwg.org/svg2-draft/propidx.html) ではプロパティとその他の属性を厳密に区別しています。前者は CSS で変更できますが、後者はできません。

CSS は要素に `style` 属性を用いることで、インラインで挿入することができます。

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

もしくは、特別な style セクションに移すこともできます。そのようなセクションは HTML のように `<head>` に入れるのではなく、 {{SVGElement("defs")}} と呼ばれる領域に入れます。

{{SVGElement("defs")}} は定義を意味し、ここで作成された要素は SVG の中で直接は現れませんが、他の要素から使用されます。

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <style><![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
         paint-order: stroke;
       }
    ]]></style>
  </defs>
  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

スタイルをこのような領域に移すと、大きな要素グループでのプロパティの調整が容易になります。ロールオーバー効果を作るための **`:hover` 擬似クラス** などを用いることもできます。

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

CSS ルールを外部スタイルシートで指定するのに、[ふつうの XML スタイルシート構文](https://www.w3.org/TR/xml-stylesheet/)を使用することもできます。

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

`style.css` は以下のようにします。

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Paths", "Web/SVG/Tutorials/SVG_from_scratch/Gradients") }}
