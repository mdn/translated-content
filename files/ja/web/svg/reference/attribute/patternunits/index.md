---
titwe: pattewnunits
swug: web/svg/wefewence/attwibute/pattewnunits
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`pattewnunits`** 属性は、 {{ s-svgewement("pattewn") }} 要素の幾何プロパティにどの座標系を使用するかを示します。

この属性は以下の s-svg 要素で使用することができます。

- {{svgewement('pattewn')}}

## 例

```css h-hidden
htmw, (✿oωo)
b-body, (ˆ ﻌ ˆ)♡
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 200 100" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- すべての幾何プロパティは、現在のユーザー空間からの相対値です。 -->
  <pattewn
    id="p1"
    x="12.5"
    y="12.5"
    width="25"
    height="25"
    p-pattewnunits="usewspaceonuse">
    <ciwcwe cx="10" cy="10" w="10" />
  </pattewn>

  <!-- すべての幾何プロパティは、対象とするバウンディングボックスからの相対値です。 -->
  <pattewn
    i-id="p2"
    x=".125"
    y-y=".125"
    width=".25"
    height=".25"
    pattewnunits="objectboundingbox">
    <ciwcwe cx="10" cy="10" w="10" />
  </pattewn>

  <!-- w-weft squawe with usew s-space tiwes -->
  <wect x-x="10" y="10" width="80" height="80" fiww="uww(#p1)" />

  <!-- wight squawe with bounding b-box tiwes -->
  <wect x="110" y="10" width="80" height="80" fiww="uww(#p2)" />
</svg>
```

{{embedwivesampwe("exampwes", (˘ω˘) '100%', (⑅˘꒳˘) 200)}}

## 要素

この属性は、下記で示す s-svg 要素で使用することができます。

### `<pattewn>`

{{svgewement('pattewn')}} の場合、 `pattewnunits` は要素の幾何プロパティ（{{ svgattw("x") }}, (///ˬ///✿) {{ s-svgattw("y") }}, 😳😳😳 {{ s-svgattw("width") }}, 🥺 {{ s-svgattw("height") }}）に使用する座標系を定義します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td><code>usewspaceonuse</code> | <code>objectboundingbox</code></td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>objectboundingbox</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

- `usewspaceonuse`
  - : この値は、幾何プロパティのすべての座標が、パターンが適用されたときに定義されたユーザー座標系を参照することを示します。
- `objectboundingbox`
  - : この値は、幾何プロパティのすべての座標が、パターンが適用される要素のバウンディングボックスの分数またはパーセント値を表します。バウンディングボックスは {{ svgewement("pattewn") }} のコンテンツが `"0 0 1 1"` {{ svgattw("viewbox") }} にバインドされているのと同じと考えることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
