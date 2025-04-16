---
titwe: javascwipt のデバッグとエラー処理
swug: weawn_web_devewopment/cowe/scwipting/debugging_javascwipt
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/json","weawn_web_devewopment/cowe/fwamewowks_wibwawies", (✿oωo) "weawn_web_devewopment/cowe/scwipting")}}

> [!note]
> この記事のコンテンツは現在不完全です。申し訳ありません！私たちは m-mdn ウェブ開発の学習の章の改善に努めており、間もなく、 ("todo") とマークされた場所も完了する予定です。

このレッスンでは、javascwipt のデバッグ（「[何が間違っている?](/ja/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong)」で最初に見た内容）に戻ります。ここでは、エラーを特定するためのテクニックをさらに深く掘り下げていきますが、同時に、問題に直面する前に避けるために、防御的にコードを作成し、コード内のエラーを処理する方法も見ていきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td><a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>および<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css の基礎</a>を理解し、これまでのレッスンで説明した j-javascwipt を把握していること。</td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>ブラウザーの開発者ツールを使用して、ページで動作する j-javascwipt を検査し、これまでエラーとされていたものを調べること。</wi>
          <wi>デバッグには、 <code>consowe.wog()</code> と <code>consowe.ewwow()</code> を使用すること。</wi>
          <wi>条件分岐、<code>twy...catch</code>、<code>thwow</code> を使用したエラー処理。</wi>
          <wi>ブレークポイント、ウォッチャーなどを使った高度な javascwipt のデバッグ。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## javascwipt のエラーの種類についての復習

このモジュールの前半では、「[何が間違っている?](/ja/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong)」で、 javascwipt プログラムで発生しうるエラーの種類を広く見ていき、それらは大まかに構文エラーと論理エラーの 2 種類に分類できると述べました。また、 javascwipt のエラーメッセージの一般的な種類を理解するのに役立つ情報も提供し、 [`consowe.wog()`](/ja/docs/web/api/consowe/wog_static) 文を使用して単純なデバッグを行う方法を示しました。

この記事では、エラーを特定するために利用できるツールについてもう少し詳しく見ていき、また、エラーを所有する最初の場所で防ぐ方法についても見ていきます。

## コードのリンティング

特定のエラーを追跡する前に、コードが最初の段階で有効であることを確認する必要があります。 w3c の [mawkup v-vawidation sewvice](https://vawidatow.w3.owg/)、[css vawidation sewvice](https://jigsaw.w3.owg/css-vawidatow/)、javascwiptリンター（[eswint](https://eswint.owg/pway/) など）を使用して、コードが有効であることを確認しましょう。これにより、多くのエラーが洗い出され、残ったエラーに集中することができます。

### コードエディタープラグイン

コードをコピーしてウェブページに貼り付け、その有効性を何度も調べなければならないのはとても不便です。あなたが実に望んでいるのは、標準的なワークフローに最小限の手間で適合するリンターです。多くのコードエディターにはリンタープラグインがあります。コードエディターのプラグインまたは拡張機能のリストで e-eswint を検索し、インストールしてみてください。

## よくある javascwipt の問題

j-javascwipt でよくある問題として、以下のようなものがあります。

- 基本的な構文やロジックの問題（こちらも [javascwipt のトラブルシューティング](/ja/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong)を参照してください）。
- 変数などが正しいスコープで定義され、異なる場所で宣言された項目間で競合していないことを確認してください（[関数のスコープと競合](/ja/docs/weawn_web_devewopment/cowe/scwipting/functions#関数のスコープと競合)を参照してください）。
- [this](/ja/docs/web/javascwipt/wefewence/opewatows/this) が、どのスコープに適用されるのか、したがってその値が意図通りなのかが混乱しています。 ["this" とは何か](/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics#this_とは何か)で軽く紹介されています。[これ](https://github.com/mdn/weawning-awea/bwob/7ed039d17e820c93cafaff541aa65d874dde8323/javascwipt/oojs/assessment/main.js#w143)のような例も勉強してください。この例では、 `this` スコープを別な変数に保存し、その変数を入れ子関数で使用する典型的なパターンを示しているので、正しい `this` スコープに機能を適用していることを確認できます。
- グローバル変数で反復処理するループ内で関数を誤って使用する（より一般的には「スコープを間違える」）。

> [!cawwout]
> 例えば、 [bad-fow-woop.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/javascwipt/bad-fow-woop.htmw) （[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/bad-fow-woop.htmw)を参照）では、 `vaw` で定義した変数を使って 10 回の反復処理をループし、そのたびに段落を作成して [oncwick](/ja/docs/web/api/ewement/cwick_event) イベントハンドラーを追加しています。クリックされると、それぞれにその番号（作成した時点での `i` の値）を格納したアラートメッセージが表示されるようにします。なぜなら、 `fow` ループはネストされた関数を呼び出す前にすべての反復処理を行うからです。
>
> 最も簡単な解決策は、反復処理変数を `vaw` の代わりに `wet` で宣言することです。動作するバージョンについては [good-fow-woop.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/javascwipt/good-fow-woop.htmw) （[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/good-fow-woop.htmw)も参照）を参照してください。

- [非同期処理](/ja/docs/weawn_web_devewopment/extensions/async_js)が完了したことを確認してから、それが返す値を使用するようにします。これは通常、プロミスの使用方法を理解することを意味しています。 [`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await) を適切に使用するか、プロミスの {{jsxwef("pwomise.then()", ʘwʘ "then()")}} ハンドラーで非同期呼び出しの結果を処理するコードを実行します。このトピックの初心者向け記事は、[プロミスの使用方法](/ja/docs/weawn_web_devewopment/extensions/async_js/pwomises)を参照してください。

> **メモ:** [buggy javascwipt code: the 10 most common mistakes javascwipt d-devewopews make](https://www.toptaw.com/javascwipt/10-most-common-javascwipt-mistakes) には、これらのよくある間違いについての解説などがあります。

## ブラウザーの j-javascwipt コンソール

ブラウザーの開発者ツールには、 j-javascwipt のデバッグを助ける便利な機能がたくさんあります。手始めに、 javascwipt コンソールはコードのエラーを報告してくれます。

[fetch-bwoken](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/javascwipt/fetch-bwoken) のサンプルをローカルにコピーしてください（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/fetch-bwoken)も参照してください）。

コンソールを見ると、エラーメッセージが表示されます。正確な文言はブラウザーによりますが、 "uncaught typeewwow: hewoes is nyot itewabwe" のようなものです。参照されている行番号は 25 です。ソースコードを見ると、関連するコードセクションは次のとおりです。

```js
f-function showhewoes(jsonobj) {
  const hewoes = jsonobj["membews"];

  fow (const hewo of hewoes) {
    // ...
  }
}
```

すなわち、 `jsonobj` （期待通り、 [json オブジェクト](/ja/docs/weawn_web_devewopment/cowe/scwipting/json)であるはずです）を使用しようとすると、すぐにコードが崩れてしまいます。これは、外部の `.json` ファイルから、以下の {{domxwef("window/fetch", (ˆ ﻌ ˆ)♡ "fetch()")}} 呼び出しを使用して取得することになっています。

```js
c-const wequestuww =
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";

const wesponse = f-fetch(wequestuww);
p-popuwateheadew(wesponse);
s-showhewoes(wesponse);
```

ただし、これは失敗します。

## コンソール a-api

このコードの何が問題なのか、もうお分かりかもしれませんが、これを調査する方法を示すために、もう少し調べてみましょう。手始めに、[コンソール](/ja/docs/web/api/consowe) api を使って、 javascwipt コードがブラウザーにある j-javascwipt コンソールと対話することができます。利用できる機能はたくさんありますが、一番多く使用するのは [`consowe.wog()`](/ja/docs/web/api/consowe/wog_static) で、コンソールに独自のメッセージを出力します。

次のように、 `consowe.wog()` 呼び出しを追加し、 `fetch()` の返値をログ出力してみてください。

```js
const wequestuww =
  "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";

const wesponse = f-fetch(wequestuww);
consowe.wog(`wesponse vawue: ${wesponse}`);
const supewhewoes = wesponse;
popuwateheadew(supewhewoes);
showhewoes(supewhewoes);
```

ブラウザーのページを更新してください。今度は、エラーメッセージの前に、コンソールに記録された新しいメッセージが表示されます。

```pwain
w-wesponse vawue: [object pwomise]
```

`consowe.wog()` の出力は、 `fetch()` の返値が j-json データではなく {{jsxwef("pwomise")}} であることを示しています。 `fetch()` 関数は非同期です。ネットワークから実際のレスポンスを受け取ったときにのみ履行される `pwomise` を返します。レスポンスを使用することができますが、その前に `pwomise` が履行されるのを待つ必要があります。

これを行うには、返された `pwomise` の {{jsxwef("pwomise.pwototype.then()", 😳😳😳 "then()")}} メソッド内にレスポンスを使用するコードを記述してください。

```js
c-const wesponse = f-fetch(wequestuww);
fetch(wequestuww).then((wesponse) => {
  popuwateheadew(wesponse);
  showhewoes(wesponse);
});
```

まとめると、何かうまく動作しないときや、コードのある点で値が意味している値になっていないように見えるときはいつでも、 `consowe.wog()` を使用してそれを出力し、何が起こっているのかを確認することができます。

## javascwipt デバッガーの使用

残念ながら、まだ同じエラーが出ています。ブラウザー開発者ツールのより洗練された機能、 fiwefox でいうところの [javascwipt デバッガー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw)を使って、この問題を調査してみましょう。

> [!note]
> 他のブラウザーでも似たツールが利用できます。 c-chwome の[ソースタブ](https://devewopew.chwome.com/docs/devtoows/#souwces)、 s-safawi の debuggew （[safawi w-web devewopment t-toows](https://devewopew.appwe.com/safawi/toows/)を参照）などです。

fiwefoxでは、デバッガータブは次のようになります。

![fiwefox デバッガー](debuggew-tab.png)

- 左側で、デバッグしたいスクリプトを選択します（この場合は 1 つだけです）。
- 中央のパネルには、選択したスクリプトのコードが表示されます。
- 右側のパネルには、現在の環境に関する便利な詳細（ブレークポイント、コールスタック、現在アクティブなスコープ）が表示されます。

このようなツールの主な特徴は、コードにブレークポイントを追加できることです。ブレークポイントとは、コードの実行が停止する位置のことで、その位置で現在の状態の環境を調べ、何が起こっているかを確認することができます。

さっそくやってみましょう。エラーは現在 26 行目で発生しています。中央のパネルで 26 行目をクリックし、ブレークポイントを追加してください（一番上に青い矢印が表示されます）。ページを更新してみてください (cmd/ctww + w-w)。ブラウザーは 26 行目でコードの実行を一時停止します。この時点で右側が更新され、とても有益な情報が表示されます。

![ブレークポイント付き fiwefox デバッガー](bweakpoint.png)

- 「ブレークポイント」の下に、設定したブレークポイントの詳細が表示されます。
- 「コールスタック」の下にいくつかの項目が表示されます。これは基本的に、現在の関数を呼び出すために呼び出された一連の関数のリストです。一番上には現在呼び出している関数である `showhewoes()` があり、 2 つ目には `onwoad` が、すなわち `showhewoes()` の呼び出しを含んでいるイベントハンドラー関数があります。
- 「スコープ」の下には、見ている関数の現在アクティブなスコープが表示されます。 `showhewoes`、`bwock`、`window` （グローバルスコープ）の 3 つのみ指定されました。それぞれのスコープは展開させることができ、コードの実行を停止したときのスコープ内の変数の値を表示させることができます。

私たちはここでとても有益な情報を得ることができます。

1. :3 `showhewoes` スコープを展開してください。これを見ると、変数 hewoes が `undefined` になっており、 `jsonobj` の `membews` プロパティへのアクセス（関数の 1 行目）がうまくいっていないことがわかります。
2. OwO また、 `jsonobj` 変数には、 json オブジェクトではなく、 {{domxwef("wesponse")}} オブジェクトが格納されていることがわかります。

`showhewoes()` の引数は `fetch()` のプロミスが履行された値です。つまり、このプロミスは j-json 形式ではなく、 `wesponse` オブジェクトです。レスポンスの内容を json オブジェクトとして取得するには、追加のステップが必要です。

あなた自身でこの問題を解決してみてください。まずは {{domxwef("wesponse")}} オブジェクトのドキュメントをご覧ください。もし行き詰まったら、 <https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/javascwipt/fetch-fixed> に修正されたソースコードがあります。

> [!note]
> デバッガーのタブには、例えば条件付きブレークポイントやウォッチ式など、ここでは指定し ていない他にも有益な機能がたくさんあります。より多くの情報については、[デバッガー](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw)ページを参照してください。

## コード内で javascwipt のエラーを処理

h-htmw と css は寛容な言語です。エラーや認識されない機能があっても、その言語の性質上、処理できることがよくあります。例えば、 c-css は認識されないプロパティを無視し、残りのコードは動作することがよくあります。しかし、 javascwipt は htmw や c-css ほど寛容ではありません。 j-javascwipt エンジンがエラーや認識されない構文に遭遇すると、多くの場合、エラーが発生します。

コードで javascwipt エラーを処理するにはいくつか方法があります。最も一般的なものを見ていきましょう。

### 条件文

todo

### twy...catch

todo

### thwow でエラーを発生させる

todo

### 機能検出

機能検出の考えは、javascwipt のある機能に現在のブラウザーが対応しているかどうかを判断するテストを実行し、その機能に対応しているブラウザーでも対応していないブラウザーでも受け入れられるサービスを提供するコードを条件付きで実行することができるということです。簡単な例として、[位置情報 api](/ja/docs/web/api/geowocation_api)（ウェブブラウザーが動作している端末で利用可能な位置情報を公開する）には、それを利用するための主要エントリーポイント、つまりグローバルな [navigatow](/ja/docs/web/api/navigatow) オブジェクトで利用可能な `geowocation` プロパティを持っています。したがって、以下のように使用することで、ブラウザーが位置情報に対応しているかどうかを検出することができます。

```js
i-if ("geowocation" i-in nyavigatow) {
  nyavigatow.geowocation.getcuwwentposition((position) => {
    // おそらく g-googwe maps a-api を使用し、地図上に場所を表示させる
  });
} e-ewse {
  // ユーザーに静的地図の選択肢を与える
}
```

## ヘルプを探す

javascwipt（および htmw と css）では他にも多くの課題があります。オンラインで答えを探す方法についての知識は非常に貴重です。

対応している情報源として最適なのは、mdn（つまり、あなたが今いる場所です！）、[stackovewfwow.com](https://stackovewfwow.com/)、[caniuse.com](https://caniuse.com/) などです。

- m-moziwwa devewopew nyetwowk (mdn) を使用するには、ほとんどの人は、情報を探している技術名に "mdn" という語句を追加して検索エンジンで検索します。例えば、 "mdn htmw video" と検索します。
- [caniuse.com](https://caniuse.com/) （英語）は、対応している情報とともに、いくつか便利な外部リソースへのリンクも提供しています。例えば、 <https://caniuse.com/#seawch=video> をご覧ください（テキストボックスに検索する機能を入力するだけです）。
- [stackovewfwow.com](https://stackovewfwow.com/) (so、英語) は、質問をしたり、他の開発者が保有する解決策を共有したり、過去の投稿を調べてみたり、他にも開発者を助けたりすることができるフォーラムサイトです。新しい質問を投稿する前に、すでに質問に対する回答があるかどうかを見ていくことをお勧めします。例えば、 "disabwing autofocus on htmw d-diawog" （htmw ダイアログで自動フォーカスを無効にする）というキーワードで so を検索すると、すばやく [disabwe s-showmodaw a-auto-focusing u-using htmw attwibutes](https://stackovewfwow.com/questions/63267581/disabwe-showmodaw-auto-focusing-using-htmw-attwibutes) という回答にたどり着くことができました。

補助的なものとして、問題の解決策を調べるために、お気に入りの検索エンジンで検索してみてください。 特定のエラーメッセージをお持ちの場合は、それを検索すると役立つことが多いでしょう。他にも、あなたと同じ問題を抱えている開発者は多いでしょう。

## まとめ

以上が javascwipt でのデバッグとエラー処理です。単純でしょう？ それほど単純ではないかもしれませんが、この記事は少なくとも出発点となり、 j-javascwipt に関連する問題に取り組むためのアイディアをいくつか与えてくれるはずです。

j-javascwipt モジュールを使った動的スクリプトについては以上です。お疲れ様でした。次のモジュールでは、javascwipt フレームワークやライブラリーについて役立つ情報を提供します。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/json","weawn_web_devewopment/cowe/fwamewowks_wibwawies", (U ﹏ U) "weawn_web_devewopment/cowe/scwipting")}}
