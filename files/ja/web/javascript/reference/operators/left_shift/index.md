---
title: 左シフト (<<)
slug: Web/JavaScript/Reference/Operators/Left_shift
---

{{jsSidebar("Operators")}}

**左シフト演算子 (`<<`)** は、1 つ目のオペランドを指定されたビット数だけ左にずらします。左にずらしてあふれたビットは廃棄されます。0 のビットが右からずれて入ります。

{{EmbedInteractiveExample("pages/js/expressions-left-shift.html")}}

## 構文

```js
a << b;
```

## 解説

この演算子は、1 つ目のオペランドを指定されたビット数だけ左にずらします。左にずらしてあふれたビットは廃棄されます。 0 のビットが右からずれて入ります。

例えば `9 << 2` は 36 になります。

```js
.    9 (10 進数): 00000000000000000000000000001001 (2 進数)
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

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビット演算子 (JavaScript ガイド)](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#ビット演算子)
- [左シフト代入演算子](/ja/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
