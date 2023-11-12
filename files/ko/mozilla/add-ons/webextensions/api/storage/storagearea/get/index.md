---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
---

{{AddonSidebar()}}

저장소에서 하나 이상의 항목을 가져온다.

비동기 함수로 [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 돌려준다.

## 문법

```js
    let gettingItem = browser.storage.<storageType>.get(
      keys    // null, string, object or array of strings
    )
```

`<storageType>`는 읽기 가능한 저장소 중의 하나다 — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, 또는 {{WebExtAPIRef("storage.managed", "managed")}}.

### 매개변수

- `keys`
  - : 저장소에서 가져올 항목을 지정하는 키 (문자열) 또는 키들 (문자열의 배열 또는 기본값이 주어진 객체). 빈 문자열, 객체, 또는 배열이 주어지면 빈 객체가 반환된다. null이나 undefined가 주어지면 전체 항목이 반환된다.

### 반환값

반환된 [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)는 저장소에서 찾은 모든 항목을 담은 객체를 인수로 완료를 수행한다. 실패하면 에러 문장으로 거부가 수행된다. managed 저장소가 설정되어 있지 않으면 `undefined`가 반환된다.

> **경고:** When used within a content script in Firefox versions prior to 52, the Promise returned by `browser.storage.local.get()` is fulfilled with an Array containing one Object. The Object in the Array contains the `keys` found in the storage area, as described above. The Promise is correctly fulfilled with an Object when used in the background context (background scripts, popups, options pages, etc.). When this API is used as `chrome.storage.local.get()`, it correctly passes an Object to the callback function.

## 브라우저 호환성

{{Compat}}

## 예제

두 항목을 담고 있는 저장소를 가정한다:

```js
// storage contains two items,
// "kitten" and "monster"
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

promise에 대한 성공과 실패 핸들러를 정의한다:

```js
function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
```

`keys` 인수없이 전체를 구한다:

```js
let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

빈 인수는 빈 객체를 반환한다:

```js
// with an empty array, retrieve nothing
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -> Object { }
```

이름을 인수로 하면 일치하는 항목을 담은 객체를 반환한다:

```js
let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -> Object { kitten: Object }
```

이름들을 인수로 하면 전체 일치 항목을 모두 담은 객체를 반환한다:

```js
let gettingItem = browser.storage.local.get([
  "kitten",
  "monster",
  "grapefruit",
]);
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

객체를 인수로 하면 주어진 객체의 키들을 이름으로 항목을 찾아서 돌려준다:

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

### 크롬 예제

크롬에서는 [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)가 아니라 콜백 형태로 해야 한다.

```js
chrome.storage.local.get("kitten", function (items) {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

또는 화살표 함수로 할 수 있다.

```js
chrome.storage.local.get("kitten", (items) => {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

> **참고:** **Acknowledgements**This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/extensions/storage) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
