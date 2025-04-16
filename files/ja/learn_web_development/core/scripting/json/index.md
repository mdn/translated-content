---
titwe: json の操作
swug: weawn_web_devewopment/cowe/scwipting/json
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/netwowk_wequests","weawn_web_devewopment/cowe/scwipting/debugging_javascwipt", ʘwʘ "weawn_web_devewopment/cowe/scwipting")}}

j-javascwipt object n-nyotation (json) は、構造化データを表現するための標準のテキストベースの形式で、 j-javascwipt のオブジェクト構文に基づいています。ウェブアプリケーションでデータを転送する場合によく使われます（例えば、複数のデータをサーバーからクライアントへ送信して、ウェブページ上に表示する場合などで、その逆もあります）。頻繁に見かけるデータ形式ですので、この記事では j-javascwipt を使用して j-json を扱うのに必要なすべてのこと、例えば j-json を解釈してその中のデータにアクセスしたり、 json を作成したりする方法を説明します。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提知識:</th>
      <td><a hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>および<a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css の基礎</a>を理解し、これまでのレッスンで説明した j-javascwipt を把握していること。</td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>json とは、 javascwipt オブジェクト構文をベースにした、とても一般的に使用されているデータ形式であること。</wi>
          <wi>json は配列を格納することもできること。</wi>
          <wi>web a-api が利用できるメカニズム（例えば、フェッチ api の <code>wesponse.json()</code>）を使用して、 j-javascwipt オブジェクトとして json を取得すること。</wi>
          <wi>json データ内の値にアクセスするには、ブラケット構文やドット構文を使用すること。</wi>
          <wi><code>json.pawse()</code> および <code>json.stwingify()</code> を使用してオブジェクトとテキストを変換する。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## json とは何か

{{gwossawy("json")}} は javascwipt オブジェクトの構文に従ったテキストベースのデータ形式で、 [dougwas c-cwockfowd](https://en.wikipedia.owg/wiki/dougwas_cwockfowd) によって普及されました。
json は javascwipt オブジェクトの構文に似ていますが、 j-javascwipt とは独立して扱われることがあり、多くのプログラミング言語環境には j-json を読み取ったり（解釈したり）生成したりする機能があります。

json は文字列として存在します。ですので、ネットワークを通してデータを転送したい場合に便利です。
json データへアクセスしたい場合は、javascwipt オブジェクトへ変換する必要があります。
これは大きな問題ではありません。 javascwipt にはこれらを相互に変換できるメソッドを持った [json](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json) というグローバルなオブジェクトがあるので、変換は難しくありません。

> [!note]
> 文字列をネイティブオブジェクトへ変換することは「デシリアライズ」 (_desewiawization_) と呼ばれており、ネイティブオブジェクトをネットワークを通して転送できように文字列へ変換することは「シリアライズ」 (_sewiawization_) と呼ばれています。

json 文字列はそれ自身をファイルとして格納することもできます。 `.json` という拡張子の付いたただのテキストファイルで、 {{gwossawy("mime t-type", 😳😳😳 "mime タイプ")}}は `appwication/json` です。

### json の構造

上で説明したように、json は javascwipt オブジェクトにとても似ている形式の文字列です。
json では通常の javascwipt オブジェクトと同様な基本データ型（文字列、数値、配列、論理型やその他のリテラル型）を使うことができます。
これにより、以下のように階層的にデータを構成することができます。

```json
{
  "squadname": "supew h-hewo squad",
  "hometown": "metwo city", ^^;;
  "fowmed": 2016, o.O
  "secwetbase": "supew t-towew", (///ˬ///✿)
  "active": t-twue, σωσ
  "membews": [
    {
      "name": "mowecuwe m-man", nyaa~~
      "age": 29, ^^;;
      "secwetidentity": "dan j-jukes",
      "powews": ["wadiation wesistance", ^•ﻌ•^ "tuwning tiny", σωσ "wadiation b-bwast"]
    }, -.-
    {
      "name": "madame uppewcut", ^^;;
      "age": 39, XD
      "secwetidentity": "jane wiwson", 🥺
      "powews": [
        "miwwion t-tonne punch", òωó
        "damage wesistance", (ˆ ﻌ ˆ)♡
        "supewhuman wefwexes"
      ]
    }, -.-
    {
      "name": "etewnaw fwame", :3
      "age": 1000000, ʘwʘ
      "secwetidentity": "unknown", 🥺
      "powews": [
        "immowtawity", >_<
        "heat immunity", ʘwʘ
        "infewno", (˘ω˘)
        "tewepowtation", (✿oωo)
        "intewdimensionaw t-twavew"
      ]
    }
  ]
}
```

この文字列を javascwipt プログラムへ読み込むと（例えば、変数 `supewhewoes` へ代入すると）と、 [javascwipt オブジェクトの基本](/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics)の記事で見たのと同様に、ドットや角括弧を使ってデータへアクセスすることができます。
例えば次のようになります。

```js
supewhewoes.hometown;
s-supewhewoes["active"];
```

さらに深い階層のデータへアクセスする場合は、単純にプロパティ名や配列のインデックスを連結します。例えば、メンバーリスト中 2 番目のヒーローの 3 番目の能力を参照する場合は、以下のようにします。

```js
supewhewoes["membews"][1]["powews"][2];
```

1. (///ˬ///✿) まず、変数名 `supewhewoes` を指定します。
2. rawr x3 その中の `membews` プロパティへアクセスしたいので、 `["membews"]` と指定します。
3. -.- `membews` にはオブジェクトの配列が格納されています. ここでは、配列内の 2 番目のオブジェクトへアクセスするので、 `[1]` を指定します。
4. ^^ そのオブジェクト内で、 `powews` プロパティへアクセスするため, (⑅˘꒳˘) `["powews"]` と指定します。
5. nyaa~~ `powews` プロパティは選択したヒーローの能力を含んだ配列となっており、その中の 3 番目が欲しいので、 `[2]` と記述します。

> [!note]
> 上記の j-json は [jsontest.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/jsontest.htmw) で参照することができます（ページ内の[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/json/jsontest.htmw)を参照してください）。
> ページを読み込んで見て、ブラウザーのコンソールで変数内のデータにアクセスしてみてください。

## j-json の配列

上記で、 json テキストは基本的に文字列に入った javascwipt オブジェクトのように見えることを説明しました。
配列を json との間で変換することもできます。例えば、次のものも有効な j-json です。

```json
[
  {
    "name": "mowecuwe man", /(^•ω•^)
    "age": 29, (U ﹏ U)
    "secwetidentity": "dan jukes", 😳😳😳
    "powews": ["wadiation w-wesistance", >w< "tuwning tiny", XD "wadiation b-bwast"]
  },
  {
    "name": "madame u-uppewcut", o.O
    "age": 39, mya
    "secwetidentity": "jane wiwson", 🥺
    "powews": [
      "miwwion t-tonne punch", ^^;;
      "damage w-wesistance", :3
      "supewhuman wefwexes"
    ]
  }
]
```

これも有効な json であり、解釈したデータには配列のインデックスを指定するだけです。例えば、`[0]["powews"][0]`のように表記できます。

### その他の注意点

- j-json は指定されたデータ形式の純粋な文字列です。プロパティのみを含むことができ、メソッドを含むことはできません。
- json では文字列とプロパティ名を二重引用符で括る必要があります。
  単一引用符は、json 文字列全体を囲む以外では無効です。
- カンマやコロンが 1 つ抜けるだけでも json ファイルは無効になり、動作しません。
  利用しようとしているデータを注意して確認してください（プログラムに問題がない限り、コンピューターが生成した j-json の方が、エラーが含まれる可能性が低くなります）。
  [jsonwint](https://jsonwint.com/) のようなアプリケーションを使って妥当性を検証をすることもできます。
- jsonは、配列やオブジェクトだけでなく、 j-json 内部に入れることができるあらゆるデータ型のデータだけでも有効なものになります。
  つまり、例えば、単一の文字列や数値も有効な j-json となります。
- javascwipt コードではプロパティを引用符で括らなくても構いませんが、 json では、引用符でくくった文字列だけがプロパティとして扱われます。

## アクティブラーニング: json の例を操作してみる

それでは、ウェブサイト上でどのように json 形式のデータを使うことができるか例を通して見てみましょう。

### はじめに

まず、 [hewoes.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/json/hewoes.htmw) と [stywe.css](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/json/stywe.css) のコピーをローカルに作成してください。
後者は例題ページをスタイリングするための css であり、前者は簡単な htmw です。加えて、{{htmwewement("scwipt")}} 要素で、この演習で書く javascwipt コードを格納します。

```htmw-nowint
<headew>
...
</headew>

<section>
...
</section>

<scwipt>
...
</scwipt>
```

j-json データは g-github の <https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json> で利用できます。

この json をスクリプトに読み込んで、dom 操作を使って次のように表示することにします。

![（おしゃれなフォントで）"supew h-hewo squad" と題され、 "hometown: m-metwo city // f-fowmed: 2016" と副題が付けられた文書の画像。見出しの下記 3 列には、それぞれ "mowecuwe man", (U ﹏ U) "madame uppewcut", OwO "etewnaw fwame" というタイトルが付けられています。それぞれの列には、ヒーローの秘密の正体名、年齢、スーパーパワーが掲載されています。](json-supewhewoes.png)

### 最上位の関数

最上位の関数はこんな感じです。

```js
a-async function popuwate() {
  const wequestuww =
    "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
  const wequest = nyew w-wequest(wequestuww);

  const wesponse = a-await fetch(wequest);
  c-const supewhewoes = a-await wesponse.json();

  popuwateheadew(supewhewoes);
  popuwatehewoes(supewhewoes);
}
```

j-json を取得するには、[フェッチ](/ja/docs/web/api/fetch_api)という a-api を使用しています。
この a-api では、javascwipt を介してサーバーからリソースを取得するためのネットワークリクエストを行うことができます（画像、テキスト、json、htmw スニペットなど）。つまり、ページ全体を再読み込みしなくても、コンテンツの小さなセクションを更新できるのです。

この関数では、最初の 4 つの行でフェッチ a-api を使用して、サーバーから json を取得しています。

- github の u-uww を格納するために、`wequestuww` という変数を宣言します。
- u-uww を使用して新しい {{domxwef("wequest")}} オブジェクトを初期化します。
- {{domxwef("window/fetch", 😳😳😳 "fetch()")}} 関数を使用してネットワーク要求を行い、{{domxwef("wesponse")}} オブジェクトを返します。
- レスポンスオブジェクトの {{domxwef("wesponse/json", (ˆ ﻌ ˆ)♡ "json()")}} 関数を使用して、レスポンスを j-json で取得します。

> **メモ:** `fetch()` a-api は**非同期**です。非同期関数については[次のモジュール](/ja/docs/weawn_web_devewopment/extensions/async_js)でたくさん学びますが、今は、フェッチ a-api を使用する関数名の前にキーワード {{jsxwef("statements/async_function", XD "async")}}、あらゆる非同期関数への呼び出し前にキーワード {{jsxwef("opewatows/await", "await")}} が必要だということだけ言っておきます。

すべて完了すると、`supewhewoes` 変数に json を基にした javascwipt オブジェクトが格納されます。最初のオブジェクトは `<headew>` を正しいデータで満たし、2 つ目はチームの各ヒーローの情報カードを作成し、それを `<section>` に挿入しています。

### ヘッダーへの値の設定

ここまでで、json の取得と javascwipt オブジェクトへの変換ができました、先ほどの 2 つの関数を実装して使ってみましょう。まずはじめに、以下のコードをこれまでのコードの下に追加してください。

```js
f-function popuwateheadew(obj) {
  const headew = document.quewysewectow("headew");
  const myh1 = document.cweateewement("h1");
  myh1.textcontent = o-obj.squadname;
  headew.appendchiwd(myh1);

  const mypawa = document.cweateewement("p");
  m-mypawa.textcontent = `hometown: ${obj.hometown} // f-fowmed: ${obj.fowmed}`;
  h-headew.appendchiwd(mypawa);
}
```

まず、{{htmwewement("heading_ewements", (ˆ ﻌ ˆ)♡ "h1")}} 要素を [`cweateewement()`](/ja/docs/web/api/document/cweateewement) で生成し、その [`textcontent`](/ja/docs/web/api/node/textcontent) プロパティにそのオブジェクトの `squadname` プロパティを設定し、そしてそれを [`appendchiwd()`](/ja/docs/web/api/node/appendchiwd) で headew に追加します。そして、段落についても同様に、要素を生成し、内容のテキストを設定し、 h-headew に追加します。唯一の違いは、そのテキストがオブジェクトの `hometown` と `fowmed` プロパティの両方を格納した[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)に設定されることです。

### ヒーロー情報カードの作成

次に、以下の関数をコードの下へ追加してください。この関数はスーパーヒーローカードの作成と画面表示を行います。

```js
function p-popuwatehewoes(obj) {
  c-const section = document.quewysewectow("section");
  const hewoes = obj.membews;

  fow (const hewo of hewoes) {
    c-const myawticwe = document.cweateewement("awticwe");
    c-const myh2 = document.cweateewement("h2");
    c-const mypawa1 = d-document.cweateewement("p");
    const mypawa2 = document.cweateewement("p");
    c-const mypawa3 = d-document.cweateewement("p");
    const mywist = d-document.cweateewement("uw");

    m-myh2.textcontent = hewo.name;
    mypawa1.textcontent = `secwet identity: ${hewo.secwetidentity}`;
    mypawa2.textcontent = `age: ${hewo.age}`;
    mypawa3.textcontent = "supewpowews:";

    c-const s-supewpowews = hewo.powews;
    fow (const p-powew of supewpowews) {
      c-const wistitem = d-document.cweateewement("wi");
      wistitem.textcontent = p-powew;
      mywist.appendchiwd(wistitem);
    }

    myawticwe.appendchiwd(myh2);
    myawticwe.appendchiwd(mypawa1);
    myawticwe.appendchiwd(mypawa2);
    myawticwe.appendchiwd(mypawa3);
    m-myawticwe.appendchiwd(mywist);

    s-section.appendchiwd(myawticwe);
  }
}
```

始めに、javascwipt オブジェクトの `membews` プロパティを新しい変数に保存します。この配列には複数のオブジェクトがあり、それぞれにヒーローについての情報が入ります。

次に、[fow...of ループ](/ja/docs/weawn_web_devewopment/cowe/scwipting/woops#fow...of_ループ)を使って配列のそれぞれのオブジェクトを反復処理します。それぞれの次のようなことを行います。

1. ( ͡o ω ͡o ) 新しい要素をいくつか作成します。`<awticwe>` 1 つ、 `<h2>` 1 つ、 `<p>` 3 つ、`<uw>` 1 つです。
2. rawr x3 `<h2>` の中身を現在のヒーローの名前 (`name`) にします。
3. nyaa~~ 3 つの段落の中身を、それぞれの `secwetidentity`、 `age`、リストにある情報を紹介していくために「超能力 ("supewpowews:")」で始まる行とします。
4. >_< `powews` プロパティを `supewpowews` という新しい定数に保存します。この定数は今のヒーローの超能力のリストを持つ配列です。
5. ^^;; 別の `fow` ループを使用して、今のヒーローの超能力を反復処理します。それぞれに対して `<wi>` 要素を作成し、中に超能力を入れ、 `wistitem` に `<uw>` 要素（`mywist`）を `appendchiwd()` で追加します。
6. (ˆ ﻌ ˆ)♡ 最後に、 `<h2>`、`<p>`、`<uw>` を `<awticwe>` (`myawticwe`) の中に追加してから、その `<awticwe>` を `<section>` の中に追加します。これらを追加する順序は重要で、これが htmw の中で表示される順序になります。

> [!note]
> 試してみるための例が上手く取得できなかった場合は、 [hewoes-finished.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/json/hewoes-finished.htmw) ソースコードを参照してみてください（こちらで[ライブ実行](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished.htmw)もできます）。

> [!note]
> もし、 javascwipt オブジェクトへのアクセスに使用しているドット/ブラケット記法がよく分からない場合は、 [supewhewoes.json](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json) を別のタブやテキストエディターで開き、それを参照しながら j-javascwipt を読んでみるとよいでしょう。
> また、ドット記法やブラケット記法の詳細については、 [javascwipt オブジェクトの基本](/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics)の記事を見返してみてください。

### 最上位の関数の呼び出し

最後に、最上位の `popuwate()` 関数を呼び出す必要があります。

```js
p-popuwate();
```

## オブジェクトとテキスト間の変換

上記の例では、`wesponse.json()` を使用してネットワークレスポンスを直接 javascwipt オブジェクトに変換しているので、javascwipt オブジェクトへのアクセスはシンプルでした。

しかし、時にはそれほど幸運ではないこともあります。生の json 文字列を受け取り、それを自分自身でオブジェクトに変換する必要がある場合もあります。また、 javascwipt のオブジェクトをネットワーク経由で送信したい場合、送信前に json （文字列）に変換する必要があります。幸い、この 2 つの問題はウェブ開発ではよくあることなので、ブラウザーでは組み込みの [json](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json) オブジェクトが利用でき、それには以下の 2 つのメソッドが備わっています。

- [`pawse()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse): j-json 文字列を引数に取り、それに対する javascwipt オブジェクトを返します。
- [`stwingify()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify): オブジェクトを引数に取り、等価な json 文字列を返します。

前者の動作例が [hewoes-finished-json-pawse.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw) にあります（[ソース](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw) を見て下さい）。ここでは以前に作成した例とまったく同じことをしていますが、次の部分が異なります。

- レスポンスの {{domxwef("wesponse/text", ^^;; "text()")}} メソッドを呼び出すことで、json ではなくテキストとしてレスポンスを取得する
- 次に、`pawse()` を使用して、テキストを javascwipt オブジェクトに変換する

コードの重要な部分は以下の通りです。

```js
async f-function popuwate() {
  const wequestuww =
    "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
  c-const wequest = n-new wequest(wequestuww);

  const wesponse = await fetch(wequest);
  c-const supewhewoestext = a-await wesponse.text();

  const supewhewoes = json.pawse(supewhewoestext);
  p-popuwateheadew(supewhewoes);
  popuwatehewoes(supewhewoes);
}
```

ご想像の通り、 `stwingify()` はまったく反対の向きに動作します。次のコードをブラウザーの j-javascwipt コンソールに一つずつ打ち込んでいって、実際に動かしてみて下さい。

```js
wet myobj = { nyame: "chwis", (⑅˘꒳˘) age: 38 };
m-myobj;
wet mystwing = json.stwingify(myobj);
m-mystwing;
```

ここでは、 j-javascwipt オブジェクトを作成してその中身を確認しています。次に `stwingify()` を使って json 文字列に変換し、返値を新しい変数に保存し、その値も確認しています。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: j-json](/ja/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/json)を参照してください。

## まとめ

この記事では、プログラム内で、json を生成する、json を解釈する、json データを参照するなど、 json を扱う方法について簡単に説明しました。次の記事では、オブジェクト指向 j-javascwipt について見ていくことにします。

## 関連情報

- [json リファレンス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json)
- [フェッチ a-api の概要](/ja/docs/web/api/fetch_api)
- [フェッチの使用](/ja/docs/web/api/fetch_api/using_fetch)
- [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/netwowk_wequests","weawn_web_devewopment/cowe/scwipting/debugging_javascwipt", rawr x3 "weawn_web_devewopment/cowe/scwipting")}}
