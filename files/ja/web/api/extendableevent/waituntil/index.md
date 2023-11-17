---
title: ExtendableEvent.waitUntil()
slug: Web/API/ExtendableEvent/waitUntil
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{APIRef("Service Workers API")}}

**`ExtendableEvent.waitUntil()`** メソッドは、作業が進行中であることをイベントディスパッチャーに通知します。 また、その作業が成功したかどうかを検出するためにも使用できます。 サービスワーカーの場合、 `waitUntil()` は、プロミスが決定するまで作業が進行中であることをブラウザーに通知し、サービスワーカーがその作業を完了させたい場合にサービスワーカーを終了させません。

[サービスワーカー](/ja/docs/Web/API/ServiceWorkerGlobalScope)の {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} イベントは、 `waitUntil()` を使用して、タスクが完了するまでサービスワーカーをインストール中 ({{domxref("ServiceWorkerRegistration.installing", "installing")}}) の段階に保持します。 `waitUntil()` に渡されたプロミスが拒否された場合、インストールは失敗と見なされ、インストール中のサービスワーカーは破棄されます。 これは主に、依存するすべてのコアキャッシュが正常に読み込まれるまで、サービスワーカーがインストール済み (installed) と見なされないようにするために使用します。

[サービスワーカー](/ja/docs/Web/API/ServiceWorkerGlobalScope)の {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} イベントは、`waitUntil()` を使用して、`waitUntil()` に渡されたプロミスが解決するまで、`fetch` や `push` などの機能イベントをバッファリングします。 これにより、サービスワーカーはデータベーススキーマを更新し、古い{{domxref("Cache", "キャッシュ", "", 1)}}を削除する時間を確保できるため、他のイベントは完全にアップグレードされた状態に依存できます。

`waitUntil()` メソッドは、最初はイベントコールバック内で呼び出す必要がありますが、その後、すべてのプロミスが解決するまで、複数回呼び出すことができます。

> **メモ:** 上記の段落で説明した動作は、 Firefox 43 で修正されました（[Firefox バグ 1180274](https://bugzil.la/1180274) を参照）。

## 構文

```js-nolint
waitUntil(promise)
```

### 引数

{{jsxref("Promise")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

サービスワーカーの `install` イベント内で `waitUntil()` を使用します。

```js
addEventListener("install", (event) => {
  const preCache = async () => {
    const cache = await caches.open("static-v1");
    return cache.addAll(["/", "/about/", "/static/styles.css"]);
  };
  event.waitUntil(preCache());
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
