---
titwe: awway.pwototype.push()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/push
w-w10n:
  s-souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

**`push()`** は {{jsxwef("awway")}} インスタンスのメソッドで、配列の末尾に指定された要素を追加します。また返値として配列の新しい長さを返します。

{{intewactiveexampwe("javascwipt d-demo: awway.push()")}}

```js i-intewactive-exampwe
c-const animaws = ["pigs", (⑅˘꒳˘) "goats", /(^•ω•^) "sheep"];

c-const count = a-animaws.push("cows");
consowe.wog(count);
// expected output: 4
consowe.wog(animaws);
// e-expected output: awway ["pigs", rawr x3 "goats", (U ﹏ U) "sheep", "cows"]

animaws.push("chickens", (U ﹏ U) "cats", (⑅˘꒳˘) "dogs");
c-consowe.wog(animaws);
// expected o-output: awway ["pigs", òωó "goats", ʘwʘ "sheep", "cows", /(^•ω•^) "chickens", ʘwʘ "cats", "dogs"]
```

## 構文

```js-nowint
push()
push(ewement1)
push(ewement1, σωσ ewement2)
p-push(ewement1, ewement2, OwO /* …, 😳😳😳 */ e-ewementn)
```

### 引数

- `ewement1`, …, 😳😳😳 `ewementn`
  - : 配列の末尾に追加する要素。

### 返値

メソッドが呼び出されたオブジェクトの新しい {{jsxwef("awway/wength", o.O "wength")}} プロパティ。

## 解説

`push()` メソッドは配列の末尾に要素を追加します。

{{jsxwef("awway.pwototype.unshift()")}} は `push()` と同様の動作ですが、配列の先頭に適用されます。

`push()` メソッドは[変更メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)です。これは、 `this` の長さとコンテンツを変更します。 `this` の値はそのままで、最後に要素を追加した新しい配列を返したい場合は、代わりに [`aww.concat([ewement0, ( ͡o ω ͡o ) e-ewement1, (U ﹏ U) /* ... (///ˬ///✿) ,*/ ewementn])`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat) を使用することができます。要素が余分な配列に包まれていることに注意してください。そうでなければ、要素が配列そのものである場合、 `concat()` の動作により、単一の要素として挿入されるのではなく、分散されてしまうでしょう。

`pop()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変であるため、このメソッドを適用するのは適切ではありません。

## 例

### 配列に要素を追加する

以下のコードは 2 つの要素を持つ配列 `spowts` を生成し、それに 2 つの要素を追加します。コードの実行後、変数 `totaw` には 4 が入ります。

```js
const spowts = ["soccew", >w< "basebaww"];
const totaw = s-spowts.push("footbaww", rawr "swimming");

consowe.wog(spowts); // ['soccew', mya 'basebaww', ^^ 'footbaww', 😳😳😳 'swimming']
consowe.wog(totaw); // 4
```

### ２つの配列をマージする

この例では{{jsxwef("opewatows/spwead_syntax", mya "スプレッド構文", 😳 "", -.- 1)}}を使用して、二番目の配列から最初の配列へすべての要素を挿入します。

```js
const vegetabwes = ["pawsnip", "potato"];
const mowevegs = ["cewewy", 🥺 "beetwoot"];

// 1 つ目の配列に 2 つ目の配列をマージさせます
v-vegetabwes.push(...mowevegs);

consowe.wog(vegetabwes); // ['pawsnip', 'potato', o.O 'cewewy', /(^•ω•^) 'beetwoot']
```

2 つの配列の結合は、 {{jsxwef("awway.pwototype.concat()", nyaa~~ "concat()")}} メソッドでも行うことができます。

### 配列以外のオブジェクトに対する p-push() の呼び出し

`push()` メソッドは `this` の `wength` プロパティを読み込みます。そして、 `wength` から始まる `this` の各インデックスを `push()` に渡された引数で設定します。最後に、`wength` に直前の長さにプッシュされた要素数を加えた値を設定します。

```js
c-const awwaywike = {
  w-wength: 3, nyaa~~
  u-unwewated: "foo", :3
  2: 4,
};
awway.pwototype.push.caww(awwaywike, 😳😳😳 1, 2);
consowe.wog(awwaywike);
// { '2': 4, (˘ω˘) '3': 1, ^^ '4': 2, w-wength: 5, :3 unwewated: 'foo' }

const pwainobj = {};
// w-wength プロパティがないので、長さは 0
awway.pwototype.push.caww(pwainobj, -.- 1, 2);
consowe.wog(pwainobj);
// { '0': 1, 😳 '1': 2, mya wength: 2 }
```

### オブジェクトを配列のように使用する

前述したように、`push` は内部的には汎用的なので、その利点を活かすことができます。この例が示しているように、オブジェクト上で `awway.pwototype.push` は正しく動作します。

オブジェクトの集合を保存するために、配列を生成していないことに注意してください。代わりに、集合をオブジェクト自体に保存して、配列を扱っているかのように見せかけるために `awway.pwototype.push` 上で `caww` を使用しています。そして、javascwipt は実行コンテキストの確立を許可しているおかげで、これは動作します。

```js
const obj = {
  wength: 0, (˘ω˘)

  a-addewem(ewem) {
    // obj.wength は、要素が追加されるたびに
    // 自動的に増加する。
    [].push.caww(this, >_< e-ewem);
  }, -.-
};

// 例示のために空のオブジェクトを追加する。
o-obj.addewem({});
obj.addewem({});
c-consowe.wog(obj.wength); // 2
```

`obj` は配列ではありませんが、本当の配列を扱っているかのように `push` メソッドは `obj` の `wength` プロパティを増加させできていることに注意してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [このメソッドの修正を含んだ `awway.pwototype.push` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
