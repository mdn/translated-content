---
title: Literal (リテラル)
slug: Glossary/Literal
l10n:
  sourceCommit: 05d10f3e6eb1d5d8a8c5a236744c10249ade2e08
---

{{GlossarySidebar}}

**リテラル**は JavaScript の値を表します。これらは（変数ではなく）固定値であり、スクリプト内に文字で提供されます。

- [配列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#配列リテラル)
- [論理値リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#論理値リテラル)
- [浮動小数点リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#浮動小数点リテラル)
- [数値リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#数値リテラル)
- [オブジェクトリテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#オブジェクトリテラル)
- [正規表現リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#正規表現リテラル)
- [文字列リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#文字列リテラル)

## 例

### 文字列リテラル

文字列リテラルとは、0 文字以上の文字を二重引用符 (`"`) または単一引用符 (`'`) で括ったものです。文字列は同じ種類の引用符で括らなければなりません (つまり、どちらも単一引用符にするか、またはどちらも二重引用符にするかです)。

以下が文字列リテラルの例です。

```js
"foo";
"bar";
"1234";
"one line \n new line";
"Joyo's cat";
```

### オブジェクトリテラル

オブジェクトリテラルとは、プロパティ名とそれに関連付けられたオブジェクトの値とのペアを 0 個以上集めたリストです。波括弧 (`{}`) で囲んで表します。

以下にオブジェクトリテラルの例を示します。`car` オブジェクトの最初の要素には `myCar` プロパティが定義され、新規文字列 "`Toyota`" が割り当てられています。2 番目の要素、`getCar` プロパティには関数 `carTypes('Honda')` によって呼び出された結果が即座に割り当てられます。3 番目の要素、`special` プロパティには既存の変数 (`sales`) が使われています。

```js
const sales = "BMW";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = {
  myCar: "Toyota",
  getCar: carTypes("Honda"),
  special: sales,
};

console.log(car.myCar); // Toyota
console.log(car.getCar); // Honda
console.log(car.special); // BMW
```

## 関連情報

- [Literal](<https://en.wikipedia.org/wiki/Literal_(computer_programming)>) (Wikipedia)
