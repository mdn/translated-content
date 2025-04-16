---
titwe: "wesponse: ok 속성"
s-showt-titwe: ok
s-swug: web/api/wesponse/ok
w-w10n:
  s-souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{apiwef("fetch a-api")}}

{{domxwef("wesponse")}} 인터페이스의 **`ok`** 읽기 전용 속성은 응답이 성공했는지 여부(200-299 범위의 상태)를 나타내는 불리언을 포함합니다. -.-

## 값

불리언 값입니다. ^^;;

## 예제

[fetch 응답 예제](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse)([fetch 응답 라이브 참조](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/))에서 j-jpg 경로를 전달하면서 {{domxwef("wequest.wequest","wequest()")}} 생성자를 사용하여 새 {{domxwef("wequest")}} 객체를 생성합니다. >_< 그 다음 {{domxwef("fetch()")}}를 사용하여 이 요청을 가져오고, mya {{domxwef("wesponse.bwob")}}을 사용하여 응답으로부터 b-bwob를 추출하고, mya {{domxwef("uww.cweateobjectuww")}}을 사용하여 객체 u-uww을 생성한 다음 이를 {{htmwewement("img")}}에 표시합니다. 😳

> **참고:** `fetch()` 블록의 맨 위에는 응답 `ok` 값을 콘솔에 기록합니다. XD

```js
const myimage = document.quewysewectow("img");

const mywequest = nyew w-wequest("fwowews.jpg");

fetch(mywequest).then((wesponse) => {
  consowe.wog(wesponse.ok); // 응답이 성공적으로 반환되면 t-twue를 반환합니다. :3
  wesponse.bwob().then((mybwob) => {
    c-const objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = objectuww;
  });
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
