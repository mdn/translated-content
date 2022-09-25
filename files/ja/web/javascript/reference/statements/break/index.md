---
title: break
slug: Web/JavaScript/Reference/Statements/break
---

{{jsSidebar("Statements")}}

**`break` 文**は現在のループや {{jsxref("Statements/switch", "switch")}} 文や{{jsxref("Statements/label", "ラベル", "", 1)}}文を中断し、中断した文の次の文にプログラムの制御を移します。

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## 構文

```
break [label];
```

- `label` {{optional_inline}}
  - : 中断する文のラベルに関連付けられた識別子。中断する文がループでも {{jsxref("Statements/switch", "switch")}} でもない場合、ラベルは必須です。

## 解説

`break` 文は、オプションでラベルを指定して、ラベル付き文の外にプログラムを脱出させることができます。 `break` 文は参照されるラベルの内側にある必要があります。ラベルはあらゆる{{jsxref("Statements/block", "ブロック", "", 1)}}文に付けることができます。ループ文の前である必要はありません。

`break` 文は、その後にラベルがあるかどうかに関わらず、 `break` 文で脱出しようとする現在のループや switch やラベル付き文の中に含まれる関数の本体の中で使用することはできません。

## 例

### while ループにおける break

次の関数には `i` が `3` の時に {{jsxref("Statements/while", "while")}} 文を中断する `break` 文があるので、`3 * x` の値を返します。

```js
function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
```

### switch 文における break

次のコードには、一致する case と対応するコードが実行された後で {{jsxref("Statements/switch", "switch")}} 文を終了するための `break` があります。

```js
const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}
```

### ラベル付きブロックにおける break

次のコードは、ラベル付きブロックで `break` 文を使っています。 `break` 文は、それを参照するラベル付き文の内側になければなりません。 `inner_block` が `outer_block` の中にあることに注意してください。

```js
outer_block: {
  inner_block: {
    console.log('1');
    break outer_block; // inner_block および outer_block の両方から抜けます
    console.log(':-('); // スキップされる
  }
  console.log('2'); // スキップされる
}
```

### ラベル付きブロックにおける break でエラーが発生するもの

次のコードもラベル付きブロックで `break` 文を使っていますが、 `break` 文が `block_1` の内側にあるにもかかわらず `block_2` を参照しているので、 `SyntaxError` が発生します。 `break` は、参照先ラベルの内側になければなりません。

```js
block_1: {
  console.log('1');
  break block_2; // SyntaxError: label not found
}

block_2: {
  console.log('2');
}
```

### 関数における break

以下のコード例でも `SyntaxError` が発生します。これは `break` をループの中にある関数や、 `break` 文で脱出しようとしているラベル付きブロックの中にある関数の中で使用しているためです。

```js
function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      (function() {
        break;
      })();
    }
    i += 1;
  }

return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
```

```js
block_1: {
  console.log('1');
  ( function() {
    break block_1; // SyntaxError: Undefined label 'block_1'
  })();
}
```

## 仕様書

| 仕様書                                                                                   |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-break-statement', 'Break statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.break")}}

## 関連情報

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "ラベル", "", 1)}}
- {{jsxref("Statements/switch", "switch")}}
