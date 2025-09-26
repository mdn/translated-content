---
title: "HTMLAnchorElement: origin プロパティ"
short-title: origin
slug: Web/API/HTMLAnchorElement/origin
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
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
// <a id="myAnchor" href="https://developer.mozilla.org/ja/HTMLAnchorElement"> 要素が文書にあったとします
const anchor = document.getElementById("myAnchor");
anchor.origin; // 'https://developer.mozilla.org' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
