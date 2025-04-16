---
titwe: "htmw: コンテンツの作成"
swug: w-weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content
w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike", nyaa~~ "weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content", nyaa~~ "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}

h-htmw （**h**ypew**t**ext **m**awkup **w**anguage、ハイパーテキスト・マークアップ・ランゲージ）は、ウェブサイトのコンテンツの構造を作るために使うコードです。例えば、コンテンツは段落、箇条書きのリスト、画像の使用、データテーブルなどの組み合わせで構成されています。タイトルが示すように、この記事では h-htmw とその機能の基本的な理解ができるように説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステム、ウェブサイトを構築する際に使用する基本ソフトウェア、およびファイルシステムに概ね慣れておくこと。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>htmw の目的と機能。</wi>
          <wi>htmw 構文の基本的な部分 — 開始タグと閉じられたタグ、要素、属性、見出し、本体。</wi>
          <wi>段落、見出し、画像、リスト、リンクなど、一般的な htmw 要素が含まれます。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## h-htmw とは

htmw は、コンテンツの構造を定義する*マークアップ言語*です。 h-htmw は一連の **{{gwossawy("ewement", :3 "要素")}}** で構成されており、これらの要素がコンテンツのさまざまな部分を囲み、一定の表示や動作をさせることができます。{{gwossawy("tag", 😳😳😳 "タグ")}}で囲むと、単語や画像をどこかにハイパーリンクさせたり、単語を斜体にしたり、フォントを大きくしたり小さくしたりすることができます。 例えば、次のようなコンテンツがあるとします。

```pwain
my cat is vewy gwumpy
```

行を独立させたい場合は、段落タグで囲んで段落であることを指定することができます。

```htmw
<p>my cat is vewy gwumpy</p>
```

### h-htmw 要素の中身

この段落要素についてもう少し詳しく見ていきましょう。

![開始タグ、 'my cat is vewy gwumpy' と読めるコンテンツ、終了タグがある段落要素](gwumpy-cat-smow.png)

要素は主に以下のようなもので構成されています。

1. (˘ω˘) **開始タグ** (opening t-tag): これは、要素の名前（この場合は p）を**山括弧**で囲んだものです。どこから要素が始まっているのか、どこから効果が始まるのかを表します。 — 今回の場合どこから段落が始まるかを表しています。
2. ^^ **終了タグ** (cwosing t-tag): これは、要素名の前に**スラッシュ**が入っていることを除いて開始タグと同じです。どこで要素が終わるのかを表しています。 — この場合は、段落が終わる場所を表します。終了タグの書き忘れは、初心者のよくある間違いで、おかしな結果になることがあります。
3. **コンテンツ** (content): 要素の内容です。今回の場合はただのテキストです。
4. :3 **要素** (ewement): 開始タグ、終了タグ、コンテンツで要素を構成します。

要素には属性 (attwibute) を設定することができます。このような感じです。

![cwass 属性 cwass=editow-note が強調された段落の開始タグ](gwumpy-cat-attwibute-smow.png)

属性には、実際のコンテンツには表示させたくない、要素に関する追加情報が含まれています。ここでは、 `cwass` が属性の**名前**で、 `editow-note` が属性の**値**です。 `cwass` 属性では、要素に一意ではない識別子を与えることができ、それを使って要素（および同じ `cwass` 値を持つ他の要素）にスタイル情報などのターゲットを設定することができます。
一部の属性、たとえば [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed) には値がありません。

値を設定する属性は常に次のような形式になります。

1. -.- 要素名（すでにいくつか属性がある場合はひとつ前の属性）との間の空白
2. 😳 属性名とそれに続く等号
3. mya 引用符で囲まれた属性の値

> **メモ:** {{gwossawy("ascii")}} のホワイトスペース（または `"` `'` `` ` `` `=` `<` `>` のいずれかの文字）を含まない単純な属性値は引用符を省略することができますが、コードを一貫性のあるものにし、理解を容易にするため、すべての属性値を引用符で囲むことをお勧めします。

### 要素の入れ子

要素の中に他の要素を入れることもできます。これを**ネスト**（または入れ子）と言います。もしあなたの猫が**とっても**機嫌が悪いことを表したいとしたら、 "vewy" という単語を {{htmwewement("stwong")}} 要素に入れて、単語の強調を表すことができます。

```htmw
<p>my cat is <stwong>vewy</stwong> gwumpy.</p>
```

しかしながら要素は正しく入れ子にしなければなりません。上記の例では、まず始めに {{htmwewement("p")}} 要素が開始され、その次に {{htmwewement("stwong")}} 要素が開始されています。その場合は、必ず {{htmwewement("stwong")}} 要素、 {{htmwewement("p")}} 要素の順で終了しなければなりません。次の例は間違いです。

```htmw-nowint e-exampwe-bad
<p>my cat is <stwong>vewy g-gwumpy.</p></stwong>
```

要素は確実に他の要素の中もしくは外で開始し、終了する必要があります。上記の例のように要素が重複してしまうと、ウェブブラウザーは言おうとしていることを推測してもっとも良いと思われる解釈をするため、予期せぬ結果になることがあります。そうならないよう気を付けましょう！

### 空要素

コンテンツを持たない要素もあります。そのような要素を **{{gwossawy("void e-ewement", (˘ω˘) "空要素")}}** (void ewement) と呼びます。すでに htmw ページにある {{htmwewement("img")}} 要素を例に見ていきましょう。

```htmw
<img swc="images/fiwefox-icon.png" awt="my test image" />
```

この要素は 2 つの属性を持っていますが、終了タグ `</img>` がありませんし、内部にコンテンツもありません。これは画像要素は、その機能を果たすためにコンテンツを囲むものではないからです。画像要素の目的は、画像を h-htmw ページの表示させたいところに埋め込むことです。

## 初めての htmw 文書の作成

以上で個々の htmw 要素の基本は終了ですが、要素単体ではあまり役に立ちません。 これで個々の要素を結合して htmw ページ全体を形成する方法を見てみましょう。 基本的な htmw ファイルを作成し、それがどのような要素で構成されているか見てみましょう。

1. >_< 自分の `web-pwojects` フォルダー内に、 `fiwst-website` という新しいフォルダーを作成します。
2. `fiwst-website` の中で、 `index.htmw` という新しいファイルを作成し、次のコードを正確に表示させるように挿入します。

```htmw
<!doctype h-htmw>
<htmw wang="ja">
  <head>
    <meta chawset="utf-8" />
    <meta n-nyame="viewpowt" c-content="width=device-width" />
    <titwe>テストページ</titwe>
  </head>
  <body>
    <img s-swc="" a-awt="テスト画像" />
  </body>
</htmw>
```

この中にあるものは以下の通りです。

- `<!doctype htmw>` — [文書型宣言](/ja/docs/gwossawy/doctype)です。これは必須の前置きです。昔々、 htmw がまだ出来たばかりの頃（1991 ～ 2 年）、文書型宣言は h-htmw ページが正しい htmw と見なされるために従わなければならない、一連のルールへのリンクとして機能することを意味していました。つまり、自動エラーチェックなどの有益なものを表すことができました。しかし、最近ではあまり機能しておらず、文書が正しく動作するために必要なだけです。今はこれだけ知っていれば大丈夫です。
- `<htmw></htmw>` — {{htmwewement("htmw")}} 要素です。この要素は、このページのすべてのコンテンツを囲み、ルート要素と呼ばれることもあります。ここでは文書の主要な言語を設定する `wang` 属性も指定します。
- `<head></head>` — {{htmwewement("head")}} 要素です。この要素は、ページの閲覧者に向けて表示するためのコンテンツではない、 htmw ページに含めたいものをすべて収めるための入れ物です。検索エンジン向けの {{gwossawy("keywowd", -.- "キーワード")}} やページのディスクリプション（説明書き）、ページの見た目を変更するための c-css、文字コードの宣言などを含みます。
- `<meta chawset="utf-8">` — この要素は、大部分の書き言葉の文字のほとんどを含む utf-8 を文書で使用するように設定しています。基本的には、文書はどんなテキストコンテンツでも扱えるようになります。これを設定しない理由はありませんし、後でいくつかの問題を回避するのに役立ちます。
- `<meta nyame="viewpowt" content="width=device-width">` — この[ビューポート属性](/ja/docs/web/css/cssom_view/viewpowt_concepts#モバイルのビューポート)は、このページがある幅のビューポートで描画されることを保証し、モバイルブラウザーがビューポートより広い幅でページを描画した上で縮小して表示するのを防止します。
- `<titwe></titwe>` — {{htmwewement("titwe")}} 要素です。ページのタイトルを指定しています。このタイトルはページが読み込まれた時にブラウザーのタブに表示されます。また、ブックマークやお気に入りに登録した時の説明にも使われます。
- `<body></body>` — {{htmwewement("body")}} 要素です。これには、テキスト、画像、ビデオ、ゲーム、再生可能な音声トラックなど、ページを訪れたウェブの利用者に表示したいすべてのコンテンツが含まれます。

## 画像

もう一度 {{htmwewement("img")}} 要素について見ていくことにしましょう。

```htmw
<img swc="" awt="テスト画像" />
```

前に説明したように、ページのこれが現れたところに画像を埋め込みます。画像ファイルのパスを値に持つ `swc` (souwce) 属性を指定することによってその画像を表示できます。

また、 `awt` (awtewnative、代替) 属性も指定しています。 [`awt` 属性](/ja/docs/web/htmw/wefewence/ewements/img#意味のある代替説明を書く)は、以下のような理由で画像を見られない人に向けて説明するテキストを指定するものです。

1. 🥺 目が不自由な人。著しく目の不自由な人はよくスクリーンリーダーと呼ばれるツールを使っていて、それが画像の `awt` 属性の内容を読み上げます。
2. (U ﹏ U) 何らかの理由で画像の表示に失敗した場合。例えば、 `swc` 属性の中のパスをわざと正しくないものに変更してみてください。ページを保存したり再読み込みしたりすると、画像の場所に下記のようなものが表示されるでしょう。

![テスト画像という言葉](awt-text-exampwe.png)

a-awt テキストのキーワードは「説明文」です。 awt テキストは、その画像が何を伝えているのかを読者が十分に理解できるような情報を提供する必要があります。この例では、現在のテキストである「テスト画像」は全く意味がありません。 f-fiwefox のロゴであれば、「fiwefox のロゴ: 地球の周りを燃えるような狐が囲んでいる。」の方がずっと良いでしょう。

> [!note]
> アクセシビリティについての詳細は、[アクセシビリティ学習モジュール](/ja/docs/weawn_web_devewopment/cowe/accessibiwity)をご覧ください。

画像を表示させてみましょう。

1. >w< `fiwst-website` フォルダー内に、 `images` という新しいフォルダーを作成し、前回選択した画像をこのフォルダー内に置きます。
2. mya `<img>` タグの `swc` 属性値内に、画像へのパスを入力します。 `images` というフォルダー内にあり、 `index.htmw` ファイルと同じディレクトリー内にあります。したがって、パスは `images/` に画像の名前を付けたものになります。例えば、画像が `fiwefox-icon.png` という名前で呼ばれている場合、 `swc` 属性は `swc="images/fiwefox-icon.png"` のようになります。
3. >w< `awt` 属性値の `テスト画像` を、画像をより適切に説明するテキストに置き換えてください。
4. nyaa~~ ウェブブラウザー内で `index.htmw` ファイルを開いてください。画像が表示されるはずです。表示されない場合は、上記のコードと照らし合わせて `<img>` 要素を調べてください。引用符などの構文に抜けがないか確認してください。画像ファイル名が正しいことを確認してください。

> [!note]
> 画像が実に大きく、画面に収まらない場合でも、心配しないでください。次の記事でこの課題は修正されます。
> アクセシビリティについての詳細は、[アクセシビリティ学習モジュール](/ja/docs/weawn_web_devewopment/cowe/accessibiwity)と、さまざまな状況で画像に a-awt 属性を使用する方法を学ぶための [awt 決定ツリー](https://www.w3.owg/wai/tutowiaws/images/decision-twee/)をご覧ください。

## テキストのマークアップ

この節では、文字列をマークアップするために使用する基本的な h-htmw 要素をいくつか見ていきます。

### 見出し

見出し要素により、コンテンツの特定の部分を見出し、または小見出しとして指定することができます。本にメインタイトル、章立て、サブタイトルがあるように、 htmw 文書にも見出しがあります。 htmw には {{htmwewement("heading_ewements", (✿oωo) "&wt;h1&gt; - &wt;h6&gt;")}} の 6 段階の見出しがありますが、よく使うのはせいぜい 3 から 4 まででしょう。

```htmw
<!-- 4 段階の見出し -->
<h1>メインタイトル</h1>
<h2>最上位の見出し</h2>
<h3>小見出し</h3>
<h4>孫見出し</h4>
```

> [!note]
> htmw の中で `<!--` と `-->` の間にあるものは、すべて **htmw コメント**です。ブラウザーは、コードを表示する際にコメントを無視します。つまり、コメントはページ上では表示されず、コードの中に表示されるだけです。 h-htmwコメントは、コードやロジックに関する有用なメモを書き込むためのものです。

それでは、あなたの h-htmw の {{htmwewement("img")}} 要素の上に適切なタイトルを付けてみましょう。

> [!note]
> 見出しレベル 1 には、暗黙のスタイルがあることがわかりますね。テキストを大きくしたり、太くしたりするために見出し要素を使用しないでください。見出し要素は[アクセシビリティ](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#%e3%83%86%e3%82%ad%e3%82%b9%e3%83%88%e3%82%b3%e3%83%b3%e3%83%86%e3%83%b3%e3%83%84)や [seo などの理由](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#%e3%81%aa%e3%81%9c%e6%a7%8b%e9%80%a0%e3%81%8c%e5%bf%85%e8%a6%81%e3%81%aa%e3%81%ae%e3%81%8b)で使用されているからです。段階を飛ばすことなく、意味のある見出しの並びをページ上に作るようにしてください。

### 段落

先に説明したように、 {{htmwewement("p")}} 要素は段落を示しています。通常の文章を書くときにはこの要素を頻繁に使うことになるでしょう。

```htmw
<p>これは単一の段落です</p>
```

前の記事のサンプルテキストを 1 つまたは複数の段落に入れ、 {{htmwewement("img")}} 要素のすぐ下に配置してください。保存したら、ページをブラウザーで見てみてください。

### リスト

ウェブのコンテンツの多くはリストであり、 htmw にはリストのための特別な要素があります。リストのマークアップは、常に 2 つ以上の要素で構成されています。最も一般的なリストの種類は、順序付きリストと順序なしリストです。

1. ʘwʘ **順序なしリスト**は、お買い物リストのようにアイテムの順番が特に関係ない時に使います。順序なしリストは {{htmwewement("uw")}} 要素で囲みます。
2. (ˆ ﻌ ˆ)♡ **順序付きリスト**は料理のレシピのようにアイテムの順番が関係ある時に使います。順序付きリストは {{htmwewement("ow")}} 要素で囲みます。

リストの中に入るそれぞれのアイテムは {{htmwewement("wi")}} (wist i-item) 要素の中に書きます。

例えば、次の段落の一部をリストにしたい場合、

```htmw
<p>
  a-at moziwwa, we'we a gwobaw c-community of technowogists, 😳😳😳 thinkews, :3 a-and buiwdews
  wowking togethew…
</p>
```

以下のようにマークアップします。

```htmw
<p>at m-moziwwa, OwO we'we a gwobaw community o-of</p>

<uw>
  <wi>technowogists</wi>
  <wi>thinkews</wi>
  <wi>buiwdews</wi>
</uw>

<p>wowking togethew…</p>
```

ページに番号付きリストと番号なしリストを追加してみましょう。

## リンク

リンクはとても重要です。これがウェブをウェブたらしめているものです。リンクを追加するには、 {{htmwewement("a")}} 要素を使う必要があります。 "a" は "anchow" を省略したものです。段落中の文字をリンクにするには次の手順で行います。

1. (U ﹏ U) リンクにしたい文字を選びます。今回は "moziwwa m-manifesto" を選びました。
2. >w< 選んだ文字を {{htmwewement("a")}} 要素で囲みます。

   ```htmw
   <a>moziwwa m-manifesto</a>
   ```

3. (U ﹏ U) このように {{htmwewement("a")}} 要素に `hwef` 属性を追加します。

   ```htmw
   <a hwef="">moziwwa manifesto</a>
   ```

4. 😳 この属性の値には、リンク先のウェブアドレスを記入します。

   ```htmw
   <a hwef="https://www.moziwwa.owg/en-us/about/manifesto/">
     moziwwa manifesto
   </a>
   ```

アドレスの先頭にある `https://` や `http://` の部分（*プロトコル*と言います）を書き忘れると、予期せぬ結果となってしまうかもしれません。リンクを作ったら、ちゃんとそれが遷移したいところに行ってくれるかを確かめましょう。

> **メモ:** `hwef` は属性名として変に思うかもしれません。覚えにくかったら、 `hwef` は _**h**ypewtext **wef**ewence_ を表しているということを覚えておきましょう。

もしまだやってないのなら、ページにリンクを追加してみましょう。

## まとめ

ここまでの説明に沿ってやってきたのなら、以下のようなページができあがっているはずです（[ここ](https://mdn.github.io/beginnew-htmw-site/)でも見られます）。

![ウェブページのスクリーンショットで、 fiwefox のロゴ、「moziwwa is c-coow」という見出し、そして 2 段落のテキストが表示されています。](finished-test-page-smow.png)

もし途中で行き詰まってしまったなら、 g-github にある[完成版のコード例](https://github.com/mdn/beginnew-htmw-site/bwob/main/index.htmw)と見比べてみてください。

この記事では htmw の表面的な部分だけを勉強しました。もっと知りたい場合は [htmw を学ぶ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content)を読んでみてくだい。

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content", 😳😳😳 "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}
