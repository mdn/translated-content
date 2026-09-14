---
title: "HTMLAreaElement: origin プロパティ"
short-title: origin
slug: Web/API/HTMLAreaElement/origin
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

**`origin`** は {{domxref("HTMLAreaElement")}} インターフェイスの読み取り専用プロパティで、 `<area>` 要素の `href` のオリジンを Unicode シリアライズしたものが入った文字列を返します。

正確な構造は、URL の種類によって異なります。

- `ftp:`, `http:`, `https:`, `ws:`, `wss:` スキームを使用する URL の場合、{{domxref("HTMLAnchorElement.protocol", "プロトコル")}}に `//` が続き、さらに{{domxref("HTMLAnchorElement.host", "ホスト名")}}がいたｍのです。 `host` の場合と同様、{{domxref("HTMLAnchorElement.port", "ポート番号")}}は、プロトコルの既定値ではない場合にのみ入ります。
- `file:` スキームを使用する URL の場合、値はブラウザーによって異なります。
- `blob:` スキームを使用する URL の場合、 `blob:` に続く URL のオリジンになりますが、その URL が `http:`、`https:`、`file:` のいずれかのスキームを使用している場合に限ります。例えば、`blob:https://mozilla.org` には `https://mozilla.org` になります。

それ以外のすべてのケースでは、文字列 `"null"` が返されます。

詳しくは {{domxref("URL.origin")}} を参照してください。

## 値

文字列です。

## 例

```js
// <area id="myArea" href="https://developer.mozilla.org/ja/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementById("myArea");
area.origin; // 'https://developer.mozilla.org' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
