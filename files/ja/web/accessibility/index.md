---
title: アクセシビリティ
slug: Web/Accessibility
---

ウェブ開発におけるアクセシビリティとは、何らかの理由により能力に制約がある場合でも、可能な限り多くの人々がウェブサイトを使用できるようにすることを意味します。この記事では、アクセシビリティを考慮したコンテンツを開発するための情報を提供します。

多くの人にとって、技術は物事を容易にします。障碍のある人にとっては、テクノロジーは物事を可能にしてくれます。アクセシビリティとは、個人の身体的・認知的能力やウェブへのアクセス方法に関わらず、可能な限りアクセス可能なコンテンツを開発することです。

「ハードウェア、ソフトウェア、言語、文化、所在地、物理的/精神的能力にかかわらず、**ウェブは基本的にすべての人に向けて設計されています**。ウェブがこの目的を達成できると、さまざまな聴力、視力、認知能力をもつ人々がウェブにアクセスできるようになります。」 ([W3C - Accessibility](https://www.w3.org/standards/webdesign/accessibility))

## 主なチュートリアル

MDN の[アクセシビリティ学習エリア](/ja/docs/Learn/Accessibility)には、アクセシビリティの基本事項を含むモダンな最新のチュートリアルが含まれています:

- [アクセシビリティとは何か？](/ja/docs/Learn/Accessibility/What_is_accessibility)
  - : この記事では、アクセシビリティが実際にどのようなものであるかをよく見てモジュールを開始します。これには、どのグループを考慮する必要があるのかとそのグループの理由、さまざまな人々がウェブとやりとりするために使用するツール、アクセシビリティをウェブ開発ワークフローの一部にする方法を含みます。
- [HTML: アクセシビリティのための良い基礎](/ja/docs/Learn/Accessibility/HTML)
  - : 適切な HTML 要素が常に正しい目的で使用されていることを確認するだけで、大量のウェブコンテンツをアクセシブルにすることができます。この記事では、最大限のアクセシビリティを確保するために HTML をどのように使用できるかについて詳しく説明します。
- [CSS と JavaScript のアクセシビリティベストプラクティス](/ja/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : CSS と JavaScript を適切に使用すると、アクセシブルなウェブ体験を可能にするポテンシャルがあります。また、悪用されるとアクセシビリティに大きな悪影響を与える可能性があります。この記事では、複雑なコンテンツでさえも可能な限りアクセシブルであることを保証するために考慮する必要がある CSS と JavaScript のベストプラクティスの概要を説明します。
- [WAI-ARIA の基礎](/ja/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : 前の記事に従って、セマンティックでない HTML や動的に JavaScript で更新されたコンテンツを含む複雑な UI コントロールを作成することは理解しづらい場合があります。WAI-ARIA は、ブラウザーや支援技術が認識して使用できるセマンティクスを追加することで、このような問題の解決に役立つ技術です。ここでは、アクセシビリティを向上させるために基本レベルで使用する方法を示します。
- [アクセシブルなマルチメディア](/ja/docs/Learn/Accessibility/Multimedia)
  - : アクセシビリティの問題を引き起こす可能性のある別のカテゴリーのコンテンツは、マルチメディアです。映像、音声、および画像のコンテンツには、補助的なテクノロジーとそのユーザーが理解できるように適切なテキストの代替が必要です。この記事では、その方法を示します。
- [モバイルアクセシビリティ](/ja/docs/Learn/Accessibility/Mobile)
  - : モバイル端末でのウェブアクセスが普及しており、iOS や Android などの普及しているプラットフォームではアクセシビリティツールが完全に提供されているため、これらのプラットフォームでのウェブコンテンツのアクセシビリティを考慮する必要があります。この記事では、モバイル固有のアクセシビリティの考慮事項について説明します。

## その他の文書

- [ウェブコンテンツ・アクセシビリティガイドラインを理解する](/ja/docs/Web/Accessibility/Understanding_WCAG)
  - : この一連の記事では、W3C ウェブコンテンツ・アクセシビリティガイドライン 2.0 (WCAG、Web Content Accessibility Guidelines) で概説されている推奨事項に準拠するために必要な手順を理解するのに役立つ簡単な説明を提供します。
- [キーボードでナビゲート可能な JavaScript ウィジェット](/ja/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : 今まで、スタイル付きの `<div>` や `<span>` ベースのウィジェットを作りたいというウェブ開発者は、適切な技術を欠いていました。 **キーボード・アクセシビリティ**は、開発者が知っておくべき最低限のアクセシビリティ要件の一部です。
- [ARIA](/ja/docs/Accessibility/ARIA)
  - : ARIA を使用して HTML 文書をより使いやすくする方法を学ぶための記事のコレクション。
- [支援技術 (AT) 開発](/ja/docs/Web/Accessibility/AT_Development)
  - : 支援技術の開発者向け記事のコレクション
- [モバイルアクセシビリティのチェックリスト](/ja/docs/Web/Accessibility/Mobile_accessibility_checklist)
  - : このドキュメントは、モバイルアプリ開発者向けのアクセシビリティ要求事項の簡潔なチェックリストを提供します。
- [Cognitive accessibility](/ja/docs/Web/Accessibility/Cognitive_accessibility)
  - : ウェブコンテンツを作成する際には、認知機能障碍者がアクセスできるようにすることを意識してください。
- [痙攣性疾患に対するアクセシビリティ](/ja/docs/Web/Accessibility/Seizure_disorders)
  - : ウェブ上のビジュアルコンテンツの中には、特定の脳疾患を持つ人に発作を引き起こす可能性があるものがあります。問題となりうるコンテンツの種類を理解し、それらを回避するためのツールや戦略を見つけましょう。

## 関連情報

- [アクセシビリティに関する Mozilla メーリングリスト](https://lists.mozilla.org/listinfo/accessibility)
- [WAI Interest Group](https://www.w3.org/WAI/IG/)
- [Mozillians group about accessibility](https://mozillians.org/en-US/group/1-accessibility)
- [開発者ガイド](/ja/docs/Web/Guide)
- [アクセシビリティと Mozilla](/ja/docs/Mozilla/Accessibility)
