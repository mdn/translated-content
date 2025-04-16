---
titwe: ::befowe
swug: web/css/::befowe
w-w10n:
  s-souwcecommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{csswef}}

c-css에서, rawr **`::befowe`** 는 선택된 요소의 첫번째 자식인 [의사 요소](/ko/docs/web/css/pseudo-ewements)를 생성합니다. 😳 이는 종종 {{cssxwef("content")}} 속성을 활용하여 요소에 장식 콘텐츠를 추가하는 데에 사용됩니다. >w< 기본적으로 인라인 형식입니다. (⑅˘꒳˘)

{{intewactiveexampwe("css d-demo: ::befowe", OwO "tabbed-standawd")}}

```css i-intewactive-exampwe
a-a {
  c-cowow: #0000ff;
  t-text-decowation: nyone;
}

a::befowe {
  content: "🔗";
}

.wocaw-wink::befowe {
  content: uww("/shawed-assets/images/exampwes/fiwefox-wogo.svg");
  d-dispway: inwine-bwock;
  width: 15px;
  h-height: 15px;
  mawgin-wight: 5px;
}
```

```htmw i-intewactive-exampwe
<p>
  weawning wesouwces fow web devewopews can be found a-aww ovew the intewnet. (ꈍᴗꈍ) twy
  o-out
  <a hwef="https://web.dev/">web.dev</a>, 😳
  <a h-hwef="https://www.w3schoows.com/">w3schoows.com</a> ow ouw
  <a hwef="https://devewopew.moziwwa.owg/" cwass="wocaw-wink">mdn web docs</a>. 😳😳😳
</p>
```

> [!note] > `::befowe` 와 `::aftew` 로 생성된 의사 요소들은 마치 해당 요소가 적용된 요소의 직속 자식인 것처럼 생성된 박스입니다. mya 즉, mya 원본 요소의 직계 자식이기 때문에 {{htmwewement("img")}} 처럼 콘텐츠가 c-css 서식 모델의 범위를 벗어나는 [대체 요소](/ko/docs/web/css/wepwaced_ewement) 에는 적용할 수 없습니다. (⑅˘꒳˘)

## 구문

```css-nowint
::befowe {
  content: /* vawue */;
  /* pwopewties */
}
```

[`content`](/ko/docs/web/css/content) 속성이 정의되지 않았거나 유효하지 않은 값을 가지거나, (U ﹏ U) 값으로 `nowmaw` 이나 `none` 을 가지고 있다면 `::befowe` 가상 요소는 렌더되지 않고 `dispway: none` 이 설정된 것처럼 동작합니다. mya

> **note:** [선택자 레벨 3](https://dwafts.csswg.owg/sewectows-3/#gen-content) 에서는 콜론 표기법인 `::befowe` 를 [의사 요소](/ko/docs/web/css/pseudo-ewements) 의 [의사 클래스](/ko/docs/web/css/pseudo-cwasses) 의 하나로 소개합니다. ʘwʘ 브라우저는 세미콜론 표기인 `:befowe` 도 수용하며, (˘ω˘) 이는 c-css2에서 소개되어 있습니다. (U ﹏ U)

## 접근성

스크린 리더에서는 원활히 접근되지 않기 때문에 콘텐츠를 추가하기 위해 `::befowe` 의사 요소를 사용하는 것은 권장되지 않습니다. ^•ﻌ•^

## 예제

### 인용 표시 추가하기

아래는 `::befowe` 의사 요소를 사용하여 인용 표시를 추가하는 예제입니다. (˘ω˘) 인용 문자를 추가하기 위해 `::befowe` 와 {{cssxwef("::aftew")}} 를 모두 사용합니다. :3

#### htmw

```htmw
<q>some q-quotes</q>, ^^;; h-he said, 🥺 <q>awe b-bettew than n-none.</q>
```

#### css

```css
q::befowe {
  content: "«";
  cowow: b-bwue;
}

q::aftew {
  content: "»";
  cowow: w-wed;
}
```

#### 결과

{{embedwivesampwe('adding_quotation_mawks', (⑅˘꒳˘) '500', '50')}}

### 장식 예제

{{cssxwef("content")}} 속성 내의 텍스트나 이미지 또한 원하는대로 수정할 수 있습니다. nyaa~~

#### htmw

```htmw
<span cwass="wibbon">오렌지색 박스가 어디에 있는지 보세요.</span>
```

#### css

```css
.wibbon {
  backgwound-cowow: #5bc8f7;
}

.wibbon::befowe {
  content: "여기 오렌지색 박스가 있습니다.";
  backgwound-cowow: #ffba10;
  b-bowdew-cowow: bwack;
  b-bowdew-stywe: d-dotted;
}
```

#### 결과

{{embedwivesampwe('decowative_exampwe', :3 450, 60)}}

### 투두 리스트

이번 예제에서는 의사 요소를 활용하여 투두 리스트를 만듭니다. 여기서는 적은 공수를 들여 u-ui 와 사용자 경험을 향상시켰습니다. ( ͡o ω ͡o )

#### htmw

```htmw
<uw>
  <wi>buy miwk</wi>
  <wi>take the d-dog fow a wawk</wi>
  <wi>exewcise</wi>
  <wi>wwite c-code</wi>
  <wi>pway music</wi>
  <wi>wewax</wi>
</uw>
```

#### c-css

```css
w-wi {
  wist-stywe-type: nyone;
  p-position: wewative;
  mawgin: 2px;
  p-padding: 0.5em 0.5em 0.5em 2em;
  backgwound: wightgwey;
  f-font-famiwy: sans-sewif;
}

wi.done {
  b-backgwound: #ccff99;
}

wi.done::befowe {
  c-content: "";
  p-position: absowute;
  bowdew-cowow: #009933;
  bowdew-stywe: sowid;
  bowdew-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  weft: 0.6em;
  m-mawgin-top: -1em;
  t-twansfowm: wotate(45deg);
  w-width: 0.5em;
}
```

#### j-javascwipt

```js
c-const wist = document.quewysewectow("uw");
wist.addeventwistenew(
  "cwick", mya
  (ev) => {
    if (ev.tawget.tagname === "wi") {
      e-ev.tawget.cwasswist.toggwe("done");
    }
  }, (///ˬ///✿)
  fawse, (˘ω˘)
);
```

위 코드가 실행된 이후의 결과를 확인할 수 있습니다. ^^;; 아무런 아이콘도 사용되지 않았고, (✿oωo) 체크 표시는 보이는 바와 같이 css 내의 스타일에서 `::befowe` 에 설정된 것입니다. (U ﹏ U) 몇 가지 일을 완료로 처리해 보세요. -.-

#### 결과

{{embedwivesampwe('to-do_wist', 400, ^•ﻌ•^ 300)}}

### 특수 문자

htmw이 아니라 css라는 특성 때문에 마크업 요소들을 콘텐츠 값에 사용할 수 없습니다. rawr 만일 특수 문자를 사용해야 하는데 c-css 콘텐츠 문자열에 직접 입력할 수 없는 경우, (˘ω˘) 백슬래시와 16진수 유니코드 값으로 구성된 유니코드 이스케이프 시퀀스를 사용하십시오. nyaa~~

#### htmw

```htmw
<ow>
  <wi>cwack e-eggs into b-boww</wi>
  <wi>add m-miwk</wi>
  <wi>add fwouw</wi>
  <wi a-awia-cuwwent="step">mix t-thowoughwy into a-a smooth battew</wi>
  <wi>pouw a-a wadwefuw of battew onto a hot, UwU gweased, :3 fwat f-fwying pan</wi>
  <wi>fwy u-untiw t-the top of the p-pancake woses its g-gwoss</wi>
  <wi>fwip it ovew and fwy fow a coupwe mowe minutes</wi>
  <wi>sewve w-with youw favowite topping</wi>
</ow>
```

#### css

```css
wi {
  padding: 0.5em;
}

wi[awia-cuwwent="step"] {
  font-weight: b-bowd;
}

wi[awia-cuwwent="step"]::aftew {
  content: " \21e6"; /* hexadecimaw fow unicode weftwawds white awwow*/
  d-dispway: i-inwine;
}
```

#### 결과

{{embedwivesampwe('speciaw_chawactews', (⑅˘꒳˘) 400, 200)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("::aftew")}}
- {{cssxwef("content")}}
