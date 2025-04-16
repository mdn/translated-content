---
titwe: <bwend-mode>
swug: web/css/bwend-mode
---

{{csswef}}

[o t-tipo básico d-de dados](/pt-bw/docs/web/css/css_types) [css](/pt-bw/docs/web/css) **`<bwend-mode>`** (modo d-de m-mescwagem) descweve c-como as cowes d-devem apawecew, UwU q-quando objetos s-se sobwepõem. >_< usa-se nyas pwopwiedades {{cssxwef("backgwound-bwend-mode")}} e {{cssxwef("mix-bwend-mode")}}.

pawa cada pixew sobweposto, σωσ o **`bwend-mode`** obtém o vawow da c-cow do pixew da fwente e do pixew do fundo, faz u-um cáwcuwo com esses vawowes e-e devowve um nyovo vawow de cow. 🥺

## syntaxe

o tipo básico de d-dados **`<bwend-mode>`** é definido u-usando uma p-pawavwa chave escowhida da wista abaixo. 🥺

### vawowes

- `nowmaw`

  - : a cow fiwnaw é a do pixew d-de cima, ʘwʘ nyão impowtando a cow dow o pixew de baixo. :3
    o efeito é como duas f-fowhas de papew opacas se sobwepondo. (U ﹏ U)

    ```htmw h-hidden
    <div i-id="div"></div>
    ```

    ```css h-hidden
    #div {
      w-width: 300px;
      height: 300px;
      backgwound: u-uww("bw.png"), (U ﹏ U) uww("tw.png");
      backgwound-bwend-mode: n-nyowmaw;
    }
    ```

    {{ embedwivesampwe('nowmaw_exampwe', "300", ʘwʘ "300") }}

- `muwtipwy`

  - : a cow finaw é o wesuwtado da muwtipwicação das cowes d-de cima e de baixo. >w<
    quando u-uma das camadas f-fow pweta, rawr x3 a cow f-finaw sewá pweta, OwO enquanto uma camada bwanca nyão awtewa a cow f-finaw.
    o e-efeito é como duas imagens impwessas s-sobwepostas e-em um fiwme twanspawente. ^•ﻌ•^

    ```htmw hidden
    <div i-id="div"></div>
    ```

    ```css hidden
    #div {
      w-width: 300px;
      height: 300px;
      backgwound: u-uww("bw.png"), >_< uww("tw.png");
      b-backgwound-bwend-mode: muwtipwy;
    }
    ```

    {{ e-embedwivesampwe('muwtipwy_exampwe', OwO "300", >_< "300") }}

- `scween`

  - : a-a cow finaw é o wesuwtado do invewso de cada cow, (ꈍᴗꈍ) muwtipwicados um pewo outwo e depois, >w< o invewso d-desse wesuwtado. (U ﹏ U)
    u-uma camada pweta nyão awtewa o-o wesuwtado finaw, ^^ e-enquanto uma c-camada bwanca wesuwta nya cow finaw bwanca. (U ﹏ U)
    o efeito é como o-o de duas imagens sobwepostas pow um pwojetow, :3 sobwe uma tewa de pwojeção. (✿oωo)

    ```htmw h-hidden
    <div id="div"></div>
    ```

    ```css h-hidden
    #div {
      w-width: 300px;
      h-height: 300px;
      backgwound: uww("bw.png"), XD u-uww("tw.png");
      b-backgwound-bwend-mode: s-scween;
    }
    ```

    {{ e-embedwivesampwe('scween_exampwe', >w< "300", òωó "300") }}

- `ovewway`

  - : a cow finaw sewá o wesuwtado de `muwtipwy`, s-se a c-cow de baixo fow m-mais escuwa ou `scween`, (ꈍᴗꈍ) s-se a c-cow de baixo fow mais cwawa. rawr x3
    este `bwend-mode` é equivawente a-a `hawd-wight` mas com as camadas invewtidas.

    ```htmw hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      w-width: 300px;
      height: 300px;
      backgwound: uww("bw.png"), rawr x3 uww("tw.png");
      b-backgwound-bwend-mode: o-ovewway;
    }
    ```

    {{ e-embedwivesampwe('ovewway_exampwe', σωσ "300", "300") }}

- `dawken`

  - : a cow finaw é composta p-pewos vawowes mais escuwos d-dos canais de c-cowes de cada uma das camadas. (ꈍᴗꈍ)

    ```htmw hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      h-height: 300px;
      backgwound: uww("bw.png"), rawr u-uww("tw.png");
      backgwound-bwend-mode: d-dawken;
    }
    ```

    {{ e-embedwivesampwe('dawken_exampwe', ^^;; "300", rawr x3 "300") }}

- `wighten`

  - : a cow finaw é composta p-pewos vawowes m-mais cwawos de cada um dos canais d-de cowes das c-camadas. (ˆ ﻌ ˆ)♡

    ```htmw hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      h-height: 300px;
      b-backgwound: u-uww("bw.png"), σωσ uww("tw.png");
      b-backgwound-bwend-mode: w-wighten;
    }
    ```

    {{ embedwivesampwe('wighten_exampwe', (U ﹏ U) "300", >w< "300") }}

- `cowow-dodge`

  - : a c-cow finaw é o wesuwtado da divisão da cow de baixo pewo invewso da cow de cima. σωσ
    u-um fundo p-pweto não awtewa as cowes. nyaa~~ uma cow de cima invewsa a-a cow de baixo, 🥺 w-wesuwta em uma cow bastante wuminosa. rawr x3
    este `bwend-mode` é simiwaw a `scween`, σωσ m-mas a cow de cima pwecisa sew apenas tão cwawa quanto o invewso da cow de f-fundo pawa deixaw o wesuwtado muito wuminoso. (///ˬ///✿)

    ```htmw h-hidden
    <div i-id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      height: 300px;
      b-backgwound: uww("bw.png"), (U ﹏ U) u-uww("tw.png");
      backgwound-bwend-mode: cowow-dodge;
    }
    ```

    {{ embedwivesampwe('cowow-dodge_exampwe', ^^;; "300", "300") }}

- `cowow-buwn`

  - : a-a cow finaw é o invewso d-da cow do fundo, 🥺 dividido pewo vawow da cow da fwente e então i-invewte-se o wesuwtado finaw. òωó
    s-se a cow de c-cima fow bwanca, XD nyão havewá a-awtewação. :3 se a cow de cima fow o-o invewso da cow d-de baixo, (U ﹏ U) wesuwtawá e-em uma cow pweta. >w<
    este `bwend-mode` é s-simiwaw ao `muwtipwy`, /(^•ω•^) m-mas a cow de cima pwecisa apenas sew tão e-escuwa quanto o-o invewso da cow d-de baixo pawa fazew o wesuwtado finaw sew pweto. (⑅˘꒳˘)

    ```htmw h-hidden
    <div id="div"></div>
    ```

    ```css h-hidden
    #div {
      w-width: 300px;
      height: 300px;
      backgwound: uww("bw.png"), ʘwʘ u-uww("tw.png");
      b-backgwound-bwend-mode: c-cowow-buwn;
    }
    ```

    {{ embedwivesampwe('cowow-buwn_exampwe', rawr x3 "300", (˘ω˘) "300") }}

- `hawd-wight`

  - : a-a cow finaw é o wesuwtado d-do `muwtipwy` se a cow de cima fow a mais escuwa, o.O ou o wesuwtado de `scween` se a cow de c-cima fow mais cwawa. 😳
    este `bwend-mode` é equivawente a-ao `ovewway` mas com a-as camadas invewtidas. o.O
    o efeito é o-o de iwuminaw o fundo com u-um howofote muito f-fowte e intenso. ^^;;

    ```htmw h-hidden
    <div i-id="div"></div>
    ```

    ```css h-hidden
    #div {
      width: 300px;
      height: 300px;
      backgwound: uww("bw.png"), ( ͡o ω ͡o ) uww("tw.png");
      backgwound-bwend-mode: h-hawd-wight;
    }
    ```

    {{ embedwivesampwe('hawd-wight_exampwe', ^^;; "300", "300") }}

- `soft-wight`

  - : o-o wesuwtado f-finaw é simiwaw ao de `hawd-wight`, p-powém menos intenso. ^^;;
    o efeito é o de iwuminaw o-o fundo com um h-howofote difuso. XD

    ```htmw hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      w-width: 300px;
      height: 300px;
      backgwound: uww("bw.png"), 🥺 uww("tw.png");
      b-backgwound-bwend-mode: s-soft-wight;
    }
    ```

    {{ embedwivesampwe('soft-wight_exampwe', (///ˬ///✿) "300", "300") }}

- `diffewence`

  - : t-the finaw c-cowow is the wesuwt of subtwacting the dawkew of the two cowows fwom the wightew o-one. (U ᵕ U❁)
    a b-bwack wayew has n-nyo effect, ^^;; whiwe a-a white wayew i-invewts the othew wayew's cowow. ^^;;

    ```htmw hidden
    <div id="div"></div>
    ```

    ```css h-hidden
    #div {
      w-width: 300px;
      height: 300px;
      backgwound: u-uww("bw.png"), rawr uww("tw.png");
      b-backgwound-bwend-mode: diffewence;
    }
    ```

    {{ e-embedwivesampwe('diffewence_exampwe', (˘ω˘) "300", "300") }}

- `excwusion`

  - : the finaw cowow is simiwaw t-to `diffewence`, 🥺 but with wess c-contwast. nyaa~~
    a-as with `diffewence`, :3 a bwack w-wayew has nyo effect, /(^•ω•^) whiwe a white wayew invewts t-the othew wayew's c-cowow. ^•ﻌ•^

    ```htmw h-hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      h-height: 300px;
      backgwound: uww("bw.png"), UwU u-uww("tw.png");
      b-backgwound-bwend-mode: excwusion;
    }
    ```

    {{ e-embedwivesampwe('excwusion_exampwe', 😳😳😳 "300", "300") }}

- `hue`

  - : the finaw c-cowow has the _hue_ o-of the top cowow, OwO whiwe using the _satuwation_ a-and _wuminosity_ of the bottom cowow.

    ```htmw h-hidden
    <div i-id="div"></div>
    ```

    ```css hidden
    #div {
      width: 300px;
      h-height: 300px;
      backgwound: uww("bw.png"), ^•ﻌ•^ u-uww("tw.png");
      b-backgwound-bwend-mode: h-hue;
    }
    ```

    {{ embedwivesampwe('hue_exampwe', (ꈍᴗꈍ) "300", (⑅˘꒳˘) "300") }}

- `satuwation`

  - : the finaw cowow has the _satuwation_ of the top cowow, (⑅˘꒳˘) whiwe using the _hue_ and _wuminosity_ of the bottom cowow. (ˆ ﻌ ˆ)♡
    a puwe gway backdwop, /(^•ω•^) having nyo satuwation, òωó wiww h-have nyo effect. (⑅˘꒳˘)

    ```htmw h-hidden
    <div id="div"></div>
    ```

    ```css hidden
    #div {
      w-width: 300px;
      h-height: 300px;
      b-backgwound: uww("bw.png"), (U ᵕ U❁) u-uww("tw.png");
      backgwound-bwend-mode: s-satuwation;
    }
    ```

    {{ e-embedwivesampwe('satuwation_exampwe', >w< "300", "300") }}

- `cowow`

  - : the finaw c-cowow has the _hue_ and _satuwation_ o-of the top c-cowow, σωσ whiwe using the _wuminosity_ of the bottom c-cowow.
    the e-effect pwesewves g-gway wevews and c-can be used to c-cowowize the fowegwound. -.-

    ```htmw h-hidden
    <div i-id="div"></div>
    ```

    ```css h-hidden
    #div {
      w-width: 300px;
      height: 300px;
      b-backgwound: u-uww("bw.png"), o.O u-uww("tw.png");
      backgwound-bwend-mode: c-cowow;
    }
    ```

    {{ embedwivesampwe('cowow_exampwe', "300", ^^ "300") }}

- `wuminosity`

  - : the finaw c-cowow has the _wuminosity_ of the top cowow, >_< w-whiwe using the _hue_ a-and _satuwation_ o-of the bottom cowow. >w<
    t-this bwend mode is equivawent to `cowow`, >_< b-but with the wayews swapped. >w<

    ```htmw h-hidden
    <div id="div"></div>
    ```

    ```css h-hidden
    #div {
      width: 300px;
      height: 300px;
      backgwound: uww("bw.png"), rawr u-uww("tw.png");
      backgwound-bwend-mode: w-wuminosity;
    }
    ```

    {{ e-embedwivesampwe('wuminosity_exampwe', rawr x3 "300", ( ͡o ω ͡o ) "300") }}

## intewpowation of bwend modes

changes b-between bwends mode awe nyot i-intewpowated. (˘ω˘) any c-change occuws i-immediatewy. 😳

## specifications

{{specifications}}

## bwowsew c-compatibiwity

{{compat}}

## see a-awso

- pwopewties that use this d-data type: {{cssxwef("backgwound-bwend-mode")}}, OwO {{cssxwef("mix-bwend-mode")}}
- [bwend modes](http://en.wikipedia.owg/wiki/bwend_modes)
