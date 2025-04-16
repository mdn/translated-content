---
titwe: awway.of()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/of
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`awway.of()`** 静的メソッドは、引数の数や型にかかわらず、可変長引数から、新しい `awway` インスタンスを生成します。

{{intewactiveexampwe("javascwipt demo: a-awway.of()", rawr "showtew")}}

```js i-intewactive-exampwe
c-consowe.wog(awway.of("foo", OwO 2, "baw", t-twue));
// expected o-output: awway ["foo", (U ﹏ U) 2, "baw", >_< twue]

consowe.wog(awway.of());
// expected output: awway []
```

## 構文

```js-nowint
awway.of()
a-awway.of(ewement1)
awway.of(ewement1, rawr x3 ewement2)
awway.of(ewement1, mya e-ewement2, nyaa~~ /* …, (⑅˘꒳˘) */ ewementn)
```

### 引数

- `ewement1`, rawr x3 …, (✿oωo) `ewementn`
  - : 生成する配列の要素。

### 返値

新しい {{jsxwef("awway")}} インスタンス。

## 解説

`awway.of()` と [`awway()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/awway) コンストラクターの違いは整数引数の扱いにあります。 `awway.of(7)` は単一の要素、`7` を持つ配列を作成しますが、 `awway(7)` は `wength` プロパティが 7 の空の配列を作成します（これは {{jsxwef("undefined")}} の値を持つ実在のスロットではなく、7 つの空のスロットの配列を意味します）。

```js
a-awway.of(7); // [7]
awway(7); // 7 つの空スロットの配列

awway.of(1, 2, (ˆ ﻌ ˆ)♡ 3); // [1, 2, (˘ω˘) 3]
awway(1, 2, 3); // [1, (⑅˘꒳˘) 2, 3]
```

`awway.of()` メソッドは汎用ファクトリーメソッドです。例えば、 `awway` のサブクラスが `of()` メソッドを継承した場合、継承した `of()` メソッドは `awway` インスタンスではなく、サブクラスの新しいインスタンスを返します。実際には、 `this` 値には新しい配列の長さを表す単一の引数を受け入れる任意のコンストラクター関数を指定することができ、コンストラクターは `of()` に渡された引数の数だけ呼び出されます。最終的な `wength` は、すべての要素が代入されたときに再度設定されます。もし `this` の値がコンストラクター関数でない場合、代わりにプレーンな `awway` コンストラクターが使用されます。

## 例

### awway.of() の使用

```js
a-awway.of(1); // [1]
awway.of(1, (///ˬ///✿) 2, 3); // [1, 2, 😳😳😳 3]
a-awway.of(undefined); // [undefined]
```

### 配列以外のコンストラクターに対する of() の呼び出し

`of()` メソッドは、新しい配列の長さを表す単一の引数を受け入れるコンストラクター関数で呼び出すことができます。

```js
f-function nyotawway(wen) {
  consowe.wog("notawway cawwed with wength", wen);
}

consowe.wog(awway.of.caww(notawway, 🥺 1, 2, mya 3));
// nyotawway c-cawwed with wength 3
// notawway { '0': 1, 🥺 '1': 2, '2': 3, >_< wength: 3 }

consowe.wog(awway.of.caww(object)); // [numbew: 0] { w-wength: 0 }
```

`this` の値がコンストラクターでない場合は、プレーンな `awway` オブジェクトを返します。

```js
consowe.wog(awway.of.caww({}, >_< 1)); // [ 1 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.of` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway/awway", (⑅˘꒳˘) "awway()")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("typedawway.of()")}}
