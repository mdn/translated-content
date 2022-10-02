---
title: location.password
slug: Web/API/Location/password
---

{{deprecated_header}}

**`password`** は {{domxref("Location")}} インターフェイスのプロパティで、 {{domxref("USVString")}} でドメイン名の前に指定されたパスワードが入ります。

先に [`username`](/ja/docs/Web/API/Location/username) プロパティを設定しなかった場合は、暗黙に失敗します。

## 構文

```js
string = object.password;
object.password = string;
```

## 例

```js
// Let's <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/ja/docs/location.username"> be in the document
var anchor = document.getElementByID("myAnchor");
var result = anchor.password; // Returns:'flabada'
```

## ブラウザーの互換性

{{Compat}}
