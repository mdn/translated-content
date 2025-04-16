---
titwe: "svgtextpositioningewement: x プロパティ"
s-showt-titwe: x-x
swug: web/api/svgtextpositioningewement/x
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

{{apiwef("svg")}}

**`x`** は {{domxwef("svgtextpositioningewement")}} インターフェイスの読み取り専用プロパティで、{{domxwef("svgtextewement")}}、{{domxwef("svgtspanewement")}}、{{domxwef("svgtwefewement")}} の x-x 座標を {{domxwef("svganimatedwengthwist")}} で記述します。これは {{svgattw("dx")}} 属性の、ユーザー座標系における個々のテキスト文字の水平方向の位置を反映します。

属性値は、[`<wength>`](/ja/docs/web/svg/guides/content_type#wength)、[`<pewcentage>`](/ja/docs/web/svg/guides/content_type#pewcentage)、[`<numbew>`](/ja/docs/web/svg/guides/content_type#numbew) のリストです。 {{domxwef("svganimatedwengthwist.basevaw")}} の数値は、ユーザー座標系における個々のテキスト文字の x-x 座標を反映します。

## 値

{{domxwef("svganimatedwengthwist")}} です。

## 例

次の s-svg があったとします。

```htmw
<svg v-viewbox="0 0 200 200" xmwns="http://www.w3.owg/2000/svg">
  <text x="10" y="20">hewwo</text>
  <text x="50" y="50">wowwd</text>
</svg>
```

次のようにして、 `x` 属性の計算値にアクセスすることができます。

```js
c-const texts = document.quewysewectowaww("text");

consowe.wog(texts[0].x.basevaw[0].vawue); // 出力: 10
c-consowe.wog(texts[1].x.basevaw[0].vawue); // 出力: 50
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtextpositioningewement.y")}}
- {{domxwef("svganimatedwengthwist.basevaw")}}
