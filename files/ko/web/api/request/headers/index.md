---
title: "Request: headers property"
short-title: headers
slug: Web/API/Request/headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

{{domxref("Request")}} 인터페이스의 **`headers`** 읽기 전용 속성은 요청에 연관된 {{domxref("Headers")}} 객체를 포함합니다.

## 값

{{domxref("Headers")}} 객체입니다.

## 예제

아래 스니펫에서는 {{domxref("Request.Request", "Request()")}} 생성자를 활용하여 새 요청 (스크립트와 동일한 디렉토리에 위치한 이미지 파일) 을 생성하고, 요청 헤더를 변수에 저장합니다.

```js
const myRequest = new Request("flowers.jpg");
const myHeaders = myRequest.headers; // Headers {}
```

{{domxref("Headers")}} 객체에 헤더를 추가하기 위해 {{domxref("Headers.append")}} 를 활용합니다. 그리고 두번째 init 매개변수를 활용하여 새 요청을 생성하고, init 옵션으로 헤더를 전달합니다.

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myInit);

const myContentType = myRequest.headers.get("Content-Type"); // 'image/jpeg' 를 반환합니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [서비스워커 API](/ko/docs/Web/API/Service_Worker_API)
- [HTTP 접근 제어 (CORS)](/ko/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ko/docs/Web/HTTP)
