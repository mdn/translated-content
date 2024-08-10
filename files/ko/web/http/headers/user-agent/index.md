---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
l10n:
  sourceCommit: 165f04fc4a77b053850bf6c5243831e1b17a2433
---

{{HTTPSidebar}}

**사용자 에이전트** {{Glossary("request header", "요청 헤더")}}는 서버와 네트워크 피어가 요청하는 애플리케이션, 운영체제, 제조업체, {{Glossary("user agent", "사용자 에이전트")}} 요청 버전을 식별하는 독특한 문자열입니다.

> [!WARNING]
> 브라우저별로 다른 웹 페이지 또는 서비스를 제공하는 것은 일반적으로 좋지 않은 생각입니다. 해당 이유에 대해서는 [사용자 에이전트를 사용한 브라우저 감지](/ko/docs/Web/HTTP/Browser_detection_using_the_user_agent)를 참고하세요.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">헤더 타입</th>
      <td>{{Glossary("Request header", "응답 헤더")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "금지된 헤더 이름")}}</th>
      <td>아니요</td>
    </tr>
  </tbody>
</table>

## 구문

```http
User-Agent: <product> / <product-version> <comment>
```

다음은 웹 브라우저의 일반적인 형식입니다.

```http
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### 지시어

- \<product>
  - : 이름, 개발 코드네임과 같은 식별자
- \<product-version>
  - : 제품의 버전 번호
- \<comment>
  - : 0개 이상의 자세한 내용을 포함하는 설명 (예: 하위 제품 정보)

## Firefox 사용자 에이전트 문자열

Firefox나 Gecko 기반 사용자 에이전트 문자열에 대한 더 많은 정보는 [Firefox 사용자 에이전트 문자열 참고서](/ko/docs/Web/HTTP/Headers/User-Agent/Firefox)를 확인하세요. Firefox 사용자 에이전트 문자열은 4개의 요소로 나누어져 있습니다.

```plain
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0`은 브라우저가 Mozilla와 호환 가능하다는 것을 나타내는 일반적인 토큰입니다. 역사적인 이유로 오늘날 거의 모든 브라우저는 이 토큰을 전송합니다.
2. **platform**은 브라우저가 작동하는 네이티브 플랫폼(Window, Mac, Linux, Android 등)과 휴대폰인 경우를 설명합니다. {{Glossary("Firefox OS")}} 휴대폰은 `Mobile`로 나오고, 웹 자체가 플랫폼입니다. **platform**은 여러 개의 "`;`"로 구분된 토큰들로 구성할 수 있습니다. 자세한 내용과 예제는 아래를 참고하세요.
3. **rv:geckoversion**은 "17.0"과 같은 Gecko의 릴리즈 버전을 나타냅니다. 최신 브라우저에서는 **geckoversion**은 **firefoxversion**와 같습니다.
4. **Gecko/geckotrail**은 브라우저가 Gecko 기반임을 나타냅니다. 데스크탑에서 **geckotrail**은 항상 `20100101`로 고정된 문자열입니다.
5. **Firefox/firefoxversion**은 Firefox 브라우저를 나타내고, "17.0"과 같은 버전을 제공합니다.

### 예제

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome 사용자 에이전트 문자열

Chrome / Chromium / Blink 기반 엔진의 사용자 에이전트 문자열은 Firefox와 유사합니다. 호환성을 위해 `KHTML, like Gecko`, `Safari`와 같은 문자열을 추가합니다.

### 예제

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera 사용자 에이전트 문자열

Opera 브라우저도 Blink 엔진 기반이기 때문에 Chrome 사용자 에이전트 문자열과 거의 같아 보이지만 `"OPR/<version>"`이 추가되어 있습니다.

### 예제

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

이전 Presto 기반 Opera 릴리즈에서는 아래와 같이 사용했습니다.

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Microsoft Edge 사용자 에이전트 문자열

Edge 브라우저도 Blink 엔진 기반으로 작동하기 때문에 `"Egd/<version>"`을 추가합니다.

### 예제

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Safari 사용자 에이전트 문자열

이 예제의 사용자 에이전트 문자열은 모바일 Safari 버전으로 `"Mobile"` 단어를 포함하고 있습니다.

### 예제

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## 크롤러 및 봇 사용자 에이전트 문자열

### 예제

```plain
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```plain
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## 라이브러리 및 네트워크 툴 사용자 에이전트 문자열

### 예제

```plain
curl/7.64.1
```

```plain
PostmanRuntime/7.26.5
```

## 기술 사양

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [User-Agent 감지의 역사와 체크리스트](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox 사용자 에이전트 문자열 참고서](/ko/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [사용자 에이전트를 사용한 브라우저 감지](/ko/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [Client hints(클라이언트 힌트)](/ko/docs/Web/HTTP/Client_hints)
