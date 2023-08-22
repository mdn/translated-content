---
title: Fetch API 사용하기
slug: Web/API/Fetch_API/Using_Fetch
l10n:
  sourceCommit: 95e3d3c41211c04f048f13bdc24677a7ab84d764
---

{{DefaultAPISidebar("Fetch API")}}

[Fetch API](/ko/docs/Web/API/Fetch_API)는 HTTP 파이프라인을 구성하는 요청과 응답 등의 요소를 JavaScript에서 접근하고 조작할 수 있는 인터페이스를 제공합니다. Fetch API가 제공하는 전역 {{domxref("fetch()")}} 메서드로 네트워크의 리소스를 쉽게 비동기적으로 취득할 수도 있습니다.

콜백 기반 API인 {{domxref("XMLHttpRequest")}}와 달리, Fetch API는 [서비스 워커](/ko/docs/Web/API/Service_Worker_API)에서도 쉽게 사용할 수 있는 프로미스 기반의 개선된 대체제입니다. 또한 Fetch API는 [CORS](/ko/docs/Web/HTTP/CORS)를 포함한 고급 개념을 HTTP 확장으로 정의합니다.

기본적인 리소스 취득 요청은 이렇게 생겼습니다.

```js
async function logJSONData() {
  const response = await fetch("http://example.com/movies.json");
  const jsonData = await response.json();
  console.log(jsonData);
}
```

위 코드는 네트워크를 통해 JSON 파일을 취득해서 콘솔에 출력합니다. 가장 단순한 형태의 `fetch()`는 가져오고자 하는 리소스의 경로를 나타내는 하나의 인수만 받습니다. 응답은 {{domxref("Response")}} 객체로 표현되며, JSON 응답 본문을 바로 반환하지는 않습니다.

{{domxref("Response")}} 객체 역시 JSON 응답 본문을 그대로 포함하지는 않습니다. `Response`는 HTTP 응답 전체를 나타내는 객체로, JSON 본문 콘텐츠를 추출하기 위해서는 {{domxref("Response.json()", "json()")}} 메서드를 호출해야 합니다. `json()`은 응답 본문 텍스트를 JSON으로 파싱한 결과로 이행하는, 또 다른 프로미스를 반환합니다.

> **참고:** 다른 유형의 본문 콘텐츠를 추출할 수 있는 비슷한 메서드들을 [본문](#본문) 절에서 확인하세요.

취득 요청은 가져오려는 리소스의 지시문이 아닌, [`Content-Security-Policy`](/ko/docs/Web/HTTP/Headers/Content-Security-Policy) 헤더의 `connect-src` 지시문에 의해 제어됩니다.

## 요청 옵션 제공

`fetch()` 메서드에는 선택적으로 두 번째 매개변수도 제공할 수 있습니다. 이 매개변수, `init` 객체를 사용하면 여러가지 설정을 제어할 수 있습니다.

{{domxref("fetch()")}} 문서를 방문해 사용 가능한 전체 옵션의 목록과, 각각의 옵션에 대한 자세한 설명을 확인하세요.

```js
// POST 메서드 구현 예제
async function postData(url = "", data = {}) {
  // 옵션 기본 값은 *로 강조
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE 등
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
  return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
});
```

`mode: "no-cors"`를 지정하면 요청에 사용할 수 있는 헤더가 다음 목록으로 제한됩니다.

- `Accept`
- `Accept-Language`
- `Content-Language`
- `Content-Type`, 값으로는 `application/x-www-form-urlencoded`, `multipart/form-data`, 또는 `text/plain`

## 취득 요청 중단

아직 완료되지 않은 `fetch()` 작업을 취소하려면 {{DOMxRef("AbortController")}}와 {{DOMxRef("AbortSignal")}} 인터페이스를 사용하세요.

```js
const controller = new AbortController();
const signal = controller.signal;
const url = "video.mp4";

const downloadBtn = document.querySelector("#download");
const abortBtn = document.querySelector("#abort");

downloadBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(url, { signal });
    console.log("다운로드 완료", response);
  } catch (error) {
    console.error(`다운로드 오류: ${error.message}`);
  }
});

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("다운로드 중단됨");
});
```

## 자격 증명을 포함한 요청 전송

브라우저가 요청을 전송할 때 자격 증명을 포함하도록 하려면 `fetch()` 메서드에 전달하는 `init` 객체에 `credential: 'include'`를 추가하세요. 동일 출처와 교차 출처 요청 모두에 사용할 수 있습니다.

```js
fetch("https://example.com", {
  credentials: "include",
});
```

> **참고:** `credentials: 'include'`를 추가한 경우, `Access-Control-Allow-Origin`에 와일드카드를 사용할 수 없습니다. 자격 증명을 포함하려는 경우에는 반드시 정확한 출처를 지정해야 합니다. CORS 해제 확장 프로그램을 사용하더라도 와일드카드를 지정한 요청은 실패할 것입니다.

> **참고:** 자격 증명 옵션의 값에 상관 없이, 브라우저는 프리플라이트 요청에는 자격 증명을 전송하지 않아야 합니다. 자세한 정보는 [자격 증명을 포함한 CORS 요청](/ko/docs/Web/HTTP/CORS#자격_증명을_포함한_요청)을 참고하세요.

요청 URL이 스크립트와 같은 출처일 때만 자격 증명을 전송하려면 `credentials: 'same-origin'`을 추가하세요.

```js
// 스크립트의 출처도 'https://example.com'

fetch("https://example.com", {
  credentials: "same-origin",
});
```

브라우저가 요청에서 자격 증명을 전송하지 않도록 하려면 `credentials: 'omit'`을 사용하세요.

```js
fetch("https://example.com", {
  credentials: "omit",
});
```

## JSON 데이터 업로드

{{domxref("fetch()")}}를 사용하면 JSON 인코딩된 데이터를 POST 요청에 포함할 수 있습니다.

```js
async function postJSON(data) {
  try {
    const response = await fetch("https://example.com/profile", {
      method: "POST", // 또는 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("성공:", result);
  } catch (error) {
    console.error("실패:", error);
  }
}

const data = { username: "example" };
postJSON(data);
```

## 파일 업로드

{{domxref("fetch()")}}와 `<input type="file">` 입력 요소, {{domxref("FormData.FormData","FormData()")}}를 사용해서 파일을 업로드할 수 있습니다.

```js
async function upload(formData) {
  try {
    const response = await fetch("https://example.com/profile/avatar", {
      method: "PUT",
      body: formData,
    });
    const result = await response.json();
    console.log("성공:", result);
  } catch (error) {
    console.error("실패:", error);
  }
}

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

upload(formData);
```

## 다수의 파일 업로드

{{domxref("fetch()")}}와 `<input type="file" multiple>` 입력 칸 요소, {{domxref("FormData.FormData","FormData()")}}를 사용해서 여러 파일을 업로드할 수 있습니다.

```js
async function uploadMultiple(formData) {
  try {
    const response = await fetch("https://example.com/posts", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log("성공:", result);
  } catch (error) {
    console.error("실패:", error);
  }
}

const photos = document.querySelector('input[type="file"][multiple]');
const formData = new FormData();

formData.append("title", "My Vegas Vacation");

for (const [i, photo] of Array.from(photos.files).entries()) {
  formData.append(`photos_${i}`, photo);
}

uploadMultiple(formData);
```

## 텍스트 파일을 한 줄씩 처리하기

응답에서 읽어오는 데이터 청크는 줄 단위로 깔끔하게 나뉘지 않으며, 문자열도 아니고 `Uint8Array`입니다. 텍스트 파일을 가져와서 줄 단위로 처리하고자 한다면, '줄' 단위로 나누는 작업은 직접 구현해야 합니다. 이 예제는 줄 단위 반복기를 생성해서 파일을 처리하는 예시입니다. (너무 복잡해지지 않도록 텍스트 파일은 UTF-8로 가정하고, 네트워크 오류는 고려하지 않습니다.)

```js
async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder("utf-8");
  const response = await fetch(fileURL);
  const reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : "";

  const re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    // 마지막 줄이 개행 문자로 끝나지 않았을 때
    yield chunk.substr(startIndex);
  }
}

async function run() {
  for await (let line of makeTextFileLineIterator(urlOfFile)) {
    processLine(line);
  }
}

run();
```

## 취득 성공 여부 확인

{{domxref("fetch()")}} 프로미스는 네트워크에 오류가 있었거나, 서버의 CORS 설정이 잘못된 경우 {{jsxref("TypeError")}}로 거부됩니다. 그러나 이 두 경우는 권한처럼 설정의 문제고, 404와 같은 응답은 네트워크 오류가 아니므로 거부하지 않습니다. `fetch()`가 성공했는지를 정확히 알아내려면 프로미스의 이행 여부를 확인한 후, {{domxref("Response.ok")}} 속성의 값이 `true`인지도 확인해야 합니다.

```js
async function fetchImage() {
  try {
    const response = await fetch("flowers.jpg");
    if (!response.ok) {
      throw new Error("네트워크 응답이 OK가 아님");
    }
    const myBlob = await response.blob();
    myImage.src = URL.createObjectURL(myBlob);
  } catch (error) {
    console.error("취득에 문제가 있었습니다:", error);
  }
}
```

## 요청 객체를 직접 제공

`fetch()` 호출에 리소스의 경로를 제공하는 대신, {{domxref("Request.Request", "Request()")}} 생성자로 생성한 요청 객체를 인자로 전달할 수도 있습니다.

```js
async function fetchImage(request) {
  try {
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error("네트워크 응답이 OK가 아님");
    }
    const myBlob = await response.blob();
    myImage.src = URL.createObjectURL(myBlob);
  } catch (error) {
    console.error("오류:", error);
  }
}

const myHeaders = new Headers();

const myRequest = new Request("flowers.jpg", {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
});

fetchImage(myRequest);
```

`Request()` 생성자는 `fetch()` 메서드와 동일한 매개변수를 받습니다. 기존에 존재하는 요청 객체를 전달해서 복사본을 생성하는 것도 가능합니다.

```js
const anotherRequest = new Request(myRequest, myInit);
```

요청과 응답 본문은 한 번만 읽을 수 있으므로 복사본 생성은 꽤 유용합니다. 이런 식으로 복사본을 생성하면, 기존에 생성해둔 요청/응답 객체를 다시 사용하되 `init` 옵션만 교체할 수도 있습니다. 복사본은 원본의 본문을 읽기 전에 생성해야 합니다.

> **참고:** 복사본 생성만을 위한 {{domxref("Request.clone", "clone()")}} 메서드도 있습니다. 생성자와 이 메서드 모두, 이미 본문을 읽은 요청 또는 응답을 복사하려고 시도하면 실패합니다. 복사본의 본문을 읽어도 원본에는 영향을 주지 않습니다.

## 헤더

{{domxref("Headers")}} 인터페이스의 {{domxref("Headers.Headers", "Headers()")}} 생성자를 사용해서 자신만의 헤더 객체를 생성할 수 있습니다. 헤더 객체는 이름과 값을 연결하는 간단한 맵입니다.

```js
const content = "Hello World";
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
```

생성자에 2차원 배열이나 객체 리터럴을 전달하는 것으로도 같은 결과를 얻을 수 있습니다.

```js
const myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});
```

헤더의 내용은 아래와 같이 가져올 수 있습니다.

```js
console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.get("X-Custom-Header")); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders.delete("X-Custom-Header");
console.log(myHeaders.get("X-Custom-Header")); // null
```

헤더 객체의 몇몇 작업은 [서비스 워커](/ko/docs/Web/API/Service_Worker_API)에서나 유용하지만, 그래도 훨씬 편한 API를 통해서 헤더를 조작할 수 있습니다.

`Headers`의 모든 헤더 메서드는 유효하지 않은 HTTP 헤더 이름을 받았을 때 `TypeError`를 던집니다. 변경 메서드는 불변 보호([아래 참고](#보호))가 존재하면 `TypeError`를 던집니다. 그 외에는 실패할 때 조용하게 실패합니다. 다음은 조용한 실패 코드의 예시입니다.

```js
const myResponse = Response.error();
try {
  myResponse.headers.set("Origin", "http://mybank.com");
} catch (e) {
  console.log("은행인 척 할 수 없어요!");
}
```

콘텐츠를 파싱하기 전에 유효한 형식인지 확인할 때 헤더 객체를 유용하게 사용할 수 있습니다. 다음은 그 예시입니다.

```js
async function fetchJSON(request) {
  try {
    const response = await fetch(request);
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("앗, JSON이 아닙니다!");
    }
    const jsonData = await response.json();
    // 데이터 추가 가공
  } catch (error) {
    console.error("오류:", error);
  }
}
```

### 가드

헤더는 요청으로 전송할 수도 있고 응답으로 받을 수도 있으며 어떤 정보를 수정할 수 있고 수정할 수 없는지 다양한 제한이 존재하기 때문에, 헤더 객체는 '가드'(_guard_) 속성을 갖습니다. 가드 속성은 웹에 노출되진 않지만, 헤더 객체에 허용되는 변경 작업의 범위에 영향을 줍니다.

가능한 가드 값은 다음과 같습니다.

- `none`: 기본 값입니다.
- `request`: 요청({{domxref("Request.headers")}})에서 획득한 헤더 객체를 보호합니다.
- `request-no-cors`: {{domxref("Request.mode")}}가 `no-cors`인 요청에서 획득한 헤더 객체를 보호합니다.
- `response`: 응답({{domxref("Response.headers")}})에서 획득한 헤더 객체를 보호합니다.
- `immutable`: 헤더 객체를 읽기 전용으로 설정합니다. 대부분 서비스 워커에서 사용합니다.

> **참고:** 가드가 적용된 응답 헤더에는 `Content-Length` 헤더를 추가하거나 설정할 수 없습니다. 마찬가지로,`Set-Cookie` 헤더 또한 응답에 추가할 수 없습니다. 즉, 서비스 워커에서 응답을 합성해서 쿠키를 설정하는 것은 불가능합니다.

## 응답 객체

위에서 본 바와 같이 {{domxref("Response")}} 인스턴스는 `fetch()` 프로미스가 이행할 때 반환됩니다.

다음은 응답 객체에서 아마 가장 많이 사용하게 될 속성들입니다.

- {{domxref("Response.status")}} — 상태 코드 값을 담은 정수 값입니다. 기본 값은 200입니다.
- {{domxref("Response.statusText")}} — 상태 코드 메시지를 담은 문자열 값입니다. 기본 값은 빈 문자열입니다. 참고로 [HTTP/2는 상태 메시지를 지원하지 않습니다.](https://fetch.spec.whatwg.org/#concept-response-status-message)
- {{domxref("Response.ok")}} — 위쪽 예제에서 사용했듯, 상태 코드가 200 이상 299 이하인지 간단하게 확인할 수 있는 불리언 값입니다.

응답 객체는 JavaScript에서 직접 생성할 수도 있지만, 이런 응답은 수신한 요청에 대해 {{domxref("FetchEvent.respondWith", "respondWith()")}} 메서드로 직접 응답해야 하는 [서비스 워커](/ko/docs/Web/API/Service_Worker_API)에서나 활약할 수 있습니다.

```js
const myBody = new Blob();

addEventListener("fetch", function (event) {
  // fetch를 가로채는 ServiceWorker
  event.respondWith(
    new Response(myBody, {
      headers: { "Content-Type": "text/plain" },
    }),
  );
});
```

{{domxref("Response.Response","Response()")}} 생성자는 두 개의 선택적 인자를 받습니다. 하나는 응답 본문으로 쓰고, 다른 하나는{{domxref("Request.Request","Request()")}}가 받는 것과 비슷한 옵션 객체입니다.

> **참고:** {{domxref("Response.error","error()")}} 정적 메서드는 오류 응답을 반환합니다. 마찬가지로, {{domxref("Response.redirect","redirect()")}}는 지정한 URL로 리다이렉트를 유발하는 응답을 생성합니다. 이 두 메서드 역시 서비스 워커에서만 의미가 있습니다.

## 본문

요청과 응답 모두 본문 데이터를 포함할 수 있습니다. 본문 데이터는 아래 목록의 유형 중 하나의 인스턴스입니다.

- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}} (Uint8Array 등등)
- {{jsxref("DataView")}}
- {{domxref("Blob")}}
- {{domxref("File")}}
- {{jsxref("String")}} 또는 문자열 리터럴
- {{domxref("URLSearchParams")}}
- {{domxref("FormData")}}

{{domxref("Request")}}와 {{domxref("Response")}} 인터페이스는 본문을 추출할 수 있는 다음의 메서드들을 공유합니다. 추출 메서드는 모두 프로미스를 반환하며, 이 프로미스가 실제 본문 데이터로 이행합니다.

- {{domxref("Request.arrayBuffer()")}} / {{domxref("Response.arrayBuffer()")}}
- {{domxref("Request.blob()")}} / {{domxref("Response.blob()")}}
- {{domxref("Request.formData()")}} / {{domxref("Response.formData()")}}
- {{domxref("Request.json()")}} / {{domxref("Response.json()")}}
- {{domxref("Request.text()")}} / {{domxref("Response.text()")}}

본문 추출 메서드들을 사용하면 XHR을 사용할 때보다 더 쉽게 비 텍스트 데이터를 처리할 수 있습니다.

요청 본문은 `body` 속성을 설정하는 것으로 추가할 수 있습니다.

```js
const form = new FormData(document.getElementById("login-form"));
fetch("/login", {
  method: "POST",
  body: form,
});
```

요청과 응답, 그리고 더 나아가 `fetch()` 함수는 본문을 보고 콘텐츠 유형을 알아내려고 시도합니다. 또한, 요청은 따로 명시하지 않았으면 `Content-Type`을 헤더를 자동으로 설정합니다.

## 기능 감지

Fetch API는 {{domxref("Window")}}나 {{domxref("Worker")}} 스코프에 {{domxref("Headers")}}, {{domxref("Request")}}, {{domxref("Response")}}, 또는 {{domxref("fetch()")}}의 존재 여부로 지원 여부를 확인할 수 있습니다.

```js
if (window.fetch) {
  // fetch로 요청 보내기
} else {
  // XMLHttpRequest 사용하기?
}
```

## 같이 보기

- [ServiceWorker API](/ko/docs/Web/API/ServiceWorker_API)
- [HTTP 접근 제어 (CORS)](/ko/docs/Web/HTTP/CORS)
- [HTTP](/ko/docs/Web/HTTP)
- [Fetch 폴리필](https://github.com/github/fetch)
- [Github의 Fetch 예제](https://github.com/mdn/fetch-examples/)
