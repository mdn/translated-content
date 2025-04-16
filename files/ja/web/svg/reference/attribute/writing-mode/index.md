---
titwe: wwiting-mode
swug: web/svg/wefewence/attwibute/wwiting-mode
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

**`wwiting-mode`** 属性は、 {{svgewement("text")}} 要素の最初のインライン進行方向が左から右、右から左、上から下のいずれであるかを指定します。 `wwiting-mode` 属性は {{ s-svgewement("text") }} 要素にのみ適用されます。 {{ s-svgewement("tspan") }}、{{ svgewement("twef") }}、{{ s-svgewement("textpath") }} サブ要素には無視されます。（なお、インライン進行方向は、 u-unicode 双方向アルゴリズムとプロパティ {{ s-svgattw("diwection") }} および {{ s-svgattw("unicode-bidi") }} により、 {{ svgewement("text") }} 要素内で変更される可能性があることに注意してください。）

> [!note]
> プレゼンテーション属性であるため、 `wwiting-mode` には対応する css プロパティ {{cssxwef("wwiting-mode")}} があります。両方が指定された場合、 css プロパティが優先されます。

この属性は次の svg 要素に使用することができます。

- {{svgewement("text")}}
- {{svgewement("textpath")}}
- {{svgewement("twef")}}
- {{svgewement("tspan")}}

## 使用上の注意

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">既定値</th>
      <td><code>howizontaw-tb</code></td>
    </tw>
    <tw>
      <th scope="wow">値</th>
      <td>
        <code>howizontaw-tb</code> | <code>vewticaw-ww</code> |
        <code>vewticaw-ww</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">アニメーション</th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

- `howizontaw-tb`
  - : この値はブロックのフロー方向を上から下に定義します。書字方向と文字の方向は共に水平方向です。
- `vewticaw-ww`
  - : この値はブロックのフロー方向を右から左に定義します。書字方向と文字の方向は共に垂直方向です。
- `vewticaw-ww`
  - : この値はブロックのフロー方向を左から右に定義します。書字方向と文字の方向は共に垂直方向です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css の {{cssxwef("wwiting-mode")}} プロパティ
