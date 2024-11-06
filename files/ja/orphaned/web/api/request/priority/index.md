---
title: Request.priority
slug: orphaned/Web/API/Request/priority
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}{{SeeCompatTable}}

**`priority`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、このリクエストの、他のリクエストに対して相対的な優先度のヒントを保持します。

## 値

リクエストの優先度のヒントを示す文字列。
使用可能な値は以下の通りです。

- `high`
  - : このリクエストの優先度は、同様の種類の他のリクエストと比較して高い。
- `low`
  - : このリクエストの優先度は、同様の種類の他のリクエストと比較して低い。
- `auto`
  - : 既定のモード。フェッチの優先度に何の環境設定もないことを示します。
    ブラウザーがユーザーにとって最適なものを決定します。

## 例

以下のスニペットでは、{{domxref("Request.Request", "Request()")}} コンストラクターを使用して低い優先度で（API エンドポイント用の）新規リクエストを作成し、その優先度を変数に保存しています。

```js
const myRequest = new Request('/background-api-call', { priority: 'low' });
const myPriority = myRequest.priority; // "low"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
