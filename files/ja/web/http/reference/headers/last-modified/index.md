---
title: Last-Modified ヘッダー
short-title: Last-Modified
slug: Web/HTTP/Reference/Headers/Last-Modified
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Last-Modified`** {{glossary("response header", "レスポンスヘッダー")}}は、リソースが最後に変更されたとオリジンのサーバーが判断している日時を含みます。
これは、[条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests) ({{HTTPHeader("If-Modified-Since")}} または {{HTTPHeader("If-Unmodified-Since")}}) において、クライアントに保存されたリソースが、同じものであるかを判断する検証材料として使用されます。
これはファイルコンテンツを判断する上で、{{HTTPHeader("ETag")}} ヘッダーよりも精度は低いものの、ETag が利用できない場合の代替手段として使うことができます。

`Last-Modified` は[クローラー](/ja/docs/Glossary/Crawler)がクロールの頻度を調整したり、ブラウザーが[ヒューリスティックキャッシュ](/ja/docs/Web/HTTP/Guides/Caching#ヒューリスティックキャッシュ)を行ったり、コンテンツ管理システム (CMS) がコンテンツの最終編集時刻を表示したりするためにも使用されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{glossary("Response header", "レスポンスヘッダー")}}, {{Glossary("Representation header", "表現ヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Etag")}}
- [HTTP 条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)ガイド
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-None-Match")}} 条件付きリクエストヘッダー
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} レスポンスステータスコード
