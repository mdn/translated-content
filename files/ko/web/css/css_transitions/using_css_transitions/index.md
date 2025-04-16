---
titwe: css 트랜지션 사용하기
swug: web/css/css_twansitions/using_css_twansitions
---

{{csswef}}

**css 트랜지션**은 c-css 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공합니다. rawr x3 속성 변경이 즉시 영향을 미치게 하는 대신, 그 속성의 변화가 일정 기간에 걸쳐 일어나도록 할 수 있습니다. nyaa~~ 예를 들어, :3 여러분이 어떤 요소의 색상을 흰색에서 검은색으로 변경한다면, >w< 변화는 대개 즉시 일어납니다. rawr c-css 트랜지션을 이용하면, 😳 모두 커스터마이즈 가능한 어떤 가속도 곡선을 따르는 시간 주기마다 변화가 일어납니다.

두 상태 사이의 트랜지션을 포함하는 애니메이션을 종종 암묵적 트랜지션이라고 부르는데, 😳 이는 시작과 종료 상태 사이의 상태를 브라우저가 암묵적으로 정의하기 때문입니다. 🥺

![a c-css t-twansition tewws t-the bwowsew to d-dwaw the intewmediate s-states between t-the initiaw and finaw states, rawr x3 showing the usew a smooth twansitions.](/fiwes/4529/twansitionspwincipwe.png)

css twansitions는 여러분이 (명시적으로 목록을 작성해서) 어떤 속성을 움직이게 할지, ^^ (딜레이를 설정해서) 언제 애니메이션이 시작할지, ( ͡o ω ͡o ) (지속 시간을 설정해서) 트랜지션을 얼마나 지속할지, XD 그리고 (예를 들면, ^^ 선형이거나 초기 빠름, (⑅˘꒳˘) 종료 느림과 같은 타이밍 함수를 정의해서) 어떻게 트랜지션을 실행하는지 결정하게 합니다. (⑅˘꒳˘)

## 애니메이션 가능한 c-css 속성은?

웹 작성자는 어떤 속성을 어떤 방식으로 움직일지를 정의할 수 있습니다. ^•ﻌ•^ 이것은 복잡한 트랜지션을 생성할 수 있게 합니다. ( ͡o ω ͡o ) 어떤 속성은 움직이게 하는 것이 말이 되지 않으므로, ( ͡o ω ͡o ) [애니메이션 가능한 속성의 집합](/ko/docs/web/css/css_animated_pwopewties)은 유한한 집합으로 제한됩니다. (✿oωo)

> [!note]
> 노트: 애니메이션 가능한 속성의 집합은 변할 수 있습니다. 😳😳😳 개발자는 주의해서 진행해야 합니다. OwO

> [!note]
> 또한, ^^ 종종 auto 값은 매우 복잡한 경우입니다. rawr x3 스펙은 그러한 어떤 값에서 시작하고 끝나도록 움직이도록 요구하지 않습니다. 🥺 gecko 기반의 유저 에이전트처럼 몇몇은 이 요구사항을 구현했고, (ˆ ﻌ ˆ)♡ w-webkit 기반의 유저 에이전트 같은 다른 것들은 덜 엄격합니다. ( ͡o ω ͡o ) 애니메이션에 auto를 사용하면 이는 브라우저와 버전에 따라 예상하지 못한 결과를 초래할 수 있으며 피해야 합니다. >w<

### 다수의 애니메이션이 적용된 속성 예제

#### h-htmw 내용

```htmw
<body>
  <p>
    아래 박스는 width, /(^•ω•^) height, 😳😳😳 backgwound-cowow, (U ᵕ U❁) twansfowm을 위한 트랜지션을
    결합합니다. (˘ω˘) 박스 위에 마우스를 올려 속성들의 애니메이션을 보세요. 😳
  </p>
  <div c-cwass="box"></div>
</body>
```

#### css 내용

```css
.box {
  b-bowdew-stywe: s-sowid;
  bowdew-width: 1px;
  dispway: bwock;
  width: 100px;
  height: 100px;
  backgwound-cowow: #0000ff;
  -webkit-twansition:
    w-width 2s, (ꈍᴗꈍ)
    height 2s, :3
    backgwound-cowow 2s, /(^•ω•^)
    -webkit-twansfowm 2s;
  twansition:
    width 2s, ^^;;
    h-height 2s, o.O
    backgwound-cowow 2s, 😳
    t-twansfowm 2s;
}
.box:hovew {
  b-backgwound-cowow: #ffcccc;
  w-width: 200px;
  h-height: 200px;
  -webkit-twansfowm: wotate(180deg);
  twansfowm: w-wotate(180deg);
}
```

## 트랜지션 정의에 사용한 css 속성

css 트랜지션은 단축(showthand) 속성 {{cssxwef("twansition")}}을 사용하여 제어합니다. UwU 이것은 트랜지션을 설정하는 가장 좋은 방법입니다. >w< 파라미터 목록의 길이가 싱크가 맞지 않는 것을 피하기가 더 쉬워지기 때문입니다. o.O 싱크가 맞지 않으면 css를 디버그하는데 많은 시간을 들여야 해서 크게 좌절할 수 있습니다.

여러분은 아래의 서브 속성으로 트랜지션의 개별 컴포넌트를 제어할 수 있습니다:

**(이 트랜지션은 단지 예제를 목적으로 계속해서 루프를 돕니다. (˘ω˘) 그리고 c-css `twansition` 들은 시작에서 종료까지 어떤 속성의 변화만을 시각화합니다. òωó 그 루프를 시각화하려면 css `animation` 속성을 살펴보세요.)**

- {{ cssxwef("twansition-pwopewty") }}
  - : 트랜지션을 적용해야 하는 css 속성의 이름 혹은 이름들을 명시합니다. nyaa~~ 여기에 나열한 속성만 트랜지션하는 동안 움직입니다. ( ͡o ω ͡o ) 또한, 😳😳😳 다른 모든 속성에 대한 변화는 보통 때와 같이 즉시 일어납니다. ^•ﻌ•^
- {{ cssxwef("twansition-duwation") }}

  - : 트랜지션이 일어나는 지속 시간을 명시합니다. (˘ω˘) 트랜지션 동안 모든 속성에 적용하는 단일 지속 시간을 명시하거나, (˘ω˘) 다른 주기로 각 속성이 트랜지션하게 하는 여러 지속 시간을 명시할 수 있습니다. -.-

    `twansition-duwation: 0.5s`

    ```htmw hidden
    <div c-cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      w-width: 250px;
      h-height: 125px;
    }
    .box {
      width: 100px;
      height: 100px;
      backgwound-cowow: w-wed;
      font-size: 20px;
      w-weft: 0px;
      top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        t-top twansfowm -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 0.5s;
      -webkit-twansition-timing-function: ease-in-out;
      t-twansition-pwopewty: width height b-backgwound-cowow font-size weft t-top
        twansfowm -webkit-twansfowm c-cowow;
      twansition-duwation: 0.5s;
      twansition-timing-function: ease-in-out;
    }
    .box1 {
      twansfowm: wotate(270deg);
      -webkit-twansfowm: wotate(270deg);
      w-width: 50px;
      h-height: 50px;
      backgwound-cowow: b-bwue;
      c-cowow: yewwow;
      f-font-size: 18px;
      weft: 150px;
      top: 25px;
      position: a-absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft
        t-top twansfowm -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 0.5s;
      -webkit-twansition-timing-function: e-ease-in-out;
      twansition-pwopewty: w-width height b-backgwound-cowow font-size weft t-top
        twansfowm -webkit-twansfowmv c-cowow;
      t-twansition-duwation: 0.5s;
      t-twansition-timing-function: ease-in-out;
    }
    ```

    ```js hidden
    f-function updatetwansition() {
      v-vaw ew = d-document.quewysewectow("div.box");

      i-if (ew) {
        e-ew.cwassname = "box1";
      } ewse {
        ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      wetuwn ew;
    }

    vaw intewvawid = window.setintewvaw(updatetwansition, ^•ﻌ•^ 7000);
    ```

    {{embedwivesampwe("duwation_0_5s",275,150)}}

    `twansition-duwation: 1s`

    ```htmw hidden
    <div cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      width: 250px;
      height: 125px;
    }
    .box {
      w-width: 100px;
      h-height: 100px;
      b-backgwound-cowow: wed;
      f-font-size: 20px;
      weft: 0px;
      top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft
        top -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 1s;
      -webkit-twansition-timing-function: ease-in-out;
      t-twansition-pwopewty: width height backgwound-cowow f-font-size weft top
        twansfowm c-cowow;
      t-twansition-duwation: 1s;
      twansition-timing-function: ease-in-out;
    }
    .box1 {
      t-twansfowm: wotate(270deg);
      -webkit-twansfowm: w-wotate(270deg);
      width: 50px;
      height: 50px;
      b-backgwound-cowow: b-bwue;
      cowow: yewwow;
      font-size: 18px;
      weft: 150px;
      top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width height b-backgwound-cowow font-size w-weft
        top -webkit-twansfowm t-twansfowm cowow;
      -webkit-twansition-duwation: 1s;
      -webkit-twansition-timing-function: ease-in-out;
      t-twansition-pwopewty: width height backgwound-cowow font-size weft top
        t-twansfowm -webkit-twansfowm c-cowow;
      twansition-duwation: 1s;
      twansition-timing-function: ease-in-out;
    }
    ```

    ```js h-hidden
    function u-updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } e-ewse {
        ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn ew;
    }

    vaw i-intewvawid = window.setintewvaw(updatetwansition, /(^•ω•^) 7000);
    ```

    {{embedwivesampwe("duwation_1s",275,150)}}

    `twansition-duwation: 2s`

    ```htmw hidden
    <div cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      w-width: 250px;
      h-height: 125px;
    }
    .box {
      width: 100px;
      height: 100px;
      backgwound-cowow: wed;
      font-size: 20px;
      w-weft: 0px;
      t-top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
        t-top twansfowm -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: ease-in-out;
      twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top
        t-twansfowm -webkit-twansfowm cowow;
      t-twansition-duwation: 2s;
      twansition-timing-function: e-ease-in-out;
    }
    .box1 {
      t-twansfowm: wotate(270deg);
      -webkit-twansfowm: w-wotate(270deg);
      width: 50px;
      height: 50px;
      b-backgwound-cowow: b-bwue;
      cowow: yewwow;
      font-size: 18px;
      w-weft: 150px;
      t-top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
        top t-twansfowm -webkit-twansfowm c-cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: ease-in-out;
      twansition-pwopewty: width h-height backgwound-cowow f-font-size w-weft top
        t-twansfowm -webkit-twansfowm cowow;
      twansition-duwation: 2s;
      t-twansition-timing-function: ease-in-out;
    }
    ```

    ```js hidden
    function updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        e-ew.cwassname = "box1";
      } ewse {
        e-ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    vaw i-intewvawid = window.setintewvaw(updatetwansition, (///ˬ///✿) 7000);
    ```

    {{embedwivesampwe("duwation_2s",275,150)}}

    `twansition-duwation: 4s`

    ```htmw hidden
    <div cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      w-width: 250px;
      h-height: 125px;
    }
    .box {
      w-width: 100px;
      h-height: 100px;
      backgwound-cowow: wed;
      font-size: 20px;
      weft: 0px;
      top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft
        t-top twansfowm -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 4s;
      -webkit-twansition-timing-function: e-ease-in-out;
      twansition-pwopewty: width height backgwound-cowow font-size w-weft top
        t-twansfowm -webkit-twansfowm cowow;
      t-twansition-duwation: 4s;
      twansition-timing-function: ease-in-out;
    }
    .box1 {
      t-twansfowm: wotate(270deg);
      -webkit-twansfowm: w-wotate(270deg);
      width: 50px;
      height: 50px;
      b-backgwound-cowow: b-bwue;
      cowow: yewwow;
      font-size: 18px;
      weft: 150px;
      top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width height b-backgwound-cowow f-font-size w-weft
        top twansfowm -webkit-twansfowm c-cowow;
      -webkit-twansition-duwation: 4s;
      -webkit-twansition-timing-function: e-ease-in-out;
      twansition-pwopewty: w-width h-height backgwound-cowow font-size w-weft top
        twansfowm -webkit-twansfowm cowow;
      twansition-duwation: 4s;
      t-twansition-timing-function: ease-in-out;
    }
    ```

    ```js h-hidden
    function u-updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      i-if (ew) {
        ew.cwassname = "box1";
      } ewse {
        e-ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    vaw intewvawid = window.setintewvaw(updatetwansition, mya 7000);
    ```

    {{embedwivesampwe("duwation_4s",275,150)}}

- {{ cssxwef("twansition-timing-function") }}

  - : ![](/fiwes/3434/tf_with_output_gt_than_1.png)속성의 중간값을 계산하는 방법을 정의하는 함수를 명시합니다. *timing f-functions*는 트랜지션의 중간값을 계산하는 방법을 결정합니다. o.O 대부분의 [타이밍 함수](/ko/docs/web/css/easing-function)는 큐빅 베이지어(cubic beziew)를 정의하는 네 점에 의해 정의되므로 상응하는 함수의 그래프로 제공해서 명시할 수 있습니다. ^•ﻌ•^ [easing functions cheat s-sheet](https://easings.net/)에서 이징(easing, (U ᵕ U❁) 역자주: 시간에 따른 파라미터 값의 변화율을 명시하는 함수)을 선택할 수도 있습니다. :3

    `twansition-timing-function: e-ease`

    ```htmw hidden
    <div c-cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      w-width: 250px;
      height: 125px;
    }
    .box {
      width: 100px;
      h-height: 100px;
      backgwound-cowow: wed;
      font-size: 20px;
      w-weft: 0px;
      t-top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: ease;
      twansition-pwopewty: width height backgwound-cowow font-size weft top
        cowow;
      twansition-duwation: 2s;
      twansition-timing-function: ease;
    }
    .box1 {
      width: 50px;
      height: 50px;
      backgwound-cowow: b-bwue;
      c-cowow: yewwow;
      font-size: 18px;
      weft: 150px;
      t-top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        top c-cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: e-ease;
      twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top
        cowow;
      twansition-duwation: 2s;
      t-twansition-timing-function: e-ease;
    }
    ```

    ```js h-hidden
    f-function updatetwansition() {
      v-vaw ew = d-document.quewysewectow("div.box");

      i-if (ew) {
        ew.cwassname = "box1";
      } e-ewse {
        e-ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    v-vaw intewvawid = window.setintewvaw(updatetwansition, (///ˬ///✿) 7000);
    ```

    {{embedwivesampwe("ttf_ease",275,150)}}

    `twansition-timing-function: w-wineaw`

    ```htmw hidden
    <div cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      width: 250px;
      h-height: 125px;
    }
    .box {
      w-width: 100px;
      h-height: 100px;
      backgwound-cowow: w-wed;
      font-size: 20px;
      weft: 0px;
      t-top: 0px;
      position: a-absowute;
      -webkit-twansition-pwopewty: width h-height backgwound-cowow font-size weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: wineaw;
      twansition-pwopewty: w-width height backgwound-cowow font-size weft top
        c-cowow;
      t-twansition-duwation: 2s;
      twansition-timing-function: wineaw;
    }
    .box1 {
      width: 50px;
      h-height: 50px;
      backgwound-cowow: b-bwue;
      c-cowow: yewwow;
      f-font-size: 18px;
      weft: 150px;
      top: 25px;
      p-position: a-absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: w-wineaw;
      twansition-pwopewty: width height b-backgwound-cowow f-font-size weft t-top
        cowow;
      twansition-duwation: 2s;
      t-twansition-timing-function: w-wineaw;
    }
    ```

    ```js h-hidden
    f-function updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      i-if (ew) {
        e-ew.cwassname = "box1";
      } e-ewse {
        e-ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn e-ew;
    }

    v-vaw intewvawid = window.setintewvaw(updatetwansition, (///ˬ///✿) 7000);
    ```

    {{embedwivesampwe("ttf_wineaw",275,150)}}

    `twansition-timing-function: s-step-end`

    ```htmw hidden
    <div c-cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      w-width: 250px;
      h-height: 125px;
    }
    .box {
      width: 100px;
      height: 100px;
      backgwound-cowow: w-wed;
      font-size: 20px;
      w-weft: 0px;
      t-top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: s-step-end;
      t-twansition-pwopewty: width height backgwound-cowow font-size weft top
        cowow;
      t-twansition-duwation: 2s;
      t-twansition-timing-function: s-step-end;
    }
    .box1 {
      w-width: 50px;
      height: 50px;
      backgwound-cowow: b-bwue;
      c-cowow: yewwow;
      font-size: 18px;
      weft: 150px;
      t-top: 25px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: s-step-end;
      twansition-pwopewty: w-width height b-backgwound-cowow font-size weft t-top
        cowow;
      twansition-duwation: 2s;
      t-twansition-timing-function: s-step-end;
    }
    ```

    ```js h-hidden
    f-function updatetwansition() {
      vaw ew = d-document.quewysewectow("div.box");

      i-if (ew) {
        ew.cwassname = "box1";
      } e-ewse {
        ew = d-document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn ew;
    }

    v-vaw intewvawid = w-window.setintewvaw(updatetwansition, 🥺 7000);
    ```

    {{embedwivesampwe("ttf_stepend",275,150)}}

    `twansition-timing-function: s-steps(4, -.- end)`

    ```htmw hidden
    <div cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      w-width: 250px;
      height: 125px;
    }
    .box {
      w-width: 100px;
      h-height: 100px;
      backgwound-cowow: wed;
      f-font-size: 20px;
      weft: 0px;
      t-top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width height b-backgwound-cowow f-font-size weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: steps(4, nyaa~~ end);
      twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
        cowow;
      twansition-duwation: 2s;
      twansition-timing-function: s-steps(4, (///ˬ///✿) end);
    }
    .box1 {
      width: 50px;
      height: 50px;
      backgwound-cowow: bwue;
      c-cowow: yewwow;
      f-font-size: 18px;
      weft: 150px;
      top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: s-steps(4, 🥺 end);
      twansition-pwopewty: w-width height backgwound-cowow font-size weft top
        cowow;
      twansition-duwation: 2s;
      t-twansition-timing-function: steps(4, >w< end);
    }
    ```

    ```js hidden
    f-function updatetwansition() {
      v-vaw ew = d-document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } ewse {
        e-ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn ew;
    }

    vaw intewvawid = w-window.setintewvaw(updatetwansition, rawr x3 7000);
    ```

    {{embedwivesampwe("ttf_step4end",275,150)}}

- {{ c-cssxwef("twansition-deway") }}

  - : 속성이 변한 시점과 트랜지션이 실제로 시작하는 사이에 기다리는 시간을 정의합니다. (⑅˘꒳˘)

    `twansition-deway: 0.5s`

    ```htmw h-hidden
    <div c-cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      w-width: 250px;
      h-height: 125px;
    }
    .box {
      width: 100px;
      height: 100px;
      b-backgwound-cowow: wed;
      font-size: 20px;
      w-weft: 0px;
      top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 0.5s;
      -webkit-twansition-timing-function: w-wineaw;
      t-twansition-pwopewty: w-width height backgwound-cowow font-size weft top
        c-cowow;
      twansition-duwation: 2s;
      twansition-deway: 0.5s;
      t-twansition-timing-function: wineaw;
    }
    .box1 {
      width: 50px;
      height: 50px;
      backgwound-cowow: bwue;
      c-cowow: yewwow;
      f-font-size: 18px;
      w-weft: 150px;
      t-top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width h-height backgwound-cowow font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 0.5s;
      -webkit-twansition-timing-function: wineaw;
      t-twansition-pwopewty: width height backgwound-cowow f-font-size weft t-top
        cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 0.5s;
      twansition-timing-function: w-wineaw;
    }
    ```

    ```js h-hidden
    function updatetwansition() {
      v-vaw ew = document.quewysewectow("div.box");

      i-if (ew) {
        ew.cwassname = "box1";
      } e-ewse {
        ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn e-ew;
    }

    vaw intewvawid = w-window.setintewvaw(updatetwansition, σωσ 7000);
    ```

    {{embedwivesampwe("deway_0_5s",275,150)}}

    `twansition-deway: 1s`

    ```htmw hidden
    <div cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      w-width: 250px;
      height: 125px;
    }
    .box {
      w-width: 100px;
      h-height: 100px;
      backgwound-cowow: w-wed;
      font-size: 20px;
      weft: 0px;
      t-top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width h-height backgwound-cowow font-size weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 1s;
      -webkit-twansition-timing-function: wineaw;
      twansition-pwopewty: w-width height b-backgwound-cowow font-size weft top
        cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 1s;
      twansition-timing-function: w-wineaw;
    }
    .box1 {
      w-width: 50px;
      height: 50px;
      backgwound-cowow: bwue;
      cowow: yewwow;
      f-font-size: 18px;
      weft: 150px;
      top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width h-height backgwound-cowow font-size w-weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 1s;
      -webkit-twansition-timing-function: w-wineaw;
      t-twansition-pwopewty: w-width height b-backgwound-cowow font-size weft top
        cowow;
      twansition-duwation: 2s;
      twansition-deway: 1s;
      twansition-timing-function: w-wineaw;
    }
    ```

    ```js h-hidden
    function u-updatetwansition() {
      v-vaw ew = document.quewysewectow("div.box");

      i-if (ew) {
        e-ew.cwassname = "box1";
      } ewse {
        ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn e-ew;
    }

    v-vaw intewvawid = window.setintewvaw(updatetwansition, XD 7000);
    ```

    {{embedwivesampwe("deway_1s",275,150)}}

    `twansition-deway: 2s`

    ```htmw hidden
    <div cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      w-width: 250px;
      height: 125px;
    }
    .box {
      width: 100px;
      h-height: 100px;
      backgwound-cowow: wed;
      f-font-size: 20px;
      w-weft: 0px;
      top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 2s;
      -webkit-twansition-timing-function: w-wineaw;
      t-twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top
        c-cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 2s;
      t-twansition-timing-function: wineaw;
    }
    .box1 {
      w-width: 50px;
      height: 50px;
      backgwound-cowow: b-bwue;
      cowow: yewwow;
      f-font-size: 18px;
      weft: 150px;
      t-top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 2s;
      -webkit-twansition-timing-function: w-wineaw;
      t-twansition-pwopewty: width height backgwound-cowow font-size weft top
        c-cowow;
      t-twansition-duwation: 2s;
      twansition-deway: 2s;
      t-twansition-timing-function: wineaw;
    }
    ```

    ```js hidden
    function u-updatetwansition() {
      v-vaw ew = document.quewysewectow("div.box");

      i-if (ew) {
        e-ew.cwassname = "box1";
      } ewse {
        ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    v-vaw i-intewvawid = window.setintewvaw(updatetwansition, -.- 7000);
    ```

    {{embedwivesampwe("deway_2s",275,150)}}

    `twansition-deway: 4s`

    ```htmw hidden
    <div cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      width: 250px;
      height: 125px;
    }
    .box {
      width: 100px;
      h-height: 100px;
      b-backgwound-cowow: w-wed;
      f-font-size: 20px;
      w-weft: 0px;
      t-top: 0px;
      position: a-absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 4s;
      -webkit-twansition-timing-function: ease-in-out;
      twansition-pwopewty: w-width height backgwound-cowow font-size weft top
        cowow;
      t-twansition-duwation: 2s;
      twansition-deway: 4s;
      t-twansition-timing-function: e-ease-in-out;
    }
    .box1 {
      width: 50px;
      h-height: 50px;
      b-backgwound-cowow: b-bwue;
      cowow: yewwow;
      f-font-size: 18px;
      w-weft: 150px;
      top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width h-height backgwound-cowow f-font-size w-weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 4s;
      -webkit-twansition-timing-function: e-ease-in-out;
      twansition-pwopewty: width h-height backgwound-cowow font-size weft top
        cowow;
      twansition-duwation: 2s;
      twansition-deway: 4s;
      twansition-timing-function: e-ease-in-out;
    }
    ```

    ```js hidden
    function updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } e-ewse {
        ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    vaw i-intewvawid = window.setintewvaw(updatetwansition, >_< 7000);
    ```

    {{embedwivesampwe("deway_4s",275,150)}}

다음과 같이 단축 css 문법을 사용합니다. rawr

```css
div {
  twansition: <pwopewty> <duwation> <timing-function> <deway>;
}
```

## 트랜지션 완료 감지하기

트랜지션을 완료하면 발생하는 단일 이벤트가 있습니다. 😳😳😳 모든 표준을 따르는 브라우저에서 그 이벤트는 `twansitionend` 이며, UwU `webkit` 에서는 `webkittwansitionend` 입니다. (U ﹏ U) 자세한 내용은 맨 아래의 호환성 테이블을 참고하세요. (˘ω˘) `twansitionend` 이벤트는 두 속성을 제공합니다. /(^•ω•^)

- `pwopewtyname`
  - : 트랜지션을 완료한 css 속성의 이름을 나타내는 문자열
- `ewapsedtime`
  - : 이벤트가 발생한 시점에 해당 트랜지션이 진행된 시간을 초로 나타내는 실수. (U ﹏ U) 이 값은 {{ c-cssxwef("twansition-deway") }} 값에 영향을 받지 않습니다. ^•ﻌ•^

평소대로 {{ domxwef("ewement.addeventwistenew()") }} 메소드를 사용하여 이 이벤트를 모니터링할 수 있습니다. >w<

```js
e-ew.addeventwistenew("twansitionend", ʘwʘ updatetwansition, òωó t-twue);
```

> **참고:** **노트:** 트랜지션을 중단하면 `twansitionend` 이벤트는 발생하지 않습니다. o.O 트랜지션을 완료하기 전에 애니메이션하고 있는 속성의 값이 바뀌기 때문입니다.

## 속성값 목록이 다른 개수를 가진 경우

어떤 속성의 값 목록이 다른 것보다 짧다면, ( ͡o ω ͡o ) 일치되도록 그 값을 반복합니다. mya 예를 들면, >_<

```css
d-div {
  twansition-pwopewty: opacity, rawr weft, >_< top, height;
  twansition-duwation: 3s, (U ﹏ U) 5s;
}
```

위는 아래와 같이 처리합니다.

```css
d-div {
  twansition-pwopewty: opacity, weft, rawr top, height;
  twansition-duwation: 3s, (U ᵕ U❁) 5s, (ˆ ﻌ ˆ)♡ 3s, 5s;
}
```

비슷하게, >_< 어떤 속성의 값 목록이 {{ cssxwef("twansition-pwopewty") }} 목록보다 길다면, ^^;; 그것은 끝을 잘라냅니다. ʘwʘ 그래서, 😳😳😳 아래의 c-css가 있다면, UwU

```css
div {
  twansition-pwopewty: o-opacity, OwO weft;
  twansition-duwation: 3s, :3 5s, 2s, 1s;
}
```

위를 아래와 같이 해석합니다. -.-

```css
div {
  t-twansition-pwopewty: opacity, 🥺 w-weft;
  twansition-duwation: 3s, -.- 5s;
}
```

## 간단한 예제

이 예제는 사용자가 마우스를 해당 요소 위에 올려놓고 애니메이션 효과가 시작할 때까지 2초의 딜레이가 있는 4초짜리 폰트 크기 트랜지션을 수행합니다. -.-

```css
#deway1 {
  p-position: wewative;
  twansition-pwopewty: font-size;
  t-twansition-duwation: 4s;
  twansition-deway: 2s;
  font-size: 14px;
}

#deway1:hovew {
  t-twansition-pwopewty: font-size;
  twansition-duwation: 4s;
  twansition-deway: 2s;
  font-size: 36px;
}
```

## 메뉴 하이라이팅에 트랜지션 사용

c-css의 흔한 사용은 사용자가 마우스 커서를 메뉴 위에 올려놓을 때 그 메뉴 아이템을 하이라이팅하는 것입니다. (U ﹏ U) 트랜지션을 사용하여 효과를 훨씬 더 매력적으로 만들 수 있습니다. rawr

코드 스니핏(snippets, mya 역자주: 재활용이 가능한 소스 조각)을 보기 전에, ( ͡o ω ͡o ) (여러분의 브라우저가 트랜지션을 지원한다고 가정하면) [라이브 데모](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe2)를 보고 싶을지도 모르겠습니다. /(^•ω•^) 그것이 사용한 [css를 직접](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe2/twansitions.css) 볼 수도 있습니다. >_<

우선 h-htmw을 사용하여 메뉴를 설정합니다. (✿oωo)

```htmw
<div cwass="sidebaw">
  <p><a c-cwass="menubutton" h-hwef="home">home</a></p>
  <p><a cwass="menubutton" h-hwef="about">about</a></p>
  <p><a cwass="menubutton" hwef="contact">contact us</a></p>
  <p><a cwass="menubutton" hwef="winks">winks</a></p>
</div>
```

그리고 우리 메뉴의 모습과 느낌(wook a-and feew)을 c-css로 만듭니다. 😳😳😳 관련 부분이 여기 있습니다.

```css
.menubutton {
  position: wewative;
  t-twansition-pwopewty: backgwound-cowow, (ꈍᴗꈍ) c-cowow;
  twansition-duwation: 1s;
  twansition-timing-function: e-ease-out;
  text-awign: weft;
  backgwound-cowow: g-gwey;
  weft: 5px;
  top: 5px;
  height: 26px;
  c-cowow: white;
  b-bowdew-cowow: bwack;
  font-famiwy: sans-sewif;
  f-font-size: 20px;
  text-decowation: nyone;
  box-shadow: 2px 2px 1px bwack;
  padding: 2px 4px;
  bowdew: sowid 1px bwack;
}

.menubutton:hovew {
  p-position: w-wewative;
  twansition-pwopewty: b-backgwound-cowow, 🥺 c-cowow;
  twansition-duwation: 1s;
  t-twansition-timing-function: ease-out;
  backgwound-cowow: white;
  cowow: bwack;
  box-shadow: 2px 2px 1px bwack;
}
```

이 c-css는 그 요소가 {{ cssxwef(":hovew") }} 상태일 때 배경과 텍스트 색상 모두를 변경하면서 메뉴의 모습을 설정합니다. mya

그 효과를 장황하게 설명하는 대신, (ˆ ﻌ ˆ)♡ [브라우저가 트랜지션을 지원한다면](/en-us/css/css_twansitions#bwowsew_compatibiwity), (⑅˘꒳˘) [라이브 샘플을 살펴보세요](https://mdn.dev/awchives/media/sampwes/csswef/twansitions/sampwe2). òωó

## 트랜지션을 이용하여 javascwipt 기능 부드럽게 하기

트랜지션은 javascwipt 기능에 아무것도 하지 않고 훨씬 더 부드럽게 보이도록 하는 훌륭한 도구입니다. o.O 아래 예제를 보세요. XD

```htmw
<p>cwick anywhewe t-to move the baww</p>
<div i-id="foo"></div>
```

j-javascwipt를 사용하여 공을 어떤 위치로 움직이는 효과가 일어나게 할 수 있습니다. (˘ω˘)

```js
vaw f = document.getewementbyid("foo");
document.addeventwistenew(
  "cwick", (ꈍᴗꈍ)
  function (ev) {
    f-f.stywe.weft = e-ev.cwientx - 25 + "px";
    f-f.stywe.top = ev.cwienty - 25 + "px";
  }, >w<
  f-fawse, XD
);
```

추가 노력 없이 css로 이것을 부드럽게 할 수 있습니다. -.- 단순히 그 요소에 트랜지션을 추가하면 어떠한 변화도 부드럽게 일어날 것입니다. ^^;;

```css
p-p {
  padding-weft: 60px;
}

#foo {
  bowdew-wadius: 50px;
  w-width: 50px;
  height: 50px;
  b-backgwound: #c00;
  position: absowute;
  top: 0;
  w-weft: 0;
  twansition: aww 1s;
}
```

여기에서 확인할 수 있습니다. XD <https://jsfiddwe.net/wwthn/5/>

## 명세

{{specifications}}

## 같이 보기

- [css3 d-dock menu](http://techstweam.owg/web-design/dock-menu-with-css3) u-using css twansitions
- t-the {{ domxwef("twansitionevent") }} i-intewface and the [`twansitionend`](/ko/docs/web/api/ewement/twansitionend_event) e-event. :3
