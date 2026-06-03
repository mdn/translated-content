---
title: 標準組み込みオブジェクト
slug: Web/JavaScript/Reference/Global_Objects
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

本章では JavaScript の標準組み込みオブジェクトについて、それらのメソッドやプロパティと共にすべて文書化しています。

ここでいう「グローバルオブジェクト (global objects)」 (または標準組み込みオブジェクト) という用語を**グローバルオブジェクト** (the global object) と混同しないでください。ここで、『グローバルオブジェクト』は**グローバルスコープにあるオブジェクト**を指します。 (訳注: 日本語では複数形や the による区別ができないため、ここでは後者の **the global object** を『グローバルオブジェクト』と表記して区別します。)

後者の『グローバルオブジェクト』自体は、グローバルスコープ中で {{jsxref("Operators/this", "this")}} 演算子を使ってアクセスすることができます。実際、グローバルスコープは『グローバルオブジェクト』のプロパティと、もしあれば継承されたプロパティから**構成されています**。

グローバルスコープ内のその他のオブジェクトは、[ユーザースクリプトによって作られたり](/ja/docs/Web/JavaScript/Guide/Working_with_objects#新しいオブジェクトの作成)、ホストアプリケーションによって提供されたりします。ブラウザー上で提供されている利用可能なオブジェクトについては、[API リファレンス](/ja/docs/Web/API)で文書化されています。

[DOM](/ja/docs/Web/API/Document_Object_Model) と中核の [JavaScript](/ja/docs/Web/JavaScript) との違いについての詳しい情報は、[JavaScript 技術概説](/ja/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)をご覧ください。

## 標準オブジェクト (カテゴリー別)

### 値プロパティ

これらのグローバルプロパティは、単なる値を返します。プロパティもメソッドも持ちません。

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### 関数プロパティ

これらのグローバル関数 (オブジェクト上ではなくグローバルに呼ばれる関数) は、呼び出し元に直接結果を返します。

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("isFinite()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("escape()")}} {{deprecated_inline}}
- {{jsxref("unescape()")}} {{deprecated_inline}}

### 基本オブジェクト

これらのオブジェクトは、言語の基本的な構成要素を表します。

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### エラーオブジェクト

エラーオブジェクトは基本オブジェクトの特殊型です。これらのオブジェクトには、基本的な {{jsxref("Error")}} 型の他に、いくつかの特殊なエラー型があります。

- {{jsxref("Error")}}
- {{jsxref("AggregateError")}}
- {{jsxref("EvalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SuppressedError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}
- {{jsxref("InternalError")}} {{non-standard_inline}}

### 数値と日付

数値、日付、数学計算を表す基本的なオブジェクトです。

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}
- {{jsxref("Temporal")}}

### テキスト処理

これらのオブジェクトは、文字列を表したりその操作をサポートしたりします。

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### 索引付きコレクション

これらのオブジェクトは、インデックス値で順序付けされたデータのコレクションを表します。これには、(型付けされた) 配列や配列に似た構造体も含まれます。

- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### キー付きコレクション

これらのオブジェクトは、キーを使ったコレクションを表します。反復可能なコレクション ({{jsxref("Map")}} と {{jsxref("Set")}}) は挿入順に容易に反復処理することができます。

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### 構造化データ

これらのオブジェクトは、構造化データバッファーおよび JavaScript Object Notation (JSON) を用いて書かれたデータを表現、操作します。

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### メモリー管理

これらのオブジェクトは、ガベージコレクションの仕組みと相互に作用します。

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### 制御抽象化オブジェクト

制御抽象化オブジェクトは、特に非同期のコードを (例えば深く入り組んだコールバックを使用せずに) 構造化するのに役立ちます。

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("DisposableStack")}}
- {{jsxref("AsyncDisposableStack")}}

### リフレクション

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### 国際化

中核の ECMAScript に言語に固有の機能を追加するものです。

- {{jsxref("Intl")}}
- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.Segmenter")}}
