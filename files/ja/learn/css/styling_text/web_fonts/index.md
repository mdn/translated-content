---
title: ウェブフォント
slug: Learn/CSS/Styling_text/Web_fonts
l10n:
  sourceCommit: ffe4e4b49b540a18cc4c0e98d7cbd11795d8a360
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

このモジュールの最初の記事では、フォントとテキストの装飾に使用できる基本的な CSS 機能について調べました。 この記事では、ウェブフォントの詳細を調べながら、さらに進みます。これらを使用すると、ウェブページと一緒にカスタムフォントをダウンロードすることを可能にして、より多様なカスタムテキストの装飾を可能にします。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        基本的なコンピューターリテラシー、HTML の基本（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >の学中）、 CSS の基本（<a href="/ja/docs/Learn/CSS/First_steps">CSS 入門</a>の学習）、
        <a href="/ja/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS のテキストとフォントの基礎</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        サードパーティのサービスを使用するか、独自のコードを作成することによって、ウェブフォントをウェブページに適用する方法を習得する。
      </td>
    </tr>
  </tbody>
</table>

## フォントファミリーの復習

[基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)で見たように、HTML に適用されるフォントは {{cssxref("font-family")}} プロパティを使って制御できます。 これは 1 つ以上のフォントファミリー名を取り、ブラウザーはそれが実行されているシステムで利用可能なフォントを見つけるまでリストを順にたどります。

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

このシステムはうまく機能しますが、伝統的にウェブ開発者のフォント選択は限られていました。 一般的なすべてのシステムで利用できることを保証できるフォントは、ほんの一握りです — いわゆる[ウェブセーフフォント](/ja/docs/Learn/CSS/Styling_text/Fundamentals#ウェブセーフフォント)です。フォントスタックを使用して、好ましいフォント、ウェブセーフな代替フォント、既定のシステムフォントの順で指定することができます。しかし、これはあなたのデザインが各フォントで作業することを確認するために必要なテストのため、作業量が増えてしまいます。（訳注：日本語フォントを英語フォントの後、既定のフォントの前に指定すれば、英語部分だけ英語フォントにすることができます。 つまり、英語フォントだけの指定であっても、日本語環境なら、日本語には日本語の既定のフォントが使われるということです。 中国語環境なら、中国語の漢字が使われることでしょう。）

## ウェブフォント

しかし、これはとてもうまく動作する代替案があります。( IE バージョン 6 のような古いブラウザーでも対応しています。) CSS では、ウェブ上で利用できるフォントファイルを指定して、ウェブサイトにアクセスしたときに一緒にダウンロードさせることができます。つまり、この CSS 機能に対応しているブラウザーであれば、指定したフォントを表示することができるのです。すごいですね。 必要な構文は次のようなものです。

まず最初に、CSS の先頭に {{cssxref("@font-face")}} ブロックがあり、ダウンロードするフォントファイルを指定します。

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

これより下では、 {{cssxref("@font-face")}} の中で指定されているフォントファミリー名を使ってカスタムフォントを通常通り好きなものに適用できます。

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

構文はこれより少し複雑になります。 以下で詳しく説明します。

ウェブフォントに関して留意すべき重要な点が 2 つあります。

1. フォントは一般的に無料で使用できるものではありません。フォントの代金を支払ったり、コード内（またはサイト内）でフォント作成者のクレジット表記をするなどのライセンス条件に従ったりする必要があります。フォントを盗んで、適切なクレジットを与えずに使用すべきではありません。
2. 主要なブラウザーのすべてが WOFF/WOFF2 （Web Open Font Format version 1 and 2）に対応しています。 IE9（2011 年リリース）など古いブラウザーでも WOFF 形式には対応しています。
3. WOFF2 は、可変フォント、クロマティックフォント、フォントコレクションを含む TrueType および OpenType の仕様の全てに対応しています。
4. フォントファイルを掲載されている順番は重要です。ダウンロードする複数のフォントファイルのリストをブラウザーに指定された場合、ブラウザーは使用される可能性のある最初のフォントファイルを選ぶことになります。そのため、最初に掲載する形式は、優先される形式、つまり WOFF2 とし、古い形式はその後に掲載されるようにします。ある形式を理解できないブラウザーは、リストの中の次の形式で対応することになります。
5. 古いブラウザーで作業する必要がある場合、EOT (Embedded Open Type), TTF (TrueType Font), SVG ウェブフォントをダウンロードできるように指定する必要があります。この記事では、 Fontsquirrel Webfont Generator を使用して、必要なファイルを生成する方法を説明します。

> **メモ:** テクノロジーとしてのウェブフォントは、バージョン 4 以降の Internet Explorer で対応しています。

[Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) を使えば、ウェブフォントであろうとなかろうと、ページで使用されているフォントを調べたり操作したりすることができます。この動画は素晴らしいチュートリアルを提供しています。

{{EmbedYouTube("UazfLa1O94M")}}

## アクティブラーニング: ウェブフォントの例

この点を考慮して、最初の原則から基本的なウェブフォントの例を作り上げましょう。 埋め込まれたライブの例を使用してこれをデモすることは困難なので、代わりに、以下のセクションで詳述されている手順に従うことでプロセスを理解してください。

コードを追加するための出発点として、[web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) ファイルと [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) ファイルを使用する必要があります（[ライブの例](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)を見る）。 ここで、これらのファイルのコピーをコンピュータの新しいディレクトリーに作成します。 `web-font-start.css` ファイルには、この例の基本的なレイアウトと組版を処理するための最小限の CSS がいくつかあります。

### フォントを探す

この例では、見出し用と本文テキスト用の 2 つのウェブフォントを使用します。 まず最初に、フォントを含むフォントファイルを見つける必要があります。 フォントはフォント製造元によって作成され、さまざまなファイル形式で保存されます。 フォントを入手できるサイトは、一般的に 3 種類あります。

- 無料フォント配布会社: これは無料フォントをダウンロードできるサイトです（フォント作成者へのクレジット表示などのライセンス条件が他にあるかもしれません）。 例としては、[Font Squirrel](https://www.fontsquirrel.com/)、[dafont](https://www.dafont.com/)、[Everything Fonts](https://everythingfonts.com/) などがあります。
- 有料フォント配布会社: これは、[fonts.com](https://www.fonts.com/) や [myfonts.com](https://www.myfonts.com/) など、フォントを有料で利用できるようにするサイトです。 [Linotype](https://www.linotype.com/)、[Monotype](https://www.monotype.com)、[Exljbris](https://www.exljbris.com/) などのフォント製造元から直接フォントを購入することもできます。
- オンラインフォントサービス: これはあなたに代わってフォントを保存し提供するサイトで、全体のプロセスをより簡単にします。 詳細については、[オンラインフォントサービスの使用](#オンラインフォントサービスの使用)のセクションを参照してください。

いくつかのフォントを見つけましょう！ [Font Squirrel](https://www.fontsquirrel.com/) に行き、2 つのフォントを選択します — 見出しには素敵で面白いフォント（多分素敵な display や slab serif フォント）、段落にはやや派手で読みやすいフォントです。 各フォントが見つかったら、download（ダウンロード）ボタンを押して、先ほど保存した HTML ファイルと CSS ファイルと同じディレクトリー内にファイルを保存します。 TTF (True Type Fonts) か OTF (Open Type Fonts) かは関係ありません。

いずれの場合も、フォントパッケージを展開します（ウェブフォントは通常、フォントファイルとライセンス情報を含む ZIP ファイルで配布されます）。 パッケージの中に複数のフォントファイルを見つけるかもしれません — 例えば、thin（細字）、medium（中字）、bold（太字）、italic（イタリック）、thin italic（細字イタリック）など、利用可能なさまざまな異形（variant）を持つファミリーとして配布されるフォントがあります。 この例では、それぞれの選択に対して 1 つのフォントファイルを使用することを考慮してください。

> **メモ:** 右側の列の "Find fonts"（フォントの検索）セクションで、さまざまな tags（タグ）や classifications（分類）をクリックして表示された選択肢を絞り込むことができます。 （訳注：残念なことに現在のところ日本語フォントはないようです。）

### 必要なコードの生成

今、必要なコード（そしてフォント形式）を生成する必要があります。 フォントごとに、次の手順に従います。

1. 商用やウェブのプロジェクトでこれを使用する場合は、ライセンス要件をすべて満たしていることを確認してください。
2. Fontsquirrel の [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)（ウェブフォントジェネレーター）に行きます。
3. _Upload Fonts_（フォントのアップロード）ボタンを使って 2 つのフォントファイルをアップロードします。
4. "Yes, the fonts I'm uploading are legally eligible for web embedding." （はい、アップロードしたフォントはウェブの埋め込みに法的に適格です。）というチェックボックスをオンにします。
5. _Download your kit_（キットをダウンロードする）をクリックします。

ジェネレーターの処理が完了したら、ZIP ファイルをダウンロードする必要があります — それを HTML と CSS と同じディレクトリーに保存してください。

古いブラウザーに対応する必要がある場合は、キットをダウンロードする前に、 Fontsquirrel Webfont Generator で「エキスパート」モードを選択し、SVG、EOT、TTF の形式のいずれかを選択してください。

フォント生成のためのウェブサービスは、通常、ファイルサイズを制限しています。そのような場合は、以下のようなツールを使用することを検討してください。

1. [sfnt2woff-zopfli](https://github.com/bramstein/sfnt2woff-zopfli) は ttf を woff へ変換
2. [fontforge](https://fontforge.org/) は ttf を svg へ変換
3. [batik ttf2svf](https://people.apache.org/~clay/batik/ttf2svg.html) は ttf を svg へ変換
4. [woff2](https://github.com/google/woff2) は ttf を woff2 へ変換

### デモでのコードの実装

この時点で、生成したばかりのウェブフォントのキットを展開します。 展開したディレクトリー内には、3 つの便利なアイテムがあります。

- 各フォントの複数のバージョン（`.woff`、`.woff2` ファイル） 。
- 各フォントのデモ HTML ファイル: ブラウザーにこれらをロードして、フォントがさまざまな使用状況でどのように見えるかを確認します。
- `stylesheet.css` ファイル: 生成された `@font-face` コードが含まれています。

デモにこれらのフォントを実装するには、次の手順に従います。

1. 展開したディレクトリーの名前を `fonts` のように簡単でシンプルなものに変更します。
2. `stylesheet.css` ファイルを開き、その中に含まれている両方の `@font-face` ブロックを `web-font-start.css` ファイルにコピーします。フォントはサイトで使用する前にインポートする必要があるため、 CSS のどれよりも前の一番上に配置する必要があります。
3. それぞれの `url()` 関数は CSS にインポートしたいフォントファイルを指しています。ファイルへのパスが正しいことを確認する必要があるので、各パスの先頭に `fonts/` を追加します（必要に応じて調整します）。
4. これで、ウェブセーフフォントや既定のシステムフォントと同じように、これらのフォントをフォントスタックで使用できます。 例えば次のようにします。

   ```css
   @font-face {
     font-family: "zantrokeregular";
     src:
       url("fonts/zantroke-webfont.woff2") format("woff2"),
       url("fonts/zantroke-webfont.woff") format("woff");
     font-weight: normal;
     font-style: normal;
   }
   ```

   ```css
   font-family: "zantrokeregular", serif;
   ```

いくつかの素敵なフォントが実装されたデモページができあがるはずです。異なるフォントは異なるサイズで作成されるため、サイズや間隔などを調整して、ルックアンドフィールを調整する必要があります。

![ウェブフォントによるアクティブラーニングの演習の完成デザイン。このページには 2 つの見出しと 3 つの段落があります。ページには、異なるフォントと異なるサイズのテキストが含まれています。](web-font-example.png)

> **メモ:** これがうまくいかない場合は、自分のバージョンと完成したファイルとを比較してみてください。 [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) と [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css) を見てください。 [GitHub からコードをダウンロード](https://github.com/mdn/learning-area/tree/main/css/styling-text/web-fonts)するか、[完成した例をライブ実行](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html)することができます。

## オンラインフォントサービスの使用

オンラインフォントサービスは一般的にあなたのためにフォントを保存して提供するので、`@font-face` コードを書くことを心配する必要はなく、一般的にサイトに 1 行か 2 行の単純なコードを挿入するだけですべてがうまくいきます。例としては、[Adobe Fonts](https://fonts.adobe.com/) や [Cloud.typography](http://www.typography.com/webfonts) などが挙げられます。これらのサービスのほとんどはサブスクリプションベースですが、特に迅速なテスト作業やデモを書くのに便利な無料のサービスである [Google Fonts](https://fonts.google.com/) は例外です。

これらのサービスのほとんどは使いやすいので、詳細には説明しません。 Google のフォントを簡単に見てみましょう。 そうすれば、アイデアを得ることができます。 ここでも、出発点として `web-font-start.html` と `web-font-start.css` のコピーを使用してください。

1. [Google Fonts](https://fonts.google.com/) に行きます。
2. 好きなフォントを検索するか、ページ上部のフィルターを使用してフォントの種類を表示し、気に入ったフォントをいくつか選んでください。
3. フォントファミリーを選択するには、その横にある ⊕ ボタンを押します。
4. フォントファミリーを選択したら、ページ下部の _\[選択数] Families Selected_ バーを押します。
5. 表示された画面で、最初に表示された HTML コードの行をコピーして、それを HTML ファイルの先頭に貼り付ける必要があります。 フォントを CSS で使用する前にインポートされるように、既存の {{htmlelement("link")}} 要素の上に配置します。
6. 次に、カスタムフォントを HTML に適用するために、リストされている CSS 宣言を必要に応じて CSS にコピーする必要があります。

> **メモ:** 自分の作品を私たちの作品と比べてみる必要がある場合は、完成版を [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html) および [google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css) で見ることができます（[ライブで見る](https://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)）。

## @font-face の詳細

Fontsquirrel によって生成された `@font-face` 構文を調べてみましょう。 これは、ブロックの 1 つがどのように見えるかです。

```css
@font-face {
  font-family: "zantrokeregular";
  src:
    url("zantroke-webfont.woff2") format("woff2"),
    url("zantroke-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
```

何ができるのか、見て行きましょう。

- `font-family`: この行はフォントとして参照したい名前を指定します。 CSS を通して一貫してそれを使う限り、好きなものにすることができます。
- `src`: これらの行は CSS にインポートされるフォントファイルへのパス（`url` 部分）と各フォントファイルの形式（`format` 部分）を指定します。 どの場合も後者の部分はオプションですが、ブラウザーが使用できるフォントをすばやく見つけることができるため、宣言すると有益です。複数の宣言をカンマで区切ってリストすることができます。ブラウザーはそれらを検索し、最初に理解できるとわかったものを使用します。従って、先に WOFF2 のようなより新しくより良い形式を置き、そして後に TTF のようなより古くあまり良くない形式を置くのが最善です。
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: これらの行はフォントの太さ、およびイタリックかどうかを指定します。 同じフォントの複数の太さをインポートする場合は、フォントファミリーのすべての異なるメンバーに異なる名前を付けるのではなく、それらの太さ/スタイルを指定して、異なる値の {{cssxref("font-weight")}}/{{cssxref("font-style")}} を使用することができます。 [@font-face tip: define font-weight and font-style to keep your CSS simple](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/)（英語）によって Roger Johansson が何をすべきかをより詳細に示しています。

> **メモ:** ウェブフォントに特定の {{cssxref("font-variant")}} および {{cssxref("font-stretch")}} の値を指定することもできます。 新しいブラウザーでは、[`unicode-range`](/ja/docs/Web/CSS/@font-face/unicode-range) の値でウェブフォントで使用する特定の文字範囲を指定することもできます — サポートしているブラウザーでは、指定された文字のみがダウンロードされ、不要なダウンロードを節約できます。 Drew McLellan による [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/)（英語）は、これをどのように利用するかについていくつかの役に立つアイデアを提供します。

## 可変フォント

ブラウザーで利用できる新しいフォント技術に、可変フォントと呼ばれるものがあります。これは、幅、太さ、スタイルごとに別個のフォントファイルを保有するのではなく、ひとつのファイルに書体の異なるさまざまなバリエーションを組み込むことができるフォントです。このコースの初級編ではやや高度な内容になっていますが、もしあなたが背伸びをして可変フォントを調べたいなら、[可変フォントガイド](/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)を読んでみてください。

## まとめ

テキストの装飾の基本についての記事を読み終えたので、今度はモジュール「[コミュニティスクールのホームページの組版](/ja/docs/Learn/CSS/Styling_text/Typesetting_a_homepage)」の評価で理解度をテストします。

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}
