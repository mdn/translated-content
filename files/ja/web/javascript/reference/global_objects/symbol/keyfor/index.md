---
title: Symbol.keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`Symbol.keyFor()`** 静的メソッドは、指定されたシンボルについて、共有シンボルキーをグローバルシンボルレジストリーから受け取ります。

{{EmbedInteractiveExample("pages/js/symbol-keyfor.html")}}

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
