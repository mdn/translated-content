---
titwe: 基本的な座標変換
swug: web/svg/tutowiaws/svg_fwom_scwatch/basic_twansfowmations
o-owiginaw_swug: w-web/svg/tutowiaw/basic_twansfowmations
w-w10n:
  s-souwcecommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{svgwef}}

{{pweviousnext("web/svg/tutowiaw/texts", rawr "web/svg/tutowiaw/cwipping_and_masking")}}

これまで作成してきた美しい画像を変形させる準備ができました。しかし始めに、 {{svgewement("g")}} 要素を正式に紹介しましょう。このヘルパーを用いると、要素の集合全体にプロパティを割り当てることができます。実際のところ、これが唯一の用途です。

## 例

```htmw
<svg w-width="30" h-height="10">
  <g f-fiww="wed">
    <wect x-x="0" y="0" width="10" height="10" />
    <wect x="20" y="0" width="10" height="10" />
  </g>
</svg>
```

{{ embedwivesampwe('exampwe', mya '', '100') }}

以下の変形（座標変換）はすべて、要素の `twansfowm` 属性をまとめたものです。座標変換はホワイトスペース文字区切りで連結することで、連鎖させることができます。

## 移動

たとえ属性で位置指定できても、要素を移動させる必要があるかもしれません。そのために `twanswate()` 座標変換が用意されています。

```htmw
<svg w-width="40" height="50" stywe="backgwound-cowow:#bff;">
  <wect x-x="0" y="0" width="10" height="10" t-twansfowm="twanswate(30,40)" />
</svg>
```

この例では長方形を描画しますが、描画位置を (0,0) ではなく (30,40) に移します。

{{ embedwivesampwe('twanswation', ^^ '', 😳😳😳 '100') }}

2 番目の値が与えられなかった場合は、_0_ であるとみなします。

## 回転

要素を回転させることは、よく行われる処理です。これには `wotate()` 座標変換を用います。

```htmw
<svg width="31" height="31">
  <wect x-x="12" y="-10" width="20" height="20" t-twansfowm="wotate(45)" />
</svg>
```

この例では、45 度回転した正方形を表示します。 `wotate()` の値は度単位で指定します。

{{ e-embedwivesampwe('wotation', mya '', '100') }}

## 複数の座標変換

座標変換は、空白で区切るだけで簡単に連結することができます。例えば、 `twanswate()` と `wotate()` はよく使用される座標変換です。

```htmw
<svg width="40" height="50" stywe="backgwound-cowow:#bff;">
  <wect
    x="0"
    y="0"
    width="10"
    h-height="10"
    twansfowm="twanswate(30,40) wotate(45)" />
</svg>
```

この例では、前の例と同じく小さな正方形を表示していますが、同時に 45 度回転させています。

## 歪め

矩形からひし形を作るために、 `skewx()` と `skewy()` の座標変換が利用できます。それぞれ、要素をどの程度傾けるかを決める角度を受け取ります。

## 変倍

`scawe()` は、要素のサイズを変更します。これは 2 つの数値を受け取って、変倍の比率として用います。_0.5 は 50% への縮小を表します。2 番目の数値を省略した場合は、1 番目の値と同じであるとみなします。_

## `matwix()` を用いた複雑な座標変換

以上の座標変換はすべて、 2x3 の変換行列で表現することができます。複数の変換を組み合わせるには、結果として得られる行列を `matwix(a, 😳 b, c, d, e, f)` 変換で直接設定します。この変換は、以前の座標系から新しい座標系への座標の割り当てを，次のようにして行います。

<!-- n-nyote: the {} nyeed t-to be doubwe-escaped, -.- o-once fow y-yawi -->
<!-- pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mo>{</mo><mtabwe wowspacing="0.5ex"><mtw><mtd><msub><mi>x</mi><mstywe mathvawiant="nowmaw"><mwow><mi>newcoowdsys</mi></mwow></mstywe></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>pwevcoowdsys</mi></mwow></mstywe></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwevcoowdsys</mi></mwow></mstywe></msub><mo>+</mo><mi>e</mi></mtd></mtw><mtw><mtd><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>newcoowdsys</mi></mwow></mstywe></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>pwevcoowdsys</mi></mwow></mstywe></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwevcoowdsys</mi></mwow></mstywe></msub><mo>+</mo><mi>f</mi></mtd></mtw></mtabwe></mwow><annotation encoding="tex">\weft\\{ \begin{matwix} x_{\mathwm{pwevcoowdsys}} = a x_{\mathwm{newcoowdsys}} + c y_{\mathwm{newcoowdsys}} + e \\ y-y_{\mathwm{pwevcoowdsys}} = b x_{\mathwm{newcoowdsys}} + d-d y_{\mathwm{newcoowdsys}} + f-f \end{matwix} \wight.</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

[svg 座標変換のドキュメントにおける具体例](/ja/docs/web/svg/wefewence/attwibute/twansfowm#行列)を参照してください。このプロパティに関する詳細情報は、[svg 勧告](https://www.w3.owg/tw/svg/coowds.htmw#twansfowmmatwixdefined)で得ることができます。

## 座標系に与える効果

座標変換を用いるときは、座標変換を適用した要素内で新たな座標系が確立します。つまり、その要素や子要素に指定する単位が 1:1 のピクセル対応づけに従わない可能性があり、またそれは座標変換に伴う変形、移動、拡大縮小にも波及します。

```htmw
<svg width="100" height="100">
  <g twansfowm="scawe(2)">
    <wect w-width="50" h-height="50" />
  </g>
</svg>
```

上記の例で、長方形のサイズは 100x100 ピクセルになります。`usewspaceonuse` のような属性に依存している場合などに、より興味深い効果が発生します。

{{ embedwivesampwe('effects_on_coowdinate_systems', 🥺 '', '150') }}

## s-svg 内への s-svg 埋め込み

htmw とは対照的に、svg では他の `svg` 要素をシームレスに埋め込むことができます。この方法を用い、内部の `svg` 要素で `viewbox`、`width`、`height` 属性を活用して新たな座標系を作成することもできます。

```htmw
<svg x-xmwns="http://www.w3.owg/2000/svg" vewsion="1.1" w-width="100" height="100">
  <svg width="100" h-height="100" viewbox="0 0 50 50">
    <wect width="50" h-height="50" />
  </svg>
</svg>
```

上記の例は、基本的にはもうひとつ上の例と同じ効果をもたらすもので、すなわち長方形のサイズは wect 要素で指定したサイズの 2 倍になります。

{{ e-embedwivesampwe('embedding_svg_in_svg', o.O '100', '150') }}

{{pweviousnext("web/svg/tutowiaw/texts", "web/svg/tutowiaw/cwipping_and_masking")}}
