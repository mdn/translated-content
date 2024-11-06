---
title: 난수 생성기 (Random Number Generator)
slug: Glossary/RNG
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**의사 난수 생성기 (pseudorandom number generator, PRNG)** 는 복잡하고 예측 불가능해 보이는 패턴으로 숫자를 출력하는 알고리즘입니다. 진정한 난수(예를 들어, 방사선 소스)는 전혀 예측할 수 없지만, 모든 알고리즘은 예측 가능하며 PRNG는 동일한 시작 매개변수 또는 'seed'를 전달하면 동일한 숫자를 반환합니다.

PRNG는 게임과 같은 다양한 애플리케이션에 사용될 수 있습니다.

암호학적으로 안전한 PRNG는 암호화에 사용하기에 적합한 특정 추가 속성을 갖춘 PRNG입니다. 여기에는 아래가 포함됩니다.

- 공격자가 (시드에 대한 지식 없이) 출력을 예측하는 것은 계산을 고려했을 때 불가능합니다.
- 공격자가 현재 상태를 알아낼 수 있다면, 공격자가 이전에 내보낸 숫자를 알아낼 수 있어서는 안 됩니다.

대부분의 PRNG는 암호학적으로 안전하지 않습니다.

## 같이 보기

- 위키백과의 [의사 난수 생성기](https://en.wikipedia.org/wiki/Pseudorandom_number_generator)
- 암호화된 보안 PRNG가 아닌 내장된 JavaScript PRNG 함수인 {{jsxref("Math.random()")}}.
- 암호화된 보안 숫자를 제공하기 위한 함수인 {{domxref("Crypto.getRandomValues()")}}
