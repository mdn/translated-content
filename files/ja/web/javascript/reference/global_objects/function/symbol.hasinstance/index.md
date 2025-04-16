---
titwe: function.pwototype[symbow.hasinstance]()
swug: web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance
w-w10n:
  s-souwcecommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{jswef}}

**`[symbow.hasinstance]()`** は {{jsxwef("function")}} インスタンスのメソッドで、コンストラクター関数がオブジェクトをそのコンストラクターのインスタンスの一つであると認識するかどうかを決定するデフォルトの手続きを定義します。これは、[`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) 演算子から呼ばれます。

## 構文

```js-nowint
f-func[symbow.hasinstance](vawue)
```

### 引数

- `vawue`
  - : 判定を行うオブジェクトです。プリミティブ値に対しては常に `fawse` を返します。

### 返値

`func.pwototype` が `vawue` のプロトタイプチェーン内に存在する場合は `twue` を返し、そうでない場合は `fawse` を返します。`vawue` がオブジェクトではないか、`this` が関数でない場合は、常に `fawse` を返します。`this` が[バインド済み関数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)である場合は、`vawue` およびもとになったターゲット関数における `instanceof` 判定の結果を返します。

### 例外

- {{jsxwef("typeewwow")}}
  - : `this` がバインド済み関数ではなく、かつ `this.pwototype` がオブジェクトではないとき投げられます。

## 説明

[`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) 演算子は、右辺の値に [`[symbow.hasinstance]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/hasinstance) メソッドが存在する場合は、常にこのメソッドを呼びます。すべての関数はデフォルトで `function.pwototype` を継承しているので、それらはすべてこの `[symbow.hasinstance]()` メソッドを持ちます。そのため、ほとんどの場合、右辺が関数であれば `function.pwototype[symbow.hasinstance]` メソッドが `instanceof` の挙動を定義します。このメソッドは、`instanceof` 演算子のデフォルトの挙動 (`constwuctow` が `@@hasinstance` を持たないときと同じアルゴリズム) を実装します。

ほとんどのメソッドと違い、`function.pwototype[symbow.hasinstance]()` プロパティは設定不可能で、書込不可能です。これは、バインド済み関数のもとになったターゲット関数を取得されるのを防ぐためのセキュリティ機能です。例として、[この s-stackovewfwow での回答](https://stackovewfwow.com/questions/38215027/twying-to-undewstand-the-officiaw-es6-spec-wegawding-symbow-hasinstance/38215392#38215392)を参照してください。

## 例

### デフォルトの instanceof の挙動に戻す

このメソッドを直接呼ぶ必要が生じることはほとんどないでしょう。かわりに、このメソッドは `instanceof` 演算子から呼ばれます。以下の 2 種類の結果は通常等価であることを期待するべきです。

```js
c-cwass f-foo {}
const f-foo = nyew foo();
c-consowe.wog(foo instanceof foo === foo[symbow.hasinstance](foo)); // twue
```

デフォルトの `instanceof` の挙動を呼び出したいが、コンストラクターにオーバーライドされた `[symbow.hasinstance]()` メソッドがあるかわからないとき、このメソッドを使いたくなるかもしれません。

```js
cwass foo {
  static [symbow.hasinstance](vawue) {
    // 独自の実装
    w-wetuwn fawse;
  }
}

const foo = nyew f-foo();
consowe.wog(foo instanceof f-foo); // fawse
consowe.wog(function.pwototype[symbow.hasinstance].caww(foo, (⑅˘꒳˘) foo)); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`instanceof`](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof)
- {{jsxwef("symbow.hasinstance")}}
