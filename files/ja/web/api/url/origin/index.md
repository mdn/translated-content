---
title: "URL: origin プロパティ"
short-title: origin
slug: Web/API/URL/origin
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("URL API")}}

 **`origin`** は {{domxref("URL")}} インターフェイスの読み取り専用プロパティで、表現された URL のオリジンを Unicode シリアル化したものが入った文字列を返します。

正確な構造は、次のように URL の種類によって異なります。

- `http` または `https` の URL の場合、スキームの後に `'://'`、ドメイン、`':'`、ポート番号が順に続きます（ポート番号は、明示的に指定されており、それが既定のポート、それぞれ`80` と `443` でないときに現れます）。
- `file:` URL の場合、値はブラウザーに依存します。
- `blob:` URL の場合、`blob:` に続く URL のオリジンが使用されます。 例えば、`"blob:https://mozilla.org"` は `"https://mozilla.org"` として返されます。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
const url = new URL("blob:https://mozilla.org:443/");
console.log(url.origin); // 'https://mozilla.org' とログ出力

const url = new URL("http://localhost:80/");
console.log(url.origin); // 'http://localhost' とログ出力

const url = new URL("https://mozilla.org:8080/");
console.log(url.origin); // 'https://mozilla.org:8080' とログ出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
