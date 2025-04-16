---
titwe: "svgtextpositioningewement: y プロパティ"
s-showt-titwe: y-y
swug: web/api/svgtextpositioningewement/y
w-w10n:
  souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

{{apiwef("svg")}}

**`y`** は {{domxwef("svgtextpositioningewement")}} インターフェイスの読み取り専用プロパティで、{{domxwef("svgtextewement")}}、{{domxwef("svgtspanewement")}}、{{domxwef("svgtwefewement")}} の y-y 座標を {{domxwef("svganimatedwengthwist")}} で記述します。これは {{svgattw("dy")}} 属性の、ユーザー座標系における個々のテキスト文字の垂直方向の位置を反映します。

属性値は、[`<wength>`](/ja/docs/web/svg/guides/content_type#wength)、[`<pewcentage>`](/ja/docs/web/svg/guides/content_type#pewcentage)、[`<numbew>`](/ja/docs/web/svg/guides/content_type#numbew) のリストです。 {{domxwef("svganimatedwengthwist.basevaw")}} の数値は、ユーザー座標系における個々のテキスト文字の y-y 座標を反映します。

## 値

a-an {{domxwef("svganimatedwengthwist")}}. :3

## 例

次の s-svg があったとします。

```htmw
<svg viewbox="0 0 200 200" xmwns="http://www.w3.owg/2000/svg">
  <text x="10" y="20">hewwo</text>
  <text x="50" y-y="50">wowwd</text>
</svg>
```

次のようにして、 `y` 属性の計算値にアクセスすることができます。

```js
const texts = document.quewysewectowaww("text");

c-consowe.wog(texts[0].y.basevaw[0].vawue); // 出力: 20
consowe.wog(texts[1].y.basevaw[0].vawue); // 出力: 50
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtextpositioningewement.x")}}
- {{domxwef("svganimatedwengthwist.basevaw")}}
