---
title: ServiceWorker
slug: Web/API/ServiceWorker
l10n:
  sourceCommit: c05df137bd9ea1148b03f2f158b5e5fb77d08beb
---

{{securecontext_header}}{{APIRef("Service Workers API")}}

**`ServiceWorker`** は[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) のインターフェイスで、サービスワーカーへの参照を提供します。複数の{{glossary("browsing context", "閲覧コンテキスト")}}（ページ、ワーカー、など）を、同じサービスワーカーに一意の `ServiceWorker` オブジェクトによって関連付けることができます。

`ServiceWorker` オブジェクトは {{domxref("ServiceWorkerRegistration.active")}} プロパティと、 {{domxref("ServiceWorkerContainer.controller")}} プロパティ — これはアクティブ化されたサービスワーカーであり、ページを制御するものです（サービスワーカーが正常に登録されたら、制御されたページは再読み込みされます） — のから利用可能です。

`ServiceWorker` インターフェイスへは、 `install` や `activate` 、そして `fetch` を含む機能的なイベントといった一連のライフサイクルイベントが送られます。`ServiceWorker` オブジェクトは、ライフサイクルに関係する状態 ({{domxref("ServiceWorker.state")}}) を持っています。

{{InheritanceDiagram}}

## インスタンスプロパティ

_`ServiceWorker` インターフェイスは、親となる {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("ServiceWorker.scriptURL")}} {{ReadOnlyInline}}
  - : {{domxref("ServiceWorkerRegistration")}} の一部と定義されている、`ServiceWorker` のスクリプト URL がシリアライズされたもの返します。この URL はその `ServiceWorker` を登録している文書と同一オリジン上でなければなりません。
- {{domxref("ServiceWorker.state")}} {{ReadOnlyInline}}
  - : この サービスワーカーの状態を返します。`parsed`、`installing`、`installed`、`activating`、`activated`、`redundant` のいずれかの値を返します。

## メソッド

_`ServiceWorker` インターフェイスは、親となる {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("ServiceWorker.postMessage()")}}
  - : メッセージをこのサービスワーカーへ送信します。このメッセージは、あらゆる[構造化クローン可能な](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) JavaScript オブジェクトにすることができます。このメッセージは、サービスワーカーのグローバルスコープの {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} イベントを使用して送信されます。

## イベント

- {{domxref("ServiceWorker.statechange_event", "statechange")}}

  - : {{domxref("ServiceWorker.state")}} が変化したときに発生します。

- {{domxref("ServiceWorker.error_event", "error")}}
  - : `ServiceWorker` オブジェクトの内部でエラーが発生したときに発行されます。

## 例

このコードスニペットは、[サービスワーカーの登録イベントサンプル](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html)（[ライブデモ](https://googlechrome.github.io/samples/service-worker/registration-events/)）に掲載されています。このコードは、{{domxref("ServiceWorker.state")}} の変化を待ち受け、その値を返しています。

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: "./",
    })
    .then((registration) => {
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
        // logState(serviceWorker.state);
        serviceWorker.addEventListener("statechange", (e) => {
          // logState(e.target.state);
        });
      }
    })
    .catch((error) => {
      // 登録時に何か問題が発生した。service-worker.js ファイルが利用できないか、
      // 構文エラーが含まれている可能性がある。
    });
} else {
  // 現在のブラウザーはサービスワーカーに対応していない。
  // おそらく、古すぎるか、安全なコンテキストにない。
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連

- [The Offline Cookbook](https://web.dev/offline-cookbook/)(service workers)
- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service worker basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
