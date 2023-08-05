---
title: If-Unmodified-Since
slug: Web/HTTP/Headers/If-Unmodified-Since
---

{{HTTPSidebar}}

HTTP の **`If-Unmodified-Since`** リクエストヘッダーは、リクエストを条件付きにします。サーバーはリソースが指定された日時以降に変更されていない場合のみ、要求されたリソースを返信したり、 {{HTTPMethod("POST")}} などの{{Glossary("safe", "安全")}}ではないメソッドをの場合はそれを受け付けたりします。リソースが指定された日時以降に変更されていた場合は、レスポンスは{{HTTPStatus("412")}} (Precondition Failed) エラーになります。

一般的な使用例は 2 つあります。

- {{HTTPMethod("POST")}} のような{{Glossary("safe", "安全")}}ではないメソッドとの組み合わせで、一部のウィキで行われているような[楽観的並行性制御](https://ja.wikipedia.org/wiki/楽観的並行性制御)を実装するために利用することができます。この場合、元の文書を受け取った後で、保存されている文書が変更されていると、編集が拒否されます。
- {{HTTPHeader("If-Range")}} ヘッダー付きの範囲付きリクエストとの組み合わせで、断片をリクエストする際に文書が変更されていないことを確認するために使用することができます。

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
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

| 仕様書                                        | 題名                                                         |
| --------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "If-Unmodified-Since", "3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## ブラウザーの対応

{{Compat("http.headers.If-Unmodified-Since")}}

## 関連情報

- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPHeader("If-Range")}}
- {{HTTPStatus("412")}} `Precondition Failed`
