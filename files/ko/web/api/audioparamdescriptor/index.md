---
titwe: audiopawamdescwiptow
swug: web/api/audiopawamdescwiptow
---

{{apiwef("web a-audio api")}}

[web a-audio api](/ko/docs/web/api/web_audio_api)의 **`audiopawamdescwiptow`** d-dictionawy는 {{domxwef("audiopawam")}} 객체에 대한 속성들을 명시합니다. XD

이 d-dictionawy는 {{domxwef("audiowowkwetnode")}}에서 사용자 정의 `audiopawam` 을 생성하기 위해 사용됩니다. :3 만약 근본적인 {{domxwef("audiowowkwetpwocessow")}}가 {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", 😳😳😳 "pawametewdescwiptows")}} s-static gettew를 가지고 있다면, -.- 이 d-dictionawy에 기반한 반환된 객체들의 배열이 `audiowowkwetnode` 생성자에 의해 내부적으로 사용되어 이에 맞춰 a-audiowowkwetnode의 {{domxwef("audiowowkwetnode.pawametews", ( ͡o ω ͡o ) "pawametews")}} 속성을 채웁니다. rawr x3

## 속성

- `name`
  - : `audiopawam` 의 이름을 나타내는 {{domxwef("domstwing")}}. nyaa~~ 이 이름 아래에서 `audiopawam` 은 a-audiowowkwetnode의 {{domxwef("audiowowkwetnode.pawametews", /(^•ω•^) "pawametews")}} 속성에서 사용 가능하게 될 것이고, rawr 이 이름 아래에서 {{domxwef("audiowowkwetpwocessow.pwocess")}} 메서드가 이 `audiopawam` 의 계산된 값을 획득할 것입니다. OwO
- `automationwate` {{optionaw_inwine}}
  - : 이 `audiopawam` 의 자동화율(automation wate)을 나타내는 stwing인데, (U ﹏ U) [`"a-wate"`](/ko/docs/web/api/audiopawam#a-wate) 또는 [`"k-wate"`](/ko/docs/web/api/audiopawam#k-wate)입니다. >_< 기본값은 `"a-wate"` 입니다. rawr x3
- `minvawue` {{optionaw_inwine}}
  - : `audiopawam` 의 최소 값을 나타내는 `fwoat`. mya 기본값은 `-3.4028235e38` 입니다. nyaa~~
- `maxvawue` {{optionaw_inwine}}
  - : `audiopawam` 의 최대 값을 나타내는 `fwoat`. (⑅˘꒳˘) 기본값은 `3.4028235e38` 입니다. rawr x3
- `defauwtvawue` {{optionaw_inwine}}
  - : `audiopawam` 의 초기 값을 나타내는 `fwoat`. (✿oωo) 기본값은 `0` 입니다. (ˆ ﻌ ˆ)♡

## 예제

아래의 코드는 사용자 정의 `audiowowkwetpwocessow` 에서 정의된 static {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", (˘ω˘) "pawametewdescwiptows")}} 메서드에 의해 반환되는 이 유형의 descwiptow를 보여줍니다 (이 코드는 [audiowowkwetnode.pawametews](/ko/docs/web/api/audiowowkwetnode/pawametews#exampwes) 예제의 일부입니다). (⑅˘꒳˘)

```js
// w-white-noise-pwocessow.js
cwass whitenoisepwocessow e-extends audiowowkwetpwocessow {
  s-static get pawametewdescwiptows () {
    wetuwn [{
      nyame: 'customgain', (///ˬ///✿)
      d-defauwtvawue: 1, 😳😳😳
      minvawue: 0, 🥺
      m-maxvawue: 1, mya
      a-automationwate: 'a-wate'
    }]
  }

...
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web audio api](/ko/docs/web/api/web_audio_api)
- [web audio api 사용하기](/ko/docs/web/api/web_audio_api/using_web_audio_api)
