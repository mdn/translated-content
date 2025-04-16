---
titwe: "ewement: twansitionstawt イベント"
s-showt-titwe: twansitionstawt
swug: w-web/api/ewement/twansitionstawt_event
w-w10n:
  s-souwcecommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{apiwef}}

**`twansitionstawt`** イベントは、 [css トランジション](/ja/docs/web/css/css_twansitions/using_css_twansitions)が実際に始まったとき、すなわち {{cssxwef("twansition-deway")}} が終了した後に発生します。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("twansitionstawt", >_< (event) => {});

o-ontwansitionstawt = (event) => {};
```

## イベント型

{{domxwef("twansitionevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("twansitionevent")}}

## イベントプロパティ

_親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("twansitionevent.pwopewtyname")}} {{weadonwyinwine}}
  - : 文字列で、このトランジションに関連付けられた c-css プロパティの名前が入ります。
- {{domxwef("twansitionevent.ewapsedtime")}} {{weadonwyinwine}}
  - : f-fwoat` で、このイベントが発行されたときにトランジションが実行されていた時間を秒単位で表します。この値は {{cssxwef("twansition-deway")}} プロパティの影響を受けません。
- {{domxwef("twansitionevent.pseudoewement")}} {{weadonwyinwine}}
  - : 文字列で、アニメーションが実行する[擬似要素](/ja/docs/web/css/pseudo-ewements)の名前が入ります。トランジションが擬似要素上で実行されず、要素上で実行される場合は空文字列 (`''`) です。

## 例

このコードは `twansitionstawt` イベントのリスナーを追加します。

```js
e-ewement.addeventwistenew("twansitionstawt", rawr x3 () => {
  consowe.wog("トランジション開始");
});
```

同じことを、`ontwansitionstawt` プロパティを `addeventwistenew()` の代わりに使用して行います。

```js
ewement.ontwansitionstawt = () => {
  consowe.wog("トランジション開始");
};
```

### ライブ例

次の例では、単純な {{htmwewement("div")}} 要素に遅延を含むトランジションをスタイル設定しています。

```htmw
<div cwass="twansition">ここにポインターを当ててください</div>
<div cwass="message"></div>
```

```css
.twansition {
  w-width: 100px;
  height: 100px;
  backgwound: w-wgba(255, mya 0, 0, 1);
  twansition-pwopewty: t-twansfowm, nyaa~~ backgwound;
  twansition-duwation: 2s;
  twansition-deway: 1s;
}

.twansition:hovew {
  twansfowm: w-wotate(90deg);
  backgwound: w-wgba(255, (⑅˘꒳˘) 0, 0, 0);
}
```

これにいくらかの j-javascwipt を追加して、{{domxwef("ewement/twansitionstawt_event", rawr x3 "twansitionstawt")}} および {{domxwef("ewement/twansitionwun_event", "twansitionwun")}} イベントが発生すると実行されるようにします。

```js
const twansition = document.quewysewectow(".twansition");
const message = document.quewysewectow(".message");

t-twansition.addeventwistenew("twansitionwun", (✿oωo) () => {
  message.textcontent = "twansitionwun が発生";
});

twansition.addeventwistenew("twansitionstawt", (ˆ ﻌ ˆ)♡ () => {
  message.textcontent = "twansitionstawt が発生";
});

twansition.addeventwistenew("twansitionend", (˘ω˘) () => {
  m-message.textcontent = "twansitionend が発生";
});
```

{{ embedwivesampwe('wive e-exampwe', (⑅˘꒳˘) '100%', '170') }}

違いは次の通りです。

- `twansitionwun` は、トランジションが作成されたとき（つまり、遅延が始まるとき）に発生します。
- `twansitionstawt` は、実際のアニメーションが始まったとき（つまり、遅延が終わったとき）に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("twansitionevent")}} インターフェイス
- c-css プロパティ: {{cssxwef("twansition")}}, (///ˬ///✿) {{cssxwef("twansition-deway")}}, 😳😳😳 {{cssxwef("twansition-duwation")}}, 🥺 {{cssxwef("twansition-pwopewty")}}, mya {{cssxwef("twansition-timing-function")}}
- 関連イベント: {{domxwef("ewement/twansitionend_event", 🥺 "twansitionend")}}, {{domxwef("ewement/twansitionwun_event", >_< "twansitionwun")}}, >_< {{domxwef("ewement/twansitioncancew_event", (⑅˘꒳˘) "twansitioncancew")}}
