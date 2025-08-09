---
title: Server-Timing
slug: Web/HTTP/Reference/Headers/Server-Timing
original_slug: Web/HTTP/Headers/Server-Timing
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

**`Server-Timing`** 헤더는 요청-응답 주기에 관한 여러 메트릭과 그 설명을 전달하는 역할을 합니다. 사용자의 브라우저 내 개발자 도구나 {{domxref("PerformanceServerTiming")}} 인터페이스를 통해 백엔드 서버의 타이밍 메트릭(예: 데이터베이스 읽기/쓰기, CPU 처리 시간, 파일 시스템 접근 등)을 확인할 수 있게 도와줍니다.

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

## 구문

`Server-Timing` 헤더의 구문은 메트릭을 여러 가지 방식으로 전달할 수 있게 해줍니다. 서버 메트릭 이름만으로, 값과 함께, 값과 설명과 함께 또는 설명만으로 전달할 수 있습니다.

이 헤더에는 쉼표를 사용하여 여러 메트릭을 나열할 수 있습니다. 각 메트릭은 이름을 가지며, 필요에 따라 기간과 설명을 추가할 수 있습니다. 이들 요소는 세미콜론으로 분리됩니다.

기간 구성 요소는 `"dur=23.2"`와 같이 `"dur"` 뒤에 `"="`, 값이 오는 문자열로 구성됩니다.
설명 구성 요소는 `"desc=DB lookup"`와 같이 `"desc"` 뒤에 `"="`, 값이 오는 문자열로 구성됩니다.

명세서에서는 HTTP 오버헤드를 줄이기 위해 이름과 설명을 되도록이면 간결하게 하고, 약어를 사용하거나 필요에 따라 선택적 값을 생략하는 것이 좋다고 권장하고 있습니다.

```http
// Single metric without value
Server-Timing: missedCache

// Single metric with value
Server-Timing: cpu;dur=2.4

// Single metric with description and value
Server-Timing: cache;desc="Cache Read";dur=23.2

// Two metrics with value
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing as trailer
Trailer: Server-Timing
--- response body ---
Server-Timing: total;dur=123.4
```

## 개인정보 보호 및 보안

`Server-Timing` 헤더는 애플리케이션과 인프라의 민감한 정보를 노출할 수 있습니다. 서버측에서 언제, 누구에게 어떤 메트릭을 반환할지를 제어하는 것을 고려해야합니다. 예를 들어 메트릭은 인증 받은 사용자에게만 보여주고, 일반 사용자에게는 아무런 정보도 제공하지 않는 방식을 선택할 수 있습니다.

## PerformanceServerTiming 인터페이스

브라우저의 개발자 도구에서 `Server-Timing` 헤더의 메트릭을 볼 수 있는 것뿐만 아니라, {{domxref("PerformanceServerTiming")}} 인터페이스를 통해 도구는 JavaScript에서 메트릭을 자동으로 수집하고 분석할 수 있습니다. 이 인터페이스는 동일한 출처에만 제한되어 있지만, {{HTTPHeader("Timing-Allow-Origin")}} 헤더를 활용해 서버 메트릭을 접근할 수 있는 도메인들을 명시할 수 있습니다. 이 인터페이스는 일부 브라우저에서는 보안된 환경(HTTPS)에서만 이용 가능합니다.

`Server-Timing` 헤더의 각 구성 요소는 다음과 같이 {{domxref("PerformanceServerTiming")}}의 속성에 연결됩니다.

- `"name"` -> {{domxref("PerformanceServerTiming.name")}}
- `"dur"` -> {{domxref("PerformanceServerTiming.duration")}}
- `"desc"` -> {{domxref("PerformanceServerTiming.description")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("PerformanceServerTiming")}}
