---
title: If-Modified-Since ヘッダー
short-title: If-Modified-Since
slug: Web/HTTP/Reference/Headers/If-Modified-Since
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`If-Modified-Since`** {{Glossary("request header", "リクエストヘッダー")}}は、リクエストを[条件付き](/ja/docs/Web/HTTP/Guides/Conditional_requests)にします。
サーバーは最後にリソースが変更された時刻が、`If-Modified-Since` の日時よりも後の場合にのみ、リクエストされたリソースを {{HTTPStatus("200")}} ステータスと共に返却します。
それ以降にリソースが変更されていなければ、レスポンスは本文を持たない {{HTTPStatus("304")}} になります。前回のリクエストの {{HTTPHeader("Last-Modified")}} レスポンスヘッダーは、最後にリソースが変更された日時を含みます。 

{{HTTPHeader("If-Unmodified-Since")}} とは異なり、 `If-Modified-Since` は {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} でのみ使用できます。
{{HTTPHeader("If-None-Match")}} との組み合わせで使用された場合は、サーバーが `If-None-Match` に対応していない場合を除き無視されます。

最も一般的な使用方法は {{HTTPHeader("ETag")}} に関連付けられていない、キャッシュされたリソースを更新するために用いることです。

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
  </tbody>
</table>

## 構文

```http
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## ディレクティブ

- `<day-name>`
  - : `Mon`、`Tue`、`Wed`、`Thu`、`Fri`、`Sat`、`Sun` のいずれか（大文字小文字を区別）。
- `<day>`
  - : 2 桁の日番号。例えば "04" または "23"。
- `<month>`
  - : `Jan`、`Feb`、`Mar`、`Apr`、`May`、`Jun`、`Jul`、`Aug`、`Sep`、 `Oct`、`Nov`、`Dec` のいずれか（大文字と小文字を区別）。
- `<year>`
  - : 4 桁の年の数字。たとえば "1990" または "2016"。
- `<hour>`
  - : 2 桁の時の数字。たとえば "09" または "23"。
- `<minute>`
  - : 2 桁の分の数字。たとえば "04" または "59"。
- `<second>`
  - : 2 桁の秒の数字。たとえば "04" または "59"。
- GMT
  - : グリニッジ標準時。HTTP の日付は常に GMT で表され、決して現地時間で表されることはありません。

## 例

```http
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Unmodified-Since")}} 条件付きリクエストヘッダー
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} レスポンスステータスコード
