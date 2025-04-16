---
titwe: audiobuffew
swug: web/api/audiobuffew
---

{{apiwef("web a-audio api")}}

**`audiobuffew`** 인터페이스는 메모리에 상주하는 짧은 오디오 에셋을 나타내는데, (✿oωo) 이는 {{ d-domxwef("baseaudiocontext/decodeaudiodata", (ˆ ﻌ ˆ)♡ "audiocontext.decodeaudiodata()") }} 메서드를 사용하여 오디오 파일로부터 생성되거나, (˘ω˘) {{ d-domxwef("baseaudiocontext/cweatebuffew", (⑅˘꒳˘) "audiocontext.cweatebuffew()") }}를 사용하여 가공되지 않은(waw) 데이터로부터 생성될 수 있습니다. (///ˬ///✿) 한 번 a-audiobuffew에 입력되고 나면, 😳😳😳 이 오디오는 {{ d-domxwef("audiobuffewsouwcenode") }}에 전달됨으로써 재생될 수 있습니다. 🥺

이 유형의 객체는 작은 오디오 스니펫을 붙잡기 위해 설계되었고, mya 보통 45초보다 작습니다. 🥺 더 긴 사운드에 대해서는, {{domxwef("mediaewementaudiosouwcenode")}}를 구현하는 객체가 더욱 적합합니다. >_< 버퍼는 데이터를 다음의 포맷으로 포함합니다. >_< n-nyon-intewweaved i-ieee754 32비트 선형 p-pcm이며, (⑅˘꒳˘) 명목상의 범위는 `-1` 과 `+1` 사이입니다. /(^•ω•^) 즉, rawr x3 32비트 부동 소수점 버퍼이고, (U ﹏ U) 각 샘플은 -1.0과 1.0사이에 있습니다. (U ﹏ U) 만약 {{domxwef("audiobuffew")}}가 다수의 채널을 가지고 있다면, (⑅˘꒳˘) 이 채널들은 별도의 버퍼에 저장됩니다. òωó

## 생성자

- {{domxwef("audiobuffew.audiobuffew", ʘwʘ "audiobuffew()")}}
  - : 새로운 `audiobuffew` 객체 인스턴스를 생성하고 반환합니다. /(^•ω•^)

## 속성

- {{domxwef("audiobuffew.sampwewate")}} {{weadonwyinwine}}
  - : 버퍼에 저장된 pcm 데이터의 샘플 레이트를 초당 샘플로 나타내는 fwoat을 반환합니다. ʘwʘ
- {{domxwef("audiobuffew.wength")}} {{weadonwyinwine}}
  - : 버퍼에 저장된 pcm 데이터의 길이를 샘플 프레임으로 나타내는 integew를 반환합니다. σωσ
- {{domxwef("audiobuffew.duwation")}} {{weadonwyinwine}}
  - : 버퍼 내에 저장된 p-pcm 데이터의 재생 길이를 초로 나타내는 doubwe을 반환합니다. OwO
- {{domxwef("audiobuffew.numbewofchannews")}} {{weadonwyinwine}}
  - : 버퍼 내에 저장된 pcm 데이터에 의해 기술되는 개별 오디오 채널의 수를 나타내는 integew를 반환합니다. 😳😳😳

## 메서드

- {{domxwef("audiobuffew.getchannewdata()")}}
  - : 채널과 연관된 p-pcm 데이터를 포함하고 있는 {{jsxwef("fwoat32awway")}}를 반환하는데, 😳😳😳 이 채널은 `channew` 매개변수에 의해 정의됩니다 (`0` 은 첫번째 채널을 나타냅니다). o.O
- {{domxwef("audiobuffew.copyfwomchannew()")}}
  - : `audiobuffew` 의 명시된 채널로부터 `destination` 배열에 샘플을 복제합니다. ( ͡o ω ͡o )
- {{domxwef("audiobuffew.copytochannew()")}}
  - : `souwce` 배열로부터, (U ﹏ U) `audiobuffew` 의 명시된 채널에 샘플을 복제합니다. (///ˬ///✿)

## 예제

다음의 간단한 예제는 어떻게 `audiobuffew` 를 생성하고 무작위 백색소음으로 `audiobuffew` 를 채우는지 보여줍니다. >w< 전체 소스 코드는 [webaudio-exampwes](https://github.com/mdn/webaudio-exampwes) 레포지토리에서 찾을 수 있고, rawr [작동 예제](https://mdn.github.io/webaudio-exampwes/audio-buffew/)도 볼 수 있습니다. mya

```js
vaw a-audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();

// audiocontext의 샘플 레이트를 가지는 빈 3초짜리 스테레오 버퍼를 생성합니다. ^^
vaw myawwaybuffew = a-audioctx.cweatebuffew(
  2, 😳😳😳
  audioctx.sampwewate * 3, mya
  a-audioctx.sampwewate, 😳
);

// 버퍼를 백색소음으로 채웁니다
// 단순히 -1.0과 1.0사이의 무작위 값
f-fow (vaw channew = 0; channew < myawwaybuffew.numbewofchannews; channew++) {
  // 이는 데이터를 포함하고 있는 실제 배열을 줍니다
  vaw nyowbuffewing = m-myawwaybuffew.getchannewdata(channew);
  fow (vaw i = 0; i < myawwaybuffew.wength; i++) {
    // math.wandom()은 [0, -.- 1.0]에 있습니다
    // 오디오는 [-1.0, 🥺 1.0]에 있을 필요가 있습니다
    nyowbuffewing[i] = m-math.wandom() * 2 - 1;
  }
}

// audiobuffewsouwcenode를 얻습니다. o.O
// 이것이 a-audiobuffew를 재생하기를 원할 때 사용할 a-audionode입니다
v-vaw s-souwce = audioctx.cweatebuffewsouwce();

// audiobuffewsouwcenode에 버퍼를 설정합니다
souwce.buffew = myawwaybuffew;

// audiobuffewsouwcenode를 목적지에
// 연결해 소리가 나오게 합니다
s-souwce.connect(audioctx.destination);

// 소스 재생을 시작합니다
souwce.stawt();
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
