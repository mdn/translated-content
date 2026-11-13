---
title: ウェブフォント
slug: Learn_web_development/Core/Text_styling/Web_fonts
l10n:
  sourceCommit: 5290150ba98af55634d85f974a14df5a15b36356
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}

このモジュールの最初の記事では、フォントとテキストの装飾に使用できる基本的な CSS 機能について調べました。 この記事では、ウェブフォントの詳細を調べながら、さらに進みます。これらを使用すると、ウェブページと一緒にカスタムフォントをダウンロードすることを可能にして、より多様なカスタムテキストの装飾を可能にします。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content"
          >HTML によるコンテンツの構造化</a
        >、
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS によるスタイル設定の基本</a>、
        <a href="/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals">基本的なテキストとフォントのスタイル設定</a>。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
       <ul>
         <li>ウェブフォントを使用することで、ウェブ開発者はウェブセーフフォントセット以外のカスタムフォントをウェブアプリで使用することを理解する。</li>
         <li>基本設定 — <code>@font-face</code> アットルール、および一般的な記述子。</li>
         <li><code>font-family</code>プロパティでウェブフォントを使用すること。</li>
         <li>オンラインサービスを使用して、ウェブフォントを探し、ウェブフォントのコードを生成すること。</li>
       </ul>
      </td>
    </tr>
  </tbody>
</table>

## フォントファミリーの復習

[基本的なテキストとフォントのスタイル設定](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals)で見たように、HTML に適用されるフォントは {{cssxref("font-family")}} プロパティを使って制御できます。 これは 1 つ以上のフォントファミリー名を取り、ブラウザーはそれが実行されているシステムで利用可能なフォントを見つけるまでリストを順にたどります。

```css
p {
  font-family: "Helvetica", "Trebuchet MS", "Verdana", sans-serif;
}
```

このシステムはうまく機能しますが、伝統的にウェブ開発者のフォント選択は限られていました。 一般的なすべてのシステムで利用できることを保証できるフォントは、ほんの一握りです — いわゆる[ウェブセーフフォント](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals#ウェブセーフフォント)です。フォントスタックを使用して、好ましいフォント、ウェブセーフな代替フォント、既定のシステムフォントの順で指定することができます。しかし、これはあなたのデザインが各フォントで作業することを確認するために必要なテストのため、作業量が増えてしまいます。（訳注：日本語フォントを英語フォントの後、既定のフォントの前に指定すれば、英語部分だけ英語フォントにすることができます。 つまり、英語フォントだけの指定であっても、日本語環境なら、日本語には日本語の既定のフォントが使われるということです。 中国語環境なら、中国語の漢字が使われることでしょう。）

## ウェブフォント

うまく動作する代替案があります。 CSS では、ウェブ上で利用できるフォントファイルを指定して、ウェブサイトにアクセスしたときに一緒にダウンロードさせることができます。つまり、この CSS 機能に対応しているブラウザーであれば、指定したフォントを表示することができるのです。すごいですね。 必要な構文は次のようなものです。

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
2. 主要なブラウザーのすべてが WOFF2 (Web Open Font Format version 2) に対応していまので、この記事ではこの形式を使用します。
3. WOFF2 は、可変フォント、クロマティックフォント、フォントコレクションを含む TrueType および OpenType の仕様のすべてに対応しています。
4. ウェブフォントファイルをできるだけ少なくすることがよい考えです。必要な書式のみを使用することで、サイトが配信しなければならないファイル数を縮小し、フォントのダウンロードサイズを小さくすることができます。
5. 現実のプロジェクトで古いブラウザーへの対応が必要な場合は、WOFF も提供する必要があるかもしれません。WOFF および WOFF2 の対応状況については、{{cssxref("@font-face")}}の[ブラウザー互換性表](/ja/docs/Web/CSS/Reference/At-rules/@font-face#ブラウザーの互換性)を調べてください。

[Firefox Font Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) を使えば、ウェブフォントであろうとなかろうと、ページで使用されているフォントを調べたり操作したりすることができます。

## 独自のウェブフォントの追加

この点を考慮して、最初の原則から基本的なウェブフォントの例を作り上げましょう。コードを追加するための出発点として、[web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-start.html) ファイルと [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-start.css) ファイルを使用する必要があります（[ライブの例](https://mdn.github.io/learning-area/css/web-fonts/web-font-start.html)を見る）。 ここで、これらのファイルのコピーをコンピューターの新しいディレクトリーに作成します。 `web-font-start.css` ファイルには、この例の基本的なレイアウトと組版を処理するための最小限の CSS がいくつかあります。

### フォントを探す

この例では、見出し用と本文テキスト用の 2 つのウェブフォントを使用します。 まず最初に、フォントを含むフォントファイルを見つける必要があります。 フォントはフォント製造元によって作成され、さまざまなファイル形式で保存されます。 フォントを入手できるサイトは、一般的に 3 種類あります。

- 無料フォント配布会社: これは無料フォントをダウンロードできるサイトです（フォント作成者へのクレジット表示などのライセンス条件が他にあるかもしれません）。 例としては、[DaFont](https://www.dafont.com/)、[Everything Fonts](https://everythingfonts.com/) などがあります。
- 有料フォント配布会社: これは、[myfonts.com](https://www.myfonts.com/) など、フォントを有料で利用できるようにするサイトです。 [Linotype](https://www.linotype.com/)、[Monotype](https://www.monotype.com)、[Exljbris](https://www.exljbris.com/) などのフォント製造元から直接フォントを購入することもできます。
- オンラインフォントサービス: これはあなたに代わってフォントを保存し提供するサイトで、全体のプロセスをより簡単にします。 詳細については、[オンラインフォントサービスの使用](#オンラインフォントサービスの使用)のセクションを参照してください。

いくつかのフォントを見つけましょう！ [DaFont](https://www.dafont.com/) に行き、2 つのフォントを選択します — 見出しには素敵で面白いフォント（多分素敵な display や slab serif フォント）、段落にはやや派手で読みやすいフォントです。 各フォントが見つかったら、download（ダウンロード）ボタンを押して、先ほど保存した HTML ファイルと CSS ファイルと同じディレクトリー内にファイルを保存します。 TrueType フォント (TTF) か OpenType フォント (OTF) かは関係ありません。

いずれの場合も、フォントパッケージを展開します（ウェブフォントは通常、フォントファイルとライセンス情報を含む ZIP ファイルで配布されます）。 パッケージの中に複数のフォントファイルを見つけるかもしれません。例えば、thin（細字）、medium（中字）、bold（太字）、italic（イタリック）、thin italic（細字イタリック）など、利用可能なさまざまな異形（variant）を持つファミリーとして配布されるフォントがあります。 この例では、それぞれの選択に対して 1 つのフォントファイルを使用することを考慮してください。

### 必要なコードの生成

今、必要なコード（そしてフォント形式）を生成する必要があります。次の手順に従ってください。

1. 商用やウェブのプロジェクトでこれを使用する場合は、ライセンス要件をすべて満たしていることを確認してください。
2. Transfonter の [webfont generator](https://transfonter.org/) へ行きます。
3. _Upload your fonts_ ボタンを使って 2 つのフォントファイルをアップロードします。
4. **WOFF2** のチェックボックスのみがオンになっていることを確認してください。**WOFF** のチェックは外してください。
5. _Convert_ をクリックします。
6. _Download_ をクリックします。

ZIP ファイルのダウンロードが完了したら、展開して、HTML や CSS と同じディレクトリーに移動してください。

### デモでのコードの実装

展開したディレクトリー内には、3 つの有用なアイテムがあります。

- 各フォントの `.woff2` ファイル。
- 各フォントのデモ HTML ファイル: ブラウザーにこれらをロードして、フォントがさまざまな使用状況でどのように見えるかを確認します。
- `stylesheet.css` ファイル: 生成された @font-face のコードが含まれています。

デモにこれらのフォントを実装するには、次の手順に従います。

1. 展開したディレクトリーの名前を `fonts` のように簡単でシンプルなものに変更します。
2. `stylesheet.css` ファイルを開き、その中に含まれている両方の `@font-face` ブロックを `web-font-start.css` ファイルにコピーします。フォントはサイトで使用する前にインポートする必要があるため、 CSS のどれよりも前の一番上に配置する必要があります。
3. それぞれの `url()` 関数は CSS にインポートしたいフォントファイルを指しています。ファイルへのパスが正しいことを確認する必要があるので、各パスの先頭に `fonts/` を追加します（必要に応じて調整します）。
4. これで、ウェブセーフフォントや既定のシステムフォントと同じように、これらのフォントをフォントスタックで使用できます。 例えば次のようにします。

   ```css
   @font-face {
     font-family: "zantrokeregular";
     src: url("fonts/zantroke-webfont.woff2") format("woff2");
     font-weight: normal;
     font-style: normal;
     font-display: swap;
   }
   ```

   ```css
   font-family: "zantrokeregular", serif;
   ```

   ウェブフォントが読み込めない場合、汎用フォントファミリー `serif` がシステムフォントの代替として機能します。また、ウェブフォントのファイル数や書式化された形式を最小に抑えることで、ブラウザーが取得する必要があるリソースを縮小し、パフォーマンスの向上にも役立ちます。

いくつかの素敵なフォントがあるデモページができあがるはずです。異なるフォントは異なるサイズで作成されるため、サイズや間隔などを調整して、ルックアンドフィールを改善する必要があります。

![ウェブフォントによる演習の完成デザイン。このページには 2 つの見出しと 3 つの段落があります。ページには、異なるフォントと異なるサイズのテキストが含まれています。](web-font-example.png)

> [!NOTE]
> これがうまくいかない場合は、自分のバージョンと完成したファイルとを比較してみてください。 [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-finished.html) と [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/web-font-finished.css) を見てください。 [GitHub からコードをダウンロード](https://github.com/mdn/learning-area/tree/main/css/web-fonts)するか、[完成した例をライブ実行](https://mdn.github.io/learning-area/css/web-fonts/web-font-finished.html)することができます。

## オンラインフォントサービスの使用

オンラインフォントサービスは一般的にあなたのためにフォントを保存して提供するので、`@font-face` コードを書くことを心配する必要はなく、一般的にサイトに 1 行か 2 行の単純なコードを挿入するだけですべてがうまくいきます。例としては、[Adobe Fonts](https://fonts.adobe.com/) や [Cloud.typography](http://www.typography.com/webfonts) などが挙げられます。これらのサービスのほとんどはサブスクリプションベースですが、特に迅速なテスト作業やデモを書くのに便利な無料のサービスである [Google Fonts](https://fonts.google.com/) は例外です。

これらのサービスのほとんどは簡単に使えます。Google のフォントを軽く見てみましょう。 そうすれば、アイデアを得ることができます。 ここでも、出発点として `web-font-start.html` と `web-font-start.css` のコピーを使用してください。

1. [Google Fonts](https://fonts.google.com/) に行きます。
2. フィルターや検索バーを使用して、気に入ったフォントをいくつか探してください。
3. フォントをクリックして、詳細ページを開きます。
4. 気に入ったフォントが見つかったら、詳細ページにある **Get font** ボタンをクリックして、選択済みフォントのページに追加します。別のフォントを追加したい場合は、ブラウザーの「戻る」ボタンをクリックして、再度検索してください。
5. フォントの選択が完了したら、選択済みフォントページにある **Get embed code** ボタンをクリックし、表示された `<link>` 要素をコピーします。
6. コピーした `<link>` 要素を、HTML 文書の `<head>` タグ内に、既存のスタイルシートリンクより上に貼り付けます。
7. 表示された CSS の `font-family` ルールをコピーし、前回の手順と同様に、CSS 内でそれらを使用してフォントを適用します。

> [!NOTE]
> 自分の作品を私たちの作品と比べてみる必要がある場合は、完成版を [google-font.html](https://github.com/mdn/learning-area/blob/main/css/web-fonts/google-font.html) および [google-font.css](https://github.com/mdn/learning-area/blob/main/css/web-fonts/google-font.css) で見ることができます（[ライブで見る](https://mdn.github.io/learning-area/css/web-fonts/google-font.html)）。

## @font-face の詳細

Transfonter によって生成された `@font-face` 構文を調べてみましょう。 これは、ブロックの 1 つがどのように見えるかです。

```css
@font-face {
  font-family: "zantrokeregular";
  src: url("zantroke-webfont.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

何ができるのか、見て行きましょう。

- `font-family`: この行はフォントとして参照したい名前を指定します。 CSS を通して一貫してそれを使う限り、好きなものにすることができます。
- `src`: この行では、CSS にインポートするフォントファイルへのパス（`url` の部分）と、フォント形式（`format` の部分）を指定します。後者は省略可能ですが、ブラウザーがフォントの使用可否をすばやく判断できるようになるため、指定しておくと便利です。古いブラウザーにも対応する必要がある場合は、カンマで区切って複数のフォントソースを列挙し、推奨する形式（通常は WOFF2）を最初に指定します。
- {{cssxref("@font-face/font-weight", "font-weight")}}/{{cssxref("@font-face/font-style", "font-style")}}: これらの行はフォントの太さ、およびイタリックかどうかを指定します。 同じフォントの複数の太さをインポートする場合は、フォントファミリーのすべての異なるメンバーに異なる名前を付けるのではなく、それらの太さ/スタイルを指定して、異なる値の `font-weight`/`font-style` を使用することができます。 [@font-face tip: define font-weight and font-style to keep your CSS simple](https://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/)<sup>(英語)</sup>によって Roger Johansson が何をすべきかをより詳細に示しています。
- {{cssxref("@font-face/font-display", "font-display")}}: この行は、フォントの読み込み中にどのように表示されるかを指定します。

> [!NOTE]
> ウェブフォントに特定の {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} および {{cssxref("@font-face/font-stretch", "font-stretch")}} の値を指定することもできます。 新しいブラウザーでは、{{cssxref("@font-face/unicode-range", "unicode-range")}} の値でウェブフォントで使用する特定の文字範囲を指定することもできます。対応しているブラウザーでは、ページに指定した文字が含まれている場合にのみフォントがダウンロードされるため、不要なダウンロードを省くことができます。Drew McLellan による [Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/)<sup>(英語)</sup>は、これをどのように利用するかについていくつかの役に立つアイデアを提供します。

## まとめ

テキストのスタイル設定の基礎に関する記事をすべて読み終えている時点で、このモジュールの評価課題[コミュニティスクールのホームページの組版](/ja/docs/Learn_web_development/Core/Text_styling/Typesetting_a_homepage)に挑戦して、理解度を確認してみましょう。

課題を完了したら、次は [CSS レイアウト](/ja/docs/Learn_web_development/Core/CSS_layout)について学びましょう。

## 関連情報

- [可変フォントガイド](/ja/docs/Web/CSS/Guides/Fonts/Variable_fonts)
- [Fonts knowledge](https://fonts.google.com/knowledge), Google Fonts

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_links", "Learn_web_development/Core/Text_styling/Typesetting_a_homepage", "Learn_web_development/Core/Text_styling")}}
