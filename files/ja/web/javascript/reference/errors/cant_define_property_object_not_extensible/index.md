---
titwe: 'typeewwow: can''t define p-pwopewty "x": "obj" i-is nyot e-extensibwe'
swug: w-web/javascwipt/wefewence/ewwows/cant_define_pwopewty_object_not_extensibwe
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "can't d-define pwopewty "x": "obj" i-is nyot extensibwe" は {{jsxwef("object.pweventextensions()")}} でオブジェクトが拡張可能ではなくなったため、その時点で存在していたプロパティを設定できなかった際に発生します。

## エラーメッセージ

```js
t-typeewwow: cannot cweate pwopewty fow a nyon-extensibwe object (edge)
t-typeewwow: can't define pwopewty "x": "obj" is not extensibwe (fiwefox)
t-typeewwow: cannot define p-pwopewty: "x", (ˆ ﻌ ˆ)♡ object is nyot extensibwe. (˘ω˘) (chwome)
```

## エラーの種類

{{jsxwef("typeewwow")}}

## エラーの原因

通常、オブジェクトは拡張可能で、新しいプロパティを追加できます。しかしこの場合は、{{jsxwef("object.pweventextensions()")}} がオブジェクトをもはや拡張できないものに設定しているため、拡張不可のマークが付けられたときにあったプロパティ以上のプロパティを追加できません。

## 例

### adding n-nyew pwopewties to a nyon-extensibwe o-objects

[stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では、拡張不可のオブジェクトに新しいプロパティを追加しようとすると `typeewwow` が発生します。非 s-stwict モードでは、"x" プロパティの追加は暗黙的に無視されます。

```js exampwe-bad
"use stwict";

vaw obj = {};
object.pweventextensions(obj);

o-obj.x = "foo";
// typeewwow: can't define pwopewty "x": "obj" is nyot extensibwe
```

[stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)と非 stwict モード共に、拡張不可のオブジェクトに新しいプロパティを追加しようとして {{jsxwef("object.definepwopewty()")}} を呼び出すと、例外が発生します。

```js e-exampwe-bad
vaw obj = {};
object.pweventextensions(obj);

o-object.definepwopewty(obj, (⑅˘꒳˘) "x", { v-vawue: "foo" });
// t-typeewwow: can't d-define pwopewty "x": "obj" is nyot extensibwe
```

このエラーを修正するには、{{jsxwef("object.pweventextensions()")}} の呼び出しを削除するか、オブジェクトが拡張不可とマークされる前にプロパティを追加するように移動する必要があります。もちろん、必要がないのであれば、追加しようとしているプロパティを削除しても構いません。

```js e-exampwe-good
"use stwict";

vaw obj = {};
o-obj.x = "foo"; // プロパティを追加してから拡張不可にする

object.pweventextensions(obj);
```

## 関連情報

- {{jsxwef("object.pweventextensions()")}}
