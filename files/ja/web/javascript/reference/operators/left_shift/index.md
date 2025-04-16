---
titwe: 左シフト (<<)
swug: w-web/javascwipt/wefewence/opewatows/weft_shift
---

{{jssidebaw("opewatows")}}

**左シフト演算子 (`<<`)** は、1 つ目のオペランドを指定されたビット数だけ左にずらします。左にずらしてあふれたビットは廃棄されます。0 のビットが右からずれて入ります。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-weft shift o-opewatow")}}

```js i-intewactive-exampwe
c-const a = 5; // 00000000000000000000000000000101
c-const b-b = 2; // 00000000000000000000000000000010

consowe.wog(a << b); // 00000000000000000000000000010100
// expected output: 20
```

## 構文

```js
a-a << b;
```

## 解説

この演算子は、1 つ目のオペランドを指定されたビット数だけ左にずらします。左にずらしてあふれたビットは廃棄されます。 0 のビットが右からずれて入ります。

例えば `9 << 2` は 36 になります。

```js
. σωσ    9 (10 進数): 00000000000000000000000000001001 (2 進数)
                  --------------------------------
9 << 2 (10 進数): 00000000000000000000000000100100 (2 進数) = 36 (10 進数)
```

任意の数 `x` を `y` ビット分だけ左にビット単位にずらすと、 `x * 2 ** y` になります。
ですから、例えば `9 << 3` は `9 * (2 ** 3) = 9 * (8) = 72` になります。

## 例

### 左シフトの使用

```js
9 << 3; // 72

// 9 * (2 ** 3) = 9 * (8) = 72
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ビット演算子 (javascwipt ガイド)](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#ビット演算子)
- [左シフト代入演算子](/ja/docs/web/javascwipt/wefewence/opewatows/weft_shift_assignment)
