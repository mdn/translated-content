---
title: Referer
slug: Web/HTTP/Headers/Referer
---

{{HTTPSidebar}}

**`Referer`** 요청 헤더는 현재 요청을 보낸 페이지의 절대 혹은 부분 주소를 포함합니다. 만약 링크를 타고 들어왔다면 해당 링크를 포함하고 있는 페이지의 주소가, 다른 도메인에 리소스 요청을 보내는 경우라면 해당 리소스를 사용하는 페이지의 주소가 이 헤더에 포함됩니다.`Referer` 헤더는 사람들이 어디로부터 와서 방문 중인지를 인식할 수 있도록 해주며 해당 데이터는 예를 들어, 분석, 로깅, 혹은 캐싱 최적화에 사용될 수도 있습니다.

`Referer` 헤더는 URL 프래그먼트 (예 : "#section") 또는 "username : password" 정보를 포함 할 수 없습니다. _origin_, _경로_, 및 *쿼리 문자열*을 포함 할 수는 있습니다. 전송되는 내용은 요청에 대한 referrer 정책에 따라 다릅니다. 정보 및 예제는 Referrer-Policy를 참조하십시오. [정보](/ko/docs/Web/HTTP/Headers/Referrer-Policy#directives) 와 [예시](/ko/docs/Web/HTTP/Headers/Referrer-Policy#examples)는 이곳 {{HTTPHeader("Referrer-Policy")}}을 참고하세요.

> **참고:** #### Notereferer는 단어 "referrer"의 잘못된 철자입니다. 자세한 내용은 [HTTP_referer](https://en.wikipedia.org/wiki/HTTP_referer)을 참고하세요.

> **경고:** #### Warning`Referer` 헤더는 사생활과 관련된 브라우징 히스토리에 관한 정보를 노출할 가능성이 있습니다. 더 많은 정보는 [Referer header: privacy and security concerns](/ko/docs/Web/Security/Referer_header:_privacy_and_security_concerns) 이곳을 참조하세요.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr></tr>
  </tbody>
</table>

## 문법

```
Referer: <url>
```

## 디렉티브

- \<url>
  - : 현재 요청된 페이지의 링크 이전의 웹 페이지의 절대 혹은 부분 주소. URL 프래그먼트(예를 들어, "#section")나 사용자 정보(예를 들어 "https\://username:password\@example.com/foo/bar/" 에서 "username:password")는 포함되지 않습니다. 오리진, 패쓰, 쿼리스트링은 [referrer 정책](/ko/docs/Web/HTTP/Headers/Referrer-Policy#directives)에 따라 포함될 수 있습니다.

## 예제

```
Referer: https://developer.mozilla.org/ko/docs/Web/JavaScript
Referer: https://example.com/page?q=123
Referer: https://example.com/
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTTP_referer](https://en.wikipedia.org/wiki/HTTP_referer)
- [Fetch](/ko/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}
- outdated 된 {{HTTPHeader("Content-Security-Policy")}} {{HTTPHeader("Content-Security-Policy/referrer", "referrer")}} {{deprecated_inline}} 디렉티브
- [Same-origin policy](/ko/docs/Web/Security/Same-origin_policy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
