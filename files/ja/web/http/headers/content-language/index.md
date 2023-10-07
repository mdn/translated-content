---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
---

{{HTTPSidebar}}

**`Content-Language`** は {{Glossary("entity header", "エンティティヘッダー")}} で、ユーザが自分の好みの言語に応じて区別できるように、オーディエンス向けの言語を記述するために使用されます。

たとえば、"`Content-Language: de-DE`" が設定されている場合、その文書はドイツ語のスピーカーを対象としてます (ただし、文書がドイツ語で記述されていることを示すわけではありません。 たとえば、ドイツ語スピーカーのための語学コースの一部としての英語が書かれているかもしれません。文書が記述されている言語を示す場合は、代わりに [`lang` 属性](/ja/docs/Web/HTML/Global_attributes/lang)を使用します)。

`Content-Language` が指定されていない場合、既定ではコンテンツがすべての言語のオーディエンスを対象としています。`Content-Language` ヘッダーをテキスト形式の文書やさまざまな種類のメディアに適用するだけでなく、複数の言語タグを使用することもできます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Entity header", "エンティティヘッダー")}}
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
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>はい</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>
        はい、値を <code>0-9</code>, <code>A-Z</code>, <code>a-z</code>, 空白、
        <code>*,-.;=</code> のみに限定するという追加の制限があります。
      </td>
    </tr>
  </tbody>
</table>

## 構文

```
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## ディレクティブ

- `language-tag`
  - : 複数の言語タグはカンマで区切られています。各言語タグはハイフン文字 ("`-`", `%x2D`) で区切られた、大文字小文字を区別しない 1 つ以上のサブタグのシーケンスです。ほとんどの場合、言語タグは関連する言語の広いファミリを識別するプライマリ言語サブタグ (たとえば、"`en`" = 英語) で構成され、オプションとして、その言語の範囲を絞り込むか狭める一連のサブタグ ("`en-CA`" = カナダで伝達される英語の種類) が続きます。

> **メモ:** 言語タグは、使用される[言語コード](https://en.wikipedia.org/wiki/Language_code)の [ISO 639](https://en.wikipedia.org/wiki/ISO_639) 規格 ([ISO 639-1 のコードリスト](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)であることが多い) に依存する、[RFC 5646](https://tools.ietf.org/html/rfc5646) でフォーマットが定義されています。

## 例

### 文書が書かれている言語を示す

グローバル [`lang`](/ja/docs/Web/HTML/Global_attributes/lang) 属性は、HTML 要素全体またはその一部の言語を示すために HTML 要素で使用されます。

```html
<html lang="de"></html>
```

文書の言語を記述するために、このような meta 要素を以下のように使用**しないで**ください。

```html example-bad
<!-- /!\ This is bad practice -->
<meta http-equiv="content-language" content="de" />
```

### リソースのターゲットオーディエンスを示す

`Content-Language` ヘッダーは、**ページの対象読者**を指定するために使用され、複数の言語であることを示すことができます。

```
Content-Language: de, en
```

## 仕様書

| 仕様書                                         | 題名                                                          |
| ---------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Content-Language", "3.1.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat("http.headers.Content-Language")}}

## 関連情報

- {{HTTPHeader("Accept-Language")}}
- [HTTP headers, meta elements and language information](https://www.w3.org/International/questions/qa-http-and-lang.en)
- [HTML の `lang` 属性](/ja/docs/Web/HTML/Global_attributes/lang)
