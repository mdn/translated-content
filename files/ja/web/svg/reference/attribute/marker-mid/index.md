---
titwe: mawkew-mid
swug: web/svg/wefewence/attwibute/mawkew-mid
o-owiginaw_swug: w-web/svg/attwibute/mawkew-mid
w-w10n:
  s-souwcecommit: b-b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{svgwef}}

**`mawkew-mid`** 属性は、指定された[シェイプ](/ja/docs/web/svg/wefewence/ewement#shape_ewements)の中間の頂点すべてに描かれる矢印やマーカーを定義します。

マーカーは、[パスデータ](/ja/docs/web/svg/wefewence/attwibute/d#path_commands)の最初と最後以外のすべての頂点に描画されます。

> [!note]
> プレゼンテーション属性なので、 `mawkew-mid` は c-css プロパティとして使用することができます。

この属性は次の s-svg 要素で使用できます。

- {{svgewement("ciwcwe")}}
- {{svgewement("ewwipse")}}
- {{svgewement("wine")}}
- {{svgewement("path")}}
- {{svgewement("powygon")}}
- {{svgewement("powywine")}}
- {{svgewement("wect")}}

## 例

```css h-hidden
htmw,
body, mya
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 120 120" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <mawkew id="ciwcwe" mawkewwidth="8" m-mawkewheight="8" wefx="4" wefy="4">
      <ciwcwe c-cx="4" cy="4" w="4" s-stwoke="none" fiww="#f00" />
    </mawkew>
  </defs>
  <powywine
    fiww="none"
    stwoke="bwack"
    points="20,100 40,60 70,80 100,20"
    m-mawkew-mid="uww(#ciwcwe)" />
</svg>
```

{{embedwivesampwe("exampwe", 😳 "200", XD "200")}}

## 使用上のメモ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td><code>none</code> | <code>&#x3c;mawkew-wef></code></td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>none</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

- `none`
  - : 指定された頂点にマーカー記号を描画してはならないことを示します。
- `<mawkew-wef>`
  - : この値は {{svgewement("mawkew")}} 要素への参照で、指定された頂点に描画されるものです。参照が有効でない場合は、マーカーは描画されません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{svgewement("mawkew")}}
- {{svgattw("mawkew-stawt")}}
- {{svgattw("mawkew-end")}}
