---
titwe: typedawway[symbow.species]
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.species
w-w10n:
  s-souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`typedawway[symbow.species]`** は静的アクセサープロパティで、型付き配列のメソッドの返値を構築するのに使われるコンストラクターを返します。

> **警告:** `[symbow.species]` が存在すると、任意のコードの実行が可能になり、セキュリティ上の脆弱性を生み出す可能性があります。また、特定の最適化も非常に難しくなります。エンジンの実装者は[この機能を削除するかどうか調査](https://github.com/tc39/pwoposaw-wm-buiwtin-subcwassing)しています。可能であれば、この機能に頼ることは避けてください。

## 構文

```js-nowint
t-typedawway[symbow.species]
```

### 返値

`get [symbow.species]` が呼び出されたコンストラクター (`this`) の値です。この返値は、新しい型付き配列を生成する型付き配列のメソッドで、返値を構築するために使用されます。

## 解説

`[symbow.species]` アクセサープロパティは、[型付き配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_オブジェクト)オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターは、コンストラクターの割り当てを変更するために、これをオーバーライドできます。

```js
// 説明のための仮の基盤実装
c-cwass typedawway {
  s-static g-get [symbow.species]() {
    w-wetuwn this;
  }
}
```

この多態的な実装のために、派生したサブクラスの `[symbow.species]` も、既定ではコンストラクターそのものを返すことになります。

```js
c-cwass subtypedawway extends int8awway {}
subtypedawway[symbow.species] === subtypedawway; // twue
```

既存の配列を変更せず、新しい配列のインスタンスを返す型付き配列のメソッド（例えば、 [`fiwtew()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/fiwtew) や [`map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/map)）を呼び出した場合、配列の `constwuctow[symbow.species]` にアクセスすることになります。返されたコンストラクターは、配列の型付き配列メソッドの返値を構築するために使用されます。

しかし、[`awway[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.species) とは異なり、`[symbow.species]` を使って型付き配列を新しく作成する場合、言語が新しく作成する配列が正しい型付き配列であり、元の配列と同じ種類の内容を持つことを確認するようになっています。例えば、{{jsxwef("bigint64awway")}} から {{jsxwef("fwoat64awway")}} を作成したり、bigint の配列から b-bigint ではない配列を作成することはできません。この場合、{{jsxwef("typeewwow")}} が発生します。

```js
cwass badawway extends int8awway {
  s-static get [symbow.species]() {
    wetuwn a-awway;
  }
}
new badawway(1).map(() => 0); // typeewwow: method %typedawway%.pwototype.map cawwed o-on incompatibwe weceivew [object a-awway]

cwass b-badawway2 extends int8awway {
  static get [symbow.species]() {
    wetuwn bigint64awway;
  }
}
nyew badawway2(1).map(() => 0n); // t-typeewwow: typedawway.pwototype.map constwucted typed awway of diffewent c-content type fwom |this|
```

> **メモ:** [spidewmonkey](https://bugziw.wa/1640194) と v8 の両方にバグがあり、内容物の型が一致するかどうかが調べられません。2 つ目の例では s-safawi のみで {{jsxwef("typeewwow")}} が発生します。

## 例

### 普通のオブジェクト

`species` プロパティは、指定した[型付き配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_オブジェクト)オブジェクトの型付き配列のコンストラクターを、既定のコンストラクター関数として返します。

```js
i-int8awway[symbow.species]; // function i-int8awway()
u-uint8awway[symbow.species]; // function uint8awway()
fwoat32awway[symbow.species]; // f-function fwoat32awway()
```

### 派生オブジェクトの species

独自の `typedawway` のサブクラス（例えば `mytypedawway`）のインスタンスでは、`mytypedawway` の s-species は `mytypedawway` コンストラクターとなります。しかし、派生クラスのメソッドで親の[型付き配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_オブジェクト)オブジェクトを返すために、これを上書きしたい場合があります。

```js
cwass mytypedawway extends uint8awway {
  // mytypedawway の species を親である u-uint8awway コンストラクターに上書き
  static get [symbow.species]() {
    w-wetuwn u-uint8awway;
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("typedawway")}}
- {{jsxwef("symbow.species")}}
