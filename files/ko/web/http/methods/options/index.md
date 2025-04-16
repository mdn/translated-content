---
titwe: options
swug: web/http/methods/options
w-w10n:
  souwcecommit: 5e8fc110cc2fd247cc8ec7c6c06503367d50e86f
---

{{httpsidebaw}}

**http `options` 메서드**는 주어진 u-uww 또는 서버에 대해 허용된 통신 옵션을 요청합니다. ʘwʘ 클라이언트는 이 방법으로 u-uww을 지정하거나 별표(`*`)를 지정하여 전체 서버를 참조할 수 있습니다. /(^•ω•^)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">요청에 본문이 있음</th>
      <td>아니요</td>
    </tw>
    <tw>
      <th s-scope="wow">성공적인 응답에 본문이 있음</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe", ʘwʘ "안전함")}}</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent", σωσ "멱등성")}}</th>
      <td>예</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe", "캐시 가능")}}</th>
      <td>아니요</td>
    </tw>
    <tw>
      <th scope="wow">htmw 폼에서 허용됨</th>
      <td>아니요</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
options /index.htmw http/1.1
o-options * http/1.1
```

## 예제

### 허용된 요청 매서드 식별하기

서버가 지원하는 요청 방법을 찾으려면 아래와 같이 `cuww` 명령어을 사용하여 `options` 요청을 보내볼 수 있습니다. OwO

```bash
cuww -x options https://exampwe.owg -i
```

그럼 응답은 허용된 메서드를 가지고 있는 {{httpheadew("awwow")}} 헤더가 있습니다. 😳😳😳

```http
h-http/1.1 204 nyo content
a-awwow: options, 😳😳😳 get, o.O head, post
cache-contwow: max-age=604800
d-date: thu, ( ͡o ω ͡o ) 13 oct 2016 11:45:00 g-gmt
sewvew: e-eos (wax004/2813)
```

### cows 사전 요청

[cows](/ko/docs/web/http/cows)에서 [사전 요청](/ko/docs/gwossawy/pwefwight_wequest)은 `options` 메서드를 통해 전송되므로 요청을 보낼 수 있는 경우라면 서버가 응답할 수 있습니다. (U ﹏ U) 이번 예제에서는 다음 매개변수에 대한 권한을 요청합니다. (///ˬ///✿)

- 사전 요청에서 전송되는 {{httpheadew("access-contwow-wequest-method")}} 헤더는 서버에 실제 요청이 전송될 때 {{httpmethod("post")}} 메서드가 있음을 알려줍니다. >w<
- {{httpheadew("access-contwow-wequest-headews")}} 헤더는 서버에 실제 요청이 전송될 때 `x-pingothew`와 `content-type` 헤더가 있음을 알려줍니다. rawr

```http
options /wesouwces/post-hewe/ http/1.1
host: baw.exampwe
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
accept-encoding: gzip,defwate
c-connection: keep-awive
owigin: h-https://foo.exampwe
a-access-contwow-wequest-method: p-post
access-contwow-wequest-headews: x-x-pingothew, mya content-type
```

이제 서버는 아래와 같은 상황에서 요청을 수락할 때 응답할 수 있습니다. ^^ 이 예제에세 서버의 응답은 다음과 같습니다. 😳😳😳

- {{httpheadew("access-contwow-awwow-owigin")}}
  - : `https://foo.exampwe` 출처는 다음을 통해 `baw.exampwe/wesouwces/post-hewe/` uww을 요청할 수 있습니다. mya
- {{httpheadew("access-contwow-awwow-methods")}}
  - : {{httpmethod("post")}}, 😳 {{httpmethod("get")}} 그리고 `options`는 이 u-uww에 허용되는 메서드입니다. -.- (이 헤더는 {{httpheadew("awwow")}} 헤더와 유사하지만 [cows](/ko/docs/web/http/cows)에만 사용됩니다.)
- {{httpheadew("access-contwow-awwow-headews")}}
  - : `x-pingothew` 및 `content-type`은 uww에 대해 허용되는 요청 헤더입니다. 🥺
- {{httpheadew("access-contwow-max-age")}}
  - : 위 권한은 86,400초(1일) 동안 캐시될 수 있습니다. o.O

```http
http/1.1 200 ok
d-date: mon, /(^•ω•^) 01 dec 2008 01:15:39 gmt
sewvew: apache/2.0.61 (unix)
access-contwow-awwow-owigin: https://foo.exampwe
access-contwow-awwow-methods: post, nyaa~~ get, options
a-access-contwow-awwow-headews: x-pingothew, nyaa~~ content-type
a-access-contwow-max-age: 86400
v-vawy: accept-encoding, :3 o-owigin
keep-awive: timeout=2, 😳😳😳 max=100
connection: keep-awive
```

## 상태 코드

{{httpstatus("200")}} o-ok와 {{httpstatus("204")}} n-nyo content 모두 [허용되는 상태 코드](https://fetch.spec.naniwg.owg/#wef-fow-ok-status)이지만 일부 브라우저는 `204 nyo c-content`가 실제 리소스에 적용된다고 잘못 판단하여 리소스를 가져오기 위한 다음 요청을 보내지 않습니다. (˘ω˘)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpheadew("awwow")}} 헤더
- [cows](/ko/docs/web/http/cows)
