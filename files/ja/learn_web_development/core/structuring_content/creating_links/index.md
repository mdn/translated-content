---
title: リンクの作成
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 0d59135676db5a372b4dd692f0686e6bdfc13b51
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content")}}

ハイパーリンクは本当に重要なものです。ウェブをウェブたらしめているものです。
この記事ではリンクを作るために必要な構文を示し、リンクに関する良き習慣について扱います。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >に載っている、基本的な HTML に精通していること。 <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >見出しと段落</a
        >および<a href="/ja/docs/Learn_web_development/Core/Structuring_content/Lists"
          >リスト</a
        >などのテキストレベルの意味付け。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>リンクがウェブの基本的な機能である理由を理解しましょう。リンクのないウェブはありません。</li>
          <li><code>href</code> 属性。</li>
          <li>絶対パスと相対パス、およびそれらを使用するタイミング。</li>
          <li>パス構文の詳細。スラッシュ、単一のドット、二重のドット。</li>
          <li>リンクの状態とその重要性。<code>:hover</code>、<code>:focus</code>、<code>:visited</code>、<code>:active</code>。</li>
          <li>インラインおよびブロックレベルのリンク。</li>
          <li>スクリーンリーダーユーザーにとってのアクセシビリティの向上や、 SEO に好ましい効果を及ぼす可能性など、好ましいリンクテキストを書くことの利点を理解すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ハイパーリンクとは

ハイパーリンクは、HTML 文書の機能であり、クリックまたはその他の方法で起動されると、ブラウザーが他の文書やリソース、時には文書の特定の部分に移動するようにします。
ハイパーリンクは、ウェブが提供する最も刺激的な技術革新の一つです。
ハイパーリンクは、ウェブが始まった当初からある機能であり、ウェブをウェブたらしめているものです。
ウェブ上のそれぞれのリソースには、{{glossary("URL")}} (Uniform Resource Locator) と呼ばれるアドレスがあり、ハイパーリンクはこのアドレスを指します。

> [!NOTE]
> URL は HTML ファイルや、テキストファイル、画像、テキスト文書、動画や音声ファイルや、その他ウェブに載せられるものを指すことができます。
> ウェブブラウザーがそのファイルを表示または処理する方法を知らない場合、ファイルを開くか（この場合、ファイルを開くまたは処理する役目は端末上の適切なネイティブアプリに委ねられます）、ファイルをダウンロードするか（この場合、後で扱いを試すことができます）を尋ねられます。

例えば、 BBC のホームページには、複数のニュース記事だけでなく、サイトのさまざまなエリア（ナビゲーション機能）、ログイン/登録ページ（ユーザーツール）などを指し示すリンクが多数掲載されています。

![bbc.co.uk のフロントページで、たくさんのニュース項目と、ナビゲーションメニューの機能を表示しています](updated-bbc-website.png)

## リンクの仕組み

基本的なリンクは、リンクにしたいテキストやその他のコンテンツを {{htmlelement("a")}} 要素の中に囲むことで作成し、[`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) （**ハイパーテキスト参照**または**ターゲット**とも）にリンク先にしたいウェブアドレスを入れます。

```html
<p>
  <a href="https://www.mozilla.org/ja/">Mozilla ホームページ</a
  >へのリンクを作成しています。
</p>
```

これは以下のような結果になります。

[Mozilla ホームページ](https://www.mozilla.org/ja/)へのリンクを作成しています。

> [!NOTE]
> Scrimba の [Anchor tags](https://scrimba.com/learn-html-and-css-c0p/~0a?via=mdn) <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> スクリムは、 HTML を使用してリンクを作成する方法をインタラクティブに実演し、さらに自分自身でリンクを作成するための課題を提示します。

### ブロックレベルリンク

前述したように、{{Glossary("Block/CSS", "ブロックレベル要素")}}を含む、ほぼすべてのコンテンツをリンクにすることが可能です。
見出しをリンクにしたい場合は、以下のコードのようにアンカー (`<a>`) 要素で囲みます。

```html-nolint
<a href="https://developer.mozilla.org/ja/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  2005 年から CSS、HTML、JavaScript などのウェブ技術を文書化しています。
</p>
```

これで見出しがリンクになります。
{{EmbedLiveSample('Block level links', '100%', 150)}}

### 画像リンク

画像をリンクに変換するには、{{htmlelement("img")}} 要素を {{htmlelement("a")}} 要素で囲みます。下記例では、ローカルに保存された SVG 画像ファイルを相対パスで参照しています。

```css hidden
img {
  height: 100px;
  width: 150px;
  border: 1px solid gray;
}
```

```html
<a href="https://developer.mozilla.org/ja/">
  <img src="mdn_logo.svg" alt="MDN Web Docs" />
</a>
```

これにより、MDN ロゴがリンクになります。
{{EmbedLiveSample('Image links', '100%', 150)}}

> [!NOTE]
> ウェブで画像を使用する方法については、今後の記事で詳しくご紹介します。

### title 属性による補足情報の追加

リンクに `title` 属性を追加することもあります。
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

> [!NOTE]
> リンクのタイトルはマウスを当てないと表示されないため、キーボード操作やタッチ画面でウェブページを操作している人は、タイトル情報にアクセスしにくいという問題があります。
> タイトルの情報がページのユーザビリティにとって本当に重要であれば、通常のテキストに入れるなどして、すべてのユーザーがアクセスできるように表示すべきです。

### 独自のサンプルリンクの作成

それではあなたの番です。

1. 下記コードブロック内の **"Play"** をクリックして、MDN Playground で例を編集するか、[開始テンプレート](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)のコピーを作成し、下記のコードを中にコピーしてください。
2. 「キタリス」と「トウブハイイロリス」のテキストを、それぞれの種を説明するウィキペディアのページにリンクしてください。各リンクには、その種の学名に等しい `title` 属性を付与してください。
3. 「ウィキペディアのリスのページ」というテキストを、ウィキペディアのリスのメインページにリンクしてください。

間違えた場合は、MDN Playground の _Reset_ ボタンで作業内容をクリアできます。どうしても行き詰まった場合は、コードブロックの下にある解答を参照してください。

```html-nolint live-sample___links-1
<h1>リス</h1>

<p>
  リスは一般的に樹上性の哺乳類であると考えられていますが、リス科はそれ以上に広がり、シマリスやプレーリードッグなどの地上性齧歯類や、ムササビも含まれます。
</p>

<p>最も一般的で良く知られているリス科の種のうち、代表的な２種は以下の通りです。</p>

<ul>
  <li>キタリス</li>
  <li>トウブハイイロリス</li>
</ul>

<p>
  リスに関する情報の良い出発点としては、ウィキペディアのリスのページを参照してください。
</p>
```

{{ EmbedLiveSample('links-1', "100%", 280) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な HTML は次のようになります。

```html-nolint
<h1>リス</h1>

<p>
  リスは一般的に樹上性の哺乳類であると考えられていますが、リス科はそれ以上に広がり、シマリスやプレーリードッグなどの地上性齧歯類や、ムササビも含まれます。
</p>

<p>最も一般的で良く知られているリス科の種のうち、代表的な２種は以下の通りです。</p>

<ul>
  <li>
    <a
      href="https://ja.wikipedia.org/wiki/キタリス"
      title="Sciurus vulgaris">
      キタリス
    </a>
  </li>
  <li>
    <a
      href="https://ja.wikipedia.org/wiki/トウブハイイロリス"
      title="Sciurus carolinensis">
      トウブハイイロリス
    </a>
  </li>
</ul>

<p>
  リスに関する情報の良い出発点としては、<a href="https://ja.wikipedia.org/wiki/リス">ウィキペディアのリスのページ</a>を参照してください。
</p>
```

</details>

## URL とパスに関する簡単な入門

リンク先は URL です。URL (Uniform Resource Locator) とは、ウェブ上の何かがどこにあるかを定義する文字列です。例えば、Mozilla の日本語ホームページは `https://www.mozilla.org/ja/` にあります。

[ウェブサーバー](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)は URL へのリクエストを受け取り、適切なリソースで応答します。ほとんどのリソースはサーバーのファイルシステム上にファイルとして格納されているため、これらのリソースの URL は多くの場合ファイルパスに似ています。

> [!NOTE]
> ファイルパスと URL は同じものではありませんが、理解を容易にするため、ここでは同様に同じものとして扱います。両者の違いについては、[どうやって URL がファイルパスに変換されるのか](#どうやって-url-がファイルパスに変換されるのか)の節で詳しく説明します。

サーバーディレクトリー構造の例を見ていきましょう。

![シンプルなディレクトリー構造です。親ディレクトリーは creating-hyperlinks という名前で、 index.html と contacts.html という 2 つのファイルと、 projects と pdfs という 2 つのディレクトリーがあり、それぞれ index.html と project-brief.pdf ファイルが含まれています。](simple-directory.png)

このディレクトリー構造の**ルート**は `creating-hyperlinks` と呼ばれます。ウェブサイトを使用してローカルで作業する場合は、サイト全体が入る 1 つのディレクトリーがあります。**ルート**内には、`index.html` ファイルと `contacts.html` があります。実際のウェブサイトでは、`index.html` が私たちのホームページまたはランディングページ（ウェブサイトまたはウェブサイトの特定の部分の入口として機能するウェブページ）になります。

ルートの中にも 2 つのディレクトリー、 `pdfs` と `projects` があります。これらはそれぞれ中に PDF (`project-brief.pdf`) と `index.html` ファイルというファイルがあります。複数の `index.html` ファイルを 1 つのプロジェクト内に置くすることは可能ですが、ファイルシステム上で異なる場所に存在している必要があります。2 番目の `index.html` は、おそらくプロジェクト関連の情報のメインランディングページになります。

このディレクトリー構造内の異なるファイル間のリンク例をいくつか見て、さまざまなパスの種類を見ていきましょう。

### 同じディレクトリー

最上位の `index.html` 内に `contacts.html` を指すハイパーリンクを含める場合は、現在のファイルと同じディレクトリーにあるため、リンクしたいファイルの名前だけを指定します。そのため使用する URL は `contacts.html` です。

```html-nolint
<p>
  特定のスタッフメンバーに連絡を取りたいですか？詳細は<a href="contacts.html">お問い合わせ先ページ</a>をご覧ください。
</p>
```

同じディレクトリー内のファイルへのパスは、単一のドットとスラッシュ `./` を続けることで記述することもできます。次の例は前の例と同等ですが、より明確になると感じるため、同様に `./` を記載する人もいます。

```html-nolint
<p>
  特定のスタッフメンバーに連絡を取りたいですか？詳細は<a href="./contacts.html">お問い合わせ先ページ</a>をご覧ください。
</p>
```

> [!NOTE]
> パスに `./` を記載することで違いが生じるケースもあります。例えば、[JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)のインポート時にパスを指定する場合などです。ただし、静的な HTML や CSS のリンクについては、この点を気にする必要はありません。

### サブディレクトリーへ降りる

最上位の `index.html` 内に `projects/index.html` を指すハイパーリンクを設置する場合は、リンクしたいファイルを指定する前に `projects` ディレクトリーに移動する必要があります。これはディレクトリーの名前、スラッシュ、そしてファイルの名前を指定することでできます。そのため使用する URL は `projects/index.html` です。

```html-nolint
<p><a href="projects/index.html">プロジェクトホームページ</a>をご覧ください。</p>
```

### 親ディレクトリーに戻る

`projects/index.html` の中に `pdfs/project-brief.pdf` を指すハイパーリンクを含めたい場合は、ディレクトリー階層を上がってから `pdfs` ディレクトリーに戻る必要があります。「ディレクトリーを上る」は 2 つのドット — `..` — を使用して表します。そのため使用する URL は `../pdfs/project-brief.pdf` です。

```html-nolint
<p><a href="../pdfs/project-brief.pdf">プロジェクト概要</a>へのリンクです。</p>
```

> [!NOTE]
> 必要に応じて、これらの機能の要素を複数組み合わせて複合パスにすることができます。例えば `../../../complex/path/to/my/file.html` などです。

### ルートディレクトリーからの相対リンク

上記の URL は動作しますが、リンク元のファイルまたはリンク先のファイルが別の場所に移動された場合、リンクが切れることにご注意ください。

特定の場所へのリンクを生成し、リンク元のファイルを移動してもリンクが壊れないようにしたい場合、パスの先頭に単一のスラッシュを付けることで実現できます。これは、パスがサイトのルートディレクトリーから始まっていることを示します。例えば、`projects/index.html` 内の前回の実行されたリンクは次のように書き換えられます。

```html-nolint
<p><a href="/pdfs/project-brief.pdf">プロジェクト概要</a>へのリンクです。</p>
```

現在、パスは常にルートディレクトリー (`creating-hyperlinks`) から開始し、`pdfs` ディレクトリーに移動して `project-brief.pdf` ファイルを探します。リンク元のファイルを別の場所（例えば `a/b/c/d/e/index.html`）に移動した場合でも動作します。

リンクされた `project-brief.pdf` ファイルが別の場所に移動されると、リンクが切れてしまいます。

ウェブ上でよく目にする用語として、**絶対パス**と**相対パス**があります。

- 絶対パス: サイト内（またはウェブ上）における絶対的な位置によって定義される場所を指します。例えば、先ほどの `/pdfs/project-brief.pdf` のように、パスの先頭に単一のスラッシュを付けることで、サイトルートディレクトリーからの相対位置が常に同じ場所を指す絶対リンクを生成することができます。
- 相対パス: リンク元のファイルに対する相対的な位置を指します。先の例では、`projects/index.html` を使用して、現在のファイルと `projects` サブディレクトリー内にある `index.html` というファイルとの間に相対リンクを生成しました。現在のファイルを別の場所に移動した場合でも、パスはそのファイルに対する相対的な位置を指し続けますが、異なる絶対的な位置を指すことになります。

これらの用語は常に一貫して使用されるわけではありません。例えば、`/pdfs/project-brief.pdf` は現在のファイルの場所に対して絶対パスですが、[ドメイン名](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)に対しては相対パスです。`https://example.com/pdfs/project-brief.pdf` のように完全なドメイン名を含む URL は、ウェブ全体に対して絶対的な URL です。

### 完全 URL でリンク

パスとして完全 URL を指定できます。これにより、使用場所に関わらず常にウェブ上の同じ場所を指します。例を示します。

```html
<a href="https://www.example.com/projects/">プロジェクト</a>
```

このリンクは、たとえサイトが別のドメインに移動された場合でも、常に `https://www.example.com/projects/` にリンクします。

### 内部リンクと外部リンク

リンクが自身のサイト上のリソースを参照する場合、それは**内部リンク**と呼ばれます。リンクが別のサイト上のリソースを参照する場合、それは**外部リンク**と呼ばれます。

外部リンクを指定する際は、常に完全 URL をパスとして含む必要があります。

```html
<a href="https://www.some-other-site.com">プロジェクト</a>
```

`/pdfs/project-brief.pdf` や `projects/index.html` のようなパスで、異なるサイト上の場所を参照することはできません。これらはどちらも自身のサイト上の場所を基準とした相対パスであり、ブラウザーが該当ファイルを探すにはウェブサイトのドメイン名が必要です。

内部リンクを指定する際には、相対パス、絶対パス、完全 URL を使用することができます。この例では、以下のリンクは同等です。

```html
<a href="https://www.example.com/projects/">プロジェクト</a>

<a href="projects">プロジェクト</a>
```

移植性を考慮し、完全なドメイン名を含めない後者の形式を推奨します。前述の通り、`https://www.example.com/projects/` を指定すると、常に `https://www.example.com/projects/` にリンクされます。その後、ウェブサイトを `another-example.com` などの別のドメインに移動した場合、完全 URL リンクをすべて変更する必要があります。`/projects` のようなパスを指定した場合、ディレクトリー構造に対する相対パスであるため、引き続き動作します。

### 文書フラグメント

HTML 文書の先頭だけでなく、HTML 文書の特定の部分、いわゆる**文書フラグメント**にリンクすることもできます。
これを行うには、まずリンク先の要素に [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を割り当てる必要があります。

通常は特定の見出しにリンクするのが理にかなっているので、次のようになります。

```html
<h2 id="mailing_address">郵送先住所</h2>
```

次にその特定の `id` にリンクするには、URL の最後にハッシュ/ポンド記号 (`#`) を付けて書きます。例えば次のようになります。

```html-nolint
<p>
  お便りを送っていただく場合は、私たちの<a href="contacts.html#mailing_address">郵送先住所</a>を使用してください。
</p>
```

同じ文書の別の部分にリンクするために、文書フラグメント参照を単独で使用することもできます。

```html-nolint
<p>
  <a href="#mailing_address">会社の郵送先住所</a>は、このページの下部にあります。
</p>
```

### どうやって URL がファイルパスに変換されるのか

これまで見てきたリンク先はすべて URL であり、これらは関連リソースを探すためにウェブサーバーによって取得されます。
**ウェブコンテンツはサーバーのファイルシステムを直接参照することはできません。**

これまで見てきたサーバーの例は、[静的ウェブサイト](/ja/docs/Glossary/SSG)を作成するものです。
サーバーは URL の[パス名](/ja/docs/Web/API/URL/pathname)部分だけを取り出し、ファイルシステム内で対応するファイルを直接検索します。

> [!NOTE]
> 多くのサーバーは、静的ファイルから取得するのではなく、URLに対して動的にコンテンツを生成します。[ウェブフレームワーク](/ja/docs/Learn_web_development/Core/Frameworks_libraries)を使用している場合、ソースコードディレクトリーはサーバーに展開される構成と大きく異なる可能性があります。自身のウェブサイトを扱う際には、URL がソースファイルにどのように割り当てられるかを理解するために、ビルドツールとサーバー設定を把握する必要があります。

サンプルサイトのディレクトリーをルートとしてウェブサーバーを起動し（[ローカルテストサーバーの設定方法](/ja/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)を参照）、ウェブサイトの{{glossary("domain name", "ドメイン名")}}が `example.com` に設定されている場合、 `pdfs/project-brief.pdf` ファイルは `https://www.example.com/pdfs/project-brief.pdf` からアクセスできるようになります。

すべてのリンクは現在の文書の URL を基準に解決されるため、次のようになります。

- `https://example.com` ドメイン上の全ページにおいて、`/pdfs/project-brief.pdf` へのリンクは常に `https://www.example.com/pdfs/project-brief.pdf` へのリンクを生成します。このリンクのパス名は `/pdfs/project-brief.pdf` です。サーバーはルートディレクトリー内で `pdfs` ディレクトリーを検索し、そのディレクトリー内の `project-brief.pdf` ファイルを探します。
- `projects/index.html` へのリンクは `https://www.example.com/projects/index.html` へのリンクを生成しますが、これはルートディレクトリー内のファイル、例えば最上位の `index.html` ファイルや `contacts.html` などに設置されている場合のみです。例えば、`pdfs/index.html` という HTML ファイル内に設置した場合、リンク先は `https://www.example.com/pdfs/projects/index.html` となります。このパス名は `/pdfs/projects/index.html` であり、存在しないため、リンク切れが発生します。

#### デフォルトの `index.html` ページ

`index.html` ファイルを参照する際、ふつうは URL やパスに `index.html` を含める必要はありません。ファイル名が指定されていない場合、ウェブサーバーは `index.html` という名前のデフォルトのランディングページを検索するためです。

`projects/index.html` のパス例を改めて見てみましょう。単に `projects` と記述するだけで、`https://www.example.com/projects/index.html` へのリンクが作成されます。ページに移動する際、URL を `https://www.example.com/projects/` と記述しても、適切な場所に到達できます。

> [!NOTE]
> URLの末尾に付くスラッシュ (`/`) は重要です。これを付けることで、`projects/index.html` 内の `contacts.html` への相対リンクは `https://www.example.com/projects/contacts.html`（同じディレクトリー内）に解決されます。付けない場合、URL はファイルとして扱われ、相対リンクは `https://www.example.com/contacts.html`（一つ上のディレクトリー）に解決されます。
>
> [ウェブサーバーが異なると `https://www.example.com/projects` のような URL の扱い方が変わります](https://github.com/slorber/trailing-slash-guide)（英語）。サーバーによって、末尾にスラッシュをつけて URL へ自動的にリダイレクトするものもあれば、リダイレクトせずに同じ `index.html` を配信するものもあります。後者の動作では相対リンクが壊れる可能性があります。

## リンクの良い取り組み

リンクを書くときに従うべき最善の手法がいくつかあります。今これらを見てみましょう。

### 明確なリンク語を使う

ページにリンクを張るのは簡単です。それでは十分ではありません。現在の状況やツールの好みに関係なく、リンクをすべての読者が操作できるようにする必要があります。例えば次のようにします。

- スクリーンリーダーのユーザーは、ページ上のリンクからリンクへと飛び回ったり、文脈の外でリンクを読んだりします。
- 検索エンジンはリンクテキストを使用して対象ファイルにインデックスを付けます。したがって、リンクテキストにキーワードを含めて、リンクされているものを効果的に説明することをお勧めします。
- 視覚的な読者はすべての単語を読むのではなくページを読み飛ばします、そして彼らの目はリンクのように目立つページの特徴に引き寄せられるでしょう。彼らは説明的なリンクテキストが役に立つと思うでしょう。

具体的な例を見てみましょう。

**良い** リンクテキスト: [Firefox をダウンロード](https://www.firefox.com/ja/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.firefox.com/ja/">Firefox をダウンロード</a></p>
```

<!-- markdownlint-disable descriptive-link-text -->

**悪い** リンクテキスト: [こちらをクリック](https://www.firefox.com/ja/)して Firefox をダウンロード

```html example-bad
<p>
  <a href="https://www.firefox.com/ja/">こちらをクリック</a>して Firefox
  をダウンロード
</p>
```

<!-- markdownlint-enable descriptive-link-text -->

その他のヒントです。

- URL をリンクテキストの一部に入れない。 — URL は見かけが醜く、スクリーンリーダーが 1 文字ずつ読み上げるとさらに醜く聞こえます。
- リンクテキストに「～へのリンク」または「リンク先：」と書かない。 — 単なるノイズになります。スクリーンリーダーはリンクがあることを利用者に伝えます。
  視覚的なユーザーも、リンクは一般的に異なる色と下線でスタイル設定されているため、リンクがあることを認識できます（ユーザーはこの慣習に慣れているため、一般的にこの慣習を崩すべきではありません）。
- リンクのテキストは可能な限り短くする。 — スクリーンリーダーはリンクのテキスト全体を解釈する必要があるため、この方法が有効です。
- 同じテキストのコピーが複数の場所にリンクするようなものを最小化する。
  文脈から外れて「ここをクリック」「ここをクリック」「ここをクリック」と表示されたリンクのリストがあると、スクリーンリーダーにとって問題が発生する可能性があるからです。

### HTML 以外のリソースへのリンク - 明確な道標を示す

現在のページで「通常のナビゲーション」として開くためのリソースへのリンクを設定する場合、何が起こるのかをリンクテキストに明確に追加する必要があります。例えば、リソースのダウンロードやストリーミング、ポップアップの表示、それ以外にも予期せぬ効果が発生する場合、リンクテキストでその旨を明記する必要があります。これは、数メガバイトもの資産のダウンロードを避けたい低帯域幅接続のユーザーにとって重要です。また、スクリーンリーダー利用者が何が行われているか把握できない場合もあるため、予期される動作を伝える助けとなります。

ここで、どのようなテキストを使用することができるか、いくつかの例を見てみましょう。

```html
<p>
  <a href="/large-report.pdf" download>
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
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=ja"
  download="firefox-latest-64bit-installer.exe">
  最新の Windows (64 ビット) 版 Firefox をダウンロード (日本語, JA)
</a>
```

### リンクを新しいタブで開く場合

リンクはデフォルトで、そのページと同じタブで開かれます。これにより、ユーザーはブラウザーの戻るボタンを使用して前のページに戻ることができます。しかし、多くのサイト（MDN を含む）では、特定のリンク（特に外部リンク）を新しいタブで開くことを選択しています。これは、[`target`](/ja/docs/Web/HTML/Reference/Elements/a#target) 属性を `"_blank"` に設定することで実現されます。

```html-nolint
Firefox は <a href="https://www.mozilla.org/ja/" target="_blank">Mozilla 財団</a>によって開発されています。
```

リンクを新しいタブで開くかどうかは、ユーザー体験設計の観点に基づいて意識的に判断すべきです。考慮すべきことを以下に示します。

- リンクを新しいタブで開くと、2 つの文書が同時に表示されるため、「並列」ナビゲーション体験に有用です。一方、同じタブで開くリンクは、現在のページの続きのような性質を持ちます。
- 新しいタブでリンクを開くことは、戻るボタンに慣れているユーザーにとって混乱を招く可能性があります。
- リンクがデフォルトで同じタブで開かれる場合でも、ユーザーはキーボードショートカットやコンテキストメニューのオプションを使用して、新しいタブで開くことを選択できます。一方、新しいタブで開くリンクは、同じタブで開くことが困難です。
- スクリーンリーダーのユーザーは、新しいタブで開くリンクに混乱する可能性があります。新しいタブが開いたことに気づかず、ページ上の現在位置に関する前後関係を見失う恐れがあるためです。

一般的な手法として、外部リンクは新しいタブで開くようにし、内部リンクは同じタブで開くようにします。
デザイナーによって、すべてのリンクを同じタブで開くことを推奨する場合もあります。
リンクを新しいタブで開く場合は、リンクテキストの横にアイコンを表示するなど、そのようなリンクであることがわかる手がかりを提供することをお勧めします。

## ナビゲーションメニューの作成

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

> [!NOTE]
> 行き詰まったり、正しいかどうかわからない場合は、[ナビゲーションメニューのマークアップ](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up)ディレクトリーをチェックして正しい答えを確認できます。

## メールのリンク

クリックすると、リソースまたはページにリンクするのではなく、新しい送信メールメッセージを開くリンクまたはボタンを作成することができます。
これは {{HTMLElement("a")}} 要素と `mailto:` URL スキームを使って行われます。

最も基本的で一般的に使用されている形式では、`mailto:` リンクは単に意図した受信者のメールアドレスを示します。例えば次のようになります。

```html
<a href="mailto:nowhere@mozilla.org">メールをどこにも送信しません</a>
```

この結果、 [メールをどこにも送信しません](mailto:nowhere@mozilla.org)というリンクが表示されます。

実際、メールアドレスはオプションです。省略して [`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) が "mailto:" であった場合、ユーザーのメールクライアントによって新しい送信メールのウィンドウが、宛先なしで開かれます。
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

> [!NOTE]
> 各フィールドの値は URL エンコードされている必要があります。つまり、非印刷文字（タブ、改行、改ページなどの不可視文字）と空白の{{Glossary("Percent-encoding", "パーセントエスケープ")}}が含まれています。
> また、疑問符 (`?`) を使用してメイン URL とフィールド値を区別し、アンパサンド (&) を使用して `mailto:` URL 内の各フィールドを区別します。
> これは標準の URL クエリー表記です。 [GET メソッド](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#get_メソッド)を読んで、どの URL クエリー表記がより一般的に使用されているかを理解してください。

以下は `mailto` の他の URL の例です。

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## まとめ

リンクの説明は、これで終わりです。リンクのスタイル設定を見ていくこのコースの後半で、再びリンクについて見ていきます。次に、リンクに関する情報の理解と記憶の程度を調べるための試験を用意しています。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content")}}
