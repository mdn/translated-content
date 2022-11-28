---
title: JavaScript オブジェクトの基本
slug: Learn/JavaScript/Objects/Basics
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

この記事では、基本的な JavaScript オブジェクトの構文を学び、このコースで以前に見た一部の JavaScript の機能を復習し、すでに提供された多くの機能がオブジェクトであるという事実を再確認します。

| 前提知識: | 基本的なコンピューターを操作する能力、基本的な HTML と CSS に対する理解、基本的な JavaScript に親しんでいること（[JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps)と [JavaScript の構成要素](/ja/docs/Learn/JavaScript/Building_blocks)を参照してください）。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 到達目標: | オブジェクト指向プログラミングについての基本的な理論、どのように JavaScript に関連するか、JavaScript の作業を始める方法を理解できること。                                                                                                                                |

## オブジェクトの基本

オブジェクトとは関連のあるデータと機能の集合です。(機能はたいていは変数と関数で構成されており、オブジェクトの中ではそれぞれプロパティとメソッドと呼ばれます。) どんなものか例を見てみましょう。

最初に [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html) ファイルを手元にコピーしてください。このファイルにはちょっとした内容 — ソースコードを書き込むための {{HTMLElement("script")}} 要素が一つ含まれています。このファイルをオブジェクトを書くための元として使います。作業中は[開発者ツールの JavaScript コンソール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console)を開いておいて、すぐにコマンドを入力できるようにしておくとよいでしょう。

他の JavaScript の書き方と同じように、オブジェクトの生成は変数の宣言と初期化から始まります。手始めに、ファイルにある JavaScript コードの下に次のものを書いてみてください。それから保存して再読み込みしましょう。

```js
const person = {};
```

ブラウザーの [JavaScript コンソール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console)を開いて、`person` と入力して、 <kbd>Enter</kbd>/<kbd>Return</kbd> を押してください。以下のいずれかの行に似た結果が得られるはずです。

```js
[object Object]
Object { }
{ }
```

よくやりましたね! まずは最初のオブジェクトができました。でもこれだけでは空のオブジェクトであまり役には立ちません。さらにオブジェクトを変更してみましょう。

```js
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
```

保存して再読み込みした後で、JavaScript コンソールにいくつか入力してみましょう。

```js
person.name
person.name[0]
person.age
person.interests[1]
person.bio()
person.greeting()
```

オブジェクトから、データと機能を追加することができました。これで簡単な書き方で情報が引き出せます。

> **メモ:** もし動かないようなら、完成版のソースコードと見比べてみてください (完成版: [oojs-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-finished.html) さらに[ライブ版もあります](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-finished.html)) 。ライブ版は空白の画面ですが、それで OK です。また開発ツールを開いて上記のコマンドを入力してオブジェクトの構造を見てみます。

さて、何が起きているのでしょうか。オブジェクトには複数のメンバーがあり、それぞれに名前がついていて(例えば上の例では `name` や `age`)、それぞれに値 (`['Bob', 'Smith']` や `32`) があります。それぞれの名前と値の組はカンマ ( , ) で区切られていて、名前と値はコロン ( : ) で区切られています。常にそのように書きます。

```js
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value
}
```

メンバーの値はほとんど何でも大丈夫です。例えば、先ほどの例では文字列、数値、2 つの配列に 2 つの関数でした。最初の 4 つはデータ項目でそのオブジェクトの**プロパティ**と呼ばれます。後ろの 2 つはオブジェクトの持つデータを使用して何かをする関数でオブジェクトの**メソッド**と呼ばれます。

このように記号を使って書くオブジェクトは後で出てくるクラスを使用して生成する方法と対比して**オブジェクトリテラル**と呼ばます。

オブジェクトリテラルを使用してオブジェクトを生成する方法はとても一般的で、ある法則に則って構造化、関連付けられたデータをやり取りするときによく使います。(例えばサーバーにリクエストを送ったり、データベースに保存したり。) ある一つのオブジェクトを送るほうが複数の項目を何回かに分けて送るよりも効率的で、名前を用いて検索するときなどには、配列よりも扱いやすいときがあります。

## ドットによる記述

先ほどの例では、オブジェクトのプロパティとメソッドに対して、**ドット記法**を用いてアクセスしました 。オブジェクト名 (person) は**名前空間**として機能します。オブジェクト内に**カプセル化**されたものにアクセスするには、まずこのオブジェクト名を入力する必要があります。次に、ドット ( . ) を書いて、それからアクセスしたい項目を記述します。項目になりうるのは、単純なプロパティの名前や、配列の要素や、そのオブジェクトのメソッドの 1 つへの呼び出しなどです。次に例を示します:

```js
person.age
person.interests[1]
person.bio()
```

### サブ名前空間

オブジェクトの内部にさらにほかのオブジェクトを持つことも可能です。例えば、先の例で、`name` メンバーを、

```js
name: ['Bob', 'Smith'],
```

以下のように変更してみましょう。

```js
name : {
  first: 'Bob',
  last: 'Smith'
},
```

これで簡単に**サブ名前空間**を作り出すことができました。難しそうに聞こえるかもしれませんが、ただ単に項目をドットを用いて数珠つなぎにつないでいけばいいのです。コンソールで試してください。

```js
person.name.first
person.name.last
```

**重要**: この時点で下の書き方をしていたところは、以下のように変えなければなりません。

```js
name[0]
name[1]
```

を、

```js
name.first
name.last
```

のようにしなければ、メソッドが動かなくなってしまうでしょう。

## 角括弧による記述

オブジェクトのプロパティにアクセスするもう一つの手段として角括弧を用いた記法があります。

```js
person.age
person.name.first
```

このように書く代わりに、

```js
person['age']
person['name']['first']
```

のように書きます。

これは配列の添え字によく似ています。数字の代わりに、名前を用いて関連付けられたメンバーの値にアクセスするだけで、実はほとんど同じなのです。このようなオブジェクトを**連想配列**といい、配列が数字によって値を格納しているように、文字列によって値を格納しています。

## オブジェクトメンバーの設定

今まではオブジェクトメンバーからの引き出す (**取得する**) 方法だけを見てきましたが、値を設定するメンバーを宣言することで、オブジェクトのメンバーに値を**設定** (更新) することもできます。(ドットを使用した書き方でも、角括弧を使用した書き方でも構いません。)

```js
person.age = 45;
person['name']['last'] = 'Cratchit';
```

これらの行を入力してみて、実際に値が変わったか調べてみましょう。

```js
person.age
person['name']['last']
```

メンバーの値を設定するのは存在するプロパティやメソッドの更新だけにはとどまりません。まったく新しいメンバーを追加することもできるのです。JS コンソールで次のものを試してみてください。

```js
person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }
```

新しいメンバーが追加されたことを確認してみましょう。

```js
person['eyes']
person.farewell()
```

角括弧での書き方の良いところは、動的にメンバーの値を設定できるだけでなく、メンバーの名前も追加できるところです。例えば、ユーザーの情報として 2 つのテキストフィールドに名前と値を入力してもらい、人により個別のデータを設定したいとします。そういった値を以下のように取得します。

```js
let myDataName = nameInput.value;
let myDataValue = nameValue.value;
```

そうして、取得したメンバー名と値を次のように `person` オブジェクトに設定します。

```js
person[myDataName] = myDataValue;
```

この動作を確認するため、先ほどのコードの `person` オブジェクトの中括弧に続いて、次の行をコードに追加してみてください。

```js
let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;
```

そして、保存して再度読み込んで、次の行をテキストボックスに入力してみてください。

```js
person.height
```

上記の方法を使用してオブジェクトにプロパティを追加することは、ドット記法ではできません。ドット記法は、名前を指す変数ではなく、書いたとおりのメンバー名のみ受け入れることができます。

## "this" とは何か

メソッドの中で、少し見慣れない点に気付いたかもしれません。 次の例でその点について考えてみましょう。

```js
greeting: function() {
  alert('Hi! I\'m ' + this.name.first + '.');
}
```

"this" とは何だろうと思ったことでしょう。 この `this` キーワードはコードの中がその中で書かれている、現在のオブジェクトを参照しています。なので、この場合では `person` を指します。 なぜ `this` の代わりに単に `person` と書かないのでしょうか。 この後 [初心者のためのオブジェクト指向](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS) の記事で見るように、コンストラクター等を書き始めるときに `this` は非常に便利です。メンバーのコンテキストが変わったとき(例えば 2 つの異なる `person` オブジェクトのインスタンスは、異なる名前を持っているが、greeting メソッドでそれぞれ自身の名前を使用したいとき)に常に正しい値を保証してくれます。

それでは、簡略化した `person` オブジェクトを使って、その意味を説明していきましょう。

```js
const person1 = {
  name: 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

const person2 = {
  name: 'Deepti',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
```

この場合、`person1.greeting()` は "Hi! I'm Chris." を出力します。一方、`person2.greeting()` は "Hi! I'm Deepti." を出力します。しかし、どちらの場合も、そのメソッド部分のコードは全く同じです。先に述べたように `this` はそのコードが中にあるオブジェクトと等しいです — これは手作業でオブジェクトリテラルを書くときにはそれ程便利ではありませんが、動的にオブジェクトを生成する(例えばコンストラクターを使う)ときにとても効果的です。これは、この後によりはっきりとするでしょう。

## ずっとオブジェクトを使ってきた

これらの例を通して、既に使ってきたドット記述と非常に似ていると考えたかもしれません。なぜならこのコースを通してそのような方法を使用してきたからです。組み込みのブラウザー API や JavaScript オブジェクトを使う例への取り組みを通していつもオブジェクトを使用してきました。なぜならそのような機能は、基本的なカスタム例よりも複雑ではありますが、ここまで見てきたものと全く同種のオブジェクト構造を使うことで構築されているからです。

だから、このように文字列のメソッドを使うとき:

```js
myString.split(',');
```

[`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String) クラスのインスタンスで利用できるメソッドを使用しています。コードの中で文字列を作成するときにはいつでも、その文字列は自動的に [`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String) クラスのインスタンスとして生成されます。そしてそのために、いくつかの共通なメソッドやプロパティを使用することができます。

次の行のようにドキュメントオブジェクトモデルにアクセスするときは、

```js
const myDiv = document.createElement('div');
const myVideo = document.querySelector('video');
```

[`Document`](/ja/docs/Web/API/Document) クラスのインスタンスで使用可能なメソッドを使っています。各ウェブページが読み込まれると、`document` と呼ばれる `Document` のインスタンスが作られ、それはウェブページ全体の構造、コンテンツ、その URL 等その他の機能を表現します。もう一度述べますが、これはいくつかの共通なメソッドやプロパティを使用できることを意味します。

今まで使用してきた、`Array` や [`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) 等の、他の多くの組み込みのオブジェクトや API でも全く同じです。

組み込みのオブジェクトと API では常に自動でオブジェクトのインスタンスが生成される訳ではないことを注意する必要があります。例えば、モダンなブラウザーがシステム通知を発行することを許可する [Notifications API](/ja/docs/Web/API/Notifications_API) では、発行したい各通知のためにコンストラクターを使用した新しいオブジェクトを生成する必要があります。JavaScript コンソールに次を入力してみてください。

```js
const myNotification = new Notification('Hello!');
```

コンストラクターは後の記事でもう一度見ることができます。

> **メモ:** オブジェクトのやり取りを**メッセージの受け渡し**と考えると便利です。オブジェクトが他のオブジェクトにある処理の実行を要求したとき、そのオブジェクトはメソッドを通じて他のオブジェクトにメッセージを送信して、そして応答を待ちます。ご存知の通り、応答とは返り値のことです。

## スキルをテストしましょう!

この記事の最後に到達しましたが、最も大事な情報を覚えていますか？次に移動する前に、この情報を保持しているか検証するテストがあります — [Test your skills: Object basics](/ja/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics) を見てください。

## おさらい

お疲れ様でした。最初の JS オブジェクトの記事の終わりまで到達しました。JavaScript のオブジェクトがどのように機能するかについて、良い考えを得ることができたのではないでしょうか。記事では、簡単なオリジナルオブジェクトの作成を含んでいました。オブジェクトは関連するデータと機能を保存する構造として非常に便利であることも理解しなければいけません。もし別々の変数と関数として、`person` オブジェクトのすべてのプロパティとメソッドを記録していくとすると、非効率でありストレスが溜まります。そして同じ名前の他の変数や関数をクラッシュしてしまう危険性も抱えてしまいます。オブジェクトは有害な方法を避けて、パッケージの中で安全に鍵をして情報を守ってくれます。

次の記事ではオブジェクト指向プログラミング (OOP) 理論を見ていきます。そして、JavaScript ではそのような素晴らしい技術を使うことができます。

{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

## このモジュール

- [JavaScript オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)
- [初心者のためのオブジェクト指向 JavaScript](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Object のプロトタイプ](/ja/docs/Learn/JavaScript/Objects/Object_prototypes)
- [JavaScript での継承](/ja/docs/Learn/JavaScript/Objects/Inheritance)
- [JSON データの操作](/ja/docs/Learn/JavaScript/Objects/JSON)
- [オブジェクト作成の練習](/ja/docs/Learn/JavaScript/Objects/Object_building_practice)
- [バウンスボールに機能を追加する](/ja/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
