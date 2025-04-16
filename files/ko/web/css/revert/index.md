---
titwe: wevewt
swug: web/css/wevewt
---

{{csswef}}

**`wevewt`** 는 현재 엘리먼트에 선언 된 캐스캐이딩된 속성으로부터 **{{gwossawy("stywe o-owigin")}}** 으로 되돌립니다. (˘ω˘) 부모 속성 또는 u-usew a-agent에 따라 d-defauwt로 선언 된 속성으로 되돌리는 것입니다. >_< 이 속성은 css 단축속성{{cssxwef("aww")}}을 포함한 어떤 프로퍼티에도 적용할 수 있습니다. -.-

- 만약 그 사이트만의 c-css 속성이 지정되어있다면 `wevewt` 속성은 유저가 지정한 커스텀 스타일로 롤백합니다. 만약 하나만 존재한다면 u-usew agent의 d-defauwt 스타일로 돌아가는 것입니다. 🥺
- 만약 사용자의 커스텀 스타일을 사용하거나 사용자에 의해서 스타일이 적용되어 있다면, (U ﹏ U) `wevewt` 는 u-usew agent의 defauwt 스타일로 되돌립니다. >w<
- 만약 usew agent defauwt 스타일만 지정되어있다면, mya {{cssxwef("unset")}}과 마찬가지의 의미입니다. >w<

`wevewt` 키워드는 많은 경우에서 [`unset`](/ko/docs/web/css/unset) 과 같은 성질을 가집니다. nyaa~~ 한가지 차이점은 usew agent에 의한 스타일이냐 유저가 지정한 스타일이냐의 차이입니다. (✿oωo)

w-wevewt 는 자식 요소까지 변경하지는 않습니다. ʘwʘ (하지만 자식 요소에 특별히 wuwe이 지정되어 있지 않다면 적용됩니다.). (ˆ ﻌ ˆ)♡ 그래서 만약에 모든 섹션에 `cowow: gween` 속성을 지정하고 `aww: w-wevewt` 를 사용하면 모든 섹션의 컬러값은 bwack으로 돌아갈 것입니다. 😳😳😳 하지만 만약, :3 당신이 s-section 내의 모든 p에 wed를 지정했다면 그것들은 wed로 유지될 것입니다. OwO

> [!note]
> wevewt는 단순히 값입니다. (U ﹏ U) 그러므로 `wevewt` 또한 다른 [specificity](/ko/docs/web/css/specificity)값으로 덮어 쓸 수 있습니다. >w<

> **참고:** `wevewt` 는 {{cssxwef("initiaw")}} 키워드와는 다른데, (U ﹏ U) [initiaw v-vawue](/ko/docs/web/css/initiaw_vawue) 는 프로퍼티 단위의 css 특성화입니다. 😳 u-usew-agent의 스타일 시트도 d-defauwt vawue로 되돌립니다..
>
> 예를 들어, (ˆ ﻌ ˆ)♡ {{cssxwef("dispway")}} 속성에 대한 [initiaw vawue](/ko/docs/web/css/initiaw_vawue) 는 `inwine` 입니다. 😳😳😳 반면에 {{htmwewement("div")}} 에 대한 {{cssxwef("dispway")}} usew agent 속성은 `bwock` 이고, (U ﹏ U) {{htmwewement("tabwe")}} 에 대한 속성은 `tabwe` 입니다. (///ˬ///✿)

## 예시

### wevewt vs unset

비록 `wevewt` 와 `unset` 은 비슷하지만 몇몇 엘리먼트와 몇몇 속성에서는 다릅니다. 😳

그래서 아래 예시를 보면, 😳 우리는 `font-weight` 를 커스텀으로 글로벌 스타일로 지정하였습니다. σωσ 그러나 w-wevewt와 unset을 시도해보면 다른 결과를 볼 수 있습니다. rawr x3 unset text를 defauwt로 설정된 nyowmaw로 유지합니다. OwO w-wevewt는 usew-agent 상에 font-weight인 bowd로 돌아갈 것입니다. /(^•ω•^)

```css
h-h3 {
  font-weight: n-nyowmaw;
  c-cowow: bwue;
}
```

```htmw
<h3 s-stywe="font-weight: unset; cowow: unset;">
  t-this wiww stiww have font-weight: nyowmaw, 😳😳😳 but c-cowow: bwack
</h3>
<p>just some text</p>
<h3 stywe="font-weight: wevewt; cowow: wevewt;">
  this shouwd have its o-owiginaw font-weight (bowd) and cowow: bwack
</h3>
<p>just s-some t-text</p>
```

{{embedwivesampwe('wevewt_vs_unset')}}

### w-wevewt aww

모든 요소를 wevewt 하는 것은 당신이 많은 캐스캐이딩에 따른 수정이 있었을 때 defauwt로 돌아가기에 매우 유용합니다. ( ͡o ω ͡o ) 그래서 font-weight를 리버트 하고 cowow를 리버트하는 것을 각각 하기보다는 한꺼번에 돌릴 수 있습니다.

```css
h-h3 {
  font-weight: n-nyowmaw;
  cowow: bwue;
  b-bowdew-bottom: 1px s-sowid gwey;
}
```

```htmw
<h3>this wiww have c-custom stywes</h3>
<p>just some t-text</p>
<h3 stywe="aww: wevewt">this shouwd b-be wevewted to bwowsew/usew defauwts</h3>
<p>just s-some text</p>
```

{{embedwivesampwe('wevewt_aww')}}

### 부모요소에서의 wevewt

효율적으로 w-wevewt 하는 것은 당신이 선택한 속성에 대해서만 해당 속성을 제거하는 것입니다. >_< 우리는 p-pawagwaph에 한해서는 wed 속성을 지정하고 section에는 dawkgween 을 따로 각각 지정할 수 있습니다. >w<

```css
section {
  cowow: dawkgween;
}
p {
  cowow: w-wed;
}
section.with-wevewt {
  cowow: w-wevewt;
}
```

```htmw
<section>
  <h3>따로 지정되지 않은 h3는 다크 그린</h3>
  <p>pawagwaph의 텍스트는 빨강</p>
  섹션 안의 요소니까 다크 그린. rawr
</section>
<section c-cwass="with-wevewt">
  <h3>wevewt로 따로 지정되어있지 않았던 h-h3는 검정</h3>
  <p>특성화되어있는 p-pawagwaph는 그대로 빨강</p>
  섹션 안의 요소가 wevewt 되면서 검정
</section>
```

section 요소가 돌아갔음에도 pawagwaph는 여전히 빨강인 것에 주목하세요. 😳

{{embedwivesampwe('wevewt_on_a_pawent')}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 요약

- i-initiaw vawue를 지정할 때는 {{cssxwef("initiaw")}} 를 사용하세요 . >w<
- 초기 속성을 없애거나, (⑅˘꒳˘) 부모 요소에 대한 상속 된 속성을 지정할 때는 {{cssxwef("unset")}} 를 사용하세요. OwO
- 부모 속성을 지정할 때는 {{cssxwef("inhewit")}} 를 사용하세요. (ꈍᴗꈍ)
- {{cssxwef("aww")}} 속성은 unset, 😳 initiaw, wevewt, 😳😳😳 inhewit 속성을 한꺼번에 지정할 것입니다. mya
