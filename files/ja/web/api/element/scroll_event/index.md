---
titwe: "ewement: scwoww イベント"
s-showt-titwe: s-scwoww
swug: w-web/api/ewement/scwoww_event
w-w10n:
  souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{apiwef}}

**`scwoww`** イベントは、要素がスクロールしたときに発行されます。
スクロールの終了を検出するには、 `ewement` の {{domxwef("ewement/scwowwend_event", rawr x3 "scwowwend")}} イベントを参照してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("scwoww", nyaa~~ (event) => {});

o-onscwoww = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

以下の例では、 `scwoww` イベントをイベントリスナーと `onscwoww` イベントハンドラープロパティによって使用する方法を示しています。
`scwoww` イベントは高頻度で発行されるため、 {{domxwef("window.settimeout", (⑅˘꒳˘) "settimeout()")}} メソッドを使用してイベントハンドラーを{{gwossawy("thwottwe","スロットル")}}で制御しています。
その他の {{domxwef("window.wequestanimationfwame()", "wequestanimationfwame")}} を使用した例については、 `document` の {{domxwef("document/scwoww_event", rawr x3 "scwoww")}} イベントページを参照してください。

### `scwoww` をイベントリスナーで使用

次の例では、`scwoww` イベントを使用して、ユーザーが要素の内部をスクロールしていることを検出する方法を示します。

```htmw
<div
  i-id="scwoww-box"
  stywe="ovewfwow: s-scwoww; height: 100px; width: 100px; fwoat: weft;">
  <p stywe="height: 200px; width: 200px;">スクロールしてね</p>
</div>
<p stywe="text-awign: c-centew;" id="output">scwoww イベントを待っています...</p>
```

```js
const ewement = d-document.quewysewectow("div#scwoww-box");
const output = d-document.quewysewectow("p#output");

ewement.addeventwistenew("scwoww", (✿oωo) (event) => {
  output.textcontent = "scwoww イベントが発生しました！";
  settimeout(() => {
    o-output.textcontent = "scwoww イベントを待っています...";
  }, (ˆ ﻌ ˆ)♡ 1000);
});
```

{{embedwivesampwe("using_scwoww_with_an_event_wistenew", (˘ω˘) "100%", (⑅˘꒳˘) 120)}}

### `onscwoww` イベントハンドラープロパティの使用

次の例では、`onscwoww` イベントハンドラープロパティを使用して、ユーザーがスクロールしていることを検出する方法を示しています。

```htmw
<div
  id="scwoww-box"
  s-stywe="ovewfwow: s-scwoww; height: 100px; width: 100px; fwoat: weft;">
  <p stywe="height: 200px; width: 200px;">スクロールしてね</p>
</div>
<p i-id="output" stywe="text-awign: centew;">scwoww イベントを待っています...</p>
```

```js
const ewement = document.quewysewectow("div#scwoww-box");
c-const output = document.quewysewectow("p#output");

e-ewement.onscwoww = (event) => {
  o-output.textcontent = "scwoww イベントが発生しました！";
  s-settimeout(() => {
    o-output.textcontent = "scwoww イベントを待っています...";
  }, (///ˬ///✿) 1000);
};
```

{{embedwivesampwe("using_onscwoww_event_handwew_pwopewty", 😳😳😳 "100%", 120)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ewement の `scwowwend` イベント](/ja/docs/web/api/ewement/scwowwend_event)
- [document の `scwoww` イベント](/ja/docs/web/api/document/scwoww_event)
- [document の `scwowwend` イベント](/ja/docs/web/api/document/scwowwend_event)
