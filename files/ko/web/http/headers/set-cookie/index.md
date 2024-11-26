---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
l10n:
  sourceCommit: a86c551ce8f5c6936b14640357eaa4da71a857d7
---

{{HTTPSidebar}}

**`Set-Cookie`** HTTP 응답 헤더는 서버에서 사용자 에이전트로 쿠키를 보내는데 사용되며, 사용자 에이전트가 나중에 서버로 쿠키를 보낼 수 있습니다.
여러 개의 쿠키를 보내기 위해서는 같은 응답에 여러 개의 **`Set-Cookie`** 헤더를 보내야 합니다.

> **경고:** `Set-Cookie`는 프론트엔드 코드에 노출된 모든 응답으로부터 [필터링해야 하는](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) [금지된 응답 헤더 이름](https://fetch.spec.whatwg.org/#forbidden-response-header-name)에 정의된 Fetch 명세의 요구에 따라, 브라우저는 `Set-Cookie` 헤더에 접근하는 프론트엔드 JavaScript 코드를 차단합니다.

더 많은 정보는 [HTTP 쿠키](/ko/docs/Web/HTTP/Cookies) 안내서를 참고하세요.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Response header", "응답 헤더")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>아니요</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden response header name", "금지된 응답 헤더 이름")}}</th>
      <td>예</td>
    </tr>
  </tbody>
</table>

## 구문

```http
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Partitioned
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure

// Multiple attributes are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## 속성

- `<cookie-name>=<cookie-value>`

  - : 쿠키의 이름과 값을 정의합니다.
    쿠키 정의는 이름-값 쌍과 함께 시작합니다.

    `<cookie-name>`은 다음을 제외한 모든 US-ASCII 문자를 포함할 수 있습니다. 제어 문자 (0부터 31까지의 {{Glossary("ASCII")}} 문자와 ASCII 문자 127) 또는 구분 문자 (스페이스, 탭 및 다음 문자들: `( ) < > @ , ; : \ " / [ ] ? = { }`)

    `<cookie-value>`는 선택적으로 큰따옴표로 감쌀 수 있고, 제어 문자(0부터 31까지의 ASCII 문자와 ASCII 문자 127), {{glossary("Whitespace", "공백")}}, 큰따옴표, 콤마, 세미콜론, 역슬래시를 제외한 모든 US-ASCII 문자를 포함할 수 있습니다.

    **인코딩**: 많은 구현체에서 쿠키 값에 [URL 인코딩](https://en.wikipedia.org/wiki/URL_encoding)을 수행합니다.
    하지만 이것은 RFC 명세서에서 요구되는 것은 아닙니다.
    URL 인코딩은 `<cookie-value>`에 허용되는 문자의 요구 사항을 충족하는데 도움을 줍니다.

    > [!NOTE]
    > 일부 `<cookie-name>`은 특정 의미를 가집니다.
    >
    > **`__Secure-` 접두사**: `__Secure-`로 시작하는 이름의 쿠키는 보안 페이지(HTTPS)에서 `secure` 플래그와 함께 설정해야 합니다.
    >
    > **`__Host-` 접두사**: `__Host-`로 시작하는 쿠키는 `secure` 플래그를 설정해야 하고, 보안 페이지(HTTPS)를 사용해야 하며, 구체적인 도메인을 가지지 말아야 하고, 경로는 `/`여야 합니다.

- `Domain=<domain-value>` {{optional_inline}}

  - : 쿠키를 보낼 호스트를 정의합니다.

    현재 도메인에서 값을 설정할 수 있거나, 공개 접미사가 아니면 상위 도메인으로 설정할 수 있습니다. 도메인을 설정하는 것은 해당 도메인뿐만 아니라 모든 하위 도메인에도 쿠키를 사용할 수 있게 합니다.

    만약 생략된다면 이 속성은 하위 도메인을 포함하지 않고, 현재 문서 URL의 호스트를 기본 값으로 설정합니다.

    이전 명세서와 다르게 도메인 이름 안의 선행점(`.example.com`)은 무시합니다.

    여러 개의 호스트/도메인 값은 허용되지 않지만, 도메인이 지정됐다면 하위 도메인은 항상 포함됩니다.

- `Expires=<date>` {{optional_inline}}

  - : HTTP 날짜 타임스탬프로 쿠키의 최대 생명주기를 나타냅니다.
    요구 서식은 {{HTTPHeader("Date")}}를 참고하세요.

    만약 지정되지 않았으면 쿠키는 **세션 쿠키**입니다.
    클라이언트가 종료될 때 세션이 종료되고, 그 후 쿠키를 제거합니다.

    > [!WARNING]
    > 많은 웹 브라우저는 모든 탭을 저장하고, 다음에 브라우저를 사용할 수 있도록 복구하는 세션 복구 특징을 가지고 있습니다. 마치 브라우저가 닫히지 않은 것처럼 세션 쿠키도 복구합니다.

    `Expires` 날짜가 설정될 때, 기한은 서버가 아닌 쿠키가 설정되는 클라이언트에 상대적입니다.

- `HttpOnly` {{optional_inline}}

  - : JavaScript가 {{domxref("Document.cookie")}} 속성 등을 통해 쿠키에 접근하는 것을 금지합니다.
    `HttpOnly`로 만들어진 쿠키는 {{domxref("XMLHttpRequest.send()")}} 또는 {{domxref("fetch()")}}등을 호출할 때 여전히 JavaScript 시작 요청과 함께 전송합니다.
    이것은 사이트 간 스크립팅({{Glossary("Cross-site_scripting", "XSS")}})에 대한 공격을 완화합니다.

- `Max-Age=<number>` {{optional_inline}}

  - : 쿠키가 만료할 때까지의 시간(초)을 나타냅니다. 0 또는 음수는 쿠키를 즉시 만료합니다. 만약 `Expire`와 `Max-Age`를 둘 다 설정했으면 `Max-Age`가 우선순위를 가집니다.

- `Partitioned` {{optional_inline}}{{experimental_inline}}

  - : 쿠키는 분할 저장소를 사용하여 저장해야 함을 나타냅니다. 더 많은 내용은 [Cookies Having Independent Partitioned State (CHIPS)](/ko/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)를 참고하세요.

- `Path=<path-value>` {{optional_inline}}

  - : 브라우저가 `Cookie` 헤더를 전송하기 위해 요청된 URL 안에 반드시 존재해야 하는 경로를 나타냅니다.

    슬래시(`/`) 문자는 디렉토리 구분자로 해석되고, 하위 디렉토리도 마찬가지입니다. 예를 들어 `Path=/docs`인 경우,

    - 요청 경로 `/docs`, `/docs/`, `/docs/Web/`, `/docs/Web/HTTP`는 모두 일치합니다.
    - 요청 경로 `/`, `/docsets`, `/fr/docs`는 일치하지 않습니다.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : 사이트 간 요청과 함께 쿠키가 전송될지를 제어하여
    사이트 간 요청 위조 공격({{Glossary("CSRF")}})에 대한 일부 보호를 제공합니다.

    가능한 속성 값은 다음과 같습니다.

    - `Strict`

      - : 브라우저가 동일한 사이트 요청에만 쿠키를 전송한다는 것을 의미합니다. 즉, 쿠키를 설정한 동일한 사이트에서 발생하는 요청에만 쿠키를 전송합니다.
        만약 다른 도메인 또는 같은 도메인의 스키마에서 발생하는 요청이라면 `SameSite=Strict` 속성이 있는 쿠키는 전송되지 않습니다.

    - `Lax`

      - : 이미지 또는 프레임을 불러오는 요청과 같은 사이트 간 요청은 쿠키가 전송되지 않는 것을 의미합니다. 하지만 사용자가 링크를 따라갈 때처럼 외부 사이트에서 원래 사이트로 이동할 때는 쿠키를 전송합니다.
        이것은 `SameSite` 속성이 명시되지 않았으면 기본 값으로 동작합니다.

    - `None`

      - : 브라우저가 사이트 간 요청, 같은 사이트 요청 모두 쿠키를 보내는 것을 의미합니다.
        이 값을 설정할 때, `SameSite=None; Secure`와 같이 `Secure` 속성도 설정되어야 합니다.
        만약 `Secure`가 없는 경우 다음과 같은 오류를 기록합니다.

        ```plain
        Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

        This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
        ```

        > **참고:** [`Secure`](#secure) 쿠키는 HTTPS 프로토콜을 통해 암호화된 요청에서만 서버로 전송합니다. 안전하지 않은 사이트(`http:`)는 `Secure` 지시어로 쿠키를 설정할 수 없으므로 `SameSite=None`을 사용할 수 없습니다.

- `Secure` {{optional_inline}}

  - : 쿠키가 localhost를 제외한 `https:` 스키마에서 요청할 때만 쿠키가 전송되는걸 나타냅니다. 따라서 [중간자](/ko/docs/Glossary/MitM) 공격에 더 강합니다.

    > **참고:** `Secure`가 쿠키 안에 있는 세션 키, 로그인 정보 등과 같은 민감한 정보에 대한 모든 접근을 예방한다고 가정하지 마십시오. 이 속성이 있는 쿠키는 클라이언트의 하드디스크에 접근하거나, `HttpOnly` 쿠키 속성이 설정되지 않은 경우 JavaScirpt를 통해 여전히 읽기/수정이 모두 가능합니다.
    >
    > 안전하지 않은 사이트(`http:`)는 Chrome 52, Firefox 52 이후로 `Secure` 속성을 설정할 수 없습니다. Chrome 89, Firefox 75이후로 로컬 호스트에서 `Secure` 속성을 설정할 때 `https:` 요구 사항은 무시합니다.

## 예제

### 세션 쿠키

**세션 쿠키**는 클라이언트가 종료될 때 제거합니다. 쿠키는 `Expires` 또는 `Max-Age` 속성을 지정하지 않으면 세션 쿠키입니다.

```http
Set-Cookie: sessionId=38afes7a8
```

### 지속 쿠키

**지속 쿠키**는 클라이언트가 닫았을 때가 아니라, 특정 날짜(`Expires`) 또는 특정 시간 후(`Max-age`)에 제거합니다.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### 유효하지 않은 도메인

설정한 서버를 포함하지 않는 도메인을 위한 쿠키는 [사용자 에이전트에 의해 거부](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3)됩니다.

다음 쿠키는 `originalcompany.com`에 호스팅되는 서버에서 설정한다면 거부됩니다.

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```

서빙 도메인의 하위 도메인을 위한 쿠키는 거부합니다.

다음 쿠키는 `example.com`에 호스팅되는 서버에서 설정한다면 거부합니다.

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### 쿠키 접두사

`__Secure-` 또는 `__Host-` 접두사가 붙은 쿠키 이름은 보안(HTTPS) 출처에서 `secure` 속성이 설정된 경우에만 사용될 수 있습니다.

게다가 `__Host-` 접두사가 붙은 쿠키는 호스트의 모든 경로를 의미하는 `/`를 경로로 가져야 하고 `Domain` 속성이 있어서는 안됩니다.

> [!WARNING]
> 쿠키 접두사를 구현하지 않는 클라이언트의 경우, 추가적인 보증에 의존할 수 없고, 접두사 쿠키가 항상 허용합니다.

```http
// Both accepted when from a secure origin (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Rejected due to missing Secure attribute
Set-Cookie: __Secure-id=1

// Rejected due to the missing Path=/ attribute
Set-Cookie: __Host-id=1; Secure

// Rejected due to setting a Domain
Set-Cookie: __Host-id=1; Secure; Path=/; Domain=example.com
```

### 분할 쿠키

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> 분할 쿠키는 `Secure`로 설정해야 합니다. 게다가 분할 쿠키를 설정할 때 `__Host` 접두사를 사용하여 등록가능한 도메인이 아닌 호스트 이름에 바운딩하는걸 추천합니다.

## 기술 사양

{{Specifications}}

## 브라우저 호환성

{{Compat}}

### 호환성 참고 사항

- Chrome 52와 Firefox 52부터는 안전하지 않은 사이트(`http:`)에서 더 이상 `Secure` 속성을 가진 쿠키를 설정할 수 없습니다.

## 같이 보기

- [HTTP 쿠키](/ko/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- [Samesite cookies 설명](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
