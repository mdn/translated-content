## MDN 번역 콘텐츠에 대한 일반 지침

이 문서는 한국(ko) 지역에 대한 번역 지침입니다. 귀하의 로케일에 대한 몇 가지 특정 지침을 문서화하는 페이지를 추가하고 싶은데 아직 여기에 나타나지 않는 경우, 하나를 추가하거나 [Locale Teams](https://github.com/mdn/translated-content#policies-for-active-community-maintenance-teams)에 문의해주세요.

마찬가지로 추가하려는 일반 지침에 대한 좋은 아이디어가 있는 경우 환영합니다. Issue를 열고 문제에대해 이야기해주세요. 다음은 한국어 번역 지침 원칙의 주요 내용입니다.

## heading ID 번역

## code block 번역

## HTML 소스의 줄 바꿈

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
| Attribute | 특성 | |
| Boolean | 불리언 | |
| Class | 클래스 | |
| Content(s) | 콘텐츠 | |
| Context | 맥락 | |
| Document | 문서 | |
| Element | 요소 | |
| Entity | 개체 | |
| Enumerated | 열거형 | |
| Example | 예제 | Heading |
| Expression | 표현식 또는 식 | |
| Global | 전역 | |
| Glossary | 용어 사전 | |
| Grammar | 문법 | |
| Literal | 리터럴 | |
| Method | 메서드 | |
| Object | 객체 | |
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
| Flow | 플로우 | 레이아웃 방식일 경우에 한정 | |
| Flow | 플로 | | |
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
| Callback | 콜백 | | | 
| Fulfilled | 이행(함) | | | 
| Handler | 처리기 | 이벤트 처리기 | | 
| Interface | 인터페이스 | | | 
| Iterate | 순회 | | | 
| Listener | 수신기 | 이벤트 수신기 | | 
| Mixin | 믹스인 | | | 
| Parameter | 매개변수 | | | 
| Pending | 대기 | | | 
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

## 자주 묻는 Q&A

**1. `{{Compat}}` 하고 `{{Specifications}}` 이건 ko 에서는 보이지 않습니다.**

문서 frontmatter에 browser-compat 키 추가해주세요. (참고: 퀵에디터로 수정하면 frontmatter가 보이지 않습니다.)

<img src="https://user-images.githubusercontent.com/22424891/118590427-61b77300-b7dd-11eb-803e-daf51bb8edbe.png" height="300px" />

**2. 한국어로된 MDN 사이트는 못보나요?**

https://developer.mozilla.org/en-US/docs/Web/HTML 와같이 영문 페이지라면 중간에 en-US만 https://developer.mozilla.org/ko/docs/Web/HTML 와같이 ko로 바꿔주시면 번역본으로 보실 수 있습니다.

페이지가 존재하지 않는 경우 번역을 통해 기여를 하실 수 있습니다. 번역 기준 버전은 en-US입니다.

**3. MDN 강의를 보면서 공부를 하고 있는데 다음과 같은 문장을 보게 되었습니다. 번역이 이상합니다.**

특정기간 MDN 문서의 편집이 자유로워서 이상한 번역이 많습니다. 괜찮으시다면 PR을 보내주시거나 issue를 생성해서 해당 페이지가 조치 받게 해주실 수 있으신가요?

## 맺음말
