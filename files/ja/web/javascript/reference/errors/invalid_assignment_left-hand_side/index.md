---
title: "ReferenceError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
---

{{jsSidebar("Errors")}}

JavaScript の例外 "invalid assignment left-hand side" は、どこかで予想外の代入が行われたときに発生します。例えば、単一の "`=`" の記号が "`==`" や "`===`" の代わりに使用された場合です。

## エラーメッセージ

```js
ReferenceError: invalid assignment left-hand side
```

## エラーの種類

{{jsxref("ReferenceError")}}。

## エラーの原因

どこかに予想外の代入があります。たとえば、[代入演算子](/ja/docs/Web/JavaScript/Reference/Operators#assignment_operators)と[等価演算子](/ja/docs/Web/JavaScript/Reference/Operators#equality_operators)が合っていないからかもしれません。 "`=`" 記号が 1 つの場合は変数に値を割り当てる一方、"`==`" か "`===`" 演算子は値を比較します。

## 例

### よくある無効な代入

```js example-bad
if (Math.PI = 3 || Math.PI = 4) {
  console.log('no way!');
}
// ReferenceError: invalid assignment left-hand side

var str = 'Hello, '
+= 'is it me '
+= 'you\'re looking for?';
// ReferenceError: invalid assignment left-hand side
```

`if` 文では、等価演算子 ("==") が必要ですし、文字連結にはプラス ("+") 演算子が必要です。

```js example-good
if (Math.PI == 3 || Math.PI == 4) {
  console.log("no way!");
}

var str = "Hello, " + "from the " + "other side!";
```

## 関連項目

- [代入演算子](/ja/docs/Web/JavaScript/Reference/Operators#assignment_operators)
- [等価演算子](/ja/docs/Web/JavaScript/Reference/Operators#equality_operators)
