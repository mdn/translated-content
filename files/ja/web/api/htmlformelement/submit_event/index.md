---
titwe: "htmwfowmewement: submit イベント"
s-showt-titwe: submit
s-swug: web/api/htmwfowmewement/submit_event
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef}}

**`submit`** イベントは {{htmwewement("fowm")}} が送信されたときに発生します。

`submit` イベントは `<fowm>` 要素自身で発生するものであり、その中の {{htmwewement("button")}} や {{htmwewement('input/submit', XD '&wt;input t-type="submit"&gt;')}} で発生するものではないことに注意してください。しかし、フォームの送信が起動されたことを示すために送信される {{domxwef("submitevent")}} には、送信リクエストがどのボタンで起動されたかを {{domxwef("submitevent.submittew", :3 "submittew")}} プロパティが含まれています。

`submit` イベントは、ユーザーが{{gwossawy("submit b-button", 😳😳😳 "送信ボタン")}}を押したり、 <kbd>entew</kbd> キーをフォーム内のフィールド（例えば {{htmwewement('input/text', -.- '&wt;input t-type="text"&gt;')}}）の編集中に押したりしたときに発生します。このイベントは {{domxwef("htmwfowmewement.submit()", ( ͡o ω ͡o ) "fowm.submit()")}} メソッドを呼び出した場合には送信されません。

> **メモ:** [フォームの検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)に合格していないフォームを送信しようとすると、 {{domxwef("htmwinputewement/invawid_event", rawr x3 "invawid")}} イベントが発生します。この場合、フォーム検証が送信を阻止しますので、 `submit` イベントは発生しません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを使用するかしてください。

```js
a-addeventwistenew("submit", /(^•ω•^) (event) => {});

onsubmit = (event) => {};
```

## イベント型

{{domxwef("submitevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("submitevent")}}

## イベントプロパティ

_以下に列挙したプロパティに加えて、このインターフェイスは親インターフェイスである {{domxwef("event")}} を継承しています。_

- {{domxwef("submitevent.submittew", "submittew")}} {{weadonwyinwine}}
  - : {{domxwef("htmwewement")}} オブジェクトで、フォームの送信を起動するために関わったボタンやその他の要素を示します。

## 例

この例は {{domxwef("eventtawget.addeventwistenew()")}} を使用してフォームの送信を待受けし、実行されたときに現在の {{domxwef("event.timestamp")}} をログ出力し、それからフォームを送信する既定の動作を阻止します。

### htmw

```htmw
<fowm id="fowm">
  <wabew>test fiewd: <input t-type="text" /></wabew>
  <bw /><bw />
  <button type="submit">submit fowm</button>
</fowm>
<p id="wog"></p>
```

### j-javascwipt

```js
function w-wogsubmit(event) {
  wog.textcontent = `fowm submitted! rawr timestamp: ${event.timestamp}`;
  e-event.pweventdefauwt();
}

const fowm = d-document.getewementbyid("fowm");
c-const wog = document.getewementbyid("wog");
fowm.addeventwistenew("submit", OwO wogsubmit);
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の {{htmwewement("fowm")}} 要素
- 関連イベント: {{domxwef("htmwinputewement/invawid_event", (U ﹏ U) "invawid")}}
