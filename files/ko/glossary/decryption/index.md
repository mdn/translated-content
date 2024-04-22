---
title: 복호화 (Decryption)
slug: Glossary/Decryption
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

{{glossary("cryptography", "암호학")}}에서, **복호화**는 {{glossary("ciphertext", "암호문")}}을 {{glossary("Plaintext", "평문")}}으로 변환하는 것입니다.

복호화는 암호화의 기본 요소입니다. {{glossary("cipher", "암호")}}라는 암호화 알고리즘을 사용하여 암호문 메시지를 일반 텍스트로 변환합니다.
암호화와 마찬가지로, 최신 암호의 복호화는 특정 알고리즘과 {{glossary("key", "키")}}라는 비밀을 사용하여 수행됩니다. 알고리즘은 공개되는 경우가 많아, 암호화가 안전하게 유지된다면 키는 비밀로 유지되어야 합니다.

![복호화 기본 요소입니다](decryption.png)

복호화는 {{glossary("encryption")}}의 반대이며 키가 비밀로 유지되는 경우, 특정 비밀을 알지 못한 채 복호화하는 것은 수학적으로 수행하기 어렵습니다. 얼마나 어려운지는 선택한 암호화 알고리즘의 보안에 따라 달라지고 {{glossary("cryptanalysis", "암호화 분석")}}의 진행과 함께 발전합니다.

## 같이 보기

- [암호화와 복호화](/ko/docs/Encryption_and_Decryption)
