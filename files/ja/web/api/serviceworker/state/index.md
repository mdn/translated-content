---
title: ServiceWorker.state
slug: Web/API/ServiceWorker/state
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Service Workers API")}}

**`state`** は {{domxref("ServiceWorker")}} インターフェイスの読み取り専用プロパティで、サービスワーカーの現在の状態を表す文字列を返します。読み込みプロパティである は service worker の現在の状態を表す文字列を返します。これは、`parsed`、`installing`、`installed`、`activating`、`activated`、`redundant` の何れかです。

## 値

文字列で、以下の値のうちのいずれかを取ります。

- `"parsed"`
  - : サービスワーカーがダウンロードされ、実行可能であることが確認された後の初期状態です。
    サービスワーカーがこの状態に更新されることはないので、{{DOMxRef("ServiceWorker.statechange_event")}} の値になることはありません。
- `"installing"`
  - : この状態のサービスワーカーは、インストール中のワーカーとみなされます。この状態の間、{{DOMxRef("ExtendableEvent.waitUntil()")}} は `install` イベントハンドラーの中で呼び出され、渡されたプロミスが正常に解決されるまでインストール中のワーカーを延長することができます。これは主に、コアキャッシュがすべて投入されるまでサービスワーカーがアクティブにならないようにするために使用します。
- `"installed"`
  - : この状態のサービスワーカーは、待機中のワーカーとみなされます。
- `"activating"`
  - : この状態のサービスワーカーは、アクティブワーカーとみなされます。この状態の間、{{DOMxRef("ExtendableEvent.waitUntil()")}} は `onactivate` イベントハンドラーの中で呼び出され、渡されたプロミスが正常に解決されるまでアクティブワーカーを延長させることができます。状態がアクティブになるまで、機能イベントは配信されません。
- `"activated"`
  - : この状態のサービスワーカーは、機能イベントを処理する準備が整ったアクティブワーカーとみなされます。
- `"redundant"`
  - : 新しいサービスワーカーが現在のサービスワーカーに置き換わるか、または現在のサービスワーカーがインストールに失敗して破棄される場合です。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
