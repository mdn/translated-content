# 번역 지침

## 메타데이터

문서의 상단에 있는 메타데이터는 `title`, `slug`, `original_slug` 그리고 `l10n.*`만 번역해줍니다. (참고: [#7412](https://github.com/mdn/translated-content/issues/7412))

영어 원문

```markdown
---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Proxy
- browser-compat: javascript.builtins.Proxy
---
{{JSRef}}

The `Proxy` object enables you to create a proxy for another ...
  :
```

번역본

```markdown
---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
---
{{JSRef}}

**`Proxy`** 객체는 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 ...
  :
```

## heading ID 번역

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

## code block 번역

코드 블록을 번역 할 때 주석, 문자열, 변수 이름 및 출력물을 번역하는 것이 좋습니다.

그러나 구문과 같은 실제 코드 용어를 번역하지 마십시오. 예제는 작업을 마친 후에도 계속 작동해야합니다.

또한, 예제 번역을 고려할 때, 일부 예제는 별도의 저장소에 있는 라이브 버전 또는 소스 코드에 연결된다는 점을 염두에 두십시오. 여러분은 또한 번역 된 페이지에서 링크 할 외부 코드 예제의 번역 된 버전을 만드는 것을 고려할 수도 있습니다.

## HTML 소스의 줄 바꿈

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

## 역주/역자주

그동안의 MDN 문서에서는 역주로 인한 자의적인 해석이 많았고, 전체적인 문서의 품질을 낮췄습니다. 역주가 꼭 필요한 상황이 아니라면 역주는 남기지 않으며, 남기더라도 따로 역주를 표시하지 않고 본문에 포함합니다.
예시: [다음 링크 참고](https://github.com/mdn/translated-content/pull/1385#discussion_r667509255)

## 기울임꼴

한글은 기울임꼴에 적합하지 않습니다. 전용 이탤릭체가 없다는 것이 첫 이유이고, 문자의 조형이 (정)사각형인 것이 두 번째 이유입니다. [세부 내용 다음 링크 참고](https://github.com/mdn/translated-content/issues/1537)

- 기본 방침은 생략하며, 기여자에 재량에 따라 아래 두 가지 규칙을 따른다.
  - 한글일 경우 '' 를 tag 대신에 기입한다.
  - 한글이 아닐 경우 생략한다.

다만 진짜 강조를 해야하는 상황에는, 따옴표로 강조하고 PR로 소명합니다.

## `:` 쌍점, `;` 쌍반점 지침

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

## `—` 대시 지침

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

[(참고 링크)]: https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor/parameterDescriptors
