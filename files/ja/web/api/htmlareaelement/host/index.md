---
title: HTMLAreaElement.host
slug: Web/API/HTMLAreaElement/host
original_slug: Web/API/HTMLHyperlinkElementUtils/host
---

{{ApiRef("HTML DOM")}}

**`HTMLAreaElement.host`** プロパティは、ホストを含む文字列です。すなわち、*ホスト名*の後に、 URL の*ポート*が空でない場合は、`':'`、および URL の*ポート*が続きます。

## 値

文字列です。

## 例

```js
const area = document.createElement("area");

area.href = "https://developer.mozilla.org/en-US/HTMLAreaElement"
area.host == "developer.mozilla.org"

area.href = "https://developer.mozilla.org:443/en-US/HTMLAreaElement"
area.host == "developer.mozilla.org"
// ポート番号は、 443 がスキームの既定のポートであるため含まれない

area.href = "https://developer.mozilla.org:4097/en-US/HTMLAreaElement"
area.host == "developer.mozilla.org:4097"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
