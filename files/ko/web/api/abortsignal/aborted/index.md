---
title: AbortSignal.aborted
slug: Web/API/AbortSignal/aborted
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**`aborted`** 읽기 전용 프로퍼티는 신호가 통신하는 DOM 요청이 취소되었는지(`true`) 그렇지 않은지(`false`)를 나타내는 {{domxref("Boolean")}}을 반환한다.

## 구문

```js
var isAborted = abortSignal.aborted;
```

### 값

{{domxref("Boolean")}}

## 예제

다음 스니펫에서는 새로운 `AbortController` 객체를 생성하고 {{domxref("AbortSignal")}}를 얻는다(`signal` 프로퍼티에서 가능). 그 다음 `aborted` 프로퍼티를 사용해 신호가 취소되었는지 확인하고 콘솔로 적절한 로그를 전송한다.

```js
var controller = new AbortController();
var signal = controller.signal;

// ...

signal.aborted
  ? console.log("Request has been aborted")
  : console.log("Request not aborted");
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Fetch API](/ko/docs/Web/API/Fetch_API)
