---
title: "HTML: アクセシビリティの基礎"
slug: Learn/Accessibility/HTML
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}

正しい HTML 言語の要素を常に正しい目的のために使用するようにするだけで、多くのウェブコンテンツをアクセシビリティに対応させることができます。この記事では、アクセシビリティを確実にするために HTML を使用する方法について詳しく見ていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        基本的なコンピュータの知識、HTML に関する基本的な理解（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 概論</a
        >を参照）、<a href="/ja/docs/Learn/Accessibility/What_is_accessibility"
          >アクセシビリティとは何か</a
        >に関する理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        HTML のうち、どの機能にアクセシビリティ上の利点があるのか、また、自身のウェブドキュメントでそうした機能を適切に使うにはどうしたらよいのか、ということに精通すること。
      </td>
    </tr>
  </tbody>
</table>

## HTML とアクセシビリティ

HTML について学習を進めるのにつれて — 資料をたくさん読んだり、たくさんの例を見たりするのにつれて — 共通の主題を繰り返し見続けることになるでしょう。つまり、意味的な（セマンティックな）HTML を使うことの重要性という主題です（これは、POSH すなわち Plain Old Semantic HTML（簡潔な昔ながらの意味的 HTML）と呼ばれることがあります）。これが意味することは、できる限り、ふさわしい HTML 要素をふさわしい目的に使う、ということです。

これが何故それほど重要なのか、不思議に思うかもしれません。何しろ、CSS と JavaScript の組み合わせを使って、ほぼすべての HTML 要素を、どのような仕方であれ望みどおりに振る舞わせることができるわけですから。たとえば、サイト上で動画を再生するためのコントロールボタンを、次のようにマークアップすることもできます。

```html
<div>動画を再生する</div>
```

けれども、後にさらに詳しく見るとおり、この役割にふさわしい要素を使うことには、とても意味があります。

```html
<button>動画を再生する</button>
```

HTML の `<button>` は、ある種の適切なスタイルが（おそらくそのスタイルを上書きしたいと思うでしょうが）既定で適用されているだけでなく、組み込みのキーボードアクセシビリティも備えています。つまり、ボタン同士の間を <kbd>Tab</kbd> で移動できますし、<kbd>スペース</kbd>、<kbd>リターン</kbd>、<kbd>Enter</kbd> を使ってボタンをアクティブにできます。

もしプロジェクトの最初から首尾一貫して意味的な HTML を書くならば、意味的な HTML を書く方が非意味的な（駄目な）マークアップを書くよりも長くなったりはしません。それに、意味的な HTML には、アクセシビリティ以外の他の利点もあります。

1. **より開発しやすい** — 上述のとおり、ある種の機能がただで手に入りますし、それに、より理解しやすいという点はまず間違いないところです。
2. **モバイル機器に関して、より優れている** — 意味的な HTML は非意味的なスパゲッティ・コードよりも、ファイルサイズの点でほぼ間違いなく軽量ですし、レスポンシブにするのも簡単です。
3. **SEO に関しても良好である** — 検索エンジンは、非意味的な `<div>` などに含まれるキーワードよりも、見出しやリンクなどの中のキーワードの方に重みを持たせているので、ドキュメントが顧客に見つけてもらいやすくなるでしょう。

それでは、ここからアクセシブルな HTML をより詳しく見てゆきましょう。

> **メモ:** 自分のローカルコンピューターにスクリーンリーダーを用意することは良い考えです。そうすれば、以下に示す例について、ある程度のテストができます。より詳しくは、[スクリーンリーダー](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#スクリーンリーダー)を参照してください。

## 良いセマンティクス

良いセマンティクスの重要性について、そして、ふさわしい役割にふさわしい HTML 要素を使うべきである理由については、すでに述べました。このことは無視してはなりません。なぜなら、適切に扱わないとアクセシビリティがひどく損なわれてしまう主な箇所のうちの一つだからです。

ウェブ上のどこかで、実は、人々は HTML のマークアップに関してとても変なことをしています。HTML の悪用のうちには、まだ完全に忘れ去られたわけではない過去の遺物的な慣行によるものもあり、ただ単純な無知によるものもあります。いずれにせよ、そうした駄目なコードは置き換えるべきです。

ときには、駄目なマークアップを取り去れる状況にいるとは限りません。自分で完全に制御しきれるわけではない、ある種のサーバーサイドフレームワークによって、生成されたページかもしれません。あるいは、自分のページ上に、自分が管理していない（広告バナーのような）第三者のコンテンツを含むかもしれません。

しかし、目標は「全てか無か」というものではありません。自分ができる改善のことごとくが、アクセシビリティの理念に役立つことでしょう。

### テキストコンテンツ

スクリーンリーダーのユーザーが得られる最良のアクセシビリティ支援の一つは、見出しや段落やリストなどの適切なコンテンツ構造です。きちんと意味を備えた例は、以下のようなものになるでしょう。

```html example-good
<h1>見出し</h1>

<p>これは文書のうちの最初のセクションです。</p>

<p>ここにも、もう一つ段落を足すつもり。</p>

<ol>
  <li>ここには</li>
  <li>読んでもらいたいことの</li>
  <li>リストがあります。</li>
</ol>

<h2>下位見出し</h2>

<p>
  これは文書のうちの最初のサブセクションです。みんながこのコンテンツを見つけられるといいな!
</p>

<h2>2 番目の下位見出し</h2>

<p>
  これはコンテンツのうちで 2
  番目のサブセクションです。この前のものより面白いと思いますよ。
</p>
```

スクリーンリーダーを使って試せるように、より長いテキストのバージョンを用意してあります ([good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) を参照)。これの全体をナビゲートしてみれば、これはとても見通しが得やすいものだということがわかるでしょう。

1. コンテンツの中を進んで行くのにつれて、スクリーンリーダーは各ヘッダを読み上げて、どれが見出しでどれが段落なのかといったことを知らせてくれます。
2. どのような速度が快適であるにせよ、その速度で進んでいけるように、スクリーンリーダーは各要素の後で停止します。
3. 多くのスクリーンリーダーでは、次の見出し / 前の見出しへとジャンプできます。
4. 多くのスクリーンリーダーでは、すべての見出しの一覧を取り出せます。それらの見出しを、特定のコンテンツを見つけるための手軽な目次のようにも使えます。

ときには、たとえば以下のように、体裁用の HTML や改行を使って見出しや段落などを書く人もいます。

```html example-bad
<span style="font-size: 3em">見出し</span><br /><br />
これは文書のうちの最初のセクションです。
<br /><br />
ここにも、もう一つ段落を足すつもり。
<br /><br />
1. ここには
<br /><br />
2. 読んでもらいたいことの
<br /><br />
3. リストがあります。
<br /><br />
<span style="font-size: 2.5em">下位見出し</span>
<br /><br />
これは文書のうちの最初のサブセクションです。みんながこのコンテンツを見つけられるといいな!
<br /><br />
<span style="font-size: 2.5em">2 番目の下位見出し</span>
<br /><br />
これはコンテンツのうちで 2
番目のサブセクションです。この前のものより面白いと思いますよ。
```

より長いバージョンをスクリーンリーダーで試してみれば（[bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) を参照）、とても良い体験が得られる、とはいかないことでしょう。スクリーンリーダーは、標識として使えるものが何も得られないので、有用な目次は取得できません。また、ページ全体を単一の巨大な塊として見ることになるので、ページ全体が一度にひとかたまりで読み上げられるだけなのです。

アクセシビリティ以外の他の問題もあります。たとえば、CSS を使ってコンテンツにスタイルをつけることや、あるいは、JavaScript でコンテンツを操作することが、より難しくなるのです。なぜなら、セレクターとして使える要素がないからです。

#### 明確な言葉を使う

使っている言い回しもアクセシビリティに影響を与えることがあります。一般に、過度に複雑ではない、明確な言葉を使うべきです。また、不必要な専門用語（ジャーゴン）や俗語を使わないようにしましょう。これは、認知的な障碍またはその他の障碍を抱える人たちの助けとなるだけではありません。母語以外で書かれたテキストの読者や、年少者の助けにもなりますし、実際のところあらゆる人の助けになります! それに加えて、スクリーンリーダーによって明確に読み上げられない言い回しや文字を使うことを避けるように努めるべきです。たとえば、以下のようなことです。

- やめられるものなら、ダッシュを使わないようにしましょう。「5–7」と書く代わりに「5 から 7」と書きましょう。
- 略語を展開しましょう。"Jan" と書く代わりに "January" と書きましょう。
- 少なくとも 1、2 回は、頭文字語を展開しましょう。そして [`<abbr>`](/ja/docs/Web/HTML/Element/abbr) を使用して説明しましょう。

### ページレイアウト

古き悪しき時代には、HTML 表を使って（つまり、ヘッダー、フッター、サイドバー、主要コンテンツの列、などなどを含む、別々の表セルを使って）、ページレイアウトを作成していたものです。これは良い考えではありません。なぜなら、スクリーンリーダーが、こんがらがった読み上げを発する可能性が高いからです。特に、レイアウトが複雑で多くの入れ子になった表がある場合には、そうなりがちです。

[table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html) の例を試してみてください。これは、以下のような感じになっています。

```html
<table width="1200">
  <!-- 主要な見出しの行 -->
  <tr id="heading">
    <td colspan="6">
      <h1 align="center">Header</h1>
    </td>
  </tr>
  <!-- ナビゲーションメニューの行 -->
  <tr id="nav" bgcolor="#ffffff">
    <td width="200">
      <a href="#" align="center">Home</a>
    </td>
    <td width="200">
      <a href="#" align="center">Our team</a>
    </td>
    <td width="200">
      <a href="#" align="center">Projects</a>
    </td>
    <td width="200">
      <a href="#" align="center">Contact</a>
    </td>
    <td width="300">
      <form width="300">
        <label
          >Search
          <input
            type="search"
            name="q"
            placeholder="Search query"
            width="300" />
        </label>
      </form>
    </td>
    <td width="100">
      <button width="100">Go!</button>
    </td>
  </tr>
  <!-- 間隔をあけるための詰め物の行 -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- 主要なコンテンツと余談の行 -->
  <tr id="main">
    <td id="content" colspan="4">
      <!-- 主要なコンテンツがここに来る -->
    </td>
    <td id="aside" colspan="2" valign="top">
      <h2>Related</h2>

      <!-- 余談的コンテンツがここに来る -->
    </td>
  </tr>
  <!-- 間隔をあけるための詰め物の行 -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- フッターの行 -->
  <tr id="footer">
    <td colspan="6">
      <p>©Copyright 1996 by nobody. All rights reversed.</p>
    </td>
  </tr>
</table>
```

スクリーンリーダーを使用してこれを操作しようとすると、おそらく見るべき表があることを指示します（ただし、スクリーンリーダーによっては、表のレイアウトとデータ表の違いを推測することができます）。その後、（使用している画面のリーダーによりますが）オブジェクトとしての表の中に降りて、その機能を別個に見てから、再び表の外に出て、コンテンツをナビゲートしなければならない可能性があります。

表レイアウトは過去の遺物です。CSSの対応がブラウザーに普及していなかったころは意味がありましたが、今ではスクリーンリーダーのユーザーを混乱させるだけです。さらに、表のソースコードにはより多くのマークアップが必要なため、柔軟性に欠け、メンテナンスが難しくなります。これらの主張は、以前の使い勝手と[より現代的なウェブサイト構造の例](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/)を比較することで確認できます。このような例は、次のようになります。

```html
<header>
  <h1>Header</h1>
</header>

<nav>
  <!-- 主なナビゲーションはここです。 -->
</nav>

<!-- ここにページの主要コンテンツが来ます。 -->
<main>
  <!-- 主要コンテンツは記事を含みます。 -->
  <article>
    <h2>Article heading</h2>

    <!-- 記事の中身はここです。 -->
  </article>

  <aside>
    <h2>Related</h2>

    <!-- 余談の中身はここです。 -->
  </aside>
</main>

<!-- そしてここには、ウェブサイトの全ページを通じて使う主要なフッターが来ます。 -->

<footer>
  <!-- フッターの中身はここです。 -->
</footer>
```

より現代的な構造の例をスクリーンリーダーで試してみれば、もはやレイアウトマークアップが妨げになることもなく、コンテンツの読み上げを混乱させることもないとわかるでしょう。また、これは、コードサイズの点で、より無駄がなく、より小さくなっています。これが意味することは、コードの保守が容易になるということ、そして、ユーザーがダウンロードするのに帯域幅が小さくて済むということです（特に、接続が遅い人たちにとってはこれが効きます）。

レイアウトを作る際に考慮すべきもう一つの事柄は、上記の例に見られるように HTML の意味的要素を用いることです（[コンテンツ区分](/ja/docs/Web/HTML/Element#コンテンツ区分)を参照）。入れ子になった {{htmlelement("div")}} 要素だけを使ってレイアウトを作ることもできますが、適切な区分要素を使って、主要なナビゲーション ({{htmlelement("nav")}}) やフッター ({{htmlelement("footer")}}) や繰り返し現れるコンテンツ単位 ({{htmlelement("article")}}) などを囲う方が良いのです。これらの区分け要素は、いまナビゲートしている最中のコンテンツについての追加的な手がかりをユーザーに与えられるように、スクリーンリーダー（および他のツール）に追加的な意味（セマンティクス）を提供してくれます（スクリーンリーダーの対応とはどのようなものなのかについての考え方に関しては、[Screen Reader Support for new HTML5 Section Elements](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/) を参照）。

> **メモ:** 優れた意味づけと魅力的なレイアウトに加え、コンテンツは、そのソースの順序が論理的に意味をなしていなければなりません。後で CSS を使って常に好きな場所に配置することはできますが、最初にソースの順序を正しくしておくことで、スクリーンリーダーで読み上げられる内容が意味のあるものとなるのです。

### UI コントロール

UI コントロールとは、ウェブ文書内のユーザーが対話する主要な部分を意味します。最も一般的なのは、ボタン、リンク、および形式コントロールです。この節では、このようなコントロールを作成する際に注意すべき基本的なアクセシビリティの懸念について見ていきます。WAI-ARIAとマルチメディアに関するこの後の記事では、UIアクセシビリティの他の側面について見ていきます。

UI コントロールのアクセシビリティに対する一つの重要な側面は、ブラウザーが既定では 、UI コントロールをキーボードで操作できるようにしているということです。このことは、[native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) の例 ([ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) を参照) を用いて試せます。これを新規タブで開いて、タブキーを押してみてください。2、3 回押してみた後には、フォーカス可能な異なる要素の間をタブ・フォーカスが動き回り始めたのだと分かるはずです。どの要素にフォーカスが当たっているのかが分かるように、どのブラウザーでも、フォーカスの当たっている要素には、ハイライトされた既定のスタイルが付与されます (そのスタイルは、異なるブラウザー間では少し差があります)。

![3 つのボタンの中にそれぞれ "Click me!" "Click me too!" "And me!" というテキストが表示されています。3 つ目のボタンには、現在のタブのフォーカスを示す青い輪郭線があります。](button-focused-unfocused.png)

> **メモ:** 開発者ツールで、ページのタブ順序を示すオーバーレイを有効にすることができます。詳細な情報は、[アクセシビリティインスペクター > タブ移動順序を表示](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order) を参照してください。

その後、エンター / リターンキーを押すと、フォーカスの当たっているリンクをたどったり、ボタンを押したりすることもできますし（ボタンにメッセージ警告を出させるための JavaScript を含めておきました）、テキスト入力欄にテキストを入力するためのタイピングを開始することもできます。他のフォーム要素には別のコントロールがあります。たとえば、{{htmlelement("select")}} 要素は、選択肢を表示させ、上下の矢印キーを用いて選択肢の間を行き来することができます。

> **メモ:** 異なるブラウザーでは、異なるキーボードコントロールオプションを使用可能としている場合があります。さらに詳しいことは、[ネイティブなキーボードアクセシビリティを使う](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#ネイティブなキーボード・アクセシビリティを使う) を参照してください。

基本的に、適切な要素を使用するだけで、この動作を自由に得ることができます。

```html example-good
<h1>Links</h1>

<p>This is a link to <a href="https://www.mozilla.org">Mozilla</a>.</p>

<p>
  Another link, to the
  <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.
</p>

<h2>Buttons</h2>

<p>
  <button data-message="This is from the first button">Click me!</button>
  <button data-message="This is from the second button">Click me too!</button>
  <button data-message="This is from the third button">And me!</button>
</p>

<h2>Form</h2>

<form>
  <div>
    <label for="name">Fill in your name:</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Enter your age:</label>
    <input type="text" id="age" name="age" />
  </div>
  <div>
    <label for="mood">Choose your mood:</label>
    <select id="mood" name="mood">
      <option>Happy</option>
      <option>Sad</option>
      <option>Angry</option>
      <option>Worried</option>
    </select>
  </div>
</form>
```

これは、リンクやボタンやフォーム要素やラベルを適切に用いることを意味しています（フォームコントロール用の {{htmlelement("label")}} 要素を含みます）。

しかし、やはり人々は HTML で何かと変なことをするものです。例えば、{{htmlelement("div")}} を使用してマークアップされたボタンなどを時々見かけますね。

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

しかし、このようなコードを使用することはお勧めできません。{{htmlelement("button")}} 要素を使用した場合に得られるはずだった、ネイティブのキーボードアクセシビリティを直ちに失い、さらにボタンが取得する既定の CSS スタイル設定も得られません。ボタン以外の要素をボタンに使用する必要がある場合は、[`button` ロール](/ja/docs/Web/Accessibility/ARIA/Roles/button_role)を使用し、キーボードとマウスボタンの対応を含む、すべての既定のボタン動作を実装してください。

#### キーボードアクセシビリティを呼び戻すように盛り込む

そうした利点を呼び戻すように追加するには、ちょっとした作業が必要です（[fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) で例示的コードを試せます。[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) も参照してください）。ここでは、各ボタンに `tabindex="0"` という属性を付与することによって、見せかけの `<div>` ボタンにフォーカスを当てられるようにしました（タブキーを通じてのフォーカスを含みます）。

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
<div data-message="This is from the second button" tabindex="0" role="button">
  Click me too!
</div>
<div data-message="This is from the third button" tabindex="0" role="button">
  And me!
</div>
```

基本的に、[`tabindex`](/ja/docs/Web/HTML/Global_attributes#tabindex) 属性は、タブ移動可能な要素に、単に既定のソース順でタブ処理されるのではなく、独自のタブ順序（正の値の順序で指定されます）を持たせるためのものです。これは大きな混乱を発生させる可能性があるため、常に悪い考えです。本当に必要な場合にのみ使用してください。例えば、レイアウトがソースコードとはまったく異なる形で視覚的に物を示していて、より論理的に作業させたい場合などです。`tabindex` のオプションは、他にも 2 種類あります。

- `tabindex="0"` — 上記のとおり、この値によって、普通ならタブキーでの移動が可能ではない要素が、タブキーでの移動が可能となります。これは、`tabindex` の一番有益な値です。
- `tabindex="-1"` — これによって、普通ならタブキーでの移動が可能ではない要素が、（たとえば JavaScript を介して）プログラム的にフォーカスを得たり、あるいはリンクのターゲットとしてフォーカスを得たりすることが可能となります。

上記のような追加作業によって、タブキーでボタンに移動できるようにはなりますが、<kbd>Enter</kbd> / <kbd>リターン</kbd>キーを介してボタンをアクティブにすることはできるようになりません。それを可能とするには、以下のようなちょっとした JavaScript のごまかしを追加せねばなりません。

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
  }
};
```

ここでは、キーボードのボタンが押されたことを検出するためのリスナーを `document` オブジェクトに追加しています。どのボタンが押されたかをイベントオブジェクトの [`key`](/ja/docs/Web/API/KeyboardEvent/key) プロパティで調べます。押されたキーが <kbd>Enter</kbd>/<kbd>Return</kbd> なら、ボタンの `onclick` ハンドラーに格納された機能を `document.activeElement.click()` で実行しています。[`activeElement`](/ja/docs/Web/API/Document/activeElement) これは、現在ページ上でフォーカスされている要素を取得します。

これでは、機能を作り直すのに余計な手間がかかります。それに、他にも問題があるはずです。**そもそも、単にふさわしい要素をふさわしい役割に使うべきなのです。**

#### 意味の通るテキストラベル

UI コントロールのテキストラベルはあらゆるユーザーにとって大変有益ですが、そうしたラベルを適切なものにしておくことは、とりわけ、障碍のあるユーザーにとって重要です。

ボタンとリンクテキストのラベルが、理解可能であり、かつ弁別性のあるものになっていることを、確認すべきです。ラベルとして単に「ここをクリック」を使うのはいけません。なぜなら、スクリーンリーダーのユーザーは、ボタンとフォーム・コントロールの一覧をまとめ上げることがあるからです。以下のスクリーンショットは、Mac 上の VoiceOver によって一覧化されたコントロールを示しています。

![Mac の VoiceOver ソフトで掲載されている形式入力ラベルのリストです。このリストには、ボタン、テキストフィールド、リンクなどの様々なフォームコントロールに指定された "Happy menu item" のような無意味なラベルが含まれています。](voiceover-formcontrols.png)

ラベルが存在している段落の文脈内においてラベルが意味をなすようにするだけでなく、文脈を離れてもラベルが意味をなすように (ラベルが単独で読まれても意味をなすように) してください。たとえば、以下のものは、良いリンクテキストの例を示しています。

```html example-good
<p>
  クジラは本当にすごい生き物です。
  <a href="whales.html">クジラについてもっと知ってください</a>。
</p>
```

しかしこれは悪いリンクテキストです。

```html example-bad
<p>
  クジラは本当にすごい生き物です。クジラについてもっと知るには、
  <a href="whales.html">ここをクリックしてください</a>。
</p>
```

> **メモ:** リンクの実装とベストプラクティスに関するさらなる情報を、[ハイパーリンクの生成](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) という記事で知ることができます。また、いくつかの良い例と悪い例を、[good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) と [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) で見ることもできます。

フォームラベルも重要です。各フォーム入力欄に何を入力する必要があるのかについての手がかりを与えてくれるからです。以下のものは、十分に筋の通った例のように見えます。

```html example-bad
名前を入れてください: <input type="text" id="name" name="name" />
```

しかし、これは障碍を持ったユーザーにとってはあまり有益なものではありません。上の例では、ラベルが見えない場合に、ラベルと形式入力を一義的に関連づけ、どのように記入するかを明確にするものは何もありません。もし、ある種のスクリーンリーダーでこれにアクセスすると、「テキスト編集」という行に沿った説明しか与えられないかもしれません。

以下のものは、ずっと良い例です。

```html example-good
<div>
  <label for="name">名前を入れてください:</label>
  <input type="text" id="name" name="name" />
</div>
```

このようなコードでは、ラベルが明確に入力欄と結びつけられることになります。説明は、「名前を入れてください: テキストを編集する」といった感じのものになるでしょう。

![テキスト入力フォームコントロールに「名前を記入してください」という良いフォームラベルが指定されています。](voiceover-good-form-label.png)

追加のおまけとして、ほとんどのブラウザーにおいて、ラベルをフォーム入力欄に結びつけると、ラベルをクリックして当該フォーム要素を選択 / アクティブ化することができます。このため、入力欄に対して、より大きなヒット領域を与えることになり、入力欄が選択しやすくなります。

> **メモ:** [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) と [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) で、いくつかの良いフォーム例と悪いフォーム例を見られます。

適切なテキストラベルの重要性と、[Firefox のアクセシビリティインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)を使用してテキストラベルの問題を調査する方法については、以下の動画でうまく説明されています。

{{EmbedYouTube("YhlAVlfH0rQ")}}

## アクセシブルなデータ表

基本的なデータ表は、たとえば以下のように、とても簡素なマークアップで書けます。

```html
<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Pronouns</td>
  </tr>
  <tr>
    <td>Gabriel</td>
    <td>13</td>
    <td>he/him</td>
  </tr>
  <tr>
    <td>Elva</td>
    <td>8</td>
    <td>she/her</td>
  </tr>
  <tr>
    <td>Freida</td>
    <td>5</td>
    <td>she/her</td>
  </tr>
</table>
```

しかしこれには問題があります。スクリーンリーダーのユーザーには、行または列をデータの集まりとしてまとめて関連づける手段が何もないのです。こうした関連づけを行うには、見出し行がどれなのか、見出し行は複数の行を統率しているのか、複数の列を統率しているのか、などといったことを知らねばなりません。こうしたことは、上記の表では、視覚的に行われる以外にありません（[bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) を参照して、その例をご自分で試してみてください）。

では、 [パンクバンドの表の例](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) を見てみましょう。ここでは、多少のアクセシビリティ支援が機能していることが分かりますね。

- 表の見出しは、 {{htmlelement("th")}} 要素を用いて定義されています。さらに、`scope` 属性を使って、その見出しが行に対する見出しなのか列に対する見出しなのかを指定することもできます。こうすると、スクリーンリーダーが一つの単位として処理できる、データの完全なグループが示されることになります。
- {{htmlelement("caption")}} 要素と、`<table>` の `summary` 属性は、どちらも似たような役割を果たします。表に対する代替テキストとして機能し、スクリーンリーダーのユーザーに対して、表の中身についての有用で手短な要約を示すのです。一般的には `<caption>` 要素の方が、目の見えるユーザーもそのコンテンツにアクセスでき、有益な情報を探すことができるため、好ましいとされています。実のところ、両方が必要であるわけではありません。

> **メモ:** アクセシブルなデータ表にまつわる更なる詳細は、[HTML 表の発展的な機能とアクセシビリティ](/ja/docs/Learn/HTML/Tables/Advanced) という記事を参照してください。

## 代替テキスト

テキストによるコンテンツは本質的にアクセシブルですが、マルチメディアコンテンツについては必ずしも同じことが言えるわけではありません。画像や動画のコンテンツは視覚障碍者には見えず、音声コンテンツは聴覚障碍者には聞こえません。動画と音声のコンテンツについては、[アクセシブルなマルチメディア](/ja/docs/Learn/Accessibility/Multimedia) という記事で後に詳しく扱うことにしますが、本記事では、ごく普通の {{htmlelement("img")}} 要素についてのアクセシビリティを見てゆきましょう。

[accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html) という簡単な例を書き上げました。これは、4 枚の同じ画像を含んでいます。

```html
<img src="dinosaur.png" />

<img
  src="dinosaur.png"
  alt="赤いティラノサウルスレックス。人間のように直立する二足歩行の恐竜で、腕は小さく、頭部は大きくて多くの鋭い歯があります。" />

<img
  src="dinosaur.png"
  alt="赤いティラノサウルスレックス。人間のように直立する二足歩行の恐竜で、腕は小さく、頭部は大きくて多くの鋭い歯があります。"
  title="The Mozilla red dinosaur" />

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
  Mozilla
  の赤いティラノサウルスレックス。人間のように直立する二足歩行の恐竜で、腕は小さく、頭部は大きくて多くの鋭い歯があります。
</p>
```

1 枚目の画像は、スクリーンリーダーで閲覧したときに、実際のところ大した手助けをユーザーに与えてはくれません。たとえば VoiceOver は、"/dinosaur.png, image" と読み上げます。なんらかの手助けを提供しようとしてファイル名を読み上げるわけです。この例では、ユーザーは、少なくともこれがある種の恐竜なのだと知ることでしょうが、機械で生成されたファイル名とともにファイルが（たとえばディジタルカメラから）アップロードされる場合もよくありますし、そうしたファイル名は画像の中身に対する文脈を何も与えてはくれないでしょう。

> **メモ:** これが、画像の中にテキストコンテンツを記載してはいけない理由です。スクリーンリーダーではアクセスできないからです。他にも、選択できない、コピー＆ペーストできないなどのデメリットがあります。とにかくやめておきましょう。

スクリーンリーダーは、2 枚目の画像に出くわすと、alt 属性を丸々読み上げます。つまり、「赤いティラノサウルスレックス。人間のように直立する二足歩行の恐竜で、腕は小さく、頭部は大きくて多くの鋭い歯があります」と読み上げます。

これは、いわゆる**代替テキスト**が利用できない場合に備えて、意味のあるファイル名を使用するだけでなく、可能な限り代替テキストが `alt` 属性で指定されていることを確認することの重要性を強調しています。

`alt` 属性のコンテンツは、常に画像とそれが視覚的に伝えるものを直接的に提供する必要があることに注意してください。alt は簡潔であるべきで、画像の中で伝達された情報のうち、周囲のテキストと重複していないものをすべて記載します。

単一の画像に対する `alt` 属性の内容は、文脈によって異なります。例えば、ふわふわの写真が Yuckymeat ドッグフードのレビューの隣にあるアバターであれば、`alt="Fluffy"` が適切です。もしその写真が動物保護団体の里親募集ページの一部であれば、画像から伝わる、これから犬を飼う人に関連する情報で、周囲のテキストに重複していないものを記載する必要があります。例えば、`alt="Fluffy, a tri-color terrier with very short hair, with a tennis ball in her mouth."` のような、より詳しい説明が適切でしょう。周囲のテキストにはフラッフィーの大きさや犬種が記載されている可能性が高いので、`alt` にはそのような情報は含まれません。しかし、犬の経歴には、親になる可能性のある人が知る必要のある毛の長さや色、おもちゃの好みなどは記載されていない可能性が高いので、記載されています。画像は屋外にいるのか、赤い首輪に青いリードを持っているのか？そのペットを採用する上で重要ではないので、含めません。画像が伝えるべき情報はすべて、サイトユーザーがアクセスでき、その状況に関連するものであり、それ以上のことはありません。短く、正確に、有益な情報を使用してください。

個人的な知識や余計な説明は、その画像を見たことがない人にとって有益なものではないので、ここには記載しない方が良いでしょう。ボールがフラッフィーのお気に入りのおもちゃであるとか、引用されたユーザーが画像からそれを知ることができないのであれば、それを記載しないでください。

考慮すべきことのひとつは、画像がコンテンツの中で意味をもっているのか、それとも純粋に視覚的な装飾であり、意味をもたないのか、ということです。もし装飾用であれば、`alt` 属性の値として空のテキストを書くか（[空の alt 属性](#空の_alt_属性)を参照）、CSS の背景画像としてページに記載するだけにした方がよいでしょう。

> **メモ:** 画像の実装とベストプラクティスについての更なる多くの情報については、[HTML の画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)と[レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)をお読みください。

文脈のある追加的な情報をどうしても提示したい場合、その情報は、画像の周囲のテキストの中か、あるいは、上記のように `title` 属性の内部に入れるべきです。この場合、ほとんどのスクリーンリーダーは、alt テキストと、title 属性と、ファイル名とを読み上げるでしょう。さらに、マウスオーバーしたときには、ブラウザーが title テキストをツールチップとして表示します。

![赤いティラノサウルス・レックスのスクリーンショット。マウスオーバー時にツールチップとして「The mozilla red dinosaur」のテキストが表示されます。](title-attribute.png)

4 番目の方法についてもざっと見ておきましょう。

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

この場合、`alt` 属性をまったく使っていません。その代わり、画像についての説明を通常のテキスト段落として提示し、その段落に `id` を与え、そして、その `id` を参照するための `aria-labelledby` 属性を用いました。こうすると、スクリーンリーダーに、その段落をその画像についての代替テキスト / ラベルとして使わせることになります。これは、複数の画像に対して同じテキストをラベルとして使いたい場合に、とりわけ有用です（これは、`alt` ではできません）。

> **メモ:** `aria-labelledby` は [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) 仕様の一部です。これのおかげで開発者は、必要な箇所においてスクリーンリーダーのアクセシビリティを高めるために、自分のマークアップに追加的な意味（セマンティクス）を足すことができます。これがどのように機能するのかについての更なる情報を知るには、[WAI-ARIA の基本](/ja/docs/Learn/Accessibility/WAI-ARIA_basics) の記事をお読みください。

### figure と figcaption

HTML には、{{htmlelement("figure")}} と {{htmlelement("figcaption")}} という 2 つの要素があります。これらは、なんらかの種類の図（任意のものであってよく、必ずしも画像とは限りません）を、図のキャプション（説明文）と結びつけるためのものです。

```html
<figure>
  <img
    src="dinosaur.png"
    alt="Mozilla のティラノサウルス"
    aria-describedby="dinodescr" />
  <figcaption id="dinodescr">
    赤いティラノサウルスレックス。人間のように直立する二足歩行の恐竜で、腕は小さく、頭部は大きくて多くの鋭い歯があります。
  </figcaption>
</figure>
```

スクリーンリーダーによる図のキャプションとその図の関連付けの対応はまちまちですが、 [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) や [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) は、もしキャプションがなければその関連を作成してくれるものです。とは言え、この要素構造は CSS スタイル設定に有益であり、加えてソース中の画像の横に説明文を配置する方法を提供します。

### 空の alt 属性

```html
<h3>
  <img src="article-icon.png" alt="" />
  ティラノサウルスレックス: 恐竜の王
</h3>
```

ページのデザインに画像が含まれることがありますが、その主な目的は視覚的な装飾です。上のコード例では、画像の `alt` 属性が空であることにお気づきでしょう。これは、スクリーンリーダーに画像を認識させるためですが、画像を説明しようとはしません（代わりに、「画像」または同様の表現をするだけです）。

`alt` を含めないようにする代わりに空の `alt` を用いる理由は、`alt` が与えられていない場合には多くのスクリーンリーダーが画像の URL を丸々全部発声するからです。上記の例において画像は、その画像が結びつけられている見出しに対する視覚的装飾として機能しています。このような場合、および、画像が単に装飾にすぎず中身の価値がない場合には、空の `alt` を `img` 要素に入れるべきです。別の選択肢は、[`role="presentation"`](/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role) という ARIA の [`role`](/ja/docs/Web/Accessibility/ARIA/Roles) 属性を使うことです。こうすることによっても、スクリーンリーダーに代替テキスト（`alt` テキスト）を読み上げるのをやめさせることができます。

> **メモ:** もし可能なら、単なる修飾であるような画像を表示するのには CSS を使うべきです。

## リンクについての追加事項

リンク（[`<a>`](/ja/docs/Web/HTML/Element/a) 要素と `href` 属性）は、その使用方法によってアクセシビリティを向上させたり、害したりする可能性があります。既定では、リンクは外観上アクセシビリティが確保されています。リンクにより、ユーザーが文書内の様々なセクションにすばやく移動できるようにすることで、アクセシビリティが向上します。また、アクセシブルなスタイル設定が削除されたり、JavaScript で予期しない動作をさせられたりすると、アクセシビリティに害を与えることもあります。

### リンクのスタイル付け

既定では、リンクは色と [text-decoration](/ja/docs/Web/CSS/text-decoration) の両方で他のテキストと視覚的に異なります。既定ではリンクは青で下線、閲覧済みでは紫で下線、キーボードフォーカスを受けると [focus-ring](/ja/docs/Web/CSS/:focus) が付きます。

色は、リンクとそうでないコンテンツを判別する唯一の方法として使用すべきではありません。リンクテキストの色は、すべてのテキストと同様に、背景色と大きく異なっていなければなりません（[a 4.5:1 contrast](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)）。さらにリンクは、リンクしていないテキストと視覚的に大きく異なる必要があり、リンクテキストと周囲のテキスト、既定値、訪問済み、フォーカス/アクティブの各状態間のコントラストは最低 3:1、それらすべての状態と背景色のコントラストは 4.5:1 が要求されています。

### `onclick` イベント

アンカータグは `onclick` イベントでよく悪用され、**href** に `"#"` や `"javascript:void(0)"` を設定して、ページの更新を行わないようにして擬似ボタンを作成することがあります。

これらの値は、リンクをコピーしたりドラッグしたり、リンクを新しいタブやウィンドウで開いたり、ブックマークしたり、JavaScriptでダウンロード中、エラー終了、無効になっているときに、予期しない動作を発生させます。また、支援技術（画面の内側から読み取るリーダーなど）に対しても、正しくない意味づけを伝えることになります。このような用途では、代わりに {{HTMLElement("button")}} を使用することを推奨します。一般に、アンカーは適切な URL を使用してナビゲーションする場合にのみ使用すべきです。

### 外部リンクと HTML 以外のリソースへのリンク

`target="_blank"` 宣言によって新しいタブやウィンドウで開かれるリンクや、`href` 値がファイルリソースを指すリンクは、リンクがアクティブになったときに起こる動作に関する説明を記載する必要があります。

弱視の人、画面の内側へ読み上げる技術を使っている人、認知能力に不安がある人は、新しいタブ、ウィンドウ、アプリケーションが不意に開かれたときに混乱するかもしれません。画面の内側へ古いバージョンの画面読み上げソフトでは、この動作が表示されないこともあります。

#### 新しいタブまたはウィンドウを開くためのリンク

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (opens in a new window)</a
>
```

#### HTML 以外のリソースへのリンク

```html
<a target="_blank" href="2017-annual-report.ppt"
  >2017 Annual Report (PowerPoint)</a
>
```

このようなリンクの動作を示すために、テキストの代わりにアイコンを使用する場合は、[代替テキスト](/ja/docs/Web/HTML/Element/img#alt)を必ず含めてください。

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN WCAG を理解する、ガイドライン 3.2 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### スキップリンク

スキップリンク（skipnavとも呼ばれる）は、冒頭の {{HTMLElement("body")}} 要素にできるだけ近い位置に配置された `a` 要素で、ページの本文の冒頭にリンクするものです。このリンクによって、ウェブサイトのヘッダーや主要なナビゲーションなど、複数のページにわたって繰り返されるコンテンツを回避することができます。

スキップリンクは、スイッチ制御、音声コマンド、口棒／頭棒などの支援技術を使用して操作する人にとって特に有益で、繰り返されるリンクを移動する行為は手間のかかる作業となります。

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How–to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN WCAG を理解する、ガイドライン 2.4 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### 近接性

アンカーを含む大量の対話型コンテンツが互いに視覚的に近い場所に配置されている場合、それらを分離するための空間を入れる必要があります。この空間は、手先の運動制御に問題があり、操作中に誤って誤った対話型コンテンツを作動させてしまう可能性がある人々にとって有益です。

空間は {{CSSxRef("margin")}} のような CSS プロパティを使用して作成することができます。

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## スキルをテストしましょう

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？先に進む前に、[スキルテスト: HTML アクセシビリティ](/ja/docs/Learn/Accessibility/Test_your_skills:_HTML_accessibility) を参照して、この情報を覚えているかどうかを確認しましょう。

## 要約

これで、ほとんどの場合にアクセシブルな HTML を書くことについて、よく分かったでしょう。WAI-ARIA の基本の記事も、この知識の抜けを埋めてくれるでしょうが、本記事でもその基本には気を配ってきました。次は、CSS と JavaScript をよく使うか悪く使うかで、アクセシビリティがどのような影響を受けるのかを検討しましょう。

{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}
