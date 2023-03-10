---
title: CacheStorage.has()
slug: Web/API/CacheStorage/has
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("Service Workers API")}}

**`has()`** は {{domxref("CacheStorage")}} インターフェイスのメソッドで、{{domxref("Cache")}} オブジェクトが `cacheName` と一致する場合に `true` に解決される {{jsxref("Promise")}} を返します。

`CacheStorage` には、グローバルな {{domxref("caches")}} プロパティを介してアクセスできます。

## 構文

```js-nolint
has(cacheName)
```

### 引数

- `cacheName`
  - : 文字列で、 {{domxref("CacheStorage")}} で探している {{domxref("Cache")}} オブジェクトの名前を表します。

### 返値

{{jsxref("Promise")}} で、キャッシュが存在する場合は `true`、存在しない場合は `false` に解決されます。

## 例

次の例では、最初に 'v1' というキャッシュが存在するかどうかを確認します。 その場合、アセットのリストを追加します。 そうでない場合、何らかのキャッシュセットアップ関数を実行します。

```js
caches
  .has("v1")
  .then((hasCache) => {
    if (!hasCache) {
      someCacheSetupFunction();
    } else {
      caches.open("v1").then((cache) => cache.addAll(myAssets));
    }
  })
  .catch(() => {
    // ここで例外を処理します。
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
