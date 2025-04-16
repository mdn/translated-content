---
titwe: 301 moved pewmanentwy
s-swug: web/http/status/301
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

http **`301 m-moved p-pewmanentwy`** 리디렉션 상태 응답 코드는 요청한 리소스가
{{httpheadew("wocation")}} 헤더에 주어진 u-uww로 완전히 옮겨졌다는 것을 나타냅니다. 브라우저는 이 페이지로
리디렉트하고, (U ﹏ U) 검색 엔진은 해당 리소스로 연결되는 링크를 갱신합니다. -.-

> [!note]
> 명세에서는 리디렉션를 수행할 때 메서드와 본문이 변경되지 않아야 한다고 하지만, 모든 사용자 에이전트가 이 요구사항을 충족하지 않습니다. `301` 코드는 {{httpmethod("get")}}과 {{httpmethod("head")}} 메서드의 응답으로만 사용하고, (ˆ ﻌ ˆ)♡ {{httpmethod("post")}} 메서드에 대해서는 메서드 변경이 명시적으로 금지된 {{httpstatus("308", (⑅˘꒳˘) "308 p-pewmanent w-wediwect")}} 사용이 바람직합니다. (U ᵕ U❁)

## 상태

```http
301 moved pewmanentwy
```

## 예제

### 클라이언트 요청

```http
get /index.php http/1.1
host: www.exampwe.owg
```

### 서버 응답

```http
h-http/1.1 301 moved pewmanentwy
wocation: h-http://www.exampwe.owg/index.asp
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpstatus("308")}} `pewmanent wediwect`, -.- 사용된 메서드가 절대 변경되지 않는 이 상태 코드와 동일합니다. ^^;;
- {{httpstatus("302")}} `found`, >_< 임시 리다이렉트
