---
title: return
slug: Web/JavaScript/Reference/Statements/return
---

{{jsSidebar("Statements")}}

**`return` 文**は、関数の実行を終了して、関数の呼び出し元に返す値を指定します。

{{EmbedInteractiveExample("pages/js/statement-return.html")}}

## 構文

```
return [expression];
```

- `expression`
  - : 返す式。もし省略されたなら、`undefined` が代わりに返ります。

## 解説

関数内で `return` 文を呼び出すと、関数の実行が停止します。値が指定されていれば、その値を関数の呼び出し元に返します。例えば、以下の関数は引数 `x` が数値の場合、 `x` の平方を返します。

```js
function square(x) {
   return x * x;
}
var demo = square(3);
// demo will equal 9
```

値が省略された場合は `undefined` が代わりに返されます。

以下の return 文はすべて、関数の実行を中断します。

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

### 自動セミコロン挿入

`return` 文は[自動セミコロン挿入 (ASI)](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion) の影響を受けます。`return` キーワードと式の間に改行文字を置くことはできません。

```js
return
a + b;
```

は ASI によって以下のように変換されます。

```js
return;
a + b;
```

コンソールに "unreachable code after return statement" という警告が現れます。

> **メモ:** Firefox 40 以降では、 `return` 文の後に到達できないコードがある場合に、コンソールに警告が表示されます。

括弧を使用すると、この問題を防ぐ (ASI を抑止する) ことができます。

```js
return (
  a + b
);
```

## 例

### 関数を中断する

`return` を呼び出した時点で、関数の実行が即座に終了します。

```js
function counter() {
  for (var count = 1; ; count++) {  // 無限ループ
    console.log(count + 'A'); // 5 まで
      if (count === 5) {
        return;
      }
      console.log(count + 'B');  // 4 まで
    }
  console.log(count + 'C');  // 現れない
}

counter();

// 出力:
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

[クロージャ](/ja/docs/Web/JavaScript/Closures)の記事もご覧ください。

```js
function magic() {
  return function calc(x) { return x * 42; };
}

var answer = magic();
answer(1337); // 56154
```

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-return-statement', 'Return statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.return")}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope)
- [クロージャ](/ja/docs/Web/JavaScript/Closures)
