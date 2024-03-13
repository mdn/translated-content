---
title: 사이트 (Site)
slug: Glossary/Site
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

비공식적으로, '사이트'는 웹페이지 모음이고, 동일한 도메인에서 제공되며 단일 조직에서 유지관리하는 웹사이트입니다.

브라우저는 때때로 서로 다른 사이트를 정확하게 구별해야 합니다. 예를 들어, 브라우저는 [`SameSite`](/ko/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 쿠키를 쿠키를 설정한 동일한 사이트로만 보내야 합니다.

보다 정확한 정의를 위해 사이트는 도메인 이름의 '등록 가능한 도메인' 부분에 의해 결정됩니다. 등록 가능한 도메인은 [공개 접미사 목록](https://publicsuffix.org/list/)의 항목과 바로 앞의 도메인 네임 부분으로 구성됩니다. 예를 들면, `theguardian.co.uk`, `sussex.ac.uk` 및 `bookshop.org`가 모두 등록 가능한 도메인임을 의미합니다.

이 정의에 따라, `support.mozilla.org` 및 `developer.mozilla.org`는 동일한 사이트의 일부입니다. `mozilla.org`는 등록 가능한 도메인이기 때문입니다.

일부 상황에서는, 사이트를 차별화할 때 이 체계가 고려되기도 합니다. 이렇게 하면 `http://vpl.ca`와 `https://vpl.ca`가 다른 사이트가 됩니다. 이러한 스키마를 포함하면 안전하지 않은(HTTP) 사이트가 보안(HTTPS) 사이트와 동일한 사이트로 처리되는 것을 방지할 수 있습니다. 이러한 방식을 고려한 정의를 'schemeful same-site'라고도 합니다. 이와 같이, 더 엄격한 정의는 [`SameSite`](/ko/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 쿠키 처리 규칙에 적용됩니다.

## 예제

`mozilla.org`의 등록 가능한 도메인이 동일하므로 다음 사이트는 동일합니다.

- `https://developer.mozilla.org/en-US/docs/`
- `https://support.mozilla.org/en-US/`

포트가 관련이 없기 때문에, 다음은 동일한 사이트입니다.

- `https://example.com:8080`
- `https://example.com`

두 URL의 등록 가능한 도메인이 다르기 때문에 동일한 사이트가 아닙니다.

- `https://developer.mozilla.org/en-US/docs/`
- `https://example.com`

다음은 스키마가 고려되는 경우 동일한 사이트이거나 다른 사이트입니다.

- `http://example.com`
- `https://example.com`

## 같이 보기

- [URL이란 무엇인가요](/ko/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- {{Glossary("Origin")}}
- [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)
