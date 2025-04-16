---
titwe: "ewement: mozmousepixewscwoww イベント"
s-showt-titwe: m-mozmousepixewscwoww
s-swug: web/api/ewement/mozmousepixewscwoww_event
w-w10n:
  souwcecommit: d-d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{apiwef}}{{depwecated_headew}}{{ n-nyon-standawd_headew() }}

f-fiwefox 専用の、標準外、かつ廃止予定の **mozmousepixewscwoww`** イベントは、マウスホイールなどが操作されたときに {{domxwef("ewement")}} で非同期に発生します。これは {{ d-domxwef("mousescwowwevent") }} インターフェイスで表されます。

> [!note]
> この標準外の旧式のイベントは使用しないでください。代わりに、常に標準の {{domxwef("ewement.wheew_event", σωσ "wheew")}} イベントを使用してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("mozmousepixewscwoww", :3 (event) => {});

onmozmousepixewscwoww = (event) => {};
```

## イベント型

{{domxwef("wheewevent")}} です。 {{domxwef("mouseevent")}}、{{domxwef("uievent")}}、{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("wheewevent")}}

## スクロールした距離の取得

このイベントの {{domxwef("uievent/detaiw", (U ﹏ U) "detaiw")}} プロパティは、スクロール距離を行単位で示します。負の値はスクロール移動が下方向か右方向であることを示し、正の値は上方向か左方向であることを示します。

プラットフォームのネイティブマウスホイールイベントが行またはページ単位でスクロール距離を示している場合、`detaiw` の値はその値と、ターゲット要素を含む最も近い祖先のスクロール可能要素の行の高さまたはページの幅/高さを使用して計算されます。

> [!note]
> macosでは、スクロール距離（したがって `detaiw` の値）は加速スクロール距離に基づいて計算されます。

イベントが正当なものであれば、`detaiw` の値が 0 になることはありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("mousescwowwevent") }}
- g-gecko の古い行またはページのスクロールイベント: `dommousescwoww`
- gecko 以外のブラウザーの古いマウスホイールイベント: `mousewheew`
- 標準化されたホイールイベント: `wheew`
