---
title: "Document: hasStorageAccess() メソッド"
short-title: hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
l10n:
  sourceCommit: b97c61b40d8b71532d54fe5af1eab4ca014605ec
---

{{APIRef("Storage Access API")}}

**`hasStorageAccess()`** は {{domxref("Document")}} インターフェイスのメソッドで、この文書が[サードパーティ](/ja/docs/Web/Privacy/Third-party_cookies)の[分離された](/ja/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies)クッキーへのアクセス権を持っているかどうかを示す論理値で解決する {{jsxref("Promise")}} を返します。

詳しくは [ストレージアクセス API](/ja/docs/Web/API/Storage_Access_API) を参照してください。

> [!NOTE]
> このメソッドは {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}} の別名です。{{DOMxRef("Document.hasUnpartitionedCookieAccess()")}} のためにこのメソッドを削除する予定はありません。

## 構文

```js-nolint
hasStorageAccess()
```

### 引数

なし。

### 返値

文書がサードパーティ Cookie にアクセスできるかどうかを示す論理値で解決する {{jsxref("Promise")}} です。サードパーティ Cookie にアクセスできる場合は `true`、できない場合は `false` です。

このメソッドが返す結果は、状況によっては不正確なことがあります。

1. ユーザーがサードパーティクッキーをブロックするブラウザー設定をアクティブにしている場合があります。この場合、サードパーティのクッキーにはまだアクセスできないにもかかわらず、`true` が返されるかもしれません。このような状況を処理するには、クッキーの値が回復不可能になるようなエラーを適切に処理しなければなりません。例えば、個人設定へのアクセスがブロックされていることをユーザーに知らせ、それを使用するには再度サインインするよう促してください。
2. ブラウザーは既定で、サードパーティクッキーへのアクセスをブロックしない場合があります。この場合、サードパーティクッキーがアクセス可能であっても `false` が返されるかもしれませんし、ストレージへのアクセスは（つまり {{domxref("Document.requestStorageAccess()")}} を通して）リクエストされる必要はないでしょう。この課題を回避するには、{{domxref("Document.cookie")}} に問い合わせてクッキーがアクセス可能かどうかを探し、アクセス可能でない場合は {{domxref("Document.requestStorageAccess()")}} を呼び出します。

> [!NOTE]
> プロミスが解決され、関数が元々呼び出されたときにユーザージェスチャーイベントが処理されていた場合、解決ハンドラーはユーザーによるジェスチャーが処理されているかのように実行サレルるので、ユーザーによるアクティブ化が要求される API を呼び出すことができます。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 現在の {{domxref("Document")}} がまだアクティブでない場合に発生します。

## 例

```js
document.hasStorageAccess().then((hasAccess) => {
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

- {{domxref("Document.hasUnpartitionedCookieAccess()")}}, {{domxref("Document.requestStorageAccess()")}}, {{domxref("Document.requestStorageAccessFor()")}}
- [ストレージアクセス API の使用](/ja/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
