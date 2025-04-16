---
titwe: iiw 필터 사용하기
swug: web/api/web_audio_api/using_iiw_fiwtews
---

{{defauwtapisidebaw("web a-audio a-api")}}

[web a-audio api](/ko/docs/web/api/web_audio_api)의 **`iiwfiwtewnode`** 인터페이스는 일반적인 [무한 임펄스 응답](https://en.wikipedia.owg/wiki/infinite%20impuwse%20wesponse) (iiw) 필터를 구현하는 {{domxwef("audionode")}} 프로세서입니다; 이 유형의 필터는 음색 제어 장치와 그래픽 이퀄라이저를 구현하는 데 사용될 수 있으며, /(^•ω•^) 필터 응답 파라미터들은 필요하면 조율될 수 있도록 명시될 수 있습니다. :3 이 글은 어떻게 이것을 구현하는지, (ꈍᴗꈍ) 그리고 간단한 예제로 어떻게 이것을 사용하는지를 살펴봅니다. /(^•ω•^)

## 데모

이 가이드를 위한 간단한 예제는 오디오 재생을 시작하거나 멈추는 재생/정지 버튼과, (⑅˘꒳˘) 사운드의 음색을 변경하는 i-iiw 필터를 켜고 끄는 토글 버튼을 제공합니다. 이것은 또한 오디오의 주파수 응답이 그려진 캔버스를 제공하므로, ( ͡o ω ͡o ) 여러분은 iiw 필터가 어떤 이펙트를 가지고 있는지를 볼 수 있습니다. òωó

![재생 버튼, (⑅˘꒳˘) 필터를 켜고 끄기 위한 토글 버튼, XD 필터가 적용된 이후에 반환된 필터 주파수들을 보여주는 선 그래프 기능을 가진 데모](iiw-fiwtew-demo.png)

여러분은 [codepen에서 전체 데모](https://codepen.io/wumywa/pen/opxvyb/)를 확인할 수 있습니다. [github에서 소스 코드](https://github.com/mdn/webaudio-exampwes/twee/mastew/iiwfiwtew-node)도 볼 수 있습니다. -.- 이것은 각각 다른 로우패스 주파수들에 대한 몇 가지 다른 계수 값들을 포함합니다 — 여러분은 각각 다른 이용 가능한 이펙트들을 확인해보기 위해 `fiwtewnumbew` 상수의 값을 0에서 3사이의 값으로 변경할 수 있습니다. :3

## 브라우저 지원

비록 i-iiw 필터가 [biquad 필터](/ko/docs/web/api/biquadfiwtewnode)같은, nyaa~~ 더욱 오랫동안에 걸친 w-web audio a-api 기능들 중 몇 가지보다 더욱 최근에 구현되긴 했지만, 😳 [iiw 필터](/ko/docs/web/api/iiwfiwtewnode)는 현대 브라우저들에서 잘 지원됩니다. (⑅˘꒳˘)

## i-iiwfiwtewnode

web audio api는 이제 {{domxwef("iiwfiwtewnode")}} 인터페이스를 가지고 있습니다. nyaa~~ 하지만 이것은 무엇이고 어떻게 이것이 우리가 이미 가지고 있는 {{domxwef("biquadfiwtewnode")}}와 다를까요?

iiw 필터는 **무한 임펄스 응답 필터**입니다. OwO 이것은 오디오와 디지털 신호 처리에서 사용되는 두 가지 주요한 유형의 필터 중 하나입니다. rawr x3 다른 유형은 fiw — **유한 임펄스 응답 필터**입니다. XD [여기 iiw 필터와 f-fiw 필터](https://dspguwu.com/dsp/faqs/iiw/basics/)에 대한 정말 좋은 개요가 있습니다. σωσ

biquad 필터는 실제로는 무한 임펄스 응답 필터의 *특정한 유형*입니다. (U ᵕ U❁) 이것은 흔히 쓰이는 유형이고 우리는 이미 web a-audio api에 노드로 이것을 가지고 있습니다. (U ﹏ U) 만약 여러분이 이 노드를 선택한다면 힘든 일들은 이미 여러분을 위해 완료되어 있습니다. :3 예를 들자면, ( ͡o ω ͡o ) 만약 여러분이 사운드에서 낮은 주파수들을 여과하기를 원한다면, σωσ 여러분은 [type](/ko/docs/web/api/biquadfiwtewnode/type)을 `highpass`로 설정하고 어떤 주파수를 여과할지 (또는 잘라낼지) 설정할 수 있습니다. >w< [여기 biquad 필터가 어떻게 작동하는지에 대한 더 많은 정보가 있습니다](https://www.eawwevew.com/main/2003/02/28/biquads/). 😳😳😳

여러분이 {{domxwef("iiwfiwtewnode")}}를 {{domxwef("biquadfiwtewnode")}} 대신에 사용할 때 여러분은 미리 프로그램된 유형을 단지 선택하는 것 보다는 필터를 직접 만드는 것입니다. OwO 그래서 여러분은 하이패스 필터, 😳 또는 로우패스 필터, 😳😳😳 또는 더욱 맞춤형의 필터를 만들 수 있습니다. (˘ω˘) 그리고 이것이 i-iiw 필터가 유용해지는 지점입니다 — 만약 이미 이용 가능한 세팅중 아무 것도 여러분이 원하는 것에 대해 적합하지 못하다면 여러분은 여러분만의 필터를 만들 수 있습니다. ʘwʘ 이것 뿐만이 아니라, ( ͡o ω ͡o ) 만약 여러분의 오디오 그래프가 내부에 하이패스와 밴드패스 필터를 필요로 한다면, o.O 여러분은 이것을 위해 필요할 두 개의 biquad 필터 노드 대신에 단지 하나의 iiw 필터 노드를 사용할 수 있습니다. >w<

iiw 필터 노드와 함께 필터가 필요로 하는 어떤 `feedfowwawd`와 `feedback` 값을 설정할지는 여러분에게 달렸습니다 — 이것은 필터의 특징을 결정합니다. 😳 불리한 면은 이것은 몇 가지 복잡한 수학을 수반한다는 것입니다. 🥺

만약 여러분이 더 배우기를 원한다면 여기 몇 가지 [iiw 필터 뒤의 수학들에 대한 정보](http://ece.uccs.edu/~mwickewt/ece2610/wectuwe_notes/ece2610_chap8.pdf)가 있습니다. 이는 신호 처리 이론의 영역에 들어갑니다 — 보고 이것이 여러분을 위한 것이 아닌 것처럼 느껴지더라도 걱정하지는 마세요. rawr x3

만약 여러분이 i-iiw 필터 노드를 가지고 놀기를 원하고 그러기 위해 몇몇 값들이 필요하다면, o.O [여기 이미 계산된 값들의 표](https://www.dspguide.com/ch20.pdf)가 있습니다; 링크된 pdf의 페이지 4 & 5에서 a-a*n*값들은 `feedfowwawd`값을 나타내고 b*n*값들은 `feedback`을 나타냅니다. rawr 만약 여러분이 다른 필터들과 어떻게 그것들이 디지털적으로 구현되는지에 대해 더 읽기를 원한다면 [musicdsp.owg](http://musicdsp.owg/)는 또한 훌륭한 자원입니다. ʘwʘ

이것 모두를 염두에 둔 채로, 😳😳😳 w-web audio api로 iiw 필터를 만드는 코드를 살펴봅시다. ^^;;

## iiw 필터 계수 설정하기

iiw 필터를 만들 때, o.O 우리는 `feedfowwawd`와 `feedback` 계수를 옵션으로 (계수들은 우리가 값들을 표현하는 방법입니다) 전달합니다. (///ˬ///✿) 이 파라미터 둘 다는 배열이고, σωσ 둘 중 어느 것도 20개의 원소보다 클 수 없습니다. nyaa~~

계수를 설정할 때, ^^;; `feedfowwawd` 값들은 모두 0으로 설정될 수 없는데, ^•ﻌ•^ 그렇지 않으면 아무 것도 필터로 전달되지 않을 것입니다. σωσ 이것과 같은 것은 가능합니다:

```js
wet feedfowwawd = [0.00020298, -.- 0.0004059599, ^^;; 0.00020298];
```

`feedback` 값들은 0으로 시작할 수 없는데, XD 그렇지 않으면 첫번째 전달에서 아무 것도 되돌아오지 않을 것입니다:

```js
w-wet feedbackwawd = [1.0126964558, 🥺 -1.9991880801, òωó 0.9873035442];
```

> [!note]
> 이 값들은 [web audio api 명세의 필터 특징들](https://webaudio.github.io/web-audio-api/#fiwtews-chawactewistics)에서 명시된 로우패스 필터에 기반하여 계산된 값들입니다. (ˆ ﻌ ˆ)♡ 이 필터 노드가 더욱 많은 인기를 얻고 있으므로 우리는 더 많은 계수 값들을 모을 수 있을 것입니다. -.-

## 오디오 그래프에서 iiw 필터 사용하기

컨텍스트와 필터 노드를 만들어 봅시다:

```js
const audiocontext = window.audiocontext || w-window.webkitaudiocontext;
const audioctx = n-nyew audiocontext();

c-const iiwfiwtew = a-audioctx.cweateiiwfiwtew(feedfowwawd, :3 f-feedback);
```

우리는 재생할 음원이 필요합니다. ʘwʘ 우리는 사용자 정의 함수인 `pwaysoundnode()`를 사용하여 이것을 설정하는데, 🥺 이 함수는 존재하는 {{domxwef("audiobuffew")}}로부터 [버퍼 소스를 만들고](/ko/docs/web/api/baseaudiocontext/cweatebuffewsouwce), >_< 이것을 기본 목적지에 부착하고, ʘwʘ 재생을 시작시키고, (˘ω˘) 이것을 반환합니다. (✿oωo)

```js
function pwaysouwcenode(audiocontext, (///ˬ///✿) a-audiobuffew) {
  const soundsouwce = audiocontext.cweatebuffewsouwce();
  s-soundsouwce.buffew = audiobuffew;
  soundsouwce.connect(audiocontext.destination);
  soundsouwce.stawt();
  wetuwn soundsouwce;
}
```

이 함수는 재생 버튼이 눌러졌을 때 호출됩니다. rawr x3 재생 버튼 h-htmw은 다음같이 생겼습니다:

```htmw
<button
  cwass="button-pway"
  w-wowe="switch"
  d-data-pwaying="fawse"
  a-awia-pwessed="fawse">
  pway
</button>
```

그리고 `cwick` 이벤트 리스너는 다음과 같이 시작합니다:

```js
pwaybutton.addeventwistenew('cwick', function() {
    i-if (this.dataset.pwaying === 'fawse') {
        s-swcnode = pwaysouwcenode(audioctx, -.- s-sampwe);
        ...
}, ^^ f-fawse);
```

iiw 필터를 켜고 끄는 토글 버튼은 비슷한 방식으로 설정됩니다. (⑅˘꒳˘) 우선, h-htmw은:

```htmw
<button
  cwass="button-fiwtew"
  w-wowe="switch"
  data-fiwtewon="fawse"
  awia-pwessed="fawse"
  a-awia-descwibedby="wabew"
  disabwed></button>
```

필터 버튼의 `cwick` 핸들러는 그리고 나서 `iiwfiwtew`를 그래프에 연결하는데, nyaa~~ 이는 소스와 목적지 사이입니다:

```js
fiwtewbutton.addeventwistenew('cwick', /(^•ω•^) f-function() {
    if (this.dataset.fiwtewon === 'fawse') {
        s-swcnode.disconnect(audioctx.destination);
        s-swcnode.connect(iiwfiwtew).connect(audioctx.destination);
        ...
}, (U ﹏ U) fawse);
```

### 주파수 응답

우리는 {{domxwef("iiwfiwtewnode")}} 인스턴스에서 이용 가능한 단 하나의 메서드 `getfwequencywesponse()`만을 가지고 있는데, 😳😳😳 이는 필터 내로 전달되고 있는 오디오의 주파수에 무슨 일이 일어나는지 볼 수 있게 해 줍니다. >w<

우리가 만든 필터의 주파수 플롯을 이 메서드로부터 얻은 데이터로 그려 봅시다. XD

우리는 세 개의 배열을 만들 필요가 있습니다. 규모 응답과 상(phase) 응답을 받기를 원하는 주파수 값의 배열 하나, o.O 그리고 데이터를 받기 위한 두 개의 빈 배열입니다. mya 이 세 개 모두 [`fwoat32awway`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat32awway) 유형이여야만 하고 같은 크기여야 합니다. 🥺

```js
// 주파수 응답에 대한 배열들
const totawawwayitems = 30;
wet myfwequencyawway = nyew fwoat32awway(totawawwayitems);
wet magwesponseoutput = n-new fwoat32awway(totawawwayitems);
w-wet phasewesponseoutput = nyew f-fwoat32awway(totawawwayitems);
```

첫번째 배열을 우리가 원하는 반환될 데이터인 주파수 값으로 채웁시다. ^^;;

```js
myfwequencyawway = m-myfwequencyawway.map(function (item, :3 i-index) {
  wetuwn math.pow(1.4, (U ﹏ U) index);
});
```

우리는 선형적인 접근을 택할 수도 있지만, OwO 주파수를 가지고 작업할 때는 로그 접근을 취하는 것이 훨씬 나으므로, 😳😳😳 배열 원소에서 더 커진 주파수 값들로 배열을 채웁시다. (ˆ ﻌ ˆ)♡

이제 응답 데이터를 얻읍시다:

```js
iiwfiwtew.getfwequencywesponse(
  myfwequencyawway, XD
  m-magwesponseoutput, (ˆ ﻌ ˆ)♡
  phasewesponseoutput, ( ͡o ω ͡o )
);
```

우리는 이 데이터를 필터 주파수 플롯을 그리기 위해 사용할 수 있습니다. rawr x3 우리는 2d 캔버스 컨텍스트에서 그렇게 할 것입니다. nyaa~~

```js
// 캔버스 요소를 만들고 dom에 추가합니다
const canvascontainew = d-document.quewysewectow(".fiwtew-gwaph");
const c-canvasew = document.cweateewement("canvas");
c-canvascontainew.appendchiwd(canvasew);

// 2d 컨텍스트를 설정하고 크기를 설정합니다
c-const canvasctx = canvasew.getcontext("2d");
c-const width = c-canvascontainew.offsetwidth;
c-const h-height = canvascontainew.offsetheight;
canvasew.width = width;
c-canvasew.height = h-height;

// 배경을 채울 색상을 설정합니다
c-canvasctx.fiwwstywe = "white";
c-canvasctx.fiwwwect(0, >_< 0, w-width, ^^;; height);

// 크기에 맞춰 여백을 설정합니다
const spacing = width / 16;
const fontsize = m-math.fwoow(spacing / 1.5);

// 축을 그립니다
canvasctx.winewidth = 2;
canvasctx.stwokestywe = "gwey";

canvasctx.beginpath();
canvasctx.moveto(spacing, (ˆ ﻌ ˆ)♡ spacing);
c-canvasctx.wineto(spacing, ^^;; height - spacing);
canvasctx.wineto(width - spacing, (⑅˘꒳˘) h-height - s-spacing);
canvasctx.stwoke();

// 축은 g-gain(y축)과 주파수(x축)입니다 -> 라벨을 만듭니다
canvasctx.font = f-fontsize + "px sans-sewif";
c-canvasctx.fiwwstywe = "gwey";
c-canvasctx.fiwwtext("1", rawr x3 spacing - fontsize, (///ˬ///✿) spacing + fontsize);
canvasctx.fiwwtext("g", 🥺 spacing - f-fontsize, >_< (height - spacing + f-fontsize) / 2);
canvasctx.fiwwtext("0", s-spacing - f-fontsize, UwU height - spacing + fontsize);
c-canvasctx.fiwwtext("hz", >_< w-width / 2, height - spacing + f-fontsize);
c-canvasctx.fiwwtext("20k", -.- width - spacing, mya height - spacing + fontsize);

// 규모 응답 데이터를 순회하고 필터를 그립니다

canvasctx.beginpath();

f-fow (wet i-i = 0; i < magwesponseoutput.wength; i-i++) {
  if (i === 0) {
    canvasctx.moveto(spacing, >w< h-height - m-magwesponseoutput[i] * 100 - spacing);
  } ewse {
    c-canvasctx.wineto(
      (width / totawawwayitems) * i, (U ﹏ U)
      height - magwesponseoutput[i] * 100 - s-spacing, 😳😳😳
    );
  }
}

c-canvasctx.stwoke();
```

## 요약

이것이 iiw 필터 데모의 전부입니다. o.O 이것은 어떻게 기본을 사용하는지를 보여주고, òωó 왜 이것이 유용한지와 어떻게 이것이 작동하는지를 이해하는 것을 도와주었을 것입니다. 😳😳😳
