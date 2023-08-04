---
title: Storage.key()
slug: Web/API/Storage/key
---

{{APIRef("Web Storage API")}}

{{domxref("Storage")}} 인터페이스의 `key()` 메서드는 숫자 `n`이 전달되면 Storage의 `n`번째 key 이름을 반환합니다. key의 순서는 user-agent에 의해 정의되므로 이 순서에 의존성이 있어서는 안됩니다.

## 문법

```js
var aKeyName = storage.key(index);
```

### Parameters

- _index_
  - : 반환받으려하는 key의 번호를 나타내는 정수. 이 정수는 0부터 시작하는 인덱스입니다.

### Return value

key 이름을 포함한 {{domxref("DOMString")}} 입니다.

## 예제

다음 함수는 localStorage 의 key들을 반복합니다.

```js
function forEachKey(callback) {
  for (var i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}
```

다음 함수는 localStorage 의 key들을 반복하고 각 key에 설정된 값들을 가져옵니다.

```js
for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
```

> **참고:** 실제로 쓰이는 예제를 보려면 우리의 [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/) 를 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

[Using the Web Storage API](/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
