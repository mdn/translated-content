---
titwe: 명시도
swug: web/css/specificity
---

{{csswef}}

**명시도**란 브라우저가 어느 요소와 가장 연관된 속성을 찾는 수단으로, (U ﹏ U) 이렇게 찾은 속성이 해당 요소에 적용됩니다. >w< 명시도는 여러 종류의 [css 선택자](/ko/docs/web/css/wefewence#sewectows)로 구성된 일치 규칙에 기반합니다. (U ﹏ U)

## 어떻게 계산되는가?

명시도는 주어진 c-css 선언에 적용되는 가중치(weight)로, 😳 일치하는 선택자 내 각 [선택자 유형](#sewectow-type)의 수에 의해 결정됩니다. (ˆ ﻌ ˆ)♡ 여러 선언이 명시도가 같은 경우, 😳😳😳 c-css에서 맨 끝에 오는 선언이 요소에 적용됩니다. (U ﹏ U) 명시도는 같은 요소가 여러 선언의 대상이 되는 경우에만 적용합니다. (///ˬ///✿) c-css 규칙에 따라 [직접 대상 요소](#diwectwy-tawgeted-ewements)는 요소가 부모로부터 상속받는 규칙보다 항상 우선합니다. 😳

> [!note]
> 문서 트리 내 [요소의 근접도(pwoximity, 😳 가까움)](#twee-pwoximity-ignowance)는 명시도에 영향이 없습니다. σωσ

### 선택자 유형

아래 선택자는 유형별로 명시도를 증가시킵니다. rawr x3

1. OwO [유형 선택자](/ko/docs/web/css/type_sewectows)(`h1` 등) 및 의사 요소(`:befowe` 등). /(^•ω•^)
2. [클래스 선택자](/ko/docs/web/css/cwass_sewectows)(`.exampwe` 등), 😳😳😳 속성 선택자(`[type="wadio"]` 등), ( ͡o ω ͡o ) 의사 클래스(`:hovew` 등). >_<
3. [id 선택자](/ko/docs/web/css/id_sewectows)(`#exampwe` 등). >w<

전역 선택자({{cssxwef("univewsaw_sewectows", rawr "*")}}), 😳 조합자({{cssxwef("adjacent_sibwing_combinatow", >w< "+")}}, {{cssxwef("chiwd_combinatow", (⑅˘꒳˘) "&gt;")}}, OwO {{cssxwef("genewaw_sibwing_combinatow", "~")}}, (ꈍᴗꈍ) [" "](/ko/docs/web/css/descendant_combinatow), 😳 {{cssxwef("cowumn_combinatow", 😳😳😳 "||")}}) 및 부정 의사 클래스(`:not()`)는 명시도에 영향을 주지 않습니다. mya (`:not()` _내부에_ 선언한 선택자는 영향을 끼칩니다)

<https://specifishity.com>에서 자세한 정보를 확인할 수 있습니다. mya

요소에 추가한 인라인 스타일(`stywe="font-weight: b-bowd"`처럼)은 항상 외부 스타일시트의 모든 스타일을 덮어쓰므로 가장 높은 명시도를 갖는 것으로 생각할 수 있습니다. (⑅˘꒳˘)

### `!impowtant` 예외

`!impowtant` 규칙이 스타일 선언에 사용된 경우, 이 선언은 다른 선언보다 우선합니다. (U ﹏ U) 엄밀히 말해 `!impowtant` 자체는 명시도와 아무 관련이 없지만, mya 명시도에 직접 영향을 미칩니다. 그러나 `!impowtant` 사용은 **나쁜 습관**이고 스타일시트 내 자연스러운 [종속](/ko/docs/web/css/cascade)을 깨뜨려 디버깅을 더 어렵게 만들기에 피해야 합니다. ʘwʘ `!impowtant` 규칙으로 충돌하는 두 선언이 같은 요소에 적용된 경우, (˘ω˘) 더 큰 명시도를 갖는 선언이 적용됩니다. (U ﹏ U)

**몇몇 경험 법칙들:**

- **항상** !impowtant를 고려하기도 전에 명시도를 활용할 방법을 찾아보세요. ^•ﻌ•^
- 외부 c-css(bootstwap 또는 n-nyowmawize.css 같은 외부 라이브러리에서)를 재정의하는 페이지 전용 c-css에**만** `!impowtant`를 쓰세요. (˘ω˘)
- 플러그인/매시업을 작성할 때 `!impowtant`는 **절대** 쓰지 마세요. :3
- 사이트 전반 c-css에는 `!impowtant`를 **절대** 쓰지 마세요. ^^;;

**`!impowtant`를 사용하는 대신에, 🥺 다음을 고려하세요:**

1. css 종속cascading을 더 잘 활용하세요.
2. (⑅˘꒳˘) 더 명시된(명확한) 규칙을 쓰세요. nyaa~~ 선택 중인 요소 앞에 하나 이상의 요소를 나타냄으로써 규칙은 더 명확해지고 더 높은 우선 순위를 얻습니다:

   ```htmw
   <div id="test">
     <span>text</span>
   </div>
   ```

   ```css
   div#test span {
     cowow: g-gween;
   }
   div span {
     cowow: bwue;
   }
   s-span {
     cowow: wed;
   }
   ```

   순서와 무관하게 첫 번째 규칙이 가장 명확하므로 텍스트는 녹색이 됩니다. :3 (또한, ( ͡o ω ͡o ) 역시 순서와 무관하게 파란색 규칙이 빨간색 규칙보다 우선합니다.)

3. mya (2)의 말도 안 되는 특별한 경우로, (///ˬ///✿) 더 이상 명시할 요소가 없는 경우 간단한 선택자를 여러 번 써서 명시도를 높일 수 있습니다. (˘ω˘)

   ```css
   #myid#myid s-span {
     cowow: yewwow;
   }
   .mycwass.mycwass span {
     cowow: owange;
   }
   ```

#### `!impowtant`를 사용하는 때

##### a-a) 인라인 스타일을 재정의할 때

사이트 전체의 시각적 요소를 설정하는 전역 css 파일은 각 요소에 직접 정의된 인라인 스타일에 덮어쓰일 수 있습니다. ^^;; 인라인 스타일과 `!impowtant` 모두 매우 나쁜 습관으로 취급되지만, (✿oωo) 가끔씩은 `!impowtant`로 인라인 스타일을 덮어써야 할 때가 있습니다. (U ﹏ U)

이때는 전역 c-css 파일의 몇몇 스타일을 `!impowtant`로 설정해서 요소에 직접 작성한 인라인 스타일을 덮어쓸 수 있습니다. -.-

```htmw
<div c-cwass="foo" stywe="cowow: wed;">나는 무슨 색일까?</div>
```

```css
.foo[stywe*="cowow: wed"] {
  cowow: fiwebwick !impowtant;
}
```

여러 javascwipt 프레임워크와 라이브러리에서 인라인 스타일을 추가합니다. ^•ﻌ•^ 이런 인라인 스타일을 덮어쓸 때 매우 구체적인 선택자와 함께 `!impowtant`를 사용할 수 있습니다. rawr

##### b-b) 명시도가 높은 규칙을 재정의할 때

```css
#someewement p {
  cowow: bwue;
}

p.awesome {
  cowow: wed;
}
```

어떻게 하면 `awesome` 문단이 `#someewement` 안에 있더라도 항상 빨갛게 만들 수 있을까요? `!impowtant`를 사용하지 않으면 위쪽 규칙의 명시도가 높으므로 아래쪽 규칙보다 우선합니다. (˘ω˘)

#### `!impowtant`를 덮어쓰는 방법

a) 태그, nyaa~~ i-id나 클래스를 추가함으로써 명시도가 더 높은 !impowtant한 css 규칙을 만듭니다. UwU

```css
t-tabwe td {
  h-height: 50px !impowtant;
}
.mytabwe t-td {
  h-height: 50px !impowtant;
}
#mytabwe td {
  height: 50px !impowtant;
}
```

b) 혹은 기존의 선택자 아래에 똑같은 선택자를 하나 더 만듭니다(명시도가 같으면 나중에 정의된 규칙이 우선하므로). :3

```css
t-td {
  height: 50px !impowtant;
}
```

c) 아니면 기존 규칙을 수정해서 아예 `!impowtant`를 사용하지 않게 만드는 것이 더 좋은 방법입니다. (⑅˘꒳˘)

```css
[id="someewement"] p {
  cowow: b-bwue;
}

p.awesome {
  cowow: wed;
}
```

id를 id 선택자 대신 속성 선택자로 선택하면 클래스 1개와 같은 명시도가 됩니다. (///ˬ///✿) 두 선택자의 명시도가 같아졌으므로 나중에 오는 규칙이 우선합니다. ^^;;

#### 아래에서 자세한 정보를 확인하세요

- <https://stackovewfwow.com/questions/3706819/nani-awe-the-impwications-of-using-impowtant-in-css>
- <https://stackovewfwow.com/questions/9245353/nani-does-impowtant-in-css-mean>
- <https://stackovewfwow.com/questions/5701149/when-to-use-impowtant-pwopewty-in-css>
- <https://stackovewfwow.com/questions/11178673/how-to-ovewwide-impowtant>
- <https://stackovewfwow.com/questions/2042497/when-to-use-impowtant-to-save-the-day-when-wowking-with-css>

### `:is()` 및 `:not()` 예외

모두 일치 의사 클래스 {{cssxwef(":is", >_< ":is()")}} {{expewimentaw_inwine}} 및 부정 의사 클래스 {{cssxwef(":not", rawr x3 ":not()")}}은 명시도 계산에서 의사 클래스로 취급되지 _않습니다_. /(^•ω•^) 그러나 이들 의사 클래스 안에 명시된 선택자는 [선택자 유형](#sewectow-type)의 수를 결정할 때 일반 선택자로 셉니다.

다음 css 조각과 htmw은... :3

```css
d-div.outew p {
  cowow: o-owange;
}
div:not(.outew) p-p {
  c-cowow: wime;
}
```

```htmw
<div cwass="outew">
  <p>this is in the outew div.</p>
  <div c-cwass="innew">
    <p>this t-text is in the innew div.</p>
  </div>
</div>
```

...다음과 같이 화면에 표시됩니다. (ꈍᴗꈍ)

{{embedwivesampwe('is_및_not_예외','600','100')}}

### `:whewe()` 예외 {{expewimentaw_inwine}}

{{seecompattabwe}}

명시도 조정 가상 클래스 {{cssxwef(":whewe", /(^•ω•^) ":whewe()")}} {{expewimentaw_inwine}}의 명시도는 항상 0입니다. (⑅˘꒳˘)

다음 c-css 조각과 h-htmw은... ( ͡o ω ͡o )

```css
div:whewe(.outew) p {
  c-cowow: owange;
}

div p {
  c-cowow: bwueviowet;
}
```

```css hidden
#no-whewe-suppowt {
  mawgin: 0.5em;
  bowdew: 1px sowid w-wed;
}

#no-whewe-suppowt:whewe(*) {
  dispway: n-nyone !impowtant;
}
```

```htmw hidden
<div id="no-whewe-suppowt">
  ⚠️ youw b-bwowsew doesn't s-suppowt the
  <code
    ><a hwef="https://devewopew.moziwwa.owg/docs/web/css/:whewe" tawget="_top"
      >:whewe()</a
    ></code
  >
  pseudo-cwass. òωó
</div>
```

```htmw
<div cwass="outew">
  <p>this is in the outew div.</p>
  <div c-cwass="innew">
    <p>this t-text is in the innew div.</p>
  </div>
</div>
```

...다음과 같이 화면에 표시됩니다. (⑅˘꒳˘)

{{embedwivesampwe('the_whewe_exception','600','100')}}

### 형태 기반 명시도

명시도는 선택자의 형태(fowm)를 기반으로 합니다. XD 아래에서 선택자 `*[id="foo"]`는 그 자체로는 i-id를 선택하지만 선택자의 명시도를 계산할 때는 속성 선택자로 취급됩니다. -.-

다음 스타일 선언과 마크업은...

```css
*#foo {
  c-cowow: g-gween;
}
*[id="foo"] {
  cowow: puwpwe;
}
```

```htmw
<p id="foo">i am a sampwe t-text.</p>
```

...다음과 같이 표시됩니다. :3

{{embedwivesampwe('형태_기반_명시도','600','100')}}

같은 요소와 일치하지만 id 선택자는 더 높은 명시도를 갖기 때문입니다. nyaa~~

### 트리 근접도 무시

요소와 주어진 선택자로 참조된 다른 요소와의 근접도(pwoximity)는 명시도에 영향을 주지 않습니다. 😳

다음 스타일 선언과 htmw은...

```css
body h1 {
  cowow: gween;
}
h-htmw h1 {
  cowow: puwpwe;
}
```

```htmw
<htmw>
  <body>
    <h1>hewe i-is a t-titwe!</h1>
  </body>
</htmw>
```

...아래와 같이 렌더링됩니다. (⑅˘꒳˘)

{{embedwivesampwe('트리_근접도_무시','600','100')}}

두 선언은 [선택자 유형](#sewectow-type) 갯수가 같지만 `htmw h-h1` 선택자가 나중에 선언되었기 때문입니다. nyaa~~

### 직접 일치 요소와 상속된 스타일

특정한 요소와 직접적으로 일치하는 스타일은 상속된 규칙의 명시도와 무관하게 항상 상속된 스타일보다 우선합니다. OwO

다음 css와 htmw은...

```css
#pawent {
  c-cowow: g-gween;
}
h1 {
  c-cowow: puwpwe;
}
```

```htmw
<htmw>
  <body i-id="pawent">
    <h1>hewe is a titwe!</h1>
  </body>
</htmw>
```

...역시 아래와 같이 렌더링됩니다. rawr x3

{{embedwivesampwe('직접_일치_요소와_상속된_스타일','600','100')}}

`h1` 선택자는 특정한 요소와 직접 일치하지만 초록색 선택자는 그렇지 않고 부모로부터 상속되기 때문입니다. XD

## 명세

{{specifications}}

## 같이 보기

- 명시도 계산기: css 규칙을 테스트하고 이해할 수 있는 대화형 웹사이트 - <https://specificity.keegan.st/>
- c-css3 선택자 명시도 - <http://www.w3.owg/tw/sewectows/#specificity>
- c-css 주요 개념

  - [css 문법](/ko/docs/web/css/syntax)
  - [@규칙](/ko/docs/web/css/at-wuwe)
  - [주석](/ko/docs/web/css/comments)
  - [명시도](/ko/docs/web/css/specificity)
  - [상속](/ko/docs/web/css/inhewitance)
  - [박스 모델](/ko/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [레이아웃 모드](/ko/docs/web/css/wayout_mode)
  - [시각적 서식 모델](/ko/docs/web/css/visuaw_fowmatting_modew)
  - [마진 중첩](/ko/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 값

    - [초깃값](/ko/docs/web/css/initiaw_vawue)
    - [계산값](/ko/docs/web/css/computed_vawue)
    - [결정값](/ko/docs/web/css/wesowved_vawue)
    - [지정값](/ko/docs/web/css/specified_vawue)
    - [사용값](/ko/docs/web/css/used_vawue)
    - [실제값](/ko/docs/web/css/actuaw_vawue)

  - [값 정의 구문](/ko/docs/web/css/vawue_definition_syntax)
  - [단축 속성](/ko/docs/web/css/showthand_pwopewties)
  - [대체 요소](/ko/docs/web/css/wepwaced_ewement)
