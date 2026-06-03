---
title: History API로 작업하기
slug: Web/API/History_API/Working_with_the_History_API
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{DefaultAPISidebar("History API")}}

History API는 웹사이트가 브라우저의 세션 기록과 상호작용할 수 있게 해줍니다. 세션 기록이란 사용자가 특정 창에서 방문한 페이지들의 목록을 말합니다. 예를 들어 사용자가 링크를 클릭하여 새로운 페이지를 방문하면, 그 새로운 페이지들이 세션 기록에 추가됩니다. 사용자는 브라우저의 "뒤로" 및 "앞으로" 버튼을 사용하여 기록을 앞뒤로 이동할 수도 있습니다.

History API에서 정의된 주요 인터페이스는 {{domxref("History")}} 인터페이스이며, 이 인터페이스는 두 가지 전혀 다른 메서드 집합을 정의합니다.

1. 세션 기록의 페이지로 이동하는 메서드
   - {{domxref("History.back()")}}
   - {{domxref("History.forward()")}}
   - {{domxref("History.go()")}}

2. 세션 기록을 수정하는 메서드
   - {{domxref("History.pushState()")}}
   - {{domxref("History.replaceState()")}}

이 가이드에서는 더 복잡한 동작을 가지는 두 번째 메서드 집합에만 초점을 맞출 것입니다.

`pushState()` 메서드는 세션 기록에 새 항목을 추가하고, `replaceState()` 메서드는 현재 페이지의 세션 기록 항목을 업데이트합니다. 이 두 메서드는 모두 `state` 매개변수를 사용하며, 이는 어떤 {{Glossary("Serializable_object", "직렬화 가능한 객체")}}도 포함할 수 있습니다. 브라우저가 이 히스토리 항목으로 네비게이트할 때, 브라우저는 이 항목과 연관된 상태 객체를 포함하는 {{domxref("Window.popstate_event", "popstate")}} 이벤트를 발생시킵니다.

이 API의 주요 목적은 {{Glossary("SPA", "싱글 페이지 애플리케이션")}}와 같은 웹사이트를 지원하는 것입니다. 이러한 웹사이트는 {{domxref("Window/fetch", "fetch()")}}와 같은 JavaScript API를 사용하여 전체 새로운 페이지를 로드하는 대신 새로운 콘텐츠로 페이지를 업데이트합니다.

## 싱글 페이지 애플리케이션과 세션 기록

전통적으로, 웹사이트는 페이지 모음으로 구현됩니다. 사용자가 링크를 클릭하여 사이트의 다른 부분으로 이동할 때마다 브라우저는 매번 완전한 새 페이지를 로드합니다.

이는 많은 사이트에 적합하지만, 몇 가지 단점이 있을 수 있습니다.

- 페이지의 일부만 업데이트해야 할 때마다 전체 페이지를 로드하는 것은 비효율적일 수 있습니다.
- 페이지 간 네비게이션 시 애플리케이션 상태를 유지하기 어렵습니다.

이러한 이유로 웹 애플리케이션에서 인기 있는 패턴은 {{Glossary("SPA", "싱글 페이지 애플리케이션")}}(SPA)이며, 이 경우 사이트는 단일 페이지로 구성되고 사용자가 링크를 클릭할 때 페이지는 다음과 같이 동작합니다.

1. 새 페이지를 로드하는 기본 동작을 방지합니다.
2. {{domxref("Window/fetch", "Fetches", "", "nocode")}} 새로운 콘텐츠를 가져옵니다.
3. 새로운 콘텐츠로 페이지를 업데이트합니다.

다음의 예시를 살펴봅시다.

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    // 새 페이지가 로드되지 않도록 방지
    event.preventDefault();
    try {
      // 새로운 콘텐츠 가져오기
      const response = await fetch(`creatures/${creature}.json`);
      const json = await response.json();
      // 새로운 콘텐츠로 페이지 업데이트
      displayContent(json);
    } catch (err) {
      console.error(err);
    }
  }
});
```

이 클릭 핸들러에서, 링크에 `"data-creature"` 데이터 속성이 포함되어 있다면, 해당 속성의 값을 사용하여 페이지의 새로운 콘텐츠를 포함하는 JSON 파일을 가져옵니다.

JSON 파일은 다음과 같을 수 있습니다.

```json
{
  "description": "대머리 독수리는 실제로 대머리가 아닙니다.",
  "image": {
    "src": "images/eagle.jpg",
    "alt": "대머리 독수리"
  },
  "name": "독수리"
}
```

`displayContent()` 함수는 JSON으로 페이지를 업데이트합니다.

```js
// 새로운 콘텐츠으로 페이지 업데이트
function displayContent(content) {
  document.title = `생물: ${content.name}`;

  const description = document.querySelector("#description");
  description.textContent = content.description;

  const photo = document.querySelector("#photo");
  photo.setAttribute("src", content.image.src);
  photo.setAttribute("alt", content.image.alt);
}
```

문제는 이것이 브라우저의 "뒤로" 및 "앞으로" 버튼의 예상 동작을 깨뜨린다는 것입니다.

사용자의 관점에서는 링크를 클릭하고 페이지가 업데이트되었으므로 새 페이지처럼 보입니다. 그런 다음 브라우저의 "뒤로" 버튼을 누르면 링크를 클릭하기 전 상태로 돌아가길 기대합니다.

하지만 브라우저의 관점에서는 마지막 링크가 새 페이지를 로드하지 않았으므로 "뒤로" 버튼을 누르면 사용자가 SPA를 열기 전에 로드된 페이지로 이동하게 됩니다.

이것이 `pushState()`, `replaceState()`, 그리고 `popstate` 이벤트가 해결하는 문제입니다. 이들은 역사 항목을 합성하고, 현재 세션 기록 항목이 이러한 항목 중 하나로 변경될 때(예를 들어, 사용자가 "뒤로" 또는 "앞으로" 버튼을 눌렀을 때)를 알 수 있게 해줍니다.

## `pushState()` 사용하기

위의 클릭 핸들러에 역사 항목을 추가할 수 있습니다.

```js
document.addEventListener("click", async (event) => {
  const creature = event.target.getAttribute("data-creature");
  if (creature) {
    event.preventDefault();
    try {
      const response = await fetch(`creatures/${creature}.json`);
      const json = await response.json();
      displayContent(json);
      // 새로운 역사 항목을 추가합니다.
      // 이는 새 페이지를 로드하는 것을 시뮬레이션합니다.
      history.pushState(json, "", creature);
    } catch (err) {
      console.error(err);
    }
  }
});
```

여기서 우리는 세 가지 인수로 `pushState()`를 호출하고 있습니다.

- `json`: 방금 가져온 콘텐츠입니다. 이는 역사 항목과 함께 저장되며, 나중에 사용자가 A로 네비게이션할 때 `popstate` 이벤트 핸들러에 전달되는 인수의 {{domxref("PopStateEvent.state", "state")}} 속성으로 포함됩니다.
- `""`: 이는 레거시 사이트와의 하위 호환성을 위해 필요하며, 항상 빈 문자열이어야 합니다.
- `creature`: 이는 항목의 URL로 사용됩니다. 브라우저의 URL 표시줄에 표시되며, 페이지가 수행하는 모든 HTTP 요청에서 {{httpheader("Referer")}} 헤더의 값으로 사용됩니다. 이는 페이지와 {{Glossary("Same-origin policy", "동일 출처 정책")}}이어야 합니다.

## `popstate` 이벤트 사용하기

사용자가 다음과 같이 동작한다고 가정해 봅시다.

1. SPA에서 링크를 클릭하여 페이지를 업데이트하고 `pushState()`를 사용하여 역사 항목 A를 추가합니다.
2. SPA에서 다른 링크를 클릭하여 페이지를 업데이트하고 `pushState()`를 사용하여 역사 항목 B를 추가합니다.
3. "뒤로" 버튼을 누릅니다.

이제 새로운 현재 역사 항목은 A가 되므로, 브라우저는 `popstate` 이벤트를 발생시키고, 이벤트 핸들러 인수는 A로 네비게이션할 때 `pushState()`에 전달했던 JSON을 포함합니다. 이는 다음과 같은 이벤트 핸들러를 사용하여 올바른 콘텐츠를 복원할 수 있음을 의미합니다.

```js
// 앞으로/뒤로 버튼 처리
window.addEventListener("popstate", (event) => {
  // 상태가 제공된 경우, "시뮬레이션된" 페이지가 있으며 현재 페이지를 업데이트합니다.
  if (event.state) {
    // 이전 페이지 로드를 시뮬레이션합니다.
    displayContent(event.state);
  }
});
```

## `replaceState()` 사용하기

추가해야 할 한 가지가 더 있습니다. 사용자가 SPA를 로드할 때, 브라우저는 역사 항목을 추가합니다. 이 항목은 실제 페이지 로드였기 때문에 상태가 연관되어 있지 않습니다. 따라서 사용자가 다음과 같이 동작한다고 가정해 봅시다.

1. SPA를 로드합니다. 브라우저는 역사(History) 항목을 추가합니다.
2. SPA 내의 링크를 클릭하여 페이지를 업데이트하고 `pushState()`를 사용하여 역사 항목을 추가합니다.
3. "뒤로" 버튼을 누릅니다.

이제 사용자는 SPA의 초기 상태로 돌아가길 원하지만, 이는 같은 문서 내에서의 네비게이션이기 때문에 페이지가 다시 로드되지 않으며, 초기 페이지의 역사 항목에는 상태가 없기 때문에 `popstate`를 사용하여 복원할 수 없습니다.

해결책은 `replaceState()`를 사용하여 초기 페이지의 상태 객체를 설정하는 것입니다. 예를 들면 다음과 같습니다.

```js
// 페이지 로드 시 상태를 생성하고 현재 기록을 교체합니다.
const image = document.querySelector("#photo");
const initialState = {
  description: document.querySelector("#description").textContent,
  image: {
    src: image.getAttribute("src"),
    alt: image.getAttribute("alt"),
  },
  name: "홈",
};
history.replaceState(initialState, "", document.location.href);
```

페이지 로드 시, 사용자가 SPA의 시작 지점으로 돌아갔을 때 복원할 모든 페이지의 부분을 수집합니다. 이는 다른 네비게이션을 처리할 때 가져오는 JSON과 동일한 구조를 가지고 있습니다. 우리는 이 `initialState` 객체를 `replaceState()`에 전달하여 현재 역사 항목에 상태 객체를 효과적으로 추가합니다.

사용자가 시작 지점으로 돌아가면, `popstate` 이벤트는 이 초기 상태를 포함하게 되며, 우리는 `displayContent()` 함수를 사용하여 페이지를 업데이트할 수 있습니다.

## 같이 보기

- [History API](/ko/docs/Web/API/History_API)
- {{domxref("window.history", "history")}} 전역 객체
