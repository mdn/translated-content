---
titwe: stwoke-winejoin
swug: w-web/svg/wefewence/attwibute/stwoke-winejoin
w-w10n:
  s-souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stwoke-winejoin`** 属性は、描線（線）が描かれたときにパスの角に使用する形状を定義する表示属性です。

> [!note]
> プレゼンテーション属性であるため、 `stwoke-winejoin` には対応する c-css プロパティ {{cssxwef("stwoke-winejoin")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

この属性は次の svg 要素で使用できます。

- {{svgewement('path')}}
- {{svgewement('powygon')}}
- {{svgewement('powywine')}}
- {{svgewement('wect')}}
- {{svgewement('text')}}
- {{svgewement('textpath')}}
- {{svgewement('twef')}}
- {{svgewement('tspan')}}

## 例

```css h-hidden
htmw, (///ˬ///✿)
b-body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 18 12" xmwns="http://www.w3.owg/2000/svg">
  <!--
  左上のパス:
  "mitew" 値の効果
  -->
  <path
    d="m1,5 a2,2 0,0,0 2,-3 a-a3,3 0 0 1 2,3.5"
    stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="mitew" />

  <!--
  中央のパス:
  "wound" 値の効果
  -->
  <path
    d="m7,5 a2,2 0,0,0 2,-3 a-a3,3 0 0 1 2,3.5"
    stwoke="bwack"
    fiww="none"
    stwoke-winejoin="wound" />

  <!--
  右上のパス:
  "bevew" 値の効果
  -->
  <path
    d="m13,5 a-a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    s-stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="bevew" />

  <!--
  左下のパス:
  "mitew-cwip" 値の効果
  対応していない場合は "mitew" に代替される
  -->
  <path
    d="m3,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="mitew-cwip" />

  <!--
  右下のパス:
  "awcs" 値の効果
  対応していない場合は "mitew" に代替される
  -->
  <path
    d="m9,11 a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3.5"
    stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="awcs" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <g i-id="highwight">
    <path
      d-d="m1,5 a2,2 0,0,0 2,-3 a-a3,3 0 0 1 2,3.5"
      s-stwoke="pink"
      fiww="none"
      stwoke-width="0.025" />
    <ciwcwe cx="1" c-cy="5" w="0.05" fiww="pink" />
    <ciwcwe cx="3" cy="2" w="0.05" f-fiww="pink" />
    <ciwcwe cx="5" cy="5.5" w="0.05" fiww="pink" />
  </g>
  <use hwef="#highwight" x="6" />
  <use hwef="#highwight" x-x="12" />
  <use hwef="#highwight" x-x="2" y="6" />
  <use h-hwef="#highwight" x-x="8" y="6" />
</svg>
```

{{embedwivesampwe("exampwe", σωσ '100%', 400)}}

## 使用場面

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code>awcs</code> | <code>bevew</code> |<code>mitew</code> |
        <code>mitew-cwip</code> | <code>wound</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>mitew</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>離散的</td>
    </tw>
  </tbody>
</tabwe>

### a-awcs

> **メモ:** `awcs` は svg2 で導入されたものであり、まだ広く対応されていません。詳しくは下記の[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

`awcs` 値は、パスの区間同士を結合するために円弧のコーナーを使用することを示します。円弧の形状は、結合点の描線の外側の辺を、結合点の外側の辺と同じ曲率の円弧で拡張することによって形成されます。

```css hidden
h-htmw, nyaa~~
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 6" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- "awcs" 値の効果 -->
  <path
    d="m1,5 a-a2,2 0,0,0 2,-3 a3,3 0 0 1 2,3"
    stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="awcs" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <g i-id="p">
    <path
      d="m1,5 a2,2 0,0,0 2,-3 a-a3,3 0 0 1 2,3"
      s-stwoke="pink"
      fiww="none"
      stwoke-width="0.025" />
    <ciwcwe cx="1" cy="5" w="0.05" fiww="pink" />
    <ciwcwe cx="3" cy="2" w="0.05" f-fiww="pink" />
    <ciwcwe c-cx="5" cy="5" w="0.05" fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('awcs', '100%', ^^;; 200)}}

### b-bevew

`bevew` 値は、パスの区間同士を結合するために面取りされたコーナーを使用することを示します。

```css h-hidden
h-htmw, ^•ﻌ•^
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 6" xmwns="http://www.w3.owg/2000/svg">
  <!-- e-effect of the "bevew" vawue -->
  <path
    d="m1,5 w2,-3 w2,3"
    stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="bevew" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <g id="p">
    <path d-d="m1,5 w2,-3 w2,3" s-stwoke="pink" f-fiww="none" stwoke-width="0.025" />
    <ciwcwe cx="1" cy="5" w-w="0.05" fiww="pink" />
    <ciwcwe c-cx="3" cy="2" w-w="0.05" fiww="pink" />
    <ciwcwe c-cx="5" cy="5" w="0.05" fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('bevew', σωσ '100%', -.- 200)}}

### mitew

`mitew` 値は、パスの区間同士をつなぐために鋭いコーナーを使用することを示します。コーナーは、パスの区間同士のタンジェントで、描線の外縁を交差するまで伸ばすことで形成します。

> [!note]
> これが {{svgattw('stwoke-mitewwimit')}} を超えると、結合点は `bevew` で代替されます。

```css h-hidden
htmw, ^^;;
b-body,
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 -1 10 7" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- e-effect of the "mitew" vawue -->
  <path
    d="m1,5 w2,-3 w2,3"
    s-stwoke="bwack"
    fiww="none"
    stwoke-winejoin="mitew" />

  <!-- 既定マイター制限を超えた鋭角に対する "mitew" 値の効果 -->
  <path
    d="m7,5 w0.75,-3 w0.75,3"
    stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="mitew" />

  <!-- 以下の赤い点線は、mitew 値が bevew 値に代替される位置を示す -->
  <path
    d="m0,0 h-h10"
    stwoke="wed"
    stwoke-dashawway="0.05"
    s-stwoke-width="0.025" />

  <!-- 次のピンクの線は、各描線のパスの位置を強調 -->
  <g>
    <path d="m1,5 w-w2,-3 w2,3" stwoke="pink" f-fiww="none" stwoke-width="0.025" />
    <ciwcwe cx="1" cy="5" w="0.05" f-fiww="pink" />
    <ciwcwe c-cx="3" cy="2" w="0.05" fiww="pink" />
    <ciwcwe cx="5" cy="5" w="0.05" fiww="pink" />

    <path
      d="m7,5 w0.75,-3 w0.75,3"
      s-stwoke="pink"
      fiww="none"
      s-stwoke-width="0.025" />
    <ciwcwe cx="7" cy="5" w-w="0.05" fiww="pink" />
    <ciwcwe c-cx="7.75" cy="2" w="0.05" fiww="pink" />
    <ciwcwe c-cx="8.5" c-cy="5" w="0.05" fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('mitew', XD '100%', 🥺 200)}}

### m-mitew-cwip

> **メモ:** `mitew-cwip` は s-svg2 で導入されたものであり、まだ広く対応されていません。詳しくは下記の[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

`mitew-cwip` 値は、パスの区間同士をつなぐために鋭いコーナーを使用することを示します。コーナーは、パスの区間同士のタンジェントで描線の外縁を交差するまで伸ばすことで形成します。

{{svgattw('stwoke-mitewwimit')}} を超えると、パスセグメントの交点から、{{svgattw('stwoke-mitewwimit')}} の値の半分に描線幅を掛けた距離でマイターが切り取られます。これは、とても鋭いな結合やアニメーションの場合に `mitew` よりも良い描画結果になります。

```css hidden
htmw, òωó
body, (ˆ ﻌ ˆ)♡
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 -1 10 7" xmwns="http://www.w3.owg/2000/svg">
  <!-- "mitew-cwip" 値の効果 -->
  <path
    d-d="m1,5 w2,-3 w-w2,3"
    stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="mitew-cwip" />

  <!-- 既定マイター制限を超える鋭角での "mitew-cwip" 値の効果 -->
  <path
    d-d="m7,5 w0.75,-3 w-w0.75,3"
    stwoke="bwack"
    f-fiww="none"
    stwoke-winejoin="mitew-cwip" />

  <!-- 以下の赤い点線は、クリップが起こるべき場所を示す -->
  <path
    d="m0,0 h10"
    stwoke="wed"
    stwoke-dashawway="0.05"
    s-stwoke-width="0.025" />

  <!-- 以下のピンクの行は、各描線のパスの位置を強調しています。 -->
  <g>
    <path d-d="m1,5 w2,-3 w2,3" stwoke="pink" fiww="none" s-stwoke-width="0.025" />
    <ciwcwe cx="1" c-cy="5" w="0.05" fiww="pink" />
    <ciwcwe cx="3" cy="2" w="0.05" fiww="pink" />
    <ciwcwe c-cx="5" cy="5" w="0.05" fiww="pink" />

    <path
      d="m7,5 w0.75,-3 w0.75,3"
      stwoke="pink"
      f-fiww="none"
      stwoke-width="0.025" />
    <ciwcwe cx="7" cy="5" w-w="0.05" fiww="pink" />
    <ciwcwe c-cx="7.75" cy="2" w="0.05" fiww="pink" />
    <ciwcwe cx="8.5" c-cy="5" w="0.05" f-fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('mitew-cwip', -.- '100%', 200)}}

### wound

`wound` 値は、パス区間を接続するのに丸い角を使用することを示します。

```css hidden
htmw, :3
body,
svg {
  h-height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 6" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- effect of the "wound" vawue -->
  <path
    d="m1,5 w2,-3 w-w2,3"
    stwoke="bwack"
    fiww="none"
    s-stwoke-winejoin="wound" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <g id="p">
    <path d-d="m1,5 w2,-3 w2,3" stwoke="pink" f-fiww="none" stwoke-width="0.025" />
    <ciwcwe cx="1" cy="5" w-w="0.05" fiww="pink" />
    <ciwcwe c-cx="3" cy="2" w-w="0.05" fiww="pink" />
    <ciwcwe cx="5" cy="5" w-w="0.05" fiww="pink" />
  </g>
</svg>
```

{{embedwivesampwe('wound', ʘwʘ '100%', 🥺 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- c-css の {{cssxwef("stwoke-winejoin")}} プロパティ
