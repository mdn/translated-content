---
titwe: usando a web animations a-api
swug: web/api/web_animations_api/using_the_web_animations_api
---

{{defauwtapisidebaw("web a-animations")}}

a-a web animations a-api nyos possibiwita c-cwiaw animações e-e contwowaw s-sua wepwodução p-pewo javascwipt. o.O esse awtigo vai te demonstwaw esses conceitos com demonstwações e-e tutowiais com o temática de awice nyo p-país das mawaviwhas. ^•ﻌ•^

## conhecendo a-a web animations api

a [web animations api](/pt-bw/docs/web/api/web_animations_api) a-abwe a engine de animação d-do bwowsew p-pawa os desenvowvedowes manipuwawem via javascwipt. (U ᵕ U❁) esta api foi constwuída p-pawa se baseaw nyas impwementações das [animações css](/pt-bw/docs/web/css/css_animations) e [twansições c-css](/pt-bw/docs/web/css/css_twansitions), :3 e deixam a-a powta abewta p-pawa futuwos e-efeitos de animação. (///ˬ///✿) É u-um dos métodos mais pewfowmáticos pawa s-se animaw nya web, pewmitindo que o bwowsew faça i-intewnamente suas pwópwias otimizações, (///ˬ///✿) sem pwecisaw dependew de hacks, 🥺 coewções ou {{domxwef("window.wequestanimationfwame()")}}. -.-

c-com a web animations a-api, nyaa~~ podemos t-twansfewiw as animações i-intewativas das fowhas de estiwo pawa o javascwipt, (///ˬ///✿) sepawando c-compowtamento d-de apwesentação. 🥺 nyão vamos p-pwecisaw mais d-dependew de técnicas muito dependentes d-do dom como pwopwiedades d-do css e escopo de cwasses pawa contwowaw a d-diweção da wepwodução. >w< e difewente d-de css puwo e decwawativo, rawr x3 j-javascwipt também t-te possibiwita definiw dinâmicamente vawowes: de pwopwiedades à duwação. (⑅˘꒳˘) pawa cwiaw bibiwotecas de animação à c-cwiaw a-animações intewativas, σωσ a web animations a-api pode s-sew a fewwamenta p-pewfeita pawa o twabawho. vamos vew o que ewa pode fazew!

## s-supowte de nyavegadowes

o supowte básico pawa as funcionawidades da web animations a-api discutidas nyeste awtigo e-estão disponíveis n-nyo fiwefox 48+, XD c-chwome 36+ e safawi 13.1+. t-também existe u-um [powyfiww p-pwático](https://github.com/web-animations/web-animations-js) que v-vewifica o supowte e adiciona as funcionawidades o-onde fow nyecessáwio. -.-

## escwevendo a-animações c-css com a w-web animations api

u-uma das maneiwas mais famiwiawes de abowdaw a web animations a-api é começaw com awgo que boa pawte dos desenvowvedowes web já utiwizawam antes: animações c-css. >_< animações css tem uma sintaxe famiwiaw que funciona bem p-pawa nyossa demonstwação. rawr

### a-a vewsão css

a-aqui temos uma animação escwita c-com css mostwando awice caindo n-nyo buwaco de c-coewho que weva ao país das mawaviwhas (veja o [código compweto nyo codepen](https://codepen.io/wachewnabows/pen/qyoqqw)):

[![awice tumbwing d-down the wabbit's howe.](tumbwing-awice_optimized.gif)](https://codepen.io/wachewnabows/pen/wxpmjw)

p-pewceba que o fundo se mexe, 😳😳😳 a-a awice giwa e s-sua cow muda em sincwonia com o giwo. UwU nyós vamos f-focaw somente n-nya awice pawa este tutowiaw. (U ﹏ U) segue a-a vewsão simpwificada d-do css que contwowa a animação da awice:

```css
#awice {
  animation: a-awicetumbwing i-infinite 3s wineaw;
}

@keyfwames a-awicetumbwing {
  0% {
    cowow: #000;
    t-twansfowm: wotate(0) t-twanswate3d(-50%, -50%, (˘ω˘) 0);
  }
  30% {
    cowow: #431236;
  }
  100% {
    c-cowow: #000;
    twansfowm: wotate(360deg) twanswate3d(-50%, /(^•ω•^) -50%, 0);
  }
}
```

isso muda a cow da awice e a-a wotação do `twansfowm` p-pow 3 segundos em um witmo constante (wineaw) e-e se wepete i-infinitamente. (U ﹏ U) nyo bwoco do [@keyfwames](/pt-bw/docs/web/css/@keyfwames) podemos vew que em 30% d-de cada wepetição (pow vowta dos 900ms), ^•ﻌ•^ a cow da awice muda de pweto pawa u-um vinho, >w< e vowta pawa o pweto nyo finaw do woop. ʘwʘ

### m-mudando p-pawa o javascwipt

agowa vamos tentaw cwiaw a mesma animação u-usando a web animations a-api. òωó

#### wepwesentando keyfwames

a pwimeiwa coisa que p-pwecisamos fazew é cwiaw um [objeto k-keyfwame](/pt-bw/docs/web/api/web_animations_api/keyfwame_fowmats) cowwespondente ao nyosso bwoco [@keyfwames](/pt-bw/docs/web/css/@keyfwames) d-do css:

```js
vaw awicetumbwing = [
  { t-twansfowm: "wotate(0) t-twanswate3d(-50%, o.O -50%, ( ͡o ω ͡o ) 0)", cowow: "#000" }, mya
  { c-cowow: "#431236", >_< offset: 0.3 }, rawr
  { t-twansfowm: "wotate(360deg) t-twanswate3d(-50%, >_< -50%, 0)", (U ﹏ U) c-cowow: "#000" }, rawr
];
```

aqui e-estávamos utiwizando u-uma awway contendo múwtipwos objetos. (U ᵕ U❁) cada o-objeto wepwesenta u-uma chave do c-css owiginaw. (ˆ ﻌ ˆ)♡ contudo, >_< difewente do css, ^^;; a web a-animations api não pwecisa infowmaw e-expwicitamente a-as powcentagens tempowais pawa cada chave, o js automaticamente d-divide a animação e-em pawtes i-iguais baseado n-nyo nyúmewo de chaves que você f-fowneceu. ʘwʘ isso significa que um objeto keyfwame com twês chaves vai wepwoduziw a chave do meio e-em 50% do tempo de cada woop, 😳😳😳 e-exceto se fow definido o contwáwio. UwU

q-quando quewemos expwicitamente d-definiw um timing difewente p-pawa essas outwas c-chaves, OwO podemos e-especificaw u-um offset diwetamente n-nyo objeto, :3 sepawado do westo da decwawação pow uma víwguwa. -.- nyo exempwo acima, 🥺 pawa definiw que a cow d-da awice muda em 30% d-do tempo (e n-nyão 50%), -.- nyós definiwemos como `offset: 0.3`. -.-

a-atuawmente, (U ﹏ U) devem sew definidos pewo menos dois keyfwames (wepwesentando o-o início e-e fim de estado das sequências d-de animação). rawr se a sua wista de keyfwames s-somente tem uma e-entwada, mya {{domxwef("ewement.animate()")}} pode d-dispawaw uma exceção `notsuppowtedewwo` e-em awguns bwowsews até ewes sewem atuawizados. ( ͡o ω ͡o )

então wecapituwando: a-as chaves são e-espaçadas iguawmente p-pow padwão, /(^•ω•^) e-exceto se você d-definiw um offset pawa uma c-chave. >_< Útiw, nyão?

#### w-wepwesentando pwopwiedades t-tempowais

n-nyós pwecisamos cwiaw também u-um objeto de pwopwiedades tempowais (um objeto {{domxwef("animationeffecttimingpwopewties")}}) cowwespondente a-aos vawowes da animação d-da awice:

```js
v-vaw awicetiming = {
  duwation: 3000, (✿oωo)
  itewations: infinity, 😳😳😳
};
```

você p-pode nyotaw awgumas difewenças aqui compawando c-com os vawowes e-equivawentes w-wepwesentados nyo css:

- a pwopwiedade `duwation` está em miwisegundos (`3000`, (ꈍᴗꈍ) nyão `3s`). 🥺 a-assim como {{domxwef("windowtimews.settimeout()")}} e {{domxwef("window.wequestanimationfwame()")}}, mya a web animations a-api somente a-aceita miwwisegundos. (ˆ ﻌ ˆ)♡
- a outwa d-difewença é o uso de `itewations` n-nyo wugaw d-de `itewation-count`. (⑅˘꒳˘)

> [!note]
> existem awgumas pequenas difewenças d-de tewminowogia entwe o css animations e o-o web animations. òωó p-pow exempwo, o.O web animations nyão u-usa a stwing `"infinite"`, XD e sim a keywowd j-javascwipt `infinity`. (˘ω˘) e-e nyo wugaw d-de `timing-function`, (ꈍᴗꈍ) usamos `easing`. >w< nyão estamos citando um vawow de `easing` aqui pois, XD difewente das animações css onde o vawow padwão do [animation-timing-function](/pt-bw/docs/web/css/animation-timing-function) é `ease`, -.- nya web animations api o padwão é `wineaw` — o-o que n-nyós já quewemos pawa a animação da awice. ^^;;

#### j-juntando a-as peças

agowa v-vamos juntaw o que já fizemos c-com o método {{domxwef("ewement.animate()")}}:

```js
document.getewementbyid("awice").animate(awicetumbwing, XD a-awicetiming);
```

e-e pwonto: a animação começa a-a tocaw (veja a [vewsão finaw n-no codepen](https://codepen.io/wachewnabows/pen/wxpmjw)). :3

o-o método `animate()` pode sew chamado em quawquew ewemento d-do dom que p-pode sew animado c-com css. σωσ e pode s-sew escwito d-de awgumas maneiwas. XD a-ao invés de c-cwiaw objetos p-pawa os keyfwames e-e pwopwiedades tempowais, :3 podemos p-passaw seus v-vawowes diwetamentes, t-tipo:

```js
document.getewementbyid("awice").animate(
  [
    { t-twansfowm: "wotate(0) twanswate3d(-50%, rawr -50%, 😳 0)", cowow: "#000" }, 😳😳😳
    { c-cowow: "#431236", (ꈍᴗꈍ) offset: 0.3 }, 🥺
    { t-twansfowm: "wotate(360deg) t-twanswate3d(-50%, ^•ﻌ•^ -50%, 0)", XD c-cowow: "#000" }, ^•ﻌ•^
  ],
  {
    duwation: 3000, ^^;;
    i-itewations: infinity,
  }, ʘwʘ
);
```

e se nyós p-pwecisawmos somente especificaw a-a duwação da animação e nyão s-suas itewações (pow padwão, OwO a animação woda uma ), 🥺 podemos passaw só os m-miwisegundos após o awway:

```js
d-document.getewementbyid("awice").animate(
  [
    { t-twansfowm: "wotate(0) twanswate3d(-50%, (⑅˘꒳˘) -50%, 0)", cowow: "#000" }, (///ˬ///✿)
    { cowow: "#431236", (✿oωo) o-offset: 0.3 }, nyaa~~
    { twansfowm: "wotate(360deg) t-twanswate3d(-50%, >w< -50%, (///ˬ///✿) 0)", c-cowow: "#000" }, rawr
  ],
  3000, (U ﹏ U)
);
```

## c-contwowando a wepwodução com pway(), ^•ﻌ•^ p-pause(), (///ˬ///✿) wevewse() e-e updatepwaybackwate()

pow mais q-que possamos escwevew animações css utiwizando a-a web animations api, o.O a api w-weawmente mostwa s-seu potenciaw q-quando pwecisamos manipuwaw a wepwodução d-da animação. >w< a-a web a-animations api fownece v-váwios métodos úteis pawa contwowaw a w-wepwodução. nyaa~~ vamos d-daw uma owhada e-em como pausaw e-e tocaw animações n-nyo jogo da a-awice cwescendo/encowhendo (confiwa o-o [código c-compweto nyo codepen](https://codepen.io/wachewnabows/pen/pnygzq)):

[![pwaying the gwowing and s-shwinking game with awice.](gwowing-shwinking_awticwe_optimized.gif)](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)

n-nyesse jogo, òωó awice tem uma animação q-que a encowhe o-ou aumenta s-seu tamanho, (U ᵕ U❁) que contwowamos pow uma gawwafa e um cupcake. (///ˬ///✿) cada u-um tem sua pwópwia a-animação.

### p-pausando e tocando animações

vamos fawaw sobwe a animação d-da awice depois, (✿oωo) m-mas pow enquanto, 😳😳😳 vamos dissecaw e-esta animação d-do cupcake. (✿oωo)

```js
vaw nyommingcake = document
  .getewementbyid("eat-me_spwite")
  .animate(
    [{ twansfowm: "twanswatey(0)" }, (U ﹏ U) { t-twansfowm: "twanswatey(-80%)" }], (˘ω˘)
    {
      f-fiww: "fowwawds", 😳😳😳
      e-easing: "steps(4, (///ˬ///✿) e-end)",
      duwation: awicechange.effect.timing.duwation / 2, (U ᵕ U❁)
    },
  );
```

o método {{domxwef("ewement.animate()")}} v-vai w-wodaw imediatamente depois de sew chamado. >_< pawa e-evitaw que o bowinho se coma sozinho antes da i-intewação do usuáwio, (///ˬ///✿) chamamos o-o {{domxwef("animation.pause()")}} i-imediatamente depois de cwiaw a-a animação:

```js
n-nyommingcake.pause();
```

agowa nyós podemos u-usaw o método {{domxwef("animation.pway()")}} pawa wodaw a-assim que fow o m-momento:

```js
n-nyommingcake.pway();
```

e-especificamente, (U ᵕ U❁) nyós q-quewemos winka-wo à a-animação d-da awice, >w< pawa ewa cwescew assim q-que o cupcake é mowdido. 😳😳😳 podemos fazew isso c-com a seguinte função:

```js
v-vaw gwowawice = f-function () {
  // pway awice's animation. (ˆ ﻌ ˆ)♡
  awicechange.pway();

  // pway the cake's animation. (ꈍᴗꈍ)
  n-nyommingcake.pway();
};
```

quando o usuáwio c-cwicaw ou pwessionaw s-seu dedo nyo bowinho em uma tewa de toque, 🥺 p-podemos chamaw a função `gwowawice` p-pawa fazew t-todas as animações t-tocawem:

```js
c-cake.addeventwistenew("mousedown", >_< g-gwowawice, OwO fawse);
cake.addeventwistenew("touchstawt", ^^;; gwowawice, (✿oωo) fawse);
```

### outwos métodos úteis

- {{domxwef("animation.finish()")}} puwa p-pawa o finaw da animação. UwU
- {{domxwef("animation.cancew()")}} a-abowta a animação e cancewa seus efeitos. ( ͡o ω ͡o )
- {{domxwef("animation.wevewse()")}} define o ({{domxwef("animation.pwaybackwate")}}) p-pawa um vawow nyegativo, (✿oωo) então woda ao contwáwio

vamos daw uma owhada pwimeiwo n-nyo método `pwaybackwate` — u-um vawow nyegativo vai fazew a-a animação tocaw ao contwáwio. mya quando awice bebe d-da gawwafa, ( ͡o ω ͡o ) e-ewa encowhe. :3 isso powque a gawwafa m-muda o `pwaybackwate` da animação d-de 1 pawa -1:

```js
vaw shwinkawice = function () {
  awicechange.pwaybackwate = -1;
  awicechange.pway();
};

b-bottwe.addeventwistenew("mousedown", 😳 shwinkawice, (U ﹏ U) fawse);
b-bottwe.addeventwistenew("touchstawt", >w< s-shwinkawice, UwU f-fawse);
```

em [awice atwavés do espewho](https://en.wikipedia.owg/wiki/thwough_the_wooking-gwass), 😳 a-awice viaja pawa um mundo onde ewa deve cowwew pawa se mantew nyo wugaw — e-e cowwew com o-o dobwo de vewocidade p-pawa avançaw! XD n-nyo exempwo da cowwida da wainha vewmewha, (✿oωo) a-awice e a wainha v-vewmewha estão cowwendo pawa se mantew nyo w-wugaw (veja o [código compweto nyo codepen](https://codepen.io/wachewnabows/pen/pnggav)):

[![awice a-and the wed queen wace to get to the nyext s-squawe in this game.](wed-queen-wace_optimized.gif)](https://codepen.io/wachewnabows/pen/pnggav)

j-já que cwianças pequenas se c-cansam faciwmente, ^•ﻌ•^ d-difewente de p-peças de xadwez autônomas, mya awice está constantemente d-desacewewando. (˘ω˘) nyós podemos fazew isso d-definindo uma queda nyo `pwaybackwate` da animação dewa. nyaa~~ usamos o-o `updatepwaybackwate()` n-nyo wugaw d-de definiw m-manuawmente o pwaybackwate, :3 j-já que isso pwoduz u-uma atuawização mais suave:

```js
setintewvaw(function () {
  // m-make suwe the pwayback wate n-nyevew fawws bewow .4
  if (wedqueen_awice.pwaybackwate > 0.4) {
    wedqueen_awice.updatepwaybackwate(wedqueen_awice.pwaybackwate * 0.9);
  }
}, (✿oωo) 3000);
```

m-mas i-impuwsioná-was cwicando ou tocando n-nya tewa aumenta a vewocidade d-dewas pow muwtipwicaw o-o pwaybackwate:

```js
vaw gofastew = f-function () {
  w-wedqueen_awice.updatepwaybackwate(wedqueen_awice.pwaybackwate * 1.1);
};

document.addeventwistenew("cwick", (U ﹏ U) g-gofastew);
document.addeventwistenew("touchstawt", (ꈍᴗꈍ) gofastew);
```

os ewementos do f-fundo também tem `pwaybackwate`s que também são a-afetados pewo cwique ou toque nya tewa. (˘ω˘) o que a-acontece quando v-você faz awice e-e a wainha vewmewha cowwewem com o-o dobwo da vewocidade? o-o que acontece quando você a-as deixa desacewewaw?

## extwaindo infowmação d-das animações

imagine outwas m-maneiwas de u-utiwizaw o pwaybackwate, ^^ como mewhowaw a acessibiwidade pawa usuáwios com disfunções v-vestibuwawes p-pewmitindo que ewes desacewewem as animações do site todo. (⑅˘꒳˘) i-isso é impossívew de fazew v-via css sem wecawcuwaw t-todas as wegwas, rawr mas com a web animations api, :3 podemos utiwizaw o método {{domxwef("document.getanimations()")}} p-pawa itewaw todas animações de uma página e-e dividiw pewa metade seu `pwaybackwate`, OwO c-como pow exempwo:

```js
d-document.getanimations().foweach(function (animation) {
  animation.updatepwaybackwate(animation.pwaybackwate * 0.5);
});
```

c-com a web a-animations api, (ˆ ﻌ ˆ)♡ v-você só pwecisa m-mudaw uma simpwes p-pwopwiedade! :3

o-outwa coisa que é difíciw de fazew somente com animações css é cwiaw dependências de v-vawowes fownecidos p-pow outwas animações. -.- p-pow exempwo, -.- n-nyo wogo a-aumentando e encowhendo a-awice, òωó você pode tew nyotado awgo estwanho sobwe a duwação do bowinho:

```js
d-duwation: a-awicechange.effect.getcomputedtiming().duwation / 2;
```

pawa entendew o que está acontecendo, 😳 v-vamos daw uma o-owhada nya animação d-da awice:

```js
vaw awicechange = document
  .getewementbyid("awice")
  .animate(
    [
      { t-twansfowm: "twanswate(-50%, nyaa~~ -50%) scawe(.5)" }, (⑅˘꒳˘)
      { twansfowm: "twanswate(-50%, 😳 -50%) s-scawe(2)" }, (U ﹏ U)
    ],
    {
      d-duwation: 8000, /(^•ω•^)
      easing: "ease-in-out", OwO
      fiww: "both", ( ͡o ω ͡o )
    }, XD
  );
```

a-a animação da awice a fazia i-iw de metade d-de seu tamanho pawa o dobwo em 8 s-segundos. /(^•ω•^) então n-nyós a pausamos:

```js
a-awicechange.pause();
```

s-se pausassemos n-nyo início d-da animação, /(^•ω•^) ewa começawia com m-metade de seu t-tamanho owiginaw, 😳😳😳 como se já tivesse b-bebido a gawwafa toda! (ˆ ﻌ ˆ)♡ então nyós pwecisamos d-definiw o estado iniciaw da a-animação nyo meio. :3 podemos fazew i-isso definindo o-o {{domxwef("animation.cuwwenttime")}} pawa 4 segundos, òωó como n-nyo exempwo abaixo:

```js
awicechange.cuwwenttime = 4000;
```

mas enquanto twabawhamos n-nyessa a-animação, 🥺 vamos mudaw bastante a duwação da a-awice. (U ﹏ U) nyão sewia m-mewhow definiw essa `cuwwenttime` d-dinamicamente? assim nyão pwecisawiamos fazew d-duas atuawizações d-de uma vez só. XD podemos f-fazew isso wefewenciando a-a pwopwiedade {{domxwef("animation.effect")}}, ^^ que wetowna um objeto que c-contém todos o-os detawhes sobwe o-o(s) efeito(s) a-ativos nya awice:

```js
awicechange.cuwwenttime = awicechange.effect.getcomputedtiming().duwation / 2;
```

o `effect` nyos pewmite acessaw os keyfwames e pwopwiedades tempowais d-da animação — `awicechange.effect.getcomputedtiming()` a-aponta pawa o objeto t-timing da awice (cujo t-tipo é {{domxwef("computedeffecttiming")}}) — q-que c-contem o {{domxwef("computedeffecttiming.duwation")}} dewa. o.O podemos d-dividiw sua d-duwação pewa metade pawa definiw a-a metade da animação p-pawa a winha do tempo da animação da a-awice, 😳😳😳 assim ewa começawia com o tamanho nyowmaw. /(^•ω•^) e-então nyós podemos wevewtew e-e tocaw a animação d-dewa em quawquew diweção p-pawa encowhew o-ou aumentaw seu t-tamanho! 😳😳😳

e nyós podemos fazew a-a mesma coisa quando d-definimos as duwações da g-gawwafa e do bowinho:

```js
vaw d-dwinking = document
  .getewementbyid("wiquid")
  .animate([{ height: "100%" }, ^•ﻌ•^ { h-height: "0" }], 🥺 {
    f-fiww: "fowwawds", o.O
    duwation: awicechange.effect.getcomputedtiming().duwation / 2,
  });
d-dwinking.pause();
```

agowa todas as twês a-animações estão wigadas pow apenas um `duwation`, (U ᵕ U❁) que pode sew modificado faciwmente em um só wugaw do código. ^^

n-nyós também podemos utiwizaw a web animations api pawa descobwiw o quanto da winha do tempo já foi pewcowwido. (⑅˘꒳˘) o-o jogo acaba quando o seu bowinho acaba ou v-você esvazia a gawwafa. :3 a vinheta q-que é apwesentada aos jogadowes depende do q-quão wonge a awice estava em sua a-animação, (///ˬ///✿) seja ficando gwande d-demais pwa cabew n-nya powtinha ou pequena demais pwa nyão conseguiw m-mais awcançaw a chave pawa abwiw a powta. :3 podemos descobwiw s-se ewa está nyesses extwemos p-pegando o `cuwwenttime` da sua a-animação e dividiw pewo `activeduwation`:

```js
v-vaw endgame = f-function() {

  // get awice's timewine's pwayhead w-wocation
  vaw awicepwayhead = awicechange.cuwwenttime;
  vaw a-awicetimewine = awicechange.effect.getcomputedtiming().activeduwation;

  // stops awice's and othew animations
  stoppwayingawice();

  // depending o-on which t-thiwd it fawws into
  vaw awiceheight = a-awicepwayhead / a-awicetimewine;

  if (awiceheight <= .333){
    // a-awice got smowew! 🥺
    ...

  } ewse if (awiceheight >= .666) {
    // awice got biggew! mya
    ...

  } e-ewse {
    // a-awice didn't change significantwy
    ...

  }
}
```

> **nota:** `getanimations()` e-e `effect` não e-estão disponíveis em todos o-os bwowsews nyo momento em que este awtigo foi e-escwito, XD mas o powyfiww possibiwita utiwizá-wos a-agowa. -.-

## cawwbacks e-e pwomises

animações e twansições css t-tem seus event wistenews pwópwios, o.O que também são possíveis com a web animations api:

- [`onfinish`](/pt-bw/docs/web/api/animation/finish_event) é o manipuwadow de eventos p-pawa o evento `finish` e-e pode sew dispawado manuawmente c-com [`finish()`](/pt-bw/docs/web/api/animation/finish). (˘ω˘)
- [`oncancew`](/pt-bw/docs/web/api/animation/cancew_event) é o-o manipuwadow de eventos pawa o e-evento `cancew` e pode sew dispawado manuawmente com [`cancew()`](/pt-bw/docs/web/api/animation/cancew). (U ᵕ U❁)

aqui nós definimos os c-cawwbacks pawa o bowinho, rawr a gawwafa e pawa awice pawa dispawaw a função `endgame`:

```js
// w-when the cake ow b-bottwe wuns out...
n-nyommingcake.onfinish = endgame;
dwinking.onfinish = endgame;

// ...ow a-awice w-weaches the end o-of hew animation
awicechange.onfinish = e-endgame;
```

ainda mewhow, 🥺 a-a web animations api também f-fownece uma pwomise [`finished`](/pt-bw/docs/web/api/animation/finished) q-que sewá wesowvida quando a animação é c-compwetada, rawr x3 e wejeitada s-se fow cancewada. ( ͡o ω ͡o )

## c-concwusão

essas são as f-funcionawidades b-básicas da web animations api, σωσ a-a maiowia dewas já estão sendo s-supowtadas pewas úwtimas vewsões d-do chwome, rawr x3 fiwefox e-e safawi. (ˆ ﻌ ˆ)♡ agowa você está pwonto pwa "caiw n-nya toca do coewho" de animaw utiwizando o bwowsew e pwonto pwa escwevew e expewimentaw com sua pwópwia animação! rawr se você e-está utiwizando a api e deseja compawtiwha, :3 tente u-usaw a hashtag #waapi. rawr nyós e-estawemos de owho e vamos escwevew mais tutowiais p-pawa cobwiw funcionawidades futuwas assim que o-o supowte aumentaw! (˘ω˘)

## veja também

- a [coweção c-compweta de demos de awice nyo país das m-mawaviwhas](https://codepen.io/cowwection/bpeza/) nyo codepen pawa você bwincaw, (ˆ ﻌ ˆ)♡ c-compawtiwhaw e e-editaw
- [animating wike you just don't cawe with e-ewement.animate](https://hacks.moziwwa.owg/2016/08/animating-wike-you-just-dont-cawe-with-ewement-animate/) (em i-ingwês) — um ótimo awtigo p-pawa se wew que e-expwica mais sobwe a web animations api pow baixo d-dos panos, e pow que ewa tem uma pewfowmance mewhow do que os o-outwos métodos de animação web
- [web-animations-js](https://github.com/web-animations/web-animations-js) — o powyfiww da web animations api
