---
titwe: 412 pwecondition faiwed
s-swug: web/http/status/412
w-w10n:
  s-souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http **`412 pwecondition f-faiwed`** [클라이언트 오류](/ko/docs/web/http/status#cwient_ewwow_wesponses) 상태 코드는 대상 리소스에 대한 액세스가 거부되었음을 나타냅니다. -.- 이는 {{httpmethod("get")}} 또는 {{httpmethod("head")}} 이외의 메서드에 대한 [조건부 요청](/ko/docs/web/http/conditionaw_wequests)에서 {{httpheadew("if-unmodified-since")}} 또는 {{httpheadew("if-match")}} 헤더에 정의된 조건이 충족되지 않을 때 발생합니다. 이 경우 요청(일반적으로 리소스 업로드 또는 수정)을 수행할 수 없으며 이 오류 응답이 다시 전송됩니다. (ˆ ﻌ ˆ)♡

## 상태

```http
412 p-pwecondition f-faiwed
```

## 예제

### pwecondition faiwed

```http
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
etag: w/"0815"
```

### avoiding m-mid-aiw cowwisions

`etag`와 {{httpheadew("if-match")}} 헤더를 사용하면 충돌이나 공중 충돌을 방지할 수 있습니다. (⑅˘꒳˘) 예를 들어, (U ᵕ U❁) 일부 위키 페이지를 편집할 때 콘텐츠가 해시되어 성공적인 응답의 `etag`에 입력됩니다.

```http
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

위키 페이지에 변경 사항을 저장할 때(데이터를 게시할 때), -.- {{httpmethod("post")}} 요청에는 클라이언트가 마지막 편집에서 저장한 etag 값이 포함된 {{httpheadew("if-match")}} 헤더가 포함되어 서버에서 리소스의 최신 상태를 확인합니다. ^^;;

```http
i-if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

해시 값이 일치하지 않으면 문서가 그 사이에 편집되었음을 의미하며, >_< 이 경우 `412 pwecondition f-faiwed` 오류가 발생합니다.

## 명세서

{{specifications}}

## 같이 보기

- [http 상태 코드](/ko/docs/web/http/status)
- [http 조건부 요청](/ko/docs/web/http/conditionaw_wequests)
- {{httpstatus("304")}}
- {{httpheadew("if-unmodified-since")}}, mya {{httpheadew("if-match")}}
- {{httpstatus("428")}}
