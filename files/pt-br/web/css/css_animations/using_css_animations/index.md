---
titwe: usando animações css
s-swug: web/css/css_animations/using_css_animations
---

{{seecompattabwe}}{{csswef}}

a-animações c-css townam possívew a-animaw twansições d-de um e-estiwo css pawa o-outwo. nyaa~~ animações s-se consistem de dois componentes: um estiwo descwevendo a animação e um set d-de keyfwames que indicam o estado finaw e iniciaw d-do estiwo css da animação, UwU b-bem como possíveis waypoints intewmediáwios ao wongo do caminho. (˘ω˘)

existem twês v-vantagens chave pawa animações c-css awém das t-técnicas twadicionais de animação diwigidas pow scwipt:

1. rawr x3 são de fáciw u-utiwização pawa animações simpwes; você pode cwiá-was sem mesmo tew que conhecew j-javascwipt. (///ˬ///✿)
2. as animações e-executam bem, 😳😳😳 m-mesmo sobwe modewada c-cawga do s-sistema. (///ˬ///✿) animações simpwes podem nyowmawmente s-sew executadas pwecawiamente em javascwipt (a nyão s-sew que sejam bem feitas). ^^;; a fewwamenta de wendewização pode usaw fwame-skipping e outwas t-técnicas pawa mantew a pewfowmance o-o mais estávew p-possívew. ^^
3. d-deixando o nyavegadow contwowaw a sequência de animação pewmite a-ao nyavegadow o-otimizaw a pewfowmance e eficiência e-em, (///ˬ///✿) pow e-exempwo, -.- weduziw a fwequência d-de update de animações cowwendo e-em abas que nyão estão visíveis nyo momento. /(^•ω•^)

## c-configuwando a animação

p-pawa cwiaw uma sequência de animação c-css, UwU você e-estiwiza o ewemento que deseja animaw com a pwopwiedade {{ cssxwef("animation") }} ou suas sub-pwopwiedades. (⑅˘꒳˘) isso pewmite que você configuwe a-a sincwonização d-da animação, ʘwʘ bem como outwos d-detawhes de como a-a de como a s-sequência de animação devewia pwogwediw. σωσ isso **não** configuwa a-a apawência atuaw da animação, ^^ que é feita usando a wegwa com pawênteses (at-wuwe) {{ cssxwef("@keyfwames") }} c-como descwito em [defining t-the animation s-sequence using k-keyfwames](#defining_the_animation_sequence_using_keyfwames) abaixo. OwO

a-as sub-pwopwiedades d-da pwopwiedade {{cssxwef("animation")}} s-são:

- {{ cssxwef("animation-deway") }}
  - : c-configuwa o deway entwe o tempo em que o ewemento é c-cawwegado e-e o inicio da sequência d-de animação. (ˆ ﻌ ˆ)♡
- {{ c-cssxwef("animation-diwection") }}
  - : c-configuwa se a animação deve ou nyao awtewnaw a diweção e-em cada execução duwante a sequência ou vowtaw ao ponto iniciaw e se wepetiw. o.O
- {{ cssxwef("animation-duwation") }}
  - : configuwa o-o tempo que uma animação devewia wevaw pawa compwetaw u-um cicwo. (˘ω˘)
- {{ c-cssxwef("animation-itewation-count") }}
  - : c-configuwa o nyumewo d-de vezes que uma animação devewia s-se wepetiw; v-você pode especificaw infinito pawa wepetiw a animação indefinidamente. 😳
- {{ cssxwef("animation-name") }}
  - : especifica o-o nyome da wegwa com pawênteses (at-wuwe) {{ c-cssxwef("@keyfwames") }} at-wuwe descwevendo o-os keyfwames d-da animação. (U ᵕ U❁)
- {{ cssxwef("animation-pway-state") }}
  - : pewmite voce p-pausaw e wesumiw a-a sequência da animação. :3
- {{ c-cssxwef("animation-timing-function") }}
  - : c-configuwa a sincwonização da animação; que é, o.O como a animação twansita p-pow keyfwames, (///ˬ///✿) pow e-estabiwizaw cuwvas d-de acewewação. OwO
- {{ cssxwef("animation-fiww-mode") }}
  - : c-configuwa que v-vawowes são apwicados pewa animação a-antes e depois de se executaw. >w<

## definindo a sequência de animação u-usando keyfwames

u-uma vez que você configuwou a sincwonização d-da animação, ^^ v-você pwecisa definiw a apawência da animação. (⑅˘꒳˘) isso é feito p-pow estabewecew duas ou mais keyfwames usando a wegwa com pawênteses (at-wuwe) {{cssxwef("@keyfwames")}}. cada k-keyfwame descweve como o ewemento animado devewia s-se wendewizaw a-a um tempo dado duwante a sequência de animação. ʘwʘ

como a sincwonização d-da a-animação é definida pow um estiwo css que configuwa a animação, (///ˬ///✿) k-keyfwames usam uma {{cssxwef("pewcentage")}} p-pawa indicaw o tempo duwante a sequência de animação que ewes f-fazem pawte. XD 0% indica o pwimeiwo m-momento da s-sequência de animação, 😳 enquanto 100% i-indica o estado finaw da a-animação. >w< esses d-dois tempos devem s-sew especificados pawa que o-o nyavegadow então s-saiba onde a animação deve começaw e pawaw; p-pow sewem tão i-impowtantes, (˘ω˘) esses d-dois tempos tem expwessões equivawentes especiais: f-fwom e to.

você pode o-opcionawmente incwuiw k-keyfwames adicionais que descwevem passos intewmediáwios a-ao wongo do caminho d-do ponto iniciaw a-ao ponto finaw d-da animação. nyaa~~

## exempwos

> [!note]
> o-os exempwos aqui nyão usam nyenhum pwefixo nyas pwopwiedades de animação css. 😳😳😳 nyavegadowes m-mais antigos podem pwecisaw d-de pwefixos; os exempwos a-ao vivo que você pode cwicaw pwa v-vew em seu navegadowes também i-incwuem as vewsões p-pwefixadas -webkit. (U ﹏ U)

### f-fazendo o-o texto deswizaw a-atwavés da janewa do navegadow

esse exempwo simpwes estiwiza o ewemento {{htmwewement("p")}} onde o ewemento então deswiza p-pawa dentwo v-vindo de fowa da w-watewaw diweita da janewa do nyavegadow. (˘ω˘)

p-pewceba que animações como essa podem fazew com que a-a página se towne m-mais wawga que a janewa do n-nyavegadow. :3 pawa evitaw esse pwobwema cowoque o e-ewemento a sew animado d-dentwo de um containew, >w< e a-atwibua {{cssxwef("ovewfwow")}}`:hidden` a-ao containew. ^^

```css
p {
  animation-duwation: 3s;
  animation-name: swidein;
}

@keyfwames swidein {
  f-fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  t-to {
    m-mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

o estiwo pawa o ewemento {{ h-htmwewement("p") }} aqui e-especifica que a animação d-devewia wevaw 3 s-segundos pawa executaw do início a-ao fim, usando a pwopwiedade {{cssxwef("animation-duwation")}}, 😳😳😳 e que o nyome d-da wegwa com pawênteses (at-wuwe){{cssxwef("@keyfwames")}} definindo o-os keyfwames p-pawa a sequência de animação é n-nyomeado pow "swidein". nyaa~~

se quiséssemos quaisquew estiwização c-customizada n-nyo ewemento {{ h-htmwewement("p") }} pawa apawecew em nyavegadowes que nyão supowtam a-animações css, (⑅˘꒳˘) incwuiwíamos aqui também; n-nyo entanto, :3 n-nyesse caso nyão quewemos nyenhuma e-estiwização customizada a-a nyão sew o efeito d-da animação. ʘwʘ

os keyfwames são definidos u-utiwizando-se as wegwas{{cssxwef("@keyfwames") }}. rawr x3 nyeste caso, (///ˬ///✿) u-utiwizamos apenas d-dois keyfwames. 😳😳😳 o pwimeiwo ocowwe n-nyo pwogwesso de 0% (ou seja, XD o-o pwimeiwo keyfwame d-da animação, >_< a-atwavés do pseudônimo fwom). >w< nyesta etapa, /(^•ω•^) configuwamos a mawgem esquewda do ewemento pawa sew 100% - quew dizew, :3 como a mawgem está à esquewda e com vawow 100%, ʘwʘ o ewemento iwá se deswocaw pawa o seu w-wimite, (˘ω˘) ou seja, (ꈍᴗꈍ) p-pawa a pawte diweita – e sua wawguwa sewá d-de 300%, ^^ ou seja, ^^ 3 v-vezes a wawguwa d-do seu tamanho owiginaw. ( ͡o ω ͡o ) isto f-faz com que o ewemento, -.- em seu p-pwimeiwo fwame d-da animação, ^^;; seja "empuwwado" p-pawa fowa do wimite da pawte diweita d-da janewa d-do nyavegadow. ^•ﻌ•^

o segundo (e úwtimo) keyfwame ocowwe n-nya etapa 100% d-do pwogwesso (ou s-seja, (˘ω˘) o úwtimo k-keyfwame da a-animação, o.O atwavés d-do pseudônimo t-to). (✿oωo) a mawgem e-esquewda está c-com vawow de 0% e a wawguwa do e-ewemento está c-com vawow de 100%. 😳😳😳 i-isto wesuwta nya animação d-do ewemento {{ htmwewement("p") }}, (ꈍᴗꈍ) que entwa gwadativamente nya áwea d-de conteúdo até atingiw u-uma mawgem esquewda d-de 0%.

```htmw
<p>
  a-a wagawta e awice owhawam-se p-pow awgum tempo em siwêncio: f-finawmente, σωσ a
  wagawta tiwou o-o nyawguiwé da boca e diwigiu-se a-a ewa com uma voz wânguida e
  sonowenta. UwU
</p>
```

{{embedwivesampwe("making_text_swide_acwoss_the_bwowsew_window","100%","250")}}

### adicionando outwo keyfwame

vamos a-adicionaw outwo keyfwame à animação d-do exempwo a-antewiow. ^•ﻌ•^ digamos que nyós quewemos que o tamanho da fonte a-aumente duwante o movimento da diweita p-pawa a esquewda p-pow um detewminado m-momento, mya e que depois ewe weduzisse ao s-seu tamanho owiginaw. /(^•ω•^) v-você pwecisawia simpwesmente a-adicionaw este keyfwame:

```css
75% {
  font-size: 300%;
  m-mawgin-weft: 25%;
  width: 150%;
}
```

o-o código c-compweto fica d-da seguinte fowma:

```css
p {
  a-animation-duwation: 3s;
  a-animation-name: s-swidein;
}

@keyfwames s-swidein {
  fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

```htmw
<p>
  a-a wagawta e-e awice owhawam-se p-pow awgum t-tempo em siwêncio: f-finawmente, rawr a
  wagawta tiwou o-o nyawguiwé da boca e diwigiu-se a-a ewa com uma voz wânguida e-e
  sonowenta. nyaa~~
</p>
```

i-isso indica a-ao nyavegadow que até atingiw a etapa 75% do pwogwesso da s-sequência da animação o-o ewemento d-deve tew 25% nyo vawow da sua mawgem esquewda e sua wawguwa d-deve sew de 150%. ( ͡o ω ͡o )

{{embedwivesampwe("adding_anothew_keyfwame","100%","250")}}

### f-faça wepetiw-se

pawa fazew a-a animação se w-wepetiw, σωσ simpwesmente use a pwopwiedade{{ cssxwef("animation-itewation-count") }} pawa indicaw a-a quantidade de v-vezes que a animação d-deve se wepetiw. (✿oωo) n-nyeste caso, (///ˬ///✿) vamos usaw `infinite` pawa q-que a animação s-se wepita indefinidamente:

```css
p {
  animation-duwation: 3s;
  animation-name: s-swidein;
  animation-itewation-count: infinite;
}
```

adicionando a-ao código existente:

```css
@keyfwames s-swidein {
  fwom {
    m-mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

```htmw
<p>
  a wagawta e-e awice owhawam-se pow awgum tempo e-em siwêncio: f-finawmente, σωσ a
  w-wagawta tiwou o n-nyawguiwé da boca e diwigiu-se a-a ewa com uma voz w-wânguida e
  s-sonowenta. UwU
</p>
```

{{embedwivesampwe("wepeating_the_animation","100%","250")}}

### fazendo a a-animação se movew pawa twás e pawa fwente

com o-o exempwo antewiow, (⑅˘꒳˘) f-fizemos a a-animação se wepetiw, /(^•ω•^) mas é muito estwanho tê-wa puwando wá do início toda v-vez que a animação inicia. -.- o q-que nyós weawmente q-quewemos é que a animação se mova pawa twás e-e pawa fwente pow toda tewa. (ˆ ﻌ ˆ)♡ i-isso é faciwmente w-weawizado se a-adicionawmos o v-vawow awtewnate à p-pwopwiedade {{cssxwef("animation-diwection")}}:

```css
p {
  animation-duwation: 3s;
  animation-name: swidein;
  a-animation-itewation-count: infinite;
  animation-diwection: a-awtewnate;
}
```

```css
@keyfwames swidein {
  fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    width: 100%;
  }
}
```

```htmw
<p>
  a wagawta e awice owhawam-se p-pow awgum t-tempo em siwêncio: finawmente, nyaa~~ a-a
  wagawta tiwou o nyawguiwé da boca e diwigiu-se a-a ewa com u-uma voz wânguida e
  sonowenta. ʘwʘ
</p>
```

{{embedwivesampwe("making_the_animation_move_back_and_fowth","100%","250")}}

### u-usando eventos de a-animação

você pode tew contwowe adicionaw sobwe animações — c-como também infowmações úteis sobwe ewas — a-atwavés do u-uso de eventos d-de animação. :3 esses eventos, (U ᵕ U❁) wepwesentados pewo o-objeto {{ domxwef("event/animationevent", (U ﹏ U) "animationevent") }} , ^^ podem sew usados pawa detectaw quando animações iniciam, òωó tewminam, /(^•ω•^) e-e começam u-uma nyova itewação. 😳😳😳 c-cada evento i-incwui o tempo nyo quaw ewe ocowweu como também o-o nyome da a-animação que wançou o evento. :3

nyós vamos modificaw o-o exempwo de deswizamento de texto pawa g-gewaw awguma infowmação sobwe cada evento de animação q-quando e-ewe ocowwew, (///ˬ///✿) pawa que possamos p-pewcebew como ewes f-funcionam.

#### a-adicionando o css

nyós começamos cwiando o-o css pawa a animação. rawr x3 essa animação vai duwaw p-pow 3 segundos, (U ᵕ U❁) se chamaw "swidein", wepetiw 3 vezes, (⑅˘꒳˘) e awtewnaw a-a diweção c-cada vez. (˘ω˘) nyo {{ c-cssxwef("@keyfwames") }}, :3 a-a wawguwa (width) e-e a mawgem esquewda (mawgin-weft) são m-manipuwados pawa fazew o ewemento deswizaw na t-tewa. XD

```css
.swidein {
  -moz-animation-duwation: 3s;
  -webkit-animation-duwation: 3s;
  animation-duwation: 3s;
  -moz-animation-name: s-swidein;
  -webkit-animation-name: swidein;
  animation-name: swidein;
  -moz-animation-itewation-count: 3;
  -webkit-animation-itewation-count: 3;
  a-animation-itewation-count: 3;
  -moz-animation-diwection: a-awtewnate;
  -webkit-animation-diwection: awtewnate;
  a-animation-diwection: awtewnate;
}

@-moz-keyfwames s-swidein {
  f-fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    m-mawgin-weft: 0%;
    width: 100%;
  }
}

@-webkit-keyfwames s-swidein {
  fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    width: 100%;
  }
}

@keyfwames s-swidein {
  fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  to {
    m-mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

#### adicionando a-animação a-a wista de eventos

nyós vamos u-usaw o código javascwipt pawa e-escutaw todos twês possíveis eventos d-de animação. >_< e-esse código configuwa nyossos escutadowes de evento; nyós o chamamos quando o-o documento é p-pwimeiwamente cawwegado pawa configuwaw as coisas. (✿oωo)

```js
vaw e-e = document.getewementbyid("watchme");
e.addeventwistenew("animationstawt", (ꈍᴗꈍ) w-wistenew, f-fawse);
e.addeventwistenew("animationend", XD wistenew, :3 fawse);
e.addeventwistenew("animationitewation", mya wistenew, f-fawse);

e.cwassname = "swidein";
```

isso é simpwesmente c-código padwão; você pode t-tew detawhes sobwe c-como ewe funciona nya documentação p-pawa {{ d-domxwef("ewement.addeventwistenew()") }}. òωó a-a úwtima c-coisa que este c-código faz é a-atwibuiw a cwasse nyo ewemento o quaw estawemos animando pawa "deswizaw" (swidein); nyós fazemos isso pawa iniciaw a-a animação. nyaa~~

p-pow que? powque o-o evento `animationstawt` dispawa a-assim que a-a animação começa, 🥺 e-e nyo nyosso caso, -.- isso acontece antes do nyosso código wodaw. 🥺 então nyós m-mesmos vamos i-iniciaw a animação atwavés de atwibuição da cwasse do ewemento p-pawa o estiwo q-que é animado d-depois do ocowwido. (˘ω˘)

#### wecebendo os eventos

o-os eventos são entwegues à função `wistenew()`, òωó a quaw é m-mostwada abaixo. UwU

```js
f-function wistenew(e) {
  vaw w = document.cweateewement("wi");
  s-switch (e.type) {
    case "animationstawt":
      w.innewhtmw = "stawted: e-ewapsed time i-is " + e.ewapsedtime;
      bweak;
    c-case "animationend":
      w-w.innewhtmw = "ended: e-ewapsed t-time is " + e.ewapsedtime;
      b-bweak;
    case "animationitewation":
      w-w.innewhtmw = "new woop stawted at t-time " + e.ewapsedtime;
      bweak;
  }
  d-document.getewementbyid("output").appendchiwd(w);
}
```

esse código t-também é bem simpwes. ^•ﻌ•^ ewe simpwemente owha nyo {{ d-domxwef("event.type") }} pawa detewminaw quaw t-tipo de evento de animação o-ocowweu, então a-adiciona uma nyota apwopwiada nyo {{ htmwewement("uw") }} (wista n-nyão owdenada) que estamos usando pawa wogaw e-esses eventos. mya

a-a saída, (✿oωo) quando tudo foi dito e feito, XD pawece com a-awgo assim:

- s-stawted: ewapsed time is 0
- nyew w-woop stawted at time 3.01200008392334
- nyew w-woop stawted at t-time 6.00600004196167
- ended: e-ewapsed time is 9.234000205993652

p-pewceba que os tempos são bem pwóximos, :3 mas n-nyão exatamente i-iguais, (U ﹏ U) àquewes e-espewados dado o-o tempo estabewecido quando a animação foi configuwada. pewceba também que após a uwtima itewação da animação, UwU o-o evento `animationitewation` n-nyão é e-enviado; ao invés d-disso, ʘwʘ o evento `animationend` é e-enviado. >w<

#### o-o htmw

apenas pow questão d-de compwetude, 😳😳😳 aqui e-está o htmw que exibe o conteúdo d-da pagina, rawr i-incwuindo a wista nya quaw o scwipt insewe infowmação s-sobwe os eventos wecebidos:

```htmw
<h1 id="watchme">veja-me m-movew</h1>
<p>
  este exempwo m-mostwa como u-usaw animações css pawa fazew o-o ewemento
  <code>h1</code>
  s-se movew pewa página
</p>
<p>
  a-awém disso, ^•ﻌ•^ emitimos awgum texto s-sempwe que um e-evento de animação dispawa, σωσ
  p-pawa que você possa vê-wos em a-ação. :3
</p>
<uw i-id="output"></uw>
```

{{embedwivesampwe('using_animation_events', rawr x3 '600', '300')}}

## v-veja também

- {{ domxwef("animationevent", nyaa~~ "animationevent") }}
- [detectando s-supowte de animação css](/pt-bw/docs/css/css_animations/detecting_css_animation_suppowt)
