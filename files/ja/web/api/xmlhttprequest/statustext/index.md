---
title: "XMLHttpRequest: statusText プロパティ"
short-title: statusText
slug: Web/API/XMLHttpRequest/statusText
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("XMLHttpRequest API")}}

**`XMLHttpRequest.statusText`** は読み取り専用のプロパティで、文字列で HTTP サーバーから返されるステータスメッセージを示します。 [`XMLHTTPRequest.status`](/ja/docs/Web/API/XMLHttpRequest/status) が数値のステータスコードを示すのとは異なり、このプロパティはレスポンスステータスの*テキスト*を、 "OK" や "Not Found" のように示します。リクエストの [`readyState`](/ja/docs/Web/API/XMLHttpRequest/readyState) が `UNSENT` または `OPENED` の状態であった場合、 `statusText` の値は空文字列になります。

サーバーが明示的にステータスのテキストを指定しなかった場合、 `statusText` は既定値 "OK" と見なされます。

> [!NOTE]
> HTTP/2 コネクションのレスポンスでは、常に空文字列になります。これは HTTP/2 がステータステキストに対応していないからです。

## 値

文字列です。

## 例

```js
const xhr = new XMLHttpRequest();
console.log("0 UNSENT", xhr.statusText);

xhr.open("GET", "/server", true);
console.log("1 OPENED", xhr.statusText);

xhr.onprogress = () => {
  console.log("3 LOADING", xhr.statusText);
};

xhr.onload = () => {
  console.log("4 DONE", xhr.statusText);
};

xhr.send(null);

/**
 * 以下のように出力されます。
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP ステータス](/ja/docs/Web/HTTP/Status)の一覧
- [HTTP](/ja/docs/Web/HTTP)
- [WHATWG Fetch Living Standard](https://fetch.spec.whatwg.org/#concept-response-status-message)
