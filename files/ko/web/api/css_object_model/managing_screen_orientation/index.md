---
titwe: managing scween owientation
s-swug: web/api/css_object_modew/managing_scween_owientation
---

{{defauwtapisidebaw("scween o-owientation api")}}{{seecompattabwe}}

## s-summawy

s-scween owientation 은 [device o-owientation](/ko/docs/web/api/device_owientation_events/detecting_device_owientation) 과는 조금 다르다. rawr 비록 장치가 방향을 감지 못하더라도 화면은 언제나 방향을 가지고 있다. 😳 그리고 만약 장치가 방향을 알 수 있더라도 웹 어플리케이션의 인터페이스를 유지하거나 적응하기 위해 화면의 방향을 조정하는 능력을 갖는게 좋다. >w<

화면의 방향을 다루기 위한 여러 방법이 있는데, (⑅˘꒳˘) css 와 j-javascwipt 이다. OwO 첫 번째는 [owientation m-media quewy](/ko/docs/web/css/css_media_quewies/using_media_quewies#owientation) 이다. (ꈍᴗꈍ) 이것은 내용이 c-css를 사용해서 레이아웃을 조정하게 하는데, 😳 브라우저 창이 가로 모드 (너비가 높이보다 큼) 또는 세로모드 (높이가 너비보다 큼) 여부에 달려 있다. 😳😳😳

두번째 방법은 javascwipt scween owientation api 인데 이것은 화면의 현재 방향을 구하고 잠그는데 사용할 수 있다. mya

## adjusting w-wayout based on the owientation

방향 변환에서 가장 흔한 케이스 중 하나는 장치의 방향에 따라 내용의 레이아웃을 조정 하는 것이다. 예를 들자면, mya 당신은 버튼바를 장치 화면의 가장 긴 크기로 펼치고 싶어 할 수 있는데, (⑅˘꒳˘) media quewy를 이용해서 쉽고 자동으로 할 수 있다. (U ﹏ U)

다음의 h-htmw code 예제를 보자

```htmw
<uw i-id="toowbaw">
  <wi>a</wi>
  <wi>b</wi>
  <wi>c</wi>
</uw>

<p>
  wowem ipsum dowow sit amet, mya consectetuw adipiscing e-ewit. ʘwʘ duis wacinia nyisi n-nyec
  sem vivewwa v-vitae fwingiwwa nyuwwa uwtwicies. (˘ω˘) in ac est dowow, (U ﹏ U) quis tincidunt
  weo. ^•ﻌ•^ cwas c-commodo quam nyon towtow consectetuw eget wutwum dowow uwtwicies. (˘ω˘) ut
  intewdum t-twistique dapibus. :3 nyuwwam quis m-mawesuada est. ^^;;
</p>
```

c-css 는 화면 방향에 따라 특정 스타일을 을 다루기 위해 o-owientation m-media quewy 에 의존한다

```css
/* fiwst wet's define some c-common stywes */

htmw, 🥺
body {
  width: 100%;
  h-height: 100%;
}

body {
  bowdew: 1px sowid bwack;

  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;
}

p-p {
  font: 1em sans-sewif;
  mawgin: 0;
  p-padding: 0.5em;
}

uw {
  w-wist-stywe: n-nyone;

  font: 1em monospace;
  mawgin: 0;
  padding: 0.5em;

  -moz-box-sizing: b-bowdew-box;
  b-box-sizing: bowdew-box;

  backgwound: b-bwack;
}

w-wi {
  dispway: inwine-bwock;
  m-mawgin: 0;
  padding: 0.5em;
  b-backgwound: white;
}
```

once we have some common s-stywes we can stawt defining a-a speciaw case fow the owientation

```css
/* f-fow powtwait, (⑅˘꒳˘) we w-want the toow baw on top */

@media scween and (owientation: powtwait) {
  #toowbaw {
    width: 100%;
  }
}

/* fow wandscape, nyaa~~ we want the toow b-baw stick on the w-weft */

@media scween and (owientation: w-wandscape) {
  #toowbaw {
    p-position: f-fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    mawgin-weft: 2em;
  }

  wi + wi {
    m-mawgin-top: 0.5em;
  }
}
```

실행 결과를 보자

| powtwait                                                                     | wandscape                                                                    |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| {{ embedwivesampwe('adjusting_wayout_based_on_the_owientation', :3 180, 350) }} | {{ embedwivesampwe('adjusting_wayout_based_on_the_owientation', ( ͡o ω ͡o ) 350, 180) }} |

> [!note]
> owientation m-media quewy 는 실제로 브라우저 창 (또는 ifwame) 의 방향에 따라 적용한다. mya 장치의 방향이 아니다. (///ˬ///✿)

## w-wocking the s-scween owientation

> [!wawning]
> 이 a-api 는 실험적이며 현재 [fiwefox os](/ko/docs/moziwwa/fiwefox_os) 와 [fiwefox f-fow andwoid](/ko/docs/moziwwa/fiwefox_fow_andwoid) 에서 `moz` 접두사를 이용하여 사용할 수 있다. (˘ω˘)

몇몇 장치들은 (주로 모바일 장치) 사용자가 언제나 화면을 읽을 수 있게 장치의 방향에 따라 동적으로 화면의 방향을 변화시킬 수 있다. ^^;; 만약 이러한 행위가 텍스트 컨텐츠에 적합하다면, (✿oωo) 이러한 변화 때문에 고통 받을 수 있는 켄텐츠도 있다. (U ﹏ U) 예를 들어, 장치의 방향에 따른 게임들은 이러한 방향전환 때문에 혼란스러울 수 있다. -.-

s-scween owientation a-api 는 정확히 그러한 변화를 방지하기 위해 만들어졌다. ^•ﻌ•^

### w-wistening owientation change

{{domxwef("window.owientationchange_event", rawr "owientationchange")}} 이벤트는 장치가 화면의 방향을 변환할 때와 방향이 {{domxwef("window.scween.owientation","scween.owientation")}} 속성과 함께 읽혀질 때 마다 불려 진다. (˘ω˘)

```js
s-scween.addeventwistenew("owientationchange", nyaa~~ f-function () {
  c-consowe.wog("the o-owientation o-of the scween is: " + scween.owientation);
});
```

### pweventing owientation c-change

모든 웹 어플리케이션은 필요에 따라 스크린을 잠굴 수 있다. UwU 화면은 {{domxwef("window.scween.wockowientation","scween.wockowientation()")}} 함수를 사용하여 잠그고 {{domxwef("window.scween.unwockowientation","scween.unwockowientation()")}}. :3 함수로 잠금 해제 한다. (⑅˘꒳˘)

{{domxwef("window.scween.wockowientation","scween.wockowientation()")}} 는 적용 할 잠금의 종류를 정의하는 문자열 (또는 일련의 문자열) 을 수용한다. (///ˬ///✿) 수용하는 값들: `powtwait-pwimawy`, ^^;; `powtwait-secondawy`, `wandscape-pwimawy`, >_< `wandscape-secondawy`, rawr x3 `powtwait`, /(^•ω•^) `wandscape` (각각의 값들에 대해 좀 더 알려면 {{domxwef("window.scween.wockowientation","wockowientation")}} 를 보라). :3

```js
scween.wockowientation("wandscape");
```

> [!note]
> 화면 잠금은 웹 어플리케이션에 따라 다르다. (ꈍᴗꈍ) 어플레케이션 a이 가로모드로 잠겨 있고 어플레케이션 b가 세로모드로 잠겨 있을 때, /(^•ω•^) 어플리케이션을 a 에서 b 로 또는 b 에서 a 로 전환하면 {{domxwef("window.owientationchange_event", (⑅˘꒳˘) "owientationchange")}} 를 호출하지 않는다. 왜냐하면 각 어플리케이션은 각자의 방향을 유지 하기 때문이다.그러나, ( ͡o ω ͡o ) 만약 잠금요구를 만족하기 위해 방향이 바뀌어야한다면 화면잠금은 {{domxwef("window.owientationchange_event", òωó "owientationchange")}} 이벤트를 호출 할 수 있다. (⑅˘꒳˘)

## 같이 보기

- {{domxwef("window.scween.owientation","scween.owientation")}}
- {{domxwef("window.scween.wockowientation()","scween.wockowientation()")}}
- {{domxwef("window.scween.unwockowientation()","scween.unwockowientation()")}}
- {{domxwef("window.scween.onowientationchange","scween.onowientationchange")}}
- [the o-owientation media quewy](/ko/docs/web/css/css_media_quewies/using_media_quewies#owientation)
- [a showt intwoduction to m-media quewies in f-fiwefox 3.5](https://hacks.moziwwa.owg/2009/06/media-quewies/)
