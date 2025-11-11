---
title: 유니코드
slug: Glossary/Unicode
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**유니코드**는 세계 각국의 서로 다른 언어와 쓰기 방식, 기호 등을 모아 번호를 할당하고 {{glossary("Character", "문자")}}를 정의하는 표준 {{Glossary("Character set","문자 집합")}}입니다.

각각의 문자에 번호를 매김으로써, 프로그래머는 {{Glossary("Character encoding", "문자 인코딩")}}을 제작할 수 있고, 컴퓨터는 그 인코딩을 사용해 같은 파일 또는 프로그램 내에서 어떠한 언어 조합을 사용하더라도 저장, 처리, 전송할 수 있습니다.

유니코드 이전에는, 하나의 데이터가 여러 언어를 한 번에 가지기 힘들었고, 오류에도 취약했습니다. 예를 들어, 하나의 문자 집합은 일본어, 다른 집합은 영문 알파벳을 저장할 수 있다고 했을 때, 데이터의 어디서부터 어디까지가 일본어이고 어디까지가 영문 알파벳인지 분명하게 표시해놓지 않으면 다른 프로그램이나 컴퓨터가 데이터를 잘못 표시하거나, 처리 과정에서 손상시킬 수 있었습니다. 어떤 글이 동근 따옴표(&ldquo;&rdquo;)와 같은 문자가 `Ã‚Â£`와 같이 말도 안되는 글자로 표시되는걸 본 적이 있다면, [Mojibake](https://en.wikipedia.org/wiki/Mojibake)라고 알려진 이 문제를 본 적이 있을 것입니다.

웹에서 제일 널리 쓰이는 유니코드 문자 인코딩은 {{Glossary("UTF-8")}}입니다. UTF-16이나 이제 사용하지 않는 UCS-2 등 다른 인코딩도 존재하지만, UTF-8을 추천합니다.

## 같이 보기

- 위키백과 [유니코드](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C)
- [유니코드 표준: 기술 소개](https://www.unicode.org/standard/principles.html)
