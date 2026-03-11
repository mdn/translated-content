---
title: Content-Security-Policy-Report-Only ヘッダー
short-title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

HTTP の **`Content-Security-Policy-Report-Only`** {{Glossary("response header", "レスポンスヘッダー")}}は、セキュリティポリシーを強制することなく、コンテンツセキュリティポリシー (CSP) 違反とその効果を監視するのに役立ちます。
このヘッダーを使用することで、特定の {{HTTPHeader("Content-Security-Policy")}} が適用・強制される前に、違反を検査または修復することができます。

レポートを送信するには、CSP {{CSP("report-to")}} ディレクティブを指定する必要があります。指定しない場合、操作は一切効果がありません。

違反レポートは、[レポート API](/ja/docs/Web/API/Reporting_API) を使用して、HTTP の {{HTTPHeader("Reporting-Endpoints")}} レスポンスヘッダーで定義され、CSP の {{CSP("report-to")}} ディレクティブで選択されたエンドポイントに送信されます。

詳細については、[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) のこの記事も参照してください。

> [!NOTE]
> このヘッダーは非推奨となった {{CSP("report-uri")}} ディレクティブ（{{CSP("report-to")}} で置き換えられつつある）でも使用することができます。
> 使用方法と結果のレポート構文は若干異なります。詳細は {{CSP("report-uri")}} のトピックを参照してください。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        このヘッダーは {{HTMLElement("meta")}} 要素内では対応していません。
      </th>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Security-Policy-Report-Only: <policy-directive>; …; <policy-directive>; report-to <endpoint-name>
```

## ディレクティブ

`Content-Security-Policy-Report-Only` ヘッダーはすべての {{HTTPHeader("Content-Security-Policy")}} ディレクティブに対応していますが、`sandbox` を除き、これは無視されます。

> [!NOTE]
> CSP の {{CSP("report-to")}} ディレクティブをこのヘッダーと共に使用しないと、効果がありません。

## 例

### Content-Security-Policy-Report-Only を使用して CSP レポートを送る

{{CSP("report-to")}} ディレクティブを使用するには、まず {{HTTPHeader("Reporting-Endpoints")}} レスポンスヘッダーを使用して対応するエンドポイントを定義する必要があります。
下記の実例では、`csp-endpoint` という単一のエンドポイントを定義しています。

```http
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

次に、{{CSP("report-to")}} および {{CSP("report-uri")}} を使用してレポートの出力先を定義できます。
次に示すように、この具体的なレポートは、ページがリソースを安全でない方法で読み込んだ場合、またはインラインコードから読み込んだ場合に報告されます。

```http
Content-Security-Policy-Report-Only: default-src https:;
  report-uri /csp-report-url/;
  report-to csp-endpoint;
```

> [!NOTE]
> `report-to` ディレクティブは非推奨の `report-uri` よりも推奨されますが、`report-to` はまだブラウザー間で完全に対応されていないため、両方を宣言しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- CSP の {{CSP("report-to")}} ディレクティブ
- CSP の {{CSP("report-uri")}} ディレクティブ {{deprecated_inline}}
