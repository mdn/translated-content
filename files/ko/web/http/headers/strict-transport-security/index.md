---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
translation_of: Web/HTTP/Headers/Strict-Transport-Security
---
{{HTTPSidebar}}

**HTTP `Strict-Transport-Security`** response header (종종 {{Glossary("HSTS")}} 로 약칭) 는 HTTP 대신 HTTPS만을 사용하여 통신해야한다고 웹사이트가 브라우저에 알리는 보안 기능.

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

```
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```

## Directives

- `max-age=<expire-time>`
  - : 이 사이트가 HTTPS 로만 접근되어야 한다고 기억되어야 하는 시간(초).
- `includeSubDomains` {{optional_inline}}
  - : 이 옵션이 적용되면, 이 사이트의 모든 서브도메인에 규칙이 적용된다는 것을 의미한다.
- `preload` {{optional_inline}}
  - : 자세한 내용은 다음 [Preloading Strict Transport Security](#preloading_strict_transport_security) 을 참고.

## Description

만약 이 웹사이트가 HTTP 요청을 받고 HTTPS 로 리다이렉트 하는 경우에, 유저가 만약 http\://www\.foo.com/ 을 입력하거나, 심지어 foo.com 만 입력하는 경우에, 리다이렉트 되기 이전의 암호화 되지 않은 버전의 사이트와 통신하게 된다. 이 경우, 안전한 버전의 원본 페이지가 아닌 악의적인 다른 페이지로 리다이렉트 되는 man-in-the-middle attack 의 잠재적 위험이 있다.

HTTP Strict Transport Security 헤더는 웹사이트가 브라우저에게 절대로 HTTP 로 사이트를 연결하면 안되고 HTTP 로 연결하려는 모든 시도는 자동으로 HTTPS로 변경해야 된다고 알린다.

> **참고:** `Strict-Transport-Security` 헤더는 사이트에 HTTP 로 접근되었을때에는 무시된다. 공격자가 HTTP 연결을 가로채어 헤더를 주입하거나 제거했을 수 있기 때문이다. 만약 당신의 사이트가 HTTPS 로 접근되었고 인증 에러도 없었다면, 브라우저는 당신의 사이트가 HTTPS 를 사용할 수 있음을 알고, `Strict-Transport-Security` 헤더를 사용한다.

### An example scenario

당신은 공항의 무료 WiFi 에 로그인하여 웹서핑을 시작하여, 잔고 확인과 영수 처리를 하기 위해 온라인 뱅킹을 시작했다. 하지만, 당신이 사용중인 access point 는 사실은 해커의 노트북이고, 그는 당신의 원본 HTTP 리퀘스트를 가로채어 진짜 은행 사이트가 아닌 가짜 은행 사이트로 리다이렉트 했다. 당신의 비공개 데이터는 해커에게 노출되었다.

당신이 HTTPS 를 이용해서 은행의 웹사이트를 접근한 적이 있었고, 그 은행의 웹사이트가 Strict Transport Security 를 사용한다면 당신의 브라우저는 자동으로 HTTPS 만 사용할 것이고, 해커가 이러한 man-in-the-middle 공격을 하는것을 방지해준다. 따라서 Strict Transport Security는 이러한 문제를 해결해준다.

### How the browser handles it

맨 처음 HTTPS 를 이용해서 접근되면 당신의 사이트는 `Strict-Transport-Security` 헤더를 응답한다. 당신의 브라우저는 이러한 정보를 기록해서 이후에 HTTP 로 접근하려는 시도를 자동으로 HTTPS 를 사용하도록 변경한다.

만약 Strict-Transport-Security 헤더에 명시된 만료시간(expiration time)이 지나면, HTTP 로 접근하려는 다음 시도는 HTTPS 를 사용하지 않는다.

Strict-Transport-Security 헤더가 브라우저에게 제공되면, 브라우저는 해당 사이트의 만료시간을 갱신하여 만료되지 않도록 한다. Strict Transport Security 헤더를 의 max-age 값을 0으로 지정(HTTPS 연결중)하면 `Strict-Transport-Security`헤더가 즉시 비활성 되어 HTTP 를 통한 접근이 허용된다.

## Preloading Strict Transport Security

구글은 [HSTS preload service](https://hstspreload.appspot.com/) 를 관리하고 있다. 가이드라인을 따르고 당신의 도메인 등록을 성공하면, 브라우저는 당신의 도메인에 안전하지 않은 연결을 하지 않게 된다. 이 서비스는 구글에 의해 제공되지만, 모든 브라우저는 preload list 를 사용하겠다는 의도를 밝혔다(혹은 실제로 사용하고있다).

- Information regarding the HSTS preload list in Chrome : <https://www.chromium.org/hsts>
- Consultation of the Firefox HSTS preload list : [nsSTSPreloadList.inc](https://dxr.mozilla.org/comm-central/source/mozilla/security/manager/ssl/nsSTSPreloadList.inc)

## Examples

모든 서브도메인을 포함해서 최대 1년간 HTTPS 를 통해 접근하겠다는 이 페이지와 서브도메인들 모두 HTTP 를 통한 접근을 막는다.

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("http.headers.Strict-Transport-Security")}}

## See also

- Blog post: [HTTP Strict Transport Security has landed!](http://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- Blog post: [HTTP Strict Transport Security (force HTTPS)](http://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP Article: [HTTP Strict Transport Security](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security)
- Wikipedia: [HTTP Strict Transport Security](http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
