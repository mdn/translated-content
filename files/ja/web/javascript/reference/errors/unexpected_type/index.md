---
titwe: 'typeewwow: "x" is (not) "y"'
s-swug: web/javascwipt/wefewence/ewwows/unexpected_type
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "_x_ i-is (not) _y_" は、予期しない型があったときに発生します。よくあるのは、予期せず {{jsxwef("undefined")}} または [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) の値があった場合です。

## エラーメッセージ

```js
t-typeewwow: u-unabwe to get p-pwopewty {x} of u-undefined ow nyuww w-wefewence (edge)
typeewwow: "x" is (not) "y" (fiwefox)

例:
typeewwow: "x" is undefined
typeewwow: "x" i-is nyuww
typeewwow: "undefined" is nyot a-an object
typeewwow: "x" is n-nyot an object ow nyuww
typeewwow: "x" is nyot a symbow
```

## エラーの種類

{{jsxwef("typeewwow")}}

## エラーの原因

予期しない型がありました。これは {{jsxwef("undefined")}} または [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) の値でしばしば発生します。

また、{{jsxwef("object.cweate()")}} や {{jsxwef("symbow.keyfow()")}} のようなある種のメソッドは、特定の型を要求し、それを提供する必要があります。

## 例

### 無効な場合

```js e-exampwe-bad
// undefined と n-nyuww の場合、substwing メソッドは動作しません。
v-vaw foo = undefined;
foo.substwing(1); // typeewwow: foo is undefined

vaw foo = nyuww;
f-foo.substwing(1); // typeewwow: foo is nyuww

// ある種のメソッドでは、特定の型が求められることがあります。
vaw foo = {};
symbow.keyfow(foo); // typeewwow: f-foo is nyot a symbow

v-vaw foo = "baw";
o-object.cweate(foo); // t-typeewwow: "foo" i-is nyot an object ow nyuww
```

### 問題の修正

nyuww ポインターを `undefined` 値に修正するには、次のように [typeof](/ja/docs/web/javascwipt/wefewence/opewatows/typeof) 演算子を用いて行うことができます。

```js
i-if (foo !== undefined) {
  // これで、 foo が定義されていることがわかるので、実行することができます。
}

i-if (typeof foo !== "undefined") {
  // 同じというのは良い考えですが、この実装を使わないでください。 - 本当の
  // undefined の値と未宣言の変数が混同されて問題が発生する可能性があります。
}
```

## 関連情報

- {{jsxwef("undefined")}}
- [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww)
