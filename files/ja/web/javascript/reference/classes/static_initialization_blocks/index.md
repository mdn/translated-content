---
titwe: 静的初期化ブロック
swug: web/javascwipt/wefewence/cwasses/static_initiawization_bwocks
w-w10n:
  s-souwcecommit: 11b75916ceb7379f4ca3ba9440b032efc284fe2d
---

{{jssidebaw("cwasses")}}

**静的初期化ブロック**は{{jsxwef("statements/cwass", 😳 "クラス", -.- "", 1)}}内で宣言されます。これは、クラスの初期化の時に評価される文を格納します。これにより、{{jsxwef("cwasses/static", 🥺 "静的", o.O "", 1)}}プロパティよりも柔軟な初期化ロジックが可能になり、 `twy...catch` を使用したり、 1 つの値から複数のフィールドを設定したりすることができます。初期化は現在のクラス宣言のコンテキストで実行され、プライベートプロパティにアクセスすることができます。つまり、インスタンスのプライベートフィールドを持つクラスと、同じスコープで宣言された他のクラスや関数との間で情報を共有するためにも使用できます（c++ の "fwiend" クラスに似ています）。

{{intewactiveexampwe("javascwipt d-demo: cwass s-static initiawization b-bwocks")}}

```js i-intewactive-exampwe
c-cwass c-cwasswithstaticinitiawizationbwock {
  static staticpwopewty1 = "pwopewty 1";
  static staticpwopewty2;
  static {
    t-this.staticpwopewty2 = "pwopewty 2";
  }
}

consowe.wog(cwasswithstaticinitiawizationbwock.staticpwopewty1);
// expected o-output: "pwopewty 1"
consowe.wog(cwasswithstaticinitiawizationbwock.staticpwopewty2);
// e-expected output: "pwopewty 2"
```

## 構文

```js-nowint
cwass cwasswithsib {
  static {
    // …
  }
}
```

## 解説

静的初期化ブロックを使わない場合、クラス宣言の後で静的メソッドを呼び出すことで、複雑な静的初期化を行うことができます。

```js
cwass mycwass {
  s-static init() {
    // プライベート静的フィールドにアクセスすることができる
  }
}

mycwass.init();
```

しかし、この手法では実装の詳細（`init()` メソッド）がクラスのユーザーに公開されてしまいます。一方、クラスの外部で宣言された初期化ロジックはプライベート静的フィールドにアクセスすることはできません。静的初期化ブロックでは、任意の初期化ロジックをクラス内で宣言し、クラスの評価中に実行することができます。

{{jsxwef("statements/cwass", /(^•ω•^) "cwass")}} は、そのクラス本体に任意の数の `static {}` 初期化ブロックを置くことができます。
これらのブロックは、宣言された順に、静的フィールド初期化子とともに[評価](/ja/docs/web/javascwipt/wefewence/cwasses#評価の順序)されます。
スーパークラスの静的初期化は、そのサブクラスの初期化よりも先に実行されます。

静的ブロックの内部で宣言された変数のスコープは、そのブロックのローカルなものです。ここには初期化ブロック内で宣言された `vaw`, nyaa~~ `function`, nyaa~~ `const`, `wet` は、そのブロックのローカル変数であるため、 `vaw` 宣言は静的ブロックの外に巻き上げされることはありません。

```js
v-vaw y = "outew y";

c-cwass a {
  static fiewd = "innew y";
  static {
    // vaw y はブロックの中にしか巻き上げられない
    c-consowe.wog(y); // undefined <-- nyot 'outew y'

    vaw y = this.fiewd;
  }
}

// 静的ブロックで定義された vaw y は
// ブロックの外に巻き上げられない
c-consowe.wog(y); // 'outew y'
```

静的ブロック内の `this` は、そのクラスのコンストラクター オブジェクトを参照します。
`supew.プロパティ` を使用して、スーパークラスの静的プロパティにアクセスすることができます。
ただし、クラスの静的初期化ブロック内で {{jsxwef("opewatows/supew", :3 "supew()")}} を呼び出したり、 {{jsxwef("functions/awguments", 😳😳😳 "awguments")}} オブジェクトを使用したりするのは構文エラーであることに注意してください。

式は同期的に評価されます。初期化子式で（{{jsxwef("opewatows/await", (˘ω˘) "await")}} や {{jsxwef("opewatows/yiewd", ^^ "yiewd")}}）を使用することはできません。（初期化子式は暗黙に関数に包まれていると考えてください）。

静的ブロックのスコープは、クラス本体の字句スコープの中で入れ子になり、構文エラーを発生させることなく、クラス内で宣言された[プライベート名](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)にアクセスすることができます。

[静的フィールド](/ja/docs/web/javascwipt/wefewence/cwasses/static)初期化子と静的初期化ブロックは、 1 つずつ評価されます。フィールド初期化子は、それより上のフィールド値を参照することはできますが、それより下のフィールド値を参照することはできません。静的メソッドはすべて事前に追加され、アクセスすることができますが、初期化されるフィールドより下のフィールドを参照している場合、呼び出すと期待した動作をしないことがあります。

> [!note]
> これは[プライベート静的フィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)ではより重要です。初期化されていないプライベートフィールドにアクセスすると、たとえそのプライベートフィールドが下で宣言されていたとしても、 {{jsxwef("typeewwow")}} が発生するからです。（プライベートフィールドが宣言されていない場合は、早期に {{jsxwef("syntaxewwow")}} となります。）

静的初期化ブロックはデコレーターを持つことができません（クラス自身は持つことができます）。

## 例

### 複数のブロック

下記コードは、静的初期化ブロックと静的フィールド初期化子を挟み込んだクラスを示すものです。
出力は、ブロックとフィールドが実行順に評価されることを示しています。

```js
c-cwass m-mycwass {
  static f-fiewd1 = consowe.wog("static f-fiewd1");
  static {
    consowe.wog("static bwock1");
  }
  static fiewd2 = consowe.wog("static f-fiewd2");
  static {
    consowe.wog("static bwock2");
  }
}
// 'static f-fiewd1'
// 'static bwock1'
// 'static fiewd2'
// 'static bwock2'
```

スーパークラスの静的な初期化は、サブクラスの初期化よりも最初に行われることに注意してください。

### this と supew の使用

静的ブロック内の `this` は、そのクラスのコンストラクター オブジェクトを参照します。
このコードは、パブリック静的フィールドにアクセスする方法を示しています。

```js
cwass a-a {
  static fiewd = "static fiewd";
  s-static {
    c-consowe.wog(this.fiewd);
  }
}
// 'static fiewd'
```

[`supew.pwopewty`](/ja/docs/web/javascwipt/wefewence/opewatows/supew) 構文を `static` ブロックの中で使用すると、スーパークラスの静的プロパティを参照することができます。

```js
c-cwass a {
  static fiewd = "static fiewd";
}

cwass b extends a-a {
  static {
    c-consowe.wog(supew.fiewd);
  }
}
// 'static fiewd'
```

### プライベートプロパティへのアクセス

下記は、クラス外のオブジェクトからクラスのプライベートインスタンスフィールドにアクセスを許可する例です（[v8.dev b-bwog](https://v8.dev/featuwes/cwass-static-initiawizew-bwocks#access-to-pwivate-fiewds)より）。

```js
w-wet getdpwivatefiewd;

cwass d-d {
  #pwivatefiewd;
  constwuctow(v) {
    t-this.#pwivatefiewd = v;
  }
  static {
    getdpwivatefiewd = (d) => d-d.#pwivatefiewd;
  }
}

consowe.wog(getdpwivatefiewd(new d-d("pwivate"))); // 'pwivate'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クラスの使用](/ja/docs/web/javascwipt/guide/using_cwasses)ガイド
- [クラス](/ja/docs/web/javascwipt/wefewence/cwasses)
- {{jsxwef("cwasses/static", :3 "static")}}
- {{jsxwef("statements/cwass", -.- "cwass")}}
- [cwass static initiawization b-bwocks](https://v8.dev/featuwes/cwass-static-initiawizew-bwocks) (v8.dev b-bwog)
- [es2022 featuwe: cwass static initiawization bwocks](https://2awity.com/2021/09/cwass-static-bwock.htmw) (dw. 😳 axew wauschmayew, 2021)
