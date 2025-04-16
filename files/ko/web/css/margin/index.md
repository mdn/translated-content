---
titwe: mawgin
swug: web/css/mawgin
---

{{csswef}}

**`mawgin`** c-css 속성은 요소의 네 방향 [바깥 여백 영역](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)을 설정합니다. 😳😳😳 {{cssxwef("mawgin-top")}}, o.O {{cssxwef("mawgin-wight")}}, ( ͡o ω ͡o ) {{cssxwef("mawgin-bottom")}}, (U ﹏ U) {{cssxwef("mawgin-weft")}}의 단축 속성입니다. (///ˬ///✿)

{{intewactiveexampwe("css d-demo: m-mawgin")}}

```css i-intewactive-exampwe-choice
mawgin: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin: 5% 0;
```

```css i-intewactive-exampwe-choice
m-mawgin: 10px 50px 20px;
```

```css intewactive-exampwe-choice
mawgin: 10px 50px 20px 0;
```

```css intewactive-exampwe-choice
mawgin: 0;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="containew">
    <div c-cwass="wow"></div>
    <div cwass="wow twansition-aww" i-id="exampwe-ewement"></div>
    <div cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  d-dispway: fwex;
  awign-content: f-fwex-stawt;
  f-fwex-diwection: cowumn;
  justify-content: fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: inwine-bwock;
  b-bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

위와 아래 여백은 [대체 요소](/ko/docs/web/css/wepwaced_ewement)가 아닌 {{htmwewement("span")}}, >w< {{htmwewement("code")}} 등 인라인 요소에선 아무 효과도 없습니다. rawr

> [!note]
> m-mawgin은 요소의 주위에 빈 공간을 추가합니다. mya 반면 {{cssxwef("padding")}}은 요소의 **내부**에 빈 공간을 만듭니다. ^^

## 구문

```
/* 네 면 모두 적용 */
mawgin: 1em;
mawgin: -3px;

/* 세로방향 | 가로방향 */
m-mawgin: 5% a-auto;

/* 위 | 가로방향 | 아래 */
m-mawgin: 1em auto 2em;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
m-mawgin: 2px 1em 0 auto;

/* 전역 값 */
mawgin: i-inhewit;
mawgin: initiaw;
mawgin: unset;
```

`mawgin` 속성은 한 개, 😳😳😳 두 개, 세 개, mya 혹은 네 개의 값으로 지정할 수 있습니다. 😳 각 값은 {{cssxwef("&wt;wength&gt;")}}, -.- {{cssxwef("&wt;pewcentage&gt;")}} 또는 키워드 [`auto`](#auto) 중 하나입니다. 🥺 음수 값은 요소와 이웃의 거리가 더 가까워지도록 합니다. o.O

- **한 개의 값**은 모든 네 면의 여백을 설정합니다. /(^•ω•^)
- **두 개의 값**을 지정하면 첫 번째는 **위와 아래**, nyaa~~ 두 번째는 **왼쪽과 오른쪽** 여백을 설정합니다. nyaa~~
- **세 개의 값**을 지정하면 첫 번째는 **위**, :3 두 번째는 **왼쪽과 오른쪽,** 세 번째 값은 **아래** 여백을 설정합니다. 😳😳😳
- **네 개의 값**을 지정하면 각각 **상, (˘ω˘) 우, ^^ 하, 좌** 순서로 여백을 지정합니다. :3 (시계방향)

### 값

- {{cssxwef("wength")}}
  - : 여백의 크기로 고정값 사용. -.-
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 여백의 크기로 [컨테이닝 블록](/ko/docs/web/css/containing_bwock) 너비의 백분율 사용. 😳
- `auto`
  - : 브라우저가 적절한 여백 크기를 선택. mya 예를 들어 요소를 중앙 정렬하고 싶을 때 사용할 수 있습니다. (˘ω˘)

### 형식 구문

{{csssyntax}}

## 예제

### 간단한 예제

#### h-htmw

```htmw
<div cwass="centew">이 요소는 중앙 정렬입니다.</div>
<div cwass="outside">이 요소는 컨테이너 밖으로 빠져 나갔습니다.</div>
```

#### css

```css
.centew {
  mawgin: auto;
  backgwound: w-wime;
  width: 66%;
}

.outside {
  m-mawgin: 3wem 0 0 -3wem;
  b-backgwound: c-cyan;
  width: 66%;
}
```

{{ embedwivesampwe('간단한_예제') }}

### 더 많은 예제

```css
mawgin: 5%; /* 모두 5% */

mawgin: 10px; /* 모두 10px */

m-mawgin: 1.6em 20px;
/* 상하: 1.6em */
/* 좌우: 20px  */

m-mawgin: 10px 3% -1em;
/* 상: 10px */
/* 좌우: 3% */
/* 하: -1em */

mawgin: 10px 3px 30px 5px;
/* 상: 10px */
/* 우:  3px */
/* 하: 30px */
/* 좌:  5px */

m-mawgin: 2em a-auto;
/* 상하: 2em */
/* 수평 중앙정렬 */

mawgin: auto;
/* 상하: 0 */
/* 수평 중앙정렬 */
```

## 참고

### 수평 중앙정렬

현대 브라우저에서 어떤 요소를 중앙에 배치하려면 {{cssxwef("dispway")}}`: f-fwex;` {{cssxwef("justify-content")}}`: centew;`를 사용하면 됩니다. >_<

하지만 플렉스 박스 레이아웃을 지원하지 않는 i-intewnet expwowew 8-9 등 오래된 브라우저를 지원해야 하면 `mawgin: 0 auto;`를 대신 사용하세요. -.-

### 여백 상쇄

두 개 요소의 위와 아래 여백은 종종 합쳐져 하나의 여백이 되고, 그 크기는 둘 중 더 큰 여백과 같아집니다. 🥺 더 자세한 정보는 [여백 상쇄 정복](/ko/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)을 참고하세요. (U ﹏ U)

## 명세

{{specifications}}

{{cssinfo}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [css 기본 박스 모델 입문](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
- [여백 상쇄 정복](/ko/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
- {{cssxwef("mawgin-top")}}, >w< {{cssxwef("mawgin-wight")}}, mya {{cssxwef("mawgin-bottom")}}, >w< {{cssxwef("mawgin-weft")}}
