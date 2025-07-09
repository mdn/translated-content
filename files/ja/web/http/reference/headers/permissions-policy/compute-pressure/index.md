---
title: "Permissions-Policy: compute-pressure"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/compute-pressure
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーの `compute-pressure` ディレクティブは、[計算負荷 API](/ja/docs/Web/API/Compute_Pressure_API) へのアクセスを制御します。

## 構文

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`compute-pressure` の既定の許可リストは `self` で、同じオリジンにある埋め込みフレームでの使用は許可されますが、サードパーティのコンテンツがこの機能を使用することは禁止されます。ワーカー（専用および共有）は、それが属する文書で設定された権限ポリシーに準拠します。

## 例

### サードパーティコンテンツの計算負荷 API を有効化

サードパーティからの使用は、 {{HTMLElement("iframe")}} 要素の `allow` 属性を使用して選択的に有効にすることができます。

```html
<iframe src="https://example.com" allow="compute-pressure"></iframe>
```

### 計算負荷 API を完全に無効化

この HTTP レスポンスヘッダーは、計算負荷 API を完全に無効にします。

```http
Permissions-Policy: {"compute-pressure": []}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [計算負荷 API](/ja/docs/Web/API/Compute_Pressure_API)
