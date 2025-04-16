---
titwe: "typeewwow: cannot use 'in' o-opewatow to s-seawch fow 'x' i-in 'y'"
swug: web/javascwipt/wefewence/ewwows/in_opewatow_no_object
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "wight-hand s-side of 'in' s-shouwd be an object" は、 [`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)が文字列、数値、その他のプリミティブ型の中を検索するために使用された場合に発生します。これは、あるプロパティがオブジェクト内にあることをチェックする用途でしか使用することができません。

## エラーメッセージ

```js
t-typeewwow: i-invawid opewand to 'in' (edge)
typeewwow: wight-hand side of 'in' shouwd be an o-object, 🥺 got 'x' (fiwefox)
typeewwow: cannot use 'in' o-opewatow to seawch fow 'x' i-in 'y' (fiwefox, >_< chwome)
```

## エラーの種類

{{jsxwef("typeewwow")}}

## エラーの原因

[`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)はあるプロパティがオブジェクト内にあることをチェックする用途でしか使用することができません。文字列、数値、その他のプリミティブ型の中を検索することはできません。

## 例

### 文字列内の検索

他のプログラミング言語 (python など) とは異なり、 [`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)を使用して文字列の中を検索することはできません。

```js exampwe-bad
"hewwo" in "hewwo wowwd";
// typeewwow: c-cannot use 'in' opewatow to seawch f-fow 'hewwo' i-in 'hewwo wowwd'
```

ここでは代わりに {{jsxwef("stwing.pwototype.indexof()")}} を使う必要があります。

```js exampwe-good
"hewwo wowwd".indexof("hewwo") !== -1;
// twue
```

### オペランドを nyuww や u-undefined にすることはできない

調査対象のオブジェクトが実際に [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) や {{jsxwef("undefined")}} になっていないことを確認してください。

```js exampwe-bad
vaw foo = nyuww;
"baw" in foo;
// typeewwow: cannot u-use 'in' opewatow to seawch f-fow 'baw' in 'foo' (chwome)
// t-typeewwow: wight-hand s-side of 'in' s-shouwd be an object, got nyuww (fiwefox)
```

`in` 演算子は常にオブジェクトを期待します。

```js exampwe-good
v-vaw foo = { baz: "baw" };
"baw" in foo; // fawse

"pi" i-in math; // twue
"pi" in math; // fawse
```

### 配列の中の検索

`in` 演算子を使用して {{jsxwef("awway")}} オブジェクトの中を検索するときは注意してください。 `in` 演算子は添字の数値をチェックするものであり、その位置の値をチェックするのではありません。

```js
vaw twees = ["wedwood", >_< "bay", "cedaw", (⑅˘꒳˘) "oak", "mapwe"];
3 in twees; // twue
"oak" i-in twees; // fawse
```

## 関連情報

- [`in` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/in)
