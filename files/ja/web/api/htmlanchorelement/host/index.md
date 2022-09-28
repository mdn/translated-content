---
title: HTMLAnchorElement.host
slug: Web/API/HTMLAnchorElement/host
original_slug: Web/API/HTMLHyperlinkElementUtils/host
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.host`** プロパティは、ホストを含む文字列です。すなわち、*ホスト名*の後に、 URL の*ポート*が空でない場合は、`':'`、および URL の*ポート*が続きます。

## 値

文字列です。

## 例

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/HTMLAnchorElement"
anchor.host == "developer.mozilla.org"

anchor.href = "https://developer.mozilla.org:443/en-US/HTMLAnchorElement"
anchor.host == "developer.mozilla.org"
// The port number is not included because 443 is the scheme's default port

anchor.href = "https://developer.mozilla.org:4097/en-US/HTMLAnchorElement"
anchor.host == "developer.mozilla.org:4097"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAnchorElement")}} インターフェイス
