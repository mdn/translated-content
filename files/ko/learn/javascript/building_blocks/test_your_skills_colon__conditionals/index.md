---
title: "실력을 평가해 보세요: 조건문"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals
---

{{learnsidebar}}

이 실력 평가의 목적은 여러분이 [판단을 만드세요 — 조건문](/ko/docs/Learn/JavaScript/Building_blocks/conditionals) 문서를 잘 이해했는지 평가하기 위함입니다.

.

> **참고:** 여러분은 정답을 아래의 인터랙티브 에디터에서 시도해 볼 수 있지만, 과제를 수행하기 위해 코드를 다운로드해서 다음과 같은 온라인 툴을 이용하는 것 또한 도움이 될 지도 모릅니다: [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/)
>
> 정말로 막히면, 도움을 요청해 보세요 — 이 페이지 아래의 [Assessment or further help](#assessment_or_further_help) 섹션을 확인해 보세요.

> **참고:** 아래의 예제들에서, 만약 여러분의 코드에 오류가 있다면, 답을 알아내려고 시도하는 것을 돕기 위해 페이지의 결과 패널에 (혹은 다운로드 버전의 경우, 브라우저의 JavaScript 콘솔에) 오류가 출력될 것입니다.

## 조건문 1

이 과제에서는 여러분에게 두 변수가 주어집니다:

- `season` — 현재 계절이 무엇인지를 말하는 문자열을 포함합니다.
- `response` — 초기화되지 않은 상태지만, 나중에 결과 패널에 출력될 대답을 저장하기 위해 쓰입니다.

우리는 여러분이 `season`이 문자열 "summer"를 포함하는지를 확인하는 조건문을 작성하고, 만약 그렇다면 `response`에 계절에 대한 알맞은 메시지를 유저에게 주는 문자열을 할당하기를 원합니다. 만약 아니라면, `response`에 유저에게 우리는 무슨 계절인지 모른다고 말하는 일반적인 문자열을 할당해야만 합니다.

마치기 위해서, 여러분은 그리고서 `season`가 문자열 "winter"를 포함하는지를 확인하는 다른 테스트를 추가하고, 다시 `response`에 적절한 문자열을 할당해야만 합니다.

완성된 예제를 만들기 위해 아래의 라이브 코드를 업데이트해 보세요:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> **참고:** 다른 (온라인) 에디터에서 작업하기 위해 [이 과제에 대한 시작점을 다운로드하세요.](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/tasks/conditionals/conditionals1-download.html)

## 조건문 2

이 과제에 대해서 여러분에게는 3개의 변수가 주어집니다:

- `machineActive` — 대답 기계가 켜졌는지 꺼졌는지에 대한 지표를 포함합니다 (`true`/`false`)
- `score` — 가상 게임에서의 여러분의 점수를 포함합니다. 이 점수는 대답 기계에 넣어지는데, 이는 여러분이 얼마나 잘 했는지를 나타내는 대답을 제공합니다.
- `response` — 초기화되지 않은 상태지만, 나중에 결과 패널에 출력될 대답을 저장하기 위해 쓰입니다./li>

여러분은 기계가 켜졌는지 확인하고 `response` 변수에 메시지를 넣는 `if...else` 구조를 만들 필요가 있습니다. 만약 기계가 켜지지 않았다면, 유저에게 기계를 작동시키라고 말하세요.

만약 기계가 켜져 있다면 — 첫번째 (`if...else`문) 내부에, 여러분은 점수 값이 무엇인지에 따라 `response`에 적절한 메시지를 넣는 `if...else if...else`를 중첩할 필요가 있습니다. 다른 조건 테스트 (그리고 결과 대답)은 다음과 같습니다:

- 0보다 작거나 100보다 큰 점수 — "이것은 가능하지 않습니다, 오류가 발생했습니다."
- 0에서 19의 점수 — "끔찍한 점수입니다 — 완전한 실패입니다!"
- 20에서 39의 점수 — "조금 알긴 하지만 꽤 나쁜 점수입니다. 발전이 필요합니다."
- 40에서 69의 점수 — "그런대로 잘 하셨네요, 나쁘지 않습니다!"
- 70에서 89의 점수 — "훌륭한 점수입니다, 정말로 잘 아시는군요."
- 90에서 100의 점수 — "놀라운 점수입니다! 커닝하셨나요? 진짜인가요?"

완성된 예제를 만들기 위해 아래의 라이브 코드를 업데이트해 보세요. 코드를 입력한 이후에, 작동하는지 보기 위해서, `machineActive`을 `true`로 바꿔 보세요.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> **참고:** 다른 (온라인) 에디터에서 작업하기 위해 [이 과제에 대한 시작점을 다운로드하세요.](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/tasks/conditionals/conditionals2-download.html)

## 조건문 3

이 과제에서 여러분은 두번째 과제에서 작성했던 코드를 가져와서, 안쪽의 `if...else if...else`를 `switch` 문으로 대신 재작성할 필요가 있습니다.

완성된 예제를 만들기 위해 아래의 라이브 코드를 업데이트해 보세요:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> **참고:** 다른 (온라인) 에디터에서 작업하기 위해 [이 과제에 대한 시작점을 다운로드하세요.](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/tasks/conditionals/conditionals3-download.html)

## 조건문 4

마지막 과제에 대해서 여러분에게는 4개의 변수가 주어집니다:

- `machineActive` — 로그인 기계가 켜졌는지 꺼졌는지에 대한 지표를 포함합니다 (`true`/`false`).
- `pwd` — 유저의 로그인 비밀번호를 포함합니다.
- `machineResult` — 초기화되지 않은 상태지만, 유저에게 기계가 켜졌는지를 알게 하는, 나중에 결과 패널에 출력될 대답을 저장하기 위해 쓰입니다.
- `pwdResult` — 초기화되지 않은 상태지만, 유저에게 로그인 시도가 성공적이였는지를 알게 하는, 나중에 결과 패널에 출력될 대답을 저장하기 위해 쓰입니다.

우리는 여러분이 기계가 켜졌는지를 확인하고, 유저에게 기계가 켜졌는지 꺼졌는지를 말하는 `machineResult` 변수에 메시지를 넣는 `if...else` 구조를 만들기를 원합니다.

만약 기계가 켜져 있으면, 우리는 또한 `pwd`이 `cheese`와 동일한지 확인하는 두번째 조건문을 원합니다. 만약 그렇다면, 그것은 `pwdResult`에 유저에게 성공적으로 로그인되었다고 말하는 문자열을 할당해야만 합니다. 만약 그렇지 않다면, `pwdResult`에 유저에게 로그인 시도가 성공적이지 않았다고 말하는 다른 문자열을 할당해야만 합니다. `if ... else` 구조가 아닌 무언가를 사용해서, 우리는 여러분이 이것을 한 줄에서 하기를 원합니다.

완성된 예제를 만들기 위해 아래의 라이브 코드를 업데이트해 보세요:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals4.html", '100%', 400)}}

> **참고:** 다른 (온라인) 에디터에서 작업하기 위해 [이 과제에 대한 시작점을 다운로드하세요.](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/tasks/conditionals/conditionals4-download.html)

## 평가 혹은 추가적인 도움

여러분은 이 예제들을 위의 인터랙티브 에디터에서 실습할 수 있습니다.

만약 여러분의 작업을 평가받고 싶으시거나 막혀서 도움을 요청하기를 원하신다면:

1. 여러분의 작업을 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/) 같은 온라인에서 공유 가능한 에디터에 올리세요. 여러분은 직접 코드를 작성하거나, 위 섹션들에 링크된 시작점 파일을 사용할 수 있습니다.
2. [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn) 에 평가 및/또는 도움을 요청하는 글을 작성하세요. 여러분의 글은 다음을 포함해야만 합니다:

   - "조건문 1 실력 평가에 대한 평가 원함"과 같은 서술적인 제목.
   - 여러분이 이미 무엇을 시도해 봤는지, 그리고 우리가 무엇을 하기를 원하는지에 대한 설명. 예를 들자면, 막혀서 도움이 필요하다거나, 평가를 원한다거나 하는 설명을 포함해야 합니다.
   - (위의 단계 1에서 언급된) 온라인에서 공유 가능한 에디터에 있는, 여러분이 평가를 원하거나 도움이 필요한 예제의 링크. 이것은 익숙해지기에 좋은 습관입니다. 코딩 문제가 있는 누군가를 도울 때, 그들의 코드를 보지 못한다면 그들을 돕는 것은 몹시 힘듭니다.
   - 우리가 여러분이 도움을 원하는 문제를 찾을 수 있도록, 실제 과제나 평가 페이지의 링크.
