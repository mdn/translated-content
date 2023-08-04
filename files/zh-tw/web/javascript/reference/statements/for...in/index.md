---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
---

{{jsSidebar("Statements")}}

迭代物件的可列舉屬性。對每個相異屬性，執行陳述式。

<table>
  <thead>
    <tr>
      <th colspan="2">Statement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Implemented in:</td>
      <td>JavaScript 1.0</td>
    </tr>
    <tr>
      <td>ECMA Version:</td>
      <td>ECMA-262</td>
    </tr>
  </tbody>
</table>

## 語法

```plain
for (變數 in 物件) {...
}
```

### 參數

- `變數`
  - : A different property name is assigned to _variable_ on each iteration.
- `物件`
  - : Object whose enumerable properties are iterated.

## Description

`for...in` 迴圈只迭代可列舉屬性。由內建建構式(如：Array、Object) 製造的物件，從 `Object.prototype` 和 `String.prototype` 繼承了不可列舉屬性，如： [`String`](/zh-TW/docs/JavaScript/Reference/Global_Objects/String)的[`indexOf`](/zh-TW/docs/JavaScript/Reference/Global_Objects/String/indexOf) 方法，或 [`Object`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object)的 [`toString`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/toString) 方法。 迴圈將迭代全部可列舉屬性，包括了物件自身的和物件繼承自它的建構式之原型的可列舉屬性。(原型鏈上較接近物件的屬性覆蓋原型的屬性)

A `for...in` loop iterates over the properties of an object in an arbitrary order (see the [delete operator](/zh-TW/docs/JavaScript/Reference/Operators/delete#Cross-browser_issues) for more on why one cannot depend on the seeming orderliness of iteration, at least in a cross-browser setting). If a property is modified in one iteration and then visited at a later time, its value in the loop is its value at that later time. A property that is deleted before it has been visited will not be visited later. Properties added to the object over which iteration is occurring may either be visited or omitted from iteration. In general it is best not to add, modify or remove properties from the object during iteration, other than the property currently being visited. There is no guarantee whether or not an added property will be visited, whether a modified property (other than the current one) will be visited before or after it is modified, or whether a deleted property will be visited before it is deleted.

> **備註：** If you only want to consider properties attached to the object itself, and not its prototypes, use [getOwnPropertyNames](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) or perform a [hasOwnProperty](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) check ([propertyIsEnumerable](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) can also be used). Alternatively, if you know there won't be any outside code interference, you can extend built-in prototypes with a check method.

> **備註：** `for..in` 不應該用來迭代一個索引順序很重要的[陣列](/zh-TW/docs/JavaScript/Reference/Global_Objects/Array)。 陣列索引只是以整數命名的可列舉屬性，其他方面等同於一般物件屬性。 無法擔保 `for...in` 以特定順序傳回索引，並且它將傳回全部可列舉屬性，包括非整數名的，以及繼承而來的可列舉屬性。因為迭代的順序依賴於 JavaScript 引擎的實作，在不同引擎下，迭代一個陣列可能不是以一個一致的順序存取陣列元素。因此，當你迭代陣列，且該陣列的存取順序很重要時，最好是使用以數值索引的 [for](/zh-TW/docs/JavaScript/Reference/Statements/for) 迴圈 (或 [Array.forEach](/zh-TW/docs/JavaScript/Reference/Global_Objects/Array/forEach) 或非標準 [`for...of`](/zh-TW/docs/JavaScript/Reference/Statements/for...of) 迴圈)。

## Examples

The following function takes as its arguments an object and the object's name. It then iterates over all the object's enumerable properties and returns a string of the property names and their values.

```js
var o = { a: 1, b: 2, c: 3 };

function show_props(obj, objName) {
  var result = "";

  for (var prop in obj) {
    result += objName + "." + prop + " = " + obj[prop] + "\n";
  }

  return result;
}

alert(
  show_props(o, "o"),
); /* alerts (in different lines): o.a = 1 o.b = 2 o.c = 3 */
```

The following function illustrates the use of hasOwnProperty: the inherited properties are not displayed.

```js
var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

function show_own_props(obj, objName) {
  var result = "";

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += objName + "." + prop + " = " + obj[prop] + "\n";
    }
  }

  return result;
}

o = new ColoredTriangle();
alert(show_own_props(o, "o")); /* alerts: o.color = red */
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## See also

- [`for...of`](/zh-TW/docs/JavaScript/Reference/Statements/for...of) - a similar statement that iterates over the property _values_
- [`for each...in`](/zh-TW/docs/JavaScript/Reference/Statements/for_each...in) - a similar statement, but iterates over the values of object's properties, rather than the property names themselves ([New in JavaScript 1.6](/zh-TW/docs/JavaScript/New_in_JavaScript/1.6) but deprecated)
- [for](/zh-TW/docs/JavaScript/Reference/Statements/for)
- [Generator expressions](/zh-TW/docs/JavaScript/Guide/Iterators_and_Generators) (uses the `for...in` syntax)
- [Enumerability and ownership of properties](/zh-TW/docs/Enumerability_and_ownership_of_properties)
- [`getOwnPropertyNames`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`hasOwnProperty`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [`Array.prototype.forEach`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Array/forEach)
