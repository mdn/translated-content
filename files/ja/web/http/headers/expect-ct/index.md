---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
---

{{HTTPSidebar}}

`Expect-CT` ヘッダーは、サイトが[証明書の透明性](/ja/docs/Web/Security/Certificate_Transparency)の要件の報告や強制に参加して、サイトの不正な認証情報の使用が通知されない状態を防ぐことができます。

CT の要件は、以下のいずれかの仕組みで満たすことができます。

- 個々のログで発行された署名付き証明書のタイムスタンプを埋め込めるようにするための X.509v3 証明書の拡張
- ハンドシェイク中に送信される `signed_certificate_timestamp` 型の TLS 拡張
- OCSP ステープリング (つまり、 `status_request` TLS 拡張) に対応し、 `SignedCertificateTimestampList` を提供すること

> [!NOTE]
> サイトが `Expect-CT` ヘッダーを有効にすると、ブラウザーが**[公開 CT ログ](https://www.certificate-transparency.org/known-logs)**に現れるサイトのすべての認証情報をチェックするよう要求します。

> [!NOTE]
> ブラウザーは、 HTTP では `Expect-CT` ヘッダーを**無視**し、 HTTPS 接続でのみ効果を発揮します。

> **メモ:** `Expect-CT` は 2021 年 6 月に廃止される可能性が高いです。 2018 年 5 月以降、新しい証明書は既定で SCT に対応することが期待されています。 2018 年 3 月以前の証明書は 39 ヶ月の有効期限が認められていましたが、それらが 2021 年 6 月にすべて失効します。

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
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```
Expect-CT: report-uri="<uri>",
           enforce,
           max-age=<age>
```

## ディレクティブ

- `max-age`

  - : `Expect-CT` ヘッダーフィールドを受信した後で、ユーザーエージェントがメッセージを受信したホストを、既知の Expect-CT ホストと見なすべき時間を秒数で指定します。

    キャッシュが表現可能な値よりも大きな値を受信した場合や、計算でオーバーフローが発生した場合、キャッシュは値を 2,147,483,648 (2^31) または使用している表現方法で最も大きな整数値とみなします。

- `report-uri="<uri>"` {{optional_inline}}

  - : ユーザーエージェントが `Expect-CT` の失敗を報告する URI を指定します。

    `enforce` ディレクティブと `report-uri` ディレクティブが両方ともある場合、設定は "enforce-and-report" の設定と呼ばれ、ユーザーエージェントに証明書の透明性ポリシーに従い、違反を報告することを指示します。

- `enforce` {{optional_inline}}

  - : ユーザーエージェントに (報告するだけでなく) 証明書の透明性ポリシーに従い、ユーザーエージェントが証明書の透明性ポリシーに違反するコネクションを拒否するよう指示します。

    `enforce` ディレクティブと `report-uri` ディレクティブが両方ともある場合、設定は "enforce-and-report" の設定と呼ばれ、ユーザーエージェントに証明書の透明性ポリシーに従い、違反を報告することを指示します。

## 例

以下の例は証明書の透明性を 24 時間強制し、違反を `foo.example` に報告することを示します。

```
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example/report"
```

## メモ

信頼ストアに手動で追加されたルート CA は、 `Expect-CT` の報告/強制を上書きし、抑制します。

ブラウザーは、サイトが証明書の透明性要件を満たす証明書を提供できることを「証明」しない限り、 `Expect-CT` ポリシーを記憶しません。ブラウザーは、どの CT ログが証明書のログとして信頼できるとみなされるかについて、独自の信頼モデルを実装しています。

Chrome のビルドは、インストールのビルド日から 10 週間後に `Expect-CT` ポリシーの施行を停止するように設計されています。

## 仕様書

| 仕様書                                                                                  | 題名                         |
| --------------------------------------------------------------------------------------- | ---------------------------- |
| [Internet Draft](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-expect-ct-08) | Expect-CT Extension for HTTP |

## ブラウザーの互換性

{{Compat}}
