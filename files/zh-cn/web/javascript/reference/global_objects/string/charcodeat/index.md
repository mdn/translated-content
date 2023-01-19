---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
---

{{JSRef}}

**`charCodeAt()`** 方法返回 `0` 到 `65535` 之间的整数，表示给定索引处的 UTF-16 代码单元

{{EmbedInteractiveExample("pages/js/string-charcodeat.html", "shorter")}}

UTF-16 编码单元匹配能用一个 UTF-16 编码单元表示的 Unicode 码点。如果 Unicode 码点不能用一个 UTF-16 编码单元表示（因为它的值大于`0xFFFF`），则所返回的编码单元会是这个码点代理对的第一个编码单元) 。如果你想要整个码点的值，使用 {{jsxref("Global_Objects/String/codePointAt", "codePointAt()")}}。

## 语法

```plain
str.charCodeAt(index)
```

### 参数

- `index`
  - : 一个大于等于 `0`，小于字符串长度的整数。如果不是一个数值，则默认为 `0`。

### 返回值

指定 `index` 处字符的 UTF-16 代码单元值的一个数字；如果 `index` 超出范围，`charCodeAt()` 返回 {{jsxref("Global_Objects/NaN", "NaN")}}。

## 描述

Unicode 码点（code points）的范围从 `0` 到 `1114111` `(0x10FFFF）`。开头的 128 个 Unicode 编码单元和 ASCII 字符编码一样。（关于 Unicode 的更多信息，可查看 [JavaScript Guide](/zh-CN/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode)。）

> **备注：** `charCodeAt` 总是返回一个小于 65,536 的值。这是因为高位编码单元（higher code point）使用一对（低位编码 lower valued）代理伪字符（"surrogate" pseudo-characters）来表示，从而构成一个真正的字符。
>
> 因此，为了检查（或重现）`65536` 及以上编码字符的完整字符，需要在获取 `charCodeAt(i)` 的值的同时获取 `charCodeAt(i+1)` 的值（如同用两个字母操纵一个字符串），或者改为获取 `codePointAt(i)` 的值。参看下面例 2 和例 3。

如果指定的 `index` 小于 `0` 、等于或大于字符串的长度，则 `charCodeAt` 返回 {{jsxref("Global_Objects/NaN", "NaN")}}。

向后兼容：在历史版本中（如 JavaScript 1.2），`charCodeAt` 返回一个数字，表示给定 index 处字符的 ISO-Latin-1 编码值。ISO-Latin-1 编码集范围从 `0` 到 `255`。开头的 `0` 到 `127` 直接匹配 ASCII 字符集。

## 示例

### 使用 `charCodeAt()`

下例介绍了不同索引情况下返回的 Unicode 值：

```js
"ABC".charCodeAt(0) // returns 65:"A"

"ABC".charCodeAt(1) // returns 66:"B"

"ABC".charCodeAt(2) // returns 67:"C"

"ABC".charCodeAt(3) // returns NaN
```

### 使用 `charCodeAt()` 修复字符串中出现的未知的非基本多语言范围（非 BMP，non-Basic-Multilingual-Plane）字符

这段代码可以被用在 for 循环和其他类似语句中，当在指定引索之前不确定是否有非 BMP 字符存在时。

```js
function fixedCharCodeAt (str, idx) {
    // ex. fixedCharCodeAt ('\uD800\uDC00', 0); // 65536
    // ex. fixedCharCodeAt ('\uD800\uDC00', 1); // false
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;

    // High surrogate (could change last hex to 0xDB7F to treat high
    // private surrogates as single characters)
    if (0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx+1);
        if (isNaN(low)) {
            throw 'High surrogate not followed by low surrogate in fixedCharCodeAt()';
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
        // We return false to allow loops to skip this iteration since should have
        // already handled high surrogate above in the previous iteration
        return false;
        /*hi = str.charCodeAt(idx-1);
        low = code;
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;*/
    }
    return code;
}
```

### 使用 `charCodeAt()` 修复字符串中出现的已知的非 BMP 字符

```js
function knownCharCodeAt (str, idx) {
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
        low = str.charCodeAt(idx+1);
        // Go one further, since one of the "characters" is part of a surrogate pair
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    return code;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
