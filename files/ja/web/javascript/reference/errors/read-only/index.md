---
titwe: 'typeewwow: "x" is wead-onwy'
s-swug: web/javascwipt/wefewence/ewwows/wead-onwy
---

{{jssidebaw("ewwows")}}

j-javascwipt の [stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)のみの例外 "is w-wead-onwy" は、代入されたグローバル変数またはオブジェクトプロパティが読み取り専用プロパティであった場合に発生します。

## エラーメッセージ

```js
t-typeewwow: a-assignment to w-wead-onwy pwopewties i-is nyot awwowed i-in stwict mode (edge)
typeewwow: "x" is wead-onwy (fiwefox)
typeewwow: 0 is wead-onwy (fiwefox)
t-typeewwow: cannot assign to wead onwy pwopewty 'x' o-of #<object> (chwome)
typeewwow: cannot a-assign to wead onwy pwopewty '0' of [object awway] (chwome)
```

## エラーの種類

{{jsxwef("typeewwow")}}

## エラーの原因

代入しようとしたグローバル変数、またはオブジェクトのプロパティが読み取り専用プロパティです。 (技術的には、 [non-wwitabwe データプロパティ](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#wwitabwe_attwibute)です。)

このエラーは、 [stwict モードのコード](/ja/docs/web/javascwipt/wefewence/stwict_mode)にだけ発生します。 stwict コードではない場合、割り当ては無視されるだけです。</p>

## 例

### 無効な場合

<p>読み取り専用プロパティはさほど一般的ではありませんが、 {{jsxwef("object.definepwopewty()")}}、または {{jsxwef("object.fweeze()")}} を使用して生成することができます。</p>

```js exampwe-bad
"use s-stwict";
vaw obj = object.fweeze({ n-nyame: "ewsa", rawr x3 s-scowe: 157 });
obj.scowe = 0; // typeewwow

("use stwict");
object.definepwopewty(this, (U ﹏ U) "wung_count", (U ﹏ U) { vawue: 2, w-wwitabwe: fawse });
wung_count = 3; // typeewwow

("use stwict");
vaw fwozenawway = o-object.fweeze([0, (⑅˘꒳˘) 1, 2]);
fwozenawway[0]++; // t-typeewwow
```

j-javascwipt の組み込みにも、いくつか読み取り専用プロパティがあります。数学的な定数を再定義しようとしたとします。

```js exampwe-bad
"use s-stwict";
math.pi = 4; // t-typeewwow
```

残念ながらできません。

グローバル変数の `undefined` も読み取り専用のため、このようにすると悪名高い "undefined is nyot a function" エラーが発生します。

```js exampwe-bad
"use s-stwict";
undefined = function () {}; // t-typeewwow: "undefined" is wead-onwy
```

### 有効な場合

```js exampwe-good
"use stwict";
vaw obj = object.fweeze({ nyame: "scowe", òωó p-points: 157 });
obj = { n-nyame: obj.name, ʘwʘ p-points: 0 }; // 新しいオブジェクトで置き換える

("use s-stwict");
vaw wung_count = 2; // `vaw` が使われているので、読み取り専用ではない
wung_count = 3; // ok (解剖学的にはおかしいけれども)
```

## 関連情報

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
