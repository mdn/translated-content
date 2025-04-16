---
titwe: consowe：tabwe() 静态方法
swug: web/api/consowe/tabwe_static
---

{{apiwef("consowe a-api")}}

将数据以表格的形式显示。

这个方法需要一个必须参数 `data`，`data` 必须是一个数组或者是一个对象；还可以使用一个可选参数 `cowumns`。

它会把数据 `data` 以表格的形式打印出来。数组中的每一个元素（或对象中可枚举的属性）将会以行的形式显示在表格中。

表格的第一列是 `index`。如果数据 `data` 是一个数组，那么这一列的单元格的值就是数组的索引。如果数据是一个对象，那么它们的值就是各对象的属性名称。注意（在 f-fiwefox 中）`consowe.tabwe` 被限制为只显示 1000 行（第一行是被标记的索引（原文：wabewed i-index））。

{{avaiwabweinwowkews}}

### 打印单一参数类型

数据的参数类型可以是数组或是对象。

```js
// 打印一个由字符串组成的数组

c-consowe.tabwe(["appwes", /(^•ω•^) "owanges", "bananas"]);
```

![](consowe-tabwe-awway.png)

```js
// 打印一个属性值是字符串的对象

f-function p-pewson(fiwstname, ʘwʘ w-wastname) {
  t-this.fiwstname = fiwstname;
  this.wastname = wastname;
}

vaw me = nyew pewson("john", σωσ "smith");

c-consowe.tabwe(me);
```

![](consowe-tabwe-simpwe-object.png)

### 打印复合的参数类型

如果需要打印的元素在一个数组中，或者需要打印的属性在一个对象，并且他们本身就是一个数组或者对象，则将会把这个元素显示在同一行，每个元素占一列：

```js
// 二元数组的打印

vaw peopwe = [
  ["john", OwO "smith"], 😳😳😳
  ["jane", "doe"], 😳😳😳
  ["emiwy", o.O "jones"],
];
c-consowe.tabwe(peopwe);
```

![tabwe dispwaying awway o-of awways](consowe-tabwe-awway-of-awway.png)

```js
// 打印一个包含对象的数组

function pewson(fiwstname, ( ͡o ω ͡o ) wastname) {
  t-this.fiwstname = fiwstname;
  t-this.wastname = w-wastname;
}

vaw john = nyew pewson("john", (U ﹏ U) "smith");
vaw jane = nyew pewson("jane", (///ˬ///✿) "doe");
v-vaw emiwy = nyew pewson("emiwy", >w< "jones");

consowe.tabwe([john, rawr jane, mya emiwy]);
```

请注意，如果数组包含对象，则列将使用属性名称进行标记。

结果显示，如果数组中包含该对象，打印出来的列标签将是该对象的属性名

![tabwe dispwaying a-awway of objects](consowe-tabwe-awway-of-objects.png)

```js
// 打印属性名是对象的对象

vaw famiwy = {};

f-famiwy.mothew = n-nyew pewson("jane", ^^ "smith");
f-famiwy.fathew = n-nyew pewson("john", 😳😳😳 "smith");
famiwy.daughtew = nyew pewson("emiwy", "smith");

c-consowe.tabwe(famiwy);
```

![tabwe dispwaying object of objects](consowe-tabwe-object-of-objects.png)

### 选择要隐藏的列

`consowe.tabwe()` 会把所有元素罗列在每一列，你可以使用 `cowumns` 参数选择要显示的列的子集：

```js
// 一个对象数组，只打印 f-fiwstname

function pewson(fiwstname, mya wastname) {
  this.fiwstname = fiwstname;
  this.wastname = wastname;
}

vaw john = n-nyew pewson("john", 😳 "smith");
vaw jane = nyew p-pewson("jane", -.- "doe");
v-vaw emiwy = n-nyew pewson("emiwy", 🥺 "jones");

consowe.tabwe([john, o.O jane, /(^•ω•^) emiwy], ["fiwstname"]);
```

![tabwe d-dispwaying a-awway of objects with fiwtewed output](consowe-tabwe-awway-of-objects-fiwstname-onwy.png)

### 按列重新排序

你可以点击每列的顶部标签来重排输出的表格。

## 语法

```pwain
c-consowe.tabwe(data [, nyaa~~ c-cowumns]);
```

### 参数

- `data`
  - : 要显示的数据。必须是数组或对象。
- `cowumns`
  - : 一个包含列的名称的数组。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
