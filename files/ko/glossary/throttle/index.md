---
title: 스로틀 (Throttle)
slug: Glossary/Throttle
l10n:
  sourceCommit: 7b393063694605c366ff4721a5db1cb1b43a5185
---

{{GlossarySidebar}}

**스로틀링(throttling)** 은 원래 장애물을 이용해 유체의 흐름 속도를 늦추는 것을 의미합니다. 프로그래밍에서는 어떤 작업이 일정한 비율로만 수행되도록 과정을 느리게 하는 것을 뜻합니다.

스로틀링은 {{glossary("debounce", "디바운싱")}}과 매우 비슷합니다. 주요한 차이점은 호출이 연속해서 발생할 때, 스로틀링은 일정한 최대 속도로 작업이 수행되는 것을 보장해 주지만, 디바운싱은 일정 시간 동안 호출이 멈출 때까지 무한히 대기한다는 점입니다.

스로틀링의 대표적인 사용 사례는 지속적으로 업데이트되는 다른 상태와 동기화할 때입니다. [`scroll`](/ko/docs/Web/API/Document/scroll_event) 이벤트를 감지하는 `onScrolled` 함수가 있다고 가정해 봅시다. `scroll` 이벤트는 매 픽셀이 스크롤 될 때마다 발생하므로 해당 함수는 아주 짧은 간격으로 계속 호출됩니다. 만약 `onScrolled`가 계산 비용이 큰 함수라면 초기 호출들이 이후의 호출을 제때 실행하지 못하게 막거나, 다른 작업들의 실행을 방해할 수 있어 눈에 띄는 {{glossary("jank", "버벅거림")}}이 발생할 수 있습니다. 이런 경우, `onScrolled`를 스로틀해서 매 10 밀리초마다 최대 한 번만 호출되도록 할 수 있습니다.

1. 첫 `onScrolled` 호출은 리딩 에지(leading edge)라고 부릅니다.
2. 다음으로 `onScrolled` 호출이 만약 첫 호출로부터 10 밀리초 이내에 이루어졌다면, 해당 호출은 첫 호출과 같은 "배치(batch)"에 있다고 합니다.
3. `onScrolled`의 첫 호출 이후로 10 밀리초가 지났다면, 트레일링 에지(trailing edge)에 도달한 것입니다.

일반적으로 `onScrolled`는 리딩 에지에서만 실행되지만, 경우에 따라 트레일링 에지에서도 실행되거나 양쪽 모두에서 실행되기도 합니다. 만약 양쪽 모두에서 실행된다면 스로틀링의 구현은 보통 이전 트레일링 에지 이후 최소 10 밀리초가 지나야 다음 리딩 에지 호출이 발생하도록 보장합니다.

스로틀링을 사용하면 `onScrolled`의 효과는 계속해서 업데이트되고 적용됩니다. 예를 들어, 만약 document의 스크롤 위치에 따라 다른 DOM 요소를 이동시키는 경우, 해당 DOM 요소는 페이지를 스크롤 하는 중에도 계속 움직입니다. 하지만 `onScrolled`는 필요 이상으로 실행되지 않습니다.

{{glossary("Network throttling", "네트워크 스로틀링")}}은 네트워크 연결 속도를 느리게 시뮬레이션 하여 일정한 양의 데이터만 전송하도록 제한하는 것을 뜻합니다. 타이머를 스로틀링한다는 것은 예를 들어 {{jsxref("Date.now()")}}처럼 연속적으로 값을 읽더라도, 타이머의 정밀도를 낮추어 타이머 값이 일정한 최대 속도로만 변하도록 만드는 것을 뜻합니다. 두 가지 모두 스로틀링이라는 일반적인 개념을 구체적으로 적용한 사례입니다.

## 같이 보기

- 용어 사전:
  - {{Glossary("Debounce", "디바운스")}}
  - {{Glossary("Rate limit", "속도 제한")}}
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) on CSS-Tricks (April 6, 2016)
