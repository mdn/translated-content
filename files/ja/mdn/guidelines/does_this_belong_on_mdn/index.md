---
title: MDN Web Docs に掲載するものであるかどうか
slug: MDN/Guidelines/Does_this_belong_on_MDN
tags:
  - Guide
  - Guidelines
  - MDN Meta
translation_of: MDN/Guidelines/Does_this_belong_on_MDN
---
<div>{{MDNSidebar}}</div>

<p><span class="seoSummary">この記事では、ある主題やコンテンツの種類を MDN Web Docs に載せるべきかどうかを決定する方法について説明します。</span>また、詳細ではありませんが、コンテンツを配置する可能性のある他の場所についても検討します。</p>

<h2 id="The_question">問い</h2>

<p>何らかの文書をまとめる準備をしている場合、その情報を MDN Web Docs に載せるどうか考えるかもしれません。加えて、ソースコード内の文書を維持したり、その文書を <a href="https://wiki.mozilla.org/">Mozilla wiki</a> や、git リポジトリー内の readme ファイルに置いたりすることを検討しているかもしれません。この記事の目的は、あなたのコンテンツが、これらのオプションのどれにふさわしいのかを決めるのに役立つことです。</p>

<p>文書を MDN に載せるかどうかについて、主に 2 つ考慮する点があります。</p>

<ul>
 <li>文書の主題 (何についてのものか)</li>
 <li>文書の性質 (これはどんな種類の文書か)</li>
</ul>

<p>MDN への寄稿は、すべて特定のオープンソースライセンスに該当することに注意してください。これは <a href="/ja/docs/MDN/About">MDN について</a>ページに<a href="/ja/docs/MDN/About#copyrights_and_licenses">詳細に記されています</a>。</p>

<div class="note">
<p><strong>注</strong>: MDN Web Docs を利用したり、投稿したりする際には、Mozilla の<a href="https://www.mozilla.org/en-US/about/legal/terms/mozilla/">ウェブサイトおよびコミュニケーション利用規約</a>が適用されることに注意してください。この文書を確認して、 Mozilla のサイトで投稿できること、できないことを確認してください。</p>
</div>

<h2 id="What_topics_belong_on_MDN_Web_Docs">どのようなトピックが MDN Web Docs に載るのか</h2>

<p>一般的には、オープンなウェブ向きの技術であれば、MDN 上で文書化します。これは、現在および近い将来にサイトやアプリケーションを作成するウェブ開発者が使用できる機能を意味します。複数のブラウザーで実装されていて、標準として受け入れられているか、標準化に向けて進んでいるものであれば、そうですね。もしそれがまだ非常に実験的で、複数のブラウザーで実装されておらず、変更される可能性がある場合、それでも載せるのに適してはいますが、ライターのチームが取り組むべき優先事項とは見なされないかもしれません。</p>

<p>主にフロントエンドのウェブ技術に重点を置いています。</p>

<ul>
 <li><a href="/ja/docs/Web/HTML">HTML</a></li>
 <li><a href="/ja/docs/Web/CSS">CSS</a></li>
 <li><a href="/ja/docs/Web/JavaScript">JavaScript</a></li>
 <li><a href="/ja/docs/Web/SVG">SVG</a></li>
 <li><a href="/ja/docs/Web/API">Web APIs</a></li>
 <li><a href="/ja/docs/Web/API/WebGL_API">WebGL</a></li>
 <li>など</li>
</ul>

<div class="note">
<p><strong>Note</strong>: バックエンドテクノロジーには、別の文書化の場所があり、 MDN はこれにとって代わるつもりはありませんが、<a href="/ja/docs/Learn/Server-side">いくつかの例外はあります</a>。</p>
</div>

<p>また、複数の技術にまたがるが、以下のようなウェブ開発に関連したトピックも歓迎します。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility">Accessibility</a></li>
 <li><a href="/ja/docs/Web/Guide/AJAX">AJAX</a></li>
 <li><a href="/ja/docs/Web/Guide/Graphics">ウェブグラフィック</a></li>
 <li><a href="/ja/docs/Web/Progressive_web_apps">プログレッシブウェブアプリ</a></li>
 <li><a href="/ja/docs/Games">ウェブベースのゲーム</a></li>
</ul>

<div class="note">
<p><strong>注:</strong> MDN は、ウェブに公開されていて、特に一般的に使われている場合には、一部の標準外の機能をカバーしています。例えば、WebKit 固有の CSS プロパティのドキュメントがあります。MDN は、ウェブ開発者にとって十分に有用であると考えられる場合には、ウェブ標準以外の技術もカバーしています。<a href="/ja/docs/Related">ウェブ関連技術</a>のセクションを参照してください。</p>
</div>

<h2 id="What_topics_dont_belong_on_MDN_Web_Docs">MDN Web Docs に掲載しない主題</h2>

<p>一般医、オープンなウェブ標準ではないものはすべて、MDN に掲載するものではありません。以下にもっと具体的に示します。</p>

<h3 id="Mozilla_products">Mozilla 製品</h3>

<p>このカテゴリーの文書には、 Mozilla 製品に対して開発者として作業する方法と、これらのオープンソースプロジェクトに貢献する方法との、両方があります。</p>

<p>MDN には Mozilla 製品の文書が大量にありますが、新規コンテンツ開発の重点はオープンウェブに置いています。MDN に Mozilla 製品の文書を新規作成することは推奨されません。Mozilla 製品 (やそうなるかもしれない製品) の作業を進めている場合は、<a href="https://wiki.mozilla.org/Engagement/MDN_Durable_Team">MDN スタッフチーム</a>のメンバーに話して、その製品の文書化の道を議論してください。また、下記の<a href="#cases_for_documenting_elsewhere">他の場所に文書化する場合</a>も見てください。</p>

<ul>
 <li><a href="/ja/docs/Mozilla/Firefox">Firefox ブラウザー</a>

  <ul>
   <li><a href="/ja/docs/Tools">Firefox 開発ツール</a></li>
   <li><a href="/ja/docs/Mozilla/Add-ons">アドオン</a></li>
   <li><a href="/ja/docs/Mozilla/Developer_guide/Build_Instructions">Firefox の構築と構成</a></li>
   <li>など</li>
  </ul>
 </li>
 <li><a href="/ja/docs/Mozilla">Mozilla プラットフォーム</a>
  <ul>
   <li><a href="/ja/docs/Mozilla/Gecko">Gecko</a></li>
   <li><a href="/ja/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a></li>
   <li>など</li>
  </ul>
 </li>
</ul>

<h3 id="What_else">それ以外</h3>

<p>その他の MDN Web Docs のトピックとして適切ではないものの例です。</p>

<ul>
 <li>ウェブに公開されていない技術で、Mozilla 以外のブラウザーに固有のもの</li>
 <li>ウェブにも Mozilla 製品にも関係しない技術</li>
 <li>エンドユーザー向け文書。Mozilla 製品では、こうした文書は <a href="https://support.mozilla.org">Mozilla サポートサイト</a>に載っています。</li>
</ul>

<h2 id="What_types_of_documents_belong_on_MDN">MDN に掲載する文書の種類</h2>

<p>一般に、MDN は<em>プロダクト</em>のドキュメントであり、<em>プロジェクト</em>や<em>プロセス</em>のドキュメントではありません (<a href="/ja/docs/MDN">MDN 自体について</a>を除く)。そのため、もしドキュメントが「どのように使うか」や「どのように動作するか」 (「どの」とは下記で記述されている特定のカテゴリのことです) なら MDN に掲載しましょう。しかし、「誰が開発したか」や「開発プランについて」などは MDN にふさわしくありません。Mozilla 傘下で開発されているものの場合は <a href="https://wiki.mozilla.org/Main_Page">Mozilla project wiki</a> に掲載するといいでしょう。</p>

<p>MDN に掲載するのにふさわしく<em>ない</em>種類の文書の例をいくつか挙げます。</p>

<ul>
 <li>計画書</li>
 <li>設計書</li>
 <li>プロジェクト提案書</li>
 <li>仕様書や標準</li>
 <li>プロモーション素材、広告、<a href="#about_your_profile">個人情報</a></li>
</ul>
