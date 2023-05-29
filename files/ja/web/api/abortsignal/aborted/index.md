---
title: AbortSignal.aborted
slug: Web/API/AbortSignal/aborted
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{APIRef("DOM")}}

**`aborted`** は読み取り専用プロパティで、そのシグナルが通信している DOM リクエストが中止されているか (`true`)、されていないか (`false`) を示す値を返します。

## 値

`true` （中止）または `false`

## 例

以下のスニペットでは、新しい `AbortController` オブジェクトを作成し、その {{domxref("AbortSignal")}} （`signal` プロパティを使用して利用できます）を取得します。
その後、`aborted` プロパティを使用して、シグナルが中止されたかどうかを調べ、コンソールに適切なログを出力しています。

```js
const controller = new AbortController();
const signal = controller.signal;

// …

if (signal.aborted) {
  console.log("Request has been aborted");
} else {
  console.log("Request not aborted");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
