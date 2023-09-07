---
title: "HTMLAreaElement: origin プロパティ"
slug: Web/API/HTMLAreaElement/origin
l10n:
  sourceCommit: e241a72ec49dc748d4970dde8e947b29f3e9fd2f
---

{{APIRef("HTML DOM")}}

**`HTMLAreaElement.origin`** は読み取り専用プロパティで、表現している URL のオリジンを Unicode シリアル化した文字列です。

すなわち、

- `http` または `https` を使用する URL の場合、スキームの後に `'://'`、ドメイン、`':'`、ポートの順になります。（ポート部分は、明示的に指定されていて、それが既定のポートでない場合に存在します。それぞれの既定のポートは、`80` と `443` です。）
- `file:` スキームを使用する URL の場合、値はブラウザーに依存します。
- `blob:` スキームを使用する URL の場合、`blob:` に続く URL のオリジンです。 例えば、`"blob:https://mozilla.org"` では `"https://mozilla.org"` です。

## 値

文字列です。

## 例

```js
// <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementById("myArea");
area.origin; // 'https://developer.mozilla.org' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
