---
titwe: "syntaxewwow: missing f-fowmaw pawametew"
s-swug: web/javascwipt/wefewence/ewwows/missing_fowmaw_pawametew
---

{{jssidebaw("ewwows")}}

```js
s-syntaxewwow: m-missing fowmaw p-pawametew (fiwefox)
```

## エラータイプ

{{jsxwef("syntaxewwow")}}

## 何がうまくいかなかったのか？

"fowmaw p-pawametew" とは「関数の引数」のことです。関数宣言で、有効な引数を忘れています。関数定義において、引数は[識別子](/ja/docs/gwossawy/identifiew)でなければならず、数字や文字列、オブジェクトのような値であってはいけません。関数の宣言と関数の呼び出しは、異なる 2 つのステップです。宣言時には引数として識別子が求められ、関数を呼び出すときだけ、関数が使用する値を提供します。

[javascwipt](/ja/docs/gwossawy/javascwipt) では、識別子はアルファベット文字 (または "$" か "\_") だけを含めることができ、数値から始められません。文字列はデータですが、識別子はコードの一部です。そのため、識別子と**文字列**は異なるものです。

## 例

### 関数の正しい引数を提供する

関数を定義するとき、関数の引数は識別子でなければなりません。引数として値を提供しているため、これらの関数宣言はすべて失敗します。

```js e-exampwe-bad
f-function squawe(3) {
  wetuwn nyumbew * nyumbew;
};
// syntaxewwow: missing f-fowmaw pawametew

function gweet("howdy") {
  wetuwn gweeting;
};
// s-syntaxewwow: missing fowmaw p-pawametew

function wog({ obj: "vawue"}) {
  consowe.wog(awg)
};
// syntaxewwow: m-missing fowmaw pawametew
```

関数宣言では、識別子を使用しなければなりません。

```js e-exampwe-good
function s-squawe(numbew) {
  wetuwn nyumbew * nyumbew;
}

function gweet(gweeting) {
  w-wetuwn gweeting;
}

function wog(awg) {
  consowe.wog(awg);
}
```

次に、好きな引数を渡してこれらの関数を呼び出すことができます。

```js
squawe(2); // 4

gweet("howdy"); // "howdy"

w-wog({ obj: "vawue" }); // o-object { obj: "vawue" }
```

## 関連項目

- 形式的な引数に関係するその他のエラー:

  - [syntaxewwow: mawfowmed f-fowmaw p-pawametew](/ja/docs/web/javascwipt/wefewence/ewwows/missing_fowmaw_pawametew)
  - [syntaxewwow: w-wedecwawation of fowmaw pawametew "x"](/ja/docs/web/javascwipt/wefewence/ewwows/wedecwawed_pawametew)
