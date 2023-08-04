---
title: StorageArea.set()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
---

{{AddonSidebar()}}

저장소 영역에 하나 이상의 항목을 저장하거나, 있는 항목을 고친다.

이 API로 값을 저장하거나 고치면, {{WebExtAPIRef("storage.onChanged")}} 이벤트가 발생한다.

비동기 함수로 [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 돌려준다.

## 문법

```js
let settingItem = browser.storage.&#x3C;storageType>.set(
  keys             // object
)
```

`<storageType>`은 쓰기 가능한 저장소 중의 하나다 — {{WebExtAPIRef("storage.sync")}} 또는 {{WebExtAPIRef("storage.local")}}.

### 매개변수

- `keys`
  - : 저장소에 저장할 하나 이상의 키/값 쌍을 가진 객체다. 이미 있는 항목이라면 그 값은 고쳐진다.값은 [기초 자료형](/ko/docs/Glossary/Primitive) (숫자, 논리값, 그리고 문자열 같은) 또는 [`배열`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)이다.`Function`, `Date`, `RegExp`, `Set`, `Map`, `ArrayBuffer` 기타등등 다른 자료형의 저장은 일반적으로 안된다. 지원되지 않는 이런 자료형들은 빈 객체로 저장되거나 에러를 발생시킨다. 정확한 것은 브라우저에 달렸다.

### 반환값

반환된 [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)는 동작이 성공하면 아무런 인수없이 완료를 수행하고, 실패하면 에러 문장과 함께 거부를 수행한다.

## 브라우저 호환성

{{Compat}}

## 예제

```js
function setItem() {
  console.log("OK");
}

function gotKitten(item) {
  console.log(`${item.kitten.name} has ${item.kitten.eyeCount} eyes`);
}

function gotMonster(item) {
  console.log(`${item.monster.name} has ${item.monster.eyeCount} eyes`);
}

function onError(error) {
  console.log(error);
}

// define 2 objects
var monster = {
  name: "Kraken",
  tentacles: true,
  eyeCount: 10,
};

var kitten = {
  name: "Moggy",
  tentacles: false,
  eyeCount: 2,
};

// store the objects
browser.storage.local.set({ kitten, monster }).then(setItem, onError);

browser.storage.local.get("kitten").then(gotKitten, onError);
browser.storage.local.get("monster").then(gotMonster, onError);
```

{{WebExtExamples}}

> **참고:** **Acknowledgements**This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/extensions/storage) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
