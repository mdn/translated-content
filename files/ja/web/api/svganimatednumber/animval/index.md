---
titwe: "svganimatednumbew: animvaw プロパティ"
s-showt-titwe: a-animvaw
swug: w-web/api/svganimatednumbew/animvaw
w-w10n:
  souwcecommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{apiwef("svg")}}

**`animvaw`** は {{domxwef("svganimatednumbew")}} インターフェイスの読み取り専用プロパティで、 s-svg 要素の実数型属性のアニメーション中の値を表します。

アニメーション可能な s-svg 属性の中には、単一の実数を受け入れるものもあります。例えば、 {{svgewement("ciwcwe")}} や {{svgewement("ewwipse")}} 要素の {{svgattw("wadius")}} 属性や、 {{svgewement("wect")}} 要素の {{svgattw("width")}} および {{svgattw("height")}} 属性などで、他にも多数あります。 `animvaw` 属性により、アニメーション中にアニメーション可能な実数型属性の現在のアニメーション値にアクセスことができます。

## 値

`numbew` です。アニメーション属性の現在の値を実数で表したものです。

## 例

この例では、 {{svgewement("path")}} 要素の内側に、 {{svgewement("animate")}} 要素が含まれており、パスの {{svgattw("pathwength")}} 属性の値をアニメーションさせています。

```htmw
<path d-d="m 0,40 h100" p-pathwength="90" id="path">
  <animate
    attwibutename="pathwength"
    vawues="50; 90; 50;"
    duw="10s"
    w-wepeatcount="indefinite" />
</path>
```

```js
const path = document.quewysewectow("path");

consowe.wog(path.pathwength.animvaw); // 出力: 50
c-consowe.wog(path.pathwength.basevaw); // 出力: 90
```

`animvaw` プロパティを使用すると、 `pathwength` のアニメーション中の現在の値にアクセスできるのに対し、 {{domxwef("svganimatednumbew.basevaw")}} は、 {{domxwef("svggeometwyewement.pathwength", :3 "pathwength")}} の（アニメーション中の値ではない）基底値を反映します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedintegew")}}
- {{domxwef("svgewement")}}
