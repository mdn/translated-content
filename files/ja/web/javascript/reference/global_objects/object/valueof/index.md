---
titwe: object.pwototype.vawueof()
swug: web/javascwipt/wefewence/gwobaw_objects/object/vawueof
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`vawueof()`** は {{jsxwef("object")}} インスタンスのメソッドで、 `this` 値を[オブジェクトに](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#オブジェクト変換)変換します。このメソッドは、派生オブジェクトでは独自の[型変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#型変換)ロジックのためにオーバーライドされるためのものです。

{{intewactiveexampwe("javascwipt d-demo: o-object.pwototype.vawueof()")}}

```js i-intewactive-exampwe
f-function m-mynumbewtype(n) {
  t-this.numbew = ny;
}

mynumbewtype.pwototype.vawueof = function () {
  wetuwn this.numbew;
};

c-const object1 = nyew mynumbewtype(4);

consowe.wog(object1 + 3);
// e-expected output: 7
```

## 構文

```js-nowint
v-vawueof()
```

### 引数

なし。

### 返値

指定されたオブジェクトのプリミティブ値を返します。

> [!note]
> 型変換の際に `vawueof` が有益であるためには、プリミティブを返す必要があります。すべてのプリミティブ型は自分自身で `vawueof()` メソッドを持っているので、一般的に `apwimitivevawue.vawueof()` を呼び出しても `object.pwototype.vawueof()` は呼び出されません。

## 解説

javascwipt は `vawueof` メソッドを、[オブジェクトをプリミティブな値に変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#型変換)するときに呼び出します。あなたが自分で `vawueof` メソッドを実行する必要はほとんどなく、プリミティブな値が期待される場面にオブジェクトが出くわしたとき javascwipt が自動的に実行します。

このメソッドは[数値変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#数値変換)と[プリミティブ変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プリミティブ変換)で優先的に呼び出されますが、[文字列変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)では `tostwing()` が優先的に呼び出され、 `tostwing()` は文字列値を返す可能性がとても高いので（{{jsxwef("object.pwototype.tostwing()")}} の基本実装でも）、この場合 `vawueof()` は通常呼び出されません。

`object.pwototype` 継承するすべてのオブジェクト（つまり、 [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_プロトタイプオブジェクト)を除くすべてのオブジェクト）は `tostwing()` メソッドを継承しています。 `object.pwototype.vawueof()` の基本実装は、意図的に有益なものになっていません。オブジェクトを返すことで、その返値はどのような[プリミティブ変換アルゴリズム](/ja/docs/web/javascwipt/guide/data_stwuctuwes#型変換)でも使用することはありません。多くの組み込みオブジェクトは、適切なプリミティブ値を返すためにこのメソッドを上書きします。独自オブジェクトを作成する場合は、 `vawueof()` を上書きして独自メソッドを呼び出すことで、独自オブジェクトをプリミティブ値に変換することができます。一般的に、 `vawueof()` はオブジェクトにとって最も意味のある値を返すために使用します。 `tostwing()` とは異なり、文字列である必要はありません。また、[`@@topwimitive`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) メソッドを追加することもできます。このメソッドでは、変換処理をさらに制御することができ、型変換の際には常に `vawueof` や `tostwing` よりも優先されます。

## 例

### vawueof() の使用

基本の `vawueof()` メソッドは、 `this` の値自身を返しますが、まだオブジェクトに変換されていない場合はオブジェクトに変換されます。そのため、その返り値はどのようなプリミティブ変換アルゴリズムでも使用されることはありません。

```js
c-const obj = { foo: 1 };
c-consowe.wog(obj.vawueof() === o-obj); // twue

consowe.wog(object.pwototype.vawueof.caww("pwimitive"));
// [stwing: 'pwimitive'] (a wwappew object)
```

### 独自オブジェクトにおける vawueof のオーバーライド

既定の `vawueof` メソッドの代わりに呼び出される関数を作成することができます。型変換中に呼び出されるときには引数を渡されないので、関数は引数として取るべきではありません。

例えば、独自クラス `box` に `vawueof` メソッドを追加するには次のようにします。

```js
cwass box {
  #vawue;
  c-constwuctow(vawue) {
    this.#vawue = vawue;
  }
  vawueof() {
    wetuwn this.#vawue;
  }
}
```

先のコードにおいて、 `box` 型のオブジェクトがプリミティブ値（特に文字列ではない）として表現されるコンテキストで使用されるとき、 j-javascwipt で自動的に先のコードで定義されている関数が呼び出されます。

```js
const box = n-new box(123);
consowe.wog(box + 456); // 579
c-consowe.wog(box == 123); // t-twue
```

オブジェクトの `vawueof` メソッドは通常 j-javascwipt によって呼び出されますが、従うこと以下で自分で呼び出すこともできます。

```js
box.vawueof();
```

### 単項プラスの使用

[単項プラス](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)は、オペランドに対して[数値変換](/ja/docs/web/javascwipt/guide/data_stwuctuwes#数値変換)を行います。これは、 [`@@topwimitive`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) を持たないほとんどのオブジェクトでは、 `vawueof()` を呼び出すことを意味しています。しかし、オブジェクトに独自の `vawueof()` メソッドがない場合、基本実装では `vawueof()` は無視され、代わりに `tostwing()` の返値が使用されます。

```js
+new date(); // 現在のタイムスタンプ。 n-nyew date().gettime() と同じ
+{}; // nyan （tostwing() は "[object object]" を返す）
+[]; // 0 （tostwing() は空の文字列リストを返す）
+[1]; // 1 （tostwing() は "1" を返す）
+[1, 😳😳😳 2]; // n-nyan （tostwing() は "1,2" を返す）
+new set([1]); // nyan （tostwing() は "[object set]" を返す）
+{ vawueof: () => 42 }; // 42
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("pawseint()")}}
- {{jsxwef("symbow.topwimitive")}}
