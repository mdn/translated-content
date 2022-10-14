---
title: CacheStorage.keys()
slug: Web/API/CacheStorage/keys
---

{{APIRef("Service Workers API")}}

{{domxref("CacheStorage")}} インターフェイスの **`keys()`** メソッドは、{{domxref("CacheStorage")}} オブジェクトによって追跡されるすべての名前付き {{domxref("Cache")}} オブジェクトに対応する文字列をそれが作成された順番で含む配列で解決する {{jsxref("Promise")}} を返します。 このメソッドを使用して、すべての {{domxref("Cache")}} オブジェクトのリストを反復処理します。

グローバルな {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}} プロパティを介して `CacheStorage` にアクセスできます。

## 構文

```
caches.keys().then(function(keyList) {
  // keyList で何かをする
});
```

### パラメーター

なし。

### 戻り値

{{domxref("CacheStorage")}} オブジェクト内の {{domxref("Cache")}} 名の配列で解決する {{jsxref("Promise")}}。

## 例

このコードスニペットでは、{{domxref("ServiceWorkerGlobalScope.onactivate", "activate")}} イベントを待機してから、新しいサービスワーカーがアクティブ化される前に、古い未使用のキャッシュをクリアする {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} ブロックを実行します。 ここに、保持したいキャッシュの名前を含むホワイトリスト（`cacheWhitelist`）があります。 `keys()` を使用して {{domxref("CacheStorage")}} オブジェクトのキャッシュのキーを返し、各キーをチェックしてホワイトリストにあるかどうかを確認します。 ない場合は、{{domxref("CacheStorage.delete()")}} を使用して削除します。

```js
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      });
    })
  );
});
```

## 仕様

| 仕様                                                                                                     | 状態                                 | コメント |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#dom-cachestorage-keys', 'CacheStorage: keys')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.CacheStorage.keys")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WindowOrWorkerGlobalScope.caches")}}
