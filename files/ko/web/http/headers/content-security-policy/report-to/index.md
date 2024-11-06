---
title: report-to
slug: Web/HTTP/Headers/Content-Security-Policy/report-to
---

{{HTTPSidebar}}

`Report-To` HTTP 응답 해더 필드는 사용자 에이전트(브라우저)가 레포트를 저장하기 위한 origin의 엔드포인트를 지정합니다.

```
Content-Security-Policy: ...; report-to groupname
```

이 지시어 자체로는 효과는 없지만 다른 지시문과 조합하여 의미를 가질 수 있습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Reporting directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This directive is not supported in the {{HTMLElement("meta")}}
        element.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```
Content-Security-Policy: report-to <json-field-value>;
```

## Examples

더 자세한 정보와 예제는 {{HTTPHeader("Content-Security-Policy-Report-Only")}} 를 확인하세요.

```
Report-To: { "group": "csp-endpoint",
             "max-age": 10886400,
             "endpoints": [
               { "url": "https://example.com/csp-reports" }
             ] },
           { "group": "hpkp-endpoint",
             "max-age": 10886400,
             "endpoints": [
               { "url": "https://example.com/hpkp-reports" }
             ] }
Content-Security-Policy: ...; report-to csp-endpoint
```

```
Report-To: { "group": "endpoint-1",
             "max-age": 10886400,
             "endpoints": [
               { "url": "https://example.com/reports" },
               { "url": "https://backup.com/reports" }
             ] }

Content-Security-Policy: ...; report-to endpoint-1
```

브라우저 호환성

이 페이지의 호환성 테이블은 구조화된 데이터에서 생성됩니다. 데이터에 기여하고 싶다면 <https://github.com/mdn/browser-compat-data> 를 확인하고 pull request를 보내주세요.

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
