---
title: "Response: ok 속성"
short-title: ok
slug: Web/API/Response/ok
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("Fetch API")}}

{{domxref("Response")}} 인터페이스의 **`ok`** 읽기 전용 속성은 응답이 성공했는지 여부(200-299 범위의 상태)를 나타내는 불리언을 포함합니다.

## 값

불리언 값입니다.

## 예제

[Fetch 응답 예제](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response)([Fetch 응답 라이브 참조](https://mdn.github.io/dom-examples/fetch/fetch-response/))에서 JPG 경로를 전달하면서 {{domxref("Request.Request","Request()")}} 생성자를 사용하여 새 {{domxref("Request")}} 객체를 생성합니다. 그 다음 {{domxref("fetch()")}}를 사용하여 이 요청을 가져오고, {{domxref("Response.blob")}}을 사용하여 응답으로부터 blob를 추출하고, {{domxref("URL.createObjectURL")}}을 사용하여 객체 URL을 생성한 다음 이를 {{htmlelement("img")}}에 표시합니다.

> [!NOTE]
> `fetch()` 블록의 맨 위에는 응답 `ok` 값을 콘솔에 기록합니다.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  console.log(response.ok); // 응답이 성공적으로 반환되면 true를 반환합니다.
  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [ServiceWorker API](/ko/docs/Web/API/Service_Worker_API)
- [교차 출처 리소스 공유 (CORS)](/ko/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ko/docs/Web/HTTP)
