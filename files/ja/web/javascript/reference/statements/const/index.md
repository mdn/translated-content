---
title: const
slug: Web/JavaScript/Reference/Statements/const
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Statements")}}

**`const`** 宣言はブロックスコープのローカル変数（定数）を宣言します。定数の値は[代入演算子](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)を使用して再代入することができませんが、定数が[オブジェクト](/ja/docs/Web/JavaScript/Data_structures#オブジェクト)であった場合、そのプロパティを追加したり、更新したり、削除したりすることができます。

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## 構文

```js-nolint
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : 宣言する変数名。それぞれ、正当な JavaScript [識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#識別子)または[分割結合パターン](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)でなければなりません。
- `valueN`
  - : 変数の初期値。正式な式であれば何でもかまいません。

## 解説

`const` 宣言は {{jsxref("Statements/let", "let")}} とよく似ています。

- `const` declarations are scoped to blocks as well as functions.
- `const` 宣言は宣言した位置に到達してからでないとアクセスすることができません（[一時的デッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#一時的デッドゾーン)を参照してください）。このため、 `const` 宣言は一般的に[巻き上げされない](/ja/docs/Glossary/Hoisting)と見なされます。
- スクリプトの最上位で宣言された場合、 `const` 宣言は {{jsxref("globalThis")}} にプロパティを作成しません。
- `const` 宣言は、同じスコープ内の他の宣言によって[再宣言](/ja/docs/Web/JavaScript/Reference/Statements/let#redeclarations)することはできません。
- `const` は[文ではなく宣言](/ja/docs/Web/JavaScript/Reference/Statements#文と宣言の違いについて)を始めます。つまり、ブロックの本体として単独の `const` 宣言を使用することはできません（変数にアクセスする方法がないので、意味はあります）。

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

定数の初期化子が必要です。同じ宣言の中でその値を指定しなければなりません。（後で変更できないことを考えると、これは意味のあることです。）

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

`const` 宣言は値への不変の参照を作成します。これはその値が不変であるという意味ではなく、変数の識別子が再割り当てできないという意味です。例えば、内容がオブジェクトの場合、これはオブジェクトの内容（例えばプロパティ）は変更できることを意味しています。 `const` 宣言は「アイデンティティが一定の変数を作成する」のであって、「値が一定の変数を作成する」のではありません。また、「不変の{{Glossary("binding", "バインド")}}」を作成するのであって、「不変の値」を作成するのではありません。

多くのスタイルガイド（[MDN](/ja/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#変数の宣言) のものも含む）では、変数がそのスコープで再代入されない場合は、 `const` を {{jsxref("Statements/let", "let")}} の代わりに使用することを推奨しています。これにより、変数の型（プリミティブの場合は値）が変更されることはないという意図が明確になります。他にも、プリミティブ以外の変数が変更される場合は `let` を推奨する人もいます。

`const` キーワードに続くリストは{{Glossary("binding","バインディング")}}リストと呼ばれ、カンマで区切られます。カンマは[カンマ演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comma_operator)ではなく、 `=` は[代入演算子](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)ではありません。後の変数の初期化子は、リスト内の前の変数を参照することができます。

## 例

### 基本的な定数の使い方

定数は大文字または小文字で宣言することができますが、特にプリミティブの場合は、本当に変更不可能であるので、すべて大文字で宣言するのが慣例です。

```js
// MY_FAV を定数として定義して、その値を 7 にします
const MY_FAV = 7;

console.log("my favorite number is: " + MY_FAV);
```

```js-nolint example-bad
// Re-assigning to a constant variable throws an error
MY_FAV = 20; // TypeError: Assignment to constant variable

// Redeclaring a constant throws an error
const MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
let MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
```

### ブロックスコープ

ブロックスコープの性質に注意することが重要です。

```js-nolint
const MY_FAV = 7;

if (MY_FAV === 7) {
  // これは問題なく、ブロックスコープの MY_FAV 変数を作成します
  const MY_FAV = 20;
  console.log(MY_FAV); // 20

  // これはグローバルコンテキストに巻き上げられ、エラーが発生します
  var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
}

console.log(MY_FAV); // 7
```

### オブジェクトと配列の定数

`const` はオブジェクトや 配列にも作用します。オブジェクトを上書きしようとすると、"Assignment to constant variable" というエラーが発生します。

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

しかし、オブジェクトのキーは保護されていないので、次の文は問題なく実行されます。

```js
MY_OBJECT.key = "otherValue";
```

オブジェクトを不変にするには、 {{jsxref("Object.freeze()")}} を使用する必要があります。

配列も同様です。新しい配列を変数に割り当て要とすると、"Assignment to constant variable" のエラーが発生します。

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

しかし、配列にアイテムを追加することはでき、変更は可能です。

```js
MY_ARRAY.push("A"); // ["A"]
```

### 分割代入による宣言

それぞれの `=` の左辺はバインドパターンにもなります。これにより、一度に複数の変数を作成することができます。

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

詳しくは、[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [JavaScript ガイドの定数](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#定数)
