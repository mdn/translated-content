---
title: "CSP: report-to"
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}

`Content-Security-Policy` の **`Report-To`** は HTTP のレスポンスヘッダーフィールドで、ユーザーエージェントにオリジンの報告先のエンドポイントを保存するよう指示します。

```http
Content-Security-Policy: …; report-to groupname
```

このディレクティブは単体では効果がありませんが、他のディレクティブとの組み合わせでのみ意味を持ちます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Reporting directive", "報告ディレクティブ")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        このディレクティブは {{HTMLElement("meta")}} 要素では対応していません。
      </th>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy: report-to <json-field-value>;
```

## 例

詳しい情報や例は、 {{HTTPHeader("Content-Security-Policy-Report-Only")}} を参照してください。

```http
Report-To: { "group": "csp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/csp-reports" }
              ] },
            { "group": "hpkp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/hpkp-reports" }
              ] }
Content-Security-Policy: …; report-to csp-endpoint
```

```http
Report-To: { "group": "endpoint-1",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }

Content-Security-Policy: …; report-to endpoint-1
```

```http
Reporting-Endpoints: endpoint-1="https://example.com/reports"

Content-Security-Policy: …; report-to endpoint-1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
