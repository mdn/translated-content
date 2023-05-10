---
title: HTMLAreaElement.password
slug: Web/API/HTMLAreaElement/password
original_slug: Web/API/HTMLHyperlinkElementUtils/password
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.password`** プロパティは、ドメイン名の前で指定されたパスワードが入った文字列です。

先に [`username`](/ja/docs/Web/API/HTMLAreaElement/username) プロパティを設定せずに設定しようとすると、暗黙のうちに失敗します。

## 値

文字列です。

## 例

```js
// <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementByID("myArea");
area.password; // 'flabada' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
