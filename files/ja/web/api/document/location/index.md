---
title: "Document: location プロパティ"
slug: Web/API/Document/location
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`Document.location`** は読み取り専用のプロパティで、この文書の URL に関する情報を持った {{domxref("Location")}} オブジェクトを返します。これはその URL を変更したり他の URL を読み込んだりするためのメソッドも提供しています。

`Document.location` は*読み取り専用*の `Location` オブジェクトですが、文字列を代入することができます。つまり、 document.location が文字列であるかのように扱うことができます。 `document.location = 'http://www.example.com'` は `document.location.href = 'http://www.example.com'` の別名です。他の文字列を代入すると、ブラウザーは代入されたウェブサイトを読み込みます。

URL を文字列として受け取るだけであれば、読み取り専用の {{domxref("document.URL")}} プロパティも利用することができます。

現在の文書が閲覧コンテキスト内にない場合、返値は `null` となります。

## 値

{{domxref("Location")}} オブジェクトです。

## 例

```js
console.log(document.location);
// Location オブジェクトをコンソールへ表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 返値のインターフェイスである {{domxref("Location")}}
- 同様の情報で{{Glossary("browsing context", "閲覧コンテキスト")}}に結びつけられている {{domxref("Window.location")}}
