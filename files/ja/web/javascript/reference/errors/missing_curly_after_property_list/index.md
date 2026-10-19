---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "missing } after property list" は、[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の構文のどこかに間違いがあった場合に発生します。実際に中括弧がない可能性もありますが、カンマを忘れている可能性もあります。

## エラーメッセージ

```plain
SyntaxError: missing } after property list (Firefox)
SyntaxError: Unexpected identifier 'c'. Expected '}' to end an object literal. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の構文のどこかに誤りがあります。実際に中括弧を忘れているかもしれませんが、例えばコンマが不足している可能性もあります。また、閉じ中括弧や閉じ括弧が正しい順序になっているかも確認してください。インデントを付けたりコードを整形したりすると、多少見通しが良くなります。

## 例

### カンマ忘れ

多くの場合は、オブジェクト初期化子のコードでカンマを忘れています。

```js-nolint example-bad
const obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

修正すると次のようになります。

```js example-good
const obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## 関連情報

- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
