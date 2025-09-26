---
title: 암호화 (Encryption)
slug: Glossary/Encryption
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

{{glossary("cryptography","암호학")}}에서, **암호화(encryption)**는 {{glossary("plaintext", "평문")}}을 코드화된 텍스트 또는 {{glossary("ciphertext", "암호문")}}으로 변환하는 것입니다. 암호문은 권한이 없는 사용자가 읽을 수 없도록 만들어졌습니다.

암호화는 암호화 기본 요소입니다. {{glossary("cipher", "암호")}}라는 암호화 알고리즘을 사용하여 일반 텍스트 메시지를 암호문으로 변환합니다. 현대 암호의 암호화는 특정 알고리즘과 {{glossary("key", "키")}}라는 비밀을 사용하여 수행됩니다. 알고리즘은 공개되는 경우가 많기 때문에, 암호화가 안전하게 유지된다면 키는 비밀로 유지되어야 합니다.

![암호화 작동 방식](encryption.png)

비밀을 모르면, 반대 연산인 {{glossary("decryption","복호화")}}는 수학적으로 수행하기 어렵습니다. 얼마나 어려운지는 선택한 암호화 알고리즘의 보안에 따라 달라지며 {{glossary("cryptanalysis", "암호화 분석")}}의 진행과 함께 발전합니다.
