---
title: location.username
slug: Web/API/Location/username
tags:
  - API
  - Location
  - プロパティ
  - リファレンス
browser-compat: api.Location.username
translation_of: Web/API/Location/username
---
{{deprecated_header}}

**`username`** は {{domxref("Location")}} インターフェイスのプロパティで、ドメイン名の前に指定されたユーザー名を表す {{domxref("USVString")}} です。

## 構文

```js
string = object.username;
object.username = string;
```

## 例

```js
// Let's <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/ja/docs/Location.username"> be in the document
var anchor = document.getElementByID("myAnchor");
var result = anchor.username; // Returns:'anonymous'
```

## ブラウザーの互換性

{{Compat}}
