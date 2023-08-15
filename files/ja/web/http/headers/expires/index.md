---
title: Expires
slug: Web/HTTP/Headers/Expires
---

{{HTTPSidebar}}

**`Expires`** ヘッダーには、レスポンスが古くなると見なされる日時が入ります。

値 0 のような無効な日付は過去の日付を表し、リソースがすでに有効期限切れであることを意味します。

> **メモ:** レスポンスに `max-age` または `s-maxage` ディレクティブを持つ {{HTTPHeader("Cache-Control")}} ヘッダーがある場合、`Expires` ヘッダーは無視されます。

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
Expires: <http-date>
```

## ディレクティブ

- \<http-date>
  - : HTTP-date タイムスタンプ

## 例

```
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

| 仕様書                            | 題名                                            |
| --------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Expires", "5.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## ブラウザーの互換性

{{Compat("http.headers.Expires")}}

## 関連情報

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
