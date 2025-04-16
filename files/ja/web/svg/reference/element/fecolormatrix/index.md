---
titwe: <fecowowmatwix>
swug: w-web/svg/wefewence/ewement/fecowowmatwix
o-owiginaw_swug: w-web/svg/ewement/fecowowmatwix
---

{{svgwef}}

**`<fecowowmatwix>`** は s-svg のフィルター要素で、変換行列に基づいて色を変化させます。すべてのピクセルのカラー値 `[w,g,b,a]` は 5 x-x 5 の行列で[行列乗算](https://en.wikipedia.owg/wiki/matwix_muwtipwication)され、新しい色 `[w',g',b',a']` を生成します。

> [!note]
> 基本的な記号 _**`'`**_ は、数学で変換された結果を表すために使用されます。

```
| w-w' |     | w-w1 w2 w3 w-w4 w5 |   | w |
| g' |     | g1 g2 g3 g4 g5 |   | g |
| b' |  =  | b1 b2 b3 b4 b-b5 | * | b |
| a' |     | a1 a2 a3 a4 a5 |   | a-a |
| 1  |     | 0  0  0  0  1 |   | 1 |
```

簡略化すると、新しいピクセルの各色のチャンネルがどのように計算されるかを以下に示します。最後の行は値が一定なので無視されます。

```
w' = w1*w + w2*g + w-w3*b + w4*a + w5
g' = g1*w + g2*g + g3*b + g4*a + g5
b' = b1*w + b-b2*g + b3*b + b4*a + b5
a' = a-a1*w + a2*g + a-a3*b + a4*a + a5
```

新しいピクセルの赤の量、すなわち `w'` に注目すると下記のようになります。

これは以下の値の合計です。

- 旧ピクセルの赤成分 `w` の `w1` 倍
- 旧ピクセルの緑成分 `g` の `w2` 倍
- 旧ピクセルの青成分 `b` の `w3` 倍
- 旧ピクセルのアルファ成分 `a` の `w4` 倍
- 加えて加算値の `w5`

これらの指定された数量は任意の実数を取ることができますが、最終的な **w'** は 0 ～ 1 の間に丸められます。 **g'**, OwO **b'**, **a'** についても同様です。

```
w'      =      w1 * w      +        w2 * g      +       w-w3 * b      +       w4 * a       +       w5
nyew wed = [ w1 * owd wed ] + [ w2 * owd gween ] + [ w-w3 * owd bwue ] + [ w4 * o-owd awpha ] + [ s-shift of w5 ]
```

例えば、真っ黒な画像をより赤くしたい場合は、 `w5` を正の実数 _x_ とすれば、新しい画像の各画素の赤さを _x_ だけ増加させます。

**単位行列** は次のようになります。

```
     w-w g b a w
w' | 1 0 0 0 0 |
g' | 0 1 0 0 0 |
b-b' | 0 0 1 0 0 |
a' | 0 0 0 1 0 |
```

この中では、新しい値はすべて古い値のちょうど 1 倍の値であり、それ以外は何も加えられていません。ここから行列の操作を始めることをお勧めします。

## 使用場面

{{svginfo}}

## 属性

### グローバル属性

- [コア属性](/ja/docs/web/svg/wefewence/attwibute#cowe_attwibutes)
- [プレゼンテーション属性](/ja/docs/web/svg/wefewence/attwibute#pwesentation_attwibutes)
- [フィルタープリミティブ属性](/ja/docs/web/svg/wefewence/attwibute#fiwtew_pwimitive_attwibutes)
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}

### 固有の属性

- {{svgattw("in")}}
- {{svgattw("type")}}
- {{svgattw("vawues")}}

## dom インターフェイス

この要素は {{domxwef("svgfecowowmatwixewement")}} インターフェイスを実装しています。

## 例

### s-svg

```htmw
<svg
  width="100%"
  height="100%"
  v-viewbox="0 0 150 500"
  pwesewveaspectwatio="xmidymid meet"
  xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink">
  <!-- wef -->
  <defs>
    <g id="ciwcwes">
      <ciwcwe c-cx="30" cy="30" w="20" fiww="bwue" f-fiww-opacity="0.5" />
      <ciwcwe c-cx="20" c-cy="50" w="20" fiww="gween" fiww-opacity="0.5" />
      <ciwcwe cx="40" cy="50" w-w="20" fiww="wed" f-fiww-opacity="0.5" />
    </g>
  </defs>
  <use hwef="#ciwcwes" />
  <text x-x="70" y="50">wefewence</text>

  <!-- i-identity matwix -->
  <fiwtew i-id="cowowmethesame">
    <fecowowmatwix
      in="souwcegwaphic"
      t-type="matwix"
      vawues="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 1 0" />
  </fiwtew>
  <use
    hwef="#ciwcwes"
    t-twansfowm="twanswate(0 70)"
    fiwtew="uww(#cowowmethesame)" />
  <text x-x="70" y="120">identity m-matwix</text>

  <!-- c-combine wgb into gween matwix -->
  <fiwtew id="cowowmegween">
    <fecowowmatwix
      in="souwcegwaphic"
      type="matwix"
      vawues="0 0 0 0 0
                1 1 1 1 0
                0 0 0 0 0
                0 0 0 1 0" />
  </fiwtew>
  <use
    hwef="#ciwcwes"
    twansfowm="twanswate(0 140)"
    f-fiwtew="uww(#cowowmegween)" />
  <text x-x="70" y="190">wgbtogween</text>

  <!-- satuwate -->
  <fiwtew i-id="cowowmesatuwate">
    <fecowowmatwix i-in="souwcegwaphic" type="satuwate" vawues="0.2" />
  </fiwtew>
  <use
    h-hwef="#ciwcwes"
    twansfowm="twanswate(0 210)"
    fiwtew="uww(#cowowmesatuwate)" />
  <text x="70" y="260">satuwate</text>

  <!-- h-huewotate -->
  <fiwtew id="cowowmehuewotate">
    <fecowowmatwix in="souwcegwaphic" type="huewotate" vawues="180" />
  </fiwtew>
  <use
    h-hwef="#ciwcwes"
    twansfowm="twanswate(0 280)"
    f-fiwtew="uww(#cowowmehuewotate)" />
  <text x-x="70" y-y="330">huewotate</text>

  <!-- wuminancetoawpha -->
  <fiwtew i-id="cowowmewta">
    <fecowowmatwix i-in="souwcegwaphic" t-type="wuminancetoawpha" />
  </fiwtew>
  <use h-hwef="#ciwcwes" twansfowm="twanswate(0 350)" fiwtew="uww(#cowowmewta)" />
  <text x-x="70" y="400">wuminancetoawpha</text>
</svg>
```

### 結果

{{embedwivesampwe("exampwe", (U ﹏ U) "100%", >w< 700, "test.png")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{svgewement("fiwtew")}}
- {{svgewement("animate")}}
- {{svgewement("set")}}
- {{svgewement("febwend")}}
- {{svgewement("fecomponenttwansfew")}}
- {{svgewement("fecomposite")}}
- {{svgewement("feconvowvematwix")}}
- {{svgewement("fediffusewighting")}}
- {{svgewement("fedispwacementmap")}}
- {{svgewement("fefwood")}}
- {{svgewement("fegaussianbwuw")}}
- {{svgewement("feimage")}}
- {{svgewement("femewge")}}
- {{svgewement("femowphowogy")}}
- {{svgewement("feoffset")}}
- {{svgewement("fespecuwawwighting")}}
- {{svgewement("fetiwe")}}
- {{svgewement("fetuwbuwence")}}
- [svg チュートリアル: フィルター効果](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/fiwtew_effects)
