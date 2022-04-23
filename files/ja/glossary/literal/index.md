---
title: リテラル
slug: Glossary/Literal
tags:
  - Literal
  - JavaScript
  - Glossary
---
**リテラル**は、JavaScript の値を表現します。これはスクリプト中に直接記述される固定値であり、変数ではありません。

- [配列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [真偽値リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#boolean_literals)
- [浮動小数点リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#floating-point_literals)
- [数値リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#numeric_literals)
- [オブジェクトリテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals)
- [正規表現リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_literals)
- [文字列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)

## 例

### 文字列リテラル

文字列リテラルとは、0 文字以上の文字を二重引用符 (`"`) または単一引用符 (`'`) で括ったものです。文字列は同じ種類の引用符で括らなければなりません (つまり、どちらも単一引用符にするか、またはどちらも二重引用符にするかです)。

以下が文字列リテラルの例です。

```js
'foo'
"bar"
'1234'
'one line \n new line'
"John's cat"
```

### オブジェクトリテラル

オブジェクトリテラルとは、プロパティ名とそれに関連付けられたオブジェクトの値とのペアを 0 個以上集めたリストです。波括弧 (`{}`) で囲んで表します。

以下にオブジェクトリテラルの例を示します。`car` オブジェクトの最初の要素には `myCar` プロパティが定義され、新規文字列 "`Toyota`" が割り当てられています。2 番目の要素、`getCar` プロパティには関数 `carTypes('Honda')` によって呼び出された結果が即座に割り当てられます。3 番目の要素、`special` プロパティには既存の変数 (`sales`) が使われています。

```js
var sales = 'BMW';

function carTypes(name) {
  if (name == 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Toyota', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Toyota
console.log(car.getCar);  // Honda
console.log(car.special); // BMW
```

## 関連情報

- Wikipedia 上の記事 「{{interwiki("wikipedia", "Literal (computer programming)", "Literal")}}」
