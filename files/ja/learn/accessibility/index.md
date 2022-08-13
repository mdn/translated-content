---
title: アクセシビリティ
slug: Learn/Accessibility
tags:
  - ARIA
  - Accessibility
  - Articles
  - Beginner
  - CSS
  - CodingScripting
  - HTML
  - JavaScript
  - Landing
  - Learn
  - Module
  - アクセシビリティ
  - ランディング
  - 初心者
translation_of: Learn/Accessibility
---
<div>{{LearnSidebar}}</div>

<p class="summary">ウェブ開発者になりたい場合、HTML, CSS, JavaScript の学習は役立ちます。しかし知識は単に技術を使うよりも前に進める必要があります — それらを責任を持って使う必要があり、その結果ウェブサイトの聴衆を増やし、またそれを使わないことに縛らないことになります。これを達成するには、一般的な成功事例 (<a href="/ja/docs/Learn/HTML">HTML</a>, <a href="/ja/docs/Learn/CSS">CSS</a>, <a href="/ja/docs/Learn/JavaScript">JavaScript</a> のトピックに示されています) を積み上げ、<a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing">クロスブラウザーテスト</a>を行って、最初からアクセシビリティを考慮しておきます。このモジュールでは後者を詳しく扱います。</p>

<h2 id="Prerequisites" name="Prerequisites">前提知識</h2>

<p>このモジュールの大半の理解には、少なくとも <a href="/ja/docs/Learn/HTML">HTML</a>, <a href="/ja/docs/Learn/CSS">CSS</a>, <a href="/ja/docs/Learn/JavaScript">JavaScript</a> の最初の 2 モジュールを通して読むのが良いでしょうし、 たぶんもっと良いのは、関連するテクノロジートピックを進めるにつれて、関連するアクセシビリティの部分を進めるのが良いでしょう。</p>

<div class="note">
<p><strong>メモ</strong>: 自分のファイルを作れない コンピューター/タブレット/その他の端末で作業する場合、コードの実例の大半を <a href="https://jsbin.com/">JSBin</a> や <a href="https://glitch.com/">Glitch</a> などのオンラインコーディングプログラム内で試すことができます。</p>
</div>

<h2 id="Guides" name="Guides">ガイド</h2>

<dl>
 <dt><a href="/ja/docs/Learn/Accessibility/What_is_accessibility">アクセシビリティとは？</a></dt>
 <dd>この記事では実際アクセシビリティとは何かについてよく観察するモジュールから開始します — これには考慮が必要な人のグループや、いろいろな人がウェブとやり取りするのになぜ、どんなツールを使うのかや、アクセシビリティをウェブ開発の作業フローに取り組む方法が含まれます。</dd>
 <dt><a href="/ja/docs/Learn/Accessibility/HTML">HTML: アクセシビリティの基礎</a></dt>
 <dd>ウェブコンテンツをアクセシビリティ高くすることの多くの部分は、どんなときも正しい HTML要素を正しい目的で使うことです。 この記事ではアクセシビリティを最大化するためにどう HTML が使われるかの詳細を見ていきます。</dd>
 <dt><a href="/ja/docs/Learn/Accessibility/CSS_and_JavaScript">CSS と JavaScript のアクセシビリティ成功事例</a></dt>
 <dd>CSS と JavaScript も、適切に使うと、アクセシビリティの高いウェブ体験を可能にする力を持っていますが、誤用されると目立ってアクセシビリティを害することもあります。この記事では、複雑なコンテンツでもなるべくアクセシビリティ高める CSS と JavaScript のいくつかの成功事例をざっと見ます。</dd>
 <dt><a href="/ja/docs/Learn/Accessibility/WAI-ARIA_basics">WAI-ARIA の基本</a></dt>
 <dd>前の記事に続いて、複雑な UI に非セマンティックな HTML や動的な JavaScript-更新コンテンツを作ることは難しいかもしれません。WAI-ARIA は、そうした問題をブラウザーと補助技術が認識できるセマンティクスを追加することで補助し、ユーザーに何が起きているのかを知らせるのに使うテクノロジーです。ここではアクセシビリティを改善する基本レベルの使用方法を示します。</dd>
 <dt><a href="/ja/docs/Learn/Accessibility/Multimedia">アクセシブルなマルチメディア</a></dt>
 <dd>アクセシビリティの問題を起こす可能性がある他のカテゴリは、マルチメディアです。ビデオ、オーディオ、およびイメージのコンテンツには、補助技術とユーザーが理解できるような、適切な代替テキストを付与する必要があります。どのように表示されるべきか分かるように。</dd>
 <dt><a href="/ja/docs/Learn/Accessibility/Mobile">モバイルアクセシビリティ</a></dt>
 <dd>モバイル端末でのウェブへのアクセスが増えるとともに、アクセシビリティのツールが本格的に提供されている iOS や Android のような一般的なプラットフォームが普及しています。これらのプラットフォームでのあなたのウェブコンテンツのアクセシビリティを考えることが重要です。モバイル特有のアクセシビリティについて検討しましょう。</dd>
</dl>

<h2 id="Assessments" name="Assessments">評価</h2>

<dl>
 <dt><a href="/ja/docs/Learn/Accessibility/Accessibility_troubleshooting">アクセシビリティのトラブルシューティング</a></dt>
 <dd>このモジュールの評価では、分析と修正が必要な多くのアクセシビリティの問題があるシンプルなサイトを紹介します。</dd>
</dl>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://egghead.io/courses/start-building-accessible-web-applications-today">Start Building Accessible Web Applications Today</a> — Marcy Sutton によるすばらしい動画チュートリアル</li>
 <li><a href="https://dequeuniversity.com/resources/">Deque University resources</a> — コードサンプルやスクリーンリーダーリファレンスやその他の役立つリソースを含む</li>
 <li><a href="http://webaim.org/resources/">WebAIM resources</a> — ガイド、チェックリスト、ツールなどを含む</li>
</ul>
