---
title: ハイパーリンクの作成
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
tags:
  - Beginner
  - CodingScripting
  - Guide
  - HTML
  - Learn
  - Links
  - Title
  - absolute
  - hyperlinks
  - relative
  - urls
translation_of: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

ハイパーリンクとは本当に重要なものです— ウェブが網状組織を構成しているのもハイパーリンクのおかげです。この記事ではリンクを作るために必要な構文を示し、リンクに関するベストプラクティスについて議論します。

| 前提知識: | [HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)に載っている、基本的な HTML に精通していること。[HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)に載っている、HTML テキストフォーマット。 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | ハイパーリンクを効率的に実装する方法、複数のファイルを互いにリンクする方法を学ぶ。                                                                                                                                                                   |

## ハイパーリンクとは

ハイパーリンクは Web が提供する最も刺激的なイノベーションです。Web の始まりから機能していましたが、Web を Web たるものにするものです — 文書から別の文書 (やリソース) へとリンクできたり、文書の特定の部分にリンクできたり、簡単な Web アドレスからアプリを利用できるようになります (ネイティブアプリと比較して、そちらはインストールが必要なだけです)。あらゆる Web コンテンツはリンクに変換できて、クリック (またはその他の有効化) した時に Web ブラウザーは別の Web アドレス ({{glossary("URL")}}) に移動します。

> **Note:** URL は HTML ファイルや、テキストファイル、画像、テキスト文書、動画やオーディオファイルや、その他 Web に載せられるものを指すことができます。Web ブラウザーにそのファイルの扱い方・表示法がわからない場合、それを本当に開きたいのか聞く (この場合ファイルを開いたり扱ったりする義務は適切な端末上のネイティブアプリに渡されます) か、ファイルをダウンロードします (この場合あとで処理することができます)。

例えば、BBC のホームページでは、複数のニュース記事だけでなく、色々なサイトのエリアを指すリンク (ナビゲーション機能) や、ログイン/登録ページ (ユーザーツール) その他多数のリンクがあります。

![bbc.co.uk のフロントページで、たくさんのニュース項目と、ナビゲーションメニューの機能を表示しています](bbc-homepage.png)

## リンクの解剖

基本的なリンクは、リンクにしたいテキスト (またはその他のコンテンツ、[Block level links](#block_level_links) を参照) を {{htmlelement("a")}} 要素の中に囲むことで作成し、{{htmlattrxref("href", "a")}} (**ハイパーテキスト参照**または**ターゲット**とも) にリンク先にしたい Web アドレスを入れます。

```html
<p>I'm creating a link to
<a href="https://www.mozilla.org/ja/">the Mozilla homepage</a>.
</p>
```

これは以下のような結果をもたらします。

I'm creating a link to [the Mozilla homepage](https://www.mozilla.org/ja/).

### title 属性による補足情報の追加

あなたのリンクに追加したいかもしれない別の属性は title です。これには、ページに含まれる情報の種類や注意すべき事項など、リンクに関する補足的な有用な情報が含まれています。 例えば、

```html
<p>I'm creating a link to
<a href="https://www.mozilla.org/ja/"
   title="The best place to find more information about Mozilla's
          mission and how to contribute">the Mozilla homepage</a>.
</p>
```

これにより、次のような結果が得られます (リンクがホバーされるとタイトルがツールチップとして表示されます)。

I'm creating a link to [the Mozilla homepage](https://www.mozilla.org/ja/ "The best place to find more information about Mozilla's mission and how to contribute").

> **Note:** リンクのタイトルはマウスのホバーでのみ表示されます。つまり、Web ページをナビゲートするためにキーボードコントロールに頼る人々はタイトル情報にアクセスするのが困難になります。タイトルの情報がページの使いやすさにとって本当に重要な場合は、通常のテキストに入れるなどして、すべてのユーザーがアクセスできる方法で表示する必要があります。

### アクティブラーニング: 独自のサンプルリンクを作成する

アクティブラーニングタイム：ローカルのコードエディタを使用して HTML ドキュメントを作成してください (私たちの[入門用テンプレート](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html)でうまくいくでしょう)。

- HTML の本文の中に、1 つ以上の段落または他の種類の既に知っているコンテンツを追加してみてください。
- コンテンツの一部をリンクにします。
- タイトル属性を含めます。

### ブロックレベルリンク

前述したように、[ブロックレベル要素](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Block_versus_inline_elements)であっても、あらゆるコンテンツをリンクに変えることができます。リンクに変換したい画像がある場合は、その画像を `<a></a>` タグの間に配置することで実現できます。

```html
<a href="https://www.mozilla.org/ja/">
  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
</a>
```

> **Note:** 今後の記事では Web 上での画像の使用についてさらに多くのことがわかります。

## URL とパスに関する簡単な入門

リンク先を完全に理解するには、URL とファイルパスを理解する必要があります。このセクションでは、これを達成するために必要な情報を提供します。

URL (Uniform Resource Locator) は、Web 上のどこにあるのかを定義するテキストの文字列です。たとえば、Mozilla の日本語のホームページは `https://www.mozilla.org/ja/` にあります。

URL はファイルを見つけるためにパスを使います。パスはファイルシステム内の目的のファイルが存在する場所を指定します。ディレクトリー構造の簡単な例を見てみましょう ([creating-hyperlinks](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/creating-hyperlinks) ディレクトリーを参照してください)。

![A simple directory structure. The parent directory is called creating-hyperlinks and contains two files called index.html and contacts.html, and two directories called projects and pdfs, which contain an index.html and a project-brief.pdf file, respectively](simple-directory.png)

このディレクトリー構造の **root** は `creating-hyperlinks` と呼ばれます。Web サイトを使用してローカルで作業する場合は、サイト全体が入る 1 つのディレクトリーがあります。ルート内には、`index.html` ファイルと `contacts.html` があります。実際の Web サイトでは、`index.html` が私たちのホームページまたはランディングページ (Web サイトまたは Web サイトの特定のセクションのエントリポイントとして機能する Web ページ) になります。

私たちのルートの中にも二つのディレクトリー — `pdfs` と `projects` があります。これらはそれぞれ中に PDF (`project-brief.pdf`) と `index.html` ファイルというファイルがあります。ファイルシステム内の別の場所にある限り、1 つのプロジェクトに 2 つの `index.html` ファイルを非常にうまく入れることができることに注意してください。多くの Web サイトはそうします。2 番目の `index.html` は、おそらくプロジェクト関連の情報のメインランディングページになります。

- **同じディレクトリー**: `index.html` (最上位の `index.html`) 内に `contacts.html` を指すハイパーリンクを含める場合は、現在のファイルと同じディレクトリーにあるため、リンクしたいファイルの名前を指定するだけです。そのため使用する URL は `contacts.html` です：

  ```html
  <p>Want to contact a specific staff member?
  Find details on our <a href="contacts.html">contacts page</a>.</p>
  ```

- **サブディレクトリーに移動する**: `index.html` (最上位の `index.html`) 内に `projects/index.html` を指すハイパーリンクを含める場合は、リンクしたいファイルを指定する前に `projects` ディレクトリーに移動する必要があります。これはディレクトリーの名前、スラッシュ、そしてファイルの名前を指定することでできます。そのため使用する URL は `projects/index.html` です：

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **親ディレクトリーに戻る**: `projects/index.html` の中に `pdfs/project-brief.pdf `を指すハイパーリンクを含めたい場合は、ディレクトリー階層を上がってから `pdf` ディレクトリーに戻る必要があります。「ディレクトリーを上る」は 2 つのドット — `..` — を使用して表します。そのため使用する URL は `../pdfs/project-brief.pdf` です：

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> **Note:** 例えば `../../../complex/path/to/my/file.html` のように、必要に応じて、これらの機能の複数のインスタンスを複雑な URL に組み合わせることができます。

### ドキュメントフラグメント

HTML 文書の上部だけでなく、HTML 文書の特定の部分 (**ドキュメントフラグメント**と呼ばれる) にリンクすることもできます。これを行うには、まずリンク先の要素に {{htmlattrxref("id")}} 属性を割り当てる必要があります。通常は特定の見出しにリンクするのが理にかなっているので、次のようになります。

```html
<h2 id="Mailing_address">Mailing address</h2>
```

次にその特定の `id` にリンクするには、URL の最後にハッシュ/ポンド記号を付けてそれを含めます。次に例を示します。

```html
<p>Want to write us a letter? Use our <a href="contacts.html#Mailing_address">mailing address</a>.</p>
```

*同じドキュメントの別の部分*にリンクするために、ドキュメントフラグメント参照を単独で使用することさえできます。

```html
<p>The <a href="#Mailing_address">company mailing address</a> can be found at the bottom of this page.</p>
```

### 絶対 URL vs 相対 URL

Web 上で見かける 2 つの用語は**絶対 URL** と**相対 URL** です。

**絶対 URL**: {{glossary("protocol")}} と {{glossary("domain name")}} を含む、Web 上の絶対位置で定義された位置を指します。たとえば、`index.html` ページが Web サーバーのルート内にある `projects` というディレクトリーにアップロードされ、その Web サイトのドメインが `http://www.example.com` の場合、そのページは `http://www.example.com/projects/index.html` (あるいは `http://www.example.com/projects/` だけでも、URL で指定されていない場合、Web サーバーは `index.html` のようなランディングページを探してロードします) で入手可能です。

絶対 URL は、使用されている場所に関係なく、常に同じ場所を指します。

**相対 URL**: あなたがリンクしているファイルからの*相対的な*場所を指しています。たとえば、`http://www.example.com/projects/index.html` にあるサンプルファイルから同じディレクトリー内の PDF ファイルにリンクする場合、URL は単にファイル名 — 例えば `project-brief.pdf` — となり、追加情報は不要です。PDF が `projects` 内の `pdfs` という名前のサブディレクトリーにある場合、相対リンクは `pdfs/project-brief.pdf` (同等の絶対 URL は `http://www.example.com/projects/pdfs/project-brief.pdf`) になります。

相対 URL は内部で使用されているファイルの実際の場所によって、異なる場所を指します。たとえば、`index.html` ファイルを `projects` ディレクトリーから Web サイトのルート (最上位レベル、どのディレクトリーの中でもありません) に移動した場合、`pdfs/project-brief.pdf` 相対 URL リンクの内部は、`http://www.example.com/pdfs/project-brief.pdf` にあるファイルを指し、`http://www.example.com/projects/pdfs/project-brief.pdf` にあるファイルではありません。

もちろん、`index.html` ファイルを移動しても `project-brief.pdf` ファイルと `pdfs` フォルダーの場所が突然変わることはありません — これはリンクが間違った場所を指しているため、クリックしても機能しません。注意する必要があります。

## リンクのベストプラクティス

リンクを書くときに従うべきベストプラクティスがいくつかあります。今これらを見てみましょう。

### 明確なリンク用語を使う

ページにリンクを張るのは簡単です。それだと十分じゃありません。現在の状況やツールの好みに関係なく、リンクをすべての読者がアクセスできるようにする必要があります。例えば：

- スクリーンリーダーのユーザーは、ページ上のリンクからリンクへと飛び回ったり、文脈の外でリンクを読んだりします。
- 検索エンジンはリンクテキストを使用してターゲットファイルにインデックスを付けます。したがって、リンクテキストにキーワードを含めて、リンクされているものを効果的に説明することをお勧めします。
- 視覚的な読者はすべての単語を読むのではなくページを読み飛ばします、そして彼らの目はリンクのように目立つページの特徴に引き寄せられるでしょう。彼らは説明的なリンクテキストが役に立つと思うでしょう。

具体的な例を見てみましょう。

_**良い** リンクテキスト:_ [Download Firefox](https://firefox.com)

```html
<p><a href="https://firefox.com/">
  Download Firefox
</a></p>
```

_**悪い** リンクテキスト:_ [Click here](https://firefox.com/) to download Firefox

```html
<p><a href="https://firefox.com/">
  Click here
</a>
to download Firefox</p>
```

その他のヒント

- リンクテキストの一部として URL を繰り返さないでください。スクリーンリーダーが 1 文字ずつ読み上げると、URL は見苦しくなり、さらに見苦しくなります。
- リンクテキストに「リンク」や「へのリンク」と書いてはいけません — それは単なるノイズです。スクリーンリーダーは、リンクがあることを人々に伝えます。リンクは一般的に異なる色で表示され、下線が引かれているので、見ているユーザーもリンクがあることを知っているでしょう (ユーザーは慣れているので、この規約は一般に壊れてはいけません)。
- リンクラベルはできるだけ短くしてください — 長いリンクは、特に全体を読み上げなければならないスクリーンリーダーのユーザーを悩ませます。
- 同じテキストが複数存在し、かつ異なる場所にリンクされている場合を最小限に抑えます。これはスクリーンリーダーのユーザーにとって問題となる可能性があり、リンクの一覧が文脈からはずれて表示されることがよくあります。

### できるだけ相対リンクを使う

上記の説明から、絶対リンクを常に使用することが賢明だと思うかもしれません。結局のところ、ページが相対リンクのように移動されても壊れません。ただし、*同じ Web サイト*内の他の場所にリンクする場合は、できるだけ相対リンクを使用する必要があります (他の Web サイトにリンクする場合は、絶対リンクを使用する必要があります)。

- まず最初に、コードをスキャンするのがはるかに簡単です。相対 URL は一般に絶対 URL よりはるかに短いので、コードを読むのはずっと簡単です。
- 次に、可能な限り相対 URL を使用するほうが効率的です。
  絶対 URL を使用すると、ブラウザーはドメインネームシステム ({{glossary("DNS")}}; 詳細は[ウェブの仕組み](/ja/docs/Learn/Getting_started_with_the_web/How_the_Web_works)をご覧ください) 上のサーバーの実際の場所を検索することから開始し、次にそのサーバーに移動して要求されているファイルを見つけます。一方相対 URL では、ブラウザーは要求されているファイルを同じサーバー上で検索するだけです。そのため、相対 URL のように絶対 URL を使用する場合は、常にブラウザーに余分な作業を行わせることになります。つまりブラウザーの効率が低下します。

### HTML 以外のリソースへのリンク - 明確な道標を残す

(PDF や Word 文書のように) ダウンロードされたり (ビデオやオーディオのように) ストリーミングされたり、ポップアップウィンドウを開いたり、Flash ムービーを読み込んだりするなど、予期せぬ効果をもたらすリソースにリンクする場合は、混乱を避けるために明確な表現を追加します。例えば、それはかなりいらいらさせることができます。

- 低帯域幅の接続を使用している場合は、リンクをクリックすると、数メガバイトのダウンロードが突然開始されます。
- Flash プレーヤーがインストールされていない場合は、リンクをクリックすると突然 Flash が必要なページに移動します。

ここではどのような種類のテキストを使用できるかを見るために、いくつかの例を見てみましょう。

```html
<p><a href="http://www.example.com/large-report.pdf">
  Download the sales report (PDF, 10MB)
</a></p>

<p><a href="http://www.example.com/video-stream/" target="_blank">
  Watch the video (stream opens in separate tab, HD quality)
</a></p>

<p><a href="http://www.example.com/car-game">
  Play the car game (requires Flash)
</a></p>
```

### ダウンロードへのリンクは download 属性を使う

ブラウザーで開くのではなくダウンロードするリソースにリンクしている場合は、`download` 属性を使用してデフォルトの保存ファイル名を指定できます。これは最新の Windows 版 Firefox へのダウンロードリンクの例です。

```html
<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
   download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

## アクティブラーニング: ナビゲーションメニューの作成

この演習では、ナビゲーションメニューを使用していくつかのページをリンクして、複数ページの Web サイトを作成してください。これは Web サイトが作成される一般的な方法の 1 つです。同じナビゲーションメニューを含め、すべてのページで同じページ構造が使用されます。リンクをクリックすると、同じ場所に留まっているという印象が与えられ、異なるコンテンツが表示されます。

次の 4 ページのローカルコピーをすべて同じディレクトリーに作成する必要があります (完全なファイルリストについては [navigation-menu-start](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-start) ディレクトリーも参照してください)。

- [index.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/social.html)

あなたがすべきことは：

1.  リンク先のページの名前を含む、順序なしリストを 1 ページの指示された場所に追加します。ナビゲーションメニューは通常単なるリンクのリストなので、意味的には問題ありません。
2.  各ページ名をそのページへのリンクにします。
3.  ナビゲーションメニューを各ページにコピーします。
4.  各ページで、その同じページへのリンクだけを削除します - ページに自分自身へのリンクを含めることは混乱を招き、無意味です。また、リンクがないことは、現在表示しているページを視覚的に思い出させるものです。

完成した例では、次のようになります。

![An example of a simple HTML navigation menu, with home, pictures, projects, and social menu items](navigation-example.png)

> **Note:** 動けなくなったり、正しいかどうかわからない場合は、[ナビゲーションメニューのマークアップ](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-marked-up)ディレクトリーをチェックして正しい答えを確認できます。

## メールのリンク

クリックすると、リソースまたはページにリンクするのではなく、新しい送信メールメッセージを開くリンクまたはボタンを作成することができます。これは {{HTMLElement("a")}} 要素と `mailto:` URL スキームを使って行われます。

最も基本的で一般的に使用されている形式では、`mailto:` リンクは単に意図した受信者のメールアドレスを示します。例えば：

```html
<a href="mailto:nowhere@mozilla.org">メールをどこにも送信しません</a>
```

この結果、次のようなリンクが表示されます。[メールをどこにも送信しません](mailto:nowhere@mozilla.org)。

実際、メールアドレスはオプションです。省略した場合 (つまり、{{htmlattrxref("href", "a")}} は単に "mailto:" です)、宛先アドレスがまだ指定されていないユーザーのメールクライアントによって、新しい送信メールウィンドウが開かれます。これは、ユーザーがクリックして自分が選択したアドレスに E メールを送信できる「共有」リンクとして役立つことがよくあります。

### 詳細の指定

メールアドレスに加えて、他の情報を提供することができます。実際、提供する `mailto` URL には標準のメールヘッダフィールドを追加できます。最も一般的に使用されるのは "subject"、"cc"、および "body" です (これは本当のヘッダーフィールドではありませんが、新しいメールのための短い内容のメッセージを指定することを可能にします)。各フィールドとその値は、クエリ用語として指定されています。

これは cc、bcc、件名、本文を含む例です。

```html
<a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> **Note:** 各フィールドの値は URL エンコードされている必要があります。つまり、非印刷文字 (タブ、キャリッジリターン、改ページなどの不可視文字) とスペースの[パーセントエスケープ](http://en.wikipedia.org/wiki/Percent-encoding)が含まれています。また、疑問符 (`?`) を使用してメイン URL とフィールド値を区別し、アンパサンド (＆) を使用して `mailto:` URL 内の各フィールドを区別します。これは標準の URL クエリ表記です。[GET メソッド](/ja/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data#The_GET_method)を読んで、どの URL クエリ表記がより一般的に使用されているかを理解してください。

以下は `mailto` の他の URL の例です。

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## まとめ

とにかく今のところ、それはリンクのためのそれです！
スタイルの設定を見始めると、コースの後半のリンクに戻ります。次に HTML について説明します。テキストのセマンティクスに戻って、役に立つと思われるより高度な機能や変わった機能について説明します。高度なテキストの書式設定は、次に行うことです。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

## このモジュール内の文書

- [HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [Head とは？HTML のメタデータ](/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML テキストの基礎](/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [ハイパーリンクの作成](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [上級のテキスト整形](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [文書と Web サイトの構造](/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [HTML のデバッグ](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [文字のマークアップ](/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [コンテンツのページの構造化](/ja/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
