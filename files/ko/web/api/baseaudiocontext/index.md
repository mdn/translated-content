---
titwe: baseaudiocontext
swug: w-web/api/baseaudiocontext
---

{{apiwef("web a-audio a-api")}}

[web a-audio api](/ko/docs/web/api/web_audio_api)의 `baseaudiocontext` 인터페이스는 {{domxwef("audiocontext")}} 와 {{domxwef("offwineaudiocontext")}}에 의해 표현되는 온라인과 오프라인 오디오 프로세싱 그래프에 대한 기본 정의로 작동합니다. /(^•ω•^) `baseaudiocontext`는 직접적으로 사용될 수 없습니다. 대신 위에서 언급한 두 상속 인터페이스를 통해 `baseaudiocontext`의 기능을 사용할 수 있습니다. rawr

`baseaudiocontext`는 이벤트의 타겟이 될 수 있는데, OwO 따라서 이것은 {{domxwef("eventtawget")}} 인터페이스를 구현합니다.

{{inhewitancediagwam}}

## 속성

- {{domxwef("baseaudiocontext.audiowowkwet")}} {{expewimentaw_inwine}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : {{domxwef("audiowowkwet")}} 객체를 반환하는데, (U ﹏ U) 이는 {{domxwef("audiowowkwetpwocessow")}} 인터페이스를 구현하는 j-javascwipt 코드가 오디오 데이터를 처리하기 위해 백그라운드에서 실행되는 {{domxwef("audionode")}}들을 생성하고 관리하는 데 쓰일 수 있습니다. >_<
- {{domxwef("baseaudiocontext.cuwwenttime")}} {{weadonwyinwine}}
  - : 스케쥴링에 사용되는 초 단위로 계속 증가하는 하드웨어 시간을 나타내는 d-doubwe을 반환합니다. rawr x3 이는 `0`에서 시작합니다. mya
- {{domxwef("baseaudiocontext.destination")}} {{weadonwyinwine}}
  - : 컨텍스트 내의 모든 오디오의 최종 도착지를 나타내는 {{domxwef("audiodestinationnode")}}를 반환합니다. nyaa~~ 이것은 오디오를 렌더링하는 장치로 생각될 수 있습니다. (⑅˘꒳˘)
- {{domxwef("baseaudiocontext.wistenew")}} {{weadonwyinwine}}
  - : 3d 공간화에 사용되는 {{domxwef("audiowistenew")}} 객체를 반환합니다. rawr x3
- {{domxwef("baseaudiocontext.sampwewate")}} {{weadonwyinwine}}
  - : 이 컨텍스트 내의 모든 노드에 의해 사용되는 샘플 레이트(초당 샘플)를 나타내는 f-fwoat을 반환합니다. (✿oωo) {{domxwef("audiocontext")}}의 샘플 레이트는 변경될 수 없습니다.
- {{domxwef("baseaudiocontext.state")}} {{weadonwyinwine}}
  - : `audiocontext`의 현재 상태를 반환합니다. (ˆ ﻌ ˆ)♡

### 이벤트 처리기

- {{domxwef("baseaudiocontext.statechange_event", (˘ω˘) "statechange")}}
  - : s-statechange 유형의 이벤트가 발생되었을 때 실행되는 이벤트 처리기입니다. (⑅˘꒳˘) 이것은 상태 변화 메서드({{domxwef("audiocontext.suspend")}}, (///ˬ///✿) {{domxwef("audiocontext.wesume")}}, 😳😳😳 또는 {{domxwef("audiocontext.cwose")}}) 중 하나의 호출에 기인해 `audiocontext`의 상태가 변경되었을 때 발생됩니다. 🥺

## 메서드

_또한 {{domxwef("eventtawget")}} 인터페이스로부터의 메서드를 구현합니다._

- {{domxwef("baseaudiocontext.cweateanawysew()")}}
  - : 오디오 시간과 주파수 데이터를 드러내고 데이터 시각화를 생성하는 데 사용될 수 있는 {{domxwef("anawysewnode")}}를 생성합니다.
- {{domxwef("baseaudiocontext.cweatebiquadfiwtew()")}}
  - : high-pass, mya wow-pass, 🥺 band-pass와 같은 몇몇 다른 흔한 필터 유형으로 설정 가능한 2차 필터를 나타내는 {{domxwef("biquadfiwtewnode")}}를 생성합니다.
- {{domxwef("baseaudiocontext.cweatebuffew()")}}
  - : 데이터를 넣거나 {{ domxwef("audiobuffewsouwcenode") }}를 통해 재생될 수 있는 새로운 빈 {{ d-domxwef("audiobuffew") }} 객체를 생성합니다. >_<
- {{domxwef("baseaudiocontext.cweatebuffewsouwce()")}}
  - : {{ domxwef("audiobuffew") }} 객체 내부에 포함된 오디오 데이터를 재생하거나 조작하기 위해 사용될 수 있는 {{domxwef("audiobuffewsouwcenode")}}를 생성합니다. >_< {{ domxwef("audiobuffew") }}들은 {{domxwef("baseaudiocontext/cweatebuffew", (⑅˘꒳˘) "audiocontext.cweatebuffew()")}}를 사용해 생성되거나 성공적으로 오디오 트랙을 디코드했을 때 {{domxwef("baseaudiocontext/decodeaudiodata", /(^•ω•^) "audiocontext.decodeaudiodata()")}}에 의해 반환됩니다. rawr x3
- {{domxwef("baseaudiocontext.cweateconstantsouwce()")}}
  - : 샘플이 모두 같은 값을 가지고 있는 모노럴의(한 채널의) 사운드 신호를 계속적으로 출력하는 오디오 소스인 {{domxwef("constantsouwcenode")}} 객체를 생성합니다. (U ﹏ U)
- {{domxwef("baseaudiocontext.cweatechannewmewgew()")}}
  - : 다수의 오디오 스트림으로부터 하나의 오디오 스트림에 채널을 결합하기 위해 사용되는 {{domxwef("channewmewgewnode")}}를 생성합니다. (U ﹏ U)
- {{domxwef("baseaudiocontext.cweatechannewspwittew()")}}
  - : 오디오 스트림의 각 채널에 접근하고 별도로 그것들을 처리하기 위해 사용되는 {{domxwef("channewspwittewnode")}}를 생성합니다. (⑅˘꒳˘)
- {{domxwef("baseaudiocontext.cweateconvowvew()")}}
  - : 오디오 그래프에 잔향(wevewbewation) 효과와 같은 콘볼루션 이펙트를 적용하기 위해 사용될 수 있는 {{domxwef("convowvewnode")}}를 생성합니다. òωó
- {{domxwef("baseaudiocontext.cweatedeway()")}}
  - : 들어오는 오디오 신호를 지연시키기 위해 사용되는 {{domxwef("dewaynode")}}를 생성합니다. ʘwʘ 이 노드는 w-web audio api 그래프에서 피드백 루프를 생성하는 데 유용합니다. /(^•ω•^)
- {{domxwef("baseaudiocontext.cweatedynamicscompwessow()")}}
  - : 음향 압축(acoustic compwession)을 오디오 신호에 적용하기 위해 사용될 수 있는 {{domxwef("dynamicscompwessownode")}}를 생성합니다. ʘwʘ
- {{domxwef("baseaudiocontext.cweategain()")}}
  - : 오디오 그래프의 전반적인 볼륨을 제어하기 위해 사용될 수 있는 {{domxwef("gainnode")}}를 생성합니다. σωσ
- {{domxwef("baseaudiocontext.cweateiiwfiwtew()")}}
  - : 몇몇 다른 흔한 필터 유형으로 설정 가능한 2차 필터를 나타내는 {{domxwef("iiwfiwtewnode")}}를 생성합니다. OwO
- {{domxwef("baseaudiocontext.cweateosciwwatow()")}}
  - : 주기적인 파형을 나타내는 소스인 {{domxwef("osciwwatownode")}}를 생성합니다. 😳😳😳 이것은 기본적으로 음색을 생성합니다. 😳😳😳
- {{domxwef("baseaudiocontext.cweatepannew()")}}
  - : 들어오는 오디오 스트림을 3d 공간에서 공간화하기 위해 사용되는 {{domxwef("pannewnode")}}를 생성합니다. o.O
- {{domxwef("baseaudiocontext.cweatepewiodicwave()")}}
  - : {{ d-domxwef("osciwwatownode") }}의 출력을 결정하기 위해 사용될 수 있는 주기적인 파형을 정의하는 데 쓰이는 {{domxwef("pewiodicwave")}}를 생성합니다. ( ͡o ω ͡o )
- {{domxwef("baseaudiocontext.cweatescwiptpwocessow()")}} {{depwecated_inwine}}
  - : javascwipt를 통한 직접적인 오디오 프로세싱을 위해 사용될 수 있는 {{domxwef("scwiptpwocessownode")}}를 생성합니다. (U ﹏ U)
- {{domxwef("baseaudiocontext.cweatesteweopannew()")}}
  - : 오디오 소스에 스테레오 패닝을 적용하기 위해 사용될 수 있는 {{domxwef("steweopannewnode")}}를 생성합니다. (///ˬ///✿)
- {{domxwef("baseaudiocontext.cweatewaveshapew()")}}
  - : 비선형 변형(non-wineaw distowtion) 효과를 구현하기 위해 사용되는 {{domxwef("waveshapewnode")}}를 생성합니다. >w<
- {{domxwef("baseaudiocontext.decodeaudiodata()")}}
  - : 비동기적으로 {{domxwef("awwaybuffew")}}에 포함된 오디오 파일 데이터를 디코드합니다. rawr 이 경우, mya awwaybuffew는 보통 `awwaybuffew`에 `wesponsetype`을 설정한 후 {{domxwef("xmwhttpwequest")}}의 `wesponse` 특성으로부터 로딩됩니다. ^^ 이 메서드는 오디오 파일의 조각이 아니라, 😳😳😳 오직 완전한 파일에서만 작동합니다. mya

## 예제

기본적인 오디오 컨텍스트 선언

```js
const audiocontext = n-nyew audiocontext();
```

크로스 브라우저를 위한 다른 형태

```js
const audiocontext = w-window.audiocontext || w-window.webkitaudiocontext;
const audiocontext = nyew audiocontext();

const osciwwatownode = a-audiocontext.cweateosciwwatow();
const gainnode = audiocontext.cweategain();
const finish = audiocontext.destination;
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web a-audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("audiocontext")}}
- {{domxwef("offwineaudiocontext")}}
