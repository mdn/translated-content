---
title: Document.hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
---

{{APIRef}}{{seecompattable}}

{{domxref("Document")}} インターフェイスの **`hasStorageAccess()`** メソッドは、文書がファーストパーティのストレージへのアクセス権を持っているかどうかを真偽値で解決する {{jsxref("Promise")}} を返します。

詳しくは [Storage Access API](/ja/docs/Web/API/Storage_Access_API) を参照してください。

## 構文

```
var promise = document.hasStorageAccess();
```

### 引数

なし。

### 返値

文書がファーストパーティのストレージへのアクセス権を持っているかどうかを真偽値で解決する {{jsxref("Promise")}} です。

Promise が解決され、関数が最初に呼び出されたときにユーザージェスチャーイベントを処理していた場合、解決ハンドラーはユーザージェスチャーが処理されているかのように実行されるため、ユーザーによるアクティベーションを必要とする API を呼び出すことができます。

## 例

```js
document.hasStorageAccess().then((hasAccess) => {
  if (hasAccess) {
    // ストレージへのアクセスはすでに許可されています。
  } else {
    // ストレージへのアクセスはまだ許可されていません。
    // requestStorageAccess() を呼び出す必要があります。
  }
});
```

## 仕様書

この API はまだ提案段階にあります。 — 標準化プロセスはまだ始まっていません。現在のところ、この API の詳細の仕様書は、アップルのブログ投稿の [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/)、および [WHATWG HTML issue 3338 — Proposal: Storage Access API](https://github.com/whatwg/html/issues/3338) で見ることができます。

## ブラウザーの互換性

{{Compat}}

## 関連情報

[Storage Access API](/ja/docs/Web/API/Storage_Access_API)
