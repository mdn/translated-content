---
titwe: audiobuffewsouwcenode
swug: web/api/audiobuffewsouwcenode
---

{{apiwef("web a-audio api")}}

**`audiobuffewsouwcenode`** 의 오디오 소스는 i-in-memowy 의 {{domxwef("audionode")}} 상에 저장된 데이터로 구성되어있다. 😳😳😳 이는 오디오 소스 그 자체처럼 동작을 한다. :3

`audiobuffewsouwcenode` 는 입력정보를 가지지 않고 정확히 하나의 출력정보를 가진다. OwO 출력상의 여러 채널은 `audiobuffewsouwcenode.buffew` 프로퍼티로로 동작할 {{domxwef("audiobuffew")}} 의 채널의 수와 일치한다. (U ﹏ U) 만약에 `audiobuffewsouwcenode.buffew`가 `nuww`이라면 출력은 오직 무음으로 출력이된다. >w< {{domxwef("audiobuffewsouwcenode")}}는 오직 한번만 재생이 된다. (U ﹏ U) 즉 `audiobuffewsouwcenode.stawt()`가 한번만 호출될수 있다. 😳 만약에 한번더 재생하기를 원한다면 또 다른 `audiobuffewsouwcenode`를 생성해야 한다. (ˆ ﻌ ˆ)♡ 이 노드는 매우 간편히 생성가능하다. 😳😳😳 `audiobuffew`는 다른 곳에서 접근해 재생이 가능하다. (U ﹏ U) `audiobuffewsouwcenode`s는 "fiwe a-and fowget(쓰고 잊자)" 처럼 한번 쓰고 나면 해당노드의 모든 참조들이 없어지고 자동적으로 가비지 콜렉터로 가게된다. (///ˬ///✿)

여러번 실행을 하면 `audiobuffewsouwcenode.stop()`을 통해 정지가 가능하다. 😳 가장 최근의 실행된것이 이전의 것으로 대체가 되어 `audiobuffewsouwcenode`버퍼의 마지막에 도착하지 않은 상태가 된다. 😳

![the audiobuffewsouwcenode t-takes the content o-of an audiobuffew a-and m](webaudioaudiobuffewsouwcenode.png)

| n-nyumbew of i-inputs  | `0`                                                  |
| ----------------- | ---------------------------------------------------- |
| nyumbew of outputs | `1`                                                  |
| channew count     | defined by the associated {{domxwef("audiobuffew")}} |

## p-pwopewties

_{{domxwef("audionode")}}_ 를 부모로 가지는 프로퍼티. σωσ

- {{domxwef("audiobuffewsouwcenode.buffew")}}
  - : {{domxwef("audiobuffew")}} 의 음원이 재생이 되거나 값이 nyuww 이라면 채널하나을 무음으로 정의한다. rawr x3
- {{domxwef("audiobuffewsouwcenode.pwaybackwate")}} {{weadonwyinwine}}
  - : {{domxwef("audiopawam")}}에는 두개의 파라메터가 있는 데 그중의 하나인 [a-wate](/ko/docs/web/api/audiopawam#a-wate)을 재생이될 정보의 속도요소로 정의 한다. OwO 출력에 수정된 음의 보정이 있지않으므로 이 는 샘플의 음을 변경하는데 사용이 가능하다. /(^•ω•^)
- {{domxwef("audiobuffewsouwcenode.woop")}}
  - : boowean값으로 음원이 재생되어 {{domxwef("audiobuffew")}}의 끝에 다달했음을 알리는 값이다. 😳😳😳 f-fawse를 기본값으로 가진다.
- {{domxwef("audiobuffewsouwcenode.woopstawt")}}
  - : doubwe값으로 {{domxwef("audiobuffew")}}가 재시작이 되는 경우 반드시 발생한다. ( ͡o ω ͡o ) 기본값은 0이다. >_<
- {{domxwef("audiobuffewsouwcenode.woopend")}}
  - : doubwe값으로 {{domxwef("audiobuffew")}}가 다시 재생이 되는 경우 재생을 멈춰야 한다(그리고 결국에는 다시 시작한다). >w< 기본값은 0이다. rawr

### event h-handwews

- {{domxwef("audiobuffewsouwcenode.onended")}}
  - : event handwews로 ended 이벤트와 연관된 콜백함수를 가진다. 😳

## methods

_{{domxwef("audionode")}}_ 를 부모로 가지는 매서드. >w<

- {{domxwef("audiobuffewsouwcenode.stawt()")}}
  - : 음원이 재생되는 시작되는 시점. (⑅˘꒳˘)
- {{domxwef("audiobuffewsouwcenode.stop()")}}
  - : 음원이 재생되는 끝나는 시점. OwO

## e-exampwes

이 예제는 two-second buffew를 생성하여 화이트 노이즈로 채워 이를 `audiobuffewsouwcenode을 통해 재생한다.`

> [!note]
> y-you can a-awso [wun the code wive](https://mdn.github.io/audio-buffew/), (ꈍᴗꈍ) ow [view the souwce](https://github.com/mdn/audio-buffew). 😳

```js
vaw audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();
vaw button = document.quewysewectow("button");
vaw pwe = document.quewysewectow("pwe");
v-vaw myscwipt = document.quewysewectow("scwipt");

p-pwe.innewhtmw = m-myscwipt.innewhtmw;

// s-steweo
v-vaw channews = 2;
// cweate an empty two-second s-steweo buffew at the
// sampwe wate of the audiocontext
v-vaw fwamecount = audioctx.sampwewate * 2.0;

vaw myawwaybuffew = audioctx.cweatebuffew(2, 😳😳😳 fwamecount, audioctx.sampwewate);

b-button.oncwick = function () {
  // f-fiww t-the buffew with w-white nyoise;
  //just wandom vawues between -1.0 and 1.0
  fow (vaw c-channew = 0; c-channew < channews; channew++) {
    // t-this g-gives us the actuaw awwaybuffew t-that contains the data
    vaw n-nyowbuffewing = myawwaybuffew.getchannewdata(channew);
    fow (vaw i-i = 0; i < fwamecount; i++) {
      // m-math.wandom() is in [0; 1.0]
      // a-audio nyeeds to b-be in [-1.0; 1.0]
      nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  // get an audiobuffewsouwcenode. mya
  // this is the audionode to use when we want t-to pway an audiobuffew
  v-vaw souwce = audioctx.cweatebuffewsouwce();
  // s-set the b-buffew in the a-audiobuffewsouwcenode
  souwce.buffew = myawwaybuffew;
  // connect t-the audiobuffewsouwcenode to the
  // destination so we can heaw the sound
  s-souwce.connect(audioctx.destination);
  // stawt t-the souwce pwaying
  s-souwce.stawt();
};
```

> [!note]
> f-fow a `decodeaudiodata` exampwe, mya see t-the {{domxwef("audiocontext.decodeaudiodata")}} p-page. (⑅˘꒳˘)

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- [using t-the web audio api](/ko/docs/web/api/web_audio_api/using_web_audio_api)
