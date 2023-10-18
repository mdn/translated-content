---
title: Date
slug: Web/HTTP/Headers/Date
---

{{HTTPSidebar}}

**`Date`** は HTTP の一般ヘッダーで、メッセージが発信された日時が含まれています。

> **警告:** `Date` は fetch 仕様書において[禁止ヘッダー名](https://fetch.spec.whatwg.org/#forbidden-header-name)に挙げられています。 - そのため、このコードは `Date` ヘッダーを送信しません。
>
> ```js
> fetch("https://httpbin.org/get", {
>   headers: {
>     Date: new Date().toUTCString(),
>   },
> });
> ```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("General header", "一般ヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## ディレクティブ

- `<day-name>`
  - : "Mon"、"Tue"、"Wed"、"Thu"、"Fri"、"Sat"、"Sun" のいずれか (大文字小文字を区別)。
- `<day>`
  - : 2 桁の日番号。例えば "04" または "23"。
- `<month>`
  - : "Jan"、"Feb"、"Mar"、"Apr"、"May"、"Jun"、"Jul"、"Aug"、"Sep"、 "Oct"、"Nov"、"Dec" のいずれか (大文字と小文字を区別)。
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
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

```js
new Date().toUTCString();
// "Mon, 09 Mar 2020 08:13:24 GMT"
```

## 仕様書

| 仕様書                             | 題名                                                          |
| ---------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Date", "7.1.1.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat("http.headers.Date")}}

## 関連情報

- {{HTTPHeader("Age")}}
