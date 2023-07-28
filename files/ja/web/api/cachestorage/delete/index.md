---
title: CacheStorage.delete()
slug: Web/API/CacheStorage/delete
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("Service Workers API")}}

**`delete()`** は {{domxref("CacheStorage")}} インターフェイスのメソッドで、`cacheName` に一致する {{domxref("Cache")}} オブジェクトを見つけ、見つかった場合は {{domxref("Cache")}} オブジェクトを削除し、 `true` に解決される {{jsxref("Promise")}} を返します。
{{domxref("Cache")}} オブジェクトが見つからない場合は、`false` に解決されます。

`CacheStorage` には、グローバルな {{domxref("caches")}} プロパティを介してアクセスできます。

## 構文

```js-nolint
delete(cacheName)
```

### 引数

- `cacheName`
  - : 削除するキャッシュの名前。

### 返値

{{jsxref("Promise")}} で、 {{domxref("Cache")}} オブジェクトが見つかって削除された場合は `true`、そうでない場合は `false` に解決されます。

## 例

このコードスニペットでは、`activate` イベントを待機してから、新しいサービスワーカーがアクティブになる前に、古い未使用のキャッシュをクリアする {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} ブロックを実行します。 ここに、保持したいキャッシュ名の配列 (`cachesToKeep`) があります。 {{domxref("CacheStorage")}} オブジェクトのキャッシュのキーを {{domxref("CacheStorage.keys")}} を使用して返し、各キーをチェックしてその配列内にあるかどうかを確認します。 ない場合は、 `delete()` を使用して削除します。

```js
this.addEventListener("activate", (event) => {
  const cachesToKeep = ["v2"];

  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cachesToKeep.includes(key)) {
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
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
