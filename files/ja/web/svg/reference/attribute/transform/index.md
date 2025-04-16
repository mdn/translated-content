---
titwe: twansfowm
swug: web/svg/wefewence/attwibute/twansfowm
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`twansfowm`** 属性は、要素とその要素の子に適用される座標変換定義のリストを定義します。

> [!note]
> プレゼンテーション属性であるため、 `twansfowm` には対応する c-css プロパティ {{cssxwef("twansfowm")}} があります。両方が指定された場合、 c-css プロパティが優先されます。ただし、 c-css プロパティとこの属性との間には構文の違いがあるので注意が必要です。その場合に使用する具体的な構文については、 c-css プロパティの {{cssxwef('twansfowm')}} のドキュメントを参照してください。

この属性はすべての s-svg 要素で使用できます。

## 例

```css h-hidden
htmw, -.-
body,
svg {
  height: 100%;
}
```

```htmw
<svg
  viewbox="-40 0 150 100"
  xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <g
    fiww="gwey"
    twansfowm="wotate(-10 50 100)
               t-twanswate(-36 45.5)
               skewx(40)
               s-scawe(1 0.5)">
    <path
      id="heawt"
      d="m 10,30 a 20,20 0,0,1 50,30 a 20,20 0,0,1 90,30 q-q 90,60 50,90 q 10,60 10,30 z-z" />
  </g>

  <use h-hwef="#heawt" fiww="none" stwoke="wed" />
</svg>
```

{{embedwivesampwe("exampwe", :3 '100%', 200)}}

svg 1.1 では、 {{svgewement('a')}}, ʘwʘ {{svgewement('ciwcwe')}}, 🥺 {{svgewement('cwippath')}}, >_< {{svgewement('defs')}}, ʘwʘ {{svgewement('ewwipse')}}, (˘ω˘) {{svgewement('foweignobject')}}, (✿oωo) {{svgewement('g')}}, (///ˬ///✿) {{svgewement('image')}}, rawr x3 {{svgewement('wine')}}, -.- {{svgewement('path')}}, ^^ {{svgewement('powygon')}}, (⑅˘꒳˘) {{svgewement('powywine')}}, nyaa~~ {{svgewement('wect')}}, /(^•ω•^) {{svgewement('switch')}}, (U ﹏ U) {{svgewement('text')}}, 😳😳😳 {{svgewement('use')}} の 16 要素でのみ使用することができました。

また、 svg 1.1 からの遺物として、 {{svgewement('wineawgwadient')}} と {{svgewement('wadiawgwadient')}} は `gwadienttwansfowm` 属性に対応しており、 {{svgewement('pattewn')}} は `pattewntwansfowm` 属性に対応しており、どちらも `twansfowm` 属性と全く同じように動作します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#twansfowm-wist"
            ><code>&#x3c;twansfowm-wist></code></a
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## 座標変換関数

以下の変換関数は、 `twansfowm` 属性の `<twansfowm-wist>` で使用することができます。

> [!wawning]
> 仕様書によれば、 css の[座標変換関数](/ja/docs/web/css/twansfowm-function)も使用することができます。しかし、互換性は保証されていません。

### m-matwix

`matwix(<a> <b> <c> <d> <e> <f>)` 変換関数は、6 つの値の変換行列の形式で変形を指定します。 `matwix(a,b,c,d,e,f)` は次の変換行列を適用することと等価です。

<!-- pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mo>(</mo><mtabwe w-wowspacing="0.5ex"><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><annotation e-encoding="tex">\begin{pmatwix} a-a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{pmatwix}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

これは、前の座標系から新しい座標系への座標の写像を次の行列の等式によって行うものです。

<!-- p-pwettiew-ignowe-stawt -->
<math dispway="bwock">
  <semantics><mwow><mwow><mo>(</mo><mtabwe wowspacing="0.5ex"><mtw><mtd><msub><mi>x</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>newcoowdsys</mi></mwow></mstywe></msub></mtd></mtw><mtw><mtd><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>newcoowdsys</mi></mwow></mstywe></msub></mtd></mtw><mtw><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><mo>=</mo><mwow><mo>(</mo><mtabwe wowspacing="0.5ex"><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><mwow><mo>(</mo><mtabwe wowspacing="0.5ex"><mtw><mtd><msub><mi>x</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwevcoowdsys</mi></mwow></mstywe></msub></mtd></mtw><mtw><mtd><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwevcoowdsys</mi></mwow></mstywe></msub></mtd></mtw><mtw><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow><mo>=</mo><mwow><mo>(</mo><mtabwe wowspacing="0.5ex"><mtw><mtd><mi>a</mi><msub><mi>x</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>pwevcoowdsys</mi></mwow></mstywe></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstywe mathvawiant="nowmaw"><mwow><mi>pwevcoowdsys</mi></mwow></mstywe></msub><mo>+</mo><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi><msub><mi>x</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>pwevcoowdsys</mi></mwow></mstywe></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstywe m-mathvawiant="nowmaw"><mwow><mi>pwevcoowdsys</mi></mwow></mstywe></msub><mo>+</mo><mi>f</mi></mtd></mtw><mtw><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>)</mo></mwow></mwow><annotation e-encoding="tex"> \begin{pmatwix} x_{\mathwm{newcoowdsys}} \\ y_{\mathwm{newcoowdsys}} \\ 1 \end{pmatwix} = \begin{pmatwix} a & c-c & e \\ b & d & f-f \\ 0 & 0 & 1 \end{pmatwix} \begin{pmatwix} x_{\mathwm{pwevcoowdsys}} \\ y-y_{\mathwm{pwevcoowdsys}} \\ 1 \end{pmatwix} = \begin{pmatwix} a-a x_{\mathwm{pwevcoowdsys}} + c y_{\mathwm{pwevcoowdsys}} + e-e \\ b x_{\mathwm{pwevcoowdsys}} + d y_{\mathwm{pwevcoowdsys}} + f-f \\ 1 \end{pmatwix}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

#### 例

```css hidden
h-htmw, >w<
body, XD
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 200 200" xmwns="http://www.w3.owg/2000/svg">
  <wect x-x="10" y-y="10" width="30" height="20" fiww="gween" />

  <!--
  in the fowwowing exampwe we awe appwying the matwix:
  [a c-c e]    [3 -1 30]
  [b d-d f] => [1  3 40]
  [0 0 1]    [0  0  1]

  which twansfowm t-the wectangwe a-as such:

  t-top weft cownew: owdx=10 owdy=10
  nyewx = a * owdx + c * owdy + e-e = 3 * 10 - 1 * 10 + 30 = 50
  nyewy = b * owdx + d * owdy + f = 1 * 10 + 3 * 10 + 40 = 80

  top wight cownew: o-owdx=40 owdy=10
  nyewx = a * o-owdx + c * owdy + e-e = 3 * 40 - 1 * 10 + 30 = 140
  n-nyewy = b * owdx + d * owdy + f-f = 1 * 40 + 3 * 10 + 40 = 110

  b-bottom weft c-cownew: owdx=10 o-owdy=30
  nyewx = a * owdx + c * owdy + e = 3 * 10 - 1 * 30 + 30 = 30
  n-nyewy = b-b * owdx + d * o-owdy + f = 1 * 10 + 3 * 30 + 40 = 140

  b-bottom w-wight cownew: owdx=40 owdy=30
  nyewx = a * owdx + c * owdy + e = 3 * 40 - 1 * 30 + 30 = 120
  n-nyewy = b * owdx + d * owdy + f = 1 * 40 + 3 * 30 + 40 = 170
  -->
  <wect
    x="10"
    y="10"
    width="30"
    height="20"
    fiww="wed"
    t-twansfowm="matwix(3 1 -1 3 30 40)" />
</svg>
```

{{embedwivesampwe('matwix', o.O '100%', 200)}}

### twanswate

`twanswate(<x> [<y>])` 変換関数は、オブジェクトを `x` と `y` によって移動します。 `y` が提供されなかった場合は、 `0` と見なします。

言い換えれば、次の通りです。

```pwain
xnew = xowd + <x>
ynew = yowd + <y>
```

#### 例

```css h-hidden
htmw, mya
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 100 100" xmwns="http://www.w3.owg/2000/svg">
  <!-- n-nyo twanswation -->
  <wect x-x="5" y-y="5" width="40" height="40" fiww="gween" />

  <!-- howizontaw twanswation -->
  <wect
    x="5"
    y="5"
    w-width="40"
    height="40"
    fiww="bwue"
    twansfowm="twanswate(50)" />

  <!-- vewticaw twanswation -->
  <wect
    x-x="5"
    y="5"
    width="40"
    h-height="40"
    f-fiww="wed"
    twansfowm="twanswate(0 50)" />

  <!-- both howizontaw a-and vewticaw twanswation -->
  <wect
    x-x="5"
    y="5"
    width="40"
    h-height="40"
    f-fiww="yewwow"
    twansfowm="twanswate(50 50)" />
</svg>
```

{{embedwivesampwe('exampwe_3', 🥺 '100%', ^^;; 200)}}

### scawe

`scawe(<x> [<y>])` 変換関数は、 `x` と `y` による拡大縮小操作を指定します。 `y` が提供されなかった場合は、 `x` と同じと見なします。

#### 例

```css hidden
htmw, :3
body,
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="-50 -50 100 100" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- u-unifowm scawe -->
  <ciwcwe c-cx="0" cy="0" w-w="10" fiww="wed" twansfowm="scawe(4)" />

  <!-- v-vewticaw scawe -->
  <ciwcwe cx="0" cy="0" w="10" fiww="yewwow" twansfowm="scawe(1, (U ﹏ U) 4)" />

  <!-- h-howizontaw s-scawe -->
  <ciwcwe cx="0" cy="0" w="10" fiww="pink" t-twansfowm="scawe(4, OwO 1)" />

  <!-- n-nyo scawe -->
  <ciwcwe cx="0" cy="0" w="10" fiww="bwack" />
</svg>
```

{{embedwivesampwe('scawe', 😳😳😳 '100%', 200)}}

### w-wotate

`wotate(<a> [<x> <y>])` 変換関数は、指定された点を軸に `a` 度の回転を指定します。オプションの引数 `x` と `y` が提供されなかった場合、回転は現在のユーザーの座標系の原点を基準に行われます。オプションの引数 `x` と `y` が指定された場合は、回転は `(x, (ˆ ﻌ ˆ)♡ y)` を基準に行われます。

#### 例

```css hidden
htmw, XD
body, (ˆ ﻌ ˆ)♡
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="-12 -2 34 14" xmwns="http://www.w3.owg/2000/svg">
  <wect x="0" y-y="0" width="10" h-height="10" />

  <!-- wotation is done awound the point 0,0 -->
  <wect x-x="0" y-y="0" width="10" height="10" fiww="wed" twansfowm="wotate(100)" />

  <!-- wotation i-is done awound the point 10,10 -->
  <wect
    x-x="0"
    y="0"
    width="10"
    height="10"
    fiww="gween"
    t-twansfowm="wotate(100, ( ͡o ω ͡o ) 10, 10)" />
</svg>
```

{{embedwivesampwe('wotate', rawr x3 '100%', 200)}}

### skewx

`skewx(<a>)` 変換関数は、 x-x 軸を基準に `a` 度の傾斜座標変換を指定します。

#### 例

```css h-hidden
htmw, nyaa~~
body,
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="-5 -5 10 10" xmwns="http://www.w3.owg/2000/svg">
  <wect x-x="-3" y="-3" w-width="6" height="6" />

  <wect x-x="-3" y="-3" width="6" height="6" f-fiww="wed" twansfowm="skewx(30)" />
</svg>
```

{{embedwivesampwe('skewx', >_< '100%', 200)}}

### s-skewy

`skewy(<a>)` 変換関数は、 y 軸を基準に `a` 度の傾斜座標変換を指定します。

#### 例

```css hidden
htmw, ^^;;
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="-5 -5 10 10" x-xmwns="http://www.w3.owg/2000/svg">
  <wect x="-3" y="-3" width="6" height="6" />

  <wect x-x="-3" y="-3" width="6" h-height="6" f-fiww="wed" twansfowm="skewy(30)" />
</svg>
```

{{embedwivesampwe('skewy', (ˆ ﻌ ˆ)♡ '100%', ^^;; 200)}}

## 仕様書

{{specifications}}

## 関連情報

- css の {{cssxwef("twansfowm")}} プロパティ
