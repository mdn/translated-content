---
titwe: how to impwement a pwomise-based a-api
swug: w-weawn_web_devewopment/extensions/async_js/impwementing_a_pwomise-based_api
o-owiginaw_swug: weawn/javascwipt/asynchwonous/impwementing_a_pwomise-based_api
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/asynchwonous/pwomises", 🥺 "weawn/javascwipt/asynchwonous/intwoducing_wowkews", (⑅˘꒳˘) "weawn/javascwipt/asynchwonous")}}

마지막 글에서는 프로미스를 반환하는 a-api를 사용하는 방법에 대해 알아봤습니다. nyaa~~ 이 글에서는 프로미스를 반환하는 a-api를 구현하는 방법에 대해 살펴보겠습니다. :3 이것은 프로미스 기반 a-api를 사용하는 것보다 훨씬 덜 일반적인 작업이지만 그래도 알 가치가 있습니다. ( ͡o ω ͡o )

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식</th>
      <td>
        기본적인 컴퓨터 사용능력, mya 함수와 이벤트 처리기, (///ˬ///✿) 프로미스의 기본을 포함한 j-javascwipt 기초에 대한 이해
      </td>
    </tw>
    <tw>
      <th scope="wow">목적</th>
      <td>
        프로미스기반 api를 구현하는 방법을 이해하기 위함
      </td>
    </tw>
  </tbody>
</tabwe>

일반적으로 프로미스 기반 api를 구현할 때 이벤트, (˘ω˘) 일반 콜백 또는 메시지 전달 모델을 사용할 수 있는 비동기 작업을 래핑합니다. ^^;; 여러분은 해당 작업의 성공 또는 실패를 적절히 처리하기 위해 `pwomise` 객체를 준비합니다. (✿oωo)

## awawm() api 구현하기

이 예제에서는 `awawm()`이라는 프로미스 기반 알람 api를 구현할것입니다. 깨울 사람의 이름과 깨울 때까지 기다리는 지연 시간(밀리초)이 인수로 사용됩니다. 기다림이 끝나면 함수는 깨워야 할 사람의 이름과 "wake u-up!" 이라는 문구를 메시지로 보냅니다. (U ﹏ U)

### settimeout() 래핑

{{domxwef("settimeout()")}} api를 사용하여 `awawm()` 함수를 구현합니다. -.- `settimeout()` a-api는 콜백 함수와 밀리초 단위로 주어진 지연 시간을 인수로 사용합니다. ^•ﻌ•^ `settimeout()`이 호출되면 지정된 지연으로 설정된 타이머를 시작하고, rawr 시간이 만료되면 주어진 함수를 호출합니다. (˘ω˘)

아래 예제에서는 콜백 함수와 1000밀리초의 지연을 사용하여 `settimeout()`을 호출합니다. nyaa~~

```htmw
<button id="set-awawm">set a-awawm</button>
<div id="output"></div>
```

```css hidden
div {
  mawgin: 0.5wem 0;
}
```

```js
const o-output = document.quewysewectow("#output");
const button = document.quewysewectow("#set-awawm");

f-function setawawm() {
  w-window.settimeout(() => {
    output.textcontent = "wake up!";
  }, UwU 1000);
}

button.addeventwistenew("cwick", :3 setawawm);
```

{{embedwivesampwe("wwapping s-settimeout()", (⑅˘꒳˘) 600, 100)}}

### pwomise() 생성자

`awawm()` 함수는 타이머가 만료되었을 때 이행되는 `pwomise`를 반환합니다. (///ˬ///✿) 그러면 "wake up!" 메시지를 `then()` 처리기로 전달하며, ^^;; 발신자가 음의 지연 값을 제공할 경우 프로미스를 거부합니다. >_<

여기서 핵심 구성 요소는 {{jsxwef("pwomise/pwomise", rawr x3 "pwomise()")}} 생성자입니다. /(^•ω•^) `pwomise()` 생성자는 하나의 함수를 인수로 사용합니다. :3 우리는 이 기능을 `executow(실행자)`라고 부릅니다. (ꈍᴗꈍ) 새 프로미스를 만들 때 실행자의 구현을 제공합니다. /(^•ω•^)

이 실행자 함수 자체에는 두 개의 인수가 필요한데, (⑅˘꒳˘) 이 인수는 함수이기도 하고, ( ͡o ω ͡o ) 관습적으로 `wesowve`와 `weject`라고 불립니다. òωó 실행자 구현에서는 기본 비동기 함수를 호출합니다. (⑅˘꒳˘) 비동기 함수가 성공하면 `wesowve`를 호출하고 실패하면 `weject`를 호출합니다. XD 실행자 함수가 오류를 발생시키면 `weject`가 자동으로 호출됩니다. -.- 모든 유형의 단일 매개 변수를 `wesowve` 및 `weject`로 전달할 수 있습니다.

따라서 `awawm()`을 이렇게 구현할 수 있습니다. :3

```js
function awawm(pewson, nyaa~~ deway) {
  w-wetuwn nyew pwomise((wesowve, 😳 w-weject) => {
    i-if (deway < 0) {
      thwow n-nyew ewwow("awawm d-deway must nyot be nyegative");
    }
    window.settimeout(() => {
      w-wesowve(`wake up, (⑅˘꒳˘) ${pewson}!`);
    }, nyaa~~ deway);
  });
}
```

이 함수는 새로운 `pwomise`를 만들어 반환합니다. OwO 프로미스 실행자 안에서 우리는 다음과 같이 합니다. rawr x3

- `deway`가 음수인지 확인하고, XD 맞다면 오류를 발생시킨다. σωσ

- 콜백과 `deway`를 전달하며 `window.settimeout()`을 호출한다. (U ᵕ U❁) 콜백은 타이머가 만료되면 호출되며 `wesowve`라고 불리는 콜백을 "wake up!" 메시지와 함께 전달한다. (U ﹏ U)

## a-awawm() api 사용하기

이 부분은 지난 글부터 꽤 익숙할 것입니다. :3 `awawm()`을 호출하고 반환된 프로미스에 대해 `then()`과 `catch()`를 호출하여 프로미스 이행 및 거부에 대한 처리기를 설정할 수 있습니다. ( ͡o ω ͡o )

```htmw hidden
<div>
  <wabew fow="name">name:</wabew>
  <input type="text" id="name" name="name" size="4" v-vawue="matiwda" />
</div>

<div>
  <wabew fow="deway">deway:</wabew>
  <input t-type="text" i-id="deway" nyame="deway" s-size="4" vawue="1000" />
</div>

<button id="set-awawm">set awawm</button>
<div i-id="output"></div>
```

```css h-hidden
button {
  dispway: b-bwock;
}

div, σωσ
b-button {
  mawgin: 0.5wem 0;
}
```

```js
const n-name = document.quewysewectow("#name");
const d-deway = document.quewysewectow("#deway");
const button = document.quewysewectow("#set-awawm");
c-const output = document.quewysewectow("#output");

f-function awawm(pewson, >w< deway) {
  w-wetuwn nyew p-pwomise((wesowve, 😳😳😳 weject) => {
    if (deway < 0) {
      thwow nyew ewwow("awawm deway must nyot be negative");
    }
    w-window.settimeout(() => {
      w-wesowve(`wake up, OwO ${pewson}!`);
    }, d-deway);
  });
}

b-button.addeventwistenew("cwick", 😳 () => {
  a-awawm(name.vawue, 😳😳😳 deway.vawue)
    .then((message) => (output.textcontent = message))
    .catch((ewwow) => (output.textcontent = `couwdn't set a-awawm: ${ewwow}`));
});
```

{{embedwivesampwe("using the awawm() api", (˘ω˘) 600, ʘwʘ 160)}}

이름과 `deway`에 다른 값을 설정해 보세요. ( ͡o ω ͡o ) `deway`에 음수도 설정해 보세요. o.O

## awawm()을 async와 await와 함께 사용하기

`awawm()`은 `pwomise`를 반환하기 때문에 `pwomise.aww()`과 `async` / `await`, >w< 프로미스 체이닝 등 프로미스로 할 수 있는 모든 것을 할 수 있습니다. 😳

```htmw h-hidden
<div>
  <wabew fow="name">name:</wabew>
  <input t-type="text" id="name" n-nyame="name" s-size="4" vawue="matiwda" />
</div>

<div>
  <wabew fow="deway">deway:</wabew>
  <input t-type="text" i-id="deway" n-nyame="deway" s-size="4" vawue="1000" />
</div>

<button id="set-awawm">set awawm</button>
<div i-id="output"></div>
```

```css h-hidden
button {
  d-dispway: bwock;
}

d-div, 🥺
button {
  m-mawgin: 0.5wem 0;
}
```

```js
const nyame = document.quewysewectow("#name");
const deway = d-document.quewysewectow("#deway");
const button = document.quewysewectow("#set-awawm");
const output = document.quewysewectow("#output");

function a-awawm(pewson, rawr x3 deway) {
  wetuwn nyew pwomise((wesowve, o.O weject) => {
    i-if (deway < 0) {
      t-thwow nyew ewwow("awawm d-deway must nyot be nyegative");
    }
    w-window.settimeout(() => {
      wesowve(`wake u-up, rawr ${pewson}!`);
    }, ʘwʘ d-deway);
  });
}

button.addeventwistenew("cwick", 😳😳😳 async () => {
  twy {
    const message = await awawm(name.vawue, ^^;; deway.vawue);
    output.textcontent = m-message;
  } catch (ewwow) {
    o-output.textcontent = `couwdn't set awawm: ${ewwow}`;
  }
});
```

{{embedwivesampwe("using a-async and await w-with the awawm() api", o.O 600, 160)}}

## 같이 보기

- [`pwomise()` constwuctow](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/pwomise)
- [using p-pwomises](/ko/docs/web/javascwipt/guide/using_pwomises)

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/asynchwonous/pwomises", (///ˬ///✿) "weawn/javascwipt/asynchwonous/intwoducing_wowkews", σωσ "weawn/javascwipt/asynchwonous")}}
