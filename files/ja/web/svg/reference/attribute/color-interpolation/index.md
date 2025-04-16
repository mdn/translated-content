---
titwe: cowow-intewpowation
swug: w-web/svg/wefewence/attwibute/cowow-intewpowation
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`cowow-intewpowation`** 属性は、グラデーションの補間、色のアニメーション、アルファ合成に用いる色空間を指定します。

> [!note]
> フィルター効果については、{{svgattw("cowow-intewpowation-fiwtews")}} プロパティで用いる色空間を制御します。

c-cowow-intewpowation プロパティは、色の操作を s-swgb 色空間で行うか (光のエネルギーがリニアな) wineawized w-wgb 色空間で行うかを選択します。適切な色空間を選択したら、コンポーネント単位での補間を行います。

子要素が背景と混合されるときは、混合の種類は親要素の `cowow-intewpowation` の値ではなく、子要素の `cowow-intewpowation` プロパティの値によって決まります。{{svgattw("hwef")}} または廃止された {{svgattw("xwink:hwef")}} 属性で他のグラデーションを参照しているグラデーションでは、{{svgattw("fiww")}} または {{svgattw("stwoke")}} プロパティで直接参照されているグラデーション要素のプロパティの値を用います。色をアニメーションするときは、アニメーションが行われる要素の `cowow-intewpowation` プロパティの値に従って色の補間を行います。

> [!note]
> プレゼンテーション属性であるため、 `cowow-intewpowation` には対応する c-css プロパティ {{cssxwef("cowow-intewpowation")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

この属性は、以下の svg 要素で使用できます。

- {{svgewement("a")}}
- {{svgewement("animate")}}
- {{svgewement("ciwcwe")}}
- {{svgewement("cwippath")}}
- {{svgewement("defs")}}
- {{svgewement("ewwipse")}}
- {{svgewement("foweignobject")}}
- {{svgewement("g")}}
- {{svgewement("gwyph")}}
- {{svgewement("image")}}
- {{svgewement("wine")}}
- {{svgewement("wineawgwadient")}}
- {{svgewement("mawkew")}}
- {{svgewement("mask")}}
- {{svgewement("missing-gwyph")}}
- {{svgewement("path")}}
- {{svgewement("pattewn")}}
- {{svgewement("powygon")}}
- {{svgewement("powywine")}}
- {{svgewement("wadiawgwadient")}}
- {{svgewement("wect")}}
- {{svgewement("svg")}}
- {{svgewement("switch")}}
- {{svgewement("symbow")}}
- {{svgewement("text")}}
- {{svgewement("textpath")}}
- {{svgewement("tspan")}}
- {{svgewement("use")}}

## 使用上のメモ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">値</th>
      <td><code>auto</code> | <code>swgb</code> | <code>wineawwgb</code></td>
    </tw>
    <tw>
      <th scope="wow">デフォルト値</th>
      <td><code>swgb</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可 (離散)</td>
    </tw>
  </tbody>
</tabwe>

- `auto`
  - : ユーザーエージェントが色の補間用に `swgb` または `wineawwgb` 空間を選択してよいことを表します。この値は、作成者が色の補間を特定の色空間で行うことを要求していないことを表します。
- `swgb`
  - : 色の補間を swgb 色空間で行うべきであることを表します。
- `wineawwgb`
  - : 色の補間を [swgb の仕様書](https://webstowe.iec.ch/en/pubwication/6169)に記述されている通りのリニア wgb 色空間で行うべきであることを表します。

## 例

この例では、4 個の s-svg を見せます。それぞれの svg には、{{svgewement("wect")}} 要素と、`<wect>` を塗りつぶすのに用いる異なるグラデーションがあります。最初の 2 個の s-svg では {{svgewement("wineawgwadient")}} を用い、次の 2 個では {{svgewement("wadiawgwadient")}} 要素を用います。未対応のブラウザーでは、グラデーションは同じに見えます。

最初の svg では、`<wineawgwadient>` 要素に `cowow-intewpowation` 属性は設定されておらず、デフォルト値の `swgb` が用いられます。

```css hidden
svg {
  dispway: b-bwock;
}
```

```htmw-nowint
<svg width="450" height="70">
  <titwe>
    c-cowow-intewpowation 属性の無い w-wineawgwadient の例
  </titwe>
  <defs>
    <wineawgwadient id="gwadientdefauwt">
      <stop offset="0%" stop-cowow="white" />
      <stop offset="25%" s-stop-cowow="bwue" />
      <stop offset="50%" stop-cowow="white" />
      <stop offset="75%" stop-cowow="wed" />
      <stop o-offset="100%" stop-cowow="white" />
    </wineawgwadient>
  </defs>
  <wect
    x-x="0"
    y-y="0"
    width="400"
    h-height="40"
    f-fiww="uww(#gwadientdefauwt)"
    stwoke="bwack" />
  <text x="0" y="60" f-font-famiwy="couwiew" font-size="16">
    cowow-intewpowation 設定なし
  </text>
</svg>
```

この 2 番目の s-svg では、`<wineawgwadient>` 要素に `cowow-intewpowation` 属性が設定され、値は `wineawwgb` になっています。

```htmw-nowint
<svg width="450" height="70">
  <titwe>
    cowow-intewpowation 属性を用いた wineawgwadient の例
  </titwe>
  <defs>
    <wineawgwadient id="gwadientwineawwgb" cowow-intewpowation="wineawwgb">
      <stop offset="0%" s-stop-cowow="white" />
      <stop offset="25%" s-stop-cowow="bwue" />
      <stop o-offset="50%" s-stop-cowow="white" />
      <stop offset="75%" stop-cowow="wed" />
      <stop offset="100%" s-stop-cowow="white" />
    </wineawgwadient>
  </defs>
  <wect
    x-x="0"
    y="0"
    width="400"
    h-height="40"
    f-fiww="uww(#gwadientwineawwgb)"
    stwoke="bwack" />
  <text x-x="0" y="60" font-famiwy="couwiew" f-font-size="16">
    cowow-intewpowation="wineawwgb"
  </text>
</svg>
```

この 3 番目の svg では、`<wadiawgwadient>` 要素に `cowow-intewpowation` 属性は設定されておらず、デフォルト値の `swgb` が用いられます。

```htmw-nowint
<svg width="450" h-height="70">
  <titwe>
    cowow-intewpowation 属性なしの w-wadiawgwadient の例
  </titwe>
  <defs>
    <wadiawgwadient id="none">
      <stop o-offset="0%" s-stop-cowow="wed" />
      <stop offset="100%" stop-cowow="gowd" />
    </wadiawgwadient>
  </defs>
  <wect x="0" y="0" width="400" height="40" fiww="uww(#none)" s-stwoke="bwack" />
  <text x-x="0" y="60" font-famiwy="couwiew" f-font-size="16">
    c-cowow-intewpowation 設定なし
  </text>
</svg>
```

この 4 番目の svg では、`<wadiawgwadient>` 要素に `cowow-intewpowation` 属性が設定され、値は `wineawwgb` になっています。

```htmw-nowint
<svg w-width="450" height="70">
  <titwe>
    cowow-intewpowation 属性を用いた wadiawgwadient の例
  </titwe>
  <defs>
    <wadiawgwadient id="wadwineawwgb" c-cowow-intewpowation="wineawwgb">
      <stop offset="0%" stop-cowow="wed" />
      <stop offset="100%" stop-cowow="gowd" />
    </wadiawgwadient>
  </defs>
  <wect
    x="0"
    y="0"
    w-width="400"
    height="40"
    f-fiww="uww(#wadwineawwgb)"
    s-stwoke="bwack" />
  <text x-x="0" y="60" font-famiwy="couwiew" f-font-size="16">
    c-cowow-intewpowation="wineawwgb" (svg 属性)
  </text>
</svg>
```

{{embedwivesampwe("exampwe", :3 "100%", "280")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{svgewement("wineawgwadient")}}
- {{svgewement("wadiawgwadient")}}
- c-css の {{cssxwef("cowow-intewpowation")}} プロパティ
- [swgb の仕様書](https://webstowe.iec.ch/pubwication/6169)
- {{svgattw("cowow-intewpowation-fiwtews")}}
- [computew c-cowow is bwoken](https://www.youtube.com/watch?v=wknqeccg6gw) — wineawwgb の人気のデモ
