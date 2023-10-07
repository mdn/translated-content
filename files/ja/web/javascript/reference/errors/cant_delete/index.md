---
title: 'TypeError: property "x" is non-configurable and can''t be deleted'
slug: Web/JavaScript/Reference/Errors/Cant_delete
---

{{jsSidebar("Errors")}}

JavaScript の例外 "property is non-configurable and can't be deleted" は、プロパティを削除しようとしたが、そのプロパティが[構成不可](/ja/docs/Web/JavaScript/Data_structures#プロパティ)である場合に発生します。

## エラーメッセージ

```js
TypeError: Calling delete on 'x' is not allowed in strict mode (Edge)
TypeError: property "x" is non-configurable and can't be deleted. (Firefox)
TypeError: Cannot delete property 'x' of #<Object> (Chrome)
```

## エラーの種類

strict モードでのみ、{{jsxref("TypeError")}} の警告が出ます。

## エラーの原因

プロパティを削除しようとしましたが、プロパティが [non-configurable](/ja/docs/Web/JavaScript/Data_structures#プロパティ) でした。`configurable` 属性は、オブジェクトからプロパティを削除できるかどうか、および (`writable` を除く) 属性を変更できるかどうかを制御します。

このエラーは、[strict モードのコード](/ja/docs/Web/JavaScript/Reference/Strict_mode) でのみ発生します。非 strict コードでは、この操作は `false` を返します。

## 例

### 構成不可のプロパティに対する削除の試み

構成不可のプロパティは、さほど一般的ではありませんが、{{jsxref("Object.defineProperty()")}} か {{jsxref("Object.freeze()")}} を使用して生成することができます。

```js example-bad
"use strict";
var obj = Object.freeze({ name: "Elsa", score: 157 });
delete obj.score; // TypeError

("use strict");
var obj = {};
Object.defineProperty(obj, "foo", { value: 2, configurable: false });
delete obj.foo; // TypeError

("use strict");
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop(); // TypeError
```

JavaScript に組み込まれた、少数の構成不可プロパティもあります。もしかしたら、Math の定数を削除しようとしたのかもしれません。

```js example-bad
"use strict";
delete Math.PI; // TypeError
```

## 関連情報

- [delete](/ja/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
