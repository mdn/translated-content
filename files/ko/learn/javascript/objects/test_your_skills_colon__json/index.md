---
title: "얼마나 이해했는지 확인해보자: JSON"
slug: Learn/JavaScript/Objects/Test_your_skills:_JSON
---

{{learnsidebar}}

이 테스트의 목표는 [JSON으로 작업하기](/ko/docs/Learn/JavaScript/Objects/JSON)를 잘 이해했는지 평가해보는 것입니다.

> **참고:** 아래에 있는 편집기를 사용해보세요. 테스트 중 막히면, 도움을 요청할 수 있습니다. 페이지 하단의 "평가 또는 추가 도움말" 을 참고하세요.

> **참고:** 작성한 코드에 오류가 발생하는 경우, 결과창에서 정답을 알아낼 수 있도록 돕기 위해 결과값을 보여줄 것입니다. (또는 브라우저의 자바스크립트 콘솔로도 확인 가능합니다.)

## JSON 1

이번에 수행할 유일한 과제는 JSON 데이터에 접근하고 사용해보는 것입니다. 어미 고양이들과 그들의 새끼 고양이에 관한 JSON 데이터는 [sample.json](https://github.com/mdn/learning-area/blob/master/javascript/oojs/tasks/json/sample.json)에서 확인할 수 있습니다. 이 JSON은 텍스트 문자열로 호출되며, 제시된 프로미스 체인(JSON 데이터를 가져오는 것으로 시작)의 조건을 만족시킬 때 `displayCatInfo()` 함수의 `catString` 파라미터로 사용될 수 있습니다.

- `motherInfo` 의 변수 : 쉼표로 나뉘어진 세 어미 고양이의 이름
- `kittenInfo` 의 변수 : 새끼 고양이의 전체 마릿수, 수컷 수, 암컷 수

변수들의 값은 문단 내부의 화면에 출력됩니다.

몇 가지 힌트/질문:

- JSON 데이터는 `displayCatInfo()` 함수 내부에 텍스트로 제공됩니다. 데이터를 얻기 위해서는 JSON 구문을 분석해야 합니다.
- 아마도 outer loop를 사용해 반복하여 고양이와 그들의 이름을 `motherInfo` 의 변수에 추가하고, inner loop 를 사용해 모든 새끼 고양이들, 총/수컷/암컷 마릿수를 `kittenInfo` 의 변수에 추가하려고 할 것입니다.
- 마지막에 오는 어미 고양이 이름 전에는 "and"가 와야하며, 그 뒤에 작업이 완전히 멈춰야 합니다. JSON에 고양이가 무수히 많이 오더라도 작업이 잘 이뤄질꺼라고 확신할 수 있으십니까?
- `para1.textContent = motherInfo;` 과 `para2.textContent = kittenInfo;` 는 왜 `displayCatInfo()` 함수의 내부에 있어야 하며, 스크립트 마지막에 오지 않는 것일까요? 이것은 비동기와 관련이 있습니다.

완료된 예제를 다시 만드려면, 아래 코드를 변경해보세요:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/json/json1.html", '100%', 400)}}

> **경고:** 이번 테스트를 치를 때 코드를 위에 있는 편집기에 작성하세요. 로컬환경이나 CodePen 또는 JSFiddle 에서는 이 예제가 작동하지 않을 수 있는데, _cross-origin_ 라고 불리는 보안정책 때문일 것입니다. 이는 현재 환경과 다른 출처의 리소스의 요청을 제한하는 정책입니다. 위 편집기는 자바스크립트 코드와 요청된 JSON 파일을 모두 동일한 출처에서 요청하고 있습니다. (Github 저장소의 \<iframe>에 내장되어 있습니다.) 하지만 예를 들어 CodePen에 기입하는 코드는 JSON을 호출하는 출처와는 다르기 때문에 오류가 발생할 수 있습니다. CORS를 사용하여 이런 제약사항을 해결할 수 있지만, 이번 장에서 가르치는 범위에는 해당하지 않습니다.

## 평가 또는 추가 도움말

위에 있는 편집기를 이용해 예제를 연습해볼 수 있습니다.

만일 작업을 평가하고나, 막혀서 도움을 요청하고 싶다면:

1. [MDN 학습 토론 카테고리](https://discourse.mozilla.org/c/mdn/learn/250)에 평가 또는 도움을 요청하는 글을 작성하세요. 글에는 다음 사항이 포함되어야 합니다 :

   - "Assessment wanted for JSON skill test (JSON 기술 테스트에 대한 평가를 요청드립니다)" 와 같은 제목을 사용하세요.
   - 이미 시도해보았거나, 원하는 것(예를 들어, 막혀서 도움이 필요하다거나 평가가 필요하다는 것과 같은)에 대한 세부사항을 기입해주세요.
   - 작성한 코드를 삽입하세요.
   - 실제 작업 또는 평가 페이지에 대한 링크를 삽입하세요. 그래야 도움받고자 하는 질문을 확인할 수 있습니다.
