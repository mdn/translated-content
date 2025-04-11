---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
l10n:
  sourceCommit: 8c4bb8752201d9eee9ea7c189774db0f73f4efa1
---

{{jsSidebar("Errors")}}

JavaScript の例外 "unexpected token" は、パーサーが指定の位置で認識できるトークンを読み取れず、プログラムの構造を理解できない場合に発生します。単純なタイプミスかもしれません。

## エラーメッセージ

```plain
SyntaxError: Unexpected token ';' (V8 ベース)
SyntaxError: Unexpected identifier 'x' (V8 ベース)
SyntaxError: Unexpected number (V8 ベース)
SyntaxError: Unexpected string (V8 ベース)
SyntaxError: Unexpected regular expression (V8 ベース)
SyntaxError: Unexpected template string (V8 ベース)

SyntaxError: unexpected token: identifier (Firefox)
SyntaxError: expected expression, got "x" (Firefox)
SyntaxError: expected property name, got "x" (Firefox)
SyntaxError: expected target, got "x" (Firefox)
SyntaxError: expected meta, got "x" (Firefox)
SyntaxError: expected rest argument name, got "x" (Firefox)
SyntaxError: expected closing parenthesis, got "x" (Firefox)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

特定の言語構造が予想されている箇所に、ほかのものが提供されていたためです。これは単純なタイプミスの可能性があります。

## 例

### 式が期待される

たとえば関数を呼び出すとき、末尾のカンマは許可されていません。

```js-nolint example-bad
for (let i = 0; i < 5,; ++i) {
  console.log(i);
}
// 未捕捉の SyntaxError: expected expression, got ';'
```

カンマを省略するか、他の式を追加するかして修正してください。

```js example-good
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
```

### 括弧の不足

時々、 `if` 文を囲む括弧を忘れることがあります。

```js-nolint example-bad
function round(n, upperBound, lowerBound) {
if (n > upperBound) || (n < lowerBound) { // Missing parentheses here!
    throw new Error(`Number ${n} is more than ${upperBound} or less than ${lowerBound}`);
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
} // SyntaxError: expected expression, got '||'
```

最初は括弧が正しく見えますが、 `||` が括弧の外にあることに注意してください。 `||` の周囲を括弧で囲むように修正してください。

```js-nolint example-good
function round(n, upperBound, lowerBound) {
  if ((n > upperBound) || (n < lowerBound)) {
    throw new Error(
      `Number ${n} is more than ${upperBound} or less than ${lowerBound}`,
    );
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
}
```

### さらに上の文法エラーにより意味が混乱する

エラーの原因がエラーが発生した場所のすぐ近くにある構造的な問題である場合もありますので、潜在的なエラーがないか、全体をくまなく確認する必要があります。例えば、オブジェクトのメソッドを宣言しようとしたのに、プロパティとして宣言してしまった場合などです。

```js-nolint example-bad
const MyComponent = {
  mounted: {
    document.getElementById("app").classList.add("loaded");
  }
}
```

`document` の後に `.` があるのは予期しないものです。 JavaScriptは、 `{}` を関数本体ではなくオブジェクトリテラルとして解析するため、 `:` を期待します。 `mounted` を関数として宣言することで、この問題は解決します。

```js-nolint example-good
const MyComponent = {
  mounted() {
    document.getElementById("app").classList.add("loaded");
  }
}
```

## 関連情報

- {{jsxref("SyntaxError")}}
