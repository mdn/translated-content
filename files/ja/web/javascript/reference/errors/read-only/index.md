---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生する "is read-only" 例外は、代入先のグローバル変数またはオブジェクトプロパティが読み取り専用プロパティの場合に発生します。

## エラーメッセージ

```plain
TypeError: Cannot assign to read only property 'x' of #<Object> (V8-based)
TypeError: "x" is read-only (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## エラー型

{{jsxref("TypeError")}} です。[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生します。

## エラーの原因

代入先のグローバル変数またはオブジェクトプロパティが読み取り専用プロパティです。
技術的には、[書き込み不可のデータプロパティ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#writable_attribute)です。

このエラーは、[厳格モードのコード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ発生します。厳格モードではないコードでは、代入は暗黙のうちに無視されます。

## 例

### 無効な場合

読み取り専用プロパティはあまり一般的ではありませんが、{{jsxref("Object.defineProperty()")}} または {{jsxref("Object.freeze()")}} を使用して作成できます。

```js example-bad
"use strict";
const obj = Object.freeze({ name: "Elsa", score: 157 });
obj.score = 0; // TypeError

("use strict");
Object.defineProperty(this, "LUNG_COUNT", { value: 2, writable: false });
LUNG_COUNT = 3; // TypeError

("use strict");
const frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++; // TypeError
```

JavaScript には読み取り専用の組み込みプロパティもいくつかあります。例えば、数学定数を再定義しようとした場合を考えてみてください。

```js example-bad
"use strict";
Math.PI = 4; // TypeError
```

残念ながらできません。

グローバル変数の `undefined` も読み取り専用なので、次のようにしても悪名高い "undefined is not a function" エラーを抑止することはできません。

```js example-bad
"use strict";
undefined = function () {}; // TypeError: "undefined" is read-only
```

### 有効な場合

```js example-good
"use strict";
let obj = Object.freeze({ name: "Score", points: 157 });
obj = { name: obj.name, points: 0 }; // 新しいオブジェクトで置き換えれば動作する
```

## 関連情報

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
