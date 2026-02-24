---
title: URLPattern
slug: Web/API/URLPattern
l10n:
  sourceCommit: aafad07220c63481570e43cc66a5d9fb7b985ffc
---

{{APIRef("URL Pattern API")}} {{AvailableInWorkers}}

**`URLPattern`** は {{domxref("URL Pattern API", "URL パターン API", "", "nocode")}} のインターフェイスで、URL または URL の一部をパターンと照合します。パターンには、照合された URL の一部を抽出するキャプチャグループを含めることができます。

パターンの構文の詳細については、 API の概要ページ「{{domxref("URL Pattern API", "URL パターン API", "", "nocode")}}」をご覧ください。

## コンストラクター

- {{domxref("URLPattern.URLPattern", "URLPattern()")}}
  - : 指定されたパターンとベース URL に基づいて、新しい `URLPattern` オブジェクトを返します。

## インスタンスプロパティ

- {{domxref("URLPattern.hash", "hash")}} {{ReadOnlyInline}}
  - : URL のハッシュ部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.hasRegExpGroups", "hasRegExpGroups")}} {{ReadOnlyInline}}
  - : 論理値で、この `URLPattern` の成分のいずれかが[正規表現キャプチャグループ](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)を含んでいるかどうかを示します。
- {{domxref("URLPattern.hostname", "hostname")}} {{ReadOnlyInline}}
  - : URL のホスト名部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.password", "password")}} {{ReadOnlyInline}}
  - : URL のパスワード部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.pathname", "pathname")}} {{ReadOnlyInline}}
  - : URL のパス名部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.port", "port")}} {{ReadOnlyInline}}
  - : URL のポート番号部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.protocol", "protocol")}} {{ReadOnlyInline}}
  - : URL のプロトコル部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.search", "search")}} {{ReadOnlyInline}}
  - : URL の検索部分と照合するパターンが含まれている文字列。
- {{domxref("URLPattern.username","username")}} {{ReadOnlyInline}}
  - : URL のユーザー名部分と照合するパターンが含まれている文字列。

## インスタンスメソッド

- {{domxref("URLPattern.exec", "exec()")}}
  - : URL と一致する部分を持つオブジェクトを返します。URL が一致しない場合は `null` を返します。
- {{domxref("URLPattern.test", "test()")}}
  - : URL が指定されたパターンと一致する場合は `true`、それ以外の場合は `false` を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `URLPattern` のポリフィルが [GitHub](https://github.com/kenchris/urlpattern-polyfill) にあります。
- URLPattern で使用されるパターン構文は、 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) で使用される構文と似ています。
