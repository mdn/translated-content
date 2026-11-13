---
title: UTF-8
slug: Glossary/UTF-8
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

UTF-8(UCS Transformation Format 8)은 월드 와이드 웹의 가장 일반적인 {{Glossary("Character encoding", "문자 인코딩")}}입니다. 각 문자는 1~4바이트로 표시됩니다. UTF-8은 {{Glossary("ASCII")}}와 역호환되며 표준 유니코드 문자를 나타낼 수 있습니다.

처음 128개의 UTF-8 문자는 처음 128개의 ASCII 문자(숫자 0-127)와 정확히 일치하며, 이는 기존 ASCII 텍스트가 이미 유효한 UTF-8임을 의미합니다. 다른 모든 문자는 2~4바이트를 사용합니다. 각각의 바이트는 인코딩 목적으로 남겨진 비트가 있습니다. 비 ASCII 문자가 저장을 위해 1 바이트 이상을 요구하기 때문에, 바이트가 분리되고 재결합되지 않은 상태로 실행하면 손상될 위험이 있습니다.

## 같이 보기

- 위키백과의 [UTF-8](https://ko.wikipedia.org/wiki/UTF-8)
- [유니코드 웹사이트의 UTF-8에 대한 FAQ](https://www.unicode.org/faq/utf_bom.html#UTF8)
