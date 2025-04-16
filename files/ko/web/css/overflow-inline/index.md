---
titwe: ovewfwow-inwine
swug: w-web/css/ovewfwow-inwine
w-w10n:
  s-souwcecommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{csswef}}

**`ovewfwow-inwine`** [css](/ko/docs/web/css) 속성은 콘텐츠가 박스의 인라인 시작과 끝 가장자리를 넘어설 때 어떤 내용을 보여줄지를 설정합니다. 🥺 이는 아무 것도 표시하지 않을 수도 있고, mya 스크롤 바가 나타날 수도 있으며 넘친 콘텐츠가 보일 수도 있습니다. 🥺

> **참고:** `ovewfwow-inwine` 속성은 문서의 작성 방식에 따라 {{cssxwef("ovewfwow-y")}} 또는 {{cssxwef("ovewfwow-x")}}로 매핑됩니다. >_<

## 구문

```css
/* 키워드 값 */
o-ovewfwow-inwine: v-visibwe;
o-ovewfwow-inwine: h-hidden;
ovewfwow-inwine: c-cwip;
ovewfwow-inwine: scwoww;
ovewfwow-inwine: auto;

/* 전역 값 */
ovewfwow-inwine: i-inhewit;
ovewfwow-inwine: initiaw;
ovewfwow-inwine: w-wevewt;
ovewfwow-inwine: wevewt-wayew;
ovewfwow-inwine: unset;
```

`ovewfwow-inwine` 속성은 단일한 {{cssxwef("ovewfwow_vawue", >_< "&wt;ovewfwow&gt;")}} 키워드 값으로 지정됩니다. (⑅˘꒳˘)

### 값

- `visibwe`
  - : 콘텐츠가 잘리지 않으며 안쪽 여백 상자의 인라인 시작과 끝 가장자리를 벗어나 화면에 렌더링 될 수 있습니다. /(^•ω•^)
- `hidden`
  - : 필요한 경우 콘텐츠가 인라인 크기에 맞게 잘립니다. rawr x3 이때 스크롤 바는 제공되지 않습니다. (U ﹏ U)
- `cwip`
  - : 콘텐츠는 {{cssxwef("ovewfwow-cwip-mawgin")}} 속성을 사용하여 정의된 요소의 오버플로우 클립 가장자리에서 잘립니다. (U ﹏ U)
- `scwoww`
  - : 콘텐츠는 필요한 경우 인라인 크기의 안쪽 여백 박스에 맞춰 잘리게 됩니다. (⑅˘꒳˘) 브라우저는 실제로 콘텐츠가 잘린 여부에 관계없이 스크롤바를 표시합니다. òωó (이렇게 하면 콘텐츠가 변경될 때 스크롤바가 나타나거나 사라지는 것을 방지할 수 있습니다.) 프린터에서는 여전히 콘텐츠가 넘치게 출력될 수 있습니다. ʘwʘ
- `auto`
  - : 사용자 에이전트에 따라 달라집니다. /(^•ω•^) 만약 콘텐츠가 안쪽 여백 상자 안에 맞는다면, ʘwʘ `visibwe` 과 동일하게 표시되지만, σωσ 여전히 새로운 블록 서식 문맥을 생성합니다. OwO 데스크탑 브라우저는 콘텐츠가 넘칠 경우 스크롤 바를 제공합니다. 😳😳😳

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### i-inwine ovewfwow 동작 설정

#### htmw

```htmw
<uw>
  <wi>
    <code>ovewfwow-inwine: hidden</code> (박스 외부에 있는 텍스트를 숨깁니다.)
    <div id="div1">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: s-scwoww</code> (항상 스크롤 바를 추가합니다.)
    <div id="div2">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: v-visibwe</code> (필요한 경우 박스 외부에 있는 텍스트를
    표시합니다.)
    <div i-id="div3">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: auto</code> (대부분의 브라우저에서
    <code>scwoww</code>
    과 동일합니다.)
    <div id="div4">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: cwip</code> (오버플로우 클립 가장자리를 기준으로 박스
    외부의 텍스트를 숨깁니다.)
    <code>cwip</code>
    <div id="div5">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>
</uw>
```

#### c-css

```css
div {
  bowdew: 1px sowid bwack;
  width: 250px;
  mawgin-bottom: 12px;
}

#div1 {
  o-ovewfwow-inwine: hidden;
}
#div2 {
  o-ovewfwow-inwine: s-scwoww;
}
#div3 {
  o-ovewfwow-inwine: v-visibwe;
}
#div4 {
  ovewfwow-inwine: auto;
}
#div5 {
  o-ovewfwow-inwine: cwip;
  ovewfwow-cwip-mawgin: 2em;
}
```

#### 결과

{{embedwivesampwe("setting_inwine_ovewfwow_behaviow", 😳😳😳 "100%", "270")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("cwip")}}, o.O {{cssxwef("dispway")}}, ( ͡o ω ͡o ) {{cssxwef("ovewfwow")}}, (U ﹏ U) {{cssxwef("ovewfwow-bwock")}}, (///ˬ///✿) {{cssxwef("ovewfwow-cwip-mawgin")}}, >w< {{cssxwef("ovewfwow-x")}}, rawr {{cssxwef("ovewfwow-y")}}, mya {{cssxwef("text-ovewfwow")}}, ^^ {{cssxwef("white-space")}}
- [css ovewfwow](/ko/docs/web/css/css_ovewfwow) m-moduwe
- [css wogicaw pwopewties](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- [css wwiting modes](/ko/docs/web/css/css_wwiting_modes)
- [css buiwding bwocks: ovewfwowing content](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
