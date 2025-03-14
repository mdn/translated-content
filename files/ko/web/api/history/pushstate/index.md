---
title: "History: pushState() 메서드"
slug: Web/API/History/pushState
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

[HTML](/ko/docs/Web/HTML) 문서에서, **`history.pushState()`** 메서드는 브라우저의 세션 기록 스택에 항목을 추가합니다.

이 메서드는 {{glossary("asynchronous", "비동기")}}로 동작합니다. 네비게이션이 언제 완료되었는지 결정하기 위해 {{domxref("Window/popstate_event", "popstate")}} 이벤트에 대한 수신기를 추가합니다. 이때 `state` 매개변수를 사용할 수 있습니다.

## 구문

```js-nolint
pushState(state, unused)
pushState(state, unused, url)
```

### 매개변수

- `state`

  - : `state` 객체는 `pushState()`에 의해 생성되어 새로운 기록 항목과 관련된 JavaScript 객체입니다. 사용자가 새로운 `state`로 이동할 때마다 {{domxref("Window/popstate_event", "popstate")}} 이벤트가 발생되고 이벤트 `state` 속성은 기록 항목의 `state` 객체 복사본을 포함합니다.

    `state` 객체는 직렬화될 수 있는 모든 것일 수 있습니다. Firefox는 사용자가 브라우저를 다시 시작한 후 복원될 수 있도록 사용자의 디스크에 `state` 객체를 저장하기 때문에, `state` 객체의 직렬화된 표현에 16MiB의 크기 제한을 적용합니다. 이보다 더 큰 직렬화된 표현 `state` 객체를 `pushState()`에 전달하면 메서드는 예외를 발생시킵니다. 이보다 더 많은 공간이 필요하다면 {{domxref("Window.sessionStorage", "sessionStorage")}} 혹은 {{domxref("Window.localStorage", "localStorage")}}를 사용하는 것이 좋습니다.

- `unused`

  - : 이 매개변수는 역사적인 이유로 존재해서 생략할 수 없습니다. 빈 문자열을 전달하는 것이 나중에 메서드가 변경될 경우에도 안전합니다.

- `url` {{optional_inline}}
  - : 새로운 기록 항목의 URL입니다. 브라우저는 `pushState()` 호출 후에는 이 URL을 로드하려고 시도하지 않습니다. 하지만, 예를 들어 사용자가 브라우저를 다시 시작한 후에는 나중에 URL을 로드하려고 시도할 수 있습니다. 새로운 URL은 절대 경로일 필요가 없습니다. 상대 경로인 경우 현재 URL을 기준으로 해결됩니다. 새로운 URL은 현재 URL과 같은 {{glossary("origin", "출처")}}여야 합니다. 그렇지 않으면, `pushState()`는 예외를 발생시킵니다. 이 매개변수가 지정되지 않으면, 문서의 현재 URL로 설정됩니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 설명

어떤 의미에서 `pushState()`를 호출하는 것은 `window.location = "#foo"`를 설정하는 것과 유사합니다. 둘 다 현재 문서와 연결된 다른 기록 항목을 생성하고 활성화합니다. 그러나 `pushState()`에는 몇 가지 이점이 있습니다.

- 새로운 URL은 현재 URL과 같은 출처에서 모든 URL이 될 수 있습니다. 반면, {{domxref("window.location")}}을 설정하는 것은 오직 해시를 수정하는 경우에만 동일한 문서를 유지할 수 있습니다.
- 페이지의 URL 변경은 선택 사항입니다. 반면, `window.location = "#foo";`를 설정하는 것은 현재 해시가 `#foo`가 아닌 경우에만 새로운 기록 항목을 생성합니다.
- 임의 데이터를 새로운 기록 항목과 연결할 수 있습니다. 해시 기반 접근에서는 모든 관련 데이터를 짧은 문자열로 인코딩할 필요가 있습니다.

새로운 URL이 오래된 URL과 오직 해시만 다를지라도 `pushState()`는 {{domxref("Window/hashchange_event", "hashchange")}} 이벤트를 발생시키지 않습니다.

## 예제

다음 코드는 상태와 url를 설정하는 새로운 브라우저 기록 항목을 생성합니다.

### JavaScript

```js
const state = { page_id: 1, user_id: 5 };
const url = "hello-world.html";

history.pushState(state, "", url);
```

### 쿼리 매개변수 변경

```js
const url = new URL(location);
url.searchParams.set("foo", "bar");
history.pushState({}, "", url);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Working with the History API](/ko/docs/Web/API/History_API/Working_with_the_History_API)
- [Window: popstate event](/ko/docs/Web/API/Window/popstate_event)
