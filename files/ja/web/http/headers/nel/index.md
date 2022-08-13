---
title: NEL
slug: Web/HTTP/Headers/NEL
tags:
  - HTTP
  - HTTP Header
  - HTTP ヘッダー
  - Network Error Logging
  - Reference
  - Response Header
  - header
  - ネットワークエラーログ記録
  - ヘッダー
  - レスポンスヘッダー
translation_of: Web/HTTP/Headers/NEL
---
{{HTTPSidebar}}

HTTP の **`NEL`** レスポンスヘッダーは、ネットワークリクエストログ記録を構成するために使用されます。

| ヘッダー種別                                                                         | {{Glossary("Response header", "レスポンスヘッダー")}} |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| {{Glossary("Forbidden header name", "禁止ヘッダー名")}} | いいえ                                                                               |

## 構文

    NEL: { "report_to": "name_of_reporting_group", "max_age": 12345, "include_subdomains": false, "success_fraction": 0.0, "failure_fraction": 1.0 }

## 仕様書

| 仕様書                                                                                    |
| ----------------------------------------------------------------------------------------- |
| [Network Error Logging](https://w3c.github.io/network-error-logging/#nel-response-header) |

## 関連情報

- [Network Error Logging (NEL) の説明](/ja/docs/Web/HTTP/Network_Error_Logging)
