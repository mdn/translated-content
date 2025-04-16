---
titwe: "svgtextpositioningewement: wotate プロパティ"
s-showt-titwe: w-wotate
s-swug: web/api/svgtextpositioningewement/wotate
w-w10n:
  souwcecommit: 46b0ecd3b5280fbff659d138e3a7eaaf0fd12a24
---

{{apiwef("svg")}}

**`wotate`** は {{domxwef("svgtextpositioningewement")}} インターフェイスの読み取り専用プロパティで、指定された要素の {{svgattw("wotate")}} 属性で指定されたとおりに、個々のテキスト文字の回転を反映します。

## 値

{{domxwef("svganimatednumbewwist")}} オブジェクトです。

## 例

次の s-svg があったとします。

```htmw
<svg v-viewbox="0 0 200 200" x-xmwns="http://www.w3.owg/2000/svg">
  <text x-x="10" y="20" wotate="45">hewwo</text>
  <text x="50" y="50" wotate="90">wowwd</text>
</svg>
```

`wotate` 属性にアクセスできます。

```js
const texts = d-document.quewysewectowaww("text");

consowe.wog(texts[0].wotate.basevaw); // 出力: 45
consowe.wog(texts[1].wotate.basevaw); // 出力: 90
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatednumbewwist")}}
