---
title: "TypeError: can't delete non-configurable array element"
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
---

{{jsSidebar("Errors")}}

JavaScript の例外 "can't delete non-configurable array element" は、配列を[短縮](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length#配列の短縮)しようとしたときに配列の要素の 1 つが[設定不可](/ja/docs/Web/JavaScript/Data_structures#プロパティ)であった場合に発生します。

## エラーメッセージ

```js
TypeError: can't delete non-configurable array element (Firefox)
TypeError: Cannot delete property '2' of [object Array] (Chrome)
```

## エラーの種類

{{jsxref("TypeError")}}

## エラーの原因

配列を[短縮](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length#配列の短縮)しようとしていますが、配列の要素が[変更不可](/ja/docs/Web/JavaScript/Data_structures#プロパティ)です。配列の短縮をするとき、新しい配列の長さを超える要素は削除されますが、このシチュエーションでは失敗します。

`configurable` 属性はプロパティをオブジェクトから削除できるかどうか、および (`writable` 以外の) 変更できるかどうかを制御します。

通常、[配列初期化子](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#構文)で生成されたオブジェクトのプロパティは変更可能です。しかし、たとえば {{jsxref("Object.defineProperty()")}} が使用された場合、既定でプロパティを変更できません。

## 例

### `Object.defineProperty` で生成した変更不可能なプロパティ

プロパティを変更できないように指定する場合、{{jsxref("Object.defineProperty()")}} は既定で変更できないプロパティを生成します。

```js example-bad
"use strict";
var arr = [];
Object.defineProperty(arr, 0, { value: 0 });
Object.defineProperty(arr, 1, { value: "1" });

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

配列を短縮したい場合、要素を変更可能に設定する必要があります。

```js example-good
"use strict";
var arr = [];
Object.defineProperty(arr, 0, { value: 0, configurable: true });
Object.defineProperty(arr, 1, { value: "1", configurable: true });

arr.length = 1;
```

### 封印された配列

{{jsxref("Object.seal()")}} 関数はすべての存在する要素を設定不可にします。

```js example-bad
"use strict";
var arr = [1, 2, 3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

{{jsxref("Object.seal()")}} の呼び出しを削除するか、配列のコピーを取る必要があります。コピーの場合、コピーした配列の短縮は元の配列の長さに影響しません。

```js example-good
"use strict";
var arr = [1, 2, 3];
Object.seal(arr);

// Copy the initial array to shorten the copy
var copy = Array.from(arr);
copy.length = 1;
// arr.length == 3
```

## 関連項目

- [\[\[Configurable\]\]](/ja/docs/Web/JavaScript/Data_structures#プロパティ)
- {{jsxref("Array.length")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.seal()")}}
