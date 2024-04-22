---
title: "URL: host プロパティ"
short-title: host
slug: Web/API/URL/host
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ApiRef("URL API")}}

**`host`** は {{domxref("URL")}} インターフェイスのプロパティで、ホスト、すなわち {{domxref("URL.hostname", "hostname")}} の入った文字列です。URL の {{glossary("port", "ポート番号")}} が空でない場合は、`':'`、および URL の {{domxref("URL.port", "port")}} が続きます。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
let url = new URL("https://developer.mozilla.org/ja/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"

url = new URL("https://developer.mozilla.org:443/ja/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org"
// 443 がスキームの既定のポートであるため、ポート番号は含まれません

url = new URL("https://developer.mozilla.org:4097/ja/docs/Web/API/URL/host");
console.log(url.host); // "developer.mozilla.org:4097"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
