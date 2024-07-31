---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
l10n:
  sourceCommit: 6a4893e8a50995d47cf60ea4e081dc5d39a0d9a0
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{SeeCompatTable}}

[「Cookie Store API」](/ja/docs/Web/API/Cookie_Store_API)の **`CookieChangeEvent`** インターフェイスは、Cookie が何か変更された時 {{domxref("CookieStore")}} で発火する {{domxref("CookieStore.change_event", "change")}} イベントのイベント型です。Cookie の変更は、Cookie と種類 (`"changed"` または `"deleted"`) からなります。

`CookieChangeEvent` を発生させる Cookie の変更は、以下のものがあります。

- Cookie が新規作成され、すぐには削除されません。この場合の `type` は `"changed"` です。
- Cookie が新規作成され、すぐに削除されます。この場合の `type` は `"deleted"` です。
- Cookie が削除されます。この場合の `type` は `"deleted"` です。

> [!NOTE]
> 同じ名前・ドメイン・パスの他の Cookie が挿入されることにより置き換えられる Cookie は無視され、変更イベントを発生させません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CookieChangeEvent.CookieChangeEvent", "CookieChangeEvent()")}} {{Experimental_Inline}}
  - : 新しい `CookieChangeEvent` を生成します。

## インスタンスプロパティ

_このインターフェイスは、{{domxref("Event")}} からもプロパティを継承します。_

- {{domxref("CookieChangeEvent.changed")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 1 個以上の変更された Cookie が格納された配列を返します。
- {{domxref("CookieChangeEvent.deleted")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 1 個以上の削除された Cookie が格納された配列を返します。

## 例

この例では、Cookie が設定されると、イベントリスナーがイベントをコンソールに記録します。これは今設定されたばかりの Cookie を表すオブジェクトが格納された {{domxref("CookieChangeEvent.changed","changed")}} プロパティを持つ `CookieChangeEvent` オブジェクトです。

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event);
});

const one_day = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + one_day,
  domain: "example.com",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
