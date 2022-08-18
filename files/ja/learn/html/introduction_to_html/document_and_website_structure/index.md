---
title: ドキュメントと Web サイトの構造
slug: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
tags:
  - Beginner
  - CodingScripting
  - Guide
  - HTML
  - Layout
  - Page
  - Site
  - blocks
  - semantics
translation_of: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}</div>

<p class="summary">{{glossary("HTML")}} は、ページの個々の部分 (「段落」や「画像」など) を定義するだけでなく、ウェブサイトの領域を定義するために使用される多数のブロックレベル要素 (「ヘッダー」、「ナビゲーションメニュー」、「メインコンテンツ列」など) も備えています。この記事では、基本的なウェブサイト構造を計画し、この構造を表す HTML を記述する方法について説明します。</p>

<table class="learn-box standard-table">
 <tbody>
  <tr>
   <th scope="row">前提条件:</th>
   <td>「<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started">HTML を始めよう</a>」で説明されている基本的な HTML の理解。「<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals">HTML テキストの基礎</a>」で説明されている HTML テキストの書式設定。「<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">ハイパーリンクの作成</a>」で説明されている、ハイパーリンクのしくみ。</td>
  </tr>
  <tr>
   <th scope="row">目的:</th>
   <td>セマンティックタグを使用して文書を構造化する方法、および単純なウェブサイトの構造を作成する方法を学びます。</td>
  </tr>
 </tbody>
</table>

<h2 id="Basic_sections_of_a_document" name="Basic_sections_of_a_document">文書の基本部分</h2>

<p>ウェブページはひとつひとつの見た目が異なるものですが、全画面表示のビデオやゲームを表示している場合やアートプロジェクトの一部分である場合や単にまずく構成されている場合を除いて、よく似た標準コンポーネントを共有している傾向にあります:</p>

<dl>
 <dt>ヘッダー:</dt>
 <dd>通常は大きな見出しやロゴの付いた上部の大きな部分。通常、ウェブページ間を移動しても、ウェブサイトに関する主な共通情報がととどまっている場所です。</dd>
 <dt>ナビゲーションバー:</dt>
 <dd>サイトの主要セクションへのリンク。通常はメニューボタン、リンク、またはタブで表されます。ヘッダーと同様に、このコンテンツは通常、あるウェブページから別のウェブページへと一貫性を保っています — あなたのウェブサイト上でナビゲーションが矛盾していると、混乱して欲求不満のあるユーザーになるだけです。多くの Web デザイナーはナビゲーションバーを個々のコンポーネントではなくヘッダーの一部と見なしていますが、これは必須ではありません。実際、スクリーンリーダーは 2 つの機能を別々にした方が読みやすくなるため、2 つの機能を別々に使用するほうが<a href="/ja/docs/Learn/Accessibility">アクセシビリティ</a>に優れていると主張する人もいます。</dd>
 <dt>メインコンテンツ:</dt>
 <dd>特定のウェブページのほとんどのユニークなコンテンツが含まれている中央の大きな領域。たとえば、見たいビデオ、読んでいる本編、表示したい地図、ニュースの見出しなど これは間違いなくページごとに異なるウェブサイトの一部です。</dd>
 <dt>サイドバー:</dt>
 <dd>いくつかの周辺情報、リンク、引用、広告など。通常これはメインコンテンツ (例えば、ニュース記事ページ、サイドバーに作者の略歴、または関連記事へのリンクなど) に含まれているものとの関連性があります。また、二次ナビゲーションシステムのように繰り返し発生する要素がある場合もあります。</dd>
 <dt>フッター:</dt>
 <dd>通常、注意事項、著作権表示、または連絡先情報が含まれているページの下部にある部分。これは共通の情報 (ヘッダーなど) を入れる場所ですが、通常、その情報はウェブサイト自体にとって重要ではありません。フッターは、人気のあるコンテンツにすばやくアクセスするためのリンクを提供することで、{{Glossary("SEO")}} の目的で使用されることもあります。</dd>
</dl>

<p>「典型的なウェブサイト」は下記のようなレイアウトになります:</p>

<p><img alt="a simple website structure example featuring a main heading, navigation menu, main content, side bar, and footer." src="https://mdn.mozillademos.org/files/12417/sample-website.png" style="display: block; margin: 0 auto;"></p>

<h2 id="HTML_for_structuring_content" name="HTML_for_structuring_content">コンテンツを構造化する HTML</h2>

<p>上に示した簡単な例はきれいではありませんが、典型的なウェブサイトのレイアウト例を示すのには最適です。一部のウェブサイトはより多くのコラムを持っています、いくつかはかなり複雑ですが、アイデアはあります。適切な CSS を使用すれば、さまざまなセクションをラップして望みどおりの外観にするためにほとんどすべての要素を使用できますが、前述のとおり、セマンティクスを尊重し、<strong>適切な役割に適切な要素を使用する</strong>必要があります。</p>

<p>なぜならビジュアルがすべてを伝えるわけではないからです。私たちはナビゲーションメニューや関連リンクなど、コンテンツの最も有用な部分に目の見えるユーザーの注意を引くために、色とフォントサイズを使用します。しかし、例えば「ピンク」や「大きいフォント」のような概念があまり有用ではないと思われる視覚障害者についてはどうでしょうか。</p>

<div class="note">
<p><strong>注</strong>: 色覚障害者は<a href="http://www.color-blindness.com/2006/04/28/colorblind-population/">世界の人口の約 4 ％</a>を占めています。言い換えれば、男性 12 人に 1 人、女性 200 人に 1 人が色覚異常です。視覚障害のある人々は世界の人口の約 4〜5 ％を占めています (2012 年には<a href="https://en.wikipedia.org/wiki/Visual_impairment">全世界で 2 億 8,500 万人</a>の人々がいましたが、総人口は<a href="https://en.wikipedia.org/wiki/World_population#/media/File:World_population_history.svg">約 70 億人</a>でした)。</p>
</div>

<p>HTML コードでは、それらの<em>機能</em>に基づいてコンテンツのセクションをマークアップすることができます — スクリーンリーダーのような支援技術はそれらの要素を認識し、「メインナビゲーションを見つける」や「メインコンテンツを見つける」といった作業を手助けすることができます。<br>
 コースの前半で述べたように、<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Why_do_we_need_structure">適切な役割に適切な要素構造とセマンティクスを使用しないことによる影響</a>は多くあります。</p>

<p>このようなセマンティックマークアップを実装するために、HTML には、そのようなセクションを表すために使用できる専用のタグが用意されています。次に例を示します。</p>

<ul>
 <li><strong>ヘッダー: </strong>{{htmlelement("header")}}.</li>
 <li><strong>ナビゲーションバー: </strong>{{htmlelement("nav")}}.</li>
 <li><strong>メインコンテンツ: </strong>{{htmlelement("main")}}。{{HTMLElement("article")}}、{{htmlelement("section")}}、および {{htmlelement("div")}} 要素で表されるさまざまなコンテンツサブセクションを含みます。</li>
 <li><strong>サイドバー: </strong>{{htmlelement("aside")}}; {{htmlelement("main")}} の中に置かれることがよくあります。</li>
 <li><strong>フッター: </strong>{{htmlelement("footer")}}.</li>
</ul>

<h3 id="Active_learning_exploring_the_code_for_our_example" name="Active_learning_exploring_the_code_for_our_example">アクティブ学習: 実例のコードを見てみる</h3>

<p>上記の例は次のコードで表されています (<a href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/document_and_website_structure/index.html">この例は GitHub リポジトリにもあります</a>)。上の例を見てから、下のリストを見て、どの部分がビジュアルのどの部分を構成しているかを確認してください。</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;

    &lt;title&gt;My page title&lt;/title&gt;
    &lt;link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One" rel="stylesheet" type="text/css"&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;

    &lt;!-- the below three lines are a fix to get HTML5 semantic elements working in old versions of Internet Explorer--&gt;
    &lt;!--[if lt IE 9]&gt;
      &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;!-- Here is our main header that is used across all the pages of our website --&gt;

    &lt;header&gt;
      &lt;h1&gt;Header&lt;/h1&gt;
    &lt;/header&gt;

    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Our team&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Projects&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;

       &lt;!-- A Search form is another commmon non-linear way to navigate through a website. --&gt;

       &lt;form&gt;
         &lt;input type="search" name="q" placeholder="Search query"&gt;
         &lt;input type="submit" value="Go!"&gt;
       &lt;/form&gt;
     &lt;/nav&gt;

    &lt;!-- Here is our page's main content --&gt;
    &lt;main&gt;

      &lt;!-- It contains an article --&gt;
      &lt;article&gt;
        &lt;h2&gt;Article heading&lt;/h2&gt;

        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.&lt;/p&gt;

        &lt;h3&gt;subsection&lt;/h3&gt;

        &lt;p&gt;Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.&lt;/p&gt;

        &lt;p&gt;Pelientesque auctor nisi id magna consequat sagittis. Curabitur dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.&lt;/p&gt;

        &lt;h3&gt;Another subsection&lt;/h3&gt;

        &lt;p&gt;Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum soclis natoque penatibus et manis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.&lt;/p&gt;

        &lt;p&gt;Vivamus fermentum semper porta. Nunc diam velit, adipscing ut tristique vitae sagittis vel odio. Maecenas convallis ullamcorper ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, is fringille sem nunc vet mi.&lt;/p&gt;
      &lt;/article&gt;

      &lt;!-- the aside content can also be nested within the main content --&gt;
      &lt;aside&gt;
        &lt;h2&gt;Related&lt;/h2&gt;

        &lt;ul&gt;
          &lt;li&gt;&lt;a href="#"&gt;Oh I do like to be beside the seaside&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Oh I do like to be beside the sea&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Although in the North of England&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;It never stops raining&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Oh well...&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/aside&gt;

    &lt;/main&gt;

    &lt;!-- And here is our main footer that is used across all the pages of our website --&gt;

    &lt;footer&gt;
      &lt;p&gt;©Copyright 2050 by nobody. All rights reversed.&lt;/p&gt;
    &lt;/footer&gt;

  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>コードを見て理解するためにしばらく時間をかけてください — コード内のコメントもそれを理解するのに役立ちます。ドキュメントのレイアウトを理解するための鍵は、正しい HTML 構造を作成し、それを CSS でレイアウトすることです。CSS トピックの一部として CSS レイアウトの学習を始めるまで、これを待ちます。</p>

<h2 id="HTML_layout_elements_in_more_detail" name="HTML_layout_elements_in_more_detail">HTML レイアウト要素の詳細</h2>

<p>すべての HTML セクショニング要素の全体的な意味を詳細に理解しておくとよいでしょう。これは、ウェブ開発でより多くの経験を積むようになるにつれて徐々に取り組むものです。  <a href="/ja/docs/Web/HTML/Element#Inline_text_semantics">HTML 要素のリファレンス</a>を読むことによって多くの詳細を見つけることができます。今のところ、これらは理解するべき主な定義です：</p>

<ul>
 <li>{{HTMLElement('main')}} は、このページに固有のコンテンツ用です。<code>&lt;main&gt;</code> はページごとに 1 回だけ使用し、{{HTMLElement('body')}} の中に直接入れてください。理想的には、これを他の要素の中に入れ子にしないでください。</li>
 <li>{{HTMLElement('article')}} は、ページの残りの部分 (例えば、単一のブログ記事) なしでそれ自体が意味をなす関連コンテンツのブロックを囲みます。</li>
 <li>{{HTMLElement('section')}} は <code>&lt;article&gt;</code> に似ていますが、1 つの機能 (例：ミニマップ、記事の見出しと要約のセット) を構成するページの単一部分をグループ化するためのものです。各セクションを<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Why_do_we_need_structure">見出し</a>で始めるのがベストプラクティスです。文脈に応じて、<code>&lt;article&gt;</code> を異なる <code>&lt;section&gt;</code> に、または <code>&lt;section&gt;</code> を異なる <code>&lt;article&gt;</code> に分割することもできます。</li>
 <li>{{HTMLElement('aside')}} には、メインコンテンツに直接関連しないコンテンツが含まれていますが、それに間接的に関連する追加情報 (用語集エントリ、著者略歴、関連リンクなど) を提供することができます。</li>
 <li>{{HTMLElement('header')}} は紹介コンテンツのグループを表します。それが {{HTMLElement('body')}} の子である場合、それはウェブページのグローバルヘッダーを定義しますが、{{HTMLElement('article')}} または {{HTMLElement('section')}} の子である場合、そのセクションのための特定のヘッダーを定義します (これを<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_a_title">タイトルや見出し</a>と混同しないようにしてください)。</li>
 <li>{{HTMLElement('nav')}} はページの主なナビゲーション機能を含みます。二次リンクなどはナビゲーションに入りません。</li>
 <li>{{HTMLElement('footer')}} はページの終了コンテンツのグループを表します。</li>
</ul>

<h3 id="Non-semantic_wrappers" name="Non-semantic_wrappers">非セマンティックなラッパー</h3>

<p>時にはいくつかのアイテムをまとめたり、コンテンツをラップしたりするための理想的なセマンティック要素が見つからない場合があります。いくつかの {{glossary("CSS")}} や {{glossary("JavaScript")}} を持つ単一のエンティティとしてそれらすべてに影響を与えるために単に要素のセットを一緒にグループ化したいことがあります。このような場合に、HTML は {{HTMLElement("div")}} と {{HTMLElement("span")}} 要素を提供します。これらを適切な {{htmlattrxref('class')}} 属性と一緒に使用して、簡単にターゲティングできるようにそれらに何らかの種類のラベルを提供することをお勧めします。</p>

<p>{{HTMLElement("span")}} はインラインの非セマンティック要素です。コンテンツをラップするより良い意味的なテキスト要素が思いつかないか、または特定の意味を加えたくない場合にだけ使うべきです。例えば：</p>

<pre class="brush: html notranslate">&lt;p&gt;The King walked drunkenly back to his room at 01:00, the beer doing nothing to aid
him as he staggered through the door &lt;span class="editor-note"&gt;[Editor's note: At this point in the
play, the lights should be down low]&lt;/span&gt;.&lt;/p&gt;</pre>

<p>この場合、編集者のメモは単に演劇の監督に追加の指示を与えることになっています。特別な意味を持つことは想定されていません。視覚のある人にとっては、CSS はメモを本文からわずかに離すように使われます。</p>

<p>{{HTMLElement("div")}} はブロックレベルの非セマンティック要素であり、使用するセマンティックブロック要素を考えない場合、または特定の意味を追加したくない場合にのみ使用してください。たとえば、電子商取引サイトで、いつでも買い物をすることができるショッピングカートのウィジェットを想像してみてください。</p>

<pre class="brush: html notranslate">&lt;div class="shopping-cart"&gt;
  &lt;h2&gt;Shopping cart&lt;/h2&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;p&gt;&lt;a href=""&gt;&lt;strong&gt;Silver earrings&lt;/strong&gt;&lt;/a&gt;: $99.95.&lt;/p&gt;
      &lt;img src="../products/3333-0985/thumb.png" alt="Silver earrings"&gt;
    &lt;/li&gt;
    &lt;li&gt;
      ...
    &lt;/li&gt;
  &lt;/ul&gt;
  &lt;p&gt;Total cost: $237.89&lt;/p&gt;
&lt;/div&gt;</pre>

<p>これは必ずしも <code>&lt;aside&gt;</code> ではありません。必ずしもページのメインコンテンツに関連しているわけではないからです (どこからでも見られるようにしたいのです)。ページのメインコンテンツの一部ではないので、<code>&lt;section&gt;</code> の使用を特に保証するものではありません。したがって、この場合は <code>&lt;div&gt;</code> で問題ありません。スクリーンリーダーのユーザーが見つけやすいように、道標として見出しを追加しました。</p>

<div class="warning">
<p><strong>警告</strong>: Div は使い勝手が良いので使いすぎになりがちです。それらは意味的な価値を持たないので、HTML コードを乱雑にするだけです。より良い意味的な解決策がない場合にのみ使用するように気を付けてください。</p>
</div>

<h3 id="Line_breaks_and_horizontal_rules" name="Line_breaks_and_horizontal_rules">改行と垂直方向のルール</h3>

<p><span class="tlid-translation translation" lang="ja"><span title="">時々使う、そして知りたい 2 つの要素</span></span>は {{htmlelement("br")}} と {{htmlelement("hr")}} です：</p>

<p><code>&lt;br&gt;</code> は段落内に改行を作成します。これは、住所や詩のように一連の短い固定線が必要な状況で硬い構造を強制する唯一の方法です。例えば：</p>

<pre class="brush: html notranslate">&lt;p&gt;There once was a girl called Nell&lt;br&gt;
Who loved to write HTML&lt;br&gt;
But her structure was bad, her semantics were sad&lt;br&gt;
and her markup didn't read very well.&lt;/p&gt;</pre>

<p><code>&lt;br&gt;</code> 要素がないと、段落は 1行で表示されます (コースの前半で述べたように、<a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Whitespace_in_HTML">HTML はほとんどの空白を無視します</a>)。コード内でこれらを使用すると、マークアップは次のようにレンダリングされます。</p>

<p>There once was a man named O'Dell<br>
 Who loved to write HTML<br>
 But his structure was bad, his semantics were sad<br>
 and his markup didn't read very well.</p>

<p><code>&lt;hr&gt;</code> 要素は、テキストの主題の変更 (トピックやシーンの変更など) を示す水平方向の罫線をドキュメントに作成します。視覚的には単に横線のように見えます。例として：</p>

<pre class="notranslate">&lt;p&gt;ロンは荒廃した地獄の獣たちによって隅に追いやられた。怖がっていたが、彼の友達を守ることを決心していたので、彼は自分の杖を上げて戦いをする準備をした。&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;その間、ハリーは家に座って、彼の使用料の声明を見つめてそして魅惑の苦痛の手紙が彼の窓を通って飛んで、そして彼の膝に着陸したときに次のスピンオフシリーズが出るだろう時を考えました。彼はそれをぼんやりと読んでため息をついた。「その時は仕事に戻るほうがいい」と彼は言った。&lt;/p&gt;</pre>

<p>このようにレンダリングされます：</p>

<p>ロンは荒廃した地獄の獣たちによって隅に追いやられた。怖がっていたが、彼の友達を守ることを決心していたので、彼は自分の杖を上げて戦いをする準備をした。</p>

<hr>
<p>その間、ハリーは家に座って、彼の使用料の声明を見つめてそして魅惑の苦痛の手紙が彼の窓を通って飛んで、そして彼の膝に着陸したときに次のスピンオフシリーズが出るだろう時を考えました。彼はそれをぼんやりと読んでため息をついた。「その時は仕事に戻るほうがいい」と彼は言った。</p>

<h2 id="Planning_a_simple_website" name="Planning_a_simple_website">簡単なウェブサイトを計画する</h2>

<p><span class="tlid-translation translation" lang="ja"><span title="">簡単なウェブページのコンテンツの構造を計画したら、次の論理的なステップは</span><span title="">、ウェブサイト全体に掲載したいコンテンツ</span><span title="">、必要なページ</span><span title="">、および可能な限り最高のユーザーエクスペリエンスを実現するために、それらをどのように配置して互いにリンクさせるかを解決することです。</span></span>これは {{glossary("Information architecture")}} と呼ばれます。大規模で複雑なウェブサイトでは、このプロセスに多くの計画を立てることがありますが、数ページの単純なウェブサイトでは、かなり単純で楽しいものになります。</p>

<ol>
 <li>ナビゲーションメニューやフッターコンテンツなど、(全部ではないにしても) ほとんどのページに共通の要素がいくつかあることに注意してください。たとえば、サイトがビジネスのためのものである場合、連絡先情報を各ページのフッターで利用可能にすることは良い考えです。すべてのページに共通にしたいものを書き留めます。<img alt="the common features of the travel site to go on every page: title and logo, contact, copyright, terms and conditions, language chooser, accessibility policy" src="https://mdn.mozillademos.org/files/12423/common-features.png" style="border-style: solid; border-width: 1px; display: block; height: 375px; margin: 0px auto; width: 600px;"></li>
 <li>次に、各ページの構造をどのようにしたらよいかを大まかにスケッチします (上の単純なウェブサイトのようになります)。各ブロックがどうなるかに注意してください。<img alt="A simple diagram of a sample site structure, with a header, main content area, two optional sidebars, and footer" src="https://mdn.mozillademos.org/files/12429/site-structure.png" style="border-style: solid; border-width: 1px; display: block; height: 232px; margin: 0px auto; width: 600px;"></li>
 <li>さて、自身のウェブサイトに載せたい他のすべての (全ページに共通ではない) コンテンツをブレインストーミングしましょう — 大きなリストに書き留めます。<img alt="A long list of all the features that we could put on our travel site, from searching, to special offers and country-specific info" src="https://mdn.mozillademos.org/files/12425/feature-list.png" style="border-style: solid; border-width: 1px; display: block; height: 1066px; margin: 0px auto; width: 600px;"></li>
 <li>次に、これらすべてのコンテンツ項目をグループに分類して、どの部分が異なるページに共存しているかを把握します。これは {{glossary("Card sorting")}} と呼ばれるテクニックと非常によく似ています。<img alt="The items that should appear on a holiday site sorted into 5 categories: Search, Specials, Country-specific info, Search results, and Buy things" src="https://mdn.mozillademos.org/files/12421/card-sorting.png" style="border-style: solid; border-width: 1px; display: block; height: 579px; margin: 0px auto; width: 600px;"></li>
 <li>それでは、大まかなサイトマップをスケッチしてみましょう。サイト上の各ページにバブルを付け、ページ間の典型的なワークフローを示すために線を引きます。<br>
  ホームページはおそらく中心にあり、すべてではないにしてもほとんどのページにリンクするでしょう。例外はありますが、小規模サイトのほとんどのページはメインナビゲーションから利用できるはずです。物事がどのように提示されるかもしれないかについてのメモも含めることをお勧めします。<img alt="A map of the site showing the homepage, country page, search results, specials page, checkout, and buy page" src="https://mdn.mozillademos.org/files/12427/site-map.png" style="border-style: solid; border-width: 1px; display: block; height: 872px; margin: 0px auto; width: 600px;"></li>
</ol>

<h3 id="Active_learning_create_your_own_sitemap" name="Active_learning_create_your_own_sitemap">アクティブラーニング: 自身のサイトマップを作成する</h3>

<p>自身が作成したウェブサイトのために上記の演習を実行してみてください。何についてサイトを作りたいですか？</p>

<div class="note">
<p><strong>注</strong>: 作業をどこかに保存してください。後で必要になるかもしれません。</p>
</div>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>この時点であなたはウェブページ/サイトをどのように構成するかについてより良い考えを持っているはずです。このモジュールの最後の記事では、HTML をデバッグする方法を学びます。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines">HTML のセクションとアウトラインの使用</a>: HTML 5 のセマンティック要素と HTML 5 のアウトラインアルゴリズムの上級ガイド。</li>
</ul>

<p>{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}</p>

<h2 id="In_this_module" name="In_this_module">このモジュール内</h2>

<ul>
 <li><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started">Getting started with HTML</a></li>
 <li><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML">What’s in the head? Metadata in HTML</a></li>
 <li><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals">HTML text fundamentals</a></li>
 <li><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">Creating hyperlinks</a></li>
 <li><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting">Advanced text formatting</a></li>
 <li><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure">Document and website structure</a></li>
 <li><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML">Debugging HTML</a></li>
 <li><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter">Marking up a letter</a></li>
 <li><a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content">Structuring a page of content</a></li>
</ul>
