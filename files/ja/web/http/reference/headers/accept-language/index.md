---
title: Accept-Language ヘッダー
short-title: Accept-Language
slug: Web/HTTP/Reference/Headers/Accept-Language
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Accept-Language`** {{Glossary("request header", "リクエストヘッダー")}}は、クライアントがどの言語を理解できるか、どの種類のロケールが推奨されるかを示します。
サーバーは[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)を使用して、提案されたものから一つを選択して使用し、 {{HTTPHeader("Content-Language")}} レスポンスヘッダーを使用してクライアントに選択結果を知らせます。
ブラウザーは、アクティブなユーザーインターフェイス言語に基づいて、このヘッダーに要求される値を設定します。
ユーザーはブラウザー設定を通じて、その他の優先言語を追加で設定することも可能です。

`Accept-Language` ヘッダーには通常、{{domxref("navigator.languages")}} プロパティと同じロケールが、`q` 値（[品質値](/ja/docs/Glossary/Quality_values)）が低い順に列挙されます。Chrome や Safari などの一部のブラウザーは、`Accept-Language` に言語のみの代替タグを追加します。例えば、`navigator.languages` が `["en-US", "zh-CN"]` の場合、`en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7` となります。プライバシー保護（{{Glossary("fingerprinting", "フィンガープリンティング")}}の低減）のため、`Accept-Language` と `navigator.languages` の両方において、ユーザーの環境設定の完全なリストが含まれない場合が考えられます。例えば、Safari（常に）や Chrome のシークレットモードでは、言語が 1 つしか含まれません。

このヘッダーは、サーバーが他の方法（例えば、明示的なユーザーの決定に依存する特定の URL の使用など）で対象コンテンツの言語を判別できない場合のヒントとして機能します。
サーバーは、ユーザーが明示的に選択した言語設定を絶対に上書きしてはなりません。`Accept-Language` ヘッダーの内容は、ユーザーが制御できない場合（例えば旅行中など）がよくあります。
ユーザーは、ユーザーインターフェースの言語とは異なる言語でページを閲覧したい場合もあるでしょう。

サーバーは一致する言語のコンテンツを提供できない場合は、 {{HTTPStatus("406", "406 Not Acceptable")}} エラーコードを送り返すことができますが、これはほとんど実装されていません。
サーバーはこうした場合、`Accept-Language` ヘッダーを多くの場合無視し、より良い使い勝手のために最も適切なリソースで成功レスポンスを返します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>
        はい*
      </td>
    </tr>
  </tbody>
</table>

\* 値は `0-9`、`A-Z`、`a-z`、空白、`*,-.;=` の文字のみです。

## 構文

```http
Accept-Language: <language>
Accept-Language: *

// 品質値構文で重みをつけた複数の型
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## ディレクティブ

- `<language>`
  - : 言語タグです (「ロケール識別子」とも呼ばれることがあります)。これは言語を表す 2 ～ 3 文字の基本言語タグと、任意で追加のサブタグを `'-'` で区切って続けます。追加情報の多くは言語や地域の変化形 (`'en-US'` または `'fr-CA'` など) または使用する文字の種類 (`'sr-Latn'` など) です。正書法の種類 (`'de-DE-1996'`) など他の変化形は、通常このヘッダーのコンテキストでは使用されません。
- `*`（ワイルドカード）
  - : `Accept-Language` フィールドに存在する他の言語と一致しない言語です。
- `;q=` (Q 値の重み)
  - : *重み*と呼ばれる、相対的な{{glossary("Quality values", "品質値")}}を使用して表現される優先順位の順序で配置された値です。
    品質値はデフォルトで `1` です。

## 例

### Accept-Language ヘッダーの使用

以下のリクエストは、`de` ベース言語を使用したドイツ語を優先します。

```http
Accept-Language: de
```

### Accept-Language での品質値の使用

次のリクエストはデンマーク語をより強く示していますが、優先度は低いもののイギリス英語やそれ以外の英語も受け入れます。

```http
Accept-Language: da, en-gb;q=0.8, en;q=0.7
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTTP [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)
- コンテンツネゴシエーションの結果を伴うヘッダー: {{HTTPHeader("Content-Language")}}
- 他の同様のヘッダー: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}
