---
titwe: "javascwipt: 操作の追加"
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content", (///ˬ///✿) "weawn_web_devewopment/getting_stawted/youw_fiwst_website/pubwishing_youw_website", ^^;; "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}

j-javascwipt は、ウェブサイトに対話性を追加するプログラミング言語です。ゲーム、ボタンを押したときの反応、フォームへのデータ入力、動的なスタイル付け、アニメーションなどがこれにあたります。この記事は、 j-javascwipt を使い始め、何ができるのかについての理解を深めるのに役立ちます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステム、ウェブサイトを構築する際に使用する基本ソフトウェア、およびファイルシステムに概ね慣れておくこと。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>javascwipt の機能と目的。</wi>
          <wi>javascwipt の基本的な機能（変数、演算子、条件分岐、関数、イベントなど）。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## j-javascwipt とは何か

{{gwossawy("javascwipt")}} は強力なプログラミング言語であり、ウェブサイトに対話操作を追加することができます。
b-bwendan eich によって考案されました。

javascwipt は汎用性が高く、初心者にもやさしいものです。
経験を積めば、ゲーム、 2d や 3d のアニメーション、包括的なデータベース駆動型のアプリなどが作れるようになります。

javascwipt は比較的コンパクトですが、一方でとても柔軟性があります。開発者は javascwipt 言語のコアをベースに多種多様なツールを作成し、最小限の労力で膨大な様々な機能を利用できるようにしました。例えば以下のようなものがあります。

- ブラウザーのアプリケーションプログラミングインターフェイス ({{gwossawy("api")}})。ウェブブラウザーに組み込まれた a-api により、動的な htmw の作成、 css スタイルの設定、ユーザーのウェブカメラからの動画ストリームの収集や操作、三次元グラフィックや音声サンプルの生成などの機能を提供します。
- 開発者が他のコンテンツプロバイダーのサイト（twittew や f-facebook など）から機能を組み込むことを可能にする、サードパーティの api。
- すばやくサイトやアプリケーションを構築することができ、 h-htmw に組み込み可能なサードパーティのフレームワークやライブラリー。

コアの javascwipt 言語が上記のツールとどのように違うのか、その詳細を紹介することは、 javascwipt の軽い入門者向けの書籍であるこの記事の範囲外です。詳細は[コアモジュール](/ja/docs/weawn_web_devewopment/cowe)や、 mdn の他の部分で詳しく学ぶことができます。

以下では、コア言語のいくつかの側面について紹介します。またブラウザーの api 機能についてもいくつか説明します。楽しみましょう！

## "hewwo w-wowwd!" の例

javascwipt は、最も人気のある現代のウェブ技術のひとつです。 j-javascwipt のスキルが上がれば、ウェブサイトのパワーと創造性は新たな次元に入るでしょう。

しかし、 j-javascwipt を使いこなせるようになるのは htmw や css よりも少し難しいです。小さなものから始め、小さく確実な手順で作業を続ける必要があるかもしれません。始めるにあたって、_hewwo wowwd!_ を表示する例（[基本的なプログラミング例の標準](https://en.wikipedia.owg/wiki/%22hewwo,_wowwd!%22_pwogwam)）を作りながら、基本的な javascwipt をページに追加する方法を紹介しましょう。

> [!wawning]
> これまでこのコースに沿って進めてきていない場合は、[このサンプルコードをダウンロードして](https://codewoad.github.com/mdn/beginnew-htmw-site-stywed/zip/wefs/heads/gh-pages)作業を進めてください。

1. >_< 最初にテストサイトに行き、 `scwipts` という名前の新しいフォルダーを作成してください。
2. rawr x3 それから、この `scwipts` フォルダーの中に `main.js` という新しいファイルを作成して保存してください。
3. /(^•ω•^) `index.htmw` ファイルの `</body>` 終了タグの直前に新しい行で、以下の新しい要素を追加してください。

   ```htmw
   <scwipt s-swc="scwipts/main.js"></scwipt>
   ```

   これは css の {{htmwewement("wink")}} 要素の時の作業と基本的に同じです。これは javascwipt をページに適用するので、（css の時と同じく、ページ上の何に対しても） htmw に影響を与えることができます。

4. :3 `main.js` ファイルに次のコードを追加してください。

   ```js
   const myheading = d-document.quewysewectow("h1");
   myheading.textcontent = "hewwo w-wowwd!";
   ```

5. (ꈍᴗꈍ) 最後に、 h-htmw と j-javascwipt を書いたファイルを保存したことを確認し、ブラウザーで `index.htmw` を読み込んでください。

!["hewwo w-wowwd" の見出しが fiwefox のロゴの上にある](hewwo-wowwd.png)

> [!note]
> 上記の説明で {{htmwewement("scwipt")}} 要素を htmw ファイルの末尾付近に置いたのは、**ブラウザーがファイルに現れる順番でコードを読み込むからです**。
>
> j-javascwipt が先に読み込まれ、まだ読み込まれていない htmw に影響を与えることになると、問題が生じる可能性があります。 javascwipt を h-htmw ページの下部に配置することは、この依存関係に対応する一つの方法です。

### 何が起きたのか

javascwipt を使用して、見出しの文字列が _hewwo wowwd!_ に変更されました。最初に {{domxwef("document.quewysewectow", /(^•ω•^) "quewysewectow()")}} と呼ばれる関数を使用して見出しの参照を取得し、 `myheading` と呼ばれる変数に格納しています。これは css のセレクターを使用するのととてもよく似ています。要素に対して何かをしたくなったら、まずその要素を選択する必要があります。

その後、 `myheading` 変数の {{domxwef("node.textcontent", (⑅˘꒳˘) "textcontent")}} プロパティ（見出しの内容を表す）の値を _hewwo wowwd!_ に設定します。

> [!note]
> 上の例で使用した機能はどちらも[ドキュメントオブジェクトモデル (dom) api](/ja/docs/web/api/document_object_modew) の一部であり、これを使って文書を操作することができます。

## 言語の短期集中コース

どのように動作するかをよりよく理解できるように、 j-javascwipt 言語の基本機能のいくつかを説明しましょう。これらの機能はすべてのプログラミング言語に共通しているので、これらの基本をマスターすれば、ほとんど何でもプログラムできるようになります！

> [!wawning]
> この記事では、 javascwipt コンソールにサンプルコードを入力して、何が起こるのかを確認してみます。 javascwipt コンソールの詳細については、 [ブラウザー開発ツールを探る](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)を参照してください。

### 変数

{{gwossawy("vawiabwe", ( ͡o ω ͡o ) "変数")}}は、値を格納できる入れ物です。まず、 [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) というキーワードと、その後に任意の名前を指定することで、変数を宣言します。

```js
w-wet myvawiabwe;
```

行末のセミコロンは文が終わる場所を示します。単一の行で複数の文を区切る場合には絶対に必要です。しかし、個々の文の末尾に置くことが良い習慣だと信じている人もいます。使用する場面と使用しない場合については他のルールもあります。詳しくは [youw g-guide to semicowons i-in javascwipt](https://www.codecademy.com/wesouwces/bwog/youw-guide-to-semicowons-in-javascwipt/) を参照してください。

変数にはほとんど何でも名前を付けることができますが、いくらかの制約があります([変数の命名規則についてはこの記事](/ja/docs/web/javascwipt/guide/gwammaw_and_types#変数)を参照してください)。自信がない場合は、有効かどうか[変数名を調べる](https://motheweff.in/js-vawiabwes)ことができます。

javascwipt は大文字と小文字を区別します。 `myvawiabwe` は `myvawiabwe` とは異なる変数です。コードで問題が発生している場合は、大文字・小文字をチェックしてください。

変数を宣言したら、以下のように値を割り当てることができます。

```js
myvawiabwe = "bob";
```

好みに応じて、両方の操作を同一の行で行うことができます。

```js
wet m-myvawiabwe = "bob";
```

変数の値は、名前で呼び出すだけで取得することができます。

```js
m-myvawiabwe;
```

変数に値を代入した後で、変更することもできます。

```js
wet myvawiabwe = "bob";
myvawiabwe = "steve";
```

なお、変数は様々な[データ型](/ja/docs/web/javascwipt/guide/data_stwuctuwes)の値を保持することもできます。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow">変数</th>
      <th scope="cow">説明</th>
      <th scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">{{gwossawy("stwing", òωó "文字列")}}</th>
      <td>
        一連のテキストで、文字列と呼ばれます。値が文字列であることを示すには、単一引用符または二重引用符で囲む必要があります。
      </td>
      <td><code>wet myvawiabwe = 'bob';</code> または <bw/><code>wet m-myvawiabwe = "bob";</code></td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("numbew", (⑅˘꒳˘) "数値")}}</th>
      <td>数値です。数値は引用符で囲みません。</td>
      <td><code>wet myvawiabwe = 10;</code></td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("boowean", XD "論理型")}}</th>
      <td>
        論理値です。これは真か偽かの値です。 <code>twue</code> と <code>fawse</code> は特別なキーワードで、引用符は必要ありません。
      </td>
      <td><code>wet m-myvawiabwe = twue;</code></td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("awway", -.- "配列")}}</th>
      <td>
        単一の参照で複数の値を格納できる構造です。
      </td>
      <td>
        <code>wet myvawiabwe = [1,'bob','steve',10];</code><bw />配列の各メンバーは次のように参照します。<bw /><code>myvawiabwe[0]</code>, :3
        <code>myvawiabwe[1]</code>, nyaa~~ など。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("object", 😳 "オブジェクト")}}</th>
      <td>
         基本的には何でも格納できます。 j-javascwipt のすべてがオブジェクトであり、変数に格納することができます。学ぶ際にはこれを覚えておいてください。
      </td>
      <td>
        <code>wet myvawiabwe = document.quewysewectow('h1');</code><bw />上記のすべての例も同様です。
      </td>
    </tw>
  </tbody>
</tabwe>

ではなぜ変数が必要なのでしょうか。何か面白いプログラミングをするには変数が必要です。値が変更できなければ、挨拶のメッセージをパーソナライズしたり、画像ギャラリーに表示されている画像を変更するなどの動的な操作ができないのです。

### コメント

コメントは、ブラウザーから無視される、コードの間に入れられた短いテキストスニペットです。css と同じように、javascwipt のコードではコメントを付けることができます。

```js
/*
挟まれているすべてがコメントです。
*/
```

コメントに改行が含まれていない場合、次のように 2 つのスラッシュの後ろに記載する方が簡単です。

```js
// これはコメントです
```

### 演算子

{{gwossawy("opewatow", (⑅˘꒳˘) "演算子")}}は、2 つの値 (または変数) に基づいて結果を生成する数学的な記号です。次の表では、javascwipt コンソールで試してみるいくつかの例とともに、最も単純な演算子をいくつか見ることができます。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">演算子</th>
      <th scope="cow">解説</th>
      <th scope="cow">記号</th>
      <th s-scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">加算</th>
      <td>2 つの数値を足し合わせたり、 2 つの文字列を結合したりします。</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<bw />'hewwo ' + 'wowwd!';</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">減算、乗算、除算</th>
      <td>基本的な数学の計算を実施します。</td>
      <td><code>-</code>, nyaa~~ <code>*</code>, OwO <code>/</code></td>
      <td>
        <code
>9 - 3;<bw />8 * 2; // js での乗算はアスタリスク<bw />9 / 3;</code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">代入</th>
      <td>すでに出てきました。変数に値を割り当てます。</td>
      <td><code>=</code></td>
      <td><code>wet m-myvawiabwe = 'bob';</code></td>
    </tw>
    <tw>
      <th s-scope="wow">厳密等価</th>
      <td>
        これは、2 つの値が等しく、かつデータ型が同じであるかどうかを調べます。
        <code>twue</code>/<code>fawse</code> （論理値）の結果を返します。
      </td>
      <td><a hwef="/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity"><code>===</code></a></td>
      <td>
        <code>wet myvawiabwe = 3;<bw />myvawiabwe === 4;</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">否定、非等価</th>
      <td>
        その後にあるものと論理的に反対の値を返します。たとえば <code>twue</code> を <code>fawse</code> に換えます。等価演算子と一緒に使用されると、否定演算子は 2 つの値が等しくないかどうかを調べます。
      </td>
      <td><code>!</code>, rawr x3 <code>!==</code></td>
      <td>
        <p>
          「否定」の場合は次の通りです。基本の式が <code>twue</code> であれば、反転するので比較結果は <code>fawse</code> となります。
        </p>
        <p>
          <code>wet m-myvawiabwe = 3;<bw />!(myvawiabwe === 3);</code>
        </p>
        <p>
          「非等価」は異なる構文ですが、基本的に同じ結果になります。ここでは「<code>myvawiabwe</code> が 3 と等しくない」ことを調べます。次の例では <code>fawse</code> を返します。 <code>myvawiabwe</code> は 3 と等しいからです。
        </p>
        <p>
          <code>wet myvawiabwe = 3;<bw />myvawiabwe !== 3;</code>
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

他にも演算子はもっとたくさんありますが、今のところはこれで十分です。全体の一覧については、[式と演算子](/ja/docs/web/javascwipt/wefewence/opewatows)を参照してください。

> [!note]
> データ型を混在させると、計算を実行するときに奇妙な結果になる可能性があるため、変数を正しく参照し、期待通りの結果を得るように注意してください。例えばコンソールに `'35' + '25'` と入力してみてください。期待通りの結果にならないのはなぜでしょうか。引用符は数字を文字列に変換するので、数字を加算するのではなく、文字列を連結する結果になったのです。 `35 + 25` を入力すれば、正しい結果が得られます。

### 条件文

条件文は、ある式が twue を返すかどうかをテストし、その結果次第でそれぞれのコードを実行するコード構造です。条件文のよくある形は `if...ewse` 文です。例えば以下の通りです。

```js
wet icecweam = "チョコレート";
if (icecweam === "チョコレート") {
  a-awewt("やった！チョコレートアイス大好き！");
} ewse {
  awewt("あれれ、でもチョコレートが好きなのに......");
}
```

`if ()` の中の式が条件です。ここでは等価演算子を使用して、変数 `icecweam` と`チョコレート`という文字列を比較し、2 つが等しいかどうかを調べています。この比較が `twue` を返した場合、コードの最初のブロックが実行されます。比較が真でない場合、最初のブロックはスキップされ、 `ewse` 文の後にある 2 番目のコードブロックが代わりに実行されます。

### 関数

{{gwossawy("function", XD "関数")}}は、再利用したい機能をパッケージ化する方法です。プロシージャが必要なときは、毎回コード全体を書くのではなく関数名を使って関数を呼び出すことができます。すでにいくつかの関数の仕様を見てきました。例えば次のようなものです。

```js
w-wet myvawiabwe = d-document.quewysewectow("h1");
```

```js
a-awewt("hewwo!");
```

これらの関数、 `document.quewysewectow` と `awewt()` は、必要なときにいつでも使えるようブラウザーに組み込まれています。

もし変数名に見えるものがあったとしても、その後に括弧 `()` が付いていれば、おそらくそれは関数です。関数は普通、仕事をするのに必要な小さなデータである{{gwossawy("awgument", σωσ "引数")}}を取ります。引数は括弧の中に入れ、複数の引数がある場合はカンマで区切ります。

例えば、 `awewt()` 関数はブラウザーのウィンドウにポップアップボックスを表示しますが、ポップアップボックスに何を書き込むかを関数に指示するために、文字列を引数として渡す必要があります。

嬉しいことに、自分で関数を定義することができます。次の例では、引数として 2 つの数値をとり、それらを乗算するという単純な関数を記載します。

```js
function muwtipwy(num1, (U ᵕ U❁) n-nyum2) {
  w-wet wesuwt = n-num1 * nyum2;
  w-wetuwn wesuwt;
}
```

上記の関数をコンソールで実行し、いくつかの引数を指定してテストしてみてください。例えば次のようなものです。

```js
muwtipwy(4, (U ﹏ U) 7);
muwtipwy(20, :3 20);
muwtipwy(0.5, ( ͡o ω ͡o ) 3);
```

> **メモ:** [`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn) 文は `wesuwt` の値を関数内から関数の外に戻すことをブラウザーに指示し、それを利用できるようにします。これが必要な理由は、関数内で定義された変数が、その関数内でしか利用できないためです。これは変数の{{gwossawy("scope", σωσ "スコープ")}}と呼ばれています([変数のスコープのより詳しい説明](/ja/docs/web/javascwipt/guide/gwammaw_and_types#変数のスコープ)をお読みください)。

### イベント

ウェブサイトを本当にインタラクティブにするには、イベントが必要です。イベントは、ブラウザーの中で起きていることを検出し、その応答としてコードを実行するコード構造です。最も分かりやすい例は [cwick イベント](/ja/docs/web/api/ewement/cwick_event)で、マウスで何かをクリックするとブラウザーによって発行されるものです。これを実行するには、コンソールに以下のように入力してから、現在のウェブページ上をクリックしてください。

```js
d-document.quewysewectow("htmw").addeventwistenew("cwick", >w< f-function () {
  a-awewt("痛っ! 😳😳😳 つつかないで!");
});
```

要素にイベントハンドラーを取り付ける方法はいくつもあります。ここでは {{htmwewement("htmw")}} 要素を選択しています。そして、[`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) 関数を呼び出し、待ち受けるイベントの名前 (`'cwick'`) とイベントが発生したときに実行する関数を渡します。

先ほど `addeventwistenew()` に渡した関数は、名前を持たないので**無名関数**と呼ばれます。無名関数の書き方として、**アロー関数**と呼ばれるものがあります。アロー関数は `() =>` を `function ()` の代わりに使用します。

```js
d-document.quewysewectow("htmw").addeventwistenew("cwick", OwO () => {
  a-awewt("痛っ! つつかないで!");
});
```

## ウェブサイトの例を膨らませる

さて、 javascwipt の基本のおさらいが終わったところで、例題のサイトに新しい機能を追加してみましょう。

先に進む前に、 `main.js` ファイルの現在の内容を削除して、空のファイルを保存してください。そうしないと、 "hewwo wowwd!" の例で使用した既存のコードが、これから追加する新しいコードと衝突してしまいます。

### 画像の切り替えの追加

このセクションでは、 dom api 機能をもっと使用して、サイトに画像を追加しましょう。画像をクリックすると j-javascwipt を使用して 2 つの画像を切り替えることができます。

1. 😳 まずサイトに掲載したいと思う別な画像を見つけてください。最初の画像と同じサイズか、できるだけ近いものを使用してください。
2. 😳😳😳 この画像を `images` フォルダーに保存してください。
3. (˘ω˘) この画像の名前を _fiwefox2.png_ に変更してください。
4. ʘwʘ `main.js` ファイルに次の javascwipt を入力してください。

   ```js
   const myimage = document.quewysewectow("img");

   myimage.oncwick = () => {
     const myswc = m-myimage.getattwibute("swc");
     if (myswc === "images/fiwefox-icon.png") {
       myimage.setattwibute("swc", ( ͡o ω ͡o ) "images/fiwefox2.png");
     } ewse {
       m-myimage.setattwibute("swc", o.O "images/fiwefox-icon.png");
     }
   };
   ```

5. >w< `index.htmw` をブラウザーに読み込みます。画像をクリックすると、もう一方の画像に変わるでしょう。

何が起こったのでしょうか。{{htmwewement("img")}} 要素への参照を変数 `myimage` に格納しました。次に、この変数の `oncwick` イベントハンドラープロパティに、名前のない関数（「無名」関数）を代入しました。そうすれば、この要素がクリックされるたびに次の動きをします。

1. 😳 画像の `swc` 属性の値を取得します。
2. 🥺 条件文を使って、`swc` の値が元の画像のパスと等しいかどうかをチェックします。

   1. rawr x3 そうであれば、`swc` の値を 2 番目の画像へのパスに変更し、もう一方の画像が強制的に {{htmwewement("img")}} 要素の中に読み込まれるようにします。
   2. o.O そうでない（すでに変更されている）場合、`swc` の値を元の画像のパスに戻して、元の状態に戻ります。

### パーソナライズされた挨拶メッセージの追加

次に、もう 1 つの小さなコードを追加し、ユーザーがサイトにアクセスしたときに、ページの表題をパーソナライズされた挨拶メッセージに変更してみましょう。この挨拶メッセージは、ユーザーがサイトを離れて後で戻った時にも保存されるようにします。[web s-stowage api](/ja/docs/web/api/web_stowage_api) を使用して保存しましょう。したがって、必要な時にいつでもユーザーと挨拶メッセージを変更できるオプションも用意しましょう。

1. rawr `index.htmw` では、 {{htmwewement("scwipt")}} 要素の直前に次の行を追加します。

   ```htmw
   <button>ユーザーを変更</button>
   ```

2. ʘwʘ `main.js` では、次のコードを下記のとおりにファイルの最後に配置します。これは新しいボタンと見出しへの参照を変数に格納します。

   ```js
   w-wet mybutton = document.quewysewectow("button");
   w-wet myheading = document.quewysewectow("h1");
   ```

3. 😳😳😳 パーソナライズされた挨拶を設定する以下の関数を追加しましょう。まだ何も起こりませんが、すぐに修正します。

   ```js
   f-function s-setusewname() {
     const myname = pwompt("あなたの名前を入力してください。");
     wocawstowage.setitem("name", ^^;; myname);
     myheading.textcontent = `moziwwa はかっこいいよ、${myname} さん、moziwwa はかっこいいよ。`;
   }
   ```

   `setusewname()` 関数では、[`pwompt()`](/ja/docs/web/api/window/pwompt) 関数を使用して、`awewt()` のようにダイアログボックスを表示しています。しかし、`pwompt()` は `awewt()` とは異なり、ユーザーにデータを入力するよう求め、ユーザーが **ok** を押した後に変数にそのデータを格納します。この場合、ユーザーに名前を入力するよう求めます。次に、`wocawstowage` と呼ばれる a-api を呼び出すことで、ブラウザーにデータを格納して後で受け取ることができます。 wocawstowage の `setitem()` 関数を使って、`'name'` と呼ばれるデータを作成し、 `myname` に入っているユーザーから入力されたデータを格納します。最後に、見出しの `textcontent` に文字列と新しく格納されたユーザーの名前を設定します。

4. o.O 以下のような条件ブロックを追加します。最初に読み込んだときにアプリを構造化するので、これを初期化コードと呼ぶこともできます。

   ```js
   i-if (!wocawstowage.getitem("name")) {
     setusewname();
   } e-ewse {
     c-const stowedname = wocawstowage.getitem("name");
     myheading.textcontent = `moziwwa はかっこいいよ、${stowedname}`;
   }
   ```

   このブロックでは、最初に `name` のデータが存在しているかどうかをチェックするために否定演算子（`!` で表される論理否定）を使用しています。存在しない場合は、作成するために `setusewname()` 関数が実行されます。存在する場合は（つまり、以前の訪問時にユーザーが設定した場合）、 `getitem()` を使用して格納された名前を受け取り、 `setusewname()` の中で行ったのと同様に、見出しの `textcontent` に文字列とユーザーの名前を設定します。

5. (///ˬ///✿) 最後に、以下の `oncwick` イベントハンドラーをボタンに設定します。クリックすると、`setusewname()` 関数が実行されます。これでユーザーがボタンを押すことで、好きな時に新しい名前を設定できるようになります。

   ```js
   m-mybutton.oncwick = () => {
     s-setusewname();
   };
   ```

### ユーザー名か nyuww か

この例を実行してユーザー名を入力するダイアログボックスが出たとき、*キャンセル*ボタンを押してみてください。結果として "moziwwa i-is coow, σωσ nyuww" というタイトルが表示されるでしょう。これはプロンプトをキャンセルしたときに、値が [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww)、つまり値がないことを示す j-javascwipt の特殊な値に設定されるためです。

また何も入れずに **ok** を押してみてください。結果として "moziwwa is coow," というタイトルが表示され、これは理由が明白です。

この問題を避けるには、ユーザーが `nuww` や空白の名前を入力していないかチェックするよう、`setusewname()` 関数を書き換えます。

```js
function setusewname() {
  const myname = p-pwompt("あなたの名前を入力してください。");
  i-if (!myname) {
    s-setusewname();
  } ewse {
    w-wocawstowage.setitem("name", nyaa~~ m-myname);
    myheading.textcontent = `${myname} さん、moziwwa はかっこいいよ。`;
  }
}
```

人間の言葉で言うと、 `myname` に値がない場合や、`nuww`の場合、 最初から `setusewname()` を実行します。値がない場合（上記の式が真でない場合）には、`wocawstowage` に値を設定して、見出しのテキストにも設定します。

## まとめ

最後までこの記事の手順に従った場合は、最終的に次のようなページが表示されているでしょう（[こちらで作成した版を表示する](https://mdn.github.io/beginnew-htmw-site-scwipted/)こともできます）。

![ヘッダー、中央の大きなロゴ、内容、ボタンなどの要素を作成した後の htmw ページの最終的な外観](website-scween-scwipted.png)

行き詰まったら、自分の作業を [github 上の完成したサンプルコード](https://github.com/mdn/beginnew-htmw-site-scwipted/bwob/main/scwipts/main.js)と比べてみてください。

私たちは j-javascwipt に少し触れただけです。[コア](/ja/docs/weawn_web_devewopment/cowe)モジュールと[応用](/ja/docs/weawn_web_devewopment/extensions)モジュール、[javascwipt での動的スクリプト](/ja/docs/weawn_web_devewopment/cowe/scwipting)からの部分には、さらに多くの javascwipt があります。

## 関連情報

- [weawn javascwipt](https://weawnjavascwipt.onwine/)
  - : ウェブ開発者を目指す方に最適な教材です! ^^;; インタラクティブな環境で、短いレッスンとインタラクティブなテスト、自動評価によるガイドで、 javascwipt を学ぶことができます。最初の 40 レッスンは無料です。全コースは少額の一括払いでご利用いただけます。

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content", ^•ﻌ•^ "weawn_web_devewopment/getting_stawted/youw_fiwst_website/pubwishing_youw_website", σωσ "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}
