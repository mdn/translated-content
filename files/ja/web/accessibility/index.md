---
title: アクセシビリティ
slug: Web/Accessibility
tags:
  - Accessibility
  - Landing
translation_of: Web/Accessibility
---
<p><span class="seoSummary">ウェブ開発におけるアクセシビリティとは、何らかの理由により能力に制約がある場合でも、可能な限り多くの人々がウェブサイトを使用できるようにすることを意味します。この記事では、アクセシビリティを考慮したコンテンツを開発するための情報を提供します。</span></p>

<p>多くの人にとって、技術は物事を容易にします。障碍のある人にとっては、テクノロジーは物事を可能にしてくれます。アクセシビリティとは、個人の身体的・認知的能力やウェブへのアクセス方法に関わらず、可能な限りアクセス可能なコンテンツを開発することです。</p>

<p>「ハードウェア、ソフトウェア、言語、文化、所在地、物理的/精神的能力にかかわらず、<strong>ウェブは基本的にすべての人に向けて設計されています</strong>。ウェブがこの目的を達成できると、さまざまな聴力、視力、認知能力をもつ人々がウェブにアクセスできるようになります。」 (<a href="https://www.w3.org/standards/webdesign/accessibility">W3C - Accessibility</a>)</p>

<h2 id="Key_accessibility_tutorials">主なチュートリアル</h2>

<p>MDN の<a href="/ja/docs/Learn/Accessibility">アクセシビリティ学習エリア</a>には、アクセシビリティの基本事項を含むモダンな最新のチュートリアルが含まれています:</p>

<dl>
 <dt><a href="/ja/docs/Learn/Accessibility/What_is_accessibility">アクセシビリティとは何か？</a></dt>
 <dd>この記事では、アクセシビリティが実際にどのようなものであるかをよく見てモジュールを開始します。これには、どのグループを考慮する必要があるのかとそのグループの理由、さまざまな人々がウェブとやりとりするために使用するツール、アクセシビリティをウェブ開発ワークフローの一部にする方法を含みます。</dd>
 <dt><a href="/ja/docs/Learn/Accessibility/HTML">HTML: アクセシビリティのための良い基礎</a></dt>
 <dd>適切な HTML 要素が常に正しい目的で使用されていることを確認するだけで、大量のウェブコンテンツをアクセシブルにすることができます。この記事では、最大限のアクセシビリティを確保するために HTML をどのように使用できるかについて詳しく説明します。</dd>
 <dt><a href="/ja/docs/Learn/Accessibility/CSS_and_JavaScript">CSS と JavaScript のアクセシビリティベストプラクティス</a></dt>
 <dd>CSS と JavaScript を適切に使用すると、アクセシブルなウェブ体験を可能にするポテンシャルがあります。また、悪用されるとアクセシビリティに大きな悪影響を与える可能性があります。この記事では、複雑なコンテンツでさえも可能な限りアクセシブルであることを保証するために考慮する必要がある CSS と JavaScript のベストプラクティスの概要を説明します。</dd>
 <dt><a href="/ja/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA の基礎</a></dt>
 <dd>前の記事に従って、セマンティックでない HTML や動的に JavaScript で更新されたコンテンツを含む複雑なUIコントロールを作成することは理解しづらい場合があります。WAI-ARIA は、ブラウザーや支援技術が認識して使用できるセマンティクスを追加することで、このような問題の解決に役立つ技術です。ここでは、アクセシビリティを向上させるために基本レベルで使用する方法を示します。</dd>
 <dt><a href="/ja/docs/Learn/Accessibility/Multimedia">アクセシブルなマルチメディア</a></dt>
 <dd>アクセシビリティの問題を引き起こす可能性のある別のカテゴリーのコンテンツは、マルチメディアです。映像、音声、および画像のコンテンツには、補助的なテクノロジーとそのユーザーが理解できるように適切なテキストの代替が必要です。この記事では、その方法を示します。</dd>
 <dt><a href="/ja/docs/Learn/Accessibility/Mobile">モバイルアクセシビリティ</a></dt>
 <dd>モバイル端末でのウェブアクセスが普及しており、iOS や Android などの普及しているプラットフォームではアクセシビリティツールが完全に提供されているため、これらのプラットフォームでのウェブコンテンツのアクセシビリティを考慮する必要があります。この記事では、モバイル固有のアクセシビリティの考慮事項について説明します。</dd>
</dl>

<h2 id="Other_documentation">その他の文書</h2>

<dl>
 <dt><a href="/ja/docs/Web/Accessibility/Understanding_WCAG">ウェブコンテンツ・アクセシビリティガイドラインを理解する</a></dt>
 <dd>この一連の記事では、W3C ウェブコンテンツ・アクセシビリティガイドライン 2.0 (WCAG、Web Content Accessibility Guidelines) で概説されている推奨事項に準拠するために必要な手順を理解するのに役立つ簡単な説明を提供します。</dd>
 <dt><a href="/ja/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets">キーボードでナビゲート可能な JavaScript ウィジェット</a></dt>
 <dd>今まで、スタイル付きの <code>&lt;div&gt;</code> や <code>&lt;span&gt;</code> ベースのウィジェットを作りたいというウェブ開発者は、適切な技術を欠いていました。 <strong>キーボード・アクセシビリティ</strong>は、開発者が知っておくべき最低限のアクセシビリティ要件の一部です。</dd>
 <dt><a href="/ja/docs/Accessibility/ARIA"><font><font>ARIA</font></font></a></dt>
 <dd>ARIAを使用してHTML文書をより使いやすくする方法を学ぶための記事のコレクション。</dd>
 <dt><a href="/ja/docs/Web/Accessibility/AT_Development">支援技術 (AT) 開発</a></dt>
 <dd>支援技術の開発者向け記事のコレクション</dd>
 <dt><a href="/ja/docs/Web/Accessibility/Mobile_accessibility_checklist">モバイルアクセシビリティのチェックリスト</a></dt>
 <dd>このドキュメントは、モバイルアプリ開発者向けのアクセシビリティ要求事項の簡潔なチェックリストを提供します。</dd>
 <dt><a href="/ja/docs/Web/Accessibility/Cognitive_accessibility">Cognitive accessibility</a></dt>
 <dd>ウェブコンテンツを作成する際には、認知機能障碍者がアクセスできるようにすることを意識してください。</dd>
 <dt><a href="/ja/docs/Web/Accessibility/Seizure_disorders">痙攣性疾患に対するアクセシビリティ</a></dt>
 <dd>ウェブ上のビジュアルコンテンツの中には、特定の脳疾患を持つ人に発作を引き起こす可能性があるものがあります。問題となりうるコンテンツの種類を理解し、それらを回避するためのツールや戦略を見つけましょう。</dd>
</dl>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="https://lists.mozilla.org/listinfo/accessibility">アクセシビリティに関する Mozilla メーリングリスト</a></li>
 <li><a href="https://www.w3.org/WAI/IG/">WAI Interest Group</a></li>
 <li><a href="https://mozillians.org/en-US/group/1-accessibility">Mozillians group about accessibility</a></li>
 <li><a href="/ja/docs/Web/Guide">開発者ガイド</a></li>
 <li><a href="/ja/docs/Mozilla/Accessibility">アクセシビリティと Mozilla</a></li>
</ul>
