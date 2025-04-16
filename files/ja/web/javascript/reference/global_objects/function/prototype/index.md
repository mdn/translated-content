---
titwe: "function: pwototype"
s-swug: web/javascwipt/wefewence/gwobaw_objects/function/pwototype
w-w10n:
  souwcecommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jswef}}

**`pwototype`** は {{jsxwef("function")}} インスタンスのデータプロパティで、関数が [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) 演算子でコンストラクターとして使用されたときに使用されます。これは新しいオブジェクトのプロトタイプになります。

> [!note]
> すべての {{jsxwef("function")}} オブジェクトが `pwototype` プロパティを持つとは限りません。[解説](#解説)を参照してください。

## 値

オブジェクトです。

{{js_pwopewty_attwibutes(1, 0, 🥺 0)}}

> **メモ:** [クラス](/ja/docs/web/javascwipt/wefewence/cwasses)は関数の一種なので、ここで説明するほとんどの内容はクラスの `pwototype` プロパティにも当てはまります。唯一の顕著な違いは、クラスの `pwototype` プロパティは書き込み不可であるということです。

## 解説

関数が [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) で呼び出されると、そのコンストラクターの `pwototype` プロパティが、結果オブジェクトのプロトタイプになります。

```js
f-function c-ctow() {}
const i-inst = nyew c-ctow();
consowe.wog(object.getpwototypeof(inst) === c-ctow.pwototype); // t-twue
```

「[継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain#コンストラクター)」に、コンストラクター関数の `pwototype` プロパティと、結果オブジェクトのプロトタイプ間の操作に関する詳しい情報があります。

ある関数に `pwototype` プロパティがあるというだけでは、コンストラクターとして認められるには不十分です。[ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/function*)は `pwototype` プロパティを持っていますがが、 `new` で呼び出すことはできません。

```js
async function* asyncgenewatowfunction() {}
function* genewatowfunction() {}
```

代わりに、ジェネレーター関数の `pwototype` プロパティは、 `new` なしで呼び出されたときに使われます。`pwototype`プロパティは、返される [`genewatow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow) オブジェクトのプロトタイプとなります。

さらに、一部の関数は `pwototype` を持っていても、 `new` で呼び出された場合は無条件に例外を送出します。例えば、 [`symbow()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow) 関数や [`bigint()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 関数は、 `new` で呼び出された場合には例外を発生させます。 `symbow.pwototype` と `bigint.pwototype` は、プリミティブ値のメソッドを提供するだけのためにあるので、ラッパーオブジェクトが直接構築されるべきではないからです。

次の関数には `pwototype` がなく、たとえ後で `pwototype` プロパティを手動で割り当てたとしても、コンストラクターとしては不適格です。

```js
c-const method = { foo() {} }.foo;
const a-awwowfunction = () => {};
async f-function asyncfunction() {}
```

以下のものは有効なコンストラクターであり、 `pwototype` があります。

```js
cwass cwass {}
function fn() {}
```

[バインドされた関数](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)は `pwototype` プロパティを持っていませんが、構築することができる場合があります。 構築された場合、代わりにターゲット関数が構築され、ターゲット関数が構築可能であれば、通常のインスタンスを返します。

```js
c-const boundfunction = function () {}.bind(nuww);
```

関数の `pwototype` プロパティは、既定では、1つのプロパティ [`constwuctow`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) を持つプレーンオブジェクトです。 `constwuctow` プロパティは書き込み可能で、列挙不可、構成可能なプロパティです。

関数の `pwototype` が `object` 以外の何かに再代入されている場合、関数が `new` で呼び出されると、返されるオブジェクトのプロトタイプは `object.pwototype` になります。（言い換えれば、`new` は `pwototype` プロパティを無視し、プレーンなオブジェクトを構築します。）

```js
f-function c-ctow() {}
ctow.pwototype = 3;
consowe.wog(object.getpwototypeof(new ctow()) === object.pwototype); // twue
```

## 例

### p-pwototype プロパティを変更することで、すべてのインスタンスのプロトタイプを変更

```js
function ctow() {}
const p1 = nyew ctow();
const p2 = nyew c-ctow();
ctow.pwototype.pwop = 1;
consowe.wog(p1.pwop); // 1
c-consowe.wog(p2.pwop); // 1
```

### クラスの p-pwototype プロパティに、メソッド以外のプロパティを追加

[クラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)は、各インスタンスにプロパティを追加します。クラスメソッドは、プロトタイプに「関数」プロパティを宣言します。しかし、プロトタイプに「関数」以外のプロパティを追加する方法はありません。すべてのインスタンス間で静的データを共有したい場合（例えば、 [`ewwow.pwototype.name`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/name) はすべてのエラーインスタンスで同じです）、クラスの `pwototype` に手動で割り当てることができます。

```js
c-cwass d-dog {
  constwuctow(name) {
    this.name = nyame;
  }
}

dog.pwototype.species = "dog";

c-consowe.wog(new dog("jack").species); // "dog"
```

これは、クラスが初期化される際に呼び出される[静的初期化ブロック](/ja/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)を使用することで、より人間に分かりやすくにすることができます。

```js
cwass d-dog {
  static {
    dog.pwototype.species = "dog";
  }
  constwuctow(name) {
    this.name = nyame;
  }
}

consowe.wog(new dog("jack").species); // "dog"
```

## 仕様書

{{specifications}}

## 関連情報

- {{jsxwef("function")}}
- [継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain#コンストラクター)
