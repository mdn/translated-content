---
title: "실력을 평가해 보세요: 반복문"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Loops
---

{{learnsidebar}}

이 실력 테스트의 목적은 여러분이 우리의 [반복문](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code) 문서를 이해했는지를 평가하기 위함입니다.

> **참고:** 여러분은 코드를 다운로드하고, [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/)와 같은 온라인 툴(tool)에 넣고, 그리고서 과제에 도전해 봄으로써 아래의 과제들에 대한 해답을 시도해볼 수 있습니다. 무한 루프를 만들고 평가 페이지를 멈추게 하는 위험 때문에 우리는 이 과제들에 대해 실시간으로 수정 가능한 에디터를 제공하지 않았습니다!
>
> 만약 막히면, 도움을 요청하세요 — 이 페이지 아래의 [Assessment or further help](#assessment_or_further_help) 섹션을 보세요.

## DOM 조작: 유용하다고 생각됨

아래의 몇몇 문제들은 여러분에게 문제 해결을 위해서 몇몇 [DOM](/ko/docs/Glossary/DOM) 조작 코드를 작성하기를 요구합니다 — 새로운 HTML 요소 생성하기, 특정한 문자열 값과 동일한 텍스트 콘텐츠 설정하기, 그리고 페이지에 존재하는 요소 내부에 중첩하기와 같은 — 모두 JavaScript를 통해서.

우리는 이것을 아직 이 코스에서 분명하게 가르치지 않았지만, 여러분은 이것을 사용하는 몇몇 예제를 보았고, 우리는 여러분이 문제에 성공적으로 답하기 위해 어떤 DOM API들이 필요한지에 대해 검색하기를 원합니다. 좋은 시작점은 우리의 [문서 조작하기](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)(Manipulating documents) 튜토리얼입니다.

## 반복문 1

우리의 첫 반복문 과제에서 우리는 여러분이 제공된 `myArray` 내의 모든 요소를 순회하고, 제공된 `list`에 추가될 리스트 아이템 (예: [`<li>`](/ko/docs/Web/HTML/Element/li) 요소) 내에서 화면에 그것들을 출력하는 간단한 반복문을 만듦으로써 시작하기를 원합니다.

> **참고:** 여러분의 에디터나 온라인 에디터에서 작업하기 위해서 [이 과제의 시작점을 다운로드](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/tasks/loops/loops1-download.html)하세요.

## 반복문 2

이 다음 과제에서, 우리는 여러분이, 이름이 주어지면 이름과 전화번호 (`phonebook`)를 포함하고 있는 객체 배열을 탐색하고, 만약 그 이름을 찾으면, 이름과 전화번호를 단락 (`para`)에 출력하고 그리고서 반복문이 다 실행되기 전에 반복문을 빠져나오는 간단한 프로그램을 작성하기를 원합니다.

3개의 변수가 주어집니다:

- `i` — 0의 값에서 시작합니다; 반복자(iterator)로써 쓰이게 의도되었습니다.
- `name` — 검색할 이름을 포함하고 있습니다.
- `para` — 단락에 대한 참조를 포함하고 있는데, 결과를 보이기 위해 사용될 것입니다.

여러분은 전 과제에서 사용하지 않은 유형의 반복문을 사용해야 합니다.

> **참고:**
>
> 여러분의 에디터나 온라인 에디터에서 작업하기 위해서 [이 과제의 시작점을 다운로드](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/tasks/loops/loops2-download.html)하세요.

## 반복문 3

이 마지막 과제에서는, 다음의 것들이 제공됩니다:

- `i` — 500의 값으로 시작합니다; 반복자로써 쓰이게 의도되었습니다.
- `para` — 단락에 대한 참조를 포함하고 있는데, 결과를 보이기 위해 사용될 것입니다.
- `isPrime()` — 숫자가 전달되었을 때, 만약 숫자가 소수(prime number)면, `true`를 반환하고, 아니면 `false`를 반환하는 함수.

여러분은 숫자 2에서 500까지 뒤로 가는 반복문을 사용하고 (1은 소수에 포함되지 않습니다), 제공된 `isPrime()` 함수를 그 숫자들에서 실행할 필요가 있습니다. 소수가 아닌 각 숫자에 대해서는, 다음 반복으로 계속하세요. 소수인 각 숫자에 대해서는, 그것을 단락의 `textContent`에 몇몇 종류의 분리자(separator)에 덧붙여 추가하세요.

여러분은 이전의 두 과제에서 사용하지 않은 유형의 반복문을 사용해야 합니다.

> **참고:** 여러분의 에디터나 온라인 에디터에서 작업하기 위해서 [이 과제의 시작점을 다운로드](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/tasks/loops/loops3-download.html)하세요.

## 평가 혹은 추가적인 도움

만약 여러분의 작업을 평가받고 싶으시거나 막혀서 도움을 요청하기를 원하신다면:

1. 여러분의 작업을 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 또는 [Glitch](https://glitch.com/)와 같은 온라인에서 공유 가능한 에디터에 올리세요. 여러분은 코드를 직접 작성할 수도 있고, 혹은 위 섹션에 링크된 시작 파일을 사용할 수도 있습니다.
2. [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn) 에 평가 및/또는 도움을 요청하는 글을 작성하세요. 여러분의 글은 다음을 포함해야만 합니다:

   - "반복문 1 실력 테스트에 대한 평가 원함"과 같은 서술적인 제목.
   - 여러분이 이미 무엇을 시도해 봤는지, 그리고 우리가 무엇을 하기를 원하는지에 대한 설명. 예를 들자면, 막혀서 도움이 필요하다거나, 평가를 원한다거나 하는 설명을 포함해야 합니다.
   - (위의 단계 1에서 언급된) 온라인에서 공유 가능한 에디터에 있는, 여러분이 평가를 원하거나 도움이 필요한 예제의 링크. 이것은 익숙해지기에 좋은 습관입니다. 코딩 문제가 있는 누군가를 도울 때, 그들의 코드를 보지 못한다면 그들을 돕는 것은 몹시 힘듭니다.
   - 우리가 여러분이 도움을 원하는 문제를 찾을 수 있도록, 실제 과제나 평가 페이지의 링크.
