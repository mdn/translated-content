---
title: ServiceWorkerRegistration.unregister()
slug: Web/API/ServiceWorkerRegistration/unregister
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("Service Workers API")}}

**`unregister()`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのメソッドで、サービスワーカーの登録を解除し、プロミス ({{jsxref("Promise")}}) を返します。 登録が見つからなかった場合、プロミスは `false` に解決されます。 それ以外の場合は、登録解除したかどうかに関係なく、`true` に解決されます（誰かが同じスコープで {{domxref("ServiceWorkerContainer.register()")}} を同時に呼び出した場合は、登録解除されない場合があります）。 サービスワーカーは、登録解除される前に進行中の操作を完了します。

> **メモ:** この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます。

## 構文

```js-nolint
unregister()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} で、サービスワーカーが登録解除されたかどうかを示す論理値で解決します。

## 例

次の簡単な例では、サービスワーカーの例を登録していますが、すぐに録を解除しています。

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/" })
    .then((registration) => {
      // 登録に成功
      console.log("登録に成功しました。");
      registration.unregister().then((boolean) => {
        // boolean = true ならば、登録解除は成功
      });
    })
    .catch(function (error) {
      // 登録に失敗しました
      console.error(`登録に失敗しました: ${error}`);
    });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (英語)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/) (英語)
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
