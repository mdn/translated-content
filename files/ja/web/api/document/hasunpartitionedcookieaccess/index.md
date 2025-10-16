---
title: "Document: hasUnpartitionedCookieAccess() メソッド"
short-title: hasUnpartitionedCookieAccess()
slug: Web/API/Document/hasUnpartitionedCookieAccess
l10n:
  sourceCommit: b97c61b40d8b71532d54fe5af1eab4ca014605ec
---

{{APIRef("Storage Access API")}}

**`hasUnpartitionedCookieAccess()`** は {{domxref("Document")}} インターフェイスのメソッドで、論理値を返すプロミス ({{jsxref("Promise")}}) を返します。これはこの文書が[サードパーティ](/ja/docs/Web/HTTP/Guides/Cookies#third-party_cookies)の[分離されていない](/ja/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies)クッキーへのアクセス権があるかどうかを示します。

このメソッドは[ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API) の一部です。

このメソッドは {{DOMxRef("Document.hasStorageAccess()")}} の新しい名前です。

## 構文

```js-nolint
hasUnpartitionedCookieAccess()
```

### 引数

なし。

### 返値

文書がサードパーティクッキーにアクセスできるかどうかを示す論理値で解決する {{jsxref("Promise")}} です。サードパーティクッキーにアクセスできる場合は `true`、できない場合は `false` です。

詳しくは {{DOMxRef("Document.hasStorageAccess()")}} を参照してください。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 現在の {{domxref("Document")}} がまだアクティブでない場合に発生します。

## 例

```js
document.hasUnpartitionedCookieAccess().then((hasAccess) => {
  if (hasAccess) {
    // ストレージへのアクセスはすでに許可されています。
    console.log("クッキーへのアクセスが許可されました");
  } else {
    // ストレージへのアクセスはまだ許可されていません。
    // requestStorageAccess() を呼び出す必要があります。
    console.log("クッキーへのアクセスが拒否されました");
  }
});
```

> [!NOTE]
> より完全な例は、[ストレージアクセス API の使用](/ja/docs/Web/API/Storage_Access_API/Using)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.hasStorageAccess()")}}, {{domxref("Document.requestStorageAccess()")}}, {{domxref("Document.requestStorageAccessFor()")}}
- [ストレージアクセス API の使用](/ja/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
