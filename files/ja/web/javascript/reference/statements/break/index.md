---
title: break
slug: Web/JavaScript/Reference/Statements/break
l10n:
  sourceCommit: 57ae0014c67f339b9af6252a451ddd40735ed243
---

{{jsSidebar("Statements")}}

**`break`** 文は現在のループや {{jsxref("Statements/switch", "switch")}} 文を終了し、プログラムの制御を終了した文の次の文に移します。[ラベル付きの文](/ja/docs/Web/JavaScript/Reference/Statements/label)の中で使用された場合は、ラベル付きの文を飛び越えるためにも使われます。

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## 構文

```js-nolint
break;
break label;
```

- `label` {{optional_inline}}
  - : 終了する文のラベルに関連付けられた識別子。`break` 文がループや {{jsxref("Statements/switch", "switch")}} の中に入れ子になっていない場合は、ラベル識別子が必要です。

## 解説

`break;` に遭遇すると、プログラムは最も内側の `switch` または[ループ](/ja/docs/Web/JavaScript/Reference/Statements#反復処理)文から抜け出し、その次の文から実行を続けます。

`break label;` に遭遇すると、プログラムは `label` でラベル付けされた文から抜け出し、その次の文の実行を続けます。`break` 文は参照されるラベルの内側にある必要があります。ラベルはあらゆる{{jsxref("Statements/block", "ブロック", "", 1)}}文に付けることができます。ループ文の前である必要はありません。

`break` 文は、その後にラベルがあるかどうかに関わらず、スクリプト、モジュール、関数の本体、[静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)のそれぞれ最上位で使用することはできません。その関数やクラスがさらにループの中に含まれていた場合でもです。

## 例

### while ループにおける break

次の関数には `break` 文があり、`i` が `3` の時に {{jsxref("Statements/while", "while")}} 文を終了させるので、`3 * x` の値を返します。

```js
function testBreak(x) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
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

次のコードは、ラベル付きブロックで `break` 文を使っています。`break outerBlock` を使用すると、制御は `outerBlock` としてマークされたブロック構文の末尾に移動します。

```js
outerBlock: {
  innerBlock: {
    console.log("1");
    break outerBlock; // innerBlock および outerBlock の両方から抜けます
    console.log(":-("); // スキップされる
  }
  console.log("2"); // スキップされる
}
```

### 構文違反の break 文

`break` 文は参照先のラベルの中になければなりません。次のコードもラベル付きブロックで `break` 文を使っていますが、`break` 文が `block2` を参照しているにもかかわらず `block2` の中にないので、構文エラーが発生します。

```js example-bad
block1: {
  console.log("1");
  break block2; // SyntaxError: label not found
}

block2: {
  console.log("2");
}
```

構文エラーは、次のコードのように `break` がループの中や、`break` 文によって脱出しようとしているラベル付きブロックの中で入れ子になっている関数で使われた場合にも、構文エラーが発生します。

```js example-bad
function testBreak(x) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      (() => {
        break;
      })();
    }
    i += 1;
  }

  return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
```

```js example-bad
block1: {
  console.log("1");
  (() => {
    break block1; // SyntaxError: Undefined label 'block1'
  })();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "ラベル", "", 1)}}
- {{jsxref("Statements/switch", "switch")}}
