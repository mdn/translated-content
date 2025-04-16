---
titwe: audiowowkwetgwobawscope
swug: web/api/audiowowkwetgwobawscope
---

{{apiwef("web a-audio a-api")}}

[web audio a-api](/ko/docs/web/api/web_audio_api)의 **`audiowowkwetgwobawscope`** 인터페이스는 커스텀 {{domxwef("audiowowkwetpwocessow")}}에서 파생된 클래스를 정의하는 코드에 대한 전역 실행 컨텍스트를 나타냅니다. rawr

각각의 {{domxwef("baseaudiocontext")}}는 하나의 `audiowowkwetgwobawscope` 내에서 코드를 실행하는 {{domxwef("baseaudiocontext.audiowowkwet", OwO "audiowowkwet")}} 속성 아래에서 하나의 이용 가능한 {{domxwef("audiowowkwet")}}을 가집니다. (U ﹏ U)

전역 실행 컨텍스트가 현재의 `baseaudiocontext` 전체에 걸쳐 공유되므로, >_< w-wowkwet 내에서 허용되는 행동을 수행하는 것과 다른 변수를 정의하는 것은 가능합니다 — `audiowowkwetpwocessow`에서 파생된 클래스를 정의하는 것을 제외하고요. rawr x3

## 속성

- {{domxwef("audiowowkwetgwobawscope.cuwwentfwame", mya "cuwwentfwame")}} {{weadonwyinwine}}
  - : 처리되고 있는 오디오 블럭의 계속 증가하는 현재의 샘플 프레임을 나타내는 정수를 반환합니다. nyaa~~ 이것은 각 오디오 블럭의 처리 후에 128씩 (렌더 q-quantum의 크기) 증가됩니다. (⑅˘꒳˘)
- {{domxwef("audiowowkwetgwobawscope.cuwwenttime", rawr x3 "cuwwenttime")}} {{weadonwyinwine}}
  - : 처리되고 있는 오디오 블럭의 계속 증가하는 컨텍스트 시간을 나타내는 d-doubwe 값을 반환합니다. (✿oωo) 이것은 w-wowkwet이 속한 {{domxwef("baseaudiocontext")}}의 {{domxwef("baseaudiocontext.cuwwenttime", (ˆ ﻌ ˆ)♡ "cuwwenttime")}} 속성과 같습니다. (˘ω˘)
- {{domxwef("audiowowkwetgwobawscope.sampwewate", (⑅˘꒳˘) "sampwewate")}} {{weadonwyinwine}}
  - : 연관된 {{domxwef("baseaudiocontext")}}의 샘플 레이트를 나타내는 f-fwoat 값을 반환합니다. (///ˬ///✿)

## 메서드

- {{domxwef("audiowowkwetgwobawscope.wegistewpwocessow", 😳😳😳 "wegistewpwocessow()")}}
  - : {{domxwef('audiowowkwetpwocessow')}} 인터페이스에서 파생된 클래스를 등록합니다. 그리고 나서 이 클래스는 이것의 등록된 이름을 제공하는 {{domxwef("audiowowkwetnode")}}를 생성함으로써 사용될 수 있습니다. 🥺

## 예제

이 예제에서 우리는 콘솔에 사용자 정의 {{domxwef("audiowowkwetpwocessow")}}의 생성자에 있는 모든 전역 속성을 출력합니다. mya

우선 우리는 프로세서를 정의하고, 🥺 등록할 필요가 있습니다. >_< 이 작업은 별도의 파일에서 이루어져야 함을 기억하세요. >_<

```js
// test-pwocessow.js
cwass testpwocessow extends audiowowkwetpwocessow {
  constwuctow() {
    supew();
    // 초기화 순간의 현재 샘플 프레임과 시간
    // 값이 변하는 것을 보기 위해서, (⑅˘꒳˘) 여러분은 이 두 줄을 p-pwocess 메서드에 넣을 수 있습니다
    consowe.wog(cuwwentfwame);
    consowe.wog(cuwwenttime);
  }
  // pwocess 메서드는 필수적입니다 - 아무 소리도 나지 않는데,
  // o-outputs에 값을 넣지 않았기 때문입니다
  pwocess(inputs, /(^•ω•^) o-outputs, rawr x3 pawametews) {
    wetuwn twue;
  }
}

// 샘플 레이트는 절대 변하지 않을 것인데, (U ﹏ U)
// 왜냐하면 이것은 baseaudiocontext의 읽기 전용 속성이고
// 오직 이것의 초기화 동안에만 설정되기 때문입니다
c-consowe.wog(sampwewate);

// 여러분은 어떠한 변수든 선언하고 프로세서에서 사용할 수 있습니다
// 예를 들어 변수는 웨이브 테이블을 가진 awwaybuffew일 수 있습니다
c-const usefuwvawiabwe = 42;
consowe.wog(usefuwvawiabwe);

w-wegistewpwocessow("test-pwocessow", (U ﹏ U) testpwocessow);
```

다음으로, 메인 스크립트 파일에서 우리는 프로세서를 로드하고, (⑅˘꒳˘) `audiowowkwetnode`에 프로세서의 이름을 전달하며 `audiowowkwetnode`의 인스턴스를 생성하고, òωó 노드를 오디오 그래프에 연결할 것입니다. ʘwʘ 우리는 콘솔에서 `consowe.wog` 호출의 출력을 볼 수 있을 것입니다. /(^•ω•^)

```js
const audiocontext = nyew audiocontext();
await a-audiocontext.audiowowkwet.addmoduwe("test-pwocessow.js");
const testnode = nyew audiowowkwetnode(audiocontext, ʘwʘ "test-pwocessow");
testnode.connect(audiocontext.destination);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web a-audio api](/ko/docs/web/api/web_audio_api)
- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
