---
title: 初心者のためのオブジェクト指向 JavaScript
slug: conflicting/Learn/JavaScript/Objects/Classes_in_JavaScript
original_slug: Learn/JavaScript/Objects/Object-oriented_JS
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

基礎が片付いたところで、オブジェクト指向 JavaScript (OOJS) について取り上げます。この記事ではオブジェクト指向プログラミング (OOP) の基本的な視点を説明し、 JavaScript がどのようにコンストラクター関数を通じてオブジェクトクラスをエミュレートしているか、またどのようにオブジェクトインスタンスを生成しているかを紹介します。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        基礎的なコンピュータリテラシー、基礎的な HTML と CSS の理解、JavaScript
        (<a href="/ja/docs/Learn/JavaScript/First_steps">JavaScript の第一歩</a
        >や
        <a href="/ja/docs/Learn/JavaScript/Building_blocks"
          >JavaScript の構成要素</a
        >を参照) および OOJS (<a href="/ja/docs/Learn/JavaScript/Objects/Basics"
          >JavaScript オブジェクトの基本</a
        >を参照)の基礎知識。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        オブジェクト指向プログラミングの基本理論、どのようにそれが JavaScript
        (「すべてはオブジェクトである」)
        に関連しているか、どのようにコンストラクターがオブジェクトインスタンスを生成しているかを理解する。
      </td>
    </tr>
  </tbody>
</table>

## オブジェクト指向プログラミング - その基本

はじめに、オブジェクト指向プログラミング (OOP) とは何か、シンプルかつ高レベルな視点を提示します。シンプルと述べたのは、OOP はあっという間にひどく複雑になり得るためで、現時点でそのすべてを論じてしまうと、助けとなるよりもむしろ混乱を生んでしまうことでしょう。OOP の基本的な考え方は、プログラムの中で扱いたい、現実世界の事物を模るためにオブジェクトを使用すること、またはそうしなければ使うことが難しいあるいは不可能だった機能にアクセスするための、シンプルな方法を提供することです。

オブジェクトは、モデル化しようとしている事物に関する情報および、持たせたい機能や動作を表現する、関連したデータとコードを持つことができます。オブジェクトのデータ (しばしば関数も含む) はオブジェクトのパッケージの中 (**名前空間**と呼ばれることがある) に適切に格納されます (**カプセル化**)。オブジェクトは一般に、ネットワークを通じて容易に送信することが可能な、データストアとしても使われます。

### オブジェクトのテンプレートを定義する

学校の生徒と教師の情報を表示する、シンプルなプログラムを考えてみましょう。特定のプログラミング言語の文脈ではなく、OOP 一般の理論を眺めていきます。

はじめに、[オブジェクト入門の最初の記事](/ja/docs/Learn/JavaScript/Objects/Basics)にある、人物の包括的なデータや機能を定義した、Person オブジェクトに戻りましょう。ある人物について知り得る事柄は数多くあります (住所、身長、靴のサイズ、DNA 情報、パスポート番号、顕著な人格特性など) が、このケースでは名前、年齢、性別、趣味を表示することに興味があるだけです。また、このデータに基づいた短い自己紹介や、挨拶をさせられるようにもしましょう。これは**抽象化** — より複雑な事物を、プログラムの目的に沿って簡単に操作できるように、その最も重要な側面を表現する、シンプルなモデルを作ること — として知られています。

![](person-diagram.png)

### 実際のオブジェクトの生成

このクラスから、**オブジェクトインスタンス**を生成することができます。オブジェクトインスタンスは、クラスで定義されたデータや機能を持ったオブジェクトです。 Person クラスから、何名かの実際の人物を生成します。

![](mdn-graphics-instantiation-2-fixed.png)

クラスからオブジェクトインスタンスが生成されるとき、クラスの**コンストラクター関数**が生成のために実行されます。クラスからオブジェクトインスタンスが生成される過程を**インスタンス化**と呼びます。オブジェクトインスタンスは、クラスを**インスタンス化**したものです。

### 専門のクラス

このケースで求めているのは、包括的な人物ではなく、より特定のタイプである、教師と生徒です。OOP では、他のクラスを元にした新しいクラスを作ることができます。これらの新しい**子クラス**は、**親クラス**からデータやコード機能を**継承**することができ、すべてのオブジェクトタイプに共通する機能を、重複させるのではなく、再利用することができます。クラス間で機能が異なる場合は、必要に応じて特殊化された機能を直接定義することができます。

![](mdn-graphics-inherited-3.png)

これは実に役立ちます。教師と生徒は名前、性別、年齢のように多数の共通機能を共有しており、これらの機能を一度だけ定義すればいいので便利です。異なるクラスで、同じ機能を分けて定義することもでき、その機能の各定義は異なる名前空間に置かれます。例えば、生徒の挨拶は "Yo, I'm \[firstName]" (例：_Yo, I'm Sam) という形式とし、一方の教師の挨拶は、より形式的に_ "Hello, my name is \[Prefix] \[lastName], and I teach \[Subject]." (例：_Hello, My name is Mr Griffiths, and I teach Chemistry) のように。_

> **メモ:** 同じ機能を複数のオブジェクトタイプが実装する能力のことを示す用語に、**ポリモーフィズム**があります。不思議に感じているかも知れないので念のため。

子クラスのオブジェクトインスタンスを生成しましょう。例：

![](mdn-graphics-instantiation-teacher-3.png)

記事の続きでは、OOP 理論が JavaScript でどのように実践されているかを見ていきます。

## コンストラクターとオブジェクトインスタンス

JavaScript では、オブジェクトやその機能を定義し初期化するために**コンストラクター関数**と呼ばれる特殊な関数を使用します。これは便利です。なぜならオブジェクトをいくつ作成することになるか分からない状況に出くわすでしょうから。コンストラクターは必要な数のオブジェクトを効率的な方法で作成し、必要に応じてデータや関数を付加する手段を提供します。

JavaScript でコンストラクターを通じてクラスを作り、そこからオブジェクトのインスタンスを生成するところを見ていきましょう。まずは、最初のオブジェクトの記事で見た [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html) ファイルの新しいコピーを、ローカルに作成しておいてください。

### シンプルな例

1. どのように通常の関数で人物を定義できるかを見てみるところから始めましょう。この関数を `script` 要素の中に加えてください。

    ```js
    function createNewPerson(name) {
      const obj = {};
      obj.name = name;
      obj.greeting = function() {
        alert('Hi! I\'m ' + obj.name + '.');
      };
      return obj;
    }
    ```

2. この関数を呼び出すことで、新しい人物を生成することができます。次の 3 行をブラウザーの JavaScript コンソールで試してみてください。

    ```js
    const salva = createNewPerson('Salva');
    salva.name;
    salva.greeting();
    ```

    これも十分上手くいっていますが、やや長ったらしいです。オブジェクトを生成したいと知っているなら、なぜ明示的に空のオブジェクトを生成し、返すことが必要なのでしょうか？幸いにも、 JavaScript はコンストラクター関数という形で、便利なショートカットを提供してくれます。早速作ってみましょう！

3. 前の関数を、以下のもので置き換えてください。

    ```js
    function Person(name) {
      this.name = name;
      this.greeting = function() {
        alert('Hi! I\'m ' + this.name + '.');
      };
    }
    ```

コンストラクター関数は、 JavaScript 版のクラスです。それは関数に期待される全ての機能を持っていますが、何も返さないし、明示的にオブジェクトを生成しもしないという点に注意してください。基本的には、プロパティとメソッドを定義するだけです。加えて、 `this` キーワードが使われていることにも注意してください。基本、オブジェクトインスタンスの 1 つが作成されるときにはいつでも、オブジェクトの `name` プロパティはコンストラクター呼び出しに渡される name 値と等しくなり、 `greeting()` メソッドもコンストラクター呼び出しに渡される name 値を使用します。

> **メモ:** 通常、コンストラクター関数の名前は大文字で始まります。コードの中で、コンストラクター関数がより容易に認識されるようにするための慣習です。

では、オブジェクトを生成するために、どのようにコンストラクターを呼び出したらよいでしょうか？

1. 次の 2 行を、前のコードの続きに加えてください。

    ```js
    let person1 = new Person('Bob');
    let person2 = new Person('Sarah');
    ```

2. コードを保存し、ブラウザーをリロードして、以下の 4 行を JavaScript コンソールに入れて試してみてください。

    ```js
    person1.name
    person1.greeting()
    person2.name
    person2.greeting()
    ```

素晴らしい！2 つの新しいオブジェクトが、異なる名前空間の下でページに格納されていることが確認できます。それらのプロパティとメソッドにアクセスするときには、 `person1` または `person2` を呼び出すことから始めなければなりません。中に含まれている機能は適切にパッケージ化されており、他の機能と衝突しないようになっています。しかしながら、それらは同じように `name` プロパティと `greeting()` メソッドが利用可能です。 2 つのオブジェクトはそれぞれ、生成されたときに割り当てられた、自身の `name` 値を使っていることに注意してください。これが `this` を使うことがとても重要である理由の 1 つであり、他の値ではなく、自身の値を使っているのです。

コンストラクターをもう一度呼び出してみましょう。

```js
let person1 = new Person('Bob');
let person2 = new Person('Sarah');
```

いずれのケースでも、新しいオブジェクトインスタンスを生成したいとブラウザーに伝えるために `new` キーワードが使われており、その後に、括弧に必要なパラメーターを入れた関数名が続き、その結果が変数に格納されていて、一般的な関数の呼ばれ方とよく似ています。どちらのインスタンスも、次の定義によって生成されています。

```js
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
```

新しいオブジェクトが生成された後、 `person1` および `person2` 変数は、次のオブジェクトを格納しています。

```js
{
  name: 'Bob',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

{
  name: 'Sarah',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}
```

コンストラクター関数を呼び出すとき、毎回 `greeting()` メソッドを定義していることに注意してください。これは理想的ではありません。これを回避するために、代わりにプロトタイプに関数を定義することができます。後で見てみましょう。

### 最終的なコンストラクターの作成

上で見てきた例は、スタートのためのシンプルな例に過ぎません。次は最終的な `Person()` コンストラクター関数を作りましょう。

1. ここまでに挿入したコードを削除し、代わりとなるコンストラクターを追加してください。これはシンプルな例とほぼ同じもので、ほんのわずか複雑になっているだけです。

    ```js
    function Person(first, last, age, gender, interests) {
      this.name = {
         first : first,
         last : last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
      this.bio = function() {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
      };
      this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
      };
    }
    ```

2. ではその下に、コンストラクターからオブジェクトインスタンスを生成するため、次の行を追加してください。

    ```js
    let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
    ```

ちょうど以前行ったように、プロパティやメソッドにアクセスできることを確認できます。 JavaScript コンソールの中でやってみましょう。

```js
person1['age']
person1.interests[1]
person1.bio()
// etc.
```

> **メモ:** もしこの工程で何らかのトラブルがあった場合は、あなたのコードを我々のバージョン ([oojs-class-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-finished.html)。[ライブサンプル](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-finished.html)も) と比べてみてください。

### さらなる練習

まずはじめに、さらにいくつかのオブジェクトを生成する独自の行を追加し、オブジェクトインスタンスのメンバーの取得や設定をしてみてください。

加えて、 `bio()` メソッドにはいくつかの問題点があります。人物が女性である、あるいは他の優先される性別分類の場合でも、その出力には常に "He" という代名詞が含まれています。また、 bio は `interests` 配列により多くのものが列挙されていても、2 つの趣味しか含みません。このクラス定義 (コンストラクター) の問題を、あなたはどのように修正することができますか？コンストラクター内に任意のコード (恐らく、いくつかの条件分岐やループが必要となるでしょう) を入れてみてください。性別や、趣味の数が 1、2、あるいは 2 よりも多いかどうかによって、文がどのように構築されるべきか考えてみてください。

> **メモ:** もし行き詰まってしまった場合は、[GitHub に答えとなるリポジトリ](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html) ([ライブ](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html)) があります。最初はあなた自身で書いてみてください！

## オブジェクトインスタンスを生成する他の方法

ここまで、オブジェクトインスタンスを生成する 2 つの異なる方法を見てきました。[オブジェクトリテラルの宣言](/ja/docs/Learn/JavaScript/Objects/Basics#Object_basics)と、上で見たコンストラクター関数の使用です。

これで十分かもしれませんが、他にも方法はあります。ウェブを巡る際に遭遇したときに備えて、よく知っておいてください。

### Object() コンストラクター

まず最初に、 [`Object()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object) コンストラクターを新しいオブジェクトの生成のために使うことができます。はい、一般的なオブジェクトにも、空のオブジェクトを生成するコンストラクターがあります。

1. このコードを JavaScript コンソールに入力してみましょう。

    ```js
    let person1 = new Object();
    ```

2. `person1` 変数に空のオブジェクトが格納されました。このオブジェクトに、ドット記法とブラケット記法を使ってプロパティを追加することができます。次の例を JavaScript コンソールで試してみましょう。

    ```js
    person1.name = 'Chris';
    person1['age'] = 38;
    person1.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
    ```

3. あらかじめプロパティやメソッドを設定するため、`Object()` コンストラクターに引数としてオブジェクトリテラルを渡すことも可能です。次のコードを JavaScript コンソールで試してみてください。

    ```js
    let person1 = new Object({
      name: 'Chris',
      age: 38,
      greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
      }
    });
    ```

### create() メソッドの使用

コードの順序についてもコンストラクターが助けとなります。コンストラクターを一箇所で作っておくと、必要に応じてインスタンスを生成することができ、それらがどこから来たものであるか、明瞭です。

しかしながら、特に少数のインスタンスのみを生成する場合に、最初にコンストラクターを作らずにインスタンスを生成することを好む人もいます。JavaScript にはそれを可能とする、`create()` と呼ばれる組み込みメソッドがあります。それにより、既存のオブジェクトを基にして、新しいオブジェクトを生成することができます。

1. 前のセクションの練習をブラウザーで終えた状態で、こちらを JavaScript コンソールで試してみてください。

    ```js
    let person2 = Object.create(person1);
    ```

2. 次は以下のコードです。

    ```js
    person2.name;
    person2.greeting();
    ```

`person1` を基に `person2` が生成され、`person2` では同じプロパティとメソッドが利用可能であることを確認することができます。

`create()` には、IE8 が対応していないという制限があります。つまり、コンストラクターは古いブラウザーに対応したい場合により効果的かもしれません。

いずれ、`create()` の効果についてより詳細に紹介するつもりです。

## あなたのスキルをテストしてみましょう!

この記事はここまでですが、最も重要な情報を覚えていますか？先に進む前に、この情報を保持しているかどうかを確認するために、さらにいくつかのテストを見つけることができます。[あなたのスキルをテストする: オブジェクト指向 JavaScript](/ja/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript) を参照してください。

この一連のテストは次の記事で紹介する知識に依存していることに注意してください。なので、試してみる前に、まずそれを読んでみるといいかもしれません。

## まとめ

この記事はオブジェクト指向の理論の概略を見てきました。これですべてではありませんが、ここで扱っていることに関する考えを提示しました。加えて、オブジェクトのインスタンスを生成する様々な方法を見始めたところです。

次の記事では、 JavaScript オブジェクトのプロトタイプについて紹介します。

{{PreviousMenuNext("Learn/JavaScript/Objects/Basics", "Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

## このモジュール内の文書

- [オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)
- [初心者のためのオブジェクト指向 JavaScript](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Object のプロトタイプ](/ja/docs/Learn/JavaScript/Objects/Object_prototypes)
- [JavaScript での継承](/ja/docs/Learn/JavaScript/Objects/Inheritance)
- [JSON データの操作](/ja/docs/Learn/JavaScript/Objects/JSON)
- [オブジェクト作成の練習](/ja/docs/Learn/JavaScript/Objects/Object_building_practice)
- [バウンスボールに機能を追加する](/ja/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
