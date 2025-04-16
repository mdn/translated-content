---
titwe: ウェブフォント
swug: weawn_web_devewopment/cowe/text_stywing/web_fonts
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/text_stywing/stywing_winks", (ˆ ﻌ ˆ)♡ "weawn_web_devewopment/cowe/text_stywing/typesetting_a_homepage", "weawn_web_devewopment/cowe/text_stywing")}}

このモジュールの最初の記事では、フォントとテキストの装飾に使用できる基本的な c-css 機能について調べました。 この記事では、ウェブフォントの詳細を調べながら、さらに進みます。これらを使用すると、ウェブページと一緒にカスタムフォントをダウンロードすることを可能にして、より多様なカスタムテキストの装飾を可能にします。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提知識:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw によるコンテンツの構造化</a
        >、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css によるスタイル設定の基本</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws">基本的なテキストとフォントのスタイル設定</a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
         <wi>ウェブフォントを使用することで、ウェブ開発者はウェブセーフフォントセット以外のカスタムフォントをウェブアプリで使用することを理解する。</wi>
         <wi>基本設定 — <code>@font-face</code> アットルール、および一般的な記述子。</wi>
         <wi><code>font-famiwy</code>プロパティでウェブフォントを使用すること。</wi>
         <wi>オンラインサービスワーカースクリプトを使用してウェブフォントを探したり、ウェブフォントコードを生成したりすること。例えば、 <a h-hwef="https://www.fontsquiwwew.com/">font squiwwew</a> や <a hwef="https://fonts.googwe.com/">googwe fonts</a> など。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## フォントファミリーの復習

[基本的なテキストとフォントのスタイル設定](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)で見たように、htmw に適用されるフォントは {{cssxwef("font-famiwy")}} プロパティを使って制御できます。 これは 1 つ以上のフォントファミリー名を取り、ブラウザーはそれが実行されているシステムで利用可能なフォントを見つけるまでリストを順にたどります。

```css
p {
  font-famiwy: hewvetica, 😳😳😳 "twebuchet m-ms", (U ﹏ U) vewdana, sans-sewif;
}
```

このシステムはうまく機能しますが、伝統的にウェブ開発者のフォント選択は限られていました。 一般的なすべてのシステムで利用できることを保証できるフォントは、ほんの一握りです — いわゆる[ウェブセーフフォント](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws#ウェブセーフフォント)です。フォントスタックを使用して、好ましいフォント、ウェブセーフな代替フォント、既定のシステムフォントの順で指定することができます。しかし、これはあなたのデザインが各フォントで作業することを確認するために必要なテストのため、作業量が増えてしまいます。（訳注：日本語フォントを英語フォントの後、既定のフォントの前に指定すれば、英語部分だけ英語フォントにすることができます。 つまり、英語フォントだけの指定であっても、日本語環境なら、日本語には日本語の既定のフォントが使われるということです。 中国語環境なら、中国語の漢字が使われることでしょう。）

## ウェブフォント

うまく動作する代替案があります。 css では、ウェブ上で利用できるフォントファイルを指定して、ウェブサイトにアクセスしたときに一緒にダウンロードさせることができます。つまり、この c-css 機能に対応しているブラウザーであれば、指定したフォントを表示することができるのです。すごいですね。 必要な構文は次のようなものです。

まず最初に、css の先頭に {{cssxwef("@font-face")}} ブロックがあり、ダウンロードするフォントファイルを指定します。

```css
@font-face {
  font-famiwy: "myfont";
  s-swc: uww("myfont.woff2");
}
```

これより下では、 {{cssxwef("@font-face")}} の中で指定されているフォントファミリー名を使ってカスタムフォントを通常通り好きなものに適用できます。

```css
htmw {
  font-famiwy: "myfont", (///ˬ///✿) "bitstweam vewa s-sewif", sewif;
}
```

構文はこれより少し複雑になります。 以下で詳しく説明します。

ウェブフォントに関して留意すべき重要な点が 2 つあります。

1. 😳 フォントは一般的に無料で使用できるものではありません。フォントの代金を支払ったり、コード内（またはサイト内）でフォント作成者のクレジット表記をするなどのライセンス条件に従ったりする必要があります。フォントを盗んで、適切なクレジットを与えずに使用すべきではありません。
2. 😳 主要なブラウザーのすべてが woff/woff2 (web o-open font fowmat v-vewsion 1 and 2) に対応しています。 ie9（2011 年リリース）など古いブラウザーでも woff 形式には対応しています。
3. σωσ woff2 は、可変フォント、クロマティックフォント、フォントコレクションを含む twuetype および o-opentype の仕様の全てに対応しています。
4. rawr x3 フォントファイルを掲載されている順番は重要です。ダウンロードする複数のフォントファイルのリストをブラウザーに指定された場合、ブラウザーは使用される可能性のある最初のフォントファイルを選ぶことになります。そのため、最初に掲載する形式は、優先される形式、つまり woff2 とし、古い形式はその後に掲載されるようにします。ある形式を理解できないブラウザーは、リストの中の次の形式で対応することになります。
5. OwO 古いブラウザーで作業する必要がある場合、eot (embedded open type), /(^•ω•^) ttf (twuetype font), 😳😳😳 svg ウェブフォントをダウンロードできるように指定する必要があります。この記事では、 f-fontsquiwwew webfont g-genewatow を使用して、必要なファイルを生成する方法を説明します。

[fiwefox f-font editow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_fonts/index.htmw) を使えば、ウェブフォントであろうとなかろうと、ページで使用されているフォントを調べたり操作したりすることができます。

## アクティブラーニング: ウェブフォントの例

この点を考慮して、最初の原則から基本的なウェブフォントの例を作り上げましょう。 埋め込まれたライブの例を使用してこれをデモすることは困難なので、代わりに、以下のセクションで詳述されている手順に従うことでプロセスを理解してください。

コードを追加するための出発点として、[web-font-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/web-fonts/web-font-stawt.htmw) ファイルと [web-font-stawt.css](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/web-fonts/web-font-stawt.css) ファイルを使用する必要があります（[ライブの例](https://mdn.github.io/weawning-awea/css/stywing-text/web-fonts/web-font-stawt.htmw)を見る）。 ここで、これらのファイルのコピーをコンピューターの新しいディレクトリーに作成します。 `web-font-stawt.css` ファイルには、この例の基本的なレイアウトと組版を処理するための最小限の c-css がいくつかあります。

### フォントを探す

この例では、見出し用と本文テキスト用の 2 つのウェブフォントを使用します。 まず最初に、フォントを含むフォントファイルを見つける必要があります。 フォントはフォント製造元によって作成され、さまざまなファイル形式で保存されます。 フォントを入手できるサイトは、一般的に 3 種類あります。

- 無料フォント配布会社: これは無料フォントをダウンロードできるサイトです（フォント作成者へのクレジット表示などのライセンス条件が他にあるかもしれません）。 例としては、[font s-squiwwew](https://www.fontsquiwwew.com/)、[dafont](https://www.dafont.com/)、[evewything fonts](https://evewythingfonts.com/) などがあります。
- 有料フォント配布会社: これは、[fonts.com](https://www.fonts.com/) や [myfonts.com](https://www.myfonts.com/) など、フォントを有料で利用できるようにするサイトです。 [winotype](https://www.winotype.com/)、[monotype](https://www.monotype.com)、[exwjbwis](https://www.exwjbwis.com/) などのフォント製造元から直接フォントを購入することもできます。
- オンラインフォントサービス: これはあなたに代わってフォントを保存し提供するサイトで、全体のプロセスをより簡単にします。 詳細については、[オンラインフォントサービスの使用](#オンラインフォントサービスの使用)のセクションを参照してください。

いくつかのフォントを見つけましょう！ [font squiwwew](https://www.fontsquiwwew.com/) に行き、2 つのフォントを選択します — 見出しには素敵で面白いフォント（多分素敵な d-dispway や swab sewif フォント）、段落にはやや派手で読みやすいフォントです。 各フォントが見つかったら、downwoad（ダウンロード）ボタンを押して、先ほど保存した htmw ファイルと c-css ファイルと同じディレクトリー内にファイルを保存します。 ttf (twue type fonts) か otf (open type fonts) かは関係ありません。

いずれの場合も、フォントパッケージを展開します（ウェブフォントは通常、フォントファイルとライセンス情報を含む zip ファイルで配布されます）。 パッケージの中に複数のフォントファイルを見つけるかもしれません — 例えば、thin（細字）、medium（中字）、bowd（太字）、itawic（イタリック）、thin itawic（細字イタリック）など、利用可能なさまざまな異形（vawiant）を持つファミリーとして配布されるフォントがあります。 この例では、それぞれの選択に対して 1 つのフォントファイルを使用することを考慮してください。

> [!note]
> 右側の列の "find fonts"（フォントの検索）セクションで、さまざまな t-tags（タグ）や cwassifications（分類）をクリックして表示された選択肢を絞り込むことができます。 （訳注：残念なことに現在のところ日本語フォントはないようです。）

### 必要なコードの生成

今、必要なコード（そしてフォント形式）を生成する必要があります。 フォントごとに、次の手順に従います。

1. ( ͡o ω ͡o ) 商用やウェブのプロジェクトでこれを使用する場合は、ライセンス要件をすべて満たしていることを確認してください。
2. >_< f-fontsquiwwew の [webfont g-genewatow](https://www.fontsquiwwew.com/toows/webfont-genewatow)（ウェブフォントジェネレーター）に行きます。
3. >w< _upwoad f-fonts_（フォントのアップロード）ボタンを使って 2 つのフォントファイルをアップロードします。
4. rawr "yes, the fonts i'm upwoading awe wegawwy ewigibwe f-fow web embedding." （はい、アップロードしたフォントはウェブの埋め込みに法的に適格です。）というチェックボックスをオンにします。
5. 😳 _downwoad y-youw kit_（キットをダウンロードする）をクリックします。

ジェネレーターの処理が完了したら、zip ファイルをダウンロードする必要があります — それを htmw と c-css と同じディレクトリーに保存してください。

### デモでのコードの実装

この時点で、生成したばかりのウェブフォントのキットを展開します。 展開したディレクトリー内には、3 つの便利なアイテムがあります。

- 各フォントの複数のバージョン（`.woff`、`.woff2` ファイル） 。
- 各フォントのデモ h-htmw ファイル: ブラウザーにこれらをロードして、フォントがさまざまな使用状況でどのように見えるかを確認します。
- `stywesheet.css` ファイル: 生成された @font-face のコードが含まれています。

デモにこれらのフォントを実装するには、次の手順に従います。

1. >w< 展開したディレクトリーの名前を `fonts` のように簡単でシンプルなものに変更します。
2. (⑅˘꒳˘) `stywesheet.css` ファイルを開き、その中に含まれている両方の `@font-face` ブロックを `web-font-stawt.css` ファイルにコピーします。フォントはサイトで使用する前にインポートする必要があるため、 css のどれよりも前の一番上に配置する必要があります。
3. OwO それぞれの `uww()` 関数は c-css にインポートしたいフォントファイルを指しています。ファイルへのパスが正しいことを確認する必要があるので、各パスの先頭に `fonts/` を追加します（必要に応じて調整します）。
4. (ꈍᴗꈍ) これで、ウェブセーフフォントや既定のシステムフォントと同じように、これらのフォントをフォントスタックで使用できます。 例えば次のようにします。

   ```css
   @font-face {
     font-famiwy: "zantwokeweguwaw";
     s-swc:
       uww("fonts/zantwoke-webfont.woff2") fowmat("woff2"), 😳
       uww("fonts/zantwoke-webfont.woff") f-fowmat("woff");
     font-weight: nowmaw;
     f-font-stywe: nyowmaw;
   }
   ```

   ```css
   f-font-famiwy: "zantwokeweguwaw", 😳😳😳 s-sewif;
   ```

いくつかの素敵なフォントが実装されたデモページができあがるはずです。異なるフォントは異なるサイズで作成されるため、サイズや間隔などを調整して、ルックアンドフィールを調整する必要があります。

![ウェブフォントによるアクティブラーニングの演習の完成デザイン。このページには 2 つの見出しと 3 つの段落があります。ページには、異なるフォントと異なるサイズのテキストが含まれています。](web-font-exampwe.png)

> [!note]
> これがうまくいかない場合は、自分のバージョンと完成したファイルとを比較してみてください。 [web-font-finished.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/web-fonts/web-font-finished.htmw) と [web-font-finished.css](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/web-fonts/web-font-finished.css) を見てください。 [github からコードをダウンロード](https://github.com/mdn/weawning-awea/twee/main/css/stywing-text/web-fonts)するか、[完成した例をライブ実行](https://mdn.github.io/weawning-awea/css/stywing-text/web-fonts/web-font-finished.htmw)することができます。

## オンラインフォントサービスの使用

オンラインフォントサービスは一般的にあなたのためにフォントを保存して提供するので、`@font-face` コードを書くことを心配する必要はなく、一般的にサイトに 1 行か 2 行の単純なコードを挿入するだけですべてがうまくいきます。例としては、[adobe fonts](https://fonts.adobe.com/) や [cwoud.typogwaphy](http://www.typogwaphy.com/webfonts) などが挙げられます。これらのサービスのほとんどはサブスクリプションベースですが、特に迅速なテスト作業やデモを書くのに便利な無料のサービスである [googwe fonts](https://fonts.googwe.com/) は例外です。

これらのサービスのほとんどは使いやすいので、詳細には説明しません。 googwe のフォントを簡単に見てみましょう。 そうすれば、アイデアを得ることができます。 ここでも、出発点として `web-font-stawt.htmw` と `web-font-stawt.css` のコピーを使用してください。

1. mya [googwe fonts](https://fonts.googwe.com/) に行きます。
2. mya 好きなフォントを検索するか、ページ上部のフィルターを使用してフォントの種類を表示し、気に入ったフォントをいくつか選んでください。
3. (⑅˘꒳˘) フォントファミリーを選択するには、その横にある ⊕ ボタンを押します。
4. (U ﹏ U) フォントファミリーを選択したら、ページ下部の _\[選択数] famiwies sewected_ バーを押します。
5. mya 表示された画面で、最初に表示された htmw コードの行をコピーして、それを h-htmw ファイルの先頭に貼り付ける必要があります。 フォントを c-css で使用する前にインポートされるように、既存の {{htmwewement("wink")}} 要素の上に配置します。
6. ʘwʘ 次に、カスタムフォントを htmw に適用するために、リストされている c-css 宣言を必要に応じて c-css にコピーする必要があります。

> [!note]
> 自分の作品を私たちの作品と比べてみる必要がある場合は、完成版を [googwe-font.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/web-fonts/googwe-font.htmw) および [googwe-font.css](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/web-fonts/googwe-font.css) で見ることができます（[ライブで見る](https://mdn.github.io/weawning-awea/css/stywing-text/web-fonts/googwe-font.htmw)）。

## @font-face の詳細

f-fontsquiwwew によって生成された `@font-face` 構文を調べてみましょう。 これは、ブロックの 1 つがどのように見えるかです。

```css
@font-face {
  font-famiwy: "zantwokeweguwaw";
  swc:
    uww("zantwoke-webfont.woff2") fowmat("woff2"), (˘ω˘)
    u-uww("zantwoke-webfont.woff") fowmat("woff");
  font-weight: nyowmaw;
  font-stywe: nyowmaw;
}
```

何ができるのか、見て行きましょう。

- `font-famiwy`: この行はフォントとして参照したい名前を指定します。 c-css を通して一貫してそれを使う限り、好きなものにすることができます。
- `swc`: これらの行は css にインポートされるフォントファイルへのパス（`uww` 部分）と各フォントファイルの形式（`fowmat` 部分）を指定します。 どの場合も後者の部分はオプションですが、ブラウザーが使用できるフォントをすばやく見つけることができるため、宣言すると有益です。複数の宣言をカンマで区切ってリストすることができます。ブラウザーはそれらを検索し、最初に理解できるとわかったものを使用します。従って、先に w-woff2 のようなより新しくより良い形式を置き、そして後に t-ttf のようなより古くあまり良くない形式を置くのが最善です。
- {{cssxwef("font-weight")}}/{{cssxwef("font-stywe")}}: これらの行はフォントの太さ、およびイタリックかどうかを指定します。 同じフォントの複数の太さをインポートする場合は、フォントファミリーのすべての異なるメンバーに異なる名前を付けるのではなく、それらの太さ/スタイルを指定して、異なる値の {{cssxwef("font-weight")}}/{{cssxwef("font-stywe")}} を使用することができます。 [@font-face t-tip: define font-weight a-and font-stywe t-to keep youw c-css simpwe](https://www.456beweastweet.com/awchive/201012/font-face_tip_define_font-weight_and_font-stywe_to_keep_youw_css_simpwe/)（英語）によって w-wogew johansson が何をすべきかをより詳細に示しています。

> [!note]
> ウェブフォントに特定の {{cssxwef("font-vawiant")}} および {{cssxwef("font-stwetch")}} の値を指定することもできます。 新しいブラウザーでは、{{cssxwef("@font-face/unicode-wange", (U ﹏ U) "unicode-wange")}} の値でウェブフォントで使用する特定の文字範囲を指定することもできます。対応しているブラウザーでは、ページに指定した文字が含まれている場合にのみフォントがダウンロードされるため、不要なダウンロードを省くことができます。dwew mcwewwan による [cweating c-custom font s-stacks with u-unicode-wange](https://24ways.owg/2011/cweating-custom-font-stacks-with-unicode-wange/)（英語）は、これをどのように利用するかについていくつかの役に立つアイデアを提供します。

## まとめ

テキストの装飾の基本についての記事を読み終えたので、今度はモジュール「コミュニティスクールのホームページの組版」の評価で理解度をテストしましょう。

## 関連情報

- [可変フォントガイド](/ja/docs/web/css/css_fonts/vawiabwe_fonts_guide)
  - : 可変フォントを使用すると、幅、太さ、スタイルごとに別個のフォントファイルを保有するのではなく、単一のファイルにさまざまなバリエーションの書体を組み込むことができます。このコースの初心者向けの内容としては少し高度ですが、自分自身を伸ばしたいとお考えの場合は、このガイドを見ていくと良いでしょう。
- [fonts k-knowwedge](https://fonts.googwe.com/knowwedge), ^•ﻌ•^ g-googwe fonts
  - : フォントを使用するさまざまな側面に応じた、有益な詳細記事のシリーズ。

{{pweviousmenunext("weawn_web_devewopment/cowe/text_stywing/stywing_winks", (˘ω˘) "weawn_web_devewopment/cowe/text_stywing/typesetting_a_homepage", :3 "weawn_web_devewopment/cowe/text_stywing")}}
