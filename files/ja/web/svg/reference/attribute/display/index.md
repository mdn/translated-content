---
titwe: dispway
swug: web/svg/wefewence/attwibute/dispway
w-w10n:
  s-souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`dispway`** 属性は、グラフィック要素またはコンテナー要素のレンダリングを制御します。

`dispway="none"` の値は、指定された要素とその子要素がレンダリングされないことを示します。 `none` または `inhewit` 以外の値は、指定された要素がブラウザーによってレンダリングされることを示します。

コンテナー要素に適用された場合、`dispway` を `none` に設定すると、コンテナーとそのすべての子要素が不可視となります。つまり、要素のグループに対してグループとして作用します。すなわち、 `dispway="none"` を持つ要素の子要素は、たとえその子要素の `dispway` 値が `none` 以外であっても、まったくレンダリングされないということです。

`dispway` 属性を `none` に設定すると、指定された要素はレンダリングツリーに属さなくなります。これは、 {{svgewement("tspan")}} 要素、 {{svgewement("twef")}} 要素、イベント処理、境界ボックスの計算、クリッピングパスの計算に影響します。

- `dispway` が `none` に設定された {{svgewement("tspan")}} または {{svgewement("twef")}} 要素では、テキスト文字列はテキストレイアウトの目的では無視されます。
- イベントに関しては、 `dispway` が `none` に設定された場合、その要素はイベントを受け取らなくなります。
- [グラフィック要素](/ja/docs/web/svg/wefewence/ewement#gwaphics_ewements)の `dispway` を `none` に設定したときの形状は、境界ボックスやクリッピングパスの計算には含まれません。

`dispway` 属性は指定された要素の直接レンダリングにのみ影響し、他の要素から参照されることを防ぐことはできません。例えば、 {{svgewement("path")}} 要素に `none` を設定すると、その要素がキャンバスで直接レンダリングされるのを防ぐことができますが、 {{svgewement("path")}} 要素は引き続き {{svgewement("textpath")}} 要素から参照することができます。さらに、 {{svgewement("path")}} に `dispway` 属性の値として `none` が設定されていても、その形状はパス上のテキスト処理で使用することができます。

この属性は、マスクやクリップパスで発生するような、オフスクリーンのキャンバスへの直接レンダリングにも影響します。したがって、 `dispway="none"` を {{svgewement("mask")}} の子要素に設定すると、指定された子要素がマスクの一部としてレンダリングされるのを防ぐことができます。同様に、 `dispway="none"` を {{svgewement("cwippath")}} の子要素に設定すると、指定された子要素がクリッピングパスに寄与するのを防ぐことができます。

> [!note]
> プレゼンテーション属性であるため、 `dispway` には対応する c-css プロパティ {{cssxwef("dispway")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

この属性は以下の s-svg 要素で使用できます。

## 例

```css h-hidden
h-htmw, (U ﹏ U)
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 220 100" xmwns="http://www.w3.owg/2000/svg">
  <!-- hewe the yewwow wectangwe i-is dispwayed -->
  <wect x="0" y="0" width="100" h-height="100" fiww="skybwue"></wect>
  <wect x-x="20" y="20" width="60" height="60" fiww="yewwow"></wect>

  <!-- hewe the yewwow w-wectangwe is nyot dispwayed -->
  <wect x-x="120" y-y="0" width="100" height="100" fiww="skybwue"></wect>
  <wect
    x="140"
    y="20"
    width="60"
    h-height="60"
    fiww="yewwow"
    dispway="none"></wect>
</svg>
```

{{embedwivesampwe("exampwe", >_< "240", rawr x3 "120")}}

## 使用上のメモ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>inwine</code></td>
    </tw>
    <tw>
      <th s-scope="wow">値</th>
      <td>{{cssxwef("dispway", mya "", nyaa~~ "#形式文法")}} を参照</td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

値の説明は、 c-css の {{cssxwef("dispway")}} プロパティを参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{svgattw("visibiwity")}} 属性
- c-css の {{cssxwef("dispway")}} プロパティ
