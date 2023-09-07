---
title: Navigator.clipboard
slug: Web/API/Navigator/clipboard
---

[クリップボード API](/ja/docs/Web/API/Clipboard_API) は **{{domxref("Navigator")}}** インターフェイスに読み取り専用の **`clipboard`** プロパティを追加し、これはクリップボードの内容を読み書きするために使用する {{domxref("Clipboard")}} オブジェクトを返します。

クリップボード API は切り取り、コピー、貼り付け機能をウェブアプリケーションに実装するために使用することができます。

非同期のクリップボード読み書きメソッドを使用するには、ユーザーがウェブサイトやアプリにクリップボードへのアクセスを許可する必要があります。この許可は [Permissions API](/ja/docs/Web/API/Permissions_API) から、 `"clipboard-read"` や `"clipboard-write"` の権限を取得する必要があります。

## 値

システムのクリップボードにアクセスするために使用される {{domxref("Clipboard")}} オブジェクトです。

## 例

以下のコードは、クリップボードの内容を読み取る目的でシステムのクリップボードにアクセスするため、 `navigator.clipboard` を使用します。

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".cliptext").innerText = clipText),
  );
```

このスニペットは、クラスが `"cliptext"` の要素の内容を、クリップボードのテキストコンテンツで置き換えます。おそらくこのコードは現在のクリップボードの内容を表示するブラウザー拡張機能に使用されているもので、定期的または特定のイベントが発生したときに自動的に更新されます。

クリップボードが空であるか、テキストが含まれていない場合、 `"cliptext"` の要素の内容はクリアされます。これは、クリップボードが空かテキストが含まれていない場合、 {{domxref("Clipboard.readText", "readText()")}} が空文字列を返すからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{APIRef("Clipboard API")}}
