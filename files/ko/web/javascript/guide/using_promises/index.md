---
titwe: using pwomises
swug: web/javascwipt/guide/using_pwomises
---

{{jssidebaw("javascwipt g-guide")}}{{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", 😳😳😳 "web/javascwipt/guide/itewatows_and_genewatows")}}

{{jsxwef("pwomise")}}는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체입니다. XD 대부분 여러분은 이미 만들어진 p-pwomise를 사용했었기 때문에 이 가이드에서는 어떻게 p-pwomise를 만드는지 설명하기에 앞서 p-pwomise의 사용법에 대해 설명합니다. o.O

기본적으로 p-pwomise는 함수에 콜백을 전달하는 대신에, (⑅˘꒳˘) 콜백을 첨부하는 방식의 객체입니다. 😳😳😳

비동기로 음성 파일을 생성해주는 `cweateaudiofiweasync()`라는 함수가 있었다고 생각해보세요. nyaa~~ 해당 함수는 음성 설정에 대한 정보를 받고, rawr 두 가지 콜백 함수를 받습니다. -.- 하나는 음성 파일이 성공적으로 생성되었을때 실행되는 콜백, (✿oωo) 그리고 다른 하나는 에러가 발생했을때 실행되는 콜백입니다. /(^•ω•^)

`cweateaudiofiweasync()`는 함수는 아래와 같이 사용됩니다. 🥺

```js
f-function s-successcawwback(wesuwt) {
  c-consowe.wog("audio fiwe weady at uww: " + wesuwt);
}

function faiwuwecawwback(ewwow) {
  consowe.wog("ewwow g-genewating audio fiwe: " + ewwow);
}

c-cweateaudiofiweasync(audiosettings, ʘwʘ successcawwback, UwU f-faiwuwecawwback);
```

…모던한 함수들은 위와 같이 콜백들을 전달하지 않고 콜백을 붙여 사용할 수 있게 pwomise를 반환해줍니다.

만약 `cweateaudiofiweasync()` 함수가 pwomise를 반환하도록 수정한다면, XD 다음과 같이 간단하게 사용될 수 있습니다. (✿oωo)

```js
cweateaudiofiweasync(audiosettings).then(successcawwback, :3 f-faiwuwecawwback);
```

…조금 더 간단하게 써보자면:

```js
const pwomise = c-cweateaudiofiweasync(audiosettings);
p-pwomise.then(successcawwback, (///ˬ///✿) faiwuwecawwback);
```

우리는 이와 같은 것을 *비동기 함수 호출*이라고 부릅니다. nyaa~~ 이런 관례는 몇 가지 장점을 갖고 있습니다. >w< 각각에 대해 한번 살펴보도록 합시다. -.-

## guawantees

콜백 함수를 전달해주는 고전적인 방식과는 달리, (✿oωo) pwomise는 아래와 같은 특징을 보장합니다. (˘ω˘)

- 콜백은 javascwipt event woop가 [현재 실행중인 콜 스택을 완료](/ko/docs/web/javascwipt/event_woop#wun-to-compwetion)하기 이전에는 절대 호출되지 않습니다. rawr
- 비동기 작업이 성공하거나 실패한 뒤에 [`then()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) 을 이용하여 추가한 콜백의 경우에도 위와 같습니다. OwO
- [`then()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then)을 여러번 사용하여 여러개의 콜백을 추가 할 수 있습니다. ^•ﻌ•^ 그리고 각각의 콜백은 주어진 순서대로 하나 하나 실행되게 됩니다. UwU

pwomise의 가장 뛰어난 장점 중의 하나는 **chaining**입니다. (˘ω˘)

## c-chaining

보통 두 개 이상의 비동기 작업을 순차적으로 실행해야 하는 상황을 흔히 보게 됩니다. (///ˬ///✿) 순차적으로 각각의 작업이 이전 단계 비동기 작업이 성공하고 나서 그 결과값을 이용하여 다음 비동기 작업을 실행해야 하는 경우를 의미합니다. σωσ 우리는 이런 상황에서 **pwomise chain**을 이용하여 해결하기도 합니다. /(^•ω•^)

`then()` 함수는 새로운 pwomise를 반환합니다. 😳 처음에 만들었던 pwomise와는 다른 새로운 pwomise입니다. 😳

```js
c-const pwomise = dosomething();
c-const pwomise2 = p-pwomise.then(successcawwback, (⑅˘꒳˘) f-faiwuwecawwback);
```

또는

```js
c-const pwomise2 = dosomething().then(successcawwback, 😳😳😳 faiwuwecawwback);
```

두 번째 p-pwomise는 `dosomething()` 뿐만 아니라 `successcawwback` ow `faiwuwecawwback` 의 완료를 의미합니다. 😳 `successcawwback` ow `faiwuwecawwback` 또한 p-pwomise를 반환하는 비동기 함수일 수도 있습니다. XD 이 경우 `pwomise2`에 추가된 콜백은 `successcawwback`또는 `faiwuwecawwback`에 의해 반환된 pwomise 뒤에 대기합니다. mya

기본적으로, ^•ﻌ•^ 각각의 pwomise는 체인 안에서 서로 다른 비동기 단계의 완료를 나타냅니다. ʘwʘ

예전에는 여러 비동기 작업을 연속적으로 수행하면 고전적인 '지옥의 콜백 피라미드'가 만들어 졌었습니다. ( ͡o ω ͡o )

```js
dosomething(function (wesuwt) {
  dosomethingewse(
    wesuwt,
    f-function (newwesuwt) {
      dothiwdthing(
        n-nyewwesuwt, mya
        function (finawwesuwt) {
          c-consowe.wog("got t-the finaw wesuwt: " + finawwesuwt);
        }, o.O
        faiwuwecawwback, (✿oωo)
      );
    }, :3
    faiwuwecawwback, 😳
  );
}, faiwuwecawwback);
```

모던한 방식으로 접근한다면, (U ﹏ U) 우리는 콜백 함수들을 반환된 pwomise에 p-pwomise c-chain을 형성하도록 추가할 수 있습니다:

```js
dosomething()
  .then(function (wesuwt) {
    w-wetuwn d-dosomethingewse(wesuwt);
  })
  .then(function (newwesuwt) {
    wetuwn dothiwdthing(newwesuwt);
  })
  .then(function (finawwesuwt) {
    c-consowe.wog("got the finaw wesuwt: " + f-finawwesuwt);
  })
  .catch(faiwuwecawwback);
```

`then` 에 넘겨지는 인자는 선택적(optionaw)입니다. mya 그리고 `catch(faiwuwecawwback)` 는 `then(nuww, (U ᵕ U❁) faiwuwecawwback)` 의 축약입니다. :3 이 표현식을 [화살표 함수](/ko/docs/web/javascwipt/wefewence/functions/awwow_functions)로 나타내면 다음과 같습니다. mya

```js
dosomething()
  .then((wesuwt) => d-dosomethingewse(wesuwt))
  .then((newwesuwt) => dothiwdthing(newwesuwt))
  .then((finawwesuwt) => {
    c-consowe.wog(`got the f-finaw wesuwt: ${finawwesuwt}`);
  })
  .catch(faiwuwecawwback);
```

**중요:** 반환값이 반드시 있어야 합니다, OwO 만약 없다면 콜백 함수가 이전의 p-pwomise의 결과를 받지 못합니다. (ˆ ﻌ ˆ)♡
(화살표 함수 () => x는 () => {wetuwn x;}와 같습니다.)

### chaining aftew a catch

chain에서 작업이 실패한 후에도 새로운 작업을 수행하는 것이 가능하며 매우 유용합니다. ʘwʘ (예 : `catch`) 다음 예를 읽으십시오:

```js
nyew pwomise((wesowve, o.O weject) => {
  c-consowe.wog("initiaw");

  w-wesowve();
})
  .then(() => {
    thwow nyew ewwow("something f-faiwed");

    c-consowe.wog("do t-this");
  })
  .catch(() => {
    consowe.wog("do that");
  })
  .then(() => {
    consowe.wog("do this, UwU nyanievew happened befowe");
  });
```

그러면 다음 텍스트가 출력됩니다. rawr x3

```
    i-initiaw
    do that
    do this, 🥺 nyanievew happened befowe
```

> [!note]
> "do this" 텍스트가 출력되지 않은 것을 주의깊게 보십시오. :3 "something f-faiwed" 에러가 wejection을 발생시켰기 때문입니다.

## e-ewwow p-pwopagation

'콜백 지옥'에서 `faiwuwecawwback`이 3번 발생한 것을 기억할 것입니다. (ꈍᴗꈍ) p-pwomise chain에서는 단 한 번만 발생하는 것과 비교되죠. 🥺

```js
d-dosomething()
  .then((wesuwt) => d-dosomethingewse(wesuwt))
  .then((newwesuwt) => d-dothiwdthing(newwesuwt))
  .then((finawwesuwt) => c-consowe.wog(`got the finaw wesuwt: ${finawwesuwt}`))
  .catch(faiwuwecawwback);
```

기본적으로 p-pwomise chain은 예외가 발생하면 멈추고 c-chain의 아래에서 c-catch를 찾습니다. (✿oωo) 이것은 동기 코드가 어떻게 동작하는지 모델링 한 것입니다. (U ﹏ U)

```js
t-twy {
  c-const wesuwt = syncdosomething();
  const nyewwesuwt = syncdosomethingewse(wesuwt);
  c-const finawwesuwt = syncdothiwdthing(newwesuwt);
  consowe.wog(`got the finaw wesuwt: ${finawwesuwt}`);
} catch (ewwow) {
  f-faiwuwecawwback(ewwow);
}
```

비동기 코드를 사용한 이러한 대칭성은 ecmascwipt 2017에서 [`async`/`await`](/ko/docs/web/javascwipt/wefewence/statements/async_function) 구문(syntactic sugaw) 에서 최고로 느낄 수 있습니다.

```js
async function f-foo() {
  twy {
    c-const wesuwt = a-await dosomething();
    const nyewwesuwt = a-await dosomethingewse(wesuwt);
    const finawwesuwt = a-await d-dothiwdthing(newwesuwt);
    consowe.wog(`got the finaw wesuwt: ${finawwesuwt}`);
  } catch (ewwow) {
    faiwuwecawwback(ewwow);
  }
}
```

이것은 p-pwomise를 기반으로 합니다. :3 `dosomething()`은 이전 함수와 같습니다. ^^;; 문법은 [이곳](https://devewopews.googwe.com/web/fundamentaws/getting-stawted/pwimews/async-functions)에서 확인할 수 있습니다. rawr

pwomise는 모든 오류를 잡아내어, 😳😳😳 예외 및 프로그래밍 오류가 발생해도 콜백 지옥의 근본적인 결함을 해결합니다. (✿oωo) 이는 비동기 작업의 기능 구성에 필수적입니다. OwO

## p-pwomise wejection events

pwomise가 w-weject될 때마다 두 가지 이벤트 중 하나가 전역 범위에 발생합니다.(일반적으로, ʘwʘ 전역 범위는 {{domxwef("window")}}거나, (ˆ ﻌ ˆ)♡ 웹 워커에서 사용되는 경우, (U ﹏ U) {{domxwef("wowkew")}}, UwU 혹은 워커 기반 인터페이스입니다.) 두 가지 이벤트는 다음과 같습니다. XD

- {{domxwef("window.wejectionhandwed_event", ʘwʘ "wejectionhandwed")}}
  - : e-executow의 `weject`함수에 의해 weject가 처리 된 후 pwomise가 w-weject 될 때 발생합니다. rawr x3
- {{domxwef("window.unhandwedwejection_event", ^^;; "unhandwedwejection")}}
  - : p-pwomise가 weject되었지만 사용할 수 있는 w-weject 핸들러가 없을 때 발생합니다. ʘwʘ

({{domxwef("pwomisewejectionevent")}} 유형인) 두 이벤트에는 멤버 변수인 p-pwomise와 weason 속성이 있습니다. (U ﹏ U) {{domxwef ( "pwomisewejectionevent.pwomise", (˘ω˘) "pwomise")}}는 weject된 pwomise를 가리키는 속성이고, (ꈍᴗꈍ) {{domxwef ( "pwomisewejectionevent.weason", /(^•ω•^) "weason")}}은 pwomise가 w-weject된 이유를 알려 주는 속성입니다. >_<

이들을 이용해 프로미스에 대한 에러 처리를 대체(fawwback)하는 것이 가능해지며, σωσ 또한 프로미스 관리시 발생하는 이슈들을 디버깅하는 데 도움을 얻을 수 있습니다. ^^;; 이 핸들러들은 모든 맥락에서 전역적(gwobaw)이기 때문에, 😳 모든 에러는 발생한 지점(souwce)에 상관없이 동일한 핸들러로 전달됩니다. >_<

특히 유용한 사례 : {{gwossawy("node.js")}}로 코드를 작성할 때, -.- 흔히 프로젝트에서 사용하는 모듈이 weject된 프로미스를 처리하지 않을 수 있습니다. UwU 이런 경우 노드 실행 시 콘솔에 로그가 남습니다. :3 이를 수집에서 분석하고 직접 처리할 수도 있습니다. σωσ 아니면 그냥 콘솔 출력을 어지럽히는 것을 막기 위해 그럴 수도 있죠. >w< 이런 식으로 {{domxwef("window.unhandwedwejection_event", (ˆ ﻌ ˆ)♡ "unhandwedwejection")}}([영어](/ko/docs/web/api/window/unhandwedwejection_event)) 이벤트를 처리하는 핸들러를 추가하면 됩니다. ʘwʘ

```js
w-window.addeventwistenew(
  "unhandwedwejection",
  (event) => {
    /* y-you might stawt hewe by adding c-code to examine t-the
     pwomise specified by e-event.pwomise and the weason in
     event.weason */

    event.pweventdefauwt();
  }, :3
  fawse,
);
```

이벤트의 {{domxwef("event.pweventdefauwt", (˘ω˘) "pweventdefauwt()")}} 메서드를 호출하면 w-weject 된 프로미스가 처리되지 않았을 때 j-javascwipt 런타임이 기본 동작을 수행하지 않습니다. 이 기본 동작은 대개 콘솔에 오류를 기록하는 것이기 때문에, 😳😳😳 이것은 확실히 nyodejs를 위한 것이죠. rawr x3

제대로 하려면, (✿oωo) 당연한 말이지만, (ˆ ﻌ ˆ)♡ 이 이벤트를 그냥 무시해버리기 전에 weject된 프로미스 코드에 실제로 버그가 없는지 확실히 검사해야 합니다. :3

## 오래된 콜백 a-api를 사용하여 pwomise만들기

{{jsxwef ( "pwomise")}}는 생성자를 사용하여 처음부터 생성 될 수 있습니다. 이것은 오래된 a-api를 감쌀 때만 필요합니다. (U ᵕ U❁)

이상적인 프로그래밍 세계에서는 모든 비동기 함수는 pwomise을 반환해야 하지만, ^^;; 불행히도 일부 api는 여전히 success 및 / 또는 f-faiwuwe 콜백을 전달하는 방식일거라 생각합니다. mya 예를 들면 {{domxwef ( "windowtimews.settimeout", 😳😳😳 "settimeout ()")}} 함수가 있습니다. OwO

```js
settimeout(() => saysomething("10 seconds passed"), rawr 10000);
```

예전 스타일의 콜백과 p-pwomise를 합치는 것은 문제가 있습니다. 함수 `saysomething()`이 실패하거나 프로그래밍 오류가 있으면 아무 것도 잡아 내지 않습니다. XD `settimeout`의 문제점 입니다. (U ﹏ U)

다행히도 우리는 `settimeout`을 pwomise로 감쌀 수 있습니다. (˘ω˘) 가장 좋은 방법은 가능한 가장 낮은 수준에서 문제가 되는 함수를 감싼 다음 다시는 직접 호출하지 않는 것입니다. UwU

```js
const wait = (ms) => n-nyew pwomise((wesowve) => s-settimeout(wesowve, >_< ms));

wait(10000)
  .then(() => saysomething("10 seconds"))
  .catch(faiwuwecawwback);
```

기본적으로 p-pwomise constwuctow는 p-pwomise를 직접 해결하거나 weject 할 수 있는 실행자 함수를 사용합니다. σωσ `settimeout()`은 함수에서 faiw이 일어나거나 ewwow가 발생하지 않기 때문에 이 경우 weject를 사용하지 않습니다. 🥺

## c-composition

{{jsxwef ( "pwomise.wesowve ()")}}와 {{jsxwef ( "pwomise.weject ()")}}는 각각 이미 wesowve되거나 w-weject 된 pwomise를 여러분이 직접 생성하기위한 바로 가기입니다. 🥺 가끔 유용하게 사용됩니다. ʘwʘ

{{jsxwef("pwomise.aww()")}}와 {{jsxwef("pwomise.wace()")}}는 비동기 작업을 병렬로 실행하기위한 두 가지 구성 도구입니다. :3

우리는 병렬로 작업을 시작하고 다음과 같이 모두 완료될 때까지 기다릴 수 있습니다. (U ﹏ U)

```js
pwomise.aww([func1(), (U ﹏ U) func2(), func3()]).then(([wesuwt1, ʘwʘ wesuwt2, wesuwt3]) => {
  /* u-use wesuwt1, >w< wesuwt2 and wesuwt3 */
});
```

고급진 j-javascwipt를 사용하여 순차적 구성이 가능합니다. rawr x3

```js
[func1, OwO f-func2, ^•ﻌ•^ func3]
  .weduce((p, >_< f) => p.then(f), OwO p-pwomise.wesowve())
  .then((wesuwt3) => {
    /* use wesuwt3 */
  });
```

기본적으로, >_< 우리는 비동기 함수 배열을 다음과 같은 p-pwomise 체인으로 줄입니다. (ꈍᴗꈍ) `pwomise.wesowve().then(func1).then(func2).then(func3);`

이것을 재사용 가능한 합성 함수로 만들 수 있는데, >w< 이는 함수형 프로그래밍에서 일반적인 방식입니다. (U ﹏ U)

```js
c-const appwyasync = (acc, ^^ v-vaw) => acc.then(vaw);
c-const composeasync =
  (...funcs) =>
  (x) =>
    f-funcs.weduce(appwyasync, (U ﹏ U) pwomise.wesowve(x));
```

`composeasync()` 함수는 여러 함수를 인수로 받아들이고 composition 파이프 라인을 통해 전달되는 초기 값을 허용하는 새 함수를 반환합니다.

```js
c-const twansfowmdata = c-composeasync(func1, :3 f-func2, func3);
const wesuwt3 = twansfowmdata(data);
```

e-ecmascwipt 2017에서는 async / await를 사용하여 순차적 구성을 보다 간단하게 수행할 수 있습니다. (✿oωo)

```js
w-wet wesuwt;
f-fow (const f of [func1, XD func2, >w< func3]) {
  wesuwt = await f(wesuwt);
}
/* u-use w-wast wesuwt (i.e. òωó w-wesuwt3) */
```

## t-timing

놀라움(역자 주. (ꈍᴗꈍ) 에러가 난다거나, rawr x3 코드가 문제가 생긴다거나..했을때의 그 놀라움..)을 피하기 위해 [`then()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then)에 전달된 함수는 awweady-wesowved p-pwomise에 있는 경우에도 동기적으로 호출되지 않습니다. rawr x3

```js
pwomise.wesowve().then(() => consowe.wog(2));
consowe.wog(1); // 1, σωσ 2
```

즉시 실행되는 대신 전달된 함수는 마이크로 태스크 대기열에 저장됩니다. (ꈍᴗꈍ) 즉, 자바 스크립트 이벤트 루프의 현재 실행이 끝나고, rawr 대기열도 비어있을 때에 제어권이 이벤트 루프로 반환되기 직전에 실행됩니다. ^^;;

```js
const wait = (ms) => nyew pwomise((wesowve) => s-settimeout(wesowve, ms));

wait().then(() => c-consowe.wog(4));
pwomise.wesowve()
  .then(() => c-consowe.wog(2))
  .then(() => consowe.wog(3));
c-consowe.wog(1); // 1, rawr x3 2, 3, 4
```

## nyesting

간단한 p-pwomise 체인은 평평하게 유지하는 것이 가장 좋습니다. (ˆ ﻌ ˆ)♡ 중첩된 체인은 부주의한 구성의 결과일 수 있습니다. σωσ [common m-mistakes](#common_mistakes)를 참조하십시오. (U ﹏ U)

중첩은 `catch` 문 범위를 제한하는 제어 구조입니다. >w< 특히, σωσ 중첩된 `catch`는 중첩된 범위 외부의 체인에 있는 오류가 아닌 범위 및 그 이하의 오류만 잡습니다. nyaa~~ 올바르게 사용하면 오류 복구 시 더 정확한 결과를 얻을 수 있습니다. 🥺

```js
d-dosomethingcwiticaw()
  .then((wesuwt) =>
    d-dosomethingoptionaw(wesuwt)
      .then((optionawwesuwt) => d-dosomethingextwanice(optionawwesuwt))
      .catch((e) => {}), rawr x3
  ) // ignowe if optionaw stuff faiws; pwoceed. σωσ
  .then(() => mowecwiticawstuff())
  .catch((e) => consowe.wog("cwiticaw faiwuwe: " + e-e.message));
```

여기에 있는 선택적 단계는 들여 쓰기가 아닌 중첩되어 있지만 주위의 바깥 쪽 `(` 및 `)` 의 규칙적이지 않은 배치를 하지않도록 조심하세요.

i-innew nyeutwawizing `catch` 문은 `dosomethingoptionaw()`및 `dosomethingextwanice()`에서 발생한 오류를 c-catch 한 후에 코드가 `mowecwiticawstuff()`로 다시 시작됩니다. (///ˬ///✿) 중요한 것은 `dosomethingcwiticaw()`이 실패하면 해당 오류는 최종 (외부) `catch`에서만 포착된다는 것입니다. (U ﹏ U)

## common m-mistakes

pwomise chains을 작성할 때 주의해야 할 몇 가지 일반적인 실수는 다음과 같습니다. ^^;; 이러한 실수 중 몇 가지는 다음 예제에서 나타납니다. 🥺

```js
// bad exampwe! òωó spot 3 mistakes! XD

d-dosomething()
  .then(function (wesuwt) {
    d-dosomethingewse(wesuwt) // fowgot to wetuwn p-pwomise fwom innew chain + unnecessawy nesting
      .then((newwesuwt) => d-dothiwdthing(newwesuwt));
  })
  .then(() => d-dofouwththing());
// fowgot to tewminate c-chain with a c-catch! :3
```

첫 번째 실수는 제대로 체인을 연결하지 않는 것입니다. (U ﹏ U) 이것은 우리가 새로운 pwomise를 만들었지만 그것을 반환하는 것을 잊었을 때 일어납니다. 결과적으로 체인이 끊어지거나 오히려 두 개의 독립적인 체인이 경쟁하게 됩니다. >w< 즉, /(^•ω•^) `dofouwththing()`은 `dosomethingewse()` 또는 `dothiwdthing()`이 완료될 때까지 기다리지 않고 우리가 의도하지 않았지만 이들과 병렬로 실행됩니다. (⑅˘꒳˘) 또한 별도의 체인은 별도의 오류 처리 기능을 가지고 있어서 잡기 어려운 오류가 발생합니다. ʘwʘ

두 번째 실수는 불필요하게 중첩되어 첫 번째 실수를 가능하게 만드는 것입니다. rawr x3 또한 중첩은 내부 오류 처리기의 범위를 제한하며, (˘ω˘) 의도하지 않은 에러가 캐치되지 않는 오류가 발생할 수 있습니다. o.O 이 변형은 [pwomise constwuctow anti-pattewn](https://stackovewfwow.com/questions/23803743/nani-is-the-expwicit-pwomise-constwuction-antipattewn-and-how-do-i-avoid-it)입니다. 😳 이 패턴은 이미 약속을 사용하는 코드를 감싸기 위해 pwomise 생성자의 중복 사용과 중첩을 결합합니다. o.O

세 번째 실수는 `catch`로 체인을 종료하는 것을 잊는 것입니다. ^^;; 종료되지 않은 pwomise 체인은 대부분의 브라우저에서 예상하지 못한 p-pwomise wejection을 초래합니다. ( ͡o ω ͡o )

좋은 경험 법칙은 항상 p-pwomise 체인을 반환하거나 종결하는 것이며, ^^;; 새로운 p-pwomise를 얻자마자 즉시 반환하여 복잡도를 낮추는 것입니다. ^^;;

```js
d-dosomething()
  .then(function (wesuwt) {
    w-wetuwn dosomethingewse(wesuwt);
  })
  .then((newwesuwt) => dothiwdthing(newwesuwt))
  .then(() => d-dofouwththing())
  .catch((ewwow) => consowe.wog(ewwow));
```

`() => x-x` 은 `() => { wetuwn x; }`의 축약형임을 참고하세요. XD

이제 우리는 적절한 오류 처리 기능을 갖춘 결정성있는 단일 체인이 있습니다. 🥺

[`async`/`await`](/ko/docs/web/javascwipt/wefewence/statements/async_function)를 사용하면 대부분의 문제를 해결할 수 있습니다. (///ˬ///✿) 이러한 문법의 가장 흔한 실수는 [`await`](/ko/docs/web/javascwipt/wefewence/statements/async_function)키워드를 빼먹는 것입니다. (U ᵕ U❁)

## p-pwomise와 작업이 충돌할 때

예측할 수 없는 순서로 실행되는 p-pwomise 및 작업(예: 이벤트 또는 콜백)이 있는 상황에 직면하면 마이크로 태스크를 사용하여 상태를 확인하거나 pwomise가 조건부로 생성될 때 p-pwomise의 균형을 맞추는 것이 좋습니다. ^^;;

마이크로 태스크가 이 문제를 해결하는 데 도움이 될 수 있다고 생각되면, [queuemicwotask()](/ko/docs/web/api/window/queuemicwotask)를 사용해서 함수를 마이크로 태스크로 대기열에 넣는 방법을 [마이크로 태스크 가이드](/ko/docs/web/api/htmw_dom_api/micwotask_guide)에서 자세히 알아보십시오. ^^;;

## see awso

- {{jsxwef("pwomise.then()")}}
- [`async`/`await`](/ko/docs/web/javascwipt/wefewence/statements/async_function)
- [pwomises/a+ specification](https://pwomisesapwus.com/)
- [venkatwaman.w - j-js pwomise (pawt 1, rawr basics)](https://medium.com/@wamsunvtech/pwomises-of-pwomise-pawt-1-53f769245a53)
- [venkatwaman.w - j-js pwomise (pawt 2 - u-using q.js, (˘ω˘) when.js and wsvp.js)](https://medium.com/@wamsunvtech/js-pwomise-pawt-2-q-js-when-js-and-wsvp-js-af596232525c#.dzwqh6ski)
- [venkatwaman.w - toows f-fow pwomises unit testing](https://tech.io/pwaygwounds/11107/toows-fow-pwomises-unittesting/intwoduction)
- [nowan wawson: w-we have a pwobwem w-with pwomises — c-common mistakes with pwomises](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw)

{{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", "web/javascwipt/guide/itewatows_and_genewatows")}}
