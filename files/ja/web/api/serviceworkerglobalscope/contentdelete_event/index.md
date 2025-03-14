---
title: "ServiceWorkerGlobalScope: contentdelete イベント"
short-title: contentdelete
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`contentdelete`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、ユーザーエージェントを通じて索引付けされたコンテンツから項目が削除されたときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("contentdelete", (event) => {});

oncontentdelete = (event) => {};
```

## イベント型

{{domxref("ContentIndexEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("ContentIndexEvent")}}

## イベントプロパティ

_以下に挙げたプロパティに加えて、このインターフェイスは親である {{domxref("Event")}} のプロパティを継承しています。_

- {{domxref("ContentIndexEvent.id", "id")}} {{ReadOnlyInline}}
  - : 削除されたコンテンツのインデックスを `id` で識別する文字列。

## 例

以下の例では、`contentdelete` イベントハンドラーを使用して、削除されたインデックス項目に関連するキャッシュされたコンテンツを削除しています。

```js
self.addEventListener("contentdelete", (event) => {
  const deletion = caches
    .open("cache-name")
    .then((cache) =>
      Promise.all([
        cache.delete(`/icon/${event.id}`),
        cache.delete(`/content/${event.id}`),
      ]),
    );
  event.waitUntil(deletion);
});
```

また、 `oncontentdelete` プロパティを使用して、イベントハンドラーを設定することもできます。

```js
self.oncontentdelete = (event) => {
  // ...
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [コンテンツ索引 API](/ja/docs/Web/API/Content_Index_API)
- [An introductory article on the Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
