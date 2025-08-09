---
title: オブジェクト指向プログラミング
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

オブジェクト指向プログラミング (OOP) は、Java や C++ をはじめとする多くのプログラミング言語の基本となるプログラミングパラダイムです。この記事では、OOP の基本的な概念について説明します。主に**クラスとインスタンス**、**継承**、**カプセル化**の 3 つの概念を説明します。これは、特に JavaScript を参照することなくこれらの概念を記述することになるので、すべての例は{{Glossary("Pseudocode", "擬似コード")}}で示されます。

> [!NOTE]
> 正確には、ここで記述されている機能は、**クラスベース**または「古典的」OOP と呼ばれる OOP の特定のスタイルのものです。人々が OOP について語るとき、一般的にはこの種類を意味します。

その後、JavaScript で、コンストラクターとプロトタイプチェーンがこれらの OOP の概念にどのように関連しているか、またどのように異なるかを見ていきます。次の記事では、オブジェクト指向のプログラムを実装するために、JavaScript の追加機能を紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        JavaScript の基本
        （特に<a href="/ja/docs/Learn_web_development/Core/Scripting/Object_basics">オブジェクトの基本</a>を参照）、およびこのモジュールのこれまでのレッスンで扱ってきたオブジェクト指向 JavaScript の概念。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>オブジェクト指向プログラミング (OOP) の概念: クラス、インスタンス、継承、カプセル化。</li>
          <li>これらのオブジェクト指向の概念が JavaScript でどのように適用されるか、また、 Java や C++ などの言語との違いは何か。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

オブジェクト指向プログラミングは、システムをオブジェクトの集合としてモデル化することであり、各オブジェクトはシステムの具体的な側面を表します。オブジェクトには、関数（またはメソッド）とデータの両方が格納されています。オブジェクトは、使用したい他のコードに公開インターフェイスを提供しますが、自分自身でプライベートな内部状態を維持します。システムの他の部分は、オブジェクトの内部で何が起こっているかを気にする必要はありません。

## クラスとインスタンス

OOP でオブジェクトの観点から問題をモデル化する場合、システムにあるべきオブジェクトの種類を表す抽象的な定義が作成されます。例えば、学校をモデル化する場合、教授を表すオブジェクトを持つことができるかもしれません。すべての教授には、名前と教科という共通プロパティがあります。また、すべての教授ができることは決まっています。例えば、すべて論文の採点ができ、例えば、年度始めには学生に自己紹介をすることができます。

つまり、`Professor` は我々のシステムにおける**クラス**となり得るのです。クラスの定義には、すべての教授が持つデータとメソッドが掲載されています。

擬似コードでは、`Professor` クラスは次のように書くことができます。

```plain
class Professor
    properties
        name
        teaches
    methods
        grade(paper)
        introduceSelf()
```

これは、`Professor` クラスを次のように定義しています。

- 2 つのデータプロパティ: `name` と `teaches`
- 2 つのメソッド: `grade()` は論文の採点、`introduceSelf()` は自己紹介を行う。

クラスは自分自身で何かをするわけではなく、その種類の具体的なオブジェクトを作成するためのテンプレートのようなものです。作成する具体的な教授たちは、それぞれ `Professor` クラスの**インスタンス**と呼ばれます。インスタンスを作成する処理は、**コンストラクター**と呼ばれる特別な関数によって実行されます。コンストラクターには、新しいインスタンスで初期化したい内部状態を表す値を渡します。

一般に、コンストラクターはクラス定義の一部として書き出され、通常はクラスそのものと同じ名前を持っています。

```plain
class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()
```

このコンストラクターは引数を2つ取るので、新しい具体的な教授を作成するときに `name` と `teaches` のプロパティを初期化することができます。

これでコンストラクターがあるので、いくつかの教授を作成することができます。プログラミング言語では、しばしば `new` キーワードを使用して、コンストラクターを呼び出すことを指示します。

```js
walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'
```

これは 2 つのオブジェクトを作成します。どちらも `Professor` クラスのインスタンスです。

## 継承

学校で、学生も表したいとします。教授とは異なり、学生は論文を採点することができず、特定の科目を教えることもなく、特定の学年に所属することもありません。

しかし、学生は名前を持ち、自己紹介をすることもできるので、学生クラスの定義を次のように書くことにします。

```plain
class Student
    properties
        name
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
```

学生と教授が何らかのプロパティを共有しているという事実、より正確には、あるレベルでは、それらは _同じ種類のもの_ であるという事実を表すことができれば便利でしょう。これを実現するのが、**継承**です。

まず、学生も教授も人間であり、人間には名前があり、自己紹介をしたいということを観察することから始めます。このモデルは新しいクラス `Person` を定義することで実現でき、そこで人に共通するプロパティをすべて定義します。そして、`Professor` と `Student` は `Person` から**派生**することができ、それぞれのプロパティを追加することができます。

```plain
class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
```

この場合、`Person` は `Professor` と `Student` の両方の**スーパークラス**または**親クラス**であると言うことになります。逆に、`Professor` と `Student` は `Person` の**サブクラス**または**子クラス**であると言えます。

この 3 つのクラスすべてで `introduceSelf()` が定義されていることにお気づきでしょうか。この理由は、すべての人が自己紹介をしたいが、その方法は異なるからです。

```js
walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'
```

学生でも教授でもない人のために、`introduceSelf()` の既定の実装を置いた方が良いかもしれません。

```js
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'
```

このような機能（メソッドが同じ名前で、異なるクラスで異なる実装を持つこと）を **ポリモーフィズム** と呼びます。サブクラスのメソッドがスーパークラスの実装を置き換える場合、サブクラスがスーパークラスのバージョンを**上書きする**と言います。

## カプセル化

オブジェクトは、それを使用したい他のコードにインターフェイスを提供しますが、自分自身で内部状態を保持します。オブジェクトの内部状態は **非公開** に保たれ、他のオブジェクトからはアクセスできず、オブジェクト自身のメソッドによってのみアクセスできることを意味します。オブジェクトの内部状態を非公開にすること、そして一般に、その公開インターフェイスと非公開の内部状態を明確に分けることを、**カプセル化**と呼びます。

これは有益な機能で、プログラマーがオブジェクトを使用するコードをすべて探して更新することなく、オブジェクトの内部実装を変更することができます。

例えば、2 年生以上の学生がアーチェリーを学ぶことを許可されているとします。これは、学生の `year` プロパティを公開すれば、他のコードはその学生がそのコースを取ることができるかどうかを判断することができるように実装できます。

```js
if (student.year > 1) {
  // 学生がクラスに入れる
}
```

問題は、もし生徒がアーチェリーを学ぶことを許可する基準を変更することにした場合、例えば親や 保護者からの許可も必要とした場合、このテストを実行するシステム内のすべての場所を更新する必要があることです。そこで、`Student` オブジェクトに `canStudyArchery()` メソッドを用意し、1 か所でロジックを実装するようにしたほうがよいでしょう。

```plain
class Student : extends Person
    properties
       year
    constructor
       Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }
```

```js
if (student.canStudyArchery()) {
  // 学生がクラスに入れる
}
```

そうすれば、アーチェリーの履修規則を変更したくなったとき、`Student` クラスを更新するだけで、それを使用するコードはすべて動作するようになります。

多くの OOP 言語では、いくつかのプロパティを `private` としてマークすることで、他のコードがオブジェクトの内部状態にアクセスするのを防ぐことができます。これにより、オブジェクトの外のコードがそれらにアクセスしようとすると、エラーが発生するようになります。

```plain
class Student : extends Person
    properties
       private year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // error: 'year' is a private property of Student
```

このようにアクセスを強制しない言語では、プログラマーは、名前をアンダースコアで始めるなどの命名規則を使用して、プロパティがプライベートとみなされることを示します。

## OOP と JavaScript

この記事では、Java や C++ などの言語で実装されているクラスベースのオブジェクト指向プログラミングの基本的な機能のいくつかを記述しました。

前回までの 2 つの記事では、JavaScript の中核となる機能をいくつか見ていきました。[コンストラクター](/ja/docs/Learn_web_development/Core/Scripting/Object_basics)と[プロトタイプ](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)です。これらの機能は、確かに記述した OOP 概念のいくつかと何らかの関連があります。

- JavaScript の**コンストラクター**は、クラス定義のようなもので、オブジェクトの「形状」を定義することができ、そのオブジェクトに格納するメソッドも含めて、単一の場所で定義することができます。しかし、ここでもプロトタイプを使用することができます。例えば、あるメソッドがコンストラクターの `prototype` プロパティで定義されている場合、そのコンストラクターを使用して作成されたすべてのオブジェクトは、そのプロトタイプを介してそのメソッドを取得するので、コンストラクターの中でメソッドを定義する必要はありません。

- **プロトタイプチェーン**は、継承を実装するために自然な方法であるように思えます。例えば、プロトタイプが `Person` である `Student` オブジェクトがあれば、`name` を継承して `introduceSelf()` をオーバーライドすることができます。

しかし、これらの機能と記述した「古典的」な OOP 概念との違いを理解することは価値があります。ここでは、そのうちのいくつかを紹介します。

まず、クラスベースの OOP では、クラスとオブジェクトは別個の構成要素であり、オブジェクトは常にクラスのインスタンスとして作成されます。また、クラスを定義する機能（クラス構文そのもの）と、オブジェクトをインスタンス化する機能（コンストラクター）は区別されています。JavaScript では、関数やオブジェクトリテラルを使用して、別個のクラス定義なしにオブジェクトを作成することができますし、そうすることも多くあります。このため、オブジェクトを使った作業は、古典的な OOP の場合よりもずっと軽量になることがあります。

2 つ目は、プロトタイプチェーンは継承階層のように見え、何かと同じように振る舞いますが、他に異なる点があることです。サブクラスがインスタンス化されると、サブクラスで定義したプロパティと、さらに上の階層で定義したプロパティを結合した単一のオブジェクトが作成されます。プロトタイピングでは、階層の各レベルが別個のオブジェクトで表されており、それらは `__proto__` プロパティを介してリンクされています。プロトタイプチェーンの動作は、継承というよりは**委任**のようなものです。委任とは、あるオブジェクトにタスクの実行を依頼したときに、そのオブジェクト自身がタスクを実行するか、他のオブジェクト（その**委任先**）にタスクの実行を依頼することができるプログラミングパターンです。多くの点で、委任は継承よりも柔軟なオブジェクトの結合方法です（何かというと、実行時に委任先を変更したり完全に置き換えたりすることが可能です）。

とはいえ、コンストラクターとプロトタイプは、JavaScript でクラスベースの OOP パターンを実装するために使用することができます。しかし、継承のような機能を実装するために直接使用するのは難しいので、JavaScript ではプロトタイプモデルの上に指定された、クラスベースの OOP の概念にもっと直接対応する追加機能を提供しています。この機能は次の記事で紹介します。

## まとめ

この記事では、クラスベースのオブジェクト指向プログラミングの基本的な機能を記述し、JavaScript のコンストラクターとプロトタイプがこれらの概念とどのように比較されるかを簡単に見てきました。

次の記事では、JavaScript がクラスベースのオブジェクト指向プログラミングに対応するために提供している機能について見ていきます。

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
