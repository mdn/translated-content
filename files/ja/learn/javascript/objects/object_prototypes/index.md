---
title: Object のプロトタイプ
slug: Learn/JavaScript/Objects/Object_prototypes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects")}}

プロトタイプは、JavaScript オブジェクトが互いに機能を継承するメカニズムです。この記事では、プロトタイプチェーンの仕組みを説明し、`prototype` プロパティを使って既存のコンストラクタにメソッドを追加する方法を見ていきます。

> **メモ:** この記事では、伝統的な JavaScript のコンストラクタとクラスを取り上げます。次の記事では、同じことを実現するためのより簡単な構文を提供する現代的な方法について話します - [ECMAScript 2015 のクラス](/ja/docs/Learn/JavaScript/Objects/Inheritance#ECMAScript_2015_Classes)を参照してください。

| 前提条件: | JavaScript 関数の理解、JavaScript の基礎知識 ([JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps)と[JavaScript の構成要素](/ja/docs/Learn/JavaScript/Building_blocks)を参照)、OOJS の基礎 ([JavaScript オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)を参照) |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 目的:     | JavaScript のオブジェクトのプロトタイプ、プロトタイプチェーンの動作方法、prototype プロパティに新しいメソッドを追加する方法を理解する。                                                                                                                                              |

## プロトタイプベースの言語とは?

JavaScript はしばしば**プロトタイプベースの言語**として記述されます - 継承機能を提供するため、オブジェクトは **`prototype`** **オブジェクト** を持つことができます。これはテンプレートオブジェクトとして機能し、そこからメソッドやプロパティを継承します。

オブジェクトのプロトタイプオブジェクトもまたメソッドやプロパティを継承するプロトタイプオブジェクトを持つことができます。これはしばしば**プロトタイプチェーン**と呼ばれ、異なるオブジェクトが他のオブジェクトに定義されたプロパティやメソッドを持つ理由を説明しています。

JavaScript では、あるオブジェクトのインスタンスとそのプロトタイプ (コンストラクタの `prototype` プロパティから派生した `__proto__` プロパティ) の間にリンクが張られており、そのプロパティとメソッドはプロトタイプの連鎖を辿って発見されます。

> **メモ:** **オブジェクトの `prototype`** ([`Object.getPrototypeOf(obj)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) または非推奨の [`__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) プロパティで取得可能) と**コンストラクタ関数の`prototype` プロパティ**の違いを理解することが重要です。
>
> 前者は各インスタンス上のプロパティ、後者はコンストラクタ上のプロパティです。つまり、`Object.getPrototypeOf(new Foobar())` は`Foobar.prototype`と同じオブジェクトを参照しています。

これを少し明確にするための例を見てみましょう。

## プロトタイプオブジェクトの理解

ここでは、Person() コンストラクタを書き終えた例に戻ります - ブラウザーで例を読み込んでください。前回の記事で紹介した [oojs-class-further-exercises.html](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) の例を使うことができます ([ソースコード](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)も参照してください)。

この例では、次のようにコンストラクタ関数を定義しています。

```js
function Person(first, last, age, gender, interests) {

  // property and method definitions
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  //...see link in summary above for full definition
}
```

次に、このようなオブジェクトインスタンスを作成します。

```js
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
```

JavaScript コンソールに "`person1.`" と入力すると、ブラウザーがこのオブジェクトで利用可能なメンバ名でこれを自動補完しようとするはずです：

![](object-available-members.png)

このリストでは、`person1` のコンストラクタである `Person()` で定義されているメンバ - `name`、`age`、`gender`、`interests`、`bio`、`greeting` - が表示されています。しかし、他にも `toString` や `valueOf` などのメンバがあり、これらのメンバは `person1` の prototype オブジェクトの prototype オブジェクト (`Object.prototype`) で定義されています。

![](MDN-Graphics-person-person-object-2.png)

実際に `Object.prototype` で定義されている `person1` のメソッドを呼び出すとどうなりますか？例えば

```js
person1.valueOf()
```

`valueOf()` は、呼び出されたオブジェクトの値を返します。この場合、何が起こるかというと

- ブラウザーは最初に、`person1` オブジェクトのコンストラクタ `Person()` で定義されている `valueOf()` メソッドが利用可能かどうかをチェックしますが、利用できません
- そこで、ブラウザーは `person1` のプロトタイプオブジェクトに `valueOf()` メソッドが利用可能かどうかをチェックします。メソッドがない場合、ブラウザーは `person1` のプロトタイプオブジェクトのプロトタイプオブジェクトをチェックします。メソッドが呼び出されて、すべてがうまくいきました

> **メモ:** プロトタイプチェーンの中では、メソッドやプロパティはあるオブジェクトから別のオブジェクトにコピー**されない**ことを再確認しておきましょう。これらのメソッドやプロパティは、上で説明したように*チェーンを上っていく*ことで*アクセス*されます。

> **メモ:** プロトタイプチェーンは、プロパティを取得している間のみ巡回されます。プロパティがオブジェクトに直接設定されたり[`削除されたり`](/ja/docs/Web/JavaScript/Reference/Operators/delete)した場合は、プロトタイプチェーンは走査されません。

> **メモ:** ECMAScript 2015 以前は、オブジェクトの `prototype` に直接アクセスする方法は公式にはありませんでした - チェーン内のアイテム間の「リンク」は、JavaScript 言語の仕様で `[[prototype]]` と呼ばれる内部プロパティで定義されています ({{glossary("ECMAScript")}}}を参照してください)。
>
> しかし、ほとんどの最新のブラウザーでは、オブジェクトのコンストラクタのプロトタイプオブジェクトを含む [`__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) (アンダースコア 2 個分) というプロパティを提供しています。例えば、`person1.__proto__` と `person1.__proto__.__proto__` を試してみてください。
>
> ECMAScript 2015 からは、`Object.getPrototypeOf(obj)` を介して間接的にオブジェクトのプロトタイプオブジェクトにアクセスすることができます。

## prototype プロパティ：継承されたメンバーが定義されている場所

では、継承されたプロパティとメソッドはどこに定義されているのでしょうか？ [`Object`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object)リファレンスページを見ると、左側に多数のプロパティとメソッドが表示されます。上のスクリーンショットで`person1`オブジェクトで使用できた継承されたメンバーの数を超えています。いくつかは継承されており、一部は継承されていません。これはなぜでしょうか？

上で述べたように、継承されたものは `prototype` プロパティ (サブネームスペースと呼ぶこともできます) で定義されたものであり、それは `Object.prototype.` で始まるものであって、`Object.` だけで始まるものではありません。`prototype` プロパティの値はオブジェクトであり、基本的には、プロトタイプチェーンのさらに下のオブジェクトに継承させたいプロパティやメソッドを格納するためのバケットです。

そのため、[`Object.prototype.toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)、[`Object.prototype.valueOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) などは、`Person()` コンストラクタから作成された新しいオブジェクトインスタンスを含め、`Object.prototype` を継承するあらゆるオブジェクトタイプで利用できます。

[`Object.is()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/is)、[`Object.keys()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) など、`prototype` バケット内で定義されていないメンバは、`Object.prototype` を継承するオブジェクトインスタンスやオブジェクトタイプには継承されません。これらは、`Object()` コンストラクタ自身でのみ利用可能なメソッド/プロパティです。

> **メモ:** コンストラクタ上で定義されたメソッドが、それ自体が関数であるというのは不思議な感じがします。
>
> まあ、関数はオブジェクトの型でもあります。信じられないかもしれませんが、[`Function()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) のコンストラクタリファレンスを参照してください。

1. 既存のプロトタイプのプロパティを自分でチェックすることができます。先ほどの例に戻って、JavaScript コンソールに次のように入力してみてください

    ```js
    Person.prototype
    ```

2. カスタムコンストラクタのプロトタイプに何も定義していないので、出力はあまり表示されません。デフォルトでは、コンストラクタの `prototype` は常に空から始まります。では、次のようにしてみてください

    ```js
    Object.prototype
    ```

先ほど示したように、`Object` の `prototype` プロパティに定義された多数のメソッドが、`Object` を継承するオブジェクトで利用できるようになっています。

プロトタイプチェーン継承の他の例は、JavaScript の至る所で見ることができます。例えば、[`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String)、[`Date`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date)、[`Number`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)、[`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) などのグローバルオブジェクトのプロトタイプに定義されているメソッドやプロパティを探してみてください。これらはすべて、プロトタイプに定義されたいくつかのメンバを持っており、例えばこのように文字列を作るとき

```js
let myString = 'This is my string.';
```

`myString`が最初から、[`split()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split)、[`indexOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)、[`replace()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace)などの便利なメソッドを多数持っている理由です。

> **メモ:** このセクションを理解して、もっと知りたいと思ったら、[JavaScript でのプロトタイプの使用](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Using_prototypes_in_JavaScript) についてのより詳細なガイドを読む価値があります。このセクションは、これらの概念に初めて出会ったときに少しでも理解しやすくするために、意図的に簡略化しています。

> **警告:** `prototype` プロパティは JavaScript の中でも最も紛らわしい名前がついている部分の一つです (`this` は `__proto__` でアクセスできる内部オブジェクトです、覚えていますか？)。代わりに `prototype` は、継承したいメンバを定義したオブジェクトを含むプロパティです。

## create() の再訪

先ほど、[`Object.create()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create) メソッドを使用して新しいオブジェクトのインスタンスを作成する方法を紹介しました。

1. 例えば、先ほどの例の JavaScript コンソールでこれを試してみてください

    ```js
    let person2 = Object.create(person1);
    ```

2. `create()` が実際に行うことは、指定したプロトタイプオブジェクトから新しいオブジェクトを作成することです。ここでは、`person1` をプロトタイプオブジェクトとして使用して `person2` を作成しています。これはコンソールで以下のように入力することで確認できます

    ```js
    person2.__proto__
    ```

これで `person1` オブジェクトが返されます。

## コンストラクタのプロパティ

すべてのコンストラクタ関数は `prototype` プロパティを持ち、その値は [`constructor`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) プロパティを含むオブジェクトとなります。この `constructor` プロパティは、元のコンストラクタ関数を指します。

次のセクションでお分かりのように、`Person.prototype` プロパティ (あるいは上のセクションで述べたように、一般的にはコンストラクタ関数の `prototype` プロパティに定義されているオブジェクト) は、`Person()` コンストラクタを使用して作成されたすべてのインスタンスオブジェクトで利用可能になります。したがって、コンストラクタプロパティは `person1` と `person2` の両方のオブジェクトでも利用可能です。

1. 例えば、コンソールで次のコマンドを試してみてください

    ```js
    person1.constructor
    person2.constructor
    ```

    これらのインスタンスの元の定義を含む `Person()` コンストラクタを返します。

    巧妙なトリックとしては、`constructor` プロパティの最後に括弧を付けて (必要なパラメータを含む)、そのコンストラクタから別のオブジェクトのインスタンスを作成することができます。コンストラクタは結局のところ関数なので、括弧を使用して呼び出すことができます。関数をコンストラクタとして使用したい場合は、`new` キーワードを含めて指定する必要があります。

2. これをコンソールで試してみてください

    ```js
    let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
    ```

3. では、新しいオブジェクトの機能にアクセスしてみましょう

    ```js
    person3.name.first
    person3.age
    person3.bio()
    ```

これはよく機能します。頻繁に使用する必要はありませんが、新しいインスタンスを作成したいときに、何らかの理由で元のコンストラクタへの参照が簡単に利用できない場合に非常に便利です。

[`constructor`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) プロパティには他の用途もあります。たとえば、オブジェクトのインスタンスがあり、そのインスタンスのコンストラクタの名前を返したい場合は次のようにします。

```js
instanceName.constructor.name
```

たとえば、これを試してみてください：

```js
person1.constructor.name
```

> **メモ:** `constructor.name` の値は (プロトタイプの継承、バインディング、プリプロセッサ、トランスパイラなどによる) 変わる可能性があります。そのため、より複雑な例では、代わりに [`instanceof`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) 演算子を使用することになります。

## プロトタイプの変更

コンストラクタ関数の `prototype` プロパティを変更する例を見てみましょう - メソッドは、コンストラクタから作成されたすべてのオブジェクトインスタンスで利用可能になります。この時点で、最後に `Person()` コンストラクタのプロトタイプに何かを追加します。

1. [oojs-class-further-exercises.html](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) の例に戻り、[ソースコード](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)のローカルコピーを作成します。既存の JavaScript の下に、コンストラクタの `prototype` プロパティに新しいメソッドを追加する次のコードを追加します

    ```js
    Person.prototype.farewell = function() {
      alert(this.name.first + ' has left the building. Bye for now!');
    };
    ```

2. コードを保存してブラウザーでページを読み込み、テキスト入力に以下のように入力してみてください

    ```js
    person1.farewell();
    ```

コンストラクタ内で定義されている人の名前を特徴とする警告メッセージが表示されるはずです。これは本当に便利ですが、さらに便利なのは継承チェーン全体が動的に更新され、コンストラクタから派生したすべてのオブジェクトインスタンスでこの新しいメソッドが自動的に利用できるようになったことです。

ちょっと考えてみましょう。このコードでは、コンストラクタを定義し、そのコンストラクタからインスタンスオブジェクトを作成し、コンストラクタのプロトタイプに新しいメソッドを追加しています。

```js
function Person(first, last, age, gender, interests) {

  // プロパティおよびメソッドを定義する

}

let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};
```

しかし、`farewell()` メソッドは `person1` オブジェクトのインスタンスで利用可能です。そのメンバーは、新たに定義された `farewell()` メソッドを含むように自動的に更新されます。

> **メモ:** 逆に、コンストラクタのプロトタイプに定義されたプロパティを [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) 演算子を使用して削除すると、他のすべてのクラスインスタンスからもそれぞれのプロパティが削除されます。
>
> 上記の例では、`delete person1.__proto__.farewell` または `delete Person.prototype.farewell` を実行すると、すべての `Person` インスタンスから `farewell()` メソッドが削除されます。
>
> この問題を軽減するために、代わりに [`Object.defineProperty()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) を使用することができます。

> **メモ:** この例がうまく動作しない場合は、[oojs-class-prototype.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-prototype.html) の例を見てください ([ライブ](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-prototype.html)でも参照してください) 。

このように定義されたプロパティは柔軟性に欠けるため、`prototype` プロパティで定義されることはほとんどありません。例えば、次のようなプロパティを追加することができます。

```js
Person.prototype.fullName = 'Bob Smith';
```

これはその person がその名前で呼ばれていないかもしれないので、あまり柔軟性がありません。`name.first` と `name.last` から `fullName` を作成する方がずっと良いでしょう。

```js
Person.prototype.fullName = this.name.first + ' ' + this.name.last;
```

しかし、これではうまくいきません。この場合、`this` は関数スコープではなくグローバルスコープを参照するからです。このプロパティを呼び出すと `undefined` を返します。これは、先ほどプロトタイプで定義したメソッドでは問題なく動作したのはそれがオブジェクトのインスタンススコープに正常に転送される関数スコープ内にあるためです。そのため、プロトタイプ上で不変の(つまりだれも変更する必要のない)プロパティを定義することもできますが、一般的にはコンストラクタ内でプロパティを定義する方がうまくいきます。

実際、多くのオブジェクト定義でよく見られるパターンは、コンストラクタ内でプロパティを定義し、プロトタイプ上でメソッドを定義することです。これにより、コンストラクタにはプロパティの定義のみが含まれ、メソッドは別のブロックに分割されるため、コードが読みやすくなります。例えば、以下のようになります。

```js
// Constructor with property definitions

function Test(a, b, c, d) {
  // プロパティ定義
}

// 最初のメソッド定義

Test.prototype.x = function() { ... };

// 第二のメソッド定義

Test.prototype.y = function() { ... };

// など
```

このパターンは、Piotr Zalewa 氏の[学校計画のアプリ](https://github.com/zalun/school-plan-app/blob/master/stage9/js/index.js)の例で実際に見られます。

## あなたのスキルをテストしてみましょう!

この記事はここまでですが、最も重要な情報を覚えていますか？先に進む前に、この情報を保持しているかどうかを確認するために、さらにいくつかのテストを見つけることができます。[あなたのスキルをテストする: オブジェクト指向 JavaScript](/ja/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript) を参照してください。

この一連のテストは次の記事で紹介する知識に依存していることに注意してください。なので、試してみる前に、まずそれを読んでみるといいかもしれません。

## まとめ

この記事では、プロトタイプオブジェクトチェーンによってオブジェクトが互いに機能を継承する方法、プロトタイププロパティとそれを使ってコンストラクタにメソッドを追加する方法など、JavaScript オブジェクトのプロトタイプを取り上げてきました。

次の記事では、2 つのカスタムオブジェクト間で機能の継承を実装する方法を見ていきます。

{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects")}}

## このモジュール

- [JavaScript オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)
- [初心者のためのオブジェクト指向 JavaScript](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Object のプロトタイプ](/ja/docs/Learn/JavaScript/Objects/Object_prototypes)
- [JavaScript での継承](/ja/docs/Learn/JavaScript/Objects/Inheritance)
- [JSON データの操作](/ja/docs/Learn/JavaScript/Objects/JSON)
- [オブジェクト作成の練習](/ja/docs/Learn/JavaScript/Objects/Object_building_practice)
- [バウンスボールに機能を追加する](/ja/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
