---
title: Document.xmlVersion
slug: Web/API/Document/xmlVersion
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - DOM リファレンス
  - プロパティ
  - リファレンス
  - 非推奨
browser-compat: api.Document.xmlVersion
translation_of: Web/API/Document/xmlVersion
---
{{APIRef("DOM")}}{{deprecated_header}}

XML 宣言（例えば `<?xml version="1.0"?>`）で指定されたバージョン番号を返し、宣言がなければ "1.0" を返します。

この属性は常に 1.0 を返していたので、本当は有用ではなく、 DOM Level 4 で削除されました。同様に、 Firefox 10 はもう実装していません。以前の主な使用法は、文書が HTML ではなく XML として表示するかどうかを検出するためでした。これは、（文書が XML ではない HTML モードの場合）小文字で要素を作成し、すべて大文字に変換されるかどうかを確認することによって検出することができます。

```js
if (document.createElement("foo").tagName == "FOO") {
  /* 文書は XML ではない */
}
```

## 仕様書

この機能は、現在のどの仕様にも含まれていません。標準化される予定もありません。

## ブラウザーの互換性

{{Compat}}
