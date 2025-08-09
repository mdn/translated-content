---
title: Largest contentful paint
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Largest Contentful Paint** (LCP) はパフォーマンス指標であり、ブラウザーがページの読み込みを開始してから、ビューポート内で視認可能な最大の画像またはテキストブロックのレンダリングが完了するまでの時間です。

LCP を決定する要素の例として、以下が挙げられます。

- {{HTMLElement("img")}} 要素
- SVG 内の [`<image>`](/ja/docs/Web/SVG/Reference/Element/image) 要素
- {{HTMLElement("video")}} 要素のポスター画像
- {{cssxref("background-image")}} が設定された要素
- {{HTMLElement("p")}} などのテキストノードのまとまり

## 関連情報

- [`LargestContentfulPaint`](/ja/docs/Web/API/LargestContentfulPaint)
- 関連用語項目
- {{Glossary("First contentful paint")}}
- {{Glossary("First paint")}}
