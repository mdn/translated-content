---
title: "Cache: add() 메서드"
short-title: add()
slug: Web/API/Cache/add
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

{{domxref("Cache")}} 인터페이스의 **`add()`** 메서드는 URL을 받아서 해당 리소스를 가져온 후, 결과로 받은 응답 객체를 지정된 캐시에 추가합니다.

`add()` 메서드는 기능적으로 다음과 동일합니다.

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("bad response status");
  }
  return cache.put(url, response);
});
```

더 복잡한 작업의 경우 {{domxref("Cache.put","Cache.put()")}}을 직접 사용해야 합니다.

> [!NOTE]
> `add()`는 요청과 일치하는 캐시에 이전에 저장된 키/값 쌍을 덮어씁니다.

## 구문

```js-nolint
add(request)
```

### 매개변수

- `request`
  - : 캐시에 추가하려는 리소스에 대한 요청입니다. {{domxref("Request")}} 객체 또는 URL이 될 수 있습니다.

    이 매개변수는 {{domxref("Request.Request()", "Request()")}} 생성자의 매개변수로 사용되므로, URL은 해당 생성자와 동일한 규칙을 따릅니다. 특히, URL은 기본 URL에 대한 상대 경로일 수 있으며, 기본 URL은 Window 컨텍스트에서는 문서의 {{domxref("Node.baseURI", "baseURI")}}이고, Worker 컨텍스트에서는 {{domxref("WorkerGlobalScope.location")}}입니다.

### 반환 값

`undefined`로 이행하는 {{jsxref("Promise")}}입니다.

### 예외

- {{jsxref("TypeError")}}
  - : URL 스킴이 `http` 또는 `https`가 아닙니다.

    Response 상태가 200번대가 아닙니다(즉, 성공적인 응답이 아닙니다). 이는 요청이 성공적으로 반환되지 않은 경우뿐만 아니라, 요청이 교차 출처 no-cors 요청인 경우에도 발생합니다(이 경우 보고된 상태는 항상 0입니다).

## 예제

이 코드 블록은 {{domxref("InstallEvent")}}가 발생할 때까지 기다린 다음, {{domxref("ExtendableEvent.waitUntil","waitUntil()")}}을 호출하여 앱의 설치 프로세스를 처리합니다. 이는 {{domxref("CacheStorage.open")}}을 호출하여 새 캐시를 생성한 다음, `Cache.add`를 사용하여 자산을 추가하는 것으로 구성됩니다.

```js
this.addEventListener("install", (event) => {
  event.waitUntil(caches.open("v1").then((cache) => cache.add("/index.html")));
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Service Worker 사용하기](/ko/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}}와 {{domxref("WorkerGlobalScope.caches")}}
