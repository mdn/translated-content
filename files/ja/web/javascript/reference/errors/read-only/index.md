---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
---

{{jsSidebar("Errors")}}

JavaScript の [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)のみの例外 "is read-only" は、代入されたグローバル変数またはオブジェクトプロパティが読み取り専用プロパティであった場合に発生します。

## エラーメッセージ

```js
TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: "x" is read-only (Firefox)
TypeError: 0 is read-only (Firefox)
TypeError: Cannot assign to read only property 'x' of #<Object> (Chrome)
TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

代入しようとしたグローバル変数、またはオブジェクトのプロパティが読み取り専用プロパティです。 (技術的には、 [non-writable データプロパティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Writable_attribute)です。)

このエラーは、 [strict モードのコード](/ja/docs/Web/JavaScript/Reference/Strict_mode)にだけ発生します。 strict コードではない場合、割り当ては無視されるだけです。</p>

## 例

### 無効な場合

<p>読み取り専用プロパティはさほど一般的ではありませんが、 {{jsxref("Object.defineProperty()")}}、または {{jsxref("Object.freeze()")}} を使用して生成することができます。</p>

```js example-bad
"use strict";
var obj = Object.freeze({ name: "Elsa", score: 157 });
obj.score = 0; // TypeError

("use strict");
Object.defineProperty(this, "LUNG_COUNT", { value: 2, writable: false });
LUNG_COUNT = 3; // TypeError

("use strict");
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++; // TypeError
```

JavaScript の組み込みにも、いくつか読み取り専用プロパティがあります。数学的な定数を再定義しようとしたとします。

```js example-bad
"use strict";
Math.PI = 4; // TypeError
```

残念ながらできません。

グローバル変数の `undefined` も読み取り専用のため、このようにすると悪名高い "undefined is not a function" エラーが発生します。

```js example-bad
"use strict";
undefined = function () {}; // TypeError: "undefined" is read-only
```

### 有効な場合

```js example-good
"use strict";
var obj = Object.freeze({ name: "Score", points: 157 });
obj = { name: obj.name, points: 0 }; // 新しいオブジェクトで置き換える

("use strict");
var LUNG_COUNT = 2; // `var` が使われているので、読み取り専用ではない
LUNG_COUNT = 3; // ok (解剖学的にはおかしいけれども)
```

## 関連情報

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
