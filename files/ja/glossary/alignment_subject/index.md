---
title: Alignment subject (配置対象物)
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

[CSS ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)では、**配置対象物**はそのプロパティによって{{glossary("alignment container","配置コンテナー")}}内に配置されるものを指します。

{{cssxref("justify-self")}} や {{cssxref("align-self")}} が設定されている場合、配置対象物はこれらのプロパティが設定されているボックスのマージンボックスです。そのボックスの書字方向を使用します。{{cssxref("justify-content")}} や {{cssxref("align-content")}} の場合は、ボックスの書字方向も使用されます。

配置対象物の定義は、使用されているレイアウトモードによります。

- ブロックコンテナー（テーブルセルを含む）
  - : 単一のユニットとしてのブロックの内容物全体です。
- 段組みコンテナー
  - : 段ボックスです。段ボックスの間に挿入されたスペースが、関連する段間に追加されます。
- フレックスコンテナー
  - : {{cssxref("justify-content")}} の場合は、それぞれのフレックス行の中のフレックスアイテムです。 {{cssxref("align-content")}} の場合は、フレックス行です。ただし、複数行のフレックスコンテナーにだけ効果を発揮します。
- グリッドコンテナー
  - : 適切な軸のグリッドトラックです。トラック間にスペースを挿入すると、関連する溝に追加されます。溝が折り畳まれている場合は、スペースを挿入する唯一の機会として扱われます。

## 関連情報

- [CSS ボックス配置](/ja/docs/Web/CSS/CSS_box_alignment)モジュール
- 関連用語:
  - {{Glossary("alignment container","配置コンテナー")}}
