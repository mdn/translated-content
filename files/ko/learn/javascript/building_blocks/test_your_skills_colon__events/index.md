---
title: "실력을 평가해 보세요: 이벤트"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Events
---

{{learnsidebar}}

이 실력 테스트의 목적은 여러분이 우리의 [이벤트 입문](/ko/docs/Learn/JavaScript/Building_blocks/Events) 문서를 이해했는지 평가하기 위함입니다.

> **참고:** 아래의 인터랙티브 에디터에서 해답을 시도해 볼 수도 있지만, 과제를 하기 위해 코드를 다운로드하고 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/)와 같은 온라인 툴(tool)을 사용하는 것이 도움이 될 지도 모릅니다.
>
> 만약 막히면, 도움을 요청하세요 — 이 페이지 아래의 [Assessment or further help](#assessment_or_further_help) 섹션을 보세요.

> **참고:** 아래의 예제들에서, 만약 코드에 오류가 있다면, 답을 찾는 걸 돕기 위해 페이지의 결과 패널에 (또는 다운로드한 경우, 브라우저의 JavaScript 콘솔에) 오류가 출력될 것입니다.

## DOM 조작: 유용하다고 생각됨

아래의 몇몇 문제들은 여러분에게 문제 해결을 위해서 몇몇 [DOM](/ko/docs/Glossary/DOM) 조작 코드를 작성하기를 요구합니다 — 새로운 HTML 요소 생성하기, 특정한 문자열 값과 동일한 텍스트 콘텐츠 설정하기, 그리고 페이지에 존재하는 요소 내부에 중첩하기와 같은 — 모두 JavaScript를 통해서.

우리는 이것을 아직 이 코스에서 분명하게 가르치지 않았지만, 여러분은 이것을 사용하는 몇몇 예제를 보았고, 우리는 여러분이 문제에 성공적으로 답하기 위해 어떤 DOM API들이 필요한지에 대해 검색하기를 원합니다. 좋은 시작점은 우리의 [문서 조작하기](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)(Manipulating documents) 튜토리얼입니다.

## 이벤트 1

우리의 첫 번째 이벤트에 관계된 과제에서, 여러분은 버튼 (`btn`) 내부의 텍스트가 버튼이 클릭되었을 때 바뀌고, 다시 클릭되었을 때 원상복귀되게 하는 간단한 이벤트 핸들러를 생성할 필요가 있습니다.

HTML은 변경되어서는 안 됩니다; JavaScript만 변경되어야 합니다.

완성된 예제를 다시 만들기 위해 아래의 코드를 업데이트해 보세요:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events1.html", '100%', 400)}}

> **참고:** 여러분의 에디터나 온라인 에디터에서 작업하기 위해서 [이 과제의 시작점을 다운로드](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/tasks/events/events1-download.html)하세요.

## 이벤트 2

이제 우리는 키보드 이벤트를 살펴볼 것입니다. 이 평가를 통과하기 위해서 여러분은 WASD 키가 키보드에서 눌렸을 때 원을 제공된 캔버스 주위에서 움직이는 이벤트 핸들러를 만들 필요가 있습니다. 원은 `drawCircle()` 함수로 그려지는데, 이는 다음의 입력을 매개변수로 취합니다.

- `x` — 원의 x 좌표.
- `y` — 원의 y 좌표.
- `size` — 원의 반지름.

완성된 예제를 다시 만들기 위해 아래의 코드를 업데이트해 보세요:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events2.html", '100%', 400)}}

> **참고:** 여러분의 에디터나 온라인 에디터에서 작업하기 위해서 [이 과제의 시작점을 다운로드](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/tasks/events/events2-download.html)하세요.

## 이벤트 3

우리의 마지막 이벤트에 관련된 과제에서, 여러분은 `<button>`들의 부모 요소 (`<div class="button-bar"> ... </div>`)에 이벤트 핸들러를 설정할 필요가 있는데, 이는 버튼을 클릭해서 호출했을 때 `button-bar`의 배경색을 버튼의 `data-color` 어트리뷰트 안에 포함된 색으로 설정합니다.

우리는 여러분이 모든 버튼을 순회하고 각 버튼에 이벤트 리스너를 주지 않고 이것을 해결하기를 원합니다.

완성된 예제를 다시 만들기 위해 아래의 코드를 업데이트해 보세요:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/events/events3.html", '100%', 400)}}

> **참고:** 여러분의 에디터나 온라인 에디터에서 작업하기 위해서 [이 과제의 시작점을 다운로드](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/tasks/events/events3-download.html)하세요.

## 평가 혹은 추가적인 도움

여러분은 이 예제들을 위의 인터랙티브 에디터에서 연습할 수 있습니다.

만약 여러분의 작업을 평가받고 싶으시거나 막혀서 도움을 요청하기를 원하신다면:

1. 여러분의 작업을 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/)와 같은 온라인에서 공유 가능한 에디터에 올리세요. 여러분은 코드를 직접 작성할 수도 있고, 혹은 위 섹션에 링크된 시작 파일을 사용할 수도 있습니다.
2. [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn) 에 평가 및/또는 도움을 요청하는 글을 작성하세요. 여러분의 글은 다음을 포함해야만 합니다:

   - "이벤트 1 실력 테스트에 대한 평가 원함"과 같은 서술적인 제목.
   - 여러분이 이미 무엇을 시도해 봤는지, 그리고 우리가 무엇을 하기를 원하는지에 대한 설명. 예를 들자면, 막혀서 도움이 필요하다거나, 평가를 원한다거나 하는 설명을 포함해야 합니다.
   - (위의 단계 1에서 언급된) 온라인에서 공유 가능한 에디터에 있는, 여러분이 평가를 원하거나 도움이 필요한 예제의 링크. 이것은 익숙해지기에 좋은 습관입니다. 코딩 문제가 있는 누군가를 도울 때, 그들의 코드를 보지 못한다면 그들을 돕는 것은 몹시 힘듭니다.
   - 우리가 여러분이 도움을 원하는 문제를 찾을 수 있도록, 실제 과제나 평가 페이지의 링크.
