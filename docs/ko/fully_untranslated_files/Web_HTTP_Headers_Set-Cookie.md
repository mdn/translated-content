---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
---

{{HTTPSidebar}}

**`Set-Cookie`** HTTP 응답 헤더는 서버에서 사용자 브라우저에 쿠키를 전송하기 위해 사용됩니다.

자세한 정보를 보려면 [HTTP cookies](/ko/docs/Web/HTTP/Cookies)에 수록된 가이드를 읽으세요.

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
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax

// Multiple directives are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## 디렉티브

- `<cookie-name>=<cookie-value>`

  - : 쿠키는 "이름-값" 페어로 시작됩니다.

    - `<cookie-name>` 는 제어 문자 및 공백, 탭(\t)를 제외한 아스키 문자로 구성되어야 합니다. 또한, "( ) < > @ , ; : \ " / \[ ] ? = { }" 같은 문자도 포함할 수 없습니다.
    - A `<cookie-value>` 는 필요하다면 쌍 따운표로 묶여질 수 있고 아스키 코드 문자로 구성되어야 하고, `<cookie-name>`처럼 제어 문자, 공백, 쌍 따운표, 콤마, 세미콜론, 역 슬래쉬(\\)는 사용할 수 없습니다. **엔코딩**: 쿠기 값에 대해서 URL 엔코딩을 사용하는 구현 기법들이 많지만, RFC 명세에서 요구하는 것은 아닙니다. 단지, \<cookie-value>에 허용된 문자에 대한 요구사항을 만족시킬 뿐이죠.
    - **`__Secure-` 프리픽스**: `__Secure-` (대쉬는 프리픽스의 일부입니다)로 시작되는 쿠키 이름은 반드시 `secure` 플래그가 설정되어야 하고, 보안 페이지(HTTPS)여야 합니다.
    - **`__Host-` 프리픽스**: `__Host-` 로 시작되는 쿠키들은 `secure` 플래그가 설정되어야 하며, 마찬가지로 보안 페이지(HTTPS)여야 하고, 도메인이 지정되지 않아야 합니다. (따라서 서브 도메인에 쿠키를 공유할 수 없습니다) 그리고, 경로는 반드시 "/"여야 합니다.

- Expires=\<date> {{optional_inline}}

  - : HTTP 타임스템프로 기록된 쿠키의 최대 생존 시간(수명). 세부 형태를 확인하려면 {{HTTPHeader("Date")}}를 참조하세요. 지정되지 않았다면, **세션 쿠키**로서 취급되며, 클라이언트가 종료될 때 파기 됩니다. 그러나 많은 웹 브라우져에서 세션이라고 불리는 기능(그러니까 모든 탭을 기억했다가 브라우져를 다시 켜면 복구된다던지 하는 기능)을 구현합니다. 쿠키들 또한 함께 복원되므로, 정확히 말해서 브라우져를 닫은 적이 없는 게 되는 것이죠.

    만료 시간이 지정되면, 시간 및 날자로 이뤄진 값은 서버가 아니라 클라이언트에 상대적인 값으로 취급됩니다.

- Max-Age=\<number> {{optional_inline}}
  - : 쿠키가 만료될 때 까지의 시간 (초 단위). 0 또는 음수가 지정되면 해당 쿠키는 즉시 만료되며, 오래된 브라우저(ie6, ie7 그리고 ie8)은 이 헤더를 지원하지 않습니다. 다른 브라우저들은 둘 다(`Expires` 와 `Max-Age)` 지정되었을 때 `Max-Age` 값을 더 우선시합니다.
- Domain=\<domain-value> {{optional_inline}}
  - : 쿠키가 적용되어야 하는 호스트를 지정. 지정되어 있지 않으면 현재 문서 URI를 기준으로 적용됩니다만, 서브 도메인을 포함하지 않습니다. 이전의 설계와 달리, 도메인의 선두에 위치한 점들은 무시됩니다. 도메인이 지정되면, 서브도메인들은 항상 포함됩니다.
- Path=\<path-value> {{optional_inline}}
  - : 쿠키 헤더를 보내기 전에 요청 된 리소스에 있어야하는 URL 경로를 나타냅니다. % x2F ( "/") 문자는 디렉토리 구분 기호로 해석되며 하위 디렉토리도 일치합니다 (예: path=/docs, "/docs", "/docs/Web/"또는 "/docs/Web/HTTP "가 모두 일치합니다).
- Secure {{optional_inline}}

  - : 보안 쿠키들은 서버에서 요청이 SSL을 사용하며, HTTPS 프로토콜을 사용할 때에만 전송됩니다. 그러나 기밀 정보나 민감한 정보들은 HTTP 쿠키에 보관되거나 그걸로 전송되어선 안됩니다. 왜냐하면, 그 전체 메커니즘이 본질적으로 보안이 결여되어 있고, 거기 들어있는 어떤 정보도 암호화되지 않기 때문입니다.

    > **참고:** **노트:** 비 보안 사이트(`http:`)들은 "보안" 쿠키를 더이상 설정할 수 없습니다(Chrome 52+ 및 Firefox 52+).

- HttpOnly {{optional_inline}}
  - : HTTP-only cookies aren't accessible via JavaScript through the property, the {{domxref("XMLHttpRequest")}} and {{domxref("Request")}} APIs to mitigate attacks against cross-site scripting ({{Glossary("XSS")}}).
- SameSite=Strict
  SameSite=Lax {{optional_inline}} {{experimental_inline}}
  - : Allows servers to assert that a cookie ought not to be sent along with cross-site requests, which provides some protection against cross-site request forgery attacks ({{Glossary("CSRF")}}).

## Examples

### Session cookie

Session cookies will get removed when the client is shut down. They don't specify the `Expires` or `Max-Age` directives. Note that web browser have often enabled session restoring.

```
Set-Cookie: sessionid=38afes7a8; HttpOnly; Path=/
```

### Permanent cookie

Instead of expiring when the client is closed, permanent cookies expire at a specific date (`Expires`) or after a specific length of time (`Max-Age`).

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

### Invalid domains

A cookie belonging to a domain that does not include the origin server [should be rejected by the user agent](https://tools.ietf.org/html/rfc6265#section-4.1.2.3). The following cookie will be rejected if it was set by a server hosted on originalcompany.com.

```
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk; Path=/; Expires=Wed, 30 Aug 2019 00:00:00 GMT
```

### Cookie prefixes

Cookies names with the prefixes `__Secure-` and `__Host-` can be used only if they are set with the `secure` directive from a secure (HTTPS) origin. In addition, cookies with the `__Host-` prefix must have a path of "/" (the entire host) and must not have a domain attribute. For clients that don't implement cookie prefixes, you cannot count on having these additional assurances and the cookies will always be accepted.

```
// Both accepted when from a secure origin (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Rejected due to missing Secure directive
Set-Cookie: __Secure-id=1

// Rejected due to the missing Path=/ directive
Set-Cookie: __Host-id=1; Secure

// Rejected due to setting a domain
Set-Cookie: __Host-id=1; Secure; Path=/; domain=example.com
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## Compatibility notes

- Starting with Chrome 52 and Firefox 52, insecure sites (`http:`) can't set cookies with the "secure" directive anymore.

## See also

- [HTTP cookies](/ko/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
