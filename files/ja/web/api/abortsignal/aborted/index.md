---
title: "AbortSignal: aborted プロパティ"
short-title: aborted
slug: Web/API/AbortSignal/aborted
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`aborted`** は読み取り専用プロパティで、そのシグナルがやりとりしている非同期操作が中止されているか (`true`)、されていないか (`false`) を示す値を返します。

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
