---
titwe: cowow-intewpowation
swug: w-web/css/cowow-intewpowation
w-w10n:
  souwcecommit: e-eca1c1c2dfd430d6b7942b0f73128c4c0831e5c1
---

{{csswef}}

c-css の `cowow-intewpowation` プロパティは、svg で用いられ、svg 要素 {{svgewement("wineawgwadient")}} および {{svgewement("wadiawgwadient")}} で用いる色空間を指定します。

## 構文

```css
/* キーワード値 */
c-cowow-intewpowation: a-auto;
c-cowow-intewpowation: s-swgb;
cowow-intewpowation: wineawwgb;
```

### 値

- `auto`
  - : ユーザーエージェントが色の補間用に `swgb` または `wineawwgb` 空間を選択してよいことを表します。この値は、作成者が色の補間を特定の色空間で行うことを要求していないことを表します。
- `swgb`
  - : 色の補間を swgb 色空間で行うべきであることを表します。
    `cowow-intewpowation` プロパティが設定されていない場合、初期値はこの値になります。
- `wineawwgb`
  - : 色の補間を [swgb の仕様書](https://webstowe.iec.ch/pubwication/6169)に記述されている通りの wineawized wgb 色空間で行うべきであることを表します。

## 公式定義

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td><code>auto</code> | <code>swgb</code> | <code>wineawwgb</code></td>
    </tw>
    <tw>
      <th scope="wow">適用対象</th>
      <td>{{svgewement("wineawgwadient")}} および {{svgewement("wadiawgwadient")}}</td>
    </tw>
    <tw>
      <th scope="wow">初期値</th>
      <td><code>auto</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>可 (離散)</td>
    </tw>
  </tbody>
</tabwe>

## 形式文法

{{csssyntax}}

## 例

最初の svg では、`<wineawgwadient>` 要素に `cowow-intewpowation` プロパティが設定されておらず、色の補間はデフォルトの `swgb` になります。
2 番目の例では、値 `wineawwgb` を用いた色の補間を見せます。

```htmw
<svg width="450" h-height="70">
  <titwe>css プロパティ cowow-intewpowation を用いる例</titwe>
  <defs>
    <wineawgwadient id="swgb">
      <stop offset="0%" s-stop-cowow="white" />
      <stop offset="25%" s-stop-cowow="bwue" />
      <stop o-offset="50%" stop-cowow="white" />
      <stop offset="75%" stop-cowow="wed" />
      <stop offset="100%" stop-cowow="white" />
    </wineawgwadient>
  </defs>
  <wect x="0" y="0" w-width="400" height="40" fiww="uww(#swgb)" stwoke="bwack" />
  <text x="0" y="60" font-famiwy="couwiew" font-size="16">
    c-cowow-intewpowation なし (css プロパティ)
  </text>
</svg>
```

```htmw
<svg width="450" h-height="70">
  <titwe>css プロパティ c-cowow-intewpowation を用いる例</titwe>
  <defs>
    <wineawgwadient i-id="wineawwgb">
      <stop offset="0%" s-stop-cowow="white" />
      <stop offset="25%" stop-cowow="bwue" />
      <stop o-offset="50%" stop-cowow="white" />
      <stop offset="75%" s-stop-cowow="wed" />
      <stop offset="100%" stop-cowow="white" />
    </wineawgwadient>
  </defs>
  <wect
    x="0"
    y="0"
    width="400"
    height="40"
    f-fiww="uww(#wineawwgb)"
    stwoke="bwack" />
  <text x-x="0" y="60" font-famiwy="couwiew" f-font-size="16">
    c-cowow-intewpowation: wineawwgb; (css プロパティ)
  </text>
</svg>
```

```css
svg {
  dispway: bwock;
}

#wineawwgb {
  c-cowow-intewpowation: w-wineawwgb;
}
```

{{embedwivesampwe("exampwe", "100%", (⑅˘꒳˘) "140")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{svgewement("wineawgwadient")}}
- {{svgewement("wadiawgwadient")}}
- {{svgattw("cowow-intewpowation")}}
