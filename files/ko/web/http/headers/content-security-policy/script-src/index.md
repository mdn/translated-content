---
title: "CSP: script-src"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src`** 는 자바스크립트트에 대한 검증된 출처를 지정합니다. 여기에는 {{HTMLElement("script")}} 요소에서 직접 호출한 URL뿐만 아니라, 인라인 스크립트 이벤트 핸들러(`onclick`) 및 스크립트를 실행할 수 있는 [XSLT stylesheets](/ko/docs/Web/XSLT) 가 포함됩니다.

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

하나 이상의 출처가 `script-src` 정책에 의해서 허용될 수 있습니다:

```
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src <source> <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## 예제

### Violation case

주어진 CSP 헤더:

```bash
Content-Security-Policy: script-src https://example.com/
```

아래 스크립트가 차단되어서 로드 또는 실행되지 않습니다:

```html
<script src="https://not-example.com/js/library.js"></script>
```

인라인 스크립트도 실행되지 않습니다:

```html
<button id="btn" onclick="doSomething()"></button>
```

{{domxref("EventTarget.addEventListener", "addEventListener")}}를 호출하는 것으로 대체해야 합니다.:

```js
document.getElementById("btn").addEventListener("click", doSomething);
```

### 안전하지 않은 인라인 스크립트

> **참고:** 인라인 스타일 및 인라인 스크립트를 허용하지 않는 것이 CSP가 제공하는 가장 큰 보안 이점 중 하나 입니다. 그러나, 인라인 스크립트 및 스타일을 사용해야만 한다면 몇가지 방법을 제공합니다.

인라인 스크립트 및 인라인 이벤트 핸들러를 허용하려면, `'unsafe-inline'`, 인라인 태그에 정의한 값과 동일한 nonce-source 또는 hash-source를 지정할 수 있습니다.

```bash
Content-Security-Policy: script-src 'unsafe-inline';
```

위의 CSP는 {{HTMLElement("script")}} 태그를 허용합니다

```html
<script>
  var inline = 1;
</script>
```

nonce-source를 사용하면 특정 인라인 스크립트 태그만 허용 할 수 있습니다:

```bash
Content-Security-Policy: script-src 'nonce-2726c7f26c'
```

{{HTMLElement("script")}} 태그에 동일한 nonce를 설정해야 합니다 :

```html
<script nonce="2726c7f26c">
  var inline = 1;
</script>
```

또는, 인라인 스크립트에서 해시를 설정할 수 도 있습니다. CSP는 sha256, sha384 and sha512를 지원합니다.

```bash
Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='
```

해시를 생성할 때에는 {{HTMLElement("script")}} 태그를 포함하지 말고, 대소문자, 태그의 앞뒤 공백이 포함되어야 하는 것을 유의해주십시요.

```html
<script>
  var inline = 1;
</script>
```

### 안전하지 않은 eval 표현식

`'unsafe-eval'` 출처 표현식은 문자열에서 코드를 생성하는 여러 스크립트 실행 메소드를 제어합니다. 만약`'unsafe-eval'` 이 `script-src` 에 정의되어 있지 않으면, 아래믜 명령어는 차단되며 아무런 효과가 일어나지 않습니다.

- [`eval()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Function()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)
- 아래와 같이 문자열 리터럴을 전달할 때 :
  `window.setTimeout("alert(\"Hello World!\");", 500);`

  - {{domxref("window.setTimeout")}}
  - {{domxref("window.setInterval")}}
  - {{domxref("window.setImmediate")}}

- {{domxref("window.execScript")}} {{non-standard_inline}} (IE < 11 only)

### `strict-dynamic`

The `'strict-dynamic`' source expression specifies that the trust explicitly given to a script present in the markup, by accompanying it with a nonce or a hash, shall be propagated to all the scripts loaded by that root script. At the same time, any whitelist or source expressions such as `'self'` or `'unsafe-inline'` will be ignored. For example, a policy such as `script-src 'strict-dynamic' 'nonce-R4nd0m' https://whitelisted.com/` would allow loading of a root script with `<script nonce="R4nd0m" src="https://example.com/loader.js">` and propogate that trust to any script loaded by `loader.js`, but disallow loading scripts from `https://whitelisted.com/` unless accompanied by a nonce or loaded from a trusted script.

```bash
script-src 'strict-dynamic' 'nonce-someNonce'
```

_Or_

```bash
script-src 'strict-dynamic' 'sha256-base64EncodedHash'
```

It is possible to deploy `strict-dynamic` in a backwards compatible way, without requiring user-agent sniffing.
The policy:

```bash
script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'
```

will act like`'unsafe-inline' https:` in browsers that support CSP1, `https: 'nonce-abcdefg'` in browsers that support CSP2, and `'nonce-abcdefg' 'strict-dynamic'` in browsers that support CSP3.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
