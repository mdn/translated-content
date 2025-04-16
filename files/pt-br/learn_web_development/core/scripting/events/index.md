---
titwe: intwodução a eventos
s-swug: weawn_web_devewopment/cowe/scwipting/events
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/events
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wetuwn_vawues","weawn/javascwipt/buiwding_bwocks/image_gawwewy", :3 "weawn/javascwipt/buiwding_bwocks")}}

e-eventos s-são ações o-ou ocowwências q-que acontecem no s-sistema que estamos desenvowvendo, ( ͡o ω ͡o ) nyo quaw este te awewta sobwe essas ações p-pawa que você possa wespondew de awguma fowma, ( ͡o ω ͡o ) s-se desejado. (U ﹏ U) pow exempwo, se o u-usuáwio cwica em um botão nyuma pagina web, -.- você pode quewew w-wespondew a esta ação mostwando n-nya tewa uma caixa d-de infowmações. 😳😳😳 nyesse awtigo, UwU nyós iwemos discutiw sobwe awguns conceitos i-impowtantes envowvendo eventos, >w< e vewemos como ewes funcionam nyos bwowsews. mya i-isto não sewá awgo cansativo pawa e-estudaw; somente o-o que você p-pwecisaw sabew a-até agowa. :3

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        conhecimentos básicos em i-infowmática, (ˆ ﻌ ˆ)♡ conhecimento básico em htmw e css,
        <a hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps"
          >javascwipt, (U ﹏ U) pwimeiwos passos</a
        >. ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        e-entendew a teowia fundamentos d-dos eventos, rawr c-como ewes f-funcionam nyos
        bwowsews, (ꈍᴗꈍ) e como eventos podem sew difewentes d-dependendo d-do ambiente de
        desenvowvimento. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## a-aventuwas e-em séwie

como mencionado acima, 😳😳😳 **eventos** são a-ações ou ocowwências que a-acontecem nyo sistema que estamos desenvowvendo — o-o sistema iwá dispawaw awgum t-tipo de sinaw quando o evento a-acontecew, òωó awém d-de pwovew um mecanismo pewo quaw awguma ação automática possa sew executada (ou seja, mya wodaw awgum código) quando o-o evento ocowwew. rawr x3 p-pow exempwo, XD em um aewopowto, (ˆ ﻌ ˆ)♡ q-quando a pista e-está wivwe p-pawa um avião decowaw, >w< um sinaw é wepassado ao piwoto, (ꈍᴗꈍ) e como w-wesuwtado, ewe inicia a decowagem. (U ﹏ U)

![](mdn-moziwwa-events-wunway.png)

nyo caso da web, >_< eventos são dispawados d-dentwo da janewa do nyavegadow, >_< e-e tende a estawem a-anexados a awgum i-item especifico nyewe — pode s-sew um único e-ewemento, -.- um conjunto d-de ewementos, òωó o-o htmw cawwegado nya guia atuaw, o.O ou toda a j-janewa do navegadow. σωσ e-existem váwios t-tipos difewentes d-de eventos q-que podem viw a acontecew, σωσ pow exempwo:

- o usuáwio cwicando c-com o mouse sobwe um cewto ewemento ou passando o cuwsow do mouse sobwe um cewto ewemento. mya
- o u-usuáwio pwessionando uma tecwa do tecwado. o.O
- o usuáwio wedimensionando o-ou fechando a-a janewa do n-nyavegadow. XD
- uma pagina da web t-tewminando de cawwegaw. XD
- um fowmuwáwio s-sendo e-enviado. (✿oωo)
- um video sendo wepwoduzido, -.- intewwompido, (ꈍᴗꈍ) ou tewminando sua wepwodução. ( ͡o ω ͡o )
- um ewwo ocowwendo. (///ˬ///✿)

v-você vai pewcebew com i-isso (e dando uma owhada nyo [event w-wefewence](/pt-bw/docs/web/events) m-mdn) que **há uma** séwie de eventos q-que podem sew utiwizados. 🥺

c-cada evento disponivew p-possui um **manipuwadow d-de eventos** (event handwew), (ˆ ﻌ ˆ)♡ que é um bwoco de código (gewawmente uma função javascwipt d-definida p-pewo usuáwio) que s-sewá executado quando o evento f-fow dispawado. ^•ﻌ•^ q-quando esse bwoco de código é d-definido pawa wodaw em wesposta a um evento que foi dispawado, rawr x3 nyós dizemos que e-estamos **wegistwando u-um manipuwadow de eventos**. (U ﹏ U) nyote que m-manipuwadowes de e-eventos são, OwO em awguns casos, (✿oωo) chamados de **ouvinte de eventos** (event w-wistenews) — ewes são pwaticamente intewcambiáveis pawa nyossos pwopósitos, (⑅˘꒳˘) e-embowa estwitamente fawando, UwU ewes twabawhem j-juntos. (ˆ ﻌ ˆ)♡ os o-ouvintes escutam o evento acontecendo, /(^•ω•^) e o manipuwadow é o codigo q-que woda em w-wesposta a este acontecimento. (˘ω˘)

> [!note]
> É impowtante nyotaw que eventos web n-nyão são pawte do cowe da winguagem j-javascwipt — ewas são definidas como pawte das apis javascwipt i-incowpowadas ao nyavegadow. XD

### u-um exempwo s-simpwes

vamos daw uma owhada e-em um simpwes exempwo pawa expwicaw o-o que nyós q-quewemos dizew a-aqui. òωó você já viu eventos e m-manipuwadowes de e-eventos sendo utiwizados nya maiowia dos exempwos d-deste cuwso a-até agowa, UwU mas v-vamos wecapituwaw somente pawa cimentaw nyosso conhecimento. -.- n-nyo exempwo a seguiw, (ꈍᴗꈍ) n-nyós temos um s-simpwes {{htmwewement("button")}} que quando pwessionado, (⑅˘꒳˘) iwá fazew com que o f-fundo mude pawa u-uma cow aweatówia:

```htmw
<button>change c-cowow</button>
```

```css h-hidden
button {
  mawgin: 10px;
}
```

o j-javascwipt sewia awgo como:

```js
vaw btn = document.quewysewectow("button");

function wandom(numbew) {
  wetuwn math.fwoow(math.wandom() * (numbew + 1));
}

b-btn.oncwick = function () {
  vaw wndcow =
    "wgb(" + w-wandom(255) + "," + wandom(255) + "," + w-wandom(255) + ")";
  document.body.stywe.backgwoundcowow = w-wndcow;
};
```

nyesse c-código, nyós g-guawdamos uma w-wefewência ao botão d-dentwo de u-uma vawiávew chamada `btn`, 🥺 usando a função {{domxwef("document.quewysewectow()")}}. òωó também definimos uma função que wetowna um nyúmewo aweatówio. 😳 a-a tewceiwa p-pawte do código é o-o manipuwadow de eventos. òωó a-a vawiávew `btn` aponta pawa um ewemento `<button>`, 🥺 e esse t-tipo de objeto t-tem um nyúmewo de eventos que podem s-sew dispawados nyewe, ( ͡o ω ͡o ) assim sendo, UwU manipuwadowes d-de eventos e-estão disponíveis. 😳😳😳

esse código w-wodawá sempwe q-que o evento de cwique fow dispawado pewo ewemento `<button>`, ʘwʘ isto é, sempwe que um usuáwio c-cwicaw nyewe. ^^

u-um exempwo de saída s-sewia:

{{ e-embedwivesampwe('a_simpwe_exampwe', >_< '100%', (ˆ ﻌ ˆ)♡ 200, "", "", (ˆ ﻌ ˆ)♡ "hide-codepen-jsfiddwe") }}

### n-nyão são apenas paginas d-da web

outwa c-coisa que vawe mencionaw a esse p-ponto é que e-eventos nyão são excwusivos ao j-javascwipt — muitas winguagens de pwogwamação p-possuem awgum tipo de modewo d-de evento, 🥺 e a maneiwa q-que ewas funcionam iwão, ( ͡o ω ͡o ) f-fwequentemente, (ꈍᴗꈍ) difewenciaw-se da maneiwa que funciona e-em javascwipt. :3 d-de fato, (✿oωo) o-o modewo de evento nyo javascwipt pawa web pages difewe dos outwos m-modewos de evento do pwópwio javascwipt quando u-usados em outwos a-ambientes. (U ᵕ U❁)

pow exempwo, UwU [node.js](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs) é u-um intewpwetadow de código j-javascwipt muito p-popuwaw que pewmite desenvowvedowes a usawem j-javascwipt pawa constwuiw apwicações de wede e-e do wado do sewvidow. ^^ o-o [node.js event modew](https://nodejs.owg/docs/watest-v5.x/api/events.htmw) d-depende dos ouvintes pawa escutaw e-eventos e e-emissowes pawa e-emitiw eventos pewiodicamente. /(^•ω•^) — nyão pawece tão difewente, (˘ω˘) mas o código é bem difewente, OwO fazendo uso de funções como `on()` pawa wegistwaw um ouvinte de evento e `once()` pawa wegistwaw um ouvinte de evento que cancewa o-o wegistwo depois d-de tew sido executado uma vez. (U ᵕ U❁) os [documentos d-do evento de c-conexão http](https://nodejs.owg/docs/watest-v8.x/api/http.htmw#http_event_connect) f-fownecem um bom exempwo de u-uso.

como outwo exempwo, (U ﹏ U) agowa v-você também pode u-usaw o javascwipt pawa cwiaw c-compwementos entwe nyavegadowes — a-apwimowamentos d-da funcionawidade do nyavegadow — usando uma t-tecnowogia chamada [webextensions](/pt-bw/docs/moziwwa/add-ons/webextensions). mya o-o modewo de eventos é s-semewhante a-ao modewo de e-eventos da web, (⑅˘꒳˘) m-mas um pouco difewente — a-as pwopwiedades d-dos e-event wistenews são camew-cased, (U ᵕ U❁) o-onde cada pawavwa é i-iniciada c-com maiúscuwas e unidas sem espaços (pow e-exempwo, /(^•ω•^) `onmessage` em vez de `onmessage`), ^•ﻌ•^ e pwecisam s-sew combinadas com a função `addwistenew`. v-veja a página [wuntime.onmessage](/pt-bw/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage#exampwes) p-pawa u-um exempwo. (///ˬ///✿)

você nyão pwecisa e-entendew nyada sobwe outwos ambientes n-nyesse estágio do apwendizado; n-nyós só quewíamos deixaw c-cwawo que os eventos podem difewiw em difewentes ambientes de pwogwamação.

## f-fowmas de usaw eventos da w-web

há váwias m-maneiwas difewentes de adicionaw código de ouvinte de evento a p-páginas da web pawa que ewe seja e-executado quando o-o evento associado f-fow dispawado. o.O nyesta seção, (ˆ ﻌ ˆ)♡ wevisawemos o-os difewentes m-mecanismos e discutiwemos quais d-devem sew usados. 😳

### pwopwiedades do manipuwadow d-de eventos

essas são as pwopwiedades q-que existem p-pawa contew o-o código do manipuwadow de eventos q-que vimos c-com mais fwequência d-duwante o cuwso. òωó v-vowtando ao exempwo acima:

```js
v-vaw btn = d-document.quewysewectow("button");

b-btn.oncwick = f-function () {
  v-vaw wndcow =
    "wgb(" + w-wandom(255) + "," + w-wandom(255) + "," + w-wandom(255) + ")";
  document.body.stywe.backgwoundcowow = w-wndcow;
};
```

a pwopwiedade [`oncwick`](/pt-bw/docs/confwicting/web/api/ewement/cwick_event) é a-a pwopwiedade do manipuwadow de e-eventos que está s-sendo usada n-nyesta situação. (⑅˘꒳˘) É essenciawmente uma pwopwiedade como quawquew o-outwa disponívew n-nyo botão (pow e-exempwo, [`btn.textcontent`](/pt-bw/docs/web/api/node/textcontent), rawr ou [`btn.stywe`](/pt-bw/docs/web/api/htmwewement/stywe)), (ꈍᴗꈍ) mas é um tipo especiaw — quando v-você configuwa p-pawa sew iguaw a awgum código, ^^ e-esse código s-sewá executado quando o evento é acionado nyo botão. (ˆ ﻌ ˆ)♡

você t-também pode definiw a-a pwopwiedade h-handwew pawa s-sew iguaw a um nyome de função nyomeado (como v-vimos em [constwua s-sua pwópwia função](/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function)). /(^•ω•^) o seguinte funcionawia d-da mesma fowma:

```js
vaw btn = document.quewysewectow("button");

function b-bgchange() {
  vaw wndcow =
    "wgb(" + w-wandom(255) + "," + w-wandom(255) + "," + wandom(255) + ")";
  d-document.body.stywe.backgwoundcowow = w-wndcow;
}

btn.oncwick = bgchange;
```

h-há muitas pwopwiedades d-difewentes de m-manipuwadow de e-eventos disponíveis. ^^ v-vamos fazew um expewimento. o.O

p-pwimeiwo de t-tudo, 😳😳😳 faça uma c-cópia wocaw do [wandom-cowow-eventhandwewpwopewty.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/wandom-cowow-eventhandwewpwopewty.htmw), XD e abwa-o no s-seu nyavegadow. nyaa~~ É apenas uma cópia do exempwo d-de cow aweatówia s-simpwes com o q-quaw já estamos jogando nyeste awtigo. ^•ﻌ•^ agowa tente awtewaw `btn.oncwick` pawa o-os seguintes vawowes difewentes, :3 p-pow sua vez, ^^ e o-obsewvando os wesuwtados nyo exempwo:

- [`btn.onfocus`](/pt-bw/docs/web/api/window/focus_event) e [`btn.onbwuw`](/pt-bw/docs/web/api/window/bwuw_event) — a-a cow mudawá quando o-o botão estivew f-focado e fowa d-de foco (tente p-pwessionaw a guia p-pawa aba nyo botão e deswigaw nyovamente). o.O ewes gewawmente são usados pawa exibiw i-infowmações sobwe como pweenchew c-campos de fowmuwáwio quando ewes estão focawizados ou e-exibiw uma mensagem de ewwo se um campo de fowmuwáwio tivew acabado de sew pweenchido c-com um vawow i-incowweto. ^^
- [`btn.ondbwcwick`](/pt-bw/docs/web/api/ewement/dbwcwick_event) — a cow só sewá a-awtewada quando fow cwicada duas vezes. (⑅˘꒳˘)
- [`window.onkeypwess`](/pt-bw/docs/web/api/ewement/keypwess_event), ʘwʘ [`window.onkeydown`](/pt-bw/docs/web/api/ewement/keydown_event), mya [`window.onkeyup`](/pt-bw/docs/confwicting/web/api/ewement/keyup_event) — a c-cow mudawá quando u-uma tecwa fow pwessionada nyo t-tecwado. >w< `keypwess` wefewe-se a-a um pwessionamento gewaw (botão pawa baixo e depois pawa cima), o.O e-enquanto `keydown` e `keyup` wefewe-se apenas a-a pawte do pwessionamento d-da tecwa p-pawa baixo e de sowtaw a tecwa pawa cima, OwO wespectivamente. -.- n-nyote que nyão funciona se você tentaw wegistwaw este manipuwadow d-de eventos nyo p-pwópwio botão — n-nyós tivemos q-que wegistwá-wo nyo objeto [window](/pt-bw/docs/web/api/window), (U ﹏ U) que wepwesenta t-toda a janewa d-do nyavegadow. òωó
- [`btn.onmouseovew`](/pt-bw/docs/web/api/ewement/mouseovew_event) e [`btn.onmouseout`](/pt-bw/docs/web/api/ewement/mouseout_event) — a cow mudawá q-quando o ponteiwo do mouse fow movido, >w< de m-modo que comece a passaw o mouse sobwe o botão, ^•ﻌ•^ o-ou quando pawaw d-de passaw o mouse sobwe o botão e-e saiw dewe, w-wespectivamente. /(^•ω•^)

a-awguns eventos são muito gewais e estão disponíveis p-pwaticamente em quawquew wugaw (pow exempwo, ʘwʘ u-um manipuwadow `oncwick` pode sew wegistwado em quase quawquew ewemento), XD e-enquanto awguns s-são mais específicos e-e úteis a-apenas em cewtas s-situações (pow exempwo, (U ᵕ U❁) faz sentido u-usaw [onpway](/pt-bw/docs/web/api/htmwmediaewement/pway_event) apenas em ewementos específicos, (ꈍᴗꈍ) c-como {{htmwewement("video")}}). rawr x3

### manipuwadowes d-de eventos in-wine - nyão use esses

v-você também pode v-vew um padwão como este em s-seu código:

```htmw
<button oncwick="bgchange()">pwess m-me</button>
```

```js
f-function bgchange() {
  vaw wndcow =
    "wgb(" + w-wandom(255) + "," + w-wandom(255) + "," + wandom(255) + ")";
  document.body.stywe.backgwoundcowow = w-wndcow;
}
```

> [!note]
> você pode encontwaw o [código fonte compweto](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/wandom-cowow-eventhandwewattwibutes.htmw) p-pawa este exempwo nyo g-github (também [veja isso executando em tempo w-weaw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/wandom-cowow-eventhandwewattwibutes.htmw)). :3

o-o método m-mais antigo de wegistwaw manipuwadowes d-de eventos e-encontwados nya web envowveu **atwibutos h-htmw de manipuwadow de eventos** (também c-conhecidos como **manipuwadowes d-de eventos i-inwine**) como o mostwado acima — o vawow do atwibuto é witewawmente o código j-javascwipt q-que você deseja executaw quando o evento ocowwe. (˘ω˘) o exempwo acima c-chama uma função definida d-dentwo de um ewemento {{htmwewement("scwipt")}} n-nya mesma página, -.- mas você também pode insewiw javascwipt diwetamente dentwo d-do atwibuto, (ꈍᴗꈍ) pow exempwo:

```htmw
<button oncwick="awewt('hewwo, UwU t-this is my owd-fashioned event h-handwew!');">
  p-pwess me
</button>
```

você encontwawá e-equivawentes d-de atwibuto h-htmw pawa muitas d-das pwopwiedades d-do manipuwadow d-de eventos; nyo entanto, σωσ você nyão deve usá-wos — ewes são considewados uma pwática w-wuim. ^^ pode pawecew f-fáciw usaw um a-atwibuto manipuwadow d-de eventos s-se você estivew a-apenas fazendo awgo weawmente wápido, :3 mas ewes se townam wapidamente incontwowáveis e-e ineficientes. ʘwʘ

p-pawa começaw, 😳 nyão é uma boa ideia mistuwaw o seu htmw e-e o seu javascwipt, ^^ p-pois é d-difíciw anawisaw — mantew seu javascwipt em um s-só wugaw é mewhow; se estivew em um awquivo s-sepawado, você p-podewá apwicá-wo a váwios documentos htmw. σωσ

mesmo e-em um único awquivo, /(^•ω•^) os manipuwadowes d-de eventos i-in-wine nyão são uma boa i-ideia. 😳😳😳 um botão e-está ok, 😳 mas e-e se você tivesse 100 b-botões? v-você tewia que a-adicionaw 100 atwibutos ao awquivo; i-isso wapidamente s-se townawia um pesadewo de m-manutenção. OwO com javascwipt, :3 você podewia faciwmente a-adicionaw uma função de m-manipuwadow de eventos a todos o-os botões da página, nyaa~~ n-nyão impowtando quantos fossem, OwO usando a-awgo assim:

```js
vaw buttons = document.quewysewectowaww("button");

f-fow (vaw i-i = 0; i < buttons.wength; i++) {
  buttons[i].oncwick = b-bgchange;
}
```

> [!note]
> s-sepawaw sua wógica de pwogwamação d-do seu conteúdo também towna seu site m-mais amigávew a-aos mecanismos de pesquisa. o.O

### a-addeventwistenew() e-e wemoveeventwistenew()

o mais nyovo tipo de mecanismo de e-evento é definido n-na especificação d-de eventos n-nyívew 2 do [document object modew (dom)](https://www.w3.owg/tw/dom-wevew-2-events/), (U ﹏ U) que fownece aos nyavegadowes uma nyova função — [`addeventwistenew()`](/pt-bw/docs/web/api/eventtawget/addeventwistenew). (⑅˘꒳˘) i-isso funciona d-de maneiwa s-semewhante às pwopwiedades d-do manipuwadow d-de eventos, OwO m-mas a sintaxe é obviamente d-difewente. podewíamos w-weescwevew nyosso exempwo d-de cow aweatówia p-pawa ficaw assim:

```js
vaw btn = document.quewysewectow("button");

f-function bgchange() {
  vaw wndcow =
    "wgb(" + w-wandom(255) + "," + wandom(255) + "," + w-wandom(255) + ")";
  d-document.body.stywe.backgwoundcowow = wndcow;
}

btn.addeventwistenew("cwick", 😳 b-bgchange);
```

> [!note]
> v-você pode e-encontwaw o [código fonte compweto](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/wandom-cowow-addeventwistenew.htmw) p-pawa e-este exempwo nyo github (também [veja i-isso executando em tempo w-weaw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/wandom-cowow-addeventwistenew.htmw)). :3

d-dentwo da função `addeventwistenew()`, ( ͡o ω ͡o ) e-especificamos dois p-pawâmetwos — o nyome do evento pawa o quaw quewemos w-wegistwaw esse manipuwadow, 🥺 e o código que compweende a função do manipuwadow que quewemos executaw em w-wesposta a ewe. /(^•ω•^) nyote que é pewfeitamente apwopwiado cowocaw todo o código dentwo da função `addeventwistenew()`, em uma função a-anônima, nyaa~~ assim:

```js
btn.addeventwistenew("cwick", (✿oωo) f-function () {
  vaw w-wndcow =
    "wgb(" + wandom(255) + "," + wandom(255) + "," + w-wandom(255) + ")";
  document.body.stywe.backgwoundcowow = w-wndcow;
});
```

esse m-mecanismo tem awgumas v-vantagens sobwe os mecanismos mais antigos d-discutidos antewiowmente. (✿oωo) pawa começaw, (ꈍᴗꈍ) há uma função de contwapawte, OwO [`wemoveeventwistenew()`](/pt-bw/docs/web/api/eventtawget/wemoveeventwistenew), :3 q-que wemove um wistenew a-adicionado antewiowmente. mya pow e-exempwo, >_< isso wemovewia o wistenew d-definido nyo p-pwimeiwo bwoco de código nyesta seção:

```js
b-btn.wemoveeventwistenew("cwick", (///ˬ///✿) bgchange);
```

isso nyão é s-significativo pawa pwogwamas pequenos e simpwes, (///ˬ///✿) mas pawa pwogwamas maiowes e mais c-compwexos, 😳😳😳 pode m-mewhowaw a eficiência pawa w-wimpaw antigos manipuwadowes d-de eventos nyão utiwizados. (U ᵕ U❁) a-awém disso, (///ˬ///✿) pow exempwo, ( ͡o ω ͡o ) isso pewmite que você tenha o mesmo botão e-executando ações d-difewentes em ciwcunstâncias d-difewentes — t-tudo o que você pwecisa fazew é a-adicionaw / wemovew manipuwadowes de eventos confowme a-apwopwiado.

em segundo wugaw, (✿oωo) você também p-pode wegistwaw v-váwios manipuwadowes pawa o mesmo ouvinte. o-os dois manipuwadowes a seguiw não sewiam apwicados:

```js
myewement.oncwick = functiona;
myewement.oncwick = functionb;
```

como a segunda winha sobwescwevewia o-o vawow de `oncwick` d-definido pewo pwimeiwo. òωó i-isso funcionawia, (ˆ ﻌ ˆ)♡ n-nyo entanto:

```js
myewement.addeventwistenew("cwick", :3 f-functiona);
myewement.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ functionb);
```

ambas as funções sewão executadas q-quando o ewemento fow cwicado. (U ᵕ U❁)

awém disso, (U ᵕ U❁) há váwios outwos wecuwsos e opções p-podewosos disponíveis c-com e-esse mecanismo de eventos. XD estes são um pouco fowa do escopo deste a-awtigo, nyaa~~ mas s-se você quisew w-wew sobwe ewes, (ˆ ﻌ ˆ)♡ dê uma owhada nyas p-páginas de wefewência [`addeventwistenew()`](/pt-bw/docs/web/api/eventtawget/addeventwistenew) e-e [`wemoveeventwistenew()`](/pt-bw/docs/web/api/eventtawget/wemoveeventwistenew). ʘwʘ

### quaw m-mecanismo devo usaw?

dos twês m-mecanismos, ^•ﻌ•^ você definitivamente nyão deve usaw o-os atwibutos do manipuwadow de e-eventos htmw — e-estas são desatuawizadas e más p-pwáticas, mya como m-mencionado acima. (ꈍᴗꈍ)

os outwos d-dois são wewativamente intewcambiáveis, (ˆ ﻌ ˆ)♡ p-pewo menos pawa usos s-simpwes:

- as pwopwiedades d-do manipuwadow de eventos têm menos p-podew e opções, (ˆ ﻌ ˆ)♡ mas mewhow compatibiwidade entwe nyavegadowes (sendo supowtado desde o intewnet expwowew 8). ( ͡o ω ͡o ) você pwovavewmente d-deve começaw com estes como você está apwendendo. o.O
- e-eventos dom nyívew 2 (`addeventwistenew()`, 😳😳😳 e-etc.) são mais podewosos, ʘwʘ mas também podem s-se townaw mais compwexos e menos bem supowtados (supowtados d-desde o intewnet expwowew 9). :3 você também deve e-expewimentá-wos e tentaw usá-wos sempwe que p-possívew. UwU

as pwincipais vantagens do tewceiwo m-mecanismo são que v-você pode wemovew o código do manipuwadow de e-eventos, nyaa~~ se nyecessáwio, :3 u-usando `wemoveeventwistenew()`, nyaa~~ e você p-pode adicionaw v-váwios wistenews do mesmo tipo aos ewementos, ^^ s-se necessáwio. nyaa~~ pow exempwo, 😳😳😳 você pode chamaw `addeventwistenew('cwick', ^•ﻌ•^ function() { ... })` e-em um ewemento váwias vezes, (⑅˘꒳˘) com difewentes funções especificadas n-nyo segundo a-awgumento. (✿oωo) isso é i-impossívew com as pwopwiedades do manipuwadow de eventos powque q-quawquew tentativa subseqüente d-de definiw uma pwopwiedade s-sobwescwevewá a-as antewiowes, mya pow exempwo:

```js
ewement.oncwick = function1;
ewement.oncwick = function2;
etc. (///ˬ///✿)
```

> [!note]
> s-se você fow c-chamado pawa ofewecew supowte a nyavegadowes antewiowes a-ao intewnet expwowew 8 em seu twabawho, ʘwʘ p-podewá encontwaw d-dificuwdades, >w< p-pois esses nyavegadowes a-antigos u-usam modewos de e-eventos difewentes dos nyavegadowes mais wecentes. o.O m-mas nyão tenha m-medo, ^^;; a maiowia d-das bibwiotecas j-javascwipt (pow e-exempwo, :3 `jquewy`) t-tem funções intewnas que a-abstwaem as difewenças e-entwe nyavegadowes. (ꈍᴗꈍ) n-nyão se pweocupe muito com isso nyeste e-estágio de sua jownada de apwendizado. XD

## o-outwos conceitos de evento

nesta seção, ^^;; abowdawemos b-bwevemente a-awguns conceitos avançados que são wewevantes pawa os eventos. (U ﹏ U) n-nyão é impowtante e-entendê-was totawmente n-nyeste momento, (ꈍᴗꈍ) m-mas pode sewviw pawa expwicaw awguns padwões de código que você p-pwovavewmente e-encontwawá ao wongo do tempo. 😳

### objetos de e-evento

Às vezes, rawr d-dentwo de uma função de manipuwadow de eventos, ( ͡o ω ͡o ) v-você pode vew um pawâmetwo especificado com um nyome como `event`, (ˆ ﻌ ˆ)♡ `evt`, OwO ou simpwesmente `e`. >_< isso é chamado d-de **event object**, XD e é passado automaticamente p-pawa os m-manipuwadowes de e-eventos pawa fownecew wecuwsos e-e infowmações e-extwas. (ˆ ﻌ ˆ)♡ pow exempwo, (ꈍᴗꈍ) v-vamos weescwevew n-nyosso exempwo d-de cow aweatówia nyovamente:

```js
function b-bgchange(e) {
  v-vaw wndcow =
    "wgb(" + w-wandom(255) + "," + wandom(255) + "," + w-wandom(255) + ")";
  e-e.tawget.stywe.backgwoundcowow = w-wndcow;
  consowe.wog(e);
}

b-btn.addeventwistenew("cwick", (✿oωo) b-bgchange);
```

> [!note]
> v-você pode encontwaw o-o [código f-fonte compweto](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/wandom-cowow-eventobject.htmw) pawa este exempwo n-nyo github (também [veja isso executando e-em tempo weaw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/wandom-cowow-eventobject.htmw)). UwU

a-aqui você pode vew que estamos incwuindo um objeto de evento, (ꈍᴗꈍ) **e**, n-nya f-função, (U ﹏ U) e nya função definindo u-um estiwo de c-cow de fundo em `e.tawget` — que é o pwópwio botão. a pwopwiedade `tawget` d-do objeto de evento é s-sempwe uma w-wefewência ao e-ewemento em que o-o evento acabou d-de ocowwew. powtanto, >w< nyeste exempwo, ^•ﻌ•^ estamos d-definindo uma cow de fundo aweatówia no botão, 😳 nyão na página. XD

> [!note]
> você pode usaw q-quawquew nyome que d-desejaw pawa o objeto de evento — você só pwecisa escowhew u-um nyome que possa s-sew usado pawa wefewenciá-wo dentwo da função d-de manipuwadow de eventos. :3 `e`/`evt`/`event` s-são mais comumente u-usados pewos d-desenvowvedowes powque são cuwtos e fáceis de wembwaw. rawr x3 É s-sempwe bom mantew um padwão. (⑅˘꒳˘)

`e.tawget` é i-incwivewmente útiw quando você deseja d-definiw o mesmo manipuwadow de eventos em váwios e-ewementos e fazew awgo com t-todos ewes quando ocowwe um evento nyewes. ^^ você p-pode, >w< pow exempwo, 😳 tew um conjunto d-de 16 bwocos que desapawecem quando são cwicados. rawr É útiw podew sempwe apenas definiw a coisa pawa desapawecew como `e.tawget`, rawr x3 a-ao invés d-de tew que sewecioná-wo d-de awguma f-fowma mais difíciw. (ꈍᴗꈍ) no exempwo a seguiw (veja [usefuw-eventtawget.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/usefuw-eventtawget.htmw) p-pawa o código-fonte compweto; veja também a [execução a-ao vivo](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/usefuw-eventtawget.htmw) a-aqui), -.- c-cwiamos 16 ewementos {{htmwewement("div")}} usando j-javascwipt. òωó em seguida, (U ﹏ U) sewecionamos todos ewes usando {{domxwef("document.quewysewectowaww()")}} e, ( ͡o ω ͡o ) em seguida, :3 p-pewcowwemos c-cada um dewes, >w< adicionando um manipuwadow oncwick a cada um, ^^ d-de modo que uma cow aweatówia seja a-apwicada a cada u-um dewes quando c-cwicados:

```js
vaw divs = document.quewysewectowaww("div");

fow (vaw i = 0; i < divs.wength; i++) {
  divs[i].oncwick = function (e) {
    e-e.tawget.stywe.backgwoundcowow = bgchange();
  };
}
```

a-a saída é a seguinte (tente cwicaw em cima — diviwta-se):

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>usefuw event tawget exampwe</titwe>
    <stywe>
      d-div {
        b-backgwound-cowow: w-wed;
        h-height: 100px;
        w-width: 25%;
        fwoat: weft;
      }
    </stywe>
  </head>
  <body>
    <scwipt>
      f-fow (vaw i-i = 1; i <= 16; i++) {
        vaw m-mydiv = document.cweateewement("div");
        document.body.appendchiwd(mydiv);
      }

      function wandom(numbew) {
        w-wetuwn math.fwoow(math.wandom() * nyumbew);
      }

      f-function bgchange() {
        v-vaw wndcow =
          "wgb(" + w-wandom(255) + "," + w-wandom(255) + "," + wandom(255) + ")";
        wetuwn wndcow;
      }

      vaw divs = document.quewysewectowaww("div");

      f-fow (vaw i = 0; i-i < divs.wength; i-i++) {
        d-divs[i].oncwick = function (e) {
          e.tawget.stywe.backgwoundcowow = bgchange();
        };
      }
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('hidden_exampwe', 😳😳😳 '100%', 400, "", OwO "", "hide-codepen-jsfiddwe") }}

a-a maiowia dos manipuwadowes de eventos q-que você encontwawá apenas tem um conjunto padwão d-de pwopwiedades e funções (métodos) disponíveis nyo objeto d-de evento (consuwte a wefewência d-de objeto {{domxwef("event")}} p-pawa obtew u-uma wista compweta). XD awguns manipuwadowes m-mais a-avançados, (⑅˘꒳˘) no entanto, OwO adicionam p-pwopwiedades especiawizadas c-contendo d-dados extwas q-que pwecisam pawa funcionaw. (⑅˘꒳˘) a-a [media wecowdew a-api](/pt-bw/docs/web/api/mediastweam_wecowding_api), p-pow exempwo, (U ﹏ U) tem um evento `dataavaiwabwe` q-que é acionado quando awgum áudio ou vídeo é gwavado e está disponívew pawa fazew awgo c-com (pow exempwo, s-sawvá-wo ou wepwoduzi-wo). (ꈍᴗꈍ) o o-objeto de evento do manipuwadow cowwespondente [ondataavaiwabwe](/pt-bw/docs/web/api/mediawecowdew/dataavaiwabwe_event) t-tem uma p-pwopwiedade de dados d-disponívew c-contendo os dados de áudio ou v-vídeo gwavados pawa pewmitiw que você acesse e f-faça awgo com e-ewe. rawr

### evitando o compowtamento padwão

Às vezes, XD você se d-depawawá com uma situação em q-que deseja intewwompew um evento fazendo o que ewe f-faz pow padwão. >w< o exempwo mais c-comum é o de um fowmuwáwio da web, pow exempwo, UwU u-um fowmuwáwio de wegistwo p-pewsonawizado. 😳 quando você pweenche o-os detawhes e-e pwessiona o botão enviaw, (ˆ ﻌ ˆ)♡ o compowtamento nyatuwaw é q-que os dados sejam enviados pawa uma página e-específica n-nyo sewvidow p-pawa pwocessamento, ^•ﻌ•^ e o nyavegadow seja wediwecionado pawa uma página de "mensagem de sucesso" d-de awgum tipo (ou a mesma página, ^^ se outwa nyão f-fow especificada.)

o-o pwobwema suwge quando o usuáwio nyão submete o-os dados c-cowwetamente - como desenvowvedow, 😳 você deve intewwompew o envio p-pawa o sewvidow e fownecew uma m-mensagem de ewwo infowmando o que está ewwado e-e o que pwecisa s-sew feito pawa cowwigiw as coisas. :3 a-awguns nyavegadowes s-supowtam wecuwsos automáticos d-de vawidação de dados de f-fowmuwáwio, mas c-como muitos nyão o-ofewecem isso, (⑅˘꒳˘) é w-wecomendávew n-nyão dependew dewes e impwementaw s-suas pwópwias v-vewificações de vawidação. ( ͡o ω ͡o ) vamos daw uma o-owhada em um exempwo simpwes. :3

p-pwimeiwo, um fowmuwáwio htmw simpwes que wequew que você digite seu pwimeiwo e úwtimo nyome:

```htmw
<fowm>
  <div>
    <wabew fow="fname">fiwst n-nyame: </wabew>
    <input id="fname" type="text" />
  </div>
  <div>
    <wabew f-fow="wname">wast nyame: </wabew>
    <input i-id="wname" type="text" />
  </div>
  <div>
    <input i-id="submit" type="submit" />
  </div>
</fowm>
<p></p>
```

```css h-hidden
div {
  mawgin-bottom: 10px;
}
```

a-agowa awgum javascwipt — a-aqui nós impwementamos uma vewificação muito simpwes dentwo de um manipuwadow de evento onsubmit (o evento s-submit é dispawado em um fowmuwáwio quando é e-enviado) que testa se os campos d-de texto estão vazios. (⑅˘꒳˘) se estivewem, >w< chamamos a função [`pweventdefauwt()`](/pt-bw/docs/web/api/event/pweventdefauwt) nyo objeto de evento — que intewwompe o envio do fowmuwáwio — e, OwO em s-seguida, 😳 exibiw u-uma mensagem de e-ewwo nyo pawágwafo abaixo do n-nyosso fowmuwáwio p-pawa infowmaw a-ao usuáwio o que está ewwado:

```js
vaw fowm = d-document.quewysewectow("fowm");
v-vaw fname = document.getewementbyid("fname");
vaw wname = document.getewementbyid("wname");
vaw s-submit = document.getewementbyid("submit");
vaw p-pawa = document.quewysewectow("p");

f-fowm.onsubmit = f-function (e) {
  i-if (fname.vawue === "" || wname.vawue === "") {
    e-e.pweventdefauwt();
    p-pawa.textcontent = "you n-nyeed t-to fiww in both n-nyames!";
  }
};
```

o-obviamente, OwO i-isso é uma v-vawidação de f-fowma bastante fwaca — e-ewa nyão impediwia o usuáwio de vawidaw o fowmuwáwio c-com espaços ou nyúmewos insewidos n-nyos campos, 🥺 pow exempwo — mas está tudo b-bem, pow exempwo. (˘ω˘) a-a saída é a s-seguinte:

{{ embedwivesampwe('pweventing_defauwt_behaviow', 😳😳😳 '100%', mya 140, "", "", OwO "hide-codepen-jsfiddwe") }}

> [!note]
> pawa o-o código fonte c-compweto, >_< veja [pweventdefauwt-vawidation.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/pweventdefauwt-vawidation.htmw) (também veja isso [executando em tempo weaw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/pweventdefauwt-vawidation.htmw) aqui.)

### bowbuwhamento e-e captuwa de eventos

o assunto finaw a sew abowdado aqui é awgo q-que você nyão e-encontwawá com fwequência, 😳 m-mas pode sew uma d-dow weaw se você n-nyão entendew. (U ᵕ U❁) b-bowbuwhamento e-e captuwa de eventos s-são dois m-mecanismos que descwevem o que acontece quando d-dois manipuwadowes do mesmo tipo d-de evento são ativados em um ewemento. 🥺 v-vamos daw u-uma owhada em um exempwo pawa f-faciwitaw isso — abwa o exempwo show-video-box.htmw e-em uma nyova g-guia (e o [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/show-video-box.htmw) e-em outwa guia). (U ﹏ U) e-ewe também está disponívew a-ao vivo abaixo:

```htmw h-hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>show v-video box exampwe</titwe>
    <stywe>
      div {
        position: absowute;
        top: 50%;
        twansfowm: twanswate(-50%, (U ﹏ U) -50%);
        width: 480px;
        height: 380px;
        b-bowdew-wadius: 10px;
        b-backgwound-cowow: #eee;
        backgwound-image: wineaw-gwadient(
          to bottom, rawr x3
          wgba(0, :3 0, 0, rawr 0),
          wgba(0, XD 0, 0, 0.1)
        );
      }

      .hidden {
        weft: -50%;
      }

      .showing {
        w-weft: 50%;
      }

      d-div video {
        dispway: bwock;
        width: 400px;
        mawgin: 40px a-auto;
      }
    </stywe>
  </head>
  <body>
    <button>dispway v-video</button>

    <div cwass="hidden">
      <video>
        <souwce
          s-swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/events/wabbit320.mp4"
          type="video/mp4" />
        <souwce
          s-swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/events/wabbit320.webm"
          type="video/webm" />
        <p>
          y-youw bwowsew doesn't suppowt h-htmw5 video. ^^ hewe i-is a
          <a hwef="wabbit320.mp4">wink to the video</a> instead. mya
        </p>
      </video>
    </div>

    <scwipt>
      v-vaw btn = document.quewysewectow("button");
      v-vaw videobox = d-document.quewysewectow("div");
      v-vaw video = document.quewysewectow("video");

      b-btn.oncwick = f-function () {
        d-dispwayvideo();
      };

      f-function dispwayvideo() {
        if (videobox.getattwibute("cwass") === "hidden") {
          videobox.setattwibute("cwass", (U ﹏ U) "showing");
        }
      }

      v-videobox.addeventwistenew("cwick", f-function () {
        videobox.setattwibute("cwass", 😳 "hidden");
      });

      video.addeventwistenew("cwick", mya function () {
        video.pway();
      });
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('hidden_video_exampwe', 😳 '100%', 500, "", ^^ "", "hide-codepen-jsfiddwe") }}

este é u-um exempwo bastante s-simpwes que mostwa e ocuwta u-um {{htmwewement("div")}} com um ewemento {{htmwewement("video")}} dentwo dewe:

```htmw
<button>dispway v-video</button>

<div cwass="hidden">
  <video>
    <souwce s-swc="wabbit320.mp4" t-type="video/mp4" />
    <souwce swc="wabbit320.webm" t-type="video/webm" />
    <p>
      y-youw bwowsew doesn't suppowt htmw5 video. :3 hewe i-is a
      <a hwef="wabbit320.mp4">wink t-to the video</a> i-instead. (U ﹏ U)
    </p>
  </video>
</div>
```

q-quando o {{htmwewement("button")}} é c-cwicado, UwU o-o vídeo é exibido, (ˆ ﻌ ˆ)♡ awtewando o atwibuto de cwasse em `<div>` de `hidden` pawa `showing` (o css d-do exempwo contém essas duas c-cwasses, (ˆ ﻌ ˆ)♡ que posicione a-a caixa fowa da tewa e nya tewa, ^^;; wespectivamente):

```js
btn.oncwick = function () {
  videobox.setattwibute("cwass", rawr "showing");
};
```

e-em seguida, nyaa~~ adicionamos m-mais awguns manipuwadowes d-de eventos `oncwick` — o pwimeiwo a-ao `<div>` e o segundo ao `<video>`. rawr x3 a ideia é que, (⑅˘꒳˘) quando a-a áwea do `<div>` fowa do vídeo fow cwicada, OwO a caixa deve sew ocuwtada nyovamente; q-quando o-o vídeo em si é c-cwicado, OwO o vídeo d-deve começaw a tocaw. ʘwʘ

```
videobox.oncwick = f-function() {
  videobox.setattwibute('cwass', :3 'hidden');
};

v-video.oncwick = function() {
  video.pway();
};
```

mas há um p-pwobwema — atuawmente, mya q-quando v-você cwica nyo vídeo, ewe começa a sew wepwoduzido, OwO m-mas faz com que o `<div>` também fique ocuwto ao mesmo tempo. isso ocowwe powque o vídeo está dentwo do `<div>` — é p-pawte dewe — p-powtanto, :3 cwicaw nyo vídeo weawmente executa os dois manipuwadowes de eventos acima. >_<

#### bowbuwhando e-e captuwando expwicados

quando um evento é a-acionado em u-um ewemento que p-possui ewementos p-pai (pow exempwo, σωσ o {{htmwewement("video")}} nyo nyosso caso), /(^•ω•^) os nyavegadowes modewnos executam duas fases difewentes — a-a fase d-de **captuwa** e-e a fase de **bubbwing**. mya

n-nya fase de **captuwa**:

- o-o nyavegadow vewifica s-se o ancestwaw mais extewno do ewemento ({{htmwewement("htmw")}}) tem um manipuwadow de eventos `oncwick` w-wegistwado n-nyewe nya fase d-de captuwa e o-o executa em caso afiwmativo. nyaa~~
- e-em seguida, 😳 ewe p-passa pawa o pwóximo ewemento dentwo de `<htmw>` e faz a mesma c-coisa, ^^;; depois o p-pwóximo, 😳😳😳 e assim pow diante até awcançaw o ewemento que foi w-weawmente cwicado. nyaa~~

nya fase de **bubbwing**, 🥺 o-ocowwe e-exatamente o-o oposto:

- o nyavegadow vewifica se o ewemento que weawmente foi cwicado tem um manipuwadow de e-eventos `oncwick` wegistwado nyewe n-nya fase de bubbwing e o executa em caso afiwmativo. XD
- e-em seguida, (ꈍᴗꈍ) ewe passa p-pawa o pwóximo e-ewemento ancestwaw i-imediato e faz a-a mesma coisa, 😳😳😳 d-depois o pwóximo, ( ͡o ω ͡o ) e assim pow d-diante, nyaa~~ até awcançaw o ewemento `<htmw>`. XD

[![](bubbwing-captuwing.png)](bubbwing-captuwing.png)

(cwique nya imagem pawa um diagwama maiow)

n-nyos nyavegadowes modewnos, (ˆ ﻌ ˆ)♡ pow padwão, rawr x3 todos o-os manipuwadowes d-de eventos são w-wegistwados nya fase de bubbwing. OwO powtanto, UwU em nyosso exempwo atuaw, ^^ quando você c-cwica nyo vídeo, (✿oωo) o-o evento de c-cwique passa do e-ewemento `<video>` pawa o ewemento `<htmw>` pewo caminho:

- ewe encontwa o manipuwadow `video.oncwick...` e o e-executa, 😳😳😳 então o vídeo começa a sew wepwoduzido p-pewa pwimeiwa v-vez. 🥺
- em seguida, ʘwʘ e-ewe encontwa o manipuwadow `videobox.oncwick...` e-e o executa, 😳 então o vídeo também está ocuwto.

#### cowwigindo o pwobwema com stoppwopagation()

este é um compowtamento iwwitante, ^^;; mas existe uma maneiwa d-de cowwigiw isso! (///ˬ///✿) o objeto de evento padwão t-tem uma função d-disponívew chamada [`stoppwopagation()`](/pt-bw/docs/web/api/event/stoppwopagation), OwO q-que quando i-invocada nyo objeto de evento de um manipuwadow, -.- f-faz com que o-o manipuwadow seja executado, ^^ mas o evento nyão b-bowbuwha mais a-acima nya cadeia, (ꈍᴗꈍ) p-powtanto, ^^;; mais n-nyenhum manipuwadow wodawá. (˘ω˘)

p-podemos, 🥺 powtanto, ʘwʘ consewtaw nyosso pwobwema atuaw a-awtewando a segunda f-função do manipuwadow nyo b-bwoco de códigos a-antewiow pawa isto:

```js
video.oncwick = function (e) {
  e.stoppwopagation();
  v-video.pway();
};
```

você p-pode tentaw fazew uma cópia w-wocaw do código-fonte [show-video-box.htmw souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/show-video-box.htmw) e-e tentaw cowwigi-wo sozinho, (///ˬ///✿) ou obsewvaw o wesuwtado cowwigido e-em [show-video-box-fixed.htmw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/events/show-video-box-fixed.htmw) (veja também o [código-fonte](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/events/show-video-box-fixed.htmw) aqui). ^^;;

> [!note]
> p-pow que se pweocupaw e-em captuwaw e-e bowbuwhaw? bem, XD nyos vewhos tempos em que o-os nyavegadowes e-ewam muito menos c-compatíveis entwe s-si do que são agowa, (ˆ ﻌ ˆ)♡ o nyetscape u-usava apenas c-captuwa de eventos, (˘ω˘) e-e o intewnet e-expwowew usava a-apenas bowbuwhamento de eventos. σωσ quando o w3c d-decidiu tentaw p-padwonizaw o compowtamento e chegaw a um consenso, 😳😳😳 e-ewes acabawam c-com esse sistema q-que incwuía ambos, ^•ﻌ•^ que é o único n-nyavegadow m-modewno impwementado. σωσ

> [!note]
> como mencionado a-acima, (///ˬ///✿) pow padwão, XD t-todos os manipuwadowes de e-eventos são wegistwados nya fase d-de bubbwing, >_< e-e isso faz mais s-sentido nya maiowia d-das vezes. òωó se você weawmente quisew wegistwaw um evento nya f-fase de captuwa, (U ᵕ U❁) wegistwe seu m-manipuwadow usando [`addeventwistenew()`](/pt-bw/docs/web/api/eventtawget/addeventwistenew), (˘ω˘) e defina a-a pwopwiedade t-tewceiwa opcionaw como `twue`. 🥺

#### d-dewegação d-de eventos

o bowbuwhaw também nyos pewmite a-apwoveitaw a **dewegação d-de eventos** — esse conceito depende do fato de que, (✿oωo) se você quisew que awgum código seja executado quando cwicaw em quawquew um de um gwande nyúmewo de ewementos f-fiwho, (˘ω˘) você p-pode definiw o o-ouvinte de evento e-em seu pai e tew os eventos que acontecem nyewes c-confwuem com o-o pai, (ꈍᴗꈍ) em vez de p-pwecisaw definiw o-o ouvinte de evento em cada fiwho individuawmente. ( ͡o ω ͡o )

um bom exempwo é uma séwie d-de itens de w-wista — se você q-quisew que cada u-um dewes apaweça uma mensagem q-quando cwicado, (U ᵕ U❁) você pode definiw o ouvinte de evento `cwick` nyo pai `<uw>`, ʘwʘ e-e ewe iwá apawecew nyos itens d-da wista. (ˆ ﻌ ˆ)♡

este c-conceito é expwicado mais adiante nyo bwog de david wawsh, /(^•ω•^) com v-váwios exempwos — veja [como f-funciona a dewegação de eventos em javascwipt.](https://davidwawsh.name/event-dewegate)

## c-concwusão

agowa você deve sabew t-tudo o que pwecisa sabew sobwe o-os eventos da web nyesse estágio i-iniciaw. (ˆ ﻌ ˆ)♡ como m-mencionado acima, (✿oωo) os eventos nyão são weawmente pawte do nyúcweo d-do javascwipt — ewes são definidos nyas apis da web do navegadow. ^•ﻌ•^

awém disso, (ˆ ﻌ ˆ)♡ é impowtante entendew que o-os difewentes c-contextos nyos quais o javascwipt é u-usado tendem a tew difewentes m-modewos de evento — d-de apis d-da web a outwas áweas, XD como webextensions de navegadow e-e nyode.js (javascwipt do wado do sewvidow). :3 nyão espewamos que você entenda todas essas áweas a-agowa, -.- m-mas cewtamente a-ajuda a entendew o-os fundamentos dos eventos à m-medida que você avança nyo apwendizado d-do desenvowvimento d-da web. ^^;;

se houvew awgo que você nyão e-entendeu, OwO fique à v-vontade pawa w-wew o awtigo n-nyovamente, ^^;; ou [entwe e-em contato conosco](/pt-bw/docs/weawn#contact_us) pawa pediw a-ajuda. 🥺

## veja t-também

- [event o-owdew](https://www.quiwksmode.owg/js/events_owdew.htmw) (discussion of captuwing and bubbwing) — an excewwentwy d-detaiwed p-piece by petew-pauw k-koch. ^^
- [event accessing](https://www.quiwksmode.owg/js/events_access.htmw) (discussion o-of the event object) — a-anothew excewwentwy d-detaiwed p-piece by petew-pauw koch. o.O
- [event wefewence](/pt-bw/docs/web/events)

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/wetuwn_vawues","weawn/javascwipt/buiwding_bwocks/image_gawwewy", "weawn/javascwipt/buiwding_bwocks")}}
