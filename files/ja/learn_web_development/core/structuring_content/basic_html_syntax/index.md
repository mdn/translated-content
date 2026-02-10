---
title: 基本的な HTML の構文
slug: Learn_web_development/Core/Structuring_content/Basic_HTML_syntax
l10n:
  sourceCommit: d63fef1845615e13132bbbebb8723785eace208d
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}

この記事では、HTML の基本概念（用語、構文、構造など）を網羅します。学習の過程で、対話的な課題に取り組みながら、基本的な HTML の記述に慣れることができます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">基本的なソフトウェアのインストール</a>、<a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">ファイルの取り扱い</a>に関する基本的な理解。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>HTML 要素の構造 — 要素、開始タグ、コンテンツ、終了タグ、属性。</li>
          <li>HTML本文と、ページコンテンツのコンテナーとしてのその目的。</li>
          <li>空要素とは何か、また、他の要素とどのように異なるか。</li>
          <li>HTML 文書の先頭に doctype 宣言が必要であること、その元々の意図された目的、そして現在ではやや歴史的遺物となっている事実。</li>
          <li>HTML は正しく入れ子にする必要があることを理解すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTML とは？

{{glossary("HTML")}} (ハイパーテキストマークアップ言語、HyperText Markup Language) は、訪れたウェブサイトの構成をブラウザーに対して伝えるために使うマークアップ言語です。HTML は{{glossary("Element", "要素")}}の集まりからなり、コンテンツの一部を要素で囲む（*マークアップ*する）ことで、特定の見せ方・動かし方に変えられます。{{glossary("Tag", "タグ")}}で囲むことで、コンテンツの一部を他のページへリンクするハイパーリンクにしたり、単語を斜体にしたりすることができます。たとえば、次のテキストの行を見てください。

```plain
My cat is very grumpy
```

このテキストを段落と指定するには、段落 ({{htmlelement("p")}}) タグで囲みます。

```html
<p>My cat is very grumpy</p>
```

あるいは、このテキストを最上位の見出しと指定するには、[`<h1>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) タグで囲みます。

```html
<h1>My cat is very grumpy</h1>
```

HTML は、**HTML 文書**、あるいは単に**文書**と呼ばれるテキストファイル内に存在し、ファイル拡張子は `.html` です。これまでウェブページについて述べてきましたが、HTML 文書はウェブページのコンテンツを含み、その構造を指定します。

最もよく見かける HTML ファイルは `index.html` です。これは通常、ウェブサイトのホームページコンテンツを格納するために使用されます。サブフォルダー内に独自の `index.html` ファイルが配置されることも一般的であり、ウェブサイトには異なる場所に複数のインデックスファイルがすることがあります。

> [!NOTE]
> HTML のタグは大文字小文字を区別しません。つまり大文字でも小文字でも書くことができます。例えば {{htmlelement("title")}} タグは `<title>`、`<TITLE>`、`<Title>`、`<TiTlE>` などと書くことができ、どれも正しく動作します。しかし、すべての要素を小文字で書くことが、一貫性や信頼性、その他の理由のために最良の習慣です。

## HTML 要素の構成

前段で紹介した段落要素についてもう少し詳しく見ていきましょう。

![HTML の要素の構造を示すサンプルコード。 <p> My cat is very grumpy </p>.](grumpy-cat-small.png)

完全な要素は次のものから構成されています。

- **開始タグ (Opening tag):** 要素名（この場合は段落を表す _p_）、囲んでいる開き山括弧と閉じ山括弧で構成されます。これは要素が始まってその効果が開始する位置を宣言します。この場合、段落が始まる位置です。
- **コンテンツ (Content):** これは要素の内容です。この例の場合、段落のテキスト "My cat is very grumpy" です。
- **終了タグ (Closing tag):** 開始タグと同じですが、要素名の前にスラッシュを記載します。これは、要素の終わりを示すものです。終了タグを記載し忘れるのは、初心者にありがちなミスで、おかしな結果を生むことがあります。

> [!NOTE]
> 学習パートナーである Scrimba の [HTML タグ](https://scrimba.com/learn-html-and-css-c0p/~02?via=MDN) <sup> [_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> すくリムで HTML タグのインタラクティブな解説をご覧ください。

### 最初の HTML 要素を作ってみる

では、自分自身で HTML 要素を書く練習をしてみましょう。

1. 下記コードブロック内の **"Play"** をクリックして、MDN Playground で例を編集してください。
2. テキスト行を `<em>` と `</em>` タグで囲みます。_要素を開くための開始タグ (`<em>`) を行頭に配置します。要素を閉じるための終了タグ (`</em>`) を行末に配置します。これにより、レンダリングされたテキストが斜体で表示されるはずです。
3. 挑戦したい気分なら、[その他の HTML 要素](/ja/docs/Web/HTML/Reference/Elements)を調べて、テキストの例に適用してみてください。

間違えた場合は、MDN Playground の _Reset_ ボタンで作業内容をクリアできます。どうしても行き詰まった場合は、コードブロックの下にある解答を参照してください。

```html live-sample___basic_html_1
This is my text.
```

{{ EmbedLiveSample('basic_html_1', "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な HTML の行は次のようになります。

```html
<em>This is my text.</em>
```

</details>

### 要素を入れ子にする

要素の中に要素を入れることができます。これは**入れ子**（ネスト）と呼ばれています。もし猫が**とても**不機嫌だと表現したい場合、「とても」という単語を {{htmlelement("strong")}} 要素で囲むことで、その単語を書式化できます。

```html
<p>うちの猫は<strong>とても</strong>不機嫌です。</p>
```

このコードブロックでは、テキスト「うちの猫はとても不機嫌です。」の全体が段落として定義されています。さらに「とても」という単語は、強い重要性を持つように追加で定義されています。

入れ子には適切な方法と間違った方法があります。以上の上のコードブロックでは、まず `<p>` 要素を開き、次に `<strong>` 要素を開いています。適切な入れ子のためには、先に `<strong>` 要素を閉じ、その後 `<p>` を閉じます。

次のものは、間違った入れ子の例です。

```html-nolint example-bad
<p>うちの猫は<strong>とても不機嫌です。</p></strong>
```

**タグは互いに内側または外側になるように開始タグと終了タグを正しく記述する必要があります**。前述のコードブロックでは要素が重なっているため、ブラウザーは意図を推測しなければなりません。このような推測は予期しない結果を招く可能性があります。

### 空要素

全ての要素が上述の開始タグ、コンテンツ、終了タグのパターンに従っているわけではありません。要素によっては単一のタグのみで構成され、通常、文書内でそれが含まれている場所に何かを挿入したり埋め込んだりするために使用されます。そのような要素は{{glossary("void element", "空要素")}}と呼ばれます。「他の HTML コンテンツを含むことができない要素」という意味です。

例えば、{{htmlelement("br")}} 要素はテキスト行に改行を挿入し、それが複数行に分割されるようにします。

```html live-sample___void-example
<p>
  この段落は単一の段落ですが、<br />2 行に分割されています。
</p>
```

これはページに次の画像を出力するはずです。

{{ EmbedLiveSample('void-example', "100%", 100) }}

> [!NOTE]
> 一部の HTML の例では、空要素のタグの末尾に `/` が追加されている場合があります。例えば `<br />` のようにです。これはマークアップ構文のスタイルの違いであり、間違いではありませんが、この「終了スラッシュ」は必須ではありません。

## 属性

要素は次のように属性 (Attribute) を持つこともできます。

![強調された 'class="editor-note"' 属性を持つ段落タグ](grumpy-cat-attribute-small.png)

属性は、要素の内容の一部ではない追加情報を含みます。**`class`** 属性は、スタイル (CSS) やスクリプト情報 (JavaScript) で要素をターゲットにするために使用することができます。

各属性は次の要件を満たす必要があります。

1. 属性名と要素名の間に 1 つの半角空白。要素に複数の属性がある場合、それらの属性も空白で区切る必要があります。
2. 属性名とそれに続く等号 (`=`)。
3. 属性値、先頭と末尾を引用符で囲みます。

### 要素に属性を追加

さあ、またあなたの番です。この節では、ページ上に画像を表示するために使用される {{htmlelement("img")}} 要素について学びます。`<img>` 要素には、以下のような複数の属性を指定できます。

- `src`: **必須**の属性であり、画像の {{glossary("URL")}} （ウェブアドレス）を指定します。例えば、`src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"` のようにします。
- `alt`: 画像を見ることができない人向けに、画像の説明とみなされるテキストを指定します。例えば `alt="The Firefox Nightly icon"` のようにします。この属性は技術的には必須ではありませんが、意味を伝える画像（純粋に装飾的な画像ではないもの）には、必ずテキストによる説明を提供すべきです。
- `width`: 画像の幅をピクセル単位で指定します。例えば、 `width="300"` のようにします。
- `height`: 画像の高さをピクセル単位で指定します。例えば、 `height="300"` のようにします。

それでは下記の入力欄の中の行を編集して、画像に変更してみましょう。

1. 下記コードブロック内の **"Play"** をクリックして、MDN Playground で例を編集してください。
2. お好みの画像をオンラインで探し、右クリックして、\[画像のリンク/アドレスをコピー] をクリックします。または、上記の画像の URL をコピーします。
3. MDN Playground に戻り、`src` 属性を `<img>` 要素に追加し、段階 2 のリンクを記入します。
4. `alt` 属性に画像の適切な説明を設定してください。
5. 出力パネル内で画像が少し見やすくなるよう、`width` 属性を `300` などに設定してください。必要があれば値を調整してください。

間違えた場合は、MDN Playground の _Reset_ ボタンで作業内容をクリアできます。どうしても行き詰まった場合は、コードブロックの下にある解答を参照してください。

```html live-sample___basic_html_2
<img />
```

{{ EmbedLiveSample('basic_html_2', "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な HTML 要素は次のようになります。

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"
  alt="画像の説明"
  width="300" />
```

</details>

### 論理属性

属性値のない HTML 属性を見かけることがあるでしょう。これらは[論理属性](/ja/docs/Glossary/Boolean/HTML)」と呼ばれています。論理属性が追加された場合、その値は、代入された値（値が指定されていない場合も含む）にかかわらず、`true` に設定されます。HTML タグに属性が含まれていない場合、その値は `false` に設定されます。

例えば、 [`disabled`](/ja/docs/Web/HTML/Reference/Elements/input#disabled) 属性を見ると、フォームの {{htmlelement("input")}} 要素に指定することができ、ユーザーが中にデータを入力することを阻止します。例を示します。

```html live-sample___boolean-example
<label for="first-input">この入力欄は無効です</label>
<input id="first-input" type="text" disabled="disabled" />
<br />
```

省略形として、`disabled` 属性に値を指定せずに記述することができます。

```html live-sample___boolean-example
<label for="second-input">この入力欄も無効です</label>
<input id="second-input" type="text" disabled />
<br />
```

参考に、比較対照できるように無効化されていない `<input>` 要素も提供します（下記レンダリングでは `disabled` 属性が設定された入力欄がややグレー表示されている点に注意してください）。

```html live-sample___boolean-example
<label for="third-input">この入力欄は無効ではありません。中に入力できます。</label>
<input id="third-input" type="text" />
```

The above HTML snippets render like so:

{{ EmbedLiveSample('boolean-example', "100%", 100) }}

> [!NOTE]
> 上記コードに含まれる {{htmlelement("label")}} 要素は、フォーム要素に説明的なラベルを関連付ける手段を提供します。ベストプラクティスであることと、フォーム入力項目間の分離を図るためにこれらを記載しました。

### 属性値を囲む引用符の省略

特定の状況では、属性値の周囲の引用符を省略することが可能です。しかし、別の状況ではマークアップが破損する可能性があるため、**常に**引用符を含めることをお勧めします。その理由を探ってみましょう。

次のコードスニペット内の要素、{{htmlelement("a")}} は、**アンカー**と呼ばれます。アンカーはテキストを囲み、リンクに変換します。`href` 属性はリンクが指す URL を指定します。下記に示す`href`属性値の周囲にある引用符は、空白が含まれていないため、何の問題もなしに省略できます。

```html
<a href=https://www.mozilla.org/>大好きなウェブサイト</a>
```

ただし、空白を伴う属性値から引用符を省略すると、すぐに問題が発生します。下記に示す`title`属性は、リンク先のページ説明 ("The Mozilla homepage") を指定し、リンクにマウスポインターを当てた際にツールチップとして現れるべきものです。

```html-nolint example-bad live-sample___bad-no-quotes
<a href=https://www.mozilla.org/ title=The Mozilla homepage>大好きなウェブサイト</a>
```

`title` 属性の値に引用符が含まれていないため、ブラウザーはこれを 3 つの属性として解釈します。`title` 属性の値が `The` であるもの、`Mozilla` および `homepage` という 2 つの論理属性です。明らかに、これは意図した動作ではありません。マウスポインターが使用できる端末を使用している場合は、リンクの上にカーソルを合わせてタイトルのツールチップを表示してみてください（意図した "The Mozilla homepage" ではなく "The" と表示されます）。

{{ EmbedLiveSample('bad-no-quotes', 700, 100) }}

属性値には常に引用符を付けましょう。これによりエラーや予期せぬ動作を避けることができ、コードの可読性が向上します。

### 二重引用符か単一引用符か

この記事では、すべての属性値を二重引用符で囲んでいます。ただし、一部の HTML コードでは単一引用符が使われているのを見かけるかもしれません。これはスタイルの問題です。どちらを使うかは自由に選択できます。次の 2 行は同等です。

```html-nolint
<a href='https://www.example.com'>例へのリンクです。</a>

<a href="https://www.example.com">例へのリンクです。</a>
```

単一引用符と二重引用符を混在させることはできないことに注意してください。次の例では引用符が混在しており、ブラウザーが `href` 属性の値が完了していないと判断するためエラーが発生します。

```html-nolint example-bad
<a href="https://www.example.com'>例へのリンクです。</a>
```

一方の型の引用符を使用している場合、属性値の中にもう一方の型の引用符を記載することができます。次のものは正しく動作します。

```html
<a href="https://www.example.com" title="Isn't this fun?">
  例へのリンクです。
</a>
```

同じ種類の引用符（単一引用符または二重引用符）内で引用符を使用するには、[文字参照](#文字参照_html_に特殊文字を含める)を使用することができます。例えば、以下のように記述するとエラーになります。

```html-nolint example-bad
<a href="https://www.example.com" title="An "interesting" reference">例へのリンクです。</a>
```

代わりに、このようにしてください。

```html-nolint
<a href="https://www.example.com" title="An &quot;interesting&quot; reference">例へのリンクです。</a>
```

## HTML 文書の構造

個々の HTML 要素は、単体ではあまり有用ではありません。ここでは個々の HTML の要素を使って HTML ページを構成する方法を説明していきます。

次の例はとてもシンプルな完全なウェブページです。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>テストページ</title>
  </head>
  <body>
    <p>これは私のページです。</p>
  </body>
</html>
```

この例の構成要素は次の通りです。

1. `<!doctype html>`: 文書型定義です。 HTML の黎明期（1991 ～ 1992 年ごろ）には、文書型定義は、 HTML ページが良い HTML とみなされるために従わなければならない一連のルールへのリンクとして機能するものでした。文書型定義は、以前は次のような形で使用されていました。

   ```html
   <!doctype html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   現在では、doctype は他のすべてが正しく動作するために含む必要がある歴史的遺物です。`<!doctype html>` は有効な doctype として認められる最短の文字列であり、すべてのウェブページの先頭に記載するべきです。それだけです。

2. `<html></html>`: {{htmlelement("html")}} 要素。ページ上のすべての内容を囲む要素です。ルート要素と呼ばれることもあります。
3. `<head></head>`: {{htmlelement("head")}} 要素。この要素は、ユーザーが閲覧するコンテンツの一部ではない、ページに関する情報のコンテナーとして機能します。これには、検索結果に現れるキーワードやページの説明文、内容をスタイル設定するための CSS、文字セットの宣言などが含まれます。これについては、次の記事で詳しく説明します。
4. `<meta charset="utf-8">`: {{htmlelement("meta")}} 要素。この要素はこのページを説明します。[`charset`](/ja/docs/Web/HTML/Reference/Elements/meta#charset) 属性は、文書が使用する文字エンコーディングを指定します。文書の文字セットを UTF-8 に設定します。UTF-8 は、人類が使用する言語の大部分の文字を網羅して記載しています。つまり、このページは様々な言語を問題なく表示させることができるということです。これを使用しない理由はなく、後々発生する可能性のある問題を避けることができます。
5. `<title></title>`: {{htmlelement("title")}} 要素。ページのタイトルを設定します。このタイトルは、ページが読み込まれたブラウザータブに表示されるタイトルです。また、ページタイトルは、そのページがブックマークされたときの説明にも使用されます。
6. `<body></body>`: {{htmlelement("body")}} 要素。テキスト、画像、動画、ゲーム、再生可能な音声トラックなど、ページに表示される**すべての**コンテンツがこの中に記載されます。

### HTML 文書にいくつかの機能を追加

ここで、もう少し本格的な HTML コンテンツを書く練習をしましょう。そのためにはいくつかの選択肢があります。ローカルコンピューター上で HTML を作成するか、前回の例と同様に MDN Playground を使用するかです。

#### 例のセットアップ

- ローカルマシンで行うので行うのであれば、次のようにします。
  1. 前の節で挙げた HTML ページの例をコピーし、コードエディター内の新しいファイルに貼り付けてください。この[基本的な HTML テンプレート](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html)は、GitHub リポジトリーにもあります。
  2. [手順](#例の手順)に記載されている変更をページに加えましょう。
  3. ファイルを`index.html`として保存し、新しいブラウザーのタブで読み込んで結果を確認しましょう。
- MDN Playground で実行するには、下記の出力パネルにある **"Play"** をクリックして例を編集し、[手順](#例の手順)に従ってください。誤った操作をした場合は、MDN Playground の _Reset_ ボタンで作業内容をクリアできます。

```html hidden live-sample___basic_html_3
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>テストページ</title>
  </head>
  <body>
    <p>これは私のページです</p>
  </body>
</html>
```

{{ EmbedLiveSample('basic_html_3', "100%", 60) }}

#### 例の手順

これが実行すべき手順です。

1. {{htmlelement("body")}} 要素の開始タグの直下にページのメインタイトルを書きましょう。このメインタイトルは `<h1>` 開始タグと `</h1>` 終了タグで囲んでください。
2. 段落のコンテンツを編集して、自分が興味を持っている話題についてテキストを記入しましょう。
3. 重要な言葉は、{{htmlelement("strong")}} 要素の中で囲み、太字で目立たせるようにしましょう。
4. 段落に 2 つのリンクを追加しましょう。これは {{htmlelement("a")}} 要素を使用して実現します。
5. 文書に画像を追加しましょう。[この記事の前の方](#空要素)で説明したように、段落の下に配置しましょう。大きすぎて見えない場合は、`width` 属性を追加して縮小しましょう。

本当に行き詰まった場合は、こちらで模範解答を確認することができます。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了した HTML 要素 body のコンテンツは、以下のようなものになるはずです。

```html-nolint
<h1>音楽</h1>
<p>
  <strong>ドラムを演奏する</strong>のが実に好きです。お気に入りのドラマーの一人はニール・パートで、かつて<a href="https://en.wikipedia.org/wiki/Rush_%28band%29">ラッシュ</a>というバンドで演奏していましたが。現在一番好きなラッシュのアルバムは<a href="https://www.deezer.com/album/942295">ムービング・ピクチャーズ</a>です。
</p>
<img
  src="https://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg"
  alt="ラッシュのムービング・ピクチャーズのアルバムカバー"
  width="300" />
```

</details>

## HTML 内のホワイトスペース

前の例では、コードに多くのホワイトスペースを記述しました。ほとんどの場合、これは完全にオプションであり、主にコードの読み取り可能性を高めるために挿入されています。例えば、次の 2 つのコードスニペットは等価です。

```html-nolint live-sample___whitespace-example
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

これらはまったく同じようにレンダリングされます。

{{ EmbedLiveSample('whitespace-example', 700, 100) }}

ほぼすべての要素（{{htmlelement("pre")}} などの例外を除く）において、HTML 要素のコンテンツ内でどれだけ空白を使用しても、HTML パーサーはコードをレンダリングする際にそれぞれの連続したホワイトスペースを単一のス空白にまとめます。

好みのコード書式スタイルを選択するのはあなた次第です。一般的に、入れ子になったそれぞれの要素には、その要素が内包されている要素よりも空白 2 文字分多くインデントします。これが MDN で使用しているスタイルです。

例を示します。

```html
<section>
  <div>
    <p>段落のコンテンツです。</p>
  </div>
</section>
```

## 文字参照: HTML に特殊文字を含める

HTML では、`<`、`>`、`"`、`'`、`&` の各文字が特殊文字として扱われます。これらは HTML の構文の一部です。では、これらの特殊文字をテキストにどう含めるのでしょうか。例えば、コンテンツ内でアンパサンドや小なり記号を文字通り使用し、コードとして解釈されないようにするにはどうすればよいでしょうか、

そのためには、{{glossary("character reference", "文字参照")}}を使用します。これは文字を表す特別なコードで、まさにそのような状況で使用するためのものです。それぞれの文字参照は、アンパサンド (&) で始まり、セミコロン (;) で終わります。

| 実際の文字 | 等価な文字参照 |
| ---------- | -------------- |
| <          | `&lt;`         |
| >          | `&gt;`         |
| "          | `&quot;`       |
| '          | `&apos;`       |
| &          | `&amp;`        |

文字参照は、使用するテキストが文字名の略語であるため比較的覚えやすいものです。例えば "lt" は "less than"（より小さい）、"quot" は "quotation"（引用符）、"amp" は "ampersand" （アンパサンド）を表します。実体参照についての詳細は、[XML と HTML の文字実体参照一覧](https://ja.wikipedia.org/wiki/文字参照) （ウィキペディア）を参照してください。

次の例には、 2 つの段落があります。

```html-nolint live-sample___entity-ref-example
<p>HTML では、<p> 要素で段落を定義します。</p>

<p>HTML では、&lt;p&gt; 要素で段落を定義します。</p>
```

これは次のように表示されます。

{{ EmbedLiveSample('entity-ref-example', 700, 150) }}

最初の段落が正しく表示されていないのは、ブラウザーが 2 つ目の `<p>` タグを新しい段落の開始と解釈したためです。2 つ目の段落は正常に表示されています。これは、コンテンツ "&lt;p&gt;" の角括弧が文字参照で表されているためです。

> [!NOTE]
> 他の記号に実体参照を使用する必要はありません。現代のブラウザーは、HTML の[文字エンコーディングが UTF-8 に設定](/ja/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#html_文書の文字コードを指定する)されていれば、実際の記号を正しく扱うことができるからです。

## HTML のコメント

HTML には、コード内にコメントを記述する仕組みがあります。ブラウザーはコメントを無視するため、ユーザーには表示されません。コメントの目的は、コードの動作を説明するメモをコード内に記載することです。これは、長期間離れてコードを忘れてしまった後に再び作業する場合や、初めてそのコードに触れる人が作業を始める場合にとても有用です。

HTML のコメントを書くには、特別なマーカーである `<!--` と `-->` で囲んで下さい。次のようにします。

```html live-sample___comment-example
<p>コメントの外にいます。</p>

<!-- <p>コメントの中にいます。</p> -->
```

このコードは次のように表示されます。

{{ EmbedLiveSample('comment-example', 700, 100) }}

ライブ出力には最初の段落のみが表示されます。2 行目は HTML コメントであるため表示されません。

### まとめ

記事の最後までたどり着きました。 HTML の基本を楽しんでいただけたでしょうか。

この時点で、あなたは HTML がどのようなものか、そしてどのように動作するのか、基本的なレベルで理解できたはずです。また、いくつかの要素や属性を書くことができるようになっているはずです。このモジュールの以降の記事では、ここで紹介したトピックのいくつかをさらに掘り下げるとともに、追加のトピックも紹介します。

> [!NOTE]
> HTML についてをもっと学び始めたら、[CSS](/ja/docs/Learn_web_development/Core/Styling_basics) の基本を学ぶことも検討してみてください。この言語はウェブページのスタイル設定に使用される言語（例えば：色、フォント、間隔の変更）。ほとんどのウェブページではHTMLとCSSが併用されており、これらを同時に学ぶことが効果的です。

{{NextMenu("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content")}}
