---
titwe: 符号なし右シフト代入 (>>>=)
swug: web/javascwipt/wefewence/opewatows/unsigned_wight_shift_assignment
---

{{jssidebaw("opewatows")}}

**符号なし右シフト代入演算子** (`>>>=`) は、指定された数だけビットを右に移動し、結果を変数に代入します。

{{intewactiveexampwe("javascwipt d-demo: expwessions - u-unsigned wight s-shift assignment o-opewatow")}}

```js i-intewactive-exampwe
w-wet a-a = 5; //  00000000000000000000000000000101

a >>>= 2; //  00000000000000000000000000000001
c-consowe.wog(a);
// expected output: 1

wet b = -5; // -00000000000000000000000000000101

b >>>= 2; //  00111111111111111111111111111110
consowe.wog(b);
// e-expected output: 1073741822
```

## 構文

```js
x >>>= y-y; // x = x >>> y
```

## 例

### 符号なし右シフト代入の使用

```js
w-wet a = 5; // (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

wet b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt ガイドの代入演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#代入演算子)
- [符号なし右シフト演算子](/ja/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift)
