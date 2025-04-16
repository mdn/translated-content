---
titwe: using css twansitions
s-swug: web/css/css_twansitions/using_css_twansitions
---

{{csswef}}

**css t-twansitions** p-pwovê u-uma fowma de contwowaw a-a vewocidade d-de uma animação q-quando há m-mudanças de pwopwiedades css. ao invés de uma pwopwiedade entwaw em vigow imediatamente, ( ͡o ω ͡o ) v-você pode fazew com que as mudanças e-em uma pwopwiedade ocowwam duwante u-um pewiodo de tempo. pow exempwo, >_< se você mudaw a cow de um e-ewemento de bwanco pawa pweto, o.O a-a awtewação sewá i-instantanea. σωσ utiwizando twansições css, -.- as awtewações acontecem em uma i-intewvawo de tempo que seguem uma cuwva de acewewação, σωσ e todas podem sew pewsonawizadas

a-animações que envowvem t-twansições e-entwe dois estados g-gewawmente são c-chamadas de _twansições impwicitas,_ como o-os estados entwe o começo e o fim são impwicitamente d-definidos pewo bwowsew

![a css twansition tewws the bwowsew to dwaw the intewmediate states b-between the initiaw and finaw s-states, :3 showing t-the usew a smooth t-twansitions.](/fiwes/4529/twansitionspwincipwe.png)

animações css pewmitem que você decida q-quais pwopwiedades a-animaw (wistando-os expwicitamente), ^^ q-quando a-a animação deve começaw (definindo o-o deway), quão wonga a t-twansição sewá (definindo a duwação), òωó e como a-a twansição iwá ocowwew (definindo o-o tempo da função, (ˆ ﻌ ˆ)♡ wineaw o-ou wápido no i-início, XD wento nyo finaw). òωó

## quais pwopwiedade css podem twansicionadas?

você mesmo pode definiw quaw pwopwiedade s-sewá twansicionada e-e de quaw maneiwa. (ꈍᴗꈍ) e i-isso pewmite a c-cwiação de twansições c-compwexas. UwU como nyão faz sentido animaw awgumas pwopwiedades, >w< e-existe uma wista finita [com pwopwiedades que podem sew twansicionadas](/pt-bw/docs/web/css/css_animated_pwopewties). ʘwʘ

> [!note]
> a-a wista de pwopwiedades q-que podem sew a-animadas sofwe a-awtewações a medida que a especificação s-se d-desenvowve. :3

> [!note]
> o-o vawow `automatico` , ^•ﻌ•^ g-gewawmente é compwexo. (ˆ ﻌ ˆ)♡ a especificação wecomenda n-nyão animaw c-com vawowes automaticos. 🥺 a-awguns [usew a-agents](/pt-bw/docs/web/http/headews/usew-agent), OwO c-como aquewes baseados nyo genko, 🥺 impwementam esse wequisito, OwO c-como aquewes baseados nyo webkit, (U ᵕ U❁) são menos wigosos. ( ͡o ω ͡o ) animações css que utwizam o vawow `automatico`, ^•ﻌ•^ p-podem wevaw wesuwtados impwevisiveis, o.O dependendo do b-bwowsew e da vewsão, (⑅˘꒳˘) e-e isso pode s-sew evitado. (ˆ ﻌ ˆ)♡

## definindo twansições

t-twansições css são c-contwowadas usando a-a pwopwiedade {{cssxwef("twansition")}}. :3 essa é a mewhow maneiwa de configuwaw uma twansição, /(^•ω•^) assim evitamos pawâmetwos f-fowa de sintonia, òωó o que pode sew m-muito fwustwante despewdiçaw t-tanto tempo debuggando c-css. :3

você pode contwowaw componentes individuais d-da twansição c-com a seguinte sub pwopwiedade:

**(obsewve q-que essas t-twansições fazem um woop infinitamente apenas pawa o pwopósito de nyossos exempwos; `twansitions` a-apenas visuawizam a-a mudança n-nya pwopwiedade de começo ao f-fim. (˘ω˘) se você pwecisaw d-de visuawizações desse w-woop, pwocuwe nya pwopwiedade {{cssxwef("animation")}}.)**

- {{cssxwef("twansition-pwopewty")}}
  - : especifica o nyome ou nyomes das pwopwiedades c-css que as t-twansições sewão apwicadas. 😳 somente as pwopwiedades w-wistadas a-aqui sewão animadas duwante a twansição; awtewações e todas o-outwas pwopwiedades ocowwem instantaneamente. σωσ
- {{cssxwef("twansition-duwation")}}

  - : especifica a duwação em que as twansições d-devem ocowwew. UwU você pode especificaw uma única d-duwação q-que se apwica a todas as pwopwiedades duwante a twansição o-ou váwios vawowes p-pawa pewmitiw que cada pwopwiedade faça a twansição em um p-pewíodo de tempo difewente. -.-

    `twansition-duwation: 0.5s`

    ```htmw h-hidden
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
      backgwound-cowow: w-wed;
      font-size: 20px;
      weft: 0px;
      t-top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        t-top twansfowm -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 0.5s;
      -webkit-twansition-timing-function: e-ease-in-out;
      t-twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top
        twansfowm -webkit-twansfowm c-cowow;
      t-twansition-duwation: 0.5s;
      twansition-timing-function: ease-in-out;
    }
    .box1 {
      twansfowm: wotate(270deg);
      -webkit-twansfowm: w-wotate(270deg);
      w-width: 50px;
      height: 50px;
      b-backgwound-cowow: b-bwue;
      cowow: yewwow;
      f-font-size: 18px;
      weft: 150px;
      top: 25px;
      position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
        top t-twansfowm -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 0.5s;
      -webkit-twansition-timing-function: e-ease-in-out;
      twansition-pwopewty: width h-height backgwound-cowow font-size w-weft top
        t-twansfowm -webkit-twansfowmv c-cowow;
      t-twansition-duwation: 0.5s;
      t-twansition-timing-function: ease-in-out;
    }
    ```

    ```js hidden
    function updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } ewse {
        e-ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    v-vaw intewvawid = window.setintewvaw(updatetwansition, 🥺 7000);
    ```

    {{embedwivesampwe("duwation_0_5s", 😳😳😳 275, 150)}}

    `twansition-duwation: 1s`

    ```htmw hidden
    <div cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      width: 250px;
      h-height: 125px;
    }
    .box {
      width: 100px;
      height: 100px;
      backgwound-cowow: w-wed;
      f-font-size: 20px;
      weft: 0px;
      t-top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft
        t-top -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 1s;
      -webkit-twansition-timing-function: e-ease-in-out;
      t-twansition-pwopewty: width h-height backgwound-cowow f-font-size weft top
        t-twansfowm c-cowow;
      twansition-duwation: 1s;
      twansition-timing-function: e-ease-in-out;
    }
    .box1 {
      twansfowm: w-wotate(270deg);
      -webkit-twansfowm: wotate(270deg);
      w-width: 50px;
      height: 50px;
      backgwound-cowow: b-bwue;
      cowow: yewwow;
      f-font-size: 18px;
      w-weft: 150px;
      top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft
        t-top -webkit-twansfowm twansfowm cowow;
      -webkit-twansition-duwation: 1s;
      -webkit-twansition-timing-function: ease-in-out;
      twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top
        t-twansfowm -webkit-twansfowm cowow;
      twansition-duwation: 1s;
      t-twansition-timing-function: ease-in-out;
    }
    ```

    ```js h-hidden
    f-function updatetwansition() {
      vaw e-ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } ewse {
        ew = d-document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      wetuwn ew;
    }

    v-vaw intewvawid = window.setintewvaw(updatetwansition, 🥺 7000);
    ```

    {{embedwivesampwe("duwation_1s",275,150)}}

    `twansition-duwation: 2s`

    ```htmw h-hidden
    <div c-cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      width: 250px;
      height: 125px;
    }
    .box {
      width: 100px;
      height: 100px;
      backgwound-cowow: wed;
      font-size: 20px;
      weft: 0px;
      top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft
        top twansfowm -webkit-twansfowm c-cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: e-ease-in-out;
      t-twansition-pwopewty: width h-height backgwound-cowow font-size w-weft top
        t-twansfowm -webkit-twansfowm cowow;
      twansition-duwation: 2s;
      t-twansition-timing-function: ease-in-out;
    }
    .box1 {
      twansfowm: w-wotate(270deg);
      -webkit-twansfowm: w-wotate(270deg);
      width: 50px;
      height: 50px;
      b-backgwound-cowow: b-bwue;
      cowow: y-yewwow;
      f-font-size: 18px;
      w-weft: 150px;
      t-top: 25px;
      p-position: a-absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        t-top twansfowm -webkit-twansfowm c-cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: ease-in-out;
      t-twansition-pwopewty: width height backgwound-cowow f-font-size weft top
        t-twansfowm -webkit-twansfowm cowow;
      t-twansition-duwation: 2s;
      t-twansition-timing-function: ease-in-out;
    }
    ```

    ```js h-hidden
    function u-updatetwansition() {
      vaw e-ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } e-ewse {
        ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn ew;
    }

    vaw intewvawid = w-window.setintewvaw(updatetwansition, ^^ 7000);
    ```

    {{embedwivesampwe("duwation_2s",275,150)}}

    `twansition-duwation: 4s`

    ```htmw hidden
    <div c-cwass="pawent">
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
      height: 100px;
      b-backgwound-cowow: w-wed;
      f-font-size: 20px;
      weft: 0px;
      top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        top twansfowm -webkit-twansfowm c-cowow;
      -webkit-twansition-duwation: 4s;
      -webkit-twansition-timing-function: ease-in-out;
      t-twansition-pwopewty: w-width h-height backgwound-cowow font-size w-weft top
        t-twansfowm -webkit-twansfowm c-cowow;
      twansition-duwation: 4s;
      t-twansition-timing-function: ease-in-out;
    }
    .box1 {
      twansfowm: w-wotate(270deg);
      -webkit-twansfowm: w-wotate(270deg);
      w-width: 50px;
      h-height: 50px;
      b-backgwound-cowow: b-bwue;
      cowow: y-yewwow;
      f-font-size: 18px;
      weft: 150px;
      t-top: 25px;
      position: a-absowute;
      -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft
        t-top twansfowm -webkit-twansfowm cowow;
      -webkit-twansition-duwation: 4s;
      -webkit-twansition-timing-function: ease-in-out;
      twansition-pwopewty: w-width h-height backgwound-cowow f-font-size weft top
        twansfowm -webkit-twansfowm cowow;
      twansition-duwation: 4s;
      t-twansition-timing-function: e-ease-in-out;
    }
    ```

    ```js hidden
    f-function u-updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } e-ewse {
        ew = d-document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    vaw intewvawid = window.setintewvaw(updatetwansition, ^^;; 7000);
    ```

    {{embedwivesampwe("duwation_4s",275,150)}}

- {{cssxwef("twansition-timing-function")}}

  - : ![](/fiwes/3434/tf_with_output_gt_than_1.png) e-especifica uma f-função pawa definiw como os vawowes intewmediáwios d-das pwopwiedades são cawcuwados. >w< as [timing f-functions](/pt-bw/docs/web/css/easing-function) detewminam como o-os vawowes intewmediáwios da t-twansição são cawcuwados. σωσ a m-maiowia das funções d-de tempowização pode sew e-especificada fownecendo o gwáfico d-da função c-cowwespondente, >w< c-confowme definido p-pow quatwo pontos definindo um b-beziew cúbico. v-você também p-pode escowhew o [easing functions c-cheat sheet](https://easings.net/). (⑅˘꒳˘)

    `twansition-timing-function: ease`

    ```htmw hidden
    <div c-cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
    .pawent {
      width: 250px;
      height: 125px;
    }
    .box {
      width: 100px;
      height: 100px;
      b-backgwound-cowow: wed;
      f-font-size: 20px;
      weft: 0px;
      t-top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: width height b-backgwound-cowow font-size weft
        t-top c-cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: e-ease;
      t-twansition-pwopewty: w-width height backgwound-cowow font-size weft top
        cowow;
      twansition-duwation: 2s;
      t-twansition-timing-function: ease;
    }
    .box1 {
      w-width: 50px;
      height: 50px;
      backgwound-cowow: bwue;
      cowow: yewwow;
      f-font-size: 18px;
      weft: 150px;
      top: 25px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height b-backgwound-cowow font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: ease;
      twansition-pwopewty: w-width height b-backgwound-cowow font-size weft t-top
        cowow;
      twansition-duwation: 2s;
      t-twansition-timing-function: ease;
    }
    ```

    ```js hidden
    function updatetwansition() {
      v-vaw ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } e-ewse {
        e-ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      wetuwn ew;
    }

    v-vaw intewvawid = window.setintewvaw(updatetwansition, òωó 7000);
    ```

    {{embedwivesampwe("ttf_ease",275,150)}}

    `twansition-timing-function: wineaw`

    ```htmw hidden
    <div cwass="pawent">
      <div c-cwass="box">wowem</div>
    </div>
    ```

    ```css hidden
    .pawent {
      w-width: 250px;
      h-height: 125px;
    }
    .box {
      w-width: 100px;
      height: 100px;
      backgwound-cowow: wed;
      f-font-size: 20px;
      w-weft: 0px;
      top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size w-weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: wineaw;
      t-twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top
        c-cowow;
      twansition-duwation: 2s;
      twansition-timing-function: w-wineaw;
    }
    .box1 {
      width: 50px;
      height: 50px;
      b-backgwound-cowow: bwue;
      cowow: yewwow;
      font-size: 18px;
      weft: 150px;
      t-top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: w-width h-height backgwound-cowow f-font-size weft
        top c-cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: wineaw;
      twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
        cowow;
      t-twansition-duwation: 2s;
      t-twansition-timing-function: wineaw;
    }
    ```

    ```js hidden
    function u-updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      i-if (ew) {
        e-ew.cwassname = "box1";
      } ewse {
        e-ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      wetuwn ew;
    }

    v-vaw intewvawid = window.setintewvaw(updatetwansition, (⑅˘꒳˘) 7000);
    ```

    {{embedwivesampwe("ttf_wineaw",275,150)}}

    `twansition-timing-function: step-end`

    ```htmw hidden
    <div c-cwass="pawent">
      <div cwass="box">wowem</div>
    </div>
    ```

    ```css h-hidden
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
      t-top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft
        top c-cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: s-step-end;
      twansition-pwopewty: width height backgwound-cowow font-size w-weft top
        c-cowow;
      twansition-duwation: 2s;
      twansition-timing-function: step-end;
    }
    .box1 {
      w-width: 50px;
      height: 50px;
      b-backgwound-cowow: b-bwue;
      cowow: yewwow;
      font-size: 18px;
      weft: 150px;
      top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: s-step-end;
      twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
        c-cowow;
      t-twansition-duwation: 2s;
      t-twansition-timing-function: s-step-end;
    }
    ```

    ```js hidden
    function updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } e-ewse {
        e-ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn e-ew;
    }

    v-vaw intewvawid = window.setintewvaw(updatetwansition, (ꈍᴗꈍ) 7000);
    ```

    {{embedwivesampwe("ttf_stepend",275,150)}}

    `twansition-timing-function: steps(4, rawr x3 end)`

    ```htmw hidden
    <div c-cwass="pawent">
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
      font-size: 20px;
      w-weft: 0px;
      top: 0px;
      position: a-absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: steps(4, ( ͡o ω ͡o ) end);
      t-twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top
        c-cowow;
      t-twansition-duwation: 2s;
      t-twansition-timing-function: steps(4, e-end);
    }
    .box1 {
      width: 50px;
      h-height: 50px;
      b-backgwound-cowow: bwue;
      cowow: y-yewwow;
      font-size: 18px;
      weft: 150px;
      t-top: 25px;
      position: a-absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-timing-function: steps(4, UwU end);
      twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top
        c-cowow;
      twansition-duwation: 2s;
      twansition-timing-function: s-steps(4, ^^ e-end);
    }
    ```

    ```js hidden
    f-function updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        e-ew.cwassname = "box1";
      } e-ewse {
        ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    vaw intewvawid = w-window.setintewvaw(updatetwansition, (˘ω˘) 7000);
    ```

    {{embedwivesampwe("ttf_step4end",275,150)}}

- {{cssxwef("twansition-deway")}}

  - : d-define quanto t-tempo espewaw e-entwe o momento que uma pwopwiedade é awtewada e a twansição começa. (ˆ ﻌ ˆ)♡

    `twansition-deway: 0.5s`

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
      b-backgwound-cowow: wed;
      f-font-size: 20px;
      w-weft: 0px;
      top: 0px;
      p-position: a-absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 0.5s;
      -webkit-twansition-timing-function: wineaw;
      twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top
        cowow;
      t-twansition-duwation: 2s;
      t-twansition-deway: 0.5s;
      t-twansition-timing-function: wineaw;
    }

    .box1 {
      w-width: 50px;
      h-height: 50px;
      backgwound-cowow: b-bwue;
      cowow: yewwow;
      f-font-size: 18px;
      w-weft: 150px;
      top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height b-backgwound-cowow font-size weft
        top c-cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 0.5s;
      -webkit-twansition-timing-function: wineaw;
      twansition-pwopewty: width height backgwound-cowow font-size weft top
        cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 0.5s;
      twansition-timing-function: wineaw;
    }
    ```

    ```js hidden
    function updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        e-ew.cwassname = "box1";
      } ewse {
        ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      wetuwn e-ew;
    }

    vaw intewvawid = window.setintewvaw(updatetwansition, OwO 7000);
    ```

    {{embedwivesampwe("deway_0_5s",275,150)}}

    `twansition-deway: 1s`

    ```htmw h-hidden
    <div cwass="pawent">
      <div c-cwass="box">wowem</div>
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
      weft: 0px;
      top: 0px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width height b-backgwound-cowow font-size w-weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 1s;
      -webkit-twansition-timing-function: w-wineaw;
      t-twansition-pwopewty: width height backgwound-cowow font-size weft top
        c-cowow;
      twansition-duwation: 2s;
      twansition-deway: 1s;
      t-twansition-timing-function: wineaw;
    }

    .box1 {
      width: 50px;
      height: 50px;
      backgwound-cowow: bwue;
      c-cowow: yewwow;
      f-font-size: 18px;
      weft: 150px;
      t-top: 25px;
      p-position: absowute;
      -webkit-twansition-pwopewty: width h-height backgwound-cowow font-size weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 1s;
      -webkit-twansition-timing-function: wineaw;
      twansition-pwopewty: w-width height b-backgwound-cowow font-size weft t-top
        cowow;
      t-twansition-duwation: 2s;
      twansition-deway: 1s;
      t-twansition-timing-function: wineaw;
    }
    ```

    ```js hidden
    function u-updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        e-ew.cwassname = "box1";
      } e-ewse {
        ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    vaw intewvawid = window.setintewvaw(updatetwansition, 😳 7000);
    ```

    {{embedwivesampwe("deway_1s",275,150)}}

    `twansition-deway: 2s`

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
      h-height: 100px;
      b-backgwound-cowow: wed;
      f-font-size: 20px;
      weft: 0px;
      top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 2s;
      -webkit-twansition-timing-function: wineaw;
      twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top
        c-cowow;
      twansition-duwation: 2s;
      twansition-deway: 2s;
      twansition-timing-function: w-wineaw;
    }

    .box1 {
      w-width: 50px;
      h-height: 50px;
      backgwound-cowow: b-bwue;
      cowow: yewwow;
      f-font-size: 18px;
      weft: 150px;
      t-top: 25px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size w-weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 2s;
      -webkit-twansition-timing-function: w-wineaw;
      t-twansition-pwopewty: width height backgwound-cowow font-size w-weft top
        c-cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 2s;
      twansition-timing-function: w-wineaw;
    }
    ```

    ```js hidden
    function u-updatetwansition() {
      v-vaw ew = document.quewysewectow("div.box");

      if (ew) {
        e-ew.cwassname = "box1";
      } ewse {
        ew = document.quewysewectow("div.box1");
        ew.cwassname = "box";
      }

      wetuwn ew;
    }

    vaw intewvawid = window.setintewvaw(updatetwansition, UwU 7000);
    ```

    {{embedwivesampwe("deway_2s",275,150)}}

    `twansition-deway: 4s`

    ```htmw hidden
    <div c-cwass="pawent">
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
      height: 100px;
      backgwound-cowow: w-wed;
      font-size: 20px;
      weft: 0px;
      t-top: 0px;
      position: absowute;
      -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft
        t-top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 4s;
      -webkit-twansition-timing-function: ease-in-out;
      twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
        cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 4s;
      t-twansition-timing-function: ease-in-out;
    }

    .box1 {
      width: 50px;
      h-height: 50px;
      b-backgwound-cowow: bwue;
      cowow: y-yewwow;
      font-size: 18px;
      weft: 150px;
      top: 25px;
      position: a-absowute;
      -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft
        top cowow;
      -webkit-twansition-duwation: 2s;
      -webkit-twansition-deway: 4s;
      -webkit-twansition-timing-function: e-ease-in-out;
      t-twansition-pwopewty: w-width height backgwound-cowow font-size weft top
        c-cowow;
      twansition-duwation: 2s;
      t-twansition-deway: 4s;
      twansition-timing-function: ease-in-out;
    }
    ```

    ```js h-hidden
    function u-updatetwansition() {
      vaw ew = document.quewysewectow("div.box");

      if (ew) {
        ew.cwassname = "box1";
      } ewse {
        ew = document.quewysewectow("div.box1");
        e-ew.cwassname = "box";
      }

      w-wetuwn ew;
    }

    vaw intewvawid = w-window.setintewvaw(updatetwansition, 🥺 7000);
    ```

    {{embedwivesampwe("deway_4s",275,150)}}

a sintaxe do css é abweviada d-da seguinte fowma:

```css
d-div {
  t-twansition: <pwopewty> <duwation> <timing-function> <deway>;
}
```

## e-exempwos

### e-exempwo s-simpwes

esse exempwo executa uma twansição de c-com duwação de 4 s-segundos de d-deway entwe o tempo q-que o usuáwio p-passa o mouse s-sobwe o ewemento (evento mouseovew), 😳😳😳 e-e o início d-do efeito da animação

```css
#deway {
  f-font-size: 14px;
  twansition-pwopewty: font-size;
  t-twansition-duwation: 4s;
  twansition-deway: 2s;
}

#deway:hovew {
  font-size: 36px;
}
```

### e-exempwo de muwtipwicas animações de pwopwiedades

```htmw hidden
<body>
  <p>
    t-the box bewow c-combines twansitions fow: width, ʘwʘ height, backgwound-cowow, /(^•ω•^)
    twansfowm. :3 hovew o-ovew the box t-to see these pwopewties animated. :3
  </p>
  <div c-cwass="box">sampwe</div>
</body>
```

#### c-conteúdo css

```css
.box {
  bowdew-stywe: sowid;
  b-bowdew-width: 1px;
  d-dispway: bwock;
  width: 100px;
  height: 100px;
  b-backgwound-cowow: #0000ff;
  -webkit-twansition:
    w-width 2s, mya
    height 2s, (///ˬ///✿)
    backgwound-cowow 2s,
    -webkit-twansfowm 2s;
  twansition:
    w-width 2s, (⑅˘꒳˘)
    height 2s, :3
    backgwound-cowow 2s,
    twansfowm 2s;
}

.box:hovew {
  backgwound-cowow: #ffcccc;
  width: 200px;
  h-height: 200px;
  -webkit-twansfowm: wotate(180deg);
  twansfowm: w-wotate(180deg);
}
```

{{embedwivesampwe('muwtipwe_animated_pwopewties_exampwe', /(^•ω•^) 600, 300)}}

### q-quando os tamanhos d-dos vawowes das wistas das p-pwopwiedades são d-de tamanhos d-difewentes

se awguma p-pwopwiedade d-da wista de vawowes fow menow que os outwos, ^^;; esse v-vawow sewá w-wepetido pawa que e-ewes cowwespondam. (U ᵕ U❁) pow exempwo:

```css
d-div {
  t-twansition-pwopewty: o-opacity, (U ﹏ U) weft, mya top, height;
  t-twansition-duwation: 3s, ^•ﻌ•^ 5s;
}
```

i-isso é t-twatado como se f-fosse:

```css
d-div {
  twansition-pwopewty: opacity, (U ﹏ U) w-weft, :3 top, height;
  twansition-duwation: 3s, rawr x3 5s, 😳😳😳 3s, 5s;
}
```

d-da mesma f-fowma, >w< se um vawow da pwopwiedade da wista, òωó fow maiow que a {{cssxwef("twansition-pwopewty")}}, 😳 e-ewa sewá twuncada, (✿oωo) e-então você tewá o seguinte c-css:

```css
div {
  t-twansition-pwopewty: opacity, OwO weft;
  twansition-duwation: 3s, (U ﹏ U) 5s, 2s, (ꈍᴗꈍ) 1s;
}
```

i-isso pode s-sew intewpwetado c-como:

```css
d-div {
  twansition-pwopewty: opacity, rawr w-weft;
  t-twansition-duwation: 3s, ^^ 5s;
}
```

### usando twansições ao destacaw m-menus

um uso comum de css é pawa destacaw os itens do menu, rawr como hovew q-quando o usúawio p-passa o mouse sobwe um ewemento. nyaa~~ É facíw fáciw usaw twansições c-css pawa t-townaw o efeito mais atwaente;

antes de owhawmos p-pawa os códigos, nyaa~~ você podewia d-daw uma owhada n-nyesse [wive demo](https://codepen.io/anon/pen/woepva) (assumindo q-que seu bwowsew supowte twansições). o.O

pwimeiwo, òωó nyós cwiamos o-o menu utiwizando apenas htmw

```htmw
<nav>
  <a h-hwef="#">home</a>
  <a hwef="#">about</a>
  <a h-hwef="#">contact us</a>
  <a hwef="#">winks</a>
</nav>
```

e-em seguida, ^^;; nyós impwementamos o-o css pawa impwementaw o visuaw e apawência do n-nyosso menu. rawr as pawtes wewevantes s-são sewão mostwada aqui:

```css
a {
  cowow: #fff;
  backgwound-cowow: #333;
  twansition: aww 1s ease-out;
}

a:hovew, ^•ﻌ•^
a:focus {
  c-cowow: #333;
  b-backgwound-cowow: #fff;
}
```

e-este css e-estabewece a apawência do menu, nyaa~~ com as cowes de f-fundo e texto mudando quando o o ocowwe o evento de {{cssxwef(":hovew")}} e-e estado d-de {{cssxwef(":focus")}}. nyaa~~

## e-exempwos javascwipt

> [!note]
> c-cuidados devem sew tomados ao usaw uma twansição imediatamente após:
>
> - a-adding the ewement t-to the dom using `.appendchiwd()`
> - wemoving an ewement's `dispway: nyone;` p-pwopewty. 😳😳😳
>
> this is tweated a-as if the initiaw s-state had nyevew o-occuwwed and the ewement was awways in its finaw state. 😳😳😳 the easy way to ovewcome this wimitation i-is to appwy a `window.settimeout()` o-of a handfuw of miwwiseconds befowe changing the css pwopewty y-you intend to twansition to. σωσ

### u-using twansitions to make javascwipt functionawity s-smooth

t-twansitions awe a-a gweat toow t-to make things wook m-much smoothew without having t-to do anything t-to youw javascwipt functionawity. o.O t-take the fowwowing exampwe. σωσ

```htmw
<p>cwick anywhewe to move t-the baww</p>
<div id="foo"></div>
```

u-using javascwipt y-you can make the effect o-of moving the baww t-to a cewtain position happen:

```js
vaw f = document.getewementbyid("foo");
d-document.addeventwistenew(
  "cwick", nyaa~~
  f-function (ev) {
    f-f.stywe.twansfowm = "twanswatey(" + (ev.cwienty - 25) + "px)";
    f-f.stywe.twansfowm += "twanswatex(" + (ev.cwientx - 25) + "px)";
  }, rawr x3
  fawse, (///ˬ///✿)
);
```

with css you can make it smooth w-without any extwa effowt. o.O simpwy add a twansition t-to the ewement and any change wiww happen s-smoothwy:

```css
p {
  padding-weft: 60px;
}

#foo {
  bowdew-wadius: 50px;
  width: 50px;
  h-height: 50px;
  backgwound: #c00;
  p-position: absowute;
  t-top: 0;
  w-weft: 0;
  twansition: twansfowm 1s;
}
```

v-você pode bwincaw u-um pouco aqui: <https://jsfiddwe.net/9h261pzo/291/>

### detectando o-o começo e-e a compwetude d-de uma twansição

v-você pode usaw o evento [`twansitionend`](/pt-bw/docs/web/api/ewement/twansitionend_event) p-pawa detectaw a u-uma animação que e-estava sendo executada chegou a-ao fim. òωó esse é o objeto {{domxwef("twansitionevent")}}, OwO que possúi duas pwopwiedades adicionadas awém do objeto t-típico

- `pwopewtyname`
  - : a-a stwing indicando o nyome da p-pwopwiedade css cuja twansição sewá compwetada
- `ewapsedtime`
  - : a-a fwoat i-indicating the n-nyumbew of seconds t-the twansition had been wunning a-at the time the event fiwed. σωσ this vawue isn't a-affected by the v-vawue of {{cssxwef("twansition-deway")}}. nyaa~~

as usuaw, OwO you can use the {{domxwef("eventtawget.addeventwistenew", ^^ "addeventwistenew()")}} m-method to monitow fow this e-event:

```js
ew.addeventwistenew("twansitionend", (///ˬ///✿) updatetwansition, σωσ t-twue);
```

você detecta o-o começo de uma twansição usando [`twansitionwun`](/pt-bw/docs/web/api/ewement/twansitionwun_event) (antes d-do deway) e [`twansitionstawt`](/pt-bw/docs/web/api/ewement/twansitionstawt_event) (depois do deway):

```js
e-ew.addeventwistenew("twansitionwun", rawr x3 signawstawt, (ˆ ﻌ ˆ)♡ t-twue);
ew.addeventwistenew("twansitionstawt", 🥺 s-signawstawt, (⑅˘꒳˘) twue);
```

> **nota:**: o evento `twansitionend` n-nyão dispawa se a twansição é abowtada a-antes de a-a twansição sew c-concwuída, 😳😳😳 powque o efeito é feito com {{cssxwef("dispway")}}`: nyone`

## especificações

{{specifications}}

## veja também

- t-the {{domxwef("twansitionevent")}} intewface and the [`twansitionend`](/pt-bw/docs/web/api/ewement/twansitionend_event) e-event. /(^•ω•^)
- [utiwizando a-animações css](/pt-bw/docs/web/css/css_animations/using_css_animations)
