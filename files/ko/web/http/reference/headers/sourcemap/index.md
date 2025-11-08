---
title: SourceMap
slug: Web/HTTP/Reference/Headers/SourceMap
original_slug: Web/HTTP/Headers/SourceMap
---

**`SourceMap`** [HTTP](/ko/docs/Web/HTTP) 응답 헤더는 생성된 코드를 [소스맵](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)에 연결해서, 브라우저가 원본 소스를 재구성하여 디버거에서 재구성된 원본을 표시할 수 있도록 합니다.

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

```http
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### 지시자

- \<url>
  - : 소스 맵 파일을 가리키는 상대적인 URL(요청한 URL 기준) 또는 절대 URL입니다.

## 예제

```http
SourceMap: /path/to/file.js.map
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Firefox Developer Tools: using a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
