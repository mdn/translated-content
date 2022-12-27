---
title: JavaScript での継承
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
original_slug: Learn/JavaScript/Objects/Inheritance
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

OOJS のぞっとするような細部はほとんど説明されたので、ここでは”親”クラスからの機能を継承する”子供”のオブジェクトクラス (コンストラクタ) の生成方法について解説します。さらに、いつ、どこで OOJS を使うかについてのアドバイスを提示し、最新の ECMAScript の構文でクラスがどのように扱われるかを見ていきます。

| 前提知識 | 基本的なコンピュータの知識および利用能力、HTML と CSS への基本的な理解、JavaScript の基本 ([第一歩](/ja/docs/Learn/JavaScript/First_steps)と[構成要素](/ja/docs/Learn/JavaScript/Building_blocks)を参照) と OOJS の基本 ([オブジェクト入門](/ja/docs/Learn/JavaScript/Objects/Basics)) に慣れている。 |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:    | JavaScript でどのように継承ができるようになっているかを理解していること。                                                                                                                                                                                                                             |

## プロトタイプでの継承

ここまで動作している継承 ー プロトタイプチェーンがどのように動作するか、どのようにメンバーが繋がるチェーンから継承されるのかを見てきました。しかし、これらの大半はブラウザーの組み込み関数で実行されています。我々が他のオブジェクトから継承したオブジェクトを作成するには JavaScript でどのようにするのでしょうか。

具体的な例を使ってどのようの継承が行われているかを見てゆきましょう。

## さあ始めてみよう

まず、[oojs-class-inheritance-start.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-start.html) ファイルをローカルにコピーしましょう (あるいは[ライブ版の実行](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-start.html)でも確認できます)。ここでこのモジュールで幅広く使用されてきた `Person()` というコンストラクタの例を見つけることができます。わずかな違いがあって、コンストラクタ内部にプロパティのみが定義されています。

```js
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
```

メソッドはすべてコンストラクタのプロトタイプとして定義されています。例えば、

```js
Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};
```

> **メモ:** ソースコードに、`bio()` と `farewell()` が定義されています。後ほどこれらのメソッドがどのようにほかのコンストラクタで継承されるのかを確認します。

`Teacher` クラスを作成したい場合を考えましょう。これは最初のオブジェクト指向の特徴にて述べたもののようなクラスで、`Person` からすべてのメンバーを継承しますが、次のものも内包しています。

1. 新しいプロパティの `subject` — これはその先生の教える科目を格納します。
2. 上書きされた `greeting()` メソッド、標準の `greeting()` メソッドよりわずかに固く感じられる — 学校で生徒に語りかける先生により相応しい。

## Teacher() コンストラクタの機能を定義しよう

われわれのまずすべき事は `Teacher()` コンストラクタを作成する事です — 以下に続くコードを既存コードの下に追加してください。

```js
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
```

これは多くの点で Person コンストラクタと似ていますが、これまでに見てきたものと異なったものがあります— [`call()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 関数です。この関数は基本的に別の場所で定義された関数を、しかし現在のコンテキストで呼び出すことができます。最初の引数は関数を実行するときに使用したい `this` の値を指定します、また他の引数は実行される関数に渡されるべき値です。

`Teacher()` コンストラクタは継承元の `Person()` コンストラクタと同じ引数を取りたいため、 `call()` を呼び出して、すべての引き数を引数として渡します。

コンストラクタの最後の行は、先生が行うべきであり、一般の人が持たない新たな `subject`(授業) のプロパティを定義しています。

注意として、下記のソースのように、このようにシンプルにも書けます。

```js
function Teacher(first, last, age, gender, interests, subject) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.subject = subject;
}
```

しかしながらこれはただ改めてプロパティを再定義しているだけで、 `Person()` から継承していません、そのため、説明しようとしたポイントが伝わりません。またコード行数が多くもなります。

### 引数なしのコンストラクタからの継承

もし継承したコンストラクタがパラメータからプロパティの値を取得しない場合、 `call()` の呼び出しで追加の引数を指定する必要がないことを示しておきます。そのため、例えば、このような本当にシンプルなものがある場合、

```js
function Brick() {
  this.width = 10;
  this.height = 20;
}
```

このように書くことで `width` と `height` プロパティを継承することができます(もちろん、下に挙げる数行のステップの様にすることもできます)。

```js
function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}
```

`call()` の中に `this` だけを記載していることに注意して下さい— 引数を介して親より設定されるどのプロパティも継承しないので他の引数は不要です。

## Teacher()のプロトタイプ とコンストラクタの参照への設定方法

今まではすべて順調でしたが、1 点問題があります。新しいコンストラクタを定義して、その中に 1 つの `prototype` プロパティを持たせ、これはデフォルトでただ自身のコンストラクタ関数への参照を保持しています。Person のコンストラクタの `prototype` プロパティへのメソッド群は持っていません。このことを見てみたいのならば `Object.getOwnPropertyNames(Teacher.prototype)` をテキスト入力フィールドや JavaScript コンソールへ入力を試してみてください。そして再度入力する時には、`Teacher` を `Person` で置き換えてみてください。新しいコンストラクタもそれらのメソッドを継承していません。このことを確認するために、`Person.prototype.greeting` と `Teacher.prototype.greeting` の出力結果を比べてみてください。`Person()` のプロトタイプに定義されたメソッドを継承するために `Teacher()` を生成する必要があります。ではどのようにすればよいのでしょうか。

1. 前回追加した部分の下に以下の行を追加してみましょう:

    ```js
    Teacher.prototype = Object.create(Person.prototype);
    ```

    ここで我々に馴染み深い [`create()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create) に再度助けてもらいましょう。この場合に新しいオブジェクトを作ってそれを `Teacher.prototype` の値とするのに使います。新しいオブジェクトは `Person.prototype` を自身のプロトタイプとして保持し、それがゆえに(必要となる時には) `Person.prototype` 上で利用できるすべてのメソッドを継承します。

2. 先に進む前にもう一つやることがあります。
    最後の行を追加した後、`Teacher.prototype` の `constructor` プロパティは `Person()` と同じになりました。なぜなら、`Person.prototype` からプロパティを継承するオブジェクトを参照するように `Teacher.prototype` を設定しただけだからです。コードを保存し、ブラウザーでページを読み込み、コンソールに `Teacher.prototype.constructor` と入力して確認してみてください。
3. これは問題になるかもしれません、なので以下の内容をすぐに設定しましょう。 ソースコードにまた戻って最後に以下の行を追加しましょう。

    ```js
    Object.defineProperty(Teacher.prototype, 'constructor', {
        value: Teacher,
        enumerable: false, // 'for in'ループで現れないようにする
        writable: true });
    ```

4. ソースコードを保存およびページの再読み込みを行って、 `Teacher.prototype.constructor` と入力したならば `Teacher()` と返すでしょう、希望した通りに `Person()` から継承することができました！

## Teacher() に greeting() ファンクションを付け加える

コードを完成させる前に、`Teacher()` コンストラクタに新たに `greeting()` 関数を追加する必要があります。

このようにする一番簡単な方法は `Teacher()` のプロトタイプに定義することです — コードの最後に以下のコードを追加します。

```js
Teacher.prototype.greeting = function() {
  let prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};
```

これは性別を基にした適切な敬称を使う教師の挨拶を通知します。条件文を使うことで実現します。

## 例を試してみよう

これまでのコードをすべて入力し終えているなら、ソースコード(もしくはあなたの用意した同じようなコードに)の最後に続けて `Teacher()` からオブジェクトインスタンスを生成してみましょう。

```js
let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
```

保存し、再読み込みをしたなら、新たな `teacher1` オブジェクトのプロパティとメソッドにアクセスしてみましょう、例えば。

```js
teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subject;
teacher1.greeting();
teacher1.farewell();
```

これらはすべて正常に動作するはずです。1, 2, 3, 6 行目のクエリは、ジェネリックな `Person()` コンストラクタ (クラス) から継承されたメンバにアクセスします。4 行目のクエリは、より特殊な `Teacher()` コンストラクタ (クラス) でのみ利用可能なメンバにアクセスしています。5 行目のクエリは `Person()` から継承したメンバにアクセスしていますが、`Teacher()` には同じ名前の独自のメンバがあるため、そのメンバにアクセスしています。

> **メモ:** もしここまでの例がうまく動作しないなら、あなたのコードと[完成版](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-finished.html)([ライブ版](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-finished.html)も参照)を比較してみてください。

ここで述べている手法は JavaScript でクラスを継承する唯一の方法ではなく、問題なく動作し、JavaScript でのどのように実装するかの良いアイデアを提示しています。

また JavaScript でより明瞭に継承を行えるようにした新しい{{glossary("ECMAScript")}}の機能([Classes](/ja/docs/Web/JavaScript/Reference/Classes) を参照)にも興味を持つかもしれません。ここではそれらについて言及はしませんでした、それはまだブラウザー間で幅広くサポートされていないためです。一連の記事で検討してきた他のコード構造はすべて、IE9 やそれ以前のバージョンといった、はるか以前よりサポートされており、それより早くからのサポートを確認する方法となります。

一般的な方法は JavaScript ライブラリを使用することです — よく知られた選択肢のうちの大部分は、よりたやすく素早く利用できる簡易な機能セットを持っています。例えば [CoffeeScript](http://coffeescript.org/#classes) は `class`, `extends` などを提供します。

## 追加の特訓

[OOP 理論のセクション](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters)では、概念として `Student` クラスも取り上げました。このクラスは `Person` のすべての機能を継承しており、また `Person` とは異なる `Teacher` の greeting よりもはるかにくだけた `greeting()` メソッドを持っています。このセクションで生徒の挨拶がどのように見えるかを見て、`Person()` のすべての機能を継承し、異なる `greeting()` 関数を実装した独自の `Student()` コンストラクタを実装してみてください。

> **メモ:** もしここまでの例がうまく動作しないなら、あなたのコードと[完成版](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-finished.html)([動作するライブ版](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-finished.html)も参照)を比較してみてください。

## Object メンバーの概要

要約すると、気になるプロパティ/メソッドは 4 種類あります。

1. コンストラクタ関数の内部で定義され、オブジェクトインスタンスに与えられるもの。独自のカスタムコードでは、コンストラクタの内部で `this.x = x` 型の行を使用して定義されたメンバです。組み込みのブラウザーコードでは、オブジェクトインスタンス (通常は `new` キーワードを使用してコンストラクタを呼び出すことで作成されます。例: `let myInstance = new myConstructor()`) のみが利用可能なメンバです
2. コンストラクタ自身で直接定義されたもので、コンストラクタ上でのみ利用可能なもの。これらは一般的に組み込みのブラウザーオブジェクトでのみ利用可能であり、インスタンスではなくコンストラクタに直接連結されていることで認識されます。たとえば [`Object.keys()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) などです。これらは**静的プロパティ/メソッド**としても知られています
3. コンストラクタのプロトタイプに定義されているもので、すべてのインスタンスに継承され、オブジェクトクラスを継承しているもの。これらには、コンストラクタの `prototype` プロパティに定義されている任意のメンバ (例: `myConstructor.prototype.x()`) が含まれます
4. これらは、上で見たようにコンストラクタがインスタンス化されたときに作成されるオブジェクト (例えば `let teacher1 = new Teacher('Chris');` の後に `teacher1.name`)、またはオブジェクトリテラル (`let teacher1 = { name : 'Chris' }` の後に `teacher1.name`) のいずれかであることができます

もしどれがどれを指すかを区別できないのであれば、まだ気にしないでください — あなたはまだ学習中で、実践を通じて精通することでしょう。

## ECMAScript 2015 のクラス

ECMAScript 2015 では、C++ や Java のクラスに似た、より簡単で洗練された構文を使用して再利用可能なクラスを記述する方法として、JavaScript に[クラス構文](/ja/docs/Web/JavaScript/Reference/Classes)を導入しています。このセクションでは、Person と Teacher の例をプロトタイプの継承からクラスに変更して、どのようにして行うかを示します。

> **メモ:** この近代的なクラスの作成方法は現在のすべてのブラウザーでサポートされていますが、この構文をサポートしていないブラウザー (特に Internet Explorer) をサポートする必要があるプロジェクトで作業する場合に備えて、基本的なプロトタイプの継承の仕組みについて知っておくことはまだ価値があります。

Person の例を class-style で書き直したバージョンを見てみましょう：

```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}
```

[class](/ja/docs/Web/JavaScript/Reference/Statements/class)ステートメントは、新しいクラスを作成していることを示します。 このブロックの中で、クラスのすべての機能を定義します。

- [`constructor()`](/ja/docs/Web/JavaScript/Reference/Classes/constructor) メソッドは、`Person`クラスを表すコンストラクタ関数を定義します
- `greeting()` と `farewell()` はクラスメソッドです。クラスに関連付けたいメソッドは、コンストラクタの後に定義されます。この例では、コードを読みやすくするために、文字列連結ではなく[テンプレート文字列](/ja/docs/Web/JavaScript/Reference/template_strings)を使用しています

以前と同じように[new 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)を使用してオブジェクトインスタンスをインスタンス化できるようになりました。

```js
let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();
// Leia has left the building. Bye for now
```

> **メモ:** 内部ではクラスはプロトタイプの継承モデルに変換されています。これはシンタックスシュガーです。しかし、私たちはあなたがそれを書く方が簡単だと考えるだろうと確信しています。

### クラス構文による継承

上記では人を表すクラスを作成しました。彼らはすべての人々に共通の一連の属性を持っています。このセクションでは、特殊な`Teacher`クラスを作成し、現代のクラス構文を使用して`Person`から継承します。これはサブクラス、またはサブクラスの作成と呼ばれます。

サブクラスを作成するには [extends キーワード](/ja/docs/Web/JavaScript/Reference/Classes/extends)を使用して、クラスの基底となるクラスを JavaScript に通知します。

```js
constructor(first, last, age, gender, interests) {
   this.name = {
     first,
     last
   };
   this.age = age;
   this.gender = gender;
   this.interests = interests;
}
```

[`super()`](/ja/docs/Web/JavaScript/Reference/Operators/super) 演算子を `constructor()` 内の最初の項目として定義することで、コードをより読みやすくすることができます。これは親クラスのコンストラクタを呼び出し、そこに定義されている限り、指定したメンバーを`super()` のパラメータとして継承します。

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // 科目と学年は教師によって決まっている
    this.subject = subject;
    this.grade = grade;
  }
}
```

`Teacher`のオブジェクトをインスタンス化するときには、`Teacher`と`Person`の両方で定義されたメソッドとプロパティを呼び出すことができます。

```js
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age // 58
snape.subject; // Dark arts
```

Teachers と同じように、基本クラスを変更せずに `Person` をさらに特化したものにするために、他のサブクラスを作成できます。

> **メモ:** この例は、GitHub で [es2015-class-inheritance.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/es2015-class-inheritance.html) として見つけることができます([これも実際に参照してください](https://mdn.github.io/learning-area/javascript/oojs/advanced/es2015-class-inheritance.html))。

## Getter と Setter

作成するクラスの属性の値を変更したい場合や、属性の最終値がわからない場合があります。`Teacher` の例を使用すると、教師が教材を作成する前にどの教科を教えるか分からないことがあります。

getter や setter でこのような状況を処理できます。

getter と setter で Teacher クラスを強化しましょう。私たちが最後に見たときと同じようにクラスが始まります。

getter と setter はペアで動作します。getter は変数の現在の値を返し、対応する setter は変数の値をひとつの値に変更します。

変更された `Teacher` クラスは次のようになります。

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // 科目と学年は教師によって決まっている
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}
```

上のクラスでは、`subject` プロパティの getter と setter があります。 Name プロパティを格納するために **`_` **を使用して別の値を作成します。この規約を使用しないと、get または set を呼び出すたびにエラーが発生します。 この時点で：

- `snape` オブジェクトの `_subject` プロパティの現在の値を表示するには、`snape.subject` getter メソッドを使用します
- `_subject` プロパティに新しい値を割り当てるには、`snape.subject="new value"` setter メソッドを使用できます

以下の例は、動作している 2 つの機能を示しています。

```js
// デフォルトの値をチェックする
console.log(snape.subject) // Returns "Dark arts"

// 値を変更する
snape.subject = "Balloon animals" // Sets _subject to "Balloon animals"

// 新しい値と一致しているか再度チェックする
console.log(snape.subject) // Returns "Balloon animals"
```

> **メモ:** この例は、GitHub で [es2015-class-inheritance.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/es2015-class-inheritance.html) として見つけることができます([これも実際に参照してください](https://mdn.github.io/learning-area/javascript/oojs/advanced/es2015-class-inheritance.html))。

> **メモ:** ゲッターやセッターは、プロパティが要求されたり設定されたりするたびにコードを実行したい場合など、非常に便利な場合があります。しかし、単純なケースでは、ゲッターやセッターを使用しないプレーンなプロパティアクセスで十分です。

## JavaScript でいつ継承を使用するのでしょうか？

特にこの最後の記事を読み終えた後、「うーん、これはややこしいな。」と考えることでしょう。ええ、それは正しい感想です。プロトタイプと継承は JavaScript のもっとも複雑な面のいくつかに当たります、しかし多くの JavaScript の能力と柔軟性はそのオブジェクトの構造と継承に由来します、そしてそれがどのように動作するかは理解するに値します。

ある意味では、常に継承を使用しています。Web API の様々な機能、文字列や配列といったブラウザーに組み込まれたオブジェクトで定義されているメソッド/プロパティを使用するときはいつも、暗黙の内に継承を使用しています。

コードに継承を使用していることに関して、特に開始時には、そして小さなプロジェクトでは多分頻繁には使っていないでしょう。不要にも関わらず、継承のためだけにオブジェクトおよび継承を使用するのは時間の浪費です。しかしコードの母体が大きくなればなるほど、継承についての必要性が目に付きやすくなってきます。同じような機能を持ついくつものオブジェクトを作成していることに気付いた場合は、共有機能を持つ汎化オブジェクトタイプを作成し、特化オブジェクトタイプでそれらの機能を継承させるのがお手軽であり、便利です。

> **メモ:** プロトタイプチェーンなどを使って JavaScript が動作する方法のために、オブジェクト間での機能の共有をしばしば **移譲** と呼ぶ事があります。特化オブジェクトは汎化オブジェクトタイプから機能的に移譲されています。

継承を使用している時、継承をやたら多いレベルに行わないように、メソッドとプロパティをどこに定義したかを注意深く追跡し続けるようにアドバイスされるでしょう。組み込みブラウザーのオブジェクトのプロトタイプを一時的に変更するコードを書き始めることは可能ですが、実際に良い理由がないのであれば、そうすべきではありません。過剰な継承は終わりない混乱や、そんなコードをデバッグする時は終わりない痛みに繋がりかねません。

究極的には、オブジェクトは関数やループのような、自身の固有の役割や長所を活かした、コードの再利用の単なる別の形でもあります。もし関連のある変数や関数の一団を作成していることに気付き、それらすべてを追跡して適切にパッケージ化したいのであれば、オブジェクトは良いアイデアです。オブジェクトはまた、ある所から別の所にデータの集合を渡したい場合にも大変便利です。これらの事柄の両方がコンストラクタや継承を使用する事なく達成できます。もしオブジェクトの単一のインスタンスが必要なだけであれば、オブジェクトリテラルを使用するのが多分より良く、確実に継承は必要ないでしょう。

## プロトタイプチェーンを拡張するための代替案

JavaScript では、上で示したものとは別に、オブジェクトのプロトタイプを拡張する方法がいくつかあります。その他の方法についての詳細は、[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#プロトタイプチェーンを作成・変更する様々な方法)の記事を参照してください。

## あなたのスキルをテストしてみましょう!

この記事はここまでですが、最も重要な情報を覚えていますか？先に進む前に、この情報を保持しているかどうかを確認するためのテストがいくつかあります - [あなたのスキルをテストする: オブジェクト指向 JavaScript](/ja/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript) を参照してください。

## まとめ

この記事は今知っておくべき考えられる OOJS の核となる理論および文法の残りの部分をカバーしています。この時点で、 JavaScript オブジェクトおよび オブジェクト指向プログラミングの基本、プロトタイプとプロトタイプにおける継承、クラス(コンストラクタ)とオブジェクトのインスタンスの生成、クラスへの機能の追加、他のクラスから継承されたサブクラスの生成をどのように行うか、を理解しているでしょう。

次の記事では JavaScript Object Notaion (JSON) 、つまり JavaScript オブジェクトを使用して書かれた共通データ交換フォーマット、がどのように動作するかをを見て行きましょう。

## あわせて参照

- [ObjectPlayground.com](http://www.objectplayground.com/) — オブジェクトについて学べる非常に有益な会話型学習サイト
- [Secrets of the JavaScript Ninja](https://www.amazon.com/gp/product/193398869X/), Chapter 6 — John Resig Bear Bibeault による、先進的な JavaScript のコンセプトおよび手法についての良書。6 章ではプロトタイプや継承の非常に有効な面が説明されている。多分プリントやオンラインのコピーを比較的簡単に追跡する事ができるでしょう。
- [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes) — Kyle Simpson による JavaScript を説明したすぐれたシリーズの一部。特に 5 章はプロトタイプについて、我々の説明より相当詳細に説明しています。初心者向けのこのシリーズ記事では単純化した見方を提供してきましたが、いっぽう Kyle は非常に深く論じており、より複雑だがより正確な図を提供しています。

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

## このモジュール

- [JavaScript オブジェクトの基本](/ja/docs/Learn/JavaScript/Objects/Basics)
- [初心者のためのオブジェクト指向 JavaScript](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Object のプロトタイプ](/ja/docs/Learn/JavaScript/Objects/Object_prototypes)
- [JavaScript での継承](/ja/docs/Learn/JavaScript/Objects/Inheritance)
- [JSON データの操作](/ja/docs/Learn/JavaScript/Objects/JSON)
- [オブジェクト作成の練習](/ja/docs/Learn/JavaScript/Objects/Object_building_practice)
- [バウンスボールに機能を追加する](/ja/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
