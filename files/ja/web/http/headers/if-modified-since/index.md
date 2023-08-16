---
title: If-Modified-Since
slug: Web/HTTP/Headers/If-Modified-Since
---

{{HTTPSidebar}}

HTTP の **`If-Modified-Since`** リクエストヘッダーは、リクエストを条件付にします。サーバーは最後にリソースが変更された時刻が、リクエストにより与えられた時刻より後の場合にのみ、リクエストされたリソースを {{HTTPStatus("200")}} ステータスと共に返却します。もしリクエストにより与えられた時刻以降にリソースが変更されていなければ、レスポンスは本文を持たない {{HTTPStatus("304")}} になります。前回のリクエストの {{HTTPHeader("Last-Modified")}} レスポンスヘッダーは、最後にリソースが変更された時刻を含みます。 {{HTTPHeader("If-Unmodified-Since")}} とは異なり、 `If-Modified-Since` は {{HTTPMethod("GET")}} もしくは {{HTTPMethod("HEAD")}} でのみ使用できます。

本ヘッダーは {{HTTPHeader("If-None-Match")}} との組み合わせで使用された場合、サーバーが `If-None-Match` に対応していない場合を除き無視されます。

最も一般的な使用方法は {{HTTPHeader("ETag")}} に関連付けられていない、キャッシュされたリソースを更新するために用いることです。

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
  </tbody>
</table>

## 構文

```
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
  - : 2 桁の時間を表す数字, 例 "09" や "23"
- \<minute>
  - : 2 桁の分を表す数字, 例 "04" や "59"
- \<second>
  - : 2 桁の秒を表す数字, 例 "04" や "59"
- `GMT`
  - : グリニッジ標準時。 HTTP における時刻は常にグリニッジ標準時で表され、ローカル時刻になることはありません。

## 例

```
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

| 仕様書                                      | 題名                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-Modified-Since", "3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## ブラウザーの対応

{{Compat("http.headers.If-Modified-Since")}}

## 関連情報

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
