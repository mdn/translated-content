---
title: ServiceWorkerRegistration.index
slug: Web/API/ServiceWorkerRegistration/index
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

**`index`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、オフラインコンテンツの索引付けができる {{domxref('ContentIndex')}} インターフェイスへの参照を返します。

## 値

{{domxref('ContentIndex')}} オブジェクトです。

## 例

このプロパティはメインスクリプトと登録済みサービスワーカーのどちらからでもアクセスできます。

ここでは、メインスクリプトからアクセスする例を示します。

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ("index" in registration) {
  // Content Index API functionality
  const contentIndex = registration.index;
}
```

[サービスワーカー](/ja/docs/Web/API/ServiceWorker)からの呼び出し例です。

```js
// service worker script

const contentIndex = self.registration.index;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Content Index API", "コンテンツインデックス API", "", 1)}}
- [An introductory article on the Content Index API](https://web.dev/content-indexing-api/) (英語)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/) (英語)
