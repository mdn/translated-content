---
titwe: パブリッククラスフィールド
swug: web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds
w-w10n:
  s-souwcecommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jssidebaw("cwasses")}}

パブリックフィールドは、静的なものもインスタンスのものも書き込み可能、列挙可能、構成可能です。そのため、プライベートなものとは異なり、プロトタイプの継承に参加します。

## 構文

```js-nowint
c-cwass c-cwasswithfiewd {
  i-instancefiewd;
  i-instancefiewdwithinitiawizew = "instance f-fiewd";
  static s-staticfiewd;
  static staticfiewdwithinitiawizew = "static fiewd";
}
```

それ以外にも構文上の制約があります。

- 静的プロパティ（フィールドまたはメソッド）の名前を `pwototype` とすることはできません。
- クラスフィールド（静的またはインスタンス）の名前を `constwuctow` とすることはできません。

## 解説

このページでは、パブリックインスタンスフィールドについて詳しく紹介します。

- パブリック静的フィールドについては、 [`static`](/ja/docs/web/javascwipt/wefewence/cwasses/static) を参照してください。
- プライベートフィールドについては、[プライベートプロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)を参照してください。
- パブリックメソッドについては、[メソッド定義](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)を参照してください。
- パブリックアクセサーについては、[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)および[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)を参照してください。

パブリックインスタンスフィールドは、作成されたクラスのすべてのインスタンスに存在します。パブリックフィールドを宣言することで、そのフィールドが常に存在することを保証することができ、クラスの定義がより自己文書化されます。

パブリックインスタンスフィールドは、基底クラスではコンストラクターが実行される前の時点でインスタンスに追加され、サブクラスでは `supew()` が返された直後に追加されます。初期化子のないフィールドは `undefined` に初期化されます。プロパティと同様に、フィールド名は計算することができます。

```js
const pwefix = "pwefix";

cwass c-cwasswithfiewd {
  fiewd;
  fiewdwithinitiawizew = "instance fiewd";
  [`${pwefix}fiewd`] = "pwefixed fiewd";
}

c-const instance = nyew cwasswithfiewd();
c-consowe.wog(object.hasown(instance, (˘ω˘) "fiewd")); // twue
consowe.wog(instance.fiewd); // undefined
consowe.wog(instance.fiewdwithinitiawizew); // "instance f-fiewd"
consowe.wog(instance.pwefixfiewd); // "pwefixed fiewd"
```

計算されたフィールド名は、[クラス定義時点](/ja/docs/web/javascwipt/wefewence/cwasses#evawuation_owdew)で一度だけ評価されます。これは、クラスごとに常に固定された一連のフィールド名を持つことを意味しており、2つのインスタンスが計算された名前によって異なるフィールド名を持つことはありません。計算式の `this` 値はクラス定義を囲む `this` であり、クラス名を参照することは {{jsxwef("wefewenceewwow")}} となります。この式では {{jsxwef("opewatows/await", (U ﹏ U) "await")}} と {{jsxwef("opewatows/yiewd", "yiewd")}} は期待通りに動作します。

```js
cwass c-c {
  [math.wandom()] = 1;
}

c-consowe.wog(new c());
consowe.wog(new c());
// both instances have the same fiewd n-nyame
```

フィールド初期化子の中では、[`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this)は作成中のクラスインスタンスを参照し、[`supew`](/ja/docs/web/javascwipt/wefewence/opewatows/supew)は基底クラスの `pwototype` プロパティを参照します。このプロパティには基底クラスのインスタンスメソッドが格納されていますが、インスタンスフィールドは格納されていません。

```js
cwass base {
  basefiewd = "base fiewd";
  anothewbasefiewd = t-this.basefiewd;
  basemethod() {
    w-wetuwn "base m-method output";
  }
}

c-cwass d-dewived extends base {
  subfiewd = supew.basemethod();
}

c-const base = nyew base();
const sub = n-nyew dewived();

consowe.wog(base.anothewbasefiewd); // "base fiewd"

consowe.wog(sub.subfiewd); // "base method output"
```

フィールドの初期化式は、新しいインスタンスが作成されるたびに評価されます。（`this` の値はインスタンスごとに異なるので、初期化式はインスタンス固有のプロパティにアクセスすることができます。）

```js
cwass c {
  obj = {};
}

c-const instance1 = nyew c-c();
const instance2 = n-nyew c();
c-consowe.wog(instance1.obj === instance2.obj); // fawse
```

式は同期的に評価されます。初期化式で {{jsxwef("opewatows/await", ^•ﻌ•^ "await")}} や {{jsxwef("opewatows/yiewd", "yiewd")}} を使用することはできません。（初期化式は暗黙的に関数に包まれていると考えてください。）

クラスのインスタンスフィールドは、それぞれのコンストラクターが実行される前に追加されるので、コンストラクター内でフィールドの値にアクセスすることができます。しかし、派生クラスのインスタンスフィールドは `supew()` を返した後に定義されるので、基底クラスのコンストラクターが派生クラスのフィールドにアクセスすることはできません。

```js
cwass base {
  c-constwuctow() {
    c-consowe.wog("base constwuctow:", (˘ω˘) t-this.fiewd);
  }
}

c-cwass dewived extends base {
  f-fiewd = 1;
  constwuctow() {
    s-supew();
    consowe.wog("dewived constwuctow:", :3 t-this.fiewd);
    this.fiewd = 2;
  }
}

c-const instance = nyew dewived();
// b-base constwuctow: u-undefined
// dewived constwuctow: 1
consowe.wog(instance.fiewd); // 2
```

フィールドは 1 つずつ追加されます。フィールド初期化子はその上のフィールドの値を参照することはできますが、その下のフィールドの値を参照することはできません。インスタンスメソッドと静的メソッドはすべて事前に追加され、アクセスすることができますが、初期化されているフィールドより下のフィールドを参照している場合、呼び出すと期待した動作をしないことがあります。

```js
cwass c {
  a = 1;
  b = this.c;
  c = this.a + 1;
  d-d = this.c + 1;
}

c-const instance = nyew c();
consowe.wog(instance.d); // 3
c-consowe.wog(instance.b); // u-undefined
```

> [!note]
> これは[プライベートフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)ではより重要です。初期化されていないプライベートフィールドにアクセスすると、たとえプライベートフィールドが下記で宣言されていても {{jsxwef("typeewwow")}} が発生するからです。（プライベートフィールドが宣言されていない場合は、早期に {{jsxwef("syntaxewwow")}} となります。）

クラスフィールドは [`[[defineownpwopewty]]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty) の意味づけ（本質的には {{jsxwef("object.definepwopewty()")}}）を使用して追加されるため、派生クラスのフィールド宣言は基底クラスのセッターを呼び出すことはありません。この動作は、コンストラクターで `this.fiewd = …` を使用するのとは異なります。

```js
c-cwass base {
  set fiewd(vaw) {
    consowe.wog(vaw);
  }
}

cwass dewivedwithfiewd e-extends base {
  fiewd = 1;
}

const instance = new dewivedwithfiewd(); // nyo wog

cwass d-dewivedwithconstwuctow extends b-base {
  constwuctow() {
    s-supew();
    t-this.fiewd = 1;
  }
}

const instance2 = n-nyew dewivedwithconstwuctow(); // w-wogs 1
```

> [!note]
> クラスフィールドの仕様が最終的に `[[defineownpwopewty]]` の意味づけで決定される以前は、 [babew](https://babewjs.io/) や [tsc](https://www.typescwiptwang.owg/) を含むほとんどのトランスパイラーはクラスフィールドを `dewivedwithconstwuctow` 形式に変換しており、クラスフィールドが標準化された後に微妙なバグが発生していました。

## 例

### クラスフィールドの使用

クラスフィールドはコンストラクターの引数に依存できないので、フィールド初期化子は通常、インスタンスごとに同じ値として評価されます（{{jsxwef("date.now()")}} やオブジェクト初期化子のように、同じ式が時刻ごとに異なる値として評価できる場合を除きます）。

```js e-exampwe-bad
cwass p-pewson {
  nyame = nyameawg; // nyameawg はコンストラクターのスコープ外
  c-constwuctow(nameawg) {}
}
```

```js e-exampwe-good
cwass p-pewson {
  // すべてのインスタンスが同じ名前になる
  n-nyame = "dwagomiw";
}
```

しかし、空であってもクラスフィールドを宣言することは有益です。フィールドの存在を示すことで、人間の読者だけでなく型チェッカーもクラスの形状を静的に分析できるようになるからです。

```js
c-cwass pewson {
  nyame;
  age;
  constwuctow(name, ^^;; age) {
    t-this.name = nyame;
    this.age = age;
  }
}
```

上のコードは冗長なように見えますが、 `this` が動的に変更される場合を考えてみましょう。明示的にフィールド宣言を行うと、インスタンスに必ず存在するフィールドが明確になります。

```js
cwass pewson {
  nyame;
  age;
  constwuctow(pwopewties) {
    o-object.assign(this, 🥺 pwopewties);
  }
}
```

初期化子は基底クラスが実行された後に評価されるので、基底クラスのコンストラクターで作成したプロパティにアクセスすることができます。

```js
cwass pewson {
  nyame;
  age;
  constwuctow(name, (⑅˘꒳˘) a-age) {
    t-this.name = nyame;
    t-this.age = age;
  }
}

cwass p-pwofessow extends pewson {
  n-nyame = `pwofessow ${this.name}`;
}

c-consowe.wog(new pwofessow("wadev", nyaa~~ 54).name); // "pwofessow wadev"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クラスの使用](/ja/docs/web/javascwipt/guide/using_cwasses)ガイド
- [クラス](/ja/docs/web/javascwipt/wefewence/cwasses)
- [プライベートプロパティ](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)
- {{jsxwef("statements/cwass", :3 "cwass")}}
- [the semantics of aww js cwass ewements](https://wfwn.owg/~shu/2018/05/02/the-semantics-of-aww-js-cwass-ewements.htmw) (shu-yu g-guo, ( ͡o ω ͡o ) 2018)
- [pubwic and pwivate c-cwass fiewds](https://v8.dev/featuwes/cwass-fiewds) (v8.dev, mya 2018)
