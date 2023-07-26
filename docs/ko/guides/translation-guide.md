# 번역 안내서

## 문서 연결 경로

한글 문서가 존재하지 않더라도 `/en-US` 문서로 넘겨주기 때문에 한국 문서의 모든 경로는 `/ko`로 표기합니다.

```
// bad
[`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

// good
[`Array`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
```

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
| Note          | 참고             |                               |
| Warning       | 경고             |                               |
| Callout       | 알림             |                               |
| Objective     | 목표             | [링크][What_is_accessibility] |
| Prerequisites | 필요한 사전 지식 | [링크][What_is_accessibility] |

### 교육 과정 callout

```markdown
> **알림:**
>
> #### 프론트엔드 웹 개발자가 되고자 하시나요?
>
> 목표를 달성하기 위한 모든 필수 정보가 들어있는 교육 과정을 준비했습니다.
>
> [**시작하기**](/en-US/docs/Learn/Front-end_web_developer)
```

### 카드 번역

카드는 참고, 경고 그리고 알림의 세 가지 유형이 있으며, 영어 원문에서는 다음과 같이 표시됩니다.

```markdown
# 참고

> **Note:** This is a note.

# 경고

> **Warning:** This is a warning.

# 알림

> **Callout:** This is a callout.
```

이런 카드는 아래와 같이 번역해주시면 됩니다.

```markdown
# 참고

> **참고:** 참고입니다.

# 경고

> **경고:** 경고입니다.

# 알림

> **알림:** 알림입니다.
```

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
