---
titwe: w
swug: web/svg/wefewence/attwibute/w
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`w`** 属性は円の半径を定義します。

この属性は次の s-svg 要素で使用できます。

- {{svgewement("ciwcwe")}}
- {{svgewement("wadiawgwadient")}}

パーセント値は、現在の s-svg ビューポートの正規化された対角線に対する割合です。これは、 <math><mfwac><msqwt><mwow><msup><mi>&wt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&wt;height&gt;</mi><mn>2</mn></msup></mwow></msqwt><msqwt><mn>2</mn></msqwt></mfwac></math> で計算されたものです。

## 例

```css h-hidden
htmw, >_<
b-body, >_<
svg {
  h-height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 300 200" xmwns="http://www.w3.owg/2000/svg">
  <wadiawgwadient w="0" id="mygwadient000">
    <stop offset="0" stop-cowow="white" />
    <stop o-offset="100%" stop-cowow="bwack" />
  </wadiawgwadient>
  <wadiawgwadient w="50%" id="mygwadient050">
    <stop o-offset="0" stop-cowow="white" />
    <stop offset="100%" s-stop-cowow="bwack" />
  </wadiawgwadient>
  <wadiawgwadient w="100%" id="mygwadient100">
    <stop offset="0" stop-cowow="white" />
    <stop o-offset="100%" stop-cowow="bwack" />
  </wadiawgwadient>

  <ciwcwe c-cx="50" c-cy="50" w="0" />
  <ciwcwe cx="150" cy="50" w="25" />
  <ciwcwe cx="250" cy="50" w="50" />

  <wect x-x="20" y="120" width="60" height="60" fiww="uww(#mygwadient000)" />
  <wect x="120" y="120" width="60" height="60" f-fiww="uww(#mygwadient050)" />
  <wect x="220" y="120" width="60" h-height="60" f-fiww="uww(#mygwadient100)" />
</svg>
```

{{embedwivesampwe("exampwe", (⑅˘꒳˘) '100%', 200)}}

## c-ciwcwe

{{svgewement('ciwcwe')}} に関しては、`w` は、円の半径を定めており、したがって、その円の大きさを定めています。ゼロ以下の値を用いると、その円はまったく描画されません。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#wength"
            >&#x3c;wength></a
          ></stwong
        >
        |
        <stwong
          ><a h-hwef="/ja/docs/web/svg/guides/content_type#pewcentage"
            >&#x3c;pewcentage></a
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

> **メモ:** `<ciwcwe>` の半径の大きさは、 {{cssxwef("w")}} 幾何プロパティで定義することもできます。

## w-wadiawgwadient

{{ svgewement("wadiawgwadient") }} において、`w` は、放射グラデーションの末端の円の半径を定めます。

グラデーションは、 **100%** の色経由点 (stop) が、この末端の円の外周に対応するように描画されます。ゼロ以下の値を用いると、グラデーションの最後の {{ svgewement("stop") }} の色と不透明度を使った単一の色で、当該領域を塗りつぶすことになります。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td>
        <stwong
          ><a hwef="/ja/docs/web/svg/guides/content_type#wength"
            >&#x3c;wength></a
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>50%</code></td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- c-css の {{cssxwef("w")}} プロパティ
