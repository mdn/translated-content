---
title: 암호 (Cipher)
slug: Glossary/Cipher
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

{{glossary("cryptography", "암호학")}}에서, **암호**는 {{glossary("Plaintext", "평문")}}을 읽을 수 없게 {{glossary("encryption", "암호화")}}하고, 다시 {{glossary("decryption", "복호화")}}할 수 있는 알고리즘입니다.

암호는 정보화 시대 이전부터 널리 사용되었습니다 (예, [대체 암호](https://en.wikipedia.org/wiki/Substitution_cipher), [전치 암호](https://en.wikipedia.org/wiki/Transposition_cipher) 및 [순열 암호](https://en.wikipedia.org/wiki/Permutation_cipher)), [일회용 패드](https://en.wikipedia.org/wiki/One-time_pad)를 제외하고는 그 어느 것도 암호학적으로 안전하지 않았습니다.

최신 암호는 {{glossary("cryptanalysis", "암호해석")}}을 통해 발견한 {{glossary("attack", "공격")}}을 견딜 수 있도록 설계되었습니다. 모든 공격 방법이 발견되었다는 보장은 아니지만, 각 알고리즘은 알려진 공격 클래스를 기준으로 판단됩니다.

암호는 데이터의 연속 블록 또는 버퍼에 대한 [블록 암호](https://en.wikipedia.org/wiki/Block_cipher) 또는 연속적인 데이터 흐름(주로 소리와 영상)의 [스트림 암호](https://en.wikipedia.org/wiki/Stream_cipher)의 두 가지 방식으로 작동합니다.

또한, {{glossary("key", "키")}} 처리 방법에 따라 분류됩니다.

- [대칭 키](https://en.wikipedia.org/wiki/Symmetric_key_algorithm) 알고리즘은 동일한 키를 사용하여 메시지를 암호화 및 복호화합니다. 또한 메시지를 기밀로 유지하려면 키를 안전하게 전송해야 합니다.
- [비대칭 키](https://en.wikipedia.org/wiki/Asymmetric_key_algorithm) 알고리즘은 암호화와 복호화에 서로 다른 키를 사용합니다.

## 같이 보기

- [암호](https://en.wikipedia.org/wiki/Cipher) on Wikipedia
- [암호화와 복호화](/ko/docs/Archive/Security/Encryption_and_Decryption)
- [MDN 웹 문서 용어사전](/ko/docs/Glossary)
  - {{Glossary("Block cipher mode of operation", "블록 암호 운용 방식")}}
  - {{Glossary("Cipher", "암호")}}
  - {{Glossary("Ciphertext", "암호문")}}
  - {{Glossary("Cipher suite", "암호알고리즘 집합")}}
  - {{Glossary("Cryptanalysis", "암호분석")}}
  - {{Glossary("Cryptography", "암호학")}}
  - {{Glossary("Decryption", "복호화")}}
  - {{Glossary("Encryption", "암호화")}}
  - {{Glossary("Key", "키")}}
  - {{Glossary("Plaintext", "평문")}}
  - {{Glossary("Public-key cryptography", "공개키 암호화")}}
  - {{Glossary("Symmetric-key cryptography", "대칭키 암호화")}}
