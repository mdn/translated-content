---
title: Last-Modified
slug: Web/HTTP/Headers/Last-Modified
---

{{HTTPSidebar}}

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
  </tbody>
</table>

## 構文

```
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## ディレクティブ

- \<day-name>
  - : "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" の中から一つ (大文字・小文字の区別あり)
- \<day>
  - : 2 桁の日付を表す数字, 例 "04" や "23".
- \<month>
  - : "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" の中から一つ (大文字・小文字の区別あり)
- \<year>
  - : 4 桁の年を表す数字, 例 "1990" や "2016"
- \<hour>
  - : 2 桁の時を表す数字, 例 "09" や "23"
- \<minute>
  - : 2 桁の分を表す数字, 例 "04" や "59"
- \<second>
  - : 2 桁の秒を表す数字, 例 "04" や "59"
- `GMT`
  - : グリニッジ標準時。 HTTP における時刻は常にグリニッジ標準時で表され、ローカル時刻になることはありません。

## 例

```
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

| 仕様書                                  | 題名                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "Last-Modified", "2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## ブラウザーの互換性

{{Compat("http.headers.Last-Modified")}}

## 関連情報

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("Etag")}}
