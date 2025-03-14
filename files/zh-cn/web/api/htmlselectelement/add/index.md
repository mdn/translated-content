---
title: HTMLSelectElement.add()
slug: Web/API/HTMLSelectElement/add
---

{{APIRef("HTML DOM")}}

**`HTMLSelectElement.add()`** 方法用于向 `select` 元素的 `option` 元素集合中添加一个元素。

## 语法

```plain
collection.add(item[, before]);
```

### 参数

- _item_ 是一个 {{domxref("HTMLOptionElement")}} 或 {{domxref("HTMLOptGroupElement")}}
- _before_ 是可选的，是集合中的一个元素或者类型为 _long_ 的一个索引，表示上面的 _item_ 在此之前插入。如果这个参数是 `null`（或索引不存在），新元素会添加在集合的末尾。

### 异常

- 如果传入的 _item_ 是 {{domxref("HTMLSelectElement")}} 的祖先元素，`HierarchyRequestError` 类型的 {{domxref("DOMError")}} 会被抛出。

## 示例

### 从零开始创建元素

```js
var sel = document.createElement("select");
var opt1 = document.createElement("option");
var opt2 = document.createElement("option");

opt1.value = "1";
opt1.text = "Option: Value 1";

opt2.value = "2";
opt2.text = "Option: Value 2";

sel.add(opt1, null);
sel.add(opt2, null);

/*
  概念上与下述代码相同：

  <select>
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>
*/
```

before 参数是可选的，因此也可以这样写：

```js
...
sel.add(opt1);
sel.add(opt2);
...
```

### 添加到已存在集合的末尾

```js
var sel = document.getElementById("existingList");

var opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, null);

/*
  获取这个已存在的 select 对象：

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>

  将其变成这样：

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
    <option value="3">Option: Value 3</option>
  </select>
*/
```

同样，before 参数是可选的，因此也可以这样写：

```js
...
sel.add(opt);
...
```

### 插入到已存在的集合中间

```js
var sel = document.getElementById("existingList");

var opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, sel.options[1]);

/*
  获取这个已存在的 select 对象：

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>

  将其变成这样：

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="3">Option: Value 3</option>
    <option value="2">Option: Value 2</option>
  </select>
*/
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
