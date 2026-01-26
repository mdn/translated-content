---
title: "Permissions-Policy: deferred-fetch-minimal"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{SeeCompatTable}}

**`deferred-fetch-minimal`** は {{HTTPHeader("Permissions-Policy")}} のディレクティブで、 [`fetchLater()` API](/ja/docs/Web/API/fetchLater_API) の一部です。

このディレクティブは、 {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} と共に、 640KiB のクォータ制限全体が最上位のオリジンと異なるオリジンのサブフレームにどのように分配されるかを決定します。既定では、最上位のオリジンには 512KiB が割り当てられ、残りの 128KiB から各サブフレームに 8KiB が割り当てられます。 `deferred-fetch-minimal` 権限ポリシーでは、すべてのオリジンをブロックすることもできます。これにより、 128KiB の共有制限が最上位のクォータに再割り当てされ、 640KiB の制限全体にアクセスできるようになります。

詳しい説明と例は、 [`fetchLater()` のクォータ](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas)を参照してください。

## 構文

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<urllist>)
```

- `<urllist>`
  - : セカンダリの 128KiB クォータ（サブフレームごとに最大 8KiB）の使用が許可されているオリジンを、空白で区切ったリストです。

`deferred-fetch-minimal` 権限が `self` または `()` に設定されている最上位のフレームでは、オリジン同士が異なるサブフレームが既定の共有 128kb のクォータをまったく使用することはできません。その代わりに、サブフレームの 128KiB のクォータが通常のクォータに追加されます。

## 既定のポリシー

`deferred-fetch-minimal` の既定の許可リストは `*` です。

## 例

これ以外の例は [`fetchLater()` のクォータ](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas) を参照してください。

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

## 例外付きで、最低クォータを完全に廃止

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. `b.com` のサブフレームは、作成時に 64KiB を受け取ります。
2. `c.com` のサブフレームは、作成時にクォータが割り当てられません。
3. 最上位の文書およびその同じ起源の子孫は、最大 640KiB まで使用できますが、`b.com` サブフレームが作成された場合、574KiB に縮小されます。

## 例外なしで、最低クォータを完全に廃止

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. 最上位の文書および同じ起源の子孫は、640KiB をすべて使用することができます。
2. サブフレームにはクォータは割り当てられておらず、`fetchLater()` は使用できません。

## 名前付きオリジンへの最小クォータの制限

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=("https://c.com")
```

1. `b.com` のサブフレームは、作成時に 64KiB を受け取ります。
2. `c.com` のサブフレームは、作成時に 8KiB を受け取ります。
3. `d.com` のサブフレームは、作成時にクォータが割り当てられません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`fetchLater()` のクオータ](/ja/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`fetchLater()` API](/ja/docs/Web/API/fetchLater_API)
- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
