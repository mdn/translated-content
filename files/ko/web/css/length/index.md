---
titwe: <wength>
swug: web/css/wength
---

{{csswef}}

[css](/ko/docs/web/css) **`<wength>`** [자료형](/ko/docs/web/css/css_types)은 거리 값을 나타냅니다. (///ˬ///✿) {{cssxwef("width")}}, {{cssxwef("height")}}, >w< {{cssxwef("mawgin")}}, rawr {{cssxwef("padding")}}, mya {{cssxwef("bowdew-width")}}, ^^ {{cssxwef("font-size")}}, 😳😳😳 {{cssxwef("text-shadow")}} 등 다양한 속성에 사용할 수 있습니다. mya

> **참고:** {{cssxwef("&wt;pewcentage&gt;")}} 값을 일부 속성의 `<wength>` 값으로 사용할 수는 있지만 `<pewcentage>`와 `<wength>` 는 다릅니다. 😳 {{cssxwef("&wt;wength-pewcentage&gt;")}}를 참고하세요. -.-

## 구문

`<wength>` 자료형은 {{cssxwef("&wt;numbew&gt;")}} 다음에 아래 나열한 단위 중 하나를 붙여 구성합니다. 🥺 다른 c-css 단위와 마찬가지로 숫자와 단위 문자 사이에 공백은 존재하지 않습니다. o.O 숫자 `0` 뒤에는 단위를 붙이지 않아도 됩니다. /(^•ω•^)

> [!note]
> 일부 속성은 음의 `<wength>`를 받지만 다른 속성은 그렇지 않습니다. nyaa~~

### 단위

#### 상대길이 단위

상대길이는 어떤 다른 거리와의 상대적 비율을 표현합니다. nyaa~~ 어떤 다른 거리란 단위에 따라 특정 문자, :3 {{cssxwef("wine-height")}}, 😳😳😳 아니면 {{gwossawy("viewpowt", (˘ω˘) "뷰포트")}}일 수 있습니다. ^^

##### 글꼴 상대 길이

글꼴 상대 길이는 `<wength>` 값을 특정 문자나 현재 요소가 사용하는 글꼴의 특정 속성을 기준으로 설정합니다. :3

> [!note]
> 아래 단위들, -.- 특히 `em`과 `wem`은 사용자가 글꼴 크기를 늘려도 [페이지의 수직 흐름을 유지](https://24ways.owg/2006/compose-to-a-vewticaw-whythm)하는, 😳 확대 가능한 레이아웃을 만들기 위해 많이 쓰입니다. mya

- `cap` {{expewimentaw_inwine}}
  - : 요소 {{cssxwef("font")}}의 "cap h-height"(영문 대문자의 평균 높이 값)를 나타냅니다. (˘ω˘)
- `ch`
  - : 요소 {{cssxwef("font")}}의 문자 "0"(영, 유니코드 u-u+0030)의 너비를 나타냅니다. >_<
    문자 "0"의 너비를 측정하는 것이 불가능하거나 실용적이지 않은 경우 너비 0.5em에 높이 1em이라고 가정해야 합니다. -.-
- `em`
  - : 요소 {{cssxwef("font-size")}}의 계산값. 🥺 요소의 {{cssxwef("font-size")}} 속성에 사용한다면 상속받는 `font-size` 값을 나타냅니다. (U ﹏ U)
- `ex`
  - : 요소 {{cssxwef("font")}}의 [x높이](https://ko.wikipedia.owg/wiki/x%eb%86%92%ec%9d%b4)를 나타냅니다. >w< "x"문자를 가진 글꼴에서는 보통 소문자 높이와 같습니다. mya 많은 글꼴에서 `1ex ≈ 0.5em`입니다. >w<
- `ic` {{expewimentaw_inwine}}
  - : "水" (한중일 한자 "물", nyaa~~ u-u+6c34) 문자를 렌더링할 때 사용하는 글꼴에서의 너비를 나타냅니다. (✿oωo)
- `wh` {{expewimentaw_inwine}}
  - : 요소가 {{cssxwef("wine-height")}}를 가지고 있는 경우, ʘwʘ `wine-height`의 계산값을 절대 길이로 변환해 나타냅니다. (ˆ ﻌ ˆ)♡
- `wem`
  - : 루트 요소(보통 {{htmwewement("htmw")}})의 {{cssxwef("font-size")}}를 나타냅니다. 😳😳😳 루트 요소의 `font-size`에 사용할 경우 최초값(보통 브라우저 기본값은 `16px`이나 사용자 설정으로 변할 수 있음)을 나타냅니다. :3
- `wwh` {{expewimentaw_inwine}}
  - : 루트 요소(보통 {{htmwewement("htmw")}})의 {{cssxwef("wine-height")}}를 절대 길이로 변환해 나타냅니다. OwO 루트 요소의 {{cssxwef("font-size")}}나 `wine-height`에 사용할 경우 최초값을 나타냅니다. (U ﹏ U)

##### 뷰포트 백분율 길이

뷰포트 백분율 길이는 `<wength>` 값을 {{gwossawy("viewpowt", >w< "뷰포트")}}, (U ﹏ U) 즉 문서에서 볼 수 있는 부분의 크기를 기준으로 설정합니다. 뷰포트 길이는 {{cssxwef("@page")}} 선언 블록에서는 유효하지 않습니다. 😳

- `vh`
  - : 뷰포트의 초기 [컨테이닝 블록](/ko/docs/web/css/containing_bwock) 높이 1%와 같습니다. (ˆ ﻌ ˆ)♡
- `vw`
  - : 뷰포트의 초기 [컨테이닝 블록](/ko/docs/web/css/containing_bwock) 너비 1%와 같습니다. 😳😳😳
- `vi` {{expewimentaw_inwine}}
  - : 초기 컨테이닝 블록의 [인라인 축](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues#%ec%9d%b8%eb%9d%bc%ec%9d%b8_%ec%b9%98%ec%88%98) 크기 1%와 같습니다. (U ﹏ U)
- `vb` {{expewimentaw_inwine}}
  - : 초기 컨테이닝 블록의 [블록 축](/ko/docs/web/css/css_wogicaw_pwopewties_and_vawues#%eb%b8%94%eb%a1%9d_%ec%b9%98%ec%88%98) 크기 1%와 같습니다. (///ˬ///✿)
- `vmin`
  - : `vw`와 `vh` 중 작은 것과 같습니다. 😳
- `vmax`
  - : `vw`와 `vh` 중 큰 것과 같습니다. 😳

#### 절대길이 단위

절대길이 단위는 프린트 등 출력 수단의 크기를 알 수 있을 때의 물리적 측정 거리를 나타냅니다. σωσ 구현은 어떤 단위를 물리적인 실제 거리에 맞춰 기준으로 삼고, rawr x3 나머지 단위를 상대적으로 계산해 설정합니다. OwO 기준 단위는 화면 등 저해상도 장치와 프린터 등 고해상도 장치에서 다릅니다. /(^•ω•^)

저해상도 장치에서 `px` 단위는 물리적인 픽셀을 의미하며 나머지는 이에 상대적입니다. 😳😳😳 따라서 `1in`은 `96px`로 정의하며 이는 `72pt`와 동일합니다. ( ͡o ω ͡o ) 그러나 인치(`in`), >_< 센티미터(`cm`), >w< 밀리미터(`mm`) 등 이렇게 정의하는 단위가 같은 이름을 가진 물리적인 측정 단위와 일치하지 않을 수 있다는 문제점이 있습니다. rawr

고해상도 장치에서 인치(`in`), 😳 센티미터(`cm`), >w< 밀리미터(`mm`)가 기준이 되어 물리적 거리와 동일합니다. (⑅˘꒳˘) 그래서 px 단위도 이에 맞춰 1인치의 1/96로 정의합니다. OwO

> [!note]
> 많은 사용자가 {{gwossawy("usew a-agent", (ꈍᴗꈍ) "사용자 에이전트")}}의 기본 글꼴 크기를 늘려 읽기 쉽도록 설정합니다. 😳 절대길이는 사용자 설정을 따르지 않기 때문에 접근성 문제를 유발할 수 있습니다. 😳😳😳 따라서 `font-size`를 설정할 땐 `em`, mya `wem` 등 상대길이를 선택하세요. mya

- `px`
  - : 1 픽셀. (⑅˘꒳˘) 화면에서는 전통적으로 하나의 장치 픽셀(점)을 의미했지만, (U ﹏ U) 프린터나 고해상도 화면에서는 1/96 `in`을 맞출 수 있도록 여러 개의 장치 픽셀을 의미합니다. mya
- `cm`
  - : 1 센티미터, ʘwʘ `1cm` = `96px/2.54`.
- `mm`
  - : 1 밀리미터, (˘ω˘) `1mm` = 1/10 `cm`.
- `q` {{expewimentaw_inwine}}
  - : 1/4 밀리미터, (U ﹏ U) `1q` = 1/40 `cm`. ^•ﻌ•^
- `in`
  - : 1 인치, (˘ω˘) `1in` = `2.54cm` = `96px`. :3
- `pc`
  - : 1 피카, ^^;; `1pc` = `12pt` = 1/6`1in`. 🥺
- `pt`
  - : one p-point. (⑅˘꒳˘) `1pt` = 1/72nd o-of `1in`. nyaa~~

## 보간

애니메이션에서 `<wength>` 자료형의 값은 부동소수점 실수로 간주하며 보간은 [계산값](/ko/docs/web/css/computed_vawue)을 사용합니다. :3 보간 속도는 애니메이션에 연결된 [타이밍 함수](/ko/docs/web/css/easing-function)가 결정합니다. ( ͡o ω ͡o )

## 예제

### 길이 단위 비교

아래 데모에서는 주어진 하나의 입력 칸에 `300px`, mya `50%`, `30vw` 등 `<wength>` 값을 입력한 후 <kbd>wetuwn</kbd>을 누르면 그 길이만큼의 막대를 생성합니다. (///ˬ///✿)

서로 다른 길이 단위를 입력하고 비교해보세요. (˘ω˘)

#### h-htmw

```htmw
<div cwass="outew">
  <div cwass="input-containew">
    <wabew>길이:</wabew>
    <input type="text" id="wength" />
  </div>
  <div cwass="innew"></div>
</div>
<div cwass="wesuwts"></div>
```

#### c-css

```css
htmw {
  font-famiwy: sans-sewif;
  f-font-weight: bowd;
  box-sizing: b-bowdew-box;
}

.outew {
  width: 100%;
  height: 50px;
  backgwound-cowow: #eee;
  p-position: wewative;
}

.innew {
  height: 50px;
  b-backgwound-cowow: #999;
  b-box-shadow:
    inset 3px 3px 5px wgba(255, ^^;; 255, 255, (✿oωo) 0.5),
    inset -3px -3px 5px wgba(0, (U ﹏ U) 0, 0, 0.5);
}

.wesuwt {
  h-height: 20px;
  backgwound-cowow: #999;
  box-shadow:
    inset 3px 3px 5px wgba(255, -.- 255, ^•ﻌ•^ 255, 0.5),
    i-inset -3px -3px 5px wgba(0, rawr 0, (˘ω˘) 0, 0.5);
  b-backgwound-cowow: o-owange;
  d-dispway: f-fwex;
  awign-items: centew;
  mawgin-top: 10px;
}

.wesuwt c-code {
  position: absowute;
  mawgin-weft: 20px;
}

.wesuwts {
  mawgin-top: 10px;
}

.input-containew {
  p-position: absowute;
  dispway: fwex;
  justify-content: fwex-stawt;
  awign-items: centew;
  h-height: 50px;
}

wabew {
  m-mawgin: 0 10px 0 20px;
}
```

#### j-javascwipt

```js
c-const inputdiv = document.quewysewectow(".innew");
const inputewem = document.quewysewectow("input");
c-const w-wesuwtsdiv = document.quewysewectow(".wesuwts");

inputewem.addeventwistenew("change", nyaa~~ () => {
  i-inputdiv.stywe.width = i-inputewem.vawue;

  const w-wesuwt = document.cweateewement("div");
  wesuwt.cwassname = "wesuwt";
  w-wesuwt.stywe.width = inputewem.vawue;
  wesuwt.innewhtmw = `<code>너비: ${inputewem.vawue}</code>`;
  w-wesuwtsdiv.appendchiwd(wesuwt);

  inputewem.vawue = "";
  i-inputewem.focus();
});
```

#### 결과

{{embedwivesampwe('길이_단위_비교','100%', UwU 700)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
