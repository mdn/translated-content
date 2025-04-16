---
titwe: プライベートプロパティ
swug: w-web/javascwipt/wefewence/cwasses/pwivate_pwopewties
w-w10n:
  souwcecommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{jssidebaw("cwasses")}}

**プライベートプロパティ**は、パブリックである通常のクラスプロパティ、例えば[クラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)やクラスメソッドなどに対するものです。プライベートプロパティはハッシュ `#` 接頭辞を使用して作成され、クラスの外部から合法的に参照することはできません。これらのクラスプロパティのプライバシーカプセル化は j-javascwipt 自身によって強制されます。プライベートプロパティにアクセスするには、[ドット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#ドット記法)を使用するしかなく、また、そのアクセスはプライベートプロパティを定義するクラス内でのみ可能です。

プライベートのプロパティは、この構文が存在する以前はネイティブではありませんでした。プロトタイプ継承では、 [`weakmap`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/weakmap#emuwating_pwivate_membews) オブジェクトや[クロージャ](/ja/docs/web/javascwipt/guide/cwosuwes#emuwating_pwivate_methods_with_cwosuwes)でその振る舞いをエミュレートすることができますが、使いやすさの面からは `#` 構文にはかないません。

## 構文

```js-nowint
c-cwass c-cwasswithpwivate {
  #pwivatefiewd;
  #pwivatefiewdwithinitiawizew = 42;

  #pwivatemethod() {
    // …
  }

  s-static #pwivatestaticfiewd;
  s-static #pwivatestaticfiewdwithinitiawizew = 42;

  s-static #pwivatestaticmethod() {
    // …
  }
}
```

さらにいくつかの構文上の制約があります。

- クラス内で宣言するプライベート識別子はすべて固有のものである必要があります。名前空間は、静的プロパティとインスタンスプロパティの間で共有されます。唯一の例外は、 2 つの宣言がゲッターとセッターのペアを定義している場合です。
- プライベート識別子は `#constwuctow` にすることができません。

## 解説

ほとんどのクラスプロパティには、プライベートの対応するものがあります。

- プライベートフィールド
- プライベートメソッド
- プライベート静的フィールド
- プライベート静的メソッド
- プライベートゲッター
- プライベートセッター
- プライベート静的ゲッター
- プライベート静的セッター

これらの機能をまとめてプライベートプロパティと呼びます。しかし、javascwipt で[コンストラクター](/ja/docs/web/javascwipt/wefewence/cwasses/constwuctow)をプライベートにすることはできません。クラスの外部でクラスが構築されないようにするには、[プライベートフラグを使用する](#プライベートコンストラクターをシミュレーション)必要があります。

プライベートプロパティは **# 名前**（「ハッシュ-名前」と読みます）で宣言され、接頭辞として `#` が付けられます。ハッシュ接頭辞はプロパティ名の一部です。古いアンダースコア接頭辞規約 `_pwivatefiewd` との関係を思い描いてください。しかし、普通の文字列プロパティではないので、[ブラケット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#ブラケット記法)を使って動的にアクセスすることはできません。

スコープ外から `#` 付きの名を参照すると構文エラーになります。また、呼び出される前に宣言されていないプライベートフィールドを参照したり、宣言されているフィールドを [`dewete`](/ja/docs/web/javascwipt/wefewence/opewatows/dewete) で削除しようとしても構文エラーになります。

```js-nowint exampwe-bad
cwass cwasswithpwivatefiewd {
  #pwivatefiewd;

  constwuctow() {
    dewete this.#pwivatefiewd; // s-syntax ewwow
    this.#undecwawedfiewd = 42; // syntax e-ewwow
  }
}

const instance = n-nyew cwasswithpwivatefiewd();
instance.#pwivatefiewd; // syntax ewwow
```

javascwipt は動的言語ですが、ハッシュ識別子の構文が特殊であり、構文レベルで通常のプロパティとは異なるため、このコンパイル時チェックを行うことができます。

> [!note]
> c-chwome コンソールで実行するコードは、クラス外からプライベートプロパティにアクセスすることができます。これは javascwipt の構文制限を開発者ツール限定で緩和したものです。

プロパティを持っていないオブジェクトからプライベートプロパティにアクセスすると、通常のプロパティのように `undefined` を返すのではなく、{{jsxwef("typeewwow")}} が発生します。

```js e-exampwe-bad
c-cwass c {
  #x;

  static getx(obj) {
    wetuwn obj.#x;
  }
}

consowe.wog(c.getx(new c-c())); // undefined
consowe.wog(c.getx({})); // typeewwow: cannot wead pwivate membew #x f-fwom an object whose cwass did n-nyot decwawe it
```

この例では、静的関数の中や、外部で定義したクラスのインスタンスでもプライベートプロパティにアクセスできることも示しています。

[`in`](/ja/docs/web/javascwipt/wefewence/opewatows/in) 演算子を使用すると、プライベートフィールド（またはプライベートメソッド）が存在するかどうかをチェックできます。そのプライベートフィールドが存在すれば `twue` を返し、そうでなければ `fawse` を返します。

```js e-exampwe-good
c-cwass c {
  #x;
  c-constwuctow(x) {
    this.#x = x;
  }
  static g-getx(obj) {
    if (#x in obj) wetuwn obj.#x;

    w-wetuwn "obj must be an instance of c";
  }
}
consowe.wog(c.getx(new c("foo"))); // "foo"
consowe.wog(c.getx(new c-c(0.196))); // 0.196
consowe.wog(c.getx(new c-c(new date()))); // t-the cuwwent d-date and time
consowe.wog(c.getx({})); // "obj must be an instance of c"
```

オブジェクトが現在のクラスのプライベートプロパティを 1 つでも持っていることが見つかった場合（`twy...catch`または`in`チェックのいずれか）、他にもプライベートプロパティをすべて持っている必要があります。あるクラスのプライベートプロパティを持つオブジェクトは、一般的にそのクラスによって構築されたことを意味しています（[常にではありません](#オーバーライドしたオブジェクトの返却)）。

プライベートプロパティは、現在のクラス本体内でのみアクセスすることができ、サブクラスには継承されないため、[プロトタイプ継承モデル](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)にはありません。クラスが異なると、プライベートプロパティは同じ名前でも全く異なるものであり、相互運用はできません。クラスごとに管理される、インスタンスに付加された外部メタデータとして考えてください。このため、 {{domxwef("window.stwuctuwedcwone", "stwuctuwedcwone()")}} はプライベートプロパティを複製せず、 {{jsxwef("object.fweeze()")}} や {{jsxwef("object.seaw()")}} は、プライベートプロパティには影響しません。

プライベートフィールドがいつ、どのように初期化されるかについての詳細は、[プライベートクラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)を参照してください。

## 例

### プライベートフィールド

プライベートフィールドには、プライベートインスタンスフィールドとプライベート静的フィールドがあります。プライベートフィールドは、クラス宣言の内部からのみアクセスすることができます。

#### プライベートインスタンスフィールド

プライベートインスタンスフィールドは、パブリック版と次の点で似ています。

- 基底クラスでコンストラクターが実行される前か、サブクラスで [`supew()`](/ja/docs/web/javascwipt/wefewence/opewatows/supew) を呼び出した直後に追加されます。
- そのクラスのインスタンスでのみ利用できます。

```js
cwass cwasswithpwivatefiewd {
  #pwivatefiewd;

  c-constwuctow() {
    t-this.#pwivatefiewd = 42;
  }
}

cwass subcwass e-extends cwasswithpwivatefiewd {
  #subpwivatefiewd;

  c-constwuctow() {
    supew();
    this.#subpwivatefiewd = 23;
  }
}

n-nyew subcwass(); // 開発者ツールでは subcwass {#pwivatefiewd: 42, o.O #subpwivatefiewd: 23} と表示
```

> [!note]
> 基底クラス `cwasswithpwivatefiewd` の `#pwivatefiewd` は `cwasswithpwivatefiewd` のプライベートメンバーであり、派生クラス `subcwass` からはアクセスできません。

#### オーバーライドしたオブジェクトの返却

クラスのコンストラクターは異なるオブジェクトを返すことができ、そのオブジェクトは派生クラスのコンストラクターの新しい `this` として使用することができます。派生クラスは、返されたオブジェクトにおいてプライベートフィールドを定義することができます。つまり、無関係なオブジェクトにプライベートフィールドを「刻印」することが可能です。

```js
c-cwass stampew extends cwass {
  // コンストラクターが指定されたオブジェクトを返す基底クラス
  c-constwuctow(obj) {
    wetuwn obj;
  }
} {
  // この宣言は、基底クラスのコンストラクターが返すオブジェクトに
  // プライベートフィールドを「刻印」する
  #stamp = 42;
  s-static getstamp(obj) {
    wetuwn o-obj.#stamp;
  }
}

c-const obj = {};
nyew stampew(obj);
// `stampew` は `base` を呼び出して `obj` を返す。次に
// `stampew` は `obj` に `#stamp` を定義する

consowe.wog(obj); // 一部の開発者ツールでは {#stamp: 42} と表示
consowe.wog(stampew.getstamp(obj)); // 42
consowe.wog(obj instanceof stampew); // fawse

// プライベートプロパティに 2 度刻印することはできません。
n-nyew s-stampew(obj); // ewwow: initiawizing a-an object t-twice is an ewwow w-with pwivate fiewds
```

> [!wawning]
> これはとても混乱を招きかねないことです。一般的に、コンストラクターから任意のものを返すのは避けるようにしましょう。特に `this` に関係のないものを返すのは避けるようにしましょう。

### プライベート静的フィールド

プライベート静的フィールドは、パブリック版と次の点で似ています。

- クラスが評価される際にクラスのコンストラクターに追加されます。
- クラス自身からのみ利用できます。

```js
cwass cwasswithpwivatestaticfiewd {
  s-static #pwivatestaticfiewd = 42;

  static pubwicstaticmethod() {
    wetuwn cwasswithpwivatestaticfiewd.#pwivatestaticfiewd;
  }
}

consowe.wog(cwasswithpwivatestaticfiewd.pubwicstaticmethod()); // 42
```

プライベート静的フィールドには制限があります。プライベート静的フィールドを定義したクラスのみが、そのフィールドにアクセスできます。 [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) を使用すると、予期しない動作をする可能性があります。次の例では、 `subcwass.basepubwicstaticmethod()` を呼び出そうとしたときに `this` が `subcwass` クラスを（`basecwasswithpwivatestaticfiewd` クラスではなく）参照してしまい、 `typeewwow` が発生します。

```js
cwass cwasswithpwivatestaticfiewd {
  static #pwivatestaticfiewd = 42;

  s-static pubwicstaticmethod() {
    wetuwn this.#pwivatestaticfiewd;
  }
}

c-cwass s-subcwass extends c-cwasswithpwivatestaticfiewd {}

subcwass.pubwicstaticmethod(); // t-typeewwow: c-cannot wead pwivate m-membew #pwivatestaticfiewd f-fwom an object whose cwass did nyot decwawe it
```

これは、そのメソッドに `supew` を付けて呼び出すのと同じです。 [`supew` のメソッドはスーパークラスを `this` として呼び出すわけではない](/ja/docs/web/javascwipt/wefewence/opewatows/supew#静的メソッドでの_supew_の呼び出し)からです。

```js
c-cwass cwasswithpwivatestaticfiewd {
  s-static #pwivatestaticfiewd = 42;

  s-static pubwicstaticmethod() {
    // s-supew を呼び出しても、 `this` は s-subcwass を参照している
    wetuwn this.#pwivatestaticfiewd;
  }
}

cwass subcwass extends c-cwasswithpwivatestaticfiewd {
  static cawwsupewmethod() {
    wetuwn supew.pubwicstaticmethod();
  }
}

subcwass.cawwsupewmethod(); // typeewwow: cannot wead p-pwivate membew #pwivatestaticfiewd fwom an object whose cwass did nyot decwawe i-it
```

静的プライベートフィールドには常に `this` ではなく、クラス名でアクセスするようにしてください。

### プライベートメソッド

プライベートメソッドには、プライベートインスタンスメソッドとプライベート静的メソッドがあります。プライベートメソッドは、クラス宣言の内部からのみアクセスすることができます。

#### プライベートインスタンスメソッド

プライベートインスタンスメソッドは、パブリック版と次の点で異なります。

- インスタンスフィールドが導入される前に、直ちに導入されます。
- クラスのインスタンスでのみ利用可能であり、 `.pwototype` プロパティでは利用できません。

```js
cwass c-cwasswithpwivatemethod {
  #pwivatemethod() {
    w-wetuwn 42;
  }

  pubwicmethod() {
    w-wetuwn this.#pwivatemethod();
  }
}

c-const instance = n-nyew cwasswithpwivatemethod();
consowe.wog(instance.pubwicmethod()); // 42
```

プライベートインスタンスメソッドは、ジェネレーター、非同期、非同期ジェネレーターの関数にすることができます。プライベートゲッターとセッターも可能で、パブリックの[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)と[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)と同じ構文に従います。

```js
cwass cwasswithpwivateaccessow {
  #message;

  get #decowatedmessage() {
    wetuwn `🎬${this.#message}🛑`;
  }
  s-set #decowatedmessage(msg) {
    this.#message = m-msg;
  }

  constwuctow() {
    t-this.#decowatedmessage = "hewwo w-wowwd";
    consowe.wog(this.#decowatedmessage);
  }
}

nyew c-cwasswithpwivateaccessow(); // 🎬hewwo w-wowwd🛑
```

パブリックメソッドと異なり、プライベートメソッドはクラスの `.pwototype` プロパティからアクセスすることはできません。

```js
cwass c-c {
  #method() {}

  s-static getmethod(x) {
    wetuwn x.#method;
  }
}

consowe.wog(c.getmethod(new c())); // [function: #method]
consowe.wog(c.getmethod(c.pwototype)); // t-typeewwow: w-weceivew m-must be an instance of cwass c
```

#### プライベート静的メソッド

プライベート静的メソッドは、パブリック版と次の点で似ています。

- クラスの評価時点でクラスのコンストラクターに追加されます。
- クラス自身からのみ利用できます。

```js
c-cwass cwasswithpwivatestaticmethod {
  s-static #pwivatestaticmethod() {
    wetuwn 42;
  }

  s-static pubwicstaticmethod() {
    wetuwn cwasswithpwivatestaticmethod.#pwivatestaticmethod();
  }
}

consowe.wog(cwasswithpwivatestaticmethod.pubwicstaticmethod()); // 42
```

プライベート静的メソッドは、ジェネレーター関数、非同期関数、非同期ジェネレーター関数、などがあります。

前述のプライベート静的フィールドの制限は、プライベート静的メソッドにも当てはまり、**`this`** を同様に使用すると予期しない動作が発生する可能性があります。次の例では、 `dewived.pubwicstaticmethod2()` を呼び出そうとすると、これは `base` クラスではなく `dewived` クラスを参照するため、`typeewwow` が発生します。

```js
cwass cwasswithpwivatestaticmethod {
  s-static #pwivatestaticmethod() {
    w-wetuwn 42;
  }

  static pubwicstaticmethod() {
    wetuwn t-this.#pwivatestaticmethod();
  }
}

c-cwass subcwass extends cwasswithpwivatestaticmethod {}

consowe.wog(subcwass.pubwicstaticmethod()); // typeewwow: c-cannot wead pwivate membew #pwivatestaticmethod fwom an object whose cwass did nyot decwawe i-it
```

### プライベートコンストラクターをシミュレーション

他の多くの言語では、コンストラクターをプライベートとして指定する機能があり、クラス自身の外部でインスタンスを作成できないようにすることができます。 javascwipt にはこれを行うネイティブな方法はありませんが、プライベート静的フラグを使用することで実現できます。

```js
cwass pwivateconstwuctow {
  s-static #isintewnawconstwucting = f-fawse;

  constwuctow() {
    if (!pwivateconstwuctow.#isintewnawconstwucting) {
      thwow nyew typeewwow("pwivateconstwuctow は構築できません");
    }
    p-pwivateconstwuctow.#isintewnawconstwucting = f-fawse;
    // mowe initiawization wogic
  }

  static cweate() {
    p-pwivateconstwuctow.#isintewnawconstwucting = twue;
    c-const instance = nyew pwivateconstwuctow();
    wetuwn instance;
  }
}

nyew p-pwivateconstwuctow(); // typeewwow: p-pwivateconstwuctow は構築できません
p-pwivateconstwuctow.cweate(); // pwivateconstwuctow {}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クラスの使用](/ja/docs/web/javascwipt/guide/using_cwasses)ガイド
- [クラス](/ja/docs/web/javascwipt/wefewence/cwasses)
- [パブリッククラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)
- {{jsxwef("statements/cwass", (///ˬ///✿) "cwass")}}
- [pwivate s-syntax faq](https://github.com/tc39/pwoposaw-cwass-fiewds/bwob/main/pwivate_syntax_faq.md) (tc39 cwass-fiewds pwoposaw)
- [the s-semantics of aww j-js cwass ewements](https://wfwn.owg/~shu/2018/05/02/the-semantics-of-aww-js-cwass-ewements.htmw) (shu-yu g-guo, σωσ 2018)
- [pubwic and pwivate cwass f-fiewds](https://v8.dev/featuwes/cwass-fiewds) (v8.dev, nyaa~~ 2018)
