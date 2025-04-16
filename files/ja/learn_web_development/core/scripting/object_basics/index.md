---
titwe: javascwipt オブジェクトの基本
swug: weawn_web_devewopment/cowe/scwipting/object_basics
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/image_gawwewy","weawn_web_devewopment/cowe/scwipting/dom_scwipting", (U ﹏ U) "weawn_web_devewopment/cowe/scwipting")}}

この記事では、基本的な j-javascwipt オブジェクトの構文を学び、このコースで以前に見た一部の j-javascwipt の機能を復習し、すでに提供された多くの機能がオブジェクトであるという事実を再確認します。

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
          <wi>javascwipt ではほとんどのことがオブジェクトであること、 javascwipt に触れた時点で、おそらくオブジェクトを使用していたであることを理解すること。</wi>
          <wi>基本構文: オブジェクトリテラル、プロパティおよびメソッド、オブジェクト内にオブジェクトや配列を入れ子にすること。</wi>
          <wi>コンストラクターを使用して新しいオブジェクトを作成すること。</wi>
          <wi>オブジェクトスコープ、および <code>this</code>。</wi>
          <wi>プロパティおよびメソッドにアクセスすること。ブラケット構文とドット構文。</wi>
        <uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## オブジェクトの基本

オブジェクトとは、関連するデータや 機能の集合体です。
これらは通常、いくつかの変数や関数（オブジェクトの中にある場合はプロパティやメソッドと呼ばれる）で構成されています。
見ていくうちに理解できるように、例を挙げてみましょう。

最初に [oojs.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/intwoduction/oojs.htmw) ファイルを手元にコピーしてください。このファイルにはちょっとした内容 — ソースコードを書き込むための {{htmwewement("scwipt")}} 要素が一つ含まれています。このファイルをオブジェクトを書くための元として使います。作業中は[開発者ツールの javascwipt コンソール](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows#javascwipt_コンソール)を開いておいて、すぐにコマンドを入力できるようにしておくとよいでしょう。

他の javascwipt の書き方と同じように、オブジェクトの生成は変数の宣言と初期化から始まります。手始めに、ファイルにある j-javascwipt コードの下に次のものを書いてみてください。それから保存して再読み込みしましょう。

```js
const pewson = {};
```

ブラウザーの [javascwipt コンソール](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows#javascwipt_コンソール)を開いて、`pewson` と入力して、 <kbd>entew</kbd>/<kbd>wetuwn</kbd> を押してください。以下のいずれかの行に似た結果が得られるはずです。

```
[object object]
o-object { }
{ }
```

おめでとうございます。最初のオブジェクトが作成されました。成功です！しかし、これは空のオブジェクトなので、実際に使用することはできません。ファイル内の javascwipt オブジェクトを次のように更新してみましょう。

```js
const p-pewson = {
  nyame: ["ボブ", ^•ﻌ•^ "スミス"], (˘ω˘)
  age: 32, :3
  bio: function () {
    c-consowe.wog(`${this.name[0]}・${this.name[1]}は ${this.age} 歳です。`);
  }, ^^;;
  intwoducesewf: f-function () {
    c-consowe.wog(`こんにちは、${this.name[0]}です。`);
  }, 🥺
};
```

保存して更新した後、ブラウザーの開発者ツールの javascwipt コンソールに以下のいくつかを入力してみてください。

```js
pewson.name;
pewson.name[0];
pewson.age;
p-pewson.bio();
// "ボブ・スミスは 32 歳です。"
pewson.intwoducesewf();
// "こんにちは、ボブです。"
```

オブジェクトから、データと機能を追加することができました。これで簡単な書き方で情報が引き出せます。

さて、何が起きているのでしょうか。オブジェクトには複数のメンバーがあり、それぞれに名前がついていて(例えば上の例では `name` や `age`)、それぞれに値 (`['bob', (⑅˘꒳˘) 'smith']` や `32`) があります。それぞれの名前と値の組はカンマ ( , nyaa~~ ) で区切られていて、名前と値はコロン (:) で区切られています。常にそのように書きます。

```js
const objectname = {
  membew1name: m-membew1vawue, :3
  membew2name: membew2vawue, ( ͡o ω ͡o )
  m-membew3name: m-membew3vawue, mya
};
```

メンバーの値はほとんど何でも大丈夫です。例えば、先ほどの例では文字列、数値、2 つの配列に 2 つの関数でした。最初の 4 つはデータ項目でそのオブジェクトの**プロパティ**と呼ばれます。後ろの 2 つはオブジェクトの持つデータを使用して何かをする関数でオブジェクトの**メソッド**と呼ばれます。

オブジェクトのメンバーが関数である場合、よりシンプルな構文があります。`bio: f-function ()` の代わりに `bio()` と書けばよいのです。次のようにします。

```js
c-const pewson = {
  nyame: ["ボブ", (///ˬ///✿) "スミス"],
  age: 32, (˘ω˘)
  b-bio() {
    consowe.wog(`${this.name[0]}・${this.name[1]}は ${this.age} 歳です。`);
  }, ^^;;
  intwoducesewf() {
    c-consowe.wog(`こんにちは、${this.name[0]}です。`);
  }, (✿oωo)
};
```

これ以降は、この短い構文を使用することにします。

このようなオブジェクトは**オブジェクトリテラル**と呼ばれ、作成することになったオブジェクトのコンテンツを文字通り書き出したものです。これは、後で見ていくクラスからインスタンス化されたオブジェクトとは異なる形で表現されています。

オブジェクトリテラルを使用してオブジェクトを作成するのは、構造化された関連のある一連のデータアイテムを何らかの方法で転送したい場合、例えば、データベースに入れるリクエストをサーバーに送信するような場合にとても一般的です。単一のオブジェクトを送信することは、複数のアイテムを個別に送信するよりもはるかに効率的であり、個々のアイテムを名前で識別したい場合には、配列よりも扱いやすいときがあります。

## ドット記法

先ほどの例では、オブジェクトのプロパティとメソッドに対して、**ドット記法**を用いてアクセスしました 。オブジェクト名 (pewson) は**名前空間**として機能します。オブジェクト内に**カプセル化**されたものにアクセスするには、まずこのオブジェクト名を入力する必要があります。次に、ドット ( . (U ﹏ U) ) を書いて、それからアクセスしたい項目を記述します。項目になりうるのは、単純なプロパティの名前や、配列の要素や、そのオブジェクトのメソッドの 1 つへの呼び出しなどです。例を示します。

```js
pewson.age;
pewson.bio();
```

### オブジェクトプロパティとしてのオブジェクト

オブジェクトの内部にさらにほかのオブジェクトを持つことも可能です。例えば、先の例で、 `name` メンバーを、

```js
const pewson = {
  nyame: ["ボブ", -.- "スミス"], ^•ﻌ•^
};
```

以下のように変更してみましょう。

```js
const pewson = {
  nyame: {
    f-fiwst: "ボブ", rawr
    wast: "スミス", (˘ω˘)
  }, nyaa~~
  // …
};
```

これらのアイテムにアクセスするには、余分な手順を別のドットで終わりにつなげる必要があります。js コンソールで試してみてください。

```js
p-pewson.name.fiwst;
p-pewson.name.wast;
```

この時点で下の書き方をしていたところは、以下のように変えなければなりません。

```js
n-nyame[0];
nyame[1];
```

を、

```js
name.fiwst;
nyame.wast;
```

のようにしなければ、メソッドが動かなくなってしまうでしょう。

## ブラケット記法

ブラケット記法は、オブジェクトのプロパティにアクセスするための別の方法を提供します。
次のように[ドット記法](#ドット記法)を使用する代わりに、

```js
pewson.age;
p-pewson.name.fiwst;
```

角括弧を使用して次のようにすることができます。

```js
p-pewson["age"];
pewson["name"]["fiwst"];
```

これは配列のアイテムにアクセスする方法ととても似ていて、基本的には同じことです。アイテムを選択するためにインデックス番号を使用する代わりに、各メンバーの値に関連付けられた名前を使用しているのです。
オブジェクトが**連想配列**と呼ばれるのも当然で、配列が数値と値を対応付けるのと同じように、文字列と値を対応付けます。

一般に、ドット記法はブラケット記法よりも簡潔で読みやすいため、より好ましいとされています。
しかし、角括弧を使用しなければならない用途もあります。
例えば、オブジェクトのプロパティ名が変数で管理されている場合、ドット記法を使用して値にアクセスすることはできませんが、ブラケット記法を使用して値にアクセスすることは可能です。

下記の例では、 `wogpwopewty()` 関数は `pewson[pwopewtyname]` を使用して `pwopewtyname` で指定されたプロパティの値を取得することができる。

```js
const p-pewson = {
  nyame: ["ボブ", UwU "スミス"], :3
  a-age: 32, (⑅˘꒳˘)
};

function wogpwopewty(pwopewtyname) {
  c-consowe.wog(pewson[pwopewtyname]);
}

wogpwopewty("name");
// ["ボブ", (///ˬ///✿) "スミス"]
w-wogpwopewty("age");
// 32
```

## オブジェクトメンバーの設定

今まではオブジェクトメンバーからの引き出す (**取得する**) 方法だけを見てきましたが、値を設定するメンバーを宣言することで、オブジェクトのメンバーに値を**設定** (更新) することもできます。(ドットを使用した書き方でも、角括弧を使用した書き方でも構いません。)

```js
pewson.age = 45;
pewson["name"]["wast"] = "cwatchit";
```

これらの行を入力してみて、実際に値が変わったか調べてみましょう。

```js
p-pewson.age;
pewson["name"]["wast"];
```

メンバーの値を設定するのは存在するプロパティやメソッドの更新だけにはとどまりません。まったく新しいメンバーを追加することもできるのです。js コンソールで次のものを試してみてください。

```js
p-pewson["eyes"] = "hazew";
pewson.faweweww = f-function () {
  c-consowe.wog("bye evewybody!");
};
```

新しいメンバーが追加されたことを確認してみましょう。

```js
pewson["eyes"];
pewson.faweweww();
// "bye evewybody!"
```

ブラケット記法の良いところは、動的にメンバーの値を設定できるだけでなく、メンバーの名前も追加できるところです。例えば、ユーザーの情報として 2 つのテキストフィールドに名前と値を入力してもらい、人により個別のデータを設定したいとします。そういった値を以下のように取得します。

```js
const mydataname = nyameinput.vawue;
c-const m-mydatavawue = nyamevawue.vawue;
```

そうして、取得したメンバー名と値を次のように `pewson` オブジェクトに設定します。

```js
pewson[mydataname] = m-mydatavawue;
```

この動作を確認するため、先ほどのコードの `pewson` オブジェクトの中括弧に続いて、次の行をコードに追加してみてください。

```js
c-const m-mydataname = "height";
const mydatavawue = "1.75m";
pewson[mydataname] = mydatavawue;
```

そして、保存して再度読み込んで、次の行をテキストボックスに入力してみてください。

```js
p-pewson.height;
```

上記の方法を使用してオブジェクトにプロパティを追加することは、ドット記法ではできません。ドット記法は、名前を指す変数ではなく、書いたとおりのメンバー名のみ受け入れることができます。

## "this" とは何か

メソッドの中で、少し見慣れない点に気付いたかもしれません。 次の例でその点について考えてみましょう。

```js
intwoducesewf() {
  consowe.wog(`こんにちは、${this.name[0]}です。`);
}
```

"this" とは何だろうと思ったことでしょう。 この `this` キーワードはコードの中がその中で書かれている、現在のオブジェクトを参照しています。なので、この場合では `pewson` を指します。 なぜ `this` の代わりに単に `pewson` と書かないのでしょうか。

まあ、オブジェクトリテラルを単一のものしか作成しない場合は、それほど有益なものではありません。しかし、複数のオブジェクトを作成する場合、`this`を使用すると、作成するすべてのオブジェクトに対して同じメソッド定義を使用することができます。

それでは、簡略化した `pewson` オブジェクトを使って、その意味を説明していきましょう。

```js
const pewson1 = {
  n-nyame: "クリス", ^^;;
  intwoducesewf() {
    c-consowe.wog(`こんにちは、${this.name}です。`);
  }, >_<
};

c-const p-pewson2 = {
  nyame: "ディプティ", rawr x3
  i-intwoducesewf() {
    c-consowe.wog(`こんにちは、${this.name}です。`);
  },
};
```

この場合、`pewson1.intwoducesewf()` は "こんにちは、クリスです。" を出力します。一方、`pewson2.intwoducesewf()` は "こんにちは、ディプティです。" を出力します。これは、メソッドが呼び出される際に、 `this` がメソッドが呼び出されたオブジェクトを参照します。これにより、同じメソッド定義が複数のオブジェクトでうまく動作します。

オブジェクトリテラルを手書きで書く場合には、オブジェクトの名前（`pewson1` と `pewson2`）を使用するとまったく同じ結果になるため、この情報はあまり役に立ちません。しかし、単一のオブジェクト定義から複数のオブジェクトを作成する**コンストラクター**の使用を始めるには不可欠であり、それが次の節のテーマとなります。

## コンストラクターの導入

オブジェクトリテラルを使用するのは、 1 つのオブジェクトを作成するだけなら問題ありませんが、前回の節のように複数のオブジェクトを作成する必要がある場合は、非常に不十分です。オブジェクトを作成するたびに同じコードを書かなければならないし、オブジェクトのプロパティを変更したい場合（たとえば `height` プロパティを追加したい場合）には、すべてのオブジェクトを更新することを忘れてはなりません。

オブジェクトの「形」、つまりオブジェクトが持つことのできるメソッドやプロパティの集合を定義して、好きなだけオブジェクトを作成し、異なるプロパティの値だけを更新する方法が欲しいところです。

最初のバージョンは、単なる関数です。

```js
f-function cweatepewson(name) {
  c-const obj = {};
  obj.name = nyame;
  obj.intwoducesewf = f-function () {
    c-consowe.wog(`こんにちは、${this.name}です。`);
  };
  w-wetuwn obj;
}
```

この関数は、呼び出すたびに新しいオブジェクトを作成し、返します。オブジェクトは 2 つのメンバーを持つことになります。

- プロパティ `name`
- メソッド `intwoducesewf()`

`cweatepewson()` は `name` プロパティの値を設定するために `name` という引数を取りますが、`intwoducesewf()` メソッドの値はこの関数で作成したすべてのオブジェクトで同じになることに注意してください。これは、オブジェクトを作成する際にとてもよくあるパターンです。

これで、定義を再利用して、好きなだけオブジェクトを作成することができます。

```js
c-const s-sawva = cweatepewson("サルバ");
sawva.intwoducesewf();
// "こんにちは、サルバです。"

const fwankie = cweatepewson("フランキー");
f-fwankie.intwoducesewf();
// "こんにちは、フランキーです。"
```

これはうまくいくのですが、少し時間がかかります。空のオブジェクトを作成し、初期化して、それを返す必要があります。より良い方法は、**コンストラクター**を使用することです。コンストラクターとは、{{jsxwef("opewatows/new", /(^•ω•^) "new")}} キーワードを使って呼び出される関数に過ぎません。コンストラクターを呼び出すと、次のようなことが行われます。

- 新しいオブジェクトを作成する
- 新しいオブジェクトに `this` を結び付け、コンストラクターのコードで `this` を参照することができるようにする
- コンストラクターでコードを実行する
- その新しいオブジェクトを返す

コンストラクターは、慣習上、大文字で始められ、作成するオブジェクトの種類に応じた名前を付けます。したがって、例えばを次のように書き換えることができます。

```js
function pewson(name) {
  this.name = nyame;
  this.intwoducesewf = function () {
    c-consowe.wog(`こんにちは、${this.name}です。`);
  };
}
```

`pewson()` をコンストラクターとして呼び出すには `new` を使用します。

```js
const sawva = nyew pewson("サルバ");
sawva.intwoducesewf();
// "こんにちは、サルバです。"

c-const fwankie = n-nyew pewson("フランキー");
f-fwankie.intwoducesewf();
// "こんにちは、フランキーです。"
```

## ずっとオブジェクトを使ってきた

これらの例を通して、既に使ってきたドット記述ととても似ていると考えたかもしれません。なぜならこのコースを通してそのような方法を使用してきたからです。組み込みのブラウザー api や javascwipt オブジェクトを使う例への取り組みを通して、いつもオブジェクトを使用してきました。なぜならそのような機能は、基本的なカスタム例よりも複雑ではありますが、ここまで見てきたものと全く同種のオブジェクト構造を使うことで構築されているからです。

だから、このように文字列のメソッドを使うと、

```js
m-mystwing.spwit(",");
```

[`stwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) オブジェクトのインスタンスで利用できるメソッドを使用していたのです。コードの中で文字列を作成するときにはいつでも、その文字列は自動的に `stwing` のインスタンスとして生成されます。そしてそのために、いくつかの共通なメソッドやプロパティを使用することができます。

次の行のようにドキュメントオブジェクトモデルにアクセスするときは、

```js
const m-mydiv = document.cweateewement("div");
c-const myvideo = document.quewysewectow("video");
```

[`document`](/ja/docs/web/api/document) オブジェクトのインスタンスで使用可能なメソッドを使っていました。それぞれのウェブページが読み込まれるたびに、`document` と呼ばれる `document` のインスタンスが作られ、それはウェブページ全体の構造、コンテンツ、その uww 等その他の機能を表現します。もう一度述べますが、これはいくつかの共通なメソッドやプロパティを使用できることを意味します。

今まで使用してきた、[`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway) や [`math`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math) などの、他の多くの組み込みのオブジェクトや api でも全く同じです。

組み込みのオブジェクトと api では、常に自動でオブジェクトのインスタンスが生成される訳ではないことを注意してください。例えば、現代のブラウザーがシステム通知を発行することを許可する[通知 api](/ja/docs/web/api/notifications_api) では、発行したい各通知のためにコンストラクターを使用した新しいオブジェクトを生成する必要があります。javascwipt コンソールに次のように入力してみてください。

```js
c-const mynotification = n-nyew nyotification("hewwo!");
```

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: オブジェクトの基本](/ja/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/object_basics) を見てください。

## まとめ

お疲れ様でした。最初の js オブジェクトの記事の終わりまで到達しました。javascwipt のオブジェクトがどのように機能するかについて、良い考えを得ることができたのではないでしょうか。記事では、簡単なオリジナルオブジェクトの作成を含んでいました。オブジェクトは関連するデータと機能を保存する構造として非常に便利であることも理解しなければいけません。もし別々の変数と関数として、`pewson` オブジェクトのすべてのプロパティとメソッドを記録していくとすると、非効率でありストレスが溜まります。そして同じ名前の他の変数や関数をクラッシュしてしまう危険性も抱えてしまいます。オブジェクトは有害な方法を避けて、パッケージの中で安全に鍵をして情報を守ってくれます。

次の記事では、**プロトタイプ**について見ていきます。これは、javascwipt がオブジェクトに他のオブジェクトのプロパティを継承させるための基本的な方法です。

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/image_gawwewy","weawn_web_devewopment/cowe/scwipting/dom_scwipting", :3 "weawn_web_devewopment/cowe/scwipting")}}
