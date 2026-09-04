---
title: If-Range ヘッダー
short-title: If-Range
slug: Web/HTTP/Reference/Headers/If-Range
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`If-Range`** {{Glossary("Request header", "リクエストヘッダー")}}は、範囲付きリクエストを条件付きにします。
条件が満たされれば、[範囲付きリクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)が発行され、サーバーは適切な本体を持つ {{HTTPStatus("206", "206 Partial Content")}} レスポンスを返します。条件が満たされていない場合は、{{HTTPStatus("200", "200 OK")}} ステータスでリソース全体が返送されます。

このヘッダーは {{HTTPHeader("Last-Modified")}} バリデーターと {{HTTPHeader("ETag")}} のどちらかと一緒に使用できますが、両方では使用できません。

最も一般的な用途は、クライアントが前回のデータを最後に受信して以来、サーバー上のリソースが変更されていないことが保証されている状態で、ダウンロードを再開することです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダータイプ</th>
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
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## ディレクティブ

- `<etag>`
  - : リクエストされたリソースを固有に表すエンティティタグです。これは、二重引用符で囲まれた ASCII 文字の文字列です（例：`"675af34563dc-tr34"`）。このヘッダーでは、弱いエンティティタグ（`W/` で始まるもの）を使用することはできません。
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
If-Range: Wed, 21 Oct 2015 07:28:00 GMT

If-Range: "67ab43"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP 条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)ガイド
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}} 条件付きリクエストヘッダー
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("412", "412 Precondition Failed")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} レスポンスステータスコード
