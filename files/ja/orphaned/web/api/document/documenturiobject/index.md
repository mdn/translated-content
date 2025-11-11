---
title: Document.documentURIObject
slug: orphaned/Web/API/Document/documentURIObject
---

{{ApiRef("DOM")}}{{Non-standard_header}}

**`Document.documentURIObject`** プロパティは読み取り専用で、 [document](/ja/docs/Web/API/Document) の URI を表す `nsIURI` オブジェクトを返します。

このプロパティは、拡張機能のコードなどの (UniversalXPConnect) 特権を持つスクリプトでのみ機能します。ウェブコンテンツではこのプロパティは特別な意味を持たず、他のカスタムプロパティと同様に扱うことしかできません。

特権コードでは、([`XPCNativeWrapper`](/ja/XPCNativeWrapper) の `wrappedJSObject` などの) ラップされていないコンテンツオブジェクトに対してこのプロパティを取得または設定しないように注意しなければなりません。詳しくは [Firefox バグ 324464](https://bugzil.la/324464) のコメントを参照して下さい。

## 構文

```
var uri = document.documentURIObject;
```

## 例

```js
// Firefox の現在のタブの URI スキームが "http" かどうか調べる
// このコードは browser.xul のコンテキストで実行されるものとする
var uriObj = content.document.documentURIObject;
var uriPort = uriObj.port;

if (uriObj.schemeIs('http')) {
  ...
}
```

## 仕様書

どの仕様にも属しません。

## ブラウザーの互換性

{{Compat}}
