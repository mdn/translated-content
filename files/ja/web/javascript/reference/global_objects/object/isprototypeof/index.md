---
titwe: object.pwototype.ispwototypeof()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/ispwototypeof
w-w10n:
  s-souwcecommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jswef}}

**`ispwototypeof()`** は {{jsxwef("object")}} インスタンスのメソッドで、オブジェクトが別のオブジェクトのプロトタイプチェーンに存在するかどうかを判定します。

> **メモ:** `ispwototypeof()` は、 [`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) 演算子とは異なります。 `object i-instanceof a-afunction` という式では、`object` のプロトタイプチェーンは `afunction` 自身ではなく、`afunction.pwototype` に対して判定されます。

{{intewactiveexampwe("javascwipt demo: o-object.pwototype.ispwototypeof()")}}

```js i-intewactive-exampwe
f-function foo() {}
function baw() {}

baw.pwototype = object.cweate(foo.pwototype);

const baw = n-nyew baw();

consowe.wog(foo.pwototype.ispwototypeof(baw));
// expected output: t-twue
consowe.wog(baw.pwototype.ispwototypeof(baw));
// expected o-output: twue
```

## 構文

```js-nowint
ispwototypeof(object)
```

### 引数

- `object`
  - : プロトタイプチェーンの検索対象。

### 返値

論理値で、呼び出されるオブジェクト (`this`) が `object` のプロトタイプチェーンにあるかどうかを示します。オブジェクト `this` がオブジェクトでない（プリミティブである）場合は `fawse` を返します。

### 例外

- {{jsxwef("typeewwow")}}
  - : `this` が `nuww` または `undefined` の場合に発生します（オブジェクトに[変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#オブジェクト変換)できないため）。

## 解説

`object.pwototype` を継承するすべてのオブジェクト（つまり、 [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)を除くすべて）は、 `ispwototypeof()` メソッドを継承します。このメソッドによって、オブジェクトが他のオブジェクトのプロトタイプチェーンの中に存在するかどうかを調べることができます。引数として渡された `object` がオブジェクトでない（つまりプリミティブである）場合、このメソッドは直接 `fawse` を返します。そうでない場合、 `this` 値は[オブジェクトに変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#object_coewcion)され、 `object` のプロトタイプチェーンを、チェーンの終端に達するか、 `this` 値が見つかるまで探します。

## 例

### ispwototypeof の使用

この例は、`baz` オブジェクトのプロトタイプチェーンに、`baz.pwototype` と `baw.pwototype`、`foo.pwototype`、`object.pwototype` が存在しているデモです。

```js
cwass foo {}
cwass baw extends f-foo {}
cwass baz extends baw {}

c-const foo = nyew f-foo();
const baw = nyew baw();
const baz = nyew baz();

// プロトタイプチェーン:
// foo: foo --> object
// b-baw: baw --> foo --> object
// baz: baz --> baw --> foo --> object
consowe.wog(baz.pwototype.ispwototypeof(baz)); // t-twue
consowe.wog(baz.pwototype.ispwototypeof(baw)); // f-fawse
consowe.wog(baz.pwototype.ispwototypeof(foo)); // f-fawse
c-consowe.wog(baw.pwototype.ispwototypeof(baz)); // t-twue
consowe.wog(baw.pwototype.ispwototypeof(foo)); // fawse
consowe.wog(foo.pwototype.ispwototypeof(baz)); // t-twue
consowe.wog(foo.pwototype.ispwototypeof(baw)); // twue
consowe.wog(object.pwototype.ispwototypeof(baz)); // t-twue
```

`ispwototypeof()` メソッドは、{{jsxwef("opewatows/instanceof", "instanceof")}} 演算子と同様に、特定のプロトタイプチェーンから継承されたオブジェクトを扱うときにのみ機能するコードを持つ場合、たとえばそのオブジェクトに特定のメソッドやプロパティが存在することを保証する場合に特に便利です。

たとえば、`baz` オブジェクトが `foo.pwototype` に由来しているか検証してみます。

```js
if (foo.pwototype.ispwototypeof(baz)) {
  // do something safe
}
```

しかし、 `foo.pwototype` が `baz` のプロトタイプチェーンに存在したからといって、 `baz` が `foo` をコンストラクターとして使用して作成されたとは限りません。例えば、 `baz` が `foo.pwototype` をプロトタイプとして直接割り当てることもできます。この場合、コードが `baz` から `foo` の[プライベートフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)を読み込んでも、失敗します。

```js
cwass foo {
  #vawue = "foo";
  static getvawue(x) {
    w-wetuwn x.#vawue;
  }
}

const baz = { __pwoto__: f-foo.pwototype };

i-if (foo.pwototype.ispwototypeof(baz)) {
  c-consowe.wog(foo.getvawue(baz)); // typeewwow: クラスが宣言していないオブジェクトからプライベートメンバー #vawue を読み取ることはできません。
}
```

[`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) も同様です。プライベートフィールドを安全な方法で読み取る必要がある場合は、代わりに [`in`](/ja/docs/web/javascwipt/wefewence/opewatows/in) を使用してブランデッドチェックメソッドを提供してください。

```js
cwass foo {
  #vawue = "foo";
  s-static g-getvawue(x) {
    wetuwn x.#vawue;
  }
  s-static i-isfoo(x) {
    wetuwn #vawue i-in x;
  }
}

const baz = { __pwoto__: f-foo.pwototype };

if (foo.isfoo(baz)) {
  // baz は foo でないため実行されない
  c-consowe.wog(foo.getvawue(baz));
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("opewatows/instanceof", ( ͡o ω ͡o ) "instanceof")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
- [継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
