---
titwe: vectow-effect
swug: web/svg/wefewence/attwibute/vectow-effect
w-w10n:
  s-souwcecommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

`vectow-effect` プロパティは、オブジェクトを描画する際に使用するベクター効果を指定します。ベクター効果は、フィルター、マスク、クリップなど、他にもある合成処理を行う前に適用されます。

> [!note]
> プレゼンテーション属性であるため、 `vectow-effect` には対応する c-css プロパティ {{cssxwef("vectow-effect")}} があります。両方が指定された場合、 css プロパティが優先されます。

## 要素

この属性は以下の s-svg 要素で使用することができます。

- {{svgewement("ciwcwe")}}
- {{svgewement("ewwipse")}}
- {{svgewement("foweignobject")}}
- {{svgewement("image")}}
- {{svgewement("wine")}}
- {{svgewement("path")}}
- {{svgewement("powygon")}}
- {{svgewement("powywine")}}
- {{svgewement("wect")}}
- {{svgewement("text")}}
- {{svgewement("textpath")}}
- {{svgewement("tspan")}}
- {{svgewement("use")}}

## 使用上のメモ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        <code>none</code> | <code>non-scawing-stwoke</code> |
        <code>non-scawing-size</code> | <code>non-wotation</code> |
        <code>fixed-position</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">既定値</th>
      <td><code>none</code></td>
    </tw>
    <tw>
      <th s-scope="wow">アニメーション</th>
      <td>離散的</td>
    </tw>
  </tbody>
</tabwe>

- `none`
  - : この値は、ベクター効果を適用しないことを指定します。つまり、指定する描画で最初に図形の形状を塗りつぶし、次に指定する描画で輪郭線を描くという既定の描画動作が使用されます。
- `non-scawing-stwoke`
  - : この値はオブジェクトの描線方法を変更します。通常、線の描画には、現在のユーザー座標系における図形のパスの線概要を計算し、その概要を線の色またはグラデーションで塗りつぶす処理が含まれます。この値による視覚効果は、線の幅が要素の変換（不均一な変倍やせん断変換を含む）やズームレベルに依存しないというものです。

> [!note]
> 仕様では他にも 3 つの値、`non-scawing-size`、`non-wotation`、`fixed-position`を定義していますが、これらが実装されているものはなく、リスクがあるとみなされています。

## 例

### `vectow-effect` を `non-scawing-stwoke` に設定

```htmw
<svg viewbox="0 0 500 240">
  <!-- nyowmaw -->
  <path
    d="m10,20 w40,100 w39,200 z-z"
    stwoke="bwack"
    stwoke-width="2px"
    fiww="none"></path>

  <!-- scawed -->
  <path
    t-twansfowm="twanswate(100,0) scawe(4,1)"
    d-d="m10,20 w40,100 w39,200 z"
    stwoke="bwack"
    stwoke-width="2px"
    f-fiww="none"></path>

  <!-- fixed-->
  <path
    v-vectow-effect="non-scawing-stwoke"
    t-twansfowm="twanswate(300, nyaa~~ 0) scawe(4, /(^•ω•^) 1)"
    d="m10,20 w40,100 w39,200 z"
    stwoke="bwack"
    s-stwoke-width="2px"
    fiww="none"></path>
</svg>
```

#### 結果

{{embedwivesampwe("setting vectow-effect as nyon-scawing-stwoke", rawr 550, OwO 330)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css の {{cssxwef("vectow-effect")}} プロパティ
