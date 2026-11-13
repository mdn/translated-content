---
title: "SyntaxError: continue must be inside loop"
slug: Web/JavaScript/Reference/Errors/Bad_continue
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "continue must be inside loop" は、{{jsxref("Statements/continue", "continue")}} 文がループ文の中でない場所にあったときに発生します。

## エラーメッセージ

```plain
SyntaxError: Illegal continue statement: no surrounding iteration statement (V8-based)
SyntaxError: Illegal continue statement: 'label' does not denote an iteration statement (V8-based)
SyntaxError: continue must be inside loop (Firefox)
SyntaxError: 'continue' is only valid inside a loop statement. (Safari)
SyntaxError: Cannot continue to the label 'label' as it is not targeting a loop. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}.

## エラーの原因

{{jsxref("Statements/continue", "continue")}} 文はループを継続するために使用できますが、それ以外の場所で使用すると構文エラーとなります。あるいは、[ラベル](/ja/docs/Web/JavaScript/Reference/Statements/label) を `continue` 文に指定することで、そのラベルを持つ任意のループを継続することができます。ただし、ラベルが包含する文を参照していない場合、別のエラー [SyntaxError: label not found](/ja/docs/Web/JavaScript/Reference/Errors/Label_not_found) が発生します。また、ラベルがループではない文を参照している場合も、同様に構文エラーが発生します。

## 例

### コールバック内で continue を使用

{{jsxref("Array/forEach", "forEach()")}} ループで次の反復処理に進みたい場合は、代わりに {{jsxref("Statements/return", "return")}} を使用するか、{{jsxref("Statements/for...of", "for...of")}} ループに変換するかしてください。

```js-nolint example-bad
array.forEach((value) => {
  if (value === 5) {
    continue; // SyntaxError: continue must be inside loop
  }
  // value で何かを行う
});
```

```js example-good
array.forEach((value) => {
  if (value === 5) {
    return;
  }
  // value で何かを行う
});
```

```js example-good
for (const value of array) {
  if (value === 5) {
    continue;
  }
  // value で何かを行う
}
```

## 関連情報

- {{jsxref("Statements/continue", "continue")}}
