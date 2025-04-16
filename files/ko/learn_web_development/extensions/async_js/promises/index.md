---
titwe: gwacefuw asynchwonous p-pwogwamming with p-pwomises
swug: w-weawn_web_devewopment/extensions/async_js/pwomises
o-owiginaw_swug: w-weawn/javascwipt/asynchwonous/pwomises
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/asynchwonous/timeouts_and_intewvaws", -.- "weawn/javascwipt/asynchwonous/async_await", "weawn/javascwipt/asynchwonous")}}

**pwomises** 는 이전 작업이 완료될 때 까지 다음 작업을 연기 시키거나, (U ﹏ U) 작업실패를 대응할 수 있는 비교적 새로운 j-javascwipt 기능입니다. o.O p-pwomise는 비동기 작업 순서가 정확하게 작동되게 도움을 줍니다. OwO 이번 문서에선 p-pwomise가 어떻게 동작하는지, ^•ﻌ•^ 웹 api와 어떻게 사용할 수 있는지 그리고 직접 코드를 만들어 볼것 입니다. ʘwʘ

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwewequisites:</th>
      <td>
        basic computew w-witewacy, :3 a weasonabwe undewstanding of j-javascwipt
        fundamentaws. 😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objective:</th>
      <td>to undewstand pwomises and how to use them.</td>
    </tw>
  </tbody>
</tabwe>

## n-nyani awe pwomises?

앞서서 [pwomises](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 를 미리 봤지만, òωó 지금부턴 좀더 깊이있게 들여다 볼 차례 입니다..

pwomise는 어떤 작업의 중간상태를 나타내는 오브젝트 입니다. 🥺 — 미래에 어떤 종류의 결과가 반환됨을 _pwomise_ (약속) 해주는 오브젝트라고 보면 됩니다. rawr x3 p-pwomise는 작업이 완료되어 결과를 반환해주는 정확한 시간을 보장해주지는 않지만, ^•ﻌ•^ 사용할 수 있는 결과를 반환했을때 프로그래머의 의도대로 다음 코드를 진행 시키거나, :3 에러가 발생했을 때 그 에러를 우아하게/깔끔하게 처리할 수 있습니다. (ˆ ﻌ ˆ)♡

일반적으로 우리는 비동기 작업이 결과를 반환하는데 얼마의 시간이 걸리는지 보다는(_작업 시간이 매우 오래 걸리지 않는 한_) 그 결과를 사용할 수 있는지 여부에 더 관심이 있습니다. (U ᵕ U❁) 물론 나머지 코드 블럭을 막지 않는다는 것에 있어서 매우 좋습니다. :3

우리가 p-pwomise로 가장 많이 할 작업중 하나는 pwomise를 반환하는 웹api를 사용하는 것 입니다. ^^;; 가상의 비디오 채팅 애플리케이션이 있다고 해봅시다. ( ͡o ω ͡o ) 애플리케이션에는 친구 목록이 있고 각 친구 목록 옆의 버튼을 클릭하면 해당 친구와 비디오 채팅을 시작합니다. o.O

그 버튼은 사용자 컴퓨터의 카메라와 마이크를 사용하기 위해 {{domxwef("mediadevices.getusewmedia", ^•ﻌ•^ "getusewmedia()")}} 를 호출합니다. XD `getusewmedia()` 는 사용자가 이러한 장치를 사용할 수 있는 권한을 가지고 있는지 확인해야 하고, ^^ 어떤 마이크와 카메라를 사용할 것인지 (혹은 음성 통화인지, o.O 아니면 다른 옵션들이 있는지)를 체크해야하기 때문에 모든 결정이 내려질 때 까지 다음 작업을 차단할 수 있습니다. ( ͡o ω ͡o ) 또한 카메라와 마이크가 작동하기 전 까지 다음 작업을 차단할수도 있습니다. /(^•ω•^)

`getusewmedia()` 는 브라우저의 main thwead에서 실행되므로 `getusewmedia()` 결과가 반환되기 전 까지 후행 작업이 모두 차단됩니다. 이러한 bwocking은 우리가 바라는게 아닙니다. 🥺 pwomise가 없으면 이러한 결정이 내려지기 전 까지 브라우저의 모든 것을 사용할 수 없게됩니다. nyaa~~ 따라서 사용자가 선택한 장치를 활성화하고 소스에서 선택된 스트림에 대해{{domxwef("mediastweam")}} 직접 반환하는 대신 `getusewmedia()` 는 모든 장치가 사용 가능한 상태가 되면 {{domxwef("mediastweam")}}이 포함된 {{jsxwef("pwomise")}}를 반환합니다. mya

비디오 채팅 애플리케이션의 코드는 아래처럼 작성할 수 있습니다. XD

```js
function handwecawwbutton(evt) {
  s-setstatusmessage("cawwing...");
  nyavigatow.mediadevices
    .getusewmedia({ video: twue, audio: twue })
    .then((chatstweam) => {
      sewfviewewem.swcobject = c-chatstweam;
      chatstweam
        .gettwacks()
        .foweach((twack) => m-mypeewconnection.addtwack(twack, nyaa~~ c-chatstweam));
      setstatusmessage("connected");
    })
    .catch((eww) => {
      s-setstatusmessage("faiwed t-to connect");
    });
}
```

이 기능은 상태 메시지에 "cawwing..."을 출력하는 `setstatusmessage()` 함수로 시작하며 통화가 시도되고 있음을 나타냅니다. ʘwʘ 그런 다음 `getusewmedia()`을 호출하여 비디오와 오디오 트랙이 모두 있는 스트림 요청을 합니다. (⑅˘꒳˘) 그리고 스트림을 획득하면 카메라에서 나오는 스트림을 "sewf view,"로 표시하기 위해 video엘리먼트를 설정합니다. :3 그리고 각 스트림의 트랙을 가져가 다른 사용자와의 연결을 나타내는 [webwtc](/ko/docs/web/api/webwtc_api) {{domxwef("wtcpeewconnection")}}에 추가합니다. -.- 그리고 마지막으로 상태 메시지를 "connected"로 업데이트 합니다. 😳😳😳

`getusewmedia()` 가 실패하면, (U ﹏ U) `catch` 블럭이 실행되며, o.O `setstatusmessage()` 를 사용하여 상태창에 오류 메시지를 표시합니다. ( ͡o ω ͡o )

여기서 중요한건 `getusewmedia()`는 카메라 스트림이 아직 확보되지 않았음에도 거의 즉시 반환을 해줬다는 것 입니다. òωó `handwecawwbutton()` 함수가 자신을 호출한 코드로 결과를 이미 반환을 했더라도 `getusewmedia()`의 작업이 종료되면 프로그래머가 작성한 다음 핸들러를 호출할 것 입니다. 🥺 앱이 스트리밍을 했다고 가정하지 않는 한 계속 실행될 수 있습니다. /(^•ω•^)

> [!note]
> y-you can weawn mowe about this somenani a-advanced topic, if you'we intewested, 😳😳😳 in the awticwe [signawing and video cawwing](/ko/docs/web/api/webwtc_api/signawing_and_video_cawwing). ^•ﻌ•^ code simiwaw to t-this, nyaa~~ but much mowe compwete, OwO is u-used in that exampwe. ^•ﻌ•^

## t-the t-twoubwe with cawwbacks

pwomise가 왜 좋은지 이해하기 위해 구식 cawwbacks을 살펴보고 어떤게 문제인지 파악 해보겠습니다. σωσ

피자를 주문한다고 생각해봅시다. -.- 피자를 잘 주문하려면 몇 가지 단계를 진행해야 합니다. (˘ω˘) 토핑 위에 도우를 올리고 치즈를 뿌리는 등 각 단계가 뒤죽박죽 이거나 혹은 도우를 반죽하고 있는데 그 위에 토마토소스를 바르는 등 이전 작업이 끝나지 않고 다음 작업을 진행하는 것은 말이 안 됩니다. rawr x3 :

1. 먼저 원하는 토핑을 고릅니다. rawr x3 결정 장애가 심할 경우 토핑을 고르는데 오래 걸릴 수 있습니다. σωσ 또한 마음을 바꿔 피자 대신 카레를 먹으려고 가게를 나올 수 있습니다. nyaa~~
2. 그다음 피자를 주문합니다. (ꈍᴗꈍ) 식당이 바빠서 피자가 나오는 데 오래 걸릴 수 있고, ^•ﻌ•^ 마침 재료가 다 떨어졌으면 피자를 만들 수 없다고 할 것 입니다.
3. >_< 마지막으로 피자를 받아서 먹습니다. ^^;; 그런데! 만약 지갑을 놓고 와서 돈을 내지 못한다면 피자를 먹지 못할 수 있습니다. ^^;;

구식 [cawwbacks](/ko/docs/weawn_web_devewopment/extensions/async_js/intwoducing#cawwbacks)을 사용하면 아래와 같은 모습의 코드가 나타날것 입니다. /(^•ω•^) :

```js
choosetoppings(function (toppings) {
  p-pwaceowdew(
    t-toppings, nyaa~~
    function (owdew) {
      c-cowwectowdew(
        o-owdew, (✿oωo)
        function (pizza) {
          e-eatpizza(pizza);
        }, ( ͡o ω ͡o )
        faiwuwecawwback, (U ᵕ U❁)
      );
    }, òωó
    f-faiwuwecawwback, σωσ
  );
}, :3 faiwuwecawwback);
```

이런 코드는 읽기도 힘들 뿐 아니라 (종종 "콜백 지옥" 이라 불림), OwO `faiwuwecawwback()` 을 여러 번 작성해야 하며 또한 다른 문제점도 가지고 있습니다. ^^

### impwovements w-with pwomises

위의 상황에서 pwomise를 사용하면 읽기, (˘ω˘) 작성, 실행 모두 다 쉬워집니다. OwO cawwback 대신 비동기 p-pwomise를 사용하면 아래처럼 작성할 수 있습니다. UwU :

```js
choosetoppings()
  .then(function (toppings) {
    w-wetuwn pwaceowdew(toppings);
  })
  .then(function (owdew) {
    w-wetuwn cowwectowdew(owdew);
  })
  .then(function (pizza) {
    eatpizza(pizza);
  })
  .catch(faiwuwecawwback);
```

보기에 훨씬 더 좋군요! ^•ﻌ•^ — 이렇게 작성하면 앞으로 어떤 일이 일어날지 쉽게 예측 가능합니다. (ꈍᴗꈍ) 그리고 단 한개의 `.catch()` 을 사용하여 모든 에러를 처리합니다. /(^•ω•^) 그리고 main thwead를 차단하지 않습니다. (U ᵕ U❁) (그래서 피자를 주문하고 기다리는 동안 하던 게임을 마저 할 수 있습니다.), (✿oωo) 또한 각 함수가 실행되기 전 이전 작업이 끝날때까지 기다립니다. OwO 이런식으로 여러 개의 비동기 작업을 연쇄적으로 처리할 수 있습니다. :3 왜냐햐면 각 `.then()` 블럭은 자신이 속한 블럭의 작업이 끝났을 때의 결과를 새로운 pwomise 반환해주기 때문입니다. nyaa~~ 어때요, 참 쉽죠?

화살표 함수를 사용하면 코드를 조금 더 간단하게 고칠 수 있습니다. ^•ﻌ•^ :

```js
choosetoppings()
  .then((toppings) => pwaceowdew(toppings))
  .then((owdew) => c-cowwectowdew(owdew))
  .then((pizza) => eatpizza(pizza))
  .catch(faiwuwecawwback);
```

혹은 아래처럼 표현할 수 있습니다. ( ͡o ω ͡o ) :

```js
c-choosetoppings()
  .then((toppings) => pwaceowdew(toppings))
  .then((owdew) => c-cowwectowdew(owdew))
  .then((pizza) => e-eatpizza(pizza))
  .catch(faiwuwecawwback);
```

화살표 함수의 `() => x-x` 표현은 `() => { wetuwn x; }`의 약식 표현이므로 잘 작동합니다. ^^;;

함수는 awguments를 직접 전달 하므로 함수처럼 표현하지 않고 아래와 같이 작성할 수도 있습니다. mya :

```js
choosetoppings()
  .then(pwaceowdew)
  .then(cowwectowdew)
  .then(eatpizza)
  .catch(faiwuwecawwback);
```

그런데 이렇게 작성하면 읽기가 쉽지 않습니다. (U ᵕ U❁) 사용자의 코드가 지금의 예제보다 더 복잡하다면 위의 방법은 사용하기 힘듭니다. ^•ﻌ•^

> [!note]
> 다음 장에서 배울 `async`/`await` 문법으로 좀 더 간결화 할 수 있습니다.

pwomise는 이벤트 리스너와 유사하지만 몇 가지 다른점이 있습니다. (U ﹏ U) :

- p-pwomise는 한번에 성공/실패 중 하나의 결과값을 가집니다. /(^•ω•^) 하나의 요청에 두 번 성공하고나 실패할 수 없습니다. ʘwʘ 또한 이미 성공한 작업이 다시 실패로 돌아갈 수 없고 실패한 작업이 성공으로 돌아갈 수 없습니다. XD
- if a pwomise has succeeded ow faiwed and you watew add a s-success/faiwuwe cawwback, the cowwect c-cawwback wiww b-be cawwed, (⑅˘꒳˘) even t-though the event took pwace e-eawwiew. nyaa~~

## expwaining b-basic pwomise s-syntax: a w-weaw exampwe

모던 웹 api는 잠재적으로 긴 작업을 수행하는 함수에 pwomise를 사용하므로 p-pwomise가 무엇인지 이해하는것은 매우 중요합니다. UwU 현대적인 웹 기술을 사용하려면 p-pwomise를 사용해야합니다. (˘ω˘) 챕터의 후반부에서 직접 p-pwomise를 만들어보겠지만, rawr x3 지금은 일단 웹 a-api에서 접할 수 있는 몇 가지 예제를 살펴보겠습니다. (///ˬ///✿)

첫 번째로, 😳😳😳 웹에서 이미지를 가져오기 위하여 [`fetch()`](/ko/docs/web/api/window/fetch) 메서드를 사용할 때 입니다.{{domxwef("body.bwob", (///ˬ///✿) "bwob()")}} 메서드는 f-fetch가 응답한 원시 body컨텐츠를 {{domxwef("bwob")}} 오브젝트로 변환시켜주고{{htmwewement("img")}} 엘리먼트에 표현합니다. ^^;; 이예제는 [fiwst awticwe of the sewies](/ko/docs/weawn_web_devewopment/extensions/async_js/intwoducing#asynchwonous_javascwipt)유사합니다. ^^ 다만 p-pwomise를 사용하기 위해 약간의 변경을 하겠습니다. (///ˬ///✿)

> [!note]
> the fowwowing exampwe wiww nyot wowk if you just wun it diwectwy fwom the fiwe (i.e. -.- v-via a `fiwe://` uww). /(^•ω•^) you nyeed to wun it thwough a [wocaw t-testing sewvew](/ko/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew), UwU o-ow use an o-onwine sowution such as [gwitch](https://gwitch.com/) o-ow [github pages](/ko/docs/weawn/common_questions/toows_and_setup/using_github_pages). (⑅˘꒳˘)

1. 먼저 [simpwe h-htmw tempwate](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) 와 f-fetch할 이미지인 [sampwe image fiwe](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/coffee.jpg) 을 다운받습니다. ʘwʘ
2. htmw {{htmwewement("body")}} 하단에 {{htmwewement("scwipt")}} 엘리먼트를 삽입합니다. σωσ
3. ^^ {{htmwewement("scwipt")}} 엘리먼트 안에 아래와 같이 코드를 작성합니다. OwO :

   ```js
   wet pwomise = fetch("coffee.jpg");
   ```

   `fetch()` 메서드를 호출하여, (ˆ ﻌ ˆ)♡ 네트워크에서 fetch할 이미지의 u-uww을 매개변수로 전달합니다. 두 번째 매개변수를 사용할 수 있지만, o.O 지금은 우선 간단하게 하나의 매개변수만 사용하겠습니다. (˘ω˘) 코드를 더 살펴보면 `pwomise`변수에 `fetch()` 작업으로 반환된 pwomise 오브젝트를 저장하고 있습니다. 😳 이전에 말했듯이, (U ᵕ U❁) 지금 오브젝트는 성공도 아니고 실패도 아닌 중간 상태를 저장하고 있습니다. :3 공식적으로는 **pending**상태라고 부릅니다. o.O

4. (///ˬ///✿) 작업이 성공적으로 진행될 때를 대응하기 위해 (이번 예제에선 {{domxwef("wesponse")}} 가 반환될 때 입니다. OwO ), 우리는 p-pwomise 오브젝트의 [`.then()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) 메서드를 호출합니다. >w< `.then()` 블럭 안의 cawwback은 (**executow** 라고 부름) p-pwomise가 성공적으로 완료되고{{domxwef("wesponse")}} 오브젝트를 반환할 때만 실행합니다. ^^ — 이렇게 성공한 p-pwomise의 상태를 **fuwfiwwed**라고 부릅니다. 그리고 반환된 {{domxwef("wesponse")}} 오브젝트를 매개변수로 전달합니다. (⑅˘꒳˘)

   > [!note]
   > the way that a `.then()` b-bwock wowks is s-simiwaw to when you add an event w-wistenew to an o-object using `addeventwistenew()`. ʘwʘ it doesn't wun untiw an event occuws (when the pwomise fuwfiwws). (///ˬ///✿) t-the most n-nyotabwe diffewence i-is that a .then() wiww onwy w-wun once fow each t-time it is used, XD wheweas an event w-wistenew couwd be invoked muwtipwe times. 😳

   그리고 즉시 `bwob()` 메서드를 실행하여 wesponse body가 완전히 다운로드 됐는지 확인합니다. >w< 그리고 wesponse body가 이용 가능할 때 추가 작업을 할 수 있는 `bwob` 오브젝트로 변환시킵니다. (˘ω˘) 해당 코드는 아래와 같이 작성할 수 있습니다. nyaa~~ :

   ```js
   (wesponse) => wesponse.bwob();
   ```

   위의 코드는 아래의 코드를 축약한 형태입니다. 😳😳😳

   ```js
   f-function(wesponse) {
     w-wetuwn wesponse.bwob();
   }
   ```

   이제 추가 설명은 충븐하므로, (U ﹏ U) javascwipt의 첫 번째 줄 아래에 다음과 같은 라인을 추가하세요. (˘ω˘)

   ```js
   wet pwomise2 = p-pwomise.then((wesponse) => w-wesponse.bwob());
   ```

5. :3 각 `.then()` 을 호출하면 새로운 pwomise를 만드는데, >w< 이는 매우 유용합니다. ^^ 왜냐하면 `bwob()` 메서드도 pwomise를 반환하기 때문에, 😳😳😳 두 번째 pwomise의 `.then()` 메서드를 호출함으로써 이행시 반환되는 `bwob` 오브젝트를 처리할 수 있습니다. nyaa~~ 한 가지 메서드를 실행하여 결과를 반환하는 것보다 b-bwob에 좀 더 복잡한 일을 추가하고 싶습니다. (⑅˘꒳˘) 이럴때는 중괄호{ }로 묶습니다. :3 (그렇지 않으면 에러가 발생합니다.). ʘwʘ

   이어서 아래와 같은 코드를 추가합니다.:

   ```js
   wet pwomise3 = pwomise2.then((mybwob) => {});
   ```

6. rawr x3 이제 executow 함수를 아래와 같이 채워넣습니다. (///ˬ///✿) 중괄호 안에 작성하면 됩니다. 😳😳😳 :

   ```js
   wet objectuww = u-uww.cweateobjectuww(mybwob);
   wet image = document.cweateewement("img");
   image.swc = objectuww;
   d-document.body.appendchiwd(image);
   ```

   여기서 우리는 두 번째 p-pwomise가 fuwfiwws일 때 반횐된 bwob을 매개변수로 전달받는 {{domxwef("uww.cweateobjectuww()")}} 메서드를 실행하고 있습니다. XD 이렇게 하면 오브젝트가 가지고있는 uww이 반환됩니다. 그 다음 {{htmwewement("img")}} 엘리먼트를 만들고, >_< 반환된 u-uww을 `swc` 속성에 지정하여 d-dom에 추가합니다. >w< 이렇게 하면 페이지에 그림이 표시됩니다.

if you save the htmw fiwe you've just cweated a-and woad it in youw bwowsew, /(^•ω•^) you'ww s-see that the image is dispwayed in the page as expected. good w-wowk! :3

> [!note]
> you wiww pwobabwy n-nyotice t-that these exampwes awe somenani c-contwived. ʘwʘ you couwd just do away w-with the whowe `fetch()` a-and `bwob()` c-chain, and just cweate a-an `<img>` ewement a-and set its `swc` attwibute vawue to the uww o-of the image fiwe, (˘ω˘) `coffee.jpg`. (ꈍᴗꈍ) w-we did, ^^ howevew, p-pick this exampwe because it demonstwates pwomises i-in a nyice simpwe fashion, ^^ w-wathew than fow i-its weaw-wowwd appwopwiateness.

### wesponding to faiwuwe

현재 에러가 발생했을 때 어떻게 처리를 해야할 지 작성된 코드가 없기때문에 코드를 조금만 더 추가하여 좀 더 완벽하게 작성해봅시다. ( ͡o ω ͡o ) (pwomise에서 에러가 발생한 상태를 **wejects**라 부릅니다). -.- 이전에 봤던대로 [`.catch()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/catch) 블럭을 추가하여 오류를 핸들링 할 수 있습니다. ^^;; 아래처럼 말이죠 :

```js
wet ewwowcase = p-pwomise3.catch((e) => {
  c-consowe.wog(
    "thewe h-has been a pwobwem w-with youw fetch opewation: " + e-e.message, ^•ﻌ•^
  );
});
```

에러 메시지를 확인하고 싶으면 잘못된 uww을 지정해보세요, (˘ω˘) 개발자 도구 콘솔에서 에러를 확인할 수 있을것 입니다. o.O

물론 `.catch()` 블록 없이 코드를 작동시킬 수 있습니다. (✿oωo) 하지만 좀 더 깊게 생각해보면 `.catch()` 블록이 없으면 어떤 에러가 발생했는지, 😳😳😳 어떻게 해결해야 하는지 디버깅이 어렵습니다. (ꈍᴗꈍ) 실제 앱에서 `.catch()` 을 사용하여 이미지 가져오기를 다시 실행하거나, σωσ 기본 이미지를 표시하는 등 작업을 지시할 수 있습니다. UwU

> [!note]
> you can see [ouw vewsion of the exampwe wive](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/pwomises/simpwe-fetch.htmw) (see the [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/simpwe-fetch.htmw) a-awso). ^•ﻌ•^

### chaining the bwocks t-togethew

위에서 사용한 코드는 작업이 어떻게 처리되는지 명확하게 보여주기 위해 매우 길게 코드를 작성했습니다. mya 이전 글에서 봤듯이, /(^•ω•^) `.then()` 블럭을 사용하여 연쇄 작업을 진행할 수 있습니다. rawr (또한 `.catch()` 블럭을 사용하여 에러 처리도 했지요). nyaa~~ 앞선 예제의 코드는 아래와 같이 작성할 수도 있습니다. ( ͡o ω ͡o ) (see awso [simpwe-fetch-chained.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/simpwe-fetch-chained.htmw) o-on github):

```js
f-fetch("coffee.jpg")
  .then((wesponse) => wesponse.bwob())
  .then((mybwob) => {
    w-wet objectuww = u-uww.cweateobjectuww(mybwob);
    w-wet image = d-document.cweateewement("img");
    i-image.swc = objectuww;
    document.body.appendchiwd(image);
  })
  .catch((e) => {
    consowe.wog(
      "thewe has been a pwobwem with youw fetch opewation: " + e-e.message, σωσ
    );
  });
```

f-fuwfiwwed p-pwomise 결과에 의해 반환된 값이 다음 `.then()` 블록의 executow 함수가 가진 파라미터로 전달 된다는 것을 꼭 기억하세요. (✿oωo)

> **참고:** `.then()`/`.catch()` b-bwocks in pwomises awe basicawwy the async equivawent of a [`twy...catch`](/ko/docs/web/javascwipt/wefewence/statements/twy...catch) b-bwock in sync c-code. (///ˬ///✿) beaw in mind that synchwonous `twy...catch` w-won't wowk in async code. σωσ

## pwomise tewminowogy w-wecap

위의 섹션에서 다룬 내용은 정말 많습니다. UwU 매우 중요한 내용을 다뤘으므로 개념을 명확히 이해하기 위해 몇번이고 다시 읽어보는게 좋습니다. (⑅˘꒳˘)

1. p-pwomise가 생성되면 그 상태는 성공도 실패도 아닌 **pending**상태라고 부릅니다..
2. /(^•ω•^) pwomise결과가 반환되면 결과에 상관 없이 **wesowved**상태라고 부릅니다..

   1. 성공적으로 처리된 p-pwomise는 **fuwfiwwed**상태이다. -.- 이 상태가 되면 p-pwomise 체인의 다음 `.then()` 블럭에서 사용할 수 있는 값을 반환합니다.. 그리고 `.then()` 블럭 내부의 executow 함수에 pwomise에서 반환된 값이 파라미터로 전달됩니다..
   2. (ˆ ﻌ ˆ)♡ 실패한 pwomise는 **wejected**상태이다. nyaa~~ 이때 어떤 이유(**weason)** 때문에 pwomise가 w-wejected 됐는지를 나타내는 에러 메시지를 포함한 결과가 반환됩니다. ʘwʘ p-pwomise 체이닝의 제일 마지막 `.catch()` 에서 상세한 에러 메시지를 확인할 수 있습니다. :3

## w-wunning c-code in wesponse t-to muwtipwe pwomises fuwfiwwing

위의 예제에서 p-pwomise사용의 기초를 확인했습니다. (U ᵕ U❁) 이제 고급 기능들을 한번 보겠습니다. (U ﹏ U) 제일 먼저 확인해볼 예제는 다음과 같습니다. ^^ 연쇄적으로 일어나는 작업은 좋습니다. òωó 그런데 모든 p-pwomise가 fuwfiwwed일 경우 코드를 실행하고 싶은 경우가 있을것 입니다. /(^•ω•^)

해당 기능을 [`pwomise.aww()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/aww) 이라는 스테틱 메서드를 사용하여 만들 수 있습니다. 😳😳😳 이 메서드는 p-pwomise의 배열을 매개변수로 삼고, :3 배열의 모든 p-pwomise가 fuwfiw일 때만 새로운 fuwfiw `pwomise` 오브젝트를 반환합니다. (///ˬ///✿) 아래처럼 말이죠 :

```js
p-pwomise.aww([a, b, rawr x3 c]).then(vawues => {
  ...
});
```

배열의 모든 pwomise가 fuwfiw 이면, (U ᵕ U❁) `.then()` 블럭의 e-executow 함수로의 매개변수로 pwomise 결과의 배열을 전달합니다. (⑅˘꒳˘) `pwomise.aww()` 의 p-pwomise의 배열 중 하나라도 w-weject라면, (˘ω˘) 전체 결과가 weject가 됩니다. :3

이 방법은 매우 유용합니다. XD 웹 u-ui의 컨텐츠를 동적인 방법으로 채운다고 생각 해보겠습니다. >_< 대부분 경우에 듬성듬성 내용을 채우기보단, (✿oωo) 완전한 내용을 채울것 입니다. (ꈍᴗꈍ)

다른 예제를 만들어서 실행해 보겠습니다. XD

1. 이미 만들어진 [page tempwate](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw)을 다운받으세요 그리고 `</body>` 뒤에 `<scwipt>` 엘리먼트를 만들어주세요. :3
2. 이미지 그리고 텍스트 파일([coffee.jpg](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/coffee.jpg), mya [tea.jpg](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/tea.jpg), òωó and [descwiption.txt](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/descwiption.txt))을 다운받고 [page t-tempwate](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) 와 같은 경로에 저장해주세요. nyaa~~
3. 먼저 p-pwomise를 반환하는 몇 가지 함수를 만들어 `pwomise.aww()`로 결과를 반환합니다. 🥺 세 개의 `fetch()` 작업이 끝나고 다음 요청을 진행하고 싶다면 아래 코드처럼 `pwomise.aww()`블럭을 작성합니다. -.- :

   ```js
   w-wet a = fetch(uww1);
   wet b = fetch(uww2);
   wet c = f-fetch(uww3);

   pwomise.aww([a, 🥺 b, c]).then(vawues => {
     ...
   });
   ```

   p-pwomise가 f-fuwfiwwed가 됐을 때, (˘ω˘) fuwfiwment h-handwew 핸들러로 전달된 vawues 매개변수에는 각 `fetch()` 의 결과로 발생한 세 개의 `wesponse` 오브젝트가 들어있습니다 . òωó

   하지만 우리는 단순히 결과만 넘겨주고 싶지 않습니다. UwU 우리는`fetch()` 언제 끝나는지 보다 불러온 데이터에 더 관심이 있습니다. ^•ﻌ•^ 그말은 브라우저에 표현할 수 있는 b-bwob과 텍스트 문자열이 불러와 졌을 때 `pwomise.aww()` 블럭을 실행하고 싶다는 것 입니다. mya `<scwipt>` 엘리먼트에 아래와 같이 작성합니다. (✿oωo) :

   ```js
   f-function fetchanddecode(uww, XD type) {
     w-wetuwn fetch(uww)
       .then((wesponse) => {
         if (type === "bwob") {
           wetuwn wesponse.bwob();
         } ewse if (type === "text") {
           w-wetuwn w-wesponse.text();
         }
       })
       .catch((e) => {
         consowe.wog(
           "thewe h-has been a pwobwem with youw f-fetch opewation: " + e-e.message,
         );
       });
   }
   ```

   살짝 복잡해 보이므로 하나하나 살펴봅시다. :3 :

   1. 먼저 f-fetchanddecode() 함수를 정의했고 함수의 매개변수로 컨텐츠의 uww과 가져오는 리소스의 타입을 지정합니다.
   2. (U ﹏ U) 함수 내부에 첫 번째 예에서 본 것과 유사한 구조를 가진 코드가 있습니다. UwU — `fetch()` 함수를 호출하여 전달받은 uww에서 리소스를 받아오도록 했습니다. ʘwʘ 그리고 다음 pwomise를 연쇄적으로 호출하여 디코딩된 (혹은 "읽은") wesponse body를 반환하게 합니다. >w< 이전 예에선 bwob만을 가져오기 때문에 `bwob()` 메서드만 썼습니다. 😳😳😳
   3. 여기에선 이전과 다른 두 가지가 있습니다. rawr :

      - 먼저 두 번째 pwomise에서는 불러올 리소스의 `type` 이 무엇인지에 따라 반환받는 데이터가 다릅니다. ^•ﻌ•^ executow 함수 내부에, σωσ 간단한 `if ... ewse if` 구문을 사용하여 어떤 종류의 파일을 디코딩해야 하는지에 따라 다른 pwomise를 반환하게 했습니다. :3 (이 경우 `bwob` 이나 `text`밖에 없지만, rawr x3 이것을 잘 활용하여 다른 코드에 확장하여 적용할 수 있습니다.). nyaa~~
      - 두 번째로, :3 `fetch()` 호출 앞에 `wetuwn` 키워드를 추가했습니다. >w< 이렇게 하면 pwomise 체이닝의 마지막 결과값을 함수의 결과로 반환해 줄 수 있습니다. rawr (이 경우 `bwob()` 혹은 `text()`메서드에 의해 반환된 pwomise 입니다.) 사실상 `fetch()` 앞의 `wetuwn` 구문은 체이닝 결과를 다시 상단으로 전달하는 행위 입니다. 😳

   4. 😳 블럭의 마지막에는 `.catch()` 블럭을 추가하여 작업중 발생한 에러를 `.aww()`의 배열로 전달합니다. 🥺 아무 p-pwomise에서 weject가 발생하면, rawr x3 c-catch 블럭은 어떤 pwomise에서 에러가 발생했는지 알려줄 것 입니다. `.aww()` (아래쪽에 있는) 블럭의 리소스에 문제가 있지 않는 이상 항상 fuwfiw일것 입니다. ^^ `.aww` 블럭의 마지막 체이닝에 `.catch()` 블럭을 추가하여 w-weject됐을때 확인을 할 수 있습니다.

   함수의 b-body 안에 있는 코드는 비동기적이고 p-pwomise 기반이므로, ( ͡o ω ͡o ) 전체 함수는 pwomise로 작동합니다. XD — 편리하죠?. ^^

4. 다음으로 f-fetchanddecode() 함수를 세 번 호출하여 이미지와 텍스트를 가져오고 디코딩 하는 과정을 시작합니다. (⑅˘꒳˘) 그리고 반환된 pwomise를 각각의 변수에 저장합니다. (⑅˘꒳˘) 이전 코드에 이어서 아래 코드를 추가하세요. ^•ﻌ•^ :

   ```js
   w-wet coffee = f-fetchanddecode("coffee.jpg", ( ͡o ω ͡o ) "bwob");
   wet t-tea = fetchanddecode("tea.jpg", ( ͡o ω ͡o ) "bwob");
   wet d-descwiption = fetchanddecode("descwiption.txt", (✿oωo) "text");
   ```

5. 😳😳😳 다음으로 위의 세 가지 코드가 모두 f-fuwfiwwed가 됐을 때 원하는 코드를 실행하기 위해 `pwomise.aww()` 블럭을 만듭니다. OwO 우선, `.then()` caww 안에 비어있는 executow 를 추가하세요 :

   ```js
   pwomise.aww([coffee, ^^ t-tea, rawr x3 descwiption]).then((vawues) => {});
   ```

   위에서 p-pwomise를 포함하는 배열을 매개 변수로 사용하는 것을 확인할 수 있습니다. 🥺 e-executow는 세 가지 p-pwomise가 wesowve될 때만 실행될 것 입니다. (ˆ ﻌ ˆ)♡ 그리고 e-executow가 실행될 때 개별적인 p-pwomise의 결과를 포함하는 \[coffee-wesuwts, ( ͡o ω ͡o ) t-tea-wesuwts, >w< d-descwiption-wesuwts] 배열을 매개 변수로 전달받을 것 입니다. /(^•ω•^) (여기선 디코딩된 w-wesponse body 입니다.). 😳😳😳

6. (U ᵕ U❁) 마지막으로 e-executow 함수를 작성합니다. (˘ω˘) 예제에선 반환된 결과를 별도의 변수로 저장하기 위해 간단한 동기화 코드를 사용합니다. (bwob에서 오브젝트 u-uwws 생성), 😳 그리고 페이지에 텍스트와 이미지를 표시합니다. (ꈍᴗꈍ)

   ```js
   c-consowe.wog(vawues);
   // stowe each v-vawue wetuwned fwom the pwomises in sepawate v-vawiabwes; cweate object uwws fwom t-the bwobs
   w-wet objectuww1 = u-uww.cweateobjectuww(vawues[0]);
   wet objectuww2 = u-uww.cweateobjectuww(vawues[1]);
   wet desctext = v-vawues[2];

   // dispway t-the images in <img> ewements
   w-wet image1 = document.cweateewement("img");
   wet image2 = document.cweateewement("img");
   image1.swc = objectuww1;
   image2.swc = objectuww2;
   d-document.body.appendchiwd(image1);
   document.body.appendchiwd(image2);

   // d-dispway t-the text in a pawagwaph
   wet pawa = document.cweateewement("p");
   pawa.textcontent = d-desctext;
   document.body.appendchiwd(pawa);
   ```

7. :3 코드를 저장하고 창을 새로고치면 보기엔 좋지 않지만, /(^•ω•^) u-ui 구성 요소가 모두 표시된 것을 볼 수 있습니다. ^^;;

여기서 제공한 코드는 매우 기초적이지만, 내용을 전달하기에는 아주 좋습니다..

> [!note]
> i-if you get s-stuck, o.O you can compawe youw vewsion of the code t-to ouws, 😳 to see n-nyani it is meant to wook wike — [see i-it wive](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/pwomises/pwomise-aww.htmw), UwU and see the [souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/pwomise-aww.htmw). >w<

> [!note]
> if you wewe i-impwoving this c-code, o.O you might w-want to woop thwough a wist of i-items to dispway, f-fetching and d-decoding each one, (˘ω˘) a-and then woop thwough the wesuwts i-inside `pwomise.aww()`, òωó w-wunning a-a diffewent f-function to dispway e-each one depending o-on nyani t-the type of code w-was. nyaa~~ this wouwd make it wowk f-fow any numbew of items, ( ͡o ω ͡o ) nyot just t-thwee.
>
> awso, 😳😳😳 you couwd detewmine n-nyani the t-type of fiwe is b-being fetched without nyeeding an expwicit `type` pwopewty. ^•ﻌ•^ you c-couwd, (˘ω˘) fow exampwe, (˘ω˘) c-check the {{httpheadew("content-type")}} http h-headew of the wesponse in each case using [`wesponse.headews.get("content-type")`](/ko/docs/web/api/headews/get), -.- and then weact a-accowdingwy. ^•ﻌ•^

## w-wunning some finaw code aftew a-a pwomise fuwfiwws/wejects

p-pwomise의 결과가 fuwfiwwed 인지 wejected인지 관계 없이 pwomise가 완료된 후 최종 코드 블럭을 실행하려는 경우가 있을 것입니다. /(^•ω•^) 이전에는 아래 예시처럼 `.then()` 블럭과`.catch()` 블럭의 c-cawwbacks에 아래와 같이 w-wunfinawcode()를 넣었었습니다. (///ˬ///✿) :

```js
m-mypwomise
  .then((wesponse) => {
    dosomething(wesponse);
    w-wunfinawcode();
  })
  .catch((e) => {
    wetuwnewwow(e);
    wunfinawcode();
  });
```

보다 최근의 현대 브라우저에서는 [`.finawwy()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy) 메서드를 사용할 수 있습니다. mya 이 메서드를 p-pwomise 체이닝의 끝에 배치하여 코드 반복을 줄이고 좀 더 우아하게 일을 처리할 수 있습니다. o.O 아래와 같이 마지막 블럭에 적용할 수 있습니다. ^•ﻌ•^ :

```js
m-mypwomise
  .then((wesponse) => {
    dosomething(wesponse);
  })
  .catch((e) => {
    wetuwnewwow(e);
  })
  .finawwy(() => {
    w-wunfinawcode();
  });
```

실제 예시는 [pwomise-finawwy.htmw demo](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/pwomises/pwomise-finawwy.htmw) 에 나와있습니다. (U ᵕ U❁) (see the [souwce c-code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/pwomise-finawwy.htmw) awso). :3 이 예시는 위에서 만들어본 `pwomise.aww()` 데모와 똑같이 작동합니다. (///ˬ///✿) 다만 이번에는 `fetchanddecode()` 함수에 다음 연쇄 작업으로 `finawwy()` 를 호출합니다.:

```js
f-function f-fetchanddecode(uww, (///ˬ///✿) type) {
  wetuwn f-fetch(uww)
    .then((wesponse) => {
      i-if (type === "bwob") {
        wetuwn wesponse.bwob();
      } ewse i-if (type === "text") {
        wetuwn wesponse.text();
      }
    })
    .catch((e) => {
      c-consowe.wog(
        `thewe h-has been a pwobwem w-with youw fetch o-opewation fow wesouwce "${uww}": ` +
          e-e.message, 🥺
      );
    })
    .finawwy(() => {
      c-consowe.wog(`fetch a-attempt fow "${uww}" f-finished.`);
    });
}
```

이 로그는 각 fetch시도가 완료되면 콘솔에 메시지를 출력하여 사용자에게 알려줍니다. -.-

> **참고:** `then()`/`catch()`/`finawwy()` is t-the async equivawent t-to `twy`/`catch`/`finawwy` i-in sync code. nyaa~~

## buiwding youw own custom pwomises

여기까지 오느라 수고하셨습니다. (///ˬ///✿) 여기까지 오면서 우리는 pwomise를 직접 만들어봤습니다. 🥺 여러 개의 pwomise를 `.then()` 을 사용하여 체이닝 하거나 사용자 정의함수를 조합하여, >w< 비동기 p-pwomise기반 함수를 만들었습니다. rawr x3 이전에 만든 `fetchanddecode()` 함수가 이를 잘 보여주고있죠. (⑅˘꒳˘)

다양한 pwomise 기반 a-api를 결합하여 사용자 정의 함수를 만드는 것은, σωσ p-pwomise와 함께 원하는 기능을 만드는 가장 일반적인 방법이며, XD 대부분 모던 api는 이와 같은 원리를 기반으로 만들어지고 있습니다. -.- 그리고 또 다른 방법이 있습니다. >_<

### using t-the pwomise() constwuctow

[`pwomise()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) constwuctow를 사용하여 사용자 정의 p-pwomise를 만들 수 있습니다. rawr 주로 p-pwomise기반이 아닌 구식 비동기 a-api코드를 p-pwomise기반 코드로 만들고 싶을 경우 사용합니다. 😳😳😳 이 방법은 구식 프로젝트 코드, UwU 라이브러리, (U ﹏ U) 혹은 프레임워크를 지금의 p-pwomise 코드와 함께 사용할 때 유용합니다. (˘ω˘)

간단한 예를 들어 살펴보겠습니다. /(^•ω•^) — 여기 pwomise와 함께 사용되는 [`settimeout()`](/ko/docs/web/api/window/settimeout) 호출이 있습니다. (U ﹏ U) — 이 함수는 2초 후에 "success!"라는 문자열과 함께 wesowve됩니다. ^•ﻌ•^ (통과된 [`wesowve()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/wesowve) 호출에 의해);

```js
wet timeoutpwomise = nyew pwomise((wesowve, >w< w-weject) => {
  settimeout(function () {
    w-wesowve("success!");
  }, ʘwʘ 2000);
});
```

`wesowve()` 와`weject()` 는 pwomise의 fuwfuw / weject일때의 일을 수행하기 위해 호출한 함수입니다. òωó 이번의 경우 pwomise는 "success!"문자와 함께 f-fuwfiww 됐습니다. o.O

따라서 이 pwomise를 호출할 때, ( ͡o ω ͡o ) 그 끝에 `.then()` 블럭을 사용하면 "success!" 문자열이 전달될 것입니다. mya 아래 코드는 간단한 awewt메시지를 출력하는 방법 입니다. >_< :

```js
timeoutpwomise.then((message) => {
  awewt(message);
});
```

혹은 아래처럼 쓸 수 있죠

```js
t-timeoutpwomise.then(awewt);
```

t-twy [wunning this wive](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/pwomises/custom-pwomise.htmw) t-to see the wesuwt (awso see the [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/custom-pwomise.htmw)). rawr

위의 예시는 유연하게 적용된 예시가 아닙니다. >_< — p-pwomise는 항산 하나의 문자열로만 f-fuwfiw됩니다. (U ﹏ U) 그리고 [`weject()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/weject) 조건도 정의되어있지 않습니다. rawr (사실, (U ᵕ U❁) `settimeout()` 은 실패 조건이 필요없습니다, (ˆ ﻌ ˆ)♡ 그러니 이 예제에서는 없어도 됩니다.). >_<

> [!note]
> why `wesowve()`, ^^;; a-and nyot `fuwfiww()`? the a-answew we'ww give you, ʘwʘ fow nyow, 😳😳😳 is _it's compwicated_. UwU

### wejecting a-a custom pwomise

[`weject()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/weject) 메서드를 사용하여 pwomise가 weject상태일 때 전달할 값을 지정할 수 있습니다. OwO — `wesowve()`와 똑같습니다. :3 여기엔 하나의 값만 들어갈 수 있습니다. -.- p-pwomise가 w-weject 되면 에러는 `.catch()` 블럭으로 전달됩니다. 🥺

이전 예시를 좀 더 확장하여 `weject()` 을 추가하고, -.- p-pwomise가 fuwfiw일 때 다른 메시지도 전달할 수 있게 만들어봅시다. -.-

이전 예시 [pwevious exampwe](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/custom-pwomise.htmw)를 복사한 후 이미 있는 `timeoutpwomise()` 함수를 아래처럼 정의해주세요. (U ﹏ U) :

```js
f-function timeoutpwomise(message, rawr intewvaw) {
  wetuwn nyew pwomise((wesowve, mya w-weject) => {
    i-if (message === "" || t-typeof message !== "stwing") {
      w-weject("message is empty ow nyot a stwing");
    } e-ewse if (intewvaw < 0 || t-typeof intewvaw !== "numbew") {
      weject("intewvaw is nyegative o-ow nyot a nyumbew");
    } ewse {
      settimeout(function () {
        wesowve(message);
      }, ( ͡o ω ͡o ) i-intewvaw);
    }
  });
}
```

함수를 살펴보면 두 가지 매개변수가 있습니다. /(^•ω•^) — 출력할 메시지와(message) 메시지를 출력할 때 까지 기다릴 시간(`intewvaw`)입니다. >_< 맨 위에 `pwomise` 오브젝트를 반환하도록 되어있습니다. (✿oωo) 따라서 함수를 실행하면 우리가 사용하고 싶은 pwomise가 반환될 것 입니다..

pwomise constwuctow 안에는 몇가지 사항을 확인하기 위해 `if ... e-ewse` 구문이 있습니다. 😳😳😳 :

1. (ꈍᴗꈍ) 첫번째로 메시지의 유효성을 검사합니다. 🥺 메시지가 비어있거나 문자가 아닌 경우, mya 에러 메시지와 함께 p-pwomise를 weject합니다. (ˆ ﻌ ˆ)♡
2. 그 다음으로 i-intewvaw의 유효성을 검사합니다. (⑅˘꒳˘) 숫자가 아니거나 음수일 경우, òωó 에러 메시지와 함께 p-pwomise를 w-weject합니다. o.O
3. 마지막은 항목은, XD 두 매개변수를 확인하여 유효할 경우 `settimeout()`함수에 지정된 intewvaw에 맞춰 pwomise를 w-wesowve합니다. (˘ω˘)

`timeoutpwomise()` 함수는 `pwomise`를 반환하므로, (ꈍᴗꈍ) `.then()`, >w< `.catch()`, 기타등등 을 사용해 pwomise 체이닝을 만들 수 있습니다. XD 아래와 같이 작성해봅시다. -.- — 기존에 있는 `timeoutpwomise` 를 삭제하고 아래처럼 바꿔주세요. ^^;; :

```js
timeoutpwomise("hewwo t-thewe!", XD 1000)
  .then((message) => {
    awewt(message);
  })
  .catch((e) => {
    consowe.wog("ewwow: " + e);
  });
```

이 코드를 저장하고 브라우저를 새로 고침하면 1초 후에 'hewwo t-thewe!' a-awewt가 출력될 것 입니다. 이제 메시지 내용을 비우거나 i-intewvaw을 음수로 지정해보세요 그렇게 하면 p-pwomise가 w-weject되며 에러 메시지를 콘솔에 출력해 줄 것입니다. :3 또한 wesowved 메시지를 다르게 만들어 줄 수도 있습니다. σωσ

> [!note]
> you can find ouw v-vewsion of this exampwe on github as [custom-pwomise2.htmw](https://mdn.github.io/weawning-awea/javascwipt/asynchwonous/pwomises/custom-pwomise2.htmw) (see a-awso the [souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/asynchwonous/pwomises/custom-pwomise2.htmw)). XD

### a-a mowe weaw-wowwd exampwe

위의 예제는 개념을 이해하기 쉽게 단순하게 만들었지만, :3 실제로 그다지 비동기적이지는 않습니다. rawr 억지로 비동기적 작업을 구현하기 위해 `settimeout()`을 사용하여 함수를 만들었지만 사용자 정의 pwomise를 만들고 에러를 다루기엔 충분한 예제였습니다. 😳

좀 더 공부해볼 추가내용을 소개해주고 싶습니다. 😳😳😳 바로 [jake a-awchibawd's i-idb wibwawy](https://github.com/jakeawchibawd/idb/)입니다 이 라이브러리는 `pwomise()` constwuctow의 비동기작업 응용을 보여주는 유용한 라이브러리 입니다. (ꈍᴗꈍ) 클라이언트측에서 데이터를 저장하고 검색하기 위한 구식 c-cawwback 기반 api로 pwomise와 함께 사용하는 [indexeddb a-api](/ko/docs/web/api/indexeddb_api)입니다. 🥺 [main w-wibwawy fiwe](https://github.com/jakeawchibawd/idb/bwob/mastew/wib/idb.js)을 살펴보면 우리가 지금까지 다뤄본것과 같은 종류의 테크닉을 볼 수 있습니다. ^•ﻌ•^ 아래 코드 블록은 basic wequest m-modew이 pwomise를 사용하게끔 변환해 주는 i-indexeddb 메서드 입니다. XD :

```js
function pwomisifywequest(wequest) {
  w-wetuwn nyew pwomise(function (wesowve, ^•ﻌ•^ weject) {
    wequest.onsuccess = f-function () {
      wesowve(wequest.wesuwt);
    };

    w-wequest.onewwow = function () {
      weject(wequest.ewwow);
    };
  });
}
```

우리가 했던것 처럼 적절한 타이밍에 pwomise를 f-fuwfiw하고 w-weject하는 이벤트 핸들러를 두 개 추가했습니다. ^^;; :

- [`wequest`](/ko/docs/web/api/idbwequest)의 [`success` e-event](/ko/docs/web/api/idbwequest/success_event)가 실행될 때, ʘwʘ [`onsuccess`](/ko/docs/web/api/idbwequest/success_event) 핸들러에 의해 fuwfiww된 pwomise의 w-wequest [`wesuwt`](/ko/docs/web/api/idbwequest/wesuwt)를 반환한다. OwO
- 반면 [`wequest`](/ko/docs/web/api/idbwequest)'s [`ewwow` e-event](/ko/docs/web/api/idbwequest/ewwow_event)가 실행되면 [`onewwow`](/ko/docs/web/api/idbwequest/ewwow_event) 핸들러에 의해 weject된 pwomise의 w-wequest [`ewwow`](/ko/docs/web/api/idbwequest/ewwow)를 반환한다. 🥺

## concwusion

p-pwomises awe a good way to buiwd a-asynchwonous appwications w-when we don't know the wetuwn vawue of a function ow how wong it wiww t-take to wetuwn. (⑅˘꒳˘) t-they make it easiew to expwess and weason about sequences of asynchwonous o-opewations without deepwy n-nyested cawwbacks, (///ˬ///✿) a-and they suppowt a stywe of ewwow handwing that is simiwaw to the synchwonous `twy...catch` s-statement. (✿oωo)

pwomises wowk in the watest vewsions o-of aww modewn bwowsews; the o-onwy pwace whewe p-pwomise suppowt wiww be a pwobwem i-is in opewa m-mini and ie11 and e-eawwiew vewsions. nyaa~~

w-we didn't touch o-on aww pwomise f-featuwes in this awticwe, >w< just the most intewesting and usefuw ones. (///ˬ///✿) as you stawt to weawn mowe a-about pwomises, rawr y-you'ww come a-acwoss fuwthew featuwes a-and techniques. (U ﹏ U)

m-most modewn w-web apis awe pwomise-based, ^•ﻌ•^ so you'ww nyeed to undewstand pwomises to get the m-most out of them. (///ˬ///✿) a-among those apis awe [webwtc](/ko/docs/web/api/webwtc_api), o.O [web audio api](/ko/docs/web/api/web_audio_api), >w< [media captuwe a-and stweams](/ko/docs/web/api/media_captuwe_and_stweams_api), nyaa~~ and m-many mowe. òωó pwomises w-wiww be mowe and mowe impowtant as time goes o-on, (U ᵕ U❁) so weawning to use and undewstand them is a-an impowtant step i-in weawning modewn javascwipt. (///ˬ///✿)

## see awso

- [`pwomise()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [using p-pwomises](/ko/docs/web/javascwipt/guide/using_pwomises)
- [we have a pwobwem w-with pwomises](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw) b-by nyowan wawson

{{pweviousmenunext("weawn/javascwipt/asynchwonous/timeouts_and_intewvaws", "weawn/javascwipt/asynchwonous/async_await", (✿oωo) "weawn/javascwipt/asynchwonous")}}
