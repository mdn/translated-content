---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
---

{{jsSidebar("Errors")}}

JavaScript の例外 "missing } after property list" は、[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の構文のどこかに間違いがあった場合に発生します。実際に中括弧がない可能性もありますが、カンマを忘れている可能性もあります。

## メッセージ

```js
SyntaxError: Expected '}' (Edge)
SyntaxError: missing } after property list (Firefox)
```

## エラーの種類

{{jsxref("SyntaxError")}}

## エラーの原因

[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の構文のどこかに誤りがあります。実際に中括弧を忘れているかもしれませんが、例えばコンマが不足している可能性もあります。また、閉じ中括弧や閉じ括弧が正しい順序になっているかも確認してください。インデントを付けたりコードを整形したりすると、多少見通しが良くなります。

## 例

### カンマ忘れ

多くの場合は、オブジェクト初期化子のコードでカンマを忘れています。

```js example-bad
var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

修正すると次のようになります。

```js example-good
var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## 関連項目

- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
