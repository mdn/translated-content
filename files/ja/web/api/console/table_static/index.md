---
title: "console: table() 静的メソッド"
short-title: table()
slug: Web/API/console/table_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.table()`** 静的メソッドは、表形式のデータを表として表示します。

## 構文

```js-nolint
console.table(data)
console.table(data, columns)
```

### 引数

- `data`
  - : 表示するデータ。これは配列またはオブジェクトでなければなりません。配列のそれぞれのアイテム、またはオブジェクトのそれぞれのプロパティは、表内の 1 行として表現されます。表の最初の列は `(添字)` とラベルが付き、その値は配列のインデックスまたはプロパティ名となります。

    配列内の要素、またはオブジェクトのプロパティがそれ自体が配列またはオブジェクトである場合、それらのアイテムまたはプロパティは行ごとに列ごとに 1 つずつ列挙されます。

    Firefox では、`console.table()` は見出し行を含め 1000 行までしか表示させられないことに注意してください。

- `columns` {{optional_inline}}
  - : 表に表示する列を制限するために使用できる配列です。`data` の各項目が配列の場合、インデックスを格納します。`data` の各項目がオブジェクトの場合、プロパティ名を保持します。結果として生成される表には、指定された位置または名前に一致する項目の列のみが含まれます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

## プリミティブ型のコレクション

引数 `data` に、配列またはオブジェクトを渡すことができます。

```js
// 文字列の配列

console.table(["apples", "oranges", "bananas"]);
```

| (添字) | 値        |
| ------ | --------- |
| 0      | 'apples'  |
| 1      | 'oranges' |
| 2      | 'bananas' |

```js
// 文字列がプロパティであるオブジェクト

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const me = new Person("Tyrone", "Jones");

console.table(me);
```

| (添字)    | 値       |
| --------- | -------- |
| firstName | 'Tyrone' |
| lastName  | 'Jones'  |

### 複合的な型の集合

配列の要素やオブジェクトのプロパティが、それ自身配列やオブジェクトである場合、その要素やプロパティは列ごとに 1 つずつ、行に列挙されます。

```js
// 配列の配列

const people = [
  ["Tyrone", "Jones"],
  ["Janet", "Smith"],
  ["Maria", "Cruz"],
];
console.table(people);
```

| (添字) | 0        | 1       |
| ------ | -------- | ------- |
| 0      | 'Tyrone' | 'Jones' |
| 1      | 'Janet'  | 'Smith' |
| 2      | 'Maria'  | 'Cruz'  |

```js
// オブジェクトの配列

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria]);
```

配列にオブジェクトが含まれている場合、列にはプロパティ名が表示されることに注意してください。

| (添字) | firstName | lastName |
| ------ | --------- | -------- |
| 0      | 'Tyrone'  | 'Jones'  |
| 1      | 'Janet'   | 'Smith'  |
| 2      | 'Maria'   | 'Cruz'   |

```js
// 値がオブジェクトのプロパティを持つオブジェクト

const family = {};

family.mother = new Person("Janet", "Jones");
family.father = new Person("Tyrone", "Jones");
family.daughter = new Person("Maria", "Jones");

console.table(family);
```

| (添字)   | firstName | lastName |
| -------- | --------- | -------- |
| daughter | 'Maria'   | 'Jones'  |
| father   | 'Tyrone'  | 'Jones'  |
| mother   | 'Janet'   | 'Jones'  |

### 表示する列を制限する

既定では、`console.table()` はすべての要素を各行に出力します。省略可能な引数 `columns` を使用すると、表示する列のサブセットを選択することができます。

```js
// オブジェクトの配列、ただし firstName のみ表示

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([tyrone, janet, maria], ["firstName"]);
```

| (添字) | firstName |
| ------ | --------- |
| 0      | 'Tyrone'  |
| 1      | 'Janet'   |
| 2      | 'Maria'   |

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Microsoft Edge's documentation for `console.table()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#table)
- [Node.js documentation for `console.table()`](https://nodejs.org/docs/latest/api/console.html#consoletabletabulardata-properties)
- [Google Chrome's documentation for `console.table()`](https://developer.chrome.com/docs/devtools/console/api/#table)
