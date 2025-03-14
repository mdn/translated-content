---
title: Percent-encoding(퍼센트 인코딩)
slug: Glossary/Percent-encoding
l10n:
  sourceCommit: 6c7cb932f7a0735ec2ac64732c9a947510fd1303
---

{{GlossarySidebar}}

**Percent-encoding** 은 {{Glossary("URL", "URL")}} 맥락에서 특정 의미를 갖는 8비트 문자로 인코딩하는 메커니즘입니다. URL 인코딩이라고도 합니다. 인코딩은 '%' 다음에 변경할 문자를 ASCII 값으로 표현되는 16진수가 위치하는 대체 문자열로 구성됩니다.

인코딩이 필요한 특수문자는 `':'`, `'/'`, `'?'`, `'#'`, `'['`, `']'`, `'@'`, `'!'`, `'$'`, `'&'`, `"'"`, `'('`, `')'`, `'*'`, `'+'`, `','`, `';'`, `'='` 그리고 `'%'` 그 자체입니다. 다른 문자는 인코딩 할 수 있지만 인코딩을 할 필요는 없습니다.

| 문자  | 인코딩       |
| ----- | ------------ |
| `':'` | `%3A`        |
| `'/'` | `%2F`        |
| `'?'` | `%3F`        |
| `'#'` | `%23`        |
| `'['` | `%5B`        |
| `']'` | `%5D`        |
| `'@'` | `%40`        |
| `'!'` | `%21`        |
| `'$'` | `%24`        |
| `'&'` | `%26`        |
| `"'"` | `%27`        |
| `'('` | `%28`        |
| `')'` | `%29`        |
| `'*'` | `%2A`        |
| `'+'` | `%2B`        |
| `','` | `%2C`        |
| `';'` | `%3B`        |
| `'='` | `%3D`        |
| `'%'` | `%25`        |
| `' '` | `%20` or `+` |

문맥에 따라 문자 `' '`는 `application/x-www-form-urlencoded` 메시지에서 사용된 것과 같은 퍼센트 인코딩처럼 `'+'`로 변환되며 URL에서는 `'%20'`으로 변환됩니다.

## 같이 보기

- 위키피디아 [퍼센트 인코딩](https://ko.wikipedia.org/wiki/%ED%8D%BC%EC%84%BC%ED%8A%B8_%EC%9D%B8%EC%BD%94%EB%94%A9)의 정의
- 이 인코딩이 정의된 {{RFC(3986)}}의, section 2.1
- URL을 퍼센트 인코딩하는 기능인 [`encodeURI()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)와 [`encodeURIComponent()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
