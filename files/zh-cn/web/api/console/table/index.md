---
title: Console.table()
slug: Web/API/console/table
---

{{APIRef("Console API")}}

将数据以表格的形式显示。

这个方法需要一个必须参数 `data`，`data` 必须是一个数组或者是一个对象；还可以使用一个可选参数 `columns`。

它会把数据 `data` 以表格的形式打印出来。数组中的每一个元素（或对象中可枚举的属性）将会以行的形式显示在表格中。

表格的第一列是 `index`。如果数据 `data` 是一个数组，那么这一列的单元格的值就是数组的索引。如果数据是一个对象，那么它们的值就是各对象的属性名称。注意（在 FireFox 中）`console.table` 被限制为只显示 1000 行（第一行是被标记的索引（原文：labeled index））。

{{AvailableInWorkers}}

### 打印单一参数类型

数据的参数类型可以是数组或是对象。

```js
// 打印一个由字符串组成的数组

console.table(["apples", "oranges", "bananas"]);
```

![](console-table-array.png)

```js
// 打印一个属性值是字符串的对象

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("John", "Smith");

console.table(me);
```

![](console-table-simple-object.png)

### 打印复合的参数类型

如果需要打印的元素在一个数组中，或者需要打印的属性在一个对象，并且他们本身就是一个数组或者对象，则将会把这个元素显示在同一行，每个元素占一列：

```js
// 二元数组的打印

var people = [
  ["John", "Smith"],
  ["Jane", "Doe"],
  ["Emily", "Jones"],
];
console.table(people);
```

![Table displaying array of arrays](console-table-array-of-array.png)

```js
// 打印一个包含对象的数组

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily]);
```

请注意，如果数组包含对象，则列将使用属性名称进行标记。

结果显示，如果数组中包含该对象，打印出来的列标签将是该对象的属性名

![Table displaying array of objects](console-table-array-of-objects.png)

```js
// 打印属性名是对象的对象

var family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);
```

![Table displaying object of objects](console-table-object-of-objects.png)

### 选择要隐藏的列

`console.table()` 会把所有元素罗列在每一列，你可以使用 `columns` 参数选择要显示的列的子集：

```js
// 一个对象数组，只打印 firstName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily], ["firstName"]);
```

![Table displaying array of objects with filtered output](console-table-array-of-objects-firstname-only.png)

### 按列重新排序

你可以点击每列的顶部标签来重排输出的表格。

## 语法

```plain
console.table(data [, columns]);
```

### 参数

- `data`
  - : 要显示的数据。必须是数组或对象。
- `columns`
  - : 一个包含列的名称的数组。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
