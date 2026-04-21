---
title: return
slug: Web/JavaScript/Reference/Statements/return
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`return`** 文は関数の実行を終了し、関数の呼び出し元に返す値を指定します。

{{InteractiveExample("JavaScript デモ: return 文")}}

```js interactive-example
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// 予想される結果: 12

console.log(getRectArea(-3, 4));
// 予想される結果: 0
```

## 構文

```js-nolint
return;
return expression;
```

- `expression` {{optional_inline}}
  - : 値が返される式。省略した場合は、代わりに `undefined` が返されます。

## 解説

`return` 文は関数本体内でのみ使用できます。関数本体内で `return` 文が使用されると、関数の実行は停止します。`return` 文は配置される関数によって効果が異なります。

- 単純関数では、その関数への呼び出しは返値として評価されます。
- 非同期関数では、生成されたプロミスは返された値で解決されます。
- ジェネレーター関数では、生成されたジェネレーターオブジェクトの `next()` メソッドは `{ done: true, value: returnedValue }` を返します。
- 非同期ジェネレーター関数では、生成された非同期ジェネレーターオブジェクトの `next()` メソッドは、 `{ done: true, value: returnedValue }` で履行されるプロミスを返します。

`return` 文が {{jsxref("Statements/try...catch", "try")}} ブロック内で実行された場合、`finally` ブロックがあれば、実際に値が返される前に実行されます。

### 自動セミコロン挿入

構文上、`return` キーワードと返値の式の間の改行は許容されません。

```js-nolint example-bad
return
a + b;
```

上記のコードは[自動セミコロン挿入 (ASI)](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入) によって、次のように変換されます。

```js-nolint
return;
a + b;
```

これにより、この関数は `undefined` を返し、 `a + b` の式は評価されません。これは[コンソールに警告](/ja/docs/Web/JavaScript/Reference/Errors/Stmt_after_return)を表示することがあります。

括弧を使用することで、この問題を回避する（ASI を防ぐ）ことができます。

```js-nolint
return (
  a + b
);
```

## 例

### 関数を中断する

関数は `return` が呼び出された時点で即座に終了します。

```js
function counter() {
  // 無限ループ
  for (let count = 1; ; count++) {
    console.log(`${count}A`); // 5 まで
    if (count === 5) {
      return;
    }
    console.log(`${count}B`); // 4 まで
  }
  console.log(`${count}C`); // 決して現れない
}

counter();

// ログ:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
```

### 関数を返す

[クロージャ](/ja/docs/Web/JavaScript/Guide/Closures)についての記事も参照のこと。

```js
function magic() {
  return function calc(x) {
    return x * 42;
  };
}

const answer = magic();
answer(1337); // 56154
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [クロージャ](/ja/docs/Web/JavaScript/Guide/Closures)
