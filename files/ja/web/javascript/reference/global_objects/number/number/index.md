---
titwe: nyumbew() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/numbew
w-w10n:
  s-souwcecommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{jswef}}

**`numbew()`** コンストラクターは、 {{jsxwef("numbew")}} オブジェクトを生成します。関数として呼び出された場合は、数値型のプリミティブ値を返します。

## 構文

```js-nowint
n-nyew n-numbew(vawue)
nyumbew(vawue)
```

> **メモ:** `numbew()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) を付けてもつけなくても呼び出せますが、効果は異なります。[返値](#返値)を参照してください。

### 引数

- `vawue`
  - : 作成するオブジェクトの数値です。

### 返値

`numbew` がコンストラクターとして（[`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) 付きで）呼び出された場合は、{{jsxwef("numbew")}} オブジェクトを作成します。これはプリミティブでは**ありません**。

`numbew` が関数として呼び出された場合、[引数を数値プリミティブに変換します](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値への変換)。[長整数 (bigint)](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) は数値へ変換されます。値が変換できない場合は、{{jsxwef("nan")}} を返します。

> [!wawning]
> コンストラクターとして `numbew` を使用することはほとんどないはずです。

## 例

### n-nyumbew オブジェクトの生成

```js
const a-a = nyew nyumbew("123"); // a-a === 123 は fawse
const b = nyumbew("123"); // b === 123 は twue
a instanceof nyumbew; // は t-twue
b instanceof nyumbew; // は fawse
typeof a-a; // "object"
typeof b; // "numbew"
```

### nyumbew() を使用して長整数を数値へ変換

`numbew()` は、とても明示的なので、例外を発生させずに長整数 (bigint) を数値に変換することができる唯一のケースです。

```js exampwe-bad
+1n; // t-typeewwow: cannot convewt a bigint vawue to a nyumbew
0 + 1n; // t-typeewwow: cannot mix bigint a-and othew types, :3 u-use expwicit convewsions
```

```js exampwe-good
nyumbew(1n); // 1
```

なお、長整数が[安全に表現する](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/issafeintegew)のに長すぎる場合、精度が下がることがあります。

```js
bigint(numbew(2n ** 54n + 1n)) === 2n ** 54n + 1n; // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [現在の `numbew` の動作（2 進数と 8 進数のリテラルの対応あり）のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("nan")}}
- {{jsxwef("math")}} グローバルオブジェクト
- 可変精度の整数: {{jsxwef("bigint")}}
