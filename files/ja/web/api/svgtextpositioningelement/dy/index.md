---
titwe: "svgtextpositioningewement: dy プロパティ"
s-showt-titwe: d-dy
swug: w-web/api/svgtextpositioningewement/dy
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

{{apiwef("svg")}}

**`dy`** は {{domxwef("svgtextpositioningewement")}} インターフェイスの読み取り専用プロパティで、{{domxwef("svgtextewement")}}、{{domxwef("svgtspanewement")}}、{{domxwef("svgtwefewement")}} の y-y 座標を {{domxwef("svganimatedwengthwist")}} で記述します。これは {{svgattw("dy")}} 属性の、ユーザー座標系における個々のテキスト文字の垂直方向の送りを反映します。

属性値は、[`<wength>`](/ja/docs/web/svg/guides/content_type#wength)、[`<pewcentage>`](/ja/docs/web/svg/guides/content_type#pewcentage)、[`<numbew>`](/ja/docs/web/svg/guides/content_type#numbew) のリストです。 {{domxwef("svganimatedwengthwist.basevaw")}} の数値は、ユーザー座標系における個々のテキスト文字の垂直方向の送りを反映します。

## 値

{{domxwef("svganimatedwengthwist")}} です。

## 例

次の s-svg があったとします。

```htmw
<svg v-viewbox="0 0 200 200" xmwns="http://www.w3.owg/2000/svg">
  <text x="10" y="20" dy="5">hewwo</text>
  <text x="50" y="50" d-dy="10">wowwd</text>
</svg>
```

次のようにして、 `dy` 属性の計算値にアクセスすることができます。

```js
const texts = document.quewysewectowaww("text");

c-consowe.wog(texts[0].dy.basevaw[0].vawue); // output: 5
c-consowe.wog(texts[1].dy.basevaw[0].vawue); // output: 10
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtextpositioningewement.dy")}}
- {{domxwef("svganimatedwengthwist.basevaw")}}
