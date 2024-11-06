---
title: History API로 작업하기
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{DefaultAPISidebar("History API")}}

{{DOMxRef("History.pushState","pushState()")}} 및 {{DOMxRef("History.replaceState","replaceState()")}}메서드는 각각 히스토리 항목을 추가하고 수정합니다. 이 메서드들은 {{domxref("Window/popstate_event", "popstate")}} 이벤트와 함께 작동합니다.

## 히스토리 항목 추가 및 수정

{{DOMxRef("History.pushState","pushState()")}}을 사용하면 상태를 변경한 후 생성된 {{domxref("XMLHttpRequest")}}객체의 HTTP 헤더에 사용되는 리퍼러가 변경됩니다. 리퍼러는 {{domxref("XMLHttpRequest")}} 객체를 생성할 때 창이 `this`인 문서의 URL이 됩니다.

### pushState() 메서드 예제

`https://mozilla.org/foo.html`이 다음 JavaScript 코드를 실행한다고 가정합니다.

```js
const stateObj = {
  foo: "bar",
};

history.pushState(stateObj, "page 2", "bar.html");
```

이렇게 하면 URL 표시줄에 `https://mozilla.org/bar.html`이 표시되지만, 브라우저가 `bar.html`를 로드하거나 `bar.html`이 존재하는지 확인하지는 않습니다.

이제 사용자가 `https://google.com`로 이동한 다음 **뒤로가기**버튼을 클릭한다고 가정해 보겠습니다. 이 시점에서 URL 표시줄에 `https://mozilla.org/bar.html`이 표시되고 `history.state`에 `stateObj`가 포함됩니다. 페이지가 새로고침되었기 때문에 `popstate` 이벤트는 발생하지 않습니다. 페이지 자체는 `bar.html`처럼 보일 것입니다.

사용자가 **뒤로가기**를 다시 한 번 클릭하면, URL이 `https://mozilla.org/foo.html`로 변경되고 이번에는 문서에 `null` 상태 객체가 포함된 `popstate` 이벤트가 발생합니다. 여기서도 뒤로 돌아간다고 해서 문서의 내용이 이전 단계의 내용과 바뀌지는 않지만 문서가 `popstate` 이벤트를 수신하면 내용을 수동으로 업데이트할 수 있습니다.

### pushState() 메서드

`pushState()`는 **state object**, **title**(현재 무시됨), **URL**(선택사항)의 세 가지 매개변수를 가집니다.

이 세 가지 매개변수를 각각 자세히 살펴보겠습니다.

- **state object**
  - : 상태 객체는 `pushState()`에 의해 생성된 새 기록 항목과 연관된 JavaScript 객체입니다. 사용자가 새 상태로 이동할 때마다 `popstate` 이벤트가 발생하고 이벤트의 `state` 속성에는 기록 항목의 상태 개체 복사본이 포함됩니다. 상태 객체는 직렬화할 수 있는 모든 것이 될 수 있습니다. 상태 객체는 사용자가 브라우저를 재시작한 후 복원할 수 있도록 사용자의 디스크에 저장되므로 상태 객체의 직렬화된 표현에 640k라는 크기 제한을 적용합니다. 직렬화된 표현이 이보다 큰 상태 객체를 `pushState()`에 전달하면 메서드는 예외를 던집니다. 이보다 더 많은 공간이 필요한 경우, `sessionStorage` 또는 `localStorage`사용을 권장합니다.
- **title**
  - : [Safari를 제외한 모든 브라우저는 현재 이 매개변수를 무시](https://github.com/whatwg/html/issues/2174)하지만 향후 이 매개변수를 사용할 수 있습니다. 여기에 빈 문자열을 전달하면 향후 메서드 변경에 대비하여 안전할 것입니다. 또는 이동하려는 상태에 대한 짧은 제목을 전달할 수도 있습니다.
- **URL**
  - : 새 기록 항목의 URL은 이 매개변수에 의해 지정됩니다. 브라우저는 `pushState()`를 호출한 후에는 이 URL을 로드하려고 시도하지 않지만, 사용자가 브라우저를 다시 시작한 후와 같이 나중에 URL을 로드하려고 시도할 수 있습니다. 새 URL은 절대 URL일 필요는 없으며, 상대 URL인 경우 현재 URL을 기준으로 확인됩니다. 새 URL은 현재 URL과 동일한 출처여야 합니다. 그렇지 않으면 `pushState()`가 예외를 던집니다. 이 매개변수는 선택 사항이며, 지정하지 않으면 문서의 현재 URL로 설정됩니다.

어떤 의미에서 `pushState()`를 호출하는 것은 현재 문서와 연결된 다른 히스토리 항목도 생성하고 활성화한다는 점에서 `window.location = "#foo"`를 설정하는 것과 유사합니다.

하지만 `pushState()`에는 몇 가지 장점이 있습니다.

- 새 URL은 현재 URL과 동일한 원본에 있는 모든 URL이 될 수 있습니다. 반면, `window.location`을 설정하면 해시만 수정하는 경우에는 동일한 {{ domxref("document") }}로 유지됩니다.
- 원하지 않는 경우 URL을 변경하지 않아도 됩니다. 반대로, `window.location = "#foo";`를 설정하면 현재 해시가 `#foo`가 아닌 경우에만 새 기록 항목이 생성됩니다.
- 임의의 데이터를 새 기록 항목에 연결할 수 있습니다. 해시 기반 접근 방식을 사용하면 모든 관련 데이터를 짧은 문자열로 인코딩해야 합니다.
- 만약 이후 `title` 브라우저에서 제목을 사용하는 경우, 해시와 무관하게 이 데이터를 활용할 수 있습니다.

새 URL이 이전 URL과 해시만 다르더라도 `pushState()`는 이벤트를 발생시키지 않는다는 점에 유의해야 합니다.

다른 문서에서는 `null` 네임스페이스 URI를 가진 요소를 생성합니다.

### replaceState() 메서드

`history.replaceState()`는 `history.pushState()`와 똑같이 작동하지만, `replaceState()`는 새 항목을 만드는 대신 현재 기록 항목을 수정한다는 점이 다릅니다. 이렇게 해도 전역 브라우저 기록에 새 항목이 생성되는 것을 막지는 못합니다.

`replaceState()`는 특정 사용자 작업에 대한 응답으로 현재 기록 항목의 상태 개체 또는 URL을 업데이트하려는 경우에 특히 유용합니다.

### replaceState() 메서드 예제

`https://mozilla.org/foo.html`이 다음 JavaScript 코드를 실행한다고 가정합니다.

```js
const stateObj = {
  foo: "bar",
};
history.pushState(stateObj, "page 2", "bar.html");
```

위의 두 줄에 대한 설명은 [pushState() 메서드 예제](<#pushState()_메서드_예제>) 섹션에서 확인할 수 있습니다.

다음으로 `https://mozilla.org/bar.html`이 다음 JavaScript 코드를 실행한다고 가정합니다.

```js
history.replaceState(stateObj, "page 3", "bar2.html");
```

이렇게 하면 URL 표시줄에 `https://mozilla.org/bar2.html`이 표시되지만 브라우저가 `bar2.html`를 로드하거나 `bar2.html`이 존재하는지 확인하지는 않습니다.

이제 사용자가 `https://www.microsoft.com`로 이동한 다음 **뒤로가기**버튼을 클릭한다고 가정하겠습니다. 이 시점에서 URL 표시줄에 `https://mozilla.org/bar2.html`이 표시됩니다. 이제 사용자가 **뒤로가기**버튼을 다시 클릭하면 URL 표시줄에 `https://mozilla.org/foo.html`가 표시되고 `bar.html`이 완전히 우회됩니다.

### popstate 이벤트

활성 기록 항목이 변경될 때마다 창에 `popstate` 이벤트가 전송됩니다. 활성화 중인 기록 항목이 {{DOMxRef("History.pushState","pushState")}} 호출에 의해 생성되었거나 {{DOMxRef("History.replaceState","replaceState")}} 호출의 영향을 받은 경우, `popstate` 이벤트의 `state` 속성에는 기록 항목의 상태 객체 복사본이 포함됩니다.

샘플 사용법은 {{domxref("Window/popstate_event", "popstate")}}에서 확인하시면 됩니다.

### 현재 상태 읽기

페이지가 로드될 때 non-null 상태가 아닌 객체가 있을 수 있습니다. 예를 들어 페이지에서 상태 객체를 설정한 후 ({{DOMxRef("History.pushState","pushState()")}} 또는 {{DOMxRef("History.replaceState","replaceState()")}}사용)사용자가 브라우저를 재시작하는 경우 이런 일이 발생할 수 있습니다. 페이지가 다시 로드되면 페이지에 `onload` 이벤트가 수신되지만 `popstate` 이벤트는 수신되지 않습니다. 그러나 {{DOMxRef("History.state","history.state")}} 속성을 읽으면 `popstate`가 발생했을 때 얻을 수 있는 상태 객체를 다시 얻을 수 있습니다.

다음과 같이 {{DOMxRef("History.state","history.state")}} 속성을 사용하여 `popstate` 이벤트를 기다리지 않고 현재 기록 항목의 상태를 읽을 수 있습니다.

```js
const currentState = history.state;
```

## 같이 보기

- [History API](/ko/docs/Web/API/History_API)
- [History navigation 예제](/ko/docs/Web/API/History_API/Example)
- {{domxref("window.history", "history")}} 전역 객체
