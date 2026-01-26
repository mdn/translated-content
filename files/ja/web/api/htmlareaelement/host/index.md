---
title: "HTMLAreaElement: host プロパティ"
short-title: host
slug: Web/API/HTMLAreaElement/host
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

**`host`** は {{domxref("HTMLAreaElement")}} インターフェイスのプロパティで、ホスト名、すなわち {{domxref("HTMLAreaElement.hostname", "hostname")}} が入った文字列で、 URL の{{glossary("port", "ポート番号")}}が空でない場合は、 `":"` に続いて URL の{{domxref("HTMLAreaElement.port", "ポート番号")}}が続きます。この URL に `hostname` がない場合は、このプロパティには空文字列 (`""`) が入ります。

詳しくは {{domxref("URL.host")}} を参照してください。

## 値

文字列です。

## 例

```js
const area = document.createElement("area");

area.href = "https://developer.mozilla.org/ja/HTMLAreaElement";
area.host === "developer.mozilla.org";

area.href = "https://developer.mozilla.org:443/ja/HTMLAreaElement";
area.host === "developer.mozilla.org";
// ポート番号は、 443 がスキームの既定のポートであるため含まれない

area.href = "https://developer.mozilla.org:4097/ja/HTMLAreaElement";
area.host === "developer.mozilla.org:4097";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
