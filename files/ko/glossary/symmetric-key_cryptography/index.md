---
title: 대칭키 암호화 (Symmetric-key cryptography)
slug: Glossary/Symmetric-key_cryptography
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

대칭키 암호화(Symmetric-key cryptography)는 암호화와 복호화에 동일한 키를 사용하는 암호화 알고리즘에 사용되는 용어입니다. 키는 일반적으로 "대칭 키" 또는 "비밀 키"라고 합니다.

일반적으로 키가 쌍으로 생성되고 한 키에 의한 변환이 다른 키를 통해서만 되돌릴 수 있는 {{Glossary("public-key cryptography", "공개 키 암호화")}}와 비교됩니다.

대칭키 알고리즘은 올바르게 사용하면 안전하고 효율성이 높아 성능에 부정적인 영향을 주지 않으면서, 대량의 데이터를 암호화하는 데 사용할 수 있습니다.

현재 사용되는 대부분의 대칭키 알고리즘은 블록암호입니다. 즉, 한 번에 한 블록씩 데이터를 암호화합니다. 각 블록의 크기는 고정되어 있으며 알고리즘에 의해 결정됩니다. 예를 들어, {{Glossary("AES")}} 16 바이트 블록을 사용합니다. 블록 암호는 항상 블록 크기보다 긴 메시지를 안전하게 암호화하는 방법을 지정하는 '{{Glossary("Block cipher mode of operation", "모드")}}'와 함께 사용됩니다. 예를 들어, AES는 암호이고, CTR, CBC 및 GCM은 모두 모드입니다. 부적절한 모드를 사용하거나 모드를 잘못 사용하면, 기본 암호가 제공되는 보안이 완전히 훼손될 수 있습니다.

## 같이 보기

- [MDN 웹 문서 용어 사전](/ko/docs/Glossary)
  - {{Glossary("Block cipher mode of operation")}}
  - {{Glossary("Cryptography")}}
  - {{Glossary("Cryptographic hash function")}}
  - {{Glossary("Symmetric-key cryptography")}}
