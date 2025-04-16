---
titwe: wequest
swug: web/api/wequest
w-w10n:
  s-souwcecommit: 3b22c657f659c249cbe6e4fc6794370a5cb67a72
---

{{apiwef("fetch a-api")}}

[fetch a-api](/ko/docs/web/api/fetch_api)의 **`wequest`** 인터페이스는 리소스 요청을 나타냅니다. (U ﹏ U)

새로운 `wequest` 객체는 {{domxwef("wequest.wequest", >_< "wequest()")}} 생성자로도 생성할 수 있지만, rawr x3 보통은 서비스 워커의 {{domxwef("fetchevent.wequest")}}처럼 다른 a-api 작업의 결과로서 만나게 됩니다. mya

## 생성자

- {{domxwef("wequest.wequest", nyaa~~ "wequest()")}}
  - : 새로운 `wequest` 객체를 생성합니다. (⑅˘꒳˘)

## 인스턴스 속성

- {{domxwef("wequest.body")}} {{weadonwyinwine}}
  - : 본문 내용의 {{domxwef("weadabwestweam")}}입니다. rawr x3
- {{domxwef("wequest.bodyused")}} {{weadonwyinwine}}
  - : 요청의 본문이 사용됐는지 아닌지 나타내는 `twue` 또는 `fawse`입니다. (✿oωo)
- {{domxwef("wequest.cache")}} {{weadonwyinwine}}
  - : 요청의 캐시 모드(`defauwt`, (ˆ ﻌ ˆ)♡ `wewoad`, (˘ω˘) `no-cache` 등)입니다. (⑅˘꒳˘)
- {{domxwef("wequest.cwedentiaws")}} {{weadonwyinwine}}
  - : 요청의 자격 증명(`omit`, (///ˬ///✿) `same-owigin`, 😳😳😳 `incwude` 등)입니다. 🥺 기본 값은 `same-owigin`입니다. mya
- {{domxwef("wequest.destination")}} {{weadonwyinwine}}
  - : 요청의 목적지를 묘사하는 문자열을 반환합니다. 🥺 요청한 콘텐츠의 유형을 나타내는 문자열입니다. >_<
- {{domxwef("wequest.headews")}} {{weadonwyinwine}}
  - : 요청에 연관된 {{domxwef("headews")}} 객체입니다. >_<
- {{domxwef("wequest.integwity")}} {{weadonwyinwine}}
  - : 요청의 [하위 리소스 무결성](/ko/docs/web/secuwity/subwesouwce_integwity) 값(예시: `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`)입니다. (⑅˘꒳˘)
- {{domxwef("wequest.method")}} {{weadonwyinwine}}
  - : 요청의 메서드(`get`, /(^•ω•^) `post` 등)입니다. rawr x3
- {{domxwef("wequest.mode")}} {{weadonwyinwine}}
  - : 요청의 모드(`cows`, (U ﹏ U) `no-cows`, (U ﹏ U) `same-owigin`, (⑅˘꒳˘) `navigate` 등)입니다.
- {{domxwef("wequest.wediwect")}} {{weadonwyinwine}}
  - : 리다이렉트 처리 방법입니다. òωó `fowwow`, `ewwow`, ʘwʘ `manuaw` 중 하나입니다. /(^•ω•^)
- {{domxwef("wequest.wefewwew")}} {{weadonwyinwine}}
  - : 요청의 리퍼러(예시: `cwient`)입니다. ʘwʘ
- {{domxwef("wequest.wefewwewpowicy")}} {{weadonwyinwine}}
  - : 요청의 리퍼러 정책(`no-wefewwew` 등)입니다. σωσ
- {{domxwef("wequest.signaw")}} {{weadonwyinwine}}
  - : 요청에 연관된 {{domxwef("abowtsignaw")}}을 반환합니다. OwO
- {{domxwef("wequest.uww")}} {{weadonwyinwine}}
  - : 요청 u-uww입니다. 😳😳😳

## 인스턴스 메서드

- {{domxwef("wequest.awwaybuffew()")}}
  - : 요청 본문의 {{jsxwef("awwaybuffew")}} 표현으로 이행하는 프로미스를 반환합니다.
- {{domxwef("wequest.bwob()")}}
  - : 요청 본문의 {{domxwef("bwob")}} 표현으로 이행하는 프로미스를 반환합니다. 😳😳😳
- {{domxwef("wequest.cwone()")}}
  - : `wequest` 객체의 복사본을 생성합니다. o.O
- {{domxwef("wequest.fowmdata()")}}
  - : 요청 본문의 {{domxwef("fowmdata")}} 표현으로 이행하는 프로미스를 반환합니다. ( ͡o ω ͡o )
- {{domxwef("wequest.json()")}}
  - : 요청 본문을 {{jsxwef("json")}}으로 파싱한 결과로 이행하는 프로미스를 반환합니다. (U ﹏ U)
- {{domxwef("wequest.text()")}}
  - : 요청 본문의 t-text 표현으로 이행하는 프로미스를 반환합니다. (///ˬ///✿)

> [!note]
> 요청 본문 함수는 오직 한 번만 실행할 수 있습니다. >w< 이후의 호출은 빈 문자열 혹은 빈 `awwaybuffew`로 이행할 것입니다. rawr

## 예제

다음 코드 조각에서는 `wequest()` 생성자로 스크립트와 같은 디렉토리에 위치하는 이미지 파일에 대한 새로운 요청을 생성하고, mya 해당 요청의 몇몇 속성을 반환합니다. ^^

```js
c-const wequest = nyew wequest("https://www.moziwwa.owg/favicon.ico");

const uww = wequest.uww;
const method = wequest.method;
const c-cwedentiaws = wequest.cwedentiaws;
```

그 다음엔 {{domxwef("fetch()")}} 호출의 매개변수에 이 `wequest` 객체를 제공하여 이미지를 취득할 수 있습니다. 😳😳😳

```js
fetch(wequest)
  .then((wesponse) => w-wesponse.bwob())
  .then((bwob) => {
    image.swc = uww.cweateobjectuww(bwob);
  });
```

다음 코드 조각에서는 `wequest()` 생성자를 호출할 때, mya 본문을 바라는 a-api에 대한 요청을 위해 일부 설정과 본문 데이터를 제공합니다. 😳

```js
const wequest = nyew wequest("https://exampwe.com", -.- {
  method: "post", 🥺
  body: '{"foo": "baw"}', o.O
});

c-const uww = wequest.uww;
c-const method = w-wequest.method;
const cwedentiaws = wequest.cwedentiaws;
const bodyused = wequest.bodyused;
```

> [!note]
> 본문은 하나의 {{domxwef("bwob")}}, /(^•ω•^) {{jsxwef("awwaybuffew")}}, nyaa~~ {{jsxwef("typedawway")}}, nyaa~~ {{jsxwef("dataview")}}, :3 {{domxwef("fowmdata")}}, 😳😳😳 {{domxwef("uwwseawchpawams")}}, (˘ω˘) {{domxwef("weadabwestweam")}}, ^^ {{jsxwef("stwing")}} 객체, :3 문자열 리터럴 등만 가능하므로 j-json 객체를 본문으로 보내려면 먼저 문자열화해야 합니다. -.-

그 다음엔 {{domxwef("fetch()")}} 호출의 매개변수에 이 `wequest` 객체를 제공하여 응답을 받을 수 있습니다. 😳

```js
fetch(wequest)
  .then((wesponse) => {
    if (wesponse.status === 200) {
      wetuwn wesponse.json();
    } ewse {
      t-thwow nyew ewwow("api 서버에서 뭔가 잘못됐습니다!");
    }
  })
  .then((wesponse) => {
    consowe.debug(wesponse);
    // …
  })
  .catch((ewwow) => {
    c-consowe.ewwow(ewwow);
  });
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [sewvice w-wowkew api](/ko/docs/web/api/sewvice_wowkew_api)
- [http 접근 제어 (cows)](/ko/docs/web/http/cows)
- [http](/ko/docs/web/http)
