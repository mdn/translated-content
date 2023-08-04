---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
---

{{JSRef}}

**`Math.imul()`** 関数は、2 つの引数で C 言語風の 32 ビット乗算を行った結果を返します。

{{EmbedInteractiveExample("pages/js/math-imul.html")}}

## 構文

```
var product = Math.imul(a, b);
```

### 引数

- `a`
  - : 第一の数値。
- `b`
  - : 第二の数値。

### 返値

与えられた引数で C 言語風の 32 ビット乗算を行った結果です。

## 解説

`Math.imul()` で C 言語と同様のの意味を持った 32 ビット乗算を行うことができます。この機能は [Emscripten](http://en.wikipedia.org/wiki/Emscripten) などのプロジェクトに有効です。

`imul()` は `Math` の静的メソッドなので、常に `Math.imul()` として使用し、自分で `Math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`Math` にはコンストラクターがありません)。

通常の JavaScript の浮動小数点数を imul で使用すると、性能が低下します。これは、乗算のために浮動小数点から整数に変換し、乗算された整数を浮動小数点に変換するというコストのかかる作業があるからです。 imul が存在する理由は、 (今のところ) たった 1 つの状況では imul の方が高速だからです。それは AsmJS です。 AsmJS は JIST オプティマイザーが JavaScript で内部整数をより簡単に実装できるようにします。内部的に整数として格納されている 2 つの数値を imul で乗算すること (これは AsmJS でのみ可能です) は、 Math.imul が現在のブラウザーで性能を発揮する可能性がある唯一の潜在的な状況です。

## 例

### Math.imul() の使用

```js
Math.imul(2, 4); // 8
Math.imul(-1, 8); // -8
Math.imul(-2, -2); // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
```

## ポリフィル

これは次の関数でエミュレートすることができます。

```js
if (!Math.imul)
  Math.imul = function (a, b) {
    var aHi = (a >>> 16) & 0xffff;
    var aLo = a & 0xffff;
    var bHi = (b >>> 16) & 0xffff;
    var bLo = b & 0xffff;
    // the shift by 0 fixes the sign on the high part
    // the final |0 converts the unsigned value into a signed value
    return (aLo * bLo + (((aHi * bLo + aLo * bHi) << 16) >>> 0)) | 0;
  };
```

しかし、このポリフィルが使われるであろうブラウザーは、 JavaScript の内部整数型で最適化されておらず、すべての数値に浮動小数点を使用している可能性が高いため、次の関数の方が性能が高くなります。

```js
if (!Math.imul)
  Math.imul = function (opA, opB) {
    opB |= 0; // ensure that opB is an integer. opA will automatically be coerced.
    // floating points give us 53 bits of precision to work with plus 1 sign bit
    // automatically handled for our convienence:
    // 1. 0x003fffff /*opA & 0x000fffff*/ * 0x7fffffff /*opB*/ = 0x1fffff7fc00001
    //    0x1fffff7fc00001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
    var result = (opA & 0x003fffff) * opB;
    // 2. We can remove an integer coersion from the statement above because:
    //    0x1fffff7fc00001 + 0xffc00000 = 0x1fffffff800001
    //    0x1fffffff800001 < Number.MAX_SAFE_INTEGER /*0x1fffffffffffff*/
    if (opA & 0xffc00000 /*!== 0*/) result += ((opA & 0xffc00000) * opB) | 0;
    return result | 0;
  };
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Math.imul")}}

## 関連情報

- [Emscripten](http://en.wikipedia.org/wiki/Emscripten)
