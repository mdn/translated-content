---
title: 一般的な HTML と CSS の問題への対処
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
original_slug: Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS
l10n:
  sourceCommit: 56fc816a9fb8e96a6b69cd19be03f62b582c06ae
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}

ここでは、HTML と CSS のコードで発生する可能性のある一般的なブラウザー間の問題、および問題の発生を防ぐため、または発生する問題を修正するために使用できるツールについて具体的に説明します。これには、コードのリンティング、CSS プレフィックスの処理、問題を追跡するためのブラウザーの開発者ツールの使用、ブラウザーにサポートを追加するための polyfill の使用、レスポンシブデザイン問題への取り組みなどが含まれます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、<a href="/ja/docs/Learn/JavaScript">JavaScript</a> 言語の主要部に通じていること。
        <a
          href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >ブラウザー横断テストの基本</a
        >について高水準の考えを持っていること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        一般的な HTML と CSS のブラウザー間の問題を診断し、それらを修正するための適切なツールとテクニックを使うことができるようにする。
      </td>
    </tr>
  </tbody>
</table>

## HTML と CSS の問題

一部の HTML と CSS の問題は、両方の言語がかなり単純で、コードがうまく作成され、効率的であり、ページ上に「機能の目的」を意味的に記述していることを確認するという意味で開発者がそれらについて真剣に考えていないという事実にあります。最悪の場合、JavaScript を使用してウェブページのコンテンツとスタイル全体を生成するため、ページにアクセスできなくなり、パフォーマンスが低下します（DOM 要素の生成にはコストがかかります）。他のケースでは、初期の機能がブラウザー間で一貫してサポートされていないため、一部の機能やスタイルが一部のユーザーには機能しないことがあります。
レスポンシブデザインの問題も一般的です。デスクトップブラウザーで見栄えの良いサイトはモバイル端末だとひどい経験を提供するかもしれません、内容が読むには小さすぎるか、高精細なアニメーションのせいで遅いでしょう。

HTML/CSS に起因するブラウザー間のエラーを減らす方法を見てみましょう。

## まず最初に：一般的な問題を解決する

[このシリーズの最初の記事](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction#テスト発見)では、まずブラウザー間の問題に集中する前に、デスクトップ/モバイルの最新ブラウザーでいくつかテストしてコードが正常に機能するか確認することをお勧めします。

[HTML のデバッグ](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)および [CSS のデバッグ](/ja/docs/Learn/CSS/Building_blocks/Debugging_CSS)の記事では、HTML/CSS のデバッグに関する基本的なガイダンスをいくつか提供しました。基本に慣れていない場合は、先に進む前に必ずこれらの記事をよく読んでください。

基本的には、HTML と CSS のコードが整形式で、構文エラーがないかどうかをチェックすることです。

> [!NOTE]
> CSS と HTML に関する一般的な問題の 1 つは、異なる CSS ルールが互いに矛盾が生じるときに発生します。 サードパーティのコードを使用している場合、これは特に問題になる可能性があります。たとえば、CSS フレームワークを使用して、それが使用しているクラス名の 1 つが別の目的ですでに使用されているものと衝突しているとします。 または、ある種のサードパーティ API (たとえば広告バナーの生成) によって生成された HTML に、すでに別の目的で使用されているクラス名または ID が含まれていることもあります。これが起こらないようにするには、最初に使用しているツールを調べて、それらを中心にコードを設計する必要があります。また、「名前空間付き」 CSS も価値があります。ウィジェットがある場合は、それが明確なクラスを持っていることを確認してから、このクラスでウィジェット内の要素を選択するセレクターを起動します。そうすれば競合は起こりにくくなります。例えば、 `.audio-player ul a` です。

### 検証

HTML の検証では、すべてのタグが適切に閉じられてネストされていること、DOCTYPE を使用していること、およびタグを正しい目的で使用していることを確認します。良い戦略はコードを定期的に検証することです。これを可能にするサービスの 1 つに、W3C [マークアップ検証サービス](https://validator.w3.org/)があります。これを使用すると、コードを指定してエラーのリストを返すことができます。

![The HTML validator homepage](validator.png)

CSS にも同様の話があります — プロパティ名が正しくつづられていること、プロパティ値が正しくつづられていて、それらが使われているプロパティに対して有効であること、中括弧を見逃していないということです。この目的のために、W3C には [CSS Validator](https://jigsaw.w3.org/css-validator/) も用意されています。

### リンター

取りうるもう一つの良い選択肢は、エラーを指摘するだけでなく、CSS の悪いプラクティスについての警告、および他の点にもフラグを立てることができる、いわゆるリンターアプリケーションです。リンターは一般的に、エラー/警告の報告においてより厳格またはより緩やかになるようにカスタマイズできます。

オンラインリンターアプリケーションは多数ありますが、そのうち最良のものはおそらく [Dirty Markup](https://www.dirtymarkup.com/) (HTML、CSS、JavaScript)、および [CSS Lint](http://csslint.net/) (CSS のみ) です。これらはコードをウィンドウに貼り付けることができ、十字でどんなエラーにでもフラグを立てるでしょう、そしてそれは問題が何であるかを知らせるエラーメッセージを得るためにそれから隠されることができます。Dirty Markup では、_Clean_ ボタンを使用してマークアップを修正することもできます。

![Dirty Markupアプリケーションで、以下の不正なHTMLマークアップに対して「引用符で囲まれていない属性に予期しない文字が含まれています」というメッセージが、 <div id=combinators"> という正確でないマークアップに表示されています。](dirty-markup.png)

しかし、コードをコピーしてウェブページに貼り付け、その有効性を何度も調べなければならないのはとても不便です。本当に欲しいのは、最小限の手間で標準的なワークフローに適合するリンターです。

多くのコードエディターにはリンタープラグインがあります。例えば、以下をご覧ください。

- [SublimeLinter](https://www.sublimelinter.com/) (Sublime Text)
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VSCode linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### ブラウザーの開発者ツール

ほとんどのブラウザーに使用されている開発者ツールは、主に CSS のエラーを発見するための有益なツールも備えています。

> [!NOTE]
> ブラウザーが不正な形式のマークアップを自動的に修正しようとするため、 HTML エラーは開発ツールではそれほど簡単には表示されない傾向があります。 W3C バリデーターは HTML エラーを取得するための最良の方法です — 上の[検証](#検証)をご覧ください。

例えば、Firefox の CSSインスペクターでは、適用されていない CSS 宣言が警告の三角形とともに反転して表示されます。警告の三角形にカーソルを合わせると、説明的なエラーメッセージが提供されます。

![開発者ツールは不正な CSS を除外し、ホバー可能な警告アイコンを追加しています。](css-message-devtools.png)

他にもブラウザー開発ツールにも同様の機能があります。

## よくあるブラウザー間の問題

それでは、よくある HTML と CSS のブラウザー間の問題について見ていきましょう。主に見ていくのは、現行の機能に対応していないことと、レイアウトの問題です。

### 現行機能に対応していないブラウザー

これは、特に古いブラウザーの対応が必要な場合や、一部のブラウザーでは実装されているものの、まだすべてに実装されていない機能を使用している場合によくある問題です。一般に、ほとんどの主要な HTML と CSS の機能（基本的な HTML 要素、CSS の基本色、テキストのスタイル設定など）は、対応したいすべてのブラウザーでうまく動作します。新しい HTML、CSS、API を使用し始めたときには、さらに多くの問題が発覚します。 MDN では、文書化されている各機能について、ブラウザー互換性データを表示しています。例えば、[`:has()` 擬似クラスのブラウザーの互換性表](/ja/docs/Web/CSS/:has#ブラウザーの互換性)を参照してください。

使用する技術のうち、広く対応していないもののリストが載っていた場合は、それらがどのブラウザーのどのような技術に対応しているのか、また、関連する技術にはどのような有益なものがあるのかを調べておくのはよい考えです。下記の[ヘルプを探す](#ヘルプを探す)を参照してください。

### HTML のフォールバック動作

問題によっては、 HTML/CSS が自然に動作する方法を利用するだけで解決できることもあります。

認識されない HTML 要素は、ブラウザーに無名インライン要素（意味づけのないインライン要素、{{htmlelement("span")}}要素に似ています）として扱われます。例えば、それらを名前付きで参照し、CSS でスタイル設定することはできます。望むようにそれらが動作していることを確認する必要があるだけです。必要に応じて `display` プロパティを `inline` 以外に設定するなど、他の要素と同じようにスタイル設定してください。

HTML の [`<video>`](/ja/docs/Web/HTML/Element/video), [`<audio>`](/ja/docs/Web/HTML/Element/audio), [`<picture>`](/ja/docs/Web/HTML/Element/picture), [`<object>`](/ja/docs/Web/HTML/Element/object), [`<canvas>`](/ja/docs/Web/HTML/Element/canvas) など（他にもあります）のようなより複雑な要素は、リンクされているリソースに対応していない場合に代替手段を追加するための自然なメカニズムを持っています。開始タグと閉じられたタグの間に代替コンテンツを追加することができ、対応していないブラウザーでは、効果的に外側の要素を無視して内側のコンテンツを実行します。

例えば次のようなものです。

```html
<video id="video" controls preload="metadata" poster="img/poster.jpg">
  <source
    src="video/tears-of-steel-battle-clip-medium.webm"
    type="video/webm" />
  <!-- Offer download -->
  <p>
    このブラウザーは WebM 動画に対応していません。こちらが
    <a href="video/tears-of-steel-battle-clip-medium.mp4"
      >動画を見る直接リンクです</a
    >
  </p>
</video>
```

この例では、HTML 動画プレイヤーでも動作しない場合に動画をダウンロードできる単純リンクを記載しているので、少なくともユーザーは動画にアクセスすることができます。

もう一つの例はフォーム要素です。新しい [`<input>`](/ja/docs/Web/HTML/Element/input) 型が、時間、日付、色、数字など、フォームに固有の情報を入力するために導入されたとき、ブラウザーがその新しい機能に対応していなかった場合、ブラウザーは `type="text"` の既定を使用しました。 入力型が追加されましたが、これはとても有益なものです。特にモバイルプラットフォームでは、データを入力するのに苦労しない方法を提供することが、使い勝手としてとても重要です。プラットフォームは、日付入力用のカレンダーウィジェットのように、入力型によって異なる UI ウィジェットを提供します。ブラウザーが入力型に対応していなくても、ユーザーは必要なデータを入力することができます。

次の例は日付と時刻の入力の例です。

```html
<form>
  <div>
    <label for="date">日付を入力:</label>
    <input id="date" type="date" />
  </div>
  <div>
    <label for="time">時刻を入力:</label>
    <input id="time" type="time" />
  </div>
</form>
```

このコードの出力は以下の通りです。

{{EmbedGHLiveSample("learning-area/tools-testing/cross-browser-testing/html-css/forms-test", '100%', 150)}}

> [!NOTE]
> GitHub で [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) として実行することもできます（[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)も参照してください）。

例を表示すると、データを入力しようとして、 UI 機能が動作しているのがわかります。動的キーボードを備えた端末では、型専用のキーパッドが表示されます。対応していないブラウザーでは、入力は通常のテキスト入力に既定され、ユーザーは正しい情報を入力することができます。

### CSS のフォールバック動作

CSS は間違いなく HTML よりも代替性に優れています。ブラウザーが理解できない宣言やルールに遭遇した場合、それを適用したりエラーを発生させたりすることなく、完全にスキップします。このようなミスが本番コードに紛れ込んでしまった場合、あなたやユーザーにとってはフラストレーションが溜まるかもしれませんが、少なくとも 1 つのエラーのためにサイト全体がクラッシュすることはありませんし、これまでエラーとされていたものを賢く使用することができます。

例えば、 CSS でスタイル設定された単純なボックスを見てみましょう。このボックスには、様々な CSS 機能によって指定されたスタイル設定があります。

![角丸、インセットシャドウ、ドロップシャドウの赤い錠剤型ボタン](blingy-button.png)

> [!NOTE]
> GitHub で [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) として実行することもできます（[ソースコード](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)も参照してください）。

ボタンにはスタイル設定をする宣言がいくつもありますが、最も興味深いのは以下の 2 つです。

```css
button {
  /* … */

  background-color: #ff0000;
  background-color: rgb(255 0 0 / 100%);
  box-shadow:
    inset 1px 1px 3px rgb(255 255 255 / 40%),
    inset -1px -1px 3px rgb(0 0 0 / 40%);
}

button:hover {
  background-color: rgb(255 0 0 / 50%);
}

button:active {
  box-shadow:
    inset 1px 1px 3px rgb(0 0 0 / 40%),
    inset -1px -1px 3px rgb(255 255 255 / 40%);
}
```

ここでは、 [RGB](/ja/docs/Web/CSS/color_value/rgb) で {{cssxref("background-color")}} を提供し、ボタンが操作可能であることをユーザーに示唆するために、ホバー時に不透明度を変更し、半透明の影 {{cssxref("box-shadow")}} でボタンに質感と奥行きを与えています。これで完全に対応しているとはいえ、 RGB 色とボックスシャドウはずっと存在していたわけではありません。 IE9 から始まったものです。 RGB 色に対応していないブラウザーは宣言を無視します。つまり、古いブラウザーでは背景がまったく表示されないので、テキストが読めなくなり、まったく意味がありません！

![ほぼ白い背景に白い文字の見づらい錠剤型ボタン](unreadable-button.png)

これを解決するために、 2 つ目の `background-color` 宣言を追加しました。これは 16 進数の色を指定します。これは実に古いブラウザーに対応しており、現行の輝かしい機能が動作しない場合の予備として機能します。このページを訪れたブラウザーは、まず最初の `background-color` 値を適用します。 2 つ目の `background-color` 宣言まで取得すると、 RGB カラーに対応している場合は、最初の値をこの値で上書きします。そうでない場合は、宣言全体を無視して移動します。

> **メモ:** [メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)、[`@font-face`](/ja/docs/Web/CSS/@font-face)、[`@supports`](/ja/docs/Web/CSS/@supports) ブロックのような他の CSS 機能についても同様で、対応していない場合、ブラウザーはそれらを無視します。

### セレクターの対応

もちろん、正しい[セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)を使用してスタイル設定したい要素を選択しなければ、 CSS の特性はまったく適用されません。

カンマ区切りのセレクターリストでは、セレクターの書き方を間違えただけで、どの要素にも一致しなくなることがあります。しかし、セレクターが不正な場合は、スタイルブロック全体とともに、セレクターの**リスト全体**が無視されます。このため、 `:-moz-` 接頭辞のついた擬似クラスや擬似要素は、[寛容なセレクターリスト](/ja/docs/Web/CSS/Selector_list#forgiving_selector_list) の中で、 `:where(::-moz-thumb)` のようにのみ記載してください。 Firefox 以外のすべてのウェブブラウザーはブロック全体を無視するので、 [`:is()`](/ja/docs/Web/CSS/:is) または [`:where()`](/ja/docs/Web/CSS/:where) の寛容なセレクターリストの外側のカンマ区切りのセレクターグループ内に、接頭辞 `:-moz-` が付いた擬似クラスまたは擬似要素を記載しないでください。 `is()` と `:where()` は、他にも [`:has()`](/ja/docs/Web/CSS/:has) や [`:not()`](/ja/docs/Web/CSS/:not) などのセレクターリストの引数として渡すことができることに注意してください。

ブラウザー開発ツールを使用してスタイルを設定しようとしている要素を検査し、 DOM インスペクターが提供する傾向がある DOM ツリーのパンくずトレイルを見て、あなたのセレクターがそれと比較して意味があるかどうかを確認することが有益であることがわかります。

例えば、Firefox の開発者ツールでは、 DOM インスペクターの下部にこのような出力が得られたとします。

![要素のパンくずは html > body > form > div.form > input#date です。](dom-breadcrumb-trail.png)

例えばこのセレクターを使用しようとした場合、思い通りに入力要素を選択できないことがわかるでしょう。

```css
form > #date
```

（`date` フォーム入力は `<form>` の直接の子ではありません。子セレクターではなく、一般的な子孫セレクターを使用した方がよいでしょう。）

### CSS 接頭辞の扱い

他の問題点として、 CSS 接頭辞があります。接頭辞は元々、ブラウザーベンダーが CSS （または JavaScript）の機能を実験的な状態で自分自身で実装できるようにするために使用することができる仕組みで、他のブラウザーの実装や接頭辞のない最終的な実装と競合することなく、正しく実装することができます。

例えば、 Firefox は `-moz-` を、 Chrome/Edge/Opera/Safari は `-webkit-` を使用しています。古いコードで遭遇する可能性があるその他の接頭辞、例えばインターネットエクスプローラーと Edge の初期バージョンで使用されていた `-ms-` や、 Opera の元バージョンで使用されていた `-o` などは、除去しても安全です。

接頭辞機能は、本番のウェブサイトで使用することは想定されていません。警告なしに変更または削除される可能性があり、それを要求される古いバージョンのブラウザーではパフォーマンスの問題を引き起こす可能性があり、ブラウザー間の問題を発生させることもあります。この例は具体的な問題で、例えば開発者がプロパティの `-webkit-` バージョンだけを使用することにした場合、他のブラウザーではサイトが動作しないことを意味します。このようなことが実際に起こったため、他にもいくつかのブラウザーが `-webkit-` 接頭辞付きバージョンの CSS プロパティを実装しました。ブラウザーは今でもいくつかの接頭辞付きプロパティ名、プロパティ値、擬似クラスに対応していますが、これで実験的な機能はフラグの後ろに置かれ、ウェブ開発者が開発中にテストできるようになりました。

接頭辞を使用する場合は、それが必要であること、つまりそのプロパティがいくつか残っている接頭辞付きの機能の一つであることを確認してください。どのブラウザーが接頭辞を要求しているかは、 MDN のリファレンスページや [caniuse.com](https://caniuse.com/) のようなサイトで見ていくことができます。不明な場合は、ブラウザーで直接テストして調べることもできます。接頭辞付きスタイル宣言の後に接頭辞なしの標準バージョンを記載してください。対応していない場合は無視され、対応している場合は使用します。

```css
.masked {
  -webkit-mask-image: url(MDN.svg);
  mask-image: url(MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

この単純な例を試してみてください。

1. このページ、または目立つ見出しや他のブロックレベルの要素を有する他のサイトを使用してください。
2. 問題の要素を右/Cmd + クリックし、要素の検査/調査（またはブラウザーでの同様のオプション）を選びます。これでブラウザーに開発ツールが開き、 DOM インスペクターに要素がハイライトされるはずです。
3. その要素を選択するために使用することができます。例えば、この例では MDN でこのページには `mdn-docs-logo` という ID のロゴがあります。
4. 例えばこの要素への参照を変数に格納します。

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. これで、その要素で関心のある CSS プロパティに新しい値を設定することができます。これを行うには、要素の [style](/ja/docs/Web/API/HTMLElement/style) プロパティを使用することができます。例えば、 JavaScript コンソールでこの例を入力してみてください。

   ```js
   test.style.transform = "rotate(90deg)";
   ```

2 つ目のドットの後にプロパティ名の表現を入力し始めると（JavaScript では、 CSS のプロパティ名は{{Glossary("kebab_case", "ケバブケース")}}ではなく、{{Glossary("camel_case", "小文字のキャメルケース")}}で記述されることに注意してください）、 JavaScript コンソールは、ブラウザーに存在し、これまでに書いたものと一致するプロパティの名前を自動補完し始めるはずです。これは、そのブラウザーで実装されているプロパティを探すのに有益です。

現行の機能を含める必要がある場合は、 [`@supports`](/ja/docs/Web/CSS/@supports) を使用して機能対応テストをしてください。これによりネイティブの機能検出テストを実装することができ、接頭辞や新しい機能を `@supports` ブロックの中に入れることができます。

### レスポンシブデザインの問題

レスポンシブデザインとは、例えば画面の幅や向き（縦長か横長か）、解像度が異なるなど、異なる端末の形態に応じて変化するウェブレイアウトを作成することです。例えばデスクトップ用のレイアウトはモバイル端末で見るとひどいことになるので、[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)を使って適切なモバイル用レイアウトを提供し、[ビューポート](/ja/docs/Web/HTML/Viewport_meta_tag)を使ってそれが正しく適用されるようにする必要があります。[レスポンシブデザインのガイド](/ja/docs/Learn/CSS/CSS_layout/Responsive_Design)にそのような実践の詳細な説明があります。

解像度も大きな課題です。例えば、モバイル端末は大きな重い画像を必要とする可能性がデスクトップコンピューターよりも低く、インターネット接続が遅く、場合によっては帯域幅の無駄が問題になるような高価なデータプランを利用している可能性もあります。さらに、端末によって解像度の範囲があるため、小さな画像がピクセル化して現れる意味もあります。このような問題を作業するためのテクニックは、[メディアクエリー](/ja/docs/Learn/CSS/CSS_layout/Responsive_Design#メディアクエリー)からより複雑な[レスポンシブ画像テクニック](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#解像度の切り替え_様々な寸法)、 {{HTMLElement('picture')}} および {{HTMLElement('img')}} 要素の [`srcset`](/ja/docs/Web/HTML/Element/img#srcset) や [`sizes`](/ja/docs/Web/HTML/Element/img#sizes) 属性を含め、たくさんあります。

## ヘルプを探す

HTML と CSS で遭遇する課題は他にもたくさんあり、オンラインで答えを探す方法の知識は非常に貴重です。

サポート情報の最良の情報源としては、[Mozilla Developer Network]（今いる場所です）、[stackoverflow.com](https://stackoverflow.com/)、[caniuse.com](https://caniuse.com/) などがあります。

Mozilla Developer Network (MDN) を使用するために、ほとんどの人は検索エンジンで情報を探そうとしている技術に "MDN" という単語を加えて検索します（例えば "MDN HTML video"）。MDN にはいくつかの有益な種類のコンテンツが収められています。

- クライアント側ウェブ技術のブラウザーの対応情報を参照する素材、例えば [\<video> リファレンスページ](/ja/docs/Web/HTML/Element/video)など。
- その他の補助的なリファレンス素材、例えば[ウェブ上のメディア型と形式のガイド](/ja/docs/Web/Media/Formats)など。
- 特定の問題を解決する有益なチュートリアル、例えば[ブラウザー横断の動画プレーヤーの作成](/ja/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player)。

[caniuse.com](https://caniuse.com/) は、いくつかの有益な外部リソースリンクとともに、対応する情報を提供しています。例えば、 <https://caniuse.com/#search=video> をご覧ください）テキストボックスに検索したい機能を入力してください）。

[stackoverflow.com](https://stackoverflow.com/) (SO) は、質問をしたり、開発者仲間に解決策を共有してもらったり、前回の投稿を調べたり、他の開発者を助けたりすることができるフォーラムサイトです。新しい質問を投稿する前に、あなたの質問に対する答えがすでにあるかどうか見ていくことをお勧めします。例えば、SOで "disabling autofocus on HTML dialog" と検索したところ、すかさず [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) がヒットしました。

それとは別に、お好きな検索エンジンで問題の答えを検索してみてください。具体的なエラーメッセージを検索すると有益なことが多いです。他にもあなたと同じ問題を抱えている開発者がいる可能性が高いからです。

## まとめ

これで、ウェブ開発者が直面する主要なブラウザー間の HTML と CSS の問題の種類、およびそれらを修正する方法について習熟したことでしょう。

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}
