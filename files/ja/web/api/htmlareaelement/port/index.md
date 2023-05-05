---
title: HTMLAreaElement.port
slug: Web/API/HTMLAreaElement/port
original_slug: Web/API/HTMLHyperlinkElementUtils/port
---

{{ApiRef("HTML DOM")}}

**`HTMLAreaElement.port`** プロパティは、URL のポート番号が入った文字列です。 URL に明示的にポート番号が含まれていない場合は、`''` に設定されます。

## 値

文字列です。

## 例

### エリアのリンクからポート番号を取得

```js
// <area id="myArea" href="https://developer.mozilla.org:443/en-US/docs/HTMLAreaElement"> 要素が文書にあったとします。
const area = document.getElementByID("myArea");
area.port; // '443' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
