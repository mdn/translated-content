---
title: Digest
slug: Glossary/Hash_function
original_slug: Glossary/Digest
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**다이제스트**는 전체 메시지에서 {{glossary("cryptographic hash function", "암호화 해쉬 함수")}}에 의해 생성된 작은 값입니다. 이상적으로, 다이제스트는 계산이 빠르고, 되돌릴 수 없으며, 예측할 수 없으므로 누군가 특정 메시지를 변조했는지 여부를 나타냅니다.

다이제스트를 사용하여 여러 작업을 수행할 수 있습니다.

- 비암호화 애플리케이션(예, 해시 테이블의 인덱스 또는 중복 데이터를 감지하거나 파일을 고유하게 식별하는 데 사용되는 지문)
- 메시지 무결성 확인(조작된 메시지는 다른 해시를 갖습니다)
- 비밀번호를 검색할 수는 없지만, 확인할 수 있도록 저장합니다(이 작업을 안전하게 수행하려면 비밀번호도 솔트해야 합니다).
- 의사 난수 생성
- {{glossary("key","키")}} 생성합니다

충돌과 예측 가능성을 방지하려면 사용 사례에 적합한 해시 함수를 선택하는 것이 중요합니다.

## 같이 보기

- {{glossary("Cryptographic hash function", "암호화 해쉬 함수")}}를 참고하세요.
- 위키백과의 [해쉬 함수](https://en.wikipedia.org/wiki/Cryptographic_hash_function)
