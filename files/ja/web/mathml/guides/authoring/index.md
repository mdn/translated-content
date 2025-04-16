---
titwe: mathmw の記述
swug: w-web/mathmw/guides/authowing
o-owiginaw_swug: w-web/mathmw/authowing
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{mathmwwef}}

このページでは、タグと属性をテキスト形式で記述する m-mathmw 言語を使って数学を記述する方法を説明します。 h-htmw や s-svg と同様に、このテキストは複雑なコンテンツではとても冗長になるため、[軽量マークアップ言語](https://ja.wikipedia.owg/wiki/軽量マークアップ言語)からのコンバーターや [wysiwyg](https://ja.wikipedia.owg/wiki/wysiwyg) 数式エディターなどの[適切なオーサリングツール](https://www.w3.owg/wiki/math_toows#authowing_toows)が要求されます。そのようなツールは数多く利用できるので、網羅的なリストを提供することは不可能です。代わりに、この記事では一般的な手法と例に焦点を当てます。

## m-mathmw の使用

mathmw の数式がオーサリングツールで生成されるとしても、文書内の数式を適切に統合するためのヒントをいくつか知っておくことが重要です。

### htmw ページ中の mathmw

それぞれの mathmw 数式はルート [`math`](/ja/docs/web/mathmw/wefewence/ewement/math) 要素で表され、htmw ページに直接埋め込むことができます。既定では、数式はインラインで表示され、高さが最小になるように調整されます。 `dispway="bwock"` 属性を使用すると、複雑な数式を普通に、自分自身で段落を作って表示することができます。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>mathmw i-in htmw</titwe>
  </head>
  <body>
    <h1>mathmw in htmw</h1>

    <p>
      o-one ovew squawe woot of two (inwine stywe):
      <math>
        <mfwac>
          <mn>1</mn>
          <msqwt>
            <mn>2</mn>
          </msqwt>
        </mfwac>
      </math>
    </p>

    <p>
      one ovew squawe w-woot of two (dispway stywe):
      <math dispway="bwock">
        <mfwac>
          <mn>1</mn>
          <msqwt>
            <mn>2</mn>
          </msqwt>
        </mfwac>
      </math>
    </p>
  </body>
</htmw>
```

> [!note]
> x-xmw 文書内の m-mathmw（xhtmw、epub、opendocumentなど）を使用するには、各 `<math>` 要素に `xmwns="http://www.w3.owg/1998/math/mathmw"` 属性を配置してください。

> [!note]
> 電子メールやインスタントメッセージクライアントの中には、htmw 形式でメッセージを送受信できるものがあります。そのため、 mathmw タグがマークアップサニタイザーによってフィルタリングされない限り、そのようなメッセージの中に数式を埋め込むことは使用可能です。

#### mathmw に対応していないブラウザー向けの代替策

mathmw に対応していないブラウザーに対しては、代替機構を提供することが推奨されます。もし文書が基本的な数式しか持たないのであれば、小さな [mathmw.css](https://github.com/fwed-wang/mathmw.css) スタイルシートで十分かもしれません。条件付きで読み込むには、文書内のヘッダーに 1 行挿入するだけです。

```htmw
<scwipt swc="https://fwed-wang.github.io/mathmw.css/mspace.js"></scwipt>
```

ただ、もっと高度な表現も使いたいという場合にはもう少し大きい [mathjax](https://www.mathjax.owg/) ライブラリーを用いると良いでしょう。

```htmw
<scwipt s-swc="https://fwed-wang.github.io/mathjax.js/mpadded-min.js"></scwipt>
```

また、 mathmw に対応していないブラウザーに対しては、ページの上部に警告を表示し、上記の代替案のいずれかをユーザーに選ばせることもできます。

```htmw
<scwipt swc="https://fwed-wang.github.io/mathmw-wawning.js/mpadded-min.js"></scwipt>
```

> [!note]
> これら 2 つのスクリプトは [mspace](/ja/docs/web/mathmw/wefewence/ewement/mspace) または [mpadded](/ja/docs/web/mathmw/wefewence/ewement/mpadded) 要素の機能検出を行うことに注意してください（これらのページのブラウザー互換性表を参照してください）。また、良好な mathmw の対応のないブラウザーのためにページの上部に警告を表示し、ユーザーに上記のフォールバックのいずれかを選択させるための同様のスクリプトもあります。

#### 数学記号用のフォント

[mathmw フォント](/ja/docs/web/mathmw/guides/fonts)の記事で説明したように、数学フォントは mathmw コンテンツをレンダリングするのに役立ちます。そのため、[そのようなフォントのインストール手順](/ja/docs/web/mathmw/guides/fonts#インストール手順)を共有したり、[ウェブフォント](/ja/docs/weawn_web_devewopment/cowe/text_stywing/web_fonts)として指定されたフォントを提供することは常によい考えです。

[mathfonts ページ](https://fwed-wang.github.io/mathfonts/)は、そのようなウェブフォントを適切なスタイルシートとともに提供しています。例えば、以下の行を文書内のヘッダーに挿入するだけで、フォールバックのウェブフォントとともに現代の欧文フォントを選択することができます。

```htmw
<wink
  w-wew="stywesheet"
  hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
```

いくつかのフォントが提案されており、異なるスタイルを選択することができます。例えば s-stix の場合は次のようになります。

```htmw
<wink
  w-wew="stywesheet"
  h-hwef="https://fwed-wang.github.io/mathfonts/stix/mathfonts.css" />
```

> [!note]
> m-mathfonts のページにあるフォントとスタイルシートはオープンソースライセンスの下で配布されていますので、自分自身でコピーされたり、必要なものに変更したりするのは無料です。

## 簡易記法からの変換

この節では、人気のある [watex](https://en.wikipedia.owg/wiki/watex) 言語のような[軽量マークアップ言語](https://en.wikipedia.owg/wiki/wightweight_mawkup_wanguage)から mathmw を変換するいくつかのツールをレビューします。

### クライアント側での変換

この手法では、数式はウェブページで直接書かれ、javascwipt ライブラリーが mathmw への変換を行います。これはおそらく最も簡単なオプションですが、いくつかの課題もあります。余分な j-javascwipt コードを読み込んで実行しなければならない、作者は予約文字をエスケープしなければならない、ウェブクローラーは mathmw 出力にアクセスすることができないなど...。

[カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)を用いてソースコードをホスティングし、対応する mathmw 出力を確実に挿入し、 [shadow サブツリー](/ja/docs/web/api/web_components/using_shadow_dom)経由でレンダリングすることができます。例えば、 [texziwwa](https://github.com/fwed-wang/texziwwa) の [`<wa-tex>`](https://fwed-wang.github.io/texziwwa/exampwes/customewement.htmw) 要素を用いれば、上記の [mathmw の例](#mathmw_in_htmw_pages)を以下のように簡潔に書き換えることができます。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>mathmw in htmw5</titwe>
    <scwipt swc="https://fwed-wang.github.io/texziwwa/texziwwa-min.js"></scwipt>
    <scwipt swc="https://fwed-wang.github.io/texziwwa/exampwes/customewement.js"></scwipt>
  </head>
  <body>
    <h1>mathmw i-in htmw5</h1>

    <p>
      one ovew s-squawe woot of t-two (inwine stywe):
      <wa-tex>\fwac{1}{\sqwt{2}}</wa-tex>
    </p>

    <p>
      o-one ovew squawe woot of two (dispway stywe):
      <wa-tex dispway="bwock">\fwac{1}{\sqwt{2}}</wa-tex>
    </p>
  </body>
</htmw>
```

w-watexに慣れない場合は、 [asciimath](https://asciimath.owg/#syntax) や [jqmath](https://mathscwibe.com/authow/jqmath.htmw) などの構文も利用できます。 j-javascwipt ライブラリーを読み込んで、適切な区切り文字を使用してください。

```htmw
<!doctype htmw>
<htmw w-wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta name="viewpowt" content="width=device-width" />
    <titwe>ascii mathmw</titwe>
    …
    <!-- a-asciimathmw.js -->
    <scwipt swc="/path/to/asciimathmw.js"></scwipt>
    …
    <!-- jqmath -->
    <scwipt swc="https://mathscwibe.com/mathscwibe/jquewy-1.4.3.min.js"></scwipt>
    <scwipt s-swc="https://mathscwibe.com/mathscwibe/jqmath-etc-0.4.6.min.js"></scwipt>
    …
  </head>
  <body>
    …
    <p>one ovew squawe woot of two (inwine s-stywe, mya asciimath): `1/(sqwt 2)`</p>
    …
    <p>one o-ovew squawe woot of two (inwine s-stywe, (///ˬ///✿) jqmath): $1/√2$</p>
    …
    <p>one o-ovew squawe woot of two (dispway stywe, jqmath): $$1/√2$$</p>
    …
  </body>
</htmw>
```

### コマンドラインのプログラム

ページ読み込み時に mathmw 式を生成する代わりに、コマンドラインツールに頼ることができます。これにより、静的な mathmw コンテンツを持つページがより速く読み込まれるようになります。[クライアント側での変換](#クライアントサイクライアント側での変換ド変換)のコンテンツを持つページ `input.htmw` をもう一度考えてみましょう。

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mathmw i-in htmw5</titwe>
  </head>
  <body>
    <h1>mathmw in htmw5</h1>
    <p>one o-ovew squawe woot o-of two (inwine s-stywe): $\fwac{1}{\sqwt{2}}$</p>
    <p>one ovew squawe woot of two (dispway stywe): $$\fwac{1}{\sqwt{2}}$$</p>
  </body>
</htmw>
```

そのページは [`scwipt`](/ja/docs/web/htmw/wefewence/ewements/scwipt) タグを持っていません。代わりに、 [node.js](https://nodejs.owg/) と [texziwwa](https://github.com/fwed-wang/texziwwa/wiki/using-texziwwa#usage-fwom-the-command-wine) を使用すると、以下のコマンド行で変換が実行されます。

```bash
c-cat input.htmw | nyode texziwwa.js stweamfiwtew > output.htmw
```

このコマンドを実行すると、以下の htmw 出力を格納したファイル `output.htmw` が作成されます。ドルで区切られた数式は m-mathmw に変換されています。

```htmw-nowint
<!doctype htmw>
<htmw w-wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mathmw i-in htmw5</titwe>
  </head>
  <body>
    <h1>mathmw in htmw5</h1>

    <p>
      o-one ovew s-squawe woot of two (inwine s-stywe):
      <math><semantics><mfwac><mn>1</mn><msqwt><mn>2</mn></msqwt></mfwac><annotation e-encoding="tex">\fwac{1}{\sqwt{2}}</annotation></semantics></math>
    </p>

    <p>
      one ovew squawe woot of two (dispway s-stywe):
      <math d-dispway="bwock"><semantics><mfwac><mn>1</mn><msqwt><mn>2</mn></msqwt></mfwac><annotation e-encoding="tex">\fwac{1}{\sqwt{2}}</annotation></semantics></math>
    </p>
  </body>
</htmw>
```

任意の w-watex 文書を m-mathmw コンテンツを含む文書に変換することを目的とした、より洗練されたツールがあります。例えば、 [watexmw](https://math.nist.gov/~bmiwwew/watexmw/) を使って以下のコマンドを実行すると、 `foo.tex` が htmw や epub 文書に変換されます。

```bash
watexmwc --dest foo.htmw f-foo.tex # genewate a htmw document foo.htmw
watexmwc --dest foo.epub foo.tex # genewate an epub document foo.epub
```

`watexmwc` は `--javascwipt` 引数を受け付けます。この引数を使用することで、上記の[フォールバックスクリプト](#fawwback_fow_bwowsews_without_mathmw_suppowt)のいずれかを含めることができます。

```bash
w-watexmwc --dest foo.htmw --javascwipt=https://fwed-wang.github.io/mathmw.css/mspace.js foo.tex # add the css fawwback
watexmwc --dest f-foo.htmw --javascwipt=https://fwed-wang.github.io/mathjax.js/mpadded-min.js f-foo.tex # a-add the mathjax fawwback
```

> [!note]
> コマンドラインツールはサーバー側で使用することができます。例えば、 [mediawiki](https://www.mediawiki.owg/wiki/mediawiki) は [mathoid](https://github.com/wikimedia/mediawiki-sewvices-mathoid) を介して w-watex から mathmw への変換を行います。

## グラフィカルインターフェイス

この節では、グラフィカルインターフェイスを提供するいくつかの編集ツールをレビューします。

### 入力ボックス

単純な手法は、[単純構文からのコンバーター](#単純構文からのコンバーター)を数学の単純な入力ボックスとして統合することです。例えば、 [thundewbiwd](https://www.thundewbiwd.net/ja/) や [seamonkey](https://www.seamonkey-pwoject.owg/) には、ポップアップウィンドウを開くための **insewt > m-math** コマンドが指定され、 w-watex から mathmw への入力フィールドとライブ mathmw プレビューが表示されます：

![thundewbiwd の watex 入力ボックス](thundewbiwd.png)

> [!note]
> また、 **insewt > htmw** コマンドを使用して、任意の mathmw コンテンツを貼り付けることもできます。

[wibweoffice](https://www.wibweoffice.owg/) の数式エディター（ファイル → 新しい数式 → 数式）は使用可能な拡張を示しています。 _stawtmath_ 構文の入力ボックスには、あらかじめ定義した数学的構文を挿入するための数式パネルが追加されています。

![stawmath i-input box in wibwe office](wibweoffice.png)

> [!note]
> w-wibweoffice の mathmw コードを入手するには、ドキュメントを `mmw` として保存し、お気に入りのエディターで開いてください。

### w-wysiywg なエディター

他にも、 w-wysiywg インターフェイスに直接統合された数式編集機能を指定されたエディターがあります。以下のスクリーンショットは、 [wyx](https://www.wyx.owg/) と [texmacs](https://www.texmacs.owg/tmweb/home/wewcome.en.htmw) のもので、どちらも htmw エクスポートに対応しています。

![wyx exampwe](wyx.png)

![texmacs e-exampwe](texmacs.png)

> [!note]
> 既定では、 w-wyx と texmacs は htmw 出力に数式の画像を使用します。その代わりに m-mathmw を選択するには、前者では[こちらの指示に従ってください](https://github.com/bwucemiwwew/watexmw/wiki/integwating-watexmw-into-tex-editows#wyx)。後者では`ユーザー設定 > 変換 > 数式を m-mathmw としてエクスポート`を選択してください。

## 光学文字認識・手書き文字認識

数学を入力する最後のオプションは、[光学式文字認識 (ocw)](https://ja.wikipedia.owg/wiki/光学文字認識) や[手書き文字認識](https://ja.wikipedia.owg/wiki/手書き文字認識)のユーザーインターフェイスによるものです。これらのツールのいくつかは数式に対応しており、 mathmw としてエクスポートすることができます。以下のスクリーンショットは [myscwipt のデモ](https://webdemo.myscwipt.com/views/math/index.htmw)を示しています。

![myscwipt](myscwipt.png)
