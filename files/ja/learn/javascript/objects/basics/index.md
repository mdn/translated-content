---
title: JavaScript オブジェクトの基本
slug: Learn/JavaScript/Objects/Basics
l10n:
  sourceCommit: 9f2d1a4747bc0cd97799893b979f55d63500d036
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

この記事では、基本的な JavaScript オブジェクトの構文を学び、このコースで以前に見た一部の JavaScript の機能を復習し、すでに提供された多くの機能がオブジェクトであるという事実を再確認します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        基本的なコンピューターリテラシー、基本的な HTML と CSS に対する理解、基本的な JavaScript に親しんでいること（<a href="/ja/docs/Learn/JavaScript/First_steps">JavaScript の第一歩</a>と<a href="/ja/docs/Learn/JavaScript/Building_blocks">JavaScript の構成要素</a>を参照してください）。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        オブジェクト指向プログラミングについての基本的な理論、どのように JavaScript に関連するか、JavaScript の作業を始める方法を理解できること。
      </td>
    </tr>
  </tbody>
</table>

## オブジェクトの基本

オブジェクトとは、関連するデータや 機能の集合体です。
これらは通常、いくつかの変数や関数（オブジェクトの中にある場合はプロパティやメソッドと呼ばれる）で構成されています。
見ていくうちに理解できるように、例を挙げてみましょう。

最初に [oojs.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/introduction/oojs.html) ファイルを手元にコピーしてください。このファイルにはちょっとした内容 — ソースコードを書き込むための {{HTMLElement("script")}} 要素が一つ含まれています。このファイルをオブジェクトを書くための元として使います。作業中は[開発者ツールの JavaScript コンソール](/ja/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#javascript_コンソール)を開いておいて、すぐにコマンドを入力できるようにしておくとよいでしょう。

他の JavaScript の書き方と同じように、オブジェクトの生成は変数の宣言と初期化から始まります。手始めに、ファイルにある JavaScript コードの下に次のものを書いてみてください。それから保存して再読み込みしましょう。

```js
const person = {};
```

ブラウザーの [JavaScript コンソール](/ja/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#javascript_コンソール)を開いて、`person` と入力して、 <kbd>Enter</kbd>/<kbd>Return</kbd> を押してください。以下のいずれかの行に似た結果が得られるはずです。

```
[object Object]
Object { }
{ }
```

おめでとうございます。最初のオブジェクトが作成されました。成功です！しかし、これは空のオブジェクトなので、実際に使用することはできません。ファイル内の JavaScript オブジェクトを次のように更新してみましょう。

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

保存して更新した後、ブラウザーの開発者ツールの JavaScript コンソールに以下いくつか入力してみてください：

```js
person.name;
person.name[0];
person.age;
person.bio();
// "Bob Smith is 32 years old."
person.introduceSelf();
// "Hi! I'm Bob."
```

オブジェクトから、データと機能を追加することができました。これで簡単な書き方で情報が引き出せます。

さて、何が起きているのでしょうか。オブジェクトには複数のメンバーがあり、それぞれに名前がついていて(例えば上の例では `name` や `age`)、それぞれに値 (`['Bob', 'Smith']` や `32`) があります。それぞれの名前と値の組はカンマ ( , ) で区切られていて、名前と値はコロン ( : ) で区切られています。常にそのように書きます。

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

メンバーの値はほとんど何でも大丈夫です。例えば、先ほどの例では文字列、数値、2 つの配列に 2 つの関数でした。最初の 4 つはデータ項目でそのオブジェクトの**プロパティ**と呼ばれます。後ろの 2 つはオブジェクトの持つデータを使用して何かをする関数でオブジェクトの**メソッド**と呼ばれます。

オブジェクトのメンバーが関数である場合、よりシンプルな構文があります。`bio: function ()` の代わりに `bio()` と書けばよいのです。次のようにします。

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
```

これ以降は、この短い構文を使用することにします。

このようなオブジェクトは**オブジェクトリテラル**と呼ばれ、作成することになったオブジェクトのコンテンツを文字通り書き出したものです。これは、後で見ていくクラスからインスタンス化されたオブジェクトとは異なる形で表現されています。

オブジェクトリテラルを使用してオブジェクトを作成するのは、構造化された関連のある一連のデータアイテムを何らかの方法で転送したい場合、例えば、データベースに入れるリクエストをサーバーに送信するような場合にとても一般的です。単一のオブジェクトを送信することは、複数のアイテムを個別に送信するよりもはるかに効率的であり、個々のアイテムを名前で識別したい場合には、配列よりも扱いやすいときがあります。

## ドット記法

先ほどの例では、オブジェクトのプロパティとメソッドに対して、**ドット記法**を用いてアクセスしました 。オブジェクト名 (person) は**名前空間**として機能します。オブジェクト内に**カプセル化**されたものにアクセスするには、まずこのオブジェクト名を入力する必要があります。次に、ドット ( . ) を書いて、それからアクセスしたい項目を記述します。項目になりうるのは、単純なプロパティの名前や、配列の要素や、そのオブジェクトのメソッドの 1 つへの呼び出しなどです。次に例を示します:

```js
person.age;
person.bio();
```

### オブジェクトプロパティとしてのオブジェクト

オブジェクトの内部にさらにほかのオブジェクトを持つことも可能です。例えば、先の例で、`name` メンバーを、

```js
const person = {
  name: ["Bob", "Smith"],
};
```

以下のように変更してみましょう。

```js
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  // …
};
```

これらのアイテムにアクセスするには、余分な手順を別のドットで終わりにつなげる必要があります。JS コンソールで試してみてください。

```js
person.name.first;
person.name.last;
```

この時点で下の書き方をしていたところは、以下のように変えなければなりません。

```js
name[0];
name[1];
```

を、

```js
name.first;
name.last;
```

のようにしなければ、メソッドが動かなくなってしまうでしょう。

## ブラケット記法

ブラケット記法は、オブジェクトのプロパティにアクセスするための別の方法を提供します。
次のように[ドット記法](#ドット記法)を使用する代わりに、

```js
person.age;
person.name.first;
```

角括弧を使用して次のようにすることができます。

```js
person["age"];
person["name"]["first"];
```

これは配列のアイテムにアクセスする方法ととても似ていて、基本的には同じことです。アイテムを選択するためにインデックス番号を使用する代わりに、各メンバーの値に関連付けられた名前を使用しているのです。
オブジェクトが**連想配列**と呼ばれるのも当然で、配列が数値と値を対応付けるのと同じように、文字列と値を対応付けます。

一般に、ドット記法はブラケット記法よりも簡潔で読みやすいため、より好ましいとされています。
しかし、角括弧を使用しなければならない用途もあります。
例えば、オブジェクトのプロパティ名が変数で管理されている場合、ドット記法を使用して値にアクセスすることはできませんが、ブラケット記法を使用して値にアクセスすることは可能です。

下記の例では、`logProperty()` 関数は `person[propertyName]` を使用して `propertyName` で指定されたプロパティの値を取得することができる。

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32
```

## オブジェクトメンバーの設定

今まではオブジェクトメンバーからの引き出す (**取得する**) 方法だけを見てきましたが、値を設定するメンバーを宣言することで、オブジェクトのメンバーに値を**設定** (更新) することもできます。(ドットを使用した書き方でも、角括弧を使用した書き方でも構いません。)

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

これらの行を入力してみて、実際に値が変わったか調べてみましょう。

```js
person.age;
person["name"]["last"];
```

メンバーの値を設定するのは存在するプロパティやメソッドの更新だけにはとどまりません。まったく新しいメンバーを追加することもできるのです。JS コンソールで次のものを試してみてください。

```js
person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};
```

新しいメンバーが追加されたことを確認してみましょう。

```js
person["eyes"];
person.farewell();
// "Bye everybody!"
```

ブラケット記法の良いところは、動的にメンバーの値を設定できるだけでなく、メンバーの名前も追加できるところです。例えば、ユーザーの情報として 2 つのテキストフィールドに名前と値を入力してもらい、人により個別のデータを設定したいとします。そういった値を以下のように取得します。

```js
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
```

そうして、取得したメンバー名と値を次のように `person` オブジェクトに設定します。

```js
person[myDataName] = myDataValue;
```

この動作を確認するため、先ほどのコードの `person` オブジェクトの中括弧に続いて、次の行をコードに追加してみてください。

```js
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

そして、保存して再度読み込んで、次の行をテキストボックスに入力してみてください。

```js
person.height;
```

上記の方法を使用してオブジェクトにプロパティを追加することは、ドット記法ではできません。ドット記法は、名前を指す変数ではなく、書いたとおりのメンバー名のみ受け入れることができます。

## "this" とは何か

メソッドの中で、少し見慣れない点に気付いたかもしれません。 次の例でその点について考えてみましょう。

```js
introduceSelf() {
  console.log(`Hi! I'm ${this.name[0]}.`);
}
```

"this" とは何だろうと思ったことでしょう。 この `this` キーワードはコードの中がその中で書かれている、現在のオブジェクトを参照しています。なので、この場合では `person` を指します。 なぜ `this` の代わりに単に `person` と書かないのでしょうか。

まあ、オブジェクトリテラルを単一のものしか作成しない場合は、それほど有益なものではありません。しかし、複数のオブジェクトを作成する場合、`this`を使用すると、作成するすべてのオブジェクトに対して同じメソッド定義を使用することができます。

それでは、簡略化した `person` オブジェクトを使って、その意味を説明していきましょう。

```js
const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
```

この場合、`person1.introduceSelf()` は "Hi! I'm Chris." を出力します。一方、`person2.introduceSelf()` は "Hi! I'm Deepti." を出力します。しかし、どちらの場合も、そのメソッド部分のコードは全く同じです。これは、オブジェクトリテラルを手書きするときにはあまり有益ではありませんが、**コンストラクター**を使用して単一のオブジェクト定義から複数のオブジェクトを作成するようになったときには不可欠なものとなります（これが次の節の主題です）。

## コンストラクターの導入

オブジェクトリテラルを使用するのは、1つのオブジェクトを作成するだけなら問題ありませんが、前回の節のように複数のオブジェクトを作成する必要がある場合は、非常に不十分です。オブジェクトを作成するたびに同じコードを書かなければならないし、オブジェクトのプロパティを変更したい場合（たとえば`height`プロパティを追加したい場合）には、すべてのオブジェクトを更新することを忘れてはなりません。

オブジェクトの「形」、つまりオブジェクトが持つことのできるメソッドやプロパティの集合を定義して、好きなだけオブジェクトを作成し、異なるプロパティの値だけを更新する方法が欲しいところです。

最初のバージョンは、単なる関数です。

```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
```

この関数は、呼び出すたびに新しいオブジェクトを作成し、返します。オブジェクトは 2 つのメンバーを持つことになります。

- プロパティ `name`
- メソッド `introduceSelf()`

`createPerson()` は `name` プロパティの値を設定するために `name` という引数を取りますが、`introduceSelf()` メソッドの値はこの関数で作成したすべてのオブジェクトで同じになることに注意してください。これは、オブジェクトを作成する際にとてもよくあるパターンです。

これで、定義を再利用して、好きなだけオブジェクトを作成することができます。

```js
const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

これはうまくいくのですが、少し時間がかかります。空のオブジェクトを作成し、初期化して、それを返す必要があります。より良い方法は、**コンストラクター**を使用することです。コンストラクターとは、{{jsxref("operators/new", "new")}} キーワードを使って呼び出される関数に過ぎません。コンストラクターを呼び出すと、次のようなことが行われます。

- 新しいオブジェクトを作成する
- 新しいオブジェクトに `this` を結び付け、コンストラクターのコードで `this` を参照することができるようにする
- コンストラクターでコードを実行する
- その新しいオブジェクトを返す

コンストラクターは、慣習上、大文字で始められ、作成するオブジェクトの種類に応じた名前を付けます。したがって、例えばを次のように書き換えることができます。

```js
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
```

`Person()` をコンストラクターとして呼び出すには `new` を使用します。

```js
const salva = new Person("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."
```

## ずっとオブジェクトを使ってきた

これらの例を通して、既に使ってきたドット記述ととても似ていると考えたかもしれません。なぜならこのコースを通してそのような方法を使用してきたからです。組み込みのブラウザー API や JavaScript オブジェクトを使う例への取り組みを通して、いつもオブジェクトを使用してきました。なぜならそのような機能は、基本的なカスタム例よりも複雑ではありますが、ここまで見てきたものと全く同種のオブジェクト構造を使うことで構築されているからです。

だから、このように文字列のメソッドを使うと、

```js
myString.split(",");
```

[`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String) オブジェクトのインスタンスで利用できるメソッドを使用していたのです。コードの中で文字列を作成するときにはいつでも、その文字列は自動的に `String` のインスタンスとして生成されます。そしてそのために、いくつかの共通なメソッドやプロパティを使用することができます。

次の行のようにドキュメントオブジェクトモデルにアクセスするときは、

```js
const myDiv = document.createElement("div");
const myVideo = document.querySelector("video");
```

[`Document`](/ja/docs/Web/API/Document) オブジェクトのインスタンスで使用可能なメソッドを使っていました。それぞれのウェブページが読み込まれるたびに、`document` と呼ばれる `Document` のインスタンスが作られ、それはウェブページ全体の構造、コンテンツ、その URL 等その他の機能を表現します。もう一度述べますが、これはいくつかの共通なメソッドやプロパティを使用できることを意味します。

今まで使用してきた、[`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) や [`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) などの、他の多くの組み込みのオブジェクトや API でも全く同じです。

組み込みのオブジェクトと API では、常に自動でオブジェクトのインスタンスが生成される訳ではないことを注意してください。例えば、現代のブラウザーがシステム通知を発行することを許可する[通知 API](/ja/docs/Web/API/Notifications_API) では、発行したい各通知のためにコンストラクターを使用した新しいオブジェクトを生成する必要があります。JavaScript コンソールに次のように入力してみてください。

```js
const myNotification = new Notification("Hello!");
```

## スキルをテストしましょう!

この記事の最後に到達しましたが、最も大事な情報を覚えていますか？次に移動する前に、この情報を保持しているか検証するテストがあります — [Test your skills: Object basics](/ja/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics) を見てください。

## おさらい

お疲れ様でした。最初の JS オブジェクトの記事の終わりまで到達しました。JavaScript のオブジェクトがどのように機能するかについて、良い考えを得ることができたのではないでしょうか。記事では、簡単なオリジナルオブジェクトの作成を含んでいました。オブジェクトは関連するデータと機能を保存する構造として非常に便利であることも理解しなければいけません。もし別々の変数と関数として、`person` オブジェクトのすべてのプロパティとメソッドを記録していくとすると、非効率でありストレスが溜まります。そして同じ名前の他の変数や関数をクラッシュしてしまう危険性も抱えてしまいます。オブジェクトは有害な方法を避けて、パッケージの中で安全に鍵をして情報を守ってくれます。

次の記事では、**プロトタイプ**について見ていきます。これは、JavaScript がオブジェクトに他のオブジェクトのプロパティを継承させるための基本的な方法です。

{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}
