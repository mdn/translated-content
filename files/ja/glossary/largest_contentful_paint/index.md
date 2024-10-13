---
title: Largest contentful paint
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: 8bbefa76803785b6e0e1d278679c38b092e6b234
---

{{GlossarySidebar}}

**Largest Contentful Paint (LCP)** はウェブサイトのユーザビリティを測定する指標であり、Google が [Core Web Vitals](https://web.dev/explore/learn-core-web-vitals) を構成する指標群の一つとして設計しました。LCP は、ブラウザーがページの読み込みを開始してから、ビューポート内で視認可能な最大の画像またはテキストブロックのレンダリングが完了するまでの時間を測定します。

LCP を決定する要素の例として、以下が挙げられます :

- {{HTMLElement("img")}} 要素
- SVG 内の [`<image>`](/ja/docs/Web/SVG/Element/image) 要素
- {{HTMLElement("video")}} 要素のポスター画像
- {{cssxref("background-image")}} が設定された要素
- {{HTMLElement("p")}} などのテキストノードのまとまり

## 関連情報

- [`LargestContentfulPaint`](/ja/docs/Web/API/LargestContentfulPaint)
- web.dev 上の [LCP](https://web.dev/articles/lcp)
- {{Glossary("First contentful paint")}}
- {{Glossary("First paint")}}
