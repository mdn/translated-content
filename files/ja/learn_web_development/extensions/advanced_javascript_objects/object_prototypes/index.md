---
title: オブジェクトのプロトタイプ
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

プロトタイプは、JavaScript オブジェクトが他のものから機能を継承する仕組みです。この記事では、プロトタイプとは何か、プロトタイプチェーンの動作方法、オブジェクトのプロトタイプを設定するにはどうすればよいかを解説していきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        JavaScript の基本
        （特に<a href="/ja/docs/Learn_web_development/Core/Scripting/Object_basics">オブジェクトの基本</a>を参照）。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>JavaScript のプロトタイプチェーン。</li>
          <li>プロパティのシャドウ化の概念。</li>
          <li>プロトタイプの設定。</li>
          <li>プロトタイプと継承の概念。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## プロトタイプチェーン

ブラウザーのコンソールで、オブジェクトリテラルを作成してみてください。

```js
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
```

これは、1 つのデータプロパティ `city` と 1 つのメソッド `greet()` を持つオブジェクトです。オブジェクトの名前の後にピリオドを付けて `myObject.` のようにコンソールに入力すると、このオブジェクトで利用できるすべてのプロパティのリストがポップアップ表示されます。`city`と `greet` だけでなく、他にもたくさんのプロパティがあることがわかると思います。

```plain
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```

それらのうちの 1 つにアクセスしてみます。

```js
myObject.toString(); // "[object Object]"
```

これはうまくいきます（たとえ `toString()` が何をするのかがよく分からないとしても）。

これらの追加のプロパティは何でしょうか、そしてそれはどこから来ているのでしょうか？

JavaScript ですべてのオブジェクトは、その**プロトタイプ**と呼ばれる組み込みプロパティを持っています。プロトタイプはそれ自体がオブジェクトなので、プロトタイプは自分自身でプロトタイプを持ち、**プロトタイプチェーン**と呼ばれるものを持ちます。自分自身でプロトタイプに`null`を持つプロトタイプに到達すると、その連鎖は終わります。

> [!NOTE]
> オブジェクトのプロトタイプを指し示すプロパティは `prototype` という名前では**ありません**。その名前は標準ではありませんが、実際にはすべてのブラウザーが [`__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) を使用しています。オブジェクトのプロトタイプにアクセスする標準的な方法は {{jsxref("Object/getPrototypeOf", "Object.getPrototypeOf()")}} メソッドです。

オブジェクトのプロパティにアクセスしようとしたとき、オブジェクト自身にプロパティが見つからない場合は、プロトタイプを検索してプロパティを探します。それでもプロパティが見つからない場合は、プロトタイプのプロトタイプが検索され、プロパティが得られるか、チェーンの終わりに達するか、その場合は `undefined` を返すまで、そのような具合に繰り返します。

つまり、`myObject.toString()` を呼び出すと、ブラウザーは、

- `toString` を `myObject` で探します。
- 見つからない場合は、`myObject` のプロトタイプオブジェクトで `toString` を探します。
- 見つかったら、それを呼び出します。

`myObject` のプロトタイプは何でしょうか？それを探すには、 `Object.getPrototypeOf()` 関数を使用することができます。

```js
Object.getPrototypeOf(myObject); // Object { }
```

これは `Object.prototype` と呼ばれるオブジェクトで、既定ではすべてのオブジェクトが持つ、最も基本的なプロトタイプです。 `Object.prototype` のプロトタイプは `null` であり、プロトタイプの連鎖の終わりにあります。

![myObject のプロトタイプチェーン](myobject-prototype-chain.svg)

オブジェクトのプロトタイプは常に `Object.prototype` であるとは限りません。次のようになってみてください。

```js
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null
```

このコードでは、`Date` オブジェクトを作成し、プロトタイプの連鎖をたどって、プロトタイプをログ出力しています。このコードでは、`myDate` のプロトタイプは `Date.prototype` オブジェクトであり、_その_ プロトタイプは `Object.prototype` であることを示します。

![Prototype chain for myDate](mydate-prototype-chain.svg)

実際、`myDate2.getTime()`のような馴染みのあるメソッドを呼び出す場合、`Date.prototype`で定義されたメソッドを呼び出していることになります。

## プロパティのシャドウ化

オブジェクトにプロパティを定義した場合、そのオブジェクトのプロトタイプに同じ名前のプロパティが定義されているとどうなるのでしょうか。見てみましょう。

```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'
```

これは、プロトタイプチェーンの説明から予想できることです。`getTime()` を呼び出すと、ブラウザーはまず `myDate` にその名前のプロパティがないか探し、`myDate` で定義されていない場合にのみプロトタイプを調べます。つまり、`myDate` に `getTime()` を追加すると、`myDate` のバージョンが呼ばれることになります。

これはプロパティの「シャドウ化」と呼ばれます。

## プロトタイプの設定

JavaScript でオブジェクトのプロトタイプを設定する様々な方法があります。ここでは `Object.create()` とコンストラクターの 2 つの方法について説明します。

### Object.create の使用

`Object.create()` メソッドは、新しいオブジェクトを作成し、新しいオブジェクトのプロトタイプとして使用するオブジェクトを指定することができます。

以下に例を示します。

```js
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```

ここでは、`greet()` メソッドを持つオブジェクト `personPrototype` を作成しています。次に、`Object.create()` を使用して、`personPrototype` をプロトタイプとする新しいオブジェクトを作成します。これで、新しいオブジェクトに対して `greet()` を名付けることができ、プロトタイプはその実装を提供することになります。

### コンストラクターの使用

JavaScript では、すべての関数が `prototype` という名前のプロパティを持っています。関数をコンストラクターとして呼び出すと、このプロパティが新しく構築されるオブジェクトのプロトタイプとして設定されます（規約では `__proto__` というプロパティに設定されています）。

つまり、コンストラクターの `prototype` を設定すれば、そのコンストラクターで作成するすべてのオブジェクトに、確実にそのプロトタイプを持たせるすることができます。

```js
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// または
// Person.prototype.greet = personPrototype.greet;
```

ここでは次のものを生成します。

- `personPrototype` オブジェクト。これは `greet()` メソッドを持っています
- `Person()` コンストラクター関数。作成する人物の名前を初期化します。

次に、`personPrototype` で定義したメソッドを `Person` 関数の `prototype` プロパティに [Object.assign](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) で記述しています。

このコードの後、`Person()`を使用して作成したオブジェクトは、そのプロトタイプとして `Person.prototype` を取得し、その中に `greet` メソッドが自動的に格納されます。

```js
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
```

これは、先ほど `myDate` のプロトタイプが `Date.prototype` と呼ばれる理由も説明します。これは `Date` コンストラクターの `prototype` プロパティです。

### 独自プロパティ

上記の `Person` コンストラクターを使用して作成したオブジェクトは、2 つのプロパティを持ちます。

- `name` プロパティはコンストラクターで設定されるため、`Person` オブジェクトに直接現れます。
- `greet()` メソッドは、プロトタイプに設定されています。

メソッドはプロトタイプで定義し、データプロパティはコンストラクターで定義する、というパターンはよく見かけます。これは、メソッドは作成するオブジェクトごとに同じものを使うのが普通ですが、データプロパティはオブジェクトごとに自分自身で値を示したい場合が多いからです（人ごとに名前が違うようのと似ています）。

ここでいう `name` のように、オブジェクトに直接定義するプロパティは**独自プロパティ**と呼ばれ、あるプロパティが独自プロパティであるかどうかは静的メソッド {{jsxref("Object/hasOwn", "Object.hasOwn()")}} を使って調べることができます。

```js
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

> [!NOTE]
> ここでは静的でない {{jsxref("Object/hasOwnProperty", "Object.hasOwnProperty()")}} メソッドを用いることもできますが、できれば `Object.hasOwn()` を用いることをお勧めします。

## プロトタイプと継承

プロトタイプは JavaScript の強力でとても柔軟な機能であり、コードの再利用やオブジェクトの結合を可能にします。

具体的には、プロトタイプは**継承**のバージョンに対応しています。継承とは、オブジェクト指向プログラミング言語の機能で、プログラマーが「システム内のあるオブジェクトは、他のオブジェクトのより特化したバージョンである」という考えを表現させることができます。

例えば、学校をモデル化する場合、教授と生徒がいるとします。これらはどちらも「人」であり、いくつかの特性（例えば、どちらも名前を持っている）を持っていますが、それぞれの例では追加する特性（教授は教える科目を持っている）があったり、同じ特性を異なる方法で実装したりするかもしれません。OOP システムでは、教授も学生も人から**継承している**と言います。

JavaScript で、`Professor` と `Student` のオブジェクトが `Person` プロトタイプを持つことができれば、共通のプロパティを継承することができる一方で、異なるプロパティを追加したり再定義したりしたりすることができることがおわかりいただけるでしょう。

次の記事では、オブジェクト指向プログラミング言語の他の主な機能とともに継承について説明し、JavaScript がどのように対応しているかを見ていくことにします。

## まとめ

この記事では、プロトタイプオブジェクトチェーンによってオブジェクトが互いに機能を継承する方法、プロトタイププロパティとそれを使ってコンストラクターにメソッドを追加する方法など、JavaScript オブジェクトのプロトタイプを取り上げてきました。

次の記事では、オブジェクト指向プログラミングの基盤となる概念について見ていきます。

{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
