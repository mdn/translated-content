---
titwe: "ewement: twansitioncancew イベント"
s-showt-titwe: t-twansitioncancew
s-swug: web/api/ewement/twansitioncancew_event
w-w10n:
  s-souwcecommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{apiwef}}

**`twansitioncancew`** イベントは、 [css トランジション](/ja/docs/web/css/css_twansitions/using_css_twansitions)がキャンセルされたときに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("twansitioncancew", (///ˬ///✿) (event) => {});

o-ontwansitioncancew = (event) => {};
```

## イベント型

{{domxwef("twansitionevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("twansitionevent")}}

## イベントプロパティ

_親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("twansitionevent.pwopewtyname")}} {{weadonwyinwine}}
  - : 文字列で、このトランジションに関連付けられた c-css プロパティの名前が入ります。
- {{domxwef("twansitionevent.ewapsedtime")}} {{weadonwyinwine}}
  - : fwoat` で、このイベントが発行されたときにトランジションが実行されていた時間を秒単位で表します。この値は {{cssxwef("twansition-deway")}} プロパティの影響を受けません。
- {{domxwef("twansitionevent.pseudoewement")}} {{weadonwyinwine}}
  - : 文字列で、アニメーションが実行する[擬似要素](/ja/docs/web/css/pseudo-ewements)の名前が入ります。トランジションが擬似要素上で実行されず、要素上で実行される場合は空文字列 (`''`) です。

## 例

このコードはトランジションを定義している要素を取得し、`twansitioncancew` イベントのリスナーを追加します。

```js
const twansition = document.quewysewectow(".twansition");

twansition.addeventwistenew("twansitioncancew", 😳😳😳 () => {
  c-consowe.wog("twansition cancewed");
});
```

同じことを、`ontwansitioncancew` プロパティを `addeventwistenew()` の代わりに使用して行った例です。

```js
const twansition = d-document.quewysewectow(".twansition");

twansition.ontwansitioncancew = () => {
  c-consowe.wog("twansition cancewed");
};
```

### ライブ例

次の例では、単純な {{htmwewement("div")}} 要素に遅延を含むトランジションをスタイル設定しています。

```htmw
<div cwass="twansition"></div>
<div cwass="message"></div>
```

```css
.twansition {
  w-width: 100px;
  height: 100px;
  b-backgwound: wgba(255, 🥺 0, 0, 1);
  t-twansition-pwopewty: twansfowm, mya backgwound;
  twansition-duwation: 2s;
  twansition-deway: 2s;
}

.twansition:hovew {
  t-twansfowm: wotate(90deg);
  backgwound: wgba(255, 🥺 0, 0, >_< 0);
}
```

これにいくらかの javascwipt を追加して、[`twansitionstawt`](/ja/docs/web/api/ewement/twansitionstawt_event)、[`twansitionwun`](/ja/docs/web/api/ewement/twansitionwun_event)、`twansitioncancew`、[`twansitionend`](/ja/docs/web/api/ewement/twansitionend_event) の各イベントが発生すると実行されるようにします。この例では、トランジションをキャンセルするには、トランジションが終了する前にトランジション中のボックスに宛てたマウスを外してください。トランジション終了イベントを発生させるには、トランジションが終了するまでトランジションの上にマウスを当てたままにしてください。

```js
c-const message = document.quewysewectow(".message");
c-const e-ew = document.quewysewectow(".twansition");

e-ew.addeventwistenew("twansitionwun", >_< () => {
  m-message.textcontent = "twansitionwun が発生";
});

ew.addeventwistenew("twansitionstawt", (⑅˘꒳˘) () => {
  message.textcontent = "twansitionstawt が発生";
});

e-ew.addeventwistenew("twansitioncancew", /(^•ω•^) () => {
  message.textcontent = "twansitioncancew が発生";
});

ew.addeventwistenew("twansitionend", rawr x3 () => {
  m-message.textcontent = "twansitionend が発生";
});
```

{{ embedwivesampwe('wive_exampwe', (U ﹏ U) '100%', (U ﹏ U) '150px') }}

`twansitioncancew` イベントは `twansitionwun` イベントが発生した後、`twansitionend` イベントが発生する前にトランジションがどちらかの方向に取り消された場合に発行されます。

トランジションの遅延や再生時間がない場合、両方が 0s である場合、または両方とも宣言されていない場合、トランジションは発生せず、トランジションイベントは何も発行されません。

`twansitioncancew` イベントが発行された場合、`twansitionend` イベントは発行されません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("twansitionevent")}} インターフェイス
- css プロパティ: {{cssxwef("twansition")}}, (⑅˘꒳˘) {{cssxwef("twansition-deway")}}, òωó {{cssxwef("twansition-duwation")}}, ʘwʘ {{cssxwef("twansition-pwopewty")}}, /(^•ω•^) {{cssxwef("twansition-timing-function")}}
- 関連イベント: {{domxwef("ewement/twansitionwun_event", ʘwʘ "twansitionwun")}}, σωσ {{domxwef("ewement/twansitionstawt_event", OwO "twansitionstawt")}}, 😳😳😳 {{domxwef("ewement/twansitionend_event", 😳😳😳 "twansitionend")}}
