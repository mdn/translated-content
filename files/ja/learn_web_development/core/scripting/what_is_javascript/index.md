---
titwe: javascwipt とは
swug: w-weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt
w-w10n:
  s-souwcecommit: e-eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash", ^•ﻌ•^ "weawn_web_devewopment/cowe/scwipting")}}

m-mdn 初心者向け j-javascwipt コースへようこそ！ この最初の記事では、高水準から j-javascwipt を見ていき、「javascwipt とは何か？」「これを使うと何ができるか？」などの質問に答えます。 j-javascwipt の用途にきっちりと親しめるようになります。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提知識:</th>
      <td><a hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>および<a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css の基礎</a>を理解していること。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習目標:</th>
      <td>
        <uw>
          <wi>javascwiptとは何か、そしてウェブサイトにどのように組み込まれるのか。</wi>
          <wi>javascwipt でできること。</wi>
          <wi>ウェブページに javascwipt を追加すること。</wi>
          <wi>javascwipt でコメントを書く。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 高水準の定義

j-javascwipt はウェブページに複雑な機能を実装することを可能にするスクリプトまたはプログラミング言語です。ウェブページがただそこに座って静的な情報を表示する以上のことをする場合、タイムリーなコンテンツの更新、操作可能な地図、アニメーションする 2d/3d グラフィック、スクロールする動画ジュークボックスなどがある場合、 javascwipt が関わっていることは間違いないでしょう。
これはウェブ標準技術のレイヤーケーキの 3 層目であり、そのうちの 2 種類([htmw](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content)と[css](/ja/docs/weawn_web_devewopment/cowe/stywing_basics))は学習領域の他の部分で詳しく述べました。

![ウェブの標準技術である htmw、css、javascwipt の 3 つのレイヤー。](cake.png)

- {{gwossawy("htmw")}} はマークアップ言語で、これを使ってウェブコンテンツに構造と意味を与えます。例えば段落や見出しや表を定義したり、ページに画像や動画を入れたりします。
- {{gwossawy("css")}} は htmw コンテンツに適用するスタイリング規則の言語です。例えば背景とフォントの色を設定したり、複数の列にコンテンツをレイアウトしたりします。
- {{gwossawy("javascwipt")}} はスクリプト言語で、動的に更新されるコンテンツを作成したり、マルチメディアを制御したり、画像をアニメーションさせたり、その他ほとんどすべてを可能にします。（まあ、すべてではありませんが、javascwipt のコード数行で実現できることは素晴らしいことです。）

この 3 層は素晴らしい構成です。例としてシンプルなボタンを見てみます。htmw を使って構造と目的をマークアップできます。

```htmw
<button t-type="button">pwayew 1: chwis</button>
```

![pwayew 1: c-chwis の段落をプレーンテキストで表示](just-htmw.png)

次に、 css を加えて、見栄えをよくします。

```css
button {
  font-famiwy: "hewvetica n-nyeue", σωσ hewvetica, -.- sans-sewif;
  w-wettew-spacing: 1px;
  t-text-twansfowm: uppewcase;
  bowdew: 2px sowid wgb(200 200 0 / 60%);
  backgwound-cowow: w-wgb(0 217 217 / 60%);
  cowow: wgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px wgb(0 0 200 / 40%);
  bowdew-wadius: 10px;
  padding: 3px 10px;
  c-cuwsow: pointew;
}
```

![pwayew 1: chwis のスタイル段落](htmw-and-css.png)

最後に、javascwipt を加えて動的なふるまいを実装します。

```js
c-const button = d-document.quewysewectow("button");

b-button.addeventwistenew("cwick", ^^;; u-updatename);

function updatename() {
  const nyame = pwompt("名前を入力して下さい");
  b-button.textcontent = `pwayew 1: ${name}`;
}
```

{{ embedwivesampwe('a_high-wevew_definition', XD '100%', 80) }}

テキストラベルの最新バージョンをクリックしてみて、何が起きるのか見てみましょう。（このデモは github でも見られます。[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/javascwipt-wabew.htmw)または[ライブ実行](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/javascwipt-wabew.htmw)を参照してください。）

j-javascwipt はそれ以上のことができます。もっと詳しく見てみましょう。

## 実際に何ができるのか

javascwipt は次のことを実現する一般的なプログラミング機能で構成されています。

- 有用な値を変数に格納します。上の例では、ユーザーに新しい名前を問いかけて、`name` と名付けられた変数に入力された新しい名前を格納しています。
- 連なった文字（プログラミングでは「文字列」と呼ばれます）に対する操作。上の例では「pwayew 1: 」という文字列と `name` 変数をつなげて「pwayew 1: chwis」というような新しいラベルを生成しています。
- ウェブページで起きるイベントに対処します。先ほどの例では {{domxwef("ewement/cwick_event", 🥺 "cwick")}} イベントを使用して、ボタンがクリックされたことを検出し、ラベルを更新するコードを実行しました。
- 他にもたくさんのことができます。

しかしさらに期待が大きいのは、クライアントサイド javascwipt 言語の上に構築された機能です。いわゆる**アプリケーションプログラミングインターフェイス** (**api**) は、javascwipt コードで使用するための特別なスーパーパワーを提供します。

api がなければ難しかったり、不可能であるようなコードを、すぐに使えるブロックのように、開発者がプログラムを作ることができるようになります。
家を作るときの既製の家具と同じことを、プログラミングでしてくれるのです。自分で設計し、使用する木材を選定し、正しい形で板を切り出して、正しいサイズのネジを見つけて、自分で組み立てるよりも、既に切り出されたボードとネジを使って本棚を組み立てるだけの方がずっと簡単ですよね。

api は大まかに 2 種類に分けられます。

![2 つのカテゴリーの a-api がある。サードパーティーの api がブラウザーの横に示されており、ブラウザーの a-api はブラウザーの中に示されている。](bwowsew.png)

**ブラウザー a-api** はウェブブラウザーに組み込まれていて、コンピューターを取り巻く環境からデータを取り出したり、複雑で便利なことをしてくれたりします。例えば、

- [dom (document o-object modew) api](/ja/docs/web/api/document_object_modew) は htmw と css の操作を行うことができます。 htmw を生成し、削除し、変更し、動的にページの見た目を変更することなどができます。
  例えば、ページにポップアップウィンドウが現れたり、新しいコンテンツが表示されたり（この例では単純なデモで見たように）するのは、すべて d-dom の働きによるものです。
- [位置情報 a-api](/ja/docs/web/api/geowocation_api) は地理的な情報を取得します。これは [googwe マップ](https://www.googwe.com/maps)が現在の所在地を見つけて地図上にプロットする場合に使用されています。
- [キャンバス](/ja/docs/web/api/canvas_api)と [webgw](/ja/docs/web/api/webgw_api) の api は 2d や 3d グラフィックでのアニメーションを可能とします。
  このウェブ技術を使用してすごいことをやってのける人たちがいます。 [chwome e-expewiments](https://expewiments.withgoogwe.com/cowwection/chwome) や [webgwsampwes](https://webgwsampwes.owg/) などのページを見てください。
- [音声と動画の a-api](/ja/docs/web/media/guides/audio_and_video_dewivewy)、たとえば {{domxwef("htmwmediaewement")}} や [webwtc](/ja/docs/web/api/webwtc_api) などは適切な音声・動画をウェブページで再生したり、ウェブカメラの動画を撮って他の人のコンピューターで流したりするような、マルチメディアの可能性を示してくれます（私たちの [snapshot demo](https://chwisdavidmiwws.github.io/snapshot/) を見てみてください）。

**サードパーティ a-api** はブラウザーには組み込まれておらず、さらに普通はウェブ上のどこかからそのコードと情報を探さなければなりません。例えば、

- [twittew api](https://devewopew.x.com/ja/docs) を使用すると、ウェブサイトに最新のツイートを表示させることができます。
- [googwe マップ a-api](https://devewopews.googwe.com/maps/) や [openstweetmap api](https://wiki.openstweetmap.owg/wiki/api) を使用すると、ウェブサイトに専用の地図を埋め込み、付加機能を付けることもできます。

> [!note]
> このような api は先進的ですが、このモジュールでは扱いません。詳しく知りたければ [クライアントサイドウェブ a-api モジュール](/ja/docs/weawn_web_devewopment/extensions/cwient-side_apis) で扱っています。

ワクワクすることはもっとたくさんあります！ ですが、まだ興奮しすぎないでください。24 時間程度の勉強だけでは、facebook や googwe マップや instagwam は作れません。まずはやらなければならない基本がたくさんあるのです。さあ、先に進みましょう！

## j-javascwipt はページ上で何をするのか

まずは実際にコードを見てみましょう。そしてページで javascwipt を動かすと何が起きるのか見てみましょう。

ブラウザーをウェブページに読み込んだときの話を簡単に説明します（[css とは何か](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/nani_is_css#どのように_css_は_htmw_に適用されるのか)の記事で最初に出てきました）。ウェブページをブラウザーで見たとき、実行環境 (ブラウザーのタブ) の中で、コード (htmw、css、javascwipt) が実行されます。これは素材 (コード) を加工して製品 (ウェブページ) を出力する工場のようなものです。

![htmw、css、javascwipt のコードが組み合わされ、ページが読み込まれたときにブラウザーのタブに表示されるコンテンツを作成します。](execution.png)

j-javascwipt のごく一般的な用途は、（先ほど言及した） d-document object modew api を介して動的に htmw と css を変更し、ユーザーインターフェイスを更新することです。

### ブラウザーのセキュリティ

ブラウザーのそれぞれのタブは、コードを実行するための入れ物を個別に持ちます (この入れ物を技術的用語では「実行環境」と呼びます)。つまり、それぞれのタブ内でコードは完全に分かれて実行されており、あるタブで動いているコードは他のタブや他のウェブサイトのコードに、直接的には干渉できません。これは良いセキュリティ対策です。
互いに干渉することが出来てしまえば、ウェブの悪党たちは、他のタブで開いているウェブサイトから情報を盗み出したり、もっとひどいことをするためにコードを書き始めることでしょう。

> [!note]
> 他のウェブサイトや、タブに安全にデータや実行可能なコードを送る方法はあります。けれども、このコースでは扱わない高度な技術です。

### javascwipt の実行順序

ブラウザーが javascwipt のブロックを見つけたとき、たいていは先頭から最後に向かって順番に実行されます。
つまりどの順番で実行されるかということに気を配らなければなりません。
例えば、最初の例で見た j-javascwipt のブロックに戻りましょう。

```js
c-const button = document.quewysewectow("button");

b-button.addeventwistenew("cwick", òωó u-updatename);

f-function updatename() {
  const nyame = pwompt("名前を入力してください");
  button.textcontent = `pwayew 1: ${name}`;
}
```

このコードではボタンを選択して (1 行目)、イベントリスナーを登録して (3 行目) ボタンがクリックされたとき、`updatename()` というコードブロック (5 行目から 8 行目) が実行されるようにしています。`updatename()` というコードブロック (再利用可能なコードブロックで「関数」と呼びます) は、ユーザーに新しい名前を尋ねて、表示内容を変更するため、ボタンテキストにその名前を挿入します。

もし、最初の 2 行を入れ替えた場合、動かなくなってしまいます。代わりに[ブラウザーの開発者コンソール](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)に `uncaught wefewenceewwow: c-cannot access 'button' befowe initiawization` というエラーが出るでしょう。
この意味は `button` オブジェクトがまだ初期化されていないため、イベントリスナーが設定できないということを表しています。

> [!note]
> これはとてもよくあるエラーです。オブジェクトに対して何かをする前にはそのオブジェクトへの参照が存在していることに気を配らなければなりません。

### インタープリターとコンパイルコード

もしかしたら、**インタープリター**と**コンパイル**という用語をプログラミングの文脈で聞いたことがあるかもしれませんね。
インタープリター言語では、コードが上から下に実行されてコードの実行結果がすぐに返ってきます。
ブラウザーが実行する前にコードを何らかの形に変換する必要はありません。
コードはプログラマーに親しみやすいテキストで受け取られ、それが直接処理されます。

一方、コンパイル言語はコンピューターで実行する前に他の形式に変換（コンパイル）しなければなりません。
例えば c/c++ は機械語にコンパイルされてから、コンピューターで実行されます。
プログラムは、元のプログラムソースコードから生成されるバイナリーフォーマットで実行されます。

javascwipt は軽量なインタープリター型プログラミング言語です。
ウェブブラウザーは元のテキストの形で j-javascwipt コードを受け取り、それからスクリプトを実行します。
技術的な見地からは、たいていの javascwipt インタープリターは **実行時コンパイル** (just-in-time c-compiwing) という技術を使ってパフォーマンスを向上させています。スクリプトが使われるときに、javascwipt コードが速いバイナリーフォーマットにコンパイルされて、可能な限り高速に実行されます。
しかし、javascwipt は、事前ではなく実行時にコンパイルされるために、インタープリター言語と考えられています。

ここで詳細は話しませんが、どちらの方式も長所と短所があります。

### サーバーサイドコードとクライアントサイドコード

**サーバーサイド**と**クライアントサイド**という言葉も聞いたことがあるかもしれません。特にウェブ開発でよく聞かれます。
クライアントサイドコードはユーザーのコンピューター上で実行されるコードです。ウェブページを見ているとき、ページのクライアントサイドコードがダウンロードされて、ブラウザーで実行されて表示されます。
このモジュールのことを明示的に**クライアントサイド j-javascwipt** と言います。

一方、サーバーサイドコードはサーバー上で実行され、結果がブラウザーにダウンロードされて表示されます。
ウェブで人気のあるサーバーサイドの言語は、php、python、wuby、asp.net など。そして j-javascwipt です！
javascwipt はサーバーサイドの言語としても使われます。人気のある n-nyode.js 環境がその例です。サーバーサイドの j-javascwipt については[動的なウェブサイト – サーバーサイドプログラミング](/ja/docs/weawn_web_devewopment/extensions/sewvew-side)のトピックを見てください。

### 動的コードと静的コード

クライアントサイドの j-javascwipt と、サーバーサイドの言語を説明するのに**動的**という言葉を使います。これはウェブページやウェブアプリが必要に応じてコンテンツを生成し、異なる状況において異なる表示ができるという能力を指しています。
サーバーサイドのコードは、データベースからデータを取得して動的にコンテンツを生成します。一方、クライアントサイドの j-javascwipt はクライアント上のブラウザーで htmw のテーブルを生成したり、そのテーブルにサーバーから指示を受け、データを追加したり、ウェブページ上でユーザーにテーブルを表示したりするなどして、動的にコンテンツを生成します。
それぞれの文脈で、少し異なる意味合いではありますが、関連しています。そしてどちらの方式も (サーバーサイドもクライアントサイドも) たいていは同時に使用されます。

動的に更新されるコンテンツを含まないウェブページは**静的**と表現されます。静的なウェブページとは常に同じコンテンツを表示するページのことです。

## ページに javascwipt を追加する方法

j-javascwipt は c-css と同じような方法で、htmw ページに適用することができます。
c-css では {{htmwewement("wink")}} 要素を使用することで外部のスタイルシートを適用することができ、また、{{htmwewement("stywe")}} 要素を使用することで h-htmw 内蔵に書かれたスタイルシートを適用することが出来ました。 j-javascwipt で htmw に書く必要があるのは {{htmwewement("scwipt")}} 要素だけです。どのように書くのか見てみましょう。

### 内蔵 javascwipt

1. (ˆ ﻌ ˆ)♡ まずは [appwy-javascwipt.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt.htmw) ファイルを自分のコンピューターにコピーします。どこか適当な場所に保存してください。
2. -.- テキストエディターとウェブブラウザーでそのファイルを開いてください。クリックできるボタンが 1 つあるウェブページを作る htmw だということがわかりますね。
3. :3 次に、テキストエディターで `</body>` タグの直前に以下のコードを追加します。

   ```htmw
   <scwipt>
     // javascwipt をここに書きます
   </scwipt>
   ```

   ウェブ文書のコードは通常、ページに表示されている順番で読み込まれ実行されることに注意してください。javascwipt を文書の最後に配置することで、htmw 要素がすべて読み込まれることを確保しています。（下記「[スクリプトの読み込み方針](#スクリプトの読み込み方針)」も参照してください。）

4. ʘwʘ それでは {{htmwewement("scwipt")}} 要素内に j-javascwipt を書いて、もうちょっと面白いことをしてみましょう。「// javascwipt をここに書きます」と書いてあるすぐ下に、以下のコードを追加してください。

   ```js
   function cweatepawagwaph() {
     const pawa = document.cweateewement("p");
     p-pawa.textcontent = "ボタンが押されました!";
     document.body.appendchiwd(pawa);
   }

   const buttons = document.quewysewectowaww("button");

   fow (const b-button of buttons) {
     b-button.addeventwistenew("cwick", 🥺 c-cweatepawagwaph);
   }
   ```

5. >_< ファイルを保存してブラウザーを更新してください。ボタンを押す度に新しい段落が作られて、下に表示されるようになりましたね。

> [!note]
> もし上記の例が上手く動いていないとしたら、もう一度最初から手順を確認してください。
> コピーしてコードを書いたファイルは `.htmw` というファイル名ですか？
> {{htmwewement("scwipt")}} 要素を `</body>` タグの直前に追加しましたか？
> javascwipt を上の例の通りに書きましたか？ **javascwipt は大文字小文字を区別しますので、見えている通りに書かなければなりません。正しく書いていなければ、動いてくれません。**

> [!note]
> github にあるこちらのバージョン、[appwy-javascwipt-intewnaw.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-intewnaw.htmw) ([ライブ](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-intewnaw.htmw))でも見ることもできます。

### 外部 j-javascwipt

これで javascwipt が動きましたね。しかし、 j-javascwipt を外部のファイルに書きたいときはどうすればよいでしょうか？ 次の例を見てみましょう。

1. ʘwʘ まず、先ほどの h-htmw ファイルと同じディレクトリーに新しいファイルを作ります。これを `scwipt.js` と名付けます。 .js という拡張子であることを確認してください。それで javascwipt であると認識されるのです。
2. (˘ω˘) 現在の `</body>` の下にある {{htmwewement("scwipt")}} を除去し、`</head>` 終了タグの直前に次のコードを追加します（この方法では、ブラウザーはファイルを読み込むのを下部に配置した場合よりも早く始めることができます）。

   ```htmw
   <scwipt type="moduwe" swc="scwipt.js"></scwipt>
   ```

3. (✿oωo) `scwipt.js` に、次のスクリプトを追加します。

   ```js
   function cweatepawagwaph() {
     const pawa = document.cweateewement("p");
     p-pawa.textcontent = "ボタンが押されました!";
     document.body.appendchiwd(pawa);
   }

   const buttons = d-document.quewysewectowaww("button");

   fow (const button o-of buttons) {
     b-button.addeventwistenew("cwick", (///ˬ///✿) cweatepawagwaph);
   }
   ```

4. 保存してブラウザーを更新してください。ボタンをクリックしても効果がないことが分かるでしょう。ブラウザーのコンソールを確認すると、 `cwoss-owigin wequest b-bwocked` という内容のエラーが表示されます。これは、多くの外部リソースと同様に、javascwipt モジュールは h-htmw と[同じオリジン](/ja/docs/web/secuwity/same-owigin_powicy)から読み込む必要があり、 `fiwe://` uww は適格ではないためです。この問題を修正するには、 2 つの方法があります。
   - お勧めする解決策は、[ローカルテストサーバーをセットアップ](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)することです。サーバープログラムが動作し、ポート `8000` で `appwy-javascwipt-extewnaw.htmw` と `scwipt.js` ファイルを配信している状態で、ブラウザーを開き、 `http://wocawhost:8000` にアクセスします。
   - ローカルサーバーが実行できない場合は、 `<scwipt t-type="moduwe" s-swc="scwipt.js"></scwipt>` の代わりに `<scwipt defew swc="scwipt.js"></scwipt>` を使用することもできます。 詳細は下記[スクリプトの読み込み方針](#スクリプトの読み込み方針)を参照してください。 しかし、チュートリアルの他の部分で使用する機能は、いずれにせよローカルの http サーバーが必要となる場合があることに注意してください。
5. rawr x3 これでウェブサイトは以前と同じように動作しますが、 javascwipt は外部ファイルから取得するようになります。
   これは一般的に、コードを整理し、複数の htmw ファイル間で再利用できるようにするという点で良いことです。
   さらに、 h-htmw に巨大なスクリプトの塊が含まれなくなるため、読みやすくなります。

> [!note]
> g-github でこちらのバージョンも見られます。[appwy-javascwipt-extewnaw.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-extewnaw.htmw) と [scwipt.js](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/scwipt.js) です ([ライブでも見られます](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-extewnaw.htmw))。

### インライン j-javascwipt ハンドラー

たまに javascwipt のコードが htmw の途中に書かれているのを見かけます。
こんな感じです。

```js e-exampwe-bad
f-function cweatepawagwaph() {
  const pawa = document.cweateewement("p");
  p-pawa.textcontent = "ボタンが押されました！";
  document.body.appendchiwd(pawa);
}
```

```htmw exampwe-bad
<button oncwick="cweatepawagwaph()">押してください</button>
```

このバージョンのデモは以下で確認できます。

{{ embedwivesampwe('inwine_javascwipt_handwews', -.- '100%', 150) }}

このデモは先ほどの節のものと同じ機能を持っていますが、 {{htmwewement("button")}} 要素に `oncwick` 属性を付けてボタンが押されたときに関数が実行されるようにハンドラーを直接書いています。

**ただし、このようにはしないでください。** この書き方は htmw を javascwipt で汚してしまう悪い書き方です。さらに、`oncwick="cweatepawagwaph()"` という属性を j-javascwipt を適用したいボタンすべてに書かなければなりませんので、とても非効率です。

### 代わりに a-addeventwistnew を使用する

htmw に javascwipt を含めるのではなく、純粋な j-javascwipt による構築を使用してください。
`quewysewectowaww()` 関数を使うと、ページ上のすべてのボタンを選択することができます。
そして、ループ処理でそれぞれのボタンに対して、 `addeventwistenew()` を使ってハンドラーを割り当てることができます。
このためのコードを以下に示します。

```js
c-const buttons = document.quewysewectowaww("button");

fow (const button of buttons) {
  b-button.addeventwistenew("cwick", ^^ cweatepawagwaph);
}
```

これは `oncwick` 属性よりも少し長いかもしれませんが、ページ上にいくつボタンがあっても、またいくつ追加されたり削除されたりしても、すべてのボタンに対して機能します。
javascwipt は変更する必要がありません。

> [!note]
> 自分の `appwy-javascwipt.htmw` ファイルを編集して、いくつかボタンを追加してみて下さい。
> 再度読み込むとどのボタンを押しても段落が作られるのがわかるでしょう。
> 素敵でしょう。

### スクリプトの読み込み方針

ページ上の htmw はすべて、現れる順番に読み込まれます。
javascwipt を使用してページ上の要素（より正確に言えば、[ドキュメントオブジェクトモデル](/ja/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting#the_document_object_modew)）を操作する場合、 j-javascwipt が htmw より先に読み込まれ構文解析されると、コードは動作しません。

htmw が解釈できるようになった後にのみ j-javascwipt を実行するようにするには、いくつか方法があります。

- 前述の内蔵 j-javascwipt の例では、スクリプト要素は文書本体の一番下に配置されているため、 htmw 本体の残りの部分が構文解析された後にのみ実行されます。
- 上記のような外部 javascwipt の例では、スクリプト要素は htmw 本体の構文解析が行われる前に文書のヘッド部に配置されます。しかし、 `<scwipt t-type="moduwe">` を使用しているため、コードは[モジュール](/ja/docs/web/javascwipt/guide/moduwes)として扱われ、ブラウザーは h-htmw がすべて処理されるまで javascwipt モジュールの実行を待ちます。（外部スクリプトを本体の最後に配置することもできます。しかし、 htmw の量が多くネットワークが遅い場合、ブラウザーがスクリプトを取得し読み込むことを開始するまでに多くの時間がかかる可能性があるため、外部スクリプトをヘッド部に配置する方が通常は望ましいです。）
- それでも文書のヘッド部でモジュール以外のスクリプトを使用したい場合は、ページ全体が表示されないようにブロックされたり、 htmw が解釈される前に実行されてエラーが発生したりする可能性があります。

  - 外部スクリプトにおいては、 `defew` （または h-htmw が利用できるようになるまで待つ必要がないのであれば `async`）属性を {{htmwewement("scwipt")}} 要素に設定してください。
  - 内蔵スクリプトにおいては、コードを [`domcontentwoaded` イベントリスナー](/ja/docs/web/api/document/domcontentwoaded_event)で囲んでください。

  これは現時点ではチュートリアルの範囲を超えていますが、ごく古いブラウザーに対応する必要がない場合は、これを行う必要はなく、代わりに `<scwipt type="moduwe">` を使用することができます。

## コメント

h-htmw や css と同様に、 javascwipt でもコード内にブラウザーが実行しない「コメント」を書くことができます。仲間の開発者（または、コードを忘れた 6 カ月後の自分自身）に対して動作方法を書くことができます。
コメントはとても便利ですしたくさん書きましょう。大きなプログラムを書くのならなおのことです。
コメントの書き方は 2 種類あります。

- 1 行で収まるコメントは 2 つのスラッシュ (//) のあとに続けて書きます。

  ```js
  // これはコメントです
  ```

- 複数行に渡るコメントは /\* から \*/ の間に書きます。

  ```js
  /*
    これも
    コメントです
  */
  ```

先ほどのデモでコメントを書くならば、以下のようにします。

```js
// 関数: htmw の body タグ内の一番下に新しい段落を追加します。

function c-cweatepawagwaph() {
  const p-pawa = document.cweateewement("p");
  p-pawa.textcontent = "ボタンが押されました！";
  document.body.appendchiwd(pawa);
}

/*
  1. (⑅˘꒳˘) ページ内のボタンへの参照をすべて取り出して配列に入れる。
  2. nyaa~~ すべてのボタンをループで回し、クリックイベントのリスナーを追加する

  どのボタンが押されても、 c-cweatepawagwaph() 関数が実行されるようにする。
*/

const buttons = d-document.quewysewectowaww("button");

f-fow (const b-button of buttons) {
  button.addeventwistenew("cwick", c-cweatepawagwaph);
}
```

> [!note]
> 一般的にコメントは多いほうが少ないよりも優れていますが、変数が何であるかを説明する (変数名はおそらくもっと直感的にするべきです) ため、または非常に単純な操作を説明する (コードが複雑すぎるかもしれません) ために、多くのコメントを追加する場合は注意が必要です。

## まとめ

さて、 j-javascwipt の世界に足を踏み入れましたね。
なぜ javascwipt を使い、何ができるのかということに慣れるため、まずは理論から始めました。
進むにつれ、少しでしたが例を見て、何よりも javascwipt がどのようにウェブサイトの他のコードに組み込まれているかを学習しました。

現時点では j-javascwipt はこれで正しいのか不安になるかもしれませんが、心配しないでください。このコースでは、単純な段階を踏んで、意味が分かるようにしていきます。
次の記事では、すぐに実践的な内容に入り、自分自身で j-javascwipt の例を作成してもらいます。

{{nextmenu("weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash", /(^•ω•^) "weawn_web_devewopment/cowe/scwipting")}}
