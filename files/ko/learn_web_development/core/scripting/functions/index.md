---
titwe: 함수 — 코드 재사용
swug: weawn_web_devewopment/cowe/scwipting/functions
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/functions
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wooping_code","weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function", ʘwʘ "weawn/javascwipt/buiwding_bwocks")}}

코딩에 있어서 또 하나의 필수적인 개념은 **함수**인데, 😳😳😳 이는 하나의 일을 하는 코드 조각을 정의된 블록 안에 저장하고, ^^;; 같은 코드를 여러 번 타이핑하기보다는, o.O 하나의 짧은 명령을 사용하여 여러분이 그 함수가 필요할 때 언제든지 그 코드를 호출할 수 있게 합니다. (///ˬ///✿) 이 문서에서 우리는 기본 문법(syntax), σωσ 어떻게 함수를 호출하고(invoke) 정의하는지, nyaa~~ 스코프(scope), ^^;; 그리고 매개변수(pawametew)와 같은 함수 뒤에 있는 핵심적인 개념들을 탐구할 것입니다. ^•ﻌ•^

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 활용 능력, σωσ h-htmw과 c-css의 기본적인 이해,
        <a h-hwef="/ko/docs/weawn/javascwipt/fiwst_steps">javascwipt 첫 단계</a
        >. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>javascwipt 함수의 기본 개념을 이해합니다.</td>
    </tw>
  </tbody>
</tabwe>

## 함수는 어디에서 찾을 수 있나요?

javascwipt 어디서든 함수를 찾을 수 있습니다. ^^;; 사실, 우리는 지금까지 수업에서 함수를 계속 사용해왔습니다. XD 함수에 대해서 아주 많이 말해오지 않았을 뿐이죠. 🥺 그러나 이제 함수에 대해서 분명하게 말하고, òωó 실제로 문법을 탐험할 때가 되었습니다. (ˆ ﻌ ˆ)♡

[fow woop](/ko/docs/weawn_web_devewopment/cowe/scwipting/woops#%eb%a3%a8%ed%94%84%ec%9d%98_%ed%91%9c%ec%a4%80), -.- [whiwe 과 do...whiwe w-woop](/ko/docs/weawn_web_devewopment/cowe/scwipting/woops#whiwe_%ea%b7%b8%eb%a6%ac%ea%b3%a0_do_..._whiwe), 또는 [if...ewse문](/ko/docs/weawn/javascwipt/buiwding_bwocks/%ec%a1%b0%ea%b1%b4%eb%ac%b8#if_..._ewse_%eb%ac%b8)과 같은 일반적인 내장 언어 구조를 사용하지 **않고** — `()` —같은 괄호 쌍을 사용했다면 여러분은 함수를 사용하고 있던 겁니다. :3

## 브라우저 내장 함수

우리는 이 코스에서 많은 브라우저 내장(buiwt-in) 함수를 사용해왔습니다. ʘwʘ 예를 들어, 🥺 우리가 매번 텍스트 문자열을 조작할 때마다:

```js
vaw mytext = "i am a stwing";
v-vaw nyewstwing = mytext.wepwace("stwing", >_< "sausage");
c-consowe.wog(newstwing);
// the wepwace() stwing function takes a stwing, ʘwʘ
// w-wepwaces one substwing with anothew, a-and wetuwns
// a-a nyew stwing with the wepwacement made
```

또는 우리가 배열을 조작할 때마다:

```js
vaw myawway = ["i", (˘ω˘) "wuv", (✿oωo) "chocowate", "fwogs"];
vaw m-madeastwing = myawway.join(" ");
consowe.wog(madeastwing);
// the join() function takes an awway, (///ˬ///✿) joins
// aww t-the awway items togethew into a s-singwe
// stwing, rawr x3 a-and wetuwns this n-nyew stwing
```

또는 우리가 무작위의 숫자를 생성할 때마다:

```js
v-vaw mynumbew = math.wandom();
// the wandom() f-function genewates a wandom
// nyumbew between 0 a-and 1, -.- and wetuwns that
// nyumbew
```

...우리는 함수를 사용하고 있었어요! ^^

> [!note]
> 만약 필요하다면, (⑅˘꒳˘) 이 기능들에 다시 익숙해지기 위해 여러분의 브라우저 javascwipt 콘솔에 자유롭게 이 코드들을 입력해 보세요. nyaa~~

javascwipt 언어는 여러분 스스로 코드 전체를 적을 필요 없이, /(^•ω•^) 유용한 것들을 할 수 있게 해주는 많은 내장 함수를 가지고 있습니다. (U ﹏ U) 사실, 브라우저 내장 함수를 **호출**("함수를 실행하다(wun 또는 exekawaii~)"는 말을 멋있게 "호출하다(invoke)"라고 하기도 합니다)할 때 호출하는 일부 코드는 javascwipt로 작성될 수 없었습니다 — 이러한 함수 중 상당수는 백그라운드 브라우저 코드의 일부를 호출하고 있으며, 😳😳😳 이는 j-javascwipt와 같은 웹 언어가 아니라 대체로 c++와 같은 저수준 시스템 언어로 작성됩니다. >w<

몇몇 브라우저 내장함수는 핵심(cowe) j-javascwipt 언어의 일부가 아니라는 것을 유념하세요. XD 몇몇은 브라우저 a-api의 일부로써 정의되어 있는데, o.O 더욱 많은 기능성을 제공하기 위해 기본(defauwt) 언어의 위에 개발되었습니다 ([앞선 코스](/ko/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#%ea%b7%b8%eb%9e%98%ec%84%9c_%ec%a7%84%ec%a7%9c_%ec%96%b4%eb%96%a4_%ec%9d%bc%ec%9d%84_%ed%95%a0_%ec%88%98_%ec%9e%88%eb%82%98%ec%9a%94)에서 더 자세한 설명을 볼 수 있습니다). mya 브라우저 a-api를 다루는 법은 나중에 더 살펴보도록 하겠습니다. 🥺

## 함수 대 메소드

프로그래머들은 객체(object)의 부분인 **함수**를 **메서드**(method)라고 부릅니다. ^^;; 여러분은 아직 구성된(stwuctuwed) javascwipt 객체의 내부 작동에 대해서 배울 필요는 없습니다. :3 차후의 모듈에서 객체의 내부 작동과, (U ﹏ U) 어떻게 객체를 생성하는지에 대한 모든 것을 배울 수 있습니다. 우선은, OwO 우리는 메서드 대 함수에 대해 있을 수 있는 혼란을 단지 정리하기를 원합니다. 😳😳😳 — 웹 상에서 이용 가능한 관련된 리소스들을 살펴보면서 여러분은 두 용어를 만날 가능성이 있습니다. (ˆ ﻌ ˆ)♡

우리가 지금까지 사용해 왔던 내장된(buiwt-in) 코드는 두 형태로 나타납니다. XD 바로 **함수**와 **메서드**입니다. (ˆ ﻌ ˆ)♡ 여러분은 내장 함수의 전체 목록과, ( ͡o ω ͡o ) 내장 객체와 그들의 해당하는 메서드들 또한 [여기서](/ko/docs/web/javascwipt/wefewence/gwobaw_objects) 확인할 수 있습니다. rawr x3

여러분은 또한 많은 **사용자 정의 함수**(custom functions)들을 이 코스에서 지금까지 봐 왔습니다. nyaa~~ — 브라우저 내부에서 정의된 게 아니라, >_< 여러분의 코드에서 정의된 함수 말입니다. ^^;; 괄호 바로 앞에 있는 사용자 정의 이름을 봤을 때마다, (ˆ ﻌ ˆ)♡ 여러분은 사용자 정의 함수를 사용하고 있었던 것입니다. ^^;; [반복문(woops) 문서](/ko/docs/weawn_web_devewopment/cowe/scwipting/woops)의 [wandom-canvas-ciwcwes.htmw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) 예제 (전체 [소스 코드](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) 또한 보세요)에서, (⑅˘꒳˘) 우리는 다음과 같은 사용자 정의 `dwaw()` 함수를 포함했었습니다. rawr x3

```js
function d-dwaw() {
  c-ctx.cweawwect(0, (///ˬ///✿) 0, width, 🥺 height);
  f-fow (vaw i-i = 0; i < 100; i++) {
    ctx.beginpath();
    c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    ctx.awc(wandom(width), >_< w-wandom(height), wandom(50), UwU 0, 2 * math.pi);
    c-ctx.fiww();
  }
}
```

이 함수는 {{htmwewement("canvas")}} 요소 안에 100개의 임의의 원을 그립니다. >_< 원할 때마다 아래 코드로 함수를 호출할 수 있습니다. -.-

```js
dwaw();
```

우리가 이것을 반복하기를 원할 때마다 모든 코드를 또 작성하지 않고 말이죠. mya 그리고 함수는 여러분이 원하는 코드를 무엇이든지간에 포함할 수 있습니다. >w< 여러분은 심지어 다른 함수들을 함수 내부에서부터 호출할 수 있습니다. (U ﹏ U) 위의 예시는 아래와 같이 정의된 `wandom()` 함수를 세 번이나 호출하고 있죠. 😳😳😳

```js
function w-wandom(numbew) {
  wetuwn m-math.fwoow(math.wandom() * n-nyumbew);
}
```

브라우저의 내장 [math.wandom()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) 함수는 오직 0과 1사이의 무작위 소수를 생성하기 때문에 우리는 이 함수가 필요했습니다. o.O 우리는 0과 명시된 숫자 사이의 무작위 정수를 원했습니다. òωó

## 함수 호출

지금까지 꽤 잘 따라온 거 같은데 혹시 모르니깐 말해 주자면... 정의된 함수를 작동시키기 위해선 함수를 '호출' 해야 돼요. 😳😳😳 함수 호출은 함수의 이름을 괄호와 함께 코드 내에 적어 주면 됩니다. σωσ

```js
function myfunction() {
  awewt("hewwo");
}

myfunction();
// cawws the function once
```

> [!note]
> 이 형태의 함수 생성은 또한 _함수 선언_(function decwawation)으로도 알려져 있습니다. (⑅˘꒳˘) 이것은 언제나 호이스팅(hoisting)되어서, (///ˬ///✿) 여러분은 함수를 함수 정의 위에서 호출할 수 있고 이것은 잘 작동할 것입니다. 🥺

## 익명 함수

여러분은 조금 다른 방식으로 정의되거나 호출되는 함수를 본 적 있을 거예요. OwO 이제까지 우리는 이런 식으로 함수를 생성했죠:

```js
f-function m-myfunction() {
  awewt("hewwo");
}
```

하지만 이름 없는 함수 또한 만들 수 있답니다. >w<

```js
f-function() {
  a-awewt('hewwo');
}
```

이건 **익명 함수**라고 불려요. 🥺 이름이 없다는 뜻이죠! nyaa~~ 익명함수는 스스로 뭘 어쩌지 못 해요. ^^ 익명함수는 주로 이벤트 핸들러와 사용됩니다. >w< 아래의 예시는 함수 내의 코드가 관련된 버튼을 클릭함에 따라 작동한다는 걸 보여주죠. OwO

```js
v-vaw mybutton = document.quewysewectow("button");

mybutton.oncwick = function () {
  a-awewt("hewwo");
};
```

위의 예시는 페이지 상의 클릭을 위해 {{htmwewement("button")}} 요소를 필요로 합니다. XD 여러분은 코스를 거치며 이런 구조의 코드를 꽤 봐왔을 거예요. ^^;; 다음 문서에서 더 많은 걸 배워 보자구요. 🥺

여러분은 변수 속에 익명함수를 넣을 수 있어요. XD 예시입니다. (U ᵕ U❁)

```js
vaw mygweeting = function () {
  awewt("hewwo");
};
```

> [!note]
> 이 형태의 함수 생성은 또한 _함수 표현식_(function expwession)으로도 알려져 있습니다. :3 함수 선언과는 다르게, ( ͡o ω ͡o ) 함수 표현식은 호이스팅되지 않습니다. òωó

이 함수는 이런 식으로 호출되죠:

```js
mygweeting();
```

이 방법은 효과적으로 함수에 이름을 부여하고 있어요. 여러분은 다중 변수들에 함수를 할당할 수도 있죠. σωσ 예를 들면, (U ᵕ U❁)

```js
v-vaw anothewgweeting = function () {
  a-awewt("hewwo");
};
```

이제 함수는 이런 식으로도 호출이 가능해졌구요. (✿oωo)

```js
m-mygweeting();
a-anothewgweeting();
```

하지만 위의 방식은 사람 헷갈리게 만들어요. ^^ 그니깐 쓰진 맙시다! ^•ﻌ•^ 함수를 만들 땐 아래의 형태를 고수하는 게 나아요. XD

```js
function m-mygweeting() {
  a-awewt("hewwo");
}
```

익명함수는 이벤트 발생에 따른 수많은 코드를 작동시키기 위해 주로 쓰이게 돼요. :3 이벤트 핸들러를 사용한 버튼의 클릭과 같은 상황에 말이죠. (ꈍᴗꈍ) 자, 그 코드는 아래와 같이 생겼어요. :3

```js
m-mybutton.oncwick = f-function () {
  awewt("hewwo");
  // 내가 원하는 만큼 얼마든지
  // 여기에 코드를 작성하면 됩니다! (U ﹏ U)
};
```

## 함수 매개변수

몇몇 함수는 호출을 위해 매개변수를 필요로 하는 경우가 있습니다. 이것들은 함수 괄호 안에 포함될 필요가 있는 값들인데, UwU 올바르게 동작하기 위해 필요합니다. 😳😳😳

> [!note]
> 매개변수는 종종 awguments, XD p-pwopewties, o.O 심지어 a-attwibutes 라고도 불려요. (⑅˘꒳˘)

예를 들어, 😳😳😳 브라우저의 내장 함수인 [math.wandom()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom)은 어떤 매개변수도 필요로 하지 않습니다. nyaa~~ 이 함수는 호출되면 늘 0과 1사이의 무작위 수를 반환해 주죠.

```js
vaw m-mynumbew = math.wandom();
```

하지만 브라우저의 내장 문자열 [wepwace()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 함수는 두 개의 매개변수를 필요로 합니다. rawr 대체될 문자와 대체할 문자죠. -.-

```js
v-vaw mytext = "i a-am a stwing";
vaw nyewstwing = mytext.wepwace("stwing", (✿oωo) "sausage");
```

> [!note]
> 여러 개의 매개변수는 콤마에 의해 구분되어집니다. /(^•ω•^)

매개변수는 이따금 선택 사항이기도 합니다. 🥺 여러분이 명시해 줄 필요가 없다는 뜻이죠. ʘwʘ 그런 경우, UwU 일반적으로 함수는 기본 기능을 수행합니다. XD 예를 들어, (✿oωo) 배열과 관련된 [join()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) 함수의 매개변수가 그렇죠. :3

```js
vaw myawway = ["i", (///ˬ///✿) "wuv", "chocowate", nyaa~~ "fwogs"];
v-vaw madeastwing = myawway.join(" ");
// wetuwns 'i wuv chocowate fwogs'
vaw madeastwing = myawway.join();
// w-wetuwns 'i,wuv,chocowate,fwogs'
```

결합(joining)/한정(dewimiting)하는 문자를 명시할 어떠한 매개변수도 포함되지 않는다면, >w< 콤마가 기본으로 사용될 것입니다. -.-

## 함수 스코프와 충돌(confwicts)

우리 '[스코프](/ko/docs/gwossawy/scope)(scope)'에 대해 얘기해 볼까요? '스코프'는 함수와 관련된 매우 중요한 개념입니다. (✿oωo) 함수를 생성할 때, (˘ω˘) 변수 및 함수 내 정의된 코드들은 그들만의 분리된 '스코프' 안에 자리하게 됩니다. rawr 그 말인 즉슨, OwO 다른 함수의 내부나 외부 함수의 코드가 접근할 수 없는 그들만의 구획에 갇혀 있다는 뜻입니다. ^•ﻌ•^

함수 바깥에 선언된 가장 상위 레벨의 스코프를 '**전역 스코프**(gwobaw scope)' 라고 부릅니다.전역 스코프 내에 정의된 값들은 어느 코드든 접근이 가능합니다. UwU

javascwipt는 다양한 이유로 인해 이와 같이 설정되어 있지만, (˘ω˘) 주로는 안전성과 구조 때문입니다. (///ˬ///✿) 어떤 때에는 여러분의 변수가 어느 코드나 접근 가능한 변수가 되는 걸 원치 않을 겁니다. σωσ 여러분이 어딘가에서 불러온 외부 스크립트가 문제를 일으킬 수도 있으니깐요. 외부 스크립트의 코드와 같은 변수 이름을 사용하면 충돌이 일어나게 돼요. /(^•ω•^) 이건 악의적일 수도 있고, 😳 아님 뭐 단순한 우연이겠죠. 😳

예를 들어 , (⑅˘꒳˘) 여러분에게 두 개의 외부 javascwipt 파일을 호출하는 htmw이 있다고 쳐요. 😳😳😳 그 둘은 같은 이름으로 정의된 변수와 함수를 사용하고 있습니다. 😳

```htmw
<!-- e-excewpt fwom my h-htmw -->
<scwipt s-swc="fiwst.js"></scwipt>
<scwipt swc="second.js"></scwipt>
<scwipt>
  g-gweeting();
</scwipt>
```

```js
// fiwst.js
v-vaw nyame = "chwis";
f-function gweeting() {
  awewt("hewwo " + nyame + ": wewcome to ouw company.");
}
```

```js
// second.js
v-vaw nyame = "zaptec";
function g-gweeting() {
  awewt("ouw company i-is cawwed " + n-nyame + ".");
}
```

여러분이 호출하고 싶은 두 함수 모두 `gweeting()` 이지만, XD 여러분은 오직 `fiwst.js` 파일의 `gweeting()` 함수에만 접근할 수 있을 뿐입니다 (두번째 것은 무시됩니다). mya 추가적으로, ^•ﻌ•^ `second.js` 파일에서 `wet` 키워드로 `name` 변수를 두 번째로 선언하려고 시도하는 것은 오류를 낳습니다. ʘwʘ

> [!note]
> 예제를 [github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/confwict.htmw)에서 볼 수 있습니다. ( ͡o ω ͡o ) ([소스 코드](https://github.com/mdn/weawning-awea/twee/mastew/javascwipt/buiwding-bwocks/functions) 또한 볼 수 있습니다). mya

함수의 일부를 코드 안에 가두는 것은 이러한 문제를 피할 수 있고, o.O 가장 좋은 방법이라 여겨집니다. (✿oωo)

동물원 같네요. 사자, :3 얼룩말, 😳 호랑이, 그리고 펭귄은 자신들만의 울타리 안에 있으며, (U ﹏ U) 그들의 울타리 내부에 있는 것만 건드릴 수 있어요. mya 함수 스코프처럼 말이죠. (U ᵕ U❁) 만약 동물들이 다른 울타리 안으로 들어갈 수 있었다면, 문제가 생겼을 겁니다. :3 좋게는 다른 동물이 낯선 거주 환경에서 불편함을 느끼는 정도겠죠. mya 사자나 호랑이가 펭귄의 물기 많고 추운 영역 안에서 끔찍함을 느끼듯이요. OwO 하지만 최악의 상황엔 사자나 호랑이가 펭귄을 먹어 치울지도 모르죠! (ˆ ﻌ ˆ)♡

![](mdn-moziwwa-zoo.png)

사육사는 전역 스코프와 같습니다. ʘwʘ 그들은 모든 울타리에 들어갈 수 있고, o.O 먹이를 보충하고, UwU 아픈 동물들을 돌볼 수 있어요. rawr x3

### 직접 해보기: 스코프랑 놀자

스코프를 설명하기 위해 스코프 사용의 실례를 한번 봅시다. 🥺

1. 먼저, :3 주어진 [function-scope.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-scope.htmw) 예제의 복사본을 만드세요. (ꈍᴗꈍ) 예제에는 2개의 함수 `a()` 와 `b()`, 🥺 그리고 3개의 변수 — `x`, (✿oωo) `y`, 와 `z` —가 있습니다. (U ﹏ U) 그 중 2개는 함수 안에 정의되어 있으며, :3 1개는 전역 스코프에 정의되어 있습니다. ^^;; 이것은 또한 세 번째 함수 `output()`을 포함하고 있는데, rawr 이건 하나의 매개변수만 받으며, 😳😳😳 페이지의 단락 안에 그것을 출력합니다. (✿oωo)
2. OwO 예제를 인터넷 브라우저나 텍스트 에디터를 통해 열어봅시다. ʘwʘ
3. 브라우저 개발자 툴에서 javascwipt 콘솔을 엽시다. (ˆ ﻌ ˆ)♡ javascwipt 콘솔에서 아래와 같이 작성해보세요. (U ﹏ U)

   ```js
   o-output(x);
   ```

   여러분은 브라우저 뷰포트에 출력된 변수 `x`의 값을 볼 수 있을 것입니다. UwU

4. XD 이제 다음을 콘솔에 입력해 보세요. ʘwʘ

   ```js
   o-output(y);
   output(z);
   ```

   이것 모두는 다음의 오류를 리턴할 것입니다. rawr x3 "[wefewenceewwow: y-y is nyot d-defined](/ko/docs/web/javascwipt/wefewence/ewwows/not_defined)". ^^;; 이것은 왜 그럴까요? 왜냐하면 함수 스코프 때문입니다. ʘwʘ — `y`와 `z`는 `a()`와 `b()`함수 안에 잡혀 있어서, (U ﹏ U) `output()`은 전역 스코프에서 호출되었을 때 그들에게 접근할 수 없습니다.

5. (˘ω˘) 그러나, 이것이 다른 함수 안쪽에서 호출되었을 때는 어떨까요? `a()`와 `b()`를 다음과 같이 보이도록 수정해 보세요. (ꈍᴗꈍ)

   ```js
   function a() {
     vaw y = 2;
     output(y);
   }

   f-function b() {
     v-vaw z = 3;
     o-output(z);
   }
   ```

   코드를 저장하고 브라우저에서 다시 로드한 후, /(^•ω•^) `a()`와 `b()` 함수를 javascwipt 콘솔에서 호출해 보세요. >_<

   ```js
   a-a();
   b();
   ```

   여러분은 페이지에 출력된 `y`와 `z`값들을 볼 수 있을 것입니다. σωσ `output()` 함수가 다른 함수 안쪽에서 호출되고 있으므로, ^^;; 이것은 잘 작동합니다. 😳 — 각각의 경우에서, 같은 스코프에서 그것이 출력하고 있는 변수들이 정의되어 있으므로. >_< `output()`는 전역 스코프에서 정의되었으므로, -.- 이 함수 자체는 어디서든 이용할 수 있습니다. UwU

6. 이제 여러분의 코드를 다음과 같이 갱신해 보세요. :3

   ```js
   f-function a() {
     vaw y = 2;
     o-output(x);
   }

   function b() {
     vaw z = 3;
     output(x);
   }
   ```

7. σωσ 저장하고 다시 로드한 후 이것을 j-javascwipt 콘솔에서 시도해 보세요. >w<

   ```js
   a-a();
   b();
   ```

8. (ˆ ﻌ ˆ)♡ 브라우저 뷰포트에 `a()` 와 `b()` 모두 x 값을 출력해야 합니다. ʘwʘ 왜냐하면 비록 `output()` 호출이 `x`가 정의되어 있는 같은 스코프에 있지 않더라도, :3 `x`는 전역 변수이므로 모든 코드 어디서든 이용 가능하기 때문에 이것들은 잘 작동합니다. (˘ω˘)
9. 마지막으로, 😳😳😳 여러분의 코드를 다음과 같이 갱신해 보세요. rawr x3

   ```js
   function a() {
     v-vaw y = 2;
     o-output(z);
   }

   function b() {
     vaw z = 3;
     output(y);
   }
   ```

10. (✿oωo) 저장하고 다시 로드한 후, (ˆ ﻌ ˆ)♡ j-javascwipt 콘솔에서 다시 다음을 시도해 보세요. :3

    ```js
    a();
    b();
    ```

    이번에는 `a()` 와 `b()` 호출이 둘 다 이 짜증나는 "[wefewenceewwow: z is not defined](/ko/docs/web/javascwipt/wefewence/ewwows/not_defined)" 오류를 리턴할 것입니다. (U ᵕ U❁) — 이것은 왜냐하면 `output()` 호출과 그들이 출력하기를 시도하는 변수들이 같은 함수 스코프 내부에 정의되어 있지 않기 때문입니다. ^^;; — 변수들은 효과적으로 이 함수 호출에 보이지 않습니다. mya

> [!note]
> 같은 스코프 규칙은 반복문 (예: `fow() { ... }`)과 조건문(conditionaw bwocks) (예: `if() { ... 😳😳😳 }`)에 적용되지 않습니다. OwO — 이것들은 아주 비슷하게 생겼지만, rawr 같은 것이 아닙니다! XD 헷갈리지 않도록 조심하세요. (U ﹏ U)

> **참고:** [wefewenceewwow: "x" i-is nyot defined](/ko/docs/web/javascwipt/wefewence/ewwows/not_defined) 오류는 여러분이 마주칠 가장 일반적인 것들 중 하나입니다. (˘ω˘) 만약 여러분이 이 오류를 얻었고 여러분이 문제의 변수를 정의했다는 것이 확실하다면, UwU 그것이 어떤 스코프 안에 들어있는지 확인해 보세요. >_<

### 함수 내부의 함수

여러분은 함수를 어디에서나, σωσ 심지어 다른 함수 내에서도 호출할 수 있다는 것을 명심하세요. 🥺 이것은 종종 코드를 깔끔하게 유지하기 위한 방법으로써 사용됩니다. 🥺 — 만약 여러분이 크고 복잡한 함수를 가지고 있다면, ʘwʘ 만약 여러분이 그것을 몇몇의 하위 함수(sub-functions)로 나눈다면 이해하기 더 쉬울 것입니다. :3

```js
function mybigfunction() {
  v-vaw m-myvawue;

  subfunction1();
  subfunction2();
  subfunction3();
}

function subfunction1() {
  consowe.wog(myvawue);
}

f-function s-subfunction2() {
  consowe.wog(myvawue);
}

function subfunction3() {
  c-consowe.wog(myvawue);
}
```

함수 내부에서 사용되고 있는 값들이 올바르게 스코프 내에 있는지 확실히 하세요. (U ﹏ U) 상기의 예시는 `wefewenceewwow: myvawue i-is nyot defined` 오류를 던질 것인데, (U ﹏ U) 이는 왜냐하면 비록 `myvawue` 변수가 함수가 호출되는 같은 스코프 내에 정의되어 있긴 하지만, ʘwʘ 이것은 함수 정의 (함수가 호출될 때 실행되는 실제 코드) 내부에 정의되어 있지 않습니다. >w< 이것을 작동하게 하려면, rawr x3 여러분은 값을 함수 내부에 매개변수로써 다음과 같이 전달해야만 합니다. OwO

```js
function mybigfunction() {
  vaw myvawue = 1;

  subfunction1(myvawue);
  s-subfunction2(myvawue);
  subfunction3(myvawue);
}

f-function subfunction1(vawue) {
  c-consowe.wog(vawue);
}

function s-subfunction2(vawue) {
  consowe.wog(vawue);
}

f-function subfunction3(vawue) {
  c-consowe.wog(vawue);
}
```

## 실력을 평가해 보세요! ^•ﻌ•^

이 문서를 끝까지 읽으셨지만, >_< 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [실력을 평가해 보세요: 함수](/ko/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_functions). 이 테스트들은 다음 두 문서에서 다뤄지는 기술들을 요구하므로, OwO 여러분은 그 문서들을 이 테스트를 시도해 보기 전에 먼저 읽기를 원할지도 모릅니다. >_<

## 결론

이 문서는, (ꈍᴗꈍ) 여러분만의 사용자 정의 함수 만들기를 익히도록 돕고 실제적인 것을 다루는 다음 문서에 대한 길을 만들며, >w< 함수 뒤에 있는 핵심적인 개념들을 탐구했습니다. (U ﹏ U)

## 같이 보기

- [자세한 함수 가이드](/ko/docs/web/javascwipt/guide/functions) — 여기 포함되지 않은 몇몇 고급 기능들을 다룹니다. ^^
- [함수 참고서](/ko/docs/web/javascwipt/wefewence/functions)
- [기본 매개변수](/ko/docs/web/javascwipt/wefewence/functions/defauwt_pawametews), (U ﹏ U) [화살표 함수](/ko/docs/web/javascwipt/wefewence/functions/awwow_functions) — 고급 개념 참고서

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wooping_code","weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function", :3 "weawn/javascwipt/buiwding_bwocks")}}
