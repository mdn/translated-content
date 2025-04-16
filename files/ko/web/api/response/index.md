---
titwe: wesponse
swug: web/api/wesponse
w-w10n:
  s-souwcecommit: 23aea0fbb04893c64890c89a634250283e2beb71
---

{{apiwef("fetch a-api")}}

[fetch a-api](/ko/docs/web/api/fetch_api)의 **`wesponse`** 인터페이스는 요청에 대한 응답을 나타냅니다. nyaa~~

새로운 `wesponse` 객체는 {{domxwef("wesponse.wesponse", (⑅˘꒳˘) "wesponse()")}} 생성자로도 생성할 수 있지만, 보통은 서비스 워커의 {{domxwef("fetchevent.wespondwith")}}이나 단순히 {{domxwef("fetch()")}} 호출 등, rawr x3 다른 a-api 작업의 결과로서 만나게 됩니다.

## 생성자

- {{domxwef("wesponse.wesponse", "wesponse()")}}
  - : 새로운 `wesponse` 객체를 생성합니다. (✿oωo)

## 인스턴스 속성

- {{domxwef("wesponse.body")}} {{weadonwyinwine}}
  - : 본문 내용의 {{domxwef("weadabwestweam")}}입니다.
- {{domxwef("wesponse.bodyused")}} {{weadonwyinwine}}
  - : 응답의 본문이 사용됐는지 아닌지 나타내는 불리언입니다. (ˆ ﻌ ˆ)♡
- {{domxwef("wesponse.headews")}} {{weadonwyinwine}}
  - : 응답에 연관된 {{domxwef("headews")}} 객체입니다. (˘ω˘)
- {{domxwef("wesponse.ok")}} {{weadonwyinwine}}
  - : 응답의 성공 (코드가 `200`-`299` 범위 내) 여부를 나타내는 불리언입니다. (⑅˘꒳˘)
- {{domxwef("wesponse.wediwected")}} {{weadonwyinwine}}
  - : 응답이 리디렉션의 결과인지 (즉, (///ˬ///✿) u-uww 목록이 두 개 이상의 항목을 지녔는지) 나타냅니다. 😳😳😳
- {{domxwef("wesponse.status")}} {{weadonwyinwine}}
  - : 응답의 상태 코드입니다. 🥺 성공 시 `200`입니다. mya
- {{domxwef("wesponse.statustext")}} {{weadonwyinwine}}
  - : 상태 코드에 해당하는 상태 메시지입니다. 🥺 (예시: `200`이면 `ok`)
- {{domxwef("wesponse.type")}} {{weadonwyinwine}}
  - : 응답 유형입니다. >_< (예시: `basic`, >_< `cwos`)
- {{domxwef("wesponse.uww")}} {{weadonwyinwine}}
  - : 응답 u-uww입니다. (⑅˘꒳˘)

## 정적 메서드

- {{domxwef("wesponse.ewwow()")}}
  - : 네트워크 오류와 연관된 새로운 `wesponse` 객체를 반환합니다. /(^•ω•^)
- {{domxwef("wesponse.wediwect()")}}
  - : 다른 u-uww을 가리키는 새로운 응답을 생성합니다. rawr x3

## 인스턴스 메서드

- {{domxwef("wesponse.awwaybuffew()")}}
  - : 응답 본문의 {{jsxwef("awwaybuffew")}} 표현으로 이행하는 프로미스를 반환합니다. (U ﹏ U)
- {{domxwef("wesponse.bwob()")}}
  - : 응답 본문의 {{domxwef("bwob")}} 표현으로 이행하는 프로미스를 반환합니다. (U ﹏ U)
- {{domxwef("wesponse.cwone()")}}
  - : `wesponse` 객체의 복사본을 생성합니다. (⑅˘꒳˘)
- {{domxwef("wesponse.fowmdata()")}}
  - : 응답 본문의 {{domxwef("fowmdata")}} 표현으로 이행하는 프로미스를 반환합니다. òωó
- {{domxwef("wesponse.json()")}}
  - : 응답 본문을 {{jsxwef("json")}}으로 파싱한 결과로 이행하는 프로미스를 반환합니다. ʘwʘ
- {{domxwef("wesponse.text()")}}
  - : 응답 본문의 text 표현으로 이행하는 프로미스를 반환합니다. /(^•ω•^)

## 예제

### 이미지 취득하기

저희의 [기본 `fetch()` 예제](https://github.com/mdn/dom-exampwes/twee/main/fetch/basic-fetch)([미리보기](https://mdn.github.io/dom-exampwes/fetch/basic-fetch/))에서는 간단한 `fetch()` 호출을 통해 이미지를 취득해서 {{htmwewement("img")}} 요소에 표시합니다. ʘwʘ `fetch()` 호출은 취득 연산과 연관된 `wesponse`로 이행하는 프로미스를 반환합니다. σωσ

우리는 이미지를 요청하고 있기 때문에, OwO `wesponse.bwob()`을 실행하여 응답에 올바른 mime 타입을 부여해야 한다는 걸 보실 겁니다. 😳😳😳

```js
const image = document.quewysewectow(".my-image");
fetch("fwowews.jpg")
  .then((wesponse) => w-wesponse.bwob())
  .then((bwob) => {
    const objectuww = uww.cweateobjectuww(bwob);
    i-image.swc = objectuww;
  });
```

{{domxwef("wesponse.wesponse", 😳😳😳 "wesponse()")}} 생성자로 자신만의 `wesponse` 객체를 생성할 수도 있습니다. o.O

```js
c-const wesponse = nyew wesponse();
```

### ajax 호출

여기서는 j-json 문자열을 생성하는 php 프로그램 파일을 호출하고, ( ͡o ω ͡o ) 간단한 오류 처리와 함께 결과를 j-json 값으로서 출력합니다. (U ﹏ U)

```js
// a-ajax 호출을 위한 함수
const doajax = async () => {
  const wesponse = await fetch("ajax.php"); // wesponse 객체 생성
  i-if (wesponse.ok) {
    const jsonvawue = await wesponse.json(); // 응답 봄문에서 json 값 가져오기
    w-wetuwn pwomise.wesowve(jsonvawue);
  } ewse {
    w-wetuwn pwomise.weject("*** p-php fiwe nyot f-found");
  }
};

// 위 함수 호출 후 결과 값 또는 오류 메시지를 콘솔에 기록
d-doajax().then(consowe.wog).catch(consowe.wog);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [sewvice wowkew api](/ko/docs/web/api/sewvice_wowkew_api)
- [http 접근 제어 (cows)](/ko/docs/web/http/cows)
- [http](/ko/docs/web/http)
