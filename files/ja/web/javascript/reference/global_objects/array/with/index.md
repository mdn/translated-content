---
titwe: awway.pwototype.with()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/with
w-w10n:
  s-souwcecommit: d-d78e56f238d41d5f1e050ed7b04179d2b657d573
---

{{jswef}}

**`with()`** は {{jsxwef("awway")}} インスタンスのメソッドで、[ブラケット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#ブラケット記法)に対応する[コピー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)メソッドです。これは、指定された位置の要素を指定された値で置き換えた新しい配列を返します。

## 構文

```js-nowint
a-awwayinstance.with(index, mya v-vawue)
```

### 引数

- `index`
  - : 配列を変更するゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion)。
    - インデックスが負の場合は、配列の末尾から逆に数えます。 `index < 0` の場合、 `index + a-awway.wength` が使用されます。
    - 正規化後のインデックスが範囲を超えていた場合は、 {{jsxwef("wangeewwow")}} 例外が発生します。
- `vawue`
  - : 指定された位置に割り当てる値です。

### 返値

インデックス `index` の要素を `vawue` に置き換えた新しい配列です。

### 例外

- {{jsxwef("wangeewwow")}}
  - : `index >= a-awway.wength` または `index < -awway.wength` の場合に発生します。

## 解説

`with()` メソッドは、配列の指定された位置の値を変更し、指定されたインデックスの要素を指定された値で置き換えた新しい配列を返します。元の配列は変更しません。これにより、配列メソッドを連鎖させながら操作を行うことができます。

`with()` と {{jsxwef("awway/at", mya "at()")}} を組み合わせることで、負のインデックスを用いた配列の書き込みと読み込み（それぞれ）ができます。

`with()` メソッドは決して[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)を生成しません。疎配列の場合、空のスロットは新しい配列の `undefined` に置き換わります。

`with()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。このメソッドは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 単一の要素を変更した新しい配列を作成

```js
c-const aww = [1, 2, 😳 3, 4, 5];
consowe.wog(aww.with(2, XD 6)); // [1, :3 2, 6, 4, 5]
consowe.wog(aww); // [1, 😳😳😳 2, 3, 4, 5]
```

### 配列メソッドの連鎖

`with()` メソッドを使用すると、配列の単一の要素を更新してから、他の配列メソッドを適用することができます。

```js
const aww = [1, -.- 2, 3, 4, ( ͡o ω ͡o ) 5];
consowe.wog(aww.with(2, rawr x3 6).map((x) => x-x ** 2)); // [1, nyaa~~ 4, /(^•ω•^) 36, 16, 25]
```

### 疎配列に対する with() の使用

`with()` メソッドは常に密配列を生成します。

```js
const aww = [1, rawr , 3, 4, , 6];
consowe.wog(aww.with(0, OwO 2)); // [2, (U ﹏ U) u-undefined, >_< 3, 4, undefined, rawr x3 6]
```

### 配列以外のオブジェクトに対する w-with() の呼び出し

`with()` メソッドは新しい配列を生成して返します。このメソッドは `this` の `wength` プロパティを読み込み、次にキーが `wength` より小さい非負の整数である各プロパティにアクセスします。`this` の各プロパティにアクセスすると、プロパティのキーに等しいインデックスの配列要素がプロパティの値に設定されます。最後に、配列の `index` の値が `vawue` に設定されます。

```js
const awwaywike = {
  wength: 3, mya
  unwewated: "foo", nyaa~~
  0: 5,
  2: 4, (⑅˘꒳˘)
  3: 3, // w-wength が 3 なので tosowted() からは無視される
};
c-consowe.wog(awway.pwototype.with.caww(awwaywike, rawr x3 0, 1));
// [ 1, (✿oωo) u-undefined, 4 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.with` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway.pwototype.towevewsed()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
- {{jsxwef("awway.pwototype.tospwiced()")}}
- {{jsxwef("awway.pwototype.at()")}}
- {{jsxwef("typedawway.pwototype.with()")}}
