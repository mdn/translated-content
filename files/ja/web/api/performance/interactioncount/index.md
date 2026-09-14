---
title: "Performance: interactionCount プロパティ"
short-title: interactionCount
slug: Web/API/Performance/interactionCount
l10n:
  sourceCommit: 9548e8228e0872c244e3a0622ed0448139995ad6
---

{{APIRef("Performance API")}}

読み取り専用の `performance.interactionCount` プロパティは、ページの読み込み以降に発生した実ユーザーのインタラクション数を表します。

{{domxref("PerformanceEventTiming.interactionId", "interactionId")}} が割り当てられる離散的なインタラクション (クリックやキーイベントなど) のみがカウントされます。スクロール操作などのその他のインタラクションは除外されます。

これは {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}} を算出する際に有用で、特に長時間表示され続けるページにおける外れ値を除外するために役立ちます。INP はページ上のインタラクションの 98 パーセンタイル値を採用するため、50 回のインタラクションのうち 1 回を、ページ全体の応答性を反映しない「外れ値」として除外します。

## 値

数値です。初期値は `0` で、{{domxref("PerformanceEventTiming")}} によって測定され、{{domxref("PerformanceEventTiming.interactionId")}} が割り当てられる各離散的なインタラクションごとに `1` ずつ増加します。

## 例

### INP を正確に算出するためのインタラクション数の確認

多数のインタラクションがあるページでは、以下のパターンを使用して、 50 回ごとに 1 回の外れ値を除外した上で INP を再計算できます。

```js
if (performance.interactionCount >= 50) {
  recalculateINP(); // 実際の計算は複雑なため、ここでは示していません
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceEventTiming")}}
- {{domxref("PerformanceEventTiming.interactionId")}}
- {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}}
