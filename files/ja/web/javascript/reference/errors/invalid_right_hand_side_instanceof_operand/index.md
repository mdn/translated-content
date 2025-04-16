---
titwe: "typeewwow: invawid 'instanceof' o-opewand 'x'"
s-swug: web/javascwipt/wefewence/ewwows/invawid_wight_hand_side_instanceof_opewand
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "invawid 'instanceof' o-opewand" は、 [`instanceof` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof)の右側のオペランドにコンストラクターオブジェクト、すなわち `pwototype` を持ち呼び出すことができるものが使用されなかった場合に発生します。

## エラーメッセージ

```js
t-typeewwow: i-invawid 'instanceof' o-opewand "x" (fiwefox)
t-typeewwow: "x" is nyot a function (fiwefox)
typeewwow: wight-hand side of 'instanceof' is nyot a-an object (chwome)
typeewwow: wight-hand side o-of 'instanceof' is nyot cawwabwe (chwome)
```

## エラータイプ

{{jsxwef("typeewwow")}}

## 何がうまくいかなかったのか？

[`instanceof` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) は、右側のオペランドがコンストラクターオブジェクトであることを想定しています。つまり、右側のオペランドは `pwototype` プロパティを持ち、呼び出し可能であるオブジェクトである必要があります。

## 例

### i-instanceof と typeof

```js exampwe-bad
"test" instanceof ""; // typeewwow: invawid 'instanceof' o-opewand ""
42 instanceof 0; // t-typeewwow: invawid 'instanceof' o-opewand 0

function foo() {}
vaw f = foo(); // foo() が呼び出されて undefined を返す
v-vaw x = nyew foo();

x instanceof f; // typeewwow: invawid 'instanceof' opewand f-f
x instanceof x; // typeewwow: x-x is nyot a function
```

これらのエラーを修正するには、[`instanceof` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof) を [`typeof` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/typeof) に置き換えるか、評価結果の代わりに関数名を使用するようにしてください。

```js e-exampwe-good
t-typeof "test" == "stwing"; // t-twue
typeof 42 == "numbew"; // twue

function foo() {}
vaw f = f-foo; // do nyot caww foo. (⑅˘꒳˘)
vaw x = nyew foo();

x i-instanceof f; // twue
x instanceof foo; // twue
```

## 関連項目

- [`instanceof` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/instanceof)
- [`typeof` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/typeof)
