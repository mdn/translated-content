---
title: ハイパーリンクの作成
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
l10n:
  sourceCommit: bb6092c4230b69c2eceae6910af68c73955cae1c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

ハイパーリンクは本当に重要なものです。ウェブをウェブたらしめているものです。
この記事ではリンクを作るために必要な構文を示し、リンクに関する良き習慣について議論します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a href="/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML を始めよう</a
        >にあるような、基本的な HTML を理解していること。
        <a
          href="/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML テキストの基礎</a
        >にあるような、 HTML のテキストの整形ができること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        ハイパーリンクを効率的に実装する方法、複数のファイルを互いにリンクする方法を学ぶ。
      </td>
    </tr>
  </tbody>
</table>

## ハイパーリンクとは

ハイパーリンクは、ウェブが提供する最も刺激的な技術革新の一つです。
ハイパーリンクは、ウェブが始まった当初からある機能であり、ウェブをウェブたらしめているものです。
ハイパーリンクによって、文書を他の文書やリソースにリンクしたり、文書の特定の部分にリンクしたり、ウェブアドレスでアプリを利用できるようにすることができます。
ほとんどすべてのウェブコンテンツはリンクに変換することができ、クリックするか他の方法でアクティブにすると、ウェブブラウザーは別のウェブアドレス ({{glossary("URL")}}) に移動します。

> **メモ:** URL は HTML ファイルや、テキストファイル、画像、テキスト文書、動画や音声ファイルや、その他ウェブに載せられるものを指すことができます。
> ウェブブラウザーがそのファイルを表示または処理する方法を知らない場合、ファイルを開くか（この場合、ファイルを開くまたは処理する役目は端末上の適切なネイティブアプリに委ねられます）、ファイルをダウンロードするか（この場合、後で扱いを試すことができます）を尋ねられます。

例えば、 BBC のホームページには、複数のニュース記事だけでなく、サイトのさまざまなエリア（ナビゲーション機能）、ログイン/登録ページ（ユーザーツール）などを指し示すリンクが多数掲載されています。

![bbc.co.uk のフロントページで、たくさんのニュース項目と、ナビゲーションメニューの機能を表示しています](updated-bbc-website.png)

## リンクの解剖

基本的なリンクは、リンクにしたいテキストやその他のコンテンツを {{htmlelement("a")}} 要素の中に囲むことで作成し、[`href`](/ja/docs/Web/HTML/Element/a#href) （**ハイパーテキスト参照**または**ターゲット**とも）にリンク先にしたいウェブアドレスを入れます。

```html
<p>
  <a href="https://www.mozilla.org/ja/">Mozilla ホームページ</a
  >へのリンクを作成しています。
</p>
```

これは以下のような結果になります。\
[Mozilla ホームページ](https://www.mozilla.org/ja/)へのリンクを作成しています。

### ブロックレベルリンク

前述したように、[ブロックレベル要素](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started#block_versus_inline_elements) を含む、ほぼすべてのコンテンツをリンクにすることが可能です。
見出しをリンクにしたい場合は、以下のコードのようにアンカー（`<a>`）要素で囲みます。

```html
<a href="https://developer.mozilla.org/ja/">
  <h1>MDN Web Docs</h1>
</a>
<p>2005 年から CSS、HTML、JavaScript などのウェブ技術を文書化しています。</p>
```

これで見出しがリンクになります。
{{EmbedLiveSample('Block level links', '100%', 150)}}

### 画像リンク

リンクにしたい画像がある場合は、{{htmlelement("a")}} 要素により、{{htmlelement("img")}} 要素で参照する画像ファイルを囲んでください。

```css hidden
img {
  height: 100px;
  width: 150px;
  border: 1px solid gray;
}
```

```html
<a href="https://developer.mozilla.org/ja/">
  <img src="mdn_logo.svg" alt="MDN Web Docs ホームページ" />
</a>
```

これにより、MDN ロゴがリンクになります。
{{EmbedLiveSample('Image links', '100%', 150)}}

> **メモ:** ウェブで画像を使用する方法については、今後の記事で詳しくご紹介します。

### title 属性による補足情報の追加

リンクに追加したいもう一つの属性は `title` です。
タイトルには、そのページがどのような情報を含んでいるか、あるいはウェブサイトで注意すべきことなど、リンクに関する追加情報が含まれます。

```html-nolint
<p>
  <a
    href="https://www.mozilla.org/ja/"
    title="Mozilla の使命と協力方法について調べる最適な場所">
    Mozilla ホームページ</a>へのリンクを作成しています。
</p>
```

これにより、以下のような結果が得られ、リンクの上にマウスを当てると、タイトルがツールチップとして表示されます。

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> **メモ:** リンクのタイトルはマウスを当てないと表示されないため、キーボード操作やタッチ画面でウェブページを操作している人は、タイトル情報にアクセスしにくいという問題があります。
> タイトルの情報がページのユーザビリティにとって本当に重要であれば、通常のテキストに入れるなどして、すべてのユーザーがアクセスできるように表示する必要があります。

### アクティブラーニング: 独自のサンプルリンクを作成する

ローカルのコードエディターを使用して HTML 文書を作成してください。[テンプレートを取得してください](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)。

- HTML の本文の中に、1 つ以上の段落または他の種類の既に知っているコンテンツを追加してみてください。
- コンテンツの一部をリンクにしてください。
- タイトル属性を含めてください。

## URL とパスに関する簡単な入門

リンク先を完全に理解するには、 URL とファイルパスを理解する必要があります。この節では、これを達成するために必要な情報を提供します。

URL (Uniform Resource Locator) は、何かがウェブ上のどこにあるのかを定義するテキストの文字列です。たとえば、 Mozilla の日本語のホームページは `https://www.mozilla.org/ja/` にあります。

URL はファイルを見つけるためにパスを使います。パスはファイルシステム内の目的のファイルが存在する場所を指定します。ディレクトリー構造の簡単な例を見てみましょう（[creating-hyperlinks](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/creating-hyperlinks) ディレクトリーを参照してください。

![シンプルなディレクトリー構造です。親ディレクトリーは creating-hyperlinks という名前で、 index.html と contacts.html という 2 つのファイルと、 projects と pdfs という 2 つのディレクトリーがあり、それぞれ index.html と project-brief.pdf ファイルが含まれています。](simple-directory.png)

このディレクトリー構造の**ルート**は `creating-hyperlinks` と呼ばれます。ウェブサイトを使用してローカルで作業する場合は、サイト全体が入る 1 つのディレクトリーがあります。ルート内には、`index.html` ファイルと `contacts.html` があります。実際のウェブサイトでは、`index.html` が私たちのホームページまたはランディングページ（ウェブサイトまたはウェブサイトの特定の部分の入口として機能するウェブページ）になります。

私たちのルートの中にも 2 つのディレクトリー、 `pdfs` と `projects` があります。これらはそれぞれ中に PDF (`project-brief.pdf`) と `index.html` ファイルというファイルがあります。ファイルシステム内の別の場所にある限り、1 つのプロジェクトに 2 つの `index.html` ファイルを非常にうまく入れることができることに注意してください。多くのウェブサイトはそうします。2 番目の `index.html` は、おそらくプロジェクト関連の情報のメインランディングページになります。

- **同じディレクトリーの場合**: `index.html` （最上位の `index.html`）内に `contacts.html` を指すハイパーリンクを含める場合は、現在のファイルと同じディレクトリーにあるため、リンクしたいファイルの名前を指定するだけです。そのため使用する URL は `contacts.html` です。

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **サブディレクトリーへの移動**: `index.html` （最上位の `index.html`）内に `projects/index.html` を指すハイパーリンクを含める場合は、リンクしたいファイルを指定する前に `projects` ディレクトリーに移動する必要があります。これはディレクトリーの名前、スラッシュ、そしてファイルの名前を指定することでできます。そのため使用する URL は `projects/index.html` です。

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **親ディレクトリーに戻る**: `projects/index.html` の中に `pdfs/project-brief.pdf` を指すハイパーリンクを含めたい場合は、ディレクトリー階層を上がってから `pdfs` ディレクトリーに戻る必要があります。「ディレクトリーを上る」は 2 つのドット — `..` — を使用して表します。そのため使用する URL は `../pdfs/project-brief.pdf` です。

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> **メモ:** 例えば `../../../complex/path/to/my/file.html` のように、必要に応じて、これらの機能の複数のインスタンスを複雑な URL に組み合わせることができます。

### 文書フラグメント

HTML 文書の上部だけでなく、HTML 文書の特定の部分（**文書フラグメント**と呼ばれる）にリンクすることもできます。
これを行うには、まずリンク先の要素に [`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性を割り当てる必要があります。
通常は特定の見出しにリンクするのが理にかなっているので、次のようになります。

```html
<h2 id="Mailing_address">Mailing address</h2>
```

次にその特定の `id` にリンクするには、URL の最後にハッシュ/ポンド記号 (`#`) を付けて書きます。例えば次のようになります。

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

*同じ文書の別の部分*にリンクするために、文書フラグメント参照を単独で使用することもできます。

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### 絶対 URL vs 相対 URL

ウェブ上では、**絶対 URL** と**相対 URL** という 2 つの用語があります。

**絶対 URL**: {{glossary("protocol", "プロトコル")}}と{{glossary("domain name", "ドメイン名")}}を含む、ウェブ上の絶対位置で定義された位置を指します。
たとえば、`index.html` ページがウェブサーバーのルート内にある `projects` というディレクトリーにアップロードされており、そのウェブサイトのドメインが `http://www.example.com` である場合、そのページは `http://www.example.com/projects/index.html` （あるいは `http://www.example.com/projects/` だけでも、URL で指定されていない場合、ウェブサーバーは `index.html` のようなランディングページを探して読み込みます）で取得することができます。

絶対 URL は、使用されている場所に関係なく、常に同じ場所を指します。

**相対 URL**: リンク元のファイルからの*相対的な*場所を指しています。たとえば、`http://www.example.com/projects/index.html` にあるサンプルファイルから同じディレクトリー内の PDF ファイルにリンクする場合、URL は単にファイル名 — 例えば `project-brief.pdf` — となり、追加情報は不要です。PDF が `projects` 内の `pdfs` という名前のサブディレクトリーにある場合、相対リンクは `pdfs/project-brief.pdf` （同等の絶対 URL は `http://www.example.com/projects/pdfs/project-brief.pdf`）になります。

相対 URL は内部で使用されているファイルの実際の場所によって、異なる場所を指します。たとえば、`index.html` ファイルを `projects` ディレクトリーからウェブサイトのルート（最上位レベル、どのディレクトリーの中でもありません）に移動した場合、`pdfs/project-brief.pdf` 相対 URL リンクの内部は、`http://www.example.com/pdfs/project-brief.pdf` にあるファイルを指し、`http://www.example.com/projects/pdfs/project-brief.pdf` にあるファイルではありません。

もちろん、`index.html` ファイルを移動しても `project-brief.pdf` ファイルと `pdfs` フォルダーの場所が突然変わることはありません。これはリンクが間違った場所を指しているため、クリックしても機能しません。注意する必要があります。

## リンクの良い慣習

リンクを書くときに従うべき良い慣習がいくつかあります。今これらを見てみましょう。

### 明確なリンク語を使う

ページにリンクを張るのは簡単です。それでは十分ではありません。現在の状況やツールの好みに関係なく、リンクをすべての読者がアクセスできるようにする必要があります。例えば次のようにします。

- スクリーンリーダーのユーザーは、ページ上のリンクからリンクへと飛び回ったり、文脈の外でリンクを読んだりします。
- 検索エンジンはリンクテキストを使用して対象ファイルにインデックスを付けます。したがって、リンクテキストにキーワードを含めて、リンクされているものを効果的に説明することをお勧めします。
- 視覚的な読者はすべての単語を読むのではなくページを読み飛ばします、そして彼らの目はリンクのように目立つページの特徴に引き寄せられるでしょう。彼らは説明的なリンクテキストが役に立つと思うでしょう。

具体的な例を見てみましょう。

**良い** リンクテキスト: [Firefox をダウンロード](https://www.mozilla.org/ja/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/firefox/">Firefox をダウンロード</a></p>
```

**悪い** リンクテキスト: [こちらをクリック](https://www.mozilla.org/firefox/)して Firefox をダウンロード

```html example-bad
<p>
  <a href="https://www.mozilla.org/firefox/"> こちらをクリック </a>して Firefox
  をダウンロード
</p>
```

その他のヒントです。

- URL をリンクテキストの一部に入れない。 — URL は醜く見え、スクリーンリーダーが 1 文字ずつ読み上げるとさらに醜く聞こえます。
- リンクテキストに「リンク」または「リンク先」と書かない。 — 単なるノイズになります。スクリーンリーダーはリンクがあることを利用者に伝えます。
  視覚的なユーザーも、リンクは一般的に異なる色と下線でスタイル設定されているため、リンクがあることを認識できます（ユーザーはこの慣習に慣れているため、一般的にこの慣習を崩すべきではありません）。
- リンクのテキストは可能な限り短くする。 — スクリーンリーダーはリンクのテキスト全体を解釈する必要があるため、この方法が有効です。
- 同じテキストのコピーが複数の場所にリンクするようなものを最小化する。
  文脈から外れて「ここをクリック」「ここをクリック」「ここをクリック」と表示されたリンクのリストがあると、スクリーンリーダーにとって問題が発生する可能性があるからです。

### HTML 以外のリソースへのリンク - 明確な道標を示す

（PDF や Word 文書のように）ダウンロードを行ったり、（動画や音声のように）ストリーミングを行ったり、（ポップアップウィンドウを開くなど）予期せぬ効果をもたらすリソースにリンクする場合は、混乱を避けるために明確な表現を追加してください。

例えば次のようなものがあります。

- 低帯域幅の接続を使用している場合に、リンクをクリックすると、数メガバイトのダウンロードが突然開始される。

ここで、どのようなテキストを使用することができるか、いくつかの例を見てみましょう。

```html
<p>
  <a href="https://www.example.com/large-report.pdf">
    販売レポートをダウンロード (PDF, 10MB)
  </a>
</p>

<p>
  <a href="https://www.example.com/video-stream/" target="_blank">
    動画を見る（別なタブで HD 品質のストリーミングが開きます）
  </a>
</p>
```

### ダウンロードへのリンクは download 属性を使う

ブラウザーで開くのではなく、ダウンロードするリソースにリンクしている場合は、 `download` 属性を使用して既定の保存ファイル名を指定できます。これは最新の Windows 版 Firefox のダウンロードリンクの例です。

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

## アクティブラーニング: ナビゲーションメニューの作成

この演習では、ナビゲーションメニューを使用していくつかのページをリンクして、複数ページのウェブサイトを作成してください。これはウェブサイトが作成される一般的な方法の 1 つです。同じナビゲーションメニューを含め、すべてのページで同じページ構造が使用されます。リンクをクリックすると、同じ場所に留まっているという印象が与えられ、異なるコンテンツが表示されます。

次の 4 ページのローカルコピーをすべて同じディレクトリーに作成する必要があります（完全なファイルリストについては [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start) ディレクトリーも参照してください）。

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

すべきことを挙げます。

1. リンク先のページの名前を含む、順序なしリストを 1 ページの指示された場所に追加してください。
   ナビゲーションメニューは通常単なるリンクのリストなので、意味的には問題ありません。
2. 各ページ名をそのページへのリンクにしてください。
3. ナビゲーションメニューを各ページにコピーしてください。
4. 各ページで、その同じページへのリンクだけを削除してください。ページに自分自身へのリンクを含めることは混乱を招き、無意味です。
   また、リンクがないことは、現在表示しているページを視覚的に思い出させるものです。

完成した例では、次のようになります。

![シンプルな HTML ナビゲーションメニューの例。ホーム、ピクチャー、プロジェクト、ソーシャルの各メニューがあります。](navigation-example.png)

> **メモ:** 行き詰まったり、正しいかどうかわからない場合は、[ナビゲーションメニューのマークアップ](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up)ディレクトリーをチェックして正しい答えを確認できます。

## メールのリンク

クリックすると、リソースまたはページにリンクするのではなく、新しい送信メールメッセージを開くリンクまたはボタンを作成することができます。これは {{HTMLElement("a")}} 要素と `mailto:` URL スキームを使って行われます。

最も基本的で一般的に使用されている形式では、`mailto:` リンクは単に意図した受信者のメールアドレスを示します。例えば次のようになります。

```html
<a href="mailto:nowhere@mozilla.org">メールをどこにも送信しません</a>
```

この結果、次のようなリンクが表示されます。 [メールをどこにも送信しません](mailto:nowhere@mozilla.org)

実際、メールアドレスはオプションです。省略して [`href`](/ja/docs/Web/HTML/Element/a#href) が "mailto:" であった場合、ユーザーのメールクライアントによって新しい送信メールのウィンドウが、宛先なしで開かれます。
これは、ユーザーがクリックして自分が選択したアドレスにメールを送信できる「共有」リンクとして役立つことがよくあります。

### 詳細の指定

メールアドレスに加えて、他の情報を提供することができます。実際、提供する `mailto` URL には標準のメールヘッダーフィールドを追加できます。最も一般的に使用されるのは "subject"、"cc"、"body" です（これは本当のヘッダーフィールドではありませんが、新しいメールのための短い内容のメッセージを指定するこができます）。各フィールドとその値は、クエリー用語として指定されています。

これは cc、bcc、件名、本文を含む例です。

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> **メモ:** 各フィールドの値は URL エンコードされている必要があります。つまり、非印刷文字（タブ、改行、改ページなどの不可視文字）とスペースの[パーセントエスケープ](http://en.wikipedia.org/wiki/Percent-encoding)が含まれています。
> また、疑問符 (`?`) を使用してメイン URL とフィールド値を区別し、アンパサンド (&) を使用して `mailto:` URL 内の各フィールドを区別します。
> これは標準の URL クエリー表記です。 [GET メソッド](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data#get_メソッド)を読んで、どの URL クエリー表記がより一般的に使用されているかを理解してください。

以下は `mailto` の他の URL の例です。

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## スキルをテストしましょう

この記事の最後にたどり着きましたが、最も重要な情報を覚えていますか？次に移動する前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります - [スキルのテスト: リンク](/ja/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Links) をご覧ください。

## まとめ

リンクについては、今のところこれで終わりです。このコースの後半で、スタイル設定を始める際にリンクに戻ります。 HTML についての次は、テキストの意味づけに戻り、有用と思われるより高度で珍しい機能を見ていきます - [高度なテキスト整形](/ja/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)が次のステップです。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}
