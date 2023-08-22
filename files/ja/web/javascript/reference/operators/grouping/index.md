---
title: グループ化演算子 ( )
slug: Web/JavaScript/Reference/Operators/Grouping
---

{{jsSidebar("Operators")}}

グループ化演算子 `( )` は、式での評価の優先順位を制御します。

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## 構文

```js
( )
```

## 解説

グループ化演算子は、式または部分式の周りに括弧のペアで構成され、通常の[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)を上書きし、より低い優先順位の式をより高い優先順位の式の前に評価できるようにします。その名の通り、括弧の中にあるものをグループ化します。

## 例

### グループ化演算子の使用

最初に乗算と除算をし、次に加算と引き算をする優先順位を、最初に加算を評価するように上書きします。

```js
var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c; // 7
// evaluated by default like this
a + (b * c); // 7

// now overriding precedence
// addition before multiplication
(a + b) * c; // 9

// which is equivalent to
a * c + b * c; // 9
```

これらの例では、評価の左から右への順序が維持されていることに注意してください。つまり、*演算子*の評価順序は変わっていますが、*オペランド*の評価順序は変わっていません。
例えば次のコードを見てください。

```js
a() * (b() + c());
```

関数 `a` は関数 `b` よりも前に、また関数 `b` は関数 `c` よりも前に呼び出されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
