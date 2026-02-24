---
title: "PerformanceNavigationTiming: activationStart プロパティ"
short-title: activationStart
slug: Web/API/PerformanceNavigationTiming/activationStart
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceNavigationTiming.activationStart
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`activationStart`** は読み取り専用プロパティで、文書がプリレンダリングを開始してからアクティブになるまでの時間を表します。

## 値

文書のプリレンダリング開始からアクティブになるまでの時間をミリ秒単位で表す {{domxref("DOMHighResTimeStamp")}}。

ページがプリレンダリングされていない場合、またはまだプリレンダリング中の場合、値は `0` です。

## 例

### プリレンダリングされたページの検出

プリレンダリングされた文書がアクティブ化されると、`activationStart` は現在の時刻に設定されます。次の関数は、ページが {{DOMxRef("Document.prerendering","プリレンダリング中")}} であるか、すでにプリレンダリング済みかどうかを確認するために使用できます。

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

### ユーザー体感パフォーマンスのマイルストーンを測定する

プリレンダリングされたページでは、実際にナビゲーションされる前にページが生成されている場合があります。プリレンダリングされたページで [Performance API](/ja/docs/Web/API/Performance_API) を使用する際は、誤解を招く測定を避けるために、返された値を `activationStart` と比較することが不可欠です。

```js
// アクティベーションが発生した時刻
let activationStart =
  performance.getEntriesByType("navigation")[0].activationStart;

// 初回描画までの時間
let firstPaint = performance.getEntriesByName("first-paint")[0].startTime;

// 初回コンテンツ描画までの時間
let firstContentfulPaint = performance.getEntriesByName(
  "first-contentful-paint",
)[0].startTime;

console.log(`time to first paint: ${firstPaint - activationStart}`);
console.log(
  `time to first-contentful-paint: ${firstContentfulPaint - activationStart}`,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API)
- [投機的読み込み](/ja/docs/Web/Performance/Guides/Speculative_loading)
