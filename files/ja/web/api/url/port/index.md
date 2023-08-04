---
title: "URL: port プロパティ"
short-title: port
slug: Web/API/URL/port
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{ApiRef("URL API")}}

**`port`** は {{domxref("URL")}} インターフェイスのプロパティで、この URL のポート番号の入った文字列です。

> **メモ:** [`URL()`](/ja/docs/Web/API/URL/URL) コンストラクターに渡された入力文字列が明示的なポート番号を含んでいないか（例えば `https://localhost`）、入力文字列のプロトコル部分に対応する既定のポート番号を含んでいる場合（例えば `https://localhost:443`）、コンストラクターが返す [`URL`](/ja/docs/Web/API/URL) オブジェクトの port プロパティの値は空文字列 (`''`) になります。

{{AvailableInWorkers}}

## 値

文字列です。

## 例

```js
const url = new URL("https://example.com:80/svn/Repos/");
console.log(url.port); // '80' と出力
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
