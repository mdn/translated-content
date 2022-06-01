## 목차

1. **[MDN 번역 콘텐츠에 대한 일반 지침](#MDN-번역-콘텐츠에-대한-일반-지침)**
2. **[첫 기여자들을 위한 지침 안내](#첫-기여자들을-위한-지침-안내)**
3. **[yari 빠른 사용법](#yari-빠른-사용법)**
4. **[번역 가이드](#번역-가이드)**
5. **[용어 지침](#용어-지침)**
6. **[code formatter](#code-formatter)**
7. **[기타](#기타)**
8. **[자주 묻는 질문](#자주-묻는-질문)**
9. **[맺음말](#맺음말)**

---
## MDN 번역 콘텐츠에 대한 일반 지침

이 문서는 한국(ko) 지역에 대한 번역 지침입니다. 귀하의 로케일에 대한 몇 가지 특정 지침을 문서화하는 페이지를 추가하고 싶은데 아직 여기에 나타나지 않는 경우, 하나를 추가하거나 [Locale Teams](https://github.com/mdn/translated-content#policies-for-active-community-maintenance-teams)에 문의해주세요.

마찬가지로 추가하려는 일반 지침에 대한 좋은 아이디어가 있는 경우 환영합니다. Issue를 열고 문제에 대해 이야기해주세요. 다음은 한국어 번역 지침 원칙의 주요 내용입니다.

## 첫 기여자들을 위한 지침 안내

MDN의 모든 로케일은 `en-us`를 기준으로 변역이 진행되고 있습니다. 한국 로케일[(translated-content)](https://github.com/mdn/translated-content)도 `en-us`[(content)](https://github.com/mdn/content)를 기반으로 번역이 진행되고 있습니다. **따라서, `ko`와 `en-us` 문서 사이에 차이가 있다면, 마크업을 포함하여 `en-us` 문서를 기준으로 번역하여 `translated-content` 저장소에 기여할 수 있습니다.**

[번역 가이드](#번역-가이드)와 [용어 지침](#용어-지침)을 숙지 후 기여해주세요.

### PR 규칙

- `ko-locale`에 존재하지 않는 새로운 파일에 대한 번역을 진행할 때, **파일 전체 번역**을 원칙으로 합니다. (단, [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)와 같이 분량이 많은 파일에 대해서는 부분 번역을 허용합니다. 이때, 번역되지 않은 부분은 `en-us locale` 원본으로 대체합니다.)
- `PR`의 `Merge` 우선 순위는 관련 이슈에서 가장 처음 언급된 `PR`이 병합 우선권을 갖습니다. 리뷰어는 우선 순위가 있는 PR을 먼저 병합하는것을 원칙으로 합니다. 따라서, 번역을 진행하기 전에, `PR`과 관련된 이슈가 없다면 이슈를 생성하는 것을 권장합니다. [ko-locale PR 목록](https://github.com/mdn/translated-content/pulls?q=is%3Apr+is%3Aopen+label%3Al10n-ko+)
- 위 규칙들로 우선 순위를 정하기 힘든 경우 리뷰어는 기여자에게 충돌 해결을 요청 드릴 수 있습니다. 이 경우에는 충돌 해결 후 병합을 진행합니다.

### ko-locale 현황판

어디서부터 기여해야 될지 모르겠다면 현황판에 등록된 `Level 0`, `Level 1`, `Level 2` 각자 MDN의 이해도에 맞는 이슈를 처리해보세요! 새로운 이슈를 제보하는 것도 기여에 큰 도움이 됩니다.

- [ko-locale 현황판](https://github.com/mdn/translated-content/projects/2)

### 파일 확장자

현재 translated-content 저장소는 `.html`과 `.md` 두 개의 확장자로 문서 편집을 할 수 있습니다. **(자세한 내용은 [자주 묻는 질문](https://github.com/mdn/translated-content/blob/main/docs/ko/translation-guide.md#%EC%9E%90%EC%A3%BC-%EB%AC%BB%EB%8A%94-%EC%A7%88%EB%AC%B8) 6번을 참고해주세요.)**

첫 기여자분들을 위해 다음 [issue 827](https://github.com/mdn/translated-content/issues/827)에 기여 방법을 작성했습니다. 참고해주세요.

추가적으로 궁금하신점 있으시면 [Kakao Talk (#MDN Korea)](https://open.kakao.com/o/gdfG288c)에 이야기해주세요.

## yari 빠른 사용법

yari 가 content repo에 내장돼있습니다. 세부 절차는 [다음 링크](https://github.com/mdn/translated-content#making-contributions)를 참고해주세요.

1. [content](https://github.com/mdn/content)와 (Fork된 본인 레포의) [translated-content](https://github.com/mdn/translated-content)를 클론합니다.
2. content 폴더에 들어가서 `yarn install`을 통해 yari 등 필요한 패키지를 다운받습니다.
3. content 폴더 root에 .env 파일을 추가합니다. (translated-content/files 경로 추가, vscode editor의 경우 `EDITOR=code` 추가)

```
CONTENT_TRANSLATED_ROOT=/path/to/translated-content/files
EDITOR=code
```
4. `yarn start`

다음과 같이 진행하면 아래와 같이 실시간으로 반영사항을 확인할 수 있고 4가지 편집 버튼으로 편집할 수 있습니다.
![image](https://user-images.githubusercontent.com/22424891/117309001-002e0500-aebd-11eb-9842-8f78a99e8873.png)

## 번역 가이드

### heading ID 번역

기사 제목에는 거의 항상 ID가 주어지는데, 기사 내에서 네비게이션을 자동으로 생성하고 실시간 샘플을 생성하기 위한 코드 블록을 식별하는 등의 이유가 있습니다. 제목을 번역 할 때 ID도 같이 번역 할 필요가 없습니다. 나머지 슬러그는 번역되지 않으므로 모든 것이 일관되게 유지됩니다.

예를 들면:

```html
<h2 id="tutorials"> Tutorials </h2> 
```

`ko` 지역 에서

```html
<h2 id="tutorials"> 튜토리얼 </h2>
```

일반적으로 모든 ID를 소문자로 작성하는 것이 좋습니다. 플랫폼은 어쨌든 렌더링시 자동으로 변환하지만 소문자로 유지하면 변환으로 인해 수동으로 만든 앵커 링크가 작동하지 않을 가능성이 적습니다.

### code block 번역

코드 블록을 번역 할 때 주석, 문자열, 변수 이름 및 출력물을 번역하는 것이 좋습니다.

그러나 구문과 같은 실제 코드 용어를 번역하지 마십시오. 예제는 작업을 마친 후에도 계속 작동해야합니다.

또한, 예제 번역을 고려할 때, 일부 예제는 별도의 저장소에 있는 라이브 버전 또는 소스 코드에 연결된다는 점을 염두에 두십시오. 여러분은 또한 번역 된 페이지에서 링크 할 외부 코드 예제의 번역 된 버전을 만드는 것을 고려할 수도 있습니다.

### HTML 소스의 줄 바꿈

일부 기사 소스 코드에서, 반드시 필요하지 않은 블록 수준 요소에서 줄 바꿈을 찾을 수 있습니다. 예를 들면 다음과 같습니다.

```html
<p>The
  <code><strong>HTMLCanvasElement</strong></code><strong><code>.transferControlToOffscreen()</code></strong>
  method transfers control to an {{domxref("OffscreenCanvas")}} object, either on the main
  thread or on a worker.</p>

<pre
  class="brush: js">OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()</pre>
```

일반적으로 소스 코드에서 이와 같은 줄 바꿈을 사용하지 않으므로 원하는 경우 자유롭게 제거 할 수 있으며 새 번역을 만들 때 추가하지 마십시오. 그러나 최종 렌더링 결과에 영향을 미치지 않으므로 이를 제거하는 데 너무 많은 시간을 소비하지 마십시오.

### 역주/역자주 

그동안의 MDN 문서에서는 역주로 인한 자의적인 해석이 많았고, 전체적인 문서의 품질을 낮췄습니다. 역주가 꼭 필요한 상황이 아니라면 역주는 남기지 않으며, 남기더라도 따로 역주를 표시하지 않고 본문에 포함합니다.
예시: [다음 링크 참고](https://github.com/mdn/translated-content/pull/1385#discussion_r667509255)

### 기울임꼴

한글은 기울임꼴에 적합하지 않습니다. 전용 이탤릭체가 없다는 것이 첫 이유이고, 문자의 조형이 (정)사각형인 것이 두 번째 이유입니다. [세부 내용 다음 링크 참고](https://github.com/mdn/translated-content/issues/1537)

- 기본 방침은 생략하며, 기여자에 재량에 따라 아래 두 가지 규칙을 따른다.
  - 한글일 경우 '' 를 tag 대신에 기입한다.
  - 한글이 아닐 경우 생략한다.

다만 진짜 강조를 해야하는 상황에는, 따옴표로 강조하고 PR로 소명합니다.

### `:` 쌍점,  `;` 쌍반점 지침

뒤의 문장 예시를 강조하기 위해 쌍점을 사용하는 경우에 `: 쌍점`은 한글 문법에 적합하지 않습니다. [(참고 이슈 링크)](https://github.com/mdn/translated-content/pull/2747#issuecomment-964241518)

`한글맞춤법-부록-문장 부호` 부분의 `: 쌍점`에 대한 규정만 존재하고, `; 쌍반점`에 대한 규정은 존재하지 않습니다. 따라서, 해당 경우가 아니면 `: 쌍점`을 `. 온점`으로 치환하는 것을 권장합니다. `; 쌍반점`의 경우는 `. 온점`으로 치환하는 것을 권장합니다.[(참고: 국립 국어원)](https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=70177)

```
<한글맞춤법-부록-문장부호>

쌍점( : )

(1) 내포되는 종류를 들 적에 쓴다.

문장 부호: 마침표, 쉼표, 따옴표, 묶음표 등 문방사우: 붓, 먹, 벼루, 종이

(2) 소표제 뒤에 간단한 설명이 붙을 때에 쓴다.

일시: 1984 년 10 월 15 일 10 시
마침표: 문장이 끝남을 나타낸다.

(3) 저자명 다음에 저서명을 적을 때에 쓴다.

정약용: 목민심서, 경세유표
주시경: 국어 문법, 서울 박문 서관, 1910.

(4) 시(時)와 분(分), 장(章)과 절(節) 따위를 구별할 때나, 둘 이상을 대비할 때에 쓴다.

오전 10:20 (오전 10 시 20 분)
요한 3:16 (요한복음 3 장 16 절)
대비 65:60 (65 대 60)
```

- 원문 [(참고 링크)](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/parameterDescriptors)
```
The properties of these objects are as follows:
```

- 변경 전
```
이 객체들의 속성은 다음과 같습니다:
```

- 변경 후
```
이 객체들의 속성은 다음과 같습니다.
```

### `—` 대시 지침

`: 쌍점,  ; 쌍반점 지침`과 같은 맥락에서 `. 온점`으로 치환하는 것을 권장합니다. [(참고 이슈 링크)](https://github.com/mdn/translated-content/pull/2747#issuecomment-965500282)

- 원문
```
A value of 0.01 was used for the value to ramp down to in the last function rather than 0, as an invalid or illegal string error is thrown if 0 is used — the value needs to be positive.
```

- 변경 전
```
오류가 발생되기 때문입니다 — 이 값은 양수일 필요가 있습니다.
```

- 변경 후
```
오류가 발생되기 때문입니다. 이 값은 양수일 필요가 있습니다.
```

## 용어 지침

새로운 용어를 추가할 때, 기존 문서의 레거시와 [국립 국어원 한국어 어문 규범](https://kornorms.korean.go.kr/main/main.do)을 고려해 추가할 것을 권장합니다.
[국립 국어원 온라인가나다](https://www.korean.go.kr/front/onlineQna/onlineQnaList.do?mn_id=216)에서 어문 규범, 어법, 표준국어대사전 내용 등에 대하여 문의할 수 있습니다.

### 공통

- 브랜드 이름은 번역하지 않습니다.

```diff
- 자바스크립트
- 씨에스에스
- 모질라
+ JavaScript
+ CSS
+ Mozilla
```

- "무슨무슨 값" (numeric value, integer value, ...) 같은 경우, 항상 띄어서 표기합니다. 
    - 통일성을 위해 "반환 값" 같은 경우 띄어서 표기합니다.
    - 예: 정수 값, 소수 값, 반환 값, 기본 값
    - 틀린 예: 정숫값, 소숫값, 반환값, 기본값

### 용어 지침 `참고 링크` 우선 순위

- 1. 해당 단어에 대한 의견을 나눈 PR 링크
- 2. 적절한 ko MDN 문서 링크
- 3. 적절한 en-us MDN 문서 링크

## Section Title

각 페이지의 Section Title에 대한 단어 정의입니다. 

**사전 순으로 용어집을 편집해주세요.**

| 용어 | 번역 | 참고 링크 |
| --- | --- | --- |
| Accessibility concerns | 접근성 고려사항 | |
| Advantages | 장점 | [링크](https://developer.mozilla.org/en-US/docs/Games/Introduction_to_HTML5_Game_Development) |
| Aliasing | 별칭 | [링크](https://github.com/mdn/translated-content/pull/1779/files) |
| Brief history | 간략한 역사 | [링크](https://developer.mozilla.org/ko/docs/Glossary/HTML#%EA%B0%84%EB%9E%B5%ED%95%9C_%EC%97%AD%EC%82%AC) |
| Browser compatibility | 브라우저 호환성 | [링크](https://github.com/mdn/translated-content/pull/1779/files) |
| Browser support | 브라우저 지원 | [링크](http://localhost:5042/en-us/docs/Web/API/Web_Audio_API/Using_IIR_filters#browser_support) |
| Concept | 개념 | |
| Conclusion | 결론 | |
| Contact us | 문의하기 | |
| Demo | 데모 | [링크](https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders#demo)
| Description | 설명 | [링크](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description)  
| Example | 예제 | [링크](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) |
| Examples | 예제들 | [링크](https://developer.mozilla.org/en-US/docs/Glossary/loop#examples) |
| Guides | 가이드 | |
| In this module | | [링크](https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started#in_this_module) |
| Learn More | 더 알아보기 | [링크](https://developer.mozilla.org/en-US/docs/Glossary/Mutable) |
| Next steps | 다음 단계 | [링크](https://developer.mozilla.org/ko/docs/Games/Tutorials/2D_breakout_game_Phaser#%EB%8B%A4%EC%9D%8C_%EB%8B%A8%EA%B3%84) |
| Polyfill | 폴리필 | [링크](https://github.com/mdn/translated-content/pull/1779/files) |
| Reference | 참고서 | |
| See also | 같이 보기 | [링크](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) |
| Specifications | 명세서 | [링크](https://github.com/mdn/translated-content/pull/1779/files) |
| Summary | 요약 | |
| Syntax | 구문 | [링크](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) |
| Tools & resources | 도구 & 리소스 | [링크](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Tutorial | 자습서 | |
| Usage notes | 사용 일람 | |
| Web Technologies | 웹 기술들 | [링크](https://developer.mozilla.org/en-US/docs/Games/Introduction_to_HTML5_Game_Development) |

## Section Subtitle

각 페이지의 Section Subtitle에 대한 단어 정의입니다. 

**사전 순으로 용어집을 편집해주세요.**

| 용어 | 번역 | 참고 링크 |
| --- | --- | --- |
| Compatibility notes | 호환성 참고 사항 | [링크](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) |
| Parameters | 매개변수 | [링크](http://localhost:5042/en-US/docs/Web/API/AudioWorkletNode/AudioWorkletNode#parameters) |
| Value | 값 | [링크](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) |

## 안내 문구

각 페이지의 안내 문구에 대한 단어 정의입니다.

**사전 순으로 용어집을 편집해주세요.**

| 용어 | 번역 | 참고 링크 |
| --- | --- | --- |
| Note | 참고 | | 
| Objective | 목표 | [링크](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility) |
| Prerequisites | 필요한 사전 지식 | [링크](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility) | 

## 공통 용어

**사전 순으로 용어집을 편집해주세요.**

| 용어 | 번역 | 기타 |
| --- | --- | --- |
| Application | 애플리케이션 | |
| Assertion | 어설션 | |
| Attribute | 특성 | |
| Boolean | 불리언 | |
| Class | 클래스 | |
| Content(s) | 콘텐츠 | |
| Context | 맥락 | |
| Document | 문서 | |
| Element | 요소 | |
| Entity | 개체 | |
| Enumerated | 열거형 | |
| Expression | 표현식 또는 식 | |
| Framework | 프레임워크 | |
| Global | 전역 | |
| Glossary | 용어 사전 | |
| Grammar | 문법 | |
| Literal | 리터럴 | |
| Method | 메서드 | [국립국어원 Method](https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=11976) |
| Module | 모듈 | ESM에서 명시하는 모듈의 경우 '모듈'로 변역한다. | | 
| Module | 과정 | 어떠한 교육 과정, 단위에 의한 표현은 '과정'으로 번역한다. (예: In this module) | | 
| Object | 객체 | |
| Origin | 출처 | |
| Override | 재정의 | |
| Primitive | 원시 (값) | |
| Property | 속성 | |
| Psuedo- | 의사- | |
| Reference | 참고서 | |
| Regular expression | 정규 표현식 | |
| Rendering | 렌더링 | |
| Section | 구획 | |
| Statement | 명령문 또는 문 | |
| User agent | 사용자 에이전트 | |

### CSS

명세 이름은 번역하지 않습니다.

```diff
- CSS 글꼴 모듈 레벨 4
+ CSS Fonts Module Level 4
```

명세 이름이 본문에 나오더라도 번역하지 않습니다. (예: "`<number>` 구문은 CSS Fonts Level 4가 추가했습니다.")

**사전 순으로 용어집을 편집해주세요.**

| 용어 | 번역 | 기타 | 참고 링크 |
| --- | --- | --- | ------ |
| At-rule | @규칙 | | | 
| Block | 블록 | | |
| Border | 테두리 | | |
| Box | 박스 | | |
| Flexbox | 플렉스박스 | | |
| Flow | 플로 | 레이아웃 방식일 경우에 한정 | |
| Formal syntax | 형식 구문 | | |
| Grid | 그리드 | | |
| Inline | 인라인 | | |
| Layout | 레이아웃 | | |
| Longhand property | 본디 속성 | | |
| Margin | 바깥 여백 | | |
| Padding | 안쪽 여백(패딩) | | [CSS 기본 박스 모델 입문](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) |
| Shorthand property | 단축 속성 | | |

### API/JavaScript

**사전 순으로 용어집을 편집해주세요.**

| 용어 | 번역 | 기타 | 참고 링크 |
| --- | --- | --- | ------ |
| Argument | 전달인자, 인수 | | [참고 링크](https://github.com/mdn/translated-content/pull/3888) | 
| Blocking operation | 블로킹 연산 | | | 
| Callback | 콜백 | | | 
| Fulfilled | 이행(함) | | | 
| Handler | 처리기 | 이벤트 처리기 | | 
| Interface | 인터페이스 | | | 
| Iterate | 순회 | | | 
| Listener | 수신기 | 이벤트 수신기 | | 
| Mixin | 믹스인 | | | 
| Non-blocking operation | 논블로킹 연산 | | | 
| Parameter | 매개변수 | | | 
| Pending | 대기 | | | 
| Promise | 프로미스 | | [참고 링크](https://github.com/mdn/translated-content/pull/1081#issuecomment-878333558) | 
| Promise chaining | 프로미스 체이닝 | | | 
| Prototype | 프로토타입 | | |
| Reject | 거부 | | | 
| Resolve | 이행 | | |
| Rest parameters | 나머지 매개변수 | | [참고 링크](https://github.com/mdn/translated-content/pull/2549/files) | 
| Settled | 처리 | | | 
| Scope | 스코프 | | | 
| Temporal Dead Zone, TDZ | 시간상 사각지대 | | [참고 링크](https://github.com/mdn/translated-content/pull/2626/files) | 

### HTTP

| 용어 | 번역 | 기타 | 참고 링크 |
| --- | --- | --- | ------ |
| Idempotent | 멱등성 | | | 
| Payload | 페이로드 | | [참고 링크](https://github.com/mdn/translated-content/pull/2737) | 
| Request Body | 요청 본문 | | | 
| Response Body | 응답 본문 | | | 

## code formatter

번역 기여자의 편의성을 위해 code formatter를 사용할 수 있습니다. 강제 사항은 아니지만 통일성을 위해 기준을 아래와 같이 정했습니다.

code formatter의 한 종류인 Prettier의 기본 설정을 따르며, 추가적으로 `printWidth: 120`, `semi: false`, `singleQuote: true`옵션이 추가됩니다. [참고 PR](https://github.com/mdn/translated-content/pull/1065)

## 기타

### 1. All hidden paragraphs about Browser Compatibility can be deleted

issue: [#1008](https://github.com/mdn/translated-content/issues/1008)

다음은 `en-us locale`에 대한 기본 compatibility 항목입니다. 현재 `ko locale`에는 여러 번역 문구들이 있습니다. 이 문구들은 모두 삭제돼야합니다. 

1차적으로 https://gist.github.com/hochan222/ad801f7a6325e2b2e391ab634d6d18ce 로 30가지 경우에 대해 [PR 1176](https://github.com/mdn/translated-content/pull/1176) 에서 처리했으며, 나머지 경우에 대해 정규표현식을 작성해 삭제하거나 발견시 삭제 바랍니다.

#### 기본 항목

- 1
```html
<div class="hidden">The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a> and send us a pull request.</div>
```

- 2
```html
<div class="hidden">
<p>The compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a> and send us a pull request.</p>
</div>
```

- 3
```html
<p class="hidden">The compatibility table in this page is generated from structured data.
  If you'd like to contribute to the data, please check out <a
    href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>
  and send us a pull request.</p>
```

## 자주 묻는 질문

**1. `{{Compat}}` 하고 `{{Specifications}}` 이건 ko 에서는 보이지 않습니다.**

문서 frontmatter에 browser-compat 키 추가해주세요. (참고: 퀵에디터로 수정하면 frontmatter가 보이지 않습니다.)

<img src="https://user-images.githubusercontent.com/22424891/118590427-61b77300-b7dd-11eb-803e-daf51bb8edbe.png" height="300px" />

**2. 한국어로된 MDN 사이트는 못보나요?**

https://developer.mozilla.org/en-US/docs/Web/HTML 와같이 영문 페이지라면 중간에 en-US만 https://developer.mozilla.org/ko/docs/Web/HTML 와같이 ko로 바꿔주시면 번역본으로 보실 수 있습니다.

페이지가 존재하지 않는 경우 번역을 통해 기여를 하실 수 있습니다. 번역 기준 버전은 en-US입니다.

**3. MDN 강의를 보면서 공부를 하고 있는데 다음과 같은 문장을 보게 되었습니다. 번역이 이상합니다.**

특정기간 MDN 문서의 편집이 자유로워서 이상한 번역이 많습니다. 괜찮으시다면 PR을 보내주시거나 issue를 생성해서 해당 페이지가 조치 받게 해주실 수 있으신가요?

**4. 제가 초보라서 번역에 어떻게 기여하는지, 또 따라야 할 공식 지침 같은 것이 있는지 몰라서 손을 못 대고 있는 상황입니다.**

단순한 제보는 https://github.com/mdn/translated-content/issues 다음 페이지에서 New issue를 눌러서 이슈 작성을 해주시면 됩니다! 혹시 직접 수정해서 기여하고 싶으시면 https://github.com/mdn/translated-content/issues/827 이 절차대로 진행해주실 수 있으신가요? 기여해주셔서 감사합니다.

**5. Issue의 라벨은 어떻게 붙이나요?**

라벨은 레파지토리 관리자분들께서 확인 후 붙여주십니다.

**6. content(en) 레포에는 index.md 파일로 저장되어 있는데, translated-content(ko) 레포에는 index.html 으로 되어 있습니다. 이런 경우에는 translated-content 레포의 index.html 파일이 번역된 index.md 파일로 교체되어도 되는건가요? 꼭 .html 포멧을 지켜야 한다 같은 규칙이 있는지 궁금합니다.**

2021년 10월 17일 기준, html 형식에서 md 형식으로 옮겨가고 있는 과도기에있습니다. 자세한 내용은 [다음 링크](https://egas.tistory.com/m/52)를 참고해주세요.

md, html 확장자 중 어느 하나를 사용하더라도 괜찮습니다. 다만, md 확장자를 사용하실 경우 [MDN ko locale Markdown 번역에 대한 일반 지침](https://github.com/mdn/translated-content/blob/main/docs/ko/markdown-guide.md)을 지켜서 기여해주시면 됩니다!

## 맺음말

번역 작업에 대한 절대적 기준을 설정하는 것도 어렵고, 올바른 언어 사용을 위한 절대적 기준을 마련하는 것도 어렵습니다. 따라서, 위의 원칙과 문제에 직면했을 때 큰 부담을 느끼지 않으셨으면 좋겠습니다. 궁금한 점이 있으시면 현지 번역팀에 부담없이 문의 해주시기 바랍니다.

번역을 보내 주시면 검토자가 디버깅을 돕고 부주의 한 부분이 무엇인지 알아낼 것입니다. 문제가 해결되면 번역을 병합합니다.

번역에 직접 기여할 준비가 되지 않은 경우에는 문제가되지 않습니다. MDN에서 결함이있는 번역을 찾아 issue를 통해 알릴 수 있습니다. 또는, 너무 어렵지 않고 해결되지 않은 문제를 찾아서 해결해보세요. 이것은 번역 기여의 첫 단계를 수행하는 비교적 간단한 방법입니다. 여러분의 기여를 진심으로 기대합니다.
