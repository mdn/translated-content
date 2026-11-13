---
title: NEL ヘッダー
short-title: NEL
slug: Web/HTTP/Reference/Headers/NEL
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SeeCompatTable}}

HTTP の **`NEL`** {{Glossary("Response header", "レスポンスヘッダー")}}は、ネットワークリクエストログ記録を構成するために使用されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
NEL: { "report_to": "name_of_reporting_group", "max_age": 12345, "include_subdomains": false, "success_fraction": 0.0, "failure_fraction": 1.0 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Network Error Logging (NEL) の解説](/ja/docs/Web/HTTP/Guides/Network_Error_Logging)
