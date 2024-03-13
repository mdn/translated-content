---
title: 출처
slug: Glossary/Origin
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

웹 콘텐츠의 **출처**(origin)는 접근할 때 사용하는 {{glossary("URL")}}의 스킴({{glossary("protocol", "프로토콜")}}), 호스트(도메인), 포트로 정의됩니다. 두 객체의 스킴, 호스트, 포트가 모두 일치하는 경우 같은 출처를 가졌다고 말합니다.

일부 작업은 동일 출처 콘텐츠로 제한되나, {{glossary("CORS")}}를 통해 제한을 해제할 수 있습니다.

## 예제

동일한 스킴(`http`)와 호스트 이름(`example.com`)을 갖고 있기 때문에 동일한 출처이며, 다른 파일 경로는 중요하지 않습니다.

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

서버는 기본적으로 포트 80을 통해 HTTP 콘텐츠를 전달하므로 출처는 동일합니다.

- `http://example.com:80`
- `http://example.com`

서로 다른 스킴을 사용하기 때문에 동일한 출처가 아닙니다.

- `http://example.com/app1`
- `https://example.com/app2`

서로 다른 호스트 이름을 사용하기 때문에 동일한 출처가 아닙니다.

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

서로 다른 포트를 사용하기 때문에 동일한 출처가 아닙니다.

- `http://example.com`
- `http://example.com:8080`

## 같이 보기

- [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)
- {{Glossary("Site")}}
- [HTML 명세: 출처](https://html.spec.whatwg.org/multipage/origin.html#origin)
