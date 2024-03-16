---
title: Scroll chaining （スクロール連鎖）
slug: Glossary/Scroll_chaining
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{GlossarySidebar}}

**スクロール連鎖** (Scroll chaining) とは、ユーザーがスクロール可能要素の{{Glossary("Scroll_boundary", "スクロール境界")}}を通過すると、祖先要素でスクロールが発生する場合に見られる動作を指します。

ユーザーが `<div>` や `<textarea>` のようなスクロール可能な要素内でスクロールし、スクロール可能な要素の[スクロールポート](/ja/docs/Glossary/Scroll_container#スクロールポート)の境界（上下左右）に達したとき、スクロール操作が親要素にシームレスに伝搬される「連鎖効果」があるかもしれません。この動作により、縦方向と横方向の両方で、連続したスクロールが実現します。

**スクロールチェーン** (Scroll chain) とは、スクロール動作がある要素から別の要素に渡す、スクロール可能な要素の順序のことです。これは、内側の要素がその限界までスクロールされ、スクロールが親要素まで続き、スクロールアクションの「連鎖」が行われる場合に起こります。連鎖は通常、包含ブロックで再帰します。

## 関連情報

- {{CSSxRef("overscroll-behavior")}} CSS プロパティ
- [CSS オーバーフロー](/ja/docs/Web/CSS/CSS_overflow)モジュール
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/CSS_overscroll_behavior)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/CSS_scroll_snap)モジュール
