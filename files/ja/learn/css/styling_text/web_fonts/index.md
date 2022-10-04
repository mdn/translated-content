---
title: ウェブフォント
slug: Learn/CSS/Styling_text/Web_fonts
original_slug: Learn/CSS/Styling_text/ウェブフォント
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

このモジュールの最初の記事では、フォントとテキストの装飾に使用できる基本的な CSS 機能について調べました。 この記事では、ウェブフォントの詳細を調べながら、さらに進みます — これらを使用すると、ウェブページと一緒にカスタムフォントをダウンロードすることを可能にして、より多様なカスタムテキストの装飾を可能にします。

| 前提知識: | 基本的なコンピューターリテラシー、HTML の基本（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ）、CSS の基本（[CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)を学ぶ）、[CSS のテキストとフォントの基礎](/ja/docs/Learn/CSS/Styling_text/Fundamentals)。 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | サードパーティのサービスを使用するか、独自のコードを作成することによって、ウェブフォントをウェブページに適用する方法を習得する。                                                                                                                                       |

## フォントファミリーの復習

[基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)で見たように、HTML に適用されるフォントは {{cssxref("font-family")}} プロパティを使って制御できます。 これは 1 つ以上のフォントファミリー名を取り、ブラウザーはそれが実行されているシステムで利用可能なフォントを見つけるまでリストを順にたどります。

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

このシステムはうまく機能しますが、伝統的にウェブ開発者のフォント選択は限られていました。 一般的なすべてのシステムで利用できることを保証できるフォントは、ほんの一握りです — いわゆる[ウェブセーフフォント](/ja/Learn/CSS/Styling_text/Fundamentals#Web_safe_fonts)です。 フォントスタックを使用して希望するフォントを指定し、その後にウェブセーフの代替フォントを指定してからデフォルトのシステムフォントを指定することができますが、これはデザインが各フォントなどでうまく見えることを確認するためにテストの面でオーバーヘッドを追加します。（訳注：日本語フォントを英語フォントの後、デフォルトフォントの前に指定すれば、英語部分だけ英語フォントにすることができます。 つまり、英語フォントだけの指定であっても、日本語環境なら、日本語には日本語のデフォルトフォントが使われるということです。 中国語環境なら、中国語の漢字が使われることでしょう。）

## ウェブフォント

しかし、IE バージョン 6 でも非常にうまく動作する代替手段があります。 ウェブフォントは、ウェブサイトにアクセスした時に一緒にダウンロードするフォントファイルを指定できる CSS の機能です。 つまり、ウェブフォントをサポートするブラウザーであれば、指定したフォントをそのまま使用できることを意味しています。 すばらしい！ 必要な構文は次のようになります。

まず最初に、CSS の先頭に {{cssxref("@font-face")}} ブロックがあり、ダウンロードするフォントファイルを指定します。

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff");
}
```

これより下では、`@font-face` の中で指定されているフォントファミリー名を使ってカスタムフォントを通常通り好きなものに適用できます。

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

構文はこれより少し複雑になります。 以下で詳しく説明します。

ウェブフォントに関して留意すべき重要な点が 2 つあります。

1. ブラウザーはさまざまなフォント形式をサポートしているため、適切なクロスブラウザーをサポートするには複数のフォント形式が必要になります。 例えば、最近のほとんどのブラウザーは最も効率的な形式である WOFF / WOFF2（Web Open Font Format バージョン 1 および 2）をサポートしていますが、古いバージョンの IE は EOT（Embedded Open Type）フォントしかサポートしていないし、古いバージョンの iPhone や Android のブラウザーをサポートするには、SVG 版のフォントを含める必要があるかもしれません。 必要なコードの生成方法を下の方で示します。
2. フォントは一般に自由に使用できません。 それらの代金を払わなければなりません、そして/またはコードの中で（またはサイトで）フォント作成者のクレジット表示のような他のライセンス条件に従わなければなりません。 フォントを盗み、適切なクレジットを与えずに使用するべきではありません。

> **メモ:** テクノロジーとしてのウェブフォントは、バージョン 4 以降の Internet Explorer でサポートされています！

## 能動的学習: ウェブフォントの例

この点を考慮して、最初の原則から基本的なウェブフォントの例を作り上げましょう。 埋め込まれたライブの例を使用してこれをデモすることは困難なので、代わりに、以下のセクションで詳述されている手順に従うことでプロセスを理解してください。

コードを追加するための出発点として、[web-font-start.html](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-start.html) ファイルと [web-font-start.css](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-start.css) ファイルを使用する必要があります（[ライブの例](http://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)を見る）。 ここで、これらのファイルのコピーをコンピュータの新しいディレクトリーに作成します。 `web-font-start.css` ファイルには、この例の基本的なレイアウトと組版を処理するための最小限の CSS がいくつかあります。

### フォントを探す

この例では、見出し用と本文テキスト用の 2 つのウェブフォントを使用します。 まず最初に、フォントを含むフォントファイルを見つける必要があります。 フォントはフォント製造元によって作成され、さまざまなファイル形式で保存されます。 フォントを入手できるサイトは、一般的に 3 種類あります。

- 無料フォント配布会社: これは無料フォントをダウンロードできるサイトです（フォント作成者へのクレジット表示などのライセンス条件が他にあるかもしれません）。 例としては、[Font Squirrel](https://www.fontsquirrel.com/)、[dafont](http://www.dafont.com/)、[Everything Fonts](https://everythingfonts.com/) などがあります。
- 有料フォント配布会社: これは、[fonts.com](http://www.fonts.com/) や [myfonts.com](http://www.myfonts.com/) など、フォントを有料で利用できるようにするサイトです。 [Linotype](https://www.linotype.com/)、[Monotype](http://www.monotype.com)、[Exljbris](http://www.exljbris.com/) などのフォント製造元から直接フォントを購入することもできます。
- オンラインフォントサービス: これはあなたに代わってフォントを保存し提供するサイトで、全体のプロセスをより簡単にします。 詳細については、[オンラインフォントサービスの使用](#using_an_online_font_service)のセクションを参照してください。

いくつかのフォントを見つけましょう！ [Font Squirrel](https://www.fontsquirrel.com/) に行き、2 つのフォントを選択します — 見出しには素敵で面白いフォント（多分素敵な display や slab serif フォント）、段落にはやや派手で読みやすいフォントです。 各フォントが見つかったら、download（ダウンロード）ボタンを押して、先ほど保存した HTML ファイルと CSS ファイルと同じディレクトリー内にファイルを保存します。 TTF（True Type Fonts）か OTF（Open Type Fonts）かは関係ありません。

いずれの場合も、フォントパッケージを解凍します（ウェブフォントは通常、フォントファイルとライセンス情報を含む ZIP ファイルで配布されます）。 パッケージの中に複数のフォントファイルを見つけるかもしれません — 例えば、thin（細字）、medium（中字）、bold（太字）、italic（イタリック）、thin italic（細字イタリック）など、利用可能なさまざまな異形（variant）を持つファミリーとして配布されるフォントがあります。 この例では、それぞれの選択に対して 1 つのフォントファイルを使用することを考慮してください。

> **メモ:** 右側の列の "Find fonts"（フォントの検索）セクションで、さまざまな tags（タグ）や classifications（分類）をクリックして表示された選択肢を絞り込むことができます。 （訳注：残念なことに現在のところ日本語フォントはないようです。）

### 必要なコードの生成

今、必要なコード（そしてフォント形式）を生成する必要があります。 フォントごとに、次の手順に従います。

1. 商用やウェブのプロジェクトでこれを使用する場合は、ライセンス要件をすべて満たしていることを確認してください。
2. Font Squirrel の [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)（ウェブフォントジェネレータ）に行きます。
3. _Upload Fonts_（フォントのアップロード）ボタンを使って 2 つのフォントファイルをアップロードします。
4. "Yes, the fonts I'm uploading are legally eligible for web embedding." （はい、アップロードしたフォントはウェブの埋め込みに法的に適格です。）というチェックボックスをオンにします。
5. _Download your kit_（キットをダウンロードする）をクリックします。

ジェネレータの処理が完了したら、ZIP ファイルをダウンロードする必要があります — それを HTML と CSS と同じディレクトリーに保存してください。

### デモでのコードの実装

この時点で、生成したばかりのウェブフォントのキットを解凍します。 解凍したディレクトリー内には、3 つの便利なアイテムがあります。

- 各フォントの複数のバージョン: （例えば、`.ttf`、`.woff`、`.woff2` などで、ブラウザーのサポート要件が変わると、提供される正確なフォントも次第に更新されます）。 上記のように、クロスブラウザーをサポートするには複数のフォントが必要です — これが、必要なものがすべて揃っていることを確認するための Font Squirrel の方法です。
- 各フォントのデモ HTML ファイル: ブラウザーにこれらをロードして、フォントがさまざまな使用状況でどのように見えるかを確認します。
- `stylesheet.css` ファイル: 生成された `@font-face` コードが含まれています。

デモにこれらのフォントを実装するには、次の手順に従います。

1. 解凍したディレクトリーの名前を `fonts` のように簡単でシンプルなものに変更します。
2. `stylesheet.css` ファイルを開き、その中に含まれている両方の `@font-face` ブロックを `web-font-start.css` ファイルにコピーします — フォントはサイトで使用する前にインポートする必要があるため、CSS のどれよりも前の一番上に配置する必要があります。
3. 各 `url()` 関数は CSS にインポートしたいフォントファイルを指しています — ファイルへのパスが正しいことを確認する必要があるので、各パスの先頭に `fonts/` を追加します（必要に応じて調整します）。
4. これで、ウェブセーフフォントやデフォルトのシステムフォントと同じように、これらのフォントをフォントスタックで使用できます。 例えば、

    ```css
    font-family: 'zantrokeregular', serif;
    ```

いくつかの素敵なフォントが実装されたデモページができあがるはずです。異なるフォントは異なるサイズで作成されるため、サイズや間隔などを調整して、ルック・アンド・フィールを調整する必要があります。

![](web-font-example.png)

> **メモ:** これがうまくいかない場合は、あなたのバージョンと完成したファイルとを比較してみてください — [web-font-finished.html](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-finished.html) と [web-font-finished.css](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/web-font-finished.css) を見てください（[完成した例をライブで実行してください](http://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html)）。

## オンラインフォントサービスの使用

オンラインフォントサービスは一般的にあなたのためにフォントを保存して提供するので、`@font-face` コードを書くことを心配する必要はなく、一般的にサイトに 1 行か 2 行の単純なコードを挿入するだけですべてがうまくいきます。例としては、[Adobe Fonts](https://fonts.adobe.com/) や [Cloud.typography](http://www.typography.com/cloud/welcome/) などが挙げられます。これらのサービスのほとんどはサブスクリプションベースですが、特に迅速なテスト作業やデモを書くのに便利な無料のサービスである [Google Fonts](https://www.google.com/fonts) は例外です。

これらのサービスのほとんどは使いやすいので、詳細には説明しません。 Google のフォントを簡単に見てみましょう。 そうすれば、アイデアを得ることができます。 ここでも、出発点として `web-font-start.html` と `web-font-start.css` のコピーを使用してください。

1. [Google Fonts](https://www.google.com/fonts) に行きます。
2. 左側のフィルタを使って、選択したいフォントの種類を表示し、好きなフォントをいくつか選択します。 （訳注：Languages（言語）に Japanese（日本語）を選んでも、中国語のフォントも表示されます。 フォントによっては、存在しない文字があるようなので注意しましょう。 日本語環境なら文字は表示されますが、書体の統一感はなくなってしまいます。）
3. フォントファミリーを選択するには、その横にある ⊕ ボタンを押します。
4. フォントファミリーを選択したら、ページ下部の _\[選択数] Families Selected_ バーを押します。
5. 表示された画面で、最初に表示された HTML コードの行をコピーして、それを HTML ファイルの先頭に貼り付ける必要があります。 フォントを CSS で使用する前にインポートされるように、既存の {{htmlelement("link")}} 要素の上に配置します。 （訳注：{{cssxref("@import")}} を選択すれば、CSS ファイルに貼り付けることもできます。）
6. 次に、カスタムフォントを HTML に適用するために、リストされている CSS 宣言を必要に応じて CSS にコピーする必要があります。

> **メモ:** あなたの作品を私たちの作品と照合する必要がある場合は、完成版を [google-font.html](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/google-font.html) および [google-font.css](https://github.com/mdn/learning-area/blob/master/css/styling-text/web-fonts/google-font.css) で見ることができます（それを[ライブで見る](http://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)）。

## @font-face の詳細

Font Squirrel によって生成された `@font-face` 構文を調べてみましょう。 これは、ブロックの 1 つがどのように見えるかです。

```css
@font-face {
  font-family: 'ciclefina';
  src: url('fonts/cicle_fina-webfont.eot');
  src: url('fonts/cicle_fina-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/cicle_fina-webfont.woff2') format('woff2'),
         url('fonts/cicle_fina-webfont.woff') format('woff'),
         url('fonts/cicle_fina-webfont.ttf') format('truetype'),
         url('fonts/cicle_fina-webfont.svg#ciclefina') format('svg');
  font-weight: normal;
  font-style: normal;
}
```

`@font-face` が普及し始めた頃の Paul Irish による投稿（[Bulletproof @font-face Syntax](http://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/)）の後、これは "bulletproof @font-face 構文" と呼ばれています。 それを見て、それが何をするのか見てみましょう。

- `font-family`: この行はフォントとして参照したい名前を指定します。 CSS を通して一貫してそれを使う限り、好きなものにすることができます。
- `src`: これらの行は CSS にインポートされるフォントファイルへのパス（`url` 部分）と各フォントファイルの形式（`format` 部分）を指定します。 どの場合も後者の部分はオプションですが、ブラウザーが使用できるフォントをすばやく見つけることができるため、宣言すると有益です。 複数の宣言をカンマで区切ってリストすることができます — ブラウザーはそれらを検索し、最初に理解できるとわかったものを使用します — 従って、先に WOFF2 のようなより新しくより良い形式を置き、そして後に TTF のようなより古くあまり良くない形式を置くのが最善です。 これに対する 1 つの例外は EOT フォントです — それらは、古いバージョンの IE が実際にフォントを使用できない場合でも、最初に見つかったものを使用しようとするので、古いバージョンの IE のいくつかのバグを修正するために最初に配置されています。
- {{cssxref("font-weight")}} / {{cssxref("font-style")}}: これらの行はフォントの太さ、およびイタリックかどうかを指定します。 同じフォントの複数の太さをインポートする場合は、フォントファミリーのすべての異なるメンバーに異なる名前を付けるのではなく、それらの太さ/スタイルを指定して、異なる値の {{cssxref("font-weight")}} / {{cssxref("font-style")}} を使用することができます。 [@font-face のこつ: CSS をシンプルに保つために font-weight と font-style を定義する](http://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/)（英語）によって Roger Johansson が何をすべきかをより詳細に示しています。

> **メモ:** ウェブフォントに特定の {{cssxref("font-variant")}} および {{cssxref("font-stretch")}} の値を指定することもできます。 新しいブラウザーでは、[`unicode-range`](/ja/docs/Web/CSS/@font-face/unicode-range) の値でウェブフォントで使用する特定の文字範囲を指定することもできます — サポートしているブラウザーでは、指定された文字のみがダウンロードされ、不要なダウンロードを節約できます。 Drew McLellan による [unicode-range を使ったカスタムフォントスタックの作成](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/)（英語）は、これをどのように利用するかについていくつかの役に立つアイデアを提供します。

## 可変フォント

これは、幅、太さ、スタイルごとに別のフォントファイルを用意するのではなく、書体のさまざまなバリエーションを一つのファイルに組み込むことができるフォントです。これらのフォントは初心者向けのコースにしてはやや高度なものですが、もしあなたが自分自身を伸ばして調べたいと思っているのであれば、可変フォントガイドを読んでみてください。

ブラウザーでは、可変フォントと呼ばれる新しいフォントテクノロジーがあります。これらは、幅、太さ、スタイルごとに個別のフォントファイルを用意するのではなく、書体のさまざまなバリエーションを 1 つのファイルに組み込むことができるフォントです。 初心者コースでは多少上級ですが、調べてみたい場合は、[Variable フォントガイド](/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)をお読みください。

## あなたのスキルをテストしてください！

あなたはこの記事の最後に到達し、すでに私たちのアクティブラーニングのセクションでいくつかのスキルテストを行いましたが、今後の最も重要な情報を覚えていますか？あなたがこの情報を保持していることを確認するための評価をモジュールの最後に見つけることができます。[コミュニティスクールのホームページの組版](/ja/docs/Learn/CSS/Styling_text/Typesetting_a_homepage)を参照してください。

## まとめ

テキストの装飾の基本についての記事を読み終えたので、今度はモジュール「コミュニティスクールのホームページの組版」の評価で理解度をテストします。

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

## このモジュール内の文書

- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
- [リストの装飾](/ja/docs/Learn/CSS/Styling_text/Styling_lists)
- [リンクの装飾](/ja/docs/Learn/CSS/Styling_text/Styling_links)
- [ウェブフォント](/ja/docs/Learn/CSS/Styling_text/Web_fonts)
- [コミュニティスクールのホームページの組版](/ja/Learn/CSS/Styling_text/Typesetting_a_homepage)
