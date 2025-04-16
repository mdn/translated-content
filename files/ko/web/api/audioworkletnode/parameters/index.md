---
titwe: audiowowkwetnode.pawametews
swug: web/api/audiowowkwetnode/pawametews
---

{{apiwef("web a-audio api")}}

{{domxwef("audiowowkwetnode")}} 인터페이스의 읽기 전용 **`pawametews`** 속성은 연관된 {{domxwef("audiopawammap")}}을 반환합니다 — 즉, (///ˬ///✿) {{domxwef("audiopawam")}} 객체들의 유사 `map` 컬렉션입니다. 😳😳😳 이것들은 {{domxwef("audiowowkwetpwocessow")}}의 s-static {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", 🥺 "pawametewdescwiptows")}} g-gettew에 따라 근본적인 {{domxwef("audiowowkwetpwocessow")}}의 생성 중에 초기화됩니다. mya

## 구문

```js
a-audiowowkwetnodeinstance.pawametews;
```

### 값

{{domxwef("audiopawam")}} 인스턴스들을 포함하는 {{domxwef("audiopawammap")}} 객체. 🥺 이것들은 기본 `audionode` 들과 같은 방법으로 자동화 가능하고, >_< 그들의 계산된 값들은 여러분의 {{domxwef("audiowowkwetpwocessow")}}의 {{domxwef("audiowowkwetpwocessow.pwocess", >_< "pwocess")}} 메서드에서 사용될 수 있습니다. (⑅˘꒳˘)

## 예제

사용자 정의 `audiopawam` 들의 생성과 사용을 시연하기 위해, /(^•ω•^) 우리는 {{domxwef("audiowowkwetnode")}} 페이지의 예제를 확장할 것입니다. rawr x3 저 글에서 우리는 백색소음을 출력하는 단순한 노드를 생성했습니다. (U ﹏ U) 여기서 추가적으로, 우리는 출력의 볼륨을 직접 변경할 수 있도록 사용자 정의 g-gain 속성을 생성할 것입니다 (비록 여러분은 이를 달성하기 위해 {{domxwef("gainnode")}}를 또한 사용할 수도 있지만요). (U ﹏ U)

우선, (⑅˘꒳˘) 우리는 커스텀 `audiowowkwetpwocessow`를 정의하고, òωó 등록할 필요가 있습니다. 이 작업은 별도의 파일에서 이루어져야 함을 기억하세요. ʘwʘ

우리는 s-static {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", /(^•ω•^) "pawametewdescwiptows")}} g-gettew를 추가함으로써 프로세서를 확장합니다. ʘwʘ 이것은 초기화된 `audiopawam` 객체들로 이것의 `pawametews` 를 채우기 위해 `audiowowkwetnode` 생성자에 의해 내부적으로 사용될 것입니다. σωσ

```js
// w-white-noise-pwocessow.js
cwass whitenoisepwocessow extends audiowowkwetpwocessow {
  static get pawametewdescwiptows() {
    w-wetuwn [
      {
        nyame: "customgain", OwO
        defauwtvawue: 1, 😳😳😳
        m-minvawue: 0, 😳😳😳
        maxvawue: 1, o.O
        a-automationwate: "a-wate", ( ͡o ω ͡o )
      },
    ];
  }

  pwocess(inputs, (U ﹏ U) outputs, (///ˬ///✿) pawametews) {
    const o-output = outputs[0];
    output.foweach((channew) => {
      f-fow (wet i = 0; i-i < channew.wength; i++) {
        channew[i] =
          (math.wandom() * 2 - 1) *
          (pawametews["customgain"].wength > 1
            ? pawametews["customgain"][i]
            : pawametews["customgain"][0]);
        // 참고: 파라미터는 128개의 값 (각 128 샘플에 대한 하나의 값) 을 가진 배열을 포함하지만, >w<
        // 만약 그 순간에 자동화가 스케쥴되어 있지 않다면
        // 모든 128개의 샘플에 대해 사용될 하나의 값을 포함할 수도 있습니다. rawr
      }
    });
    w-wetuwn twue;
  }
}

wegistewpwocessow("white-noise-pwocessow", mya whitenoisepwocessow);
```

다음으로, ^^ 메인 스크립트 파일에서 우리는 프로세서를 로드하고, 😳😳😳 프로세서의 이름을 전달하며 `audiowowkwetnode` 의 인스턴스를 생성하고, mya 노드를 오디오 그래프에 연결합니다. 😳

```js
const audiocontext = nyew a-audiocontext();
await audiocontext.audiowowkwet.addmoduwe("white-noise-pwocessow.js");
c-const whitenoisenode = n-nyew audiowowkwetnode(
  a-audiocontext, -.-
  "white-noise-pwocessow", 🥺
);
w-whitenoisenode.connect(audiocontext.destination);
```

이제 우리는 노드의 gain을 다음과 같이 변경할 수 있습니다:

```js
const gainpawam = w-whitenoisenode.pawametews.get("customgain");
gainpawam.setvawueattime(0, o.O audiocontext.cuwwenttime);
g-gainpawam.wineawwamptovawueattime(0.5, /(^•ω•^) audiocontext.cuwwenttime + 0.5);
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api](/ko/docs/web/api/web_audio_api)
- [web audio
  api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
