---
title: "HTMLSelectElement: add() メソッド"
short-title: add()
slug: Web/API/HTMLSelectElement/add
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLSelectElement.add()`** メソッドは、この `select` 要素が持つ `option` 要素の集合に要素を追加します。

## 構文

```js-nolint
add(item)
add(item, before)
```

### 引数

- `item`
  - : {{domxref("HTMLOptionElement")}} または
    {{domxref("HTMLOptGroupElement")}} です
- `before` {{optional_inline}}
  - : 集合内の要素または _long_ 型で位置を指定します。_item_ はその直前に挿入されます。この引数が `null`（または存在しない位置）であった場合、新しい要素は集合の末尾に追加されます。

### 返値

なし（{{jsxref("undefined")}}）。

### 例外

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : このメソッドに渡された _item_ が {{domxref("HTMLSelectElement")}} の祖先であった場合に発生します。

## 例

### 一から要素を作成

```js
const sel = document.createElement("select");
const opt1 = document.createElement("option");
const opt2 = document.createElement("option");

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
sel.add(opt1);
sel.add(opt2);
```

### 既存の集合に追加

```js
const sel = document.getElementById("existingList");

const opt = document.createElement("option");
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
sel.add(opt);
```

### 既存の集合への挿入

```js
const sel = document.getElementById("existingList");

const opt = document.createElement("option");
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
