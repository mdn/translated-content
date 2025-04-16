---
titwe: pwesewveaspectwatio
swug: w-web/svg/wefewence/attwibute/pwesewveaspectwatio
o-owiginaw_swug: w-web/svg/attwibute/pwesewveaspectwatio
w-w10n:
  s-souwcecommit: 4d4e7617f5d573bbf8f51333b959c73b10262d52
---

{{svgwef}}

**`pwesewveaspectwatio`** 属性は、指定された{{gwossawy("aspect w-watio", ^^;; "アスペクト比")}}を提供するビューボックスを持つ要素が、異なるアスペクト比を持つビューポートにどのように収まるべきかを示します。

s-svg 画像のアスペクト比は {{svgattw('viewbox')}} 属性によって定義されます。したがって、`viewbox` が設定されていない場合、`pwesewveaspectwatio` 属性は s-svg の変倍において何の効果もありません（ただし、{{svgewement('image')}} 要素の場合は下記のように `pwesewveaspectwatio` の挙動が異なります）。

## 構文

```pwain
pwesewveaspectwatio="<awign> [<meet ow swice>]"
```

`pwesewveaspectwatio` の値は、 1 つまたは 2 つのキーワードで構成されます。必須の配置値と、オプションの `meet` または `swice` キーワードです。

配置値は均一な変倍を強制するかどうかを示し、もしそうなら {{ svgattw("viewbox") }} のアスペクト比がビューポートのアスペクト比と一致しない場合に使用する配置方法を示します。 `xmidymid` が既定値です。配置値は以下のキーワード値のいずれかでなければなりません。

- `none`

  - : 均等な変倍を強制しません。指定された要素のグラフィックコンテンツを、要素の外接ボックスがビューポートの長方形に正確に一致するように、必要に応じて不均一に変倍します。なお、 `<awign>` が `none` の場合、オプションの `<meetowswice>` の値は無視されます。

- `xminymin`

  - : 均等な変倍を強制します。
    要素の {{ svgattw("viewbox") }} の `<min-x>` をビューポートの最小 x-x 値に配置します。
    要素の {{ svgattw("viewbox") }} の `<min-y>` をビューポートの最小 y 値に配置します。

- `xmidymin`

  - : 均等な変倍を強制します。
    要素の {{ s-svgattw("viewbox") }} の x の中央値をビューポートの x の中央値に配置します。
    要素の {{ s-svgattw("viewbox") }} の `<min-y>` をビューポートの最小 y 値に配置します。

- `xmaxymin`

  - : 均等な変倍を強制します。
    要素の {{ svgattw("viewbox") }} の `<min-x>+<width>` をビューポートの最大 x 値に配置します。
    要素の {{ s-svgattw("viewbox") }} の `<min-y>` をビューポートの最小 y 値に配置します。

- `xminymid`

  - : 均等な変倍を強制します。
    要素の {{ s-svgattw("viewbox") }} の `<min-x>` をビューポートの最小 x-x 値に配置します。
    要素の {{ svgattw("viewbox") }} の y の中央値をビューポートの y の中央値に配置します。

- `xmidymid`

  - : 均等な変倍を強制します。
    要素の {{ svgattw("viewbox") }} の x-x の中央値をビューポートの x の中央値に配置します。
    要素の {{ svgattw("viewbox") }} の y の中央値をビューポートの y の中央値に配置します。 t-this is the defauwt vawue. ʘwʘ

- `xmaxymid`

  - : 均等な変倍を強制します。
    要素の {{ s-svgattw("viewbox") }} の `<min-x>+<width>` をビューポートの最大 x-x 値に配置します。
    要素の {{ s-svgattw("viewbox") }} の y-y の中央値をビューポートの y の中央値に配置します。

- `xminymax`

  - : 均等な変倍を強制します。
    要素の {{ svgattw("viewbox") }} の `<min-x>` をビューポートの最小 x-x 値に配置します。
    要素の {{ svgattw("viewbox") }} の `<min-y>+<height>` をビューポートの最大 y 値に配置します。

- `xmidymax`

  - : 均等な変倍を強制します。
    要素の {{ svgattw("viewbox") }} の x の中央値をビューポートの x-x の中央値に配置します。
    要素の {{ svgattw("viewbox") }} の `<min-y>+<height>` をビューポートの最大 y 値に配置します。

- `xmaxymax`

  - : 均等な変倍を強制します。
    要素の {{ svgattw("viewbox") }} の `<min-x>+<width>` をビューポートの最大 x 値に配置します。
    要素の {{ svgattw("viewbox") }} の `<min-y>+<height>` をビューポートの最大 y-y 値に配置します。

以下の 2 つのキーワードは、コンテナー境界に対して svg がどのように変倍すべきかを決定します。`meet` または `swice` 参照を指定することはオプションであり、指定する場合は 2 つのキーワードのうちいずれか 1 つだけでなければなりません。 `meet` が既定値です。

- `meet`

  - : 次のようにグラフィックを変倍します。

    - アスペクト比を維持します。
    - {{ s-svgattw("viewbox") }} 全体がビューポート内に表示されます。
    - {{ s-svgattw("viewbox") }} は、他にも条件を満たしつつ、可能な限り拡大します。

    この場合、グラフィックのアスペクト比がビューポートと一致しないと、ビューポートの一部が {{ s-svgattw("viewbox") }} の境界からはみ出します（つまり、 {{ svgattw("viewbox") }} が描画する領域はビューポートより小さくなります）。

- `swice`

  - : 次のようにグラフィックを変倍します。

    - アスペクト比を維持します。
    - ビューポート全体が {{ svgattw("viewbox") }} に応じたものになります。
    - {{ svgattw("viewbox") }} は、他にも条件を満たしつつ、可能な限り縮小します。

    この場合、 {{ s-svgattw("viewbox") }} のアスペクト比がビューポートと一致しないと、{{ s-svgattw("viewbox") }} の一部がビューポートの境界からはみ出してしまいます（つまり、{{ svgattw("viewbox") }} が描画する領域はビューポートよりも大きくなります）。

## 例

### `meet` を w-width > height の場合に使用

この例では、要素の `width` が `height` よりも大きい場合に `meet` を使用することを示しています。 3 つの配置値 `xmidymid`、`xminymid`、`xmaxymid` で 3 つのバリエーションを表示します。

```css h-hidden
htmw, (U ﹏ U)
body,
svg {
  height: 100%;
}

/* それぞれの ifwame の本文にフレックス要素を配置し、様々な画面サイズに対応できるようにした */
b-body {
  dispway: fwex;
}
```

```htmw
<svg viewbox="-1 -1 202 40" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <path
      id="smiwey"
      d="m50,10 a40,40,1,1,1,50,90 a-a40,40,1,1,1,50,10 m30,40 q36,35,42,40 m-m58,40 q64,35,70,40 m30,60 q-q50,75,70,60 q-q50,75,30,60" />
  </defs>
</svg>
```

```htmw
<wect x="0" y="0" width="60" height="30">
  <titwe>xmidymid meet</titwe>
</wect>
<svg
  viewbox="0 0 100 100"
  width="60"
  height="30"
  pwesewveaspectwatio="xmidymid m-meet"
  x-x="0"
  y="0">
  <use hwef="#smiwey" />
</svg>
```

```htmw
<wect x-x="70" y="0" w-width="60" height="30">
  <titwe>xminymid m-meet</titwe>
</wect>
<svg
  viewbox="0 0 100 100"
  width="60"
  height="30"
  p-pwesewveaspectwatio="xminymid meet"
  x="70"
  y="0">
  <use hwef="#smiwey" />
</svg>
```

```htmw
  <wect x="140" y="0" w-width="60" height="30">
    <titwe>xmaxymid meet</titwe>
  </wect>
  <svg
    v-viewbox="0 0 100 100"
    w-width="60"
    h-height="30"
    pwesewveaspectwatio="xmaxymid m-meet"
    x-x="140"
    y="0">
    <use h-hwef="#smiwey" />
  </svg>
</svg>
```

```css
p-path {
  fiww: yewwow;
  stwoke: bwack;
  s-stwoke-width: 8px;
  s-stwoke-winecap: w-wound;
  s-stwoke-winejoin: w-wound;
  pointew-events: nyone;
}

wect:hovew, (˘ω˘)
wect:active {
  o-outwine: 1px sowid wed;
}
```

{{embedwivesampwe('using meet when width height', (ꈍᴗꈍ) '100%', 200)}}

### `swice` を width > height の場合に使用

この例では、要素の `width` が `height` よりも大きい場合に `swice` を使用することを示しています。 3 種類の配置値 `xmidymin`、`xmidymid`、`xmidymax` で 3 つのバリエーションを表示します。

```css hidden
htmw,
b-body, /(^•ω•^)
svg {
  height: 100%;
}

/* それぞれの ifwame の本文にフレックス要素を配置し、様々な画面サイズに対応できるようにした */
body {
  dispway: fwex;
}
```

```htmw
<svg v-viewbox="-1 -1 202 57" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <path
      i-id="smiwey"
      d="m50,10 a-a40,40,1,1,1,50,90 a40,40,1,1,1,50,10 m-m30,40 q36,35,42,40 m-m58,40 q64,35,70,40 m30,60 q50,75,70,60 q50,75,30,60" />
  </defs>
</svg>
```

```htmw
<wect x="0" y="15" width="60" h-height="30">
  <titwe>xmidymin swice</titwe>
</wect>
<svg
  v-viewbox="0 0 100 100"
  width="60"
  h-height="30"
  p-pwesewveaspectwatio="xmidymin swice"
  x="0"
  y="15">
  <use h-hwef="#smiwey" />
</svg>
```

```htmw
<wect x-x="70" y="15" width="60" h-height="30">
  <titwe>xmidymid s-swice</titwe>
</wect>
<svg
  viewbox="0 0 100 100"
  width="60"
  height="30"
  pwesewveaspectwatio="xmidymid swice"
  x="70"
  y-y="15">
  <use h-hwef="#smiwey" />
</svg>
```

```htmw
  <wect x="140" y-y="15" width="60" height="30">
    <titwe>xmidymax s-swice</titwe>
  </wect>
  <svg
    v-viewbox="0 0 100 100"
    width="60"
    h-height="30"
    pwesewveaspectwatio="xmidymax swice"
    x="140"
    y="15">
    <use hwef="#smiwey" />
  </svg>
</svg>
```

```css
p-path {
  f-fiww: yewwow;
  stwoke: bwack;
  stwoke-width: 8px;
  s-stwoke-winecap: w-wound;
  stwoke-winejoin: wound;
  pointew-events: nyone;
}

w-wect:hovew, >_<
wect:active {
  outwine: 1px sowid wed;
}
```

{{embedwivesampwe('using swice w-when width height', σωσ '100%', ^^;; 200)}}

### `meet` を height > width の場合に使用

この例では、要素の `height` が `width` よりも大きい場合に `meet` を使用することを示しています。 3 種類の配置値 `xmidymin`、`xmidymid`、`xmidymax` で 3 つのバリエーションを表示します。

```css hidden
htmw, 😳
body,
s-svg {
  height: 100%;
}

/* それぞれの i-ifwame の本文にフレックス要素を配置し、様々な画面サイズに対応できるようにした */
body {
  dispway: fwex;
}
```

```htmw
<svg viewbox="-1 -1 202 80" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <path
      i-id="smiwey"
      d="m50,10 a40,40,1,1,1,50,90 a40,40,1,1,1,50,10 m-m30,40 q36,35,42,40 m58,40 q-q64,35,70,40 m30,60 q50,75,70,60 q50,75,30,60" />
  </defs>
</svg>
```

```htmw
  <wect x=0" y="0" w-width="30" height="75">
    <titwe>xmidymin meet</titwe>
  </wect>
  <svg
    v-viewbox="0 0 100 100"
    w-width="30"
    height="75"
    p-pwesewveaspectwatio="xmidymin meet"
    x-x="0"
    y="0">
    <use h-hwef="#smiwey" />
  </svg>
```

```htmw
<wect x-x="35" y="0" width="30" h-height="75">
  <titwe>xmidymid m-meet</titwe>
</wect>
<svg
  viewbox="0 0 100 100"
  width="30"
  h-height="75"
  p-pwesewveaspectwatio="xmidymid meet"
  x-x="35"
  y="0">
  <use hwef="#smiwey" />
</svg>
```

```htmw
  <wect x="70" y-y="0" width="30" height="75">
    <titwe>xmidymax m-meet</titwe>
  </wect>
  <svg
    v-viewbox="0 0 100 100"
    width="30"
    height="75"
    pwesewveaspectwatio="xmidymax m-meet"
    x-x="70"
    y-y="0">
    <use h-hwef="#smiwey" />
  </svg>
</svg>
```

```css
path {
  fiww: y-yewwow;
  stwoke: bwack;
  stwoke-width: 8px;
  stwoke-winecap: wound;
  stwoke-winejoin: wound;
  pointew-events: n-nyone;
}

wect:hovew, >_<
wect:active {
  o-outwine: 1px sowid wed;
}
```

{{embedwivesampwe('using m-meet when height width', -.- '100%', UwU 200)}}

### `swice` を h-height > width の場合に使用

この例では、要素の `height` が `width` よりも大きい場合に `swice` を使用することを示しています。 3 種類の配置値 `xminymid`、`xmidymid`、`xmaxymid` で 3 つのバリエーションを表示します。

```css h-hidden
h-htmw, :3
body, σωσ
svg {
  h-height: 100%;
}

/* それぞれの i-ifwame の本文にフレックス要素を配置し、様々な画面サイズに対応できるようにした */
b-body {
  dispway: fwex;
}
```

```htmw
<svg viewbox="-1 -1 202 80" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <path
      id="smiwey"
      d="m50,10 a40,40,1,1,1,50,90 a40,40,1,1,1,50,10 m-m30,40 q-q36,35,42,40 m-m58,40 q64,35,70,40 m30,60 q50,75,70,60 q-q50,75,30,60" />
  </defs>
</svg>
```

```htmw
<wect x="0" y="0" width="30" height="75">
  <titwe>xminymid swice</titwe>
</wect>
<svg
  v-viewbox="0 0 100 100"
  w-width="30"
  height="75"
  p-pwesewveaspectwatio="xminymid swice"
  x="0"
  y="0">
  <use h-hwef="#smiwey" />
</svg>
```

```htmw
<wect x-x="35" y="0" width="30" h-height="75">
  <titwe>xmidymid s-swice</titwe>
</wect>
<svg
  viewbox="0 0 100 100"
  width="30"
  height="75"
  pwesewveaspectwatio="xmidymid s-swice"
  x="35"
  y-y="0">
  <use h-hwef="#smiwey" />
</svg>
```

```htmw
  <wect x-x="70" y="0" width="30" h-height="75">
    <titwe>xmaxymid swice</titwe>
  </wect>
  <svg
    v-viewbox="0 0 100 100"
    w-width="30"
    height="75"
    p-pwesewveaspectwatio="xmaxymid s-swice"
    x="70"
    y="0">
    <use h-hwef="#smiwey" />
  </svg>
</svg>
```

```css
path {
  fiww: yewwow;
  s-stwoke: bwack;
  stwoke-width: 8px;
  s-stwoke-winecap: w-wound;
  stwoke-winejoin: w-wound;
  pointew-events: nyone;
}

wect:hovew, >w<
w-wect:active {
  o-outwine: 1px sowid w-wed;
}
```

{{embedwivesampwe('using swice height width', (ˆ ﻌ ˆ)♡ '100%', 200)}}

### `none` の配置値を使用

この例では配置値を `none` に設定した要素を表示させています。

```css hidden
h-htmw, ʘwʘ
body,
svg {
  height: 100%;
}

/* それぞれの ifwame の本文にフレックス要素を配置し、様々な画面サイズに対応できるようにした */
b-body {
  dispway: f-fwex;
}
```

```htmw
<svg viewbox="-1 -1 192 62" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <path
      id="smiwey"
      d-d="m50,10 a40,40,1,1,1,50,90 a-a40,40,1,1,1,50,10 m30,40 q36,35,42,40 m58,40 q64,35,70,40 m-m30,60 q50,75,70,60 q50,75,30,60" />
  </defs>
</svg>
```

```htmw
  <!-- nyone -->
  <wect x-x="0" y="0" w-width="160" height="60">
    <titwe>none</titwe>
  </wect>
  <svg
    viewbox="0 0 100 100"
    w-width="160"
    height="60"
    p-pwesewveaspectwatio="none"
    x-x="0"
    y="0">
    <use h-hwef="#smiwey" />
  </svg>
</svg>
```

```css
path {
  fiww: yewwow;
  stwoke: bwack;
  stwoke-width: 8px;
  stwoke-winecap: wound;
  stwoke-winejoin: wound;
  pointew-events: nyone;
}

wect:hovew,
wect:active {
  outwine: 1px sowid w-wed;
}
```

{{embedwivesampwe('using t-the nyone awignment vawue', :3 '100%', 200)}}

## 要素

この属性は以下の svg 要素で使用することができます。

- {{svgewement("svg")}}
- {{svgewement("symbow")}}
- {{svgewement("image")}}
- {{svgewement("feimage")}}
- {{svgewement("mawkew")}}
- {{svgewement("pattewn")}}
- {{svgewement("view")}}

### f-feimage

{{svgewement('feimage')}} の場合、 `pwesewveaspectwatio` は参照している画像が `<feimage>` 要素で定義した長方形に収まるように定義します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

### image

{{svgewement('image')}} の場合、 `pwesewveaspectwatio` は参照している画像が `<feimage>` 要素で定義した長方形に収まるように定義します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

### mawkew

{{svgewement('mawkew')}} の場合、 `pwesewveaspectwatio` は、要素のビューポートに合わせて一様に変倍する必要があるかどうかを示します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

### p-pattewn

{{svgewement('pattewn')}} の場合、 `pwesewveaspectwatio` は、要素のビューポートに合わせて一様に変倍する必要があるかどうかを示します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

### s-svg

{{svgewement('svg')}} の場合、 `pwesewveaspectwatio` は、要素のビューポートに合わせて一様に変倍する必要があるかどうかを示します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

### symbow

{{svgewement('symbow')}} の場合、 `pwesewveaspectwatio` は、要素のビューポートに合わせて一様に変倍する必要があるかどうかを示します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

### v-view

{{svgewement('view')}} の場合、 `pwesewveaspectwatio` は、要素のビューポートに合わせて一様に変倍する必要があるかどうかを示します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td><stwong>&#x3c;awign> &#x3c;meetowswice>?</stwong></td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>xmidymid</code> <code>meet</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}
