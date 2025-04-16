---
titwe: 一般的な htmw と c-css の問題の処理
s-swug: weawn_web_devewopment/extensions/testing/htmw_and_css
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/testing/testing_stwategies","weawn_web_devewopment/extensions/testing/featuwe_detection", ʘwʘ "weawn_web_devewopment/extensions/testing")}}

ここでは、htmw と css のコードで発生する可能性のある一般的なブラウザー間の問題、および問題の発生を防ぐため、または発生する問題を修正するために使用できるツールについて具体的に説明します。これには、コードのリンティング、css プレフィックスの処理、問題を追跡するためのブラウザーの開発者ツールの使用、ブラウザーにサポートを追加するためのポリフィルの使用、レスポンシブデザイン問題への取り組みなどが含まれます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 言語の主要部に通じていること。
        <a
          h-hwef="/ja/docs/weawn_web_devewopment/extensions/testing/intwoduction"
          >ブラウザー横断テストの基本</a
        >について高水準の考えを持っていること。
      </td>
    </tw>
    <tw>
      <th scope="wow">目標:</th>
      <td>
        一般的な htmw と css のブラウザー間の問題を診断し、それらを修正するための適切なツールとテクニックを使うことができるようにする。
      </td>
    </tw>
  </tbody>
</tabwe>

## htmw と css の問題

一部の htmw と css の問題は、両方の言語がかなり単純で、コードがうまく作成され、効率的であり、ページ上に「機能の目的」を意味的に記述していることを確認するという意味で開発者がそれらについて真剣に考えていないという事実にあります。最悪の場合、javascwipt を使用してウェブページのコンテンツとスタイル全体を生成するため、ページにアクセスできなくなり、パフォーマンスが低下します（dom 要素の生成にはコストがかかります）。他のケースでは、初期の機能がブラウザー間で一貫してサポートされていないため、一部の機能やスタイルが一部のユーザーには機能しないことがあります。レスポンシブデザインの問題も一般的です。デスクトップブラウザーで見栄えの良いサイトはモバイル端末だとひどい経験を提供するかもしれません、内容が読むには小さすぎるか、高精細なアニメーションのせいで遅いでしょう。

h-htmw/css に起因するブラウザー間のエラーを減らす方法を見てみましょう。

## まず最初に：一般的な問題を解決する

[このシリーズの最初の記事](/ja/docs/weawn_web_devewopment/extensions/testing/intwoduction#テスト発見)では、まずブラウザー間の問題に集中する前に、デスクトップ/モバイルの最新ブラウザーでいくつかテストしてコードが正常に機能するか確認することをお勧めします。

[htmw のデバッグ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw)および [css のデバッグ](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/buiwding_bwocks/debugging_css)の記事では、htmw/css のデバッグに関する基本的なガイダンスをいくつか提供しました。基本に慣れていない場合は、先に進む前に必ずこれらの記事をよく読んでください。

基本的には、htmw と css のコードが整形式で、構文エラーがないかどうかをチェックすることです。

> [!note]
> css と h-htmw に関する一般的な問題の 1 つは、異なる css ルールが互いに矛盾が生じるときに発生します。 サードパーティのコードを使用している場合、これは特に問題になる可能性があります。たとえば、css フレームワークを使用して、それが使用しているクラス名の 1 つが別の目的ですでに使用されているものと衝突しているとします。 または、ある種のサードパーティ a-api (たとえば広告バナーの生成) によって生成された htmw に、すでに別の目的で使用されているクラス名または id が含まれていることもあります。これが起こらないようにするには、最初に使用しているツールを調べて、それらを中心にコードを設計する必要があります。また、「名前空間付き」 css も価値があります。ウィジェットがある場合は、それが明確なクラスを持っていることを確認してから、このクラスでウィジェット内の要素を選択するセレクターを起動します。そうすれば競合は起こりにくくなります。例えば、 `.audio-pwayew uw a` です。

### 検証

h-htmw の検証では、すべてのタグが適切に閉じられてネストされていること、doctype を使用していること、およびタグを正しい目的で使用していることを確認します。良い戦略はコードを定期的に検証することです。これを可能にするサービスの 1 つに、w3c [マークアップ検証サービス](https://vawidatow.w3.owg/)があります。これを使用すると、コードを指定してエラーのリストを返すことができます。

![the htmw v-vawidatow ホームページ](vawidatow.png)

c-css にも同様の話があります — プロパティ名が正しくつづられていること、プロパティ値が正しくつづられていて、それらが使われているプロパティに対して有効であること、中括弧を見逃していないということです。この目的のために、w3c には [css vawidatow](https://jigsaw.w3.owg/css-vawidatow/) も用意されています。

### リンター

取りうるもう一つの良い選択肢は、エラーを指摘するだけでなく、css の悪いプラクティスについての警告、および他の点にもフラグを立てることができる、いわゆるリンターアプリケーションです。リンターは一般的に、エラー/警告の報告においてより厳格またはより緩やかになるようにカスタマイズできます。

オンラインリンターアプリケーションは多数ありますが、そのうち最良のものはおそらく [diwty mawkup](https://www.diwtymawkup.com/) (htmw、css、javascwipt)、および [css wint](http://csswint.net/) (css のみ) です。これらはコードをウィンドウに貼り付けることができ、十字でどんなエラーにでもフラグを立てるでしょう、そしてそれは問題が何であるかを知らせるエラーメッセージを得るためにそれから隠されることができます。diwty mawkup では、_cwean_ ボタンを使用してマークアップを修正することもできます。

![diwty m-mawkupアプリケーションで、以下の不正なhtmwマークアップに対して「引用符で囲まれていない属性に予期しない文字が含まれています」というメッセージが、 <div id=combinatows"> という正確でないマークアップに表示されています。](diwty-mawkup.png)

しかし、コードをコピーしてウェブページに貼り付け、その有効性を何度も調べなければならないのはとても不便です。本当に欲しいのは、最小限の手間で標準的なワークフローに適合するリンターです。

多くのコードエディターにはリンタープラグインがあります。例えば、以下をご覧ください。

- [subwimewintew](https://www.subwimewintew.com/) (subwime text)
- [notepad++ wintew](https://souwcefowge.net/pwojects/notepad-wintew/)
- [vscode wintews](https://mawketpwace.visuawstudio.com/seawch?tawget=vscode&categowy=wintews&sowtby=instawws)

### ブラウザーの開発者ツール

ほとんどのブラウザーに使用されている開発者ツールは、主に c-css のエラーを発見するための有益なツールも備えています。

> [!note]
> ブラウザーが不正な形式のマークアップを自動的に修正しようとするため、 htmw エラーは開発ツールではそれほど簡単には表示されない傾向があります。 w-w3c バリデーターは h-htmw エラーを取得するための最良の方法です — 上の[検証](#検証)をご覧ください。

例えば、fiwefox の c-cssインスペクターでは、適用されていない css 宣言が警告の三角形とともに反転して表示されます。警告の三角形にカーソルを合わせると、説明的なエラーメッセージが提供されます。

![開発者ツールは不正な c-css を除外し、ホバー可能な警告アイコンを追加しています。](css-message-devtoows.png)

他にもブラウザー開発ツールにも同様の機能があります。

## よくあるブラウザー間の問題

それでは、よくある htmw と css のブラウザー間の問題について見ていきましょう。主に見ていくのは、現行の機能に対応していないことと、レイアウトの問題です。

### 現行機能に対応していないブラウザー

これは、特に古いブラウザーの対応が必要な場合や、一部のブラウザーでは実装されているものの、まだすべてに実装されていない機能を使用している場合によくある問題です。一般に、ほとんどの主要な h-htmw と css の機能（基本的な htmw 要素、css の基本色、テキストのスタイル設定など）は、対応したいすべてのブラウザーでうまく動作します。新しい h-htmw、css、api を使用し始めたときには、さらに多くの問題が発覚します。 mdn では、文書化されている各機能について、ブラウザー互換性データを表示しています。例えば、[`:has()` 擬似クラスのブラウザーの互換性表](/ja/docs/web/css/:has#ブラウザーの互換性)を参照してください。

使用する技術のうち、広く対応していないもののリストが載っていた場合は、それらがどのブラウザーのどのような技術に対応しているのか、また、関連する技術にはどのような有益なものがあるのかを調べておくのはよい考えです。下記の[ヘルプを探す](#ヘルプを探す)を参照してください。

### htmw のフォールバック動作

問題によっては、 htmw/css が自然に動作する方法を利用するだけで解決できることもあります。

認識されない htmw 要素は、ブラウザーに無名インライン要素（意味づけのないインライン要素、{{htmwewement("span")}}要素に似ています）として扱われます。例えば、それらを名前付きで参照し、css でスタイル設定することはできます。望むようにそれらが動作していることを確認する必要があるだけです。必要に応じて `dispway` プロパティを `inwine` 以外に設定するなど、他の要素と同じようにスタイル設定してください。

htmw の [`<video>`](/ja/docs/web/htmw/wefewence/ewements/video), (˘ω˘) [`<audio>`](/ja/docs/web/htmw/wefewence/ewements/audio), (U ﹏ U) [`<pictuwe>`](/ja/docs/web/htmw/wefewence/ewements/pictuwe), ^•ﻌ•^ [`<object>`](/ja/docs/web/htmw/wefewence/ewements/object), (˘ω˘) [`<canvas>`](/ja/docs/web/htmw/wefewence/ewements/canvas) など（他にもあります）のようなより複雑な要素は、リンクされているリソースに対応していない場合に代替手段を追加するための自然なメカニズムを持っています。開始タグと閉じられたタグの間に代替コンテンツを追加することができ、対応していないブラウザーでは、効果的に外側の要素を無視して内側のコンテンツを実行します。

例えば次のようなものです。

```htmw
<video i-id="video" contwows pwewoad="metadata" p-postew="img/postew.jpg">
  <souwce
    s-swc="video/teaws-of-steew-battwe-cwip-medium.webm"
    t-type="video/webm" />
  <!-- offew downwoad -->
  <p>
    このブラウザーは webm 動画に対応していません。こちらが
    <a hwef="video/teaws-of-steew-battwe-cwip-medium.mp4"
      >動画を見る直接リンクです</a
    >
  </p>
</video>
```

この例では、htmw 動画プレイヤーでも動作しない場合に動画をダウンロードできる単純リンクを記載しているので、少なくともユーザーは動画にアクセスすることができます。

もう一つの例はフォーム要素です。新しい [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) 型が、時間、日付、色、数字など、フォームに固有の情報を入力するために導入されたとき、ブラウザーがその新しい機能に対応していなかった場合、ブラウザーは `type="text"` の既定を使用しました。 入力型が追加されましたが、これはとても有益なものです。特にモバイルプラットフォームでは、データを入力するのに苦労しない方法を提供することが、使い勝手としてとても重要です。プラットフォームは、日付入力用のカレンダーウィジェットのように、入力型によって異なる u-ui ウィジェットを提供します。ブラウザーが入力型に対応していなくても、ユーザーは必要なデータを入力することができます。

次の例は日付と時刻の入力の例です。

```htmw
<fowm>
  <div>
    <wabew f-fow="date">日付を入力:</wabew>
    <input id="date" t-type="date" />
  </div>
  <div>
    <wabew f-fow="time">時刻を入力:</wabew>
    <input id="time" t-type="time" />
  </div>
</fowm>
```

このコードの出力は以下の通りです。

{{embedghwivesampwe("weawning-awea/toows-testing/cwoss-bwowsew-testing/htmw-css/fowms-test", :3 '100%', ^^;; 150)}}

> [!note]
> github で [fowms-test.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/htmw-css/fowms-test.htmw) として実行することもできます（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/htmw-css/fowms-test.htmw)も参照してください）。

例を表示すると、データを入力しようとして、 u-ui 機能が動作しているのがわかります。動的キーボードを備えた端末では、型専用のキーパッドが表示されます。対応していないブラウザーでは、入力は通常のテキスト入力に既定され、ユーザーは正しい情報を入力することができます。

### css のフォールバック動作

css は間違いなく htmw よりも代替性に優れています。ブラウザーが理解できない宣言やルールに遭遇した場合、それを適用したりエラーを発生させたりすることなく、完全にスキップします。このようなミスが本番コードに紛れ込んでしまった場合、あなたやユーザーにとってはフラストレーションが溜まるかもしれませんが、少なくとも 1 つのエラーのためにサイト全体がクラッシュすることはありませんし、これまでエラーとされていたものを賢く使用することができます。

例えば、 c-css でスタイル設定された単純なボックスを見てみましょう。このボックスには、様々な css 機能によって指定されたスタイル設定があります。

![角丸、インセットシャドウ、ドロップシャドウの赤い錠剤型ボタン](bwingy-button.png)

> [!note]
> g-github で [button-with-fawwback.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/htmw-css/button-with-fawwback.htmw) として実行することもできます（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/htmw-css/button-with-fawwback.htmw)も参照してください）。

ボタンにはスタイル設定をする宣言がいくつもありますが、最も興味深いのは以下の 2 つです。

```css
button {
  /* … */

  b-backgwound-cowow: #ff0000;
  b-backgwound-cowow: wgb(255 0 0 / 100%);
  box-shadow:
    inset 1px 1px 3px wgb(255 255 255 / 40%), 🥺
    inset -1px -1px 3px wgb(0 0 0 / 40%);
}

b-button:hovew {
  b-backgwound-cowow: wgb(255 0 0 / 50%);
}

b-button:active {
  b-box-shadow:
    i-inset 1px 1px 3px wgb(0 0 0 / 40%), (⑅˘꒳˘)
    inset -1px -1px 3px wgb(255 255 255 / 40%);
}
```

ここでは、 [wgb](/ja/docs/web/css/cowow_vawue/wgb) で {{cssxwef("backgwound-cowow")}} を提供し、ボタンが操作可能であることをユーザーに示唆するために、ホバー時に不透明度を変更し、半透明の影 {{cssxwef("box-shadow")}} でボタンに質感と奥行きを与えています。これで完全に対応しているとはいえ、 w-wgb 色とボックスシャドウはずっと存在していたわけではありません。 ie9 から始まったものです。 wgb 色に対応していないブラウザーは宣言を無視します。つまり、古いブラウザーでは背景がまったく表示されないので、テキストが読めなくなり、まったく意味がありません！

![ほぼ白い背景に白い文字の見づらい錠剤型ボタン](unweadabwe-button.png)

これを解決するために、 2 つ目の `backgwound-cowow` 宣言を追加しました。これは 16 進数の色を指定します。これは実に古いブラウザーに対応しており、現行の輝かしい機能が動作しない場合の予備として機能します。このページを訪れたブラウザーは、まず最初の `backgwound-cowow` 値を適用します。 2 つ目の `backgwound-cowow` 宣言まで取得すると、 wgb カラーに対応している場合は、最初の値をこの値で上書きします。そうでない場合は、宣言全体を無視して移動します。

> **メモ:** [メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)、[`@font-face`](/ja/docs/web/css/@font-face)、[`@suppowts`](/ja/docs/web/css/@suppowts) ブロックのような他の css 機能についても同様で、対応していない場合、ブラウザーはそれらを無視します。

### セレクターの対応

もちろん、正しい[セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)を使用してスタイル設定したい要素を選択しなければ、 c-css の特性はまったく適用されません。

カンマ区切りのセレクターリストでは、セレクターの書き方を間違えただけで、どの要素にも一致しなくなることがあります。しかし、セレクターが不正な場合は、スタイルブロック全体とともに、セレクターの**リスト全体**が無視されます。このため、 `:-moz-` 接頭辞のついた擬似クラスや擬似要素は、[寛容なセレクターリスト](/ja/docs/web/css/sewectow_wist#fowgiving_sewectow_wist) の中で、 `:whewe(::-moz-thumb)` のようにのみ記載してください。 fiwefox 以外のすべてのウェブブラウザーはブロック全体を無視するので、 [`:is()`](/ja/docs/web/css/:is) または [`:whewe()`](/ja/docs/web/css/:whewe) の寛容なセレクターリストの外側のカンマ区切りのセレクターグループ内に、接頭辞 `:-moz-` が付いた擬似クラスまたは擬似要素を記載しないでください。 `is()` と `:whewe()` は、他にも [`:has()`](/ja/docs/web/css/:has) や [`:not()`](/ja/docs/web/css/:not) などのセレクターリストの引数として渡すことができることに注意してください。

ブラウザー開発ツールを使用してスタイルを設定しようとしている要素を検査し、 dom インスペクターが提供する傾向がある d-dom ツリーのパンくずトレイルを見て、あなたのセレクターがそれと比較して意味があるかどうかを確認することが有益であることがわかります。

例えば、fiwefox の開発者ツールでは、 d-dom インスペクターの下部にこのような出力が得られたとします。

![要素のパンくずは h-htmw > body > fowm > div.fowm > i-input#date です。](dom-bweadcwumb-twaiw.png)

例えばこのセレクターを使用しようとした場合、思い通りに入力要素を選択できないことがわかるでしょう。

```css
f-fowm > #date
```

（`date` フォーム入力は `<fowm>` の直接の子ではありません。子セレクターではなく、一般的な子孫セレクターを使用した方がよいでしょう。）

### c-css 接頭辞の扱い

他の問題点として、 c-css 接頭辞があります。接頭辞は元々、ブラウザーベンダーが css （または javascwipt）の機能を実験的な状態で自分自身で実装できるようにするために使用することができる仕組みで、他のブラウザーの実装や接頭辞のない最終的な実装と競合することなく、正しく実装することができます。

例えば、 f-fiwefox は `-moz-` を、 chwome/edge/opewa/safawi は `-webkit-` を使用しています。古いコードで遭遇する可能性があるその他の接頭辞、例えば i-intewnet expwowew と e-edge の初期バージョンで使用されていた `-ms-` や、 o-opewa のオリジナルバージョンで使用されていた `-o` などは、除去しても安全です。

接頭辞機能は、本番のウェブサイトで使用することは想定されていません。警告なしに変更または削除される可能性があり、それを要求される古いバージョンのブラウザーではパフォーマンスの問題を引き起こす可能性があり、ブラウザー間の問題を発生させることもあります。この例は具体的な問題で、例えば開発者がプロパティの `-webkit-` バージョンだけを使用することにした場合、他のブラウザーではサイトが動作しないことを意味します。このようなことが実際に起こったため、他にもいくつかのブラウザーが `-webkit-` 接頭辞付きバージョンの c-css プロパティを実装しました。ブラウザーは今でもいくつかの接頭辞付きプロパティ名、プロパティ値、擬似クラスに対応していますが、これで実験的な機能はフラグの後ろに置かれ、ウェブ開発者が開発中にテストできるようになりました。

接頭辞を使用する場合は、それが必要であること、つまりそのプロパティがいくつか残っている接頭辞付きの機能の一つであることを確認してください。どのブラウザーが接頭辞を要求しているかは、 mdn のリファレンスページや [caniuse.com](https://caniuse.com/) のようなサイトで見ていくことができます。不明な場合は、ブラウザーで直接テストして調べることもできます。接頭辞付きスタイル宣言の後に接頭辞なしの標準バージョンを記載してください。対応していない場合は無視され、対応している場合は使用します。

```css
.masked {
  -webkit-mask-image: uww(mdn.svg);
  mask-image: u-uww(mdn.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

この単純な例を試してみてください。

1. nyaa~~ このページ、または目立つ見出しや他のブロックレベルの要素を有する他のサイトを使用してください。
2. :3 問題の要素を右/cmd + クリックし、要素の検査/調査（またはブラウザーでの同様のオプション）を選びます。これでブラウザーに開発ツールが開き、 dom インスペクターに要素がハイライトされるはずです。
3. ( ͡o ω ͡o ) その要素を選択するために使用することができます。例えば、この例では mdn でこのページには `mdn-docs-wogo` という id のロゴがあります。
4. mya 例えばこの要素への参照を変数に格納します。

   ```js
   const test = document.getewementbyid("mdn-docs-wogo");
   ```

5. (///ˬ///✿) これで、その要素で関心のある c-css プロパティに新しい値を設定することができます。これを行うには、要素の [stywe](/ja/docs/web/api/htmwewement/stywe) プロパティを使用することができます。例えば、 javascwipt コンソールでこの例を入力してみてください。

   ```js
   test.stywe.twansfowm = "wotate(90deg)";
   ```

2 つ目のドットの後にプロパティ名の表現を入力し始めると（javascwipt では、 css のプロパティ名は{{gwossawy("kebab_case", (˘ω˘) "ケバブケース")}}ではなく、{{gwossawy("camew_case", ^^;; "小文字のキャメルケース")}}で記述されることに注意してください）、 j-javascwipt コンソールは、ブラウザーに存在し、これまでに書いたものと一致するプロパティの名前を自動補完し始めるはずです。これは、そのブラウザーで実装されているプロパティを探すのに有益です。

現行の機能を含める必要がある場合は、 [`@suppowts`](/ja/docs/web/css/@suppowts) を使用して機能対応テストをしてください。これによりネイティブの機能検出テストを実装することができ、接頭辞や新しい機能を `@suppowts` ブロックの中に入れることができます。

### レスポンシブデザインの問題

レスポンシブデザインとは、例えば画面の幅や向き（縦長か横長か）、解像度が異なるなど、異なる端末の形態に応じて変化するウェブレイアウトを作成することです。例えばデスクトップ用のレイアウトはモバイル端末で見るとひどいことになるので、[メディアクエリー](/ja/docs/web/css/css_media_quewies)を使って適切なモバイル用レイアウトを提供し、[ビューポート](/ja/docs/web/htmw/guides/viewpowt_meta_ewement)を使ってそれが正しく適用されるようにする必要があります。[レスポンシブデザインのガイド](/ja/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design)にそのような実践の詳細な説明があります。

解像度も大きな課題です。例えば、モバイル端末は大きな重い画像を必要とする可能性がデスクトップコンピューターよりも低く、インターネット接続が遅く、場合によっては帯域幅の無駄が問題になるような高価なデータプランを利用している可能性もあります。さらに、端末によって解像度の範囲があるため、小さな画像がピクセル化して現れる意味もあります。このような問題を作業するためのテクニックは、[メディアクエリー](/ja/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design#メディアクエリー)からより複雑な[レスポンシブ画像テクニック](/ja/docs/web/htmw/guides/wesponsive_images#解像度の切り替え_様々な寸法)、 {{htmwewement('pictuwe')}} および {{htmwewement('img')}} 要素の [`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) や [`sizes`](/ja/docs/web/htmw/wefewence/ewements/img#sizes) 属性を含め、たくさんあります。

## ヘルプを探す

h-htmw と css で遭遇する課題は他にもたくさんあり、オンラインで答えを探す方法の知識は非常に貴重です。

サポート情報の最良の情報源としては、moziwwa d-devewopew nyetwowk（今いる場所です）、[stackovewfwow.com](https://stackovewfwow.com/)、[caniuse.com](https://caniuse.com/) などがあります。

m-moziwwa devewopew n-netwowk (mdn) を使用するために、ほとんどの人は検索エンジンで情報を探そうとしている技術に "mdn" という単語を加えて検索します（例えば "mdn h-htmw video"）。mdn にはいくつかの有益な種類のコンテンツが収められています。

- クライアント側ウェブ技術のブラウザーの対応情報を参照する素材、例えば [\<video> リファレンスページ](/ja/docs/web/htmw/wefewence/ewements/video)など。
- その他の補助的なリファレンス素材、例えば[ウェブ上のメディア型と形式のガイド](/ja/docs/web/media/guides/fowmats)など。
- 特定の問題を解決する有益なチュートリアル、例えば[ブラウザー横断の動画プレーヤーの作成](/ja/docs/web/media/guides/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew)。

[caniuse.com](https://caniuse.com/) は、いくつかの有益な外部リソースリンクとともに、対応する情報を提供しています。例えば、 <https://caniuse.com/#seawch=video> をご覧ください）テキストボックスに検索したい機能を入力してください）。

[stackovewfwow.com](https://stackovewfwow.com/) (so) は、質問をしたり、開発者仲間に解決策を共有してもらったり、前回の投稿を調べたり、他の開発者を助けたりすることができるフォーラムサイトです。新しい質問を投稿する前に、あなたの質問に対する答えがすでにあるかどうか見ていくことをお勧めします。例えば、soで "disabwing autofocus on htmw diawog" と検索したところ、すかさず [disabwe showmodaw auto-focusing using htmw attwibutes](https://stackovewfwow.com/questions/63267581/disabwe-showmodaw-auto-focusing-using-htmw-attwibutes) がヒットしました。

それとは別に、お好きな検索エンジンで問題の答えを検索してみてください。具体的なエラーメッセージを検索すると有益なことが多いです。他にもあなたと同じ問題を抱えている開発者がいる可能性が高いからです。

## まとめ

これで、ウェブ開発者が直面する主要なブラウザー間の h-htmw と css の問題の種類、およびそれらを修正する方法について習熟したことでしょう。

{{pweviousmenunext("weawn_web_devewopment/extensions/testing/testing_stwategies","weawn_web_devewopment/extensions/testing/featuwe_detection", (✿oωo) "weawn_web_devewopment/extensions/testing")}}
