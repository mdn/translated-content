---
title: TextEncoder
slug: Web/API/TextEncoder
---

{{APIRef("Encoding API")}}

**`TextEncoder`** 接受代码点流作为输入，并提供 UTF-8 字节流作为输出。

> **备注：** There is a polyfill implementation to support non-UTF-8 text encodings on [GitHub](https://github.com/inexorabletash/text-encoding).

## 例子

```js
const encoder = new TextEncoder()
const view = encoder.encode('€')
console.log(view); // Uint8Array(3) [226, 130, 172]
```

## 构造器

- {{domxref("TextEncoder.TextEncoder", "TextEncoder()")}}
  - : 返回一个新构造的 `TextEncoder`，它默认使用 UTF-8 编码将代码点流转换成字节流。

## 属性

_`TextEncoder` 接口不继承任何属性。_

- {{domxref("TextEncoder.encoding")}} {{readonlyInline}}
  - : 总是返回 "`utf-8`"。

## 方法

_`TextEncoder` 接口不继承任何方法。_

- {{domxref("TextEncoder.encode()")}}
  - : 接受一个 {{domxref("USVString")}} 作为输入，返回一个包含文本的 {{jsxref("Uint8Array")}}，其中的文本使用 UTF-8 编码。
- {{DOMxRef("TextEncoder.prototype.encodeInto()")}}
  - : 接受一个 {{domxref("USVString")}} 作为输入、一个{{jsxref("Uint8Array")}} 作为输出目标，返回一个指示编码进度的目录（dictionary）对象。此方法的性能可能会比更早出现的 `encode()` 方法好一些。

## Polyfill

The below polyfill is compliant with the standard and therefore only supports UTF-8. It is designed to work in IE5 "out of the box". However, in IE5-IE9, it will return a regular Array instead of a TypedArray. In those cases a polyfill might be impractical for large strings. Finally, note that you should run the below code through a minifier (especially closure compiler) to turn sequences like `0x1e << 3` into `0xf0`. These sequences are not already precomputed because they serve to aesthetically illustrate how the polyfill works.

```js
if (typeof TextEncoder === "undefined") {
    TextEncoder=function TextEncoder(){};
    TextEncoder.prototype.encode = function encode(str) {
        "use strict";
        var Len = str.length, resPos = -1;
        // The Uint8Array's length must be at least 3x the length of the string because an invalid UTF-16
        //  takes up the equivelent space of 3 UTF-8 characters to encode it properly. However, Array's
        //  have an auto expanding length and 1.5x should be just the right balance for most uses.
        var resArr = typeof Uint8Array === "undefined" ? new Array(Len * 1.5) : new Uint8Array(Len * 3);
        for (var point=0, nextcode=0, i = 0; i !== Len; ) {
            point = str.charCodeAt(i), i += 1;
            if (point >= 0xD800 && point <= 0xDBFF) {
                if (i === Len) {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; break;
                }
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                nextcode = str.charCodeAt(i);
                if (nextcode >= 0xDC00 && nextcode <= 0xDFFF) {
                    point = (point - 0xD800) * 0x400 + nextcode - 0xDC00 + 0x10000;
                    i += 1;
                    if (point > 0xffff) {
                        resArr[resPos += 1] = (0x1e/*0b11110*/<<3) | (point>>>18);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>12)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/);
                        continue;
                    }
                } else {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; continue;
                }
            }
            if (point <= 0x007f) {
                resArr[resPos += 1] = (0x0/*0b0*/<<7) | point;
            } else if (point <= 0x07ff) {
                resArr[resPos += 1] = (0x6/*0b110*/<<5) | (point>>>6);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)  | (point&0x3f/*0b00111111*/);
            } else {
                resArr[resPos += 1] = (0xe/*0b1110*/<<4) | (point>>>12);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)    | ((point>>>6)&0x3f/*0b00111111*/);
                resArr[resPos += 1] = (0x2/*0b10*/<<6)    | (point&0x3f/*0b00111111*/);
            }
        }
        if (typeof Uint8Array !== "undefined") return resArr.subarray(0, resPos + 1);
        // else // IE 6-9
        resArr.length = resPos + 1; // trim off extra weight
        return resArr;
    };
    TextEncoder.prototype.toString = function(){return "[object TextEncoder]"};
    try { // Object.defineProperty only works on DOM prototypes in IE8
        Object.defineProperty(TextEncoder.prototype,"encoding",{
            get:function(){if(TextEncoder.prototype.isPrototypeOf(this)) return"utf-8";
                           else throw TypeError("Illegal invocation");}
        });
    } catch(e) { /*IE6-8 fallback*/ TextEncoder.prototype.encoding = "utf-8"; }
    if(typeof Symbol!=="undefined")TextEncoder.prototype[Symbol.toStringTag]="TextEncoder";
}
```

Source: <https://github.com/anonyco/FastestSmallestTextEncoderDecoder>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{DOMxRef("TextDecoder")}} interface describing the inverse operation.
- [`StringView`](/zh-CN/Add-ons/Code_snippets/StringView) – a C-like representation of strings based on typed arrays
- A [shim](https://github.com/inexorabletash/text-encoding) allowing to use this interface in browsers that don't support it.
- [`Components.utils.importGlobalProperties`](/zh-CN/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.importGlobalProperties)
- [Node.js supports global export from v11.0.0](https://nodejs.org/api/util.html#util_class_util_textencoder)
