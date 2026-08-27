---
title: Expect-CT ヘッダー
short-title: Expect-CT
slug: Web/HTTP/Reference/Headers/Expect-CT
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{Deprecated_Header}}

`Expect-CT` {{Glossary("Response header", "レスポンスヘッダー")}}により、サイトが[証明書の透明性](/ja/docs/Web/Security/Defenses/Certificate_Transparency)の要件に関する報告や強制にオプトインすることができます。
証明書の透明性 (CT) は、そのサイトに対して誤って発行された証明書が使用されても、それが見過ごされないようにするためにものです。

`Expect-CT` を実装していたのは Google Chrome やその他の Chromium ベースのブラウザーのみでしたが、Chromium ではバージョン 107 以降、デフォルトで CT を強制するようになったため、このヘッダーは非推奨となりました。
[Chrome Platform Status](https://chromestatus.com/feature/6244547273687040) の更新情報をご覧ください。

CT の要件は、以下のいずれかの仕組みで満たすことができます。

- 個々のログによって発行された署名付き証明書タイムスタンプの埋め込みをすることができる X.509v3 証明書拡張機能。公的に信頼されている CA によって発行され、オンラインで使用される TLS 証明書のほとんどには、CT が含まれています。
- ハンドシェイク中に送信される `signed_certificate_timestamp` 型の TLS 拡張
- OCSP ステープリング（つまり、 `status_request` TLS 拡張）に対応し、 `SignedCertificateTimestampList` を提供すること

> [!NOTE]
> サイトが `Expect-CT` ヘッダーを有効にすると、ブラウザーが**[公開 CT ログ](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)**に現れるサイトのすべての認証情報をチェックするよう要求します。

> [!NOTE]
> ブラウザーは、 HTTP では `Expect-CT` ヘッダーを**無視**し、 HTTPS 接続でのみ効果を発揮します。

> [!NOTE]
> `Expect-CT` は 2021 年 6 月に廃止される可能性が高いです。
> 2018 年 5 月以降、新しい証明書は既定で SCT に対応することが求められています。
> 2018 年 3 月以前の証明書は 39 ヶ月の有効期限が認められていましたが、それらが 2021 年 6 月にすべて失効します。
> Chromium では、`Expect-CT` ヘッダーが非推奨となり、最終的には除去される予定です。

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
Expect-CT: report-uri="<uri>",
           enforce,
           max-age=<age>
```

## ディレクティブ

- `max-age`
  - : `Expect-CT` ヘッダーフィールドを受信した後で、ユーザーエージェントがメッセージを受信したホストを、既知の `Expect-CT` ホストと見なすべき時間を秒数で指定します。

    キャッシュが表現可能な値よりも大きな値を受信した場合や、計算でオーバーフローが発生した場合、キャッシュは値を 2,147,483,648 (2^31) または使用している表現方法で最も大きな整数値とみなします。

- `report-uri="<uri>"` {{optional_inline}}
  - : ユーザーエージェントが `Expect-CT` の失敗を報告する URI を指定します。

    `enforce` ディレクティブと共に指定されている場合、その設定は "enforce-and-report" 設定と呼ばれ、ユーザーエージェントに対して、証明書の透明性ポリシーへの準拠を強制すべきであるとともに、違反は報告すべきであることを示します。

- `enforce` {{optional_inline}}
  - : ユーザーエージェントに（報告するだけでなく）証明書の透明性ポリシーに従い、ユーザーエージェントが証明書の透明性ポリシーに違反するコネクションを拒否するよう指示します。

    `enforce` ディレクティブと `report-uri` ディレクティブの両方が存在する場合、その設定は "enforce-and-report" 設定と呼ばれ、ユーザーエージェントに対して、証明書の透明性ポリシーへの準拠を強制すべきであるとともに、違反は報告すべきであることを示します。

## 例

以下の例は証明書の透明性を 24 時間強制し、違反を `foo.example` に報告することを示します。

```http
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## メモ

信頼ストアに手動で追加されたルート CA は、 `Expect-CT` の報告/強制を上書きし、抑制します。

ブラウザーは、サイトが証明書の透明性要件を満たす証明書を提供できることを「証明」しない限り、 `Expect-CT` ポリシーを記憶しません。ブラウザーは、どの CT ログが証明書のログとして信頼できるとみなされるかについて、独自の信頼モデルを実装しています。

Chrome のビルドは、インストールのビルド日から 10 週間後に `Expect-CT` ポリシーの施行を停止するように設計されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)
- 用語集の用語:
  - {{glossary('TLS', 'Transport Layer Security (TLS)')}}
  - {{glossary('SSL', 'Secure Sockets Layer (SSL)')}}
  - {{glossary('HTTPS')}}
