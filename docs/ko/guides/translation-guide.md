# 번역 안내서

## 문서 연결 경로

한글 문서가 존재하지 않더라도 `/en-US` 문서로 넘겨주기 때문에 한국 문서의 모든 경로는 `/ko`로 표기합니다.

```
// bad
[`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

// good
[`Array`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
```

## 이미지 파일

`translate-content` 저장소에서 더 이상 `mdn/content`의 이미지 파일들을 복사하지 않아도 됩니다.

#### 참고 PR

- [deleted duplicated mdn/content images/assets #4545](https://github.com/mdn/translated-content/pull/5031)
- [Remove unused assets](https://github.com/mdn/translated-content/pull/14664)

## Inline code

원문의 인라인 코드는 번역하지 않습니다.

## Block code

코드 블록을 번역 할 때 주석, 문자열, 변수 이름 및 출력물을 번역하는 것이 좋습니다.

그러나 구문과 같은 실제 코드 용어를 번역하지 마십시오. 예제는 작업을 마친 후에도 계속 작동해야합니다.

또한, 예제 번역을 고려할 때, 일부 예제는 별도의 저장소에 있는 라이브 버전 또는 소스 코드에 연결된다는 점을 염두에 두십시오. 여러분은 또한 번역 된 페이지에서 링크 할 외부 코드 예제의 번역 된 버전을 만드는 것을 고려할 수도 있습니다.

## 안내 문구

각 페이지의 안내 문구에 대한 단어 정의입니다.

**사전 순으로 용어집을 편집해주세요.**

| 용어          | 번역             | 참고 링크                     |
| ------------- | ---------------- | ----------------------------- |
| Objective     | 목표             | [링크][What_is_accessibility] |
| Prerequisites | 필요한 사전 지식 | [링크][What_is_accessibility] |

### 교육 과정 callout

```markdown
> [!CALLOUT]
>
> #### 프론트엔드 웹 개발자가 되고자 하시나요?
>
> 프론트엔드 웹 개발자가 되고 싶지만 무엇을 먼저 배워야 할지 모르겠다면, MDN 커리큘럼을 참고해 학습 계획을 세우는 것을 추천합니다. 이 커리큘럼은 성공적인 프론트엔드 개발자가 되기 위한 필수 기술과 실습을 체계적으로 학습할 수 있는 경로를 제공하며, 추천 학습 자료도 함께 제공합니다.
>
> [**시작하기**](/ko/curriculum/)
```

## GFM Alerts

`> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!CAUTION]`, `> [!WARNING]`은 새로 추가된 github markdown으로 영어 문법만 사용할 수 있습니다.

```markdown
// bad

> [!참고]
> ...
```

- [[Markdown] An option to highlight a "Note" and "Warning" using blockquote (Beta)](https://github.com/orgs/community/discussions/16925)
- [Incorrect formatting for highlighted notes in GitHub flavoured Markdown](https://github.com/prettier/prettier/issues/16454)

## 역주/역자주

그동안의 MDN 문서에서는 역주로 인한 자의적인 해석이 많았고, 전체적인 문서의 품질을 낮췄습니다. 역주가 꼭 필요한 상황이 아니라면 역주는 남기지 않으며, 남기더라도 따로 역주를 표시하지 않고 본문에 포함합니다.
예시: [다음 링크 참고](https://github.com/mdn/translated-content/pull/1385#discussion_r667509255)

## 기울임꼴

한글은 기울임꼴에 적합하지 않습니다. 전용 이탤릭체가 없다는 것이 첫 이유이고, 문자의 조형이 (정)사각형인 것이 두 번째 이유입니다. [세부 내용 다음 링크 참고](https://github.com/mdn/translated-content/issues/1537)

- 기본 방침은 생략하며, 기여자에 재량에 따라 아래 두 가지 규칙을 따른다.
  - 한글일 경우 '' 를 tag 대신에 기입한다.
  - 한글이 아닐 경우 생략한다.

다만 진짜 강조를 해야하는 상황에는, 따옴표로 강조하고 PR로 소명합니다.

## `:` 쌍점, `;` 쌍반점

뒤의 문장 예시를 강조하기 위해 쌍점을 사용하는 경우에 `: 쌍점`은 한글 문법에 적합하지 않습니다. [(참고 이슈 링크)](https://github.com/mdn/translated-content/pull/2747#issuecomment-964241518)

`한글맞춤법-부록-문장 부호` 부분의 `: 쌍점`에 대한 규정만 존재하고, `; 쌍반점`에 대한 규정은 존재하지 않습니다. 따라서, 해당 경우가 아니면 `: 쌍점`을 `. 온점`으로 치환하는 것을 권장합니다. `; 쌍반점`의 경우는 `. 온점`으로 치환하는 것을 권장합니다.

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

- 원문 [(참고 링크)][]

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

## `—` 대시

`: 쌍점,  ; 쌍반점 안내서`과 같은 맥락에서 `. 온점`으로 치환하는 것을 권장합니다. [(참고 이슈 링크)](https://github.com/mdn/translated-content/pull/2747#issuecomment-965500282)

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

[(참고 링크)]: https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/parameterDescriptors

## 표현

MDN 문서는 구어체의 격식체를 **권장**하고 있습니다. 하지만, 상황에 따른 적절한 표현이 다르기 떄문에 강제하고 있지 않습니다.

아래는 구어체의 격식체와 비격식체의 차이입니다.

### 구어체 - 격식체

> 가장 먼저 해야할 일은 간격/레이아웃을 정렬하는 것입니다. 기본 표 스타일은 너무 비좁습니다! 이렇게 하려면, style.css 파일에 다음 CSS 를 추가하십시오.

### 구어체 - 비격식체

> 가장 먼저 해야할 일은 간격/레이아웃을 정렬하는 것이에요. 기본 표 스타일은 너무 비좁아요! 이렇게 하려면, style.css 파일에 다음 CSS 를 추가하세요.

## 따옴표

둥근 따옴표(smart quotes)를 사용하지 않고, **일반 따옴표(normal quotes)를 사용**해야 합니다. ([ko: Replace smart quotes](https://github.com/mdn/translated-content/pull/14218) 참고)

### 나쁜 예시

```
(1) 일반적으로 눈에 띄게 “Get a domain name” 이라는 글자가 있습니다.
(2) We’re adding an event listener to...
(3) ‘문단’이나 ‘이미지’와 같은 페이지의 부분을 정의하는 것처럼
```

### 올바른 예시

```
(1) 일반적으로 눈에 띄게 "Get a domain name" 이라는 글자가 있습니다
(2) We're adding an event listener to...
(3) '문단'이나 '이미지'와 같은 페이지의 부분을 정의하는 것처럼
```

## 괄호 표기 지양

괄호 사용을 지양합니다. 괄호가 남용되는 사례가 너무 많았고, 남용되지 않더라도 원문에 존재하지 않은 괄호는 가독성을 저하시키고 기여자의 의견을 작성하는 용도로 많이 사용되어서 지양합니다.

예외적으로 `한글(영어)` 표기는 좋은 방법은 아니지만, 필요한 경우에 리뷰어와 협의하여 사용할 수 있습니다.

## 원문과 동일한 문서

번역 후의 줄 수와 원문의 줄 수가 같도록 해주세요. 이는 원문과 달라진 부분을 빨리 찾을 수 있으므로 유지보수에 도움이 됩니다.

관련 논의는 [Exploring Guidelines for Line Length and Newline in Markdown Documentation. #655](https://github.com/orgs/mdn/discussions/655#discussioncomment-9251708)에서 확인할 수 있습니다.
