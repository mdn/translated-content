---
title: AbortSignal.reason
slug: Web/API/AbortSignal/reason
l10n:
  sourceCommit: fae225dc7876dd22800d39dffff0d663ee7808aa
---

{{APIRef("DOM")}}

**`reason`** は読み取り専用プロパティで、中止の理由を示す JavaScript の値を返します。

このプロパティは、シグナルが中止されていないときは `undefined` です。
シグナルが中止されたときに、{{domxref("AbortController.abort()")}} または {{domxref("AbortSignal.abort()")}} によって特定の値に設定することができる。
これらのメソッドで明示的に設定されていない場合、既定では "AbortError" {{domxref("DOMException")}} になります。

## 値

中止の理由を示す JavaScript の値で、中止されない場合は `undefined` となります。

## 例

以下のスニペットでは、新しい `AbortController` オブジェクトを作成し、その {{domxref("AbortSignal")}} （`signal` プロパティを使用して利用できます）を取得します。
その後、`aborted` プロパティを使用して、シグナルが中止されたかどうかを調べ、中止の状況と理由をコンソールにログ出力しています。

```js
const controller = new AbortController();
const signal = controller.signal;

// …

if (signal.aborted) {
  if (signal.reason) {
    console.log(`Request aborted with reason: ${signal.reason}`);
  } else {
    console.log("Request aborted but no reason was given.");
  }
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
