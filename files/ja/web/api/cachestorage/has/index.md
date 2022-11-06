---
title: CacheStorage.has()
slug: Web/API/CacheStorage/has
---

{{APIRef("Service Workers API")}}

{{domxref("CacheStorage")}} インターフェイスの **`has()`** メソッドは、{{domxref("Cache")}} オブジェクトが `cacheName` と一致する場合に `true` に解決される {{jsxref("Promise")}} を返します。

グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して `CacheStorage` にアクセスできます。

## 構文

```
caches.has(cacheName).then(function(boolean) {
  // true: キャッシュが存在します！
});
```

### パラメーター

- `cacheName`
  - : {{domxref("CacheStorage")}} で探している {{domxref("Cache")}} オブジェクトの名前を表す {{domxref("DOMString")}}。

### 戻り値

キャッシュが存在する場合は `true`、存在しない場合は `false` に解決される {{jsxref("Promise")}}。

## 例

次の例では、最初に `'v1'` というキャッシュが存在するかどうかを確認します。 その場合、アセットのリストを追加します。 そうでない場合、何らかのキャッシュセットアップ関数を実行します。

```js
caches.has('v1').then(function(hasCache) {
  if (!hasCache) {
    someCacheSetupfunction();
  } else {
    caches.open('v1').then(function(cache) {
      return cache.addAll(myAssets);
    });
  }
}).catch(function() {
  // ここで例外を処理します。
});
```

## 仕様

| 仕様                                                                                                 | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#cache-storage-has', 'CacheStorage: has')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.CacheStorage.has")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WindowOrWorkerGlobalScope.caches")}}
