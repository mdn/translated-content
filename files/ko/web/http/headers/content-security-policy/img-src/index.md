---
title: "CSP: img-src"
slug: Web/HTTP/Headers/Content-Security-Policy/img-src
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}}`:` **`img-src`** 지시어는 이미지 및 파비콘에 대하여 유효한 출처를 지정합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>
        Yes. If this directive is absent, the user agent will look for the
        <code>default-src</code> directive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

`img-src` 정책에 대해 하나 이상의 출처를 허용 할 수 있습니다.

```
Content-Security-Policy: img-src <source>;
Content-Security-Policy: img-src <source> <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Examples

### Violation cases

CSP 헤더가 주어질 때:

```bash
Content-Security-Policy: img-src https://example.com/
```

아래의 {{HTMLElement("img")}} 태그가 차단되어 불러오지 않습니다:

```html
<img src="https://not-example.com/foo.jpg" alt="example picture" />
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("img")}}
