---
title: 출처
slug: Glossary/Origin
---

{{QuickLinksWithSubpages("/ko/docs/Glossary")}}

웹 콘텐츠의 **출처**(origin)는 접근할 때 사용하는 {{glossary("URL")}}의 스킴({{glossary("protocol", "프로토콜")}}), 호스트(도메인), 포트로 정의됩니다. 두 객체의 스킴, 호스트, 포트가 모두 일치하는 경우 같은 출처를 가졌다고 말합니다.

일부 작업은 동일 출처 콘텐츠로 제한되나, {{glossary("CORS")}}를 통해 제한을 해제할 수 있습니다.

## 동일 출처의 예제

| `http://example.com/app1/index.html` `http://example.com/app2/index.html` | 스킴(`http`)과 호스트(`example.com`) 일치 |
| ------------------------------------------------------------------------- | ----------------------------------------- |
| `http://Example.com:80` `http://example.com`                              | HTTP의 기본 포트는 80이므로 동일한 출처   |

## 다른 출처의 예제

| `http://example.com/app1` `https://example.com/app2`                     | 다른 스킴   |
| ------------------------------------------------------------------------ | ----------- |
| `http://example.com` `http://www.example.com` `http://myapp.example.com` | 다른 호스트 |
| `http://example.com` `http://example.com:8080`                           | 다른 포트   |

## 더 알아보기

- [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)
