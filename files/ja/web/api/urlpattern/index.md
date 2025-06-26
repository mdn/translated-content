---
title: URLPattern
slug: Web/API/URLPattern
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`URLPattern`** は {{domxref("URL Pattern API", "URL パターン API", "", "nocode")}} のインターフェイスで、URL または URL の一部をパターンと照合します。パターンには、照合された URL の一部を抽出するキャプチャグループを含めることができます。

パターンの構文の詳細については、 API の概要ページ「{{domxref("URL Pattern API", "URL パターン API", "", "nocode")}}」をご覧ください。

## コンストラクター

- {{domxref("URLPattern.URLPattern", "URLPattern()")}} {{Experimental_Inline}}
  - : 指定されたパターンとベース URL に基づいて、新しい `URLPattern` オブジェクトを返します。

## インスタンスプロパティ

- {{domxref("URLPattern.hash", "hash")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : URL のハッシュ部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.hostname", "hostname")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : URL のホスト名部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.password", "password")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : URL のパスワード部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.pathname", "pathname")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : URL のパス名部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.port", "port")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : URL のポート番号部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.protocol", "protocol")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : URL のプロトコル部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.search", "search")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : URL の検索部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.username","username")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : URL のユーザー名部分と照合するパターンが含まれている文字列。

## インスタンスメソッド

- {{domxref("URLPattern.exec", "exec()")}} {{Experimental_Inline}}
  - : URL と一致する部分を持つオブジェクトを返します。URL が一致しない場合は `null` を返します。
- {{domxref("URLPattern.test", "test()")}} {{Experimental_Inline}}
  - : URL が指定されたパターンと一致する場合は `true`、それ以外の場合は `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `URLPattern` のポリフィルが [GitHub](https://github.com/kenchris/urlpattern-polyfill) にあります。
- URLPattern で使用されるパターン構文は、 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) で使用される構文と似ています。
