---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
---

{{JSRef}}

**`hasOwnProperty()`** 回傳物件是否有該屬性的布林值。

## 表達式

```js-nolint
obj.hasOwnProperty(prop)
```

### 參數

- `prop`
  - : 屬性名稱。

## 說明

每個為 {{jsxref("Object")}} 後代的物件都繼承 `hasOwnProperty` 方法。這個方法可以被使用來決定物件是否擁有特定的直接屬性；跟 {{jsxref("Operators/in", "in")}} 不一樣，這個方法並未檢查物件的原型鏈。

## 範例

### 使用 `hasOwnProperty` 測試屬性是否存在

這個範例顯示 `o` 物件是否擁有名為 `prop` 的屬性:

```js
o = new Object();
o.prop = "exists";

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty("prop"); // 回傳 true
changeO();
o.hasOwnProperty("prop"); // 回傳 false
```

### 直接與繼承的屬性

這個範例區分直接屬性和從原型鍊繼承的屬性：

```js
o = new Object();
o.prop = "exists";
o.hasOwnProperty("prop"); // 回傳 true
o.hasOwnProperty("toString"); // 回傳 false
o.hasOwnProperty("hasOwnProperty"); // 回傳 false
```

### 遍歷物件的屬性

這個範例顯示如何不執行繼承的屬性去遍歷物件的屬性。注意 {{jsxref("Statements/for...in", "for...in")}} 已經遍歷了可以被列舉的項目，所以不該基於缺乏不可列舉的屬性(如下)而假設 `hasOwnProperty` 被嚴格地限制在列舉的項目（如同 {{jsxref("Object.getOwnPropertyNames()")}}）。

```js
var buz = {
  fog: "stack",
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log("this is fog (" + name + ") for sure. Value: " + buz[name]);
  } else {
    console.log(name); // toString or something else
  }
}
```

### `將 hasOwnProperty` 作為屬性

JavaScript 並未保護 `hasOwnProperty`；因此，如果一個物件擁有一樣的屬性名稱，為了獲得正確的結果需要使用 _external_ `hasOwnProperty`：

```js
var foo = {
  hasOwnProperty: function () {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar"); // 總是回傳 false

// 使用其他物件的 hasOwnProperty 和 call it with 'this' set to foo
({}).hasOwnProperty.call(foo, "bar"); // true

// 從物件的原型使用 hasOwnProperty 也是可行的
Object.prototype.hasOwnProperty.call(foo, "bar"); // true
```

註：在最後一個例子中並未創建任何新的物件。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Enumerability and ownership of properties](/zh-TW/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [JavaScript Guide: Inheritance revisited](/zh-TW/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
