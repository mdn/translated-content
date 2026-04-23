---
title: 디바운스 (Debounce)
slug: Glossary/Debounce
l10n:
  sourceCommit: 986f2096b273c6cc6827380426ea106410f67d54
---

{{GlossarySidebar}}

프로그래밍에서 **디바운싱**은 너무 짧은 간격 내에 발생한 작업들을 버리고, 한 번의 호출로 통합하는 것을 뜻합니다.

디바운싱은 {{glossary("throttle", "스로틀링")}}과 매우 비슷합니다. 주요한 차이점은 스로틀링이 연속된 동작에 제한을 두는 것이라면, 디바운싱은 불필요한 호출들을 하나로 통합하기 위해 일정 시간 동안 호출이 멈출 때까지 기다린다는 점입니다.

디바운싱은 대표적으로 사용자의 입력에 응답할 때 사용합니다. 사용자가 입력 중일 때는 UI가 느려지지 않도록 다른 동작을 하지 않는 것이 좋습니다. 사용자가 입력을 잠시 멈추면, 그때 결과를 필터링하거나 추천 단어를 제시하는 등 입력을 처리하는 작업을 시작할 수 있습니다. `search`라는 함수가 10 밀리초로 디바운싱되면 다음과 같은 동작이 일어납니다.

1. 첫 `search` 호출은 리딩 에지(leading edge)라고 합니다.
2. 이후의 모든 `search` 호출이 만약 이전 호출로부터 10 밀리초 이내에 이루어졌다면, 해당 호출은 이전 호출과 같은 "배치(batch)"에 있다고 합니다.
3. `search`의 마지막 호출 이후로 10 밀리초가 지나서도 추가적인 호출이 없다면, 트레일링 에지(trailing edge)에 도달한 것입니다.

보통 `search`는 트레일링 에지에서 한 번만 실행되지만, 경우에 따라 리딩 에지나 양쪽 모두에서 실행되기도 합니다. 만약 양쪽 모두에서 실행된다면 디바운싱의 구현은 보통 이전 트레일링 에지 이후 최소 10 밀리초 이내에 다음 리딩 에지 호출이 발생하지 않도록 보장합니다.

## 같이 보기

- 용어 사전:
  - {{Glossary("Throttle", "스로틀")}}
  - {{Glossary("Rate limit", "속도 제한")}}
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/) on CSS-Tricks (April 6, 2016)
