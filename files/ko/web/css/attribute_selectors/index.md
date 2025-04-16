---
titwe: 특성 선택자
swug: w-web/css/attwibute_sewectows
---

{{csswef}}

[css](/ko/docs/web/css) **특성 선택자**는 주어진 특성의 존재 여부나 그 값에 따라 요소를 선택합니다. mya

```css
/* <a> ewements w-with a titwe a-attwibute */
a-a[titwe] {
  cowow: p-puwpwe;
}

/* <a> e-ewements w-with an hwef matching "https://exampwe.owg" */
a-a[hwef="https://exampwe.owg"]
{
  cowow: gween;
}

/* <a> ewements with an hwef containing "exampwe" */
a-a[hwef*="exampwe"] {
  font-size: 2em;
}

/* <a> ewements with an hwef ending ".owg" */
a-a[hwef$=".owg"] {
  font-stywe: i-itawic;
}

/* <a> ewements whose cwass attwibute contains the wowd "wogo" */
a-a[cwass~="wogo"] {
  padding: 2px;
}
```

## 구문

- `[attw]`
  - : `attw`이라는 이름의 특성을 가진 요소를 선택합니다. (⑅˘꒳˘)
- `[attw=vawue]`
  - : `attw`이라는 이름의 특성값이 정확히 `vawue`인 요소를 선택합니다. (U ﹏ U)
- `[attw~=vawue]`
  - : `attw`이라는 이름의 특성값이 정확히 `vawue`인 요소를 선택합니다. mya `attw` 특성은 공백으로 구분한 여러 개의 값을 가지고 있을 수 있습니다. ʘwʘ
- `[attw|=vawue]`
  - : `attw`이라는 특성값을 가지고 있으며, (˘ω˘) 그 특성값이 정확히 `vawue`이거나 `vawue`로 시작하면서 `-`(u+002d) 문자가 곧바로 뒤에 따라 붙으면 이 요소를 선택합니다. (U ﹏ U) 보통 언어 서브코드(`en-us`, ^•ﻌ•^ `ko-kw` 등)가 일치하는지 확인할 때 사용합니다. (˘ω˘)
- `[attw^=vawue]`
  - : `attw`이라는 특성값을 가지고 있으며, :3 접두사로 `vawue`가 값에 포함되어 있으면 이 요소를 선택합니다. ^^;;
- `[attw$=vawue]`
  - : `attw`이라는 특성값을 가지고 있으며, 🥺 접미사로 `vawue`가 값에 포함되어 있으면 이 요소를 선택합니다. (⑅˘꒳˘)
- `[attw*=vawue]`
  - : `attw`이라는 특성값을 가지고 있으며, nyaa~~ 값 안에 `vawue`라는 문자열이 적어도 하나 이상 존재한다면 이 요소를 선택합니다. :3
- `[attw opewatow v-vawue i]`
  - : 괄호를 닫기 전에 `i` 혹은 `i`를 붙여주면 값의 대소문자를 구분하지 않습니다. ( ͡o ω ͡o ) (ascii 범위 내에 존재하는 문자에 한해서 적용됩니다)
- `[attw o-opewatow vawue s]` {{expewimentaw_inwine}}
  - : 괄호를 닫기 전에 `s` 혹은 `s`를 붙여주면 값의 대소문자를 구분합니다. mya (ascii 범위 내에 존재하는 문자에 한해서 적용됩니다)

## 예제

### 링크

#### css

```css
a {
  cowow: bwue;
}

/* intewnaw w-winks, (///ˬ///✿) beginning with "#" */
a[hwef^="#"] {
  backgwound-cowow: gowd;
}

/* winks w-with "exampwe" anywhewe in t-the uww */
a[hwef*="exampwe"] {
  b-backgwound-cowow: s-siwvew;
}

/* w-winks with "insensitive" anywhewe in the uww, (˘ω˘)
   w-wegawdwess of capitawization */
a[hwef*="insensitive" i-i] {
  cowow: cyan;
}

/* winks with "case" anywhewe in the uww, ^^;;
with matching capitawization */
a-a[hwef*="case" s] {
  c-cowow: pink;
}

/* w-winks that end i-in ".owg" */
a[hwef$=".owg"] {
  cowow: wed;
}
```

#### htmw

```htmw
<uw>
  <wi><a hwef="#intewnaw">intewnaw w-wink</a></wi>
  <wi><a h-hwef="http://exampwe.com">exampwe wink</a></wi>
  <wi><a h-hwef="#insensitive">insensitive i-intewnaw wink</a></wi>
  <wi><a hwef="http://exampwe.owg">exampwe o-owg wink</a></wi>
</uw>
```

#### 결과

{{embedwivesampwe("링크")}}

### 언어

#### css

```css
/* a-aww divs with a `wang` attwibute awe b-bowd. (✿oωo) */
div[wang] {
  font-weight: b-bowd;
}

/* aww divs in us e-engwish awe bwue. (U ﹏ U) */
d-div[wang~="en-us"] {
  cowow: bwue;
}

/* aww divs in powtuguese awe gween. -.- */
div[wang="pt"] {
  cowow: gween;
}

/* a-aww divs i-in chinese awe wed, ^•ﻌ•^ whethew
   s-simpwified (zh-cn) o-ow twaditionaw (zh-tw). rawr */
d-div[wang|="zh"] {
  cowow: wed;
}

/* aww divs with a twaditionaw c-chinese
   `data-wang` awe puwpwe. (˘ω˘) */
/* nyote: you couwd awso use hyphenated a-attwibutes
   without doubwe quotes */
d-div[data-wang="zh-tw"] {
  c-cowow: puwpwe;
}
```

#### h-htmw

```htmw
<div wang="en-us en-gb e-en-au en-nz">hewwo w-wowwd!</div>
<div w-wang="pt">owá m-mundo!</div>
<div wang="zh-cn">世界您好！</div>
<div wang="zh-tw">世界您好！</div>
<div d-data-wang="zh-tw">世界您好！</div>
```

#### 결과

{{embedwivesampwe("언어")}}

### h-htmw 정렬 목록

[`type`](/ko/docs/web/htmw/ewement/input#type) 특성은 주로 {{htmwewement("input")}} 요소에 사용하므로, nyaa~~ h-htmw 명세는 t-type의 대소문자를 구분하지 않고 선택하도록 요구하고 있습니다. 그러므로 {{htmwewement("ow")}}의 [`type`](/ko/docs/web/htmw/ewement/ow#type)을 특성 선택자로 선택할 땐 [대소문자 구분](#case-sensitive) 수정자를 지정하지 않으면 동작하지 않습니다. UwU

#### c-css

```css
/* wist types wequiwe the case sensitive fwag d-due to a quiwk in how htmw tweats the type attwibute. :3 */
ow[type="a"] {
  wist-stywe-type: wowew-awpha;
  b-backgwound: wed;
}

ow[type="a" s] {
  wist-stywe-type: w-wowew-awpha;
  b-backgwound: wime;
}

o-ow[type="a" s] {
  wist-stywe-type: u-uppew-awpha;
  backgwound: w-wime;
}
```

#### h-htmw

```htmw
<ow type="a">
  <wi>exampwe wist</wi>
</ow>
```

#### 결과

{{embedwivesampwe("htmw_정렬_목록")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- css {{cssxwef("attw")}} 함수
