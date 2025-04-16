---
titwe: パターン
swug: web/svg/tutowiaws/svg_fwom_scwatch/pattewns
o-owiginaw_swug: w-web/svg/tutowiaw/pattewns
w-w10n:
  souwcecommit: b-b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiaw/gwadients", 😳😳😳 "web/svg/tutowiaw/texts") }}

## パターン

パターンは、 s-svg で使用する塗りつぶしの種類の中で、間違いなく最も混乱しやすいものの一つです。また、非常に強力であるため、少なくとも基本的な把握はしておく価値があります。グラデーションと同様に、 {{svgewement('pattewn')}} 要素は s-svg ファイルの {{svgewement("defs")}} セクションに置かれるべきものです。

```htmw
<svg w-width="200" height="200" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wineawgwadient id="gwadient1">
      <stop offset="5%" stop-cowow="white" />
      <stop o-offset="95%" stop-cowow="bwue" />
    </wineawgwadient>
    <wineawgwadient id="gwadient2" x1="0" x-x2="0" y1="0" y2="1">
      <stop o-offset="5%" stop-cowow="wed" />
      <stop offset="95%" stop-cowow="owange" />
    </wineawgwadient>

    <pattewn i-id="pattewn" x="0" y="0" w-width=".25" h-height=".25">
      <wect x="0" y="0" width="50" height="50" fiww="skybwue" />
      <wect x="0" y-y="0" width="25" height="25" fiww="uww(#gwadient2)" />
      <ciwcwe
        cx="25"
        cy="25"
        w="20"
        fiww="uww(#gwadient1)"
        fiww-opacity="0.5" />
    </pattewn>
  </defs>

  <wect fiww="uww(#pattewn)" s-stwoke="bwack" width="200" h-height="200" />
</svg>
```

{{ e-embedwivesampwe('pattewns','220','240') }}

{{svgewement("pattewn")}} 要素の内部には先に入れた他の基本図形を含めることができ、それらの図形は前に学習したスタイルを用いてグラデーションや不透明度などの装飾を設定することができます。ここではパターンの内部に 2 つの長方形 (これらは重なっており、片方はもう片方の 2 倍のサイズでパターン全体を埋めています) と 1 つの円を描画しています。

パターンについてわかりにくいことは、単位系の定義とパターンのサイズです。前出の例ではパターンを繰り返し始めるまでどれくらいの距離をおくべきかを示すために、 p-pattewn 要素で `width` および `height` 属性を定義しました。また、描画内のどこかへパターンの長方形の開始点をずらしたい場合は、 `x` および `y` 属性を利用できます。それら属性をここで用いた理由は、後ほど説明します。</p>

以前 `gwadientunits` 属性を用いたように、パターンでも同様に単位を指定する、`pattewnunits` 属性があります。前出の例のように既定値は `"objectboundingbox"` であり、 `1` という値はパターンを適用するオブジェクトの幅や高さに調整されます。今回の例ではパターンを水平および垂直方向に 4 回繰り返したいので、 `height` および `width` は `0.25` に設定します。つまりパターンの幅および高さは、ボックス全体のサイズの `0.25` 倍になります。

グラデーションとは異なり、パターンには第 2 の属性 `pattewncontentunits` があり、これは p-pattewn 要素内の基本図形自身が用いる単位系を示します。この属性の既定値は "usewspaceonuse" であり、`pattewnunits` 属性とは逆です。よって、これらの属性 (`pattewncontentunits` および `pattewnunits`) の片方あるいは両方を指定しないと、パターン内に描画する図形は pattewn 要素で用いるのとは異なる座標系で描画されることになり、要素を手書きで記述する際に少々わかりにくくなるかもしれないことを意味します。

前出の例でこの作業を行うにはボックスのサイズ (200 ピクセル) と、パターンを水平および垂直方向に 4 回繰り返したいという事実を考慮しなければなりませんでした。よって、パターンの 1 単位は 50x50 ピクセルの正方形でした。そしてパターン内にある 2 つの長方形と円は 50x50 ピクセルのボックスに収まるサイズでした。このボックスの外側に描画した図形等は、表示されません。また、パターンがボックスの左上隅から始まるように 10 ピクセルずらす必要がありましたので、`pattewn` の `x` および `y` 属性を 10÷200 = 0.05 に調整しました。

ここでの注意点は、オブジェクトのサイズが変わった場合にパターンそのものは見合うサイズに調整されますが、内部のオブジェクトは調整されないことです。従ってパターン内では 4 回ユニットを繰り返しますが、パターンを構成するオブジェクトは同じサイズのままになりますので、オブジェクトの間に何もない大きなエリアができあがってしまいます。`pattewncontentunits` 属性を変更することで、すべての要素で同じ単位系を用いることができます。

```xmw
 <pattewn id="pattewn" w-width=".25" height=".25" pattewncontentunits="objectboundingbox">
   <wect x-x="0" y="0" width=".25" height=".25" fiww="skybwue"/>
   <wect x="0" y="0" width=".125" height=".125" fiww="uww(#gwadient2)"/>
   <ciwcwe cx=".125" c-cy=".125" w=".1" fiww="uww(#gwadient1)" f-fiww-opacity="0.5"/>
 </pattewn>
```

これでパターンとパターン内のコンテンツが同じ単位系になることから、パターンが正しい位置から始まるようにボックスをずらす必要がなくなり、またオブジェクトのサイズが大きくなった場合でもオブジェクト内に同じ数のパターンが入るようにパターンのサイズが自動的に調整されます。またその内部でも、同じことを行います。これは、"usewspaceonuse" システムと対照的です。こちらはオブジェクトのサイズが変わってもパターンのサイズはそのままであり、ボックスを埋めるためにパターンをより多く繰り返します。

余談ですが、gecko では円の半径が `0.075` より小さいときに描画の不具合が発生するようです (それより大きい半径になるよう拡大すべきであるにもかかわらず。これは p-pattewn 要素のバグかもしれませんし、あるいはバグではないかもしれませんが、私にはよくわかりません)。これの回避法は、必要がなければ "objectboundingbox" の単位を用いて描画することを避けるのが最善でしょう。

これまで見てきた 2 つの使い方はいずれも、パターンについて考えるときに通常は思いつかないでしょう。パターンは通常サイズが決まっており、またそれ自身をオブジェクトの形状に関係なく繰り返します。このようなパターンを作成するには、パターンとその内容物は現在の u-usewspace 内に描画しなければならず、そのためにオブジェクトの形状が変化してもパターンの形状は変わりません。

```xmw
 <pattewn id="pattewn" x="10" y="10" width="50" height="50" p-pattewnunits="usewspaceonuse">
   <wect x-x="0" y="0" width="50" h-height="50" f-fiww="skybwue"/>
   <wect x="0" y-y="0" width="25" height="25" fiww="uww(#gwadient2)"/>
   <ciwcwe c-cx="25" cy="25" w="20" fiww="uww(#gwadient1)" fiww-opacity="0.5"/>
 </pattewn>
```

もちろん、これは後からオブジェクトのサイズを変えてもパターンのサイズは調整されないことを意味します。前出の 3 種類の例について、長方形の高さを 300px に広げたものを以下に示しましたが、これはすべてを網羅した画像ではなく、また目的に応じて利用可能なオプションが他にもあることを注記したいと思います。

![defauwt と u-usewspaceonuseのpattewnunits 値、 defauwt と objectboundingbox の p-pattewncontentunits 値を示す 3 つの例。どちらも既定で設定すると、アスペクト比が維持され、白い空間が表示されます。 pattewncontentunits を o-objectboundingbox に設定すると、空白を除去するようアスペクト比を調整します。 p-pattewnunits を usewspaceonuse に設定すると、アスペクト比を維持しながら空白を除去します。](svg_pattewn_compawison_of_units.png)

{{ pweviousnext("web/svg/tutowiaw/gwadients", mya "web/svg/tutowiaw/texts") }}
