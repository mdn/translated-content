---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
---

{{JSRef}}

**`localeCompare()`** 回傳一個數字，用來表示其與被比較的字串的先後順序。

如果環境中有支援[`Intl.Collator` API](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)，這個方法實際上是調用 `Intl.Collator` API。

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

## 語法

```js-nolint
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### 參數

`locales` 和 `options` 參數可以調整函數的回傳結果，並且能指定要依照哪種語言來進行比較。

在實現 [`Intl.Collator` API](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)的環境中，這些參數與 [`Intl.Collator()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) 的參數互相對應；
若環境沒有實現 `Intl.Collator` ，則這兩個參數就會被忽略，其回傳結果完全看該環境如何實作，唯一的要求是（對於同樣的字串）比較結果必須始終一致。

- `compareString`
  - : 要和`referenceStr`進行比較的字串
- `locales` {{optional_inline}}

  - : 「BCP 47 語言標籤」的字串或是陣列。相當於`Intl.Collator()`的[`locales`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales) 參數。

    如果使用的環境並未實現 `Intl.Collator`，此參數會被忽略，並且視同採用當前主機的語言環境

- `options` {{optional_inline}}

  - : 一個處理輸出格式的物件。相當於`Intl.Collator()`的 [`options`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options)參數。

    如果使用的環境並未實現`Intl.Collator` ，此參數會被忽略。

關於`locales`和`options`參數以及其使用的資訊，可參閱[`Intl.Collator()` constructor](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)。

### 回傳值

如果`referenceStr`在`compareString`以先，會回傳**負數**；若`referenceStr`在`compareString`以後，則為**正數**; `0`表示兩者相等。

如果所使用的環境有實現 `Intl.Collator`，相當於回傳 `new Intl.Collator(locales, options).compare(referenceStr, compareString)`。

## 說明

回傳 `referenceStr` 和 `compareString`的先後順序

- 若回傳負數，表示 `referenceStr`在 `compareString`以先
- 若為正數，表示 `referenceStr`在`compareString`以後
- 若回傳`0`，表示兩者相等

> **警告：** 不要依靠特定的回傳值，例如 `-1` 或是 `1`！
>
> 正數或是負數的回傳值在不同的瀏覽器(也包誇同一瀏覽器但不同版本）之間有可能會有所不同。因為 W3C 規範僅要求值得正負而已。
> 也因此，某些瀏覽器可能會回傳 `-2` 、 `2` 甚至其他值。

## 效能

如果要對大量的字串進行比較，例如排序長度很長的陣列，最好是建立一個 {{jsxref("Global_Objects/Collator", "Intl.Collator")}}物件並使用其{{jsxref("Collator.prototype.compare", "compare")}} 方法。

## 範例

### 使用 `localeCompare()`

```js
// "a" 在 "c" 之前，所以會回傳負數
"a".localeCompare("c"); // -2、-1 或是其他負數值
// 按字母順序，「check」的順序在「against」之後，所以回傳正數
"check".localeCompare("against"); // 2、1 或其他正數值
// "a" 和 "a" 相同，所以回傳 0
"a".localeCompare("a"); // 0
```

### 陣列排序

`localeCompare()` 用來進行「不分大小寫」的排序

```js
let items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### 檢查瀏覽器對額外參數的支援度

並不是所有瀏覽器都支援 `locales` 和 `options` 參數。

要檢查是否支援，可以使用 `"i"` 參數（正常情況下，非正常的語言標籤會回報錯誤）並檢查是否有 {{jsxref("RangeError")}} exception：

```js
function localeCompareSupportsLocales() {
  try {
    "foo".localeCompare("bar", "i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### 使用 `locales`

`localeCompare()`回傳的結果會因為語言而有所不同。

為了讓回傳結果依照特定語言來排序，請確保使用 `locales` 參數指定該語言（可能還要再加上其他後備語言）：

```js
console.log("ä".localeCompare("z", "de")); // 回傳負數：在德文, ä 的順序在 z 之前
console.log("ä".localeCompare("z", "sv")); // 回傳正數：在瑞典文， ä 的順序在 z 之後
```

### 使用 `options`

`localeCompare()` 可以藉由 `options` 參數來調整：

```js
// 在德文， ä 和 a 是相同字母
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0
// 在瑞典文， ä 和 a 是各自獨立的字母
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // 回傳正數
```

### 數字排序

```js
// 默認情況下, "2" > "10"
console.log("2".localeCompare("10")); // 1
// 使用 option 讓其視為數字進行比較
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1
// 使用locales標籤
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
