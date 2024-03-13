---
title: 상태 기계 (State machine)
slug: Glossary/State_machine
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

상태 기계는 알고리즘을 설계하는 데 사용되는 수학적 추상화 표현입니다. 상태 기계는 일련의 입력을 읽고 해당 입력에 따라 다른 상태로 변경됩니다.

상태는 전환을 실행하는 것을 기다리는 시스템 상태에 대한 설명입니다. 전환은 조건이 충족되거나 이벤트가 수신될 때 실행되는 일련의 작업입니다. 상태 다이어그램에서, 원은 가능한 각 상태를 나타내고 화살표는 상태 간에 전환을 나타냅니다.

최종 상태를 보면, 해당 상태로 이어지는 일련의 입력에 대해 식별할 수 있습니다.

기본 상태 기계에는 두 가지 유형이 있습니다.

- 결정론적 유한 상태 기계
  - : 이 종류는 허용된 입력에 대해 하나의 가능한 전환만 허용합니다. 이는 `if x then doThis else doThat`이 불가능 하다는 "if" {{Glossary("statement", "명령문")}}과 같습니다. 컴퓨터는 두 가지 옵션 중 '하나'를 수행해야 합니다.
- 비결정적 유한 상태 기계
  - : 어떤 상태가 주어지면, 입력은 둘 이상의 다른 상태로 이어질 수 있습니다.

'그림 1: 결정론적 유한 상태 머신'

![기계는 입력 X에 대해 상태 1에서 상태 2로 전환하고 입력 Y에 대해 상태 1에서 상태 3으로 전환합니다](statemachine1.png)

'그림 1'에서, 상태는 상태 1에서 시작됩니다. 상태는 입력 'X'가 주어지면 상태 2로 변경되거나 입력 'Y'가 주어지면 상태 3으로 변경됩니다.

'그림 2: 비결정적 유한 상태 머신'

![기계는 상태 1에 남아 자체적으로 전환되거나 입력 X에 대해 상태 1에서 상태 2로 전환될 수 있습니다](statemachine2.png)

'그림 2'에서, 'X'를 입력하면 상태가 지속되거나 상태 2로 변경될 수 있습니다.

모든 {{Glossary("regular expression", "정규 표현식")}}은 상태 기계로 표현될 수 있습니다.

## 같이 보기

- 위키백과의 [유한 상태 기계](https://en.wikipedia.org/wiki/Finite-state_machine)
- 위키백과의 [UML 상태 기계](https://en.wikipedia.org/wiki/UML_state_machine)
- 위키백과의 [무어 기계](https://en.wikipedia.org/wiki/Moore_machine)
- 위키백과의 [밀리 기계](https://en.wikipedia.org/wiki/Mealy_machine)
