---
title: location.href
slug: Web/API/Location/href
tags:
  - API
  - Location
  - プロパティ
  - リファレンス
browser-compat: api.Location.href
translation_of: Web/API/Location/href
---
{{ApiRef("Location")}}

**`href`** は {{domxref("Location")}} インターフェイスのプロパティで、{{Glossary("stringifier", "文字列化")}}であり、 {{domxref("USVString")}} で URL 全体を表し、 href を更新することができます。

href` の値を設定すると、指定された URL に*移動*します。もし、_redirection_が欲しい場合は、{{domxref("Location/replace", "location.replace()")}}を使用してください。href` プロパティ値の設定との違いは、 `location.replace()` メソッドを使用した場合、指定した URL に移動した後、現在のページはセッション [history](/ja/docs/Web/API/History_API) に保存されないことです - つまりユーザーは戻るボタンで移動することはできません。

## 構文

```js
string = object.href;
object.href = string;
```

## 例

```js
// Lets imagine an <a id="myAnchor" href="https://developer.mozilla.org/ja/Location/href"> element is in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.href; // Returns: 'https://developer.mozilla.org/ja/Location/href'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
