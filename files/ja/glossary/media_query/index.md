---
title: Media query (メディアクエリー)
slug: Glossary/Media_query
l10n:
  sourceCommit: 9ff83eb7950a8d4e2d55d61fcf9b06cf82eae6bf
---

{{GlossarySidebar}}

**メディアクエリー** (media query) は、CSS、JavaScript、HTML、その他のウェブ言語において、文書のコンテンツとは無関係に、文書が表示されているユーザーエージェントや端末の側面をチェックし、関連するコードブロックや特性クエリーが適用されるべきかどうかを判断するための論理式です。

メディアクエリーは、 CSS の {{cssxref("@media")}} および {{cssxref("@import")}} アットルールで CSS スタイルを条件付きで適用するために使用され、 JavaScript では {{DOMxRef("Window.matchMedia", "matchMedia()")}} メソッド、 {{DOMxRef("MediaQueryList.matches", "matches")}} プロパティ、 {{DOMxRef("MediaQueryList.change_event", "change")}} イベントなどでモニターのメディア状態を検査するために使用されます。メディアクエリーは [`<link>`](/ja/docs/Web/HTML/Element/link#media)、[`<source>`](/ja/docs/Web/HTML/Element/source#media)、[`<style>`](/ja/docs/Web/HTML/Element/style#media) など [HTML](/ja/docs/Web/HTML) 要素における `media` 属性の値として用い、メディアクエリーが真であれば、条件付きでリンク、ソース、スタイルを適用します。 `media` 属性を省略すると、既定で `true` となります。メディアクエリーは {{HTMLElement("img")}} 要素の [`sizes`](/ja/docs/Web/API/HTMLImageElement/sizes) 属性の値としても使用されます。

メディアクエリーは、オプションのメディアクエリー修飾子とメディア型、そして 0 個以上のメディア条件と論理演算子で構成されます。

メディアクエリーは、ユーザーがブラウザーウィンドウを拡張したときや、モバイル端末を縦向きから横向きに反転させたときなど、ユーザー環境の変化に応じて再評価されます。

複数のカンマで区切られたメディアクエリーは、**メディアクエリーリスト**を構成します。メディアクエリーリストは、その要素であるメディアクエリーのいずれかが真であれば真となり、すべて偽である場合にのみ偽となります。

メディアクエリーにはオプションで接頭辞として単一のメディアクエリー修飾子、`not`、`only` を付けることができ、 `not` の場合は以下のメディアクエリーの意味を変更します。

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)モジュール
