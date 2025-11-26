---
title: Response
slug: Web/API/Response
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}

[Fetch API](/ko/docs/Web/API/Fetch_API)의 **`Response`** 인터페이스는 요청에 대한 응답을 나타냅니다.

새로운 `Response` 객체는 {{domxref("Response.Response", "Response()")}} 생성자로도 생성할 수 있지만, 보통은 서비스 워커의 {{domxref("FetchEvent.respondWith")}}이나 단순히 {{domxref("fetch()")}} 호출 등, 다른 API 작업의 결과로서 만나게 됩니다.

## 생성자

- {{domxref("Response.Response", "Response()")}}
  - : 새로운 `Response` 객체를 생성합니다.

## 인스턴스 속성

- {{domxref("Response.body")}} {{ReadOnlyInline}}
  - : 본문 내용의 {{domxref("ReadableStream")}}입니다.
- {{domxref("Response.bodyUsed")}} {{ReadOnlyInline}}
  - : 응답의 본문이 사용됐는지 아닌지 나타내는 불리언입니다.
- {{domxref("Response.headers")}} {{ReadOnlyInline}}
  - : 응답에 연관된 {{domxref("Headers")}} 객체입니다.
- {{domxref("Response.ok")}} {{ReadOnlyInline}}
  - : 응답의 성공 (코드가 `200`-`299` 범위 내) 여부를 나타내는 불리언입니다.
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : 응답이 리디렉션의 결과인지 (즉, URL 목록이 두 개 이상의 항목을 지녔는지) 나타냅니다.
- {{domxref("Response.status")}} {{ReadOnlyInline}}
  - : 응답의 상태 코드입니다. (성공 시 `200`입니다.)
- {{domxref("Response.statusText")}} {{ReadOnlyInline}}
  - : 상태 코드에 해당하는 상태 메시지입니다. (예시: `200`이면 `OK`)
- {{domxref("Response.type")}} {{ReadOnlyInline}}
  - : 응답 유형입니다. (예시: `basic`, `cros`)
- {{domxref("Response.url")}} {{ReadOnlyInline}}
  - : 응답 URL입니다.

## 정적 메서드

- {{domxref("Response.error_static", "Response.error()")}}
  - : 네트워크 오류와 연관된 새로운 `Response` 객체를 반환합니다.
- {{domxref("Response.redirect_static", "Response.redirect()")}}
  - : 다른 URL을 가리키는 새로운 응답을 생성합니다.
- {{domxref("Response.json_static", "Response.json()")}}
  - : 제공된 JSON 인코딩 데이터를 반환하기 위한 새로운 `Response` 객체를 반환합니다.

## 인스턴스 메서드

- {{domxref("Response.arrayBuffer()")}}
  - : 응답 본문의 {{jsxref("ArrayBuffer")}} 표현으로 이행하는 프로미스를 반환합니다.
- {{domxref("Response.blob()")}}
  - : 응답 본문의 {{domxref("Blob")}} 표현으로 이행하는 프로미스를 반환합니다.
- {{domxref("Response.bytes()")}}
  - : 응답 본문의 {{jsxref("Uint8Array")}} 표현으로 이행하는 프로미스를 반환합니다.
- {{domxref("Response.clone()")}}
  - : `Response` 객체의 복사본을 생성합니다.
- {{domxref("Response.formData()")}}
  - : 응답 본문의 {{domxref("FormData")}} 표현으로 이행하는 프로미스를 반환합니다.
- {{domxref("Response.json()")}}
  - : 응답 본문을 {{jsxref("JSON")}}으로 파싱한 결과로 이행하는 프로미스를 반환합니다.
- {{domxref("Response.text()")}}
  - : 응답 본문의 text 표현으로 이행하는 프로미스를 반환합니다.

## 예제

### 이미지 취득하기

저희의 [기본 `fetch()` 예제](https://github.com/mdn/dom-examples/tree/main/fetch/basic-fetch)([미리보기](https://mdn.github.io/dom-examples/fetch/basic-fetch/))에서는 간단한 `fetch()` 호출을 통해 이미지를 취득해서 {{htmlelement("img")}} 요소에 표시합니다.
`fetch()` 호출은 취득 연산과 연관된 `Response`로 이행하는 프로미스를 반환합니다.

우리는 이미지를 요청하고 있기 때문에, {{domxref("Response.blob()", "Response.blob")}}을 실행하여 응답에 올바른 MIME 타입을 부여해야 한다는 걸 보실 겁니다.

```js
const image = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then((response) => response.blob())
  .then((blob) => {
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  });
```

{{domxref("Response.Response", "Response()")}} 생성자로 자신만의 `Response` 객체를 생성할 수도 있습니다.

```js
const response = new Response();
```

### PHP 호출

여기서는 JSON 문자열을 생성하는 PHP 프로그램 파일을 호출하고, 간단한 오류 처리와 함께 결과를 JSON 값으로서 출력합니다.

```js
// PHP를 사용해 JSON을 가져오는 함수
const getJSON = async () => {
  // Response 객체 생성
  const response = await fetch("getJSON.php");
  if (response.ok) {
    // 응답 본문에서 JSON 값 가져오기
    return response.json();
  }
  throw new Error("*** PHP file not found");
};

// 함수를 호출하고 결과 또는 오류 메시지를 콘솔에 출력
getJSON()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
- [HTTP 접근 제어 (CORS)](/ko/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ko/docs/Web/HTTP)
