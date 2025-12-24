---
title: First contentful paint
slug: Glossary/First_contentful_paint
---

{{GlossarySidebar}}

**First Contentful Paint** (FCP) は、ブラウザーが DOM から最初のコンテンツをレンダリングし、ページが実際に読み込み中であるというフィードバックをユーザーに与えるまでの時間です。FCP が終了したということは、「（ナビゲーションが）行われたのか」という問いに答えるものです。

FCP タイムスタンプは、ブラウザーがテキスト、画像(背景画像を含む)、動画、あるいは描画済みの canvas や空ではない SVG を最初に描画したタイミングを指します。これには iframe の内容は含まれませんが、読み込み待ち状態の webfont を使ったテキストは対象となります。これが、ユーザーがページのコンテンツを消費し始めることができる最初のタイミングとなります。

## 参照

- [First Meaningful Paint](/ja/docs/Glossary/First_meaningful_paint)
- [Paint Timing specification](https://w3c.github.io/paint-timing/#first-contentful-paint)
