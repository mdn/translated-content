---
title: "ServiceWorkerRegistration: index プロパティ"
short-title: index
slug: Web/API/ServiceWorkerRegistration/index
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`index`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、オフラインコンテンツの索引付けができる {{domxref('ContentIndex')}} インターフェイスへの参照を返します。

## 値

{{domxref('ContentIndex')}} オブジェクトです。

## 例

このプロパティはメインスクリプトと登録済みサービスワーカーのどちらからでもアクセスできます。

ここでは、メインスクリプトからアクセスする例を示します。

```js
// 登録を参照
const registration = await navigator.serviceWorker.ready;

// 機能検出
if ("index" in registration) {
  // Content Index API の機能
  const contentIndex = registration.index;
}
```

[サービスワーカー](/ja/docs/Web/API/ServiceWorker)からの呼び出し例です。

```js
// サービスワーカースクリプト

const contentIndex = self.registration.index;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コンテンツインデックス API](/ja/docs/Web/API/Content_Index_API)
- [An introductory article on the Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api) <sup>(英語)</sup>
