---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
---

{{AddonSidebar()}}

從儲存空間內檢查一個或多個單元（item）。

這個非同步函式會回傳 [`Promise`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 語法

```js
let gettingItem = browser.storage.<storageType>.get(
  keys    // null, string, object or array of strings
)
```

`<storageType>` 會是以下可覆寫的儲存類型之一：{{WebExtAPIRef("storage.sync")}} 或 {{WebExtAPIRef("storage.local")}}。

### 參數

- `keys`
  - : 用來識別要檢查單元的 key（單個為字串；多個為陣列、或指定預設值的物件）。如果把這裡留空（空字串、空陣列、空物件都可以），就會取得空物件。如果是 `null` 或 undefined，則會取得所有儲存的內容。

### 回傳值

[`Promise`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a `results` object containing every object in `keys` that was found in the storage area. If the operation failed, the promise will be rejected with an error message.

> **警告：** When used within a content script in Firefox versions prior to 52, the Promise returned by `browser.storage.local.get()` is fulfilled with an Array containing one Object. The Object in the Array contains the `keys` found in the storage area, as described above. The Promise is correctly fulfilled with an Object when used in the background context (background scripts, popups, options pages, etc.). When this API is used as `chrome.storage.local.get()`, it correctly passes an Object to the callback function.

## 瀏覽器相容性

{{Compat}}

## 示例

假設儲存空間有以下單元：

```js
// 兩個單元：「kitten」與「monster」
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

Define success and failure handlers for the promise:

```js
function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
```

With no `keys` argument, retrieve everything:

```js
let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

With an empty keys argument, return nothing:

```js
// with an empty array, retrieve nothing
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -> Object { }
```

With the name of an object, retrieve the match:

```js
let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -> Object { kitten: Object }
```

With an array of object names, retrieve all matches:

```js
let gettingItem = browser.storage.local.get([
  "kitten",
  "monster",
  "grapefruit",
]);
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

With an object with object names as keys and the default value as value:

```js
let gettingItem = browser.storage.local.get({
  kitten: "no kitten",
  monster: "no monster",
  grapefruit: {
    name: "Grape Fruit",
    eats: "Water",
  },
});

// -> Object { kitten: Object, monster: Object, grapefruit: Object }
```

{{WebExtExamples}}

### Chrome 示例

```js
chrome.storage.local.get("kitten", function (items) {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

Or with an arrow function

```js
chrome.storage.local.get("kitten", (items) => {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

> **備註：** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/extensions/storage) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
