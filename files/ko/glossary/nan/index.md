---
title: NaN
slug: Glossary/NaN
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

NaN (Not a Number, 숫자가 아님)은 정의되지 않은 값 또는 표현할 수 없는 값, 특히 부동 소수점 계산 결과를 의미하는 숫자 {{Glossary("Type", "데이터 타입")}}입니다.

예를 들어, NaN는 무한대, 0으로 나눈 결과, 누락된 값 또는 음수의 제곱근(허수지만, 부동 소수점 숫자는 실수입니다)을 나타낼 수 있습니다.

실제로는, {{glossary("JavaScript")}} 프로그램에서 두 개의 변수를 나누면, 결과는 NaN이 될 수 있고, JavaScript에서 "undefined"로 미리 정의되어 있습니다. 따라서 이 나누기로 인해 프로그램이 중단될 수 있습니다. 이제, 이 계산이 훨씬 더 큰 알고리즘의 작은 부분이라면, 실제로 오류가 발생한 위치를 파악하는 것은 정말 힘들 것입니다. 운이 좋게도, 결과는 NaN이고 나누는 수가 0이 될 수 있다는 것을 알고 있기 때문에, 먼저 이런 계산을 방지하거나 어디서 발생하는지 알려주는 테스트 조건을 설정할 수 있습니다.

## 같이 보기

- 위키백과의 [NaN](https://en.wikipedia.org/wiki/NaN)
- [JavaScript의 NaN](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN)
