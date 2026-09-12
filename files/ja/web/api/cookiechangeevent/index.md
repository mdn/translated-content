---
title: CookieChangeEvent
slug: Web/API/CookieChangeEvent
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}

**`CookieChangeEvent`** は{{domxref("Cookie Store API", "クッキーストアー API", "", "nocode")}} のインターフェイスで、Cookie が作成されたり削除されたりしたときに {{domxref("CookieStore")}} で発行される {{domxref("CookieStore.change_event", "change")}} イベントのイベント型です。

> [!NOTE]
> 同じ名前・ドメイン・パスの他の Cookie が挿入されることにより置き換えられる Cookie は無視され、変更イベントは発生しません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CookieChangeEvent.CookieChangeEvent", "CookieChangeEvent()")}}
  - : 新しい `CookieChangeEvent` を生成します。

## インスタンスプロパティ

_このインターフェイスには {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("CookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : 新しく作成されたすべてのクッキーを一覧にした配列です。なお、有効期限が過去の日付に設定されて作成されたクッキーは、直ちに削除されるため、この一覧には含まれません。
- {{domxref("CookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : 有効期限が切れたか、明示的に削除されたために除去されたすべてのクッキーを一覧表示する配列です。なお、これには有効期限が過去の日付に設定されていたクッキーも含まれます。

## インスタンスメソッド

_このインターフェイスには {{domxref("Event")}} から継承したメソッドもあります。_

## 例

この例では、Cookie が設定されると、イベントリスナーがイベントをコンソールに記録します。これは今設定されたばかりの Cookie を表すオブジェクトが格納された {{domxref("CookieChangeEvent.changed","changed")}} プロパティを持つ `CookieChangeEvent` オブジェクトです。

```js
cookieStore.addEventListener("change", (event) => {
  console.log(event);
});

const oneDay = 24 * 60 * 60 * 1000;
cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + oneDay,
  domain: "example.com",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
