---
title: HTMLSelectElement.add()
slug: Web/API/HTMLSelectElement/add
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - メソッド
  - リファレンス
browser-compat: api.HTMLSelectElement.add
translation_of: Web/API/HTMLSelectElement/add
---
{{APIRef("HTML DOM")}}

**`HTMLSelectElement.add()`** メソッドは、この `select` 要素が持つ `option` 要素の集合に要素を追加します。

## 構文

```js
collection.add(item[, before]);
```

### 引数

- _item_ は {{domxref("HTMLOptionElement")}} または
  {{domxref("HTMLOptGroupElement")}} です
- _before_ は省略可能で、集合内の要素または _long_ 型の位置を指定し、_item_ を挿入する直後のい位置を表します。この引数が `null` (または存在しない位置) であった場合、新しい要素は集合の末尾に追加されます。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : このメソッドに渡された _item_ が {{domxref("HTMLSelectElement")}} の祖先であった場合に発生します。

## 例

### 一から要素を作成

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
  理想的には下記のように生成します。

  <select>
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>
*/
```

before 引数は省略可能ですので、以下のようにすることもできます。

```js
...
sel.add(opt1);
sel.add(opt2);
...
```

### 既存の集合に追加

```js
var sel = document.getElementById("existingList");

var opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, null);

/*
  以下のような select オブジェクトがあったとします。

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>

  すると、次のように変わります。

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
    <option value="3">Option: Value 3</option>
  </select>
*/
```

before 引数は省略可能ですので、以下のようにすることもできます。

```js
...
sel.add(opt);
...
```

### 既存の集合への挿入

```js
var sel = document.getElementById("existingList");

var opt = document.createElement("option");
opt.value = "3";
opt.text = "Option: Value 3";

sel.add(opt, sel.options[1]);

/*
  以下のような select オブジェクトがあったとします。

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
  </select>

  すると、次のように変わります。

  <select id="existingList">
    <option value="1">Option: Value 1</option>
    <option value="3">Option: Value 3</option>
    <option value="2">Option: Value 2</option>
  </select>
*/
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
