---
title: 標準組み込みオブジェクト
slug: Web/JavaScript/Reference/Global_Objects
tags:
  - JavaScript
  - Landing page
  - Overview
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects
---
{{JSSidebar("Objects")}}

本章では JavaScript の標準組み込みオブジェクトについて、それらのメソッドやプロパティと共にすべて文書化しています。

ここでいう「グローバルオブジェクト (global objects)」 (または標準組み込みオブジェクト) という用語を**グローバルオブジェクト** (the global object) と混同しないでください。ここで、『グローバルオブジェクト』は**グローバルスコープにあるオブジェクト**を指します。 (訳注: 日本語では複数形や the による区別ができないため、ここでは後者の **the global object** を『グローバルオブジェクト』と表記して区別します。)

後者の『グローバルオブジェクト』自体は、グローバルスコープ中で {{JSxRef("Operators/this", "this")}} 演算子を使ってアクセスすることができます。実際、グローバルスコープは『グローバルオブジェクト』のプロパティと、もしあれば継承されたプロパティから**構成されています**。

グローバルスコープ内のその他のオブジェクトは、[ユーザースクリプトによって作られたり](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#creating_new_objects)、ホストアプリケーションによって提供されたりします。ブラウザー上で提供されている利用可能なオブジェクトについては、[API リファレンス](/ja/docs/Web/API)で文書化されています。

[DOM](/en-US/docs/Web/API/Document_Object_Model) と中核の [JavaScript](/en-US/docs/Web/JavaScript) との違いについての詳しい情報は、[JavaScript 技術概説](/en-US/docs/Web/JavaScript/JavaScript_technologies_overview)をご覧ください。

## 標準オブジェクト (カテゴリー別)

### 値プロパティ

これらのグローバルプロパティは、単なる値を返します。プロパティもメソッドも持ちません。

- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}
- {{JSxRef("globalThis")}}

### 関数プロパティ

これらのグローバル関数 (オブジェクト上ではなくグローバルに呼ばれる関数) は、呼び出し元に直接結果を返します。

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{Non-Standard_Inline}} {{JSxRef("Global_Objects/uneval", "uneval()")}}
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- **非推奨**

  - {{Deprecated_Inline}} {{JSxRef("Global_Objects/escape", "escape()")}}
  - {{Deprecated_Inline}} {{JSxRef("Global_Objects/unescape", "unescape()")}}

### 基本オブジェクト

他のすべてのオブジェクトの基礎となる、主要な基本オブジェクトです。一般的なオブジェクト、関数、そしてエラーを表すオブジェクトが含まれます。

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### エラーオブジェクト

エラーオブジェクトは基本オブジェクトの特殊型です。これらのオブジェクトには、基本的な {{JSxRef("Error")}} 型の他に、いくつかの特殊なエラー型があります。

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("InternalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}

### 数値と日付

数値、日付、数学計算を表す基本的なオブジェクトです。

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### テキスト処理

これらのオブジェクトは、文字列を表したりその操作をサポートしたりします。

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

<h3 id="Indexed_collections" name="Indexed_collections">索引付きコレクション</h3>

これらのオブジェクトは、インデックス値で順序付けされたデータのコレクションを表します。これには、(型付けされた) 配列や配列に似た構造体も含まれます。

- {{JSxRef("Array")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}

### キー付きコレクション

これらのオブジェクトは、キーを使ったコレクションを表します。反復可能なコレクション ({{JSxRef("Map")}} と {{JSxRef("Set")}}) は挿入順に容易に反復処理することができます。

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### 構造化データ

これらのオブジェクトは、構造化データバッファおよび JavaScript Object Notation (JSON) を用いて書かれたデータを表現、操作します。

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("DataView")}}
- {{JSxRef("JSON")}}

### 制御抽象化オブジェクト

制御抽象化オブジェクトは、特に非同期のコードを (例えば深く入り組んだコールバックを使用せずに) 構造化するのに役立ちます。

- {{JSxRef("Promise")}}
- {{JSxRef("Generator")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncFunction")}}
- {{JSxRef("Global_Objects/AsyncGenerator", "AsyncGenerator")}}
- {{JSxRef("Global_Objects/AsyncGeneratorFunction", "AsyncGeneratorFunction")}}

### リフレクション

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### 国際化

中核の ECMAScript に言語に固有の機能を追加するものです。

- {{JSxRef("Intl")}}
- {{JSxRef("Global_Objects/Intl/Collator", "Intl.Collator")}}
- {{JSxRef("Global_Objects/Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{JSxRef("Global_Objects/Intl/ListFormat", "Intl.ListFormat")}}
- {{JSxRef("Global_Objects/Intl/NumberFormat", "Intl.NumberFormat")}}
- {{JSxRef("Global_Objects/Intl/PluralRules", "Intl.PluralRules")}}
- {{JSxRef("Global_Objects/Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
- {{JSxRef("Global_Objects/Intl/Locale", "Intl.Locale")}}

### WebAssembly

- {{JSxRef("WebAssembly")}}
- {{JSxRef("WebAssembly.Module")}}
- {{JSxRef("WebAssembly.Instance")}}
- {{JSxRef("WebAssembly.Memory")}}
- {{JSxRef("WebAssembly.Table")}}
- {{JSxRef("WebAssembly.CompileError")}}
- {{JSxRef("WebAssembly.LinkError")}}
- {{JSxRef("WebAssembly.RuntimeError")}}

### その他

- {{JSxRef("Functions/arguments", "arguments")}}
