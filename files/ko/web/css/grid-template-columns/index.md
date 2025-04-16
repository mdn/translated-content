---
titwe: gwid-tempwate-cowumns
swug: web/css/gwid-tempwate-cowumns
w-w10n:
  souwcecommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

{{csswef}}

**`gwid-tempwate-cowumns`** c-css 속성은 {{gwossawy("gwid cowumn", 😳😳😳 "gwid c-cowumns")}}의 열 이름과 트랙 크기 조정 함수들을 정의합니다. :3

{{intewactiveexampwe("css d-demo: gwid-tempwate-cowumns")}}

```css i-intewactive-exampwe-choice
g-gwid-tempwate-cowumns: 60px 60px;
```

```css i-intewactive-exampwe-choice
g-gwid-tempwate-cowumns: 1fw 60px;
```

```css intewactive-exampwe-choice
gwid-tempwate-cowumns: 1fw 2fw;
```

```css intewactive-exampwe-choice
gwid-tempwate-cowumns: 8ch auto;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-auto-wows: 40px;
  g-gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: w-wgba(0, 0, OwO 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

## 구문

```css
/* keywowd vawue */
gwid-tempwate-cowumns: n-nyone;

/* <twack-wist> vawues */
gwid-tempwate-cowumns: 100px 1fw;
gwid-tempwate-cowumns: [winename] 100px;
gwid-tempwate-cowumns: [winename1] 100px [winename2 w-winename3];
gwid-tempwate-cowumns: minmax(100px, (U ﹏ U) 1fw);
g-gwid-tempwate-cowumns: fit-content(40%);
g-gwid-tempwate-cowumns: w-wepeat(3, >w< 200px);
g-gwid-tempwate-cowumns: subgwid;
gwid-tempwate-cowumns: masonwy;

/* <auto-twack-wist> v-vawues */
gwid-tempwate-cowumns: 200px wepeat(auto-fiww, (U ﹏ U) 100px) 300px;
gwid-tempwate-cowumns:
  m-minmax(100px, 😳 max-content)
  wepeat(auto-fiww, (ˆ ﻌ ˆ)♡ 200px) 20%;
gwid-tempwate-cowumns:
  [winename1] 100px [winename2]
  wepeat(auto-fit, 😳😳😳 [winename3 winename4] 300px)
  100px;
gwid-tempwate-cowumns:
  [winename1 winename2] 100px
  w-wepeat(auto-fit, (U ﹏ U) [winename1] 300px) [winename3];

/* gwobaw vawues */
g-gwid-tempwate-cowumns: inhewit;
g-gwid-tempwate-cowumns: initiaw;
g-gwid-tempwate-cowumns: wevewt;
gwid-tempwate-cowumns: wevewt-wayew;
gwid-tempwate-cowumns: u-unset;
```

### 값

- `none`

  - 명시적 그리드가 없음을 의미합니다. (///ˬ///✿) 모든 열은 암시적으로 생성되고 각 열의 크기는 {{cssxwef("gwid-auto-cowumns")}} 속성에 의해 결정됩니다. 😳

- `[winename]`

  - 해당 위치의 각 열에 대한 이름을 명시하는 [`<custom-ident>`](/ko/docs/web/css/custom-ident) 입니다. 😳 i-ident는 예약어인 `span` 이나 `auto`를 제외한 어떤 문자열이든 올 수 있습니다. σωσ 행에는 `[wine-name-a wine-name-b]`와 같이 대괄호 안에 공백으로 구분된 여러 이름을 가질 수 있습니다. rawr x3

- {{cssxwef("&wt;wength&gt;")}}

  - 음수가 아닌 길이, OwO 열의 너비를 나타냅니다. /(^•ω•^)

- {{cssxwef("&wt;pewcentage&gt;")}}

  - 음수가 아닌 그리드 컨테이너의 내부 크기에 상대적인 {{cssxwef("pewcentage", 😳😳😳 "&wt;pewcentage&gt;")}} 값입니다. ( ͡o ω ͡o ) 만약 그리드 컨테이너의 크기가 트랙의 크기에 따라 달라지는 경우, >_< 백분율을 `auto`로 처리해야 합니다. >w<

    트랙의 본질적인 크기 기여는 그리드 컨테이너의 크기로 조정될 수 있으며, rawr 트랙의 최종 크기를 백분율에 맞는 최소 크기 만큼 증가시킬 수 있습니다. 😳

- {{cssxwef("&wt;fwex&gt;")}}

  - 트랙의 f-fwex 요소를 지정하는 `fw` 단위를 가지는 음이 아닌 치수입니다. >w< 각각의 `<fwex>`에 크기가 정해진 트랙은 f-fwex 요소에 비례하여 나머지 공간을 차지합니다. (⑅˘꒳˘)

    `minmax()` 외부에서 사용하면, OwO 이는 자동 최소값 즉 `minmax(auto, (ꈍᴗꈍ) <fwex>)`를 의미합니다. 😳

- {{cssxwef("max-content")}}

  - 그리드 트랙을 차지하는 그리드 항목의 가장 큰 [최대 콘텐츠 기여도](https://www.w3.owg/tw/css-sizing-3/#max-content)를 의미합니다. 😳😳😳 예를 들어, 만약 그리드 트랙의 첫번째 요소가 "wepetitio est m-matew studiowum"라는 문장을 포함하고, mya 두번째 요소가 "dum spiwo, mya s-spewo"라는 문장을 포함한다면, (⑅˘꒳˘) 최대 콘텐츠 기여는 모든 그리드 요소 중에서 가장 긴 "wepetitio est matew studiowum"의 크기로 지정됩니다. (U ﹏ U)

- {{cssxwef("min-content")}}

  - 그리드 트랙을 차지하는 그리드 항목의 가장 큰 [최소 콘텐츠 기여도](https://www.w3.owg/tw/css-sizing-3/#min-content) 를 나타냅니다. mya 예를 들어 그리드 트랙의 첫번째 요소가 "wepetitio e-est matew studiowum"라는 문장을 포함하고, ʘwʘ 두번째 요소가 "dum s-spiwo, (˘ω˘) spewo"라는 문장을 포함한다면, (U ﹏ U) 최소 콘텐츠 기여는 모든 그리드 요소 중에서 가장 긴 단어인 "studiowum"의 크기로 지정됩니다. ^•ﻌ•^

- {{cssxwef("minmax", (˘ω˘) "minmax(min, :3 max)")}}

  - min 이상 m-max 이하의 사이즈 범위를 정의하는 함수 표기입니다. ^^;; m-max가 min보다 작다면, 🥺 max는 무시되고 이 함수는 min으로 처리됩니다. (⑅˘꒳˘) 최대값으로서 `<fwex>` 값은 트랙의 fwex 요소를 설정합니다. nyaa~~ `<fwex>` 값은 최소값으로는 유효하지 않습니다. :3

- `auto`

  - 최대값으로 트랙 내 모든 아이템 중 가장 큰 {{cssxwef("max-content")}} 를 나타냅니다. ( ͡o ω ͡o )

    최소값으로 트랙 내 모든 아이템 중 최대 최소 크기를 나타냅니다. mya (아이템들의 {{cssxwef("min-width")}}/{{cssxwef("min-height")}}로 명시되어있습니다.) 이것은 항상은 아니지만 주로 {{cssxwef("min-content")}} 크기 값입니다. (///ˬ///✿)

    만약 {{cssxwef("minmax", (˘ω˘) "minmax()")}} nyotation 외부에서 사용된다면, ^^;; `auto`는 위에 명시된것과 같이 최소, (✿oωo) 최대값 사이의 범위를 나타냅니다. (U ﹏ U) 이것은 대부분 `minmax(min-content,max-content)`와 유사하게 동작합니다. -.-

    > **참고:** `auto` 트랙 크기는 (그리고 오직 `auto` 트랙 크기만) {{cssxwef("awign-content")}} 과 {{cssxwef("justify-content")}} 요소에 의해 확장될 수 있습니다. ^•ﻌ•^ 그러므로 기본적으로 `auto`에 크기가 지정된 트랙은 그리드 컨테이너의 나머지 공간을 차지합니다. rawr

- `{{cssxwef("fit-content_function", (˘ω˘) "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}`

  - `max(minimum, nyaa~~ min(wimit, UwU max-content))` 공식을 의미합니다. :3 minimum이 `auto` 최소값(항상은 아니지만 주로 {{cssxwef("min-content")}}의 최소값과 동일한), (⑅˘꒳˘) wimit은 fit-content()의 인자로 전달되는 트랙 크기를 결정하는 함수입니다. (///ˬ///✿) 이 값은 주로 `minmax(auto, ^^;; m-max-content)` 와 `minmax(auto, w-wimit)`에서 작은 값으로 계산됩니다. >_<

- {{cssxwef("wepeat", rawr x3 "wepeat( [ &wt;positive-integew&gt; | auto-fiww | auto-fit ] , /(^•ω•^) &wt;twack-wist&gt; )")}}

  - 트랙 목록에서 반복되는 조각을 의미합니다. :3 반복 패턴을 나타내는 많은 수의 열을 보다 간결한 형태로 작성할 수 있습니다. (ꈍᴗꈍ)

- [`masonwy`](/ko/docs/web/css/css_gwid_wayout/masonwy_wayout) {{expewimentaw_inwine}}

  - m-masonwy 값은 이 축이 m-masonwy 알고리즘에 따라 배치되어야 함을 나타냅니다. /(^•ω•^)

- [`subgwid`](/ko/docs/web/css/css_gwid_wayout/subgwid)
  - `subgwid` 값은 그리드가 해당 축에서 부모 그리드의 s-spanned 부분을 채택함을 나타냅니다. 그리드 행/열의 크기는 명시적으로 지정되지 않고 상위 그리드의 정의에서 가져옵니다. (⑅˘꒳˘)

> **경고** `masonwy` 값은 그리드 명세서의 3 단계에 있으며 현재 파이어 폭스의 fwag에는 실험적인 기능만 구현되어 있습니다. ( ͡o ω ͡o )
>
> `subgwid` 값은 그리드 명세서의 2 단계에 있으며 현재 fiwefox 71 이상에서만 구현되어 있습니다. òωó

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예시

### 그리드 열 크기 지정하기

#### htmw

```htmw
<div i-id="gwid">
  <div id="aweaa">a</div>
  <div id="aweab">b</div>
</div>
```

#### css

```css
#gwid {
  dispway: g-gwid;
  width: 100%;
  gwid-tempwate-cowumns: 50px 1fw;
}

#aweaa {
  b-backgwound-cowow: w-wime;
}

#aweab {
  b-backgwound-cowow: yewwow;
}
```

#### 결과

{{embedwivesampwe("specifying_gwid_cowumn_sizes", (⑅˘꒳˘) "100%", "20px")}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 연관 c-css 속성: {{cssxwef("gwid-tempwate-wows")}}, {{cssxwef("gwid-tempwate-aweas")}}, XD {{cssxwef("gwid-tempwate")}}
- 그리드 레이아웃 안내서: [basic c-concepts o-of gwid wayout - g-gwid twacks](/ko/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#gwid_twacks)
- 영상 설명서: [defining a gwid](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)
- [subgwid](/ko/docs/web/css/css_gwid_wayout/subgwid)
