# 용어 안내서

새로운 용어를 추가할 때, 기존 문서의 레거시와 [국립 국어원 한국어 어문 규범](https://kornorms.korean.go.kr/main/main.do)을 고려해 추가할 것을 권장합니다.
[국립 국어원 온라인가나다](https://www.korean.go.kr/front/onlineQna/onlineQnaList.do?mn_id=216)에서 어문 규범, 어법, 표준국어대사전 내용 등에 대하여 문의할 수 있습니다.

## 공통

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

## 용어 안내서 `참고 링크` 우선 순위

- 1. 해당 단어에 대한 의견을 나눈 PR 링크
- 2. 적절한 ko MDN 문서 링크
- 3. 적절한 en-us MDN 문서 링크

## Section Title

각 페이지의 Section Title에 대한 단어 정의입니다.

**사전 순으로 용어집을 편집해주세요.**

| 용어                   | 번역            | 참고 링크                                                                                                                               |
| ---------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Access                 | 접근            |                                                                                                                                         |
| Accessibility concerns | 접근성 고려사항 |                                                                                                                                         |
| Advantages             | 장점            | [링크][Introduction_to_HTML5_Game_Development]                                                                                          |
| Aliasing               | 별칭            | [링크](https://github.com/mdn/translated-content/pull/1779/files)                                                                       |
| Brief history          | 간략한 역사     | [링크][HTML#%EA%B0%84%EB%9E%B5%ED%95%9C_%EC%97%AD%EC%82%AC]                                                                             |
| Browser compatibility  | 브라우저 호환성 | [링크](https://github.com/mdn/translated-content/pull/1779/files)                                                                       |
| Browser support        | 브라우저 지원   | [링크][Using_IIR_filters]                                                                                                               |
| Concept                | 개념            |                                                                                                                                         |
| Conclusion             | 결론            |                                                                                                                                         |
| Contact us             | 문의하기        |                                                                                                                                         |
| Demo                   | 데모            | [링크][GLSL_Shaders]                                                                                                                    |
| Description            | 설명            | [링크][Array]                                                                                                                           |
| Example                | 예제            | [링크][target]                                                                                                                          |
| Examples               | 예제            | [링크](https://github.com/mdn/translated-content/blob/main/files/ko/web/javascript/reference/global_objects/proxy/proxy/apply/index.md) |
| Guides                 | 안내서          |                                                                                                                                         |
| In this module         | 이번 과정에서는 | [링크][React_getting_started]                                                                                                           |
| Instance properties    | 인스턴스 속성   |                                                                                                                                         |
| Instance methods       | 인스턴스 메서드 |                                                                                                                                         |
| Learn More             | 더 알아보기     | [링크][Mutable]                                                                                                                         |
| Next steps             | 다음 단계       | [링크][2D_breakout_game_Phaser]                                                                                                         |
| Polyfill               | 폴리필          | [링크](https://github.com/mdn/translated-content/pull/1779/files)                                                                       |
| Reference              | 참고서          |                                                                                                                                         |
| See also               | 같이 보기       | [링크][target]                                                                                                                          |
| Specifications         | 명세서          | [링크](https://github.com/mdn/translated-content/pull/1779/files)                                                                       |
| Static properties      | 정적 속성       |                                                                                                                                         |
| Static methods         | 정적 메서드     |                                                                                                                                         |
| Sticky activation      | 고정 활성화     |                                                                                                                                         |
| Summary                | 요약            |                                                                                                                                         |
| Syntax                 | 구문            | [링크][target]                                                                                                                          |
| Tools & resources      | 도구 & 리소스   | [링크][JavaScript]                                                                                                                      |
| Transient activation   | 임시 활성화     |                                                                                                                                         |
| Tutorial               | 자습서          |                                                                                                                                         |
| Usage notes            | 사용 일람       |                                                                                                                                         |
| Web Technologies       | 웹 기술들       | [링크][Introduction_to_HTML5_Game_Development]                                                                                          |

## Section Subtitle

각 페이지의 Section Subtitle에 대한 단어 정의입니다.

**사전 순으로 용어집을 편집해주세요.**

| 용어                | 번역             | 참고 링크                                                                              |
| ------------------- | ---------------- | -------------------------------------------------------------------------------------- |
| Compatibility notes | 호환성 참고 사항 | [링크][target]                                                                         |
| Directives          | 지시어           | [링크](https://github.com/mdn/translated-content/issues/11093#issuecomment-1411005106) |
| Guide               | 안내서           | [링크](https://github.com/mdn/translated-content/issues/11093#issuecomment-1411005106) |
| Instruction         | 지침             | [링크](https://github.com/mdn/translated-content/issues/11093#issuecomment-1411005106) |
| Naming              | 이름 지정        |                                                                                        |
| Parameters          | 매개변수         | [링크][AudioWorkletNode]                                                               |
| Requirements        | 요구 사항        |                                                                                        |
| Value               | 값               | [링크][target]                                                                         |

## 공통 용어

**사전 순으로 용어집을 편집해주세요.**

| 용어               | 번역            | 기타                                                                                                   |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------------------ |
| Application        | 애플리케이션    |                                                                                                        |
| Assertion          | 어설션          |                                                                                                        |
| Attribute          | 특성            |                                                                                                        |
| Boolean            | 불리언          |                                                                                                        |
| Class              | 클래스          |                                                                                                        |
| Content(s)         | 콘텐츠          |                                                                                                        |
| Context            | 맥락            |                                                                                                        |
| Decoding           | 디코딩          | [링크](https://github.com/mdn/translated-content/issues/12452)                                         |
| Document           | 문서            |                                                                                                        |
| Element            | 요소            |                                                                                                        |
| Encoding           | 인코딩          | [링크](https://github.com/mdn/translated-content/issues/12452)                                         |
| Entity             | 개체            |                                                                                                        |
| Enumerated         | 열거형          |                                                                                                        |
| Expression         | 표현식 또는 식  |                                                                                                        |
| Framework          | 프레임워크      |                                                                                                        |
| Global             | 전역            |                                                                                                        |
| Glossary           | 용어 사전       |                                                                                                        |
| Grammar            | 문법            |                                                                                                        |
| In modern browsers | 최신 브라우저   |                                                                                                        |
| Literal            | 리터럴          |                                                                                                        |
| Mantissa           | 가수부          |                                                                                                        |
| Method             | 메서드          | [국립국어원 Method](https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=11976) |
| Module             | 모듈            | ESM에서 명시하는 모듈의 경우 '모듈'로 변역한다.                                                        |
| Module             | 과정            | 어떠한 교육 과정, 단위에 의한 표현은 '과정'으로 번역한다. (예: In this module)                         |
| Object             | 객체            |                                                                                                        |
| Origin             | 출처            |                                                                                                        |
| Override           | 재정의          |                                                                                                        |
| Primitive          | 원시 (값)       |                                                                                                        |
| Property           | 속성            |                                                                                                        |
| Psuedo-            | 의사-           |                                                                                                        |
| Reference          | 참고서          |                                                                                                        |
| Regular expression | 정규 표현식     |                                                                                                        |
| Rendering          | 렌더링          |                                                                                                        |
| Section            | 구획            |                                                                                                        |
| Statement          | 명령문 또는 문  |                                                                                                        |
| short-circuit      |
| User agent         | 사용자 에이전트 |                                                                                                        |

## CSS

명세 이름은 번역하지 않습니다.

```diff
- CSS 글꼴 모듈 레벨 4
+ CSS Fonts Module Level 4
```

명세 이름이 본문에 나오더라도 번역하지 않습니다. (예: "`<number>` 구문은 CSS Fonts Level 4가 추가했습니다.")

**사전 순으로 용어집을 편집해주세요.**

| 용어               | 번역            | 기타                        | 참고 링크                   |
| ------------------ | --------------- | --------------------------- | --------------------------- |
| At-rule            | @규칙           |                             |                             |
| Block              | 블록            |                             |                             |
| Border             | 테두리          |                             |                             |
| Box                | 박스            |                             |                             |
| Flexbox            | 플렉스박스      |                             |                             |
| Flow               | 플로            | 레이아웃 방식일 경우에 한정 |                             |
| Formal syntax      | 형식 구문       |                             |                             |
| Grid               | 그리드          |                             |                             |
| Inline             | 인라인          |                             |                             |
| Layout             | 레이아웃        |                             |                             |
| Longhand property  | 본디 속성       |                             |                             |
| Margin             | 바깥 여백       |                             |                             |
| Padding            | 안쪽 여백(패딩) |                             | [CSS 기본 박스 모델 입문][] |
| Shorthand property | 단축 속성       |                             |                             |

## API/JavaScript

**사전 순으로 용어집을 편집해주세요.**

| 용어                    | 번역            | 기타          | 참고 링크                                                                                |
| ----------------------- | --------------- | ------------- | ---------------------------------------------------------------------------------------- |
| Argument                | 전달인자, 인수  |               | [참고 링크](https://github.com/mdn/translated-content/pull/3888)                         |
| Blocking operation      | 블로킹 연산     |               |                                                                                          |
| Callback                | 콜백            |               |                                                                                          |
| Dictionary              | 사전            |               | [참고 링크](https://github.com/mdn/translated-content/pull/10976#discussion_r1073704799) |
| Fulfilled               | 이행(함)        |               |                                                                                          |
| Handler                 | 처리기          | 이벤트 처리기 |                                                                                          |
| Interface               | 인터페이스      |               |                                                                                          |
| Iterate                 | 순회            |               |                                                                                          |
| Listener                | 수신기          | 이벤트 수신기 |                                                                                          |
| Mixin                   | 믹스인          |               |                                                                                          |
| Non-blocking operation  | 논블로킹 연산   |               |                                                                                          |
| Parameter               | 매개변수        |               |                                                                                          |
| Pending                 | 대기            |               |                                                                                          |
| Promise                 | 프로미스        |               | [참고 링크](https://github.com/mdn/translated-content/pull/1081#issuecomment-878333558)  |
| Promise chaining        | 프로미스 체이닝 |               |                                                                                          |
| Prototype               | 프로토타입      |               |                                                                                          |
| Reject                  | 거부            |               |                                                                                          |
| Resolve                 | 이행            |               |                                                                                          |
| Rest parameters         | 나머지 매개변수 |               | [참고 링크](https://github.com/mdn/translated-content/pull/2549/files)                   |
| Scope                   | 범위            |               |                                                                                          |
| Settled                 | 처리            |               |                                                                                          |
| Sparse array            | 희소 배열       |               |                                                                                          |
| Temporal Dead Zone, TDZ | 시간상 사각지대 |               | [참고 링크](https://github.com/mdn/translated-content/pull/2626/files)                   |
| TypedArray              | 형식화 배열     |               |                                                                                          |

## HTTP

| 용어          | 번역      | 기타 | 참고 링크                                                        |
| ------------- | --------- | ---- | ---------------------------------------------------------------- |
| Idempotent    | 멱등성    |      |                                                                  |
| Payload       | 페이로드  |      | [참고 링크](https://github.com/mdn/translated-content/pull/2737) |
| Request Body  | 요청 본문 |      |                                                                  |
| Response Body | 응답 본문 |      |                                                                  |

[AudioWorkletNode]: https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode/AudioWorkletNode#parameters
[Using_IIR_filters]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_IIR_filters#browser_support
[CSS 기본 박스 모델 입문]: https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
[Introduction_to_HTML5_Game_Development]: https://developer.mozilla.org/en-US/docs/Games/Introduction_to_HTML5_Game_Development
[HTML#%EA%B0%84%EB%9E%B5%ED%95%9C_%EC%97%AD%EC%82%AC]: https://developer.mozilla.org/ko/docs/Glossary/HTML#%EA%B0%84%EB%9E%B5%ED%95%9C_%EC%97%AD%EC%82%AC
[target]: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
[GLSL_Shaders]: https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders#demo
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#description
[JavaScript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[React_getting_started]: https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started#in_this_module
[Mutable]: https://developer.mozilla.org/en-US/docs/Glossary/Mutable
[2D_breakout_game_Phaser]: https://developer.mozilla.org/ko/docs/Games/Tutorials/2D_breakout_game_Phaser#%EB%8B%A4%EC%9D%8C_%EB%8B%A8%EA%B3%84
