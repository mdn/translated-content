---
title: "HTMLAreaElement: hostname プロパティ"
short-title: hostname
slug: Web/API/HTMLAreaElement/hostname
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

**`hostname`** は {{domxref("HTMLAreaElement")}} インターフェイスのプロパティで、この `<area>` 要素の URL の{{glossary("domain name", "ドメイン名")}}または {{glossary("IP address", "IP アドレス")}}のどちらかを含む文字列です。この URL にホスト名がない場合、このプロパティには空文字列 (`""`) が入ります。 IPv4 および IPv6 アドレスは、先頭の 0 が削除されるなど正規化され、ドメイン名は [IDN](https://ja.wikipedia.org/wiki/国際化ドメイン名) に変換されます。

詳しくは {{domxref("URL.hostname")}} を参照してください。

## 値

`area` 要素に関連付けられた URL のドメインを含む文字列です。
セッターとゲッターの両方として使用することができます。

## 例

```html
<textarea id="log" rows="4" cols="100"></textarea>
<map name="infographic">
  <area
    id="area1"
    shape="rect"
    coords="184,6,253,27"
    href="/ja/docs/HTMLAreaElement"
    target="_blank"
    alt="Mozilla" />
  <area
    id="area2"
    shape="circle"
    coords="130,136,60"
    href="https://coolexample.com/"
    target="_blank"
    alt="MDN" />
</map>
```

```js
// 要素が文書内にあったとします
const area1 = document.getElementById("area1");
const area2 = document.getElementById("area2");

const log = document.getElementById("log");
log.textContent = `area1 hostname: ${area1.hostname} \n`; // 'developer.mozilla.org'
log.textContent += `area2 hostname: ${area2.hostname}`; // 'coolexample.com'
```

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
