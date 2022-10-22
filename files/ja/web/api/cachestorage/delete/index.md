---
title: CacheStorage.delete()
slug: Web/API/CacheStorage/delete
---

{{APIRef("Service Workers API")}}

{{domxref("CacheStorage")}} インターフェイスの **`delete()`** メソッドは、`cacheName` に一致する {{domxref("Cache")}} オブジェクトを見つけ、見つかった場合は {{domxref("Cache")}} オブジェクトを削除し、`true` に解決される {{jsxref("Promise")}} を返します。 {{domxref("Cache")}} オブジェクトが見つからない場合、`false` に解決されます。

グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して `CacheStorage` にアクセスできます。

## 構文

```
caches.delete(cacheName).then(function(boolean) {
  // キャッシュが削除されました
});
```

### パラメーター

- `cacheName`
  - : 削除するキャッシュの名前。

### 戻り値

{{domxref("Cache")}} オブジェクトが見つかって削除された場合は `true`、そうでない場合は `false` に解決される {{jsxref("Promise")}}。

## 例

このコードスニペットでは、`activate` イベントを待機してから、新しいサービスワーカーがアクティブになる前に、古い未使用のキャッシュをクリアする {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} ブロックを実行します。 ここに、保持したいキャッシュ名の配列（`cachesToKeep`）があります。 {{domxref("CacheStorage.keys")}} を使用して {{domxref("CacheStorage")}} オブジェクトのキャッシュのキーを返し、各キーをチェックしてその配列内にあるかどうかを確認します。 ない場合は、`delete()` を使用して削除します。

```js
this.addEventListener('activate', function(event) {
  var cachesToKeep = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cachesToKeep.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
```

## 仕様

| 仕様                                                                                                         | 状態                                 | コメント |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#cache-storage-delete', 'CacheStorage: delete')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.CacheStorage.delete")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WindowOrWorkerGlobalScope.caches")}}
