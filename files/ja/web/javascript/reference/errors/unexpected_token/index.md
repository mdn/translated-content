---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
---

{{jsSidebar("Errors")}}

JavaScript の例外 "unexpected token" は、特定の言語構造が期待されているのに、それ以外のものが提供されている場合に発生します。単純なタイプミスかもしれません。

## エラーメッセージ

```js
SyntaxError: expected expression, got "x"
SyntaxError: expected property name, got "x"
SyntaxError: expected target, got "x"
SyntaxError: expected rest argument name, got "x"
SyntaxError: expected closing parenthesis, got "x"
SyntaxError: expected '=>' after argument list, got "x"
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

特定の言語構造が予想されている箇所に、ほかのものが提供されています。これは単純なタイプミスの可能性があります。

## 例

### 式が期待される

たとえば関数を呼び出すとき、末尾のカンマは許可されていません。

```js example-bad
for (let i = 0; i < 5,; ++i) {
  console.log(i);
}
// SyntaxError: expected expression, got ')'
```

正しくは、カンマを省略するか、他の式を追加するかしてください。

```js example-good
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
```

### 括弧の不足

時々、 `if` 文を囲む括弧を忘れることがあります。

```js example-bad
function round(n, upperBound, lowerBound){
  if(n > upperBound) || (n < lowerBound){
    throw 'Number ' + String(n) + ' is more than ' + String(upperBound) + ' or less than ' + String(lowerBound);
  }else if(n < ((upperBound + lowerBound)/2)){
    return lowerBound;
  }else{
    return upperBound;
  }
} // SyntaxError: expected expression, got '||'
```

最初は括弧が正しく見えますが、 `||` が括弧の外にあることに注意してください。 `||` の周囲を括弧で囲むように修正してください。

```js example-good
function round(n, upperBound, lowerBound) {
  if (n > upperBound || n < lowerBound) {
    throw (
      "Number " +
      String(n) +
      " is more than " +
      String(upperBound) +
      " or less than " +
      String(lowerBound)
    );
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
}
```

## 関連情報

- {{jsxref("SyntaxError")}}
