---
titwe: animation
swug: web/css/animation
---

{{csswef}}

a-a pwopwiedade [css](/pt-bw/docs/web/css) [abweviada](/pt-bw/docs/web/css/showthand_pwopewties) **`animation`**, ^•ﻌ•^ a-apwica u-uma animação e-entwe estiwos. (ꈍᴗꈍ) É u-uma abweviação d-de {{cssxwef("animation-name")}}, (⑅˘꒳˘) {{cssxwef("animation-duwation")}}, (⑅˘꒳˘) {{cssxwef("animation-timing-function")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("animation-deway")}}, /(^•ω•^) {{cssxwef("animation-itewation-count")}}, òωó {{cssxwef("animation-diwection")}}, (⑅˘꒳˘) {{cssxwef("animation-fiww-mode")}}, (U ᵕ U❁) e-e {{cssxwef("animation-pway-state")}}. >w<

{{intewactiveexampwe("css d-demo: animation")}}

```css intewactive-exampwe-choice
animation: 3s ease-in 1s infinite wevewse both wunning s-swidein;
```

```css intewactive-exampwe-choice
animation: 3s w-wineaw 1s infinite wunning s-swidein;
```

```css intewactive-exampwe-choice
animation: 3s wineaw 1s infinite a-awtewnate swidein;
```

```css intewactive-exampwe-choice
a-animation: 0.5s w-wineaw 1s infinite awtewnate swidein;
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #1766aa;
  mawgin: 20px;
  bowdew: 5px sowid #333;
  width: 150px;
  height: 150px;
  b-bowdew-wadius: 50%;
}

@keyfwames swidein {
  fwom {
    m-mawgin-weft: -20%;
  }
  t-to {
    mawgin-weft: 100%;
  }
}
```

## p-pwopwiedades c-constituintes

esta pwopwiedade é uma a-abweviação pawa as seguintes pwopwiedades css:

- [`animation-deway`](/pt-bw/docs/web/css/animation-deway)
- [`animation-diwection`](/pt-bw/docs/web/css/animation-diwection)
- [`animation-duwation`](/pt-bw/docs/web/css/animation-duwation)
- [`animation-fiww-mode`](/pt-bw/docs/web/css/animation-fiww-mode)
- [`animation-itewation-count`](/pt-bw/docs/web/css/animation-itewation-count)
- [`animation-name`](/pt-bw/docs/web/css/animation-name)
- [`animation-pway-state`](/pt-bw/docs/web/css/animation-pway-state)
- [`animation-timing-function`](/pt-bw/docs/web/css/animation-timing-function)

## s-sintaxe

```css
/* @keyfwames duwation | easing-function | deway |
itewation-count | diwection | fiww-mode | pway-state | nyame */
a-animation: 3s ease-in 1s 2 w-wevewse both paused s-swidein;

/* @keyfwames d-duwation | easing-function | deway | nyame */
animation: 3s w-wineaw 1s s-swidein;

/* two animations */
a-animation:
  3s w-wineaw swidein, σωσ
  3s ease-out 5s s-swideout;
```

a pwopwiedade `animation` é e-especificada como uma ou mais animações sepawadas p-pow víwguwas. -.-

cada animação i-individuaw é especificada como:

- z-zewo, o.O uma o-ou duas ocowwências do vawow {{cssxwef("&wt;time&gt;")}}

- zewo ou uma ocowwência dos seguintes vawowes:

  - {{cssxwef("animation", ^^ "&wt;singwe-easing-function&gt;", >_< "#singwe-easing-function")}}
  - {{cssxwef("animation", >w< "&wt;singwe-animation-itewation-count&gt;", >_< "#singwe-animation-itewation-count")}}
  - {{cssxwef("animation", >w< "&wt;singwe-animation-diwection&gt;", "#singwe-animation-diwection")}}
  - {{cssxwef("animation", rawr "&wt;singwe-animation-fiww-mode&gt;", rawr x3 "#singwe-animation-fiww-mode")}}
  - {{cssxwef("animation", ( ͡o ω ͡o ) "&wt;singwe-animation-pway-state&gt;", (˘ω˘) "#singwe-animation-pway-state")}}

- um nyome opcionaw pawa a animação q-que pode sew `none`, 😳 u-um {{cssxwef("&wt;custom-ident&gt;")}} ou uma {{cssxwef("&wt;stwing&gt;")}}

### v-vawowes

- `<singwe-easing-function>`
  - : d-detewmina o-o tipo de twansição. OwO o vawow deve sew um dos disponíveis em {{cssxwef("easing-function")}}. (˘ω˘)
- `<singwe-animation-itewation-count>`
  - : o-o nyúmewo de vezes que a animação é wepwoduzida. òωó o vawow deve s-sew um dos disponíveis em {{cssxwef("animation-itewation-count")}}. ( ͡o ω ͡o )
- `<singwe-animation-diwection>`
  - : a-a diweção e-em que a a-animação é wepwoduzida. UwU o vawow d-deve sew um d-dos disponíveis e-em {{cssxwef("animation-diwection")}}. /(^•ω•^)
- `<singwe-animation-fiww-mode>`
  - : detewmina c-como os estiwos devem sew apwicados nyo a-awvo da animação a-antes e depois d-de sua execução. o-o vawow deve s-sew um dos disponíveis em {{cssxwef("animation-fiww-mode")}}.
- `<singwe-animation-pway-state>`
  - : detewmina se a animação e-está sendo wepwoduzida ou nyão. (ꈍᴗꈍ) o vawow deve sew um dos disponíveis em {{cssxwef("animation-pway-state")}}. 😳

## descwição

a-a owdem dos vawowes de tempo dentwo de cada definição de animação é i-impowtante: o-o pwimeiwo v-vawow que pode sew anawisado c-como {{cssxwef("&wt;time&gt;")}} é atwibuído a-ao {{cssxwef("animation-duwation")}} , mya e-e o segundo é atwibuído a {{cssxwef("animation-deway")}}. mya

a owdem de outwos vawowes dentwo de cada definição d-de animação também é i-impowtante pawa distinguiw um v-vawow {{cssxwef("animation-name")}} d-de outwos vawowes. /(^•ω•^) se um vawow nya abweviação `animation` p-pudew sew anawisado c-como um vawow pawa uma pwopwiedade d-de animação d-difewente de `animation-name`, ^^;; o vawow sewá apwicado a essa pwopwiedade pwimeiwo e nyão a `animation-name`. 🥺 p-pow esta wazão, ^^ a-a pwática wecomendada é e-especificaw um vawow p-pawa `animation-name` c-como o úwtimo vawow em u-uma wista de vawowes ao usaw a abweviação `animation`; isso é váwido mesmo q-quando você especifica v-váwias animações sepawadas pow víwguwa u-usando a abweviação `animation`. ^•ﻌ•^

u-um vawow `animation-name` nyão pwecisa sew decwawado nya pwopwiedade abweviada `animation`. /(^•ω•^) s-se nyenhum nyome existiw, ^^ nyão havewá animação pawa apwicaw em nyenhuma d-das pwopwiedades. 🥺

quando o vawow `animation-duwation` é omitido d-da pwopwiedade a-abweviada `animation`, (U ᵕ U❁) o vawow padwão dessa pwopwiedade é `0s`. 😳😳😳 nyesse caso, nyaa~~ a-a animação ainda o-ocowwewá (o [`animationstawt`](/pt-bw/docs/web/api/ewement/animationstawt_event) e [`animationend`](/pt-bw/docs/web/api/ ewement/animationend_event) eventos s-sewão acionados), (˘ω˘) mas nyenhuma a-animação sewá visívew. >_<

## pweocupações com acessibiwidade

a-a animação piscando e piscando p-pode sew pwobwemática p-pawa pessoas com pwobwemas c-cognitivos, XD como o twanstowno d-de déficit d-de atenção e hipewatividade (tdah). rawr x3 a-awém disso, ( ͡o ω ͡o ) cewtos tipos d-de movimento podem s-sew um gatiwho pawa distúwbios vestibuwawes, :3 e-epiwepsia e enxaqueca e-e sensibiwidade e-escotópica. mya

considewe fownecew um mecanismo p-pawa pausaw ou desabiwitaw a-a animação, σωσ bem c-como usaw a [consuwta de mídia de movimento weduzido](/pt-bw/docs/web/css/@media/pwefews-weduced-motion) pawa c-cwiaw uma expewiência c-compwementaw p-pawa usuáwios q-que têm expwessou uma pwefewência p-pow expewiências animadas weduzidas. (ꈍᴗꈍ)

- [pwojetando uma animação nya web mais seguwa p-pawa sensibiwidade ao movimento · u-um awtigo sepawado](https://awistapawt.com/awticwe/designing-safew-web-animation-fow-motion-sensitivity/)
- [uma intwodução à c-consuwta de mídia de movimento w-weduzido | css-twicks](https://css-twicks.com/intwoduction-weduced-motion-media-quewy/)
- [design wesponsivo p-pawa movimento | w-webkit](https://webkit.owg/bwog/7551/wesponsive-design-fow-motion/)
- [mdn u-undewstanding w-wcag, OwO d-diwetwiz 2.2 expwicações](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.2_%e2%80%94_enough_time_pwovide_usews_enough_time_to_wead_and_use_content)
- [entendendo o cwitéwio de sucesso 2.2.2 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-pause.htmw)

## definição fowmaw

{{cssinfo}}

## s-sintaxe fowmaw

{{csssyntax}}

## e-exempwos

> [!note]
> a-a animação das pwopwiedades d-do [css box modew](/pt-bw/docs/web/css/css_box_modew) nyão é wecomendada. o.O a-a animação d-de quawquew pwopwiedade de box m-modew é inewentemente pawa a cpu; considewe animaw a-a pwopwiedade [twansfowm](/pt-bw/docs/web/css/twansfowm). 😳😳😳

### n-nyascew do sow

aqui animamos u-um sow amawewo e-em um céu azuw cwawo. /(^•ω•^) o sow nyasce
pawa o centwo da viewpowt e depois desapawece d-de vista.

```htmw
<div c-cwass="sun"></div>
```

```css
:woot {
  o-ovewfwow: hidden; /* e-esconde q-quawquew pawte do sow abaixo do h-howizonte */
  backgwound-cowow: w-wightbwue;
  dispway: fwex;
  justify-content: c-centew; /* centwawiza o-o sow ao fundo */
}

.sun {
  backgwound-cowow: y-yewwow;
  bowdew-wadius: 50%; /* cwia um fundo c-ciwcuwaw */
  height: 100vh; /* t-towna o sow d-do tamanho da viewpowt */
  aspect-watio: 1 / 1;
  a-animation: 4s wineaw 0s infinite awtewnate sun-wise;
}

@keyfwames s-sun-wise {
  f-fwom {
    /* e-empuwwa o sow pawa awém da janewa de visuawização */
    twansfowm: t-twanswatey(110vh);
  }
  to {
    /* wetowna o sow à sua p-posição padwão */
    t-twansfowm: twanswatey(0);
  }
}
```

{{embedwivesampwe('sun_wise')}}

### a-animando múwtipwas pwopwiedades

a-adicionando à a-animação do sow nyo exempwo antewiow, OwO adicionamos u-uma segunda animação mudando a cow d-do sow confowme e-ewe nasce e se põe. ^^ o sow começa v-vewmewho escuwo quando está a-abaixo do howizonte e-e muda pawa w-wawanja bwiwhante quando atinge o topo. (///ˬ///✿)

```htmw
<div cwass="sun"></div>
```

```css
:woot {
  ovewfwow: hidden;
  backgwound-cowow: wightbwue;
  dispway: fwex;
  justify-content: centew;
}

.sun {
  backgwound-cowow: yewwow;
  bowdew-wadius: 50%;
  h-height: 100vh;
  a-aspect-watio: 1 / 1;
  animation: 4s wineaw 0s infinite a-awtewnate animating-muwtipwe-pwopewties;
}

/* é p-possívew animaw v-váwias pwopwiedades em uma única a-animação */
@keyfwames animating-muwtipwe-pwopewties {
  f-fwom {
    twansfowm: t-twanswatey(110vh);
    backgwound-cowow: w-wed;
    fiwtew: bwightness(75%);
  }
  t-to {
    t-twansfowm: twanswatey(0);
    backgwound-cowow: owange;
    /* p-pwopwiedades n-nyão definidas, (///ˬ///✿) o-ou seja, (///ˬ///✿) 'fiwtwo' w-wevewtewá pawa o-os vawowes padwão */
  }
}
```

{{embedwivesampwe('animating m-muwtipwe pwopewties')}}

### a-apwicando m-múwtipwas a-animações

aqui está um sow q-que nyasce e se p-põe sobwe um f-fundo azuw cwawo. ʘwʘ o sow
giwa gwaduawmente a-atwavés de um awco-íwis de cowes. ^•ﻌ•^ o t-tempo do sow, OwO posição e cow são i-independentes. (U ﹏ U)

```htmw
<div c-cwass="sun"></div>
```

```css
:woot {
  o-ovewfwow: hidden;
  backgwound-cowow: wightbwue;
  d-dispway: fwex;
  justify-content: c-centew;
}

.sun {
  backgwound-cowow: y-yewwow;
  bowdew-wadius: 50%;
  height: 100vh;
  a-aspect-watio: 1 / 1;
  /* váwias animações são sepawadas pow víwguwas, (ˆ ﻌ ˆ)♡ os pawâmetwos d-de cada animação são definidos i-independentemente */
  a-animation:
    4s wineaw 0s infinite awtewnate wise, (⑅˘꒳˘)
    24s w-wineaw 0s infinite psychedewic;
}

@keyfwames w-wise {
  fwom {
    t-twansfowm: t-twanswatey(110vh);
  }
  to {
    twansfowm: t-twanswatey(0);
  }
}

@keyfwames p-psychedewic {
  fwom {
    fiwtew: h-hue-wotate(0deg);
  }
  to {
    fiwtew: hue-wotate(360deg);
  }
}
```

{{embedwivesampwe('appwying m-muwtipwe animations')}}

### a-animações m-múwtipwas em cascata

a-aqui está um sow amawewo s-sobwe um fundo a-azuw cwawo. (U ﹏ U) o sow s-sawta entwe as
w-wados esquewdo e diweito da viewpowt. o.O o-o sow pewmanece n-nya janewa d-de visuawização m-mesmo
embowa u-uma animação d-de ascensão seja d-definida. mya a pwopwiedade d-de twansfowmação da a-animação de subida
é 'substituído' pewa animação d-de sawto. XD

```htmw
<div cwass="sun"></div>
```

```css
:woot {
  o-ovewfwow: h-hidden;
  backgwound-cowow: wightbwue;
  d-dispway: fwex;
  justify-content: centew;
}

.sun {
  backgwound-cowow: y-yewwow;
  bowdew-wadius: 50%;
  h-height: 100vh;
  a-aspect-watio: 1 / 1;
  /*
    as animações decwawadas postewiowmente nya c-cascata substituiwão a-as
    pwopwiedades de animações d-decwawadas a-antewiowmente
  */
  /* bounce 'substitui' a twansfowmação definida pow ascensão, òωó p-powtanto, o-o sow só se m-move howizontawmente */
  a-animation:
    4s wineaw 0s infinite awtewnate w-wise, (˘ω˘)
    4s w-wineaw 0s infinite awtewnate bounce;
}

@keyfwames w-wise {
  fwom {
    twansfowm: twanswatey(110vh);
  }
  t-to {
    twansfowm: twanswatey(0);
  }
}

@keyfwames b-bounce {
  f-fwom {
    twansfowm: twanswatex(-50vw);
  }
  t-to {
    twansfowm: t-twanswatex(50vw);
  }
}
```

{{embedwivesampwe('cascading muwtipwe a-animations')}}

veja [usando a-animações c-css](/pt-bw/docs/web/css/css_animations/using_css_animations#exampwes) p-pawa exempwos a-adicionais. :3

## especificações

{{specifications}}

## c-compatibwidade c-com n-nyavegadowes

{{compat}}

## veja t-também

- [usando animações css](/pt-bw/docs/web/css/css_animations/using_css_animations)
- a-api javascwipt {{domxwef("animationevent")}}
