---
title: "HTMLAreaElement: host プロパティ"
slug: Web/API/HTMLAreaElement/host
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAreaElement.host`** プロパティは、ホストを含む文字列です。すなわち、*ホスト名*の後に、 URL の*ポート*が空でない場合は、`':'`、および URL の*ポート*が続きます。

## 値

文字列です。

## 例

```js
const area = document.createElement("area");

area.href = "https://developer.mozilla.org/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org";

area.href = "https://developer.mozilla.org:443/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org";
// ポート番号は、 443 がスキームの既定のポートであるため含まれない

area.href = "https://developer.mozilla.org:4097/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org:4097";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
