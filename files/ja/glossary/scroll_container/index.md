---
title: Scroll container (スクロールコンテナー)
slug: Glossary/Scroll_container
l10n:
  sourceCommit: 2b112aef57df0649462db5d9f47d782a7aa1f25c
---

{{GlossarySidebar}}

**スクロールコンテナー** (scroll container) は、スクロールバーが存在するかどうかにかかわらず、コンテンツをスクロールすることができる要素ボックスです。ユーザーエージェントは、CSS の {{cssxref("overflow")}} プロパティが `scroll` に設定されている場合、または `overflow` が `auto` に設定されていてコンテンツがコンテナーからあふれた場合に、要素ボックスにスクロールバーを追加してスクロールコンテナーにします。

要素ボックスのコンテンツがその境界ボックスをあふれた場合、ユーザーはスクロールバーを使用して、表示されない切り取られたコンテンツをスクロールすることができます。

スクロールコンテナーには、スクロールポートとスクロールバーが含まれます。

## スクロールポート

スクロールポートは、スクロールコンテナーの可視部分であり、スクロールコンテナーのパディングボックスと一致しています。スクロールバーは、コンテンツが表示されるようにスクロールポートの内外に移動するために使用することができます。

## 関連情報

- [CSS 構成要素: コンテンツのオーバーフロー](/ja/docs/Learn_web_development/Core/Styling_basics/Overflow)
- [スクロールスナップ](/ja/docs/Glossary/Scroll_snap)、[スクロールスナップコンテナー](/ja/docs/Glossary/Scroll_snap#scroll_snap_container)を含む
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)モジュール
- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
