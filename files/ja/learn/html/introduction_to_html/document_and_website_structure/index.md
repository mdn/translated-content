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
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

{{glossary("HTML")}} は、ページの個々の部分 (「段落」や「画像」など) を定義するだけでなく、ウェブサイトの領域を定義するために使用される多数のブロックレベル要素 (「ヘッダー」、「ナビゲーションメニュー」、「メインコンテンツ列」など) も備えています。この記事では、基本的なウェブサイト構造を計画し、この構造を表す HTML を記述する方法について説明します。

| 前提条件: | 「[HTML を始めよう](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)」で説明されている基本的な HTML の理解。「[HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)」で説明されている HTML テキストの書式設定。「[ハイパーリンクの作成](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)」で説明されている、ハイパーリンクのしくみ。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | セマンティックタグを使用して文書を構造化する方法、および単純なウェブサイトの構造を作成する方法を学びます。                                                                                                                                                                                                                                                                                  |

## 文書の基本部分

ウェブページはひとつひとつの見た目が異なるものですが、全画面表示のビデオやゲームを表示している場合やアートプロジェクトの一部分である場合や単にまずく構成されている場合を除いて、よく似た標準コンポーネントを共有している傾向にあります:

- ヘッダー:
  - : 通常は大きな見出しやロゴの付いた上部の大きな部分。通常、ウェブページ間を移動しても、ウェブサイトに関する主な共通情報がととどまっている場所です。
- ナビゲーションバー:
  - : サイトの主要セクションへのリンク。通常はメニューボタン、リンク、またはタブで表されます。ヘッダーと同様に、このコンテンツは通常、あるウェブページから別のウェブページへと一貫性を保っています — あなたのウェブサイト上でナビゲーションが矛盾していると、混乱して欲求不満のあるユーザーになるだけです。多くの Web デザイナーはナビゲーションバーを個々のコンポーネントではなくヘッダーの一部と見なしていますが、これは必須ではありません。実際、スクリーンリーダーは 2 つの機能を別々にした方が読みやすくなるため、2 つの機能を別々に使用するほうが[アクセシビリティ](/ja/docs/Learn/Accessibility)に優れていると主張する人もいます。
- メインコンテンツ:
  - : 特定のウェブページのほとんどのユニークなコンテンツが含まれている中央の大きな領域。たとえば、見たいビデオ、読んでいる本編、表示したい地図、ニュースの見出しなど これは間違いなくページごとに異なるウェブサイトの一部です。
- サイドバー:
  - : いくつかの周辺情報、リンク、引用、広告など。通常これはメインコンテンツ (例えば、ニュース記事ページ、サイドバーに作者の略歴、または関連記事へのリンクなど) に含まれているものとの関連性があります。また、二次ナビゲーションシステムのように繰り返し発生する要素がある場合もあります。
- フッター:
  - : 通常、注意事項、著作権表示、または連絡先情報が含まれているページの下部にある部分。これは共通の情報 (ヘッダーなど) を入れる場所ですが、通常、その情報はウェブサイト自体にとって重要ではありません。フッターは、人気のあるコンテンツにすばやくアクセスするためのリンクを提供することで、{{Glossary("SEO")}} の目的で使用されることもあります。

「典型的なウェブサイト」は下記のようなレイアウトになります:

![a simple website structure example featuring a main heading, navigation menu, main content, side bar, and footer.](sample-website.png)

## コンテンツを構造化する HTML

上に示した簡単な例はきれいではありませんが、典型的なウェブサイトのレイアウト例を示すのには最適です。一部のウェブサイトはより多くのコラムを持っています、いくつかはかなり複雑ですが、アイデアはあります。適切な CSS を使用すれば、さまざまなセクションをラップして望みどおりの外観にするためにほとんどすべての要素を使用できますが、前述のとおり、セマンティクスを尊重し、**適切な役割に適切な要素を使用する**必要があります。

なぜならビジュアルがすべてを伝えるわけではないからです。私たちはナビゲーションメニューや関連リンクなど、コンテンツの最も有用な部分に目の見えるユーザーの注意を引くために、色とフォントサイズを使用します。しかし、例えば「ピンク」や「大きいフォント」のような概念があまり有用ではないと思われる視覚障害者についてはどうでしょうか。

> **Note:** 色覚障害者は[世界の人口の約 4 ％](http://www.color-blindness.com/2006/04/28/colorblind-population/)を占めています。言い換えれば、男性 12 人に 1 人、女性 200 人に 1 人が色覚異常です。視覚障害のある人々は世界の人口の約 4〜5 ％を占めています (2012 年には[全世界で 2 億 8,500 万人](https://en.wikipedia.org/wiki/Visual_impairment)の人々がいましたが、総人口は[約 70 億人](https://en.wikipedia.org/wiki/World_population#/media/File:World_population_history.svg)でした)。

HTML コードでは、それらの*機能*に基づいてコンテンツのセクションをマークアップすることができます — スクリーンリーダーのような支援技術はそれらの要素を認識し、「メインナビゲーションを見つける」や「メインコンテンツを見つける」といった作業を手助けすることができます。
コースの前半で述べたように、[適切な役割に適切な要素構造とセマンティクスを使用しないことによる影響](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Why_do_we_need_structure)は多くあります。

このようなセマンティックマークアップを実装するために、HTML には、そのようなセクションを表すために使用できる専用のタグが用意されています。次に例を示します。

- **ヘッダー:** {{htmlelement("header")}}.
- **ナビゲーションバー:** {{htmlelement("nav")}}.
- **メインコンテンツ:** {{htmlelement("main")}}。{{HTMLElement("article")}}、{{htmlelement("section")}}、および {{htmlelement("div")}} 要素で表されるさまざまなコンテンツサブセクションを含みます。
- **サイドバー:** {{htmlelement("aside")}}; {{htmlelement("main")}} の中に置かれることがよくあります。
- **フッター:** {{htmlelement("footer")}}.

### アクティブ学習: 実例のコードを見てみる

上記の例は次のコードで表されています ([この例は GitHub リポジトリにもあります](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/document_and_website_structure/index.html))。上の例を見てから、下のリストを見て、どの部分がビジュアルのどの部分を構成しているかを確認してください。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <title>My page title</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="style.css">

    <!-- the below three lines are a fix to get HTML5 semantic elements working in old versions of Internet Explorer-->
    <!--[if lt IE 9]>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
  </head>

  <body>
    <!-- Here is our main header that is used across all the pages of our website -->

    <header>
      <h1>Header</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

       <!-- A Search form is another commmon non-linear way to navigate through a website. -->

       <form>
         <input type="search" name="q" placeholder="Search query">
         <input type="submit" value="Go!">
       </form>
     </nav>

    <!-- Here is our page's main content -->
    <main>

      <!-- It contains an article -->
      <article>
        <h2>Article heading</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>

        <h3>subsection</h3>

        <p>Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.</p>

        <p>Pelientesque auctor nisi id magna consequat sagittis. Curabitur dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.</p>

        <h3>Another subsection</h3>

        <p>Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum soclis natoque penatibus et manis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>

        <p>Vivamus fermentum semper porta. Nunc diam velit, adipscing ut tristique vitae sagittis vel odio. Maecenas convallis ullamcorper ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, is fringille sem nunc vet mi.</p>
      </article>

      <!-- the aside content can also be nested within the main content -->
      <aside>
        <h2>Related</h2>

        <ul>
          <li><a href="#">Oh I do like to be beside the seaside</a></li>
          <li><a href="#">Oh I do like to be beside the sea</a></li>
          <li><a href="#">Although in the North of England</a></li>
          <li><a href="#">It never stops raining</a></li>
          <li><a href="#">Oh well...</a></li>
        </ul>
      </aside>

    </main>

    <!-- And here is our main footer that is used across all the pages of our website -->

    <footer>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>

  </body>
</html>
```

コードを見て理解するためにしばらく時間をかけてください — コード内のコメントもそれを理解するのに役立ちます。ドキュメントのレイアウトを理解するための鍵は、正しい HTML 構造を作成し、それを CSS でレイアウトすることです。CSS トピックの一部として CSS レイアウトの学習を始めるまで、これを待ちます。

## HTML レイアウト要素の詳細

すべての HTML セクショニング要素の全体的な意味を詳細に理解しておくとよいでしょう。これは、ウェブ開発でより多くの経験を積むようになるにつれて徐々に取り組むものです。 [HTML 要素のリファレンス](/ja/docs/Web/HTML/Element#Inline_text_semantics)を読むことによって多くの詳細を見つけることができます。今のところ、これらは理解するべき主な定義です：

- {{HTMLElement('main')}} は、このページに固有のコンテンツ用です。`<main>` はページごとに 1 回だけ使用し、{{HTMLElement('body')}} の中に直接入れてください。理想的には、これを他の要素の中に入れ子にしないでください。
- {{HTMLElement('article')}} は、ページの残りの部分 (例えば、単一のブログ記事) なしでそれ自体が意味をなす関連コンテンツのブロックを囲みます。
- {{HTMLElement('section')}} は `<article>` に似ていますが、1 つの機能 (例：ミニマップ、記事の見出しと要約のセット) を構成するページの単一部分をグループ化するためのものです。各セクションを[見出し](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Why_do_we_need_structure)で始めるのがベストプラクティスです。文脈に応じて、`<article>` を異なる `<section>` に、または `<section>` を異なる `<article>` に分割することもできます。
- {{HTMLElement('aside')}} には、メインコンテンツに直接関連しないコンテンツが含まれていますが、それに間接的に関連する追加情報 (用語集エントリ、著者略歴、関連リンクなど) を提供することができます。
- {{HTMLElement('header')}} は紹介コンテンツのグループを表します。それが {{HTMLElement('body')}} の子である場合、それはウェブページのグローバルヘッダーを定義しますが、{{HTMLElement('article')}} または {{HTMLElement('section')}} の子である場合、そのセクションのための特定のヘッダーを定義します (これを[タイトルや見出し](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_a_title)と混同しないようにしてください)。
- {{HTMLElement('nav')}} はページの主なナビゲーション機能を含みます。二次リンクなどはナビゲーションに入りません。
- {{HTMLElement('footer')}} はページの終了コンテンツのグループを表します。

### 非セマンティックなラッパー

時にはいくつかのアイテムをまとめたり、コンテンツをラップしたりするための理想的なセマンティック要素が見つからない場合があります。いくつかの {{glossary("CSS")}} や {{glossary("JavaScript")}} を持つ単一のエンティティとしてそれらすべてに影響を与えるために単に要素のセットを一緒にグループ化したいことがあります。このような場合に、HTML は {{HTMLElement("div")}} と {{HTMLElement("span")}} 要素を提供します。これらを適切な {{htmlattrxref('class')}} 属性と一緒に使用して、簡単にターゲティングできるようにそれらに何らかの種類のラベルを提供することをお勧めします。

{{HTMLElement("span")}} はインラインの非セマンティック要素です。コンテンツをラップするより良い意味的なテキスト要素が思いつかないか、または特定の意味を加えたくない場合にだけ使うべきです。例えば：

```html
<p>The King walked drunkenly back to his room at 01:00, the beer doing nothing to aid
him as he staggered through the door <span class="editor-note">[Editor's note: At this point in the
play, the lights should be down low]</span>.</p>
```

この場合、編集者のメモは単に演劇の監督に追加の指示を与えることになっています。特別な意味を持つことは想定されていません。視覚のある人にとっては、CSS はメモを本文からわずかに離すように使われます。

{{HTMLElement("div")}} はブロックレベルの非セマンティック要素であり、使用するセマンティックブロック要素を考えない場合、または特定の意味を追加したくない場合にのみ使用してください。たとえば、電子商取引サイトで、いつでも買い物をすることができるショッピングカートのウィジェットを想像してみてください。

```html
<div class="shopping-cart">
  <h2>Shopping cart</h2>
  <ul>
    <li>
      <p><a href=""><strong>Silver earrings</strong></a>: $99.95.</p>
      <img src="../products/3333-0985/thumb.png" alt="Silver earrings">
    </li>
    <li>
      ...
    </li>
  </ul>
  <p>Total cost: $237.89</p>
</div>
```

これは必ずしも `<aside>` ではありません。必ずしもページのメインコンテンツに関連しているわけではないからです (どこからでも見られるようにしたいのです)。ページのメインコンテンツの一部ではないので、`<section>` の使用を特に保証するものではありません。したがって、この場合は `<div>` で問題ありません。スクリーンリーダーのユーザーが見つけやすいように、道標として見出しを追加しました。

> **Warning:** **警告**: Div は使い勝手が良いので使いすぎになりがちです。それらは意味的な価値を持たないので、HTML コードを乱雑にするだけです。より良い意味的な解決策がない場合にのみ使用するように気を付けてください。

### 改行と垂直方向のルール

時々使う、そして知りたい 2 つの要素は {{htmlelement("br")}} と {{htmlelement("hr")}} です：

`<br>` は段落内に改行を作成します。これは、住所や詩のように一連の短い固定線が必要な状況で硬い構造を強制する唯一の方法です。例えば：

```html
<p>There once was a girl called Nell<br>
Who loved to write HTML<br>
But her structure was bad, her semantics were sad<br>
and her markup didn't read very well.</p>
```

`<br>` 要素がないと、段落は 1 行で表示されます (コースの前半で述べたように、[HTML はほとんどの空白を無視します](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Whitespace_in_HTML))。コード内でこれらを使用すると、マークアップは次のようにレンダリングされます。

There once was a man named O'Dell
Who loved to write HTML
But his structure was bad, his semantics were sad
and his markup didn't read very well.

`<hr>` 要素は、テキストの主題の変更 (トピックやシーンの変更など) を示す水平方向の罫線をドキュメントに作成します。視覚的には単に横線のように見えます。例として：

```
<p>ロンは荒廃した地獄の獣たちによって隅に追いやられた。怖がっていたが、彼の友達を守ることを決心していたので、彼は自分の杖を上げて戦いをする準備をした。</p>
<hr>
<p>その間、ハリーは家に座って、彼の使用料の声明を見つめてそして魅惑の苦痛の手紙が彼の窓を通って飛んで、そして彼の膝に着陸したときに次のスピンオフシリーズが出るだろう時を考えました。彼はそれをぼんやりと読んでため息をついた。「その時は仕事に戻るほうがいい」と彼は言った。</p>
```

このようにレンダリングされます：

ロンは荒廃した地獄の獣たちによって隅に追いやられた。怖がっていたが、彼の友達を守ることを決心していたので、彼は自分の杖を上げて戦いをする準備をした。

---

その間、ハリーは家に座って、彼の使用料の声明を見つめてそして魅惑の苦痛の手紙が彼の窓を通って飛んで、そして彼の膝に着陸したときに次のスピンオフシリーズが出るだろう時を考えました。彼はそれをぼんやりと読んでため息をついた。「その時は仕事に戻るほうがいい」と彼は言った。

## 簡単なウェブサイトを計画する

簡単なウェブページのコンテンツの構造を計画したら、次の論理的なステップは、ウェブサイト全体に掲載したいコンテンツ、必要なページ、および可能な限り最高のユーザーエクスペリエンスを実現するために、それらをどのように配置して互いにリンクさせるかを解決することです。これは {{glossary("Information architecture")}} と呼ばれます。大規模で複雑なウェブサイトでは、このプロセスに多くの計画を立てることがありますが、数ページの単純なウェブサイトでは、かなり単純で楽しいものになります。

1.  ナビゲーションメニューやフッターコンテンツなど、(全部ではないにしても) ほとんどのページに共通の要素がいくつかあることに注意してください。たとえば、サイトがビジネスのためのものである場合、連絡先情報を各ページのフッターで利用可能にすることは良い考えです。すべてのページに共通にしたいものを書き留めます。![the common features of the travel site to go on every page: title and logo, contact, copyright, terms and conditions, language chooser, accessibility policy](common-features.png)
2.  次に、各ページの構造をどのようにしたらよいかを大まかにスケッチします (上の単純なウェブサイトのようになります)。各ブロックがどうなるかに注意してください。![A simple diagram of a sample site structure, with a header, main content area, two optional sidebars, and footer](site-structure.png)
3.  さて、自身のウェブサイトに載せたい他のすべての (全ページに共通ではない) コンテンツをブレインストーミングしましょう — 大きなリストに書き留めます。![A long list of all the features that we could put on our travel site, from searching, to special offers and country-specific info](feature-list.png)
4.  次に、これらすべてのコンテンツ項目をグループに分類して、どの部分が異なるページに共存しているかを把握します。これは {{glossary("Card sorting")}} と呼ばれるテクニックと非常によく似ています。![The items that should appear on a holiday site sorted into 5 categories: Search, Specials, Country-specific info, Search results, and Buy things](card-sorting.png)
5.  それでは、大まかなサイトマップをスケッチしてみましょう。サイト上の各ページにバブルを付け、ページ間の典型的なワークフローを示すために線を引きます。
    ホームページはおそらく中心にあり、すべてではないにしてもほとんどのページにリンクするでしょう。例外はありますが、小規模サイトのほとんどのページはメインナビゲーションから利用できるはずです。物事がどのように提示されるかもしれないかについてのメモも含めることをお勧めします。![A map of the site showing the homepage, country page, search results, specials page, checkout, and buy page](site-map.png)

### アクティブラーニング: 自身のサイトマップを作成する

自身が作成したウェブサイトのために上記の演習を実行してみてください。何についてサイトを作りたいですか？

> **Note:** 作業をどこかに保存してください。後で必要になるかもしれません。

## まとめ

この時点であなたはウェブページ/サイトをどのように構成するかについてより良い考えを持っているはずです。このモジュールの最後の記事では、HTML をデバッグする方法を学びます。

## 関連情報

- [HTML のセクションとアウトラインの使用](/ja/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines): HTML 5 のセマンティック要素と HTML 5 のアウトラインアルゴリズムの上級ガイド。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

## このモジュール内

- [Getting started with HTML](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [What’s in the head? Metadata in HTML](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML text fundamentals](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [Creating hyperlinks](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [Advanced text formatting](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [Document and website structure](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [Debugging HTML](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Marking up a letter](/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [Structuring a page of content](/ja/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
