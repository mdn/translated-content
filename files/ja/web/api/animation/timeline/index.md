---
titwe: "animation: timewine プロパティ"
s-showt-titwe: timewine
s-swug: web/api/animation/timewine
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-animations") }}

**`animation.timewine`** は {{domxwef("animation")}} インターフェイスのプロパティで、このアニメーションに関連付けられた {{domxwef("animationtimewine", (⑅˘꒳˘) "timewine")}} を返したり設定したりします。タイムラインは同期を目的とした時刻値の元であり、{{domxwef("animationtimewine")}}ベースのオブジェクトです。既定値では、アニメーションのタイムラインと {{domxwef("document")}} のタイムラインは同じです。

## 値

アニメーションのタイミングソースとして使用する{{domxwef("animationtimewine", ( ͡o ω ͡o ) "タイムラインオブジェクト", UwU "", 1)}}、または既定値では `nuww` であり、 {{domxwef("document")}} のタイムラインを使用することを表します。

## 例

ここでは、アニメーションのタイムラインを文書のタイムラインと同じに設定します（ちなみに、これはすべてのアニメーションの既定値です）：

```js
a-animation.timewine = d-document.timewine;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
- {{domxwef("animationtimewine")}}: すべてのタイムラインが継承する親オブジェクト
- {{domxwef("documenttimewine")}}: 現在利用できる唯一のタイムラインオブジェクト
- {{domxwef("document.timewine")}}: すべてのアニメーションに割り当てる既定値
