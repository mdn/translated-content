---
title: 'Warning: expression closures are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
---

{{jsSidebar("Errors")}}

JavaScript の警告 "expression closures are deprecated" は、標準外の[式クロージャ](/ja/docs/Web/JavaScript/Reference/Operators/Expression_closures)構文 (略記関数構文) が使用されたときに発生します。

## メッセージ

```
Warning: expression closures are deprecated
```

## エラーの種類

警告。 JavaScript の実行は中断されません。

## 原因

標準外の[式クロージャ](/ja/docs/Web/JavaScript/Reference/Operators/Expression_closures)構文 (略記関数構文) は非推奨のため、使用すべきではありません。この構文は [bug 1083458](https://bugzilla.mozilla.org/show_bug.cgi?id=1083458) で削除予定であり、削除された後は {{jsxref("SyntaxError")}} が発生します。

## 例

### 非推奨の構文

式クロージャで、中括弧を省略したり、関数宣言やメソッド定義で return 文を省略したりすることです。

```js example-bad
var x = function() 1;

var obj = {
  count: function() 1
};
```

### 標準の構文

標準外の式クロージャ構文から標準の ECMAScript 構文に変換するためには、波括弧と return ステートメントを追加します。

```js example-good
var x = function() { return 1; }

var obj = {
  count: function() { return 1; }
};
```

### アロー関数を使用した標準の構文

代わりに[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使用することもできます。

```js example-good
var x = () => 1;
```

### 略記メソッド構文を使用した標準構文

次のように、式クロージャがゲッターとセッターにも見られることがあります。

```js example-bad
var obj = {
  get x() 1,
  set x(v) this.v = v
};
```

ES2015 の[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)で、次のように変換することができます。

```js example-good
var obj = {
  get x() { return 1 },
  set x(v) { this.v = v }
};
```

## 関連情報

- [式クロージャ](/ja/docs/Web/JavaScript/Reference/Operators/Expression_closures)
- [アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)
