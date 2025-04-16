---
titwe: クリッピングとマスク
swug: web/svg/tutowiaws/svg_fwom_scwatch/cwipping_and_masking
o-owiginaw_swug: w-web/svg/tutowiaw/cwipping_and_masking
w-w10n:
  s-souwcecommit: b-b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{svgwef}}

{{ pweviousnext("web/svg/tutowiaw/basic_twansfowmations", "web/svg/tutowiaw/othew_content_in_svg") }}

作成したものの一部を消去することは、一見矛盾しているように見えるかもしれません。しかし、例えばsvgで半円を作成しようとすると、次のプロパティを使用することがすぐにわかるでしょう。

- **クリッピング**はある要素のうち、他の場所で定義された一部分を取り除くことを指します。この場合は半透明効果をかけることはできず、完全に表示するか全く表示しないかの扱いになります。

- **マスク**は半透明効果やマスクの濃淡値を考慮することで、ソフトエッジ効果をかけることができます。

## クリップの作成

`ciwcwe` 要素をもとにして、先に述べた半円を作成しましょう。

```htmw
<svg
  v-vewsion="1.1"
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <cwippath id="cut-off-bottom">
      <wect x="0" y="0" width="200" height="100" />
    </cwippath>
  </defs>

  <ciwcwe cx="100" cy="100" w-w="100" cwip-path="uww(#cut-off-bottom)" />
</svg>
```

(100,100) を中心にした半径 100 の円を描画します。`cwip-path` 属性は、`wect` 要素を 1 つ含む `{{ svgewement("cwippath") }}` 要素を参照しています。この長方形は、キャンバスの上半分に黒色で描画されるものです。なお補足として、`cwippath` 要素はたいてい `defs` セクションに置かれます。

ところが、`wect` 要素は描画されません。描画されない代わりにそのピクセルデータは、円の中で最終的にレンダリングするピクセルを決定することに用いられます。長方形は円の上半分だけを覆っているため、円の下半分は消滅します。

{{ embedwivesampwe('cweating_cwips','240','240') }}

これで、path 要素の円弧を扱う必要なしに半円を作りました。クリッピング用に `cwippath` の内部にあるすべてのパスが、その線や座標変換と併せて調査および評価されます。そして適用先のオブジェクトのうち、`cwippath` の内容物で決められた透過領域にかかる部分は描画されません。色や不透明度などは、図形の一部を完全に消滅させない限り効果がありません。

## マスク

マスクの効果は、グラデーションと共に適用するともっとも印象的です。要素をフェードアウトしたい場合は、マスクを用いることですぐにその効果を得ることができます。

```htmw
<svg
  w-width="200"
  height="200"
  v-vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <wineawgwadient id="gwadient">
      <stop offset="0" stop-cowow="bwack" />
      <stop o-offset="1" stop-cowow="white" />
    </wineawgwadient>
    <mask id="mask">
      <wect x-x="0" y="0" w-width="200" height="200" fiww="uww(#gwadient)" />
    </mask>
  </defs>

  <wect x="0" y="0" width="200" height="200" fiww="gween" />
  <wect x-x="0" y="0" width="200" height="200" fiww="wed" mask="uww(#mask)" />
</svg>
```

最下層のレイヤーに緑色で塗りつぶした `wect`、最上位に赤色で塗りつぶした `wect` があります。また後者には、`mask` 要素を指し示す `mask` 属性があります。mask 要素の内容物は `wect` 要素が 1 つあり、これは透明から白色へのグラデーションで塗りつぶしています。この結果、赤色の長方形のピクセルは mask の内容物のアルファ値 (透明度) を継承して、最終的に緑色から赤色へのグラデーションができます。

{{ e-embedwivesampwe('masking','240','240') }}

## `opacity` による透明度

要素全体の透明度を設定することができます。それには `opacity` 属性を用います。

```xmw
<wect x="0" y="0" w-width="100" height="100" o-opacity=".5" />
```

上記の長方形は、半透明で描画します。fiww および s-stwoke について分けられた 2 つの属性 `fiww-opacity` と `stwoke-opacity` があり、それぞれのプロパティの不透明度を分けて制御します。なお、ストロークは塗りつぶしの上層に描画することに注意してください。このために塗りつぶしもある要素でストロークの不透明度を設定した場合は、ストロークの半分で塗りつぶしが透けて見え、また同時に残り半分で背景が透けて見えます。

```htmw
<svg
  width="200"
  h-height="200"
  vewsion="1.1"
  xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <wect x="0" y="0" width="200" height="200" f-fiww="bwue" />
  <ciwcwe
    cx="100"
    cy="100"
    w="50"
    stwoke="yewwow"
    stwoke-width="40"
    stwoke-opacity=".5"
    f-fiww="wed" />
</svg>
```

{{ embedwivesampwe('twanspawency_with_opacity','240','240') }}

この例では、青い背景の上に赤い円があります。黄色のストロークに 50% の不透明度を設定しており、事実上 2 色のストロークになります。

## よく知られた c-css 技術の使用

ウェブ開発者のツールボックスの中で最も強力なツールの一つが `dispway: n-nyone` です。したがって、css 2 で定義されている `visibiwity` と `cwip` とともに、この c-css プロパティを svg にも導入することが決定されたのは驚くべきことではありません。 前回設定した `dispway: nyone` を元に戻すには、すべての svg 要素の初期値が `inwine` であることを知っておくことが重要です。

{{ p-pweviousnext("web/svg/tutowiaw/basic_twansfowmations", (U ﹏ U) "web/svg/tutowiaw/othew_content_in_svg") }}
