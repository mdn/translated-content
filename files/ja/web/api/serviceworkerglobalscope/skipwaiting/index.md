---
title: "ServiceWorkerGlobalScope: skipWaiting() メソッド"
short-title: skipWaiting()
slug: Web/API/ServiceWorkerGlobalScope/skipWaiting
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`skipWaiting()`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのメソッドで、待機しているサービスワーカーがアクティブになるように強制します。

このメソッドは、 {{domxref("Clients.claim()")}} と併用することで、現在のクライアントと他のすべてのアクティブなクライアントの両方で、元となるサービスワーカーの更新が即座に有効になるようにします。

## 構文

```js-nolint
skipWaiting()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} で、新しくインストールされたサービスワーカーを起動しようとした後、`undefined` で解決します。

## 例

`self.skipWaiting()` はサービスワーカーの実行中、いつでも呼び出すことができますが、新しくインストールされたサービスワーカーが `waiting` 状態のままである場合にのみ効果があります。したがって、 `self.skipWaiting()` は {{domxref("InstallEvent")}} ハンドラーの内部から呼び出すことが一般的です。

以下の例では、アクティブなサービスワーカーが既にあるかどうかに関係なく、新しくインストールされたサービスワーカーを `activating` 状態に進行させるようにします。

```js
self.addEventListener("install", (event) => {
  // skipWaiting() が返すプロミスは無視しても安全です。
  self.skipWaiting();

  // event.waitUntil() の内部で、サービスワーカーを
  // インストールするために必要な他のアクションを
  // 実行することも可能です。
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- {{domxref("Clients.claim()")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
