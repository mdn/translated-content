---
title: "URL: port プロパティ"
short-title: port
slug: Web/API/URL/port
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

**`port`** は {{domxref("URL")}} インターフェイスのプロパティで、この URL のポート番号の入った文字列です。

> [!NOTE]
> [`URL()`](/ja/docs/Web/API/URL/URL) コンストラクターに渡された入力文字列が明示的なポート番号を含んでいないか（例えば `https://localhost`）、入力文字列のプロトコル部分に対応する既定のポート番号を含んでいる場合（例えば `https://localhost:443`）、コンストラクターが返す [`URL`](/ja/docs/Web/API/URL) オブジェクトの port プロパティの値は空文字列 (`''`) になります。

## 値

文字列です。

## 例

```js
// https プロトコルで既定ではないポート番号
new URL("https://example.com:5443/svn/Repos/").port; // '5443'
// http プロトコルで既定ではないポート番号
new URL("http://example.com:8080/svn/Repos/").port; // '8080'
// https プロトコルで既定のポート番号
new URL("https://example.com:443/svn/Repos/").port; // ''（空文字列）
// http プロトコルで既定のポート番号
new URL("http://example.com:80/svn/Repos/").port; // ''（空文字列）
// https プロトコルで明示的なポート番号なし
new URL("https://example.com/svn/Repos/").port; // ''（空文字列）
// http プロトコルで明示的なポート番号なし
new URL("https://example.com/svn/Repos/").port; // ''（空文字列）
// ftp プロトコルで既定ではないポート番号
new URL("ftp://example.com:221/svn/Repos/").port; // '221'
// ftp プロトコルで既定のポート番号
new URL("ftp://example.com:21/svn/Repos/").port; // ''（空文字列）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
