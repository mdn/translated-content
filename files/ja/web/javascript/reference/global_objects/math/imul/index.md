---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

**`Math.imul()`** は静的メソッドで、2 つの引数で C 言語風の 32 ビット乗算を行った結果を返します。

{{EmbedInteractiveExample("pages/js/math-imul.html")}}

## 構文

```js-nolint
Math.imul(a, b)
```

### 引数

- `a`
  - : 第一の数値。
- `b`
  - : 第二の数値。

### 返値

与えられた引数で C 言語風の 32 ビット乗算を行った結果です。

## 解説

`Math.imul()` で C 言語と同様のの意味を持った 32 ビット乗算を行うことができます。この機能は [Emscripten](https://ja.wikipedia.org/wiki/Emscripten) などのプロジェクトに有効です。

`imul()` は `Math` の静的メソッドなので、常に `Math.imul()` として使用し、自分で `Math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`Math` にはコンストラクターがありません)。

JavaScript の通常の浮動小数点数を `imul()` で使用すると、パフォーマンスが低下します。これは、乗算のために浮動小数点数から整数への変換、そして乗算された整数を再び浮動小数点数に変換する処理にコストがかかるためです。しかし、 [asm.js](/ja/docs/Games/Tools/asm.js) では、 JIT オプティマイザーが JavaScript でより確実に整数を使用できるようになり、内部的に整数として格納された 2 つの数値の乗算（asm.js でのみ可能）を `imul()` で行うことで、より高いパフォーマンスが得られる可能性があります。

## 例

### Math.imul() の使用

```js
Math.imul(2, 4); // 8
Math.imul(-1, 8); // -8
Math.imul(-2, -2); // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Math.imul` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-math)
- [Emscripten](https://ja.wikipedia.org/wiki/Emscripten)
