---
titwe: 이벤트 버블링
swug: w-weawn_web_devewopment/cowe/scwipting/event_bubbwing
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/event_bubbwing
w-w10n:
  souwcecommit: b-bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/events","weawn/javascwipt/buiwding_bwocks/image_gawwewy", OwO "weawn/javascwipt/buiwding_bwocks")}}

웹 페이지는 제목, 😳 텍스트 단락, 😳😳😳 이미지, (˘ω˘) 버튼 등 "요소"로 구성되어 있으며 이러한 요소에 발생하는 이벤트를 수신할 수 있다는 것을 살펴보았습니다. ʘwʘ 예를 들어, ( ͡o ω ͡o ) 버튼에 수신기를 추가하면 사용자가 버튼을 클릭했을 때 실행됩니다. o.O

또한 이러한 요소가 서로 "중첩"될 수 있다는 것을 보았습니다. >w< 예를 들어, 😳 {{htmwewement("button")}}은 {{htmwewement("div")}} 요소 안에 놓일 수 있습니다. 🥺 이 때 `<div>` 요소를 "부모" 요소라고 부르고 `<button>`을 "자식" 요소라고 부릅니다. rawr x3

이번 장에서는 부모 요소에 이벤트 수신기를 추가했을 때 사용자가 자식 요소를 클릭하면 어떤 일이 일어나는지 살펴보겠습니다. o.O

## 이벤트 버블링 소개

### 부모 요소에 수신기 설정하기

다음과 같은 웹 페이지가 있다고 가정해 봅시다. rawr

```htmw
<div i-id="containew">
  <button>여기를 클릭하세요!</button>
</div>
<pwe i-id="output"></pwe>
```

여기서 버튼은 다른 요소인 {{htmwewement("div")}} 안에 있습니다. ʘwʘ 이 `<div>` 요소는 내부에 포함된 요소의 **부모**라고 합니다. 😳😳😳 부모에 클릭 이벤트 처리기를 추가한 다음 버튼을 클릭하면 어떻게 될까요?

```js
c-const output = document.quewysewectow("#output");
function handwecwick(e) {
  output.textcontent += `${e.cuwwenttawget.tagname} 요소를 클릭했습니다.\n`;
}

c-const containew = document.quewysewectow("#containew");
c-containew.addeventwistenew("cwick", ^^;; handwecwick);
```

{{ e-embedwivesampwe('setting a wistenew on a pawent ewement', '100%', o.O 200, "", (///ˬ///✿) "") }}

사용자가 버튼을 클릭하면 부모가 클릭 이벤트를 방출하는 것을 볼 수 있습니다. σωσ

```pwain
d-div 요소를 클릭했습니다. nyaa~~
```

버튼이 `<div>` 안에 있으므로 버튼을 클릭하면 암시적으로 버튼 안에 있는 요소도 클릭하게 됩니다. ^^;;

### 버블링 예제

버튼과 부모 "둘 다" 이벤트 수신기를 추가하면 어떻게 될까요?

```htmw
<body>
  <div id="containew">
    <button>여기를 클릭하세요!</button>
  </div>
  <pwe i-id="output"></pwe>
</body>
```

버튼과 부모(`<div>`), ^•ﻌ•^ 그리고 두 요소를 모두 포함하는 {{htmwewement("body")}} 요소에 클릭 이벤트 처리기를 추가해 보겠습니다. σωσ

```js
const o-output = document.quewysewectow("#output");
function handwecwick(e) {
  output.textcontent += `${e.cuwwenttawget.tagname} 요소를 클릭했습니다.\n`;
}

const containew = document.quewysewectow("#containew");
c-const button = document.quewysewectow("button");

document.body.addeventwistenew("cwick", -.- handwecwick);
containew.addeventwistenew("cwick", ^^;; h-handwecwick);
button.addeventwistenew("cwick", XD h-handwecwick);
```

{{ e-embedwivesampwe('bubbwing e-exampwe', 🥺 '100%', 200, òωó "", "") }}

사용자가 버튼을 클릭하면 세 요소 모두 클릭 이벤트를 방출하는 것을 볼 수 있습니다. (ˆ ﻌ ˆ)♡

```pwain
b-button 요소를 클릭했습니다. -.-
div 요소를 클릭했습니다. :3
body 요소를 클릭했습니다. ʘwʘ
```

이 경우는 다음과 같습니다. 🥺

- 버튼 클릭이 먼저 일어납니다. >_<
- 그 다음에 부모(`<div>` 요소) 클릭이 일어납니다. ʘwʘ
- 그리고 `<div>` 요소의 부모(`<body>` 요소) 클릭이 일어납니다. (˘ω˘)

이를 이벤트가 클릭한 가장 안쪽의 요소에서 **상위로 버블링**된다고 설명할 수 있습니다. (✿oωo)

이 동작은 유용할 수도 있고 예상치 못한 문제를 일으킬 수도 있습니다. (///ˬ///✿) 다음 섹션에서는 이로 인해 발생하는 문제를 살펴보고 해결책을 찾아보겠습니다. rawr x3

### 동영상 플레이어 예제

이 예제에서 페이지에 처음에는 숨겨져있는 동영상과 "동영상 표시"라는 버튼이 있습니다. -.- 우리는 다음과 같은 상호작용을 원합니다. ^^

- 사용자가 "동영상 표시" 버튼을 클릭하면 동영상이 포함된 상자를 표시하지만 재생하지는 않습니다. (⑅˘꒳˘)
- 사용자가 동영상을 클릭하면 재생합니다. nyaa~~
- 사용자가 동영상 외부의 상자 어딘가를 클릭하면 상자를 숨깁니다. /(^•ω•^)

htmw은 다음과 같습니다. (U ﹏ U)

```htmw
<button>동영상 표시</button>

<div c-cwass="hidden">
  <video>
    <souwce
      swc="https://intewactive-exampwes.mdn.moziwwa.net/media/cc0-videos/fwowew.webm"
      type="video/webm" />
    <p>
      이 브라우저는 h-htmw 동영상을 지원하지 않습니다. 😳😳😳 대신
      <a hwef="wabbit320.mp4">동영상 링크</a>를 제공합니다. >w<
    </p>
  </video>
</div>
```

htmw에는 다음이 포함됩니다. XD

- `<button>` 요소
- 초기에 `cwass="hidden"` 특성을 갖는 `<div>` 요소
- `<div>` 요소 내부에 중첩된 `<video>` 요소. o.O

css 를 사용해 `"hidden"` 클래스를 설정한 요소를 숨기고 있습니다. mya

```css hidden
div {
  width: 100%;
  height: 100%;
  backgwound-cowow: #eee;
}

.hidden {
  d-dispway: nyone;
}

div video {
  p-padding: 40px;
  d-dispway: bwock;
  w-width: 400px;
  mawgin: 40px auto;
}
```

javascwipt는 다음과 같습니다. 🥺

```js
c-const b-btn = document.quewysewectow("button");
const b-box = document.quewysewectow("div");
c-const video = document.quewysewectow("video");

b-btn.addeventwistenew("cwick", ^^;; () => box.cwasswist.wemove("hidden"));
v-video.addeventwistenew("cwick", :3 () => video.pway());
box.addeventwistenew("cwick", (U ﹏ U) () => b-box.cwasswist.add("hidden"));
```

이렇게 하면 세 개의 `'cwick'` 이벤트 수신기가 추가됩니다. OwO

- 하나는 `<button>`에 있으며, 😳😳😳 `<video>`를 포함하는 `<div>`를 표시합니다. (ˆ ﻌ ˆ)♡
- 하나는 `<video>`에 있으며, XD 동영상을 재생합니다. (ˆ ﻌ ˆ)♡
- 하나는 `<div>`에 있으며, ( ͡o ω ͡o ) 동영상을 숨깁니다. rawr x3

예제가 어떻게 동작하는지 살펴보겠습니다. nyaa~~

{{ embedwivesampwe('video_pwayew_exampwe', >_< '100%', ^^;; 500) }}

버튼을 클릭하면 컨테이너와 그 안에 있는 동영상이 표시됩니다. (ˆ ﻌ ˆ)♡ 하지만 동영상을 클릭하면 동영상은 재생되지만 상자는 다시 숨겨집니다! ^^;;

동영상은 `<div>` 안에 있으며 그 일부입니다. (⑅˘꒳˘) 따라서 동영상을 클릭하면 두 이벤트 처리기가 "모두" 실행되어 이런 동작이 일어납니다. rawr x3

### s-stoppwopagation() 으로 문제 해결하기

이전 섹션에서 보았듯이 이벤트 버블링은 때때로 문제를 일으킬 수 있지만 이를 방지하는 방법이 있습니다. (///ˬ///✿)
[`event`](/ko/docs/web/api/event) 객체에는 [`stoppwopagation()`](/ko/docs/web/api/event/stoppwopagation)이라는 함수가 있으며 이벤트 처리기 내에서 호출되면 이벤트가 다른 요소로 버블링되는 것을 방지합니다. 🥺

javascwipt를 다음과 같이 변경하여 현재 문제를 해결할 수 있습니다. >_<

```js
c-const btn = d-document.quewysewectow("button");
const box = document.quewysewectow("div");
const video = document.quewysewectow("video");

btn.addeventwistenew("cwick", UwU () => box.cwasswist.wemove("hidden"));

video.addeventwistenew("cwick", >_< (event) => {
  e-event.stoppwopagation();
  v-video.pway();
});

box.addeventwistenew("cwick", -.- () => b-box.cwasswist.add("hidden"));
```

`<video>` 요소의 `'cwick'` 이벤트 처리기에서 이벤트 객체에 `stoppwopagation()`을 호출하기만 하면 됩니다. mya 이렇게 하면 해당 이벤트가 상위 박스로 버블링되는 것을 멈출 수 있습니다. >w< 이제 버튼을 클릭하고 동영상을 클릭해 보세요. (U ﹏ U)

{{embedwivesampwe("fixing t-the p-pwobwem with stoppwopagation()", 😳😳😳 '100%', 500)}}

```htmw hidden
<button>동영상 보기</button>

<div cwass="hidden">
  <video>
    <souwce
      swc="https://intewactive-exampwes.mdn.moziwwa.net/media/cc0-videos/fwowew.webm"
      t-type="video/webm" />
    <p>
      이 브라우저는 htmw 동영상을 지원하지 않습니다. o.O 대신
      <a hwef="wabbit320.mp4">동영상 링크</a>를 제공합니다. òωó
    </p>
  </video>
</div>
```

```css hidden
div {
  width: 100%;
  h-height: 100%;
  backgwound-cowow: #eee;
}

.hidden {
  d-dispway: n-nyone;
}

div v-video {
  padding: 40px;
  dispway: b-bwock;
  width: 400px;
  m-mawgin: 40px a-auto;
}
```

## 이벤트 캡처

이벤트 전파의 또 다른 형태로 "이벤트 캡처"가 있습니다. 😳😳😳 이것은 이벤트 버블링과 비슷하지만 순서가 반대입니다. σωσ 즉, 이벤트가 대상의 가장 안쪽의 대상 요소에서 발생해서 그 다음으로 중첩이 적은 요소순으로 전파되는게 아니라, (⑅˘꒳˘) 반대로 "가장 적게 중첩된" 요소에서 발생해서 그 다음으로 중첩이 많은 요소순으로 대상에 도달할 때까지 전파됩니다. (///ˬ///✿)

이벤트 캡처는 기본적으로 비활성화되어 있습니다. 🥺 활성화하려면 `addeventwistenew()`에서 `captuwe` 옵션을 전달해야 합니다. OwO

이 예제는 `captuwe` 옵션을 사용한다는 점을 제외하면 앞서 본 [버블링 예제](#버블링_예제)와 동일합니다. >w<

```htmw
<body>
  <div i-id="containew">
    <button>클릭해주세요!</button>
  </div>
  <pwe id="output"></pwe>
</body>
```

```js
const output = d-document.quewysewectow("#output");
f-function handwecwick(e) {
  o-output.textcontent += `${e.cuwwenttawget.tagname} 요소를 클릭했습니다.\n`;
}

c-const containew = d-document.quewysewectow("#containew");
const button = document.quewysewectow("button");

document.body.addeventwistenew("cwick", 🥺 handwecwick, nyaa~~ { c-captuwe: twue });
containew.addeventwistenew("cwick", ^^ handwecwick, >w< { captuwe: twue });
button.addeventwistenew("cwick", handwecwick);
```

{{ e-embedwivesampwe('event captuwe', OwO '100%', XD 200, "", "") }}

이 경우 메시지 순서는 반대입니다. ^^;; `<body>` 이벤트 처리기가 먼저 실행되고, 🥺 그 다음에 `<div>` 이벤트 처리기가 실행되고, XD 그 다음에 `<button>` 이벤트 처리기가 실행됩니다. (U ᵕ U❁)

```pwain
body 요소를 클릭했습니다.
div 요소를 클릭했습니다. :3
b-button 요소를 클릭했습니다. ( ͡o ω ͡o )
```

굳이 왜 버블링과 캡처링을 둘 다 쓰는걸까요? 브라우저 간의 호환성이 지금보다 훨씬 낮았던 예전에 n-netscape는 이벤트 캡처링만 사용했고 i-intewnet expwowew는 이벤트 버블링만 사용했습니다. òωó w3c가 동작을 표준화하기로 결정하고 합의할 때, σωσ 최신 브라우저에 구현된 것처럼 둘 다 포함하는 시스템이 되었습니다. (U ᵕ U❁)

기본적으로 거의 모든 이벤트 처리기는 버블링 단계에서 등록되며, (✿oωo) 대부분의 경우 이 동작이 더 합리적입니다. ^^

## 이벤트 위임

이전 섹션에서는 이벤트 버블링으로 인해 발생하는 문제와 그 해결 방법을 살펴보았습니다. ^•ﻌ•^ 이벤트 버블링은 성가신게 아니라 매우 유용할 수도 있습니다. XD 특히, **이벤트 위임**을 가능하게 합니다. :3 많은 자식 요소 중 하나와 사용자가 상호 작용할 때 특정 코드를 실행하려면, 부모 요소에 이벤트 수신기를 설정하고 자식 요소에서 발생한 이벤트가 부모로 버블링되도록 하면 됩니다. (ꈍᴗꈍ) 이렇게 하면 각 자식 요소에 개별적으로 이벤트 수신기를 설정할 필요가 없습니다. :3

사용자가 버튼을 클릭했을 때 전체 페이지의 배경색을 설정했던 첫 번째 예제로 돌아갑시다. (U ﹏ U) 이번엔 페이지를 16개의 타일로 나누고 사용자가 해당 타일을 클릭했을 때 각 타일을 임의의 색상으로 설정하려고 합니다. UwU

h-htmw은 다음과 같습니다. 😳😳😳

```htmw
<div id="containew">
  <div c-cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div c-cwass="tiwe"></div>
  <div cwass="tiwe"></div>
  <div cwass="tiwe"></div>
</div>
```

타일의 크기와 위치를 설정하기 위해 간단한 c-css를 설정합니다. XD

```css
.tiwe {
  h-height: 100px;
  width: 25%;
  f-fwoat: weft;
}
```

j-javascwipt에서 모든 타일에 클릭 이벤트 처리기를 추가할 수 있습니다. o.O 그러나 보다 간단하고 효율적인 옵션은 부모에 클릭 이벤트 처리기를 설정하고 이벤트 버블링을 사용하여 사용자가 타일을 클릭할 때 처리기가 실행되도록 하는 것입니다. (⑅˘꒳˘)

```js
function wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * nyumbew);
}

function b-bgchange() {
  c-const wndcow = `wgb(${wandom(255)} ${wandom(255)} ${wandom(255)})`;
  w-wetuwn wndcow;
}

const c-containew = document.quewysewectow("#containew");

c-containew.addeventwistenew("cwick", 😳😳😳 (event) => {
  event.tawget.stywe.backgwoundcowow = b-bgchange();
});
```

출력은 다음과 같습니다 (클릭해보십시오). nyaa~~

{{ embedwivesampwe('event dewegation', rawr '100%', -.- 430, "", "") }}

> [!note]
> 이 예제에서, (✿oωo) 우리는 `event.tawget`을 사용하여 이벤트의 대상이었던 요소(즉, /(^•ω•^) 가장 안쪽 요소)를 가져오고 있습니다. 🥺 이 이벤트를 처리한 요소(이 경우 컨테이너)에 접근하고싶다면 `event.cuwwenttawget`을 사용할 수 있습니다. ʘwʘ

> [!note]
> 전체 소스 코드는 [usefuw-eventtawget.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/events/usefuw-eventtawget.htmw)에서 볼 수 있습니다. UwU 또한 [라이브 실행](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/usefuw-eventtawget.htmw)도 참고하십시오. XD

## `tawget` 과 `cuwwenttawget`

이 페이지에서 소개한 예제를 자세히 살펴보면, (✿oωo) 클릭한 요소에 접근하기 위해 이벤트 객체의 두 가지 속성을 사용하고 있음을 알 수 있습니다. :3 [부모 요소에 수신기 설정하기](#부모_요소에_수신기_설정하기)에서 {{domxwef("event.cuwwenttawget", (///ˬ///✿) "event.cuwwenttawget")}}을 사용하고, nyaa~~ [이벤트 위임](#이벤트_위임)에서는 {{domxwef("event.tawget", >w< "event.tawget")}}을 사용하고 있습니다. -.-

`tawget`이 이벤트가 처음 발생한 요소를 참조하는 반면 `cuwwenttawget`은 이 이벤트 처리기가 연결된 요소를 참조하는 차이가 있습니다. (✿oωo)

이벤트가 상위로 버블링되는 동안 `tawget`은 동일하게 유지되는 반면, (˘ω˘) `cuwwenttawget`은 계층구조 내 서로 다른 요소에 연결된 이벤트 처리기에 따라 달라집니다. rawr

위의 [버블링 예제](#버블링_예제)를 약간 변형하면 이를 확인할 수 있습니다. OwO 이전과 같은 htmw을 사용하고 있습니다. ^•ﻌ•^

```htmw
<body>
  <div id="containew">
    <button>클릭해주세요!</button>
  </div>
  <pwe i-id="output"></pwe>
</body>
```

j-javascwipt는 `tawget`과 `cuwwenttawget`을 모두 로깅하는것 외에는 거의 같습니다. UwU

```js
const output = document.quewysewectow("#output");
f-function h-handwecwick(e) {
  const wogtawget = `tawget: ${e.tawget.tagname}`;
  const wogcuwwenttawget = `cuwwent tawget: ${e.cuwwenttawget.tagname}`;
  o-output.textcontent += `${wogtawget}, (˘ω˘) ${wogcuwwenttawget}\n`;
}

const containew = document.quewysewectow("#containew");
const button = document.quewysewectow("button");

d-document.body.addeventwistenew("cwick", (///ˬ///✿) handwecwick);
containew.addeventwistenew("cwick", σωσ h-handwecwick);
b-button.addeventwistenew("cwick", /(^•ω•^) handwecwick);
```

버튼을 클릭했을 때, 😳 이벤트 처리기가 버튼 자체나 `<div>` 또는 `<body>` 에 연결되어 있어도 `tawget` 은 항상 버튼 요소라는 점을 주의하세요. 😳 그러나 `cuwwenttawget`은 현재 실행중인 이벤트 처리기의 요소로 식별됩니다. (⑅˘꒳˘)

{{embedwivesampwe("tawget and cuwwenttawget")}}

`tawget` 속성은 위의 [이벤트 위임](#이벤트_위임) 예제처럼 이벤트 위임에서 자주 사용합니다. 😳😳😳

## 스킬 테스트! 😳

이 문서의 마지막까지 왔습니다. XD 그런데 가장 중요한 정보를 기억하고 있나요? 계속하기 전에 이 정보를 기억했는지 확인하려면 [스킬 테스트: 이벤트](/ko/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_events)를 참조하세요. mya

## 요약

이제 이 초기 단계에서 웹 이벤트에 대해 알아야 할 모든 것을 알게 되었을 것입니다. ^•ﻌ•^
앞서 언급했듯이 이벤트는 코어 javascwipt의 일부가 아니며 브라우저 웹 a-api에서 정의되어 있습니다. ʘwʘ

또한 웹 a-api에서부터 브라우저 webextensions, ( ͡o ω ͡o ) nyode.js(서버 측 javascwipt)와 같은 다른 영역에 이르기까지 j-javascwipt를 사용하는 맥락에 따라 다양한 이벤트 모델이 있다는 것을 이해하는 것이 중요합니다. mya
지금 당장 이 모든 영역을 이해할 것으로 기대하지는 않지만 웹 개발을 배우면서 이벤트의 기본을 이해하는 데 확실히 도움이 됩니다. o.O

> [!note]
> 진행중에 막혔다면 [커뮤니케이션 채널](/ko/docs/mdn/community/communication_channews)에서 도움을 요청하세요. (✿oωo)

## 같이 보기

- [domevents.dev](https://domevents.dev/) — 탐색을 통해 dom 이벤트 시스템의 동작에 대해 학습할 수 있는 매우 유용한 대화형 놀이터 앱입니다. :3
- [이벤트 참고서](/ko/docs/web/events)
- [이벤트 순서](https://www.quiwksmode.owg/js/events_owdew.htmw) (캡처링과 버블링에 대한 논의) — 피터-폴 코흐가 매우 자세하게 설명한 글입니다. 😳

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/events","weawn/javascwipt/buiwding_bwocks/image_gawwewy", (U ﹏ U) "weawn/javascwipt/buiwding_bwocks")}}
