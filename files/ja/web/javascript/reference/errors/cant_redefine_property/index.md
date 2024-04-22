---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
---

{{jsSidebar("Errors")}}

## メッセージ

```
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Cannot redefine property: "x" (Chrome)
```

## エラータイプ

{{jsxref("TypeError")}}

## 何がうまくいかなかったのか？

プロパティを再定義しようとしましたが、そのプロパティは[設定不可](/ja/docs/Web/JavaScript/Data_structures#プロパティ)です。`configurable` 属性は、プロパティをオブジェクトから削除できるかどうか、および (`writable` 以外で) 変更できるかどうかを制御します。通常、[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)で生成されたオブジェクトのプロパティは、変更可能です。しかし、{{jsxref("Object.defineProperty()")}} を使用した場合などは、既定でプロパティを修正できません。

## 例

### `Object.defineProperty` で生成された設定不可のプロパティ

設定可能にしたくない場合、{{jsxref("Object.defineProperty()")}} は設定不可のプロパティを生成します。

```js example-bad
var obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar" });

Object.defineProperty(obj, "foo", { value: "baz" });
// TypeError: can't redefine non-configurable property "foo"
```

後のコードで再定義するためには、"foo" プロパティを設定可能にする必要があります。

```js example-good
var obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar", configurable: true });
Object.defineProperty(obj, "foo", { value: "baz", configurable: true });
```

## 関連項目

- [\[\[Configurable\]\]](/ja/docs/Web/JavaScript/Data_structures#プロパティ)
- {{jsxref("Object.defineProperty()")}}
