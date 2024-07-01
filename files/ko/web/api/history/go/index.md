---
title: History.go()
slug: Web/API/History/go
---

{{APIRef("History API")}}

**`History.go()`** 메서드는 history 세션에서 특정한 페이지를 로딩합니다. 인자로 전달하는 파라미터 값에 따라 history를 통해서 페이지를 앞 뒤로 이동할 수 있습니다.

이 메서드는 {{glossary("asynchronous")}}(비동기)로 동작합니다. 페이지 앞, 뒤 이동이 언제 이뤄지는지 알려면 {{event("popstate")}} event에 대한 listener를 등록합니다.

## 구문

```js
history.go([delta]);
```

### Parameters

- `delta` {{optional_inline}}
  - : 현재 페이지에서 상대적으로 이동하려고 하는 history의 위치 값. 음수 값은 뒤로 이동하고, 양수 값은 앞으로 이동합니다. 예를 들면 `history.go(2)` 는 현재 페이지에서 2 페이지 앞으로 이동하고, `history.go(-2)` 는 현재 페이지에서 2 페이지 뒤로 이동합니다. 만약 값을 전달하지 않거나, `delta` 값을 0으로 전달한다면, 이는 `location.reload()`를 동작시켰을 때와 동일한 결과를 보입니다. (새로고침)

## 예제

한 페이지 뒤로 가기 ({{domxref("History.back", "back()")}}를 호출한 것과 동일):

```js
history.go(-1);
```

{{domxref("History.forward", "forward()")}}와 동일한 한 페이지 앞으로 가기:

```js
history.go(1);
```

두 페이지 앞으로 가기:

```js
history.go(2);
```

두 페이지 뒤로 가기:

```js
history.go(-2);
```

마지막으로, 아래 구문들은 현재 페이지를 새로고침 합니다:

```js
history.go();
history.go(0);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("History")}}
- {{DOMxRef("History.back","back()")}}
- {{DOMxRef("History.forward","forward()")}}
- {{event("popstate")}} event
- [Working with the History API](/ko/docs/Web/API/History_API/Working_with_the_History_API)
