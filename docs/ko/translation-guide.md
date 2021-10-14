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

마찬가지로 추가하려는 일반 지침에 대한 좋은 아이디어가 있는 경우 환영합니다. Issue를 열고 문제에대해 이야기해주세요. 다음은 한국어 번역 지침 원칙의 주요 내용입니다.

## 첫 기여자들을 위한 지침 안내

첫 기여자분들을 위해 다음 [issue 827](https://github.com/mdn/translated-content/issues/827)에 기여 방법을 작성했습니다. 참고해주세요.

추가적으로 궁금하신점 있으시면 [Kakao Talk (#MDN Korea)](https://open.kakao.com/o/gdfG288c)에 이야기해주세요.

## yari 빠른 사용법

yari 가 content repo에 내장돼있습니다. 세부 절차는 [다음 링크](https://github.com/mdn/translated-content#making-contributions)를 참고해주세요.

1. [content](https://github.com/mdn/content) 하고 [translated-content](https://github.com/mdn/translated-content) 다운 받습니다. (fork  한뒤)
2. content 폴더에 들어가서 `yarn install`
3. content 폴더 root에 .env 파일을 추가합니다. (translated-content/files 경로 추가, vscode editor의 경우 `EDITOR=code` 추가)

```
CONTENT_TRANSLATED_ROOT=/path/to/translated-content/files
EDITOR=code
```
4. `yarn start`

다음과 같이 진행하면 아래와 같이 실시간으로 반영사항 확인할 수 있고 4가지 편집 버튼으로 편집할 수 있습니다.
![image](https://user-images.githubusercontent.com/22424891/117309001-002e0500-aebd-11eb-9842-8f78a99e8873.png)

## 번역 가이드

### heading ID 번역

기사 제목에는 거의 항상 ID가 주어지는데, 기사 내에서 네비게이션을 자동으로 생성하고 실시간 샘플을 생성하기위한 코드 블록을 식별하는 등의 이유가 있습니다. 제목을 번역 할 때 ID도 같이 번역 할 필요가 없습니다. 나머지 슬러그는 번역되지 않으므로 모든 것이 일관되게 유지됩니다.

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

그동안의 MDN 문서에서는 역주로인한 자의적인 해석이 많았고, 전체적인 문서의 품질을 낮췄습니다. 역주가 꼭 필요한 상황이 아니라면 역주는 남기지 않으며, 남기더라도 따로 역주를 표시하지 않고 본문에 포함합니다.
예시: [다음 링크 참고](https://github.com/mdn/translated-content/pull/1385#discussion_r667509255)

### 기울임꼴

한글은 기울임꼴에 적합하지 않습니다. 전용 이탤릭체가 없다는 것이 첫 이유이고, 문자의 조형이 (정)사각형인 것이 두 번째 이유입니다. [세부 내용 다음 링크 참고](https://github.com/mdn/translated-content/issues/1537)

- 기본 방침은 생략하며, 기여자에 재량에 따라 아래 두 가지 규칙을 따른다.
  - 한글일 경우 '' 를 tag 대신에 기입한다.
  - 한글이 아닐 경우 생략한다.

다만 진짜 강조를 해야하는 상황에는, 따옴표로 강조하고 PR로 소명합니다.

## 용어 지침

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

**사전 순으로 용어집을 편집해주세요.**

| 용어 | 번역 | 기타 |
| --- | --- | --- |
| Accessibility concerns | 접근성 고려사항 | Heading |
| Application | 애플리케이션 | |
| Attribute | 특성 | |
| Boolean | 불리언 | |
| Class | 클래스 | |
| Contact us | 문의하기 | |
| Content(s) | 콘텐츠 | |
| Context | 맥락 | |
| Document | 문서 | |
| Element | 요소 | |
| Entity | 개체 | |
| Enumerated | 열거형 | |
| Example | 예제 | Heading |
| Expression | 표현식 또는 식 | |
| Framework | 프레임워크 | |
| Global | 전역 | |
| Glossary | 용어 사전 | |
| Grammar | 문법 | |
| Guides (헤딩) | 가이드 | | | 
| Literal | 리터럴 | |
| Method | 메서드 | |
| Module | 모듈 | ESM에서 명시하는 모듈의 경우 '모듈'로 변역한다. | | 
| Module | 과정 | 어떠한 교육 과정, 단위에 의한 표현은 '과정'으로 번역한다. (예: In this module) | | 
| Note (안내문구) | 참고	 | | | 
| Object | 객체 | |
| Objective (안내문구) | 목표 | | |
| Origin | 출처 | |
| Override | 재정의 | |
| Primitive | 원시 (값) | |
| Property | 속성 | |
| Psuedo- | 의사- | |
| Reference | 참고서 | |
| Regular expression | 정규 표현식 | |
| Rendering | 렌더링 | |
| See also | 같이 보기 | Heading |
| Section | 구획 | |
| Specification | 명세 | |
| Statement | 명령문 또는 문 | |
| Syntax | 구문 | |
| Tutorial | 자습서 | |
| Usage notes | 사용 일람 | Heading |
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
| Argument | 매개변수 | | | 
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
| Prerequisites | 필요한 사전 지식 | | | 
| Promise | 프로미스 | | [해당 링크 참고](https://github.com/mdn/translated-content/pull/1081#issuecomment-878333558) | 
| Promise chaining | 프로미스 체이닝 | | | 
| Prototype | 프로토타입 | | |
| Reject | 거부 | | | 
| Resolve | 이행 | | | 
| Settled | 처리 | | | 
| Scope | 스코프 | | | 

### HTTP

| 용어 | 번역 | 기타 | 참고 링크 |
| --- | --- | --- | ------ |
| Idempotent | 멱등성 | | | 
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

## 맺음말

번역 작업에 대한 절대적 기준을 설정하는 것도 어렵고, 올바른 언어 사용을 위한 절대적 기준을 마련하는 것도 어렵습니다. 따라서, 위의 원칙과 문제에 직면했을 때 큰 부담을 느끼지 않으셨으면 좋겠습니다. 궁금한 점이 있으시면 현지 번역팀에 부담없이 문의 해주시기 바랍니다.

번역을 보내 주시면 검토자가 디버깅을 돕고 부주의 한 부분이 무엇인지 알아낼 것입니다. 문제가 해결되면 번역을 병합합니다.

번역에 직접 기여할 준비가 되지 않은 경우에는 문제가되지 않습니다. MDN에서 결함이있는 번역을 찾아 issue를 통해 알릴 수 있습니다. 또는, 너무 어렵지 않고 해결되지 않은 문제를 찾아서 해결해보세요. 이것은 번역 기여의 첫 단계를 수행하는 비교적 간단한 방법입니다. 여러분의 기여를 진심으로 기대합니다.
