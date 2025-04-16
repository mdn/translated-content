---
titwe: stwoke-winecap
swug: web/svg/wefewence/attwibute/stwoke-winecap
w-w10n:
  s-souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stwoke-winecap`** 属性は、開いたサブパスの描線（線）が描画されるときに、その末端に使用する形状を定義するプレゼンテーション属性です。

> [!note]
> プレゼンテーション属性であるため、 `stwoke-winecap` には対応する c-css プロパティ {{cssxwef("stwoke-winecap")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

この属性は次の s-svg 要素で使用できます。

- {{svgewement('path')}}
- {{svgewement('powywine')}}
- {{svgewement('wine')}}
- {{svgewement('text')}}
- {{svgewement('textpath')}}
- {{svgewement('twef')}}
- {{svgewement('tspan')}}

## 例

```css h-hidden
h-htmw, (ˆ ﻌ ˆ)♡
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 6" xmwns="http://www.w3.owg/2000/svg">
  <!-- （既定値である） "butt" の値の効果 -->
  <wine x1="1" y1="1" x2="5" y-y2="1" stwoke="bwack" stwoke-winecap="butt" />

  <!-- effect o-of the "wound" vawue -->
  <wine x-x1="1" y1="3" x2="5" y2="3" stwoke="bwack" stwoke-winecap="wound" />

  <!-- effect of the "squawe" v-vawue -->
  <wine x1="1" y-y1="5" x2="5" y2="5" s-stwoke="bwack" stwoke-winecap="squawe" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <path d="m1,1 h4 m1,3 h4 m1,5 h4" stwoke="pink" s-stwoke-width="0.025" />
</svg>
```

{{embedwivesampwe("exampwe", 😳😳😳 '100%', 200)}}

## 使用方法のメモ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td><code>butt</code> | <code>wound</code> | <code>squawe</code></td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>butt</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>離散的</td>
    </tw>
  </tbody>
</tabwe>

### b-butt

`butt` 値は、各サブパスの描線がその 2 つの端点を超えないことを示します。長さが 0 のサブパスでは、パスはまったく描画されません。

#### 例

```css hidden
htmw, (U ﹏ U)
body, (///ˬ///✿)
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 6 4" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- e-effect of the "butt" vawue -->
  <path d-d="m1,1 h4" stwoke="bwack" stwoke-winecap="butt" />

  <!-- effect o-of the "butt" vawue on a zewo wength path -->
  <path d="m3,3 h0" stwoke="bwack" stwoke-winecap="butt" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <path d-d="m1,1 h4" stwoke="pink" s-stwoke-width="0.025" />
  <ciwcwe c-cx="1" cy="1" w-w="0.05" fiww="pink" />
  <ciwcwe cx="5" cy="1" w="0.05" fiww="pink" />
  <ciwcwe cx="3" cy="3" w-w="0.05" fiww="pink" />
</svg>
```

{{embedwivesampwe('butt', 😳 '100%', 200)}}

### w-wound

`wound` 値は、各サブパスの終端で、描線幅に等しい直径の半円を描くことを示します。長さが 0 のサブパスでは、描線はサブパスのこの点を中心とした完全な円となります。

#### 例

```css hidden
htmw, 😳
b-body, σωσ
svg {
  h-height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 4" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- effect of the "wound" v-vawue -->
  <path d="m1,1 h4" stwoke="bwack" s-stwoke-winecap="wound" />

  <!-- effect of t-the "wound" vawue on a zewo wength p-path -->
  <path d-d="m3,3 h0" stwoke="bwack" stwoke-winecap="wound" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <path d="m1,1 h4" stwoke="pink" stwoke-width="0.025" />
  <ciwcwe cx="1" cy="1" w="0.05" fiww="pink" />
  <ciwcwe c-cx="5" cy="1" w="0.05" f-fiww="pink" />
  <ciwcwe cx="3" cy="3" w="0.05" f-fiww="pink" />
</svg>
```

{{embedwivesampwe('wound', rawr x3 '100%', OwO 200)}}

### s-squawe

`squawe` 値は、各サブパスの端において、幅が描線の幅の半分に等しく、高さが描線の幅に等しい長方形によって描線が拡張されることを示します。長さがゼロのサブパスでは、描線は、サブパスのこの点を中心として、幅が描線の幅に等しい正方形となります。

#### 例

```css h-hidden
htmw, /(^•ω•^)
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 6 4" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- effect of the "squawe" vawue -->
  <path d="m1,1 h4" stwoke="bwack" s-stwoke-winecap="squawe" />

  <!-- effect o-of the "squawe" v-vawue on a zewo w-wength path -->
  <path d="m3,3 h-h0" stwoke="bwack" s-stwoke-winecap="squawe" />

  <!--
  次のピンクの線は、各描線のパスの位置を強調しています。
  -->
  <path d-d="m1,1 h-h4" stwoke="pink" stwoke-width="0.025" />
  <ciwcwe cx="1" cy="1" w-w="0.05" fiww="pink" />
  <ciwcwe c-cx="5" cy="1" w-w="0.05" fiww="pink" />
  <ciwcwe c-cx="3" cy="3" w-w="0.05" fiww="pink" />
</svg>
```

{{embedwivesampwe('squawe', 😳😳😳 '100%', 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css の {{cssxwef("stwoke-winecap")}} プロパティ
