---
title: "CSP: default-src"
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`** 구문은 다른 CSP 구문이 정의되지 않았을때 이를 대체하는 용도로 사용됩니다. as a fallback for the other CSP {{Glossary("fetch directive", "fetch directives")}}. 다음과 같은 구문이 없는 경우, `default-src` 구문을 찾아서 사용합니다:

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("script-src")}}
- {{CSP("style-src")}}
- {{CSP("worker-src")}}

| CSP version    | 1                               |
| -------------- | ------------------------------- |
| Directive type | {{Glossary("Fetch directive")}} |

## Syntax

하나 이상의 출처가 `default-src` 정책에 의해서 허용될 수 있습니다:

```
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### Sources

\<source> 에는 다음에 항목이 포함됩니다.

- \<host-source>

  - : 부수적으로 [URL scheme](/ko/docs/URIs_and_URLs) 및/또는 port 번호가 포함된 도메인 또는 IP 주소와 같은 인터넷 호스트, 또한 사이트의 주소 및 포트에 와일트 카드를 사용할 수 도 있습니다 (`'*'`), 이를 사용하면 모든 주소 또는 포트에서의 유효함을 나타냅니다.
    예:

    - `http://*.example.com`: `http:` 를 사용하는 모든 서브도메인에서 매칭됩
    - `mail.example.com:443`: 443 포트로 mail.example.com에 접근하는 경우 매칭됨
    - `https://store.example.com`: store.example.com를 `https:`로 접근하는 경우 매칭됨

- \<scheme-source>

  - : 'http:' 또는 'https:'와 같은 스키마. **콜론이 필수적이며, 작은 따음표는 사용하지 않아야 합니다.** 스키마도 지정할 수 있습니다 (추천하지 않음).

    - `data:`[`data:` URIs](/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) 를 컨텐츠 출처로 허용합니다. 이것은 안전하지 않습니다. _공격자가 임의의 데이터를 주입할 수도 있기 때문에 script에는 사용하지 마십시오._
    - `mediastream:`[`mediastream:` URIs](/ko/docs/Web/API/MediaStream_API) 을 콘텐츠 출처로 허용합니다.
    - `blob:`[`blob:` URIs](/ko/docs/Web/API/Blob)을 콘텐츠 출처로 허용합니다.
    - `filesystem:`[`filesystem:` URIs](/ko/docs/Web/API/FileSystem) 을 콘텐츠 출처로 허용합니다.

- `'self'`
  - : 동일한 URL 체계와 포트를 포함하여 보호되는 파일의 원본을 참조합니다. 작은 따음표가 필수적으로 있어야 합니다. 일부 브라우저에서는 `blob` 와 `filesystem` 를 source 지시문에서 제외합니다. 이러한 콘텐츠 타입을 허용해야 하는 사이트는 데이터 attribute를 사용하여 지정할 수 있습니다.
- `'unsafe-inline'`
  - : 인라인 {{HTMLElement("script")}} 태그, `javascript:` URLs, 인라인 이벤트 핸들러, 그리고 인라인 {{HTMLElement("style")}} 태그와 같은 인라인 요소들을 모두 허용합니다. 작은 따음표를 사용해야만 합니다.
- `'unsafe-eval'`
  - : `eval()` 및 문자열에서 코드를 생성하는 함수의 사용을 허용합니다. 작은 따음표를 사용해야만 합니다.
- `'none'`
  - : 아무것도 참조 되지 않습니다. 즉 아무런 URL도 매치되지 않습니다. 작은 따음표를 사용해야만 합니다.
- 'nonce-\<base64-value>'
  - : 암호화 nonce 값을 이용하여 특정 인라인 스크립트에 대하여 허용합니다(nonce는 한번만 사용). 서버는 CSP정책을 전송할 때마다 고유한 nonce를 생성해야만 합니다. 리소스 정책을 우회하는 것은 간단한 일이기 때문에 의심 할 여지가 없는 nonce 값을 제공하는 것이 중요합니다. [unsafe inline script](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script) 예제를 참고해주세요. nonce는 `'unsafe-inline'` 와 함께 사용할 경우 모던 브라우저에서는 사용하게 되면 `'unsafe-inline'`가 무시되지만, 구형 브라우저에서는 nonce가 적용되지 않습니다.
- '\<hash-algorithm>-\<base64-value>'
  - : 스크립트 또는 스타일의 sha256, sha384 or sha512 해쉬. 이것은 대쉬: 로 구분된 해쉬를 사용된 암호화 알고리즘과 base64로 인코딩한 스크립트 및 스타일로 구성됩니다. 해쉬를 생성할 때 절대로 \<script> 또는 \<style> 태그를 포함하지말고 대소문자와 앞 뒤의 공백을 주의해야 합니다.[unsafe inline script](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script) 예제를 참고해주세요. CSP 2.0에서는 인라인 스크립트에서만 적용 가능하지만, CSP 3.0에서는 외부 스크립트를 `script-src` 에서 허용하기 위해서 사용합니다.
- 'strict-dynamic'
  - : The `strict-dynamic` source expression specifies that the trust explicitly given to a script present in the markup, by accompanying it with a nonce or a hash, shall be propagated to all the scripts loaded by that root script. At the same time, any whitelist or source expressions such as `'self'` or `'unsafe-inline'` will be ignored. See [script-src](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) for an example.

## Examples

### `default-src`의 상속 불가

다른 구문이 지정되면 default-src는 더 이상 영향을 주지 않습니다. 아래의 헤더는

```
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

다음과 같습니다:

```
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

## 명세서

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("script-src")}}
- {{CSP("style-src")}}
- {{CSP("worker-src")}}
