---
title: X-Frame-Options
slug: Web/HTTP/Reference/Headers/X-Frame-Options
original_slug: Web/HTTP/Headers/X-Frame-Options
---

The **`X-Frame-Options`** [HTTP](/ko/docs/Web/HTTP) 응답 헤더는 해당 페이지를 {{HTMLElement("frame")}} 또는{{HTMLElement("iframe")}}, {{HTMLElement("object")}} 에서 렌더링할 수 있는지 여부를 나타내는데 사용됩니다. 사이트 내 콘텐츠들이 다른 사이트에 포함되지 않도록 하여 [clickjacking](https://en.wikipedia.org/wiki/Clickjacking) 공격을 막기 위해 이 헤더를 사용합니다.

이 설정은 사용자가 `X-Frame-Options`를 지원하는 브라우저를 통해 페이지에 접근할 경우에만 보안됩니다.

> [!NOTE]
> {{HTTPHeader("Content-Security-Policy")}} HTTP 헤더에는 브라우저를 지원하기 위해 이 헤더를 [사용하지 않도록 하는](https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options) {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} 지시문이 있습니다.

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

## Syntax

`X-Frame-Options` 과 관련해서는 다음의 3가지 설정이 가능합니다.

```
X-Frame-Options: deny
X-Frame-Options: sameorigin
X-Frame-Options: allow-from https://example.com/
```

### Directives

`deny`는 같은 사이트 내에서 frame을 통한 접근도 막습니다.
`sameorigin`를 명시할 경우에는 frame에 포함된 페이지가 페이지를 제공하는 사이트와 동일한할 경우 계속 사용할 수 있습니다.

- `deny`
  - : 어떠한 사이트에서도 frame 상에서 보여질 수 없습니다.
- `sameorigin`
  - : 동일한 사이트의 frame에서만 보여집니다. 해당 스펙 안에서 브라우저 벤더가 최상위(top level), 혹은 부모(parent), 모든 체인(whole chain)에서 적용할지를 결정하도록 맡겨집니다. 하지만 모든 조상(ancestor)이 동일한 사이트에서 제공되지 않으면 이 옵션은 그다지 유용하지 않다고 논의되고 있습니다. (참고 [Firefox bug 725490](https://bugzil.la/725490)). 상세 지원사항에 대한 참고 [Browser compatibility](#browser_compatibility).
- `allow-from uri`
  - : 지정된 특정 uri의 frame 에서만 보여집니다. Firefox에서는 `sameorigin` 과 동일한 문제를 겪고 있습니다. 즉 동일한 사이트에 있는지에 대해서 frame의 조상(ancestor)을 확인하지 않습니다.

## 예시

> [!NOTE]
> 메타 테그 설정은 무용지물이다! 이를테면, `<meta http-equiv="X-Frame-Options" content="deny">` 태그는 아무런 영향을 미치지 않는다. 따라서 사용하지 말자! 오직 아래의 예제처럼 HTTP 헤더 설정을 통해서만 `X-Frame-Options`이 동작한다.

### Apache 설정

아파치에서 모든 페이지에 `X-Frame-Options` 헤더를 전송하려면, 사이트 설정에 다음의 설정을 추가합니다.

```
Header always set X-Frame-Options "sameorigin"
```

아파치에서 `X-Frame-Options` 거부(deny)하려면, 사이트 설정에 다음의 설정을 추가합니다.

```
Header set X-Frame-Options "deny"
```

아파치에서 특정 호스트(host)에서 `X-Frame-Options` 를 허용하려면(`allow-from)`, 사이트 설정에 다음의 설정을 추가합니다.

```
Header set X-Frame-Options "allow-from https://example.com/"
```

### nginx 설정

nginx에서 `X-Frame-Options` 헤더를 전송하려면 http, server, location 설정에 아래 설정을 추가합니다.

```
add_header X-Frame-Options sameorigin;
```

### IIS 설정

ISS에서 `X-Frame-Options` 헤더를 전송하려면, 사이트의 `Web.config` 파일에 다음을 추가합니다.

```xml
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="sameorigin" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

### HAProxy 설정

HAProxy에서 `X-Frame-Options` 헤더를 전송하려면, front-end, listen, 혹은 backend 설정에 다음을 추가합니다.

```
rspadd X-Frame-Options:\ sameorigin
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [ClickJacking Defenses - IEBlog](https://blogs.msdn.com/b/ie/archive/2009/01/27/ie8-security-part-vii-clickjacking-defenses.aspx)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://blogs.msdn.com/b/ieinternals/archive/2010/03/30/combating-clickjacking-with-x-frame-options.aspx)
- [HTTP Header Field X-Frame-Options - RFC 7034](https://tools.ietf.org/html/rfc7034)
- [CSP Level 2 frame-ancestors directive](https://w3c.github.io/webappsec/specs/content-security-policy/#directive-frame-ancestors)
