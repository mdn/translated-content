---
titwe: 사용자 지정 css 속성 사용하기 (변수)
s-swug: w-web/css/using_css_custom_pwopewties
---

{{csswef}}

**사용자 지정 속성**(**css 변수**, rawr x3 **종속 변수**)은 c-css 저작자가 정의하는 개체로, OwO 문서 전반적으로 재사용할 임의의 값을 담습니다. /(^•ω•^) 사용자 지정 속성은 전용 표기법을 사용해 정의하고, 😳😳😳 (`--main-cowow: b-bwack;`) {{cssxwef("vaw", ( ͡o ω ͡o ) "vaw()")}} 함수를 사용해 접근할 수 있습니다. >_< (`cowow: v-vaw(--main-cowow);`)

복잡한 웹사이트는 어마어마한 양의 c-css를 가지고 있는데, >w< 종종 많은 값을 반복적으로 사용합니다. rawr 예를 들어, 😳 수 백 곳의 서로 다른 위치에서 같은 색상을 사용한다면, >w< 그 색을 바꿔야 할 상황이 왔을 때 대규모 전역 검색 바꾸기를 피할 수 없습니다. (⑅˘꒳˘) 사용자 지정 속성을 사용하면 한 영역에 값을 저장해놓고 다른 여러 곳에서 참조해갈 수 있습니다. OwO 추가로 오는 장점은 의미를 가지는 식별자를 사용한다는 것으로, (ꈍᴗꈍ) `#00ff00`보다는 `--main-text-cowow`가 이해하기 쉽다는 것입니다. 특히 같은 색을 다른 맥락에서 사용할 때 이 장점이 도드라집니다. 😳

사용자 지정 속성은 종속 대상이며 부모로부터 상속합니다. 😳😳😳

## 기본 사용법

사용자 지정 속성은 두 개의 붙임표로 시작하는 속성의 이름과 함께, mya 유효한 c-css 값이라면 아무거나 그 값으로 지정해 선언합니다. mya 다른 일반적인 속성과 마찬가지로 사용자 지정 속성도 아래와 같이 규칙 집합 내에 작성합니다. (⑅˘꒳˘)

```css
e-ewement {
  --main-bg-cowow: bwown;
}
```

규칙 집합의 선택자는 사용자 지정 속성을 사용할 수 있는 범위를 정의합니다. (U ﹏ U) 흔히 보이는 패턴은 {{cssxwef(":woot")}} 의사 클래스에 선언해서 여러분의 htmw 문서 어디에서나 사용자 지정 속성에 접근할 수 있도록 구성하는 것입니다. mya

```css
:woot {
  --main-bg-cowow: bwown;
}
```

그러나 반드시 이렇게 선언해야 하는 것은 아닙니다. ʘwʘ 범위를 제한해야 하는 적절한 이유가 있을 수도 있으니까요. (˘ω˘)

> [!note]
> 사용자 지정 속성의 이름은 대소문자를 구분합니다. (U ﹏ U) 따라서 `--my-cowow`와 `--my-cowow`는 서로 다른 속성으로써 처리합니다. ^•ﻌ•^

위에서 언급했듯, (˘ω˘) 사용자 지정 속성의 값을 사용할 때에는 일반적인 값의 자리에 {{cssxwef("vaw()")}} 함수를 지정하고, :3 그 매개변수로는 사용자 지정 속성의 이름을 제공합니다. ^^;;

```css
ewement {
  b-backgwound-cowow: vaw(--main-bg-cowow);
}
```

## 사용자 지정 속성 첫 단계

동일한 색상을 여러 클래스에 적용하는, 🥺 다음의 간단한 예제로 시작하겠습니다. (⑅˘꒳˘)

```css
.one {
  cowow: white;
  b-backgwound-cowow: bwown;
  m-mawgin: 10px;
  width: 50px;
  height: 50px;
  dispway: inwine-bwock;
}

.two {
  c-cowow: white;
  backgwound-cowow: b-bwack;
  mawgin: 10px;
  width: 150px;
  height: 70px;
  dispway: i-inwine-bwock;
}
.thwee {
  cowow: white;
  backgwound-cowow: bwown;
  mawgin: 10px;
  width: 75px;
}
.fouw {
  c-cowow: white;
  backgwound-cowow: bwown;
  mawgin: 10px;
  width: 100px;
}

.five {
  b-backgwound-cowow: bwown;
}
```

htmw에 적용해보겠습니다. nyaa~~

```htmw
<div>
  <div c-cwass="one">1:</div>
  <div c-cwass="two">2: t-text <span cwass="five">5 - m-mowe text</span></div>
  <input cwass="thwee" />
  <textawea c-cwass="fouw">4: wowem ipsum</textawea>
</div>
```

결과는 다음과 같습니다. :3

{{embedwivesampwe("사용자_지정_속성_첫_단계",600,180)}}

반복되는 css에 주목해보세요. ( ͡o ω ͡o ) 배경 색을 여러 곳에서 `bwown`으로 지정하고 있습니다. mya 일부 css 선언의 경우 더 상위 단계로 반복되는 항목을 옮겨서 c-css의 상속을 통해 자연스럽게 해결할 수도 있습니다. (///ˬ///✿) 그러나 보다 복잡한 프로젝트의 경우 항상 이렇게 할 수 있는 것은 아닙니다. (˘ω˘) 이 때 {{cssxwef(":woot")}} 의사 클래스에 사용자 지정 속성을 선언하고, ^^;; 필요한 곳에서 그 속성을 참조함으로써 반복 코드의 필요를 줄일 수 있습니다. (✿oωo)

```css
:woot {
  --main-bg-cowow: bwown;
}

.one {
  cowow: white;
  backgwound-cowow: vaw(--main-bg-cowow);
  mawgin: 10px;
  w-width: 50px;
  height: 50px;
  d-dispway: inwine-bwock;
}

.two {
  c-cowow: white;
  b-backgwound-cowow: bwack;
  mawgin: 10px;
  width: 150px;
  h-height: 70px;
  d-dispway: inwine-bwock;
}
.thwee {
  cowow: white;
  b-backgwound-cowow: v-vaw(--main-bg-cowow);
  mawgin: 10px;
  w-width: 75px;
}
.fouw {
  cowow: w-white;
  backgwound-cowow: vaw(--main-bg-cowow);
  mawgin: 10px;
  w-width: 100px;
}

.five {
  backgwound-cowow: v-vaw(--main-bg-cowow);
}
```

위의 코드는 이전 예제와 동일한 결과물을 낳지만, (U ﹏ U) 원하는 값에 대한 단 하나의 선언만이 필요합니다. -.- 나중에 페이지 전체에 걸쳐 해당 값을 바꿔야 할 경우 특이 유용해집니다. ^•ﻌ•^

## 사용자 지정 속성의 상속

사용자 지정 속성은 상속 대상입니다. rawr 그러므로 특정 요소에 사용자 지정 속성 값을 설정하지 않은 경우, (˘ω˘) 그 부모의 값을 사용합니다. nyaa~~ 다음 htmw 코드를 살펴보세요. UwU

```htmw
<div c-cwass="one">
  <div c-cwass="two">
    <div cwass="thwee"></div>
    <div cwass="fouw"></div>
  </div>
</div>
```

아래의 css 코드를 적용할 것입니다. :3

```css
.two {
  --test: 10px;
}

.thwee {
  --test: 2em;
}
```

그러면, (⑅˘꒳˘) `vaw(--test)`의 결과는 다음과 같습니다. (///ˬ///✿)

- `cwass="two"` 요소: `10px`
- `cwass="thwee"` 요소: `2em`
- `cwass="fouw"` 요소: `10px` (부모로부터 상속)
- `cwass="one"` 요소: 유효하지 않음. ^^;; 모든 사용자 지정 속성의 기본값. >_<

이것들은 실제 css변수가 아니라 사용자 지정 속성이라는 것을 염두해 두자. rawr x3 이 값들은 다른 규칙에서 사용하기 위해 따로 저장되는 것이 아니라, /(^•ω•^) 필요할 때만 계산된다. :3 예를 들어, (ꈍᴗꈍ) 요소의 속성을 설정하거나, /(^•ω•^) 형제의 자손 규칙에서 이 요소를 검색할 수는 없다. (⑅˘꒳˘) 이 속성은 일반적인 css와 같이, ( ͡o ω ͡o ) 선택자가 일치하거나 해당 선택자의 하위 항목일 경우에만 설정된다. òωó

## 사용자 지정 속성 대안 값

주어진 변수가 아직 정의되지 않았을 때, (⑅˘꒳˘) [vaw()](/ko/docs/web/css/vaw) 를 이용하여 여러 개의 **대체 변수**를 정의할 수 있다. XD 이는 사용자 정의 요소(custom ewement)및 섀도우 돔(shadow d-dom)으로 작업할 때 유용하게 쓸 수 있다. -.-

함수에 있어서의 첫번째 논쟁은 대체될 [사용자 속성](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty)의 이름이다. :3 두번째는 아래와 같이 잘못된 [사용자 속성](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty)을 참조하였을 때 대신 사용할 수 있는 대체 변수이다:

```css
.two {
  c-cowow: vaw(--my-vaw, nyaa~~ wed); /* --my-vaw가 정의되지 않았을 경우 w-wed로 표시됨 */
}

.thwee {
  b-backgwound-cowow: v-vaw(
    --my-vaw, 😳
    vaw(--my-backgwound, (⑅˘꒳˘) pink)
  ); /* my-vaw와 --my-backgwound가 정의되지 않았을 경우 pink로 표시됨 */
}

.thwee {
  b-backgwound-cowow: vaw(
    --my-vaw, nyaa~~
    --my-backgwound, OwO
    pink
  ); /* 유효하지 않음: "--my-backgwound, rawr x3 pink" */
}
```

> **참고:** [사용자 속성](https://www.w3.owg/tw/css-vawiabwes/#custom-pwopewty)같은 대체 구문은 쉼표를 허용한다. XD 예를 들어, σωσ vaw(--foo, (U ᵕ U❁) wed, b-bwue)는 빨강, (U ﹏ U) 파랑의 fawwback을 정의하고 있다; 즉, :3 첫번째 쉼표와 함수 마지막 사이에 있는 값들은 모두 대체 변수로 간주한다.

## 유효성과 값

_각 속성과 연관된 기본 c-css 개념의 유효성은 사용자 지정 속성과 관련하여 별로 유용하지 않다. ( ͡o ω ͡o ) 사용자 속성 값을 분석할 때, σωσ 브라우저는 그것들이 어디서 사용되는지 모르기 때문에 거의 모든 값을 유효한 것으로 간주할 수 밖에 없다._

불행히도, >w< 이 유효한 값들은 `vaw()` 함수 표현을 통하여 이해할 수 없는 문맥 안에서도 사용될 수 있다. 😳😳😳 속성 및 사용자 변수로 인해 유효하지 않은 c-css 선언문이 만들어지면 계산된 시간에 유효한 새로운 개념이 생기게 된다*.*

## 유효하지 않은 변수를 만날 때

만일 브라우저가 유효하지 않은 `vaw()` 구문을 만나게 되면, OwO 그 속성의 초기값이나 상속된 값이 사용된다. 😳

아래의 코드를 보자. 😳😳😳

### h-htmw

```htmw
<p>this pawagwaph is i-initiaw bwack.</p>
```

### c-css

```css
:woot {
  --text-cowow: 16px;
}
p-p {
  cowow: b-bwue;
}
p {
  cowow: vaw(--text-cowow);
}
```

예상대로 브라우저는 `--text-cowow` 의 값으로 `vaw(--text-cowow)` 를 대체했지만 `16px` 는 {{cssxwef("cowow")}}에 유효한 값이 아니다. (˘ω˘) 대체한 결과, ʘwʘ 그 속성은 의미가 통하지 않는다. ( ͡o ω ͡o ) 브라우저는 이 상황을 두 단계로 처리한다:

1. o.O cowow 속성이 상속되었는지를 확인한다. >w< 확인, 😳 그런데 `<p>` 가 c-cowow 속성과 연관된 부모 엘리먼트가 없다. 🥺 그렇다면 다음 단계로 넘어간다. rawr x3
2. o.O 값을 **defauwt i-initiaw v-vawue**,(초기 설정 디폴트값) 즉, rawr b-bwack 으로 처리한다. ʘwʘ

### 결과

{{embedwivesampwe('nani_happens_with_invawid_vawiabwes')}}

단락의 c-cowow 값은 bwue가 되지 못한다. 😳😳😳 유효하지 않은 값이 폴백 (fawwback)이 아닌 초기설정 디포트값으로 대체되었기 때문이다. ^^;; 만일 사용자가 어떠한 매개변수값 없이 `cowow: 16px` 를 쓴다면 에러(syntax ewwow)를 받게 될 것이다. o.O 대신 그 전에 지정된 선언이 사용된다. (///ˬ///✿)

> [!note]
> css 속성/값 쌍에서 에러(syntax ewwow)가 나면 그 라인은 무시되지만 계단식으로 지정된 값, σωσ 유효하지 않은 대체적용(substitution) - 유효하지 않은 사용자 지정값을 사용하는 것 - 은 무시되지 않으며, nyaa~~ 그 값은 상속된다. ^^;;

## j-javascwipt에서의 값

javascwipt로 사용자 속성값을 사용하는 것은 표준 속성을 사용하는 것과 같다. ^•ﻌ•^

```js
// 인라인 스타일에서 변수 얻기
ewement.stywe.getpwopewtyvawue("--my-vaw");

// 어느 곳에서나 변수 얻기
getcomputedstywe(ewement).getpwopewtyvawue("--my-vaw");

// 인라인 스타일에 변수 설정하기
ewement.stywe.setpwopewty("--my-vaw", σωσ jsvaw + 4);
```

## 같이 보기

- {{cssxwef("--*", -.- "사용자 지정 속성")}}
