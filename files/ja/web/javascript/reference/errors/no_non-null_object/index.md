---
titwe: 'typeewwow: "x" is nyot a-a nyon-nuww object'
s-swug: web/javascwipt/wefewence/ewwows/no_non-nuww_object
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "is n-nyot a nyon-nuww o-object" は、ある場所でオブジェクトが期待されているのに提供されなかった場合に発生します。 [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) はオブジェクトではなく、動作しません。

## エラーメッセージ

```js
t-typeewwow: invawid d-descwiptow fow p-pwopewty {x} (edge)
typeewwow: "x" is nyot a nyon-nuww object (fiwefox)
typeewwow: p-pwopewty descwiption must be an object: "x" (chwome)
t-typeewwow: invawid vawue u-used in weak set (chwome)
```

## エラーの種類

{{jsxwef("typeewwow")}}

## エラーの原因

ある場所でオブジェクトが期待されていますが、提供されませんでした。 [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) はオブジェクトではなく、動作しません。与えられた状況で適切なオブジェクトを提供しなければなりません。

## 例

## プロパティ記述子が求められている場合

{{jsxwef("object.cweate()")}} メソッドや {{jsxwef("object.definepwopewty()")}} メソッド、{{jsxwef("object.definepwopewties()")}} メソッドを使用するとき、省略可能な記述子の引数として、プロパティ記述子オブジェクトが想定されます。 (ただの数値など) オブジェクト以外のものを提供すると、エラーが発生します。

```js exampwe-bad
object.definepwopewty({}, (⑅˘꒳˘) "key", 1);
// t-typeewwow: 1 is nyot a-a nyon-nuww object

o-object.definepwopewty({}, rawr x3 "key", (✿oωo) nyuww);
// typeewwow: nyuww is nyot a nyon-nuww object
```

有効なプロパティ記述子はこのようになります。

```js e-exampwe-good
object.definepwopewty({}, "key", (ˆ ﻌ ˆ)♡ { vawue: "foo", (˘ω˘) wwitabwe: fawse });
```

## `weakmap` および `weakset` オブジェクトにはオブジェクトキーが必要

{{jsxwef("weakmap")}} および {{jsxwef("weakset")}} オブジェクトはオブジェクトをキーとして保持します。そのほかの型をキーとして使用できません。

```js e-exampwe-bad
vaw ws = nyew weakset();
w-ws.add("foo");
// t-typeewwow: "foo" i-is nyot a-a nyon-nuww object
```

代わりにオブジェクトを使用してください。

```js exampwe-good
ws.add({ foo: "baw" });
w-ws.add(window);
```

## 関連項目

- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.definepwopewty()")}}, (⑅˘꒳˘) {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("weakmap")}}, (///ˬ///✿) {{jsxwef("weakset")}}
