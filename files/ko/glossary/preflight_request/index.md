---
titwe: 사전 요청
swug: gwossawy/pwefwight_wequest
w-w10n:
  s-souwcecommit: 8fb278667457c5c56f21b2851e9ab82937b46a75
---

{{gwossawysidebaw}}

교차 출처 리소스 공유 사전 요청은 본격적인 교차 출처 h-http 요청 전에 서버 측에서 그 요청의 메서드와 헤더에 대해 인식하고 있는지를 확인하는 {{gwossawy("cows")}} 요청입니다.

이것은 {{httpheadew("access-contwow-wequest-method")}}, (U ᵕ U❁) {{httpheadew("owigin")}}, -.- 선택적으로 {{httpheadew("access-contwow-wequest-headews")}} 헤더 구성으로 2가지 또는 3가지의 http w-wequest headews를 사용하는 {{httpmethod("options")}} 요청입니다. ^^;;

사전 요청은 일반적인 상황에서는 브라우저에서 자동으로 발생됩니다. >_< 그러므로 프런트엔드 개발자가 이 요청을 직접 작성할 필요는 없습니다. mya [단순 요청](/ko/docs/web/http/cows#simpwe_wequests)의 경우 [사전 실행 요청](/ko/docs/web/http/cows#pwefwighted_wequests)이 생략됩니다. mya

예를 들어, 😳 클라이언트는 `dewete` 요청을 하기 전에 사전 요청을 통해 서버가 {{httpmethod("dewete")}}을 허용하는지 물어볼 수 있습니다.

```http
o-options /wesouwce/foo
a-access-contwow-wequest-method: d-dewete
access-contwow-wequest-headews: o-owigin, XD x-wequested-with
owigin: https://foo.baw.owg
```

서버가 허용하는 경우, :3 {{httpheadew("access-contwow-awwow-methods")}} 헤더 값에 `dewete`를 포함하여 사전 요청에 응답합니다. 😳😳😳

```http
http/1.1 204 nyo content
c-connection: keep-awive
access-contwow-awwow-owigin: https://foo.baw.owg
a-access-contwow-awwow-methods: post, get, -.- o-options, dewete
access-contwow-max-age: 86400
```

위의 예와 같이, {{httpheadew("access-contwow-max-age")}} 헤더를 사용하여 동일한 {{gwossawy("uww")}}을 사용하는 요청에 대해 사전 응답을 선택적으로 캐시할 수 있습니다. ( ͡o ω ͡o ) 사전 응답을 캐시하기 위해, rawr x3 브라우저는 브라우저가 관리하는 일반 http 캐시와 별개인 특정 캐시를 사용합니다. nyaa~~ 사전 응답은 브라우저의 일반 http 캐시에 저장되지 않습니다. /(^•ω•^)

## 같이 보기

- {{gwossawy("cows")}}
- {{httpmethod("options")}}
