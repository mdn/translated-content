---
title: 文書とウェブサイトの構造
slug: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
l10n:
  sourceCommit: 65b9418c7d0e3a331ac50249adf0024f44789923
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

{{glossary("HTML")}} は、ページの個々の部分（「段落」や「画像」など）を定義するだけでなく、ウェブサイトの領域を定義するために使用される多数のブロックレベル要素（「ヘッダー」、「ナビゲーションメニュー」、「メインコンテンツ列」など）も備えています。この記事では、基本的なウェブサイト構造を計画し、この構造を表す HTML を記述する方法について説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML を始めよう</a
        >で説明されている基本的な HTML の理解。
        <a
          href="/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML テキストの基礎</a
        >で説明されている HTML テキストの書式設定。
        <a
          href="/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >ハイパーリンクの作成</a
        >で説明されている、ハイパーリンクのしくみ。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        意味づけタグを使用して文書を構造化する方法と、簡単なウェブサイトの構造を作り出す方法を学びます。
      </td>
    </tr>
  </tbody>
</table>

## 文書の基本部分

ウェブページはひとつひとつの見た目が異なるものですが、全画面表示のビデオやゲームを表示している場合やアートプロジェクトの一部分である場合や単にまずく構成されている場合を除いて、よく似た標準コンポーネントを共有している傾向にあります。

- ヘッダー:
  - : 通常は大きな見出しやロゴの付いた上部の大きな部分。通常、ウェブページ間を移動しても、ウェブサイトに関する主な共通情報がととどまっている場所です。
- ナビゲーションバー:
  - : サイトの主要部分へのリンク。通常はメニューボタン、リンク、またはタブで表されます。ヘッダーと同様に、このコンテンツは通常、あるウェブページから別のウェブページへと一貫性を保っています — ウェブサイト上でナビゲーションが矛盾していると、ユーザーが混乱して欲求不満になるだけです。多くのウェブデザイナーは、ナビゲーションバーを個々のコンポーネントではなくヘッダーの一部と見なしていますが、これは必須ではありません。実際、スクリーンリーダーは 2 つの機能を別々にした方が読みやすくなるため、2 つの機能を別々に使用するほうが[アクセシビリティ](/ja/docs/Learn/Accessibility)に優れていると主張する人もいます。
- メインコンテンツ:
  - : 中央の大きな領域で、指定されたウェブページの固有の内容のほとんどを含みます。例えば、見たい動画、読んでいる本編、見たい地図、ニュースの見出しなどです。この部分は、間違いなくページごとに異なるウェブサイトとなります。
- サイドバー:
  - : いくつかの周辺情報、リンク、引用、広告など。通常これはメインコンテンツ（例えば、ニュース記事ページ、サイドバーに作者の略歴、関連記事へのリンクなど）に含まれているものとの関連性があります。また、二次ナビゲーションシステムのように繰り返し発生する要素がある場合もあります。
- フッター:
  - : 通常、注意事項、著作権表示、連絡先情報が含まれているページの下部にある部分。これは共通の情報（ヘッダーなど）を入れる場所ですが、通常、その情報はウェブサイト自体にとって重要ではありません。フッターは、人気のあるコンテンツにすばやくアクセスするためのリンクを提供することで、 {{Glossary("SEO")}} の目的で使用されることもあります。

「典型的なウェブサイト」は下記のようなレイアウトになります。

![大見出し、ナビゲーションメニュー、本文、サイドバー、フッターのシンプルなウェブサイト構成例です。](sample-website.png)

> **メモ:** 上の画像は、HTML で定義することができる文書の主要な節を示したものです。しかし、ここで示すページのレイアウトや色、フォントなどの「見た目」は、[CSS](/ja/docs/Learn/CSS) を HTML に適用することで実現されています。
>
> このモジュールでは CSS は教えませんが、HTMLの基本的な理解ができたら、[CSS の第一歩](/ja/docs/Learn/CSS/First_steps)モジュールに進んで、サイトのスタイル設定を始めてみてください。

## コンテンツを構造化する HTML

上に示した簡単な例はきれいではありませんが、典型的なウェブサイトのレイアウト例を示すのには最適です。一部のウェブサイトはより多くのコラムを持っています、いくつかはかなり複雑ですが、アイデアはあります。適切な CSS を使用すれば、さまざまなセクションを囲んで望みどおりの外観にするためにほとんどすべての要素を使用できますが、前述のとおり、セマンティクスを尊重し、**適切な役割に適切な要素を使用する**必要があります。

なぜならビジュアルがすべてを伝えるわけではないからです。私たちはナビゲーションメニューや関連リンクなど、コンテンツの最も有用な部分に目の見えるユーザーの注意を引くために、色とフォントサイズを使用します。しかし、例えば「ピンク」や「大きいフォント」のような概念があまり有用ではないと思われる視覚障碍者についてはどうでしょうか。

> **メモ:** [およそ 8% の男性と 0.5% の女性](http://www.color-blindness.com/)が色覚障碍者です。言い換えれば、男性 12 人に 1 人、女性 200 人に 1 人の割合です。視覚障碍のある人々は世界の人口の約 4〜5 ％を占めています（2015 年には[全世界で 9 億 4,000 万人](https://en.wikipedia.org/wiki/Visual_impairment)の人々がいましたが、総人口は[約 75 億人](https://en.wikipedia.org/wiki/World_population#/media/File:World_population_history.svg)でした）。

HTML コードでは、それらの*機能*に基づいてコンテンツのセクションをマークアップすることができます — スクリーンリーダーのような支援技術はそれらの要素を認識し、「メインナビゲーションを見つける」や「メインコンテンツを見つける」といった作業を手助けすることができます。
コースの前半で述べたように、[適切な役割に適切な要素構造とセマンティクスを使用しないことによる影響](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#なぜ構造が必要なのか)は多くあります。

このような意味づけしたマークアップを実装するために、HTML には、そのようなセクションを表すために使用できる専用のタグが用意されています。次に例を示します。

- **ヘッダー:** {{htmlelement("header")}}。
- **ナビゲーションバー:** {{htmlelement("nav")}}。
- **メインコンテンツ:** {{htmlelement("main")}}。{{HTMLElement("article")}}、{{htmlelement("section")}}、{{htmlelement("div")}} 要素で表されるさまざまなコンテンツサブセクションを含みます。
- **サイドバー:** {{htmlelement("aside")}}。{{htmlelement("main")}} の中に置かれることがよくあります。
- **フッター:** {{htmlelement("footer")}}。

### アクティブラーニング: コード例を見てみる

上記の例は次のコードで表されています ([この例は GitHub リポジトリーにもあります](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/document_and_website_structure/index.html))。上の例を見てから、下のリストを見て、どの部分がビジュアルのどの部分を構成しているかを確認してください。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <title>My page title</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One"
      rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
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

      <!-- A Search form is another common non-linear way to navigate through a website. -->

      <form>
        <input type="search" name="q" placeholder="Search query" />
        <input type="submit" value="Go!" />
      </form>
    </nav>

    <!-- Here is our page's main content -->
    <main>
      <!-- It contains an article -->
      <article>
        <h2>Article heading</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>

        <h3>Subsection</h3>

        <p>
          Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem.
          Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.
        </p>

        <p>
          Pelientesque auctor nisi id magna consequat sagittis. Curabitur
          dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet.
          Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.
        </p>

        <h3>Another subsection</h3>

        <p>
          Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
          soclis natoque penatibus et manis dis parturient montes, nascetur
          ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem
          facilisis semper ac in est.
        </p>

        <p>
          Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
          tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
          ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi
          diam iaculis velit, is fringille sem nunc vet mi.
        </p>
      </article>

      <!-- the aside content can also be nested within the main content -->
      <aside>
        <h2>Related</h2>

        <ul>
          <li><a href="#">Oh I do like to be beside the seaside</a></li>
          <li><a href="#">Oh I do like to be beside the sea</a></li>
          <li><a href="#">Although in the North of England</a></li>
          <li><a href="#">It never stops raining</a></li>
          <li><a href="#">Oh well…</a></li>
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

時間をかけてコードに目を通し、理解してください。コードの中にあるコメントも理解の助けになるはずです。文書レイアウトを理解するための鍵は、健全な HTML 構造を書き、それを CSS でレイアウトすることなので、この記事ではそれ以上のことはお願いしていません。これは、 CSS のトピックの一部として、 CSS レイアウトの勉強を始めまでお預けです。

## HTML レイアウト要素の詳細

すべての HTML の区分化要素の全体的な意味を詳細に理解しておくとよいでしょう。これは、ウェブ開発でより多くの経験を積むようになるにつれて徐々に取り組むものです。 [HTML 要素のリファレンス](/ja/docs/Web/HTML/Element)を読むことによって多くの詳細を見つけることができます。今のところ、これらは理解するべき主な定義です。

- {{HTMLElement('main')}} は、このページに固有のコンテンツ用です。`<main>` はページごとに 1 回だけ使用し、 {{HTMLElement('body')}} の中に直接入れてください。理想的には、これを他の要素の中に入れ子にしないでください。
- {{HTMLElement('article')}} は、ページの残りの部分（例えば、単一のブログ記事）なしでそれ自体が意味をなす関連コンテンツのブロックを囲みます。
- {{HTMLElement('section')}} は `<article>` に似ていますが、1 つの機能（例：ミニマップ、記事の見出しと要約のセット）を構成するページの単一部分をグループ化するためのものです。各セクションを[見出し](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#なぜ構造が必要なのか)で始めるのがベストプラクティスです。文脈に応じて、`<article>` を異なる `<section>` に、または `<section>` を異なる `<article>` に分割することもできます。
- {{HTMLElement('aside')}} には、メインコンテンツに直接関連しないコンテンツが含まれていますが、それに間接的に関連する追加情報（用語集の項目、著者略歴、関連リンクなど）を提供することができます。
- {{HTMLElement('header')}}は、導入部のコンテンツ群を表します。もしそれが {{HTMLElement('body')}} の子であれば、ウェブページのグローバルヘッダーを定義します。しかし、 {{HTMLElement('article')}} または {{HTMLElement('section')}} の子であれば、そのセクションのための特定のヘッダーを定義します（このことを[タイトルや見出し](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#タイトルをつける)と混同しないでください）。
- {{HTMLElement('nav')}} はページの主なナビゲーション機能を含みます。二次リンクなどはナビゲーションに入りません。
- {{HTMLElement('footer')}} はページの終了コンテンツのグループを表します。

前述の各要素は、クリックすると「HTML 要素リファレンス」の該当記事を読むことができ、それぞれの要素についてはそちらでより詳しく説明されています。

### 意味的ではないラッパー

時にはいくつかのアイテムをまとめたり、コンテンツをラップしたりするための理想的な意味的要素が見つからない場合があります。いくつかの {{glossary("CSS")}} や {{glossary("JavaScript")}} を持つ単一のエンティティとしてそれらすべてに影響を与えるために単に要素のセットを一緒にグループ化したいことがあります。このような場合に、 HTML は {{HTMLElement("div")}} と {{HTMLElement("span")}} 要素を提供します。これらを適切な [`class`](/ja/docs/Web/HTML/Global_attributes#class) 属性と一緒に使用して、簡単にターゲティングできるようにそれらに何らかの種類のラベルを提供することをお勧めします。

{{HTMLElement("span")}} はインラインの非意味的要素です。コンテンツをラップするより良い意味的なテキスト要素が思いつかないか、または特定の意味を加えたくない場合にだけ使うべきです。例えば、

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

この場合、編集者のメモは単に演劇の監督に追加の指示を与えることになっています。特別な意味を持つことは想定されていません。視覚のある人にとっては、CSS はメモを本文からわずかに離すように使われます。

{{HTMLElement("div")}} はブロックレベルの非意味的要素であり、使用するセマンティックブロック要素を考えない場合、または特定の意味を追加したくない場合にのみ使用してください。たとえば、電子商取引サイトで、いつでも買い物をすることができるショッピングカートのウィジェットを想像してみてください。

```html-nolint
<div class="shopping-cart">
  <h2>Shopping cart</h2>
  <ul>
    <li>
      <p>
        <a href=""><strong>Silver earrings</strong></a>: $99.95.
      </p>
      <img src="../products/3333-0985/thumb.png" alt="Silver earrings" />
    </li>
    <li>…</li>
  </ul>
  <p>Total cost: $237.89</p>
</div>
```

これは必ずしも `<aside>` ではありません。必ずしもページのメインコンテンツに関連しているわけではないからです（どこからでも見られるようにしたいのです）。ページのメインコンテンツの一部ではないので、`<section>` の使用を特に保証するものではありません。したがって、この場合は `<div>` で問題ありません。スクリーンリーダーのユーザーが見つけやすいように、道標として見出しを追加しました。

> **警告:** div はとても便利に使用できるため、つい使いすぎてしまいがちです。意味的な価値を持たないので、 HTML コードを煩雑にするだけです。これらを使用するのは、意味的にもっと良い解決策がない場合に限るように注意し、使用箇所を最小限に抑えるようにしなければ、文書の更新や維持に苦労することになります。

### 改行と水平線

ときどき使用する要素で、知っておきたいのは {{htmlelement("br")}} と {{htmlelement("hr")}} の 2 つです。

#### \<br>: 改行要素

`<br>` は段落内に改行を生成します。郵便物の宛先や 詩のように、修正された短い行を連続させたい場面で、硬直した構造を強制する唯一の方法です。例えば、

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

`<br>` 要素がないと、段落は 1 行で表示されます (コースの前半で述べたように、[HTML はほとんどの空白を無視します](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#html_内のホワイトスペース))。コード内でこれらを使用すると、このマークアップは次のようにレンダリングされます。

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: 主題分割要素

`<hr>` 要素は、テキストの主題の変更（トピックやシーンの変更など）を示す水平方向の罫線を文書に作成します。視覚的には単に横線のように見えます。例えば次のようになります。

```html
<p>
  Ron was backed into a corner by the marauding netherbeasts. Scared, but
  determined to protect his friends, he raised his wand and prepared to do
  battle, hoping that his distress call had made it through.
</p>
<hr />
<p>
  Meanwhile, Harry was sitting at home, staring at his royalty statement and
  pondering when the next spin off series would come out, when an enchanted
  distress letter flew through his window and landed in his lap. He read it
  hazily and sighed; "better get back to work then", he mused.
</p>
```

このようにレンダリングされます。

{{EmbedLiveSample('hr_the_thematic_break_element', '100%', '185px')}}

## 簡単なウェブサイトを計画する

簡単なウェブページのコンテンツの構造を計画したら、次の論理的なステップは、ウェブサイト全体に掲載したいコンテンツ、必要なページ、および可能な限り最高のユーザーエクスペリエンスを実現するために、それらをどのように配置して互いにリンクさせるかを解決することです。これは{{glossary("Information architecture", "情報アーキテクチャ")}}と呼ばれます。大規模で複雑なウェブサイトでは、このプロセスに多くの計画を立てることがありますが、数ページの単純なウェブサイトでは、かなり単純で楽しいものになります。

1. ナビゲーションメニューやフッターコンテンツなど、（全部ではないにしても）ほとんどのページに共通の要素がいくつかあることに注意してください。たとえば、サイトがビジネスのためのものである場合、連絡先情報を各ページのフッターで利用可能にすることは良い考えです。すべてのページに共通にしたいものを書き留めます。![すべてのページに表示される旅行サイトの共通機能：タイトルとロゴ、連絡先、著作権、利用規約、言語選択、アクセシビリティポリシー](common-features.png)
2. 次に、各ページの構造をどのようにしたらよいかを大まかにスケッチします（上の単純なウェブサイトのようになります）。各ブロックがどうなるかに注意してください。![ヘッダー、メインコンテンツエリア、オプションのサイドバー2本、フッターのサンプルサイト構造を単純に示した図](site-structure.png)
3. さて、自身のウェブサイトに載せたい他のすべての（全ページに共通ではない）コンテンツをブレインストーミングしましょう — 大きなリストに書き留めます。![検索、スペシャルオファー、国別情報など、旅行サイトに搭載できるすべての機能を網羅した長いリスト](feature-list.png)
4. 次に、これらすべてのコンテンツ項目をグループに分類して、どの部分が異なるページに共存しているかを把握します。これは {{glossary("Card sorting")}} と呼ばれるテクニックと非常によく似ています。![ホリデーサイトに現れるべき項目を5つのカテゴリーに分類しました。「検索」「詳細度」「国別情報」「検索結果」「ものを買う」です。](card-sorting.png)
5. それでは、大まかなサイトマップをスケッチしてみましょう。サイト上の各ページにバブルを付け、ページ間の典型的なワークフローを示すために線を引きます。ホームページはおそらく中心にあり、すべてではないにしてもほとんどのページにリンクするでしょう。例外はありますが、小規模サイトのほとんどのページはメインナビゲーションから利用できるはずです。物事がどのように提示されるかもしれないかについてのメモも含めることをお勧めします。![ホームページ、国別ページ、検索結果、スペシャルページ、チェックアウト、購入ページが示されたサイトの地図](site-map.png)

### アクティブラーニング: 自身のサイトマップを作成する

自身が作成したウェブサイトのために上記のアクティブラーニングを実行してみてください。何についてサイトを作りたいですか？

> **メモ:** 作業をどこかに保存してください。後で必要になるかもしれません。

## まとめ

この時点であなたはウェブページ/サイトをどのように構成するかについてより良い考えを持っているはずです。このモジュールの最後の記事では、[HTML をデバッグする](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)方法を学びます。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}
