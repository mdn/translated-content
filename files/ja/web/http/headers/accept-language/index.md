---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
---

{{HTTPSidebar}}

HTTP の **`Accept-Language`** リクエストヘッダーは、クライアントがどの言語を理解できるか、どの種類のロケールが推奨されるかを示します。 (言語というのは、英語のような自然言語を意味し、プログラミング言語ではありません。) [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)を使用して、サーバーは提案されたものから一つを選択して使用し、 {{HTTPHeader("Content-Language")}} レスポンスヘッダーを使用してクライアントに選択結果を知らせます。ブラウザーはユーザーインターフェイスの言語に従って、このヘッダーに適切な値を設定し、ユーザーはこれを変更することができますが、稀です (そしてフィンガープリントにつながるとして難色を示されます)。

このヘッダーはヒントであり、サーバーが言語を判別するための方法として、明示的なユーザーの選択によって制御する特定の URL など、他のものがない場合に使用されます。サーバーは明示的な決定を上書きしないことを推奨します。 `Accept-Language` の中身はユーザーが制御できないことが良くあります（旅行中で外国のインターネットカフェを使用している場合など）。ユーザーはユーザーインターフェースのロケール以外の言語によるページを訪問したがっているかもしれません。

サーバーが一致する言語を何も提供できない場合は、理論的には {{HTTPStatus("406")}} (Not Acceptable) エラーコードを送り返すことができます。しかし、ユーザーの使い勝手をより良くするため、これはほとんど行われておらず、このような場合には一般に `Accept-Language` ヘッダーを無視するという方法が採られます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>
        はい。値が <code>0-9</code>, <code>A-Z</code>, <code>a-z</code>, space
        or <code>*,-.;=</code> のみであるという追加の制約あり。
      </td>
    </tr>
  </tbody>
</table>

## 構文

```
Accept-Language: <language>
Accept-Language: *

// {{glossary("quality values", "重み値")}}の構文によって重みづけされた複数の種別
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## ディレクティブ

- `<language>`
  - : 言語タグです (「ロケール識別子」とも呼ばれることがあります)。これは言語を表す 2 ～ 3 文字の基本言語タグと、任意で追加のサブタグを `'-'` で区切って続けます。追加情報の多くは言語や地域の変化形 (`'en-US'` または `'fr-CA'` など) または使用する文字の種類 (`'sr-Latn'` など) です。正書法の種類 (`'de-DE-1996'`) など他の変化形は、通常このヘッダーのコンテキストでは使用されません。
- `*`
  - : 任意の言語です。 `'*'` はワイルドカードとして使用されます。
- `;q=` (Q 値の重み)
  - : *重み*と呼ばれる、相対的な{{glossary("Quality values", "品質値")}}を使用して表現される優先順位の順序で配置された値です。

## 例

```
Accept-Language: de

Accept-Language: de-CH

Accept-Language: en-US,en;q=0.5
```

## 仕様書

| 仕様書                                      | 題名                                                          |
| ------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Accept-Language", "5.3.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |
| [BCP 47](https://tools.ietf.org/html/bcp47) | Tags for the Identification of Language                       |

## ブラウザーの互換性

{{Compat("http.headers.Accept-Language")}}

## 関連情報

- HTTP [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)
- コンテンツネゴシエーションの結果を伴うヘッダー: {{HTTPHeader("Content-Language")}}
- 他の同様のヘッダー: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept")}}
