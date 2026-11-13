---
title: "ScrollTimeline: axis プロパティ"
short-title: axis
slug: Web/API/ScrollTimeline/axis
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

**`axis`** は {{domxref("ScrollTimeline")}} インターフェイスの読み取り専用のプロパティは、タイムラインの進行軸を表す列挙値を返します。

## 値

列挙値です。可能な値は以下のとおりです。

- `"block"`
  - : スクロールコンテナーのブロック軸にあるスクロールバーで、行内のテキストの流れに垂直な方向の軸。標準英語のような横書き方向では `"y"` と同じになり、縦書き方向では `"x"` と同じになります。
- `"inline"`
  - : スクロールコンテナーのインライン軸にあるスクロールバーで、行のテキストの流れに並行な方向の軸。横書き方向の場合は `"x"` と同じで、縦書き方向の場合は `"y"` と同じです。
- `"y"`
  - : スクロールコンテナーの縦軸のスクロールバー。
- `"x"`
  - : スクロールコンテナーの横軸のスクロールバー。

## 例

例えば、メインの {{domxref("ScrollTimeline")}} ページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ScrollTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ViewTimeline")}}
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
