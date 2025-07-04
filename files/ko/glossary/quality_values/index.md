---
title: 품질 값 (Quality values)
slug: Glossary/Quality_values
l10n:
  sourceCommit: 5090082ff453369e1b9c44bf2bc975a00614114a
---

{{GlossarySidebar}}

**품질 값(Quality values)** 또는 'q-values' 또는 'q-factors'는 쉼표로 구분된 목록에서 값의 우선순위 순서를 설명하는 데 사용됩니다. 일부 [HTTP 헤더](/ko/docs/Web/HTTP/Reference/Headers) 및 HTML에서 허용되는 특수 구문입니다.

값의 중요도는 접미사 `';q='`로 표시되며 바로 뒤에 `0`에서 `1`사이의 값이 포함됩니다. 최대 3자리의 소수점 숫자가 가장 높은 값이 제일 높은 우선순위를 나타냅니다. 존재하지 않는 경우, 기본값은 `1`입니다.

## 예제

아래 문법을 참고해주세요.

```http
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

우선순위를 나타냅니다.

| 값                                     | 우선순위 |
| -------------------------------------- | -------- |
| `text/html` 및 `application/xhtml+xml` | `1.0`    |
| `application/xml`                      | `0.9`    |
| `*/*`                                  | `0.8`    |

처음 두 값에 대해 정의된 우선순위가 없는 경우, 목록의 순서는 관계가 없습니다. 그럼에도 불구하고, 동일한 품질을 사용하면 보다 구체적인 값이 덜 구체적인 값보다 우선순위가 높습니다.

```http
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| Value       | Priority                      |
| ----------- | ----------------------------- |
| `text/html` | `0.8` (but totally specified) |
| `text/*`    | `0.8` (partially specified)   |
| `*/*`       | `0.8` (not specified)         |

{{HTTPHeader("Accept")}}과 같은 일부 구문은 `text/html;level=1`과 같이 추가 지정자를 두는 것을 허용합니다. 사용은 매우 드물지만, 값의 특이성을 증가시킵니다.

## 추가 정보

- [HTTP 헤더](/ko/docs/Web/HTTP/Reference/Headers) 구문에 q-values를 사용하는 경우가 있습니다(예, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("TE")}}, {{HTTPHeader("Want-Digest")}}).
- [헤더 필드 정의](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
