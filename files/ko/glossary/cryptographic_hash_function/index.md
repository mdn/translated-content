---
title: 암호화 해시 함수 (Cryptographic hash function)
slug: Glossary/Cryptographic_hash_function
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

종종 '다이제스트 함수 (digest function)'라 불리는, 암호화 해시 함수는 임의의 크기를 가지는 메시지를 {{glossary("digest", "다이제스트")}}라고 하는 고정 크기의 메시지로 변환하는 {{glossary("cryptography", "암호학적")}} 기본 요소입니다. 암호화 해시 함수는 인증, 디지털 서명 및 메시지 인증 코드에 사용됩니다.

암호화에 사용하려면, 해시 함수에 다음과 같은 특성이 있어야 합니다.

- 게산이 빠릅니다 (자주 생성되기 때문입니다).
- 되돌릴 수 없습니다 (각 다이제스트는 매우 많은 수의 메시지에서 나올 수 있으며, 무차별 대입 공격만이 특정 다이제스트에 연결되는 메시지를 생성할 수 있습니다)
- 변조가 방지되어야 합니다 (메시지를 변경하면 다이제스트가 달라집니다)
- 충돌이 방지되어야 합니다 (동일한 다이제스트를 생성하는 두 개의 다른 메시지를 찾는 것은 불가능해야 합니다)

MD5 및 SHA-1와 같은 암호화 해시 함수는 충돌 저항성을 크게 감소시키는 공격이 발견되어 손상된 것으로 생각됩니다.

## 같이 보기

- 위키백과의 [암호화 해시 함수](https://en.wikipedia.org/wiki/Cryptographic_hash_function)
- [MDN 웹 문서 용어사전](/ko/docs/Glossary)

  - {{Glossary("Symmetric-key cryptography", "대칭키 암호화")}}
