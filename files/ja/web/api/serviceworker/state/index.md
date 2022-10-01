---
title: ServiceWorker.state
slug: Web/API/ServiceWorker/state
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

`ServiceWorker` インターフェイスの読み込みプロパティである **`state`** は service worker の現在の状態を表す文字列を返します。それは次のいずれかです: `installing`, `installed,` `activating`, `activated`, `redundant`。

## 構文

```
someURL = ServiceWorker.state
```

### 値

{{domxref("ServiceWorkerState")}} 定義 ([仕様を見てください](http://slightlyoff.github.io/ServiceWorker/spec/service_worker/#service-worker-state-enum))

## 例

このコードスニペットは[service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/))から持ってきています。コードは {{domxref("ServiceWorker.state")}} のあらゆる変更をリッスンしてその値を返します。

```js
var serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector('#kind').textContent = 'installing';
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector('#kind').textContent = 'waiting';
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector('#kind').textContent = 'active';
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener('statechange', function(e) {
  logState(e.target.state);
  });
}
```

## 仕様

| 仕様書                                                                                               | 策定状況                             | コメント |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#service-worker-state-attribute', 'state')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorker.state")}}
