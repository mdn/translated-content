---
title: XSLT による XML の変換
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

コンテンツとプレゼンテーションの分離は、[XML](/ja/docs/Web/XML) の重要な設計の特徴です。 XML 文書の構造は、このデータが最終的にどのように表現されるべきかを示す必要性に妨げられることなく、コンテンツ自体の個々の側面間の重要な関係を反映し、明確にするように設計されています。このインテリジェントな構造化は、より多くのデータ移行を自動化し、ネットワークでリンクされた異機種間で配置する際に具体的な意味を持ちます。

しかし、 XML 文書内に格納されるコンテンツの多くは、最終的には人間の読者に表示する必要があります。ブラウザーは、親しみやすく柔軟性の高いインターフェイスを提供しているため、 XML コンテンツの表示版を提供するための理想的なメカニズムです。さまざまな XML 技術を利用して一から構築された Firefox は、元の XML 文書と、それらを HTML 表示用にスタイル設定およびレイアウトするために使用される特殊なスタイルシートの両方を処理するために必要なすべてのメカニズムをそれ自体に組み込んでおり、クライアントサイドの処理でサーバーの負荷を軽減します。

現時点で、 Gecko （Firefox のレイアウトエンジン）は 2 種類の XML 用のスタイルシートに対応しています。基本的な表示方法の制御 — フォント、色、位置、など — については、 Gecko は [CSS](/ja/docs/Web/CSS) を使用します。

ここでは、Gecko が対応している 2 つ目の種類のスタイルシート、XSLT スタイルシートに注目します。XSLT は eXtensible Stylesheet Language/Transform の略で、この名前は最適です。 XSLT は、スタイルシート作成者が主要な XML 文書を 2 つの重要な方法で変換することができます。コンテンツの操作と並べ替え（必要であれば、コンテンツの並べ替えも含みます）、およびコンテンツの異なる形式への変換（Firefox の場合は、ブラウザーで表示できる HTML への変換）です。

## 目次

- [概要](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/An_Overview)
- [参考文献](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading)

## XSLT/XPath リファレンス

- [要素](/ja/docs/Web/XML/XSLT/Reference/Element)
- [軸](/ja/docs/Web/XML/XPath/Reference/Axes)
- [関数](/ja/docs/Web/XML/XPath/Reference/Functions)

## 原典情報

- 著作権情報: Copyright © 2001-2003 Netscape. All rights reserved.
- 注: この転載記事はもともと DevEdge サイトの一部でした。
