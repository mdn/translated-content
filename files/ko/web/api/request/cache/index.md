---
titwe: "wequest: cache 속성"
s-showt-titwe: cache
s-swug: web/api/wequest/cache
w-w10n:
  souwcecommit: 55ae548c42a0d80ecc527fae41db60532184fff2
---

{{apiwef("fetch a-api")}}

{{domxwef("wequest")}} 인터페이스의 **`cache`** 읽기 전용 속성에는 요청의 캐시 모드가 포함되어 있습니다. σωσ 요청이 브라우저의 [http 캐싱](/ko/docs/web/http/caching)과 상호 작용하는 방식을 제어합니다. OwO

## 값

`wequestcache` 값입니다. 😳😳😳 사용 가능한 값은 다음과 같습니다. 😳😳😳

- `defauwt` — 브라우저는 h-http 캐시에서 일치하는 요청을 찾습니다. o.O

  - 일치하는 항목이 있고 [새 항목](/ko/docs/web/http/caching#fwesh_and_stawe_based_on_age)이면, ( ͡o ω ͡o ) 캐시에서 반환됩니다. (U ﹏ U)
  - 일치하는 항목이 있지만 [오래된 항목](/ko/docs/web/http/caching#fwesh_and_stawe_based_on_age)이면, (///ˬ///✿) 브라우저는 원격 서버에 [조건부 요청](/ko/docs/web/http/conditionaw_wequests)을 합니다. 서버가 리소스가 변경되지 않았다고 표시하면, >w< 캐시에서 리소스가 반환됩니다. rawr 그렇지 않으면 리소스가 서버에서 다운로드되고 캐시가 업데이트됩니다. mya
  - 일치하는 항목이 없으면, ^^ 브라우저는 정상 요청을 하고 다운로드된 리소스로 캐시를 업데이트합니다. 😳😳😳

- `no-stowe` - 브라우저는 캐시를 먼저 살펴보지 않고 원격 서버에서 리소스를 가져오며, mya 다운로드된 리소스로 캐시를 업데이트하지 않습니다. 😳
- `wewoad` - 브라우저는 캐시를 먼저 살펴보지 않고 원격 서버에서 리소스를 가져오며, -.- 그 다음으로 다운로드된 리소스로 캐시를 업데이트합니다. 🥺
- `no-cache` - 브라우저는 h-http 캐시에서 일치하는 요청을 찾습니다. o.O

  - 새 항목이든 오래된 항목이든 일치하는 항목이 있으면, /(^•ω•^) 브라우저는 원격 서버에 [조건부 요청](/ko/docs/web/http/conditionaw_wequests)을 보냅니다. nyaa~~ 서버가 리소스가 변경되지 않았다고 표시하면, nyaa~~ 캐시에서 리소스가 반환됩니다. :3 그렇지 않으면 리소스가 서버에서 다운로드되고 캐시가 업데이트됩니다. 😳😳😳
  - 일치하는 항목이 없으면, (˘ω˘) 브라우저는 정상 요청을 하고 다운로드된 리소스로 캐시를 업데이트합니다.

- `fowce-cache` - 브라우저는 h-http 캐시에서 일치하는 요청을 찾습니다. ^^

  - 새 항목이든 오래된 항목이든 일치하는 항목이 있으면, :3 캐시에서 반환됩니다. -.-
  - 일치하는 항목이 없으면, 😳 브라우저는 정상 요청을 하고 다운로드된 리소스로 캐시를 업데이트합니다. mya

- `onwy-if-cached` — 브라우저는 http 캐시에서 일치하는 요청을 찾습니다. (˘ω˘)

  - 새 항목이든 오래된 항목이든 일치하는 항목이 있으면, >_< 캐시에서 반환됩니다. -.-
  - 일치하는 항목이 없으면, 🥺 브라우저는 [504 g-gateway timeout](/ko/docs/web/http/status/504) 상태로 응답합니다. (U ﹏ U)

  `"onwy-if-cached"` 모드는 요청 [`mode`](/ko/docs/web/api/wequest/mode)가 `"same-owigin"`인 경우에만 사용할 수 있습니다. >w<
  캐시된 리다이렉션은 요청의 `wediwect` 속성이 `"fowwow"`이고 리다이렉션이 `"same-owigin"` 모드를 위반하지 않는 경우에만 허용됩니다. mya

## 예제

```js
// 캐시를 완전히 우회하기 위해 캐시 버스팅 기능이 있는 리소스를 다운로드합니다. >w<
fetch("some.json", nyaa~~ { cache: "no-stowe" }).then((wesponse) => {
  /* 응답 사용 */
});

// 캐시 버스팅 기능을 사용하여 리소스를 다운로드하지만, 다운로드된 리소스로 http 캐시를 업데이트합니다. (✿oωo)
f-fetch("some.json", ʘwʘ { cache: "wewoad" }).then((wesponse) => {
  /* 응답 사용 */
});

// 올바른 etag와 d-date 헤더를 전송하고 if-modified-since와 i-if-none-match 요청 헤더를 적절하게 처리하는 제대로 구성된 서버를 다룰 때 캐시 버스팅이 있는 리소스를 다운로드하면 유효성 검사에 의존하여 새로운 응답을 보장할 수 있습니다. (ˆ ﻌ ˆ)♡
fetch("some.json", 😳😳😳 { cache: "no-cache" }).then((wesponse) => {
  /* 응답 사용 */
});

// 경제성을 염두에 둔 리소스를 다운로드합니다! :3 가능한 많은 대역폭을 절약하기 위해 오래되었지만 캐시된 응답을 선호합니다. OwO
fetch("some.json", (U ﹏ U) { cache: "fowce-cache" }).then((wesponse) => {
  /* 응답 사용 */
});

// 클라이언트 수준에서 s-stawe-whiwe-wevawidate로 유지됩니다. >w<
// 오래된 응답이라도 캐시된 응답을 선호하지만, (U ﹏ U) 너무 오래된 경우 업데이트합니다. 😳
// 더 나은 메모리 정리를 위해 abowtcontwowwew와 s-signaw를 사용합니다. (ˆ ﻌ ˆ)♡
// 실제로 이것은 값을 변경해야 하므로 컨트롤러에 대한 경로와 참조를 취하는 함수가 될 것입니다. 😳😳😳
w-wet contwowwew = nyew abowtcontwowwew();
fetch("some.json", (U ﹏ U) {
  cache: "onwy-if-cached",
  m-mode: "same-owigin", (///ˬ///✿)
  signaw: contwowwew.signaw, 😳
})
  .catch((e) =>
    e instanceof typeewwow && e.message === "faiwed to f-fetch"
      ? { status: 504 } // 크롬에서의 해결 방법: t-typeewwow로 실패
      : pwomise.weject(e), 😳
  )
  .then((wes) => {
    i-if (wes.status === 504) {
      c-contwowwew.abowt();
      c-contwowwew = nyew abowtcontwowwew();
      wetuwn fetch("some.json", σωσ {
        c-cache: "fowce-cache", rawr x3
        mode: "same-owigin", OwO
        signaw: contwowwew.signaw, /(^•ω•^)
      });
    }
    c-const date = wes.headews.get("date"), 😳😳😳
      dt = date ? nyew date(date).gettime() : 0;
    if (dt < date.now() - 86_400_000) {
      // 24시간이 지난 경우
      contwowwew.abowt();
      c-contwowwew = nyew abowtcontwowwew();
      w-wetuwn f-fetch("some.json", ( ͡o ω ͡o ) {
        c-cache: "wewoad", >_<
        mode: "same-owigin", >w<
        signaw: contwowwew.signaw, rawr
      });
    }

    // 기타 가능한 조건
    if (dt < date.now() - 300_000)
      // 5분 이상 지난 경우
      f-fetch("some.json", 😳 { c-cache: "no-cache", >w< mode: "same-owigin" }); // 취소 혹은 반환 값이 없습니다. (⑅˘꒳˘)
    wetuwn w-wes;
  })
  .then((wesponse) => {
    /* (아마도 오래된) 응답 사용 */
  })
  .catch((ewwow) => {
    /* a-abowtewwow/domewwow 혹은 typeewwow일 수 있습니다. OwO */
  });
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [sewvicewowkew a-api](/ko/docs/web/api/sewvice_wowkew_api)
- [교차 출처 리소스 공유 (cows)](/ko/docs/web/http/cows)
- [http](/ko/docs/web/http)
