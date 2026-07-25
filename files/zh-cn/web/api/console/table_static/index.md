---
title: console：table() 静态方法
short-title: table()
slug: Web/API/console/table_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.table()`** 静态方法将表格数据以表格形式显示出来。

## 语法

```js-nolint
console.table(data)
console.table(data, columns)
```

### 参数

- `data`
  - : 要显示的数据。该数据必须是数组或对象。数组中的每个元素或对象中的每个属性，在表格中均由一行表示。表格的第一列标记为 `(index)`，其值为数组索引或属性名称。

    如果数组中的元素或对象中的属性本身也是数组或对象，则其子元素或子属性将按列逐一列在该行中，每列一个。

    请注意，在 Firefox 中，`console.table()` 最多只能显示 1000 行，包括标题行。

- `columns` {{optional_inline}}
  - : 一个可用于限制表格中显示列的数组。如果 `data` 的每个条目都是数组，则该数组包含索引；如果 `data` 的每个条目都是对象，则该数组包含属性名称。生成的表格中将仅包含与给定索引或名称匹配的列。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 原始类型集合

`data` 参数的类型可以是数组或对象。

```js
// 字符串数组

console.table(["apples", "oranges", "bananas"]);
```

| （索引） | 值        |
| -------- | --------- |
| 0        | 'apples'  |
| 1        | 'oranges' |
| 2        | 'bananas' |

```js
// 属性值为字符串的对象

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const me = new Person("Tyrone", "Jones");

console.table(me);
```

| （索引）  | 值       |
| --------- | -------- |
| firstName | 'Tyrone' |
| lastName  | 'Jones'  |

### 复合类型集合

如果需要打印的元素在一个数组中，或者需要打印的属性在一个对象，并且他们本身就是一个数组或者对象，则将会把这个元素显示在同一行，每个元素占一列：

```js
// 二元数组的打印

const people = [
  ["John", "Smith"],
  ["Jane", "Doe"],
  ["Emily", "Jones"],
];
console.table(people);
```

| （索引） | 0        | 1       |
| -------- | -------- | ------- |
| 0        | 'Tyrone' | 'Jones' |
| 1        | 'Janet'  | 'Smith' |
| 2        | 'Maria'  | 'Cruz'  |

```js
// 对象数组

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([john, jane, emily]);
```

如果数组包含对象，则列将使用属性名称进行标记。

| （索引） | firstName | lastName |
| -------- | --------- | -------- |
| 0        | 'Tyrone'  | 'Jones'  |
| 1        | 'Janet'   | 'Smith'  |
| 2        | 'Maria'   | 'Cruz'   |

```js
// 属性为对象的对象

const family = {};

family.mother = new Person("Janet", "Jones");
family.father = new Person("Tyrone", "Jones");
family.daughter = new Person("Maria", "Jones");

console.table(family);
```

| （索引） | firstName | lastName |
| -------- | --------- | -------- |
| daughter | 'Maria'   | 'Jones'  |
| father   | 'Tyrone'  | 'Jones'  |
| mother   | 'Janet'   | 'Jones'  |

### 限制要显示的列

默认情况下，`console.table()` 会列出每一行中的所有元素。可以使用可选的 `columns` 参数来选择要显示的列子集：

```js
// 对象数组，只打印 firstName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const tyrone = new Person("Tyrone", "Jones");
const janet = new Person("Janet", "Smith");
const maria = new Person("Maria", "Cruz");

console.table([john, jane, emily], ["firstName"]);
```

| （索引） | firstName |
| -------- | --------- |
| 0        | 'Tyrone'  |
| 1        | 'Janet'   |
| 2        | 'Maria'   |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Microsoft Edge 关于 `console.table()` 的文档](https://learn.microsoft.com/zh-cn/microsoft-edge/devtools/console/api#table)
- [Node.js 关于 `console.table()` 的文档](https://nodejs.org/docs/latest/api/console.html#consoletabletabulardata-properties)
- [Google Chrome 关于 `console.table()` 的文档](https://developer.chrome.google.cn/docs/devtools/console/api/#table)
