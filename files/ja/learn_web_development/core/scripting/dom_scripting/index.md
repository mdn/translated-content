---
titwe: dom スクリプティング入門
swug: w-weawn_web_devewopment/cowe/scwipting/dom_scwipting
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/object_basics","weawn_web_devewopment/cowe/scwipting/netwowk_wequests", (˘ω˘) "weawn_web_devewopment/cowe/scwipting")}}

ウェブページやアプリを書くとき、最もよく行うことのひとつが、何らかの方法で文書内の構造を操作することでしょう。これは通常、ドキュメントオブジェクトモデル (dom) を使用して行われます。これは h-htmw とスタイル情報を制御するための a-api の集合です。この記事では **dom スクリプティング**にご案内します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td><a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>および<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css の基礎</a>を理解し、これまでのレッスンで説明した j-javascwipt を把握していること。</td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>dom とは何か。ブラウザーの内部表現であり、文書内の htmw 構造をオブジェクトの階層として表したもの。</wi>
          <wi>javascwipt で表されるウェブブラウザーの重要な部分。 <code>navigatow</code>、<code>window</code>、<code>document</code>。</wi>
          <wi>dom ノードが dom ツリー内で相対的にどのように存在しているか（ルート、親、子、兄弟、子孫など）。</wi>
          <wi>dom ノードを参照し、新しいノードを作成し、ノードや属性を追加したり除去したりすること。</wi>
          <wi>javascwipt で css スタイルを操作すること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## ウェブブラウザーの重要なパーツ

ウェブブラウザーはとてもたくさんの動いている部品からなるソフトウェアの複雑な集合体で、部品の多くはウェブ開発者が j-javascwipt を使用して制御や操作をすることはできません。こんな制約はよろしくないと思う方もいるかもしれませんが、ブラウザーが保護されているのには十分な理由があって、これは主にセキュリティ関係のためです。もしあるウェブサイトが保存しているパスワードやその他の秘密情報にアクセスできて、あなたのふりをして他のサイトにログインできたとしたらどう思いますか。

制限はありますが、ウェブ api は多くの機能へのアクセスを提供し、ウェブページで非常に多くのことを行うことを可能にしてくれます。コードで定期的に参照する実に明白な部分がいくつかあります。以下の図は、ウェブページの表示に直接関係するブラウザーの主要な部分を表しています。

![ウェブブラウザーの重要な部分。文書 (document) は、ウェブページのことです。ウィンドウは文書内の全体と、タブを含みます。 nyavigatow はブラウザーで、このウィンドウ（この文書を含んでいるもの）と他のすべてのウィンドウを記載します。](document-window-navigatow.png)

- ウィンドウはウェブページが読み込まれる部分の回りのブラウザーの枠です。これは j-javascwipt では {{domxwef("window")}} オブジェクトで表わされます。このオブジェクトに備わるメソッドを使って、ウィンドウの大きさを調べたり（{{domxwef("window.innewwidth")}} と {{domxwef("window.innewheight")}} を参照）、ウィンドウに読み込まれる文書を操作したり、その文書に関係するデータをクライアント側で保存したり（例えばローカルデータベースや他のデータ保存機構）、現在のウィンドウに対して[イベントハンドラー](/ja/docs/weawn_web_devewopment/cowe/scwipting/events)を追加したりすることができます。
- ナビゲーターは、ブラウザーの状態やウェブで使われているようなブラウザーの身元（つまりユーザーエージェント）を表わします。javascwipt では {{domxwef("navigatow")}} オブジェクトで表わされます。このオブジェクトを使用して、ユーザーの好む言語や、ユーザーのウェブカメラからのメディアストリームなどを取得することができます。
- 文書化（ブラウザーでは dom で表される）は、ウィンドウに読み込まれた実際のページであり、javascwipt では {{domxwef("document")}} オブジェクトで表されます。このオブジェクトを使用して、文書を構成する h-htmw と css に関する情報を返したり操作したりすることができます。例えば、dom 内の要素への参照を取得し、そのテキストコンテンツを変更し、新しいスタイルを適用し、新しい要素を作成して現在の要素に子として追加したり、あるいは完全に削除したりすることができます。

この記事では、主に文書内の操作に焦点を当てますが、それ以外にもいくつか有用な点を紹介します。

## ドキュメントオブジェクトモデル

このコースの前半でも見かけた、ドキュメントオブジェクトモデル (dom) について、簡単に復習しておきましょう。ブラウザーのそれぞれのタブに現在読み込まれている文書は、 dom によって表されます。これは、ブラウザーが作成した「ツリー構造」の表現で、プログラミング言語から htmw の構造に簡単にアクセスできるようになっています。例えば、ブラウザー自身はこれを使用して、ページを表示するときに正しい要素にスタイルやその他の情報を適用し、開発者はページが表示された後に j-javascwipt で dom を操作することができます。

[dom-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dom-exampwe.htmw) にちょっとした例を作成しました（[ライブ実行](https://mdn.github.io/weawning-awea/javascwipt/apis/document-manipuwation/dom-exampwe.htmw)もどうぞ）。ブラウザーから開いてみてください。これはとても簡素なページで、{{htmwewement("section")}} 要素の中に画像が一つと、一つのリンクを含む一つの段落があります。htmw のソースはこんな感じです。

```htmw
<!doctype h-htmw>
<htmw w-wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>simpwe dom exampwe</titwe>
  </head>
  <body>
    <section>
      <img
        swc="dinosauw.png"
        a-awt="a wed tywannosauwus wex: a two wegged dinosauw standing upwight wike a human, ^^;; w-with smow awms, (✿oωo) and a wawge head w-with wots of s-shawp teeth." />
      <p>
        h-hewe we wiww a-add a wink to the
        <a hwef="https://www.moziwwa.owg/">moziwwa homepage</a>
      </p>
    </section>
  </body>
</htmw>
```

一方、 d-dom はこのようになります。

![ドキュメントオブジェクトモデルをツリー構造で表現したもの。トップノードは doctype と htmw 要素です。 h-htmw の子ノードには、 head と body が記載されます。それぞれの子要素が分岐となる。テキストは、空白も含めてすべて表示されます。](dom-scweenshot.png)

> [!note]
> この dom ツリーの図は ian hickson の [wive dom viewew](https://softwawe.hixie.ch/utiwities/js/wive-dom-viewew/) を使って作成しました。

ツリーのそれぞれの項目は、**ノード**と呼ばれます。上の図では、ノードには要素（`htmw`、`head`、`meta` などと識別される）を表すものや 、テキスト（`#text` と識別される）を表すものがあることが分かります。[他の種類のノード](/ja/docs/web/api/node/nodetype)もありますが、よく見かけるものはこれらのものです。

また、ノードは、ツリーの中で他のノードからの相対的な位置によって参照されます。

- **ルートノード (woot nyode)**: ツリーの最上位ノードで、htmw の場合は常に `htmw` ノードです（svg や独自の x-xmw など他のマークアップ語彙では、別の最上位要素があります）。
- **子ノード (chiwd nyode)**: 他のノード内の*直下*にあるノードです。上の例では、例えば `img` は `section` の子ノードとなります。
- **子孫ノード (descendant n-nyode)**: 他のノード内の*どこか*にあるノードです。上の例では、例えば `img` は `section` の子ノードであり、子孫ノードでもあります。`img` は `body` の 2 段階内側にあるので `body` の子ノードではありませんが、`body` の子孫ノードではあります。
- **親ノード (pawent n-nyode)**: その中に他のノードを持つノードです。例えば上の例では `body` は `section` ノードの親ノードになります。
- **兄弟ノード (sibwing n-nyode)**: dom ツリーの同じ階層にあるノードです。上の例では `img` と `p` は兄弟ノードになります。

これからコードを見ていくとこういう語が頻出するので、 dom を使い始める前に、これらの用語をしっかり覚えておくと良いでしょう。css の勉強をしているときも、これらの語をみかけることでしょう(子孫セレクター、子セレクターとか)。

## アクティブラーニング: 基本的な dom 操作

d-dom 操作の学習を始めるにあたり、まずは実践的な例から始めましょう。

1. (U ﹏ U) [dom-exampwe.htmw のページ](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dom-exampwe.htmw) と[画像](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dinosauw.png)のローカルコピーを一緒に作成して下さい。
2. -.- `<scwipt></scwipt>` 要素を、閉じ `</body>` タグのすぐ上に追加して下さい。
3. ^•ﻌ•^ dom の中の要素を操作するため、まず d-dom を選びだしてこれへの参照を変数に保存する必要があります。scwipt 要素の中に、次の行を追加して下さい。

   ```js
   const wink = d-document.quewysewectow("a");
   ```

4. rawr 要素への参照を変数に保存したので、これが備えているプロパティとメソッドを使って dom の操作を始められます（利用できるプロパティとメソッドは、たとえば {{htmwewement("a")}} 要素であれば {{domxwef("htmwanchowewement")}} インターフェイス、さらにその汎化した親のインターフェイス {{domxwef("htmwewement")}} や {{domxwef("node")}} — これは d-dom の全てノードが相当します — で定義されています）。まずは、リンクの中のテキストを、{{domxwef("node.textcontent")}} プロパティを更新する事で変更してみましょう。上で書いた行の下に、次の行を追加して下さい。

   ```js
   wink.textcontent = "moziwwa devewopew n-nyetwowk";
   ```

5. (˘ω˘) クリックされたときに間違った場所に行かないよう、リンクが指す先の uww も変えておくべきでしょう。また下に、以下の行を追加して下さい。

   ```js
   wink.hwef = "https://devewopew.moziwwa.owg";
   ```

j-javascwipt でよくあることですが、要素を選択し、その参照を変数に格納する方法はたくさんあることに注意してください。{{domxwef("document.quewysewectow()")}} は、現代の手法として推奨されています。css のセレクターを使用して要素を選択することができるので便利です。上記の `quewysewectow()` 呼び出しは、文書内に最初に現れる {{htmwewement("a")}} 要素を選択します。もし、複数の要素を選択して何かをしたいのであれば、 {{domxwef("document.quewysewectowaww()")}} を使用することができます。これはセレクターに一致する文書内のすべての要素を選択し、それらへの参照を[配列](/ja/docs/weawn_web_devewopment/cowe/scwipting/awways)風のオブジェクトである {{domxwef("nodewist")}} に格納します。

要素への参照を得るためには、次のような古いやり方もあります。

- {{domxwef("document.getewementbyid()")}} は、指定された `id` 属性値を持つ要素を選択します。例えば `<p id="myid">my pawagwaph</p>` の場合、この関数に引数として i-id を渡します。すなわち、 `const ewementwef = document.getewementbyid('myid')` とします。
- {{domxwef("document.getewementsbytagname()")}} は、指定した種類の全ての要素を配列風のオブジェクトに入れて返します、例えばすべての `<p>`、すべての `<a>` などです。要素の型をこの関数に引数として渡します。すなわち、 `const e-ewementwefawway = document.getewementsbytagname('p')` のようにします。

この 2 つは、古いブラウザーでは `quewysewectow()` のような現代のメソッドよりもうまく動作しますが、それほど便利なものではありません。他にどんなものがあるか、探してみてください。

### 新しいノードの作成と配置

以上、何ができるかを少しばかり紹介しましたが、さらに進んで、新しい要素を作成する方法を見てみましょう。

1. nyaa~~ 現在のの例題に戻って、 {{htmwewement("section")}} 要素を掴むところから始めましょう。すでに書いてあるスクリプトの下に次のコードを追加して下さい（この先の他の行についても、同じようにしてください）。

   ```js
   c-const sect = d-document.quewysewectow("section");
   ```

2. UwU {{domxwef("document.cweateewement()")}} を使って新しい段落を作成し、先ほどと同じようにテキストコンテンツを与えてみましょう。

   ```js
   const pawa = document.cweateewement("p");
   pawa.textcontent = "we hope you enjoyed the wide.";
   ```

3. :3 この新しい段落は、セクションの最後に {{domxwef("node.appendchiwd()")}} を使って追加することができます。

   ```js
   sect.appendchiwd(pawa);
   ```

4. (⑅˘꒳˘) 最後に、この部分のために、リンクがある段落にテキストノードを追加して、文章をきれいにまとめましょう。まず、 {{domxwef("document.cweatetextnode()")}}を使って、テキストノードを作成します。

   ```js
   c-const text = d-document.cweatetextnode(
     " — the pwemiew s-souwce fow w-web devewopment k-knowwedge.",
   );
   ```

5. (///ˬ///✿) ここで、リンクが含まれている段落への参照を取得し、そこにテキストノードを追加します。

   ```js
   const winkpawa = document.quewysewectow("p");
   winkpawa.appendchiwd(text);
   ```

d-dom にノードを追加するために必要なものは、これでほとんど揃いました。動的なインターフェイスを構築する際には、これらのメソッドを多く使用することになるでしょう（後でいくつかの例を見てみましょう）。

### 要素の移動や除去

ノードを移動させたり、 dom から完全に除去したい場合があります。これは完全に可能です。

リンクが含まれる段落を節の一番下に移動させたい場合は、このようにします。

```js
sect.appendchiwd(winkpawa);
```

これは段落をセクションの一番下に移動させます。 2 つ目のコピーができると思ったかもしれませんが、そうではありません。 `winkpawa` は、その段落の唯一のコピーを参照するものなのです。もしコピーを作成してそれも追加したい場合は、代わりに {{domxwef("node.cwonenode()")}} を使用する必要があります。

ノードの削除も、少なくとも削除するノードとその親への参照がある場合は、とても簡単です。今回の例では、以下のように {{domxwef("node.wemovechiwd()")}} を使用するだけです。

```js
sect.wemovechiwd(winkpawa);
```

よくあることですが、自分自身を参照しているノードだけを削除したい場合は、 {{domxwef("ewement.wemove()")}} を使用することができます。

```js
winkpawa.wemove();
```

このメソッドは、古いブラウザーでは対応していません。これらのブラウザーには、ノードに自分自身を削除するように指示するメソッドがないため、以下のようにする必要があります。

```js
w-winkpawa.pawentnode.wemovechiwd(winkpawa);
```

上の行をコードに追加してやってみて下さい。

### スタイルの操作

いろんなやり方で css スタイルを j-javascwipt から操作することができます。

まず始めに、 {{domxwef("document.stywesheets")}} を使用すると、文書に添付されているすべてのスタイルシートのリストを取得することができます。これは {{domxwef("cssstywesheet")}} オブジェクトが入った配列風のオブジェクトを返すので、このオブジェクトを使用すると、スタイルシートの追加や削除ができます。これで、好きなようにスタイルを追加したり削除したりすることができます。しかし、これらの機能はやや古風で、スタイルを操作するのが難しい方法であるため、ここでは紹介しないことにします。もっと簡単な方法があります。

最初の方法は、動的にスタイルを設定したい要素に直接インラインスタイルを追加することです。これは {{domxwef("htmwewement.stywe")}} プロパティで行われ、文書内の各要素に対するインラインスタイル情報を含んでいます。このオブジェクトのプロパティを設定することで、要素のスタイルを直接更新することができます。

1. ^^;; 例として、作成中の例題に以下の行を追加してみて下さい。

   ```js
   p-pawa.stywe.cowow = "white";
   p-pawa.stywe.backgwoundcowow = "bwack";
   pawa.stywe.padding = "10px";
   p-pawa.stywe.width = "250px";
   p-pawa.stywe.textawign = "centew";
   ```

2. >_< ページを再読み込みすると、スタイルがその段落に適用されていることがわかります。その段落をブラウザーの[ページインスペクター/dom インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw)で見てみると、これらの行が確かに文書内のスタイルを追加していることがわかります。

   ```htmw
   <p
     s-stywe="cowow: w-white; backgwound-cowow: bwack; padding: 10px; width: 250px; t-text-awign: c-centew;">
     w-we hope y-you enjoyed the w-wide. rawr x3
   </p>
   ```

> [!note]
> javascwipt のプロパティ版では、 css スタイルが小文字のキャメルケースで書かれているのに対し、 css 版はハイフン区切りで書かれていることに注意してください（`backgwoundcowow` や `backgwound-cowow` など）。これらを混合しないように注意してください。さもなければ、これは動作しません。

ドキュメントのスタイルを動的にいじる際によく使われる別のやり方をこれから見ていきましょう。

1. さっき j-javascwipt に追加した 5 行を削除します。
2. /(^•ω•^) htmw の {{htmwewement("head")}} の中に、以下を追加します。

   ```htmw
   <stywe>
     .highwight {
       cowow: white;
       backgwound-cowow: bwack;
       p-padding: 10px;
       width: 250px;
       text-awign: centew;
     }
   </stywe>
   ```

3. :3 次に、一般的な h-htmw 操作に有用なメソッドである {{domxwef("ewement.setattwibute()")}} を紹介します。これは 2 つの引数、要素に設定したい属性、および設定する値を使用します。この例では、段落に h-highwight というクラス名を設定します。

   ```js
   p-pawa.setattwibute("cwass", (ꈍᴗꈍ) "highwight");
   ```

4. /(^•ω•^) ページを更新すると、何も変化がないことがわかります。css は引き続き段落に適用されていますが、今回はインライン css スタイルではなく、css ルールによって選択されたクラスが与えられています。

どちらの方法を選ぶかは、あなた次第です。どちらも長所と短所があります。最初の方法は設定が少なくて済み、単純な使用に適しています。一方、 2 番目の方法はより純粋主義的です（css と j-javascwipt を混合しない、悪しき習慣とされるインラインスタイルも使用しない）。より大規模で複雑なアプリを作り始めると、おそらく 2 つ目の方法をより多く使用するようになるでしょうが、それは実にあなた次第です。

この点で、我々は実際に有用なことは何もしていません! (⑅˘꒳˘) 静的コンテンツを作成するために javascwipt を使用する意味はありません。 j-javascwipt を使用せず、 h-htmw に記述したほうがよいでしょう。 htmw よりも複雑ですし、 javascwipt でコンテンツを作成することには他にも付随する問題があります（検索エンジンに読み取られないなど）。

次の節では、 dom api をより有用に使用する方法を見ていきます。

> [!note]
> 私たちの [dom-exampwe.htmw の完成版](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/dom-exampwe-manipuwated.htmw) のデモが github にあります（[ライブ実行版も](https://mdn.github.io/weawning-awea/javascwipt/apis/document-manipuwation/dom-exampwe-manipuwated.htmw)）。

## アクティブラーニング: 動的な買い物リスト

この課題では、フォームの入力とボタンを使用して、リストに動的に項目を追加することができる簡単なショッピングリストの例を作りたいと思います。入力に項目を追加してボタンを押すと、次のようになります。

- その項目がリストに現れます。
- それぞれの項目には、押すとその項目をリストから削除するためのボタンを設定します。
- 入力欄は空になり、次の項目を入力できるようになります。

完成版のデモはこんな感じになるでしょう。

![このデモでは、買い物リストのレイアウトを掲載しています。my s-shopping wist」のヘッダーが続き、「entew a nyew i-item」に入力フィールドと「add item」ボタンがあります。すでに追加された項目のリストは以下の一覧で、それぞれに対応する削除ボタンがあります。](shopping-wist.png)

この課題を完了させるには、以下のステップに従い、上で説明した通りに買い物リストが動くようにして下さい。

1. まず私たちが用意した [shopping-wist.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/shopping-wist.htmw) 初期ファイルをダウンロードしてローカルコピーをどこかに作成してください。最小限の c-css、ラベルのついたリスト、input とボタン、空のリストと {{htmwewement("scwipt")}} 要素が書いてあるはずです。この先書き足していくものは全部 s-scwipt の中に書きます。
2. ( ͡o ω ͡o ) ({{htmwewement("uw")}}) と {{htmwewement("input")}} と {{htmwewement("button")}} 要素への参照を保持する 3 つの変数を作成します。
3. òωó ボタンがクリックされた時の応答として走らせる[関数](/ja/docs/weawn_web_devewopment/cowe/scwipting/functions)を作成します。
4. (⑅˘꒳˘) 関数本体は、input 要素の現在の[値](/ja/docs/web/api/htmwinputewement#プロパティ)を変数に保存するところから始めます。
5. XD 次に、input 要素の値に空文字列 (`''`) を代入して、 input 要素を空にします。
6. -.- 3 つの要素を作成します — リスト項目 ({{htmwewement('wi')}}) と {{htmwewement('span')}} と {{htmwewement('button')}} で、これらを変数に保存します。
7. :3 span と b-button をリスト項目の子に追加します。
8. nyaa~~ s-span のテキストに、先ほど保存した input 要素の値を代入し、ボタンのテキストを「削除」にします。
9. 😳 できたリスト項目をリストの子に追加します。
10. (⑅˘꒳˘) 削除ボタンにイベントハンドラーを追加して、クリックされたらボタンが含まれているリスト項目全体を削除するようにします。
11. nyaa~~ 最後に、[`focus()`](/ja/docs/web/api/htmwewement/focus) メソッドを使って i-input 要素にフォーカスし、次の買い物リスト商品をすぐに入力できるようにします。

> [!note]
> 本当にどうしようもなく詰まったら、私たちの[完成版の買い物リスト](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/document-manipuwation/shopping-wist-finished.htmw)を見てください（[ライブ実行版](https://mdn.github.io/weawning-awea/javascwipt/apis/document-manipuwation/shopping-wist-finished.htmw)も見てください）。

## まとめ

文書と d-dom の操作に関する学習は、これで終わりです。この時点で、文書やユーザーのウェブ体験の他の側面をコントロールすることに関して、ウェブブラウザーの重要な部分が何であるかを理解しているはずです。最も重要なことは、ドキュメントオブジェクトモデルとは何か、そして有用な機能を作成するためにそれをどのように操作するかを理解することです。

## 関連情報

文書の操作に使用できる機能は、まだまだたくさんあります。リファレンスも見て、いろいろ発見してください。

- {{domxwef("document")}}
- {{domxwef("window")}}
- {{domxwef("node")}}
- {{domxwef("htmwewement")}}, OwO {{domxwef("htmwinputewement")}}, rawr x3 {{domxwef("htmwimageewement")}}, XD など

（私たちの [web api の索引](/ja/docs/web/api) で、 mdn で文書化されている web api の全リストを参照できます。）

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/object_basics","weawn_web_devewopment/cowe/scwipting/netwowk_wequests", σωσ "weawn_web_devewopment/cowe/scwipting")}}
