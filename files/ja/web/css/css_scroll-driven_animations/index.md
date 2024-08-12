---
title: CSS スクロール駆動アニメーション
slug: Web/CSS/CSS_scroll-driven_animations
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{CSSRef}}

**CSS スクロール駆動アニメーション**モジュールは、[CSS アニメーションモジュール](/ja/docs/Web/CSS/CSS_animations)と[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)の上に構築する機能を提供します。これは、既定の時間ベースによる文書タイムラインの代わりに、スクロールベースのタイムラインに沿った進行に基づいてプロパティ値をアニメーションすることができます。つまり、時間の経過だけでなく、スクロール可能な要素をスクロールすることで、要素をアニメーションすることができます。

スクロールベースのタイムラインには 2 種類あります。

- スクロール進行タイムライン: このタイムラインは、スクロール可能な要素（スクローラー）を上から下（または左から右）にスクロールしたり戻したりすることで進行させます。スクロール範囲の位置はパーセント値に変換されます。先頭が 0%、末尾が 100% です。
- ビュー進行タイムライン: このタイムラインは、スクローラー内の要素（主体）の可視性の変化に基づいて進行します。スクローラー内の主体の可視性は、進行のパーセント値として追跡されます。既定では、進行タイムラインはサブジェクトがスクローラーの一方の端に最初に表示された時に 0% になり、反対側の端に達したときに 100% になります。

これら 2 つのタイムラインのいずれかがアニメーションする要素に適用されると、アニメーションは既定の時間ベースのタイムラインに従うのではなく、そのタイムラインに沿って進行します。

アニメーションの実効位置をスクロール進行とビュー進行タイムラインに沿って調整することが可能です、つまり、アニメーションの開始位置と終了位置を定義することができます。これにはいくつかの方法があります。

- アニメーションの開始と終了の値をアニメーションに適用することで、アニメーションの開始位置と終了位置をタイムラインに沿って調整できます。
- ビュー進行タイムラインには、主体要素が表示されているとみなされるスクロールポート（詳細は {{glossary("Scroll container")}} を参照）の位置を調整するために、開始と終了のインセット（またはアウトセット）を適用することができます。別の言い方をすれば、タイムライン自体の位置をずらす開始や終了のインセット（またはアウトセット）の値を指定することができます。

## スクロール駆動アニメーションの実際

[Scroll-driven Animations tools and demos](https://scroll-driven-animations.style/) では、スクロール駆動アニメーションを示すツールやデモをいくつか探すことができます。

## リファレンス

### プロパティ

アニメーションの進行を制御するタイムラインを設定し、そのタイムラインに沿って適用範囲を設定します。

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

名前付きスクロール進行タイムラインの定義:

- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}

名前付きビュー進行タイムラインの定義:

- {{cssxref("view-timeline")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

タイムラインスコープの変更:

- {{cssxref("timeline-scope")}}

### アットルール

CSS スクロール駆動アニメーションでは、`<timeline-range-name>` を {{cssxref("@keyframes")}} ブロックに記述することで、名前付きのタイムライン範囲内の特定の位置にキーフレームを配置できるようになります。

### 関数

無名スクロール進行タイムラインと無名ビュー進行タイムラインを定義するための {{cssxref("animation-timeline")}} プロパティの可能な値（つまり、明示的に名前付きで `scroll-timeline-*` プロパティと `view-timeline-*` プロパティを使用して定義するのではなく、ブラウザーによって暗黙的に定義されます）。

- [`scroll()`](/ja/docs/Web/CSS/animation-timeline/scroll)
- [`view()`](/ja/docs/Web/CSS/animation-timeline/view)

### JavaScript 機能

- {{domxref("Element.animate()")}}
- {{domxref("AnimationTimeline")}}
- {{domxref("ScrollTimeline")}}
- {{domxref("ViewTimeline")}}

## 仕様書

{{Specifications}}

## 関連情報

- [Animate elements on scroll with Scroll-driven animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) (developer.chrome.com)
- [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
