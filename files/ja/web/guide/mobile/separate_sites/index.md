---
title: モバイルとデスクトップで別々のサイト
slug: Web/Guide/Mobile/Separate_sites
tags:
  - Mobile
  - Web Development
translation_of: Web/Guide/Mobile/Separate_sites
---
<p>モバイルウェブ開発への「別々のサイト」アプローチは、モバイルウェブユーザーとデスクトップウェブユーザーのために異なるサイトを作成することを含みます。このアプローチにはプラス面とマイナス面があります。</p>

<h2 id="The_good" name="The_good">長所</h2>

<p>この最初の選択肢はこれまでで最も人気があります — <a href="https://ja.wikipedia.org/wiki/ユーザーエージェント#ユーザーエージェント・スニッフィング">ユーザーエージェント検出</a>を使用して、携帯電話のユーザーを別のモバイルサイト（典型的には m.example.com）に転送する方法です。一言で言えば、このテクニックではサーバー側のロジックを使用して<a href="http://blog.mozilla.com/webdev/2011/05/04/approaches-to-mobile-web-development-part-1-what-is-mobile-friendliness/">モバイルウェブ開発の 3 つの目標</a>（英語）すべてを一度に解決します — ユーザーのブラウザーが携帯電話のように見える場合は、携帯電話用にフォーマットされ、速度が最適化されたモバイルコンテンツを配信します。</p>

<p>概念的には単純ですが、特にテンプレートをサポートする CMS またはウェブアプリケーションを使用している場合は、これが既存のサイトに追加する最も簡単な選択肢です。モバイルユーザーにはモバイル固有のコンテンツ、スタイル、およびスクリプトのみが送信されるため、この方法では、ここに示されている他の選択肢のどれよりも最高のパフォーマンスが得られます。最終的に、デスクトップとモバイルでまったく異なるユーザーエクスペリエンスを実現できます — 結局のところ、それらは 2 つの異なるサイトです！</p>

<h2 id="The_bad" name="The_bad">短所</h2>

<p>残念ながら、このアプローチは欠点がないわけではありません。手始めに、モバイルユーザーに公開したいサイトの各ページに対して 2 つの異なるページを管理しています。CMS を使用している場合は、この重複を最小限に抑えるようにサイトのテンプレートを配置することが可能です。ただし、モバイルとデスクトップでテンプレートに違いがあるときはいつでも、コードには複雑な原因がひそんでいます。同様に、2 セットのフロントエンドロジックをコーディングする必要があるため、これにより新しいサイト機能の実装時間が長くなります。</p>

<p>ただし、それよりもさらに重要なのは、ユーザーエージェントの検出には<a href="http://css-tricks.com/browser-detection-is-bad/">本質的に欠陥があり</a>（英語）、将来を見据えたものではないという事実です。新しいブラウザーが登場するたびに、それに対応するようにアルゴリズムを調整する必要があります。そして誤検知は特に怖いです — モバイルサイトを誤ってデスクトップユーザーに配信すると当惑させるかもしれません。</p>

<h2 id="When_it_is_right_to_choose_this_option" name="When_it_is_right_to_choose_this_option">この選択肢を選ぶのが正しいとき</h2>

<p><img alt="sumo_screenshot.png" class="internal rwrap" src="/@api/deki/files/5893/=sumo_screenshot.png" style="float: right;">まず、対象視聴者に古いかローエンドの<a href="http://www.cnet.com/8301-17918_1-10461614-85.html">フィーチャーフォン</a>（英語）のユーザーが含まれている場合は、この戦略を<a href="http://www.passani.it/gap/#adaptation">ある程度</a>（英語）採用する必要があるかもしれません。これは、一部のフィーチャーフォンのデフォルトブラウザーは、デスクトップを対象としたウェブサイトと同じマークアップをサポートしておらず、代わりに <a href="http://ja.wikipedia.org/wiki/XHTML_Mobile_Profile">XHTML-MP</a> や古い <a href="http://ja.wikipedia.org/wiki/Wireless_Markup_Language">WML</a> などの形式を理解するためです。</p>

<p>この要因はさておき、この戦略が他の方法よりも本当に優れているケースが 1 つあります。モバイルデバイスでユーザーに提供したい機能がデスクトップのそれとは極端に異なる場合は、別々のサイトを使用するのが<a href="http://tripleodeon.com/2010/10/not-a-mobile-web-merely-a-320px-wide-one">最も実用的な選択</a>（英語）になる可能性があります。これは、完全に完全に別々の HTML、JavaScript、CSS を携帯電話と PC に送信するという選択肢があるからです。</p>

<p>このアプローチを使用することを余儀なくされるもう 1 つのケースは、何らかの理由で既存のデスクトップサイトを変更できず、100% 別のモバイルサイトを必要とする場合です。理想的ではありませんが、少なくともこの選択肢があります。</p>

<h2 id="Examples" name="Examples">例</h2>

<p><a class="external" href="http://m.facebook.com/">Facebook</a>、<a class="external" href="http://m.youtube.com/">YouTube</a>、<a class="external" href="http://m.digg.com/" title="Mobile Digg">Digg</a>、<a class="external" href="http://m.flickr.com/" title="Mobile Flickr">Flickr</a> など、あなたが実際に目にする主要なウェブアプリケーションのほとんどがこの方法を選択しています。実際、Mozilla はモバイル版の <a class="link-https" href="https://addons.mozilla.org/">addons.mozilla.org</a>（AMO）と <a class="external" href="http://support.mozilla.com/">support.mozilla.org</a>（SUMO）にこの戦略を選択しました。このアプローチの例の背後にあるソースコードを実際に見たい場合は、<a class="link-https" href="https://github.com/jbalogh/zamboni/">AMO</a> または <a class="link-https" href="https://github.com/jsocol/kitsune">SUMO</a>（リンク切れ）の github リポジトリをチェックしてください。</p>

<h2 id="Approaches_to_mobile_Web_development" name="Approaches_to_mobile_Web_development">モバイルウェブ開発へのアプローチ</h2>

<p>モバイルプラットフォーム向けに開発するための背景やその他のアプローチについては、以下の記事を参照してください。</p>

<ul>
 <li><a href="/ja/docs/Web/Guide/Mobile/Mobile-friendliness">モバイルの親しみやすさとは？</a></li>
 <li><a href="/ja/docs/Web_Development/Mobile/Responsive_design">レスポンシブデザイン</a></li>
 <li><a href="/ja/docs/Web/Guide/Mobile/A_hybrid_approach">ハイブリッドアプローチ</a></li>
</ul>

<div class="originaldocinfo">
<h3 id="Original_document_information" name="Original_document_information">原本情報</h3>

<p>この記事は、もともと 2011 年 5 月 13 日に Mozilla Webdev ブログで「<a href="http://blog.mozilla.com/webdev/2011/05/13/approaches-to-mobile-web-development-part-2-separate-sites/">モバイルウェブ開発へのアプローチ 第2部 - 別々のサイト</a>」として Jason Grlicky によって公開されました。（英語）</p>
</div>

<p> </p>
