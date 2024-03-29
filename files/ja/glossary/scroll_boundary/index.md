---
title: Scroll boundary （スクロール境界）
slug: Glossary/Scroll_boundary
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{GlossarySidebar}}

**スクロール境界** (scroll boundary) とは、スクロール可能な要素が特定の方向、先頭または末尾のどちらか（水平スクロールの場合は左端または右端）にそれ以上スクロールできなくなる点のことです。これは通常、[スクロールポート](/ja/docs/Glossary/Scroll_container#スクロールポート)の端です。

{{Glossary("Scroll_container", "スクロールコンテナー")}}のコンテンツが、スクロール方向のコンテナーサイズを超えない場合、コンテナーは常にスクロール境界にあるとみなされます。これは、スクロールする余分なコンテンツがないためです。 {{cssxref("overflow", "overflow: hidden")}} が設定されている場合など、コンテンツがスクロールしないようになっている場合、その要素はスクロールコンテナーではないので、スクロール境界はありません。

ユーザーがコンテンツをスクロールしてスクロールポートの境界に達すると、跳ね返り効果などの視覚的な効果や、モバイル端末でのプルトゥリフレッシュなどの機能的な操作が発生する場合があります。この既定のブラウザー動作は、**既定の境界アクション**と呼ばれます。

例えば、モバイル端末の場合、既にページが一番上にある状態で下方向にドラッグすると跳ね返り効果が発生し、ページの更新が発生することがあります。この跳ね返りや更新は既定のアクションです。

既定では、ローカルまたは非ローカルのアクションを行うことができます。

- **既定のローカル境界アクション**は、その要素に限定された特定のスクロール可能な領域の境界で発生するアクションです。このアクションは、祖先コンテナーやウェブページの残りの部分に影響を与えないため、ローカルとみなされます。

- **既定の非ローカル境界アクション**とは、スクロールコンテナーのスクロール境界に達すると、スクロールされる固有の要素を超えた効果がある場合です。この例は{{Glossary("Scroll_chaining", "スクロール連鎖")}}で、ある要素のスクロール境界に達すると、親要素や祖先要素のスクロールが発生し、場合によってはナビゲーションのようなページ全体のアクションが開始されます。

## 関連情報

- {{CSSxRef("overscroll-behavior")}} CSS プロパティ
- [CSS オーバーフロー](/ja/docs/Web/CSS/CSS_overflow)モジュール
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/CSS_overscroll_behavior)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_scroll_snap)モジュール
