---
title: 可選串連
slug: Web/JavaScript/Reference/Operators/Optional_chaining
---

{{JSSidebar("Operators")}}

**可選串連**運算子 **`?.`** 允許進行深層次的物件值存取，而無需透過明確的物件值串連驗證。`?.` 運算子的操作與 `.` 屬性存取運算子相似，後者會在參照到 [nullish](/zh-TW/docs/Glossary/nullish) ({{JSxRef("null")}} or {{JSxRef("undefined")}}) 的值時出現錯誤，而前者可選串連則回傳 `undefined` 。 當需要存取一個函數，而這函數並不存在時，則會回傳 `undefined` 。

當有機會存在參照不存在的時候，可選串連可以提供更簡短的表述式來進行串連性的屬性存取。這有助於在無法保證物件屬性為必要存在的狀況下，進行物件內容的探索。

{{InteractiveExample("JavaScript Demo: Expressions - Optional chaining operator", "taller")}}

```js interactive-example
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```

## 語法

```plain
obj?.prop
obj?.[expr]
arr?.[index]
func?.(args)
```

## 描述

當串連物件裡面的參照或方法可能是`undefined` 或 `null` 時，可選串連運算子提供簡單的方法去存取這些串連物件下的值。

舉例來說，當一個物件 `obj` 是巢狀結構時，在沒有可選串連之下，要去查找一深層的屬性值需要驗證每層間的參照連結：

```js
let nestedProp = obj.first && obj.first.second;
```

`obj.first` 的值需要先確定不是 `null` 值（和並非 `undefined` ），才能存取 `obj.first.second` 的值。這才能避免在存取值時，因為直接使用 `obj.first.second` 而沒有測試 `obj.first` 之下帶來的錯誤。

當使用了可選串連運算子（`?.`），你不再需要明確地進行測測，並能在基於 `obj.first` 的狀態下直接回傳，忽略存取 `obj.first.second` 的動作：

```js
let nestedProp = obj.first?.second;
```

從只是 `.` 改用作 `?.` 運算子，JavaScript 會知道在存取 `obj.first.second` 之前，需要間接地檢查並確保 `obj.first` 並不是 `null` 或 `undefined` 。當 `obj.first` 是 `null` 或 `undefined` ，運算式會像短路一樣跳過整個串連存取式，而回傳 `undefined` 。

這是跟以下是相等同的，但是實際上是不會建立臨時變數：

```js
let temp = obj.first;
let nestedProp = temp === null || temp === undefined ? undefined : temp.second;
```

### 可選串連呼叫函數

你可以使用可選串連來嘗試呼叫一個或許沒有存在的方法。這可能有助於，舉例來說，使用一些未能提供服務的 API ，這可能因為過時的應用或是使用者的裝置未能支援某種功能。

當需要使用的方法並不存在時，透過可選串連去進行呼叫將不會抛出錯誤，取而代之的是回傳 `undefined` ：

```js
let result = someInterface.customMethod?.();
```

> [!NOTE]
> 假如物件有同樣的屬性名稱，而不是一個方法，使用 `?.` 將會抛出 {{JSxRef("TypeError")}} 錯誤（`x.y 不是一個函數`）。

#### 處理回呼函式或事件處理器

如果你使用回呼函式，或是透過[解構賦值](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring)來擷取物件中的方法，你可能會因為這些方法沒有存在，而無法進行呼叫，除非你事先驗證其存在性。所以，你可以利用 `?.` 來避免這樣的測試：

```js
// 在 ES2019 下撰寫
function doSomething(onContent, onError) {
  try {
    // ... 對資料進行一些處理
  } catch (err) {
    if (onError) {
      // 測試 onError 是否真的存在
      onError(err.message);
    }
  }
}
```

```js
// 使用可選串連進行函式呼叫
function doSomething(onContent, onError) {
  try {
    // ... 對資料進行一些處理
  } catch (err) {
    onError?.(err.message); // 就算 onError 是 undefined 也不會抛出錯誤
  }
}
```

### 可選串連表述式

你也可以在[方括號屬性存取](/zh-TW/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation)表達式中使用可選串連：

```js
let nestedProp = obj?.["prop" + "Name"];
```

### 矩陣項目的可選串連

```js
let arrayItem = arr?.[42];
```

## 範例

### 基本範例

這個範例會找出 Map 物件中一個鍵為 `bar` 成員的 `name` 屬性值，但事實上並沒有相關成員。所以結果為 `undefined` 。

```js
let myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

let nameBar = myMap.get("bar")?.name;
```

### 短路式運算

當可選串連接上表述式時，如果左邊的運算數值是 `null` 或 `undefined` ，表述式則不會被運算。舉例來說：

```js
let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // 因為 x 沒有遞增，所以為 0
```

### 串接多個可選串連

在巢狀結構中可以使用多次的可選串連：

```js
let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // 詳細地址 address 並不知道
  },
};
let customerCity = customer.details?.address?.city;

// … 同樣地，串接多個可選串連來呼叫函式也是湊效的
let duration = vacations.trip?.getTime?.();
```

### 使用空值合併運算子

在可選串連後可以使用{{JSxRef("Operators/Nullish_Coalescing_Operator", "空值合併運算子", '', 1)}}來編配預設值，如果無法在屬性串連中取得值：

```js
let customer = {
  name: "Carl",
  details: { age: 82 },
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{JSxRef("Operators/Nullish_Coalescing_Operator", "空值合併運算子", '', 1)}}
- [TC39 proposals](https://github.com/tc39/proposals)
