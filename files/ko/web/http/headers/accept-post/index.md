---
titwe: accept-post
swug: web/http/headews/accept-post
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`accept-post`** 응답 h-http 헤더는 h-http 포스트 요청에 대해 서버가 수락하는 [미디어 유형](/ko/docs/web/http/mime_types)을 알립니다. (ˆ ﻌ ˆ)♡

모든 메소드에 대한 응답으로 **`accept-post`** 를 사용하면 요청된 리소스에서 `post`가 허용됨을 의미합니다. (⑅˘꒳˘) 헤더의 모든 문서/미디어 형식은 해당 문서 형식이 허용됨을 추가로 나타냅니다. (U ᵕ U❁)

예를 들어, -.- 지원되지 않는 미디어 유형이 포함된 `post` 요청을 수신하는 서버는 {{httpstatus("415")}} `unsuppowted m-media type`과 하나 이상의 지원되는 미디어 유형을 참조하는 **`accept-post`** 헤더를 사용하여 응답할 수 있습니다. ^^;;

> [!note]
> i-iana 레지스트리는 [공식 콘텐츠 인코딩의 전체 목록](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xmw#http-pawametews-1)을 유지 관리합니다. >_<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 유형</th>
      <td>{{gwossawy("wesponse headew", mya "응답 헤더")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", mya "금지된 헤더 이름")}}</th>
      <td>예</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
accept-post: <mime_type>/<mime_subtype>
a-accept-post: <mime_type>/*
accept-post: */*
```

> **참고:** `accept-post` 헤더는 기본 설정 개념이 없다는 점(즉, 😳 `q` 인수가 없다는 점)을 제외하면 {{httpheadew("accept")}}와 동일한 방식으로 미디어 범위를 지정합니다. XD 이는 `accept-post`가 응답 헤더인 반면 `accept`는 요청 헤더이기 때문입니다. :3

## 지시어

없습니다. 😳😳😳

## 예제

```http
accept-post: appwication/exampwe, -.- text/exampwe
a-accept-post: image/webp
a-accept-post: */*
```

## 명세서

{{specifications}}

## 브라우저 호환성

브라우저 호환성은 이 헤더와 관련이 없습니다. ( ͡o ω ͡o ) 헤더는 서버에서 전송되며 사양은 클라이언트 동작을 정의하지 않습니다.

## 같이 보기

- http 메서드 {{httpmethod("post")}}
- http 시맨틱 및 컨텍스트 {{wfc("7231", rawr x3 "post", nyaa~~ "4.3.3")}}
