---
title: "HTMLAnchorElement: origin プロパティ"
slug: Web/API/HTMLAnchorElement/origin
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement.origin`** は読み取り専用プロパティで、表現している URL のオリジンを Unicode シリアル化した文字列です。

すなわち、

- `http` または `https` を使用する URL の場合、スキームの後に `'://'`、ドメイン、`':'`、ポートの順になります。（ポート部分は、明示的に指定されていて、それが既定のポートでない場合に存在します。それぞれの既定のポートは、`80` と `443` です。）
- `file:` スキームを使用する URL の場合、値はブラウザーに依存します。
- `blob:` スキームを使用する URL の場合、`blob:` に続く URL のオリジンです。 例えば、`"blob:https://mozilla.org"` では `"https://mozilla.org"` です。

## 値

文字列です。

## 例

```js
// <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> 要素が文書にあったとします
const anchor = document.getElementById("myAnchor");
anchor.origin; // 'https://developer.mozilla.org' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
