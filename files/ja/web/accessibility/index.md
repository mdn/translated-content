---
title: アクセシビリティ
slug: Web/Accessibility
l10n:
  sourceCommit: a9c0161a34ba218e7acf6cdf0e93cbc0c36065a1
---

ウェブ開発において**アクセシビリティ** （Accessibility、よく **A11y** と略されます）とは、何らかの理由により能力に制約がある場合でも、可能な限り多くの人々がウェブサイトを使用できるようにすることを意味します。

多くの人にとって、技術は物事を容易にします。障碍のある人にとっては、技術は物事を可能にしてくれます。アクセシビリティとは、個人の身体的・認知的能力やウェブへのアクセス方法に関わらず、可能な限りアクセシブルなコンテンツを開発することです。

> ハードウェア、ソフトウェア、言語、文化、所在地、物理的/精神的能力にかかわらず、**ウェブは基本的にすべての人に向けて設計されています**。
> ウェブがこの目的を達成できると、さまざまな聴力、視力、認知能力をもつ人々がウェブにアクセスできるようになります。\
> – ([W3C - Accessibility](https://www.w3.org/standards/webdesign/accessibility))

## アクセシビリティガイド

[アクセシビリティガイド](/ja/docs/Web/Accessibility/Guides)では、製作の原則、 WCAG 準拠、アクセシブルなウィジェットとナビゲーション、モバイルのアクセシビリティ、およびアクセシビリティがウェブにとってなぜ重要なのか、自分のプロジェクトでアクセシビリティを改善する方法について理解するのに役立つその他の重要なトピックに応じた説明が記載されています。

- [ウェブ制作者のためのアクセシビリティ情報](/ja/docs/Web/Accessibility/Guides/Information_for_Web_authors)
  - : この文書には、ウェブサイトのアクセシビリティの問題を調べるおよび修復するためのガイドライン、規制、方法、およびツールが記載されています。
- [安全な閲覧に役立つ個人設定](/ja/docs/Web/Accessibility/Guides/Browsing_safely)
  - : この記事では、オペレーティングシステムに組み込まれている個人設定やアクセシビリティ設定を活用して、前庭障碍のある方やその支援者の方々にとってウェブコンテンツをアクセシブルにする方法について説明します。
- [アクセシブルなウェブアプリケーションとウィジェット](/ja/docs/Web/Accessibility/Guides/Accessible_web_applications_and_widgets)
  - : 多くの JavaScript ライブラリーは、使い慣れたデスクトップインターフェイスの動作を模倣したクライアントサイドウィジェットのライブラリーを提供しています。
    これにより、デスクトップのウィジェットと同様の外観のウィジェットを作成することができますが、通常、支援技術で使用できるだけの意味情報（マークアップ）はマークアップには含まれていません。
    この記事では、このようなウィジェットのアクセシビリティを向上させるための手法について記述しています。
- [キーボードで操作可能な JavaScript ウィジェット](/ja/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
  - : 今まで、スタイル付きの `<div>` や `<span>` ベースのウィジェットをアクセシブルにしたいというウェブ開発者にとって、適切な技術がありませんでした。
    **キーボードアクセシビリティ**は、開発者が知っておくべき最低限のアクセシビリティ要件の一部です。
    この記事では、JavaScript ウィジェットをキーボードでアクセシブルにする手法について説明します。
- [モバイルアクセシビリティのチェックリスト](/ja/docs/Web/Accessibility/Guides/Mobile_accessibility_checklist)
  - : この記事は、モバイルアプリ開発者向けのアクセシビリティ要求事項の簡潔なチェックリストを提供します。
- [ウェブコンテンツアクセシビリティガイドライン (WCAG) を理解する](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - : この一連の記事では、W3C のウェブコンテンツアクセシビリティガイドライン (WCAG、Web Content Accessibility Guidelines) で概説されている推奨事項に準拠するために必要な手順を理解するのに役立つ簡単な説明を提供します。
- [認知的アクセシビリティ](/ja/docs/Web/Accessibility/Guides/Cognitive_accessibility)
  - : ウェブコンテンツを作成する際には、認知機能障碍者がアクセスできるようにすることを意識してください。
    この文書では、認知のアクセシビリティと、認知や学習に違いのある人々のためのウェブのアクセシビリティの改善について紹介します。
- [アクセシビリティと空間パターン](/ja/docs/Web/Accessibility/Guides/Accessibility_and_Spatial_Patterns)
  - : この文書では、光刺激性てんかん、前庭障碍、またはそれ以外の知覚の問題を有する人に身体的症状を引き起こす可能性のある視覚パターンについて説明しています。
- [ウェブアクセシビリティ: 色と輝度を理解する](/ja/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : 色、輝度、彩度を理解することは、すべての視力のあるユーザーにとってデザインや読みやすさのために重要ですが、視力低下や色覚障碍のあるユーザー、および特定の神経障害、認知障害、その他の障害のあるユーザーにとっては不可欠です。
- [痙攣性疾患に対するウェブアクセシビリティ](/ja/docs/Web/Accessibility/Guides/Seizure_disorders)
  - : ウェブ上の視覚的コンテンツの中には、特定の脳疾患を持つ人に発作を引き起こす可能性があるものがあります。
    この記事では、問題となる可能性のあるコンテンツの種類を理解し、それらを避けるためのツールや戦略を見つけるのに役立つ情報を提供しています。
- [ARIA](/ja/docs/Web/Accessibility/ARIA)
  - : これは、 HTML 文書をアクセシブルにするために、アクセシブルなリッチインターネットアプリケーション (ARIA) を使用する方法を学ぶための記事の集合です。

## 初心者向けチュートリアル

MDN の[アクセシビリティ学習領域](/ja/docs/Learn_web_development/Core/Accessibility)には、アクセシビリティの基本事項を含む近代的な最新のチュートリアルが含まれています。

- [アクセシビリティとは何か](/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
  - : この記事では、アクセシビリティが実際にどのようなものであるかをよく見てモジュールを開始します。これには、どのグループを考慮する必要があるのかとそのグループの理由、さまざまな人々がウェブとやりとりするために使用するツール、アクセシビリティをウェブ開発ワークフローの一部にする方法を含みます。
- [HTML: アクセシビリティのための良い基礎](/ja/docs/Learn_web_development/Core/Accessibility/HTML)
  - : 適切な HTML 要素が常に正しい目的で使用されていることを確認するだけで、大量のウェブコンテンツをアクセシブルにすることができます。この記事では、最大限のアクセシビリティを確保するために HTML をどのように使用できるかについて詳しく説明します。
- [CSS と JavaScript のアクセシビリティベストプラクティス](/ja/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript)
  - : CSS と JavaScript を適切に使用すると、アクセシビリティの高いウェブ体験を可能にするポテンシャルがあります。また、悪用されるとアクセシビリティに大きな悪影響を与える可能性があります。この記事では、複雑なコンテンツでさえも可能な限りアクセシブルであることを保証するために考慮する必要がある CSS と JavaScript のベストプラクティスの概要を説明します。
- [WAI-ARIA の基礎](/ja/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)
  - : 前の記事に従って、セマンティックでない HTML や動的に JavaScript で更新されたコンテンツを含む複雑な UI コントロールを作成することは理解しづらい場合があります。WAI-ARIA は、ブラウザーや支援技術が認識して使用できるセマンティクスを追加することで、このような問題の解決に役立つ技術です。ここでは、アクセシビリティを向上させるために基本レベルで使用する方法を示します。
- [アクセシビリティの高いマルチメディア](/ja/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : アクセシビリティの問題を引き起こす可能性のある別のカテゴリーのコンテンツは、マルチメディアです。映像、音声、および画像のコンテンツには、補助的なテクノロジーとそのユーザーが理解できるように適切なテキストの代替が必要です。この記事では、その方法を示します。
- [モバイルアクセシビリティ](/ja/docs/Learn_web_development/Core/Accessibility/Mobile)
  - : モバイル端末でのウェブアクセスが普及しており、iOS や Android などの普及しているプラットフォームではアクセシビリティツールが完全に提供されているため、これらのプラットフォームでのウェブコンテンツのアクセシビリティを考慮する必要があります。この記事では、モバイル固有のアクセシビリティの考慮事項について説明します。

## リファレンス

- [ARIA リファレンス](/ja/docs/Web/Accessibility/ARIA/Reference)
  - : Reference documentation for Accessible Rich Internet Applications (ARIA) attributes and roles.

## 関連情報

- [開発者ガイド](/ja/docs/MDN/Guides)
- [WAI Interest Group](https://www.w3.org/WAI/about/groups/waiig/)
