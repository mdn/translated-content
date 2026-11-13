---
title: "Request: cache 속성"
short-title: cache
slug: Web/API/Request/cache
l10n:
  sourceCommit: 55ae548c42a0d80ecc527fae41db60532184fff2
---

{{APIRef("Fetch API")}}

{{domxref("Request")}} 인터페이스의 **`cache`** 읽기 전용 속성에는 요청의 캐시 모드가 포함되어 있습니다. 요청이 브라우저의 [HTTP 캐싱](/ko/docs/Web/HTTP/Guides/Caching)과 상호 작용하는 방식을 제어합니다.

## 값

`RequestCache` 값입니다. 사용 가능한 값은 다음과 같습니다.

- `default` — 브라우저는 HTTP 캐시에서 일치하는 요청을 찾습니다.
  - 일치하는 항목이 있고 [새 항목](/ko/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age)이면, 캐시에서 반환됩니다.
  - 일치하는 항목이 있지만 [오래된 항목](/ko/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age)이면, 브라우저는 원격 서버에 [조건부 요청](/ko/docs/Web/HTTP/Guides/Conditional_requests)을 합니다. 서버가 리소스가 변경되지 않았다고 표시하면, 캐시에서 리소스가 반환됩니다. 그렇지 않으면 리소스가 서버에서 다운로드되고 캐시가 업데이트됩니다.
  - 일치하는 항목이 없으면, 브라우저는 정상 요청을 하고 다운로드된 리소스로 캐시를 업데이트합니다.

- `no-store` - 브라우저는 캐시를 먼저 살펴보지 않고 원격 서버에서 리소스를 가져오며, 다운로드된 리소스로 캐시를 업데이트하지 않습니다.
- `reload` - 브라우저는 캐시를 먼저 살펴보지 않고 원격 서버에서 리소스를 가져오며, 그 다음으로 다운로드된 리소스로 캐시를 업데이트합니다.
- `no-cache` - 브라우저는 HTTP 캐시에서 일치하는 요청을 찾습니다.
  - 새 항목이든 오래된 항목이든 일치하는 항목이 있으면, 브라우저는 원격 서버에 [조건부 요청](/ko/docs/Web/HTTP/Guides/Conditional_requests)을 보냅니다. 서버가 리소스가 변경되지 않았다고 표시하면, 캐시에서 리소스가 반환됩니다. 그렇지 않으면 리소스가 서버에서 다운로드되고 캐시가 업데이트됩니다.
  - 일치하는 항목이 없으면, 브라우저는 정상 요청을 하고 다운로드된 리소스로 캐시를 업데이트합니다.

- `force-cache` - 브라우저는 HTTP 캐시에서 일치하는 요청을 찾습니다.
  - 새 항목이든 오래된 항목이든 일치하는 항목이 있으면, 캐시에서 반환됩니다.
  - 일치하는 항목이 없으면, 브라우저는 정상 요청을 하고 다운로드된 리소스로 캐시를 업데이트합니다.

- `only-if-cached` — 브라우저는 HTTP 캐시에서 일치하는 요청을 찾습니다.
  - 새 항목이든 오래된 항목이든 일치하는 항목이 있으면, 캐시에서 반환됩니다.
  - 일치하는 항목이 없으면, 브라우저는 [504 Gateway timeout](/ko/docs/Web/HTTP/Reference/Status/504) 상태로 응답합니다.

  `"only-if-cached"` 모드는 요청 [`mode`](/ko/docs/Web/API/Request/mode)가 `"same-origin"`인 경우에만 사용할 수 있습니다.
  캐시된 리다이렉션은 요청의 `redirect` 속성이 `"follow"`이고 리다이렉션이 `"same-origin"` 모드를 위반하지 않는 경우에만 허용됩니다.

## 예제

```js
// 캐시를 완전히 우회하기 위해 캐시 버스팅 기능이 있는 리소스를 다운로드합니다.
fetch("some.json", { cache: "no-store" }).then((response) => {
  /* 응답 사용 */
});

// 캐시 버스팅 기능을 사용하여 리소스를 다운로드하지만, 다운로드된 리소스로 HTTP 캐시를 업데이트합니다.
fetch("some.json", { cache: "reload" }).then((response) => {
  /* 응답 사용 */
});

// 올바른 ETag와 Date 헤더를 전송하고 If-Modified-Since와 If-None-Match 요청 헤더를 적절하게 처리하는 제대로 구성된 서버를 다룰 때 캐시 버스팅이 있는 리소스를 다운로드하면 유효성 검사에 의존하여 새로운 응답을 보장할 수 있습니다.
fetch("some.json", { cache: "no-cache" }).then((response) => {
  /* 응답 사용 */
});

// 경제성을 염두에 둔 리소스를 다운로드합니다! 가능한 많은 대역폭을 절약하기 위해 오래되었지만 캐시된 응답을 선호합니다.
fetch("some.json", { cache: "force-cache" }).then((response) => {
  /* 응답 사용 */
});

// 클라이언트 수준에서 stale-while-revalidate로 유지됩니다.
// 오래된 응답이라도 캐시된 응답을 선호하지만, 너무 오래된 경우 업데이트합니다.
// 더 나은 메모리 정리를 위해 AbortController와 signal를 사용합니다.
// 실제로 이것은 값을 변경해야 하므로 컨트롤러에 대한 경로와 참조를 취하는 함수가 될 것입니다.
let controller = new AbortController();
fetch("some.json", {
  cache: "only-if-cached",
  mode: "same-origin",
  signal: controller.signal,
})
  .catch((e) =>
    e instanceof TypeError && e.message === "Failed to fetch"
      ? { status: 504 } // 크롬에서의 해결 방법: TypeError로 실패
      : Promise.reject(e),
  )
  .then((res) => {
    if (res.status === 504) {
      controller.abort();
      controller = new AbortController();
      return fetch("some.json", {
        cache: "force-cache",
        mode: "same-origin",
        signal: controller.signal,
      });
    }
    const date = res.headers.get("date"),
      dt = date ? new Date(date).getTime() : 0;
    if (dt < Date.now() - 86_400_000) {
      // 24시간이 지난 경우
      controller.abort();
      controller = new AbortController();
      return fetch("some.json", {
        cache: "reload",
        mode: "same-origin",
        signal: controller.signal,
      });
    }

    // 기타 가능한 조건
    if (dt < Date.now() - 300_000)
      // 5분 이상 지난 경우
      fetch("some.json", { cache: "no-cache", mode: "same-origin" }); // 취소 혹은 반환 값이 없습니다.
    return res;
  })
  .then((response) => {
    /* (아마도 오래된) 응답 사용 */
  })
  .catch((error) => {
    /* AbortError/DOMError 혹은 TypeError일 수 있습니다. */
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
