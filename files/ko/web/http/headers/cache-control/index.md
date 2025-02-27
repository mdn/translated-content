---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
---

{{HTTPSidebar}}

**`Cache-Control`** 일반 헤더 필드는 요청과 응답 내의 캐싱 메커니즘을 위한 디렉티브를 정하기 위해 사용됩니다. 캐싱 디렉티브는 단방향성이며, 이는 요청 내에 주어진 디렉티브가 응답 내에 주어진 디렉티브와 동일하다는 것을 뜻하지는 않는다는 것을 의미합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 문법

디렉티브는 대소문자를 구분하지 않으며 토큰과 따옴표로 둘러쌓인 문자열 문법 모두를 사용할 수 있는 부가적인 인자를 가집니다. 다중 디렉티브는 쉼표로 구분됩니다.

### 캐시 요청 디렉티브

HTTP 요청 내에서 클라이언트에 의해 사용될 수 있는 표준 `Cache-Control` 디렉티브.

```
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: only-if-cached
```

### 캐시 응답 디렉티브

HTTP 응답 내에서 서버에 의해 사용될 수 있는 표준 `Cache-Control` 디렉티브.

```
Cache-control: must-revalidate
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: public
Cache-control: private
Cache-control: proxy-revalidate
Cache-Control: max-age=<seconds>
Cache-control: s-maxage=<seconds>
```

### 확장 `Cache-Control` 디렉티브

확장 `Cache-Control` 디렉티브는 핵심 HTTP 캐싱 표준 문서에 속하지 않습니다. 지원 여부는 [호환성 테이블](#browser_compatibility)을 확인하시기 바랍니다.

```
Cache-control: immutable
Cache-control: stale-while-revalidate=<seconds>
Cache-control: stale-if-error=<seconds>
```

## 디렉티브

### 캐시 능력

- `public`
  - : 응답이 어떤 캐시에 의해서든 캐시된다는 것을 나타냅니다.
- `private`
  - : 응답이 단일 사용자를 위한 것이며 공유 캐시에 의해 저장되지 않아야 한다는 것을 나타냅니다. 사설 캐시는 응답을 저장할 수도 있습니다.
- `no-cache`
  - : 캐시된 복사본을 사용자에게 보여주기 이전에, 재검증을 위한 요청을 원 서버로 보내도록 강제합니다.
- `only-if-cached`
  - : 새로운 데이터를 내려받지 않음을 나타냅니다. 클라이언트는 캐시된 응답만을 원하며, 더 최신 복사본이 존재하는지를 알아보기 위해 서버에 요청해선 안됩니다.

### 만료

- `max-age=<seconds>`
  - : 리소스가 최신 상태라고 판단할 최대 시간을 지정합니다. `Expires`에 반해, 이 디렉티브는 요청 시간과 관련이 있습니다.
- `s-maxage=<seconds>`
  - : `max-age` 혹은 `Expires` 헤더를 재정의하나, (프록시와 같은) 공유 캐시에만 적용되며 사설 캐시에 의해서는 무시됩니다.
- `max-stale[=<seconds>]`
  - : 클라이언트가 캐시의 만료 시간을 초과한 응답을 받아들일지를 나타냅니다. 부가적으로, 초 단위의 값을 할당할 수 있는데, 이는 응답이 결코 만료되서는 안되는 시간을 나타냅니다.
- `min-fresh=<seconds>`
  - : 클라이언트가 지정된 시간(초단위) 동안 신선한 상태로 유지될 응답을 원한다는 것을 나타냅니다.
- `stale-while-revalidate=<seconds>` {{experimental_inline}}
  - : 비동기 적으로 백그라운드 에서 새로운 것으로 체크인하는 동안 클라이언트가 최신이 아닌 응답을 받아 들일 것임을 나타냅니다. 초 값은 클라이언트가 최신이 아닌 응답을 받아 들일 시간을 나타냅니다.
- `stale-if-error=<seconds>` {{experimental_inline}}
  - : ...

### 재검증과 리로딩

- `must-revalidate`
  - : 캐시는 사용하기 이전에 기존 리소스의 상태를 반드시 확인해야 하며 만료된 리소스는 사용되어서는 안됩니다.
- `proxy-revalidate`
  - : `must-revalidate`와 동일하지만, (프록시와 같은)공유 캐시에만 적용되며 사설 캐시에 의해서는 무시됩니다.
- `immutable`
  - : 응답 본문이 계속해서 변하지 않을 것이라는 것을 나타냅니다. 응답은, 만료되지 않은 경우라면, 서버 상에서 변경되지 않을 것이고 그러므로 클라이언트는 업데이트 검사를 위해 (`If-None-Match` 혹은 `If-Modified-Since`과 같은)그에 대한 조건부의 재검증을 전송해서는 안 됩니다. 이 확장을 감지하지못한 클라이언트는 HTTP 명세에 따라 그것들을 무시해야만 합니다. Firefox에서, `immutable`는 `https://` 트랜잭션 상에서만 부여됩니다. 좀 더 많은 정보는 다음의 [블로그 포스트](http://bitsup.blogspot.de/2016/05/cache-control-immutable.html)를 참고하시기 바랍니다.

### 기타

- `no-store`
  - : 캐시는 클라이언트 요청 혹은 서버 응답에 관해서 어떤 것도 저장해서는 안됩니다.
- `no-transform`
  - : 응답에 대해 변형이나 변환이 일어나서는 안됩니다. Content-Encoding, Content-Range, Content-Type 헤더는 프록시에 의해서 수정되어서는 안됩니다. 반투명 프록시는, 예를 들어, 캐시 공간을 절약하고 느린 링크 상의 트래픽량을 줄이기 위해 이미지 포맷들을 변환합니다. `no-transform` 디렉티브는 이를 허용하지 않습니다.

## 예제

### 캐싱 막기

캐싱을 끄기 위해서, 다음의 디렉티브들을 보낼 수 있습니다. 추가로, `Expires와` `Pragma` 헤더를 참고하시기 바랍니다.

```bash
Cache-Control: no-cache, no-store, must-revalidate
```

### 정적 에셋 캐싱

변경되지 않을 애플리케이션 내 파일들에 대해, 보통 적극적인 캐싱을 추가할 수 있습니다. 이것은 예를 들자면, 이미지, CSS 파일 그리고 JavaScript 파일과 같이 애플리케이션에 의해 서브되는 정적 파일들을 포함합니다. 추가로, `Expires` 헤더를 참고하시기 바랍니다.

```bash
Cache-Control:public, max-age=31536000
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- [HTTP Caching FAQ](/ko/docs/Web/HTTP/Caching)
- {{HTTPHeader("Age")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Pragma")}}
