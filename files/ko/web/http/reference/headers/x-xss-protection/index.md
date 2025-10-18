---
title: X-XSS-Protection
slug: Web/HTTP/Reference/Headers/X-XSS-Protection
original_slug: Web/HTTP/Headers/X-XSS-Protection
---

HTTP **`X-XSS-Protection`**헤더는 Internet Explorer, Chrome 및 Safari에서 제공하는 기능으로서, ({{Glossary("XSS")}}) 공격을 감지 할 때 페이지 로드를 중지시킬 수 있습니다. 최신 브라우저에서는 Inline Javascript(`'unsafe-inline')`사용을 못하게 하는 CSP(Content-Security-Policy) 보호기능이 있으나, 해당 기능을 지원하지 않는 구형 웹브라우저에서 사용자를 보호 할수 있는 기능을 제공할 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 문법

```
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

- 0
  - : XSS 필터링을 비활성화합니다.
- 1
  - : XSS 필터링을 사용합니다 (일반적으로 브라우저의 기본값입니다). 사이트 내에서 스크립팅 공격이 감지되면 브라우저는 안전하지 않은 영역을 제거 후에 렌더링을 하게 됩니다.
- 1; mode=block
  - : XSS 필터링을 사용합니다. 공격이 탐지되면 안전하지 않는 영역을 제거하는게 아니라, 페이지 렌더링을 중단합니다.
- 1; report=\<reporting-URI> (Chromium에서만 사용 가능)
  - : XSS 필터링을 사용합니다. XSS 공격을 탐지하면 브라우저는 페이지 렌더링을 차단하고 위반 사항을 보고합니다. 이것은 CSP {{CSP ( "report-uri")}} 지시문의 기능을 사용하여 보고서를 보냅니다.

## 예제

XSS 공격을 감지하면 페이지로드를 차단합니다.

```bash
X-XSS-Protection: 1; mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```bash
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

Nginx

```bash
add_header "X-XSS-Protection" "1; mode=block";
```

## 명세서

{{Specifications}}

## 지원 브라우저

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://blogs.msdn.microsoft.com/ieinternals/2011/01/31/controlling-the-xss-filter/)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/blog/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](http://blog.innerht.ml/the-misunderstood-x-xss-protection/)
