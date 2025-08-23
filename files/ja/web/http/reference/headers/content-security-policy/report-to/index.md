---
title: "CSP: report-to"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-to
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

`Content-Security-Policy` の **`report-to`** ディレクティブは、 CSP 違反の報告に使用するエンドポイントの名前を示します。

CSP 違反が発生した場合、シリアライズされた {{domxref("CSPViolationReportBody")}} オブジェクトのインスタンスが含まれているレポートが生成されます。
このレポートは、[レポート API](/ja/docs/Web/API/Reporting_API) で定義されている一般的なメカニズムを使用して、エンドポイント名に対応する URL に送信されます。

サーバーは、 HTTP の {{HTTPHeader("Reporting-Endpoints")}} レスポンスヘッダーに、エンドポイント名とそれに対応する URL の間の対応付けを別個に指定する必要があります。

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
Content-Security-Policy: …; report-to <endpoint_name>
```

`<endpoint_name>` は、 HTTP の {{HTTPHeader("Reporting-Endpoints")}} レスポンスヘッダーで指定されたエンドポイントの名前です。また、 {{HTTPHeader("Report-To")}} {{deprecated_inline}} レスポンスヘッダーでサーバーが指定したグループの名前である場合もあります。

### 違反レポートの構文

CSP 違反レポートは、JSON 形式の {{domxref("Report")}} オブジェクトのインスタンスであり、 `type` プロパティに `"csp-violation"` という値が存在し、本体は {{domxref("CSPViolationReportBody")}} オブジェクトをシリアライズした形式です（各オブジェクトのプロパティ定義については、それぞれのオブジェクトを参照してください）。レポートは、 {{HTTPHeader("Content-Type")}} が `application/reports+json` である `POST` 操作により、ターゲットエンドポイントに送信されます。

単一のレポートのJSONは、次のようになるでしょう。

```json
{
  "age": 53531,
  "body": {
    "blockedURL": "inline",
    "columnNumber": 39,
    "disposition": "enforce",
    "documentURL": "https://example.com/csp-report",
    "effectiveDirective": "script-src-elem",
    "lineNumber": 121,
    "originalPolicy": "default-src 'self'; report-to csp-endpoint-name",
    "referrer": "https://www.google.com/",
    "sample": "console.log(\"lo\")",
    "sourceFile": "https://example.com/csp-report",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://example.com/csp-report",
  "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}
```

## 使用上のメモ

`report-to` ディレクティブは `report-uri` を置き換えることを意図しており、 `report-to` に対応しているブラウザーは `report-uri` ディレクティブを無視します。
しかし、 `report-to` が広く対応されるまでは、どちらのディレクティブも表示させるように指定することができます。

```http
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
```

なお、このトピックの他の例では `report-uri` を示していません。

## 例

### CSP 違反レポートのエンドポイントの設定

サーバーは、 HTTP レスポンスの {{HTTPHeader("Reporting-Endpoints")}} ヘッダーを使用して、エンドポイント名と URL の割り当てられた対応を定義することができます。任意の名前を使用することができます。ここでは、 `name-of-endpoint` という名前を選んでいます。

```http
Reporting-Endpoints: name-of-endpoint="https://example.com/csp-reports"
```

サーバーは、`report-to` ディレクティブを使用する際に、 CSP 違反レポートの送信対象としてこのエンドポイント名を設定することができます。

```http
Content-Security-Policy: default-src 'self'; report-to name-of-endpoint
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Reporting-Endpoints")}}
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- [レポート API](/ja/docs/Web/API/Reporting_API)
