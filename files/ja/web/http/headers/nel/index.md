---
title: NEL
slug: Web/HTTP/Headers/NEL
---

{{HTTPSidebar}}

HTTP の **`NEL`** レスポンスヘッダーは、ネットワークリクエストログ記録を構成するために使用されます。

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
  </tbody>
</table>

## 構文

```
NEL: { "report_to": "name_of_reporting_group", "max_age": 12345, "include_subdomains": false, "success_fraction": 0.0, "failure_fraction": 1.0 }
```

## 仕様書

| 仕様書                                                                                    |
| ----------------------------------------------------------------------------------------- |
| [Network Error Logging](https://w3c.github.io/network-error-logging/#nel-response-header) |

## 関連情報

- [Network Error Logging (NEL) の説明](/ja/docs/Web/HTTP/Network_Error_Logging)
