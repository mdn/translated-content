---
title: ウェブコンテンツ・アクセシビリティガイドラインを理解する
slug: Web/Accessibility/Understanding_WCAG
tags:
  - Accessibility
  - WCAG
  - Web Content Accessibility Guidelines
translation_of: Web/Accessibility/Understanding_WCAG
---
<p class="summary"><span class="seoSummary">この一連の記事では、W3C {{glossary("WCAG","ウェブコンテンツ・アクセシビリティガイドライン")}} 2.0 または 2.1（WCAG、Web Content Accessibility Guidelines）で概説されている推奨事項に準拠するために必要な手順を理解するのに役立つ簡単な説明を提供します。</span></p>

<p>WCAG 2.0 と 2.1 は、さまざまな障碍を持つ人々にとってウェブコンテンツをよりアクセスしやすくするための詳細なガイドラインを提供しています。 それは包括的ですが信じられないほど詳細であり、そして迅速な理解を得ることは非常に困難です。 このため、さまざまな推奨事項を満たすために必要な実際的な手順をまとめ、必要に応じて詳細へのリンクを追加しました。</p>

<h2 id="The_four_principles" name="The_four_principles">4つの原則</h2>

<p>WCAG は大きく4つの原則に分割されます —  ウェブコンテンツがアクセス可能であるように熟慮<strong>しなければならない</strong>主要な事柄（WCAG 定義のための<a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head">アクセシビリティの4つの原則の理解</a>（英語）を参照してください）。</p>

<p>以下の各リンクはこれらの分野をさらに拡大するページにあなたを連れて行くでしょう。 それらは、WCAG 2.0 および 2.1 の各ガイドラインで概説されている達成基準に準拠するように、ウェブコンテンツの書き方について実際的なアドバイスを与え、各原則をさらに細分化します。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable">知覚可能</a>: ユーザーは、1つ以上の感覚を使って何らかの方法でそれを知覚できなければなりません。</li>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Operable">操作可能</a>: ユーザーは、UI 要素を制御できなければなりません（例えば、ボタンは、マウス、キーボード、音声コマンドなど、何らかの方法でクリック可能でなければならない）。</li>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Understandable">理解可能</a>: コンテンツはそのユーザーにとって理解可能でなければなりません。</li>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Robust">堅牢</a>: コンテンツは、現在および将来にわたって、さまざまなブラウザで機能する、広く採用されているウェブ標準を使用して開発する必要があります。</li>
</ul>

<h2 id="Should_I_use_WCAG_2.0_or_2.1" name="Should_I_use_WCAG_2.0_or_2.1">WCAG 2.0 と 2.1 のどちらを使うべきか？</h2>

<p>WCAG 2.1 は最新かつ関連性のあるアクセシビリティ標準です。 WCAG 2.1 を使用して、より多くの障碍者を支援し、ウェブサイト所有者に対する将来の法的リスクを軽減します。 リソースを割り当てるときは、最初に WCAG 2.0 を目標にしてください。 それから WCAG 2.1 にステップアップしてください。</p>

<h3 id="What_is_WCAG_2.1" name="What_is_WCAG_2.1">WCAG 2.1 とは何か？</h3>

<p>WCAG 2.1 は、2018年6月5日に公式勧告として発行されました。 欧州連合（EU）は、2018年9月にデジタルアクセシビリティ標準として WCAG 2.1 を採用しました。 W3C は、プレスリリース <a href="https://www.w3.org/blog/2018/09/wcag-2-1-adoption-in-europe/">ヨーロッパにおける WCAG 2.1 の採用</a>（英語）を発表しました。</p>

<p>WCAG 2.1 には以下が含まれます。</p>

<ul>
 <li>WCAG 2.0 の全て（逐語的、一字一句違わないで）</li>
 <li>A / AA / AAA レベルの17の新しい達成基準は、主に次の分野におけるユーザーのニーズに対応しています。
  <ul>
   <li>モバイルアクセシビリティ</li>
   <li>ロービジョン</li>
   <li>認知</li>
  </ul>
 </li>
 <li>WCAG 2.1 についてもっと読む
  <ul>
   <li>Deque: <a href="https://www.deque.com/blog/wcag-2-1-what-is-next-for-accessibility-guidelines/">WCAG 2.1: アクセシビリティガイドラインの次のステップ</a>（英語）</li>
   <li>TPG:  <a href="https://developer.paciellogroup.com/blog/2018/06/web-content-accessibility-guidelines-wcag-2-1/">ウェブコンテンツ・アクセシビリティガイドライン（WCAG）2.1</a>（英語）</li>
  </ul>
 </li>
</ul>

<h2 id="Legal_standing" name="Legal_standing">法的地位</h2>

<p>このガイドは、より良く、よりアクセスしやすいウェブサイトを構築するのに役立つ実用的な情報を提供することを目的としています。 しかし、私たちは弁護士ではありません、そしてこれのどれも法的助言を構成しません。 ウェブのアクセシビリティが法的にどのような意味を持つのかを心配している場合は、あなたの国や地域のウェブや公共のリソースに対するアクセシビリティを規定する特定の法律を調べ、有資格の弁護士に相談することをお勧めします。</p>

<p><a href="/ja/docs/Learn/Accessibility/What_is_accessibility">アクセシビリティとは？</a>と、その中の<a href="/ja/docs/Learn/Accessibility/What_is_accessibility#Accessibility_guidelines_and_the_law">アクセシビリティのガイドラインと法律</a>のセクションには、より関連性の高い情報が記載されています。</p>
