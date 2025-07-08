---
title: "Permissions-Policy: deferred-fetch"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{SeeCompatTable}}

**`deferred-fetch`** は {{HTTPHeader("Permissions-Policy")}} のディレクティブで、 [`fetchLater()` API](/ja/docs/Web/API/fetchLater_API) の一部です。

このディレクティブは、 {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} とともに、 640KiB のクォータ制限全体が、最上位のオリジンとその別オリジンのサブフレームとの間で、どのように分配されるかを決定します。既定では、最上位のオリジンには 512KiB が割り当てられ、別オリジンのサブフレームには残りの 128KiB から 8KiB が割り当てられます。 `deferred-fetch` 権限ポリシーでは、サブフレームのオリジンに、既定で割り当てられる 8KiB の最小クォータの代わりに、最上位の 512KiB のクォータからより大きな 64KiB のクォータを割り当てることができます。

詳しい説明と例は、 [`fetchLater()` のクォータ](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas)を参照してください。

## 構文

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <urllist>)
Permissions-policy: deferred-fetch=(<urllist>)
```

- `<urllist>`
  - : 親ディレクトリーのメインクォータから 64KiB の追加クォータが割り当てられた、空白で区切られたオリジン （それぞれは引用符で囲まれています） のリスト。64KiB のクォータは、サブフレームが作成された時点で取得されます。

オリジンが異なるサブフレームは、そのオリジンが異なるサブフレームの子孫の 1 つに `deferred-fetch` を付与することで、そのサブフレームの割り当てをすべて委譲することができます。これは、割り当てが現在使用されていない場合にのみ機能します。

権限ポリシーのチェックは、クォータのチェックと区別できません。`fetchLater()` を呼び出すと、クォータが実際に超過している場合と、権限ポリシーによってその発信元に対するクォータが制限されている場合の両方で、`QuotaExceededError` が発生します。

## 既定のポリシー

`deferred-fetch` の既定の許可リストは `self` です。

## 例

それ以外の例は [`fetchLater()` のクォータ](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas) を参照してください。

### 最小クォータを使い切る

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. `b.com` のサブフレームは、作成時に最上位の 512KiB の制限から 64KiB を受け取ります。
2. `c.com` のサブフレームは記載されていないため、128KiB の共有制限から作成時に 8KiB が割り当てられます。
3. 異なるオリジンを持つ 15 個のサブフレームは、作成時に 8KiB を受け取ります （`c.com` と同様）。
4. 次のサブフレームには、クォータは割り当てられません。
5. サブフレームの 1 つが除去された場合、その遅延フェッチが送信されます。
6. 次のサブフレームは、再び利用可能なクォータがあるため、8KiB のクォータを受け取ります。

## 最小クォータを完全に廃止

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `b.com` のサブフレームは、作成時に 64KiB を受け取ります。
2. `c.com` のサブフレームは、作成時にクォータが割り当てられません。
3. 最上位の文書およびその同じ起源の子孫は、最大 640KiB まで使用できますが、`b.com` サブフレームが作成された場合、574KiB に縮小されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`fetchLater()` のクオータ](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/ja/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
