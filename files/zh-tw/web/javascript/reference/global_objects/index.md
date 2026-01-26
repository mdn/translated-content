---
title: 標準內建物件
slug: Web/JavaScript/Reference/Global_Objects
---

本章節記錄了 JavaScript 所有標準、內建的物件，以及這些物件的方法與屬性。

「全域物件」（或稱作標準內建物件）這個專有名字並非是要和**全域物件**混著說。在這裡，全域物件是那些在全域範圍裡的物件。而**全域物件**自身則是關聯到全域範圍裡的 {{jsxref("Operators/this", "this")}} 運算子（但若是在 ECMAScript 5 的嚴格模式（strict mode）則是不被採用的，即會回傳 {{jsxref("undefined")}}）。 事實上，全域範圍包含了全域物件的屬性，也包含了繼承而來的屬性（如果有的話）。

其他在全域範疇的物件，不是[被使用者的腳本建立](/zh-TW/docs/Web/JavaScript/Guide/Working_with_Objects#Creating_new_objects)，就是由主體的應用程式所提供。 主體物件是由 [API 參考資料](/zh-TW/docs/Web/API)定義的文件決定瀏覽器環境中是否可用。 更多關於 [DOM](/zh-TW/docs/Web/API/Document_Object_Model) 和 [JavaScript](/zh-TW/docs/Web/JavaScript) 核心的差異，請參考 [JavaScript 技術概要](/zh-TW/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)。

## 標準物件分類

### 數值屬性

這些全域屬性會返回一個值；全域屬性本身不擁有任何屬性和函式。

- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}
- {{jsxref("null")}} literal

### 函數屬性

這些全域函式會直接在全域範圍中被呼叫，不用從某個物件取得後呼叫；呼叫後直接回傳結果給執行的人。

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Global_Objects/uneval", "uneval()")}} {{non-standard_inline}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("Global_Objects/escape", "escape()")}} {{deprecated_inline}}
- {{jsxref("Global_Objects/unescape", "unescape()")}} {{deprecated_inline}}

### 基礎物件

這裡所陳列稱為基礎物件,將作為其他所有物件的母物件。包含了一般物件、函式以及錯誤。

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}
- {{jsxref("Error")}}
- {{jsxref("EvalError")}}
- {{jsxref("InternalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}

### 數字與日期

這裡陳列了數字、日期及數學運算。

- {{jsxref("Number")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### 文字處理

These objects represent strings and support manipulating them.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### 具索引的集合

These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### 具鍵值的集合

These objects represent collections which use keys; these contain elements which are iterable in the order of insertion.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### 向量集合

{{Glossary("SIMD")}} vector data types are objects where data is arranged into lanes.

- {{jsxref("SIMD")}} {{experimental_inline}}
- {{jsxref("Float32x4", "SIMD.Float32x4")}} {{experimental_inline}}
- {{jsxref("Float64x2", "SIMD.Float64x2")}} {{experimental_inline}}
- {{jsxref("Int8x16", "SIMD.Int8x16")}} {{experimental_inline}}
- {{jsxref("Int16x8", "SIMD.Int16x8")}} {{experimental_inline}}
- {{jsxref("Int32x4", "SIMD.Int32x4")}} {{experimental_inline}}
- {{jsxref("Uint8x16", "SIMD.Uint8x16")}} {{experimental_inline}}
- {{jsxref("Uint16x8", "SIMD.Uint16x8")}} {{experimental_inline}}
- {{jsxref("Uint32x4", "SIMD.Uint32x4")}} {{experimental_inline}}
- {{jsxref("Bool8x16", "SIMD.Bool8x16")}} {{experimental_inline}}
- {{jsxref("Bool16x8", "SIMD.Bool16x8")}} {{experimental_inline}}
- {{jsxref("Bool32x4", "SIMD.Bool32x4")}} {{experimental_inline}}
- {{jsxref("Bool64x2", "SIMD.Bool64x2")}} {{experimental_inline}}

### 結構化資料

These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON).

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}} {{experimental_inline}}
- {{jsxref("Atomics")}} {{experimental_inline}}
- {{jsxref("DataView")}}
- {{jsxref("JSON")}}

### 控制抽象化物件

- {{jsxref("Promise")}}
- {{jsxref("Generator")}}
- {{jsxref("GeneratorFunction")}}
- {{experimental_inline}} {{jsxref("AsyncFunction")}}

### Reflection

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### 國際化

Additions to the ECMAScript core for language-sensitive functionalities.

- {{jsxref("Intl")}}
- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Global_Objects/NumberFormat", "Intl.NumberFormat")}}

### WebAssembly

- {{jsxref("WebAssembly")}}
- {{jsxref("WebAssembly.Module")}}
- {{jsxref("WebAssembly.Instance")}}
- {{jsxref("WebAssembly.Memory")}}
- {{jsxref("WebAssembly.Table")}}
- {{jsxref("WebAssembly.CompileError")}}
- {{jsxref("WebAssembly.LinkError")}}
- {{jsxref("WebAssembly.RuntimeError")}}

### 非標準物件

- {{jsxref("Iterator")}} {{non-standard_inline}}
- {{jsxref("ParallelArray")}} {{non-standard_inline}}
- {{jsxref("StopIteration")}} {{non-standard_inline}}

### 其他

- [`arguments`](/docs/Web/JavaScript/Reference/Functions/arguments)
