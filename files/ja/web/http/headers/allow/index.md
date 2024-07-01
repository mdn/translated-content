---
title: Allow
slug: Web/HTTP/Headers/Allow
---

{{HTTPSidebar}}

**`Allow`** ヘッダーは、あるリソースが対応しているメソッドの一覧を示します。

このヘッダーは、サーバーが {{HTTPStatus("405")}} `Method Not Allowed` ステータスコードで返答する場合、使用することができるリクエストメソッドを示すために送信する必要があります。 `Allow` ヘッダーが空である場合、リソースが許可しているリクエストメソッドがないことを示し、例えば指定されたリソースにおいて一時的に発生する可能性があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Entity header", "エンティティヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name","禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Allow: <http-methods>
```

## ディレクティブ

- \<http-methods>
  - : 許可されている [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)の一覧。

## 例

```
Allow: GET, POST, HEAD
```

## 仕様書

| 仕様書                            | 状態                                                          |
| --------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Allow", "7.4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 関連情報

- {{HTTPStatus("405")}}
- {{HTTPHeader("Server")}}
