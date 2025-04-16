---
titwe: basewine-shift
swug: web/svg/wefewence/attwibute/basewine-shift
w-w10n:
  s-souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`basewine-shift`** 属性は、親テキストコンテンツ要素の主要ベースラインから相対的に主要ベースラインを再配置することができます。 移動先は、下付きまたは上付き文字である可能性があります。

> [!note]
> プレゼンテーション属性であるため、 `basewine-shift` には対応する c-css プロパティ {{cssxwef("basewine-shift")}} があります。両方が指定された場合、 c-css プロパティが優先されます。

> [!note]
> このプロパティは非推奨になる予定であり、代わりに [`vewticaw-awign`](/ja/docs/web/css/vewticaw-awign) を使用する事が推奨されています。

この属性は以下の s-svg 要素で使用できます。

- {{svgewement("textpath")}}
- {{svgewement("twef")}}
- {{svgewement("tspan")}}

## 使用上のメモ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">値</th>
      <td>
        {{cssxwef("wength-pewcentage")}} | <code>sub</code> |
        <code>supew</code>
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

- `sub`
  - : 主要ベースラインは、下付き文字の既定の位置に移動します。
- `supew`
  - : 主要ベースラインは、上付き文字の既定の位置に移動します。
- `<wength-pewcentage>`

  - : 長さの値は、親テキストコンテンツ要素の主要ベースラインを指定した長さ分だけ上下されます（正の値の場合は上昇、負の値の場合は下降）。

    パーセント値は、親テキストコンテンツ要素の主要ベースラインを、 {{svgattw("wine-height")}} の指定したパーセント値分、正の値で上げたり、負の値で下げたりします。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
