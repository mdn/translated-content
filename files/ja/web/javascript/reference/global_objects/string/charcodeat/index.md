---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
---

{{JSRef}}

**`charCodeAt()`** メソッドは、指定された位置にある UTF-16 コードユニットを表す `0` から `65535` までの整数を返します。

{{EmbedInteractiveExample("pages/js/string-charcodeat.html", "shorter")}}

単一の UTF-16 コードユニットで表現可能なコードポイントであれば、 UTF-16 コードユニットは Unicode コードポイントと一致します。 Unicode コードポイントが単一の UTF-16 コードユニットで表現できない場合 (値が `0xFFFF` を超える場合)、返されるコードユニットはそのコードポイントの*サロゲートペアの最初の部分*になります。コードポイント値全体を取得したい場合は、 {{jsxref("Global_Objects/String/codePointAt", "codePointAt()")}} を使用してください。

## 構文

```
str.charCodeAt(index)
```

### 引数

- `index`
  - : 整数で、 `0` 以上、文字列の `length` 未満の値です。 `index` が数値でない場合は、既定で `0` になります。

### 返値

与えられた `index` の位置にあるコードポイント値を表す数値です。 `index` の位置に要素がない場合は {{jsxref("Global_Objects/NaN", "NaN")}} を返します。

## 解説

Unicode コードポイントの範囲は、 `0` から `1114111` (`0x10FFFF`) です。最初の 128 の Unicode コードポイントは、 ASCII 文字エンコーディングに直接対応しています。 (Unicode についての詳細は、[Java Script ガイド](/ja/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode)を参照してください。)

> **メモ:** `charCodeAt()` は常に `65536` より小さい値を返すことに注意してください。これは、より高いコードポイントは、実際の文字を含むように使用されている (下の値) の "代理" 擬似文字のペアで表されているためです。
>
> これにより、 `65536` 以上の値の個々の文字について完全な文字を検証したり再現したりするためには、 `charCodeAt(i)` だけではなく、 `charCodeAt(i+1)` (2 文字の文字列を検証/再現する場合) か `codePointAt(i)` を代わりに使用する必要があります。下記の例 2 と 3 を見てください。

与えられたインデックスが 0 と文字列の長さの間にない場合、`charCodeAt()` は {{jsxref("Global_Objects/NaN", "NaN")}} を返します。

後方互換: (JavaScript 1.2 などの) 過去のバージョンでは、 `charCodeAt()` メソッドは、与えられた位置の文字の ISO-Latin-1 コードセットの値を示す数を返します。 ISO-Latin-1 コードセットの範囲は 0 から 255 です。最初の 0 から 127 までは ASCII 文字セットに直接対応しています。

## 例

### charCodeAt() の使用

以下の例では、 Unicode 文字の A である `65` を返します。

```js
'ABC'.charCodeAt(0)  // returns 65
```

### 基本多言語面以外の文字が文字列の前方に存在するかどうか不明な場合に扱えるように charCodeAt() を修正

このバージョンは、指定された位置の前に BMP 以外の文字が存在するかどうかが不明な場合に、 for ループなどで使用されることがあります。

```js
function fixedCharCodeAt(str, idx) {
  // ex. fixedCharCodeAt('\uD800\uDC00', 0); // 65536
  // ex. fixedCharCodeAt('\uD800\uDC00', 1); // false
  idx = idx || 0;
  var code = str.charCodeAt(idx);
  var hi, low;

  // High surrogate (could change last hex to 0xDB7F
  // to treat high private surrogates
  // as single characters)
  if (0xD800 <= code && code <= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    if (isNaN(low)) {
      throw 'High surrogate not followed by ' +
        'low surrogate in fixedCharCodeAt()';
    }
    return (
      (hi - 0xD800) * 0x400) +
      (low - 0xDC00) + 0x10000;
  }
  if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
    // We return false to allow loops to skip
    // this iteration since should have already handled
    // high surrogate above in the previous iteration
    return false;
    // hi = str.charCodeAt(idx - 1);
    // low = code;
    // return ((hi - 0xD800) * 0x400) +
    //   (low - 0xDC00) + 0x10000;
  }
  return code;
}
```

### 文字列の前方に基本多言語面以外の文字が存在することが分かっている場合に扱えるように charCodeAt() を修正

```js
function knownCharCodeAt(str, idx) {
  str += '';
  var code,
      end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str)) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    }
    else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return NaN;
  }

  code = str.charCodeAt(idx);

  var hi, low;
  if (0xD800 <= code && code <= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    // Go one further, since one of the "characters"
    // is part of a surrogate pair
    return ((hi - 0xD800) * 0x400) +
      (low - 0xDC00) + 0x10000;
  }
  return code;
}
```

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.charcodeat', 'String.prototype.charCodeAt')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.charCodeAt")}}

## 関連情報

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
