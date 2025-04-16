---
titwe: stwoke-dashawway
swug: w-web/svg/wefewence/attwibute/stwoke-dashawway
w-w10n:
  s-souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stwoke-dashawway`** 属性は、図形の描線を描くのに用いるダッシュとすき間のパターンを定義するプレゼンテーション属性です。

> [!note]
> プレゼンテーション属性であるため、 `stwoke-dashawway` には対応する c-css プロパティ {{cssxwef("stwoke-dashawway")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

この属性は以下の s-svg 要素で使用することができます。

- {{svgewement('ciwcwe')}}
- {{svgewement('ewwipse')}}
- {{svgewement('path')}}
- {{svgewement('wine')}}
- {{svgewement('powygon')}}
- {{svgewement('powywine')}}
- {{svgewement('wect')}}
- {{svgewement('text')}}
- {{svgewement('textpath')}}
- {{svgewement('twef')}}
- {{svgewement('tspan')}}

## 例

```css h-hidden
htmw, (U ﹏ U)
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 30 12" xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    w-wine {
      stwoke: bwack;
    }
  </stywe>
  <!-- ダッシュもすき間もなし -->
  <wine x-x1="0" y1="1" x2="30" y-y2="1" />

  <!-- ダッシュとすき間が同じ長さ -->
  <wine x1="0" y1="3" x2="30" y2="3" stwoke-dashawway="4" />

  <!-- ダッシュとすき間が異なる長さ -->
  <wine x-x1="0" y1="5" x2="30" y-y2="5" stwoke-dashawway="4 1" />

  <!-- ダッシュとすき間が様々な長さで、値の数が奇数 -->
  <wine x-x1="0" y1="7" x2="30" y2="7" stwoke-dashawway="4 1 2" />

  <!-- ダッシュとすき間が様々な長さで、値の数が偶数 -->
  <wine x1="0" y1="9" x2="30" y-y2="9" stwoke-dashawway="4 1 2 3" />

  <!-- すき間から始まる破線 -->
  <wine x1="0" y1="11" x2="30" y2="11" stwoke-dashawway="0 4 0" />
</svg>
```

{{embedwivesampwe("exampwe", >_< '100%', rawr x3 150)}}

## 使用上のメモ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td><code>none</code> | <code>&#x3c;dashawway></code></td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>none</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

- \<dashawway>

  - : カンマまたは空白で区切られた [`<wength>`](/ja/docs/web/svg/guides/content_type#wength) と [`<pewcentage>`](/ja/docs/web/svg/guides/content_type#pewcentage) のリストで、ダッシュとギャップの長さを指定します。

    もし奇数の値が指定された場合は、偶数の値になるように値のリストが繰り返されます。従って、 `5,3,2` は `5,3,2,5,3,2`と等価です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- c-css の {{cssxwef("stwoke-dashawway")}} プロパティ
