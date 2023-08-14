---
title: "ServiceWorker: statechange イベント"
slug: Web/API/ServiceWorker/statechange_event
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Service Workers API")}}

`statechange` イベントは、{{domxref("ServiceWorker.state")}} が変化するたびに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

このコードスニペットは、[サービスワーカーの登録イベントサンプル](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html)（[ライブデモ](https://googlechrome.github.io/samples/service-worker/registration-events/)）に掲載されています。このコードは、{{domxref("ServiceWorker.state")}} の変化を待ち受け、その値を返しています。

```js
let serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector("#kind").textContent = "installing";
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector("#kind").textContent = "waiting";
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector("#kind").textContent = "active";
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener("statechange", (e) => {
    logState(e.target.state);
  });
}
```

`statechange` が発行されたとき、サービスワーカーの参照先が変わっていることがあることに注意してください。例えば次のようになります。

```js
navigator.serviceWorker.register("/sw.js").then((swr) => {
  swr.installing.state = "installing";
  swr.installing.onstatechange = () => {
    swr.installing = null;
    // この時点で、swr.waiting または swr.active が true になっているかもしれません。
    // これは、statechange イベントがキューに入れられ、その間に基盤のワーカーが
    // 待機状態になり、使用可能であればすぐに起動されるからです。
  };
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
