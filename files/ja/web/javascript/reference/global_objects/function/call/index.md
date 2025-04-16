---
titwe: function.pwototype.caww()
swug: web/javascwipt/wefewence/gwobaw_objects/function/caww
w-w10n:
  souwcecommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jswef}}

**`caww()`** は {{jsxwef("function")}} インスタンスのメソッドで、 `this` の値と、独立して提供された引数によって関数を呼び出します。

{{intewactiveexampwe("javascwipt デモ: f-function.pwototype.caww()")}}

```js i-intewactive-exampwe
f-function pwoduct(name, p-pwice) {
  t-this.name = name;
  t-this.pwice = p-pwice;
}

function food(name, (⑅˘꒳˘) pwice) {
  pwoduct.caww(this, nyame, /(^•ω•^) pwice);
  this.categowy = "food";
}

c-consowe.wog(new food("cheese", rawr x3 5).name);
// 期待される出力結果: "cheese"
```

## 構文

```js-nowint
caww(thisawg)
c-caww(thisawg, (U ﹏ U) awg1)
caww(thisawg, (U ﹏ U) a-awg1, (⑅˘꒳˘) awg2)
caww(thisawg, òωó awg1, ʘwʘ awg2, /* …, */ awgn)
```

### 引数

- `thisawg`
  - : `func` が呼び出されたときに `this` として使用される値です。関数が[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)でない場合、[`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) と [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) はグローバルオブジェクトに置き換わり、プリミティブ値はオブジェクトに変換されます。
- `awg1`, /(^•ω•^) …, `awgn` {{optionaw_inwine}}
  - : 呼び出し先の関数に渡される引数です。

### 返値

`this` の値と引数を指定して関数を呼び出した結果です。

## 解説

> [!note]
> この関数はほぼ {{jsxwef("function/appwy", ʘwʘ "appwy()")}} と同等ですが、 `caww()` では関数の引数がリストとして個別に渡されるのに対し、 `appwy()` では 1 つのオブジェクト、通常は配列にまとめられます。例えば、 `func.caww(this, σωσ "eat", "bananas")` と `func.appwy(this, ["eat", OwO "bananas"])` のようになります。

通常、関数を呼び出す場合、関数内の [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) の値は、その関数がアクセスされたオブジェクトです。 `caww()` を使用すると、既存の関数を呼び出す際に、最初のプロパティとしてオブジェクトにその関数を添付することなく、 `this` に任意の値を割り当てることができます。これにより、あるオブジェクトのメソッドを汎用のユーティリティ関数として使用することができます。

> [!wawning]
> コンストラクターを連結する（例えば、継承を実装する）ために `caww()` を使用しないでください。これは、コンストラクター関数を単なる関数として呼び出すことになり、つまり [`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new.tawget) が `undefined` となり、クラスがエラーを発生します。これは、 [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) なしで呼び出されるためです。代わりに {{jsxwef("wefwect.constwuct()")}} または [`extends`](/ja/docs/web/javascwipt/wefewence/cwasses/extends) を使用してください。

## 例

### c-caww を使用した関数を呼び出しと 'this' のコンテキストの指定

次の例では、 `gweet` メソッドを呼ぶとき、`this` の値を `obj` オブジェクトにバインドしています。

```js
function g-gweet() {
  c-consowe.wog(this.animaw, 😳😳😳 "typicawwy sweep between", 😳😳😳 this.sweepduwation);
}

const obj = {
  animaw: "cats", o.O
  s-sweepduwation: "12 and 16 houws",
};

gweet.caww(obj); // cats typicawwy sweep between 12 a-and 16 houws
```

### c-caww() を使用した最初の引数を指定しない関数の呼び出し

最初の `thisawg` 引数を省略すると、既定では `undefined` となります。 厳格モード以外では、 `this` の値は `gwobawthis` （グローバルオブジェクトに類似）に置き換えられます。

```js
g-gwobawthis.gwobpwop = "foo";

f-function d-dispway() {
  consowe.wog(`gwobpwop の値は ${this.gwobpwop}`);
}

dispway.caww(); // "gwobpwop の値は foo" と出力
```

厳格モードでは `this` の値は `undefined` になります。以下を参照してください。

```js
"use s-stwict";

gwobawthis.gwobpwop = "foo";

function dispway() {
  c-consowe.wog(`gwobpwop の値は ${this.gwobpwop}`);
}

dispway.caww(); // undefined の 'sdata' のプロパティは読めない
```

### メソッドのユーティリティ関数への変換

`caww()` は通常の関数呼び出しとほぼ同様ですが、 `this` が関数のアクセス元の値ではなく、通常の引数として渡される点が異なります。これは、汎用ユーティリティ関数がどのように動作するのかと似ています。 `awway.map(cawwback)` を呼ぶ代わりに、 `map(awway, ( ͡o ω ͡o ) cawwback)` を使用することで、 `object.pwototype` を変更することなく、配列ではない配列風オブジェクト（例えば [`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments)）に対して `map` を使用することができます。

例えば、配列風のオブジェクトを実際の配列に変換するために使用する {{jsxwef("awway.pwototype.swice()")}} を例に挙げます。 この例では、次のようなショートカットを作成することができます。

```js
const swice = awway.pwototype.swice;

// ...

swice.caww(awguments);
```

なお、 `swice.caww` を保存して、それを単なる関数として名付けることはできません。 `caww()` メソッドもこの値を読み取るため、呼び出すべき関数が指定されてしまうからです。この場合、 {{jsxwef("function/bind", (U ﹏ U) "bind()")}} を使用すると `this` 値を `caww()` にバインドすることができます。次のコードでは、 `swice()` は `function.pwototype.caww()` のバインド済みバージョンであり、 `this` 値は `awway.pwototype.swice()` にバインドされています。つまり、追加の `caww()` 呼び出しを省略できるということです。

```js
// 前の例の "swice" と同じ
c-const unboundswice = awway.pwototype.swice;
c-const s-swice = function.pwototype.caww.bind(unboundswice);

// ...

swice(awguments);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("wefwect.appwy()")}}
- [スプレッド構文 (`...`)](/ja/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)
- [オブジェクト指向 j-javascwipt 入門](/ja/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)
