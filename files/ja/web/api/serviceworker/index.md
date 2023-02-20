---
title: ServiceWorker
slug: Web/API/ServiceWorker
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

[ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API) のインターフェイスである `ServiceWorker` は service worker に関するレファレンスを提供しています。様々なブラウザー環境（例えばページ、worker など）が同一の service worker に関連付けることができて、一意な `ServiceWorker` オブジェクトからアクセスできます。

`ServiceWorker` オブジェクトはプロバティ{{domxref("ServiceWorkerRegistration.active")}}と{{domxref("ServiceWorkerContainer.controller")}}プロパティ — これは起動された service worker でページを管理しています (その service worker が正常に登録されて管理されるページがリロードされています) — の中で利用可能です。

`ServiceWorker` インターフェイスへは、 `install` や `activate` 、そして `fetch` を含む機能的なイベントといったライフサイクルイベントのセットが送られます。`ServiceWorker` オブジェクトは、ライフサイクルに関係する {{domxref("ServiceWorker.state")}} (状態) を持っています。

## プロパティ

_`ServiceWorker`_ インターフェイスは親となる{{domxref("Worker")}}からプロパティを継承します。

- {{domxref("ServiceWorker.scriptURL")}} {{readonlyinline}}
  - : {{domxref("ServiceWorkerRegistration")}}の一部と定義されたスクリプト URL にシリアライズされた `ServiceWorker` を返します。この URL はその `ServiceWorker` を登録している document と同一オリジン上でなければなりません。
- {{domxref("ServiceWorker.state")}} {{readonlyinline}}
  - : service worker の状態を返します。`installing`, `installed`, `activating`, `activated`, `redundant` のいずれかの値を返します。

### イベントハンドラー

- {{domxref("ServiceWorker.onstatechange")}} {{readonlyinline}}
  - : `statechange` イベントが発火した際に呼び出される{{domxref("EventListener")}} プロパティです。このイベントは {{domxref("ServiceWorker.state")}} が変更された際に発火されます。

## メソッド

_`ServiceWorker` インターフェイスは親である{{domxref("Worker")}}インターフェイスからメソッドを継承していますが、{{domxref("Worker.terminate")}} は例外です。このメソッドは service worker からアクセスされるべきではありません。_

## 例

このコードスニペットは [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/))の一部です。{{domxref("ServiceWorker.state")}} のあらゆる変更をリッスンし、その値を返します。

```js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {
        scope: './'
    }).then(function (registration) {
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
            // logState(serviceWorker.state);
            serviceWorker.addEventListener('statechange', function (e) {
                // logState(e.target.state);
            });
        }
    }).catch (function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
    });
} else {
    // The current browser doesn't support service workers.
}
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.ServiceWorker")}}

## 関連

- [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook)
- [Service Workers を使用する](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise", "Promises")}}
- [web workers を使用する](/ja/docs/Web/Guide/Performance/Using_web_workers)
