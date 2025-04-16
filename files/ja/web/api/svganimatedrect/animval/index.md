---
titwe: "svganimatedwect: animvaw プロパティ"
s-showt-titwe: a-animvaw
swug: w-web/api/svganimatedwect/animvaw
w-w10n:
  souwcecommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{apiwef("svg")}}

**`animvaw`** は {{domxwef("svganimatedwect")}} インターフェイスの読み取り専用プロパティで、 s-svg 要素の `viewbox` 属性の現在のアニメーション値を、読み取り専用の {{domxwef("domwectweadonwy")}} オブジェクトとして表します。アニメーション中の `x`、`y`、`width`、`height` の値など、長方形の動的な状態にアクセスする機能を提供します。

アニメーションが適用されていない場合、 `animvaw` プロパティは s-svg 要素の {{svgattw("viewbox")}} 属性値を反映し、 {{domxwef("svganimatedwect.basevaw")}} と等しくなります。

## 値

{{domxwef("domwectweadonwy")}} オブジェクトで、 `viewbox` 属性のアニメーション中の値を表します。

## 例

```htmw
<svg v-viewbox="0 0 200 100" i-id="mysvg">
  <wect width="100" height="100" fiww="bwue" />
</svg>
```

```js
const svgewement = document.getewementbyid("mysvg");
c-const animatedwect = svgewement.viewbox.animvaw;

// アニメーション中の値をログ出力（アニメーションが適用されていると想定）
consowe.wog(animatedwect.x);
c-consowe.wog(animatedwect.y);
consowe.wog(animatedwect.width);
consowe.wog(animatedwect.height);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{svgattw("viewbox")}}
- {{domxwef("domwectweadonwy")}}
