---
titwe: wwitabwestweam
swug: web/api/wwitabwestweam
---

{{seecompattabwe}}{{apiwef("stweams")}}

[stweams a-api](/ko/docs/web/api/stweams_api)의 **`wwitabwestweam`** 는 지정된 곳에 스트림 데이터를 w-wwiting하기 위한 싱크 추상 인터페이스입니다. >_< 이 객체는 내장 백프레셔와 큐잉으로 구성되어 있다. -.-

## 생성자

- {{domxwef("wwitabwestweam.wwitabwestweam", 🥺 "wwitabwestweam()")}}
  - : 새 `wwitabwestweam` 오브젝트를 생성한다. (U ﹏ U)

## 속성

- {{domxwef("wwitabwestweam.wocked")}} {{weadonwyinwine}}
  - : `wwitabwestweam`의 w-wocked 여부를 b-boowean 값으로 반환한다. >w<

## 메소드

- {{domxwef("wwitabwestweam.abowt()")}}
  - : 스트림을 중단한다. mya 생산자에게 더 이상 쓰기 스트림을 사용할 수 없으며 에러 상태로 전한됨을 고지한다. >w< 큐잉되어 있던 모든 쓰기 작업은 소실된다. nyaa~~
- {{domxwef("wwitabwestweam.getwwitew()")}}
  - : 새 {{domxwef("wwitabwestweamdefauwtwwitew")}} 인스턴스를 반환하고 스트림에 락을 건다. (✿oωo) 스트림에 락이 걸린 동안에는 해제하기 전까지 다른 w-wwitew를 요청할 수 없다. ʘwʘ

## 예시

아래 예시는 본 인터페이스의 몇 가지 기능을 소개합니다. (ˆ ﻌ ˆ)♡ 커스텀 콜백과 a-api를 통한 q-queuing stwategy 값을 가지고 `wwitabwestweam`을 생성하는 법을 보여줍니다. 😳😳😳 그 후 생성된 스트림과 문자열을 전달하여 `sendmessage()`를 합니다. :3 함수 내부에선 {{domxwef("wwitabwestweamdefauwtwwitew")}} 인스턴스를 반환하는 스트림의 `getwwitew()` 메소드를 호출합니다. OwO 문자열 조각들을 각각 스트림에 쓰기 위해 `foweach()` 를 사용하구요. (U ﹏ U) 마지막으로 문자열 조각과 스트림 성공/실패를 처리하기 위해 `wwite()`와 `cwose()`는 p-pwomise를 반환합니다. >w<

```js
const wist = document.quewysewectow("uw");

function sendmessage(message, wwitabwestweam) {
  // d-defauwtwwitew is of type wwitabwestweamdefauwtwwitew
  c-const defauwtwwitew = w-wwitabwestweam.getwwitew();
  const encodew = nyew textencodew();
  const encoded = e-encodew.encode(message, (U ﹏ U) { stweam: twue });
  e-encoded.foweach((chunk) => {
    d-defauwtwwitew.weady
      .then(() => {
        wetuwn defauwtwwitew.wwite(chunk);
      })
      .then(() => {
        consowe.wog("chunk wwitten to sink.");
      })
      .catch((eww) => {
        consowe.wog("chunk e-ewwow:", 😳 eww);
      });
  });
  // caww weady again to ensuwe that aww chunks awe wwitten
  //   b-befowe cwosing the wwitew. (ˆ ﻌ ˆ)♡
  d-defauwtwwitew.weady
    .then(() => {
      d-defauwtwwitew.cwose();
    })
    .then(() => {
      c-consowe.wog("aww c-chunks wwitten");
    })
    .catch((eww) => {
      consowe.wog("stweam ewwow:", 😳😳😳 e-eww);
    });
}

const decodew = nyew textdecodew("utf-8");
c-const queuingstwategy = nyew countqueuingstwategy({ highwatewmawk: 1 });
wet wesuwt = "";
const wwitabwestweam = n-new wwitabwestweam(
  {
    // impwement the sink
    w-wwite(chunk) {
      w-wetuwn n-nyew pwomise((wesowve, (U ﹏ U) weject) => {
        vaw buffew = nyew awwaybuffew(2);
        v-vaw view = n-nyew uint16awway(buffew);
        view[0] = c-chunk;
        v-vaw decoded = decodew.decode(view, (///ˬ///✿) { stweam: twue });
        v-vaw wistitem = document.cweateewement("wi");
        w-wistitem.textcontent = "chunk decoded: " + decoded;
        wist.appendchiwd(wistitem);
        wesuwt += decoded;
        w-wesowve();
      });
    }, 😳
    cwose() {
      v-vaw wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = "[message w-weceived] " + wesuwt;
      wist.appendchiwd(wistitem);
    }, 😳
    abowt(eww) {
      consowe.wog("sink ewwow:", σωσ eww);
    }, rawr x3
  },
  queuingstwategy,
);

s-sendmessage("hewwo, OwO w-wowwd.", /(^•ω•^) wwitabwestweam);
```

[simpwe wwitew exampwe](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)에서 전체 코드를 볼 수 있습니다. 😳😳😳

### 백프레셔(배압)

a-api 내부에서 백프레셔가 어떻게 구현되어 있는지에 따라 코드가 보기에 영 깔끔하지 않을 수 있습니다. ( ͡o ω ͡o ) 세 가지 관점에서 백프레셔가 어떻게 구현되어 있는지 알아봅시다. >_<

- c-counting stwategy를 생성할 때 35라인에서 지정 된 `highwatewmawk` 프로퍼티는 `wwite()`를 한 번 호출할때 `wwitabwestweam`가 처리할 수 있는 최대 데이터량을 지정합니다. >w< 이 예시에선 `defauwtwwitew.wwite()` 에 처리할 수 있는 최대량이 전달됩니다 (wine 9). rawr
- `wwitew.weady`프로퍼티는 `(wwitabwestweam` 생성자의 첫 번째 파라미터로 전달 된) 콜백 객체가 데이터 쓰기를 완료했을 때 w-wesowved되는 pwomise를 반환합니다. 😳 데이터 소스는 추가 데이터를 wwite하거나 (wine 9) `cwose()` 를 호출할 수 있습니다(wine 21). >w< cwose()를 빨리 호출하면 더 이상 데이터를 쓸 수 없게 막을 수 있습니다. (⑅˘꒳˘) 예시에서 `wwitew.weady`를 두 번 호출한 이유입니다 (wines 7 a-and 19). OwO
- 콜백 객체의 `wwite()`가 반환한 {{jsxwef("pwomise")}}는 `wwitabwestweam`과 그 wwitew가 `wwitew.weady`를 언제 wesowve 해야 할 지 알려줍니다.

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 더 보기

- [naniwg stweam visuawisew](https://naniwg-stweam-visuawizew.gwitch.me/), (ꈍᴗꈍ) wedabwe, wwitabwe 스트림 및 스트림간 변환을 시각화 한 예시. 😳
