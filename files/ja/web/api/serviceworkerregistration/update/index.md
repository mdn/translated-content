---
title: "ServiceWorkerRegistration: update() メソッド"
short-title: update()
slug: Web/API/ServiceWorkerRegistration/update
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`update()`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのメソッドで、サービスワーカーの更新を試みます。 ワーカーのスクリプト URL を読み取り、新しいワーカーが現在のワーカーとバイト単位で同一でない場合は、新しいワーカーをインストールします。 前回の読み取りが 24 時間以上前であった場合、ワーカーの読み取り時にブラウザーのキャッシュをバイパスします。

## 構文

```js-nolint
update()
```

### 引数

なし。

### 返値

{{domxref("ServiceWorkerRegistration")}} オブジェクトで解決する {{jsxref("Promise")}} です。

## 例

次の簡単な例では、サービスワーカーの例を登録し、次にイベントハンドラーをボタンに追加して、必要に応じてサービスワーカーを明示的に更新できるようにします。

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/" })
    .then((registration) => {
      // 登録成功
      console.log("登録に成功しました。");
      button.onclick = () => {
        registration.update();
      };
    })
    .catch((error) => {
      // 登録に失敗
      console.log(`登録に失敗しました: ${error}`);
    });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) <sup>(英語)</sup>
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
