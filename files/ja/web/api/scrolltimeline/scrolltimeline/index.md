---
title: "ScrollTimeline: ScrollTimeline() コンストラクター"
short-title: ScrollTimeline()
slug: Web/API/ScrollTimeline/ScrollTimeline
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{APIRef("History API")}}{{SeeCompatTable}}

**`ScrollTimeline()`** コンストラクターは新しい {{domxref("ScrollTimeline")}} オブジェクトインスタンスを作成します。

## 構文

```js-nolint
new ScrollTimeline(options)
```

### 引数

- `options`
  - : 以下のプロパティを持つことができるオブジェクトです。
    - `source`
      - : スクロール位置がタイムラインの進行を駆動するスクロール可能な要素（スクローラー）を表す {{domxref("Element")}} への参照。
    - `axis` {{optional_inline}}
      - : タイムラインの進行軸を表す列挙値です。可能な値は以下の通りです。
        - `"block"`: スクロールコンテナーのブロック軸にあるスクロールバーで、行内のテキストの流れに垂直な方向の軸。標準英語のような横書き方向では `"y"` と同じになり、縦書き方向では `"x"` と同じになります。
        - `"inline"`: スクロールコンテナーのインライン軸（行のテキストの流れに並行な方向の軸）上のスクロールバー。横書き方向の場合は `"x"` と同じで、縦書き方向の場合は `"y"` と同じです。
        - `"y"`: スクロールコンテナーの縦軸のスクロールバー。
        - `"x"`: スクロールコンテナーの横軸のスクロールバー。

        省略した場合、`axis` は `"block"` に既定されます。

### 返値

新しい {{domxref("ScrollTimeline")}} オブジェクトのインスタンス。

## 例

例えば、メインの {{domxref("ScrollTimeline")}} ページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- {{domxref("ScrollTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ViewTimeline")}}
