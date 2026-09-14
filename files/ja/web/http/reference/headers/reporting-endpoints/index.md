---
title: Reporting-Endpoints ヘッダー
short-title: Reporting-Endpoints
slug: Web/HTTP/Reference/Headers/Reporting-Endpoints
l10n:
  sourceCommit: a019b326a3ad0c16d78d236582927a38ccaea8b4
---

HTTP の **Reporting-Endpoints** {{Glossary("Response header", "レスポンスヘッダー")}}を使用すると、ウェブサイトの管理者は、[レポート API](/ja/docs/Web/API/Reporting_API) によって生成されたレポートを送信できるエンドポイントを 1 つ以上指定することができます。

これらのエンドポイントは、例えば、クラッシュレポート、非推奨レポート、[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP#違反の報告) 違反レポート、{{HTTPHeader("Cross-Origin-Opener-Policy")}} レポートなどの送信先として使用することができます。

> [!NOTE]
> このヘッダーは、エンドポイントを宣言するための {{HTTPHeader("Report-To")}} {{deprecated_inline}} を置き換えるものであり、優先的に使用すべきです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Reporting-Endpoints: <endpoint>
Reporting-Endpoints: <endpoint>, …, <endpointN>
```

- `<endpoint>`
  - : `<endpoint-name>="<URL>"` という書式のレポート用エンドポイント。
    エンドポイントには、引用符で囲まれた文字列の中に有効な URI が含まれている必要があります（例：`my-endpoint="https://example.com/reports"`）。また、保護されていないエンドポイントは無視されます。
    カンマ区切りでエンドポイントのリストを提供することができます。

## 解説

**`Reporting-Endpoints`** ヘッダーは、エンドポイント名と URL との対応関係を定義します。

この名前は、一部の HTTP ヘッダーにおいて、ポリシー違反の報告先エンドポイントを識別するために使用できます。
例えば、{{HTTPHeader("Content-Security-Policy")}} では、その {{CSP("report-to")}} ディレクティブ内で報告先エンドポイント名を指定することができますが、[`endpoints` キー](/ja/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) は、{{HTTPHeader("Integrity-Policy")}} の違反に対して同様の役割を果たします。

### デフォルトのレポートエンドポイント

デフォルトのレポートエンドポイントは、以下の通り単に "default" という名前のレポートです。

```http
Reporting-Endpoints: default="https://example.com/reports"
```

これは、{{httpheader("Permissions-Policy")}} ヘッダーなど、レポートを開始する HTTP ヘッダーにエンドポイントを報告する仕組みを持たない場合、レポート用のエンドポイントとして_使用される可能性があります_。
また、[非推奨レポート](/ja/docs/Web/API/DeprecationReport)のように、関連付けられた HTTP ヘッダーがまったく存在しないレポートのエンドポイントとしても使用できます。

## 例

### CSP 違反レポートのエンドポイントの設定

次の例は、`Reporting-Endpoints` レスポンスヘッダーを {{HTTPHeader("Content-Security-Policy")}} ヘッダーと組み合わせて使用し、CSP 違反レポートの送信先を示す方法を示しています。

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

### 複数のレポート送信先の指定

さまざまな種類の違反レポートに使用できる、複数のエンドポイントを指定することができます。

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports",
                     permissions-endpoint="https://example.com/permissions-policy-reports"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [レポート API](/ja/docs/Web/API/Reporting_API)
- [コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP#violation_reporting) ガイド
- {{HTTPHeader("Content-Security-Policy")}} ヘッダー
- {{CSP("report-to")}} ディレクティブ
