---
title: Match patterns in extension manifests
slug: Mozilla/Add-ons/WebExtensions/Match_patterns
---

{{AddonSidebar}}

일치 패턴은 URL 그룹을 지정하는 방식입니다. 일치 패턴은 특정 URL 집단과 일치합니다. 일치 패턴은 몇몇의 WebExtensions API에서 사용되며, 대부분은 특히 어떤 문서로 콘텐츠 스크립트를 로드할지, 그리고 [`webRequest`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) 수신기에 추가할 URL를 지정하는 데 사용됩니다.

일치 패턴을 사용하는 API는 보통 일치 매턴의 목록을 허용하고, URL이 목록 내 어떤 패턴과 일치할 시 적절한 동작을 수행합니다. 예시로 manifest.json의 [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 키를 확인해 보세요.

## 일치 패턴 구조

> **참고:** 일부 브라우저는 특정 스키마를 지원하지 않습니다.
> 자세한 정보는 [브라우저 호환성 테이블](#브라우저_호환성)에서 확인하세요.

모든 일치 패턴은 문자열로 표현됩니다. 특별한 패턴인 [`<all_urls>`](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls)를 제외하고, 일치 패턴은 다음의 세 부분 _scheme_, _host_, _path_ 를 포함합니다. 스키마와 호스트는 `://`로 구분됩니다.

```
<scheme>://<host><path>
```

### 스키마

_scheme_ 부분은 아래 두 가지 형태 중 하나를 취합니다.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">형태</th>
      <th scope="col">일치</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>
        "http", "https", 그리고 일부 브라우저에서는
        <a href="/en-US/docs/Web/API/WebSockets_API">"ws", "wss"</a>에서만
      </td>
    </tr>
    <tr>
      <td>
        <code>http</code>, <code>https</code>, <code>ws</code>,
        <code>wss</code>, <code>ftp</code>, <code>data</code>,
        <code>file</code>, <code>(chrome-)extension</code> 중 하나
      </td>
      <td>지정된 스키마만</td>
    </tr>
  </tbody>
</table>

### host

_host_ 부분은 아래 세 가지 형태 중 하나를 취합니다.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">형태</th>
      <th scope="col">일치</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>모든 호스트</td>
    </tr>
    <tr>
      <td><code>*.</code> 뒤에 호스트명의 일부</td>
      <td>지정된 호스트와 모든 하위 도메인</td>
    </tr>
    <tr>
      <td>와일드카드 없는 전체 호스트명</td>
      <td>지정된 호스트만</td>
    </tr>
  </tbody>
</table>

_host_ 는 포트 번호를 포함하지 않습니다.

_scheme_ 가 "file"일 경우에만 _host_ 는 선택 사항입니다.

와일드카드는 시작 부분에만 나타나야 합니다.

### 경로

_path_ 부분은 `/`로 시작해야 합니다.

그 다음 와일드카드 `*`와 URL 경로 또는 쿼리 문자열에 허용된 문자의 조합을 포함할 수 있습니다. _host_ 와 달리 _path_ 부분은 와일드카드 `*`를 중간이나 끝 부분에 포함할 수 있고, 두 번 이상 사용할 수 있습니다.

_path_ 의 값은 URL 경로에 [URL 쿼리 문자열](https://en.wikipedia.org/wiki/Query_string)이 더해진 문자열과 대조하게 됩니다. URL에 쿼리 문자열이 존재할 경우, 이 둘 사이에 `?`를 포함합니다. 예를 들어, URL 경로가 `foo.bar`로 끝나는 모든 도메인의 URL과 일치하길 원하는 경우, `['*://*/*foo.bar', '*://*/*foo.bar?*']`와 같이 일치 패턴의 배열을 사용해야 합니다. 마지막 `*`를 URL 경로의 일부가 아닌 URL 쿼리 문자열로 적용하기 위해서 단순히 `bar*`가 아닌 `?*`가 필요합니다.

[URL 프래그먼트 식별자](https://en.wikipedia.org/wiki/Fragment_identifier)나 그 앞에 오는 `#`은 _path_ 의 일부로 간주되지 않습니다.

> **참고:** 경로 패턴 문자열은 포트 번호를 포함하면 안 됩니다. `http://localhost:1234/*`처럼 포트 번호를 추가하면 일치 패턴이 무시됩니다. 그러나, `http://localhost:1234`는 `http://localhost/*`와 일치됩니다.

### \<all_urls>

`<all_urls>`은 "http", "https", "ws", "wss", "ftp", "data", "file"과 같이 지원되는 스키마의 모든 URL과 일치하는 특별한 값입니다.

## 예시

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">패턴</th>
      <th scope="col">일치 예시</th>
      <th scope="col">비일치 예시</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>&#x3C;all_urls></code></p>
        <p>모든 URL과 일치</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
        <p><code>ftp://files.somewhere.org/</code></p>
      </td>
      <td>
        <p><code>resource://a/b/c/</code><br />(지원하지 않는 스키마)</p>
        <p>
          <code>ftps://files.somewhere.org/</code><br />(지원하지 않는 스키마)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*/*</code></p>
        <p>모든 HTTP, HTTPS, 웹소켓 URL과 일치</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
      </td>
      <td>
        <p><code>ftp://ftp.example.org/</code><br />(일치하지 않는 스키마)</p>
        <p><code>file:///a/</code><br />(일치하지 않는 스키마)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*.mozilla.org/*</code></p>
        <p>
          "mozilla.org"나 그 하위 도메일에서 호스팅되는 모든 HTTP, HTTPS, 웹소켓 URL과 일치
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>http://a.mozilla.org/</code></p>
        <p><code>http://a.b.mozilla.org/</code></p>
        <p><code>https://b.mozilla.org/path/</code></p>
        <p><code>ws://ws.mozilla.org/</code></p>
        <p><code>wss://secure.mozilla.org/something</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(일치하지 않는 스키마)</p>
        <p><code>http://mozilla.com/</code><br />(일치하지 않는 호스트)</p>
        <p><code>http://firefox.org/</code><br />(일치하지 않는 호스트)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://mozilla.org/</code></p>
        <p>
          정확히 "mozilla.org"에서만 호스팅되는 모든 HTTP, HTTPS, 웹소켓 URL과 일치
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>ws://mozilla.org/</code></p>
        <p><code>wss://mozilla.org/</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(일치하지 않는 스키마)</p>
        <p><code>http://a.mozilla.org/</code><br />(일치하지 않는 호스트)</p>
        <p><code>http://mozilla.org/a</code><br />(일치하지 않는 경로)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>ftp://mozilla.org/</code></p>
        <p>"ftp://mozilla.org/"와만 일치</p>
      </td>
      <td><code>ftp://mozilla.org</code></td>
      <td>
        <p><code>http://mozilla.org/</code><br />(일치하지 않는 스키마)</p>
        <p><code>ftp://sub.mozilla.org/</code><br />(일치하지 않는 호스트)</p>
        <p><code>ftp://mozilla.org/path</code><br />(일치하지 않는 경로)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path</code></p>
        <p>경로가 "path"인 모든 호스트의 HTTPS URL과 일치</p>
      </td>
      <td>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://a.mozilla.org/path</code></p>
        <p><code>https://something.com/path</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />(일치하지 않는 스키마)</p>
        <p><code>https://mozilla.org/path/</code><br />(일치하지 않는 경로)</p>
        <p><code>https://mozilla.org/a</code><br />(일치하지 않는 경로)</p>
        <p><code>https://mozilla.org/</code><br />(일치하지 않는 경로)</p>
        <p>
          <code>https://mozilla.org/path?foo=1</code><br />(URL 쿼리 스트링으로 인해 일치하지 않는 경로)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path/</code></p>
        <p>
          경로가 "path/"이고 URL 쿼리 스트링이 없는 모든 호스트의 HTTPS URL과 일치
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/path/</code></p>
        <p><code>https://a.mozilla.org/path/</code></p>
        <p><code>https://something.com/path</code>/</p>
      </td>
      <td>
        <p><code>http://mozilla.org/path/</code><br />(일치하지 않는 스키마)</p>
        <p><code>https://mozilla.org/path</code><br />(일치하지 않는 경로)</p>
        <p><code>https://mozilla.org/a</code><br />(일치하지 않는 경로)</p>
        <p><code>https://mozilla.org/</code><br />(일치하지 않는 경로)</p>
        <p>
          <code>https://mozilla.org/path/?foo=1</code
          ><br />(URL 쿼리 스트링으로 인해 일치하지 않는 경로)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*</code></p>
        <p>
          모든 URL 경로와 URL 쿼리 스트링과 함께 오직 "mozilla.org"의 HTTPS URL과 일치
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/</code></p>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://mozilla.org/another</code></p>
        <p><code>https://mozilla.org/path/to/doc</code></p>
        <p><code>https://mozilla.org/path/to/doc?foo=1</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />(일치하지 않는 스키마)</p>
        <p><code>https://mozilla.com/path</code><br />(일치하지 않는 호스트)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p>이 URL 또는 URL 조각이 포함된 이 URL과 일치</p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/a/b/c/#section1</code></p>
      </td>
      <td>그 외</td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*/b/*/</code></p>
        <p>
          중간에 "b"부분을 포함하는 경로를 가진 "mozilla.org"에서 호스팅되는 HTTPS URL
          문자열이 <code>/</code>로 끝난다면 쿼리 문자열을 포함하는 URL과 일치
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/d/b/f/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/#section1</code></p>
        <p><code>https://mozilla.org/a/b/c/d/?foo=/</code></p>
        <p>
          <code
            >https://mozilla.org/a?foo=21314&#x26;bar=/b/&#x26;extra=c/</code
          >
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/b/*/</code><br />(일치하지 않는 경로)</p>
        <p><code>https://mozilla.org/a/b/</code><br />(일치하지 않는 경로)</p>
        <p>
          <code>https://mozilla.org/a/b/c/d/?foo=bar</code><br />(URL 쿼리 스트링으로 인해 일치하지 않는 경로)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>file:///blah/*</code></p>
        <p>경로가 "blah"로 시작하는 모든 FILE URL과 일치</p>
      </td>
      <td>
        <p><code>file:///blah/</code></p>
        <p><code>file:///blah/bleh</code></p>
      </td>
      <td><code>file:///bleh/</code><br />(일치하지 않는 경로)</td>
    </tr>
  </tbody>
</table>

### 잘못된 일치 패턴

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">잘못된 패턴</th>
      <th scope="col">이유</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>resource://path/</code></td>
      <td>지원하지 않는 스키마</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org</code></td>
      <td>경로 없음</td>
    </tr>
    <tr>
      <td><code>https://mozilla.*.org/</code></td>
      <td>호스트 내 "*"는 시작에 위치해야 함</td>
    </tr>
    <tr>
      <td><code>https://*zilla.org/</code></td>
      <td>호스트 내 "*"는 유일한 문자이거나 뒤에 "."가 와야 함</td>
    </tr>
    <tr>
      <td><code>http*://mozilla.org/</code></td>
      <td>스키마 내 "*"는 유일한 문자여야 함</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org:80/</code></td>
      <td>호스트가 포트 번호가 포함되면 안 됨</td>
    </tr>
    <tr>
      <td><code>*://*</code></td>
      <td>빈 경로. "<code>*://*/*</code>"가 되어야 함</td>
    </tr>
    <tr>
      <td><code>file://*</code></td>
      <td>빈 경로. "<code>file:///*</code>"가 되어야 함</td>
    </tr>
  </tbody>
</table>

## 브라우저 호환성

{{Compat}}
