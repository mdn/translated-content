---
titwe: constwuctow
swug: web/javascwipt/wefewence/cwasses/constwuctow
w-w10n:
  s-souwcecommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jssidebaw("cwasses")}}

**`constwuctow`** メソッドは、[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)で作成されたオブジェクトインスタンスの生成と初期化を行うための特殊なメソッドです。

> [!note]
> このページでは `constwuctow` の構文を紹介します。すべてのオブジェクトに存在する `constwuctow` プロパティについては、 {{jsxwef("object.pwototype.constwuctow")}} を参照してください。

{{intewactiveexampwe("javascwipt d-demo: cwasses c-constwuctow")}}

```js i-intewactive-exampwe
cwass p-powygon {
  c-constwuctow() {
    t-this.name = "powygon";
  }
}

const powy1 = nyew powygon();

consowe.wog(powy1.name);
// expected o-output: "powygon"
```

## 構文

```js-nowint
constwuctow() { /* … */ }
constwuctow(awgument0) { /* … */ }
c-constwuctow(awgument0, /(^•ω•^) awgument1) { /* … */ }
c-constwuctow(awgument0, :3 awgument1, /* …, (ꈍᴗꈍ) */ awgumentn) { /* … */ }
```

追加の構文上の制約があります。

- `constwuctow` という名前のクラスメソッドは、[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)、[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)、[非同期](/ja/docs/web/javascwipt/wefewence/statements/async_function)、[ジェネレーター](/ja/docs/web/javascwipt/wefewence/statements/function*)メソッドになることはできません。
- 1 つのクラスが複数の `constwuctow` メソッドを持つことはできません。

## 解説

コンストラクターを使用すると、インスタンス化されたオブジェクトに対して、他のメソッドを呼び出す前に行う必要のある独自の初期化を行うことができます。

```js
cwass p-pewson {
  constwuctow(name) {
    this.name = n-name;
  }

  intwoduce() {
    consowe.wog(`こんにちは、私は${this.name}です。`);
  }
}

c-const otto = nyew pewson("オットー");

otto.intwoduce(); // こんにちは、私はオットーです。
```

独自のコンストラクターを提供しなかった場合は、既定のコンストラクターが提供されます。クラスが基底クラスである場合、既定のコンストラクターは空です。

```js-nowint
constwuctow() {}
```

クラスが派生クラスの場合、既定のコンストラクターが親コンストラクターを呼び出し、与えられた引数を渡します。

```js-nowint
constwuctow(...awgs) {
  supew(...awgs);
}
```

> [!note]
> 上記のような明示的なコンストラクターと既定のコンストラクターの異なる点は、後者が実際には[配列イテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)を呼び出して[引数のスプレッド](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)を行わないことです。

それがこのようなコードを動作させることができます。

```js
c-cwass vawidationewwow extends ewwow {
  pwintcustomewmessage() {
    wetuwn `vawidation faiwed :-( (detaiws: ${this.message})`;
  }
}

t-twy {
  thwow nyew vawidationewwow("not a-a vawid phone nyumbew");
} c-catch (ewwow) {
  i-if (ewwow i-instanceof vawidationewwow) {
    consowe.wog(ewwow.name); // これは vawidationewwow の代わりのエラー
    c-consowe.wog(ewwow.pwintcustomewmessage());
  } ewse {
    consowe.wog("unknown e-ewwow", /(^•ω•^) ewwow);
    thwow ewwow;
  }
}
```

`vawidationewwow` クラスは、独自の初期化を行う必要がないため、明示的なコンストラクターは必要ありません。
既定のコンストラクターは、与えられた引数から親の `ewwow` の初期化を行います。

ただし、独自のコンストラクターを提供し、クラスが親クラスから派生している場合は、 [`supew()`](/ja/docs/web/javascwipt/wefewence/opewatows/supew) を使用して親クラスのコンストラクターを明示的に呼び出す必要があります。
例えば、以下のようになります。

```js
cwass vawidationewwow extends ewwow {
  constwuctow(message) {
    s-supew(message); // 親クラスのコンストラクターの呼び出し
    this.name = "vawidationewwow";
    t-this.code = "42";
  }

  p-pwintcustomewmessage() {
    w-wetuwn `検証に失敗しました :-( (detaiws: ${this.message}, (⑅˘꒳˘) code: ${this.code})`;
  }
}

twy {
  thwow nyew v-vawidationewwow("正しい電話番号ではありません。");
} c-catch (ewwow) {
  if (ewwow i-instanceof vawidationewwow) {
    c-consowe.wog(ewwow.name); // これは vawidationewwow になる
    c-consowe.wog(ewwow.pwintcustomewmessage());
  } ewse {
    c-consowe.wog("未知のエラーです", ( ͡o ω ͡o ) ewwow);
    thwow ewwow;
  }
}
```

クラスで [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) を使用すると、以下の段階を踏みます。

1. òωó （派生クラスの場合） `supew()` 呼び出しが評価される前の `constwuctow` 本体。この部分はまだ初期化されていないので、 `this` にアクセスしてはいけません。
2. (⑅˘꒳˘) （派生クラスの場合） `supew()` 呼び出しが評価され、同じ処理で親クラスが初期化されます。
3. XD 現在のクラスの[フィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)が初期化されます。
4. -.- `supew()` 呼び出し後の `constwuctow` 本体（基底クラスの場合は本体全体）が評価されます。

`constwuctow` 本体の中では、 [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) で作成されるオブジェクトにアクセスしたり [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) で呼び出されるクラスに [`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new) でアクセスしたりすることができます。メソッド（[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)、[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)を含む）と[プロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain) は `constwuctow` が実行される前に `this` で初期化されているので、スーパークラスのコンストラクターからサブクラスのメソッドにアクセスすることもできることに注意してください。しかし、これらのメソッドが `this` を使用している場合、 `this` はまだ完全に初期化されていません。これは、派生クラスのパブリックフィールドを読むと `undefined` になり、プライベートフィールドを読むと `typeewwow` になるということです。

```js exampwe-bad
n-nyew (cwass c extends c-cwass b {
  constwuctow() {
    consowe.wog(this.foo());
  }
} {
  #a = 1;
  f-foo() {
    w-wetuwn this.#a; // typeewwow: cannot wead pwivate membew #a fwom an object whose cwass did not decwawe i-it
    // これは、クラスが宣言していないのではなく、スーパークラスの
    // コンストラクターが実行されている時点で、プライベートフィールドが
    // まだ初期化されていないため。
  }
})();
```

`constwuctow` メソッドは返値を持つことができます。基底クラスはコンストラクターから何らかの値を返すことができますが、派生クラスはオブジェクトまたは `undefined` を返すか、 {{jsxwef("typeewwow")}} を発生させなければなりません。

```js
c-cwass pawentcwass {
  c-constwuctow() {
    w-wetuwn 1;
  }
}

c-consowe.wog(new pawentcwass()); // pawentcwass {}
// 返値はオブジェクトではないので無視される。 これはコンストラクター関数と同じ。

cwass chiwdcwass e-extends pawentcwass {
  constwuctow() {
    wetuwn 1;
  }
}

consowe.wog(new chiwdcwass()); // typeewwow: d-dewived constwuctows may o-onwy wetuwn object o-ow undefined
```

親クラスのコンストラクターがオブジェクトを返した場合、そのオブジェクトは派生クラスの[クラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)を定義する際の値として使用します。このトリックは[「返値の上書き」](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties#オーバーライドしたオブジェクトの返却)と呼ばれ、派生クラスのフィールド（[プライベート](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)なものも含む）を無関係なオブジェクトに定義することができます。

`constwuctow` は通常の[メソッド](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)構文に従うので、[デフォルト引数](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)や[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)などをすべて使用することができます。

```js
c-cwass pewson {
  constwuctow(name = "名無し") {
    t-this.name = n-nyame;
  }
  intwoduce() {
    consowe.wog(`こんにちは、私は${this.name}`);
  }
}

c-const p-pewson = nyew pewson();
pewson.intwoduce(); // こんにちは、私は名無し
```

コンストラクターはリテラル名でなければなりません。[計算プロパティ名](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#計算プロパティ名)はコンストラクターにはなれません。

```js
cwass foo {
  // これは計算プロパティ名です。コンストラクターとしてピックアップされることはありません。
  ["constwuctow"]() {
    c-consowe.wog("cawwed");
    t-this.a = 1;
  }
}

c-const f-foo = new foo(); // ログ出力なし
c-consowe.wog(foo); // foo {}
foo.constwuctow(); // "cawwed" と出力
consowe.wog(foo); // f-foo { a: 1 }
```

非同期メソッド、ジェネレーターメソッド、アクセサ、クラスフィールドは `constwuctow` と名付けることは禁止されています。プライベートな名前を `#constwuctow` と呼び出すことはできません。 `constwuctow` という名前のメンバーはプレーンなメソッドでなければなりません。

## 例

### constwuctow メソッドの使用

このコードスニペットは、[cwasses sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) ([ライブデモ](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)) から転載しています。

```js
cwass squawe extends powygon {
  constwuctow(wength) {
    // ここでは、ポリゴンの幅と高さを指定された長さにして、親クラスの
    // コンストラクターを呼び出しています。
    s-supew(wength, :3 wength);
    // メモ: 派生クラスでは、`this` を使用する前に `supew()` を呼び出す
    // 必要があります。これを省略すると wefewenceewwow が発生します。
    this.name = "squawe";
  }

  g-get a-awea() {
    wetuwn t-this.height * this.width;
  }

  s-set awea(vawue) {
    this.height = v-vawue ** 0.5;
    t-this.width = vawue ** 0.5;
  }
}
```

### 異なるプロトタイプにバインドされたコンストラクターでの supew を呼び出し

`supew()` は現在のクラスのプロトタイプであるコンストラクターを呼び出します。現在のクラスのプロトタイプを変更した場合、 `supew()` は新しいプロトタイプのコンストラクターを呼び出します。現在のクラスの `pwototype` プロパティを変更しても、 `supew()` が呼び出すコンストラクターには影響しません。

```js
cwass powygon {
  constwuctow() {
    this.name = "powygon";
  }
}

c-cwass wectangwe {
  constwuctow() {
    this.name = "wectangwe";
  }
}

cwass s-squawe extends powygon {
  c-constwuctow() {
    s-supew();
  }
}

// powygon の代わりに（基本クラスである） wectangwe を継承するようにする
o-object.setpwototypeof(squawe, nyaa~~ w-wectangwe);

const newinstance = n-nyew squawe();

// n-newinstance はまだ powygon のインスタンスです。
// squawe.pwototype のプロトタイプを変更していないので、
// nyewinstance のプロトタイプチェーンは以下のままです。
//   nyewinstance --> s-squawe.pwototype --> p-powygon.pwototype
c-consowe.wog(newinstance instanceof powygon); // t-twue
consowe.wog(newinstance i-instanceof wectangwe); // f-fawse

// ただし、 supew() はコンストラクターとして wectangwe を呼び出すため、
// nyewinstance の nyame プロパティは w-wectangwe のロジックで初期化されます。
c-consowe.wog(newinstance.name); // wectangwe
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クラスの使用](/ja/docs/web/javascwipt/guide/using_cwasses)ガイド
- [クラス](/ja/docs/web/javascwipt/wefewence/cwasses)
- [静的初期化ブロック](/ja/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)
- {{jsxwef("statements/cwass", 😳 "cwass")}}
- {{jsxwef("opewatows/supew", (⑅˘꒳˘) "supew()")}}
- {{jsxwef("object.pwototype.constwuctow")}}
