---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
tags:
  - Internationalization
  - JavaScript
  - String.prototype.localeCompare()
  - Prototype
  - 参考
  - 字串
translation_of: Web/JavaScript/Reference/Global_Objects/String/localeCompare
---
{{JSRef}}

**`localeCompare()`** 回傳一個數字，用來表示其與被比較的字串的先後順序。

如果環境中有支援[`Intl.Collator` API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)，這個方法實際上是調用 `Intl.Collator` API。

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

## 語法

```js
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### 參數

The `locales` and `options` parameters customize the behavior of the function and let applications specify the language whose formatting conventions should be used.

In implementations that support the [`Intl.Collator` API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator), these parameters correspond exactly to the [`Intl.Collator()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) constructor's parameters. Implementations without `Intl.Collator` support are asked to ignore both parameters, making the comparison result returned entirely implementation-dependent — it's only required to be _consistent_.

- `compareString`
  - : 要和`referenceStr`進行比較的字串
- `locales` {{optional_inline}}
  - : 「BCP 47 語言標籤」的字串或是陣列。相當於`Intl.Collator()`的[`locales`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales) 參數.

    如果使用的環境並未實現 `Intl.Collator`，此參數會被忽略，並且視同採用當前主機的語言環境
- `options` {{optional_inline}}
  - : 一個處理輸出格式的物件。相當於`Intl.Collator()`的 [`options`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options)參數。

    如果使用的環境並未實現`Intl.Collator` ，此參數會被忽略。

關於`locales`和`options`參數以及其使用的資訊，可參閱[`Intl.Collator()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)。

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
> 

## 效能

如果要對大量的字串進行比較，例如排序長度很長的陣列，最好是建立一個 {{jsxref("Global_Objects/Collator", "Intl.Collator")}}物件並使用其{{jsxref("Collator.prototype.compare", "compare")}} 方法。

## 範例

### 使用 `localeCompare()`

```js
// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)
// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)
// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0
```

### 陣列排序

`localeCompare()` enables case-insensitive sorting for an array.

```js
let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### 檢查瀏覽器對額外參數的支援度

The `locales` and `options` arguments are
not supported in all browsers yet.

To check whether an implementation supports them, use the `"i"` argument (a
requirement that illegal language tags are rejected) and look for a
{{jsxref("RangeError")}} exception:

```js
function localeCompareSupportsLocales() {
  try {
    'foo'.localeCompare('bar', 'i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

### 使用 `locales`

The results provided by `localeCompare()` vary between languages. In order
to get the sort order of the language used in the user interface of your application,
make sure to specify that language (and possibly some fallback languages) using the
`locales` argument:

```js
console.log('ä'.localeCompare('z', 'de')); // 回傳負數：在德文, ä 的順序在 z 之前
console.log('ä'.localeCompare('z', 'sv')); // 回傳正數：在瑞典文， ä 的順序在 z 之後
```

### 使用 `options`

The results provided by `localeCompare()` can be customized using the
`options` argument:

```js
// 在德文， ä 和 a 是相同字母
console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // 0
// 在瑞典文， ä 和 a 是各自獨立的字母
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // 回傳正數
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
