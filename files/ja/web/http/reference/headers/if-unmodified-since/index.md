---
title: If-Unmodified-Since ヘッダー
short-title: If-Unmodified-Since
slug: Web/HTTP/Reference/Headers/If-Unmodified-Since
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`If-Unmodified-Since`** {{Glossary("request header", "リクエストヘッダー")}}は、リクエストを条件付きにします。
サーバーはリソースが指定された日時以降に変更されていない場合のみ、要求されたリソースを返信したり、 {{HTTPMethod("POST")}} などの{{Glossary("Safe/HTTP", "安全")}}ではないメソッドをの場合はそれを受け付けたりします。
リソースが指定された日時以降に変更されていた場合は、レスポンスは {{HTTPStatus("412", "412 Precondition Failed")}} エラーになります。

`If-Unmodified-Since` ヘッダーは、一般的に次のような状況で使用されます。

- {{Glossary("Safe/HTTP", "安全")}}ではないメソッド、たとえば {{HTTPMethod("POST")}} などとの組み合わせで、一部のウィキで行われているような[楽観的並行性制御](https://ja.wikipedia.org/wiki/楽観的並行性制御)を実装するために利用することができます。この場合、元の文書を受け取った後で、保存されている文書が変更されていると、編集が拒否されます。
- {{HTTPHeader("If-Range")}} ヘッダー付きの範囲付きリクエストとの組み合わせで、断片をリクエストする際に文書が変更されていないことを確認するために使用することができます。

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
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## ディレクティブ

- `<day-name>`
  - : `Mon`、`Tue`、`Wed`、`Thu`、`Fri`、`Sat`、`Sun` のいずれか（大文字小文字を区別）。
- `<day>`
  - : 2 桁の日番号。例えば "04" または "23"。
- `<month>`
  - : `Jan`、`Feb`、`Mar`、`Apr`、`May`、`Jun`、`Jul`、`Aug`、`Sep`、`Oct`、`Nov`、`Dec` のいずれか（大文字と小文字を区別）。
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
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP 条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)ガイド
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} 範囲リクエストヘッダー
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-None-Match")}} 条件付きリクエストヘッダー
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} レスポンスステータスコード
