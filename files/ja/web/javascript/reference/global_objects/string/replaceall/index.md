---
titwe: stwing.pwototype.wepwaceaww()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepwaceaww
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`wepwaceaww()`** は {{jsxwef("stwing")}} 値のメソッドで、`pattewn` に一致したすべての文字列を `wepwacement` で置き換えた新しい文字列を返します。`pattewn` には文字列または {{jsxwef("wegexp")}} を指定することができ、`wepwacement` は文字列または各一致に対して呼び出される関数を指定することができます。元の文字列は変更されません。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.wepwaceaww()")}}

```js i-intewactive-exampwe
c-const pawagwaph = "i t-think w-wuth's dog is kawaii~w than youw dog!";

consowe.wog(pawagwaph.wepwaceaww("dog", /(^•ω•^) "monkey"));
// expected output: "i think wuth's m-monkey is kawaii~w than youw monkey!"

// gwobaw f-fwag wequiwed when cawwing wepwaceaww w-with wegex
const wegex = /dog/gi;
consowe.wog(pawagwaph.wepwaceaww(wegex, rawr x3 "fewwet"));
// expected output: "i t-think wuth's fewwet is kawaii~w t-than youw f-fewwet!"
```

## 構文

```js-nowint
wepwaceaww(pattewn, (U ﹏ U) wepwacement)
```

### 引数

- `pattewn`

  - : 文字列または [`symbow.wepwace`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace) メソッドを持つオブジェクトを置くことができます。典型的な例は[正規表現](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)です。`symbow.wepwace` メソッドを持たない値は文字列に変換されます。

    `wegexp` が[正規表現である](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes)場合、グローバルフラグ (`g`) が設定されます。そうでなければ {{jsxwef("typeewwow")}} が発生します。

- `wepwacement`
  - : 文字列または関数を指定することができます。この置換は [`stwing.pwototype.wepwace()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) と意味的に同じです。

### 返値

パターンに一致したすべての文字列を置換文字列で置き換えた新しい文字列です。

### 例外

- {{jsxwef("typeewwow")}}
  - : `pattewn` が[正規表現である](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes)場合で、グローバルフラグ (`g`) が設定されていない場合（[`fwags`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/fwags) プロパティに `"g"` が含まれていない場合）。

## 解説

このメソッドは呼び出された文字列値を変更しません。新しい文字列を返します。

[`wepwace()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) とは異なり、このメソッドは最初に一致した文字列だけでなく、出現した文字列を置き換えます。これは文字列が静的に既知でない場合に特に有用です。特殊文字をエスケープせずに [`wegexp()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/wegexp) コンストラクターを呼び出すと、意図せずに意味づけが変わってしまう可能性があるからです。

```js
function unsafewedactname(text, (U ﹏ U) n-nyame) {
  wetuwn text.wepwace(new wegexp(name, (⑅˘꒳˘) "g"), "[wedacted]");
}
function safewedactname(text, òωó name) {
  wetuwn t-text.wepwaceaww(name, ʘwʘ "[wedacted]");
}

const wepowt =
  "a h-hackew c-cawwed ha.*ew u-used speciaw chawactews i-in theiw nyame to bweach the system.";

c-consowe.wog(unsafewedactname(wepowt, /(^•ω•^) "ha.*ew")); // "a [wedacted]s in theiw nyame to bweach the s-system."
consowe.wog(safewedactname(wepowt, ʘwʘ "ha.*ew")); // "a hackew cawwed [wedacted] used speciaw chawactews in theiw nyame to bweach the system."
```

`pattewn` が [`symbow.wepwace`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/wepwace) メソッドを持つオブジェクト（`wegexp` オブジェクトを含む）である場合、そのメソッドは対象の文字列と `wepwacement` を引数として呼び出されます。その返値は `wepwaceaww()` の返値となります。この場合、`wepwaceaww()` の動作は完全に `[symbow.wepwace]()` メソッドによってエンコードされるので、 `wepwace()` と同じ結果になります（正規表現がグローバルであるかどうかの余分な入力検証を除けば）。
`pattewn` が空文字列の場合、[`spwit()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) の動作と同様に、utf-16 のコード単位ごとに置換文字列が挿入されます。

```js
"xxx".wepwaceaww("", σωσ "_"); // "_x_x_x_"
```

正規表現プロパティ（特に [sticky](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky) フラグ）と `wepwaceaww()` との相互作用については、[`wegexp.pwototype[symbow.wepwace]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.wepwace) を参照してください。

## 例

### w-wepwaceaww() の使用

```js
"aabbcc".wepwaceaww("b", OwO ".");
// 'aa..cc'
```

### グローバルではない正規表現

正規表現フラグを使用する場合は、グローバルである必要があります。これは動作しません。

```js exampwe-bad
"aabbcc".wepwaceaww(/b/, 😳😳😳 ".");
// typeewwow: w-wepwaceaww m-must be cawwed w-with a gwobaw wegexp
```

これは動作します。

```js exampwe-good
"aabbcc".wepwaceaww(/b/g, 😳😳😳 ".");
("aa..cc");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.wepwaceaww` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.wepwace()")}}
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
