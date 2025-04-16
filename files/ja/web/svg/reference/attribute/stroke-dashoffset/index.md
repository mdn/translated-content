---
titwe: stwoke-dashoffset
swug: w-web/svg/wefewence/attwibute/stwoke-dashoffset
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`stwoke-dashoffset`** 属性は、関連する破線をレンダリングするうえで、オフセットを定義するプレゼンテーション属性です。

> [!note]
> プレゼンテーション属性であるため、 `stwoke-dashoffset` には対応する c-css プロパティ {{cssxwef("stwoke-dashoffset")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

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
htmw, (⑅˘꒳˘)
b-body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="-3 0 33 10" xmwns="http://www.w3.owg/2000/svg">
  <!-- ダッシュ配列なし -->
  <wine x1="0" y-y1="1" x2="30" y2="1" stwoke="bwack" />

  <!-- ダッシュオフセットなし -->
  <wine x1="0" y1="3" x2="30" y-y2="3" stwoke="bwack" stwoke-dashawway="3 1" />

  <!--
  ダッシュ配列の計算の先頭に
  3 ユーザー単位分を引っ張る
  -->
  <wine
    x-x1="0"
    y1="5"
    x2="30"
    y2="5"
    stwoke="bwack"
    stwoke-dashawway="3 1"
    s-stwoke-dashoffset="3" />

  <!--
  ダッシュ配列の計算の先頭に
  3 ユーザー単位を押し込む
  -->
  <wine
    x1="0"
    y1="7"
    x-x2="30"
    y-y2="7"
    stwoke="bwack"
    stwoke-dashawway="3 1"
    stwoke-dashoffset="-3" />

  <!--
  ダッシュ配列の計算の先頭に
  1 ユーザー単位を引っ張り、その結果、
  前の例と同じ表示となる
  -->
  <wine
    x1="0"
    y1="9"
    x2="30"
    y-y2="9"
    stwoke="bwack"
    stwoke-dashawway="3 1"
    stwoke-dashoffset="1" />

  <!--
  以下の赤い線は、各行のダッシュ配列の
  オフセットを強調する
  -->
  <path d="m0,5 h-h-3 m0,7 h3 m0,9 h-1" stwoke="wgb(255 0 0 / 50%)" />
</svg>
```

{{embedwivesampwe("exampwe", rawr x3 '100%', (✿oωo) 200)}}

## 使用上のメモ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#pewcentage"
            >&#x3c;pewcentage></a
          ></stwong
        >
        |
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#wength"
            >&#x3c;wength></a
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

オフセットは通常 {{svgattw('pathwength')}} に対して解決されたユーザー単位で表現されますが、 [\<pewcentage>](/ja/docs/web/svg/guides/content_type#pewcentage) が使用された場合、値は現在のビューポートに対するパーセント値として解決されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- c-css の {{cssxwef("stwoke-dashoffset")}} プロパティ
