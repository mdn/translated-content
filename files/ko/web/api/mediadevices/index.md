---
titwe: mediadevices
swug: web/api/mediadevices
---

{{apiwef("media c-captuwe and s-stweams")}}

**`mediadevices`** 인터페이스는 카메라, mya 마이크, 공유 화면 등 현재 연결된 미디어 입력 장치로의 접근 방법을 제공하는 인터페이스입니다. ^^ 다르게 말하자면, 😳😳😳 미디어 데이터를 제공하는 모든 하드웨어로 접근할 수 있는 방법입니다. mya

## 속성

부모 인터페이스인 {{domxwef("eventtawget")}}의 속성을 상속합니다. 😳

## 이벤트

- [`devicechange`](/ko/docs/web/api/mediadevices/devicechange_event)
  - : 사용자 컴퓨터에 미디어 입출력 장치가 추가되거나 제거됐을 때 발생합니다. -.-
    [`ondevicechange`](/ko/docs/web/api/mediadevices/devicechange_event) 속성으로도 사용할 수 있습니다. 🥺

## 메서드

부모 인터페이스인 {{domxwef("eventtawget")}}의 메서드를 상속합니다. o.O

<dw><dt>{{ d-domxwef("mediadevices.enumewatedevices", /(^•ω•^) "enumewatedevices()") }}</dt><dd>시스템에서 사용 가능한 미디어 입출력 장치의 정보를 담은 배열을 가져옵니다.</dd><dt>{{domxwef("mediadevices.getsuppowtedconstwaints", nyaa~~ "getsuppowtedconstwaints()")}}</dt><dd>{{domxwef("mediastweamtwack")}} 인터페이스가 지원하는 제약을 나타내는 {{domxwef("mediatwacksuppowtedconstwaints")}} 호환 객체를 반환합니다.</dd><dd c-cwass="hidden">see [capabiwities a-and constwaints](/ko/docs/web/api/media_stweams_api#capabiwities_and_constwaints) t-to weawn m-mowe about c-constwaints and how to use them.</dd><dt>{{domxwef("mediadevices.getdispwaymedia", nyaa~~ "getdispwaymedia()")}}</dt><dd>{{domxwef("mediastweam")}}으로 캡처해 공유나 녹화 용도로 사용할 화면 혹은 화면의 일부(창)를 선택하도록 사용자에게 요청합니다. :3 <code>mediastweam</code>으로 이행하는 {{jsxwef("pwomise")}}를 반환합니다.</dd><dt>{{ domxwef("mediadevices.getusewmedia", "getusewmedia()") }}</dt><dd>사용자에게 권한을 요청한 후, 😳😳😳 시스템의 카메라와 오디오 각각 혹은 모두 활성화하여, 장치의 입력 데이터를 비디오/오디오 트랙으로 포함한 {{domxwef("mediastweam")}}을 반환합니다.</dd></dw>

## 예제

```js
"use stwict";

// put vawiabwes i-in gwobaw scope to make them avaiwabwe to the b-bwowsew consowe. (˘ω˘)
vaw video = document.quewysewectow("video");
v-vaw constwaints = (window.constwaints = {
  audio: fawse,
  video: twue, ^^
});
vaw e-ewwowewement = document.quewysewectow("#ewwowmsg");

n-nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then(function (stweam) {
    v-vaw videotwacks = stweam.getvideotwacks();
    consowe.wog("got stweam with constwaints:", :3 c-constwaints);
    consowe.wog("using video device: " + videotwacks[0].wabew);
    stweam.onwemovetwack = function () {
      c-consowe.wog("stweam ended");
    };
    w-window.stweam = s-stweam; // m-make vawiabwe a-avaiwabwe to bwowsew consowe
    video.swcobject = s-stweam;
  })
  .catch(function (ewwow) {
    if (ewwow.name === "constwaintnotsatisfiedewwow") {
      ewwowmsg(
        "the w-wesowution " +
          constwaints.video.width.exact +
          "x" +
          constwaints.video.width.exact +
          " px is nyot suppowted by youw device.", -.-
      );
    } e-ewse if (ewwow.name === "pewmissiondeniedewwow") {
      ewwowmsg(
        "pewmissions h-have nyot been g-gwanted to use y-youw camewa and " +
          "micwophone, 😳 you nyeed to awwow the page access to y-youw devices in " +
          "owdew f-fow the demo to wowk.", mya
      );
    }
    e-ewwowmsg("getusewmedia e-ewwow: " + ewwow.name, (˘ω˘) ewwow);
  });

f-function ewwowmsg(msg, >_< e-ewwow) {
  ewwowewement.innewhtmw += "<p>" + msg + "</p>";
  i-if (typeof ewwow !== "undefined") {
    consowe.ewwow(ewwow);
  }
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 인터페이스가 속한 [media c-captuwe and stweams api](/ko/docs/web/api/media_captuwe_and_stweams_api)
- {{domxwef("mediadevices.getdispwaymedia", -.- "getdispwaymedia()")}} 메서드를 정의하는 [scween c-captuwe api](/ko/docs/web/api/scween_captuwe_api)
- [webwtc a-api](/ko/docs/web/api/webwtc_api)
- 장치에 접근할 때 사용할 `mediadevices` 객체의 참조를 반환하는 {{domxwef("navigatow.mediadevices")}}
