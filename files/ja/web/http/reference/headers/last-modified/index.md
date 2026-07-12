---
title: Last-Modified
slug: Web/HTTP/Reference/Headers/Last-Modified
original_slug: Web/HTTP/Headers/Last-Modified
---

HTTP の **`Last-Modified`** レスポンスヘッダーは、リソースが最後に変更されたとオリジンのサーバーが判断している日時を含みます。これは受信または保存されたリソースが、同じものであるかを判断する検証材料として使用されます。 {{HTTPHeader("ETag")}} ヘッダーよりも精度は低く、その代替手段になります。 {{HTTPHeader("If-Modified-Since")}} や {{HTTPHeader("If-Unmodified-Since")}} ヘッダーを含む条件付きリクエストはこのフィールドを使用します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
      </th>
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

```
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

```
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

| 仕様書                                  | 題名                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "Last-Modified", "2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("Etag")}}
