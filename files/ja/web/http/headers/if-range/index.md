---
title: If-Range
slug: Web/HTTP/Headers/If-Range
---

{{HTTPSidebar}}

**`If-Range`** HTTP リクエストヘッダはレンジリクエストを条件付きにします：条件が満たされれば、レンジリクエストが発行され、サーバは適切なボディを持つ {{HTTPStatus("206")}} `Partial Content` 回答を返します。条件が満たされていない場合、 {{HTTPStatus("200")}} の状態でリソース全体が返送されます。

このヘッダは {{HTTPHeader("Last-Modified")}} バリデータ、または {{HTTPHeader("ETag")}} のいずれかで使用できますが、両方では使用できません。

最も一般的な使用事例は、最後のフラグメントが受信されてから格納されたリソースが変更されていないことを保証するために、ダウンロードを再開することです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダータイプ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## ディレクティブ

- \<etag>
  - : リクエストされたリソースを表すエンティティータグです。これは `"675af34563dc-tr34"` のようにダブルクオートに囲まれた ASCII の文字列で、弱い比較アルゴリズムを使うことを示すために `W/` がプレフィックスとしてつくことがあります。

<!---->

- \<day-name>
  - : One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).
- \<day>
  - : 2 digit day number, e.g. "04" or "23".
- \<month>
  - : One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (case sensitive).
- \<year>
  - : 4 digit year number, e.g. "1990" or "2016".
- \<hour>
  - : 2 digit hour number, e.g. "09" or "23".
- \<minute>
  - : 2 digit minute number, e.g. "04" or "59".
- \<second>
  - : 2 digit second number, e.g. "04" or "59".
- `GMT`
  - : Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local time.

## 例

```
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様

| 仕様書                             | タイトル                                               |
| ---------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "If-Range", "3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## ブラウザーの互換性

{{Compat("http.headers.If-Range")}}

## 関連情報

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("206")}} `Partial Content`
- [HTTP Conditional Requests](/ja/docs/Web/HTTP/Conditional_requests)
