---
title: Window.localStorage
slug: Web/API/Window/localStorage
---

{{APIRef("Web Storage API")}}

**`localStorage`** 읽기 전용 속성을 사용하면 {{domxref("Document")}} {{glossary("origin", "출처")}}의 {{domxref("Storage")}} 객체에 접근할 수 있습니다. 저장한 데이터는 브라우저 세션 간에 공유됩니다. `localStorage`는 {{domxref("Window.sessionStorage", "sessionStorage")}}와 비슷하지만, `localStorage`의 데이터는 만료되지 않고 `sessionStorage`의 데이터는 페이지 세션이 끝날 때, 즉 페이지를 닫을 때 사라지는 점이 다릅니다. ("사생활 보호 모드" 중 생성한 `localStorage` 데이터는 마지막 "사생활 보호" 탭이 닫힐 때 지워집니다.)

`localStorage`에 저장한 자료는 **페이지 프로토콜별로 구분**합니다. 특히 HTTP(<http://example.com>)로 방문한 페이지에서 저장한 데이터는 같은 페이지의 HTTPS(<https://example.com>)와는 다른 `localStorage`에 저장됩니다.

키와 값은 **항상** 각 문자에 2바이트를 할당하는 UTF-16 {{domxref("DOMString")}}의 형태로 저장합니다. 객체와 마찬가지로 정수 키는 자동으로 문자열로 변환합니다.

## 구문

```js
myStorage = window.localStorage;
```

### 값

현재 {{glossary("origin", "출처")}}의 로컬 저장 공간에 접근할 수 있는 {{domxref("Storage")}} 객체.

### 예외

- `SecurityError`
  - : 요청이 정책의 결정을 위반했거나, 출처가 [유효한 스킴/호스트/포트 튜플](/ko/docs/Web/Security/Same-origin_policy#출처의_정의)이 아닌 경우. 유효하지 않은 튜플은 출처가 `file:`이나 `data:` 스킴을 사용했을 때 발생할 수 있습니다. 예외의 예를 들자면 사용자가 특정 출처의 지속성 데이터를 거부하도록 브라우저를 설정하는 경우가 있습니다.

## 예제

아래 코드는 현재 도메인의 로컬 {{domxref("Storage")}} 객체에 접근한 후, {{domxref("Storage.setItem()")}}을 사용해 항목 하나를 추가합니다.

```js
localStorage.setItem("myCat", "Tom");
```

위에서 추가한 `localStorage` 항목을 읽는 법은 다음과 같습니다.

```js
const cat = localStorage.getItem("myCat");
```

그리고 제거는 아래와 같습니다.

```js
localStorage.removeItem("myCat");
```

`localStorage` 항목의 전체 제거 구문입니다.

```js
localStorage.clear();
```

> **참고:** 참고: [Web Storage API 사용하기](/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) 문서에서 전체 예제를 살펴보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- [Web Storage API 사용하기](/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Local storage with Window.localStorage](/ko/docs/Web/API/Web_Storage_API/Local_storage)
- {{domxref("Window.sessionStorage")}}
