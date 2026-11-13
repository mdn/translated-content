---
title: Symbol.keyFor()
short-title: keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Symbol.keyFor()`** 静的メソッドは、指定されたシンボルについて、共有シンボルキーをグローバルシンボルレジストリーから受け取ります。

{{InteractiveExample("JavaScript デモ: Symbol.keyFor()")}}

```js interactive-example
const globalSym = Symbol.for("foo"); // グローバルシンボル

console.log(Symbol.keyFor(globalSym));
// 予想される結果: "foo"

const localSym = Symbol(); // ローカルシンボル

console.log(Symbol.keyFor(localSym));
// 予想される結果: undefined

console.log(Symbol.keyFor(Symbol.iterator));
// 予想される結果: undefined
```

## 構文

```js-nolint
Symbol.keyFor(sym)
```

### 引数

- `sym`
  - : シンボル、必須。キーを探すシンボル。

### 返値

[グローバルレジストリー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)で見つかった場合は、与えられたシンボルのキーを表す文字列です。それ以外の場合は {{jsxref("undefined")}} です。

## 例

### keyFor() の使用

```js
const globalSym = Symbol.for("foo"); // 新しいグローバルシンボルを作成
Symbol.keyFor(globalSym); // "foo"

const localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// ウェルノウンシンボルは、グローバルシンボルレジストリーの
// 登録されたシンボルでない
Symbol.keyFor(Symbol.iterator); // undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Symbol.for()")}}
