---
title: return
slug: Web/JavaScript/Reference/Statements/return
l10n:
  sourceCommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jsSidebar("Statements")}}

**`return`** 文は関数の実行を終了して、関数の呼び出し元に返す値を指定します。

{{EmbedInteractiveExample("pages/js/statement-return.html")}}

## 構文

```js-nolint
return;
return expression;
```

- `expression`
  - : 値が返される式。省略した場合は、代わりに `undefined` が返されます。

## 解説

`return` 文が関数本体の中で使用された際、その関数の実行が停止します。値を指定した場合、与えられた値が関数の呼び出し元に返されます。例として、以下の関数は引数 `x` が数値のとき、`x` の二乗を返します。

```js
function square(x) {
  return x * x;
}
const demo = square(3);
// demo は 9 に等しい
```

値が省略された場合は、代わりに `undefined` が返されます。

以下の return 文はすべて関数の実行を中断するものです。

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

### 自動セミコロン挿入

`return` 文は[自動セミコロン挿入 (ASI)](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入) の影響を受けます。`return` キーワードと式の間の改行コードは許容されません。

```js-nolint example-bad
return
a + b;
```

上記のコードは ASI によって以下のように変換されます。

```js
return;
a + b;
```

コンソールは "unreachable code after return statement" と警告します。

> **メモ:** Firefox 40 以降から `return` 文の後に到達不可能なコードが見つかった場合、コンソールに警告が表示されます。

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

[クロージャ](/ja/docs/Web/JavaScript/Closures)についての記事も参照のこと。

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
- [クロージャ](/ja/docs/Web/JavaScript/Closures)
