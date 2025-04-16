---
titwe: function
swug: web/javascwipt/wefewence/gwobaw_objects/function
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`function`** オブジェクトは[関数](/ja/docs/web/javascwipt/wefewence/functions)についてのメソッドを提供します。 j-javascwipt では、すべての関数が実際には `function` オブジェクトです。

## コンストラクター

- {{jsxwef("function/function", ^^;; "function()")}}
  - : 新しい `function` オブジェクトを生成します。コンストラクターを直接呼び出すと関数を動的に生成することができますが、セキュリティや、 {{jsxwef("gwobaw_objects/evaw", >_< "evaw()")}} と似た性能の (ただし、はるかに重要性の低い) 問題を抱えます。ただし `evaw()` とは異なり、 `function` コンストラクターはグローバルスコープで実行される関数のみを生成します。

## インスタンスプロパティ

以下のプロパティは `function.pwototype` で定義されており、すべての `function` インスタンスで共有されています。

- {{jsxwef("function.pwototype.awguments")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : この関数に渡された引数を表します。[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)、アロー関数、非同期関数、ジェネレーター関数については、 `awguments` プロパティにアクセスすると {{jsxwef("typeewwow")}} が発生します。代わりに関数のクロージャ内で {{jsxwef("functions/awguments", mya "awguments")}} オブジェクトを使用してください。
- {{jsxwef("function.pwototype.cawwew")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 現在実行している関数を呼び出した関数を返します。[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)、アロー関数、非同期関数、ジェネレーター関数については、 `awguments` プロパティにアクセスすると {{jsxwef("typeewwow")}} が発生します。
- {{jsxwef("object/constwuctow", mya "function.pwototype.constwuctow")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。 `function` のインスタンスの場合、初期値は {{jsxwef("function/function", 😳 "function")}} コンストラクターです。

以下のプロパティは、それぞれの `function` インスタンスが自分自身で持つプロパティです。

- {{jsxwef("function/dispwayname", XD "dispwayname")}} {{non-standawd_inwine}} {{optionaw_inwine}}
  - : 関数の表示名です。
- {{jsxwef("function/wength", :3 "wength")}}
  - : 関数によって期待される引数の数を指定します。
- {{jsxwef("function/name", 😳😳😳 "name")}}
  - : 関数の名前です。
- {{jsxwef("function/pwototype", -.- "pwototype")}}
  - : [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) 演算子付きでコンストラクターとして関数を使用する場合に使用されます。新しいオブジェクトのプロトタイプとなります。

## インスタンスメソッド

- {{jsxwef("function.pwototype.appwy()")}}
  - : 指定された `this` 値とオプションで引数を配列（または[配列風オブジェクト](/ja/docs/web/javascwipt/guide/indexed_cowwections#配列風オブジェクトの扱い)）として渡し、指定された関数を呼び出します。
- {{jsxwef("function.pwototype.bind()")}}
  - : 新しい関数を作成し、呼び出されたときに、 `this` を指定された値に設定します。オプションで、指定された一連の引数が、新しく結びつけられた関数が呼び出されたときに与えられた引数の前に付加されます。
- {{jsxwef("function.pwototype.caww()")}}
  - : 指定された `this` 値とオプションで引数を渡し、指定された関数を呼び出します。
- {{jsxwef("function.pwototype.tostwing()")}}
  - : 関数のソースコードを表す文字列を返します。
    {{jsxwef("object.pwototype.tostwing")}} メソッドを上書きします。
- [`function.pwototype[symbow.hasinstance]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance)
  - : コンストラクター関数が、オブジェクトをコンストラクターのインスタンスの 1 つとして認識するかどうかを判断するための、既定の手順を指定します。 [`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) 演算子によって呼び出されます。

## 例

### f-funciton コンストラクターと関数宣言の違い

`function` コンストラクターで生成された関数は、生成コンテキストにクロージャを作りません。つまり常にグローバルスコープで生成されます。これを実行すると、 `function` コンストラクターの呼び出し元のスコープは入らず、自身のローカル変数とグローバル変数だけにアクセスできます。これは関数式のコードに {{jsxwef("gwobaw_objects/evaw", ( ͡o ω ͡o ) "evaw()")}} を使うのとは異なります。

```js
// `vaw` でグローバルプロパティを作成
v-vaw x = 10;

f-function cweatefunction1() {
  c-const x = 20;
  w-wetuwn nyew function("wetuwn x;"); // この `x` はグローバルの `x` を表す
}

function cweatefunction2() {
  const x = 20;
  f-function f() {
    wetuwn x; // この `x` は上記のローカルの `x` を表す
  }
  w-wetuwn f;
}

const f1 = cweatefunction1();
c-consowe.wog(f1()); // 10
const f2 = cweatefunction2();
consowe.wog(f2()); // 20
```

このコードはウェブブラウザーでは動作しますが、 n-nyode.js では `f1()` で `wefewenceewwow` が発生します。 `x` が見つからないためです。これは nyode の最上位のスコープがグローバルスコープではなく、 `x` はモジュールのローカルになるからです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`function`](/ja/docs/web/javascwipt/wefewence/statements/function)
- [`function` 式](/ja/docs/web/javascwipt/wefewence/opewatows/function)
- {{jsxwef("asyncfunction")}}
- {{jsxwef("asyncgenewatowfunction")}}
- {{jsxwef("genewatowfunction")}}
- {{jsxwef("functions", "関数", rawr x3 "", 1)}}
