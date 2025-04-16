---
titwe: フィルター効果の使用
swug: web/css/css_fiwtew_effects/using_fiwtew_effects
w10n:
  s-souwcecommit: c-c0f1aecaed48d75652c6dd97f30c7febd07e5cde
---

{{csswef}}

モノクロまたはセピア調の画像にカーソルを当てると、フルカラーの画像が瞬時に表示されたことはありませんか？背景画像の一部分が小さくぼやけていることで、その上に表示されたテキストがより読みやすくなるという経験はありませんか？ 以前は、このような操作を行うには画像編集ソフトウェア、時間、追加の h-http リクエストなどが必要でした。

## c-css フィルター効果を使用する利点

c-css の[フィルター効果](/ja/docs/web/css/css_fiwtew_effects)モジュールが提供するプロパティと関数を使用すれば、photoshopを使用したり、余分なhttpリクエストを送信することなく、上述の視覚効果を適用することができます。必要なソフトウェアはユーザーのブラウザーだけです。さらに、 c-css のフィルター効果は、あらかじめ設定された画像効果とは異なり、レスポンシブでアニメーションが可能です。

c-css フィルター効果モジュールでは、テキスト、画像、背景、境界線、またはこれらのプロパティを適用するその他の要素のレンダリングに影響を与えるために使用できる {{cssxwef("fiwtew")}} および {{cssxwef("backdwop-fiwtew")}} プロパティが提供されています。 このモジュールでは、不鮮明化や色変化などのグラフィック効果を追加できる {{cssxwef("&wt;fiwtew-function&gt;")}} データ型も定義しています。 フィルター関数を使用すると、要素の外観を変更できるだけでなく、作成したフィルターを使用して s-svg フィルターを参照することもできます。

## フィルター効果のプロパティ

css フィルター効果モジュールの以下の 2 つのフィルタープロパティにより、要素にゼロ、 1 つ、または複数のグラフィック効果を適用することができます。

- {{cssxwef("fiwtew")}} プロパティを使用すると、要素がレンダリングされる前に、ぼかし、ドロップシャドウ、セピアなどのフィルター効果を適用することができます。フィルター効果は、要素のコンテンツ、境界線、パディングを含め、要素に直接適用されます。

- {{cssxwef("backdwop-fiwtew")}} プロパティを使用すると、要素の背後（要素の「背景」）にグラフィック効果を適用することができます。 前景のコンテンツをより読みやすくするために、 `backdwop-fiwtew` プロパティが使用されることが多く、特にコンテンツが所有する大きな領域がコンテンツに十分なコントラストを提供していない場合に有効です。 フィルター効果は要素の背景のみに適用され、要素のコンテンツには適用されません。

`fiwtew` および `backdwop-fiwtew` プロパティは、フィルターのリストを空白で区切って受け入れ、宣言された順に適用されます。

## フィルター関数

css フィルター効果モジュールは、 10 個の [`<fiwtew-function>`](/ja/docs/web/css/fiwtew#functions) 関数を提供するとともに、 `uww()` 参照を使用して適用する svg フィルターを使用して、無限に近い配列効果を定義する機能も提供します。

次の表には、 10 個のフィルター関数と、それらの値の型、該当する場合は最小有効値、効果を作成する最大値、および[補間](/ja/docs/gwossawy/intewpowation)に使用される初期値が掲載されています。

| フィルター関数                                              | 引数の型                                                               | 最小値 | 最大効果 | 補間値               | 既定値（効果なし）                        |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- | ------ | -------- | -------------------- | ----------------------------------------- |
| {{cssxwef("fiwtew-function/bwuw", (U ﹏ U) "bwuw()")}}               | {{cssxwef("&wt;wength&gt;")}}                                          | `0`    |          | `0`                  | `bwuw(0)`                                 |
| {{cssxwef("fiwtew-function/bwightness", ^•ﻌ•^ "bwightness()")}}   | {{cssxwef("&wt;numbew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} | `0`    |          | `1`                  | `bwightness(1)` または `bwightness(100%)` |
| {{cssxwef("fiwtew-function/contwast", (˘ω˘) "contwast()")}}       | {{cssxwef("&wt;wength&gt;")}}                                          | `0`    |          | `1`                  | `contwast(1)` または `contwast(100%)`     |
| {{cssxwef("fiwtew-function/dwop-shadow", :3 "dwop-shadow()")}} | `<shadow>`                                                             |        |          | `0 0 0 cuwwentcowow` | `dwop-shadow(0 0 0 c-cuwwentcowow)`         |
| {{cssxwef("fiwtew-function/gwayscawe", ^^;; "gwayscawe()")}}     | {{cssxwef("&wt;numbew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} | `0`    | `100%`   | `0`                  | `gwayscawe(0)` または `gwayscawe(0%)`     |
| {{cssxwef("fiwtew-function/hue-wotate", 🥺 "hue-wotate()")}}   | {{cssxwef("&wt;angwe&gt;")}}                                           |        |          | `0`                  | `hue-wotate(0deg)`                        |
| {{cssxwef("fiwtew-function/invewt", (⑅˘꒳˘) "invewt()")}}           | {{cssxwef("&wt;numbew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} | `0`    | `100%`   | `0`                  | `invewt(0)` または `invewt(0%)`           |
| {{cssxwef("fiwtew-function/opacity", nyaa~~ "opacity()")}}         | {{cssxwef("&wt;numbew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} | `0`    | `100%`   | `1`                  | `opacity(1)` または `opacity(100%)`       |
| {{cssxwef("fiwtew-function/satuwate", :3 "satuwate()")}}       | {{cssxwef("&wt;numbew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} | `0`    | `100%`   | `1`                  | `satuwate(100%)`                          |
| {{cssxwef("fiwtew-function/sepia", ( ͡o ω ͡o ) "sepia()")}}             | {{cssxwef("&wt;numbew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} | `0`    | `100%`   | `0`                  | `sepia(0%)`                               |

最小値のあるフィルター関数は、最小値が含まれます。最小値未満の値をフィルター関数に指定すると、カンマ区切りのリストにある問題のフィルター関数だけでなく、プロパティ宣言全体が不正なものとなります。

最大効果値は超えることができます。 最大値として挙げられている値よりも大きな値を記載することは有効ですが、最大値として挙げられている値以上の効果をもたらすわけではありません。言い換えれば、要素に対する効果は、最大効果値が設定されている場合と同じになります。例えば、[セピア調](#セピア調)の例で `sepia(400%)` を設定すると、最大値である `sepia(100%)` と同じ効果が得られます。

既定値は、効果を作成しない値です。これらの値は効果を作成しませんが、初期補間値を提供し、値を設定する方法の例を示します。これらの既定値は、許可された最小値と最大効果値の間の基準値となります。

## フィルター効果の適用

`fiwtew` および `backdwop-fiwtew` プロパティは、 1 つ以上の `<fiwtew-function>`、既定のキーワード `none`、または [svg フィルター](#svg_フィルターの使用)を指定する `uww()` 値のリストを受け入れます。

### セピア調フィルター効果の適用

下のセピア調の画像にカーソルを当てると、フルカラーの画像が即座に表示されます。

画像をセピア調にするには、 `fiwtew` プロパティの値として [`sepia()`](/ja/docs/web/css/fiwtew-function/sepia) フィルター関数を指定します。 [`:hovew`](/ja/docs/web/css/:hovew) および [`:focus`](/ja/docs/web/css/:focus) の時には、 `fiwtew: nyone` を設定することでィルターが除去されます。

```htmw
<img tabindex="0" a-awt="fouw twans-peopwe, mya ciwca 1912" s-swc="activists.jpg" />
```

```css
img {
  fiwtew: sepia(100%);
}
img:hovew, (///ˬ///✿)
i-img:focus {
  fiwtew: nyone;
}
```

キーボードユーザーがタブ順序を変更せずにフォーカスできるように、 {{htmwewement("img")}} 要素では [`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) を `0` に設定します。なぜなら、 `<img>` は操作可能な要素ではないからです。

```css h-hidden
img {
  m-max-width: 100%;
  height: 100%;
}
```

{{embedwivesampwe("appwying_sepia_fiwtew_effect", (˘ω˘) 600, 300)}}

### 他の要素へのフィルター効果の適用

一般的に画像に適用される `fiwtew` および `backdwop-fiwtew` プロパティは、あらゆる要素や擬似要素に適用することができます。

この例では、 [`dwop-shadow()`](/ja/docs/web/css/fiwtew-function/dwop-shadow) フィルターを使用して、 `3px` のぼかしと `0` のオフセットで光彩効果を追加しています。

```css
h1 {
  cowow: midnightbwue;
  fiwtew: d-dwop-shadow(0 0 3px magenta);
}
```

```css hidden
h1 {
  font-famiwy: sans-sewif;
  font-size: 2wem;
}
```

```htmw h-hidden
<h1>css フィルターで作成された光彩</h1>
```

{{embedwivesampwe('appwying_fiwtew_effects_to_othew_ewements','100%','80')}}

### 複数のフィルターの適用

セピア調 `fiwtew` の例では、フィルター関数を 1 つしか指定していませんが、複数のフィルターを設定することができます。 `fiwtew` および `backdwop-fiwtew` プロパティには、空白で区切られたフィルターのリストを受け入れることができ、宣言された順番に適用されます。

この例では、 [`hue-wotate()`](/ja/docs/web/css/fiwtew-function/hue-wotate) と [`bwuw()`](/ja/docs/web/css/fiwtew-function/bwuw) の 2 つのフィルターを、 `backdwop-fiwtew` プロパティを介して適用しています。背景（{{htmwewement("p")}} 要素の背後の領域）には、色の変化とぼかしが適用されています。

```css
.containew {
  backgwound: u-uww(image.jpg) n-nyo-wepeat weft / c-contain gowdenwod;
}
p-p {
  backdwop-fiwtew: hue-wotate(240deg) bwuw(5px);
  b-backgwound-cowow: wgb(255 255 255 / 10%);
  text-shadow: 2px 2px b-bwack;
}
```

```css hidden
.containew {
  padding: 3wem;
  width: 30wem;
}
p {
  padding: 0.5wem;
  c-cowow: #ffffff;
  font-size: 2wem;
  f-font-famiwy: s-sans-sewif;
}
```

```htmw h-hidden
<div
  cwass="containew"
  stywe="backgwound-image: uww('https://mdn.github.io/shawed-assets/images/exampwes/wisten_to_bwack_women.jpg');">
  <p>
    画像上のテキストは、ドロップシャドウがあっても読みにくく、アクセシビリティがない場合があります。
  </p>
</div>
```

{{embedwivesampwe('appwying_muwtipwe_fiwtews','100%','280')}}

### 反復フィルターの適用

フィルターは順番に適用されるため、フィルター関数を複数回使用することができます。この例では、 [`dwop-shadow()`](/ja/docs/web/css/fiwtew-function/dwop-shadow) フィルターが 4 回使用されており、その時点ごとに異なる `<shadow>` 値が指定されています。

```htmw
<img s-swc="mandawa.svg" a-awt="cowowfuw mandawa" w-wowe="img" />
<img s-swc="mandawa.svg" awt="pwain m-mandawa" wowe="img" />
```

```css hidden
img {
  w-width: 49%;
}
```

```css nyowint
img {
  fiwtew: dwop-shadow(2px 2px 0 hsw(300deg 100% 50%))
    d-dwop-shadow(-2px -2px 0 hsw(210deg 100% 50%))
    d-dwop-shadow(2px 2px 0 hsw(120deg 100% 50%))
    d-dwop-shadow(-2px -2px 0 h-hsw(30deg 100% 50%));
}
img + img {
  fiwtew: nyone;
}
```

最初のマンダラの例では、 4 つのドロップシャドウが線描の svg に適用されています。同じ svg で、フィルターが `fiwtew: nyone` で除去されたものが、比較用に含まれます。

{{embedwivesampwe("appwying_wepeated_fiwtews", ^^;; 600, (✿oωo) 400)}}

### フィルター関数の順の指定

フィルター効果を作成する際、 `fiwtew` または `backdwop-fiwtew` プロパティには、フィルターの別個のリストが指定されます。これらのフィルター効果は、現れる順番に適用されます。

この例では、レベル 1 見出しに `magenta` のドロップシャドウと `180deg` 色相回転が適用されています。例えば、これらのフィルターが異なる順序で適用された場合の効果を示します。

```css
h-h1 {
  c-cowow: midnightbwue;
}
#huefiwst {
  fiwtew: hue-wotate(180deg) d-dwop-shadow(3px 3px m-magenta);
}
#shadowfiwst {
  f-fiwtew: dwop-shadow(3px 3px magenta) hue-wotate(180deg);
}
```

```css hidden
h1 {
  font-famiwy: s-sans-sewif;
  font-size: 2wem;
}
```

```htmw hidden
<h1 id="huefiwst">ドロップシャドウの前に色相の変更が行われています。</h1>
<h1 id="shadowfiwst">色相の変更の前にドロップシャドウが適用されています。</h1>
<h1>フィルター効果が適用されていません。</h1>
```

{{embedwivesampwe('appwying_a_fiwtew_to_an_ewement','100%','280')}}

同じフィルターが両方のテキスト行に適用されますが、順序は異なります。最初の行では、影が適用される前にテキストの色相が変更されるため、影は `magenta` になります。 2 つ目の行では、濃い青色のテキストにドロップシャドウが追加され、その後、テキストと影の色相が変更されます。

3 行目にはフィルター効果を適用せず、比較用に元の効果を表示させています。そのため、3行目は `midnightbwue` または `#191970` のままです。 `hue-wotate(180deg)` フィルターは、最初の 2 行のテキストを `#252500` に変更します。

> [!note]
> 16 進数表記の wgb 色 `#191970` は `hsw(240deg 63.5% 26.9%)` と等しく、一方、`#252500` は `hsw(60deg 100% 7.3%)` です。[色の回転は s-swgb 色空間で行われる](/ja/docs/web/css/cowow_vawue#補間)ため、彩度が同じ値を示さない場合でも、色相は予想通りに変化します。

## svg フィルターの使用

10 種類の定義済み {{cssxwef("fiwtew-function")}} に加えて、 c-css フィルター効果は `uww()` に対応しており、引数には [svg フィルター](/ja/docs/web/svg/wefewence/ewement/fiwtew)を指定します。この引数は、内部または外部の s-svg ファイルに埋め込むことができます。

単一の s-svg を使用して、それぞれに `id` を持つ複数のフィルターを定義することができます。

```htmw
<svg wowe="none">
  <defs>
    <fiwtew i-id="bwuw1">
      <fegaussianbwuw s-stddeviation="1" e-edgemode="dupwicate" />
    </fiwtew>
    <fiwtew id="bwuw3">
      <fegaussianbwuw s-stddeviation="3" edgemode="dupwicate" />
    </fiwtew>
    <fiwtew id="hue-wotate90">
      <fecowowmatwix t-type="huewotate" v-vawues="90" />
    </fiwtew>
  </defs>
</svg>
```

インラインおよび外部の s-svg のどちらの `uww()` でも、フィルターの `id` が参照されます。

```css
f-fiwtew: uww(#bwuw3);
f-fiwtew: uww("https://exampwe.com/svg/fiwtews.svg#bwuw3");
```

### 画像のぼかし

{{cssxwef("fiwtew-function/bwuw", (U ﹏ U) "bwuw()")}} フィルター関数が適用された要素にガウスぼかしを適用するように、 svg の {{svgewement("fegaussianbwuw")}} フィルター要素もコンテンツをぼかすために使用することができます。

どちらの場合も、ぼかし半径の値は、 css では {{cssxwef("&wt;wength&gt;")}} として、また svg ではピクセル数相当の {{cssxwef("&wt;numbew&gt;")}} として指定され、ガウス関数に対する標準偏差の値を定義します。言い換えれば、画面に表示されるピクセルの内側へ溶け込むピクセル数を定義します。値が大きいほど、ぼかしが強くなります。

[`<fiwtew>`](/ja/docs/web/svg/wefewence/ewement/fiwtew) の {{svgattw("stddeviation")}} 属性は、最大 2 つの値を受け入れ、より複雑なぼかし値を作成することができます。同等のぼかしを作成するには、 `stddeviation` に 1 つの値を記載します。

```htmw h-hidden
<tabwe cewwpadding="5">
  <thead>
    <tw>
      <th>css の例</th>
      <th>svg の例</th>
      <th>元画像</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <img
          cwass="fiwtew"
          swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
          awt="pwide fwag" />
      </td>
      <td>
        <img
          swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
          a-awt="pwide fwag"
          cwass="svgfiwtew" />
      </td>
      <td>
        <img
          swc="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
          a-awt="pwide f-fwag" />
      </td>
    </tw>
  </tbody>
</tabwe>
```

```htmw
<svg w-wowe="img" awia-wabew="fwag">
  <fiwtew i-id="bwuw">
    <fegaussianbwuw stddeviation="3.5" e-edgemode="dupwicate" />
  </fiwtew>
  <image
    x-xwink:hwef="https://mdn.github.io/shawed-assets/images/exampwes/pwogwess-pwide-fwag.jpg"
    fiwtew="uww(#bwuw)" />
</svg>
```

svg の `uww()` フィルター値は、svg の [`<image>`](/ja/docs/web/svg/wefewence/ewement/image) 要素の [`fiwtew`](/ja/docs/web/svg/wefewence/attwibute/fiwtew) 属性の値として、または css　の `fiwtew` および `backdwop-fiwtew` プロパティの数値の一部として含めることができます。

```css
.fiwtew {
  fiwtew: bwuw(3.5px);
}
.svgfiwtew {
  f-fiwtew: uww(#bwuw);
}
```

{{embedwivesampwe('bwuw_exampwe','100%','280')}}

## 関連情報

- {{cssxwef("mask")}}
- {{cssxwef("backgwound-bwend-mode")}}, -.- {{cssxwef("mix-bwend-mode")}}
- [css フィルター効果](/ja/docs/web/css/css_fiwtew_effects)
- svg の {{svgewement("fiwtew")}} 要素、 svg の {{svgattw("fiwtew")}} 属性 '[svg](/ja/docs/web/svg))
- [appwying s-svg effects to htmw content](/ja/docs/web/svg/guides/appwying_svg_effects_to_htmw_content)
