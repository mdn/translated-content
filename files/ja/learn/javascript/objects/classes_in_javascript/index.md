---
title: JavaScript のクラス
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
l10n:
  sourceCommit: ad3d16a5acd46253a4f5e2861fd4fba4e4497110
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

[前回の記事](/ja/docs/Learn/JavaScript/Objects/Object-oriented_programming)で、オブジェクト指向プログラミング (OOP) の基本的な概念を紹介し、OOP の原則を用いて学校の教授と生徒をモデル化した例を説明しました。

また、このようなモデルを実装するために[プロトタイプ](/ja/docs/Learn/JavaScript/Objects/Object_prototypes)や[コンストラクター](/ja/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)を使用できることや、より古典的なOOP の概念に近い形で、 JavaScript にも機能を提供することができることもお話ししました。

この記事では、これらの機能について説明していきます。ここで記述する機能は、オブジェクトを結合する新しい方法ではないことに留意する必要があります。プロトタイプチェーンを簡単に設定するための方法なのです。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        JavaScript 関数の理解、基本的な HTML と CSS 理解、JavaScript の基礎知識（<a href="/ja/docs/Learn/JavaScript/First_steps">JavaScript の第一歩</a>や <a href="/ja/docs/Learn/JavaScript/Building_blocks"
          >JavaScript の構成要素</a
        >を参照）、OOJS の基礎（<a href="/ja/docs/Learn/JavaScript/Objects/Basics"
          >オブジェクトの基本</a>、<a href="/ja/docs/Learn/JavaScript/Objects/Object_prototypes">オブジェクトのプロトタイプ</a>、<a href="/ja/docs/Learn/JavaScript/Objects/Object-oriented_programming">オブジェクト指向プログラミング</a>を参照）。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        「古典的な」オブジェクト指向プログラムを実装するために、JavaScript が提供する機能をどのように使用するかを理解すること。
      </td>
    </tr>
  </tbody>
<table>

## クラスとコンストラクター

クラスは {{jsxref("Statements/class", "class")}} キーワードを使用して宣言することができます。ここでは、前回記事で紹介した `Person` のクラス宣言を紹介します。

```js
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
```

これは `Person` というクラスを次のように宣言しています。

- `name` プロパティ。
- 新しいオブジェクトの `name` プロパティを初期化するために使用する `name` 引数を受け取るコンストラクター。
- `this` を用いてオブジェクトのプロパティを参照することができる `introduceSelf()` メソッド。

`name;` 宣言はオプションです。除外しても、コンストラクターの `this.name = name;` という行は、初期化する前に `name` プロパティを作成します。しかし、クラス宣言の中でプロパティを明示的に記載しておくと、コードを読む人がどのプロパティがこのクラスの一部であるかを容易に知ることができるかもしれません。

また、プロパティを宣言するときに、`name = '';` のような行で、プロパティを既定値に初期化することも可能です。

コンストラクターは {{jsxref("Classes/constructor", "constructor")}} キーワードを使って定義します。[クラス定義外のコンストラクター](/ja/docs/Learn/JavaScript/Objects/Basics#introducing_constructors)と同じように、次のようになります。

- 新しいオブジェクトを生成する
- 新しいオブジェクトに `this` を結びつけ、コンストラクターのコードで `this` を参照することができるようにする
- コンストラクターでコードを実行する
- 新しいオブジェクトを返す

上記のクラス宣言コードを指定された場合、次のように新しい `Person` インスタンスを作成して使用することができます。

```js
const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles
```

この例では、クラスの名前 `Person` を用いてコンストラクターを呼び出していることに注意してください。

### コンストラクターの省略

特別な初期化をする必要がない場合は、コンストラクターを省略することができ、既定のコンストラクターが生成されます。

```js
class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'
```

## 継承

上記の `Person` クラスを指定されたので、`Professor` サブクラスを定義してみましょう。

```js
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}
```

このクラスが他のクラスを継承していることを表すために {{jsxref("Classes/extends", "extends")}} キーワードを使用しています。

`Professor` クラスは新しいプロパティ `teaches` を追加しているので、それを宣言しています。

新しい `Professor` が作成されたときに `teaches` を設定したいので、`name` と `teaches` を引数に取るコンストラクターを定義します。このコンストラクターが最初に行うことは、{{jsxref("Operators/super", "super()")}} を使ってスーパークラスのコンストラクターを呼び出すことで、`name` の引数を渡す。スーパークラスのコンストラクターは `name` を設定する処理を行います。その後、`Professor` コンストラクターは、`teaches` プロパティを設定します。

> **メモ:** サブクラスが自分自身で初期化を行う場合は、最初に `super()` を用いてスーパークラスのコンストラクターを呼び出し、スーパークラスのコンストラクターが期待する引数をすべて渡す**必要があります**。

また、スーパークラスの `introduceSelf()` メソッドをオーバーライドし、新しいメソッド `grade()` を追加して、論文を採点するようにしました（この教授はとても優秀ではなく、論文にランダムに成績を割り当てるだけです）。

この宣言により、これで教授を作成し、使用することができるようになりました。

```js
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // some random grade
```

## カプセル化

最後に、JavaScript でカプセル化を実装するために、どのようにすればよいかを見てみましょう。前の記事では、`Student` の `year` プロパティを非公開にすることで、`Student` クラスを使用するコードを壊すことなく、アーチェリークラスに関するルールを変更したいことを説明しました。

ここでは、それを実現する `Student` クラスの宣言を示します。

```js
class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}
```

このクラス宣言では、`#year` は [プライベートデータプロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_class_fields)です。`Student` オブジェクトを作成し、内部で `#year` を使用することができますが、オブジェクトの外のコードが `#year` にアクセスしようとすると、ブラウザはエラーを報告します。

```js
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError
```

プライベートデータプロパティはクラス宣言で宣言する必要があり、その名前は `#` で始まります。

### プライベートメソッド

プライベートデータプロパティと同様に、プライベートメソッドも持つことができます。プライベートデータプロパティと同様に、その名前は `#` で始まり、オブジェクト自身のメソッドによってのみ呼び出すことができます。

```js
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError
```

## スキルをテストしましょう

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に行く前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります - [Test your skills: Object-oriented JavaScript](/ja/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript) を参照してください。

## まとめ

この記事では、オブジェクト指向のプログラムを書くために JavaScript で利用できる主なツールについて説明しました。ここですべてを網羅したわけではありませんが、始めるには十分でしょう。この記事で紹介した[クラスの記事](/ja/docs/Web/JavaScript/Reference/Classes)は、さらに詳しく学ぶには良い場所です。
{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}
