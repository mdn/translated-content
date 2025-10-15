---
title: "Permissions-Policy: attribution-reporting"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `ambient-light-sensor` ディレクティブは、現在の文書が[帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API) を使うことをインターフェイスを通じて端末の周囲の環境における明るさの量に関する情報を収集することを許可するかどうかを制御します。

仕様上、この機能の使用がブロックされている場合、

- バックグラウンドの `attributionsrc` リクエストは行われません。
- {{domxref("XMLHttpRequest.setAttributionReporting()")}} メソッドが呼び出されると、例外が発生します。
- [`attributionReporting`](/ja/docs/Web/API/RequestInit#attributionreporting) オプションが {{domxref("Window/fetch", "fetch()")}} 呼び出しに含まれている場合、例外を発生させます。
- 関連付けられた文書の HTTP レスポンスの登録ヘッダー （{{httpheader("Attribution-Reporting-Register-Source")}} および {{httpheader("Attribution-Reporting-Register-Trigger")}}）は無視されます。

## 構文

```http
Permissions-Policy: attribution-reporting=<allowlist>;
```

- `<allowlist>`
  - : その機能を使用する権限が与えられているオリジンのリストです。詳しくは [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`attribution-reporting` の既定の許可リストは `*` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API)
