---
title: ExtendableEvent.waitUntil()
slug: Web/API/ExtendableEvent/waitUntil
---

{{APIRef("Service Workers API")}}

**`ExtendableEvent.waitUntil()`** メソッドは、作業が進行中であることをイベントディスパッチャーに通知します。 また、その作業が成功したかどうかを検出するためにも使用できます。 サービスワーカーの場合、`waitUntil()` は、Promise が確定するまで作業が進行中であることをブラウザーに通知し、サービスワーカーがその作業を完了させたい場合にサービスワーカーを終了させません。

{{domxref("ServiceWorkerGlobalScope", "サービスワーカー")}}の `install` イベントは、`waitUntil()` を使用して、タスクが完了するまでサービスワーカーをインストール中（{{domxref("ServiceWorkerRegistration.installing", "installing")}}）の段階に保持します。 `waitUntil()` に渡された Promise が拒否された場合、インストールは失敗と見なされ、インストール中のサービスワーカーは破棄されます。 これは主に、依存するすべてのコアキャッシュが正常に読み込まれるまで、サービスワーカーがインストール済み（installed）と見なされないようにするために使用します。

{{domxref("ServiceWorkerGlobalScope", "サービスワーカー")}}の `activate` イベントは、`waitUntil()` を使用して、`waitUntil()` に渡された Promise が解決するまで、`fetch` や `push` などの機能イベントをバッファーします。 これにより、サービスワーカーはデータベーススキーマを更新し、古い{{domxref("Cache", "キャッシュ")}}を削除する時間を確保できるため、他のイベントは完全にアップグレードされた状態に依存できます。

`waitUntil()` メソッドは、最初はイベントコールバック内で呼び出す必要がありますが、その後、すべての Promise が解決するまで、複数回呼び出すことができます。

> **メモ:** 上記の段落で説明した動作は、Firefox 43 で修正されました（{{bug(1180274)}} を参照）。

## 構文

```
extendableEvent.waitUntil(promise);
```

### パラメーター

{{jsxref("Promise")}}。

### 戻り値

`undefined`。

## 例

サービスワーカーの `install` イベント内で `waitUntil()` を使用する。

```js
addEventListener('install', event => {
  const preCache = async () => {
    const cache = await caches.open('static-v1');
    return cache.addAll([
      '/',
      '/about/',
      '/static/styles.css'
    ]);
  };
  event.waitUntil(preCache());
});
```

## 仕様

| 仕様                                                                                                         | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-extendableevent-waituntil', 'waitUntil()')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ExtendableEvent.waitUntil")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
