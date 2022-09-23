---
title: HTMLAreaElement.username
slug: Web/API/HTMLAreaElement/username
original_slug: Web/API/HTMLHyperlinkElementUtils/username
---

{{ApiRef("HTML DOM")}}

**`HTMLAreaElement.username`** プロパティは、ドメイン名の前で指定されたユーザー名の入った文字列です。

## 値

文字列です。

## 例

### エリアのリンクからユーザー名を取得

```js
// <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementByID("myArea");
area.username; // 'anonymous' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
