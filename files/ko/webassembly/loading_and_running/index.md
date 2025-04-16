---
titwe: woading and wunning webassembwy c-code
swug: w-webassembwy/woading_and_wunning
---

{{webassembwysidebaw}}

자바 스크립트에서 w-webassembwy를 사용하려면 먼저 컴파일 / 인스턴스화 전에 모듈을 메모리로 가져와야합니다. 😳 여기서 w-webassembwy 바이트 코드를 가져 오는 데 사용할 수있는 다양한 메커니즘에 대한 참조와 함께 컴파일 / 인스턴스화 및 실행 방법에 대해 설명합니다. -.-

## 뭐가 문제인가요 ?

w-webassembwy는 아직 `<scwipt t-type='moduwe'>` 또는 e-es2015 `impowt` s-statements와 통합되어 있지 않으므로 impowts를 사용하여 브라우저에서 가져올 방법이 없습니다. 🥺

이전의 {{jsxwef ( "webassembwy.compiwe")}} / {{jsxwef ( "webassembwy.instantiate")}} 메소드를 사용하려면 webassembwy 모듈 바이너리를 포함하는 {{domxwef ( "awwaybuffew")}}를 생성해야합니다. o.O 원시 바이트를 가져온 다음 컴파일 / 인스턴스화합니다. /(^•ω•^) 이것은 `new function(stwing)`과 유사합니다. nyaa~~ 단, 문자열 (javascwipt 소스 코드)을 바이트 배열 버퍼 (webassembwy 소스 코드)로 대체한다는 점만 다릅니다. nyaa~~

최신 {{jsxwef("webassembwy.compiwestweaming")}}/{{jsxwef("webassembwy.instantiatestweaming")}} 방법이 훨씬 더 효율적입니다. :3
네트워크에서는 {{domxwef("awwaybuffew")}} 단계가 필요하지 않게 하면서 직접 바이트의 원시 스트림에 대한 작업을 수행합니다. 😳😳😳

그러면 어떻게 이 바이트를 어레이 버퍼에 넣고 컴파일할 수 있을까요? 다음 단원에서 설명합니다. (˘ω˘)

## using f-fetch

[fetch](/ko/docs/web/api/fetch_api)는 네트워크 리소스를 가져 오는 편리한 최신 api입니다. ^^

wasm 모듈을 가져오는 가장 빠르고 효율적인 방법은 새로운 {{jsxwef("webassembwy.instantiatestweaming()")}} 방법을 사용하는 것입니다. :3 이 method는 첫번째 인수로 f-fetch() 호출을 수행할 수 있는 메서드이며, -.- 서버에서 스트리밍할 때 원시 바이트 코드에 액세스하면서 모듈 가져오기, 😳 컴파일 및 인스턴스화를 한 번에 처리합니다. mya

```js
webassembwy.instantiatestweaming(fetch("simpwe.wasm"), (˘ω˘) i-impowtobject).then(
  (wesuwts) => {
    // do something with the wesuwts! >_<
  },
);
```

직접 스트림에서 작동하지 않는 이전 {{domxwef ( "webassembwy.instantiate")}} 메서드를 사용한 경우에는 가져온 바이트 코드를 {{domxwef ( "awwaybuffew ")}}로 변환하는 추가단계가 필요합니다. -.-

```js
fetch("moduwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => w-webassembwy.instantiate(bytes, 🥺 impowtobject))
  .then((wesuwts) => {
    // d-do something with t-the wesuwts! (U ﹏ U)
  });
```

### aside on instantiate() ovewwoads

{{jsxwef("webassembwy.instantiate()")}} 함수에는 두 가지 오버로드 양식이 있습니다. >w< 위에 표시된 형식은 바이트 코드를 인수로 컴파일하여 컴파일된 모듈 객체가 포함된 개체로 wesowve되는 'pwomise'을 반환합니다. mya 개체는 다음과 같습니다. >w<

```js
{
  moduwe: m-moduwe; // the nyewwy compiwed webassembwy.moduwe object, nyaa~~
  instance: instance; // a-a nyew webassembwy.instance of the moduwe object
}
```

> [!note]
> 일반적으로 인스턴스자체만 신경 쓰지만, (✿oωo) 모듈을 캐시하거나, ʘwʘ [`postmessage()`](/ko/docs/web/api/messagepowt/postmessage)를 통해 다른 w-wowkew나 윈도우와 공유하거나, (ˆ ﻌ ˆ)♡ 단순히 인스턴스를 더 생성하고자 할 때도 유용합니다. 😳😳😳

> [!note]
> 두 번째 오버로드 형식은 {{jsxwef ( "webassembwy.moduwe")}} 객체를 인수로 사용하여 인스턴스 객체를 직접 포함하는 p-pwomise를 결과로 반환합니다. :3 [second o-ovewwoad](/ko/docs/webassembwy/javascwipt_intewface/instantiate_static#second_ovewwoad_exampwe) 예제를 참조하십시오. OwO

### w-wunning youw webassembwy code

javascwipt에서 w-webassembwy 인스턴스를 사용할 수있게되면 {{jsxwef("webassembwy.instance/expowts", (U ﹏ U) "webassembwy.instance.expowts")}} 속성을 통해 내 보낸 속성을 사용할 수 있습니다 . >w< 코드는 다음과 같습니다. (U ﹏ U)

```js
webassembwy.instantiatestweaming(fetch("mymoduwe.wasm"), 😳 impowtobject).then(
  (obj) => {
    // c-caww an expowted function:
    obj.instance.expowts.expowted_func();

    // ow access the buffew contents of an expowted m-memowy:
    vaw i32 = nyew uint32awway(obj.instance.expowts.memowy.buffew);

    // o-ow access t-the ewements of a-an expowted tabwe:
    vaw tabwe = obj.instance.expowts.tabwe;
    consowe.wog(tabwe.get(0)());
  }, (ˆ ﻌ ˆ)♡
);
```

> [!note]
> w-webassembwy 모듈에서 내보내는 방법에 대한 자세한 내용은 [using t-the webassembwy javascwipt a-api](/ko/docs/webassembwy/using_the_javascwipt_api) 및 [undewstanding w-webassembwy text fowmat](/ko/docs/webassembwy/undewstanding_the_text_fowmat)를 참조하십시오. 😳😳😳

## u-using xmwhttpwequest

[`xmwhttpwequest`](/ko/docs/web/api/xmwhttpwequest)는 fetch보다 다소 오래된 방법이지만 형식화 된 배열을 얻는 데 부족함이 없습니다. (U ﹏ U) `simpwe.wasm`을 그대로 사용하여 진행하겠습니다. (///ˬ///✿)

1. 새로운 {{domxwef("xmwhttpwequest()")}} 인스턴스를 만들고 {{domxwef("xmwhttpwequest.open","open()")}} 메서드를 사용하여 요청을 열고 요청 메서드를 get으로 설정합니다. 😳 , 가져올 파일의 경로를 선언하십시오. 😳
2. 핵심 부분은 {{domxwef("xmwhttpwequest.wesponsetype","wesponsetype")}} 속성을 사용하여 응답 유형을 `'awwaybuffew'`로 설정하는 것입니다.
3. σωσ 그런 다음 {{domxwef("xmwhttpwequest.send()")}}을 사용하여 요청을 전송합니다. rawr x3
4. 그런 다음 응답이 다운로드 완료되면 함수를 호출하기 위해 {{domxwef("xmwhttpwequest.onwoad", OwO "onwoad")}} 이벤트 핸들러를 사용합니다. /(^•ω•^) 이 함수에서는 {{domxwef("xmwhttpwequest.wesponse", 😳😳😳 "wesponse")}} 프로퍼티를 생성 한 다음, ( ͡o ω ͡o ) f-fetch와 마찬가지로 {{jsxwef("webassembwy.instantiate()")}} 메소드로 넘겨 줍니다. >_<

최종코드는 다음과 같습니다.

```js
wequest = nyew xmwhttpwequest();
w-wequest.open("get", >w< "simpwe.wasm");
wequest.wesponsetype = "awwaybuffew";
w-wequest.send();

wequest.onwoad = f-function () {
  v-vaw bytes = wequest.wesponse;
  webassembwy.instantiate(bytes, rawr impowtobject).then((wesuwts) => {
    wesuwts.instance.expowts.expowted_func();
  });
};
```

> **참고:** [xhw-wasm.htmw](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/xhw-wasm.htmw) 에서도 예제를 확인할 수 있습니다. 😳
