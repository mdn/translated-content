---
title: "CacheStorage: keys() メソッド"
short-title: keys()
slug: Web/API/CacheStorage/keys
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`keys()`** は {{domxref("CacheStorage")}} インターフェイスのメソッドで、{{domxref("CacheStorage")}} オブジェクトによって追跡されるすべての名前付き {{domxref("Cache")}} オブジェクトに対応する文字列をそれが作成された順番で含む配列で解決する {{jsxref("Promise")}} を返します。
このメソッドを使用して、すべての {{domxref("Cache")}} オブジェクトのリストを反復処理します。

`CacheStorage` には、ウィンドウの {{domxref("Window.caches")}} プロパティまたはワーカーの {{domxref("WorkerGlobalScope.caches")}} を介してアクセスできます。

## 構文

```js-nolint
keys()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} で、 {{domxref("CacheStorage")}} オブジェクト内の {{domxref("Cache")}} 名の配列で解決します。

## 例

このコードスニペットでは、{{domxref("ServiceWorkerGlobalScope.activate_event", "activate")}} イベントを待機してから、新しいサービスワーカーがアクティブ化される前に、古い未使用のキャッシュをクリアする {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} ブロックを実行します。 ここに、保持したいキャッシュの名前を含む許可リスト（`cacheAllowlist`）があります。 `keys()` を使用して {{domxref("CacheStorage")}} オブジェクトのキャッシュのキーを返し、各キーをチェックして許可リストにあるかどうかを確認します。 ない場合は、{{domxref("CacheStorage.delete()")}} を使用して削除します。

```js
this.addEventListener("activate", (event) => {
  const cacheAllowlist = ["v2"];

  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheAllowlist.includes(key)) {
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
- {{domxref("Window.caches")}} および {{domxref("WorkerGlobalScope.caches")}}
